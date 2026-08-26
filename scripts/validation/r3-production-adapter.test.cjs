const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { test } = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const adapter = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/authorization-decision-entry.server.js'
    ),
    'utf8'
)
const decisionService = fs.readFileSync(
    path.join(
        root,
        'src/server/authorization/AuthorizationDecisionService.js'
    ),
    'utf8'
)
const businessRules = fs.readFileSync(
    path.join(
        root,
        'src/fluent/business-rules/rob-authorization-lifecycle.now.ts'
    ),
    'utf8'
)
const lifecycle = fs.readFileSync(
    path.join(
        root,
        'src/fluent/server/authorization-lifecycle-initiation.server.js'
    ),
    'utf8'
)
const bridgeSource = fs.readFileSync(
    path.join(root, 'manual/hr-core/RobHrCasePersistenceBridge.server.js'),
    'utf8'
)

function bridge() {
    const context = {
        Class: {
            create: () =>
                function BridgeClass() {
                    if (this.initialize) this.initialize()
                },
        },
        GlideDateTime: class GlideDateTime {
            getValue() {
                return '2026-08-25 12:00:00'
            }
        },
        gs: {
            error() {},
        },
    }
    vm.runInNewContext(bridgeSource, context)
    return new context.RobHrCasePersistenceBridge()
}

function caseRecord(overrides = {}) {
    const values = {
        sys_id: '11111111111111111111111111111111',
        sys_class_name: 'sn_hr_core_case_payroll',
        opened_by: 'employee',
        ...overrides,
    }
    return {
        values,
        getTableName() {
            return values.sys_class_name
        },
        getUniqueValue() {
            return values.sys_id
        },
        setValue(name, value) {
            values[name] = String(value)
        },
        getValue(name) {
            return values[name] || ''
        },
    }
}

function decision(overrides = {}) {
    return {
        decisionClass: 'NEW',
        reasonCode: 'NEW_NO_PRIOR_FORM',
        existingAuthorizationStatus: 'none',
        relatedAuthorizationId: '',
        coveredAccess: [],
        uncoveredAccess: ['22222222222222222222222222222222'],
        proposedExpirationDate: '2027-06-30',
        supervisorApprovalRequired: true,
        employeeSignatureRequired: true,
        supervisorSignatureRequired: true,
        materialContextChange: false,
        renewalReason: '',
        duplicateCaseId: '',
        ...overrides,
    }
}

test('one shared production adapter invokes the committed R3 module and narrow bridge', () => {
    assert.match(
        adapter,
        /require\(\s*['"]\.\/src\/server\/authorization\/AuthorizationDecisionService\.js['"]\s*\)/
    )
    assert.match(adapter, /decisionModule\.evaluate\(context\)/)
    assert.match(
        adapter,
        /new sn_hr_core\.RobHrCasePersistenceBridge\(\)\.setRobDecision/
    )
    assert.match(adapter, /JSON\.stringify\(decision\)/)
    assert.doesNotMatch(adapter, /setAbortAction/)
    assert.doesNotMatch(adapter, /current\s*\.\s*(?:update|insert)\s*\(/)
})

test('R3 runtime module dependencies use exact installed JavaScript paths', () => {
    assert.match(
        decisionService,
        /require\(['"]\.\/AuthorizationRepository\.js['"]\)/
    )
    assert.match(
        decisionService,
        /require\(['"]\.\/ExpirationDateService\.js['"]\)/
    )
    assert.doesNotMatch(
        decisionService,
        /require\(['"]\.\/(?:AuthorizationRepository|ExpirationDateService)['"]\)/
    )
})

test('Payroll and Workforce entry rules are source-owned, idempotent, and inactive until native bootstrap', () => {
    assert.match(
        businessRules,
        /evaluatePayrollAuthorizationDecision[\s\S]*?active: false[\s\S]*?table: 'sn_hr_core_case_payroll'[\s\S]*?script: Now\.include\('\.\.\/server\/authorization-decision-entry\.server\.js'\)/
    )
    assert.match(
        businessRules,
        /evaluateWorkforceAuthorizationDecision[\s\S]*?active: false[\s\S]*?table: 'sn_hr_core_case_workforce_admin'[\s\S]*?script: Now\.include\('\.\.\/server\/authorization-decision-entry\.server\.js'\)/
    )
    assert.match(
        adapter,
        /var requestedItems = String\([\s\S]*?current\.getValue\(prefix \+ 'requested_items'\)[\s\S]*?if \(!requestedItems\.trim\(\)\) return/
    )
    assert.equal(
        (businessRules.match(/action: \['insert', 'update'\]/g) || []).length,
        4
    )
    assert.match(businessRules, /order: 150/)
})

test('unknown DEC-MAP annual-renewal input remains unknown', () => {
    assert.match(adapter, /annualRenewalDue: 'unknown'/)
    assert.doesNotMatch(adapter, /annualRenewalDue:\s*(?:true|false)/)
    assert.match(adapter, /DEC-MAP-01\/02/)
    assert.doesNotMatch(adapter, /\?\s*'unchanged'\s*:\s*'changed'/)
})

test('organization context and governed reference use the resolved department id', () => {
    assert.match(
        adapter,
        /organization:\s*String\(\s*profileContext\.organizationId\s*\|\|\s*profileContext\.organization/
    )
    assert.match(
        lifecycle,
        /organizationSnapshot\s*=\s*profileContext\.organizationId\s*\|\|\s*profileContext\.organization/
    )
})

test('configuration and authorization scope extraction fail closed', () => {
    assert.match(adapter, /graceWindowValue\s*\?\s*Number\(graceWindowValue\)\s*:\s*-1/)
    assert.match(adapter, /detail\.addQuery\('status', 'NOT IN', 'denied,revoked'\)/)
    assert.match(
        adapter,
        /function isDecisionHistoryStatus[\s\S]*active: true[\s\S]*expired: true[\s\S]*lapsed: true[\s\S]*revoked: true[\s\S]*obsolete_version: true/
    )
    assert.match(
        adapter,
        /applicable:\s*isDecisionHistoryStatus\(authorizationStatus\)/
    )
    assert.doesNotMatch(
        adapter,
        /authorization\.getValue\('status'\) !== 'superseded'/
    )
})

test('downstream lifecycle accepts a decision persisted during insert or mapped-field update', () => {
    assert.equal(
        (businessRules.match(/action: \['insert', 'update'\]/g) || []).length,
        4
    )
    assert.match(lifecycle, /previous\s*&&[\s\S]*decisionTimeField/)
})

test('downstream lifecycle safely resumes the continuous native signing execution', () => {
    assert.match(
        lifecycle,
        /function resumeAuthorizationSigning\(authorization\)[\s\S]*pending_employee_signature[\s\S]*initiateAuthorizationSigning/
    )
    assert.match(
        lifecycle,
        /previous\s*&&[\s\S]*decisionTimeField[\s\S]*resumeAuthorizationSigning\(existingAuthorizationForCase\(\)\)/
    )
    assert.match(
        lifecycle,
        /existingAuthorizationForCase[\s\S]*setLimit\(2\)[\s\S]*duplicate governed Authorization Forms/
    )
    assert.match(
        lifecycle,
        /GenerateDocumentAPI\(\)\.initiateDocumentTasks\([\s\S]*current[\s\S]*template\.getUniqueValue\(\)[\s\S]*outputName/
    )
    assert.match(lifecycle, /ROB Form 1768 Authorization/)
    assert.doesNotMatch(lifecycle, /ROB Form 1768 Employee Signature/)
    assert.doesNotMatch(lifecycle, /DocumentTaskUtils\(\)\.createDocumentTask/)
})

test('HR Core bridge persists the complete New output without changing HRSD identity', () => {
    const record = caseRecord()
    const result = bridge().setRobDecision(record, JSON.stringify(decision()))
    const prefix = 'x_2166123_rob_auth_'

    assert.equal(result, true)
    assert.equal(record.getValue(prefix + 'authorization_path'), 'new')
    assert.equal(record.getValue(prefix + 'decision_reason'), 'NEW_NO_PRIOR_FORM')
    assert.equal(record.getValue(prefix + 'decision_evaluated_at'), '2026-08-25 12:00:00')
    assert.equal(record.getValue(prefix + 'uncovered_access'), '22222222222222222222222222222222')
    assert.equal(record.getValue(prefix + 'requires_employee_signature'), '1')
    assert.equal(record.getValue(prefix + 'requires_supervisor_approval'), '1')
    assert.equal(record.getValue(prefix + 'requires_supervisor_signature'), '1')
    assert.equal(record.getValue(prefix + 'authorization_processing_blocked'), '0')
    assert.equal(record.getValue('opened_by'), 'employee')
})

test('HR Core bridge persists deterministic Exception blocking', () => {
    const record = caseRecord({
        sys_class_name: 'sn_hr_core_case_workforce_admin',
    })
    const result = bridge().setRobDecision(
        record,
        JSON.stringify(decision({
            decisionClass: 'EXCEPTION',
            reasonCode: 'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE',
            uncoveredAccess: [],
            proposedExpirationDate: '',
            supervisorApprovalRequired: false,
            employeeSignatureRequired: false,
            supervisorSignatureRequired: false,
        }))
    )
    const prefix = 'x_2166123_rob_auth_'

    assert.equal(result, true)
    assert.equal(record.getValue(prefix + 'authorization_path'), 'exception')
    assert.equal(record.getValue(prefix + 'exception_review_required'), '1')
    assert.equal(
        record.getValue(prefix + 'exception_reason'),
        'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
    )
    assert.equal(record.getValue(prefix + 'authorization_processing_blocked'), '1')
    assert.equal(record.getValue(prefix + 'fulfillment_gate_complete'), '0')
})

test('HR Core bridge accepts committed Reuse Amendment and Renewal outputs', () => {
    const prefix = 'x_2166123_rob_auth_'
    const relatedAuthorizationId = '33333333333333333333333333333333'
    const coveredAccessId = '44444444444444444444444444444444'
    const uncoveredAccessId = '55555555555555555555555555555555'
    const scenarios = [
        decision({
            decisionClass: 'REUSE',
            reasonCode: 'REUSE_FULLY_COVERED',
            existingAuthorizationStatus: 'active',
            relatedAuthorizationId,
            coveredAccess: [coveredAccessId],
            uncoveredAccess: [],
            employeeSignatureRequired: false,
        }),
        decision({
            decisionClass: 'AMENDMENT',
            reasonCode: 'AMD_PARTIAL_COVERAGE',
            existingAuthorizationStatus: 'active',
            relatedAuthorizationId,
            coveredAccess: [coveredAccessId],
            uncoveredAccess: [uncoveredAccessId],
        }),
        decision({
            decisionClass: 'RENEWAL',
            reasonCode: 'REN_EXPIRED',
            existingAuthorizationStatus: 'expired',
            relatedAuthorizationId,
            coveredAccess: [coveredAccessId],
            uncoveredAccess: [],
            renewalReason: 'Expired',
        }),
    ]

    for (const output of scenarios) {
        const record = caseRecord()
        assert.equal(
            bridge().setRobDecision(record, JSON.stringify(output)),
            true
        )
        assert.equal(
            record.getValue(prefix + 'authorization_path'),
            output.decisionClass.toLowerCase()
        )
        assert.equal(record.getValue(prefix + 'evaluated_authorization'), relatedAuthorizationId)
        assert.equal(record.getValue(prefix + 'fulfillment_gate_complete'), '0')
    }
})

test('HR Core bridge rejects unsupported tables, malformed ids, and unknown outputs', () => {
    const persistenceBridge = bridge()
    assert.equal(
        persistenceBridge.setRobDecision(
            caseRecord({ sys_class_name: 'incident' }),
            JSON.stringify(decision())
        ),
        false
    )
    assert.equal(
        persistenceBridge.setRobDecision(
            caseRecord({ sys_id: 'not-a-sys-id' }),
            JSON.stringify(decision())
        ),
        false
    )
    assert.equal(
        persistenceBridge.setRobDecision(
            caseRecord(),
            JSON.stringify(
                decision({ reasonCode: 'INFERRED_UNAPPROVED_REASON' })
            )
        ),
        false
    )
    assert.equal(
        persistenceBridge.setRobDecision(
            caseRecord(),
            JSON.stringify(decision({ supervisorApprovalRequired: false }))
        ),
        false
    )
    assert.equal(
        persistenceBridge.setRobDecision(
            caseRecord(),
            JSON.stringify(decision({ proposedExpirationDate: 'not-a-date' }))
        ),
        false
    )
    assert.equal(
        persistenceBridge.setRobDecision(
            caseRecord(),
            JSON.stringify(
                decision({ renewalReason: 'Invented Renewal Rule' })
            )
        ),
        false
    )
    assert.equal(
        persistenceBridge.setRobDecision(caseRecord(), '{not-json'),
        false
    )
    assert.equal(
        persistenceBridge.setRobDecision(caseRecord(), decision()),
        false
    )
})

test('bridge allowlist excludes native identity and arbitrary field mutation', () => {
    const decisionMethod = bridgeSource.split('setRobDecision: function')[1]
    assert.doesNotMatch(decisionMethod, /setValue\(\s*['"]opened_by/)
    assert.doesNotMatch(decisionMethod, /setValue\(\s*['"]opened_for/)
    assert.doesNotMatch(decisionMethod, /setValue\(\s*['"]subject_person/)
    assert.doesNotMatch(decisionMethod, /caseRecord\.update\s*\(/)
    assert.doesNotMatch(decisionMethod, /new\s+GlideRecord\s*\(/)
})
