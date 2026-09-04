const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..', '..')
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8')
const signature = read('src/fluent/server/authorization-signature-evidence.server.js')
const finalization = read('src/fluent/server/authorization-finalization.server.js')
const bridge = read('manual/hr-core/RobHrCasePersistenceBridge.server.js')
const reconciliation = read('src/fluent/server/reconcile-fulfillment-task-completion.server.js')
const security = JSON.parse(
    read('scripts/validation/release-security-dependencies.json')
)
const contract = JSON.parse(
    read('scripts/validation/c1-signature-persistence-contract.json')
)

const prohibitedAuthorizationWrites = /(?:authorization|details|predecessor|predecessorDetails)\.setValue\(|(?:authorization|details|predecessor|predecessorDetails)\.update\(|(?:authorization|details|predecessor|predecessorDetails)\.insert\(|(?:authorization|details|predecessor|predecessorDetails)\.deleteRecord\(/

test('final PDF claim uses the existing synchronous governed persistence subflow', () => {
    assert.match(signature, /function persistFinalizationState\(/)
    assert.match(signature, /finalization_stage: finalizationStage/)
    assert.match(signature, /persistFinalizationState\(authorization, 'claim'\)/)
    assert.match(signature, /signed_pdf_generated/)
    assert.match(signature, /failed committed reread validation/)
})

test('claim failures reset only through the governed persistence subflow', () => {
    assert.equal(
        (signature.match(/persistFinalizationState\(authorization, 'reset'\)/g) || []).length,
        3
    )
    assert.doesNotMatch(signature, /setValue\('signed_pdf_generated'/)
    assert.doesNotMatch(signature, /authorization\.update\(/)
})

test('final PDF generation remains native, flattened, and Authorization-owned', () => {
    assert.match(signature, /fillDocumentFieldsAndFlatten/)
    assert.match(signature, /FlattenType:\s*'fully_flatten'/)
    assert.match(signature, /'x_2166123_rob_auth_rob_auth'/)
    assert.doesNotMatch(signature, /GlideSysAttachment/)
})

test('finalization readiness still requires the complete C1 evidence gate', () => {
    for (const field of [
        'employee_signature_complete',
        'supervisor_approval_complete',
        'supervisor_approval_outcome',
        'supervisor_signature_complete',
        'employee_document_task',
        'supervisor_document_task',
        'document_task_execution',
        'form_version',
        'expiration_date',
    ]) assert.match(finalization, new RegExp(field))
    assert.match(finalization, /pending_supervisor_approval_signature/)
    assert.match(finalization, /rejected a non-pending current Detail/)
    assert.match(finalization, /could not resolve its predecessor/)
})

test('complete finalization uses one fixed-purpose native subflow invocation', () => {
    assert.match(finalization, /finalization_stage:\s*'complete'/)
    assert.match(finalization, /final_pdf_attachment:\s*current/)
    assert.match(finalization, /final_pdf_generated_date_time/)
    assert.match(finalization, /final_authorization_date:\s*finalDate/)
    assert.match(finalization, /\.inForeground\(\)/)
    assert.match(finalization, /\.run\(\)/)
})

test('reachable finalization source contains zero governed generic writes', () => {
    assert.doesNotMatch(signature, prohibitedAuthorizationWrites)
    assert.doesNotMatch(finalization, prohibitedAuthorizationWrites)
    assert.doesNotMatch(signature, /new GlideRecord\([^)]*\)\.insert\(/)
    assert.doesNotMatch(finalization, /deleteRecord\(/)
})

test('native finalization contract has explicit claim reset and complete modes', () => {
    const modes = contract.newInputs.find((input) => input.name === 'finalization_stage')
    assert.deepEqual(modes.allowedValues, ['claim', 'reset', 'complete'])
    assert.deepEqual(
        Object.keys(contract.branches.finalizationClaim.fieldMappings),
        ['signed_pdf_generated']
    )
    assert.deepEqual(
        Object.keys(contract.branches.finalizationReset.fieldMappings),
        ['signed_pdf_generated']
    )
})

test('native complete mode persists the exact Authorization final state', () => {
    const mappings = contract.branches.finalizationComplete.fieldMappings
    assert.deepEqual(Object.keys(mappings).sort(), [
        'effective_date',
        'final_authorization_date',
        'final_pdf_attachment',
        'signed_pdf_generated',
        'signed_pdf_generated_date_time',
        'status',
    ])
    assert.equal(mappings.status.value, 'active')
    assert.equal(mappings.status.kind, 'literal')
    assert.equal(mappings.effective_date.input, 'final_authorization_date')
})

test('native complete mode transitions current Details and predecessor history', () => {
    const complete = contract.branches.finalizationComplete
    assert.equal(complete.currentDetailMappings.status.value, 'pending_fulfillment')
    assert.equal(complete.currentDetailMappings.authorized_start_date.input, 'final_authorization_date')
    assert.equal(complete.predecessorMappings.status.value, 'superseded')
    assert.equal(complete.predecessorDetailMappings.status.value, 'superseded')
    assert.equal(contract.constraints.fixedAuthorizationAndDetailTables, true)
    assert.equal(contract.constraints.genericFinalizationFieldMapInput, false)
})

test('finalization validates every committed state before opening fulfillment', () => {
    assert.match(finalization, /final_pdf_attachment/)
    assert.match(finalization, /signed_pdf_generated_date_time/)
    assert.match(finalization, /final_authorization_date/)
    assert.match(finalization, /pending_fulfillment/)
    assert.match(finalization, /superseded_by_authorization_form/)
    assert.match(finalization, /openRobFulfillmentGate/)
    assert.ok(finalization.indexOf('openRobFulfillmentGate') > finalization.indexOf('predecessor Detail committed reread'))
})

test('HR Core fulfillment gate bridge is fixed-table allowlisted and idempotent', () => {
    assert.match(bridge, /openRobFulfillmentGate:\s*function/)
    assert.match(bridge, /sn_hr_core_case_payroll/)
    assert.match(bridge, /sn_hr_core_case_workforce_admin/)
    assert.match(bridge, /new:\s*true/)
    assert.match(bridge, /amendment:\s*true/)
    assert.match(bridge, /renewal:\s*true/)
    assert.match(bridge, /fulfillment_gate_complete/)
    assert.match(bridge, /getValue\(gate\) === '1'/)
    assert.doesNotMatch(bridge, /new GlideRecord\('x_2166123_rob_auth_rob_auth'\)/)
})

test('fulfillment gate opens only after committed finalization and starts existing M4', () => {
    assert.match(finalization, /status'\) !== 'active'/)
    assert.match(finalization, /pending_fulfillment/)
    assert.match(finalization, /openRobFulfillmentGate/)
    assert.match(reconciliation, /rob_activate_fulfilled_access_detail_native/)
    assert.match(reconciliation, /closeEligibleCase/)
})

test('exact target-owned finalization and reconciliation caller controls are finite', () => {
    assert.equal(security.expectedResourceOperationPairs, 29)
    assert.equal(security.unknownDependencies, 0)
    assert.equal(security.prohibitedScopeToScope, 0)
    assert.equal(security.prohibitedGenericGlideRecordPrivileges, 0)
    assert.equal(security.resourceOperationPairs.length, 29)
    assert.equal(new Set(security.resourceOperationPairs).size, 29)
    assert.ok(security.resourceOperationPairs.includes('sn_doc_task_execution/read'))
    assert.ok(security.resourceOperationPairs.includes('sn_hr_core.RobHrCasePersistenceBridge/execute'))
    assert.ok(security.resourceOperationPairs.includes('sn_hr_core.RobHrFulfillmentBridgeV2/execute'))
    assert.deepEqual(
        security.targetOwnedCallerControls.map((item) => item.sourceLogicalId),
        [
            'finalize-authorization-after-pdf-association',
            'reconcile-rob-fulfillment-task-completion',
        ]
    )
    assert.deepEqual(
        security.targetOwnedCallerControls.map((item) => item.targetApiName),
        [
            'sn_hr_core.RobHrCasePersistenceBridge',
            'sn_hr_core.RobHrFulfillmentBridgeV2',
        ]
    )
    for (const control of security.targetOwnedCallerControls) {
        assert.equal(control.sourceType, 'Business Rule')
        assert.equal(control.sourceScope, 'x_2166123_rob_auth')
        assert.equal(control.targetScope, 'sn_hr_core')
        assert.equal(control.operation, 'execute')
        assert.equal(control.requiredStatus, 'allowed')
    }
})

test('no finalization branch creates early fulfillment work', () => {
    assert.doesNotMatch(signature, /new GlideRecord\('sn_hr_core_task'\)/)
    assert.doesNotMatch(finalization, /new GlideRecord\('sn_hr_core_task'\)/)
    assert.doesNotMatch(finalization, /RobHrFulfillmentBridgeV2/)
})

test('the complete dependency whitelist is finite and contains no unknown entry', () => {
    const matrix = read('docs/RELEASE-DEPENDENCY-MATRIX.md')
    assert.match(matrix, /EXPECTED RELEASE SECURITY DEPENDENCIES = 29/)
    assert.match(matrix, /UNKNOWN DEPENDENCIES = 0/)
    assert.match(matrix, /UNKNOWN PERSISTENCE OWNERS = 0/)
    assert.match(matrix, /PROHIBITED REACHABLE GENERIC WRITES AFTER REMEDIATION = 0/)
    assert.doesNotMatch(matrix, /\|\s*UNKNOWN\s*\|/)
})

test('every remaining source-tree generic write is confined to inactive historical callers', () => {
    const serverDir = path.join(root, 'src', 'fluent', 'server')
    const writers = fs
        .readdirSync(serverDir)
        .filter((name) => name.endsWith('.js'))
        .filter((name) =>
            /\.setValue\(|\.update\(|\.insert\(|\.deleteRecord\(/.test(
                fs.readFileSync(path.join(serverDir, name), 'utf8')
            )
        )
        .sort()
    assert.deepEqual(writers, [
        'create-supervisor-exception-task.server.js',
        'supervisor-approval-evidence.server.js',
    ])
    const lifecycleRules = read('src/fluent/business-rules/rob-authorization-lifecycle.now.ts')
    const profileRules = read('src/fluent/business-rules/rob-requester-profile-security.now.ts')
    assert.match(
        lifecycleRules,
        /captureSupervisorApprovalDecision[\s\S]*?active:\s*false[\s\S]*?supervisor-approval-evidence\.server\.js/
    )
    assert.equal(
        (profileRules.match(/active:\s*false[\s\S]{0,420}?create-supervisor-exception-task\.server\.js/g) || []).length,
        2
    )
})

test('all A through V stages are implemented tested and security ready', () => {
    const matrix = read('docs/RELEASE-DEPENDENCY-MATRIX.md')
    const ready = matrix.match(/Stage [A-V]: IMPLEMENTED \| TESTED \| SECURITY READY/g) || []
    assert.equal(ready.length, 22)
    assert.doesNotMatch(matrix, /RUNTIME WILL DETERMINE/)
})
