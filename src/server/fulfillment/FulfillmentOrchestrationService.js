'use strict'

const { TASK_TYPES, route } = require('./FulfillmentRoutingService')

const STOPPED_REQUEST_STATES = new Set(['denied', 'withdrawn'])

function taskKey(caseId, taskType) {
    return `${String(caseId)}:${String(taskType)}`
}

function existingKeys(caseId, existingTasks) {
    return new Set(
        (existingTasks || []).map((task) =>
            String(task.businessKey || taskKey(caseId, task.taskType || ''))
        )
    )
}

function planTask(input, type, accessItemIds, extra = {}) {
    return {
        businessKey: taskKey(input.caseId, type),
        parentCaseId: String(input.caseId),
        relatedAuthorizationId: String(input.authorizationId || ''),
        taskType: type,
        accessItemIds: [...accessItemIds],
        assignmentGroupId: String(extra.assignmentGroupId || ''),
        assignedToId: String(extra.assignedToId || ''),
        dueDays: Number.isInteger(extra.dueDays) ? extra.dueDays : null,
        provisioningSystem: String(extra.provisioningSystem || ''),
        targetSystem: String(extra.targetSystem || ''),
        exceptionReason: String(extra.exceptionReason || ''),
    }
}

function orchestrate(input) {
    const caseId = String(input.caseId || '')
    if (!caseId) throw new Error('Parent HR Case is required')

    const requestStatus = String(input.requestStatus || '').toLowerCase()
    if (input.fulfillmentGateComplete !== true || STOPPED_REQUEST_STATES.has(requestStatus)) {
        return {
            action: 'blocked',
            reasonCode: STOPPED_REQUEST_STATES.has(requestStatus)
                ? `FULFILLMENT_${requestStatus.toUpperCase()}`
                : 'FULFILLMENT_GATE_CLOSED',
            tasks: [],
            tasksCreated: 0,
            externalCalls: 0,
        }
    }

    const routing = route(input.details)
    const keys = existingKeys(caseId, input.existingTasks)
    const config = input.configuration || {}
    const candidates = []

    if (routing.staffingItems.length) {
        candidates.push(
            planTask(input, TASK_TYPES.STAFFING, routing.staffingItems, {
                assignmentGroupId: config.staffingAssignmentGroupId,
            })
        )
    }

    if (routing.analyticsItems.length) {
        candidates.push(
            planTask(input, TASK_TYPES.ANALYTICS, routing.analyticsItems, {
                assignmentGroupId: config.analyticsAssignmentGroupId,
            })
        )
    }

    if (routing.operationsManagerItems.length) {
        if (input.operationsManagerId) {
            candidates.push(
                planTask(input, TASK_TYPES.OPERATIONS_MANAGER, routing.operationsManagerItems, {
                    assignedToId: input.operationsManagerId,
                    dueDays: config.operationsManagerTaskDueDays,
                    provisioningSystem: 'arm',
                    targetSystem: 'oas',
                })
            )
        } else {
            candidates.push(
                planTask(input, TASK_TYPES.EXCEPTION, routing.operationsManagerItems, {
                    assignmentGroupId: config.exceptionReviewGroupId,
                    dueDays: config.exceptionTaskDueDays,
                    exceptionReason: 'MISSING_OPERATIONS_MANAGER',
                })
            )
        }
    }

    const tasks = candidates.filter((task) => !keys.has(task.businessKey))
    return {
        action: tasks.length ? 'create' : 'existing',
        reasonCode: tasks.length ? 'FULFILLMENT_TASKS_PLANNED' : 'FULFILLMENT_TASKS_EXIST',
        tasks,
        tasksCreated: tasks.length,
        routing,
        missingOperationsManager:
            routing.operationsManagerItems.length > 0 && !input.operationsManagerId,
        externalCalls: 0,
    }
}

module.exports = { orchestrate, taskKey }
