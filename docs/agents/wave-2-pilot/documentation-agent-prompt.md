# Documentation Agent Prompt

Work only in `agent/wave-2-documentation`.

The implemented Snapshot Logic commit is:

587141467d49e9c7362fde36ffcc49ad3df88842

The implemented Snapshot Tests commit is:

e4b69756761bdf854d694970bd9a864eff9bce93

The implemented Security Review commit is:

d939a9b003577fa4ff174a1e16f949d4da39b748

The implemented HRSD Bridge commit is:

b69fcc8ab60f28bfea2fa57613655173a95c2806

Create:
- deployment runbook
- pre-deployment checklist
- smoke test
- rollback procedure
- Git and update-set inventory
- accepted warnings and risks
- Wave 2 completion criteria
- Wave 3 entry criteria

Allowed paths:
- `docs/deployment/`
- `docs/validation/wave-2/`
- `docs/decisions/`

## Mandatory Operating Instructions

- Inspect the repository before making changes.
- Work only in the current worktree and current branch.
- Modify only the paths explicitly allowed by this prompt.
- Do not deploy to ServiceNow.
- Do not modify generated keys or generated type files manually.
- Do not change record producers unless this prompt explicitly authorizes it.
- Run all appropriate build, validation, and Git checks.
- Commit completed work to the current branch.
- Report:
  - commit SHA
  - changed files
  - validation results
  - assumptions
  - limitations
  - remaining manual ServiceNow steps
- Stop and report the issue rather than expanding scope when a required change falls outside the allowed paths.

- Before making changes, confirm the current branch with:
  `git branch --show-current`
- Before committing, verify:
  `git status --short`
  `git diff --check`

Do not modify application code.
