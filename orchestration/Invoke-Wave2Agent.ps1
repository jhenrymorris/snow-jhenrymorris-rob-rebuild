[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter(Mandatory)]
    [ValidateSet(
        'SnapshotTests',
        'SecurityReview',
        'HrsdBridge',
        'Documentation',
        'LeadOrchestrator'
    )]
    [string]$AgentKey,

    [string]$ConfigPath = (
        Join-Path $PSScriptRoot 'wave-2-config.psd1'
    ),

    [string]$AdditionalPrompt = '',

    [switch]$NonInteractive,

    [switch]$SkipCleanCheck
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Invoke-WorktreeGit {
    param(
        [Parameter(Mandatory)]
        [string]$Worktree,

        [Parameter(Mandatory)]
        [string[]]$Arguments
    )

    $output = @(
        & git -C $Worktree @Arguments 2>&1
    )

    if ($LASTEXITCODE -ne 0) {
        throw @"
Git command failed.

Worktree:
$Worktree

Command:
git $($Arguments -join ' ')

Output:
$($output -join [Environment]::NewLine)
"@
    }

    return $output
}

if (-not (Test-Path -LiteralPath $ConfigPath)) {
    throw "Controller configuration not found: $ConfigPath"
}

$config = Import-PowerShellDataFile `
    -LiteralPath $ConfigPath

if (-not $config.ContainsKey('Agents')) {
    throw 'The controller configuration does not contain Agents.'
}

if (-not $config.Agents.ContainsKey($AgentKey)) {
    throw "Unknown agent key: $AgentKey"
}

$agent = $config.Agents[$AgentKey]

foreach ($requiredProperty in @(
    'Name',
    'Worktree',
    'Branch',
    'PromptFile'
)) {
    if (
        -not $agent.ContainsKey($requiredProperty) -or
        [string]::IsNullOrWhiteSpace(
            $agent[$requiredProperty].ToString()
        )
    ) {
        throw "Agent '$AgentKey' is missing $requiredProperty."
    }
}

if (-not (Test-Path -LiteralPath $agent.Worktree)) {
    throw "Agent worktree not found: $($agent.Worktree)"
}

$branchOutput = @(
    Invoke-WorktreeGit `
        -Worktree $agent.Worktree `
        -Arguments @(
            'branch',
            '--show-current'
        )
)

$currentBranch = if ($branchOutput.Count -gt 0) {
    $branchOutput[0].ToString().Trim()
}
else {
    ''
}

if ($currentBranch -ne $agent.Branch) {
    throw (
        "Wrong branch for {0}. Expected '{1}', found '{2}'." -f
        $AgentKey,
        $agent.Branch,
        $currentBranch
    )
}

$statusLines = @(
    Invoke-WorktreeGit `
        -Worktree $agent.Worktree `
        -Arguments @(
            'status',
            '--porcelain'
        ) |
    Where-Object {
        $null -ne $_ -and
        $_.ToString().Trim().Length -gt 0
    }
)

if (
    -not $SkipCleanCheck -and
    $statusLines.Count -gt 0
) {
    throw @"
Agent worktree is not clean:

$($agent.Worktree)

Changes:
$($statusLines -join [Environment]::NewLine)
"@
}

$repositoryPromptPath = Join-Path `
    $config.Repository `
    $agent.PromptFile

if (-not (Test-Path -LiteralPath $repositoryPromptPath)) {
    throw "Agent prompt not found: $repositoryPromptPath"
}

$basePrompt = Get-Content `
    -LiteralPath $repositoryPromptPath `
    -Raw

$allowedPaths = @()

if ($agent.ContainsKey('AllowedPaths')) {
    $allowedPaths = @(
        $agent['AllowedPaths']
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
    $allowedPathText = '  - No file changes are authorized.'
}
else {
    $allowedPathText = (
        $allowedPaths |
        ForEach-Object {
            "  - $_"
        }
    ) -join [Environment]::NewLine
}

$reviewedCommit = $config.CandidateImplementation.Commit

if ($agent.ContainsKey('RequiredReviewedCommit')) {
    if (
        -not [string]::IsNullOrWhiteSpace(
            $agent.RequiredReviewedCommit.ToString()
        )
    ) {
        $reviewedCommit = $agent.RequiredReviewedCommit
    }
}

$commitCheck = @(
    Invoke-WorktreeGit `
        -Worktree $agent.Worktree `
        -Arguments @(
            'cat-file',
            '-e',
            "$reviewedCommit^{commit}"
        )
)

$executionContract = @"

---

## Controller execution contract

Wave:
$($config.Wave)

Agent:
$AgentKey

Assigned worktree:
$($agent.Worktree)

Assigned branch:
$($agent.Branch)

Candidate implementation commit:
$reviewedCommit

Before doing any work:

1. Confirm the current branch.
2. Confirm the worktree is clean.
3. Verify the candidate implementation commit.
4. Stop without making changes if any value differs.

Permanent restrictions:

- Work only in the assigned worktree and branch.
- Do not deploy.
- Do not modify ServiceNow records.
- Do not merge or cherry-pick unless explicitly authorized.
- Do not manually edit generated keys.
- Do not alter evidence from other agents.
- Do not claim runtime validation that has not occurred.

Authorized paths:

$allowedPathText

At completion, return these exact labels:

AGENT_STATUS:
BRANCH:
REVIEWED_IMPLEMENTATION_COMMIT:
RESULT_COMMIT:
DECISION:
BLOCKERS:
MERGE_READY:
REPORT_FILE:

---
"@

$completePrompt = (
    $basePrompt +
    $executionContract
)

if (-not [string]::IsNullOrWhiteSpace($AdditionalPrompt)) {
    $completePrompt += @"

## Additional controller instructions

$AdditionalPrompt
"@
}

$promptDirectory = Join-Path `
    $config.Repository `
    $config.PromptDirectory

$logDirectory = Join-Path `
    $config.Repository `
    $config.LogDirectory

New-Item `
    -ItemType Directory `
    -Path $promptDirectory `
    -Force |
Out-Null

New-Item `
    -ItemType Directory `
    -Path $logDirectory `
    -Force |
Out-Null

$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'

$promptPath = Join-Path `
    $promptDirectory `
    "$($agent.Name)-$timestamp.md"

$eventLogPath = Join-Path `
    $logDirectory `
    "$($agent.Name)-$timestamp.jsonl"

$finalResponsePath = Join-Path `
    $logDirectory `
    "$($agent.Name)-$timestamp-final.md"

$completePrompt | Set-Content `
    -LiteralPath $promptPath `
    -Encoding utf8

Write-Host ''
Write-Host "Agent: $AgentKey"
Write-Host "Worktree: $($agent.Worktree)"
Write-Host "Branch: $($agent.Branch)"
Write-Host "Reviewed commit: $reviewedCommit"
Write-Host "Prompt: $promptPath"

if (
    -not $PSCmdlet.ShouldProcess(
        $agent.Worktree,
        "Launch Codex for $AgentKey"
    )
) {
    Write-Host 'Dry run completed; Codex was not launched.'
    return
}

Push-Location $agent.Worktree

try {
    if ($NonInteractive) {
        $codexCommand = Get-Command `
            'codex' `
            -ErrorAction Stop

        $codexOutput = @(
            $completePrompt |
            & $codexCommand.Source `
                exec `
                --json `
                - `
                2>&1
        )

        $codexExitCode = $LASTEXITCODE

        $codexOutput | Set-Content `
            -LiteralPath $eventLogPath `
            -Encoding utf8

        if ($codexExitCode -ne 0) {
            throw (
                "Codex exited with code {0}. Log: {1}" -f
                $codexExitCode,
                $eventLogPath
            )
        }

        $finalTextLines = @(
            $codexOutput |
            ForEach-Object {
                $line = $_.ToString()

                try {
                    $event = $line | ConvertFrom-Json `
                        -ErrorAction Stop

                    if (
                        $event.type -eq 'item.completed' -and
                        $null -ne $event.item -and
                        $event.item.type -eq 'agent_message'
                    ) {
                        $event.item.text
                    }
                }
                catch {
                    # Preserve execution even if a line is not JSON.
                }
            } |
            Where-Object {
                $null -ne $_ -and
                $_.ToString().Trim().Length -gt 0
            }
        )

        if ($finalTextLines.Count -gt 0) {
            $finalTextLines | Set-Content `
                -LiteralPath $finalResponsePath `
                -Encoding utf8
        }

        Write-Host ''
        Write-Host 'Codex completed successfully.' `
            -ForegroundColor Green
        Write-Host "Event log: $eventLogPath"

        if (Test-Path -LiteralPath $finalResponsePath) {
            Write-Host "Final response: $finalResponsePath"
        }
    }
    else {
        Write-Host ''
        Write-Host 'Interactive Codex will now start.'
        Write-Host 'The complete prompt has been saved at:'
        Write-Host $promptPath
        Write-Host ''

        & codex
    }
}
finally {
    Pop-Location
}
