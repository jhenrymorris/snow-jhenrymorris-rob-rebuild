const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')

const { TASK_TYPES } = require('../../src/server/fulfillment/FulfillmentRoutingService')
const {
    orchestrate,
    taskKey,
} = require('../../src/server/fulfillment/FulfillmentOrchestrationService')
const { assess } = require('../../src/server/fulfillment/FulfillmentEvidenceService')
const { evaluate } = require('../../src/server/fulfillment/FulfillmentClosureService')
const {
    evaluate: evaluateEscalation,
} = require('../../src/server/fulfillment/FulfillmentEscalationService')

const root = path.resolve(__dirname, '..', '..')

function detail(accessItemId, overrides = {}) {
    return {
        id: `detail_${accessItemId}`,
        accessItemId,
        status: 'pending_fulfillment',
        requiresStaffingTask: false,
        requiresAnalyticsTask: false,
        requiresOperationsManagerTask: false,
        provisioningSystem: 'not_applicable',
        targetSystem: 'not_applicable',
        ...overrides,
    }
}

function staffing(accessItemId) {
    return detail(accessItemId, {
        requiresStaffingTask: true,
        provisioningSystem: accessItemId,
        targetSystem: accessItemId,
    })
}

function analytics(accessItemId) {
    return detail(accessItemId, { requiresAnalyticsTask: true })
}

function wpc() {
    return detail('workforce_profile_charts', {
        requiresAnalyticsTask: true,
        requiresOperationsManagerTask: true,
        provisioningSystem: 'arm',
        targetSystem: 'oas',
    })
}

function request(overrides = {}) {
    return {
        caseId: 'case_1',
        authorizationId: 'authorization_1',
        requestStatus: 'approved',
        fulfillmentGateComplete: true,
        operationsManagerId: 'om_1',
        details: [staffing('fpps_wtts')],
        existingTasks: [],
        configuration: {
            staffingAssignmentGroupId: 'staffing_group',
            analyticsAssignmentGroupId: 'analytics_group',
            exceptionReviewGroupId: 'exception_group',
            operationsManagerTaskDueDays: 5,
            exceptionTaskDueDays: 2,
        },
        ...overrides,
    }
}

function completed(taskType, overrides = {}) {
    return {
        taskType,
        isClosed: true,
        fulfillmentOutcome: 'provisioning_completed',
        completionEvidence: 'Synthetic completion evidence.',
        completionTimestamp: '2026-08-20 20:00:00',
        provisioningCompleted: true,
        ...overrides,
    }
}

test('closed fulfillment gate creates zero tasks', () => {
    const result = orchestrate(request({ fulfillmentGateComplete: false }))
    assert.equal(result.tasks.length, 0)
    assert.equal(result.reasonCode, 'FULFILLMENT_GATE_CLOSED')
})

test('FPPS only creates one Staffing task', () => {
    const result = orchestrate(request())
    assert.deepEqual(result.tasks.map((task) => task.taskType), [TASK_TYPES.STAFFING])
})

test('all Staffing items remain grouped in one task', () => {
    const result = orchestrate(
        request({ details: [staffing('fpps_wtts'), staffing('eopf'), staffing('usa_staffing')] })
    )
    assert.equal(result.tasks.length, 1)
    assert.deepEqual(result.tasks[0].accessItemIds, ['eopf', 'fpps_wtts', 'usa_staffing'])
})

for (const accessItemId of ['oas_datamart', 'human_capital_reports']) {
    test(`${accessItemId} creates one Analytics task`, () => {
        const result = orchestrate(request({ details: [analytics(accessItemId)] }))
        assert.deepEqual(result.tasks.map((task) => task.taskType), [TASK_TYPES.ANALYTICS])
    })
}

test('multiple Analytics items remain grouped in one task', () => {
    const result = orchestrate(
        request({ details: [analytics('oas_datamart'), analytics('human_capital_reports')] })
    )
    assert.equal(result.tasks.length, 1)
    assert.equal(result.tasks[0].taskType, TASK_TYPES.ANALYTICS)
})

test('mixed request creates exactly one team task for each team', () => {
    const result = orchestrate(
        request({ details: [staffing('eopf'), analytics('human_capital_reports')] })
    )
    assert.deepEqual(
        result.tasks.map((task) => task.taskType),
        [TASK_TYPES.STAFFING, TASK_TYPES.ANALYTICS]
    )
})

test('WPC creates Analytics and Operations Manager tasks', () => {
    const result = orchestrate(request({ details: [wpc()] }))
    assert.deepEqual(
        result.tasks.map((task) => task.taskType),
        [TASK_TYPES.ANALYTICS, TASK_TYPES.OPERATIONS_MANAGER]
    )
})

test('WPC preserves ARM provisioning and OAS target', () => {
    const result = orchestrate(request({ details: [wpc()] }))
    const om = result.tasks.find((task) => task.taskType === TASK_TYPES.OPERATIONS_MANAGER)
    assert.equal(om.provisioningSystem, 'arm')
    assert.equal(om.targetSystem, 'oas')
    assert.notEqual(om.accessItemIds[0], 'arm')
})

test('invalid WPC ARM/OAS metadata is rejected', () => {
    assert.throws(
        () => orchestrate(request({ details: [{ ...wpc(), targetSystem: 'arm' }] })),
        /ARM provisioning and OAS target/
    )
})

test('missing Operations Manager creates one Exception task and no OM task', () => {
    const result = orchestrate(request({ details: [wpc()], operationsManagerId: '' }))
    assert.equal(result.tasks.filter((task) => task.taskType === TASK_TYPES.EXCEPTION).length, 1)
    assert.equal(
        result.tasks.filter((task) => task.taskType === TASK_TYPES.OPERATIONS_MANAGER).length,
        0
    )
    assert.equal(result.missingOperationsManager, true)
})

test('stable Parent Case plus Task Type key prevents retry duplicates', () => {
    const existingTasks = [
        { taskType: TASK_TYPES.STAFFING, businessKey: taskKey('case_1', TASK_TYPES.STAFFING) },
    ]
    const result = orchestrate(request({ existingTasks }))
    assert.equal(result.tasksCreated, 0)
})

test('retry prevents duplicate OM and Exception tasks', () => {
    const omResult = orchestrate(
        request({
            details: [wpc()],
            existingTasks: [{ taskType: TASK_TYPES.OPERATIONS_MANAGER }],
        })
    )
    assert.deepEqual(omResult.tasks.map((task) => task.taskType), [TASK_TYPES.ANALYTICS])

    const exceptionResult = orchestrate(
        request({
            details: [wpc()],
            operationsManagerId: '',
            existingTasks: [{ taskType: TASK_TYPES.EXCEPTION }],
        })
    )
    assert.deepEqual(exceptionResult.tasks.map((task) => task.taskType), [TASK_TYPES.ANALYTICS])
})

test('closed state without evidence does not satisfy fulfillment', () => {
    assert.equal(assess(completed(TASK_TYPES.STAFFING, { completionEvidence: '' })).satisfied, false)
})

test('authorized waiver requires complete waiver evidence', () => {
    const task = completed(TASK_TYPES.STAFFING, {
        fulfillmentOutcome: 'waived',
        provisioningCompleted: false,
        formallyWaived: true,
        waiverReason: 'Synthetic approved waiver.',
        waivedBy: 'admin_1',
        waiverDateTime: '2026-08-20 20:00:00',
    })
    assert.equal(assess(task).satisfied, true)
    assert.equal(assess({ ...task, waivedBy: '' }).satisfied, false)
})

test('Staffing completion activates only Staffing detail', () => {
    const result = evaluate({
        requestStatus: 'approved',
        details: [staffing('eopf'), analytics('human_capital_reports')],
        tasks: [completed(TASK_TYPES.STAFFING)],
    })
    assert.deepEqual(result.detailUpdates.map((update) => update.accessItemId), ['eopf'])
    assert.equal(result.parentCanClose, false)
})

test('Analytics completion does not activate WPC before OM completion', () => {
    const result = evaluate({
        requestStatus: 'approved',
        details: [wpc()],
        tasks: [completed(TASK_TYPES.ANALYTICS)],
    })
    assert.equal(result.detailUpdates.length, 0)
    assert.equal(result.parentCanClose, false)
})

test('WPC activates after Analytics and OM evidence are complete', () => {
    const result = evaluate({
        requestStatus: 'approved',
        details: [wpc()],
        tasks: [completed(TASK_TYPES.ANALYTICS), completed(TASK_TYPES.OPERATIONS_MANAGER)],
    })
    assert.deepEqual(result.detailUpdates.map((update) => update.accessItemId), [
        'workforce_profile_charts',
    ])
    assert.equal(result.parentCanClose, true)
})

test('unresolved Exception task prevents parent closure', () => {
    const result = evaluate({
        requestStatus: 'approved',
        details: [{ ...wpc(), status: 'active' }],
        tasks: [{ taskType: TASK_TYPES.EXCEPTION, isClosed: false }],
    })
    assert.equal(result.parentCanClose, false)
    assert.equal(result.reasonCode, 'EXCEPTION_UNRESOLVED')
})

test('overdue OM work produces one privacy-safe escalation plan without closing work', () => {
    const result = evaluateEscalation({
        task: {
            id: 'task_om_1',
            parentCaseId: 'case_1',
            taskType: TASK_TYPES.OPERATIONS_MANAGER,
            dueDate: '2026-08-10',
            isClosed: false,
        },
        now: '2026-08-15T00:00:00Z',
        escalationDays: 3,
        existingEscalationKeys: [],
    })
    assert.equal(result.escalate, true)
    assert.equal(result.keepTaskOpen, true)
    assert.equal(result.closeParentCase, false)
    assert.deepEqual(Object.keys(result.notification).sort(), [
        'dueDate',
        'event',
        'parentCaseId',
        'secureRecordPath',
        'taskId',
    ])
})

test('OM escalation is configuration-driven and retry-safe', () => {
    const input = {
        task: {
            id: 'task_om_1',
            parentCaseId: 'case_1',
            taskType: TASK_TYPES.OPERATIONS_MANAGER,
            dueDate: '2026-08-10',
            isClosed: false,
        },
        now: '2026-08-15T00:00:00Z',
        escalationDays: 3,
        existingEscalationKeys: [],
    }
    const first = evaluateEscalation(input)
    assert.equal(first.escalate, true)
    assert.equal(
        evaluateEscalation({ ...input, existingEscalationKeys: [first.escalationKey] }).escalate,
        false
    )
    assert.equal(evaluateEscalation({ ...input, escalationDays: null }).escalate, false)
})

for (const requestStatus of ['denied', 'withdrawn']) {
    test(`${requestStatus} request creates zero fulfillment tasks`, () => {
        const result = orchestrate(request({ requestStatus }))
        assert.equal(result.tasks.length, 0)
    })
}

test('inactive production entry points and native HR Task metadata are source-controlled', () => {
    const rules = fs.readFileSync(
        path.join(root, 'src/fluent/business-rules/rob-fulfillment-orchestration.now.ts'),
        'utf8'
    )
    const table = fs.readFileSync(
        path.join(root, 'src/fluent/tables/rob-case-security-fields.now.ts'),
        'utf8'
    )
    assert.equal((rules.match(/active:\s*false/g) || []).length, 2)
    assert.match(rules, /sn_hr_core_case_payroll/)
    assert.match(rules, /sn_hr_core_case_workforce_admin/)
    for (const taskType of Object.values(TASK_TYPES)) assert.match(table, new RegExp(taskType))
    const adapter = fs.readFileSync(
        path.join(root, 'src/fluent/server/fulfillment-orchestration.server.js'),
        'utf8'
    )
    assert.match(adapter, /x_2108496_hr_acces_requested_items/)
    assert.doesNotMatch(adapter, /x_2108496_hr_acces_requested_access_items/)
})

test('M4 source contains no direct external provisioning integration artifacts', () => {
    const files = [
        'src/server/fulfillment/FulfillmentOrchestrationService.js',
        'src/fluent/server/fulfillment-orchestration.server.js',
    ]
    const source = files.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')
    assert.doesNotMatch(source, /RESTMessageV2|sn_ws\.RESTMessageV2|IntegrationHub|setRequestHeader|execute\s*\(/)
    assert.doesNotMatch(source, /password|credential|api[_-]?key/i)
})

test('M4 adds no custom fulfillment table', () => {
    const sourceFiles = fs
        .readdirSync(path.join(root, 'src/fluent/tables'))
        .filter((file) => file.endsWith('.now.ts'))
        .map((file) => fs.readFileSync(path.join(root, 'src/fluent/tables', file), 'utf8'))
        .join('\n')
    assert.doesNotMatch(sourceFiles, /name:\s*['"]x_2108496_hr_acces_.*fulfill/i)
})
