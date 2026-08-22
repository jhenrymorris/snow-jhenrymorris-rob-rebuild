'use strict'

function required(value, label) {
    if (!value) throw new Error(`${label} is required`)
    return String(value)
}

function recordEmployeeSignature(input) {
    const signerId = required(input.signerId, 'employee signer')
    const completedAt = required(input.completedAt, 'employee signature timestamp')
    const documentTaskId = required(input.documentTaskId, 'employee document task')

    if (signerId !== required(input.subjectId, 'subject')) {
        throw new Error('Employee signer does not match the authorization subject')
    }

    return {
        employeeSignatureComplete: true,
        employeeSignerId: signerId,
        employeeSignatureDateTime: completedAt,
        employeeDocumentTaskId: documentTaskId,
        documentTaskExecutionId: required(
            input.documentTaskExecutionId,
            'document task execution'
        ),
        status: 'pending_supervisor_approval_signature',
    }
}

function recordSupervisorDecision(input) {
    const approverId = required(input.approverId, 'supervisor approver')
    const decidedAt = required(input.decidedAt, 'supervisor decision timestamp')
    const outcome = String(input.outcome || '').toUpperCase()

    if (approverId !== required(input.supervisorId, 'supervisor')) {
        throw new Error('Supervisor approver does not match the authorization supervisor')
    }

    if (outcome === 'DENIED' || outcome === 'REFUSED') {
        return {
            supervisorApprovalComplete: false,
            supervisorApprovalOutcome: 'denied',
            supervisorApproverId: approverId,
            supervisorApprovalDateTime: decidedAt,
            supervisorSignatureComplete: false,
            supervisorSignerId: '',
            supervisorSignatureDateTime: '',
            supervisorDocumentTaskId: '',
            documentTaskExecutionId: '',
            launchSupervisorSignature: false,
            status: 'denied',
        }
    }

    if (outcome !== 'APPROVED') {
        throw new Error('Supervisor decision must be APPROVED or DENIED')
    }

    return {
        supervisorApprovalComplete: true,
        supervisorApprovalOutcome: 'approved',
        supervisorApproverId: approverId,
        supervisorApprovalDateTime: decidedAt,
        supervisorSignatureComplete: false,
        launchSupervisorSignature: true,
        status: 'pending_supervisor_approval_signature',
    }
}

function recordSupervisorSignature(input) {
    const signerId = required(input.signerId, 'supervisor signer')
    const completedAt = required(input.completedAt, 'supervisor signature timestamp')
    const documentTaskId = required(input.documentTaskId, 'supervisor document task')

    if (signerId !== required(input.supervisorId, 'supervisor')) {
        throw new Error('Supervisor signer does not match the authorization supervisor')
    }
    if (
        input.supervisorApprovalComplete !== true ||
        String(input.supervisorApprovalOutcome || '').toLowerCase() !== 'approved'
    ) {
        throw new Error('Supervisor signature requires prior explicit approval')
    }
    if (input.signatureComplete !== true) {
        throw new Error('Supervisor signature is incomplete')
    }

    return {
        supervisorSignatureComplete: true,
        supervisorSignerId: signerId,
        supervisorSignatureDateTime: completedAt,
        supervisorDocumentTaskId: documentTaskId,
        documentTaskExecutionId: required(
            input.documentTaskExecutionId,
            'document task execution'
        ),
        status: 'pending_supervisor_approval_signature',
    }
}

// Compatibility facade for callers that model the approved decision and
// signature as one already-completed action. Runtime orchestration uses the
// separate decision and signature functions above.
function recordSupervisorAction(input) {
    const decision = recordSupervisorDecision({
        supervisorId: input.supervisorId,
        approverId: input.signerId,
        outcome: input.outcome,
        decidedAt: input.completedAt,
    })
    if (!decision.launchSupervisorSignature) return decision

    return {
        ...decision,
        ...recordSupervisorSignature({
            ...input,
            supervisorApprovalComplete: decision.supervisorApprovalComplete,
            supervisorApprovalOutcome: decision.supervisorApprovalOutcome,
        }),
    }
}

module.exports = {
    recordEmployeeSignature,
    recordSupervisorDecision,
    recordSupervisorSignature,
    recordSupervisorAction,
}
