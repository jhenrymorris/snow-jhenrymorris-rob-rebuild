var RobHrFulfillmentBridgeV2 = Class.create()
RobHrFulfillmentBridgeV2.prototype = {
    initialize: function () {},

    _caseTables: {
        sn_hr_core_case_payroll: true,
        sn_hr_core_case_workforce_admin: true,
    },

    _taskTypes: {
        staffing_fulfillment: true,
        analytics_fulfillment: true,
        operations_manager_arm_assignment: true,
        exception_review: true,
    },

    _sysId: function (value) {
        value = String(value || '')
        return /^[0-9a-f]{32}$/.test(value) ? value : ''
    },

    _reject: function (operation, code) {
        gs.error('ROB fulfillment bridge rejected ' + operation + ': ' + code)
        return false
    },

    _validCase: function (caseRecord) {
        return Boolean(
            caseRecord &&
                typeof caseRecord.getTableName === 'function' &&
                this._caseTables[String(caseRecord.getTableName() || '')] &&
                this._sysId(caseRecord.getUniqueValue()) &&
                caseRecord.isValidRecord()
        )
    },

    _activeGroup: function (groupId) {
        groupId = this._sysId(groupId)
        if (!groupId) return false
        var group = new GlideRecord('sys_user_group')
        return group.get(groupId) && group.getValue('active') === '1'
    },

    _activeUser: function (userId) {
        userId = this._sysId(userId)
        if (!userId) return false
        var user = new GlideRecord('sys_user')
        return user.get(userId) && user.getValue('active') === '1'
    },

    _list: function (values) {
        if (!(values instanceof Array) || !values.length) return ''
        var seen = {}
        var result = []
        for (var index = 0; index < values.length; index += 1) {
            var value = this._sysId(values[index])
            if (!value || seen[value]) continue
            seen[value] = true
            result.push(value)
        }
        return result.sort().join(',')
    },

    _dueDate: function (days) {
        if (days === null || days === undefined || days === '') return ''
        var parsed = parseInt(days, 10)
        if (isNaN(parsed) || parsed < 0 || parsed > 365) return null
        var due = new GlideDateTime()
        due.addDaysUTC(parsed)
        return due
    },

    _existingTask: function (businessKey) {
        var existing = new GlideRecord('sn_hr_core_task')
        existing.addQuery('x_2166123_rob_auth_fulfillment_business_key', businessKey)
        existing.setLimit(1)
        existing.query()
        return existing.next() ? String(existing.getUniqueValue()) : ''
    },

    createTasks: function (caseRecord, serializedPlans) {
        if (!this._validCase(caseRecord)) return this._reject('create', 'INVALID_CASE')
        if (caseRecord.getValue('x_2166123_rob_auth_fulfillment_gate_complete') !== '1') {
            return this._reject('create', 'FULFILLMENT_GATE_CLOSED')
        }
        if (caseRecord.getValue('x_2166123_rob_auth_authorization_processing_blocked') === '1') {
            return this._reject('create', 'AUTHORIZATION_BLOCKED')
        }

        var plans
        try {
            plans = JSON.parse(String(serializedPlans || ''))
        } catch (error) {
            return this._reject('create', 'MALFORMED_PAYLOAD')
        }
        if (!(plans instanceof Array) || plans.length > 4) {
            return this._reject('create', 'INVALID_PLAN_COUNT')
        }

        var caseId = String(caseRecord.getUniqueValue())
        var created = []
        for (var index = 0; index < plans.length; index += 1) {
            var plan = plans[index] || {}
            var type = String(plan.taskType || '')
            var businessKey = caseId + ':' + type
            var authorizationId = this._sysId(plan.relatedAuthorizationId)
            var accessItems = this._list(plan.accessItemIds)
            var assignmentGroupId = this._sysId(plan.assignmentGroupId)
            var assignedToId = this._sysId(plan.assignedToId)
            var dueDate = this._dueDate(plan.dueDays)

            if (!this._taskTypes[type] || String(plan.businessKey || '') !== businessKey) {
                return this._reject('create', 'INVALID_TASK_IDENTITY')
            }
            if (!authorizationId || !accessItems || dueDate === null) {
                return this._reject('create', 'INVALID_TASK_REFERENCES')
            }
            if (type === 'operations_manager_arm_assignment') {
                if (
                    !this._activeUser(assignedToId) ||
                    !dueDate ||
                    String(plan.provisioningSystem || '') !== 'arm' ||
                    String(plan.targetSystem || '') !== 'oas'
                ) {
                    return this._reject('create', 'INVALID_OPERATIONS_MANAGER_ROUTE')
                }
            } else if (!this._activeGroup(assignmentGroupId)) {
                return this._reject('create', 'INVALID_ASSIGNMENT_GROUP')
            }
            if (type === 'exception_review' && !dueDate) {
                return this._reject('create', 'EXCEPTION_DUE_DATE_REQUIRED')
            }
            if (
                type === 'exception_review' &&
                String(plan.exceptionReason || '') !== 'MISSING_OPERATIONS_MANAGER'
            ) {
                return this._reject('create', 'INVALID_EXCEPTION_REASON')
            }

            var existingId = this._existingTask(businessKey)
            if (existingId) {
                created.push({ businessKey: businessKey, taskId: existingId, created: false })
                continue
            }

            var task = new GlideRecord('sn_hr_core_task')
            task.initialize()
            task.parent = caseId
            task.x_2166123_rob_auth_rob_task_type = type
            task.x_2166123_rob_auth_fulfillment_business_key = businessKey
            task.x_2166123_rob_auth_related_authorization = authorizationId
            task.x_2166123_rob_auth_rob_access_items = accessItems
            task.short_description = this._shortDescription(type)
            task.description = this._description(type)
            if (assignmentGroupId) task.assignment_group = assignmentGroupId
            if (assignedToId) task.assigned_to = assignedToId
            if (dueDate) task.due_date = dueDate
            if (type === 'operations_manager_arm_assignment') {
                task.x_2166123_rob_auth_external_provisioning_system = 'arm'
                task.x_2166123_rob_auth_external_target_system = 'oas'
            }
            if (type === 'exception_review') {
                task.x_2166123_rob_auth_exception_reason = 'MISSING_OPERATIONS_MANAGER'
            }
            var taskId = String(task.insert() || '')
            if (!this._sysId(taskId)) return this._reject('create', 'INSERT_FAILED')
            created.push({ businessKey: businessKey, taskId: taskId, created: true })
        }
        return JSON.stringify({ ok: true, tasks: created })
    },

    blockMissingOperationsManager: function (caseRecord) {
        if (!this._validCase(caseRecord)) return this._reject('block', 'INVALID_CASE')
        if (caseRecord.getValue('x_2166123_rob_auth_fulfillment_gate_complete') !== '1') {
            return this._reject('block', 'FULFILLMENT_GATE_CLOSED')
        }

        var caseId = String(caseRecord.getUniqueValue())
        var exception = new GlideRecord('sn_hr_core_task')
        exception.addQuery('parent', caseId)
        exception.addQuery(
            'x_2166123_rob_auth_fulfillment_business_key',
            caseId + ':exception_review'
        )
        exception.addQuery('x_2166123_rob_auth_rob_task_type', 'exception_review')
        exception.addQuery(
            'x_2166123_rob_auth_exception_reason',
            'MISSING_OPERATIONS_MANAGER'
        )
        exception.setLimit(1)
        exception.query()
        if (!exception.hasNext()) return this._reject('block', 'EXCEPTION_TASK_REQUIRED')

        caseRecord.x_2166123_rob_auth_exception_review_required = '1'
        caseRecord.x_2166123_rob_auth_exception_reason = 'missing_operations_manager'
        caseRecord.x_2166123_rob_auth_authorization_processing_blocked = '1'
        return Boolean(caseRecord.update())
    },

    _shortDescription: function (type) {
        return {
            staffing_fulfillment: 'Complete Staffing ROB access fulfillment',
            analytics_fulfillment: 'Complete Analytics ROB access fulfillment',
            operations_manager_arm_assignment: 'Complete Operations Manager ARM role assignment',
            exception_review: 'Review missing Operations Manager for WPC fulfillment',
        }[type]
    },

    _description: function (type) {
        return {
            staffing_fulfillment: 'Complete the grouped Staffing-owned access work and record privacy-safe completion evidence.',
            analytics_fulfillment: 'Complete the grouped Analytics-owned access work and record privacy-safe completion evidence.',
            operations_manager_arm_assignment: 'Complete the ARM role assignment for Workforce Profile Charts targeting OAS and record completion evidence.',
            exception_review: 'Resolve the missing Operations Manager. Do not mark normal OM work complete or close the parent while unresolved.',
        }[type]
    },

    _authorizedFulfiller: function (taskRecord) {
        var userId = String(gs.getUserID() || '')
        if (userId && taskRecord.getValue('assigned_to') === userId) return true
        var groupId = String(taskRecord.getValue('assignment_group') || '')
        if (!userId || !groupId) return false
        var membership = new GlideRecord('sys_user_grmember')
        membership.addQuery('user', userId)
        membership.addQuery('group', groupId)
        membership.setLimit(1)
        membership.query()
        return membership.hasNext()
    },

    validateTaskCompletion: function (taskRecord) {
        if (
            !taskRecord ||
            String(taskRecord.getTableName() || '') !== 'sn_hr_core_task' ||
            !this._sysId(taskRecord.getUniqueValue())
        ) {
            return this._reject('complete', 'INVALID_TASK')
        }
        var type = String(taskRecord.getValue('x_2166123_rob_auth_rob_task_type') || '')
        var parentId = this._sysId(taskRecord.getValue('parent'))
        var businessKey = String(taskRecord.getValue('x_2166123_rob_auth_fulfillment_business_key') || '')
        if (!this._taskTypes[type] || !parentId || businessKey !== parentId + ':' + type) {
            return this._reject('complete', 'INVALID_TASK_IDENTITY')
        }
        var parent = taskRecord.parent.getRefRecord()
        if (!this._validCase(parent) || !this._authorizedFulfiller(taskRecord)) {
            return this._reject('complete', 'UNAUTHORIZED_OR_INVALID_PARENT')
        }
        if (String(taskRecord.getValue('state')) !== '3') {
            return this._reject('complete', 'UNSUPPORTED_TERMINAL_STATE')
        }
        var outcome = String(taskRecord.getValue('x_2166123_rob_auth_fulfillment_outcome') || '')
        var evidence = String(taskRecord.getValue('x_2166123_rob_auth_completion_evidence') || '').trim()
        var closeNotes = String(taskRecord.getValue('close_notes') || '').trim()
        if (!evidence || !closeNotes) return this._reject('complete', 'EVIDENCE_REQUIRED')
        if (outcome !== 'provisioning_completed' && outcome !== 'waived') {
            return this._reject('complete', 'INVALID_OUTCOME')
        }
        if (
            outcome === 'provisioning_completed' &&
            taskRecord.getValue('x_2166123_rob_auth_provisioning_completed') !== '1'
        ) {
            return this._reject('complete', 'PROVISIONING_NOT_CONFIRMED')
        }
        if (outcome === 'waived') {
            if (!gs.hasRole('x_2166123_rob_auth.rob_admin')) {
                return this._reject('complete', 'WAIVER_NOT_AUTHORIZED')
            }
            var waiverReason = String(taskRecord.getValue('x_2166123_rob_auth_waiver_reason') || '').trim()
            if (!waiverReason) return this._reject('complete', 'WAIVER_REASON_REQUIRED')
            taskRecord.x_2166123_rob_auth_formally_waived = '1'
            taskRecord.x_2166123_rob_auth_waived_by = gs.getUserID()
            taskRecord.x_2166123_rob_auth_waiver_date_time = new GlideDateTime()
        }
        taskRecord.x_2166123_rob_auth_completion_timestamp = new GlideDateTime()
        return true
    },

    getCaseTaskEvidence: function (caseId) {
        caseId = this._sysId(caseId)
        if (!caseId) return '[]'
        var tasks = new GlideRecord('sn_hr_core_task')
        tasks.addQuery('parent', caseId)
        tasks.addNotNullQuery('x_2166123_rob_auth_rob_task_type')
        tasks.query()
        var result = []
        while (tasks.next()) {
            result.push({
                id: String(tasks.getUniqueValue()),
                taskType: String(tasks.getValue('x_2166123_rob_auth_rob_task_type') || ''),
                relatedAuthorizationId: String(
                    tasks.getValue('x_2166123_rob_auth_related_authorization') || ''
                ),
                accessItemIds: String(
                    tasks.getValue('x_2166123_rob_auth_rob_access_items') || ''
                )
                    .split(',')
                    .filter(Boolean),
                isClosed: String(tasks.getValue('state')) === '3',
                fulfillmentOutcome: String(tasks.getValue('x_2166123_rob_auth_fulfillment_outcome') || ''),
                completionEvidence: String(tasks.getValue('x_2166123_rob_auth_completion_evidence') || ''),
                closeNotes: String(tasks.getValue('close_notes') || ''),
                completionTimestamp: String(tasks.getValue('x_2166123_rob_auth_completion_timestamp') || ''),
                provisioningCompleted: tasks.getValue('x_2166123_rob_auth_provisioning_completed') === '1',
                formallyWaived: tasks.getValue('x_2166123_rob_auth_formally_waived') === '1',
                waiverReason: String(tasks.getValue('x_2166123_rob_auth_waiver_reason') || ''),
                waivedBy: String(tasks.getValue('x_2166123_rob_auth_waived_by') || ''),
                waiverDateTime: String(tasks.getValue('x_2166123_rob_auth_waiver_date_time') || ''),
                authorizedFulfiller: true,
            })
        }
        return JSON.stringify(result)
    },

    closeEligibleCase: function (caseId) {
        caseId = this._sysId(caseId)
        if (!caseId) return this._reject('close', 'INVALID_CASE_ID')
        var parent = new GlideRecord('sn_hr_core_case')
        if (!parent.get(caseId) || !this._caseTables[String(parent.getRecordClassName() || '')]) {
            return this._reject('close', 'UNSUPPORTED_CASE')
        }
        var tasks = new GlideRecord('sn_hr_core_task')
        tasks.addQuery('parent', caseId)
        tasks.addNotNullQuery('x_2166123_rob_auth_rob_task_type')
        tasks.query()
        var found = false
        while (tasks.next()) {
            found = true
            var outcome = String(tasks.getValue('x_2166123_rob_auth_fulfillment_outcome') || '')
            var satisfiedOutcome =
                (outcome === 'provisioning_completed' &&
                    tasks.getValue('x_2166123_rob_auth_provisioning_completed') === '1') ||
                (outcome === 'waived' &&
                    tasks.getValue('x_2166123_rob_auth_formally_waived') === '1')
            if (
                String(tasks.getValue('state')) !== '3' ||
                !tasks.getValue('x_2166123_rob_auth_completion_timestamp') ||
                !tasks.getValue('x_2166123_rob_auth_completion_evidence') ||
                !tasks.getValue('close_notes') ||
                !satisfiedOutcome
            ) {
                return this._reject('close', 'TASKS_NOT_SATISFIED')
            }
        }
        if (!found) return this._reject('close', 'NO_FULFILLMENT_TASKS')
        parent.state = '3'
        parent.close_notes = 'All governed ROB fulfillment requirements completed or formally waived.'
        return Boolean(parent.update())
    },

    type: 'RobHrFulfillmentBridgeV2',
}
