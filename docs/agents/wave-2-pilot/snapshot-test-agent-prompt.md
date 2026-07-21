# Snapshot Test Agent Prompt

Work only in `agent/wave-2-snapshot-tests`.

The Snapshot Logic implementation commit is:

587141467d49e9c7362fde36ffcc49ad3df88842

Cherry-pick this commit into the Snapshot Test branch before creating or running tests.

Do not deploy. Commit all approved test artifacts and report the resulting commit hash.

Create repeatable tests for:
1. Staffing requester with title and manager.
2. Staffing requester with no manager.
3. Analytics requester with title and manager.
4. Analytics requester with no manager.
5. Existing snapshot values are preserved.
6. Existing mappings remain intact: HR service, short description, description, employment type, end date, requested items, Operations Manager, and assignment group.

Allowed paths:
- `docs/validation/wave-2/`
- `scripts/validation/`
- `src/fluent/tests/` if supported

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

Do not deploy.
