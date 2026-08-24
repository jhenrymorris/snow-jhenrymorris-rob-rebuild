(function executeRule(current) {
    if (current.getValue('x_2166123_hr_acc_0_fulfillment_gate_complete') !== '1') {
        return
    }

    var decision = current.getValue('x_2166123_hr_acc_0_authorization_path')
    if (decision !== 'new' && decision !== 'reuse' && decision !== 'amendment' && decision !== 'renewal') {
        return
    }

    var caseId = current.getUniqueValue()
    var details = new GlideRecord('x_2166123_hr_acc_0_auth_detail')
    if (decision === 'reuse') {
        var reusedAuthorization = current.getValue('x_2166123_hr_acc_0_evaluated_authorization')
        if (!reusedAuthorization) {
            return
        }
        details.addQuery('rob_authorization_form', reusedAuthorization)
        details.addQuery(
            'access_item',
            'IN',
            current.getValue('x_2166123_hr_acc_0_requested_items')
        )
    } else {
        details.addQuery('source_hrsd_case', caseId)
        details.addQuery('status', 'pending_fulfillment')
    }
    details.query()

    var staffingItems = []
    var analyticsItems = []
    var operationsManagerItems = []
    var authorizationId = ''

    while (details.next()) {
        var accessItemId = details.getValue('access_item')
        authorizationId = authorizationId || details.getValue('rob_authorization_form')
        if (details.getValue('staffing_task_required_snapshot') === '1') {
            staffingItems.push(accessItemId)
        }
        if (details.getValue('analytics_task_required_snapshot') === '1') {
            analyticsItems.push(accessItemId)
        }
        if (details.getValue('operations_manager_task_required_snapshot') === '1') {
            if (
                details.getValue('provisioning_system_snapshot') !== 'arm' ||
                details.getValue('target_system_snapshot') !== 'oas'
            ) {
                gs.error('ROB fulfillment stopped: OM routing must preserve ARM provisioning and OAS target.')
                return
            }
            operationsManagerItems.push(accessItemId)
        }
    }

    function unique(values) {
        var result = []
        for (var index = 0; index < values.length; index += 1) {
            if (values[index] && result.indexOf(values[index]) < 0) {
                result.push(values[index])
            }
        }
        return result
    }

    staffingItems = unique(staffingItems)
    analyticsItems = unique(analyticsItems)
    operationsManagerItems = unique(operationsManagerItems)

    var configuration = new GlideRecord('x_2166123_hr_acc_0_rob_config')
    configuration.addQuery('active', true)
    configuration.setLimit(2)
    configuration.query()
    if (!configuration.next()) {
        return
    }
    var configurationId = configuration.getUniqueValue()
    if (configuration.next()) {
        gs.error('ROB fulfillment stopped: multiple active ROB Configuration records exist.')
        return
    }
    configuration.get(configurationId)

    function addDueDate(task, days) {
        if (days === '' || days === null) return
        var parsedDays = parseInt(days, 10)
        if (isNaN(parsedDays) || parsedDays < 0) return
        var dueDate = new GlideDateTime()
        dueDate.addDaysUTC(parsedDays)
        task.setValue('due_date', dueDate)
    }

    function ensureTask(taskType, accessItems, options) {
        var businessKey = caseId + ':' + taskType
        var existing = new GlideRecord('sn_hr_core_task')
        existing.addQuery('parent', caseId)
        existing.addQuery('x_2166123_hr_acc_0_rob_task_type', taskType)
        existing.setLimit(1)
        existing.query()
        if (existing.next()) return

        var task = new GlideRecord('sn_hr_core_task')
        task.initialize()
        task.setValue('parent', caseId)
        task.setValue('x_2166123_hr_acc_0_rob_task_type', taskType)
        task.setValue('x_2166123_hr_acc_0_fulfillment_business_key', businessKey)
        task.setValue('x_2166123_hr_acc_0_related_authorization', authorizationId)
        task.setValue('x_2166123_hr_acc_0_rob_access_items', accessItems.join(','))
        task.setValue('short_description', options.shortDescription)
        task.setValue('description', options.description)
        if (options.assignmentGroup) task.setValue('assignment_group', options.assignmentGroup)
        if (options.assignedTo) task.setValue('assigned_to', options.assignedTo)
        if (options.provisioningSystem) {
            task.setValue('x_2166123_hr_acc_0_external_provisioning_system', options.provisioningSystem)
        }
        if (options.targetSystem) {
            task.setValue('x_2166123_hr_acc_0_external_target_system', options.targetSystem)
        }
        if (options.exceptionReason) {
            task.setValue('x_2166123_hr_acc_0_exception_reason', options.exceptionReason)
        }
        addDueDate(task, options.dueDays)
        task.insert()
    }

    if (staffingItems.length) {
        ensureTask('staffing_fulfillment', staffingItems, {
            shortDescription: 'Complete Staffing ROB access fulfillment',
            description: 'Complete the grouped Staffing-owned access work and record privacy-safe completion evidence.',
            assignmentGroup: configuration.getValue('default_staffing_assignment_group'),
        })
    }

    if (analyticsItems.length) {
        ensureTask('analytics_fulfillment', analyticsItems, {
            shortDescription: 'Complete Analytics ROB access fulfillment',
            description: 'Complete the grouped Analytics-owned access work and record privacy-safe completion evidence.',
            assignmentGroup: configuration.getValue('default_analytics_assignment_group'),
        })
    }

    if (operationsManagerItems.length) {
        var operationsManager = current.getValue('x_2166123_hr_acc_0_operations_manager')
        if (operationsManager) {
            ensureTask('operations_manager_arm_assignment', operationsManagerItems, {
                shortDescription: 'Complete Operations Manager ARM role assignment',
                description: 'Complete the ARM role assignment for Workforce Profile Charts targeting OAS and record completion evidence.',
                assignedTo: operationsManager,
                dueDays: configuration.getValue('operations_manager_task_due_days'),
                provisioningSystem: 'arm',
                targetSystem: 'oas',
            })
        } else {
            ensureTask('exception_review', operationsManagerItems, {
                shortDescription: 'Review missing Operations Manager for WPC fulfillment',
                description: 'Resolve the missing Operations Manager. Do not mark OM work complete or close the parent while unresolved.',
                assignmentGroup: configuration.getValue('default_exception_review_group'),
                dueDays: configuration.getValue('exception_task_due_days'),
                exceptionReason: 'MISSING_OPERATIONS_MANAGER',
            })
        }
    }
})(current)
