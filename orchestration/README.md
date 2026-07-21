# Wave 2 Minimal Controller

Version 1 only verifies worktrees/commits, composes prompts, optionally launches agents, validates allowed paths, and generates a lead-orchestrator handoff.

It does not create/delete branches, merge, cherry-pick, deploy, modify ServiceNow records, or retry agents automatically.

## Dry run

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
$config = Import-PowerShellDataFile .\orchestration\wave-2-config.psd1
.\orchestration\Test-AgentResult.ps1 -Agent $config.Agents.HrsdBridge -ExpectedCommit cfd428dd3791f48724d0e1b1e17a273dab4b2f79
```

## Generate handoff

```powershell
.\orchestration\Start-Wave2Review.ps1 `
  -SnapshotTestCommit '<HASH>' `
  -SnapshotTestSummary '44 tests; 44 passed; 0 failed' `
  -SnapshotTestReport 'docs/validation/wave-2/requester-profile-snapshots.md' `
  -SecurityReviewCommit '<HASH>' `
  -SecurityDecision 'REJECT' `
  -SecurityReport 'docs/security/<REPORT>.md'
```
