const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { test } = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const resolverSource = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/rob-profile-authorization-context.server.js'
    ),
    'utf8'
)
const { initiate } = require('../../src/server/authorization/AuthorizationLifecycleService')
const {
    recordSupervisorDecision,
    recordSupervisorSignature,
} = require('../../src/server/authorization/SignatureExecutionService')

function baseTables() {
    return {
        x_2166123_rob_auth_rob_config: [
            {
                sys_id: 'config_1',
                active: '1',
                approved_supervisors_group: 'nsf_supervisors',
                approved_organization_root: 'nsf_root',
                allow_sys_user_title_fallback: '1',
            },
        ],
        sys_user: [
            {
                sys_id: 'employee_primary',
                active: '1',
                title: 'Directory Analyst',
                department: 'directory_department',
                manager: 'supervisor_default',
                name: 'Synthetic Employee Primary',
            },
            {
                sys_id: 'employee_title_fallback',
                active: '1',
                title: 'Directory Fallback Specialist',
                department: 'directory_department',
                manager: 'supervisor_default',
            },
            {
                sys_id: 'employee_org_fallback',
                active: '1',
                title: 'Fallback Organization Analyst',
                department: '',
                manager: 'supervisor_default',
            },
            {
                sys_id: 'employee_unresolved',
                active: '1',
                title: '',
                department: '',
                manager: 'supervisor_default',
            },
            { sys_id: 'supervisor_default', active: '1', name: 'Default Supervisor' },
            { sys_id: 'supervisor_selected', active: '1', name: 'Selected Supervisor' },
            { sys_id: 'supervisor_nonmember', active: '1', name: 'Nonmember Supervisor' },
            { sys_id: 'supervisor_inactive', active: '0', name: 'Inactive Supervisor' },
        ],
        sn_hr_core_profile: [
            { sys_id: 'profile_primary', user: 'employee_primary', position: 'position_primary' },
            {
                sys_id: 'profile_title_fallback',
                user: 'employee_title_fallback',
                position: '',
            },
            {
                sys_id: 'profile_org_fallback',
                user: 'employee_org_fallback',
                position: 'position_without_department',
            },
            { sys_id: 'profile_unresolved', user: 'employee_unresolved', position: '' },
        ],
        sn_hr_core_position: [
            {
                sys_id: 'position_primary',
                active: '1',
                position: 'Authoritative HR Profile Analyst',
                department: 'profile_department',
            },
            {
                sys_id: 'position_without_department',
                active: '1',
                position: 'Authoritative Position Without Department',
                department: '',
            },
        ],
        cmn_department: [
            { sys_id: 'nsf_root', name: 'Synthetic NSF', parent: '', active: '1' },
            {
                sys_id: 'approved_fallback_department',
                name: 'Synthetic NSF Directorate',
                parent: 'nsf_root',
                active: '1',
            },
            {
                sys_id: 'profile_department',
                name: 'Profile Directorate',
                parent: '',
                active: '1',
            },
            {
                sys_id: 'directory_department',
                name: 'Directory Directorate',
                parent: '',
                active: '1',
            },
            {
                sys_id: 'outside_department',
                name: 'Outside Organization',
                parent: '',
                active: '1',
            },
        ],
        sys_user_group: [
            { sys_id: 'nsf_supervisors', name: 'NSF Supervisors', active: '1' },
        ],
        sys_user_grmember: [
            { sys_id: 'member_2', group: 'nsf_supervisors', user: 'supervisor_selected' },
            { sys_id: 'member_3', group: 'nsf_supervisors', user: 'supervisor_inactive' },
        ],
    }
}

function makeResolver(mutator) {
    const tables = baseTables()
    if (mutator) mutator(tables)

    function GlideRecord(table) {
        this.table = table
        this.rows = tables[table] || []
        this.results = []
        this.queries = []
        this.row = null
        this.index = 0
        this.limit = 0
        this.addQuery = (field, value) => this.queries.push([field, String(value)])
        this.orderByDesc = () => {}
        this.setLimit = (limit) => {
            this.limit = limit
        }
        this.query = () => {
            this.results = this.rows.filter((row) =>
                this.queries.every(([field, value]) => {
                    const actual = String(row[field] ?? '')
                    return value === 'true' ? actual === '1' || actual === 'true' : actual === value
                })
            )
            if (this.limit) this.results = this.results.slice(0, this.limit)
            this.index = 0
            this.row = null
        }
        this.next = () => {
            if (this.index >= this.results.length) return false
            this.row = this.results[this.index++]
            return true
        }
        this.hasNext = () => this.index < this.results.length
        this.get = (sysId) => {
            this.row = this.rows.find((row) => row.sys_id === String(sysId)) || null
            return Boolean(this.row)
        }
        this.getValue = (field) => String(this.row?.[field] ?? '')
        this.getDisplayValue = (field) => {
            if (field) return String(this.row?.[field] ?? '')
            return String(this.row?.name || this.row?.position || this.row?.sys_id || '')
        }
        this.getUniqueValue = () => String(this.row?.sys_id || '')
        this.isValidField = (field) => this.rows.some((row) => Object.hasOwn(row, field))
    }

    const sandbox = {
        GlideRecord,
        Class: {
            create: () =>
                function ScopedClass() {
                    if (this.initialize) this.initialize()
                },
        },
    }
    vm.runInNewContext(resolverSource, sandbox)
    return { resolver: new sandbox.RobProfileAuthorizationContext(), tables }
}

function contextForLifecycle(context) {
    return {
        valid: context.valid,
        supervisorId: context.supervisorId,
        position: context.position,
        organization: context.organization,
        evidence: [
            `Position source: ${context.positionSource}`,
            `Organization source: ${context.organizationSource}`,
            `Organization fallback used: ${context.organizationFallbackUsed}`,
            `Supervisor source: ${context.supervisorSource}`,
        ].join('\n'),
    }
}

function lifecycleInput(authorizationContext, overrides = {}) {
    return {
        decisionClass: 'NEW',
        caseId: 'case_1',
        subjectId: 'employee_primary',
        authorizationContext,
        employmentType: 'federal_employee',
        businessJustification: 'Synthetic M2 validation.',
        formVersion: '2026.04',
        decisionReason: 'NEW_NO_PRIOR_FORM',
        decisionEvaluatedAt: '2026-08-20 20:00:00',
        expirationDate: '2027-09-30',
        requestedAccess: ['usa_staffing'],
        priorAuthorizedAccess: [],
        ...overrides,
    }
}

test('Position resolves from authoritative HR Profile Position', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_primary', '', '')
    assert.equal(result.position, 'Authoritative HR Profile Analyst')
    assert.equal(result.positionSource, 'hr_profile_position')
})

test('approved sys_user title fallback works when HR Position is absent', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_title_fallback', '', '')
    assert.equal(result.valid, true)
    assert.equal(result.position, 'Directory Fallback Specialist')
    assert.equal(result.positionSource, 'sys_user_title')
})

test('unresolved Position blocks authorization context', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_unresolved', '', 'approved_fallback_department')
    assert.equal(result.valid, false)
    assert.ok(result.errors.includes('PROFILE_CONTEXT_POSITION_UNRESOLVED'))
})

test('Organization resolves from authoritative HR Profile Position department', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_primary', '', '')
    assert.equal(result.organization, 'Profile Directorate')
    assert.equal(result.organizationSource, 'hr_profile_position_department')
    assert.equal(result.organizationFallbackUsed, false)
})

test('controlled Organization fallback accepts an approved descendant', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve(
        'employee_org_fallback',
        '',
        'approved_fallback_department'
    )
    assert.equal(result.valid, true)
    assert.equal(result.organization, 'Synthetic NSF Directorate')
    assert.equal(result.organizationSource, 'approved_manual_fallback')
    assert.equal(result.organizationFallbackUsed, true)
})

test('Organization fallback rejects records outside the approved root', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_org_fallback', '', 'outside_department')
    assert.equal(result.valid, false)
    assert.ok(result.errors.includes('PROFILE_CONTEXT_ORGANIZATION_FALLBACK_INVALID'))
})

test('profile manager is the default validated Supervisor', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_primary', '', '')
    assert.equal(result.supervisorId, 'supervisor_default')
    assert.equal(result.supervisorSource, 'profile_manager')
})

test('active NSF Supervisors member can be selected', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_primary', 'supervisor_selected', '')
    assert.equal(result.valid, true)
    assert.equal(result.supervisorId, 'supervisor_selected')
    assert.equal(result.supervisorSource, 'selected_nsf_supervisor')
})

test('non-member Supervisor is rejected server-side', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_primary', 'supervisor_nonmember', '')
    assert.equal(result.valid, false)
    assert.ok(result.errors.includes('PROFILE_CONTEXT_SUPERVISOR_INVALID'))
})

test('inactive Supervisor is rejected even when membership exists', () => {
    const { resolver } = makeResolver()
    const result = resolver.resolve('employee_primary', 'supervisor_inactive', '')
    assert.equal(result.valid, false)
})

test('qualifiers and resolver independently enforce the configured populations', () => {
    const { resolver } = makeResolver()
    assert.match(resolver.getSupervisorQualifier(), /active=true\^sys_idIN/)
    assert.doesNotMatch(resolver.getSupervisorQualifier(), /supervisor_nonmember/)
    assert.match(resolver.getOrganizationQualifier(), /approved_fallback_department/)
    assert.doesNotMatch(resolver.getOrganizationQualifier(), /outside_department/)
})

test('final Position Organization and Supervisor are copied before signing', () => {
    const { resolver } = makeResolver()
    const context = contextForLifecycle(resolver.resolve('employee_primary', '', ''))
    const result = initiate(lifecycleInput(context))
    assert.equal(result.form.status, 'pending_employee_signature')
    assert.equal(result.form.positionSnapshot, 'Authoritative HR Profile Analyst')
    assert.equal(result.form.organizationSnapshot, 'Profile Directorate')
    assert.equal(result.form.supervisorId, 'supervisor_default')
    assert.match(result.form.profileContextEvidence, /Organization fallback used: false/)
})

test('later profile changes do not mutate Authorization Form snapshots', () => {
    const { resolver, tables } = makeResolver()
    const context = contextForLifecycle(resolver.resolve('employee_primary', '', ''))
    const result = initiate(lifecycleInput(context))
    tables.sn_hr_core_position[0].position = 'Changed Live Position'
    tables.sys_user.find((row) => row.sys_id === 'employee_primary').manager =
        'supervisor_selected'
    assert.equal(result.form.positionSnapshot, 'Authoritative HR Profile Analyst')
    assert.equal(result.form.supervisorId, 'supervisor_default')
})

test('supervisor approval and signature route to the snapshotted Authorization Form Supervisor', () => {
    const { resolver, tables } = makeResolver()
    const context = contextForLifecycle(resolver.resolve('employee_primary', '', ''))
    const form = initiate(lifecycleInput(context)).form
    tables.sys_user.find((row) => row.sys_id === 'employee_primary').manager =
        'supervisor_selected'
    assert.throws(
        () =>
            recordSupervisorDecision({
                supervisorId: form.supervisorId,
                approverId: 'supervisor_selected',
                outcome: 'APPROVED',
                decidedAt: '2026-08-20 20:05:00',
            }),
        /does not match/
    )
    assert.throws(
        () =>
            recordSupervisorSignature({
                supervisorId: form.supervisorId,
                signerId: 'supervisor_selected',
                supervisorApprovalComplete: true,
                supervisorApprovalOutcome: 'approved',
                signatureComplete: true,
                completedAt: '2026-08-20 20:10:00',
                documentTaskId: 'task_1',
                documentTaskExecutionId: 'execution_1',
            }),
        /does not match/
    )
})

test('missing validated context prevents lifecycle initiation', () => {
    assert.throws(
        () => initiate(lifecycleInput({ valid: false })),
        /Validated authorization context/
    )
})

test('Reuse consumes current validated Supervisor without mutating historical snapshots', () => {
    const { resolver } = makeResolver()
    const authorizationContext = contextForLifecycle(
        resolver.resolve('employee_primary', 'supervisor_selected', '')
    )
    const historical = {
        id: 'authorization_1',
        subjectId: 'employee_primary',
        status: 'active',
        formVersion: '2026.04',
        expirationDate: '2027-09-30',
        authorizedAccess: ['usa_staffing'],
        position: 'Historical Position',
        organization: 'Historical Organization',
        supervisorId: 'historical_supervisor',
    }
    const before = structuredClone(historical)
    const result = initiate(
        lifecycleInput(authorizationContext, {
            decisionClass: 'REUSE',
            subjectId: 'employee_primary',
            relatedAuthorizationId: 'authorization_1',
            relatedAuthorization: historical,
            currentAcceptedFormVersion: '2026.04',
            evaluationDate: '2026-08-20',
        })
    )
    assert.equal(result.expectedSupervisorId, 'supervisor_selected')
    assert.equal(result.formsCreated, 0)
    assert.equal(result.detailsCreated, 0)
    assert.deepEqual(historical, before)
})

test('downstream source no longer reads blocked native-case snapshot fields', () => {
    const lifecycleSource = fs.readFileSync(
        path.join(root, 'src/fluent/server/authorization-lifecycle-initiation.server.js'),
        'utf8'
    )
    assert.doesNotMatch(
        lifecycleSource,
        /get(?:Display)?Value\([^\n]*(?:position_title|organization_snapshot|supervisor_snapshot)/
    )
    assert.match(lifecycleSource, /resolveFromCase\(current\)/)
})

test('legacy case fields remain metadata-only and correction action is inactive', () => {
    const caseFields = fs.readFileSync(
        path.join(root, 'src/fluent/tables/rob-case-security-fields.now.ts'),
        'utf8'
    )
    const correctionAction = fs.readFileSync(
        path.join(root, 'src/fluent/ui-actions/requester-profile-correction.now.ts'),
        'utf8'
    )
    for (const field of [
        'x_2166123_rob_auth_position_title',
        'x_2166123_rob_auth_organization_snapshot',
        'x_2166123_rob_auth_supervisor_snapshot',
    ]) {
        assert.match(caseFields, new RegExp(`${field}:`))
    }
    assert.match(correctionAction, /active:\s*false/)
})

test('architecture adds no custom table or broad write privilege', () => {
    const privilegeSource = fs.readFileSync(
        path.join(root, 'src/fluent/security/rob-profile-read-privileges.now.ts'),
        'utf8'
    )
    assert.doesNotMatch(privilegeSource, /operation:\s*'(?:write|create|delete|execute)'/)
    assert.doesNotMatch(resolverSource, /setValue|update\(|insert\(|deleteRecord/)
})
