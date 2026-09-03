const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { test } = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const lifecycleEntrySource = fs.readFileSync(
    path.join(root, 'src/fluent/server/rob-authorization-lifecycle-entry.server.js'),
    'utf8'
)
const lifecycleAdapterSource = fs.readFileSync(
    path.join(root, 'src/fluent/server/authorization-lifecycle-initiation.server.js'),
    'utf8'
)
const lifecycleEntryMetadata = fs.readFileSync(
    path.join(root, 'src/fluent/script-includes/rob-authorization-lifecycle-entry.now.ts'),
    'utf8'
)
const lifecycleActionMetadata = fs.readFileSync(
    path.join(root, 'src/fluent/actions/rob-execute-authorization-lifecycle.now.ts'),
    'utf8'
)
const lifecycleActionSource = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/rob-execute-authorization-lifecycle-action.server.js'
    ),
    'utf8'
)
const signingVerificationActionMetadata = fs.readFileSync(
    path.join(
        root,
        'src/fluent/actions/rob-verify-authorization-signing-gate.now.ts'
    ),
    'utf8'
)
const signingVerificationActionSource = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/rob-verify-authorization-signing-gate-action.server.js'
    ),
    'utf8'
)
const lifecycleEventMetadata = fs.readFileSync(
    path.join(
        root,
        'src/fluent/events/rob-authorization-lifecycle-events.now.ts'
    ),
    'utf8'
)
const lifecycleEventActionsMetadata = fs.readFileSync(
    path.join(
        root,
        'src/fluent/script-actions/rob-authorization-lifecycle-event-actions.now.ts'
    ),
    'utf8'
)
const lifecycleServiceCallerAccessMetadata = fs.readFileSync(
    path.join(
        root,
        'src/fluent/security/rob-lifecycle-service-read-caller-access.now.ts'
    ),
    'utf8'
)
const lifecycleEventEnqueueSource = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/authorization-lifecycle-event-enqueue.server.js'
    ),
    'utf8'
)
const lifecycleCreateEventSource = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/authorization-lifecycle-create-event.server.js'
    ),
    'utf8'
)
const lifecycleVerifyEventSource = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/authorization-lifecycle-verify-event.server.js'
    ),
    'utf8'
)

function callableLifecycle(records = {}) {
    const tablesRead = []
    const context = {
        Class: {
            create: () =>
                function ScriptIncludeClass() {
                    if (this.initialize) this.initialize()
                },
        },
        GlideRecord: function GlideRecord(table) {
            tablesRead.push(table)
            let values = null
            this.get = (sysId) => {
                values = records[`${table}:${sysId}`] || null
                return Boolean(values)
            }
            this.getValue = (field) => (values && values[field]) || ''
            this.getUniqueValue = () => (values && values.sys_id) || ''
        },
        gs: { error() {} },
    }
    vm.runInNewContext(lifecycleEntrySource, context)
    return {
        entry: new context.RobAuthorizationLifecycleEntry(),
        tablesRead,
    }
}

function callableLifecycleAction(inputs, methodOutcomes = {}) {
    const calls = []
    const outputs = {}
    const context = {
        inputs,
        outputs,
        RobAuthorizationLifecycleEntry: function RobAuthorizationLifecycleEntry() {
            this.executePayroll = (caseSysId) => {
                calls.push(['payroll', caseSysId])
                return methodOutcomes.payroll || {
                    success: true,
                    disposition: 'authorization_created',
                    case_sys_id: caseSysId,
                }
            }
            this.executeWorkforce = (caseSysId) => {
                calls.push(['workforce', caseSysId])
                return methodOutcomes.workforce || {
                    success: true,
                    disposition: 'authorization_created',
                    case_sys_id: caseSysId,
                }
            }
        },
    }
    vm.runInNewContext(lifecycleActionSource, context)
    return { calls, outputs }
}

function callableSigningVerificationAction(inputs, methodOutcome) {
    const calls = []
    const outputs = {}
    const context = {
        inputs,
        outputs,
        RobAuthorizationLifecycleEntry: function RobAuthorizationLifecycleEntry() {
            this.verifyAuthorizationSigning = (authorizationSysId) => {
                calls.push(authorizationSysId)
                return methodOutcome || {
                    success: true,
                    disposition: 'post_commit_signing_started',
                    case_sys_id: 'b'.repeat(32),
                    authorization_sys_id: authorizationSysId,
                    signing_started: true,
                }
            }
        },
    }
    vm.runInNewContext(signingVerificationActionSource, context)
    return { calls, outputs }
}

function queuedLifecycleEvent(table, caseSysId) {
    const queued = []
    const errors = []
    const current = {
        getTableName: () => table,
        getUniqueValue: () => caseSysId,
    }
    vm.runInNewContext(lifecycleEventEnqueueSource, {
        current,
        gs: {
            error: (message) => errors.push(message),
            eventQueue: (...args) => queued.push(args),
        },
    })
    return { current, queued, errors }
}

function callableLifecycleCreateEvent(parm1, parm2, methodOutcomes = {}) {
    const calls = []
    const queued = []
    const current = { getUniqueValue: () => parm1 }
    const context = {
        current,
        event: { parm1, parm2 },
        gs: { eventQueue: (...args) => queued.push(args) },
        RobAuthorizationLifecycleEntry: function RobAuthorizationLifecycleEntry() {
            this.executePayroll = (caseSysId) => {
                calls.push(['payroll', caseSysId])
                return methodOutcomes.payroll
            }
            this.executeWorkforce = (caseSysId) => {
                calls.push(['workforce', caseSysId])
                return methodOutcomes.workforce
            }
        },
    }
    let error
    try {
        vm.runInNewContext(lifecycleCreateEventSource, context)
    } catch (caught) {
        error = caught
    }
    return { calls, queued, error }
}

function callableLifecycleVerifyEvent(authorizationSysId, methodOutcome) {
    const calls = []
    const context = {
        event: { parm1: authorizationSysId },
        RobAuthorizationLifecycleEntry: function RobAuthorizationLifecycleEntry() {
            this.verifyAuthorizationSigning = (exactAuthorizationSysId) => {
                calls.push(exactAuthorizationSysId)
                return methodOutcome
            }
        },
    }
    let error
    try {
        vm.runInNewContext(lifecycleVerifyEventSource, context)
    } catch (caught) {
        error = caught
    }
    return { calls, error }
}
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

test('native Supervisor rejection is recorded before any signature task', () => {
    const result = recordSupervisorDecision({
        supervisorId: 'supervisor_1', approverId: 'supervisor_1',
        outcome: 'DENIED', decidedAt: '2026-08-16 12:25:00',
    })
    assert.equal(result.status, 'denied')
    assert.equal(result.supervisorApprovalComplete, true)
    assert.equal(result.supervisorApprovalOutcome, 'denied')
    assert.equal(result.supervisorSignatureComplete, false)
    assert.equal(result.supervisorSignerId, '')
    assert.equal(result.supervisorDocumentTaskId, '')
    assert.equal(result.launchSupervisorSignature, false)
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
        'src/fluent/server/rob-authorization-lifecycle-entry.server.js',
        'src/fluent/server/authorization-signature-evidence.server.js',
        'src/fluent/server/supervisor-approval-evidence.server.js',
        'src/fluent/server/supervisor-signature-launch.server.js',
        'src/fluent/server/authorization-finalization.server.js',
    ]
    const source = files.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')
    assert.doesNotMatch(source, /sn_hr_core_task|Scheduled|GlideSchedule|RESTMessage|sn_ws|ARM assignment|OAS provisioning/)
})

test('lifecycle creation uses narrow native persistence and no generic write APIs', () => {
    const source = lifecycleEntrySource
    assert.doesNotMatch(source, /\.setValue\(/)
    assert.doesNotMatch(source, /\.insert\(\)/)
    assert.doesNotMatch(source, /\.deleteRecord\(\)/)
    assert.doesNotMatch(source, /authorization\.update\(\)|detail\.update\(\)/)
    assert.match(source, /nativeCreatedRecordId\([\s\S]*?'x_2166123_rob_auth\.rob_create_authorization_form_native'/)
    assert.match(source, /nativeCreatedRecordId\([\s\S]*?'x_2166123_rob_auth\.rob_create_authorized_access_detail_native'/)
    assert.match(source, /\.subflow\(\s*'x_2166123_rob_auth\.rob_persist_authorization_lifecycle_native'\s*\)/)
    assert.match(source, /\.inForeground\(\)/)
    assert.match(source, /execution\.getOutputs\(\)/)
    assert.match(source, /created_authorization_sys_id/)
    assert.match(source, /created_detail_sys_id/)
    assert.match(source, /authorization\.get\(authorizationId\)/)
    assert.match(source, /committedDetail\.get\(detailId\)/)
    assert.match(source, /duplicate governed Access Details exist for the scope/)
    assert.match(source, /the committed Authorization Form signing gate could not be verified/)
})

test('package-private callable entry enforces fixed tables and exact committed reread', () => {
    const rules = fs.readFileSync(
        path.join(root, 'src/fluent/business-rules/rob-authorization-lifecycle.now.ts'),
        'utf8'
    )
    const source = lifecycleEntrySource

    for (const rule of [
        'initiatePayrollAuthorizationLifecycle',
        'initiateWorkforceAuthorizationLifecycle',
    ]) {
        const block = rules.match(
            new RegExp(`export const ${rule} = BusinessRule\\(\\{[\\s\\S]*?\\n\\}\\)`)
        )
        assert.ok(block, `${rule} definition must exist`)
        assert.match(
            block[0],
            /active:\s*false[\s\S]*?when:\s*'after'[\s\S]*?order:\s*300/
        )
        assert.match(
            block[0],
            /authorization_pathINnew,reuse,amendment,renewal/
        )
        assert.match(
            block[0],
            /authorization-lifecycle-event-enqueue\.server\.js/
        )
        assert.doesNotMatch(block[0], /priority:\s*100|when:\s*'async'/)
    }
    assert.match(lifecycleEntryMetadata, /name:\s*'RobAuthorizationLifecycleEntry'/)
    assert.match(lifecycleEntryMetadata, /active:\s*true/)
    assert.match(lifecycleEntryMetadata, /clientCallable:\s*false/)
    assert.match(lifecycleEntryMetadata, /accessibleFrom:\s*'package_private'/)
    assert.match(lifecycleEntryMetadata, /sandboxCallable:\s*false/)
    assert.match(source, /executePayroll:\s*function \(caseSysId\)/)
    assert.match(source, /executeWorkforce:\s*function \(caseSysId\)/)
    assert.doesNotMatch(source, /executeLifecycle|executeScript|encodedQuery/)
    assert.doesNotMatch(source, /execute:\s*function/)
    assert.match(source, /function committedSourceCase\(\)/)
    assert.match(source, /sourceCaseId = String\(caseSysId \|\| ''\)\.trim\(\)/)
    assert.match(source, /executeFixed\(caseSysId, 'sn_hr_core_case_payroll'\)/)
    assert.match(source, /executeFixed\(caseSysId, 'sn_hr_core_case_workforce_admin'\)/)
    assert.match(source, /committedCase\.get\(sourceCaseId\)/)
    assert.match(source, /could not be reread after commit/)
    assert.match(lifecycleAdapterSource, /new RobAuthorizationLifecycleEntry\(\)/)
    assert.match(lifecycleAdapterSource, /executePayroll\(caseSysId\)/)
    assert.match(lifecycleAdapterSource, /executeWorkforce\(caseSysId\)/)
})

test('post-commit events are registered with exact cross-scope caller restriction', () => {
    assert.equal(
        (lifecycleEventMetadata.match(/table:\s*'sysevent_register'/g) || []).length,
        2
    )
    assert.match(
        lifecycleEventMetadata,
        /x_2166123_rob_auth\.lifecycle\.create/
    )
    assert.match(
        lifecycleEventMetadata,
        /x_2166123_rob_auth\.lifecycle\.verify/
    )
    assert.equal(
        (lifecycleEventMetadata.match(/caller_access:\s*'2'/g) || []).length,
        2
    )
    assert.equal((lifecycleEventMetadata.match(/priority:\s*100/g) || []).length, 2)
    assert.doesNotMatch(lifecycleEventMetadata, /queue\s*:/)
    for (const eventName of [
        'x_2166123_rob_auth.lifecycle.create',
        'x_2166123_rob_auth.lifecycle.verify',
    ]) {
        assert.ok(eventName.length <= 40)
    }
})

test('lifecycle entry has exact caller-specific HR Service read access', () => {
    assert.match(
        lifecycleServiceCallerAccessMetadata,
        /table:\s*'sys_restricted_caller_access'/
    )
    assert.match(
        lifecycleServiceCallerAccessMetadata,
        /source:\s*robAuthorizationLifecycleEntry/
    )
    assert.match(lifecycleServiceCallerAccessMetadata, /source_type:\s*'2'/)
    assert.match(
        lifecycleServiceCallerAccessMetadata,
        /Now\.ref\('sys_db_object',\s*\{\s*name:\s*'sn_hr_core_service'/s
    )
    assert.match(lifecycleServiceCallerAccessMetadata, /operation:\s*'read'/)
    assert.match(lifecycleServiceCallerAccessMetadata, /status:\s*'2'/)
    assert.doesNotMatch(
        lifecycleServiceCallerAccessMetadata,
        /GlideRecord|create|write|delete|execute/
    )
})

test('event Script Actions are two fixed active V2 handlers with no false access claim', () => {
    assert.equal(
        (lifecycleEventActionsMetadata.match(/ScriptAction\(\{/g) || []).length,
        2
    )
    assert.equal(
        (lifecycleEventActionsMetadata.match(/active:\s*true/g) || []).length,
        2
    )
    assert.match(
        lifecycleEventActionsMetadata,
        /authorization-lifecycle-create-event\.server\.js/
    )
    assert.match(
        lifecycleEventActionsMetadata,
        /authorization-lifecycle-verify-event\.server\.js/
    )
    assert.doesNotMatch(
        lifecycleEventActionsMetadata,
        /access:\s*'package_private'|accessibleFrom|clientCallable/
    )
})

test('after Business Rules enqueue only one fixed create event for the exact source table', () => {
    const payrollId = '1'.repeat(32)
    const payroll = queuedLifecycleEvent('sn_hr_core_case_payroll', payrollId)
    assert.equal(payroll.queued.length, 1)
    assert.deepEqual(payroll.queued[0], [
        'x_2166123_rob_auth.lifecycle.create',
        payroll.current,
        payrollId,
        'payroll',
    ])

    const workforceId = '2'.repeat(32)
    const workforce = queuedLifecycleEvent(
        'sn_hr_core_case_workforce_admin',
        workforceId
    )
    assert.equal(workforce.queued.length, 1)
    assert.equal(workforce.queued[0][2], workforceId)
    assert.equal(workforce.queued[0][3], 'workforce')

    const unsupported = queuedLifecycleEvent('sn_hr_core_case', '3'.repeat(32))
    assert.equal(unsupported.queued.length, 0)
    assert.equal(unsupported.errors.length, 1)
    const malformed = queuedLifecycleEvent('sn_hr_core_case_payroll', 'bad')
    assert.equal(malformed.queued.length, 0)
    assert.equal(malformed.errors.length, 1)
    assert.doesNotMatch(
        lifecycleEventEnqueueSource,
        /GlideRecord|FlowAPI|\.insert\s*\(|\.update\s*\(|\.setValue\s*\(/
    )
})

test('create-event handler uses fixed dispatch and queues verify only after phase-one success', () => {
    const caseSysId = '4'.repeat(32)
    const authorizationSysId = '5'.repeat(32)
    const created = callableLifecycleCreateEvent(caseSysId, 'payroll', {
        payroll: {
            success: true,
            disposition: 'authorization_persisted',
            authorization_sys_id: authorizationSysId,
        },
    })
    assert.equal(created.error, undefined)
    assert.deepEqual(created.calls, [['payroll', caseSysId]])
    assert.equal(created.queued.length, 1)
    assert.equal(created.queued[0][0], 'x_2166123_rob_auth.lifecycle.verify')
    assert.equal(created.queued[0][2], authorizationSysId)

    const existing = callableLifecycleCreateEvent(caseSysId, 'workforce', {
        workforce: { success: true, disposition: 'existing_authorization' },
    })
    assert.deepEqual(existing.calls, [['workforce', caseSysId]])
    assert.equal(existing.queued.length, 0)
    assert.equal(existing.error, undefined)

    const invalid = callableLifecycleCreateEvent(caseSysId, 'other')
    assert.equal(invalid.calls.length, 0)
    assert.match(invalid.error.message, /unsupported path/)
    const failed = callableLifecycleCreateEvent(caseSysId, 'payroll', {
        payroll: { success: false },
    })
    assert.match(failed.error.message, /failed closed/)
    assert.equal(failed.queued.length, 0)

    assert.match(lifecycleCreateEventSource, /executePayroll\(caseSysId\)/)
    assert.match(lifecycleCreateEventSource, /executeWorkforce\(caseSysId\)/)
    assert.doesNotMatch(
        lifecycleCreateEventSource,
        /GlideRecord|FlowAPI|eval\s*\(|encodedQuery|\.insert\s*\(|\.update\s*\(|\.setValue\s*\(/
    )
})

test('verify-event handler accepts only one exact Authorization sys_id and fails closed', () => {
    const authorizationSysId = '6'.repeat(32)
    const verified = callableLifecycleVerifyEvent(authorizationSysId, {
        success: true,
        disposition: 'post_commit_signing_started',
    })
    assert.deepEqual(verified.calls, [authorizationSysId])
    assert.equal(verified.error, undefined)

    const malformed = callableLifecycleVerifyEvent('bad', { success: true })
    assert.equal(malformed.calls.length, 0)
    assert.match(malformed.error.message, /exact Authorization sys_id/)
    const failed = callableLifecycleVerifyEvent(authorizationSysId, {
        success: false,
    })
    assert.match(failed.error.message, /failed closed/)
    assert.doesNotMatch(
        lifecycleVerifyEventSource,
        /GlideRecord|FlowAPI|eval\s*\(|encodedQuery|\.insert\s*\(|\.update\s*\(|\.setValue\s*\(/
    )
})

test('package-private lifecycle Action exposes only fixed path and sys_id inputs', () => {
    assert.match(lifecycleActionMetadata, /name:\s*'ROB Execute Authorization Lifecycle'/)
    assert.match(lifecycleActionMetadata, /access:\s*'package_private'/)
    assert.match(lifecycleActionMetadata, /case_sys_id:\s*StringColumn/)
    assert.match(lifecycleActionMetadata, /lifecycle_path:\s*ChoiceColumn/)
    assert.match(lifecycleActionMetadata, /payroll:\s*'Payroll'/)
    assert.match(lifecycleActionMetadata, /workforce:\s*'Workforce Administration'/)
    assert.match(lifecycleActionMetadata, /actionStep\.script/)
    assert.match(
        lifecycleActionMetadata,
        /rob-execute-authorization-lifecycle-action\.server\.js/
    )
    assert.doesNotMatch(
        lifecycleActionMetadata,
        /(?:table|encoded_query|query|field_name|script_name):\s*(?:String|Choice|Reference)Column/
    )
    assert.doesNotMatch(lifecycleActionMetadata, /ReferenceColumn|FlowObject|FlowArray/)
})

test('lifecycle Action dispatches only to the fixed Payroll or Workforce method', () => {
    const payroll = callableLifecycleAction({
        case_sys_id: 'payroll_case',
        lifecycle_path: 'payroll',
    })
    assert.deepEqual(payroll.calls, [['payroll', 'payroll_case']])
    assert.equal(payroll.outputs.success, true)

    const workforce = callableLifecycleAction({
        case_sys_id: 'workforce_case',
        lifecycle_path: 'workforce',
    })
    assert.deepEqual(workforce.calls, [['workforce', 'workforce_case']])
    assert.equal(workforce.outputs.success, true)

    const invalid = callableLifecycleAction({
        case_sys_id: 'other_case',
        lifecycle_path: 'other',
    })
    assert.deepEqual(invalid.calls, [])
    assert.equal(invalid.outputs.success, false)
    assert.match(invalid.outputs.reason, /path is unsupported/)

})

test('lifecycle Action is an invocation adapter with no duplicated lifecycle or persistence', () => {
    assert.match(
        lifecycleActionSource,
        /new RobAuthorizationLifecycleEntry\(\)\.executePayroll\(caseSysId\)/
    )
    assert.match(
        lifecycleActionSource,
        /new RobAuthorizationLifecycleEntry\(\)\.executeWorkforce\(caseSysId\)/
    )
    assert.doesNotMatch(lifecycleActionSource, /GlideRecord|FlowAPI|GenerateDocumentAPI/)
    assert.doesNotMatch(lifecycleActionSource, /\.insert\s*\(|\.update\s*\(/)
    assert.doesNotMatch(lifecycleActionSource, /eval\s*\(|encodedQuery|tableName/)
    assert.doesNotMatch(
        lifecycleActionSource,
        /authorization_path|decision_evaluated_at|RobProfileAuthorizationContext/
    )
})

test('governed creation returns for commit before signing-gate verification or launch', () => {
    const source = lifecycleEntrySource
    const persistCall = source.indexOf(
        "'x_2166123_rob_auth.rob_persist_authorization_lifecycle_native'"
    )
    const phaseOneReturn = source.indexOf(
        "return succeed('authorization_persisted', authorizationId, false)"
    )
    const publicVerifier = source.indexOf('verifyAuthorizationSigning: function')

    assert.ok(persistCall >= 0)
    assert.ok(phaseOneReturn > persistCall)
    assert.ok(publicVerifier > phaseOneReturn)
    const phaseOneTail = source.slice(persistCall, phaseOneReturn)
    assert.doesNotMatch(phaseOneTail, /pending_employee_signature'[\s\S]*?initiateAuthorizationSigning/)
    assert.doesNotMatch(phaseOneTail, /signing gate could not be verified/)
})

test('post-commit verifier accepts only one exact Authorization sys_id and fixed tables', () => {
    const source = lifecycleEntrySource
    assert.match(source, /verifyAuthorizationSigning:\s*function \(authorizationSysId\)/)
    assert.match(source, /\^\[0-9a-f\]\{32\}\$/)
    assert.match(source, /new GlideRecord\(\s*'x_2166123_rob_auth_rob_auth'\s*\)/)
    assert.match(source, /new GlideRecord\('sn_hr_core_case_payroll'\)/)
    assert.match(source, /new GlideRecord\(\s*'sn_hr_core_case_workforce_admin'\s*\)/)
    assert.match(source, /verifiedAuthorization\.getValue\('source_hrsd_case'\)/)
    assert.match(source, /verifiedAuthorization\.getValue\('status'\)[\s\S]*?'pending_employee_signature'/)
    assert.match(source, /resumeAuthorizationSigning\(verifiedAuthorization\)/)
    assert.match(source, /post_commit_signing_started/)
    assert.doesNotMatch(source, /verifyAuthorizationSigning:\s*function \([^)]*,/)
})

test('post-commit verification Action is package-private and Authorization-only', () => {
    assert.match(
        signingVerificationActionMetadata,
        /name:\s*'ROB Verify Authorization Signing Gate'/
    )
    assert.match(signingVerificationActionMetadata, /access:\s*'package_private'/)
    assert.match(
        signingVerificationActionMetadata,
        /inputs:\s*\{\s*authorization_sys_id:\s*StringColumn/
    )
    assert.doesNotMatch(
        signingVerificationActionMetadata,
        /(?:table|query|field|script|record):\s*(?:String|Choice|Reference)Column/
    )
    assert.match(
        signingVerificationActionSource,
        /new RobAuthorizationLifecycleEntry\(\)\.verifyAuthorizationSigning\(\s*authorizationSysId\s*\)/
    )
    assert.doesNotMatch(
        signingVerificationActionSource,
        /GlideRecord|FlowAPI|GenerateDocumentAPI|eval\s*\(|encodedQuery|tableName/
    )
    assert.doesNotMatch(signingVerificationActionSource, /\.insert\s*\(|\.update\s*\(/)
})

test('post-commit verification Action dispatches once and fails closed on invalid sys_id', () => {
    const authorizationId = 'a'.repeat(32)
    const valid = callableSigningVerificationAction({
        authorization_sys_id: authorizationId,
    })
    assert.deepEqual(valid.calls, [authorizationId])
    assert.equal(valid.outputs.success, true)
    assert.equal(valid.outputs.signing_started, true)

    const blank = callableSigningVerificationAction({ authorization_sys_id: '' })
    assert.deepEqual(blank.calls, [])
    assert.equal(blank.outputs.success, false)
    assert.match(blank.outputs.reason, /exact Authorization Form sys_id is required/)

    const malformed = callableSigningVerificationAction({
        authorization_sys_id: 'not-a-sys-id',
    })
    assert.deepEqual(malformed.calls, [])
    assert.equal(malformed.outputs.success, false)
})

test('callable boundary deterministically rejects blank missing blocked exception and unsupported service cases', () => {
    const records = {
        'sn_hr_core_case_payroll:blocked': {
            sys_id: 'blocked',
            hr_service: 'payroll_service',
            x_2166123_rob_auth_requested_items: 'item_1',
            x_2166123_rob_auth_decision_evaluated_at: '2026-08-30 12:00:00',
            x_2166123_rob_auth_authorization_processing_blocked: '1',
            x_2166123_rob_auth_authorization_path: 'exception',
        },
        'sn_hr_core_case_payroll:exception': {
            sys_id: 'exception',
            hr_service: 'payroll_service',
            x_2166123_rob_auth_requested_items: 'item_1',
            x_2166123_rob_auth_decision_evaluated_at: '2026-08-30 12:00:00',
            x_2166123_rob_auth_authorization_processing_blocked: '0',
            x_2166123_rob_auth_authorization_path: 'exception',
        },
        'sn_hr_core_case_payroll:wrong_service': {
            sys_id: 'wrong_service',
            hr_service: 'unrelated_service',
            x_2166123_rob_auth_requested_items: 'item_1',
            x_2166123_rob_auth_decision_evaluated_at: '2026-08-30 12:00:00',
            x_2166123_rob_auth_authorization_processing_blocked: '0',
            x_2166123_rob_auth_authorization_path: 'new',
        },
        'sn_hr_core_service:payroll_service': {
            sys_id: 'payroll_service',
            active: '1',
            value: 'request_access_to_hr_systems',
        },
        'sn_hr_core_service:unrelated_service': {
            sys_id: 'unrelated_service',
            active: '1',
            value: 'unrelated_service',
        },
    }
    const runtime = callableLifecycle(records)

    assert.equal(runtime.entry.executePayroll('').success, false)
    assert.match(runtime.entry.executePayroll('').reason, /sys_id is required/)
    assert.match(runtime.entry.executeWorkforce('missing').reason, /could not be reread/)
    assert.equal(runtime.entry.executePayroll('blocked').disposition, 'blocked')
    assert.equal(runtime.entry.executePayroll('exception').disposition, 'exception')
    assert.match(
        runtime.entry.executePayroll('wrong_service').reason,
        /not an approved ROB HR Service/
    )
    assert.equal(runtime.tablesRead.includes('sn_hr_core_case_payroll'), true)
    assert.equal(runtime.tablesRead.includes('sn_hr_core_case_workforce_admin'), true)
    assert.equal(runtime.tablesRead.includes('unrelated_table'), false)
})

test('deferred lifecycle remains fail-closed and retry-safe', () => {
    const source = lifecycleEntrySource
    assert.match(source, /if \(!current\) \{\s*return result\s*\}/)
    assert.match(source, /if \(decision === 'exception'\)/)
    assert.match(source, /result\.disposition = 'exception'/)
    assert.match(source, /the R3 decision is missing or unsupported/)
    assert.match(source, /the committed R3 decision timestamp is missing/)
    assert.match(source, /the committed source HR Case is not an approved ROB HR Service/)
    assert.match(source, /existingAuthorizationForCase\(\)/)
    assert.match(source, /existingDetail\.addQuery\('rob_authorization_form', authorizationId\)/)
    assert.match(source, /existingDetail\.addQuery\('access_item', scopeRecord\.id\)/)
    assert.match(source, /existingTask\.addQuery\('parent', current\.getUniqueValue\(\)\)/)
    assert.match(source, /reuse_attestation_already_approved/)
    assert.match(source, /existing_authorization/)
    assert.match(source, /created_detail_count/)
    assert.doesNotMatch(source, /\.insert\(\)/)
    assert.match(source, /rob_create_authorization_form_native/)
    assert.match(source, /rob_create_authorized_access_detail_native/)
})

test('runtime launch uses the certified split templates and final renderer roles', () => {
    const evidenceSource = fs.readFileSync(path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'), 'utf8')
    const initiationSource = lifecycleEntrySource
    const supervisorLaunchSource = fs.readFileSync(path.join(root, 'src/fluent/server/supervisor-signature-launch.server.js'), 'utf8')
    assert.match(evidenceSource, /ROB Form 1768 Authorization/)
    assert.match(evidenceSource, /ROB Form 1768 Employee Signature/)
    assert.match(evidenceSource, /ROB Form 1768 Supervisor Signature/)
    assert.match(initiationSource, /ROB Form 1768 Employee Signature/)
    assert.doesNotMatch(initiationSource, /ROB Form 1768 Authorization/)
    assert.doesNotMatch(initiationSource, /ROB Form 1768 Supervisor Signature/)
    assert.match(supervisorLaunchSource, /ROB Form 1768 Supervisor Signature/)
    assert.doesNotMatch(supervisorLaunchSource, /ROB Form 1768 Authorization/)
    assert.match(evidenceSource, /ROB Reuse Supervisor Attestation/)
    assert.match(initiationSource, /ROB Reuse Supervisor Attestation/)
    assert.doesNotMatch(initiationSource, /sysapproval_approver/)
    assert.match(initiationSource, /GenerateDocumentAPI\(\)\.initiateDocumentTasks/)
    assert.match(
        initiationSource,
        /addNotNullQuery\('document_task_execution'\)/
    )
    assert.match(initiationSource, /addNotNullQuery\('pdf_document'\)/)
    assert.doesNotMatch(initiationSource, /DocumentTaskUtils\(\)\.createDocumentTask/)
    assert.doesNotMatch(evidenceSource, /new GlideRecord\('sysapproval_approver'\)/)
    assert.doesNotMatch(evidenceSource, /requestSupervisorDecision/)
    assert.doesNotMatch(initiationSource, /assigned_to/)
    assert.doesNotMatch(supervisorLaunchSource, /assigned_to/)
    const source = evidenceSource + initiationSource + supervisorLaunchSource
    assert.doesNotMatch(source, /41103ca0|bbd3e8e0|c34e242c|e4f117e8/)
})

test('employee completion hands off to native approval before separate Supervisor signing', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /pending_supervisor_approval_signature/)
    assert.match(source, /participantName === 'Employee'.*participantAction === 'fill'/s)
    assert.match(source, /participantName === 'Supervisor'.*participantAction === 'fill'/s)
    assert.match(source, /document_task_execution/)
    assert.match(source, /ROB Form 1768 Employee Signature/)
    assert.match(source, /ROB Form 1768 Supervisor Signature/)
    assert.doesNotMatch(source, /requestSupervisorDecision/)
    assert.doesNotMatch(source, /new GlideRecord\('sysapproval_approver'\)/)
})

test('the split-execution supervisor launcher is active only after approved evidence', () => {
    const rulesSource = fs.readFileSync(
        path.join(root, 'src/fluent/business-rules/rob-authorization-lifecycle.now.ts'),
        'utf8'
    )
    assert.match(
        rulesSource,
        /launchSupervisorSignatureAfterApproval[\s\S]*?active:\s*true[\s\S]*?table:\s*'x_2166123_rob_auth_rob_auth'/
    )
    assert.match(rulesSource, /Launches exactly one Supervisor-only native Fill\/signature execution/)
})

test('terminal supervisor evidence is immutable and bound to one native task', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /recordedSupervisorTaskId === current\.getUniqueValue\(\)/)
    assert.match(source, /already bound to another task/)
    assert.match(source, /document_task_execution/)
    assert.match(source, /committed Approved native approval evidence/)
})

test('accepted native Supervisor terminal replays cannot regenerate the final PDF', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /current\.state\.changesTo\('3'\)/)
    assert.match(source, /recordedSupervisorTaskId === current\.getUniqueValue\(\)\) \{\s*return/)
    assert.doesNotMatch(
        source,
        /recordedSupervisorTaskId === current\.getUniqueValue\(\)[\s\S]{0,400}generateFinalPdf\(authorization\)/
    )
    assert.match(source, /signed_pdf_generated/)
    assert.match(
        source,
        /setValue\('signed_pdf_generated', '1'\)[\s\S]*authorization\.update\(\)[\s\S]*fillDocumentFieldsAndFlatten/
    )
    assert.match(source, /setValue\('signed_pdf_generated', '0'\)/)
    assert.match(source, /already bound to another task/)
})

test('native Supervisor Fill records signature only after committed approval', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.doesNotMatch(source, /state === '7'|decline_reason/)
    assert.doesNotMatch(source, /supervisor_approval_outcome', 'approved'/)
    assert.match(source, /supervisor_approval_outcome'\) !== 'approved'/)
    assert.match(source, /persistSignatureEvidence\(/)
    assert.match(source, /'supervisor'/)
    assert.match(
        source,
        /x_2166123_rob_auth\.rob_persist_authorization_lifecycle_native/
    )
    assert.doesNotMatch(
        source,
        /authorization\.setValue\('supervisor_signature_complete'/
    )
    assert.match(source, /generateFinalPdf\(authorization\)/)
})

test('post-signature final PDF fills and flattens the governed Form 1768 on Authorization Form', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /fillDocumentFieldsAndFlatten/)
    assert.match(source, /finalRendererName = 'ROB Form 1768 Authorization'/)
    assert.match(source, /x_2166123_rob_auth_rob_auth/)
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

test('Reuse launches only the native attestation template and creates no governed form', () => {
    const source = lifecycleEntrySource
    assert.match(source, /ROB Reuse Supervisor Attestation/)
    assert.match(source, /beginRobReuseAttestation/)
    assert.doesNotMatch(source, /new GlideRecord\('sysapproval_approver'\)/)
})

test('Reuse completion persists only native attestation evidence through the HR Core bridge', () => {
    const source = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'),
        'utf8'
    )
    assert.match(source, /ROB Reuse Supervisor Attestation/)
    assert.match(source, /completeRobReuseAttestation/)
    assert.match(source, /invalidateRobReuseAttestation/)
    assert.match(source, /currentContextKey/)
    assert.match(source, /reuseContext\.supervisorId/)
    assert.match(source, /reuseParticipant\.getValue\('action'\) !== 'fill'/)
    assert.doesNotMatch(source, /reuseCase\.update\(/)
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

test('governed approval Flow persists canonical choice values without scripted markers', () => {
    const source = fs.readFileSync(
        path.join(
            root,
            'src/fluent/generated/automation/flow/sys_hub_flow_73105d6b833a07104f5193a6feaad363.now.ts'
        ),
        'utf8'
    )
    assert.match(source, /supervisor_approval_outcome:\s*'approved'/)
    assert.match(source, /supervisor_approval_outcome:\s*'denied'/)
    assert.match(source, /status:\s*'denied'/)
    assert.doesNotMatch(
        source,
        /(?:supervisor_approval_outcome|status):\s*wfa\.inlineScript\(\"return '(?:approved|denied)';\"\)/
    )
})

test('event enqueue Business Rules remain source-inactive until controlled cutover', () => {
    const lifecycleBusinessRules = fs.readFileSync(
        path.join(root, 'src/fluent/business-rules/rob-authorization-lifecycle.now.ts'),
        'utf8'
    )
    assert.match(
        lifecycleBusinessRules,
        /initiatePayrollAuthorizationLifecycle[\s\S]*?active:\s*false[\s\S]*?table:\s*'sn_hr_core_case_payroll'/
    )
    assert.match(
        lifecycleBusinessRules,
        /initiateWorkforceAuthorizationLifecycle[\s\S]*?active:\s*false[\s\S]*?table:\s*'sn_hr_core_case_workforce_admin'/
    )
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
    assert.doesNotMatch(source, /x_2166123_rob_auth_(signature|approval|pdf|document)/)
})
