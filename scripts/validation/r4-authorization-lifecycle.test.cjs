const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const { initiate } = require('../../src/server/authorization/AuthorizationLifecycleService')
const { completeScope } = require('../../src/server/authorization/AuthorizationScopeService')
const {
    recordEmployeeSignature,
    recordSupervisorAction,
} = require('../../src/server/authorization/SignatureExecutionService')
const { finalize } = require('../../src/server/authorization/AuthorizationFinalizationService')

function initiation(overrides = {}) {
    return {
        decisionClass: 'NEW',
        caseId: 'case_1',
        subjectId: 'employee_1',
        supervisorId: 'supervisor_1',
        positionSnapshot: 'Synthetic Analyst',
        organizationSnapshot: 'Synthetic Directorate',
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

test('Reuse creates no form and no Access Details', () => {
    const result = initiate(
        initiation({ decisionClass: 'REUSE', relatedAuthorizationId: 'authorization_1' })
    )
    assert.equal(result.form, null)
    assert.deepEqual(result.details, [])
    assert.equal(result.requiresEmployeeSignature, false)
})

test('Reuse still requires supervisor approval and signature', () => {
    const result = initiate(
        initiation({ decisionClass: 'REUSE', relatedAuthorizationId: 'authorization_1' })
    )
    assert.equal(result.requiresSupervisorApproval, true)
    assert.equal(result.requiresSupervisorSignature, true)
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

test('supervisor signer must match the governed supervisor', () => {
    assert.throws(
        () => recordSupervisorAction({
            supervisorId: 'supervisor_1', signerId: 'employee_1', outcome: 'APPROVED',
            signatureComplete: true, completedAt: '2026-08-16 12:20:00',
            documentTaskId: 'task_2', documentTaskExecutionId: 'execution_1',
        }),
        /does not match/
    )
})

test('approval without supervisor signature remains invalid', () => {
    assert.throws(
        () => recordSupervisorAction({
            supervisorId: 'supervisor_1', signerId: 'supervisor_1', outcome: 'APPROVED',
            signatureComplete: false, completedAt: '2026-08-16 12:20:00',
            documentTaskId: 'task_2', documentTaskExecutionId: 'execution_1',
        }),
        /both required/
    )
})

test('approved supervisor action persists outcome, identity, task, and timestamp', () => {
    const result = recordSupervisorAction({
        supervisorId: 'supervisor_1', signerId: 'supervisor_1', outcome: 'APPROVED',
        signatureComplete: true, completedAt: '2026-08-16 12:20:00',
        documentTaskId: 'task_2', documentTaskExecutionId: 'execution_1',
    })
    assert.equal(result.supervisorApprovalOutcome, 'approved')
    assert.equal(result.supervisorApprovalComplete, true)
    assert.equal(result.supervisorSignatureComplete, true)
    assert.equal(result.supervisorDocumentTaskId, 'task_2')
})

test('supervisor denial produces Denied and no signature completion', () => {
    const result = recordSupervisorAction({
        supervisorId: 'supervisor_1', signerId: 'supervisor_1', outcome: 'REFUSED',
        signatureComplete: false, completedAt: '2026-08-16 12:20:00',
        documentTaskId: 'task_2', documentTaskExecutionId: 'execution_1',
    })
    assert.equal(result.status, 'denied')
    assert.equal(result.supervisorApprovalOutcome, 'denied')
    assert.equal(result.supervisorSignatureComplete, false)
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
        'src/fluent/server/authorization-finalization.server.js',
    ]
    const source = files.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')
    assert.doesNotMatch(source, /sn_hr_core_task|Scheduled|GlideSchedule|RESTMessage|sn_ws|ARM assignment|OAS provisioning/)
})

test('runtime launch is limited to a stable production template name', () => {
    const source = fs.readFileSync(path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'), 'utf8')
    assert.match(source, /ROB Form 1768 Authorization/)
    assert.doesNotMatch(source, /41103ca0|bbd3e8e0|c34e242c|e4f117e8/)
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
    assert.doesNotMatch(source, /x_2108496_hr_acces_(signature|approval|pdf|document)/)
})
