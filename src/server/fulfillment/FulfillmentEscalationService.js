'use strict'

const { assess } = require('./FulfillmentEvidenceService')
const { TASK_TYPES } = require('./FulfillmentRoutingService')

function evaluate(input) {
    const task = input.task || {}
    if (task.taskType !== TASK_TYPES.OPERATIONS_MANAGER) {
        return { escalate: false, reasonCode: 'NOT_OPERATIONS_MANAGER_WORK' }
    }
    if (assess(task).satisfied) {
        return { escalate: false, reasonCode: 'TASK_ALREADY_SATISFIED' }
    }
    if (!task.id || !task.parentCaseId || !task.dueDate || !input.now) {
        return { escalate: false, reasonCode: 'ESCALATION_INPUT_INCOMPLETE' }
    }
    if (!Number.isInteger(input.escalationDays) || input.escalationDays < 0) {
        return { escalate: false, reasonCode: 'ESCALATION_CONFIGURATION_MISSING' }
    }

    const threshold = new Date(`${task.dueDate}T00:00:00Z`)
    threshold.setUTCDate(threshold.getUTCDate() + input.escalationDays)
    if (new Date(input.now).getTime() < threshold.getTime()) {
        return { escalate: false, reasonCode: 'ESCALATION_NOT_DUE' }
    }

    const escalationKey = `${task.id}:${task.dueDate}:${input.escalationDays}`
    if ((input.existingEscalationKeys || []).map(String).includes(escalationKey)) {
        return { escalate: false, reasonCode: 'ESCALATION_ALREADY_RECORDED', escalationKey }
    }

    return {
        escalate: true,
        reasonCode: 'OPERATIONS_MANAGER_TASK_OVERDUE',
        escalationKey,
        keepTaskOpen: true,
        closeParentCase: false,
        notification: {
            event: 'rob.operations_manager.overdue',
            taskId: String(task.id),
            parentCaseId: String(task.parentCaseId),
            dueDate: String(task.dueDate),
            secureRecordPath: `/sn_hr_core_task.do?sys_id=${String(task.id)}`,
        },
    }
}

module.exports = { evaluate }
