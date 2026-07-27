const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

const root = path.resolve(__dirname, '..', '..')
const snapshotScript = fs.readFileSync(
    path.join(root, 'src/fluent/server/requester-profile-snapshot.server.js'),
    'utf8'
)
const correctionScript = fs.readFileSync(
    path.join(root, 'src/fluent/server/requester-profile-correction.server.js'),
    'utf8'
)
const taskScript = fs.readFileSync(
    path.join(root, 'src/fluent/server/create-supervisor-exception-task.server.js'),
    'utf8'
)
const aclSource = fs.readFileSync(
    path.join(
        root,
        'src/fluent/security/rob-case-requester-profile-acls.now.ts'
    ),
    'utf8'
)

const names = {
    items: 'x_2108496_hr_acces_requested_items',
    title: 'x_2108496_hr_acces_position_title',
    supervisor: 'x_2108496_hr_acces_supervisor_snapshot',
    exception: 'x_2108496_hr_acces_exception_review_required',
    reason: 'x_2108496_hr_acces_exception_reason',
    blocked: 'x_2108496_hr_acces_authorization_processing_blocked',
    employeeGate: 'x_2108496_hr_acces_requires_employee_signature',
    supervisorGate: 'x_2108496_hr_acces_requires_supervisor_signature',
    fulfillmentGate: 'x_2108496_hr_acces_fulfillment_gate_complete',
    correctionRequested: 'x_2108496_hr_acces_snapshot_correction_requested',
    correctionReason: 'x_2108496_hr_acces_snapshot_correction_reason',
    priorTitle: 'x_2108496_hr_acces_prior_position_title',
    priorSupervisor: 'x_2108496_hr_acces_prior_supervisor_snapshot',
    correctedBy: 'x_2108496_hr_acces_snapshot_corrected_by',
    correctedAt: 'x_2108496_hr_acces_snapshot_corrected_at',
}

const preservedMappings = [
    'hr_service',
    'short_description',
    'description',
    'x_2108496_hr_acces_employment_type',
    'x_2108496_hr_acces_access_end_date',
    names.items,
    'x_2108496_hr_acces_operations_manager',
    'assignment_group',
]

const services = {
    staffing_service: { value: 'request_access_to_hr_systems', active: '1' },
    inactive_staffing_service: {
        value: 'request_access_to_hr_systems',
        active: '0',
    },
    analytics_service: {
        value: 'request_access_to_hr_data_and_reports',
        active: '1',
    },
    unrelated_service: { value: 'unrelated_native_hr_service', active: '1' },
}
const accessItems = {
    staffing_item: { active: '1', access_category: 'hr_system' },
    analytics_item: { active: '1', access_category: 'report' },
    inactive_item: { active: '0', access_category: 'hr_system' },
}
const users = {
    requester: { title: 'Synthetic Analyst', manager: 'manager', active: '1' },
    no_manager: { title: 'Synthetic Specialist', manager: '', active: '1' },
    manager: { title: 'Synthetic Manager', manager: '', active: '1' },
}

function record(values) {
    return {
        values: { ...values },
        writes: [],
        aborted: false,
        getValue(field) {
            return this.values[field] ?? ''
        },
        setValue(field, value) {
            this.values[field] = value
            this.writes.push([field, value])
        },
        setAbortAction(value) {
            this.aborted = value
        },
        getUniqueValue() {
            return this.values.sys_id || 'case_sys_id'
        },
    }
}

function glideRecordFactory(state) {
    return function GlideRecord(table) {
        this.table = table
        this.row = null
        this.queryValues = {}
        this.limit = 0
        this.pending = {}
        this.get = (sysId) => {
            const source =
                table === 'sn_hr_core_service'
                    ? services
                    : table === 'sys_user'
                      ? users
                      : {}
            this.row = source[sysId] || null
            state.lookups.push([table, sysId])
            return Boolean(this.row)
        }
        this.getValue = (field) => this.row?.[field] ?? ''
        this.addQuery = (field, operator, value) => {
            this.queryValues[field] = value === undefined ? operator : value
        }
        this.setLimit = (limit) => {
            this.limit = limit
        }
        this.query = () => {
            if (table === 'x_2108496_hr_acces_rob_access') {
                const ids = String(this.queryValues.sys_id || '').split(',')
                this.results = ids
                    .map((id) => accessItems[id])
                    .filter((item) => item && item.active === '1')
            } else if (table === 'sn_hr_core_task') {
                this.results = state.existingExceptionTask ? [{}] : []
            } else if (table === 'x_2108496_hr_acces_rob_config') {
                this.results = [{ default_exception_review_group: 'exception_group' }]
            } else {
                this.results = []
            }
            this.index = 0
        }
        this.next = () => {
            if (!this.results || this.index >= this.results.length) return false
            this.row = this.results[this.index++]
            return true
        }
        this.initialize = () => {
            this.pending = {}
        }
        this.setValue = (field, value) => {
            this.pending[field] = value
        }
        this.insert = () => {
            state.inserts.push({ table, ...this.pending })
            return 'task_sys_id'
        }
    }
}

function baseCase(overrides = {}) {
    return {
        sys_id: 'case_sys_id',
        sys_class_name: 'sn_hr_core_case_payroll',
        hr_service: 'staffing_service',
        opened_by: 'requester',
        opened_for: 'requester',
        subject_person: 'requester',
        short_description: 'Request access to HR systems',
        description: 'Synthetic justification',
        x_2108496_hr_acces_employment_type: 'federal_employee',
        x_2108496_hr_acces_access_end_date: '2027-09-30',
        [names.items]: 'staffing_item',
        x_2108496_hr_acces_operations_manager: '',
        assignment_group: 'native_payroll_group',
        ...overrides,
    }
}

function run(script, currentValues, options = {}) {
    const current = record(currentValues)
    const previous = record(options.previous || currentValues)
    const state = {
        lookups: [],
        inserts: [],
        existingExceptionTask: Boolean(options.existingExceptionTask),
    }
    const errors = []
    vm.runInNewContext(script, {
        current,
        previous,
        GlideRecord: glideRecordFactory(state),
        GlideDateTime: function GlideDateTime() {
            this.getValue = () => '2026-07-21 12:00:00'
        },
        gs: {
            addErrorMessage: (message) => errors.push(message),
            getUserID: () => options.userId || 'requester',
            getUser: () => ({
                hasAssignedRole: () => options.hasRobAdmin !== false,
            }),
        },
    })
    return { current, errors, state }
}

test('both approved intake paths derive the requester snapshots', () => {
    for (const values of [
        baseCase(),
        baseCase({
            sys_class_name: 'sn_hr_core_case_workforce_admin',
            hr_service: 'analytics_service',
            [names.items]: 'analytics_item',
        }),
    ]) {
        const result = run(snapshotScript, values)
        assert.equal(result.current.aborted, false)
        assert.equal(result.current.getValue(names.title), 'Synthetic Analyst')
        assert.equal(result.current.getValue(names.supervisor), 'manager')
        assert.equal(result.current.getValue(names.blocked), '0')
    }
})

test('unrelated HR services do not read a requester or write ROB evidence', () => {
    const result = run(
        snapshotScript,
        baseCase({ hr_service: 'unrelated_service' })
    )
    assert.equal(result.current.aborted, false)
    assert.deepEqual(
        result.state.lookups.map(([table]) => table),
        ['sn_hr_core_service']
    )
    assert.deepEqual(result.current.writes, [])
})

test('inactive approved HR services do not qualify as trusted provenance', () => {
    const result = run(
        snapshotScript,
        baseCase({ hr_service: 'inactive_staffing_service' })
    )
    assert.equal(result.current.aborted, true)
    assert.equal(
        result.state.lookups.some(([table]) => table === 'sys_user'),
        false
    )
    assert.deepEqual(result.current.writes, [])
})

test('forged, inactive, or wrong-category items fail before profile lookup', () => {
    for (const item of ['unknown_item', 'inactive_item', 'analytics_item']) {
        const result = run(snapshotScript, baseCase({ [names.items]: item }))
        assert.equal(result.current.aborted, true)
        assert.equal(
            result.state.lookups.some(([table]) => table === 'sys_user'),
            false
        )
    }
})

function assertIdentityRejectedBeforeProfileLookup(values, options = {}) {
    const result = run(snapshotScript, values, options)
    assert.equal(result.current.aborted, true)
    assert.equal(
        result.state.lookups.some(([table]) => table === 'sys_user'),
        false
    )
    return result
}

test('opened_for mismatch fails before requester profile lookup', () => {
    assertIdentityRejectedBeforeProfileLookup(
        baseCase({ opened_for: 'another_employee' })
    )
})

test('subject_person mismatch fails before requester profile lookup', () => {
    assertIdentityRejectedBeforeProfileLookup(
        baseCase({ subject_person: 'another_employee' })
    )
})

test('supervisor cannot submit for another employee', () => {
    assertIdentityRejectedBeforeProfileLookup(
        baseCase({
            opened_by: 'supervisor_actor',
            opened_for: 'requester',
            subject_person: 'requester',
        }),
        { userId: 'supervisor_actor' }
    )
})

test('HR user cannot submit for another employee', () => {
    assertIdentityRejectedBeforeProfileLookup(
        baseCase({
            opened_by: 'hr_actor',
            opened_for: 'requester',
            subject_person: 'requester',
        }),
        { userId: 'hr_actor' }
    )
})

test('requester profile lookup occurs only after identity authorization', () => {
    const authorized = run(snapshotScript, baseCase())
    assert.equal(
        authorized.state.lookups.some(([table]) => table === 'sys_user'),
        true
    )

    for (const values of [
        baseCase({ opened_by: 'another_employee' }),
        baseCase({ opened_for: 'another_employee' }),
        baseCase({ subject_person: 'another_employee' }),
    ]) {
        assertIdentityRejectedBeforeProfileLookup(values)
    }
})

test('authenticated user is the sole requester source and fills blank identities', () => {
    const result = run(
        snapshotScript,
        baseCase({
            opened_by: '',
            opened_for: '',
            subject_person: '',
        })
    )
    assert.equal(result.current.aborted, false)
    assert.equal(result.current.getValue('opened_by'), 'requester')
    assert.equal(result.current.getValue('opened_for'), 'requester')
    assert.equal(result.current.getValue('subject_person'), 'requester')
    assert.match(snapshotScript, /var authenticatedUserId = gs\.getUserID\(\)/)
    assert.match(snapshotScript, /var requesterId = authenticatedUserId/)
    assert.doesNotMatch(
        snapshotScript,
        /(?:producer\.(?:opened_for|subject_person|requested_for)|current\.getValue\(['"](?:opened_for|subject_person|requested_for)['"]\))\s*\|\|\s*gs\.getUserID\(\)/
    )
    assert.doesNotMatch(
        snapshotScript,
        /if\s*\(\s*!\s*requesterId\s*\)[\s\S]*?requesterId\s*=\s*gs\.getUserID\(\)/
    )
})

test('missing supervisor records a stop and leaves every lifecycle gate closed', () => {
    const result = run(
        snapshotScript,
        baseCase({ opened_by: 'no_manager', opened_for: 'no_manager', subject_person: 'no_manager' }),
        { userId: 'no_manager' }
    )
    assert.equal(result.current.getValue(names.exception), '1')
    assert.equal(result.current.getValue(names.reason), 'missing_supervisor')
    assert.equal(result.current.getValue(names.blocked), '1')
    assert.equal(result.current.getValue(names.employeeGate), '0')
    assert.equal(result.current.getValue(names.supervisorGate), '0')
    assert.equal(result.current.getValue(names.fulfillmentGate), '0')
})

test('snapshot processing preserves all existing producer mappings', () => {
    const values = baseCase()
    const result = run(snapshotScript, values)
    for (const field of preservedMappings) {
        assert.equal(result.current.getValue(field), values[field])
    }
})

test('direct protected-field edits are rejected', () => {
    const previous = baseCase({ [names.title]: 'Original title' })
    const result = run(
        correctionScript,
        { ...previous, [names.title]: 'Injected title' },
        { previous, hasRobAdmin: true }
    )
    assert.equal(result.current.aborted, true)
})

test('controlled correction requires a new reason and re-derives audited values', () => {
    const previous = baseCase({
        [names.title]: 'Old title',
        [names.supervisor]: 'old_manager',
        [names.exception]: '1',
        [names.reason]: 'missing_supervisor',
        [names.blocked]: '1',
        [names.correctionReason]: 'Old reason',
    })
    const current = {
        ...previous,
        [names.correctionRequested]: '1',
        [names.correctionReason]: 'Directory manager corrected under ticket SYN-1',
    }
    const result = run(correctionScript, current, {
        previous,
        hasRobAdmin: true,
        userId: 'rob_admin_user',
    })
    assert.equal(result.current.aborted, false)
    assert.equal(result.current.getValue(names.title), 'Synthetic Analyst')
    assert.equal(result.current.getValue(names.supervisor), 'manager')
    assert.equal(result.current.getValue(names.priorTitle), 'Old title')
    assert.equal(result.current.getValue(names.priorSupervisor), 'old_manager')
    assert.equal(result.current.getValue(names.correctedBy), 'rob_admin_user')
    assert.equal(result.current.getValue(names.correctedAt), '2026-07-21 12:00:00')
    assert.equal(result.current.getValue(names.blocked), '0')
    assert.equal(result.current.getValue(names.fulfillmentGate), '0')
})

test('controlled correction rejects whitespace reasons and unrelated cases', () => {
    const previous = baseCase({
        [names.title]: 'Old title',
        [names.correctionReason]: 'Old reason',
    })
    const whitespace = run(
        correctionScript,
        {
            ...previous,
            [names.correctionRequested]: '1',
            [names.correctionReason]: '   ',
        },
        { previous, hasRobAdmin: true, userId: 'rob_admin_user' }
    )
    assert.equal(whitespace.current.aborted, true)
    assert.equal(
        whitespace.state.lookups.some(([table]) => table === 'sys_user'),
        false
    )

    const unrelated = run(
        correctionScript,
        {
            ...previous,
            hr_service: 'unrelated_service',
            [names.correctionRequested]: '1',
            [names.correctionReason]: 'Attempted unrelated correction',
        },
        { previous, hasRobAdmin: true, userId: 'rob_admin_user' }
    )
    assert.equal(unrelated.current.aborted, true)
    assert.equal(
        unrelated.state.lookups.some(([table]) => table === 'sys_user'),
        false
    )
})

test('supervisor exception task creation is idempotent and configuration-routed', () => {
    const first = run(taskScript, baseCase())
    assert.equal(first.state.inserts.length, 1)
    assert.equal(first.state.inserts[0].table, 'sn_hr_core_task')
    assert.equal(
        first.state.inserts[0].x_2108496_hr_acces_rob_task_type,
        'exception_review'
    )
    assert.equal(first.state.inserts[0].assignment_group, 'exception_group')

    const retry = run(taskScript, baseCase(), { existingExceptionTask: true })
    assert.equal(retry.state.inserts.length, 0)
})

test('security scripts never recursively update or insert the parent case', () => {
    assert.doesNotMatch(snapshotScript, /current\s*\.\s*(?:insert|update)\s*\(/)
    assert.doesNotMatch(correctionScript, /current\s*\.\s*(?:insert|update)\s*\(/)
    assert.doesNotMatch(taskScript, /new\s+GlideRecord\s*\(['"]sn_hr_core_case/)
})

test('snapshot reads require a coherent self-submission and task type is immutable', () => {
    assert.match(aclSource, /openedBy == openedFor/)
    assert.match(aclSource, /openedBy == subjectPerson/)
    assert.match(
        aclSource,
        /\$id: Now\.ID\['hr-task-rob-task-type-write'\][\s\S]*?field: 'x_2108496_hr_acces_rob_task_type'[\s\S]*?script: 'return false;'/
    )
})
