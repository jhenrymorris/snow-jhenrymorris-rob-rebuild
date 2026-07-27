[CmdletBinding()]
param(
    [string]$ConfigPath = (Join-Path $PSScriptRoot 'wave-2-config.psd1'),
    [string]$SnapshotTestCommit,
    [string]$SecurityReviewCommit,
    [string]$DocumentationCommit,
    [string]$SnapshotTestSummary = '',
    [string]$SecurityDecision = '',
    [string]$SnapshotTestReport = '',
    [string]$SecurityReport = '',
    [string]$DocumentationReport = '',
    [switch]$LaunchLeadOrchestrator,
    [switch]$NonInteractiveLeadOrchestrator
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$config = Import-PowerShellDataFile -LiteralPath $ConfigPath
$repo = $config.Repository

function Test-Commit([string]$Commit) {
    if ([string]::IsNullOrWhiteSpace($Commit)) { return $false }
    & git -C $repo cat-file -e "$Commit^{commit}" 2>$null
    return ($LASTEXITCODE -eq 0)
}

function Get-Validation([hashtable]$Agent,[string]$Commit) {
    $raw = & (Join-Path $PSScriptRoot 'Test-AgentResult.ps1') -Agent $Agent -ExpectedCommit $Commit
    return @{
        WorktreeClean = [bool]$raw.WorktreeClean
        BranchVerified = ($raw.Branch -eq $Agent.Branch)
        CommitVerified = [bool]$raw.CommitMatches
        AllowedPathCheck = $raw.AllowedPathCheck
        Violations = @($raw.Violations)
        Validated = [bool]$raw.Valid
    }
}

$results = @{}
if ($SnapshotTestCommit) {
    if (-not (Test-Commit $SnapshotTestCommit)) { throw "Unresolvable Snapshot Test commit: $SnapshotTestCommit" }
    $v = Get-Validation $config.Agents.SnapshotTests $SnapshotTestCommit
    $results.SnapshotTests = $v + @{Branch=$config.Agents.SnapshotTests.Branch;Commit=$SnapshotTestCommit;Summary=$SnapshotTestSummary;ReportFile=$SnapshotTestReport}
}
if ($SecurityReviewCommit) {
    if (-not (Test-Commit $SecurityReviewCommit)) { throw "Unresolvable Security Review commit: $SecurityReviewCommit" }
    $v = Get-Validation $config.Agents.SecurityReview $SecurityReviewCommit
    $results.SecurityReview = $v + @{Branch=$config.Agents.SecurityReview.Branch;Commit=$SecurityReviewCommit;Decision=$SecurityDecision;ReportFile=$SecurityReport}
}
$hrsdCommit = $config.Agents.HrsdBridge.ExistingResultCommit
if ($hrsdCommit) {
    if (-not (Test-Commit $hrsdCommit)) { throw "Unresolvable HRSD Bridge commit: $hrsdCommit" }
    $v = Get-Validation $config.Agents.HrsdBridge $hrsdCommit
    $results.HrsdBridge = $v + @{Branch=$config.Agents.HrsdBridge.Branch;Commit=$hrsdCommit;Summary='Existing correction reassessment';ReportFile='docs/hrsd-bridge/wave-2-hrsd-bridge-correction-reassessment.md'}
}
if ($DocumentationCommit) {
    if (-not (Test-Commit $DocumentationCommit)) { throw "Unresolvable Documentation commit: $DocumentationCommit" }
    $v = Get-Validation $config.Agents.Documentation $DocumentationCommit
    $results.Documentation = $v + @{Branch=$config.Agents.Documentation.Branch;Commit=$DocumentationCommit;Summary='Correction-cycle documentation';ReportFile=$DocumentationReport}
}

$handoff = Join-Path $repo "$($config.OutputDirectory)\wave-2-handoff.md"
& (Join-Path $PSScriptRoot 'New-OrchestratorHandoff.ps1') -ConfigPath $ConfigPath -Results $results -OutputPath $handoff | Out-Null
Write-Host "Handoff: $handoff"

$invalid = @($results.GetEnumerator() | Where-Object { -not [bool]$_.Value.Validated })
if ($invalid.Count -gt 0) {
    Write-Warning 'Validation failed; Lead Orchestrator was not launched.'
    foreach ($item in $invalid) { Write-Warning $item.Key }
    return
}

if ($LaunchLeadOrchestrator) {
    $additional = "Read '$handoff'. Verify commits and reports. Do not modify, merge, cherry-pick, or deploy. Return GO, CONDITIONAL GO, or NO-GO."
    $args = @{AgentKey='LeadOrchestrator';ConfigPath=$ConfigPath;AdditionalPrompt=$additional}
    if ($NonInteractiveLeadOrchestrator) { $args.NonInteractive = $true }
    & (Join-Path $PSScriptRoot 'Invoke-Wave2Agent.ps1') @args
}
