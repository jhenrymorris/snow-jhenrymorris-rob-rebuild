'use strict'

const SATISFYING_OUTCOMES = new Set(['provisioning_completed', 'waived', 'not_required'])

function text(value) {
    return String(value || '').trim()
}

function assess(task) {
    const outcome = text(task.fulfillmentOutcome).toLowerCase()
    const evidencePresent = Boolean(text(task.completionEvidence))
    const closeNotesPresent = Boolean(text(task.closeNotes))
    const timestampPresent = Boolean(text(task.completionTimestamp))

    if (task.isClosed !== true) {
        return { satisfied: false, reasonCode: 'TASK_NOT_CLOSED' }
    }
    if (!SATISFYING_OUTCOMES.has(outcome)) {
        return { satisfied: false, reasonCode: 'OUTCOME_NOT_SATISFYING' }
    }
    if (task.authorizedFulfiller !== true) {
        return { satisfied: false, reasonCode: 'FULFILLER_NOT_AUTHORIZED' }
    }
    if (!evidencePresent || !closeNotesPresent || !timestampPresent) {
        return { satisfied: false, reasonCode: 'COMPLETION_EVIDENCE_INCOMPLETE' }
    }
    if (outcome === 'provisioning_completed' && task.provisioningCompleted !== true) {
        return { satisfied: false, reasonCode: 'PROVISIONING_NOT_CONFIRMED' }
    }
    if (
        outcome === 'waived' &&
        !(
            task.formallyWaived === true &&
            text(task.waiverReason) &&
            text(task.waivedBy) &&
            text(task.waiverDateTime)
        )
    ) {
        return { satisfied: false, reasonCode: 'WAIVER_EVIDENCE_INCOMPLETE' }
    }
    if (outcome === 'not_required' && task.notRequiredAllowed !== true) {
        return { satisfied: false, reasonCode: 'NOT_REQUIRED_NOT_AUTHORIZED' }
    }

    return { satisfied: true, reasonCode: `TASK_${outcome.toUpperCase()}` }
}

module.exports = { SATISFYING_OUTCOMES, assess }
