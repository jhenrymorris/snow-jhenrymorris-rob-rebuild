(function executeRule(current) {
    if (
        current.getValue('x_2166123_rob_auth_fulfillment_gate_complete') !== '1' ||
        current.getValue('x_2166123_rob_auth_authorization_processing_blocked') === '1'
    ) {
        return
    }

    var decision = current.getValue('x_2166123_rob_auth_authorization_path')
    if (!({ new: true, reuse: true, amendment: true, renewal: true })[decision]) return

    var caseId = current.getUniqueValue()
    var details = new GlideRecord('x_2166123_rob_auth_auth_detail')
    var requestedAccess = {}
    var reusedAuthorization = ''
    if (decision === 'reuse') {
        reusedAuthorization = current.getValue('x_2166123_rob_auth_evaluated_authorization')
        if (!reusedAuthorization) return
        details.addQuery('rob_authorization_form', reusedAuthorization)
        var requestedItems = String(current.getValue('x_2166123_rob_auth_requested_items') || '').split(',')
        for (var requestedIndex = 0; requestedIndex < requestedItems.length; requestedIndex += 1) {
            if (requestedItems[requestedIndex]) requestedAccess[requestedItems[requestedIndex]] = true
        }
    } else {
        details.addQuery('status', 'pending_fulfillment')
    }
    details.query()

    var buckets = { staffing_fulfillment: [], analytics_fulfillment: [], operations_manager_arm_assignment: [] }
    var authorizationId = ''
    while (details.next()) {
        var accessItemId = details.getValue('access_item')
        if (decision === 'reuse') {
            if (!requestedAccess[accessItemId]) continue
        } else if (details.getValue('source_hrsd_case') !== caseId) {
            continue
        }
        authorizationId = authorizationId || details.getValue('rob_authorization_form')
        if (details.getValue('staffing_task_required_snapshot') === '1') buckets.staffing_fulfillment.push(accessItemId)
        if (details.getValue('analytics_task_required_snapshot') === '1') buckets.analytics_fulfillment.push(accessItemId)
        if (details.getValue('operations_manager_task_required_snapshot') === '1') {
            if (details.getValue('provisioning_system_snapshot') !== 'arm' || details.getValue('target_system_snapshot') !== 'oas') {
                gs.error('ROB fulfillment stopped: OM routing must preserve ARM provisioning and OAS target.')
                return
            }
            buckets.operations_manager_arm_assignment.push(accessItemId)
        }
    }
    if (!authorizationId) return

    var configuration = new GlideRecord('x_2166123_rob_auth_rob_config')
    configuration.addQuery('active', true)
    configuration.setLimit(2)
    configuration.query()
    if (!configuration.next()) {
        gs.error('ROB fulfillment stopped: one active ROB Configuration is required.')
        return
    }
    var configurationId = configuration.getUniqueValue()
    if (configuration.next()) {
        gs.error('ROB fulfillment stopped: multiple active ROB Configuration records exist.')
        return
    }
    configuration.get(configurationId)

    function unique(values) {
        var result = []
        for (var index = 0; index < values.length; index += 1) {
            if (values[index] && result.indexOf(values[index]) < 0) result.push(values[index])
        }
        return result.sort()
    }

    function plan(type, items, options) {
        if (!items.length) return null
        options = options || {}
        return {
            businessKey: caseId + ':' + type,
            taskType: type,
            relatedAuthorizationId: authorizationId,
            accessItemIds: unique(items),
            assignmentGroupId: String(options.assignmentGroupId || ''),
            assignedToId: String(options.assignedToId || ''),
            dueDays: options.dueDays === '' ? null : parseInt(options.dueDays, 10),
            provisioningSystem: String(options.provisioningSystem || ''),
            targetSystem: String(options.targetSystem || ''),
            exceptionReason: String(options.exceptionReason || ''),
        }
    }

    var tasks = []
    var staffing = plan('staffing_fulfillment', buckets.staffing_fulfillment, {
        assignmentGroupId: configuration.getValue('default_staffing_assignment_group'),
    })
    var analytics = plan('analytics_fulfillment', buckets.analytics_fulfillment, {
        assignmentGroupId: configuration.getValue('default_analytics_assignment_group'),
    })
    if (staffing) tasks.push(staffing)
    if (analytics) tasks.push(analytics)

    var omItems = unique(buckets.operations_manager_arm_assignment)
    if (omItems.length) {
        var operationsManager = current.getValue('x_2166123_rob_auth_operations_manager')
        if (operationsManager) {
            tasks.push(plan('operations_manager_arm_assignment', omItems, {
                assignedToId: operationsManager,
                dueDays: configuration.getValue('operations_manager_task_due_days'),
                provisioningSystem: 'arm',
                targetSystem: 'oas',
            }))
        } else {
            tasks.push(plan('exception_review', omItems, {
                assignmentGroupId: configuration.getValue('default_exception_review_group'),
                dueDays: configuration.getValue('exception_task_due_days'),
                exceptionReason: 'MISSING_OPERATIONS_MANAGER',
            }))
        }
    }

    if (!tasks.length) return
    var result = new sn_hr_core.RobHrFulfillmentBridgeV2().createTasks(current, JSON.stringify(tasks))
    if (!result) gs.error('ROB fulfillment task creation was rejected by the HR Core bridge.')
})(current)
