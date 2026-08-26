const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')

const contract = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, 'm3-form1768-template-contract.json'),
        'utf8'
    )
)

function value(field, display = false) {
    if (field === null || field === undefined) return ''
    if (typeof field === 'object') {
        const preferred = display ? field.display_value : field.value
        return preferred === null || preferred === undefined
            ? ''
            : String(preferred)
    }
    return String(field)
}

function bool(field) {
    return ['1', 'true'].includes(value(field).toLowerCase())
}

function validateTemplateData(templates, participants, mappings) {
    const errors = []
    const expectedName = contract.productionName
    const matching = templates.filter(
        (record) => value(record.name) === expectedName
    )

    if (matching.length !== 1) {
        errors.push(
            `${expectedName}: expected exactly one logical template, found ${matching.length}`
        )
        return errors
    }

    const template = matching[0]
    if (!bool(template.active)) {
        errors.push(`${expectedName}: template must be active`)
    }
    if (value(template.table) !== contract.table) {
        errors.push(
            `${expectedName}: table must be ${contract.table}, found ${value(template.table) || '(empty)'}`
        )
    }
    if (!value(template.document)) {
        errors.push(`${expectedName}: source PDF is missing`)
    }
    const state = value(template.state).toLowerCase()
    if (state !== 'published') {
        errors.push(`${expectedName}: production template must be Published`)
    }

    if (participants.length !== contract.participants.length) {
        errors.push(
            `${expectedName}: expected ${contract.participants.length} participants, found ${participants.length}`
        )
    }

    for (const expected of contract.participants) {
        const found = participants.filter(
            (record) => value(record.name) === expected.name
        )
        if (found.length !== 1) {
            errors.push(
                `${expectedName}: participant ${expected.name} count must be 1, found ${found.length}`
            )
            continue
        }
        const record = found[0]
        const checks = [
            ['order', value(record.order), expected.order],
            ['action', value(record.action), expected.action],
            ['optional', bool(record.optional), expected.optional],
            [
                'advanced_script_toggle',
                bool(record.advanced_script_toggle),
                expected.advanced,
            ],
        ]
        for (const [field, actual, wanted] of checks) {
            if (actual !== wanted) {
                errors.push(
                    `${expectedName}: ${expected.name} ${field} must be ${wanted}, found ${actual}`
                )
            }
        }

        const userField = value(record.doc_template_user)
        const script = value(record.script)
        if (expected.advanced) {
            if (userField) {
                errors.push(
                    `${expectedName}: ${expected.name} advanced resolver must not use doc_template_user`
                )
            }
            for (const token of expected.scriptTokens) {
                if (!script.includes(token)) {
                    errors.push(
                        `${expectedName}: ${expected.name} resolver is missing token ${token}`
                    )
                }
            }
        } else {
            if (userField !== expected.userField) {
                errors.push(
                    `${expectedName}: ${expected.name} user source must be ${expected.userField}, found ${userField || '(empty)'}`
                )
            }
            if (script.trim()) {
                errors.push(
                    `${expectedName}: ${expected.name} must not use a conditional/advanced script`
                )
            }
        }
    }

    if (mappings.length !== contract.mappingCount) {
        errors.push(
            `${expectedName}: expected ${contract.mappingCount} mappings, found ${mappings.length}`
        )
    }

    const bodyMappings = mappings.filter(
        (record) => value(record.document_field_type) !== 'signature'
    )
    const actualBodyNames = bodyMappings.map((record) =>
        value(record.document_field)
    )
    for (const fieldName of contract.bodyMappings) {
        const count = actualBodyNames.filter((name) => name === fieldName).length
        if (count !== 1) {
            errors.push(
                `${expectedName}: body mapping ${fieldName} count must be 1, found ${count}`
            )
        }
    }
    const unexpectedBody = actualBodyNames.filter(
        (name) => !contract.bodyMappings.includes(name)
    )
    if (unexpectedBody.length) {
        errors.push(
            `${expectedName}: unexpected body mappings: ${unexpectedBody.join(', ')}`
        )
    }

    const signatureMappings = mappings.filter(
        (record) => value(record.document_field_type) === 'signature'
    )
    for (const expected of contract.signatureMappings) {
        const found = signatureMappings.filter(
            (record) =>
                value(record.participant, true) === expected.participant &&
                value(record.document_field_type) === expected.type &&
                bool(record.mandatory) === expected.mandatory
        )
        if (found.length !== 1) {
            errors.push(
                `${expectedName}: required ${expected.participant} signature mapping count must be 1, found ${found.length}`
            )
        }
    }
    if (signatureMappings.length !== contract.signatureMappings.length) {
        errors.push(
            `${expectedName}: expected ${contract.signatureMappings.length} signature mappings, found ${signatureMappings.length}`
        )
    }

    return errors
}

function query(table, encodedQuery, fields, auth) {
    const projectRoot = path.resolve(__dirname, '..', '..')
    const args = [
            '@servicenow/sdk',
            'query',
            table,
            '-q',
            encodedQuery,
            '-f',
            fields.join(','),
            '--display-value',
            'all',
            '-a',
            auth,
            '-o',
            'json',
        ]
    if (!/^[A-Za-z0-9_.-]+$/.test(auth)) {
        throw new Error('--auth must be a stored credential alias')
    }
    const commandOptions = {
        cwd: projectRoot,
        encoding: 'utf8',
        maxBuffer: 8 * 1024 * 1024,
        shell: false,
    }
    let output
    if (process.platform === 'win32') {
        const npxCommand = path.join(path.dirname(process.execPath), 'npx.cmd')
        if (!fs.existsSync(npxCommand)) {
            throw new Error('The Node.js npx launcher is not installed')
        }
        const quotePowerShell = (argument) =>
            `'${String(argument).replaceAll("'", "''")}'`
        output = execFileSync(
            'powershell.exe',
            [
                '-NoProfile',
                '-NonInteractive',
                '-Command',
                `& ${quotePowerShell(npxCommand)} ${args.map(quotePowerShell).join(' ')}`,
            ],
            commandOptions
        )
    } else {
        output = execFileSync('npx', args, commandOptions)
    }
    const response = JSON.parse(output)
    if (!response.ok) {
        throw new Error(response.error?.message || `Query failed for ${table}`)
    }
    return response.records
}

function parseArguments(argv) {
    const result = { mode: 'production', auth: 'pdi' }
    for (let index = 0; index < argv.length; index += 1) {
        if (argv[index] === '--mode') result.mode = argv[index + 1] || ''
        if (argv[index] === '--auth') result.auth = argv[index + 1] || ''
    }
    if (result.mode !== 'production') {
        throw new Error('--mode must be production')
    }
    if (!result.auth) throw new Error('--auth requires a credential alias')
    return result
}

function run(argv = process.argv.slice(2)) {
    const options = parseArguments(argv)
    const templateName = contract.productionName
    const templates = query(
        'sn_doc_pdf_template',
        'nameSTARTSWITHROB',
        ['sys_id', 'name', 'table', 'state', 'active', 'document', 'sys_scope'],
        options.auth
    )
    const matchingTemplates = templates.filter(
        (record) => value(record.name) === templateName
    )
    if (matchingTemplates.length !== 1) {
        const errors = validateTemplateData(templates, [], [])
        throw new Error(errors.join('\n'))
    }

    const templateId = value(matchingTemplates[0].sys_id)
    const participants = query(
        'sn_doc_participant',
        `document_template=${templateId}`,
        [
            'sys_id',
            'name',
            'order',
            'action',
            'optional',
            'advanced_script_toggle',
            'doc_template_user',
            'script',
        ],
        options.auth
    )
    const mappings = query(
        'sn_doc_pdf_template_mapping',
        `document=${templateId}`,
        [
            'sys_id',
            'document_field',
            'document_field_type',
            'participant',
            'mandatory',
        ],
        options.auth
    )
    const errors = validateTemplateData(templates, participants, mappings)
    if (errors.length) throw new Error(errors.join('\n'))
    process.stdout.write(
        `M3 Form 1768 production readiness: PASS (${participants.length} participants, ${mappings.length} mappings)\n`
    )
}

if (require.main === module) {
    try {
        run()
    } catch (error) {
        process.stderr.write(`M3 Form 1768 readiness: FAIL\n${error.message}\n`)
        process.exitCode = 1
    }
}

module.exports = { contract, validateTemplateData, value, bool, parseArguments }
