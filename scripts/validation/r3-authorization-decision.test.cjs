const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const {
    DECISIONS,
    evaluate,
} = require('../../src/server/authorization/AuthorizationDecisionService')
const {
    calculateProposedExpiration,
} = require('../../src/server/authorization/ExpirationDateService')

function baseContext() {
    return {
        evaluationDate: '2026-06-01',
        configuration: [
            {
                currentAcceptedFormVersion: '2026.04',
                annualRecertificationDate: '2026-09-30',
                graceWindowDays: 90,
            },
        ],
        request: {
            subjectId: 'synthetic_subject',
            authorizationContext: {
                valid: true,
                supervisorId: 'synthetic_supervisor',
                position: 'Synthetic Analyst',
                organization: 'synthetic_organization',
            },
            employmentType: 'federal_employee',
            requestedAccess: ['fpps_wtts'],
            businessJustification: 'Synthetic unit-test justification.',
            requiresAccessEndDate: false,
            accessEndDate: '',
            includesWpc: false,
            operationsManagerId: '',
            invalidAccessItems: [],
        },
        authorizations: [],
        annualRenewalDue: false,
        materialContext: {
            organization: 'same',
            position: 'same',
            businessJustification: 'same',
        },
        duplicateOpenCaseId: '',
    }
}

function activeAuthorization(overrides = {}) {
    return {
        id: 'synthetic_authorization',
        subjectId: 'synthetic_subject',
        status: 'active',
        formVersion: '2026.04',
        expirationDate: '2026-09-30',
        authorizedAccess: ['fpps_wtts'],
        ...overrides,
    }
}

test('no prior authorization produces New', () => {
    const result = evaluate(baseContext())
    assert.equal(result.decisionClass, DECISIONS.NEW)
    assert.equal(result.reasonCode, 'NEW_NO_PRIOR_FORM')
    assert.deepEqual(result.uncoveredAccess, ['fpps_wtts'])
})

test('revoked prior authorization produces New', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization({ status: 'revoked' })]
    assert.equal(evaluate(context).reasonCode, 'NEW_PRIOR_REVOKED')
})

test('superseded authorization cannot Reuse', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization({ status: 'superseded' })]
    const result = evaluate(context)
    assert.equal(result.decisionClass, DECISIONS.NEW)
    assert.notEqual(result.decisionClass, DECISIONS.REUSE)
})

test('prior authorization for another subject is unrelated and produces New', () => {
    const context = baseContext()
    context.authorizations = [
        activeAuthorization({ subjectId: 'different_synthetic_subject' }),
    ]
    assert.equal(evaluate(context).reasonCode, 'NEW_NO_PRIOR_FORM')
})

test('active current authorization with full coverage produces Reuse', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization()]
    const result = evaluate(context)
    assert.equal(result.decisionClass, DECISIONS.REUSE)
    assert.deepEqual(result.coveredAccess, ['fpps_wtts'])
    assert.deepEqual(result.uncoveredAccess, [])
    assert.equal(result.employeeSignatureRequired, false)
    assert.equal(result.supervisorApprovalRequired, true)
})

test('active authorization plus one new item produces Amendment', () => {
    const context = baseContext()
    context.request.requestedAccess = ['fpps_wtts', 'eopf']
    context.authorizations = [activeAuthorization()]
    const result = evaluate(context)
    assert.equal(result.decisionClass, DECISIONS.AMENDMENT)
    assert.equal(result.reasonCode, 'AMD_PARTIAL_COVERAGE')
    assert.deepEqual(result.coveredAccess, ['fpps_wtts'])
    assert.deepEqual(result.uncoveredAccess, ['eopf'])
})

test('active authorization plus multiple new items preserves delta', () => {
    const context = baseContext()
    context.request.requestedAccess = ['usa_staffing', 'eopf', 'fpps_wtts']
    context.authorizations = [activeAuthorization()]
    const result = evaluate(context)
    assert.deepEqual(result.coveredAccess, ['fpps_wtts'])
    assert.deepEqual(result.uncoveredAccess, ['eopf', 'usa_staffing'])
})

test('active authorization with no coverage produces Amendment', () => {
    const context = baseContext()
    context.request.requestedAccess = ['eopf']
    context.authorizations = [activeAuthorization()]
    assert.equal(evaluate(context).reasonCode, 'AMD_NO_COVERAGE_ACTIVE_FORM')
})

test('expired authorization produces Renewal even with full coverage', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization({ status: 'expired' })]
    assert.equal(evaluate(context).reasonCode, 'REN_EXPIRED')
})

test('lapsed authorization cannot Reuse and produces Renewal', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization({ status: 'lapsed' })]
    assert.equal(evaluate(context).reasonCode, 'REN_LAPSED')
})

test('obsolete form version produces Renewal', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization({ formVersion: '2024.04' })]
    assert.equal(evaluate(context).reasonCode, 'REN_OBSOLETE_VERSION')
})

test('annual renewal due produces Renewal from explicit approved input', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization()]
    context.annualRenewalDue = true
    assert.equal(evaluate(context).reasonCode, 'REN_ANNUAL_RECERTIFICATION')
})

test('unresolved annual trigger routes to Exception', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization()]
    context.annualRenewalDue = 'unknown'
    assert.equal(
        evaluate(context).reasonCode,
        'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
    )
})

test('missing annual trigger disposition routes to Exception', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization()]
    delete context.annualRenewalDue
    assert.equal(
        evaluate(context).reasonCode,
        'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
    )
})

test('duplicate ambiguous active authorizations produce Exception', () => {
    const context = baseContext()
    context.authorizations = [
        activeAuthorization({ id: 'authorization_one' }),
        activeAuthorization({ id: 'authorization_two' }),
    ]
    assert.equal(evaluate(context).reasonCode, 'EX_CONFLICTING_ACTIVE_FORMS')
})

test('duplicate equivalent open request produces Exception and reference', () => {
    const context = baseContext()
    context.duplicateOpenCaseId = 'synthetic_duplicate_case'
    const result = evaluate(context)
    assert.equal(result.reasonCode, 'EX_DUPLICATE_OPEN_CASE')
    assert.equal(result.duplicateCaseId, 'synthetic_duplicate_case')
})

test('missing required inputs produce controlled Exception', () => {
    const context = baseContext()
    context.request.subjectId = ''
    assert.equal(evaluate(context).reasonCode, 'EX_MISSING_REQUIRED_DATA')
})

test('incomplete configuration produces controlled Exception', () => {
    const context = baseContext()
    context.configuration[0].annualRecertificationDate = ''
    assert.equal(evaluate(context).reasonCode, 'EX_INVALID_CONFIG')
})

test('incomplete active authorization history produces Exception', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization({ expirationDate: '' })]
    assert.equal(
        evaluate(context).reasonCode,
        'EX_INCOMPLETE_AUTHORIZATION_HISTORY'
    )
})

test('missing supervisor produces Exception', () => {
    const context = baseContext()
    context.request.authorizationContext.supervisorId = ''
    assert.equal(evaluate(context).reasonCode, 'EX_MISSING_SUPERVISOR')
})

test('time-limited request missing required end date produces Exception', () => {
    const context = baseContext()
    context.request.employmentType = 'contractor'
    context.request.requiresAccessEndDate = true
    assert.equal(evaluate(context).reasonCode, 'EX_MISSING_END_DATE')
})

test('WPC missing OM produces Exception without collapsing WPC identity', () => {
    const context = baseContext()
    context.request.requestedAccess = ['workforce_profile_charts']
    context.request.includesWpc = true
    assert.equal(evaluate(context).reasonCode, 'EX_MISSING_OM')
})

test('WPC is independently covered and can Reuse', () => {
    const context = baseContext()
    context.request.requestedAccess = ['workforce_profile_charts']
    context.request.includesWpc = true
    context.request.operationsManagerId = 'synthetic_operations_manager'
    context.authorizations = [
        activeAuthorization({ authorizedAccess: ['workforce_profile_charts'] }),
    ]
    assert.equal(evaluate(context).decisionClass, DECISIONS.REUSE)
})

test('unknown material-change policy routes to Exception', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization()]
    context.materialContext.position = 'unknown'
    assert.equal(evaluate(context).reasonCode, 'EX_AMBIGUOUS_MATERIAL_CHANGE')
})

test('explicit deterministic organization change produces Amendment', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization()]
    context.materialContext.organization = 'changed'
    assert.equal(evaluate(context).reasonCode, 'AMD_ORG_CHANGE')
})

test('grace window advances to following recertification cycle', () => {
    assert.equal(
        calculateProposedExpiration({
            evaluationDate: '2026-08-01',
            annualRecertificationDate: '2026-09-30',
            graceWindowDays: 90,
            accessEndDate: '',
        }),
        '2027-09-30'
    )
})

test('earlier access end date controls proposed expiration', () => {
    assert.equal(
        calculateProposedExpiration({
            evaluationDate: '2026-06-01',
            annualRecertificationDate: '2026-09-30',
            graceWindowDays: 90,
            accessEndDate: '2026-07-15',
        }),
        '2026-07-15'
    )
})

test('repeated evaluation is idempotent and does not mutate inputs', () => {
    const context = baseContext()
    context.authorizations = [activeAuthorization()]
    const before = structuredClone(context)
    assert.deepEqual(evaluate(context), evaluate(context))
    assert.deepEqual(context, before)
})

test('decision source contains no downstream record creation or task APIs', () => {
    const sources = [
        'src/server/authorization/AuthorizationDecisionService.js',
        'src/server/authorization/AuthorizationRepository.js',
        'src/server/authorization/ExpirationDateService.js',
    ]
        .map((file) => fs.readFileSync(path.join(root, file), 'utf8'))
        .join('\n')

    assert.doesNotMatch(sources, /GlideRecord|\.insert\(|\.update\(|sn_hr_core_task/)
    assert.doesNotMatch(
        sources,
        /x_2108496_hr_acces_rob_auth|x_2108496_hr_acces_auth_detail/
    )
})

test('exactly five decision classes are exposed', () => {
    assert.deepEqual(Object.keys(DECISIONS).sort(), [
        'AMENDMENT',
        'EXCEPTION',
        'NEW',
        'RENEWAL',
        'REUSE',
    ])
})
