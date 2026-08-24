const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const { initiate } = require('../../src/server/authorization/AuthorizationLifecycleService')
const { completeScope } = require('../../src/server/authorization/AuthorizationScopeService')
const {
    recordEmployeeSignature,
    recordSupervisorDecision,
    recordSupervisorSignature,
} = require('../../src/server/authorization/SignatureExecutionService')
const { finalize } = require('../../src/server/authorization/AuthorizationFinalizationService')
const {
    assessReuseEligibility,
    beginReuseAttestation,
    recordReuseSupervisorAction,
} = require('../../src/server/authorization/ReuseAttestationService')

function initiation(overrides = {}) {
    return {
        decisionClass: 'NEW',
        caseId: 'case_1',
        subjectId: 'employee_1',
        authorizationContext: {
            valid: true,
            supervisorId: 'supervisor_1',
            position: 'Synthetic Analyst',
            organization: 'Synthetic Directorate',
            evidence: 'Synthetic validated profile context.',
        },
        // ReuseAttestationService consumes the current request supervisor as a
        // direct, already-validated input; lifecycle initiation derives this
        // value from authorizationContext before invoking the service.
        supervisorId: 'supervisor_1',
        employmentType: 'federal_employee',
        accessEndDate: '',
        businessJustification: 'Synthetic R4 validation.',
        formVersion: '2026.04',
        decisionReason: 'NEW_NO_PRIOR_FORM',
        decisionEvaluatedAt: '2026-08-16 12:00:00',
        expirationDate: '2026-09-30',
        requestedAccess: ['usa_staffing'],
        priorAuthorizedAccess: [],
        relatedAuthorizationId: '',
        relatedAuthorization: null,
        currentAcceptedFormVersion: '2026.04',
        evaluationDate: '2026-08-16',
        ...overrides,
    }
}

function reuseInput(overrides = {}) {
    return initiation({
        decisionClass: 'REUSE',
        relatedAuthorizationId: 'authorization_1',
        relatedAuthorization: {
            id: 'authorization_1',
            subjectId: 'employee_1',
            status: 'active',
            formVersion: '2026.04',
            expirationDate: '2026-09-30',
            authorizedAccess: ['eopf', 'usa_staffing'],
        },
        requestedAccess: ['usa_staffing'],
        ...overrides,
    })
}

function approvedReuseAction(overrides = {}) {
    return {
        ...reuseInput(),
        signerId: 'supervisor_1',
        outcome: 'APPROVED',
        signatureComplete: true,
        completedAt: '2026-08-16 12:20:00',
        documentTaskId: 'reuse_task_1',
        documentTaskExecutionId: 'reuse_execution_1',
        ...overrides,
    }
}

function persistedApprovedAttestation(contextKey, overrides = {}) {
    return {
        status: 'approved',
        supervisorDecision: 'approved',
        supervisorSignerId: 'supervisor_1',
        supervisorSignatureDateTime: '2026-08-16 12:20:00',
        supervisorDocumentTaskId: 'reuse_task_1',
        documentTaskExecutionId: 'reuse_execution_1',
        attestationCompletedAt: '2026-08-16 12:20:00',
        contextKey,
        ...overrides,
    }
}

function readyAuthorization(overrides = {}) {
    return {
        id: 'authorization_2',
        status: 'pending_supervisor_approval_signature',
        employeeSignatureComplete: true,
        supervisorApprovalComplete: true,
        supervisorApprovalOutcome: 'approved',
        supervisorSignatureComplete: true,
        supervisorSignatureDateTime: '2026-08-16 12:30:00',
        finalPdfAttachmentId: '',
        supersedesAuthorizationId: '',
        ...overrides,
    }
}

function pdf(overrides = {}) {
    return {
        id: 'attachment_1',
        contentType: 'application/pdf',
        createdAt: '2026-08-16 12:31:00',
        ...overrides,
    }
}

test('New creates one pending Authorization Form plan', () => {
    const result = initiate(initiation())
    assert.equal(result.action, 'create')
    assert.equal(result.form.status, 'pending_employee_signature')
    assert.deepEqual(result.form.transitions, ['draft', 'pending_employee_signature'])
})

test('New creates the complete requested scope once', () => {
    const result = initiate(initiation({ requestedAccess: ['eopf', 'eopf', 'usa_staffing'] }))
    assert.deepEqual(result.details.map((detail) => detail.accessItemId), ['eopf', 'usa_staffing'])
})

test('New requires employee and supervisor signature gates', () => {
    const result = initiate(initiation())
    assert.equal(result.requiresEmployeeSignature, true)
    assert.equal(result.requiresSupervisorApproval, true)
    assert.equal(result.requiresSupervisorSignature, true)
})

test('repeat initiation returns the existing lifecycle without duplication', () => {
    const existingLifecycle = { form: { id: 'authorization_1' }, details: [{ accessItemId: 'usa_staffing' }] }
    const result = initiate(initiation({ existingLifecycle }))
    assert.equal(result.action, 'existing')
    assert.equal(result.form.id, 'authorization_1')
    assert.equal(result.details.length, 1)
})

test('Amendment carries forward prior scope and adds the request', () => {
    const result = initiate(
        initiation({
            decisionClass: 'AMENDMENT',
            relatedAuthorizationId: 'authorization_1',
            priorAuthorizedAccess: ['fpps_wtts', 'eopf'],
            requestedAccess: ['eopf', 'usa_staffing'],
        })
    )
    assert.deepEqual(result.details.map((detail) => detail.accessItemId), [
        'eopf',
        'fpps_wtts',
        'usa_staffing',
    ])
    assert.equal(result.form.supersedesAuthorizationId, 'authorization_1')
})

test('Renewal carries complete scope and uses current Form Version', () => {
    const result = initiate(
        initiation({
            decisionClass: 'RENEWAL',
            relatedAuthorizationId: 'authorization_1',
            priorAuthorizedAccess: ['fpps_wtts', 'eopf'],
            requestedAccess: ['usa_staffing'],
        })
    )
    assert.equal(result.form.formVersion, '2026.04')
    assert.deepEqual(result.details.map((detail) => detail.accessItemId), [
        'eopf',
        'fpps_wtts',
        'usa_staffing',
    ])
})

test('replacement decisions require a predecessor', () => {
    assert.throws(
        () => initiate(initiation({ decisionClass: 'AMENDMENT' })),
        /requires a predecessor/
    )
})

test('Reuse creates zero Authorization Forms', () => {
    const result = initiate(reuseInput())
    assert.equal(result.form, null)
    assert.equal(result.formsCreated, 0)
})

test('Reuse creates zero Authorized Access Details', () => {
    const result = initiate(reuseInput())
    assert.deepEqual(result.details, [])
    assert.equal(result.detailsCreated, 0)
    assert.equal(result.requiresEmployeeSignature, false)
})

test('Reuse still requires supervisor approval and signature', () => {
    const result = initiate(reuseInput())
    assert.equal(result.requiresSupervisorApproval, true)
    assert.equal(result.requiresSupervisorSignature, true)
})

test('Reuse references exactly one selected qualifying authorization', () => {
    const result = assessReuseEligibility(reuseInput())
    assert.equal(result.eligible, true)
    assert.equal(result.relatedAuthorizationId, 'authorization_1')
    assert.equal(result.action, 'attest')
})

test('active current authorization permits Reuse attestation', () => {
    const result = beginReuseAttestation(reuseInput())
    assert.equal(result.action, 'create_attestation')
    assert.equal(result.attestationStatus, 'pending')
    assert.equal(result.createSupervisorExecution, true)
})

for (const status of ['expired', 'lapsed', 'revoked', 'superseded']) {
    test(`${status} authorization rejects Reuse continuation`, () => {
        const result = assessReuseEligibility(
            reuseInput({
                relatedAuthorization: {
                    ...reuseInput().relatedAuthorization,
                    status,
                },
            })
        )
        assert.equal(result.eligible, false)
        assert.equal(result.requiresDecisionReevaluation, true)
    })
}

test('uncovered requested scope rejects Reuse continuation', () => {
    const result = assessReuseEligibility(
        reuseInput({ requestedAccess: ['usa_staffing', 'fpps_wtts'] })
    )
    assert.equal(result.eligible, false)
    assert.equal(result.reasonCode, 'REUSE_SCOPE_NOT_FULLY_COVERED')
    assert.deepEqual(result.uncoveredAccess, ['fpps_wtts'])
})

test('supervisor APPROVED and signed completes the request-level attestation', () => {
    const result = recordReuseSupervisorAction(approvedReuseAction())
    assert.equal(result.attestationStatus, 'approved')
    assert.equal(result.supervisorDecision, 'approved')
    assert.equal(result.supervisorSignatureComplete, true)
    assert.equal(result.fulfillmentEligible, true)
    assert.equal(result.supervisorDocumentTaskId, 'reuse_task_1')
})

test('supervisor denial makes the current Reuse request ineligible', () => {
    const result = recordReuseSupervisorAction(
        approvedReuseAction({ outcome: 'REFUSED', signatureComplete: false })
    )
    assert.equal(result.attestationStatus, 'denied')
    assert.equal(result.supervisorDecision, 'denied')
    assert.equal(result.fulfillmentEligible, false)
})

test('Reuse denial leaves the underlying authorization unchanged', () => {
    const authorization = reuseInput().relatedAuthorization
    const before = structuredClone(authorization)
    const result = recordReuseSupervisorAction(
        approvedReuseAction({
            relatedAuthorization: authorization,
            outcome: 'DENIED',
            signatureComplete: false,
        })
    )
    assert.deepEqual(authorization, before)
    assert.equal(result.authorizationMutation, null)
})

test('repeat unchanged Reuse execution is idempotent', () => {
    const first = recordReuseSupervisorAction(approvedReuseAction())
    const repeated = beginReuseAttestation(
        reuseInput({
            existingReuseAttestation: persistedApprovedAttestation(first.contextKey),
        })
    )
    assert.equal(repeated.action, 'existing_attestation')
    assert.equal(repeated.changed, false)
    assert.equal(repeated.createSupervisorExecution, false)
    assert.equal(repeated.formsCreated, 0)
    assert.equal(repeated.detailsCreated, 0)
})

test('changed supervisor invalidates the prior Reuse attestation', () => {
    const completed = recordReuseSupervisorAction(approvedReuseAction())
    const result = beginReuseAttestation(
        reuseInput({
            authorizationContext: {
                ...initiation().authorizationContext,
                supervisorId: 'supervisor_2',
            },
            supervisorId: 'supervisor_2',
            existingReuseAttestation: persistedApprovedAttestation(completed.contextKey),
        })
    )
    assert.equal(result.attestationStatus, 'invalidated')
    assert.equal(result.requiresDecisionReevaluation, true)
    assert.equal(result.fulfillmentEligible, false)
})

test('changed scope invalidates the prior Reuse attestation context', () => {
    const completed = recordReuseSupervisorAction(approvedReuseAction())
    const result = beginReuseAttestation(
        reuseInput({
            requestedAccess: ['eopf'],
            existingReuseAttestation: persistedApprovedAttestation(completed.contextKey),
        })
    )
    assert.equal(result.attestationStatus, 'invalidated')
    assert.equal(result.requiresDecisionReevaluation, true)
})

test('incomplete persisted approval evidence is invalidated instead of reused', () => {
    const completed = recordReuseSupervisorAction(approvedReuseAction())
    const result = beginReuseAttestation(
        reuseInput({
            existingReuseAttestation: persistedApprovedAttestation(
                completed.contextKey,
                { supervisorDocumentTaskId: '' }
            ),
        })
    )
    assert.equal(result.attestationStatus, 'invalidated')
    assert.equal(result.reasonCode, 'REUSE_ATTESTATION_EVIDENCE_INCOMPLETE')
    assert.equal(result.fulfillmentEligible, false)
})

test('changed authorization state invalidates completed Reuse evidence', () => {
    const completed = recordReuseSupervisorAction(approvedReuseAction())
    const result = beginReuseAttestation(
        reuseInput({
            relatedAuthorization: {
                ...reuseInput().relatedAuthorization,
                status: 'revoked',
            },
            existingReuseAttestation: persistedApprovedAttestation(completed.contextKey),
        })
    )
    assert.equal(result.attestationStatus, 'invalidated')
    assert.equal(result.requiresDecisionReevaluation, true)
})

test('Exception creates no authorization lifecycle', () => {
    assert.deepEqual(initiate(initiation({ decisionClass: 'EXCEPTION' })), {
        action: 'exception',
        form: null,
        details: [],
    })
})

test('missing Form Version stops lifecycle preparation', () => {
    assert.throws(() => initiate(initiation({ formVersion: '' })), /form version/)
})

test('missing decision evidence stops lifecycle preparation', () => {
    assert.throws(() => initiate(initiation({ decisionReason: '' })), /decision reason/)
})

test('empty authorization scope is rejected', () => {
    assert.throws(() => initiate(initiation({ requestedAccess: [] })), /scope is required/)
})

test('employee signer must match the subject', () => {
    assert.throws(
        () =>
            recordEmployeeSignature({
                subjectId: 'employee_1', signerId: 'employee_2',
                completedAt: '2026-08-16 12:10:00', documentTaskId: 'task_1',
                documentTaskExecutionId: 'execution_1',
            }),
        /does not match/
    )
})

test('employee signature persists identity, task, execution, and timestamp', () => {
    const result = recordEmployeeSignature({
        subjectId: 'employee_1', signerId: 'employee_1',
        completedAt: '2026-08-16 12:10:00', documentTaskId: 'task_1',
        documentTaskExecutionId: 'execution_1',
    })
    assert.equal(result.employeeSignatureComplete, true)
    assert.equal(result.employeeSignerId, 'employee_1')
    assert.equal(result.employeeDocumentTaskId, 'task_1')
    assert.equal(result.documentTaskExecutionId, 'execution_1')
})

test('employee signature advances only to supervisor pending', () => {
    const result = recordEmployeeSignature({
        subjectId: 'employee_1', signerId: 'employee_1',
        completedAt: '2026-08-16 12:10:00', documentTaskId: 'task_1',
        documentTaskExecutionId: 'execution_1',
    })
    assert.equal(result.status, 'pending_supervisor_approval_signature')
})

test('supervisor approver must match the governed supervisor', () => {
    assert.throws(
        () => recordSupervisorDecision({
            supervisorId: 'supervisor_1', approverId: 'employee_1', outcome: 'APPROVED',
            decidedAt: '2026-08-16 12:20:00',
        }),
        /does not match/
    )
})

test('approved supervisor decision persists evidence and launches signature', () => {
    const result = recordSupervisorDecision({
        supervisorId: 'supervisor_1', approverId: 'supervisor_1', outcome: 'APPROVED',
        decidedAt: '2026-08-16 12:20:00',
    })
    assert.equal(result.supervisorApprovalOutcome, 'approved')
    assert.equal(result.supervisorApprovalComplete, true)
    assert.equal(result.supervisorSignatureComplete, false)
    assert.equal(result.launchSupervisorSignature, true)
})

test('supervisor denial produces Denied and creates no signature task', () => {
    const result = recordSupervisorDecision({
        supervisorId: 'supervisor_1', approverId: 'supervisor_1', outcome: 'DENIED',
        decidedAt: '2026-08-16 12:20:00',
    })
    assert.equal(result.status, 'denied')
    assert.equal(result.supervisorApprovalOutcome, 'denied')
    assert.equal(result.supervisorSignatureComplete, false)
    assert.equal(result.supervisorDocumentTaskId, '')
    assert.equal(result.launchSupervisorSignature, false)
})

test('supervisor signature requires prior explicit approval', () => {
    assert.throws(
        () => recordSupervisorSignature({
            supervisorId: 'supervisor_1', signerId: 'supervisor_1',
            supervisorApprovalComplete: false, supervisorApprovalOutcome: 'denied',
            signatureComplete: true, completedAt: '2026-08-16 12:25:00',
            documentTaskId: 'task_2', documentTaskExecutionId: 'execution_1',
        }),
        /prior explicit approval/
    )
})

test('approved supervisor signature persists separately from decision', () => {
    const result = recordSupervisorSignature({
        supervisorId: 'supervisor_1', signerId: 'supervisor_1',
        supervisorApprovalComplete: true, supervisorApprovalOutcome: 'approved',
        signatureComplete: true, completedAt: '2026-08-16 12:25:00',
        documentTaskId: 'task_2', documentTaskExecutionId: 'execution_1',
    })
    assert.equal(result.supervisorSignatureComplete, true)
    assert.equal(result.supervisorDocumentTaskId, 'task_2')
})

test('finalization waits for employee signature evidence', () => {
    assert.throws(
        () => finalize({ authorization: readyAuthorization({ employeeSignatureComplete: false }), pdf: pdf(), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' }),
        /Employee signature/
    )
})

test('finalization waits for supervisor approval and signature', () => {
    assert.throws(
        () => finalize({ authorization: readyAuthorization({ supervisorApprovalComplete: false }), pdf: pdf(), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' }),
        /Supervisor approval/
    )
})

test('denied authorization cannot finalize', () => {
    assert.throws(
        () => finalize({ authorization: readyAuthorization({ status: 'denied' }), pdf: pdf(), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' }),
        /not ready/
    )
})

test('stale R3 decision context cannot finalize', () => {
    assert.throws(
        () => finalize({ authorization: readyAuthorization(), pdf: pdf(), decisionContextCurrent: false, supervisorLocalDate: '2026-08-16' }),
        /stale/
    )
})

test('non-PDF artifact cannot activate an authorization', () => {
    assert.throws(
        () => finalize({ authorization: readyAuthorization(), pdf: pdf({ contentType: 'text/html' }), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' }),
        /final PDF/
    )
})

test('Final Authorization Date equals the supervisor local signature date', () => {
    const result = finalize({ authorization: readyAuthorization(), pdf: pdf(), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' })
    assert.equal(result.authorization.finalAuthorizationDate, '2026-08-16')
    assert.equal(result.authorization.effectiveDate, '2026-08-16')
})

test('successful finalization activates form and opens only pending fulfillment state', () => {
    const result = finalize({ authorization: readyAuthorization(), pdf: pdf(), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' })
    assert.equal(result.authorization.status, 'active')
    assert.equal(result.detailStatus, 'pending_fulfillment')
})

test('repeat finalization with the same PDF is idempotent', () => {
    const result = finalize({ authorization: readyAuthorization({ finalPdfAttachmentId: 'attachment_1' }), pdf: pdf(), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' })
    assert.deepEqual(result, { changed: false })
})

test('a second final PDF is rejected', () => {
    assert.throws(
        () => finalize({ authorization: readyAuthorization({ finalPdfAttachmentId: 'attachment_1' }), pdf: pdf({ id: 'attachment_2' }), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' }),
        /already has/
    )
})

test('Amendment and Renewal supersede predecessor only in successful finalization plan', () => {
    const result = finalize({ authorization: readyAuthorization({ supersedesAuthorizationId: 'authorization_1' }), pdf: pdf(), decisionContextCurrent: true, supervisorLocalDate: '2026-08-16' })
    assert.equal(result.predecessor.status, 'superseded')
    assert.equal(result.predecessor.supersededByAuthorizationId, 'authorization_2')
})

test('WPC remains a distinct scope item', () => {
    assert.deepEqual(
        completeScope({ decisionClass: 'AMENDMENT', priorAuthorizedAccess: ['oas_datamart'], requestedAccess: ['workforce_profile_charts'] }),
        ['oas_datamart', 'workforce_profile_charts']
    )
})

test('runtime scripts create no fulfillment, renewal, ARM, or OAS work', () => {
    const files = [
        'src/fluent/server/authorization-lifecycle-initiation.server.js',
        'src/fluent/server/authorization-signature-evidence.server.js',
        'src/fluent/server/supervisor-approval-evidence.server.js',
        'src/fluent/server/authorization-finalization.server.js',
    ]
    const source = files.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')
    assert.doesNotMatch(source, /sn_hr_core_task|Scheduled|GlideSchedule|RESTMessage|sn_ws|ARM assignment|OAS provisioning/)
})

test('runtime launch is limited to a stable production template name', () => {
    const evidenceSource = fs.readFileSync(path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'), 'utf8')
    const initiationSource = fs.readFileSync(path.join(root, 'src/fluent/server/authorization-lifecycle-initiation.server.js'), 'utf8')
    assert.match(evidenceSource, /ROB Form 1768 Authorization/)
    assert.match(initiationSource, /ROB Form 1768 Authorization/)
    assert.match(evidenceSource, /ROB Reuse Supervisor Attestation/)
    assert.match(initiationSource, /sysapproval_approver/)
    assert.match(initiationSource, /DocumentTaskUtils\(\)\.createDocumentTask/)
    assert.match(initiationSource, /participant\.addQuery\('name', 'Employee'\)/)
    assert.doesNotMatch(initiationSource, /GenerateDocumentAPI\(\)\.initiateDocumentTasks/)
    assert.doesNotMatch(evidenceSource, /new GlideRecord\('sysapproval_approver'\)/)
    assert.doesNotMatch(evidenceSource, /requestSupervisorDecision/)
    assert.doesNotMatch(initiationSource, /assigned_to/)
    const source = evidenceSource + initiationSource
    assert.doesNotMatch(source, /41103ca0|bbd3e8e0|c34e242c|e4f117e8/)
})

test('employee signature hands supervisor decision to the ROB-owned Flow', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /pending_supervisor_approval_signature/)
    assert.match(source, /ROB-owned approval Flow/)
    assert.match(source, /participantName === 'Employee'/)
    assert.match(source, /participantName === 'Supervisor'/)
    assert.doesNotMatch(source, /requestSupervisorDecision/)
    assert.doesNotMatch(source, /new GlideRecord\('sysapproval_approver'\)/)
})

test('post-signature final PDF fills and flattens the governed Form 1768 on Authorization Form', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /fillDocumentFieldsAndFlatten/)
    assert.match(source, /x_2166123_hr_acc_0_rob_auth/)
    assert.match(source, /FlattenType:\s*'fully_flatten'/)
    assert.match(source, /Employee Signature Date\/Time/)
    assert.match(source, /Supervisor Signature Date\/Time/)
    assert.match(source, /Generated Date\/Time/)
    assert.match(source, /supervisor_approval_outcome.*approved/s)
    assert.doesNotMatch(source, /current\.getValue\('body'\).*APPROVED/)
    assert.match(source, /new GlideDateTime\(\)\.getValue\(\)/)
    assert.doesNotMatch(source, /gs\.nowDateTime\(\)/)
    assert.doesNotMatch(source, /GlideSysAttachment|assigned_to/)
})

test('Reuse begins with a native decision and creates no governed form', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-lifecycle-initiation.server.js'),
        'utf8'
    )
    assert.match(source, /new GlideRecord\('sysapproval_approver'\)/)
    assert.match(source, /setValue\('state', 'requested'\)/)
    assert.match(source, /requestSupervisorDecision/)
})

test('native decision branches denial from approved supervisor signing', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/supervisor-approval-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /state === 'rejected'/)
    assert.match(source, /status', 'denied'/)
    assert.match(source, /state.*approved/s)
    assert.match(source, /launchSupervisorSignature/)
    assert.match(source, /ROB Reuse Supervisor Attestation/)
    assert.match(source, /employee_signature_complete/)
    assert.match(source, /sn_hr_core_case_payroll/)
    assert.match(source, /sn_hr_core_case_workforce_admin/)
    assert.doesNotMatch(source, /new GlideRecord\('sn_hr_core_case'\)/)
    assert.doesNotMatch(source, /assigned_to/)
})

test('native approval response remains inactive until a safe persistence boundary exists', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/business-rules/rob-authorization-lifecycle.now.ts'),
        'utf8'
    )
    assert.match(
        source,
        /captureSupervisorApprovalDecision[\s\S]*?name:\s*'ROB Capture Native Supervisor Approval Decision'[\s\S]*?active:\s*false/
    )
})

test('production lifecycle initiation remains disabled until native signing configuration passes', () => {
    const lifecycleBusinessRules = fs.readFileSync(
        path.join(root, 'src/fluent/business-rules/rob-authorization-lifecycle.now.ts'),
        'utf8'
    )
    assert.match(lifecycleBusinessRules, /initiatePayrollAuthorizationLifecycle[\s\S]*?active:\s*false/)
    assert.match(lifecycleBusinessRules, /initiateWorkforceAuthorizationLifecycle[\s\S]*?active:\s*false/)
})

test('Authorization Form has approved native evidence and final PDF references', () => {
    const source = fs.readFileSync(path.join(root, 'src/fluent/tables/rob-authorization-form.now.ts'), 'utf8')
    for (const field of [
        'employee_document_task', 'supervisor_approval_outcome',
        'supervisor_document_task', 'document_task_execution',
        'final_authorization_date', 'final_pdf_attachment',
    ]) assert.match(source, new RegExp(`${field}:`))
})

test('R4 adds no custom business, signature, approval, or document table', () => {
    const source = fs.readFileSync(path.join(root, 'src/fluent/business-rules/rob-authorization-lifecycle.now.ts'), 'utf8')
    assert.doesNotMatch(source, /Table\s*\(/)
    assert.doesNotMatch(source, /x_2166123_hr_acc_0_(signature|approval|pdf|document)/)
})
