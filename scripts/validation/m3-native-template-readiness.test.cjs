const assert = require('node:assert/strict')
const test = require('node:test')
const {
    contract,
    validateTemplateData,
} = require('./m3-native-template-readiness.cjs')

function wrapped(value, displayValue = value) {
    return { value: String(value), display_value: String(displayValue) }
}

function validFixture(name = contract.productionName) {
    const templates = [
        {
            name: wrapped(name),
            table: wrapped(contract.table),
            state: wrapped('published', 'Published'),
            active: wrapped('true'),
            document: wrapped('logical-source-pdf'),
        },
    ]
    const participants = contract.participants.map((participant) => ({
        name: wrapped(participant.name),
        order: wrapped(participant.order),
        action: wrapped(participant.action),
        optional: wrapped(participant.optional),
        advanced_script_toggle: wrapped(participant.advanced),
        doc_template_user: wrapped(participant.userField),
        script: wrapped(participant.scriptTokens.join('\n')),
    }))
    const mappings = contract.bodyMappings.map((fieldName) => ({
        document_field: wrapped(fieldName),
        document_field_type: wrapped('text'),
        participant: wrapped(''),
        mandatory: wrapped('false'),
    }))
    for (const signature of contract.signatureMappings) {
        mappings.push({
            document_field: wrapped(''),
            document_field_type: wrapped(signature.type, 'Signature'),
            participant: wrapped(
                `logical-${signature.participant.toLowerCase()}`,
                signature.participant
            ),
            mandatory: wrapped(signature.mandatory),
        })
    }
    return { templates, participants, mappings }
}

test('production contract accepts the exact continuous Sign template', () => {
    const fixture = validFixture()
    assert.deepEqual(
        validateTemplateData(
            'production',
            fixture.templates,
            fixture.participants,
            fixture.mappings
        ),
        []
    )
})

test('candidate contract accepts a complete Draft template', () => {
    const fixture = validFixture(contract.candidateName)
    fixture.templates[0].state = wrapped('draft', 'Draft')
    assert.deepEqual(
        validateTemplateData(
            'candidate',
            fixture.templates,
            fixture.participants,
            fixture.mappings
        ),
        []
    )
})

test('validator rejects optional or conditionally skipped Employee', () => {
    const fixture = validFixture()
    fixture.participants[0].optional = wrapped('true')
    fixture.participants[0].advanced_script_toggle = wrapped('true')
    fixture.participants[0].doc_template_user = wrapped('')
    fixture.participants[0].script = wrapped('return blank conditionally')
    const errors = validateTemplateData(
        'production',
        fixture.templates,
        fixture.participants,
        fixture.mappings
    )
    assert.ok(errors.some((error) => error.includes('optional must be false')))
    assert.ok(
        errors.some((error) => error.includes('advanced_script_toggle must be false'))
    )
})

test('validator rejects Supervisor fill and incomplete mappings', () => {
    const fixture = validFixture()
    fixture.participants[1].action = wrapped('fill')
    fixture.mappings.pop()
    const errors = validateTemplateData(
        'production',
        fixture.templates,
        fixture.participants,
        fixture.mappings
    )
    assert.ok(errors.some((error) => error.includes('action must be sign')))
    assert.ok(errors.some((error) => error.includes('expected 28 mappings')))
    assert.ok(
        errors.some((error) =>
            error.includes('Supervisor signature mapping count must be 1')
        )
    )
})

test('validator rejects duplicate production templates', () => {
    const fixture = validFixture()
    fixture.templates.push({ ...fixture.templates[0] })
    const errors = validateTemplateData(
        'production',
        fixture.templates,
        fixture.participants,
        fixture.mappings
    )
    assert.ok(errors[0].includes('expected exactly one logical template'))
})
