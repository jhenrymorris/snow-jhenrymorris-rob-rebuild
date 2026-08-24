'use strict'

function finalize(input) {
    const authorization = input.authorization || {}
    const pdf = input.pdf || {}

    if (authorization.status !== 'pending_supervisor_approval_signature') {
        throw new Error('Authorization is not ready for finalization')
    }
    if (!authorization.employeeSignatureComplete) {
        throw new Error('Employee signature evidence is incomplete')
    }
    if (
        !authorization.supervisorApprovalComplete ||
        authorization.supervisorApprovalOutcome !== 'approved' ||
        !authorization.supervisorSignatureComplete
    ) {
        throw new Error('Supervisor approval and signature evidence is incomplete')
    }
    if (!authorization.supervisorSignatureDateTime) {
        throw new Error('Supervisor signature timestamp is required')
    }
    if (input.decisionContextCurrent !== true) {
        throw new Error('Authorization decision context is stale')
    }
    if (!pdf.id || pdf.contentType !== 'application/pdf' || !pdf.createdAt) {
        throw new Error('A persisted final PDF is required')
    }
    if (authorization.finalPdfAttachmentId) {
        if (authorization.finalPdfAttachmentId === pdf.id) {
            return { changed: false }
        }
        throw new Error('Authorization already has an authoritative final PDF')
    }

    const supervisorLocalDate = String(input.supervisorLocalDate || '')
    if (!/^\d{4}-\d{2}-\d{2}$/.test(supervisorLocalDate)) {
        throw new Error('Supervisor local signature date is required')
    }

    return {
        changed: true,
        authorization: {
            status: 'active',
            effectiveDate: supervisorLocalDate,
            finalAuthorizationDate: supervisorLocalDate,
            signedPdfGenerated: true,
            signedPdfGeneratedDateTime: pdf.createdAt,
            finalPdfAttachmentId: pdf.id,
        },
        detailStatus: 'pending_fulfillment',
        predecessor: authorization.supersedesAuthorizationId
            ? {
                  id: authorization.supersedesAuthorizationId,
                  status: 'superseded',
                  supersededByAuthorizationId: authorization.id,
                  detailStatus: 'superseded',
              }
            : null,
    }
}

module.exports = { finalize }
