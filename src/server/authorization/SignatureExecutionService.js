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

function recordSupervisorAction(input) {
    const signerId = required(input.signerId, 'supervisor signer')
    const completedAt = required(input.completedAt, 'supervisor timestamp')
    const documentTaskId = required(input.documentTaskId, 'supervisor document task')
    const outcome = String(input.outcome || '').toUpperCase()

    if (signerId !== required(input.supervisorId, 'supervisor')) {
        throw new Error('Supervisor signer does not match the authorization supervisor')
    }

    if (outcome === 'DENIED' || outcome === 'REFUSED') {
        return {
            supervisorApprovalComplete: false,
            supervisorApprovalOutcome: 'denied',
            supervisorApproverId: signerId,
            supervisorApprovalDateTime: completedAt,
            supervisorSignatureComplete: false,
            supervisorSignerId: signerId,
            supervisorSignatureDateTime: completedAt,
            supervisorDocumentTaskId: documentTaskId,
            documentTaskExecutionId: required(
                input.documentTaskExecutionId,
                'document task execution'
            ),
            status: 'denied',
        }
    }

    if (outcome !== 'APPROVED' || input.signatureComplete !== true) {
        throw new Error('Supervisor approval and signature are both required')
    }

    return {
        supervisorApprovalComplete: true,
        supervisorApprovalOutcome: 'approved',
        supervisorApproverId: signerId,
        supervisorApprovalDateTime: completedAt,
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

module.exports = { recordEmployeeSignature, recordSupervisorAction }
