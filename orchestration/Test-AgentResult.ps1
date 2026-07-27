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

function Invoke-AgentGit {
    param(
        [Parameter(Mandatory)]
        [string[]]$Arguments
    )

    $output = @(
        & git -C $Agent.Worktree @Arguments 2>&1
    )

    if ($LASTEXITCODE -ne 0) {
        throw @"
Git command failed.

Worktree:
$($Agent.Worktree)

Command:
git $($Arguments -join ' ')

Output:
$($output -join [Environment]::NewLine)
"@
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

    $branchOutput = @(
        Invoke-AgentGit -Arguments @(
            'branch',
            '--show-current'
        )
    )

    $result.Branch = if ($branchOutput.Count -gt 0) {
        $branchOutput[0].ToString().Trim()
    }
    else {
        ''
    }

    $headOutput = @(
        Invoke-AgentGit -Arguments @(
            'rev-parse',
            'HEAD'
        )
    )

    $result.HeadCommit = if ($headOutput.Count -gt 0) {
        $headOutput[0].ToString().Trim()
    }
    else {
        ''
    }

    $statusLines = @(
        Invoke-AgentGit -Arguments @(
            'status',
            '--porcelain'
        ) |
        Where-Object {
            $_ -and $_.ToString().Trim().Length -gt 0
        }
    )

    $result.WorktreeClean = ($statusLines.Count -eq 0)

    if (
        -not $result.WorktreeClean -and
        -not $AllowDirtyWorktree
    ) {
        $result.Errors += 'Worktree is not clean.'
    }

    if ($result.Branch -ne $Agent.Branch) {
        $result.Errors += (
            "Wrong branch. Expected '{0}' but found '{1}'." -f
            $Agent.Branch,
            $result.Branch
        )
    }

    if ($ExpectedCommit) {
        $result.CommitMatches = (
            $result.HeadCommit -eq $ExpectedCommit
        )

        if (-not $result.CommitMatches) {
            $result.Errors += (
                "HEAD does not match expected commit {0}." -f
                $ExpectedCommit
            )
        }
    }

    if ($BaselineCommit) {
        Invoke-AgentGit -Arguments @(
            'cat-file',
            '-e',
            "$BaselineCommit^{commit}"
        ) | Out-Null

        $changedOutput = @(
            Invoke-AgentGit -Arguments @(
                'diff',
                '--name-only',
                "$BaselineCommit..$($result.HeadCommit)"
            )
        )
    }
    else {
        $changedOutput = @(
            Invoke-AgentGit -Arguments @(
                'diff-tree',
                '--no-commit-id',
                '--name-only',
                '-r',
                $result.HeadCommit
            )
        )
    }

    $result.ChangedFiles = @(
        $changedOutput |
        Where-Object {
            $_ -and $_.ToString().Trim().Length -gt 0
        } |
        ForEach-Object {
            $_.ToString().Trim().Replace('\', '/')
        }
    )

    $allowedPaths = @()

    if ($Agent.ContainsKey('AllowedPaths')) {
        $allowedPaths = @(
            $Agent['AllowedPaths']
        ) |
        Where-Object {
            $null -ne $_ -and
            $_.ToString().Trim().Length -gt 0
        } |
        ForEach-Object {
            $_.ToString().Trim().Replace('\', '/')
        }

        $allowedPaths = @($allowedPaths)
    }

    if ($allowedPaths.Count -eq 0) {
        $result.AllowedPathCheck = 'SKIPPED'
    }
    else {
        $violations = @()

        foreach ($file in @($result.ChangedFiles)) {
            $pathIsAllowed = $false

            foreach ($allowedPrefix in $allowedPaths) {
                if (
                    $file.StartsWith(
                        $allowedPrefix,
                        [System.StringComparison]::OrdinalIgnoreCase
                    )
                ) {
                    $pathIsAllowed = $true
                    break
                }
            }

            if (-not $pathIsAllowed) {
                $violations += $file
            }
        }

        $result.Violations = @($violations)

        if (@($result.Violations).Count -eq 0) {
            $result.AllowedPathCheck = 'PASSED'
        }
        else {
            $result.AllowedPathCheck = 'FAILED'
            $result.Errors += (
                'Prohibited paths changed: {0}' -f
                (@($result.Violations) -join ', ')
            )
        }
    }

    $result.Errors = @($result.Errors)
    $result.Valid = ($result.Errors.Count -eq 0)
}
catch {
    $result.Errors = @(
        @($result.Errors)
        $_.Exception.Message
    )

    $result.Valid = $false
}

[pscustomobject]$result
