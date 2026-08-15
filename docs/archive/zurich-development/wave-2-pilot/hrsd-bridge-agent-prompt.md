# HRSD Bridge Agent Prompt

Work only in `agent/wave-2-hrsd-bridge`.

The implemented Snapshot Logic commit is:

587141467d49e9c7362fde36ffcc49ad3df88842

Evaluate how this implementation interacts with the native Payroll and Workforce Administration HR cases. Do not deploy or modify application code unless the existing prompt explicitly permits a narrowly scoped artifact. Commit all documentation or scripts and report the resulting commit hash.

Document native HRSD touchpoints:
- record producers and target tables
- HR Service linkage and templates
- opened-for and subject-person semantics
- assignment behavior
- form layout requirements
- update-set ownership and rollback
- whether producer scripts can be simplified after the snapshot rule is installed

Allowed paths:
- `docs/hrsd-bridge/`
- `scripts/hrsd-bridge/`

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

Provide exact manual steps only where SDK coverage is unavailable or unsafe.
