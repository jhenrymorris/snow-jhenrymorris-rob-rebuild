'use strict'

const {
    compareAccess,
    normalizeSet,
    selectApplicableAuthorization,
} = require('./AuthorizationRepository.js')
const { calculateProposedExpiration } = require('./ExpirationDateService.js')

const DECISIONS = Object.freeze({
    NEW: 'NEW',
    REUSE: 'REUSE',
    AMENDMENT: 'AMENDMENT',
    RENEWAL: 'RENEWAL',
    EXCEPTION: 'EXCEPTION',
})

const PATH_LABELS = Object.freeze({
    NEW: 'New',
    REUSE: 'Reuse',
    AMENDMENT: 'Amendment',
    RENEWAL: 'Renewal',
    EXCEPTION: 'Exception Review',
})

const APPROVED_EMPLOYMENT_TYPES = new Set([
    'federal_employee',
    'contractor',
    'ipa',
    'auditor_investigator',
])

function signatureFlags(decisionClass) {
    if (decisionClass === DECISIONS.EXCEPTION) {
        return {
            employeeSignatureRequired: false,
            supervisorApprovalRequired: false,
            supervisorSignatureRequired: false,
        }
    }

    return {
        employeeSignatureRequired: decisionClass !== DECISIONS.REUSE,
        supervisorApprovalRequired: true,
        supervisorSignatureRequired: true,
    }
}

function result(decisionClass, reasonCode, evidence, extra = {}) {
    return {
        decisionClass,
        authorizationPath: PATH_LABELS[decisionClass],
        reasonCode,
        existingAuthorizationStatus: 'none',
        relatedAuthorizationId: '',
        coveredAccess: [],
        uncoveredAccess: [],
        proposedExpirationDate: '',
        exceptionReason: '',
        renewalReason: '',
        duplicateCaseId: '',
        materialContextChange: false,
        evidence,
        ...signatureFlags(decisionClass),
        ...extra,
    }
}

function exception(reasonCode, evidence, extra = {}) {
    return result(DECISIONS.EXCEPTION, reasonCode, evidence, {
        exceptionReason: reasonCode,
        ...extra,
    })
}

function validate(context) {
    const request = context.request || {}
    const configuration = context.configuration || []

    if (configuration.length !== 1) {
        return exception('EX_INVALID_CONFIG', {
            activeConfigurationCount: configuration.length,
        })
    }

    const activeConfiguration = configuration[0]

    if (
        !activeConfiguration.currentAcceptedFormVersion ||
        !/^\d{4}-\d{2}-\d{2}$/.test(
            activeConfiguration.annualRecertificationDate || ''
        ) ||
        !Number.isInteger(Number(activeConfiguration.graceWindowDays)) ||
        Number(activeConfiguration.graceWindowDays) < 0 ||
        !/^\d{4}-\d{2}-\d{2}$/.test(context.evaluationDate || '')
    ) {
        return exception('EX_INVALID_CONFIG', {
            invalid: 'decision_configuration',
        })
    }

    if (!request.subjectId) {
        return exception('EX_MISSING_REQUIRED_DATA', { missing: 'subject' })
    }

    if (!normalizeSet(request.requestedAccess).length) {
        return exception('EX_MISSING_REQUIRED_DATA', {
            missing: 'requested_access',
        })
    }

    if (!String(request.businessJustification || '').trim()) {
        return exception('EX_MISSING_REQUIRED_DATA', {
            missing: 'business_justification',
        })
    }

    const authorizationContext = request.authorizationContext || {}

    if (authorizationContext.valid !== true || !authorizationContext.supervisorId) {
        return exception('EX_MISSING_SUPERVISOR', { missing: 'supervisor' })
    }

    if (!authorizationContext.position || !authorizationContext.organization) {
        return exception('EX_MISSING_REQUIRED_DATA', {
            missing: !authorizationContext.position ? 'position' : 'organization',
        })
    }

    if (!APPROVED_EMPLOYMENT_TYPES.has(request.employmentType)) {
        return exception('EX_MISSING_REQUIRED_DATA', {
            missing: 'employment_type',
        })
    }

    if (request.requiresAccessEndDate && !request.accessEndDate) {
        return exception('EX_MISSING_END_DATE', { missing: 'access_end_date' })
    }

    if (request.includesWpc && !request.operationsManagerId) {
        return exception('EX_MISSING_OM', { missing: 'operations_manager' })
    }

    if ((request.invalidAccessItems || []).length) {
        return exception('EX_INVALID_ACCESS_ITEM', {
            invalidAccessItems: normalizeSet(request.invalidAccessItems),
        })
    }

    if (context.duplicateOpenCaseId) {
        return exception('EX_DUPLICATE_OPEN_CASE', {
            duplicateCaseId: context.duplicateOpenCaseId,
        }, {
            duplicateCaseId: context.duplicateOpenCaseId,
        })
    }

    return null
}

function proposedExpiration(context, authorization, decisionClass) {
    if (decisionClass === DECISIONS.REUSE) {
        return authorization ? authorization.expirationDate || '' : ''
    }

    const configuration = context.configuration[0]

    return calculateProposedExpiration({
        evaluationDate: context.evaluationDate,
        annualRecertificationDate: configuration.annualRecertificationDate,
        graceWindowDays: configuration.graceWindowDays,
        accessEndDate: context.request.accessEndDate || '',
    })
}

function evaluate(context) {
    const validationFailure = validate(context)

    if (validationFailure) {
        return validationFailure
    }

    const request = context.request
    const requestedAccess = normalizeSet(request.requestedAccess)
    const subjectAuthorizations = (context.authorizations || []).filter(
        (authorization) =>
            !authorization.subjectId || authorization.subjectId === request.subjectId
    )
    const selection = selectApplicableAuthorization(subjectAuthorizations)

    if (selection.conflict) {
        return exception(selection.conflict, {
            authorizationCount: subjectAuthorizations.length,
        })
    }

    const authorization = selection.authorization
    const related = authorization
        ? {
              existingAuthorizationStatus: authorization.status,
              relatedAuthorizationId: authorization.id || '',
          }
        : {}

    if (!authorization) {
        return result(
            DECISIONS.NEW,
            'NEW_NO_PRIOR_FORM',
            { requestedAccess },
            {
                uncoveredAccess: requestedAccess,
                proposedExpirationDate: proposedExpiration(
                    context,
                    null,
                    DECISIONS.NEW
                ),
            }
        )
    }

    const coverage = compareAccess(
        requestedAccess,
        authorization.authorizedAccess
    )
    const evidence = {
        priorStatus: authorization.status,
        priorFormVersion: authorization.formVersion || '',
        currentAcceptedFormVersion:
            context.configuration[0].currentAcceptedFormVersion,
        priorExpirationDate: authorization.expirationDate || '',
        coveredAccess: coverage.coveredAccess,
        uncoveredAccess: coverage.uncoveredAccess,
    }
    const common = { ...related, ...coverage }

    if (authorization.status === 'revoked') {
        return result(DECISIONS.NEW, 'NEW_PRIOR_REVOKED', evidence, {
            ...common,
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.NEW
            ),
        })
    }

    if (authorization.status === 'expired' || authorization.status === 'lapsed') {
        const renewalReason =
            authorization.status === 'expired' ? 'Expired' : 'Lapsed'
        const reasonCode =
            authorization.status === 'expired' ? 'REN_EXPIRED' : 'REN_LAPSED'

        return result(DECISIONS.RENEWAL, reasonCode, evidence, {
            ...common,
            renewalReason,
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.RENEWAL
            ),
        })
    }

    if (authorization.status === 'obsolete_version') {
        return result(DECISIONS.RENEWAL, 'REN_OBSOLETE_VERSION', evidence, {
            ...common,
            renewalReason: 'Obsolete Form Version',
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.RENEWAL
            ),
        })
    }

    if (authorization.status !== 'active') {
        return result(DECISIONS.NEW, 'NEW_NO_CURRENT_FORM', evidence, {
            ...common,
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.NEW
            ),
        })
    }

    if (!authorization.formVersion || !authorization.expirationDate) {
        return exception('EX_INCOMPLETE_AUTHORIZATION_HISTORY', evidence, common)
    }

    if (
        authorization.formVersion !==
        context.configuration[0].currentAcceptedFormVersion
    ) {
        return result(DECISIONS.RENEWAL, 'REN_OBSOLETE_VERSION', evidence, {
            ...common,
            renewalReason: 'Obsolete Form Version',
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.RENEWAL
            ),
        })
    }

    if (
        authorization.expirationDate &&
        authorization.expirationDate < context.evaluationDate
    ) {
        return result(DECISIONS.RENEWAL, 'REN_EXPIRED', evidence, {
            ...common,
            renewalReason: 'Expired',
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.RENEWAL
            ),
        })
    }

    if (
        context.annualRenewalDue !== true &&
        context.annualRenewalDue !== false
    ) {
        return exception('EX_UNRESOLVED_ANNUAL_RENEWAL_RULE', evidence, common)
    }

    if (context.annualRenewalDue === true) {
        return result(
            DECISIONS.RENEWAL,
            'REN_ANNUAL_RECERTIFICATION',
            evidence,
            {
                ...common,
                renewalReason: 'Annual Renewal Due',
                proposedExpirationDate: proposedExpiration(
                    context,
                    authorization,
                    DECISIONS.RENEWAL
                ),
            }
        )
    }

    const materialContext = context.materialContext || {}
    const materialValues = [
        materialContext.organization,
        materialContext.position,
        materialContext.businessJustification,
    ]

    if (materialValues.some((value) => value === 'unknown' || !value)) {
        return exception('EX_AMBIGUOUS_MATERIAL_CHANGE', evidence, common)
    }

    const changed = []

    if (materialContext.organization === 'changed') changed.push('organization')
    if (materialContext.position === 'changed') changed.push('position')
    if (materialContext.businessJustification === 'changed') {
        changed.push('business_justification')
    }

    if (changed.length) {
        const reasonCode =
            changed.length > 1
                ? 'AMD_MULTIPLE_MATERIAL_CHANGES'
                : changed[0] === 'organization'
                  ? 'AMD_ORG_CHANGE'
                  : changed[0] === 'position'
                    ? 'AMD_POSITION_ROLE_CHANGE'
                    : 'AMD_JUSTIFICATION_CHANGE'

        return result(DECISIONS.AMENDMENT, reasonCode, {
            ...evidence,
            materialChanges: changed,
        }, {
            ...common,
            materialContextChange: true,
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.AMENDMENT
            ),
        })
    }

    if (!coverage.uncoveredAccess.length) {
        return result(DECISIONS.REUSE, 'REUSE_FULLY_COVERED', evidence, {
            ...common,
            proposedExpirationDate: proposedExpiration(
                context,
                authorization,
                DECISIONS.REUSE
            ),
        })
    }

    const reasonCode = coverage.coveredAccess.length
        ? 'AMD_PARTIAL_COVERAGE'
        : 'AMD_NO_COVERAGE_ACTIVE_FORM'

    return result(DECISIONS.AMENDMENT, reasonCode, evidence, {
        ...common,
        proposedExpirationDate: proposedExpiration(
            context,
            authorization,
            DECISIONS.AMENDMENT
        ),
    })
}

module.exports = { DECISIONS, evaluate }
