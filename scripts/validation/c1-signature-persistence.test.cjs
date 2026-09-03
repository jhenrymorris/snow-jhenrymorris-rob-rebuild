const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..', '..')
const evidencePath = path.join(
    root,
    'src/fluent/server/authorization-signature-evidence.server.js'
)
const evidenceSource = fs.readFileSync(evidencePath, 'utf8')
const nativeContract = JSON.parse(
    fs.readFileSync(
        path.join(
            root,
            'scripts/validation/c1-signature-persistence-contract.json'
        ),
        'utf8'
    )
)

function between(start, end) {
    const startIndex = evidenceSource.indexOf(start)
    const endIndex = evidenceSource.indexOf(end, startIndex + start.length)
    assert.notEqual(startIndex, -1, `missing start marker: ${start}`)
    assert.notEqual(endIndex, -1, `missing end marker: ${end}`)
    return evidenceSource.slice(startIndex, endIndex)
}

const persistenceHelper = between(
    'function persistSignatureEvidence(',
    'if (templateName === reuseTemplateName) {'
)
const employeeBranch = between(
    'if (isEmployeeStage) {',
    "signerId !== authorization.getValue('supervisor')"
)
const supervisorBranch = evidenceSource.slice(
    evidenceSource.indexOf(
        "signerId !== authorization.getValue('supervisor')"
    )
)

test('Employee native completion is validated before persistence', () => {
    assert.match(employeeBranch, /state !== '3'/)
    assert.match(employeeBranch, /signerId !== authorization\.getValue\('subject_person'\)/)
    assert.match(employeeBranch, /!completedAt/)
    assert.match(evidenceSource, /!executionId \|\| !current\.getValue\('pdf_document'\)/)
})

test('signature evidence uses the existing synchronous governed persistence subflow', () => {
    assert.match(
        evidenceSource,
        /x_2166123_rob_auth\.rob_persist_authorization_lifecycle_native/
    )
    assert.match(persistenceHelper, /sn_fd\.FlowAPI\.getRunner\(\)/)
    assert.match(persistenceHelper, /\.subflow\(signaturePersistenceSubflow\)/)
    assert.match(persistenceHelper, /\.inForeground\(\)/)
    assert.match(persistenceHelper, /\.withInputs\(inputs\)/)
    assert.match(persistenceHelper, /\.run\(\)/)
})

test('Employee evidence is passed through explicit typed subflow inputs', () => {
    assert.match(employeeBranch, /persistSignatureEvidence\(/)
    assert.match(employeeBranch, /'employee'/)
    assert.match(employeeBranch, /signerId/)
    assert.match(employeeBranch, /completedAt/)
    assert.match(employeeBranch, /current\.getUniqueValue\(\)/)
    assert.match(employeeBranch, /executionId/)
    assert.match(persistenceHelper, /signature_stage: signatureStage/)
    assert.match(persistenceHelper, /new GlideRecord\('sys_user'\)/)
    assert.match(persistenceHelper, /new GlideRecord\('sn_doc_task'\)/)
    assert.match(
        persistenceHelper,
        /new GlideRecord\('sn_doc_task_execution'\)/
    )
    assert.match(persistenceHelper, /signature_signer: signer/)
    assert.match(
        persistenceHelper,
        /signature_date_time: new GlideDateTime\(completedAt\)/
    )
    assert.match(persistenceHelper, /signature_document_task: documentTask/)
    assert.match(
        persistenceHelper,
        /signature_document_task_execution: documentTaskExecution/
    )
    assert.match(persistenceHelper, /could not resolve its typed reference inputs/)
})

test('Employee persistence committed reread preserves the exact governed evidence', () => {
    assert.match(persistenceHelper, /employee_signature_complete/)
    assert.match(persistenceHelper, /employee_signer/)
    assert.match(persistenceHelper, /employee_signature_date_time/)
    assert.match(persistenceHelper, /employee_document_task/)
    assert.match(persistenceHelper, /document_task_execution/)
    assert.match(persistenceHelper, /pending_supervisor_approval_signature/)
    assert.match(persistenceHelper, /authorization\.get\(authorizationId\)/)
})

test('Employee evidence remains idempotently bound to one native task', () => {
    assert.match(
        employeeBranch,
        /recordedEmployeeTaskId === current\.getUniqueValue\(\)[\s\S]*?return/
    )
    assert.match(employeeBranch, /already bound to another task/)
})

test('Supervisor signature uses the same persistence boundary and remains idempotent', () => {
    assert.match(supervisorBranch, /persistSignatureEvidence\(/)
    assert.match(supervisorBranch, /'supervisor'/)
    assert.match(persistenceHelper, /supervisor_signature_complete/)
    assert.match(persistenceHelper, /supervisor_signer/)
    assert.match(persistenceHelper, /supervisor_signature_date_time/)
    assert.match(persistenceHelper, /supervisor_document_task/)
    assert.match(
        supervisorBranch,
        /recordedSupervisorTaskId === current\.getUniqueValue\(\)[\s\S]*?return/
    )
    assert.match(supervisorBranch, /already bound to another task/)
})

test('active signature branches do not write Authorization records through GlideRecord', () => {
    assert.doesNotMatch(employeeBranch, /authorization\.setValue\(/)
    assert.doesNotMatch(employeeBranch, /authorization\.update\(/)
    assert.doesNotMatch(employeeBranch, /authorization\.insert\(/)
    assert.doesNotMatch(supervisorBranch, /authorization\.setValue\(/)
    assert.doesNotMatch(supervisorBranch, /authorization\.update\(/)
    assert.doesNotMatch(supervisorBranch, /authorization\.insert\(/)
})

test('incomplete or invalid native evidence still fails closed', () => {
    assert.match(evidenceSource, /current\.state\.changesTo\('3'\)/)
    assert.match(evidenceSource, /missing its native execution or PDF document reference/)
    assert.match(evidenceSource, /employee signature evidence did not satisfy the lifecycle gate/)
    assert.match(evidenceSource, /unexpected participant contract/)
})

test('Supervisor finalization still requires Employee, approval, and signature evidence', () => {
    assert.match(supervisorBranch, /employee_signature_complete/)
    assert.match(supervisorBranch, /supervisor_approval_complete/)
    assert.match(supervisorBranch, /supervisor_approval_outcome'\) !== 'approved'/)
    assert.match(supervisorBranch, /supervisor_approver/)
    assert.match(supervisorBranch, /supervisor_approval_date_time/)
    assert.match(supervisorBranch, /generateFinalPdf\(authorization\)/)
})

test('C1 signature persistence creates no fulfillment work', () => {
    assert.doesNotMatch(
        evidenceSource,
        /sn_hr_core_task|fulfillment|provisioning|RESTMessage|sn_ws/
    )
})

test('generic GlideRecord persistence privileges are not declared by the correction', () => {
    const securityDir = path.join(root, 'src', 'fluent', 'security')
    const securitySource = fs
        .readdirSync(securityDir, { recursive: true })
        .filter((entry) => String(entry).endsWith('.ts'))
        .map((entry) => fs.readFileSync(path.join(securityDir, entry), 'utf8'))
        .join('\n')
    assert.doesNotMatch(
        securitySource,
        /GlideRecord\.(?:setValue|update|insert)/
    )
    assert.doesNotMatch(securitySource, /targetType:\s*['"]Scope['"]/)
})

test('deferred native extension is exact, typed, and not a generic update API', () => {
    assert.equal(nativeContract.subflow.sysId, 'dbfbb5fc8347c3504f5193a6feaad335')
    assert.equal(nativeContract.subflow.table, 'x_2166123_rob_auth_rob_auth')
    assert.deepEqual(
        nativeContract.newInputs.map((input) => input.name),
        [
            'signature_stage',
            'signature_signer',
            'signature_date_time',
            'signature_document_task',
            'signature_document_task_execution',
        ]
    )
    assert.equal(nativeContract.constraints.dynamicTableInput, false)
    assert.equal(nativeContract.constraints.genericFieldMapInput, false)
    assert.equal(nativeContract.constraints.scriptedStatusBinding, false)
    assert.equal(nativeContract.constraints.approvalFieldsOwnedByNativeApprovalFlow, true)
})

test('native Employee and Supervisor mappings persist only their approved fields', () => {
    assert.deepEqual(
        Object.keys(nativeContract.branches.employee.fieldMappings).sort(),
        [
            'document_task_execution',
            'employee_document_task',
            'employee_signature_complete',
            'employee_signature_date_time',
            'employee_signer',
            'status',
        ]
    )
    assert.deepEqual(
        Object.keys(nativeContract.branches.supervisor.fieldMappings).sort(),
        [
            'document_task_execution',
            'supervisor_document_task',
            'supervisor_signature_complete',
            'supervisor_signature_date_time',
            'supervisor_signer',
        ]
    )
    assert.equal(
        nativeContract.branches.employee.fieldMappings.status.value,
        'pending_supervisor_approval_signature'
    )
    assert.equal(
        nativeContract.branches.employee.fieldMappings.status.kind,
        'literal'
    )
})
