const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')

const contract = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'm3-form1768-template-contract.json'), 'utf8')
)

function value(field, display = false) {
    if (field === null || field === undefined) return ''
    if (typeof field === 'object') {
        const preferred = display ? field.display_value : field.value
        return preferred === null || preferred === undefined ? '' : String(preferred)
    }
    return String(field)
}

function bool(field) {
    return ['1', 'true'].includes(value(field).toLowerCase())
}

function recordsForTemplate(records, templateId, parentField) {
    return records.filter((record) => value(record[parentField]) === templateId)
}

function validateBaseTemplate(errors, template, expected, scopeById) {
    const label = expected.name
    if (!bool(template.active)) errors.push(`${label}: template must be active`)
    if (value(template.table) !== contract.table) {
        errors.push(`${label}: table must be ${contract.table}, found ${value(template.table) || '(empty)'}`)
    }
    if (value(template.state).toLowerCase() !== 'published') {
        errors.push(`${label}: template must be Published`)
    }
    if (!value(template.document)) errors.push(`${label}: source PDF is missing`)
    const actualScope = scopeById[value(template.sys_scope)] || ''
    if (actualScope !== expected.scope) {
        errors.push(`${label}: owning scope must be ${expected.scope}, found ${actualScope || '(unknown)'}`)
    }
}

function validateSigningTemplate(errors, template, expected, participants, mappings) {
    const label = expected.name
    const templateId = value(template.sys_id)
    const ownedParticipants = recordsForTemplate(participants, templateId, 'document_template')
    const ownedMappings = recordsForTemplate(mappings, templateId, 'document')
    if (ownedParticipants.length !== 1) {
        errors.push(`${label}: participant count must be 1, found ${ownedParticipants.length}`)
        return
    }
    const record = ownedParticipants[0]
    const participant = expected.participant
    const checks = [
        ['name', value(record.name), participant.name],
        ['order', value(record.order), participant.order],
        ['action', value(record.action), participant.action],
        ['optional', bool(record.optional), participant.optional],
        ['advanced_script_toggle', bool(record.advanced_script_toggle), participant.advanced],
    ]
    for (const [field, actual, wanted] of checks) {
        if (actual !== wanted) errors.push(`${label}: ${field} must be ${wanted}, found ${actual}`)
    }
    const userField = value(record.doc_template_user)
    const script = value(record.script)
    if (participant.advanced) {
        if (userField) errors.push(`${label}: advanced resolver must not use doc_template_user`)
        for (const token of participant.scriptTokens) {
            if (!script.includes(token)) errors.push(`${label}: resolver is missing token ${token}`)
        }
    } else {
        if (userField !== participant.userField) {
            errors.push(`${label}: user source must be ${participant.userField}, found ${userField || '(empty)'}`)
        }
        if (script.trim()) errors.push(`${label}: participant must not use an advanced script`)
    }
    const signatures = ownedMappings.filter(
        (mapping) =>
            value(mapping.document_field_type) === 'signature' &&
            value(mapping.participant) === value(record.sys_id) &&
            bool(mapping.mandatory)
    )
    if (signatures.length !== expected.signatureMappings) {
        errors.push(`${label}: mandatory participant-bound signature mappings must be ${expected.signatureMappings}, found ${signatures.length}`)
    }
}

function validateFinalRenderer(errors, template, expected, mappings) {
    const label = expected.name
    const ownedMappings = recordsForTemplate(mappings, value(template.sys_id), 'document')
    if (ownedMappings.length !== expected.mappingCount) {
        errors.push(`${label}: expected ${expected.mappingCount} mappings, found ${ownedMappings.length}`)
    }
    const body = ownedMappings.filter((record) => value(record.document_field_type) !== 'signature')
    const actualBodyNames = body.map((record) => value(record.document_field))
    for (const fieldName of expected.bodyMappings) {
        const count = actualBodyNames.filter((name) => name === fieldName).length
        if (count !== 1) errors.push(`${label}: body mapping ${fieldName} count must be 1, found ${count}`)
    }
    const unexpected = actualBodyNames.filter((name) => !expected.bodyMappings.includes(name))
    if (unexpected.length) errors.push(`${label}: unexpected body mappings: ${unexpected.join(', ')}`)
    const signatures = ownedMappings.filter(
        (record) => value(record.document_field_type) === 'signature'
    )
    for (const expectedSignature of expected.signatureMappings) {
        const found = signatures.filter(
            (record) =>
                value(record.participant, true) === expectedSignature.participant &&
                bool(record.mandatory) === expectedSignature.mandatory
        )
        if (found.length !== 1) {
            errors.push(`${label}: required ${expectedSignature.participant} signature mapping count must be 1, found ${found.length}`)
        }
    }
    if (signatures.length !== expected.signatureMappings.length) {
        errors.push(`${label}: expected ${expected.signatureMappings.length} signature mappings, found ${signatures.length}`)
    }
}

function validateTemplateData(templates, participants, mappings, scopes) {
    const errors = []
    const scopeById = Object.fromEntries(
        scopes.map((scope) => [value(scope.sys_id), value(scope.scope)])
    )
    for (const [role, expected] of Object.entries(contract.templates)) {
        const matching = templates.filter((record) => value(record.name) === expected.name)
        if (matching.length !== 1) {
            errors.push(`${expected.name}: expected exactly one logical template, found ${matching.length}`)
            continue
        }
        const template = matching[0]
        validateBaseTemplate(errors, template, expected, scopeById)
        if (role === 'finalRenderer') {
            validateFinalRenderer(errors, template, expected, mappings)
        } else {
            validateSigningTemplate(errors, template, expected, participants, mappings)
        }
    }
    return errors
}

function validateSourceContract(initiationSource, evidenceSource, launchSource) {
    const errors = []
    const employeeName = contract.templates.employee.name
    const supervisorName = contract.templates.supervisor.name
    const rendererName = contract.templates.finalRenderer.name
    if (!initiationSource.includes(employeeName)) errors.push('Lifecycle initiation must launch the employee-only template')
    if (initiationSource.includes(`initiateAuthorizationSigning(\n                '${rendererName}'`)) {
        errors.push('Lifecycle initiation must not launch the final renderer as a signing workflow')
    }
    if (!evidenceSource.includes(employeeName) || !evidenceSource.includes(supervisorName)) {
        errors.push('Signature evidence must distinguish both split-stage templates')
    }
    if (/decline_reason|state\s*===?\s*['"]7['"]/.test(evidenceSource)) {
        errors.push('Signature evidence must not use PDF Fill refusal as denial')
    }
    if (!launchSource.includes(supervisorName)) errors.push('Approved launch must use the supervisor-only template')
    if (launchSource.includes(rendererName)) errors.push('Approved launch must not use the final renderer')
    return errors
}

function query(table, encodedQuery, fields, auth) {
    const projectRoot = path.resolve(__dirname, '..', '..')
    const args = ['query', table, '-q', encodedQuery, '-f', fields.join(','), '--display-value', 'all', '-a', auth, '-o', 'json']
    if (!/^[A-Za-z0-9_.-]+$/.test(auth)) throw new Error('--auth must be a stored credential alias')
    const options = { cwd: projectRoot, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024, shell: false }
    let output
    if (process.platform === 'win32') {
        const npxCommand = path.join(path.dirname(process.execPath), 'npx.cmd')
        const quote = (argument) => `'${String(argument).replaceAll("'", "''")}'`
        const command = `& ${quote(npxCommand)} ${['@servicenow/sdk', ...args].map(quote).join(' ')}`
        output = execFileSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', command], options)
    } else {
        output = execFileSync('npx', ['@servicenow/sdk', ...args], options)
    }
    const response = JSON.parse(output)
    if (!response.ok) throw new Error(response.error?.message || `Query failed for ${table}`)
    return response.records
}

function parseArguments(argv) {
    const result = { mode: 'production', auth: 'pdi' }
    for (let index = 0; index < argv.length; index += 1) {
        if (argv[index] === '--mode') result.mode = argv[index + 1] || ''
        if (argv[index] === '--auth') result.auth = argv[index + 1] || ''
    }
    if (result.mode !== 'production') throw new Error('--mode must be production')
    if (!result.auth) throw new Error('--auth requires a credential alias')
    return result
}

function run(argv = process.argv.slice(2)) {
    const options = parseArguments(argv)
    const names = Object.values(contract.templates).map((template) => template.name)
    const templates = query('sn_doc_pdf_template', `nameIN${names.join(',')}`, ['sys_id', 'name', 'table', 'state', 'active', 'document', 'sys_scope'], options.auth)
    const templateIds = templates.map((record) => value(record.sys_id)).filter(Boolean)
    const participants = templateIds.length ? query('sn_doc_participant', `document_templateIN${templateIds.join(',')}`, ['sys_id', 'document_template', 'name', 'order', 'action', 'optional', 'advanced_script_toggle', 'doc_template_user', 'script'], options.auth) : []
    const mappings = templateIds.length ? query('sn_doc_pdf_template_mapping', `documentIN${templateIds.join(',')}`, ['sys_id', 'document', 'document_field', 'document_field_type', 'participant', 'mandatory'], options.auth) : []
    const scopes = query('sys_scope', `scopeIN${contract.documentTemplatesScope},${contract.applicationScope}`, ['sys_id', 'scope'], options.auth)
    const errors = validateTemplateData(templates, participants, mappings, scopes)
    const projectRoot = path.resolve(__dirname, '..', '..')
    errors.push(...validateSourceContract(
        fs.readFileSync(path.join(projectRoot, 'src/fluent/server/authorization-lifecycle-initiation.server.js'), 'utf8'),
        fs.readFileSync(path.join(projectRoot, 'src/fluent/server/authorization-signature-evidence.server.js'), 'utf8'),
        fs.readFileSync(path.join(projectRoot, 'src/fluent/server/supervisor-signature-launch.server.js'), 'utf8')
    ))
    if (errors.length) throw new Error(errors.join('\n'))
    process.stdout.write('M3 split-stage template readiness: PASS (employee 1, supervisor 1, final mappings 28)\n')
}

if (require.main === module) {
    try { run() } catch (error) {
        process.stderr.write(`M3 split-stage readiness: FAIL\n${error.message}\n`)
        process.exitCode = 1
    }
}

module.exports = { contract, validateTemplateData, validateSourceContract, value, bool, parseArguments }
