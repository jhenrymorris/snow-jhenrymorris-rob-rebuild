const assert = require('node:assert/strict')
const { test } = require('node:test')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..', '..')
const read = (relativePath) =>
    fs.readFileSync(path.join(root, relativePath), 'utf8')

const tableDir = path.join(root, 'src', 'fluent', 'tables')
const tableSources = fs
    .readdirSync(tableDir)
    .filter((name) => name.endsWith('.now.ts'))
    .map((name) => fs.readFileSync(path.join(tableDir, name), 'utf8'))
    .join('\n')

const configTable = read('src/fluent/tables/rob-configuration.now.ts')
const accessTable = read('src/fluent/tables/rob-access-item-reference.now.ts')
const authorizationTable = read('src/fluent/tables/rob-authorization-form.now.ts')
const detailTable = read('src/fluent/tables/authorized-access-detail.now.ts')
const configSeed = read('src/fluent/records/default-rob-configuration.now.ts')
const accessSeeds = read('src/fluent/records/starter-rob-access-items.now.ts')
const roles = read('src/fluent/roles/rob-roles.now.ts')
const keys = read('src/fluent/generated/keys.ts')
const relatedList = read('src/fluent/forms/rob-authorization-related-list.now.ts')

test('R1 has exactly four scoped custom business tables', () => {
    const declared = [...tableSources.matchAll(/name:\s*'(x_2166123_rob_auth_[^']+)'/g)]
        .map((match) => match[1])
        .filter((name, index, values) => values.indexOf(name) === index)

    assert.deepEqual(declared.sort(), [
        'x_2166123_rob_auth_auth_detail',
        'x_2166123_rob_auth_rob_access',
        'x_2166123_rob_auth_rob_auth',
        'x_2166123_rob_auth_rob_config',
    ])
})

test('R1 has exactly five functional roles and no requester role', () => {
    const roleNames = [...roles.matchAll(/name:\s*'(x_2166123_rob_auth\.[^']+)'/g)].map(
        (match) => match[1]
    )
    assert.deepEqual(roleNames.sort(), [
        'x_2166123_rob_auth.rob_admin',
        'x_2166123_rob_auth.rob_analytics_fulfiller',
        'x_2166123_rob_auth.rob_compliance_viewer',
        'x_2166123_rob_auth.rob_operations_manager',
        'x_2166123_rob_auth.rob_staffing_fulfiller',
    ])
    assert.doesNotMatch(roles, /requester|subject/i)
})

test('R1 configuration has the approved catalog and April 2026 version', () => {
    for (const field of [
        'current_accepted_form_version',
        'agency_annual_recertification_date',
        'mid_cycle_grace_window_days',
        'renewal_reminder_1_days',
        'renewal_reminder_2_days',
        'renewal_reminder_3_days',
        'default_staffing_assignment_group',
        'default_analytics_assignment_group',
        'default_exception_review_group',
        'operations_manager_task_due_days',
        'exception_task_due_days',
        'operations_manager_escalation_days',
        'renewal_notification_copy_group',
        'lapse_notification_enabled',
    ]) {
        assert.match(configTable, new RegExp(`${field}:`), field)
    }
    assert.match(configSeed, /current_accepted_form_version:\s*'2026\.04'/)
    assert.doesNotMatch(configSeed, /current_accepted_form_version:\s*'2024\.04'/)
    assert.match(configSeed, /Synthetic PDI seed only/)
    assert.doesNotMatch(configSeed, /installMethod:/)
})

test('R1 access catalog has exactly six migration-safe governed records', () => {
    assert.equal((accessSeeds.match(/table:\s*'x_2166123_rob_auth_rob_access'/g) || []).length, 6)
    for (const name of [
        'FPPS/WTTS',
        'eOPF',
        'USA Staffing',
        'OAS/DataMart',
        'Human Capital Reports',
        'Workforce Profile Charts',
    ]) {
        assert.equal((accessSeeds.match(new RegExp(`name:\\s*'${name.replace('/', '\\/')}'`, 'g')) || []).length, 1, name)
    }
    assert.doesNotMatch(accessSeeds, /name:\s*'Human Capital Data Access'/)
    assert.doesNotMatch(accessSeeds, /name:\s*'Report Access'/)
    assert.equal((accessSeeds.match(/installMethod:/g) || []).length, 0)
})

test('R1 Form 1768 mappings and WPC metadata are explicit', () => {
    assert.match(accessTable, /form_1768_mapping:\s*ChoiceColumn/)
    for (const mapping of [
        "fpps_wtts: 'FPPS/WTTS'",
        "eopf: 'eOPF'",
        "usa_staffing: 'USA Staffing'",
        "oas_datamart: 'OAS/DataMart'",
        "human_capital_reports: 'Human Capital Reports'",
        "wpc: 'WPC'",
    ]) {
        assert.ok(accessTable.includes(mapping), mapping)
    }
    const wpc = accessSeeds.slice(accessSeeds.indexOf('workforceProfileChartsAccessItem'))
    for (const expected of [
        "active: true",
        "access_category: 'workforce_profile_chart'",
        "default_fulfillment_team: 'analytics'",
        "requires_analytics_task: true",
        "requires_operations_manager_task: true",
        "external_provisioning_system: 'arm'",
        "external_target_system: 'oas'",
        "form_1768_mapping: 'wpc'",
    ]) {
        assert.ok(wpc.includes(expected), expected)
    }
    assert.match(accessTable, /workforce_profile_chart:\s*'Analytics'/)
    assert.match(accessTable, /oas:\s*'OAS \/ Workforce Profile Charts'/)
})

test('R1 Authorization Form preserves managed version and approved lifecycle', () => {
    const formVersion = authorizationTable.match(/form_version:\s*StringColumn\(\{([\s\S]*?)\}\)/)
    assert.ok(formVersion)
    assert.match(formVersion[1], /readOnly:\s*true/)
    assert.doesNotMatch(formVersion[1], /default:/)
    for (const state of [
        'draft',
        'pending_employee_signature',
        'pending_supervisor_approval_signature',
        'active',
        'denied',
        'superseded',
        'revoked',
        'obsolete_version',
        'expired',
        'lapsed',
    ]) {
        assert.match(authorizationTable, new RegExp(`${state}:`), state)
    }
    for (const employmentType of ['federal_employee', 'contractor', 'ipa', 'auditor_investigator']) {
        assert.match(authorizationTable, new RegExp(`${employmentType}:`), employmentType)
    }
})

test('R1 Access Detail uses only approved states and preserves duplicate protection', () => {
    const expectedStates = [
        'pending_authorization',
        'pending_fulfillment',
        'active',
        'denied',
        'superseded',
        'revoked',
        'expired',
        'lapsed',
    ]
    const statusBlock = detailTable.match(/status:\s*ChoiceColumn\(\{([\s\S]*?)\}\),\s*staffing_task_required_snapshot/)
    assert.ok(statusBlock)
    const choicesBlock = statusBlock[1].match(/choices:\s*\{([\s\S]*?)\}/)
    assert.ok(choicesBlock)
    const actualStates = [...choicesBlock[1].matchAll(/^\s*([a-z_]+):/gm)].map((match) => match[1])
    assert.deepEqual(actualStates, expectedStates)
    assert.match(statusBlock[1], /default:\s*'pending_authorization'/)
    assert.doesNotMatch(statusBlock[1], /requested:|authorized:/)
    assert.match(detailTable, /element:\s*\['source_hrsd_case', 'access_item'\]/)
    assert.match(detailTable, /element:\s*\['rob_authorization_form', 'access_item'\]/)
    for (const field of ['source_hrsd_case', 'rob_authorization_form', 'subject_person', 'access_item']) {
        const block = detailTable.match(new RegExp(`${field}:\\s*ReferenceColumn\\(\\{([\\s\\S]*?)\\}\\)`))
        assert.ok(block, field)
        assert.match(block[1], /mandatory:\s*true/, field)
        assert.match(block[1], /readOnly:\s*true/, field)
    }
    assert.match(relatedList, /omit_new_button:\s*true/)
    assert.match(relatedList, /omit_edit_button:\s*true/)
})

test('R1 schema introduces no SSN field', () => {
    assert.doesNotMatch(tableSources, /\bssn\b|social[_ ]security/i)
})

test('R1 preserves all existing governed seed IDs', () => {
    const expected = {
        'default-rob-configuration': '24ef713e7a4941baa1aab57a057db25b',
        'rob-access-item-fpps-wtts': 'bc1735e4742445c1b991f0f85a1d1679',
        'rob-access-item-eopf': 'f09a7952bd8d40ba9a5cbcb4cf77ffab',
        'rob-access-item-usa-staffing': '0027ef45f61e4ec09451e3591464ff56',
        'rob-access-item-human-capital-data': 'e32ec30fadcf4ad5a78d2ea85cf90ad6',
        'rob-access-item-report-access': '6832a044e89646949e88010fd8d0f023',
        'rob-access-item-workforce-profile-charts': '3a4a55a3ce0947b6b42010a946ef5711',
    }
    for (const [key, id] of Object.entries(expected)) {
        const pattern = new RegExp(`'${key}':\\s*\\{[\\s\\S]*?id:\\s*'${id}'`)
        assert.match(keys, pattern, key)
    }
})
