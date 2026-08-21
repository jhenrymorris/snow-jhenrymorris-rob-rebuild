var RobProfileAuthorizationContext = Class.create()
RobProfileAuthorizationContext.prototype = {
    initialize: function () {},

    _isTrue: function (value) {
        return value === true || value === '1' || value === 'true'
    },

    _isActive: function (record) {
        return !record.isValidField('active') || this._isTrue(record.getValue('active'))
    },

    _configuration: function () {
        var configuration = new GlideRecord('x_2108496_hr_acces_rob_config')
        configuration.addQuery('active', true)
        configuration.setLimit(2)
        configuration.query()
        if (!configuration.next()) return null

        var configurationId = configuration.getUniqueValue()
        if (configuration.next()) return null
        if (!configuration.get(configurationId)) return null
        return configuration
    },

    _user: function (userId) {
        var user = new GlideRecord('sys_user')
        if (!userId || !user.get(userId) || !this._isActive(user)) return null
        return user
    },

    _department: function (departmentId) {
        var department = new GlideRecord('cmn_department')
        if (
            !departmentId ||
            !department.get(departmentId) ||
            !this._isActive(department)
        ) {
            return null
        }
        return department
    },

    _profile: function (userId) {
        var profile = new GlideRecord('sn_hr_core_profile')
        profile.addQuery('user', userId)
        profile.orderByDesc('sys_updated_on')
        profile.setLimit(2)
        profile.query()
        if (!profile.next()) return { record: null, ambiguous: false }

        var profileId = profile.getUniqueValue()
        if (profile.next()) return { record: null, ambiguous: true }
        if (!profile.get(profileId)) return { record: null, ambiguous: false }
        return { record: profile, ambiguous: false }
    },

    _position: function (profile) {
        if (!profile) return null
        var positionId = profile.getValue('position')
        var position = new GlideRecord('sn_hr_core_position')
        if (!positionId || !position.get(positionId) || !this._isActive(position)) {
            return null
        }
        return position
    },

    _isApprovedOrganization: function (departmentId, rootId) {
        if (!departmentId || !rootId) return false
        var currentId = String(departmentId)
        var visited = {}
        var depth = 0

        while (currentId && depth < 50 && !visited[currentId]) {
            if (currentId === String(rootId)) return true
            visited[currentId] = true
            var department = this._department(currentId)
            if (!department) return false
            currentId = department.getValue('parent') || ''
            depth += 1
        }
        return false
    },

    _isApprovedSupervisor: function (userId, groupId) {
        var supervisor = this._user(userId)
        if (!supervisor || !groupId) return false

        var group = new GlideRecord('sys_user_group')
        if (!group.get(groupId) || !this._isActive(group)) return false

        var membership = new GlideRecord('sys_user_grmember')
        membership.addQuery('group', groupId)
        membership.addQuery('user', userId)
        membership.setLimit(1)
        membership.query()
        return membership.hasNext()
    },

    _variableValue: function (source, name) {
        try {
            if (!source || !source.variables || !source.variables[name]) return ''
            return String(source.variables[name])
        } catch (error) {
            return ''
        }
    },

    resolveFromCase: function (sourceCase) {
        var subjectId =
            sourceCase.getValue('subject_person') || sourceCase.getValue('opened_for')
        return this.resolve(
            subjectId,
            this._variableValue(
                sourceCase,
                'x_2108496_hr_acces_selected_supervisor'
            ),
            this._variableValue(
                sourceCase,
                'x_2108496_hr_acces_organization_fallback'
            )
        )
    },

    resolve: function (subjectId, selectedSupervisorId, fallbackOrganizationId) {
        var result = {
            valid: false,
            subjectId: String(subjectId || ''),
            position: '',
            positionSource: '',
            organizationId: '',
            organization: '',
            organizationSource: '',
            organizationFallbackUsed: false,
            supervisorId: '',
            supervisorSource: '',
            errors: [],
        }
        var configuration = this._configuration()
        if (!configuration) {
            result.errors.push('PROFILE_CONTEXT_CONFIGURATION_INVALID')
            return result
        }

        var requester = this._user(subjectId)
        if (!requester) {
            result.errors.push('PROFILE_CONTEXT_SUBJECT_INVALID')
            return result
        }

        var profileResult = this._profile(subjectId)
        if (profileResult.ambiguous) {
            result.errors.push('PROFILE_CONTEXT_PROFILE_AMBIGUOUS')
            return result
        }
        var profilePosition = this._position(profileResult.record)

        if (profilePosition) {
            result.position = String(profilePosition.getValue('position') || '').trim()
            if (result.position) result.positionSource = 'hr_profile_position'
        }
        if (
            !result.position &&
            this._isTrue(configuration.getValue('allow_sys_user_title_fallback'))
        ) {
            result.position = String(requester.getValue('title') || '').trim()
            if (result.position) result.positionSource = 'sys_user_title'
        }
        if (!result.position) result.errors.push('PROFILE_CONTEXT_POSITION_UNRESOLVED')

        var automaticOrganizationId = profilePosition
            ? profilePosition.getValue('department')
            : ''
        var automaticOrganizationSource = 'hr_profile_position_department'
        var organization = this._department(automaticOrganizationId)
        if (!organization) {
            automaticOrganizationId = requester.getValue('department') || ''
            automaticOrganizationSource = 'sys_user_department'
            organization = this._department(automaticOrganizationId)
        }

        if (organization) {
            result.organizationId = organization.getUniqueValue()
            result.organization = organization.getDisplayValue()
            result.organizationSource = automaticOrganizationSource
        } else if (fallbackOrganizationId) {
            var rootId = configuration.getValue('approved_organization_root') || ''
            var fallback = this._department(fallbackOrganizationId)
            if (
                fallback &&
                this._isApprovedOrganization(fallbackOrganizationId, rootId)
            ) {
                result.organizationId = fallback.getUniqueValue()
                result.organization = fallback.getDisplayValue()
                result.organizationSource = 'approved_manual_fallback'
                result.organizationFallbackUsed = true
            } else {
                result.errors.push('PROFILE_CONTEXT_ORGANIZATION_FALLBACK_INVALID')
            }
        }
        if (!result.organization) {
            result.errors.push('PROFILE_CONTEXT_ORGANIZATION_UNRESOLVED')
        }

        var supervisorId = String(
            selectedSupervisorId || requester.getValue('manager') || ''
        )
        var supervisorGroupId =
            configuration.getValue('approved_supervisors_group') || ''
        var supervisorIsValid = selectedSupervisorId
            ? this._isApprovedSupervisor(supervisorId, supervisorGroupId)
            : Boolean(this._user(supervisorId))
        if (
            supervisorId &&
            supervisorId !== String(subjectId) &&
            supervisorIsValid
        ) {
            result.supervisorId = supervisorId
            result.supervisorSource = selectedSupervisorId
                ? 'selected_nsf_supervisor'
                : 'profile_manager'
        } else if (supervisorId === String(subjectId)) {
            result.errors.push('PROFILE_CONTEXT_SUPERVISOR_SELF')
        } else {
            result.errors.push('PROFILE_CONTEXT_SUPERVISOR_INVALID')
        }

        result.valid = result.errors.length === 0
        return result
    },

    getSupervisorQualifier: function () {
        var configuration = this._configuration()
        if (!configuration) return 'sys_idISEMPTY'
        var groupId = configuration.getValue('approved_supervisors_group') || ''
        if (!groupId) return 'sys_idISEMPTY'

        var userIds = []
        var membership = new GlideRecord('sys_user_grmember')
        membership.addQuery('group', groupId)
        membership.query()
        while (membership.next()) {
            var userId = membership.getValue('user')
            if (this._user(userId)) userIds.push(userId)
        }
        return userIds.length
            ? 'active=true^sys_idIN' + userIds.join(',')
            : 'sys_idISEMPTY'
    },

    getOrganizationQualifier: function () {
        var configuration = this._configuration()
        if (!configuration) return 'sys_idISEMPTY'
        var rootId = configuration.getValue('approved_organization_root') || ''
        if (!rootId) return 'sys_idISEMPTY'

        var departmentIds = []
        var department = new GlideRecord('cmn_department')
        department.query()
        while (department.next()) {
            var departmentId = department.getUniqueValue()
            if (
                this._isActive(department) &&
                this._isApprovedOrganization(departmentId, rootId)
            ) {
                departmentIds.push(departmentId)
            }
        }
        return departmentIds.length
            ? 'sys_idIN' + departmentIds.join(',')
            : 'sys_idISEMPTY'
    },

    evidenceText: function (context) {
        return [
            'Position source: ' + String(context.positionSource || ''),
            'Organization source: ' + String(context.organizationSource || ''),
            'Organization fallback used: ' +
                (context.organizationFallbackUsed ? 'true' : 'false'),
            'Supervisor source: ' + String(context.supervisorSource || ''),
        ].join('\n')
    },

    type: 'RobProfileAuthorizationContext',
}
