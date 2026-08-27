const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const { contract, validateTemplateData, validateSourceContract } = require('./m3-native-template-readiness.cjs')

function wrapped(value, displayValue = value) {
    return { value: String(value), display_value: String(displayValue) }
}

function validFixture() {
    const scopes = [
        { sys_id: wrapped('scope-doc'), scope: wrapped(contract.documentTemplatesScope) },
        { sys_id: wrapped('scope-v2'), scope: wrapped(contract.applicationScope) },
    ]
    const templates = []
    const participants = []
    const mappings = []
    for (const [role, expected] of Object.entries(contract.templates)) {
        const id = `template-${role}`
        templates.push({
            sys_id: wrapped(id), name: wrapped(expected.name), table: wrapped(contract.table),
            state: wrapped('published', 'Published'), active: wrapped('true'),
            document: wrapped(`document-${role}`),
            sys_scope: wrapped(expected.scope === contract.documentTemplatesScope ? 'scope-doc' : 'scope-v2'),
        })
        if (role === 'finalRenderer') {
            for (const fieldName of expected.bodyMappings) {
                mappings.push({ document: wrapped(id), document_field: wrapped(fieldName), document_field_type: wrapped('text'), participant: wrapped(''), mandatory: wrapped('false') })
            }
            for (const signature of expected.signatureMappings) {
                mappings.push({ document: wrapped(id), document_field: wrapped(''), document_field_type: wrapped('signature'), participant: wrapped(`participant-${signature.participant}`, signature.participant), mandatory: wrapped(signature.mandatory) })
            }
            continue
        }
        const participant = expected.participant
        const participantId = `participant-${role}`
        participants.push({
            sys_id: wrapped(participantId), document_template: wrapped(id), name: wrapped(participant.name),
            order: wrapped(participant.order), action: wrapped(participant.action), optional: wrapped(participant.optional),
            advanced_script_toggle: wrapped(participant.advanced), doc_template_user: wrapped(participant.userField),
            script: wrapped(participant.scriptTokens.join('\n')),
        })
        mappings.push({ document: wrapped(id), document_field: wrapped('Signature'), document_field_type: wrapped('signature'), participant: wrapped(participantId, participant.name), mandatory: wrapped('true') })
    }
    return { templates, participants, mappings, scopes }
}

test('split-stage contract accepts two sn_doc signing templates and one final renderer', () => {
    const fixture = validFixture()
    assert.deepEqual(validateTemplateData(fixture.templates, fixture.participants, fixture.mappings, fixture.scopes), [])
})

test('employee template rejects optional advanced or Supervisor participant configuration', () => {
    const fixture = validFixture()
    const employee = fixture.participants.find((record) => record.name.value === 'Employee')
    employee.optional = wrapped('true')
    employee.advanced_script_toggle = wrapped('true')
    employee.name = wrapped('Supervisor')
    const errors = validateTemplateData(fixture.templates, fixture.participants, fixture.mappings, fixture.scopes)
    assert.ok(errors.some((error) => error.includes('optional must be false')))
    assert.ok(errors.some((error) => error.includes('advanced_script_toggle must be false')))
    assert.ok(errors.some((error) => error.includes('name must be Employee')))
})

test('supervisor template rejects action Sign optional participant and wrong order', () => {
    const fixture = validFixture()
    const supervisor = fixture.participants.find((record) => record.name.value === 'Supervisor')
    supervisor.action = wrapped('sign')
    supervisor.optional = wrapped('true')
    supervisor.order = wrapped('2')
    const errors = validateTemplateData(fixture.templates, fixture.participants, fixture.mappings, fixture.scopes)
    assert.ok(errors.some((error) => error.includes('action must be fill')))
    assert.ok(errors.some((error) => error.includes('optional must be false')))
    assert.ok(errors.some((error) => error.includes('order must be 1')))
})

test('signing templates must be owned by sn_doc and have one mandatory bound signature', () => {
    const fixture = validFixture()
    fixture.templates.find((record) => record.name.value === contract.templates.employee.name).sys_scope = wrapped('scope-v2')
    fixture.mappings = fixture.mappings.filter((mapping) => mapping.document.value !== 'template-supervisor')
    const errors = validateTemplateData(fixture.templates, fixture.participants, fixture.mappings, fixture.scopes)
    assert.ok(errors.some((error) => error.includes('owning scope must be sn_doc')))
    assert.ok(errors.some((error) => error.includes('mandatory participant-bound signature mappings must be 1')))
})

test('final renderer requires the complete 28-map contract', () => {
    const fixture = validFixture()
    fixture.mappings.pop()
    const errors = validateTemplateData(fixture.templates, fixture.participants, fixture.mappings, fixture.scopes)
    assert.ok(errors.some((error) => error.includes('expected 28 mappings')))
    assert.ok(errors.some((error) => error.includes('Supervisor signature mapping count must be 1')))
})

test('validator rejects duplicate logical templates', () => {
    const fixture = validFixture()
    fixture.templates.push({ ...fixture.templates[0], sys_id: wrapped('duplicate') })
    const errors = validateTemplateData(fixture.templates, fixture.participants, fixture.mappings, fixture.scopes)
    assert.ok(errors.some((error) => error.includes('expected exactly one logical template')))
})

test('source contract requires split launch and excludes Fill refusal and final-renderer initiation', () => {
    const root = path.resolve(__dirname, '..', '..')
    const initiation = fs.readFileSync(path.join(root, 'src/fluent/server/authorization-lifecycle-initiation.server.js'), 'utf8')
    const evidence = fs.readFileSync(path.join(root, 'src/fluent/server/authorization-signature-evidence.server.js'), 'utf8')
    const launch = fs.readFileSync(path.join(root, 'src/fluent/server/supervisor-signature-launch.server.js'), 'utf8')
    assert.deepEqual(validateSourceContract(initiation, evidence, launch), [])
    assert.ok(validateSourceContract(initiation.replaceAll(contract.templates.employee.name, ''), evidence, launch).length)
    assert.ok(validateSourceContract(initiation, `${evidence}\nvar decline_reason = true`, launch).length)
})
