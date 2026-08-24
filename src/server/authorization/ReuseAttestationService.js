'use strict'

function normalize(values) {
    return [...new Set((values || []).filter(Boolean).map(String))].sort()
}

function rejected(reasonCode, extra = {}) {
    return {
        eligible: false,
        action: 'reevaluate',
        reasonCode,
        requiresDecisionReevaluation: true,
        fulfillmentEligible: false,
        formsCreated: 0,
        detailsCreated: 0,
        ...extra,
    }
}

function contextKey(input, authorization, requestedAccess) {
    return JSON.stringify({
        caseId: String(input.caseId || ''),
        decisionEvaluatedAt: String(input.decisionEvaluatedAt || ''),
        subjectId: String(input.subjectId || ''),
        supervisorId: String(input.supervisorId || ''),
        relatedAuthorizationId: String(input.relatedAuthorizationId || ''),
        authorizationStatus: String(authorization.status || ''),
        authorizationFormVersion: String(authorization.formVersion || ''),
        authorizationExpirationDate: String(authorization.expirationDate || ''),
        requestedAccess,
    })
}

function assessReuseEligibility(input) {
    if (String(input.decisionClass || '').toUpperCase() !== 'REUSE') {
        return rejected('REUSE_DECISION_CHANGED')
    }

    const authorization = input.relatedAuthorization
    const relatedAuthorizationId = String(input.relatedAuthorizationId || '')

    if (
        !authorization ||
        !relatedAuthorizationId ||
        String(authorization.id || '') !== relatedAuthorizationId
    ) {
        return rejected('REUSE_AUTHORIZATION_NOT_UNIQUE')
    }

    const status = String(authorization.status || '').toLowerCase()
    if (status !== 'active') {
        return rejected(`REUSE_AUTHORIZATION_${status || 'MISSING'}_INELIGIBLE`)
    }

    if (
        !input.subjectId ||
        String(authorization.subjectId || '') !== String(input.subjectId)
    ) {
        return rejected('REUSE_SUBJECT_MISMATCH')
    }

    if (
        !input.currentAcceptedFormVersion ||
        String(authorization.formVersion || '') !==
            String(input.currentAcceptedFormVersion)
    ) {
        return rejected('REUSE_FORM_VERSION_INELIGIBLE')
    }

    if (
        !input.evaluationDate ||
        !authorization.expirationDate ||
        String(authorization.expirationDate) < String(input.evaluationDate)
    ) {
        return rejected('REUSE_AUTHORIZATION_EXPIRED')
    }

    if (!input.supervisorId) {
        return rejected('REUSE_SUPERVISOR_MISSING')
    }

    const requestedAccess = normalize(input.requestedAccess)
    const authorizedAccess = new Set(normalize(authorization.authorizedAccess))
    if (!requestedAccess.length) {
        return rejected('REUSE_REQUEST_SCOPE_MISSING')
    }

    const uncoveredAccess = requestedAccess.filter(
        (accessItemId) => !authorizedAccess.has(accessItemId)
    )
    if (uncoveredAccess.length) {
        return rejected('REUSE_SCOPE_NOT_FULLY_COVERED', { uncoveredAccess })
    }

    return {
        eligible: true,
        action: 'attest',
        reasonCode: 'REUSE_ELIGIBLE',
        caseId: String(input.caseId || ''),
        relatedAuthorizationId,
        expectedSupervisorId: String(input.supervisorId),
        requestedAccess,
        contextKey: contextKey(input, authorization, requestedAccess),
        requiresDecisionReevaluation: false,
        fulfillmentEligible: false,
        formsCreated: 0,
        detailsCreated: 0,
    }
}

function hasCompleteEvidence(attestation) {
    if (!attestation) return false
    const decided =
        attestation.status === 'approved' || attestation.status === 'denied'
    return Boolean(
        decided &&
        attestation.supervisorDecision === attestation.status &&
        attestation.supervisorSignerId &&
        attestation.supervisorSignatureDateTime &&
        attestation.supervisorDocumentTaskId &&
        attestation.documentTaskExecutionId &&
        attestation.attestationCompletedAt
    )
}

function beginReuseAttestation(input) {
    const eligibility = assessReuseEligibility(input)
    if (!eligibility.eligible) {
        return input.existingReuseAttestation
            ? { ...eligibility, attestationStatus: 'invalidated' }
            : eligibility
    }

    const existing = input.existingReuseAttestation
    if (existing) {
        if (existing.contextKey !== eligibility.contextKey) {
            return rejected('REUSE_ATTESTATION_CONTEXT_STALE', {
                attestationStatus: 'invalidated',
                contextKey: eligibility.contextKey,
            })
        }

        if (
            (existing.status === 'approved' || existing.status === 'denied') &&
            !hasCompleteEvidence(existing)
        ) {
            return rejected('REUSE_ATTESTATION_EVIDENCE_INCOMPLETE', {
                attestationStatus: 'invalidated',
                contextKey: eligibility.contextKey,
            })
        }

        return {
            ...eligibility,
            action: 'existing_attestation',
            attestationStatus: existing.status,
            changed: false,
            createSupervisorExecution: false,
            fulfillmentEligible: existing.status === 'approved',
        }
    }

    return {
        ...eligibility,
        action: 'create_attestation',
        attestationStatus: 'pending',
        changed: true,
        createSupervisorExecution: true,
        requiresEmployeeSignature: false,
        requiresSupervisorApproval: true,
        requiresSupervisorSignature: true,
        form: null,
        details: [],
    }
}

function recordReuseSupervisorAction(input) {
    const eligibility = assessReuseEligibility(input)
    if (!eligibility.eligible) {
        return input.existingReuseAttestation
            ? { ...eligibility, attestationStatus: 'invalidated' }
            : eligibility
    }

    const existing = input.existingReuseAttestation
    if (existing && existing.contextKey !== eligibility.contextKey) {
        return rejected('REUSE_ATTESTATION_CONTEXT_STALE', {
            attestationStatus: 'invalidated',
            contextKey: eligibility.contextKey,
        })
    }

    if (
        existing &&
        (existing.status === 'approved' || existing.status === 'denied')
    ) {
        if (!hasCompleteEvidence(existing)) {
            return rejected('REUSE_ATTESTATION_EVIDENCE_INCOMPLETE', {
                attestationStatus: 'invalidated',
                contextKey: eligibility.contextKey,
            })
        }
        return {
            ...eligibility,
            action: 'existing_attestation',
            attestationStatus: existing.status,
            changed: false,
            fulfillmentEligible: existing.status === 'approved',
        }
    }

    const signerId = String(input.signerId || '')
    if (!signerId || signerId !== eligibility.expectedSupervisorId) {
        throw new Error('Reuse signer does not match the current supervisor')
    }
    if (!input.documentTaskId || !input.documentTaskExecutionId || !input.completedAt) {
        throw new Error('Complete native Reuse attestation evidence is required')
    }

    const outcome = String(input.outcome || '').toUpperCase()
    if (outcome !== 'APPROVED' && outcome !== 'DENIED' && outcome !== 'REFUSED') {
        throw new Error('Reuse supervisor decision must be APPROVED or DENIED')
    }
    if (outcome === 'APPROVED' && input.signatureComplete !== true) {
        throw new Error('Reuse approval requires completed supervisor attestation')
    }

    const approved = outcome === 'APPROVED'
    return {
        ...eligibility,
        action: approved ? 'attestation_approved' : 'attestation_denied',
        attestationStatus: approved ? 'approved' : 'denied',
        supervisorDecision: approved ? 'approved' : 'denied',
        supervisorSignerId: signerId,
        supervisorSignatureComplete: approved,
        supervisorSignatureDateTime: String(input.completedAt),
        supervisorDocumentTaskId: String(input.documentTaskId),
        documentTaskExecutionId: String(input.documentTaskExecutionId),
        attestationCompletedAt: String(input.completedAt),
        contextKey: eligibility.contextKey,
        changed: true,
        fulfillmentEligible: approved,
        authorizationMutation: null,
    }
}

module.exports = {
    assessReuseEligibility,
    beginReuseAttestation,
    recordReuseSupervisorAction,
}
