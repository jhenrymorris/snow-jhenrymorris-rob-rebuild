param(
    [string]$Repo = "C:\ServiceNow\hr-access-rob-authorization",
    [string]$Parent = "C:\ServiceNow"
)
$ErrorActionPreference = "Stop"
Set-Location $Repo
if ((git status --porcelain).Length -ne 0) {
    throw "The lead repository is not clean. Commit, stash, or remove changes first."
}
$branches = @(
    @{ Name = "agent/wave-2-snapshot-logic"; Dir = "rob-agent-snapshot-logic" },
    @{ Name = "agent/wave-2-snapshot-tests"; Dir = "rob-agent-snapshot-tests" },
    @{ Name = "agent/wave-2-security-review"; Dir = "rob-agent-security-review" },
    @{ Name = "agent/wave-2-hrsd-bridge"; Dir = "rob-agent-hrsd-bridge" },
    @{ Name = "agent/wave-2-documentation"; Dir = "rob-agent-documentation" }
)
foreach ($branch in $branches) {
    $target = Join-Path $Parent $branch.Dir
    if (Test-Path $target) { Write-Host "Skipping existing worktree: $target"; continue }
    git worktree add $target -b $branch.Name
    if ($LASTEXITCODE -ne 0) { throw "Failed to create worktree $target" }
}
git worktree list
