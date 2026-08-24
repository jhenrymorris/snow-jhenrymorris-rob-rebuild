'use strict'

const { detailPlan } = require('./AuthorizationScopeService')
const { beginReuseAttestation } = require('./ReuseAttestationService')

const FORM_DECISIONS = new Set(['NEW', 'AMENDMENT', 'RENEWAL'])

function requireValue(value, label) {
    if (!value) throw new Error(`${label} is required`)
    return value
}

function initiate(input) {
    const decisionClass = String(input.decisionClass || '').toUpperCase()
    const authorizationContext = input.authorizationContext || {}

    if (decisionClass === 'EXCEPTION') {
        return { action: 'exception', form: null, details: [] }
    }

    if (decisionClass === 'REUSE') {
        requireValue(input.relatedAuthorizationId, 'related authorization')
        if (authorizationContext.valid !== true) {
            throw new Error('Validated authorization context is required')
        }
        return beginReuseAttestation({
            ...input,
            supervisorId: authorizationContext.supervisorId,
        })
    }

    if (!FORM_DECISIONS.has(decisionClass)) {
        throw new Error('Unsupported authorization decision')
    }

    if (input.existingLifecycle) {
        return {
            action: 'existing',
            form: input.existingLifecycle.form,
            details: input.existingLifecycle.details || [],
        }
    }

    const required = [
        ['caseId', 'source case'],
        ['subjectId', 'subject'],
        ['employmentType', 'employment type'],
        ['businessJustification', 'business justification'],
        ['formVersion', 'form version'],
        ['decisionReason', 'decision reason'],
        ['decisionEvaluatedAt', 'decision timestamp'],
        ['expirationDate', 'expiration date'],
    ]
    for (const [field, label] of required) requireValue(input[field], label)
    if (
        authorizationContext.valid !== true ||
        !authorizationContext.supervisorId ||
        !authorizationContext.position ||
        !authorizationContext.organization
    ) {
        throw new Error('Validated authorization context is required before signing')
    }

    if (
        (decisionClass === 'AMENDMENT' || decisionClass === 'RENEWAL') &&
        !input.relatedAuthorizationId
    ) {
        throw new Error('Replacement authorization requires a predecessor')
    }

    const details = detailPlan(input)
    if (!details.length) throw new Error('Authorization scope is required')

    return {
        action: 'create',
        form: {
            sourceCaseId: input.caseId,
            subjectId: input.subjectId,
            supervisorId: authorizationContext.supervisorId,
            positionSnapshot: authorizationContext.position,
            organizationSnapshot: authorizationContext.organization,
            profileContextEvidence: authorizationContext.evidence || '',
            employmentType: input.employmentType,
            accessEndDate: input.accessEndDate || '',
            businessJustification: input.businessJustification,
            authorizationAction: decisionClass.toLowerCase(),
            formVersion: input.formVersion,
            expirationDate: input.expirationDate,
            status: 'pending_employee_signature',
            decisionReason: input.decisionReason,
            decisionEvaluatedAt: input.decisionEvaluatedAt,
            evaluatedAuthorizationId: input.relatedAuthorizationId || '',
            supersedesAuthorizationId:
                decisionClass === 'AMENDMENT' || decisionClass === 'RENEWAL'
                    ? input.relatedAuthorizationId
                    : '',
            transitions: ['draft', 'pending_employee_signature'],
        },
        details,
        requiresEmployeeSignature: true,
        requiresSupervisorApproval: true,
        requiresSupervisorSignature: true,
    }
}

module.exports = { initiate }
