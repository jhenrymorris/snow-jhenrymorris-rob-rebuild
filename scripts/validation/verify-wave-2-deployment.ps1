[CmdletBinding()]
param(
    [string]$Auth = 'rob-pdi'
)

$ErrorActionPreference = 'Stop'
$script:Blockers = [System.Collections.Generic.List[string]]::new()
$script:QueryFailed = $false
$root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$expectationsPath = Join-Path $PSScriptRoot 'wave-2-deployment-expectations.json'
$expectations = Get-Content -Raw -LiteralPath $expectationsPath | ConvertFrom-Json
Import-Module (Join-Path $PSScriptRoot 'wave-2-query-values.psm1') -Force

function Add-Blocker {
    param([string]$Message)
    if (-not $script:Blockers.Contains($Message)) {
        $script:Blockers.Add($Message)
    }
}

function Write-Section {
    param([string]$Title)
    Write-Host ''
    Write-Host "=== $Title ==="
}

function Invoke-ReadOnlyQuery {
    param(
        [Parameter(Mandatory)][string]$Table,
        [Parameter(Mandatory)][string]$Query,
        [Parameter(Mandatory)][string]$Fields,
        [int]$Limit = 500,
        [switch]$Optional
    )

    $output = & npx.cmd '@servicenow/sdk' query $Table `
        -q $Query `
        -f $Fields `
        --limit $Limit `
        --display-value all `
        --auth $Auth `
        -o json 2>&1
    $exitCode = $LASTEXITCODE
    $jsonLine = $output |
        ForEach-Object { "$_" } |
        Where-Object { $_.TrimStart().StartsWith('{') } |
        Select-Object -Last 1

    if ($exitCode -ne 0 -or -not $jsonLine) {
        $message = "Query failed for $Table ($Query): $($output -join ' ')"
        if (-not $Optional) {
            Add-Blocker $message
            $script:QueryFailed = $true
        }
        else {
            Write-Warning $message
        }
        return @()
    }

    try {
        $response = $jsonLine | ConvertFrom-Json
    }
    catch {
        $message = "Query returned invalid JSON for $Table ($Query): $jsonLine"
        if (-not $Optional) {
            Add-Blocker $message
            $script:QueryFailed = $true
        }
        else {
            Write-Warning $message
        }
        return @()
    }

    if (-not $response.ok) {
        $message = "Query failed for $Table ($Query): $($response.error.message)"
        if (-not $Optional) {
            Add-Blocker $message
            $script:QueryFailed = $true
        }
        else {
            Write-Warning $message
        }
        return @()
    }

    return @($response.records)
}

function Get-RawValue {
    param(
        [Parameter(Mandatory)][AllowNull()]$Record,
        [Parameter(Mandatory)][string]$Field
    )
    return Get-Wave2RawValue -Record $Record -Field $Field
}

function Get-DisplayValue {
    param(
        [Parameter(Mandatory)][AllowNull()]$Record,
        [Parameter(Mandatory)][string]$Field
    )
    return Get-Wave2DisplayValue -Record $Record -Field $Field
}

function Show-Records {
    param(
        [Parameter(Mandatory)][AllowNull()][AllowEmptyCollection()][object[]]$Records,
        [Parameter(Mandatory)][string[]]$Fields
    )
    if ($Records.Count -eq 0) {
        Write-Host '(none)'
        return
    }
    $rows = foreach ($record in $Records) {
        $row = [ordered]@{}
        foreach ($field in $Fields) {
            $display = Get-DisplayValue $record $field
            $raw = Get-RawValue $record $field
            $row[$field] = if ($display -and $display -ne $raw) {
                "$display [$raw]"
            }
            else {
                $raw
            }
        }
        [pscustomobject]$row
    }
    $rows | Format-Table -AutoSize | Out-Host
}

function Assert-Count {
    param(
        [AllowNull()][AllowEmptyCollection()][object[]]$Records,
        [int]$Expected,
        [string]$Description
    )
    if ($Records.Count -ne $Expected) {
        Add-Blocker "${Description}: expected $Expected record(s), found $($Records.Count)."
    }
}

function Find-ByRawValue {
    param(
        [AllowNull()][AllowEmptyCollection()][object[]]$Records,
        [string]$Field,
        [string]$Value
    )
    return @($Records | Where-Object {
        $null -ne $_ -and (Get-RawValue $_ $Field) -eq $Value
    })
}

Set-Location $root

Write-Section 'HR Services'
$services = Invoke-ReadOnlyQuery `
    -Table 'sn_hr_core_service' `
    -Query 'valueINrequest_access_to_hr_systems,request_access_to_hr_data_and_reports' `
    -Fields 'sys_id,name,value,active,producer,template,sys_scope,sys_package'
Show-Records $services @(
    'sys_id', 'name', 'value', 'active', 'producer', 'template',
    'sys_scope', 'sys_package'
)
Assert-Count $services 2 'Approved ROB HR Services'
foreach ($producerExpectation in $expectations.recordProducers) {
    $matches = Find-ByRawValue $services 'value' $producerExpectation.serviceValue
    Assert-Count $matches 1 "HR Service value $($producerExpectation.serviceValue)"
    if ($matches.Count -eq 1) {
        $service = $matches[0]
        if ((Get-RawValue $service 'active') -notin @('true', '1')) {
            Add-Blocker "HR Service $($producerExpectation.serviceValue) is not active."
        }
        if (-not (Get-RawValue $service 'producer')) {
            Add-Blocker "HR Service $($producerExpectation.serviceValue) has no record-producer linkage."
        }
        if (-not (Get-RawValue $service 'template')) {
            Add-Blocker "HR Service $($producerExpectation.serviceValue) has no case-template linkage."
        }
    }
}

Write-Section 'Record Producers'
$producers = Invoke-ReadOnlyQuery `
    -Table 'sc_cat_item_producer' `
    -Query 'nameINRequest Access to HR Systems,Request Access to HR Data and Reports' `
    -Fields 'sys_id,name,active,table_name,short_description,description,sc_catalogs,category,hide_sp,availability,template,script,sys_scope,sys_package'
Show-Records $producers @(
    'sys_id', 'name', 'active', 'table_name', 'short_description',
    'sc_catalogs', 'category', 'hide_sp', 'availability', 'template',
    'sys_scope', 'sys_package'
)
Assert-Count $producers 2 'ROB record producers'
foreach ($producerExpectation in $expectations.recordProducers) {
    $matches = @($producers | Where-Object {
        (Get-RawValue $_ 'name') -eq $producerExpectation.name
    })
    Assert-Count $matches 1 "Record producer $($producerExpectation.name)"
    if ($matches.Count -eq 1) {
        $producer = $matches[0]
        if ((Get-RawValue $producer 'active') -notin @('true', '1')) {
            Add-Blocker "Record producer $($producerExpectation.name) is inactive."
        }
        if ((Get-RawValue $producer 'table_name') -ne $producerExpectation.targetTable) {
            Add-Blocker "Record producer $($producerExpectation.name) targets '$((Get-RawValue $producer 'table_name'))', expected '$($producerExpectation.targetTable)'."
        }
        if ((Get-DisplayValue $producer 'sc_catalogs') -notmatch [regex]::Escape($producerExpectation.catalog)) {
            Add-Blocker "Record producer $($producerExpectation.name) is not associated with $($producerExpectation.catalog)."
        }
        if ((Get-DisplayValue $producer 'category') -ne $producerExpectation.category) {
            Add-Blocker "Record producer $($producerExpectation.name) category is '$((Get-DisplayValue $producer 'category'))', expected '$($producerExpectation.category)'."
        }
        if ((Get-RawValue $producer 'hide_sp') -in @('true', '1')) {
            Add-Blocker "Record producer $($producerExpectation.name) is hidden from Service Portal/Employee Center."
        }
        if ((Get-RawValue $producer 'short_description') -ne $producerExpectation.shortDescription) {
            Add-Blocker "Record producer $($producerExpectation.name) short description differs from the deployment contract."
        }
        [string]$producerDescription = Get-RawValue $producer 'description'
        if (-not $producerDescription.Contains($expectations.selfSubmissionSentence)) {
            Add-Blocker "Record producer $($producerExpectation.name) description does not contain the approved self-submission wording."
        }
        [string]$producerScript = Get-RawValue $producer 'script'
        if (
            $producerScript -match
                '(?is)(?:producer\.(?:opened_for|subject_person|requested_for)|current\.getValue\(''(?:opened_for|subject_person|requested_for)''\))\s*\|\|\s*gs\.getUserID\(\)' -or
            $producerScript -match
                '(?is)if\s*\(\s*!\s*requesterId\s*\)[\s;]*requesterId\s*=\s*gs\.getUserID\(\)'
        ) {
            Add-Blocker "Record producer $($producerExpectation.name) still contains the legacy authenticated-user requester fallback."
        }
        if ($producerScript -notmatch 'authenticatedUserId\s*=\s*gs\.getUserID\(\)') {
            Add-Blocker "Record producer $($producerExpectation.name) does not derive the requester directly from gs.getUserID()."
        }
        foreach ($identityField in @('opened_for', 'subject_person')) {
            if (
                $producerScript -notmatch
                    "current\.(?:setValue\('$identityField',\s*authenticatedUserId\)|$identityField\s*=\s*authenticatedUserId)"
            ) {
                Add-Blocker "Record producer $($producerExpectation.name) does not set $identityField from the authenticated user."
            }
        }
        $identityValidationIndex = $producerScript.IndexOf(
            '!== authenticatedUserId',
            [System.StringComparison]::Ordinal
        )
        $profileLookupIndex = $producerScript.IndexOf(
            "new GlideRecord('sys_user')",
            [System.StringComparison]::Ordinal
        )
        if (
            $identityValidationIndex -lt 0 -or
            ($profileLookupIndex -ge 0 -and
                $identityValidationIndex -gt $profileLookupIndex)
        ) {
            Add-Blocker "Record producer $($producerExpectation.name) does not reject identity mismatch before employee-profile lookup."
        }
    }
}

foreach ($producerExpectation in $expectations.recordProducers) {
    $producer = @($producers | Where-Object {
        (Get-RawValue $_ 'name') -eq $producerExpectation.name
    }) | Select-Object -First 1
    $service = @($services | Where-Object {
        (Get-RawValue $_ 'value') -eq $producerExpectation.serviceValue
    }) | Select-Object -First 1
    if ($producer -and $service) {
        $producerId = Get-RawValue $producer 'sys_id'
        $linkedProducerId = Get-RawValue $service 'producer'
        if ($linkedProducerId -and $linkedProducerId -ne $producerId) {
            Add-Blocker "HR Service $($producerExpectation.serviceValue) is linked to the wrong record producer."
        }
    }
}

$producerIds = @($producers | ForEach-Object { Get-RawValue $_ 'sys_id' } | Where-Object { $_ })
$producerIdQuery = if ($producerIds.Count) {
    $producerIds -join ','
}
else {
    '00000000000000000000000000000000'
}

Write-Section 'Catalog and Category Associations'
$catalogCategories = Invoke-ReadOnlyQuery `
    -Table 'sc_cat_item_category' `
    -Query "sc_cat_itemIN$producerIdQuery" `
    -Fields 'sys_id,sc_cat_item,sc_category,sys_scope,sys_package'
Show-Records $catalogCategories @('sys_id', 'sc_cat_item', 'sc_category')
foreach ($producerExpectation in $expectations.recordProducers) {
    $producer = @($producers | Where-Object {
        (Get-RawValue $_ 'name') -eq $producerExpectation.name
    }) | Select-Object -First 1
    if (-not $producer) {
        continue
    }
    $producerId = Get-RawValue $producer 'sys_id'
    $matches = @($catalogCategories | Where-Object {
        (Get-RawValue $_ 'sc_cat_item') -eq $producerId -and
        (Get-DisplayValue $_ 'sc_category') -eq $producerExpectation.category
    })
    if ($matches.Count -ne 1) {
        Add-Blocker "Record producer '$($producerExpectation.name)' does not have exactly one $($producerExpectation.category) catalog-category association."
    }
}

Write-Section 'User Criteria'
$availableCriteria = Invoke-ReadOnlyQuery `
    -Table 'sc_cat_item_user_criteria_mtom' `
    -Query "sc_cat_itemIN$producerIdQuery" `
    -Fields 'sys_id,sc_cat_item,user_criteria,sys_scope,sys_package'
$unavailableCriteria = Invoke-ReadOnlyQuery `
    -Table 'sc_cat_item_user_criteria_no_mtom' `
    -Query "sc_cat_itemIN$producerIdQuery" `
    -Fields 'sys_id,sc_cat_item,user_criteria,sys_scope,sys_package'
Show-Records $availableCriteria @('sys_id', 'sc_cat_item', 'user_criteria')
Show-Records $unavailableCriteria @('sys_id', 'sc_cat_item', 'user_criteria')
foreach ($producer in $producers) {
    $producerId = Get-RawValue $producer 'sys_id'
    $available = @($availableCriteria | Where-Object {
        (Get-RawValue $_ 'sc_cat_item') -eq $producerId -and
        (Get-DisplayValue $_ 'user_criteria') -eq 'All Users'
    })
    $unavailable = @($unavailableCriteria | Where-Object {
        (Get-RawValue $_ 'sc_cat_item') -eq $producerId -and
        (Get-DisplayValue $_ 'user_criteria') -eq 'SNC External'
    })
    if ($available.Count -ne 1) {
        Add-Blocker "Record producer '$((Get-RawValue $producer 'name'))' does not have exactly one Available For = All Users association."
    }
    if ($unavailable.Count -ne 1) {
        Add-Blocker "Record producer '$((Get-RawValue $producer 'name'))' does not have exactly one Not Available For = SNC External association."
    }
}

Write-Section 'Employee Taxonomy Topics and Connected Content'
$topics = Invoke-ReadOnlyQuery `
    -Table 'topic' `
    -Query 'nameINHuman resources,HR Systems and Data Access' `
    -Fields 'sys_id,name,active,parent_topic,taxonomy,sys_scope,sys_package'
Show-Records $topics @(
    'sys_id', 'name', 'active', 'parent_topic', 'taxonomy',
    'sys_scope', 'sys_package'
)
$connectedContent = Invoke-ReadOnlyQuery `
    -Table 'm2m_connected_content' `
    -Query "catalog_itemIN$producerIdQuery" `
    -Fields 'sys_id,topic,catalog_item,content_type,source,sys_scope,sys_package'
$producerConnectedContent = @($connectedContent | Where-Object {
    (Get-RawValue $_ 'catalog_item') -in $producerIds
})
Show-Records $producerConnectedContent @(
    'sys_id', 'topic', 'catalog_item', 'content_type', 'source',
    'sys_scope', 'sys_package'
)
$childTopics = Find-ByRawValue $topics 'name' 'HR Systems and Data Access'
Assert-Count $childTopics 1 'HR Systems and Data Access taxonomy topic'
$parentTopics = Find-ByRawValue $topics 'name' 'Human resources'
Assert-Count $parentTopics 1 'Human resources taxonomy topic'
if ($childTopics.Count -eq 1 -and $parentTopics.Count -eq 1) {
    $childTopic = $childTopics[0]
    $parentTopic = $parentTopics[0]
    if ((Get-RawValue $childTopic 'active') -notin @('true', '1')) {
        Add-Blocker 'HR Systems and Data Access taxonomy topic is inactive.'
    }
    if ((Get-RawValue $parentTopic 'active') -notin @('true', '1')) {
        Add-Blocker 'Human resources taxonomy topic is inactive.'
    }
    if ((Get-RawValue $childTopic 'parent_topic') -ne (Get-RawValue $parentTopic 'sys_id')) {
        Add-Blocker 'HR Systems and Data Access is not a child of Human resources.'
    }
    if ((Get-DisplayValue $childTopic 'taxonomy') -ne $expectations.taxonomy.name) {
        Add-Blocker 'HR Systems and Data Access is not assigned to the Employee taxonomy.'
    }
    $childTopicId = Get-RawValue $childTopic 'sys_id'
    foreach ($producer in $producers) {
        $producerId = Get-RawValue $producer 'sys_id'
        $matches = @($producerConnectedContent | Where-Object {
            (Get-RawValue $_ 'catalog_item') -eq $producerId -and
            (Get-RawValue $_ 'topic') -eq $childTopicId -and
            (Get-DisplayValue $_ 'content_type') -eq 'Catalog Item'
        })
        if ($matches.Count -ne 1) {
            Add-Blocker "Record producer '$((Get-RawValue $producer 'name'))' does not have exactly one Catalog Item connected-content association to HR Systems and Data Access."
        }
    }
}

Write-Section 'Variable Sets and Associations'
$variableSets = Invoke-ReadOnlyQuery `
    -Table 'item_option_new_set' `
    -Query 'internal_nameINrob_common_intake,rob_staffing_access,rob_analytics_access' `
    -Fields 'sys_id,title,internal_name,type,order,description'
Show-Records $variableSets @('sys_id', 'title', 'internal_name', 'type', 'order')
Assert-Count $variableSets 3 'ROB intake variable sets'
$variableSetIds = @($variableSets | ForEach-Object { Get-RawValue $_ 'sys_id' } | Where-Object { $_ })
$variableSetIdQuery = if ($variableSetIds.Count) {
    $variableSetIds -join ','
}
else {
    '00000000000000000000000000000000'
}
$variableSetLinks = Invoke-ReadOnlyQuery `
    -Table 'io_set_item' `
    -Query "variable_setIN$variableSetIdQuery" `
    -Fields 'sys_id,sc_cat_item,variable_set,order'
Show-Records $variableSetLinks @('sys_id', 'sc_cat_item', 'variable_set', 'order')
foreach ($producerExpectation in $expectations.recordProducers) {
    $producer = @($producers | Where-Object {
        (Get-RawValue $_ 'name') -eq $producerExpectation.name
    }) | Select-Object -First 1
    if (-not $producer) {
        continue
    }
    $producerId = Get-RawValue $producer 'sys_id'
    foreach ($setExpectation in $producerExpectation.variableSets) {
        $set = @($variableSets | Where-Object {
            (Get-RawValue $_ 'internal_name') -eq $setExpectation.internalName
        }) | Select-Object -First 1
        if (-not $set) {
            continue
        }
        $setId = Get-RawValue $set 'sys_id'
        $links = @($variableSetLinks | Where-Object {
            (Get-RawValue $_ 'sc_cat_item') -eq $producerId -and
            (Get-RawValue $_ 'variable_set') -eq $setId -and
            [int](Get-RawValue $_ 'order') -eq [int]$setExpectation.order
        })
        if ($links.Count -ne 1) {
            Add-Blocker "Record producer '$($producerExpectation.name)' is missing the $($setExpectation.internalName) variable-set link at order $($setExpectation.order)."
        }
    }
}

Write-Section 'Requested Access Items Variables'
$requestedVariables = Invoke-ReadOnlyQuery `
    -Table 'item_option_new' `
    -Query 'name=x_2108496_hr_acces_requested_items' `
    -Fields 'sys_id,name,question_text,type,list_table,reference,reference_qual,active,mandatory,variable_set,order'
Show-Records $requestedVariables @(
    'sys_id', 'name', 'question_text', 'type', 'list_table', 'reference',
    'reference_qual', 'active', 'mandatory', 'variable_set', 'order'
)
Assert-Count $requestedVariables 2 'Requested Access Items variables'
foreach ($producerExpectation in $expectations.recordProducers) {
    $setName = if ($producerExpectation.targetTable -eq 'sn_hr_core_case_payroll') {
        'rob_staffing_access'
    }
    else {
        'rob_analytics_access'
    }
    $set = @($variableSets | Where-Object {
        (Get-RawValue $_ 'internal_name') -eq $setName
    }) | Select-Object -First 1
    if (-not $set) {
        continue
    }
    $setId = Get-RawValue $set 'sys_id'
    $variables = @($requestedVariables | Where-Object {
        (Get-RawValue $_ 'variable_set') -eq $setId
    })
    Assert-Count $variables 1 "Requested Access Items variable in $setName"
    if ($variables.Count -eq 1) {
        $variable = $variables[0]
        if ((Get-RawValue $variable 'type') -ne '21') {
            Add-Blocker "$setName Requested Access Items is not a type-21 list collector."
        }
        if ((Get-RawValue $variable 'list_table') -ne $expectations.accessItemTable.name) {
            Add-Blocker "$setName Requested Access Items references '$((Get-RawValue $variable 'list_table'))', expected '$($expectations.accessItemTable.name)'."
        }
        if ((Get-RawValue $variable 'reference_qual') -ne $producerExpectation.requestedItemsQualifier) {
            Add-Blocker "$setName Requested Access Items qualifier is not exact."
        }
        if ((Get-RawValue $variable 'active') -notin @('true', '1')) {
            Add-Blocker "$setName Requested Access Items is inactive."
        }
        if ((Get-RawValue $variable 'mandatory') -notin @('true', '1')) {
            Add-Blocker "$setName Requested Access Items is not mandatory."
        }
    }
}

Write-Section 'Access Item Rows'
$scopeDictionaries = Invoke-ReadOnlyQuery `
    -Table 'sys_dictionary' `
    -Query "sys_scope=$($expectations.scopeId)" `
    -Fields 'sys_id,name,element,column_label,internal_type,reference,mandatory,read_only,audit,display'
$accessItemDisplayFields = @($scopeDictionaries | Where-Object {
    (Get-RawValue $_ 'name') -eq $expectations.accessItemTable.name -and
    (Get-RawValue $_ 'display') -in @('true', '1')
})
Show-Records $accessItemDisplayFields @(
    'sys_id', 'name', 'element', 'column_label', 'display'
)
if (
    $accessItemDisplayFields.Count -ne 1 -or
    (Get-RawValue $accessItemDisplayFields[0] 'element') -ne $expectations.accessItemTable.displayField
) {
    Add-Blocker "Access-item table display field is not '$($expectations.accessItemTable.displayField)'."
}
$accessItems = Invoke-ReadOnlyQuery `
    -Table $expectations.accessItemTable.name `
    -Query 'sys_idISNOTEMPTY' `
    -Fields 'sys_id,name,active,access_item_code,access_category,sort_order,requires_staffing_task,requires_analytics_task,requires_operations_manager_task,external_provisioning_system,external_target_system'
Show-Records $accessItems @(
    'sys_id', 'name', 'active', 'access_item_code', 'access_category',
    'sort_order', 'requires_staffing_task', 'requires_analytics_task',
    'requires_operations_manager_task', 'external_provisioning_system',
    'external_target_system'
)
Assert-Count $accessItems 6 'Starter ROB access items'
foreach ($itemExpectation in $expectations.accessItems) {
    $matches = Find-ByRawValue $accessItems 'access_item_code' $itemExpectation.code
    Assert-Count $matches 1 "Access item code $($itemExpectation.code)"
    if ($matches.Count -eq 1) {
        $item = $matches[0]
        foreach ($requiredField in @(
            'name',
            'active',
            'access_item_code',
            'access_category',
            'sort_order'
        )) {
            if (-not (Get-RawValue $item $requiredField)) {
                Add-Blocker "Access item $($itemExpectation.code) has no value for $requiredField."
            }
        }
        if ((Get-RawValue $item 'name') -ne $itemExpectation.name) {
            Add-Blocker "Access item $($itemExpectation.code) has the wrong name."
        }
        if ((Get-RawValue $item 'active') -notin @('true', '1')) {
            Add-Blocker "Access item $($itemExpectation.code) is inactive."
        }
        if ((Get-RawValue $item 'access_category') -ne $itemExpectation.category) {
            Add-Blocker "Access item $($itemExpectation.code) has the wrong category."
        }
        if ([int](Get-RawValue $item 'sort_order') -ne [int]$itemExpectation.sortOrder) {
            Add-Blocker "Access item $($itemExpectation.code) has the wrong sort order."
        }
    }
}

Write-Section 'Access Item Table and Field ACLs'
$accessAcls = Invoke-ReadOnlyQuery `
    -Table 'sys_security_acl' `
    -Query "name=$($expectations.accessItemTable.name)^ORnameSTARTSWITH$($expectations.accessItemTable.name)." `
    -Fields 'sys_id,name,operation,active,admin_overrides,condition,decision_type,security_attribute,script'
Show-Records $accessAcls @(
    'sys_id', 'name', 'operation', 'active', 'admin_overrides', 'condition',
    'decision_type', 'security_attribute', 'script'
)
$accessAclIds = @($accessAcls | ForEach-Object { Get-RawValue $_ 'sys_id' } | Where-Object { $_ })
$accessAclIdQuery = if ($accessAclIds.Count) {
    $accessAclIds -join ','
}
else {
    '00000000000000000000000000000000'
}
$accessAclRoles = Invoke-ReadOnlyQuery `
    -Table 'sys_security_acl_role' `
    -Query "sys_security_aclIN$accessAclIdQuery" `
    -Fields 'sys_id,sys_security_acl,sys_user_role'
Show-Records $accessAclRoles @('sys_id', 'sys_security_acl', 'sys_user_role')
if ($accessAcls.Count -ne 10) {
    Add-Blocker "The access-item ACL set must contain exactly 10 ACLs; found $($accessAcls.Count)."
}
$employeeReadAcl = @($accessAcls | Where-Object {
    (Get-RawValue $_ 'name') -eq $expectations.accessItemTable.name -and
    (Get-RawValue $_ 'operation') -eq 'read' -and
    (Get-RawValue $_ 'condition') -eq 'active=true' -and
    (Get-RawValue $_ 'script') -match 'snc_internal'
})
if ($employeeReadAcl.Count -ne 1) {
    Add-Blocker 'The access-item table does not have exactly one active-row employee read ACL.'
}
$expectedEmployeeReadNames = @($expectations.accessItemTable.employeeReadableFields |
    ForEach-Object { "$($expectations.accessItemTable.name).$_" })
$expectedEmployeeReadNames += $expectations.accessItemTable.name
foreach ($field in $expectations.accessItemTable.employeeReadableFields) {
    $name = "$($expectations.accessItemTable.name).$field"
    $matches = @($accessAcls | Where-Object {
        (Get-RawValue $_ 'name') -eq $name -and
        (Get-RawValue $_ 'operation') -eq 'read' -and
        (Get-RawValue $_ 'condition') -eq 'active=true' -and
        (Get-RawValue $_ 'script') -match 'snc_internal'
    })
    if ($matches.Count -ne 1) {
        Add-Blocker "Missing least-privilege employee read ACL for $name."
    }
}
$employeeScriptAcls = @($accessAcls | Where-Object {
    (Get-RawValue $_ 'script') -match 'snc_internal'
})
foreach ($acl in $employeeScriptAcls) {
    $aclName = Get-RawValue $acl 'name'
    if (
        $aclName -notin $expectedEmployeeReadNames -or
        (Get-RawValue $acl 'operation') -ne 'read' -or
        (Get-RawValue $acl 'active') -notin @('true', '1') -or
        (Get-RawValue $acl 'admin_overrides') -notin @('false', '0') -or
        (Get-RawValue $acl 'condition') -ne 'active=true' -or
        (Get-DisplayValue $acl 'security_attribute') -ne 'User is authenticated'
    ) {
        Add-Blocker "Employee ACL '$aclName' is not the exact active-row authenticated internal-user read contract."
    }
}
foreach ($adminOperation in @('read', 'create', 'write')) {
    $tableOperationAcls = @($accessAcls | Where-Object {
        (Get-RawValue $_ 'name') -eq $expectations.accessItemTable.name -and
        (Get-RawValue $_ 'operation') -eq $adminOperation
    })
    $adminAcls = @()
    foreach ($acl in $tableOperationAcls) {
        $aclId = Get-RawValue $acl 'sys_id'
        $adminRoleLinks = @($accessAclRoles | Where-Object {
            (Get-RawValue $_ 'sys_security_acl') -eq $aclId -and
            (Get-DisplayValue $_ 'sys_user_role') -eq "$($expectations.scope).rob_admin"
        })
        if ($adminRoleLinks.Count -eq 1) {
            $adminAcls += $acl
        }
    }
    if ($adminAcls.Count -ne 1) {
        Add-Blocker "ROB Admin does not have exactly one table-level $adminOperation ACL on the access-item table."
    }
}
$fieldMaskAcls = @($accessAcls | Where-Object {
    (Get-RawValue $_ 'name') -eq "$($expectations.accessItemTable.name).*" -and
    (Get-RawValue $_ 'operation') -eq 'read'
})
if ($fieldMaskAcls.Count -ne 1) {
    Add-Blocker 'The ROB Admin-only access-item wildcard field-read ACL is missing or duplicated.'
}
elseif (-not @($accessAclRoles | Where-Object {
    (Get-RawValue $_ 'sys_security_acl') -eq
        (Get-RawValue $fieldMaskAcls[0] 'sys_id') -and
    (Get-DisplayValue $_ 'sys_user_role') -eq
        "$($expectations.scope).rob_admin"
})) {
    Add-Blocker 'The access-item wildcard field-read ACL is not assigned to ROB Admin.'
}
$expectedAccessAclNames = @($expectedEmployeeReadNames)
$expectedAccessAclNames += "$($expectations.accessItemTable.name).*"
foreach ($acl in $accessAcls) {
    $aclName = Get-RawValue $acl 'name'
    if (
        $aclName -notin $expectedAccessAclNames -or
        (Get-RawValue $acl 'active') -notin @('true', '1') -or
        (
            -not (Get-RawValue $acl 'condition') -and
            -not (Get-RawValue $acl 'script') -and
            -not @($accessAclRoles | Where-Object {
                (Get-RawValue $_ 'sys_security_acl') -eq
                    (Get-RawValue $acl 'sys_id')
            })
        )
    ) {
        Add-Blocker "Access-item ACL '$aclName' is outside the exact active, constrained ACL contract."
    }
}
foreach ($operation in $expectations.accessItemTable.employeeDeniedOperations) {
    $operationAcls = @($accessAcls | Where-Object {
        (Get-RawValue $_ 'operation') -eq $operation
    })
    foreach ($acl in $operationAcls) {
        $aclId = Get-RawValue $acl 'sys_id'
        $ordinaryRole = @($accessAclRoles | Where-Object {
            (Get-RawValue $_ 'sys_security_acl') -eq $aclId -and
            (Get-DisplayValue $_ 'sys_user_role') -eq $expectations.accessItemTable.employeeRole
        })
        if ($ordinaryRole.Count) {
            Add-Blocker "Ordinary employees are granted $operation by ACL '$((Get-RawValue $acl 'name'))'."
        }
        if ((Get-RawValue $acl 'script') -match 'snc_internal') {
            Add-Blocker "Ordinary employees are granted $operation by scripted ACL '$((Get-RawValue $acl 'name'))'."
        }
    }
}

Write-Section 'Custom Case Fields and Case ACLs'
$caseFields = @($scopeDictionaries | Where-Object {
    (Get-RawValue $_ 'name') -in @(
        'sn_hr_core_case_payroll',
        'sn_hr_core_case_workforce_admin'
    ) -and
    (Get-RawValue $_ 'element').StartsWith('x_2108496_hr_acces_')
})
Show-Records $caseFields @(
    'sys_id', 'name', 'element', 'column_label', 'internal_type', 'reference',
    'mandatory', 'read_only', 'audit'
)
$scopeAcls = Invoke-ReadOnlyQuery `
    -Table 'sys_security_acl' `
    -Query "sys_scope=$($expectations.scopeId)" `
    -Fields 'sys_id,name,operation,active,admin_overrides,condition,decision_type,script'
$caseAcls = @($scopeAcls | Where-Object {
    $aclName = Get-RawValue $_ 'name'
    $aclName.StartsWith('sn_hr_core_case_payroll.x_2108496_hr_acces_') -or
    $aclName.StartsWith('sn_hr_core_case_workforce_admin.x_2108496_hr_acces_')
})
Show-Records $caseAcls @(
    'sys_id', 'name', 'operation', 'active', 'admin_overrides', 'condition',
    'decision_type'
)
foreach ($tableName in @(
    'sn_hr_core_case_payroll',
    'sn_hr_core_case_workforce_admin'
)) {
    $expectedFields = @($expectations.caseFields.common)
    if ($tableName -eq 'sn_hr_core_case_workforce_admin') {
        $expectedFields += @($expectations.caseFields.workforceOnly)
    }
    foreach ($fieldName in $expectedFields) {
        $matches = @($caseFields | Where-Object {
            (Get-RawValue $_ 'name') -eq $tableName -and
            (Get-RawValue $_ 'element') -eq $fieldName
        })
        if ($matches.Count -ne 1) {
            Add-Blocker "Expected one application-owned dictionary for $tableName.$fieldName; found $($matches.Count)."
        }
    }
}
if ($caseAcls.Count -eq 0) {
    Add-Blocker 'No Wave 2 case field ACLs were found on the approved HR case subclasses.'
}

Write-Section 'HR Task ACL'
$taskAcls = Invoke-ReadOnlyQuery `
    -Table 'sys_security_acl' `
    -Query 'name=sn_hr_core_task.x_2108496_hr_acces_rob_task_type' `
    -Fields 'sys_id,name,operation,active,admin_overrides,condition,decision_type,script'
Show-Records $taskAcls @(
    'sys_id', 'name', 'operation', 'active', 'admin_overrides', 'condition',
    'decision_type', 'script'
)
if (-not @($taskAcls | Where-Object {
    (Get-RawValue $_ 'operation') -eq 'write' -and
    (Get-RawValue $_ 'script') -match 'return false'
})) {
    Add-Blocker 'The HR Task ROB Task Type immutable write ACL was not found.'
}

Write-Section 'Case Templates and Assignment Groups'
$templateIds = @($services | ForEach-Object {
    Get-RawValue $_ 'template'
} | Where-Object { $_ })
$templateIdQuery = if ($templateIds.Count) {
    $templateIds -join ','
}
else {
    '00000000000000000000000000000000'
}
$hrTemplates = Invoke-ReadOnlyQuery `
    -Table 'sn_hr_core_template' `
    -Query "sys_idIN$templateIdQuery" `
    -Fields 'sys_id,name,active,parent_case_table,owning_group,short_description_for_employee,assignment_option,template_reference'
$systemTemplates = Invoke-ReadOnlyQuery `
    -Table 'sys_template' `
    -Query "sys_idIN$templateIdQuery" `
    -Fields 'sys_id,name,active,table,template'
Show-Records $hrTemplates @(
    'sys_id', 'name', 'active', 'parent_case_table', 'owning_group',
    'short_description_for_employee', 'assignment_option'
)
Show-Records $systemTemplates @('sys_id', 'name', 'active', 'table', 'template')
Assert-Count $hrTemplates 2 'ROB HR templates'
Assert-Count $systemTemplates 2 'ROB system templates'
foreach ($producerExpectation in $expectations.recordProducers) {
    $service = @($services | Where-Object {
        (Get-RawValue $_ 'value') -eq $producerExpectation.serviceValue
    }) | Select-Object -First 1
    if (-not $service) {
        continue
    }
    $templateId = Get-RawValue $service 'template'
    $hrTemplate = @($hrTemplates | Where-Object {
        (Get-RawValue $_ 'sys_id') -eq $templateId
    }) | Select-Object -First 1
    $systemTemplate = @($systemTemplates | Where-Object {
        (Get-RawValue $_ 'sys_id') -eq $templateId
    }) | Select-Object -First 1
    if (-not $hrTemplate -or -not $systemTemplate) {
        continue
    }
    if ((Get-RawValue $hrTemplate 'active') -notin @('true', '1')) {
        Add-Blocker "HR template '$($producerExpectation.name)' is inactive."
    }
    if ((Get-RawValue $systemTemplate 'table') -ne $producerExpectation.targetTable) {
        Add-Blocker "HR template '$($producerExpectation.name)' targets the wrong case table."
    }
    if ((Get-RawValue $hrTemplate 'short_description_for_employee') -ne $producerExpectation.shortDescription) {
        Add-Blocker "HR template '$($producerExpectation.name)' short description differs from the deployment contract."
    }
    if ((Get-DisplayValue $hrTemplate 'owning_group') -ne $producerExpectation.assignmentGroup) {
        Add-Blocker "HR template '$($producerExpectation.name)' owning group differs from the deployment contract."
    }
    $templateData = Get-RawValue $systemTemplate 'template'
    if (
        $templateData -notmatch "short_description=$([regex]::Escape($producerExpectation.shortDescription))" -or
        $templateData -notmatch 'assignment_group=[0-9a-f]{32}'
    ) {
        Add-Blocker "HR template '$($producerExpectation.name)' does not set the approved short description and an assignment group."
    }
}
$configuration = Invoke-ReadOnlyQuery `
    -Table 'x_2108496_hr_acces_rob_config' `
    -Query 'active=true' `
    -Fields 'sys_id,name,active,default_staffing_assignment_group,default_analytics_assignment_group,default_operations_manager_escalation_group,default_exception_review_group'
Show-Records $configuration @(
    'sys_id', 'name', 'active', 'default_staffing_assignment_group',
    'default_analytics_assignment_group',
    'default_operations_manager_escalation_group',
    'default_exception_review_group'
)
Assert-Count $configuration 1 'Active ROB Configuration'
if ($configuration.Count -eq 1) {
    foreach ($field in @(
        'default_staffing_assignment_group',
        'default_analytics_assignment_group',
        'default_operations_manager_escalation_group',
        'default_exception_review_group'
    )) {
        if (-not (Get-RawValue $configuration[0] $field)) {
            Add-Blocker "Active ROB Configuration has no value for $field."
        }
    }
}

Write-Section 'Result'
if ($script:Blockers.Count -eq 0 -and -not $script:QueryFailed) {
    Write-Host 'PASS'
    Write-Host 'Blockers: none'
    exit 0
}

Write-Host 'FAIL'
Write-Host 'Blockers:'
for ($index = 0; $index -lt $script:Blockers.Count; $index++) {
    Write-Host ("{0}. {1}" -f ($index + 1), $script:Blockers[$index])
}
exit 1
