'use strict'

const { assess } = require('./FulfillmentEvidenceService')
const { TASK_TYPES, requiredTaskTypes } = require('./FulfillmentRoutingService')

function taskMap(tasks) {
    const map = new Map()
    for (const task of tasks || []) {
        const type = String(task.taskType || '')
        if (!type || map.has(type)) continue
        map.set(type, task)
    }
    return map
}

function detailResult(detail, tasksByType) {
    const requirements = requiredTaskTypes(detail)
    const incompleteTaskTypes = requirements.filter((type) => {
        const task = tasksByType.get(type)
        return !task || !assess(task).satisfied
    })

    const canActivate =
        String(detail.status || '') === 'pending_fulfillment' && incompleteTaskTypes.length === 0

    return {
        detailId: String(detail.id || ''),
        accessItemId: String(detail.accessItemId || ''),
        currentStatus: String(detail.status || ''),
        nextStatus: canActivate ? 'active' : String(detail.status || ''),
        changed: canActivate,
        requiredTaskTypes: requirements,
        incompleteTaskTypes,
    }
}

function evaluate(input) {
    const tasksByType = taskMap(input.tasks)
    const details = (input.details || []).map((detail) => detailResult(detail, tasksByType))
    const unresolvedException = (input.tasks || []).some(
        (task) => task.taskType === TASK_TYPES.EXCEPTION && !assess(task).satisfied
    )
    const stopped = new Set(['denied', 'withdrawn']).has(
        String(input.requestStatus || '').toLowerCase()
    )
    const everyDetailSatisfied = details.length > 0 && details.every(
        (detail) => detail.nextStatus === 'active' || detail.currentStatus === 'active'
    )

    return {
        detailUpdates: details.filter((detail) => detail.changed),
        details,
        parentCanClose: !stopped && !unresolvedException && everyDetailSatisfied,
        reasonCode: stopped
            ? 'REQUEST_STOPPED'
            : unresolvedException
              ? 'EXCEPTION_UNRESOLVED'
              : everyDetailSatisfied
                ? 'ALL_FULFILLMENT_REQUIREMENTS_SATISFIED'
                : 'FULFILLMENT_REQUIREMENTS_INCOMPLETE',
    }
}

module.exports = { evaluate }
