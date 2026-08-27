(function executeRule(current) {
    var prefix = 'x_2166123_rob_auth_'
    var supportedTables = {
        sn_hr_core_case_payroll: true,
        sn_hr_core_case_workforce_admin: true,
    }
    function listValues(value) {
        var values = String(value || '').split(',')
        var result = []
        var seen = {}
        var index

        for (index = 0; index < values.length; index += 1) {
            var item = String(values[index] || '').trim()
            if (item && !seen[item]) {
                seen[item] = true
                result.push(item)
            }
        }

        result.sort()
        return result
    }

    function sameValues(left, right) {
        return listValues(left).join(',') === listValues(right).join(',')
    }

    function isTrue(value) {
        return value === true || value === '1' || value === 'true'
    }

    function activeConfiguration() {
        var records = []
        var configuration = new GlideRecord('x_2166123_rob_auth_rob_config')
        configuration.addQuery('active', true)
        configuration.setLimit(2)
        configuration.query()

        while (configuration.next()) {
            var graceWindowValue = String(
                configuration.getValue('mid_cycle_grace_window_days') || ''
            ).trim()
            records.push({
                currentAcceptedFormVersion: String(
                    configuration.getValue('current_accepted_form_version') || ''
                ),
                annualRecertificationDate: String(
                    configuration.getValue('agency_annual_recertification_date') || ''
                ),
                graceWindowDays: graceWindowValue
                    ? Number(graceWindowValue)
                    : -1,
            })
        }

        return records
    }

    function requestedAccessContext(requestedItems) {
        var requested = listValues(requestedItems)
        var found = {}
        var requirements = {
            requestedAccess: requested,
            invalidAccessItems: [],
            requiresAccessEndDate: false,
            includesWpc: false,
        }

        if (requested.length) {
            var accessItem = new GlideRecord('x_2166123_rob_auth_rob_access')
            accessItem.addQuery('sys_id', 'IN', requested.join(','))
            accessItem.query()

            while (accessItem.next()) {
                var accessItemId = String(accessItem.getUniqueValue() || '')
                found[accessItemId] = true

                if (!isTrue(accessItem.getValue('active'))) {
                    requirements.invalidAccessItems.push(accessItemId)
                }
                if (isTrue(accessItem.getValue('requires_access_end_date'))) {
                    requirements.requiresAccessEndDate = true
                }
                if (
                    accessItem.getValue('form_1768_mapping') === 'wpc' ||
                    isTrue(accessItem.getValue('requires_operations_manager_task'))
                ) {
                    requirements.includesWpc = true
                }
            }
        }

        var index
        for (index = 0; index < requested.length; index += 1) {
            if (!found[requested[index]]) {
                requirements.invalidAccessItems.push(requested[index])
            }
        }

        requirements.invalidAccessItems = listValues(
            requirements.invalidAccessItems.join(',')
        )
        return requirements
    }

    function authorizationAccess(authorizationId) {
        var access = []
        var detail = new GlideRecord('x_2166123_rob_auth_auth_detail')
        detail.addQuery('rob_authorization_form', authorizationId)
        detail.addQuery('status', 'NOT IN', 'denied,revoked')
        detail.query()

        while (detail.next()) {
            var accessItemId = String(detail.getValue('access_item') || '')
            if (accessItemId) access.push(accessItemId)
        }

        return listValues(access.join(','))
    }

    function isDecisionHistoryStatus(status) {
        return {
            active: true,
            expired: true,
            lapsed: true,
            revoked: true,
            obsolete_version: true,
        }[String(status || '')] === true
    }

    function annualRenewalDisposition(authorizations, evaluationDate) {
        var active = []
        var index

        for (index = 0; index < authorizations.length; index += 1) {
            if (authorizations[index].status === 'active') {
                active.push(authorizations[index])
            }
        }

        if (active.length !== 1) return 'unknown'

        var expirationDate = String(active[0].expirationDate || '')
        if (
            !/^\d{4}-\d{2}-\d{2}$/.test(expirationDate) ||
            !/^\d{4}-\d{2}-\d{2}$/.test(evaluationDate)
        ) {
            return 'unknown'
        }

        return expirationDate <= evaluationDate
    }

    function subjectAuthorizations(subjectId) {
        var records = []
        var authorization = new GlideRecord('x_2166123_rob_auth_rob_auth')
        authorization.addQuery('subject_person', subjectId)
        authorization.orderByDesc('sys_created_on')
        authorization.query()

        while (authorization.next()) {
            var authorizationStatus = String(
                authorization.getValue('status') || ''
            )
            records.push({
                id: String(authorization.getUniqueValue() || ''),
                subjectId: String(authorization.getValue('subject_person') || ''),
                status: authorizationStatus,
                formVersion: String(authorization.getValue('form_version') || ''),
                expirationDate: String(authorization.getValue('expiration_date') || ''),
                organization: String(authorization.getValue('organization') || ''),
                position: String(authorization.getValue('position_title') || ''),
                businessJustification: String(
                    authorization.getValue('business_justification') || ''
                ),
                authorizedAccess: authorizationAccess(
                    authorization.getUniqueValue()
                ),
                applicable: isDecisionHistoryStatus(authorizationStatus),
            })
        }

        return records
    }

    function duplicateOpenCase(subjectId, requestedItems) {
        var tables = [
            'sn_hr_core_case_payroll',
            'sn_hr_core_case_workforce_admin',
        ]
        var tableIndex

        for (tableIndex = 0; tableIndex < tables.length; tableIndex += 1) {
            var candidate = new GlideRecord(tables[tableIndex])
            candidate.addQuery('sys_id', '!=', current.getUniqueValue())
            candidate.addQuery('subject_person', subjectId)
            candidate.addQuery('active', true)
            candidate.addNotNullQuery(prefix + 'requested_items')
            candidate.query()

            while (candidate.next()) {
                if (
                    sameValues(
                        candidate.getValue(prefix + 'requested_items'),
                        requestedItems
                    )
                ) {
                    return String(candidate.getUniqueValue() || '')
                }
            }
        }

        return ''
    }

    function materialDisposition(currentValue, historicalValue) {
        if (!String(currentValue || '').trim() || !String(historicalValue || '').trim()) {
            return 'unknown'
        }
        if (String(currentValue) === String(historicalValue)) {
            return 'unchanged'
        }

        // DEC-MAP-01/02 do not yet define which unequal values constitute an
        // approved material change. Preserve the mismatch as unknown.
        return 'unknown'
    }

    function materialContext(profileContext, businessJustification, authorizations) {
        var applicable = null
        var index

        for (index = 0; index < authorizations.length; index += 1) {
            if (authorizations[index].status === 'active') {
                if (applicable) {
                    return {
                        organization: 'unknown',
                        position: 'unknown',
                        businessJustification: 'unknown',
                    }
                }
                applicable = authorizations[index]
            }
        }

        if (!applicable) {
            return {
                organization: 'unknown',
                position: 'unknown',
                businessJustification: 'unknown',
            }
        }

        return {
            organization: materialDisposition(
                profileContext.organizationId || profileContext.organization,
                applicable.organization
            ),
            position: materialDisposition(
                profileContext.position,
                applicable.position
            ),
            businessJustification: materialDisposition(
                businessJustification,
                applicable.businessJustification
            ),
        }
    }

    var tableName = String(current.getTableName() || '')
    if (!supportedTables[tableName]) return

    var requestedItems = String(
        current.getValue(prefix + 'requested_items') || ''
    )
    if (!requestedItems.trim()) return

    if (
        isTrue(current.getValue(prefix + 'authorization_processing_blocked')) ||
        current.getValue(prefix + 'decision_evaluated_at')
    ) {
        return
    }

    var subjectId = String(
        current.getValue('subject_person') || current.getValue('opened_for') || ''
    )
    var accessContext = requestedAccessContext(requestedItems)
    var profileContext = new RobProfileAuthorizationContext().resolveFromCase(
        current
    )
    var authorizations = subjectAuthorizations(subjectId)
    var businessJustification = String(
        current.getValue('rich_description') || ''
    )
    var evaluationDate = new GlideDateTime().getValue().substring(0, 10)
    var context = {
        request: {
            subjectId: subjectId,
            requestedAccess: accessContext.requestedAccess,
            businessJustification: businessJustification,
            authorizationContext: {
                valid: profileContext.valid === true,
                supervisorId: String(profileContext.supervisorId || ''),
                position: String(profileContext.position || ''),
                organization: String(
                    profileContext.organizationId ||
                        profileContext.organization ||
                        ''
                ),
            },
            employmentType: String(
                current.getValue(prefix + 'employment_type') || ''
            ),
            requiresAccessEndDate: accessContext.requiresAccessEndDate,
            accessEndDate: String(
                current.getValue(prefix + 'access_end_date') || ''
            ),
            includesWpc: accessContext.includesWpc,
            operationsManagerId: String(
                current.getValue(prefix + 'operations_manager') || ''
            ),
            invalidAccessItems: accessContext.invalidAccessItems,
        },
        configuration: activeConfiguration(),
        evaluationDate: evaluationDate,
        authorizations: authorizations,
        // Use the governed Authorization expiration date as the deterministic
        // annual-renewal boundary. Missing or ambiguous active history remains
        // unknown and is blocked by the committed decision service.
        annualRenewalDue: annualRenewalDisposition(
            authorizations,
            evaluationDate
        ),
        materialContext: materialContext(
            profileContext,
            businessJustification,
            authorizations
        ),
        duplicateOpenCaseId: duplicateOpenCase(subjectId, requestedItems),
    }
    var decisionModule = require(
        './src/server/authorization/AuthorizationDecisionService.js'
    )
    var decision = decisionModule.evaluate(context)
    var persisted = new sn_hr_core.RobHrCasePersistenceBridge().setRobDecision(
        current,
        JSON.stringify(decision)
    )

    if (!persisted) {
        gs.addErrorMessage(
            'The ROB authorization decision could not be persisted by HR Core.'
        )
    }
})(current)
