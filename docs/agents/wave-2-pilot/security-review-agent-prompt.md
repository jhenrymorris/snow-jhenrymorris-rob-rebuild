# Security Review Agent Prompt

Work only in `agent/wave-2-security-review`.

Review Snapshot Logic implementation commit:

587141467d49e9c7362fde36ffcc49ad3df88842

Inspect the commit and its changed files. Do not modify application code. Commit only security review documentation and report the resulting commit hash.

Review:
- requester identity resolution
- fields read from `sys_user`
- ACL and cross-scope implications
- delegated request and impersonation behavior
- exposure of title and manager snapshots
- missing-manager handling
- opened-for versus subject-person semantics

Allowed path: `docs/security/`.

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

Return ranked findings, required corrections, negative tests, and approve/reject recommendation.
