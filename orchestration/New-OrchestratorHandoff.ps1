[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$ConfigPath,
    [Parameter(Mandatory)][hashtable]$Results,
    [string]$OutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$config = Import-PowerShellDataFile -LiteralPath $ConfigPath
$repo = $config.Repository
if (-not $OutputPath) { $OutputPath = Join-Path $repo "$($config.OutputDirectory)\wave-2-handoff.md" }
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $OutputPath) | Out-Null

function Escape-Cell([object]$Value) {
    if ($null -eq $Value) { return '' }
    return ([string]$Value).Replace('|','\|').Replace("`r",' ').Replace("`n",' ')
}

$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add('# Wave 2 Lead Orchestrator Handoff')
$lines.Add('')
$lines.Add("Generated: $(Get-Date -Format o)")
$lines.Add('')
$lines.Add('## Candidate Implementation')
$lines.Add('')
$lines.Add("Branch: $($config.CandidateImplementation.Branch)")
$lines.Add("Commit: $($config.CandidateImplementation.Commit)")
$lines.Add("Baseline: $($config.BaselineCommit)")
$lines.Add('')
$lines.Add('## Agent Results')
$lines.Add('')
$lines.Add('| Agent | Branch | Commit | Validated | Decision/Result | Report |')
$lines.Add('|---|---|---|---:|---|---|')
foreach ($key in @('SnapshotTests','SecurityReview','HrsdBridge','Documentation')) {
    if (-not $Results.ContainsKey($key)) { continue }
    $r = $Results[$key]
    $decision = if ($r.ContainsKey('Decision')) { $r.Decision } elseif ($r.ContainsKey('Summary')) { $r.Summary } else { '' }
    $report = if ($r.ContainsKey('ReportFile')) { $r.ReportFile } else { '' }
    $lines.Add("| $(Escape-Cell $key) | $(Escape-Cell $r.Branch) | $(Escape-Cell $r.Commit) | $(Escape-Cell $r.Validated) | $(Escape-Cell $decision) | $(Escape-Cell $report) |")
}
$lines.Add('')
$lines.Add('## Controller Validation')
$lines.Add('')
foreach ($key in @($Results.Keys | Sort-Object)) {
    $r = $Results[$key]
    $lines.Add("### $key")
    $lines.Add('')
    $lines.Add("- Worktree clean: $($r.WorktreeClean)")
    $lines.Add("- Branch verified: $($r.BranchVerified)")
    $lines.Add("- Commit verified: $($r.CommitVerified)")
    $lines.Add("- Allowed-path validation: $($r.AllowedPathCheck)")
    if ($r.ContainsKey('Violations') -and @($r.Violations).Count -gt 0) { $lines.Add("- Violations: $($r.Violations -join ', ')") }
    $lines.Add('')
}
$lines.Add('## Required Lead Orchestrator Actions')
$lines.Add('')
$lines.Add('1. Verify all commits and reports directly from Git.')
$lines.Add('2. Confirm every review evaluated the candidate implementation.')
$lines.Add('3. Identify contradictions and blockers.')
$lines.Add('4. Classify implementation versus evidence-only commits.')
$lines.Add('5. Return GO, CONDITIONAL GO, or NO-GO.')
$lines.Add('')
$lines.Add('No merge, cherry-pick, deployment, or ServiceNow record change was performed by the controller.')
$lines | Set-Content -LiteralPath $OutputPath -Encoding utf8
Get-Item -LiteralPath $OutputPath
