[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [hashtable]$Agent,

    [string]$ExpectedCommit,

    [string]$BaselineCommit,

    [switch]$AllowDirtyWorktree
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Invoke-Git {
    param([string[]]$Arguments)

    $output = @(& git -C $Agent.Worktree @Arguments 2>&1)

    if ($LASTEXITCODE -ne 0) {
        throw "git $($Arguments -join ' ') failed in $($Agent.Worktree):`n$($output -join "`n")"
    }

    return $output
}

$result = [ordered]@{
    Name             = $Agent.Name
    Worktree         = $Agent.Worktree
    ExpectedBranch   = $Agent.Branch
    Branch           = $null
    HeadCommit       = $null
    BaselineCommit   = $BaselineCommit
    WorktreeClean    = $false
    CommitMatches    = $null
    ChangedFiles     = @()
    AllowedPathCheck = 'NOT_RUN'
    Violations       = @()
    Valid            = $false
    Errors           = @()
}

try {
    if (-not (Test-Path -LiteralPath $Agent.Worktree)) {
        throw "Worktree does not exist: $($Agent.Worktree)"
    }

    $result.Branch = (
        Invoke-Git @('branch', '--show-current') |
        Select-Object -First 1
    ).ToString().Trim()

    $result.HeadCommit = (
        Invoke-Git @('rev-parse', 'HEAD') |
        Select-Object -First 1
    ).ToString().Trim()

    $statusLines = @(
        Invoke-Git @('status', '--porcelain') |
        Where-Object {
            $_ -and $_.ToString().Trim()
        }
    )

    $result.WorktreeClean = ($statusLines.Count -eq 0)

    if (-not $result.WorktreeClean -and -not $AllowDirtyWorktree) {
        $result.Errors += 'Worktree is not clean.'
    }

    if ($result.Branch -ne $Agent.Branch) {
        $result.Errors += "Wrong branch. Expected '$($Agent.Branch)' but found '$($result.Branch)'."
    }

    if ($ExpectedCommit) {
        $result.CommitMatches = ($result.HeadCommit -eq $ExpectedCommit)

        if (-not $result.CommitMatches) {
            $result.Errors += "HEAD does not match expected commit $ExpectedCommit."
        }
    }

    if ($BaselineCommit) {
        Invoke-Git @('cat-file', '-e', "$BaselineCommit^{commit}") | Out-Null

        $changed = Invoke-Git @(
            'diff',
            '--name-only',
            "$BaselineCommit..$($result.HeadCommit)"
        )
    }
    else {
        $changed = Invoke-Git @(
            'diff-tree',
            '--no-commit-id',
            '--name-only',
            '-r',
            $result.HeadCommit
        )
    }

    $result.ChangedFiles = @(
        $changed |
        Where-Object {
            $_ -and $_.ToString().Trim()
        } |
        ForEach-Object {
            $_.ToString().Trim().Replace('\', '/')
        }
    )

    $allowedPaths = @()

    if ($Agent.ContainsKey('AllowedPaths')) {
        $allowedPaths = @($Agent.AllowedPaths)
    }

    if ($allowedPaths.Count -eq 0) {
        $result.AllowedPathCheck = 'SKIPPED'
    }
    else {
        foreach ($file in $result.ChangedFiles) {
            $allowed = $false

            foreach ($prefix in $allowedPaths) {
                $normalizedPrefix = $prefix.ToString().Replace('\', '/')

                if ($file.StartsWith(
                    $normalizedPrefix,
                    [System.StringComparison]::OrdinalIgnoreCase
                )) {
                    $allowed = $true
                    break
                }
            }

            if (-not $allowed) {
                $result.Violations += $file
            }
        }

        if ($result.Violations.Count -eq 0) {
            $result.AllowedPathCheck = 'PASSED'
        }
        else {
            $result.AllowedPathCheck = 'FAILED'
            $result.Errors += "Prohibited paths changed: $($result.Violations -join ', ')"
        }
    }

    $result.Valid = ($result.Errors.Count -eq 0)
}
catch {
    $result.Errors += $_.Exception.Message
    $result.Valid = $false
}

[pscustomobject]$result
