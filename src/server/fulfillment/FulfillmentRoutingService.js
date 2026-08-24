'use strict'

const TASK_TYPES = Object.freeze({
    STAFFING: 'staffing_fulfillment',
    ANALYTICS: 'analytics_fulfillment',
    OPERATIONS_MANAGER: 'operations_manager_arm_assignment',
    EXCEPTION: 'exception_review',
})

function unique(values) {
    return [...new Set((values || []).filter(Boolean).map(String))].sort()
}

function route(details) {
    const normalized = (details || []).map((detail) => ({
        ...detail,
        id: String(detail.id || ''),
        accessItemId: String(detail.accessItemId || ''),
        requiresStaffingTask: detail.requiresStaffingTask === true,
        requiresAnalyticsTask: detail.requiresAnalyticsTask === true,
        requiresOperationsManagerTask: detail.requiresOperationsManagerTask === true,
        provisioningSystem: String(detail.provisioningSystem || ''),
        targetSystem: String(detail.targetSystem || ''),
    }))

    for (const detail of normalized) {
        if (!detail.id || !detail.accessItemId) {
            throw new Error('Every fulfillment detail requires an id and access item')
        }
        if (
            detail.requiresOperationsManagerTask &&
            (detail.provisioningSystem !== 'arm' || detail.targetSystem !== 'oas')
        ) {
            throw new Error('Operations Manager work must preserve ARM provisioning and OAS target')
        }
    }

    return {
        details: normalized,
        staffingItems: unique(
            normalized.filter((detail) => detail.requiresStaffingTask).map((detail) => detail.accessItemId)
        ),
        analyticsItems: unique(
            normalized.filter((detail) => detail.requiresAnalyticsTask).map((detail) => detail.accessItemId)
        ),
        operationsManagerItems: unique(
            normalized
                .filter((detail) => detail.requiresOperationsManagerTask)
                .map((detail) => detail.accessItemId)
        ),
    }
}

function requiredTaskTypes(detail) {
    const required = []
    if (detail.requiresStaffingTask === true) required.push(TASK_TYPES.STAFFING)
    if (detail.requiresAnalyticsTask === true) required.push(TASK_TYPES.ANALYTICS)
    if (detail.requiresOperationsManagerTask === true) required.push(TASK_TYPES.OPERATIONS_MANAGER)
    return required
}

module.exports = { TASK_TYPES, requiredTaskTypes, route }
