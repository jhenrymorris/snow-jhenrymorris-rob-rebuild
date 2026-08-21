const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const test = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const read = (relativePath) =>
    fs.readFileSync(path.join(root, relativePath), 'utf8')

const expectations = JSON.parse(
    read('scripts/validation/wave-2-deployment-expectations.json')
)
const staffingVariables = read(
    'src/fluent/catalog/rob-staffing-access-variable-set.now.ts'
)
const analyticsVariables = read(
    'src/fluent/catalog/rob-analytics-access-variable-set.now.ts'
)
const commonVariables = read(
    'src/fluent/catalog/rob-common-intake-variable-set.now.ts'
)
const commonPolicies = read(
    'src/fluent/catalog/rob-common-intake-policies.now.ts'
)
const accessTable = read(
    'src/fluent/tables/rob-access-item-reference.now.ts'
)
const accessItems = read(
    'src/fluent/records/starter-rob-access-items.now.ts'
)
const accessAcls = read(
    'src/fluent/security/rob-access-item-reference-acls.now.ts'
)
const caseFields = read(
    'src/fluent/tables/rob-case-security-fields.now.ts'
)
const requesterSecurity = read(
    'src/fluent/server/requester-profile-snapshot.server.js'
)
const deploymentVerifier = read(
    'scripts/validation/verify-wave-2-deployment.ps1'
)
const manualConfiguration = read('docs/MANUAL-CONFIGURATION.md')
const fluentEntry = read('src/fluent/index.now.ts')

test('both requested-items variables are active mandatory list collectors', () => {
    for (const source of [staffingVariables, analyticsVariables]) {
        assert.match(source, /ListCollectorVariable\(\{/)
        assert.match(
            source,
            /x_2108496_hr_acces_requested_items:\s*ListCollectorVariable/
        )
        assert.match(
            source,
            /listTable:\s*x_2108496_hr_acces_rob_access\.name/
        )
        assert.match(source, /active:\s*true/)
        assert.match(source, /mandatory:\s*true/)
        assert.match(source, /mapToField:\s*false/)
    }
})

test('requested-items qualifiers are exact', () => {
    assert.match(
        staffingVariables,
        /referenceQual:\s*'active=true\^access_category=hr_system'/
    )
    assert.match(
        analyticsVariables,
        /'active=true\^access_categoryINhuman_capital_data,report,workforce_profile_chart'/
    )
})

test('access-item table uses name display and sys_id list-collector values', () => {
    assert.equal(expectations.accessItemTable.displayField, 'name')
    assert.equal(expectations.accessItemTable.valueField, 'sys_id')
    assert.match(accessTable, /display:\s*'name'/)
    assert.match(accessTable, /createAccessControls:\s*false/)
    assert.match(accessTable, /allowWebServiceAccess:\s*false/)
})

test('six starter access items and exact categories are source controlled', () => {
    assert.equal(
        (accessItems.match(/table:\s*'x_2108496_hr_acces_rob_access'/g) || [])
            .length,
        6
    )
    assert.deepEqual(
        expectations.accessItems.map((item) => item.category),
        [
            'hr_system',
            'hr_system',
            'hr_system',
            'human_capital_data',
            'report',
            'workforce_profile_chart',
        ]
    )
    for (const item of expectations.accessItems) {
        assert.match(accessItems, new RegExp(`name:\\s*'${item.name}'`))
        assert.match(
            accessItems,
            new RegExp(
                `name:\\s*'${item.name}'[\\s\\S]*?active:\\s*true[\\s\\S]*?access_item_code:\\s*'${item.code}'[\\s\\S]*?access_category:\\s*'${item.category}'[\\s\\S]*?sort_order:\\s*${item.sortOrder}`
            )
        )
        assert.match(
            accessItems,
            new RegExp(`access_item_code:\\s*'${item.code}'`)
        )
        assert.match(
            accessItems,
            new RegExp(`access_category:\\s*'${item.category}'`)
        )
        assert.match(
            accessItems,
            new RegExp(`sort_order:\\s*${item.sortOrder}`)
        )
    }
})

test('ordinary employees receive active-row read through snc_internal only', () => {
    const aclBlocks = accessAcls.split(/(?=export const )/)
    assert.equal(
        aclBlocks.filter(
            (block) =>
                /table:\s*accessItemTable/.test(block) &&
                !/field:/.test(block) &&
                /operation:\s*'read'/.test(block) &&
                /securityAttribute:\s*'user_is_authenticated'/.test(block) &&
                /condition:\s*'active=true'/.test(block)
        ).length,
        1
    )
    assert.match(
        accessAcls,
        /\$id: Now\.ID\['rob-access-item-active-internal-read'\][\s\S]*?operation: 'read'[\s\S]*?securityAttribute: 'user_is_authenticated'[\s\S]*?condition: 'active=true'/
    )
    assert.doesNotMatch(accessAcls, /internalEmployeeRead/)
    assert.doesNotMatch(
        accessAcls,
        /rob-access-item-active-internal-read[\s\S]*?rob_(?:staffing|analytics)_fulfiller/
    )
})

test('employee field reads expose only list-collector resolution fields', () => {
    const expectedFields =
        expectations.accessItemTable.employeeReadableFields
    for (const field of expectedFields) {
        assert.match(
            accessAcls,
            new RegExp(
                `field:\\s*'${field}'[\\s\\S]*?securityAttribute:\\s*'user_is_authenticated'[\\s\\S]*?condition:\\s*'active=true'`
            )
        )
    }
    assert.match(
        accessAcls,
        /field:\s*'\*'[\s\S]*?roles:\s*\[robAdminRole\]/
    )
    assert.doesNotMatch(
        accessAcls,
        /field:\s*'access_item_code'[\s\S]*?roles:\s*\[internalUserRole\]/
    )
    for (const internalField of [
        'default_assignment_group',
        'default_fulfillment_team',
        'external_provisioning_system',
        'external_target_system',
        'notes',
    ]) {
        assert.doesNotMatch(accessAcls, new RegExp(`field:\\s*'${internalField}'`))
    }
})

test('ordinary employees are not granted create write or delete', () => {
    const aclBlocks = accessAcls.split(/(?=export const )/)
    for (const operation of expectations.accessItemTable
        .employeeDeniedOperations) {
        assert.equal(
            aclBlocks.some(
                (block) =>
                    new RegExp(`operation:\\s*'${operation}'`).test(block) &&
                    /script:\s*internalEmployeeRead/.test(block)
            ),
            false,
            `snc_internal must not receive ${operation}`
        )
    }
    assert.match(
        accessAcls,
        /operation:\s*'create'[\s\S]*?roles:\s*\[robAdminRole\]/
    )
    assert.match(
        accessAcls,
        /operation:\s*'write'[\s\S]*?roles:\s*\[robAdminRole\]/
    )
    assert.doesNotMatch(accessAcls, /operation:\s*'delete'/)
})

test('ROB Admin receives the exact access-item maintenance ACL set', () => {
    const aclBlocks = accessAcls.split(/(?=export const )/)
    for (const operation of ['read', 'create', 'write']) {
        assert.equal(
            aclBlocks.filter(
                (block) =>
                    /table:\s*accessItemTable/.test(block) &&
                    !/field:/.test(block) &&
                    new RegExp(`operation:\\s*'${operation}'`).test(block) &&
                    /roles:\s*\[robAdminRole\]/.test(block)
            ).length,
            1
        )
    }
    assert.equal(
        aclBlocks.filter(
            (block) =>
                /field:\s*'\*'/.test(block) &&
                /operation:\s*'read'/.test(block) &&
                /roles:\s*\[robAdminRole\]/.test(block)
        ).length,
        1
    )
    assert.doesNotMatch(accessAcls, /operation:\s*'delete'/)
})

test('access-item ACL source is in the explicit SDK import graph', () => {
    assert.match(
        fluentEntry,
        /import '\.\/security\/rob-access-item-reference-acls\.now'/
    )
})

test('record-producer deployment contract retains native associations', () => {
    assert.deepEqual(
        expectations.recordProducers.map((producer) => ({
            name: producer.name,
            targetTable: producer.targetTable,
            catalog: producer.catalog,
            category: producer.category,
            availableFor: producer.availableFor,
            notAvailableFor: producer.notAvailableFor,
            topic: producer.topic,
        })),
        [
            {
                name: 'Request Access to HR Systems',
                targetTable: 'sn_hr_core_case_payroll',
                catalog: 'Human Resources Catalog',
                category: 'Staffing',
                availableFor: 'All Users',
                notAvailableFor: 'SNC External',
                topic: 'HR Systems and Data Access',
            },
            {
                name: 'Request Access to HR Data and Reports',
                targetTable: 'sn_hr_core_case_workforce_admin',
                catalog: 'Human Resources Catalog',
                category: 'Analytics',
                availableFor: 'All Users',
                notAvailableFor: 'SNC External',
                topic: 'HR Systems and Data Access',
            },
        ]
    )
    assert.deepEqual(
        expectations.recordProducers.map((producer) => producer.variableSets),
        [
            [
                { internalName: 'rob_common_intake', order: 100 },
                { internalName: 'rob_staffing_access', order: 200 },
            ],
            [
                { internalName: 'rob_common_intake', order: 100 },
                { internalName: 'rob_analytics_access', order: 300 },
            ],
        ]
    )
    for (const table of [
        'sc_cat_item_producer',
        'sc_cat_item_category',
        'sc_cat_item_user_criteria_mtom',
        'sc_cat_item_user_criteria_no_mtom',
        'io_set_item',
        'topic',
        'm2m_connected_content',
    ]) {
        assert.match(
            deploymentVerifier,
            new RegExp(`-Table '${table}'`)
        )
    }
})

test('HR Service mappings and Employee taxonomy contract are exact', () => {
    assert.deepEqual(
        expectations.recordProducers.map((producer) => [
            producer.serviceValue,
            producer.targetTable,
        ]),
        [
            ['request_access_to_hr_systems', 'sn_hr_core_case_payroll'],
            [
                'request_access_to_hr_data_and_reports',
                'sn_hr_core_case_workforce_admin',
            ],
        ]
    )
    assert.deepEqual(expectations.taxonomy, {
        name: 'Employee',
        parentTopic: 'Human resources',
        childTopic: 'HR Systems and Data Access',
    })
    for (const table of [
        'sn_hr_core_service',
        'sn_hr_core_template',
        'sys_template',
    ]) {
        assert.match(
            deploymentVerifier,
            new RegExp(`-Table '${table}'`)
        )
    }
})

test('all employee-facing case payload fields are SDK managed', () => {
    for (const field of expectations.caseFields.common) {
        assert.match(caseFields, new RegExp(`${field}:`))
    }
    for (const field of expectations.caseFields.workforceOnly) {
        assert.match(caseFields, new RegExp(`${field}:`))
    }
    assert.match(
        caseFields,
        /x_2108496_hr_acces_employment_type:\s*ChoiceColumn/
    )
    assert.match(
        caseFields,
        /x_2108496_hr_acces_access_end_date:\s*DateColumn/
    )
    assert.match(
        caseFields,
        /x_2108496_hr_acces_operations_manager:\s*ReferenceColumn/
    )
    assert.match(
        caseFields,
        /x_2108496_hr_acces_operations_manager:[\s\S]*?referenceTable:\s*'sys_user'[\s\S]*?referenceQual:\s*'active=true'/
    )
})

test('employee-facing dependencies remain portal-safe and self-only', () => {
    for (const value of [
        'federal_employee',
        'contractor',
        'ipa',
        'auditor_investigator',
    ]) {
        assert.match(commonVariables, new RegExp(`${value}:`))
    }
    assert.doesNotMatch(commonVariables, /other_time_limited:/)
    assert.match(
        commonVariables,
        /x_2108496_hr_acces_business_justification:\s*MultiLineTextVariable/
    )
    assert.match(commonVariables, /question:\s*'Business Justification'/)
    assert.match(
        analyticsVariables,
        /x_2108496_hr_acces_operations_manager:\s*ReferenceVariable/
    )
    assert.match(
        commonPolicies,
        /runScriptsInUiType:\s*'all'[\s\S]*?appliesOnCatalogItemView:\s*true/
    )
    assert.match(
        commonPolicies,
        /catalogCondition:\s*[\s\S]*?employment_typeINcontractor,auditor_investigator/
    )
    assert.doesNotMatch(commonPolicies, /employment_typeIN[^'\n]*ipa/)
    assert.doesNotMatch(
        `${commonVariables}\n${staffingVariables}\n${analyticsVariables}`,
        /opened_for|subject_person|requested_for|delegate|on_behalf/
    )
    assert.equal(
        expectations.selfSubmissionSentence,
        'This request will be submitted for your own HR systems or data access.'
    )
    assert.equal(
        commonVariables.includes(expectations.selfSubmissionSentence),
        true
    )
    for (const producer of expectations.recordProducers) {
        assert.equal(
            producer.description.includes(expectations.selfSubmissionSentence),
            true
        )
    }
    assert.match(requesterSecurity, /var authenticatedUserId = gs\.getUserID\(\)/)
    assert.match(requesterSecurity, /suppliedRequesterId !== authenticatedUserId/)
    assert.match(requesterSecurity, /suppliedOpenedForId !== authenticatedUserId/)
    assert.match(
        requesterSecurity,
        /suppliedSubjectPersonId !== authenticatedUserId/
    )
    assert.match(
        requesterSecurity,
        /current\.setValue\('opened_for', authenticatedUserId\)/
    )
    assert.match(
        requesterSecurity,
        /current\.setValue\('subject_person', authenticatedUserId\)/
    )
    assert.doesNotMatch(
        requesterSecurity,
        /(?:opened_for|subject_person|requested_for)[\s\S]{0,80}\|\|\s*gs\.getUserID\(\)/
    )
    assert.ok(
        requesterSecurity.indexOf('!== authenticatedUserId') <
            requesterSecurity.indexOf("new GlideRecord('sys_user')")
    )
    assert.match(requesterSecurity, /Business Justification is required/)
    assert.match(requesterSecurity, /missing_required_access_end_date/)
    assert.match(requesterSecurity, /missing_operations_manager/)
    assert.match(requesterSecurity, /new RobProfileAuthorizationContext\(\)/)
    assert.doesNotMatch(
        requesterSecurity,
        /setValue\(['"]x_2108496_hr_acces_(?:position_title|organization_snapshot|supervisor_snapshot)/
    )
    assert.match(
        commonVariables,
        /x_2108496_hr_acces_selected_supervisor:\s*ReferenceVariable/
    )
    assert.match(
        commonVariables,
        /x_2108496_hr_acces_organization_fallback:\s*ReferenceVariable/
    )
})

test('nested SDK query values retain raw and display values', () => {
    const modulePath = path.join(
        root,
        'scripts',
        'validation',
        'wave-2-query-values.psm1'
    )
    const command = [
        `Import-Module '${modulePath.replaceAll("'", "''")}' -Force`,
        `$record = '{"name":{"display_value":"FPPS / WTTS","value":"FPPS / WTTS"},"active":{"displayValue":"true","value":{"value":"1"}},"group":{"display_value":"ROB Admin","value":"abc123"}}' | ConvertFrom-Json`,
        `[ordered]@{ name = Get-Wave2RawValue $record 'name'; active = Get-Wave2RawValue $record 'active'; activeDisplay = Get-Wave2DisplayValue $record 'active'; group = Get-Wave2RawValue $record 'group'; groupDisplay = Get-Wave2DisplayValue $record 'group' } | ConvertTo-Json -Compress`,
    ].join('; ')
    const parsed = JSON.parse(
        execFileSync(
            'powershell',
            ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', command],
            { encoding: 'utf8' }
        )
    )
    assert.deepEqual(parsed, {
        name: 'FPPS / WTTS',
        active: '1',
        activeDisplay: 'true',
        group: 'abc123',
        groupDisplay: 'ROB Admin',
    })
})

test('PDI verification is read-only, fail-closed, and reports all audit groups', () => {
    assert.match(
        deploymentVerifier,
        /['"]@servicenow\/sdk['"] query/
    )
    assert.doesNotMatch(
        deploymentVerifier,
        /@servicenow\/sdk (?:install|deploy)|\b(?:POST|PUT|PATCH|DELETE)\b/
    )
    for (const heading of [
        'HR Services',
        'Record Producers',
        'Catalog and Category Associations',
        'User Criteria',
        'Employee Taxonomy Topics and Connected Content',
        'Variable Sets and Associations',
        'Requested Access Items Variables',
        'Access Item Rows',
        'Access Item Table and Field ACLs',
        'Custom Case Fields and Case ACLs',
        'HR Task ACL',
        'Case Templates and Assignment Groups',
        'Result',
    ]) {
        assert.match(
            deploymentVerifier,
            new RegExp(`Write-Section '${heading}'`)
        )
    }
    assert.match(deploymentVerifier, /Write-Host 'PASS'/)
    assert.match(deploymentVerifier, /Write-Host 'FAIL'/)
    assert.match(deploymentVerifier, /Write-Host 'Blockers:'/)
    assert.match(
        deploymentVerifier,
        /Record producer .* does not have exactly one .* catalog-category association/
    )
    assert.match(
        deploymentVerifier,
        /does not have exactly one Catalog Item connected-content association/
    )
    assert.match(
        deploymentVerifier,
        /Active ROB Configuration has no value for/
    )
    assert.match(deploymentVerifier, /access-item ACL set must contain exactly 10 ACLs/)
    assert.match(deploymentVerifier, /has no value for \$requiredField/)
    assert.doesNotMatch(deploymentVerifier, /-Table 'taxonomy_topic'/)
})

test('native ownership limitations are explicit instead of silently manual', () => {
    assert.match(
        manualConfiguration,
        /Wave 2 SDK-first deployment ownership boundary/
    )
    assert.match(
        manualConfiguration,
        /CatalogItemRecordProducer/
    )
    assert.match(
        manualConfiguration,
        /verify-wave-2-deployment\.ps1/
    )
})
