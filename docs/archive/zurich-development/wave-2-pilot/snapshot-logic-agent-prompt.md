# Snapshot Logic Agent Prompt

Work only in the `agent/wave-2-snapshot-logic` worktree.

## Objective
Implement server-side logic that populates requester profile snapshot fields on:
- `sn_hr_core_case_payroll`
- `sn_hr_core_case_workforce_admin`

Target fields:
- `x_2108496_hr_acces_position_title`
- `x_2108496_hr_acces_supervisor_snapshot`

Resolve the requester using the correct HRSD field after inspecting generated types and existing code.

## Requirements
- Prefer one reusable server module plus thin table-specific Business Rules if required.
- Use before insert unless platform behavior requires otherwise; explain the choice.
- Do not block insert when requester title or manager is missing.
- Do not overwrite explicit values.
- Avoid recursive updates.
- Do not edit record producers unless essential.
- Do not modify generated keys.
- Do not deploy.

## Allowed paths
- `src/fluent/server/`
- `src/fluent/business-rules/`
- `src/fluent/tables/` only for a narrowly scoped metadata adjustment

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

## Output
Commit the branch and report changed files, requester-field resolution, insert timing, tests, and limitations.
