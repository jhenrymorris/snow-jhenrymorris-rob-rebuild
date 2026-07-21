[CmdletBinding()]
param(
    [Parameter(Mandatory)][hashtable]$Agent,
    [string]$ExpectedCommit,
    [switch]$AllowDirtyWorktree
)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
function Invoke-Git([string[]]$Arguments) {
    $out = & git -C $Agent.Worktree @Arguments 2>&1
    if ($LASTEXITCODE -ne 0) { throw "git $($Arguments -join ' ') failed:`n$out" }
    @($out)
}
$result = [ordered]@{ Name = $Agent.Name; Worktree = $Agent.Worktree; Branch = $null; HeadCommit = $null; WorktreeClean = $false; CommitMatches = $null; ChangedFiles = @(); AllowedPathCheck = 'NOT_RUN'; Violations = @(); Valid = $false; Errors = @() }
try {
    if (-not (Test-Path -LiteralPath $Agent.Worktree)) { throw "Missing worktree: $($Agent.Worktree)" }
    $result.Branch = (Invoke-Git @('branch', '--show-current') | Select-Object -First 1).Trim()
    $result.HeadCommit = (Invoke-Git @('rev-parse', 'HEAD') | Select-Object -First 1).Trim()
    $status = @(Invoke-Git @('status', '--porcelain'))
    $statusLines = @(
        $status |
        Where-Object { $_ -and $_.ToString().Trim() }
    )

    $result.WorktreeClean = ($statusLines.Count -eq 0)
    if (-not $result.WorktreeClean -and -not $AllowDirtyWorktree) { $result.Errors += 'Worktree is not clean.' }
    if ($result.Branch -ne $Agent.Branch) { $result.Errors += "Wrong branch: $($result.Branch)" }
    if ($ExpectedCommit) {
        $result.CommitMatches = ($result.HeadCommit -eq $ExpectedCommit)
        if (-not $result.CommitMatches) { $result.Errors += "HEAD does not match $ExpectedCommit" }
    }
    $result.ChangedFiles = @(Invoke-Git @('diff-tree', '--no-commit-id', '--name-only', '-r', $result.HeadCommit) | Where-Object { $_ -and $_.Trim() } | ForEach-Object { $_.Trim().Replace('\', '/') })
    if ($Agent.AllowedPaths.Count -eq 0) { $result.AllowedPathCheck = 'SKIPPED' }
    else {
        foreach ($file in $result.ChangedFiles) {
            $ok = $false
            foreach ($prefix in $Agent.AllowedPaths) { if ($file.StartsWith($prefix.Replace('\', '/'), [System.StringComparison]::OrdinalIgnoreCase)) { $ok = $true; break } }
            if (-not $ok) { $result.Violations += $file }
        }
        $result.AllowedPathCheck = if ($result.Violations.Count -eq 0) { 'PASSED' } else { 'FAILED' }
        if ($result.Violations.Count) { $result.Errors += "Prohibited paths: $($result.Violations -join ', ')" }
    }
    $result.Valid = ($result.Errors.Count -eq 0)
}
catch { $result.Errors += $_.Exception.Message; $result.Valid = $false }
[pscustomobject]$result

