# Wave 2 Minimal Controller v2

This replacement removes scalar `.Count` failures, validates all PowerShell files, validates the complete baseline-to-candidate implementation range, and supports a fully automated non-interactive Lead Orchestrator launch.

## Self-test

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\orchestration\Test-Orchestration.ps1
```

Required result: `Passed : True`.

## Generate handoff only

```powershell
.\orchestration\Start-Wave2Review.ps1 `
  -SnapshotTestCommit '0a66301c4186d2d22f2a3975b01ca3fcf026be59' `
  -SnapshotTestSummary '44 tests; 44 passed; 0 failed; source/mock validation only; PDI runtime validation remains required' `
  -SnapshotTestReport 'docs/validation/wave-2/requester-profile-snapshots.md' `
  -SecurityReviewCommit '94c457ad79150d741749644d4e43f0725629ccb3' `
  -SecurityDecision 'REJECT' `
  -SecurityReport 'docs/security/wave-2-requester-profile-security-second-review.md'
```

## Launch Lead Orchestrator non-interactively

Add both switches:

```powershell
-LaunchLeadOrchestrator -NonInteractiveLeadOrchestrator
```

The launcher uses `codex exec - --json --output-last-message ...`, with the complete prompt supplied on stdin.
