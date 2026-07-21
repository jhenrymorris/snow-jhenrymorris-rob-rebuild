[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter(Mandatory)][ValidateSet('SnapshotTests','SecurityReview','Documentation','LeadOrchestrator')][string]$AgentKey,
    [string]$ConfigPath=(Join-Path $PSScriptRoot 'wave-2-config.psd1'),
    [string]$AdditionalPrompt,
    [switch]$NonInteractive,
    [switch]$SkipCleanCheck
)
Set-StrictMode -Version Latest
$ErrorActionPreference='Stop'
$config=Import-PowerShellDataFile $ConfigPath; $agent=$config.Agents[$AgentKey]
if(-not $agent){throw "Unknown agent: $AgentKey"}
if(-not (Test-Path $agent.Worktree)){throw "Missing worktree: $($agent.Worktree)"}
$branch=(& git -C $agent.Worktree branch --show-current).Trim(); if($branch -ne $agent.Branch){throw "Expected $($agent.Branch), found $branch"}
$status=@(& git -C $agent.Worktree status --porcelain); if(-not $SkipCleanCheck -and ($status|Where-Object{$_.Trim()}).Count){throw "Dirty worktree: $($agent.Worktree)"}
$repoPrompt=Join-Path $config.Repository $agent.PromptFile; if(-not(Test-Path $repoPrompt)){throw "Missing prompt: $repoPrompt"}
$reviewed=if($agent.ContainsKey('RequiredReviewedCommit')){$agent.RequiredReviewedCommit}else{$config.CandidateImplementation.Commit}
$allowed=(@($agent.AllowedPaths)|ForEach-Object{"  - $_"}) -join "`n"
$full=(Get-Content $repoPrompt -Raw)+@"

---
CONTROLLER INPUT
Wave: $($config.Wave)
Assigned worktree: $($agent.Worktree)
Assigned branch: $($agent.Branch)
Candidate implementation commit: $reviewed

Before starting, verify branch, clean status, and commit. Stop without changes on mismatch.
Rules:
- Work only in the assigned worktree and branch.
- Do not merge, cherry-pick, deploy, or modify ServiceNow records.
- Do not manually edit generated keys.
- Change only:
$allowed
- Commit completed work and leave the worktree clean.
- End with: AGENT_STATUS, BRANCH, REVIEWED_IMPLEMENTATION_COMMIT, RESULT_COMMIT, DECISION, BLOCKERS, MERGE_READY, REPORT_FILE.
---
"@
if($AdditionalPrompt){$full+="`n`nADDITIONAL TASK INSTRUCTIONS`n$AdditionalPrompt"}
$promptDir=Join-Path $config.Repository $config.PromptDirectory; $logDir=Join-Path $config.Repository $config.LogDirectory
New-Item -ItemType Directory -Force -Path $promptDir,$logDir|Out-Null
$ts=Get-Date -Format 'yyyyMMdd-HHmmss'; $promptPath=Join-Path $promptDir "$($agent.Name)-$ts.md"; $logPath=Join-Path $logDir "$($agent.Name)-$ts.jsonl"
$full|Set-Content $promptPath -Encoding utf8
Write-Host "Prompt: $promptPath"
if(-not $PSCmdlet.ShouldProcess($agent.Worktree,"Launch $AgentKey")){return}
if($NonInteractive){Push-Location $agent.Worktree;try{& codex exec --json (Get-Content $promptPath -Raw) 2>&1|Tee-Object -FilePath $logPath;$ec=$LASTEXITCODE}finally{Pop-Location};if($ec -ne 0){throw "Codex failed: $ec"};Write-Host "Log: $logPath"}
else{Write-Host "Starting interactive Codex. Prompt file: $promptPath";Push-Location $agent.Worktree;try{& codex}finally{Pop-Location}}
