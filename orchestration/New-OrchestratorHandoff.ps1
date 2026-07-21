[CmdletBinding()]
param([Parameter(Mandatory)][string]$ConfigPath,[Parameter(Mandatory)][hashtable]$Results,[string]$OutputPath)
Set-StrictMode -Version Latest
$ErrorActionPreference='Stop'
$config=Import-PowerShellDataFile $ConfigPath
$repo=$config.Repository
if (-not $OutputPath) { $OutputPath=Join-Path $repo "$($config.OutputDirectory)\wave-2-handoff.md" }
New-Item -ItemType Directory -Force -Path (Split-Path $OutputPath -Parent) | Out-Null
$lines=[System.Collections.Generic.List[string]]::new()
$lines.Add('# Wave 2 Lead Orchestrator Handoff'); $lines.Add(''); $lines.Add("Generated: $(Get-Date -Format o)"); $lines.Add('')
$lines.Add('## Candidate Implementation'); $lines.Add(''); $lines.Add("Branch: $($config.CandidateImplementation.Branch)"); $lines.Add("Commit: $($config.CandidateImplementation.Commit)"); $lines.Add('')
$lines.Add('## Agent Results'); $lines.Add(''); $lines.Add('| Agent | Branch | Commit | Validated | Decision/Result | Report |'); $lines.Add('|---|---|---|---:|---|---|')
foreach($key in @('SnapshotTests','SecurityReview','HrsdBridge','Documentation')) {
    if(-not $Results.ContainsKey($key)){continue}; $r=$Results[$key]
    $decision=if($r.ContainsKey('Decision')){$r.Decision}elseif($r.ContainsKey('Summary')){$r.Summary}else{''}
    $report=if($r.ContainsKey('ReportFile')){$r.ReportFile}else{''}
    $lines.Add("| $key | $($r.Branch) | $($r.Commit) | $($r.Validated) | $decision | $report |")
}
$lines.Add(''); $lines.Add('## Controller Validation'); $lines.Add('')
foreach($key in $Results.Keys){$r=$Results[$key];$lines.Add("### $key");$lines.Add('');$lines.Add("- Worktree clean: $($r.WorktreeClean)");$lines.Add("- Branch verified: $($r.BranchVerified)");$lines.Add("- Commit verified: $($r.CommitVerified)");$lines.Add("- Allowed-path validation: $($r.AllowedPathCheck)");$lines.Add('')}
$lines.Add('## Required Lead Orchestrator Actions');$lines.Add('');$lines.Add('1. Verify all commits and reports directly from Git.');$lines.Add('2. Confirm every review evaluated the candidate implementation.');$lines.Add('3. Identify contradictions and blockers.');$lines.Add('4. Classify implementation versus evidence-only commits.');$lines.Add('5. Return GO, CONDITIONAL GO, or NO-GO.');$lines.Add('');$lines.Add('No merge, cherry-pick, deployment, or ServiceNow record change was performed by the controller.')
$lines | Set-Content -Path $OutputPath -Encoding utf8
Get-Item $OutputPath
