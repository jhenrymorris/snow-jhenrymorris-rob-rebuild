(function executeRule(current) {
    var parentId = String(current.getValue('parent') || '')
    var authorizationId = String(
        current.getValue('x_2166123_rob_auth_related_authorization') || ''
    )
    if (!parentId || !authorizationId) return

    var evidenceJson = new sn_hr_core.RobHrFulfillmentBridgeV2().getCaseTaskEvidence(parentId)
    var taskEvidence
    try {
        taskEvidence = JSON.parse(String(evidenceJson || '[]'))
    } catch (error) {
        gs.error('ROB fulfillment reconciliation stopped: malformed bridge evidence.')
        return
    }

    function taskSatisfied(type, accessItemId) {
        for (var index = 0; index < taskEvidence.length; index += 1) {
            var task = taskEvidence[index]
            var coveredItems = task.accessItemIds || []
            if (typeof coveredItems.indexOf !== 'function') {
                coveredItems = String(coveredItems || '').split(',')
            }
            if (
                task.taskType !== type ||
                task.relatedAuthorizationId !== authorizationId ||
                coveredItems.indexOf(accessItemId) < 0 ||
                !(task.isClosed === true || String(task.isClosed) === 'true') ||
                !task.completionEvidence ||
                !task.closeNotes ||
                !task.completionTimestamp
            ) continue
            if (
                task.fulfillmentOutcome === 'provisioning_completed' &&
                (task.provisioningCompleted === true || String(task.provisioningCompleted) === 'true')
            ) return true
            if (
                task.fulfillmentOutcome === 'waived' &&
                (task.formallyWaived === true || String(task.formallyWaived) === 'true') &&
                task.waiverReason &&
                task.waivedBy &&
                task.waiverDateTime
            ) return true
        }
        return false
    }

    function isTrue(value) {
        return value === true || value === '1' || String(value) === 'true'
    }

    var details = new GlideRecord('x_2166123_rob_auth_auth_detail')
    details.addQuery('rob_authorization_form', authorizationId)
    details.query()
    var found = false
    var allActive = true
    while (details.next()) {
        found = true
        var satisfied = true
        var accessItemId = String(details.getValue('access_item') || '')
        if (isTrue(details.getValue('staffing_task_required_snapshot'))) satisfied = satisfied && taskSatisfied('staffing_fulfillment', accessItemId)
        if (isTrue(details.getValue('analytics_task_required_snapshot'))) satisfied = satisfied && taskSatisfied('analytics_fulfillment', accessItemId)
        if (isTrue(details.getValue('operations_manager_task_required_snapshot'))) satisfied = satisfied && taskSatisfied('operations_manager_arm_assignment', accessItemId)
        if (details.getValue('status') === 'pending_fulfillment' && satisfied) {
            details.setValue('status', 'active')
            details.update()
        }
        if (details.getValue('status') !== 'active' && !(details.getValue('status') === 'pending_fulfillment' && satisfied)) allActive = false
    }

    for (var taskIndex = 0; taskIndex < taskEvidence.length; taskIndex += 1) {
        if (
            taskEvidence[taskIndex].taskType === 'exception_review' &&
            !taskSatisfied(
                'exception_review',
                taskEvidence[taskIndex].accessItemIds[0]
            )
        ) {
            allActive = false
        }
    }
    if (found && allActive) {
        new sn_hr_core.RobHrFulfillmentBridgeV2().closeEligibleCase(parentId)
    }
})(current)
