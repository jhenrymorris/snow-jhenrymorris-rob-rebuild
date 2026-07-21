[CmdletBinding()]
param(
 [string]$ConfigPath=(Join-Path $PSScriptRoot 'wave-2-config.psd1'),
 [string]$SnapshotTestCommit,[string]$SecurityReviewCommit,[string]$DocumentationCommit,
 [string]$SnapshotTestSummary='',[string]$SecurityDecision='',[string]$SnapshotTestReport='',[string]$SecurityReport='',[string]$DocumentationReport='',
 [switch]$LaunchLeadOrchestrator
)
Set-StrictMode -Version Latest;$ErrorActionPreference='Stop'
$config=Import-PowerShellDataFile $ConfigPath;$repo=$config.Repository
function Test-Commit([string]$c){if(-not$c){return$false};& git -C $repo cat-file -e "$c^{commit}" 2>$null;return($LASTEXITCODE-eq0)}
function Validate([hashtable]$agent,[string]$commit){$raw=& (Join-Path $PSScriptRoot 'Test-AgentResult.ps1') -Agent $agent -ExpectedCommit $commit;@{WorktreeClean=$raw.WorktreeClean;BranchVerified=($raw.Branch-eq$agent.Branch);CommitVerified=$raw.CommitMatches;AllowedPathCheck=$raw.AllowedPathCheck;Violations=@($raw.Violations);Validated=$raw.Valid}}
$results=@{}
if($SnapshotTestCommit){if(-not(Test-Commit $SnapshotTestCommit)){throw "Bad test commit"};$v=Validate $config.Agents.SnapshotTests $SnapshotTestCommit;$results.SnapshotTests=$v+@{Branch=$config.Agents.SnapshotTests.Branch;Commit=$SnapshotTestCommit;Summary=$SnapshotTestSummary;ReportFile=$SnapshotTestReport}}
if($SecurityReviewCommit){if(-not(Test-Commit $SecurityReviewCommit)){throw "Bad security commit"};$v=Validate $config.Agents.SecurityReview $SecurityReviewCommit;$results.SecurityReview=$v+@{Branch=$config.Agents.SecurityReview.Branch;Commit=$SecurityReviewCommit;Decision=$SecurityDecision;ReportFile=$SecurityReport}}
$h=$config.Agents.HrsdBridge.ExistingResultCommit;if($h){$v=Validate $config.Agents.HrsdBridge $h;$results.HrsdBridge=$v+@{Branch=$config.Agents.HrsdBridge.Branch;Commit=$h;Summary='Existing correction reassessment';ReportFile='docs/hrsd-bridge/wave-2-hrsd-bridge-correction-reassessment.md'}}
if($DocumentationCommit){if(-not(Test-Commit $DocumentationCommit)){throw "Bad documentation commit"};$v=Validate $config.Agents.Documentation $DocumentationCommit;$results.Documentation=$v+@{Branch=$config.Agents.Documentation.Branch;Commit=$DocumentationCommit;Summary='Correction-cycle documentation';ReportFile=$DocumentationReport}}
$handoff=Join-Path $repo "$($config.OutputDirectory)\wave-2-handoff.md";& (Join-Path $PSScriptRoot 'New-OrchestratorHandoff.ps1') -ConfigPath $ConfigPath -Results $results -OutputPath $handoff|Out-Null
Write-Host "Handoff: $handoff";$invalid=@($results.GetEnumerator()|Where-Object{-not$_.Value.Validated});if($invalid.Count){Write-Warning 'Validation failed; do not launch lead orchestrator.';return}
if($LaunchLeadOrchestrator){$add="Read $handoff. Verify commits and reports. Do not modify, merge, cherry-pick, or deploy. Return GO, CONDITIONAL GO, or NO-GO.";& (Join-Path $PSScriptRoot 'Invoke-Wave2Agent.ps1') -AgentKey LeadOrchestrator -ConfigPath $ConfigPath -AdditionalPrompt $add}
