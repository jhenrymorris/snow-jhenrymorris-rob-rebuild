(function executeRule(current) {
    var parentId = current.getValue('parent')
    var authorizationId = current.getValue('x_2166123_rob_auth_related_authorization')
    if (!parentId || !authorizationId) return

    var evidenceJson = new sn_hr_core.RobHrFulfillmentBridgeV2().getCaseTaskEvidence(parentId)
    var taskEvidence
    try {
        taskEvidence = JSON.parse(String(evidenceJson || '[]'))
    } catch (error) {
        gs.error('ROB fulfillment reconciliation stopped: malformed bridge evidence.')
        return
    }

    function taskSatisfied(type) {
        for (var index = 0; index < taskEvidence.length; index += 1) {
            var task = taskEvidence[index]
            if (task.taskType !== type || task.isClosed !== true || !task.completionEvidence || !task.closeNotes || !task.completionTimestamp) continue
            if (task.fulfillmentOutcome === 'provisioning_completed' && task.provisioningCompleted === true) return true
            if (task.fulfillmentOutcome === 'waived' && task.formallyWaived === true && task.waiverReason && task.waivedBy && task.waiverDateTime) return true
        }
        return false
    }

    var details = new GlideRecord('x_2166123_rob_auth_auth_detail')
    details.addQuery('rob_authorization_form', authorizationId)
    details.query()
    var found = false
    var allActive = true
    while (details.next()) {
        found = true
        var satisfied = true
        if (details.getValue('staffing_task_required_snapshot') === '1') satisfied = satisfied && taskSatisfied('staffing_fulfillment')
        if (details.getValue('analytics_task_required_snapshot') === '1') satisfied = satisfied && taskSatisfied('analytics_fulfillment')
        if (details.getValue('operations_manager_task_required_snapshot') === '1') satisfied = satisfied && taskSatisfied('operations_manager_arm_assignment')
        if (details.getValue('status') === 'pending_fulfillment' && satisfied) {
            details.setValue('status', 'active')
            details.update()
        }
        if (details.getValue('status') !== 'active' && !(details.getValue('status') === 'pending_fulfillment' && satisfied)) allActive = false
    }

    for (var taskIndex = 0; taskIndex < taskEvidence.length; taskIndex += 1) {
        if (
            taskEvidence[taskIndex].taskType === 'exception_review' &&
            !taskSatisfied('exception_review')
        ) {
            allActive = false
        }
    }
    if (found && allActive) {
        new sn_hr_core.RobHrFulfillmentBridgeV2().closeEligibleCase(parentId)
    }
})(current)
