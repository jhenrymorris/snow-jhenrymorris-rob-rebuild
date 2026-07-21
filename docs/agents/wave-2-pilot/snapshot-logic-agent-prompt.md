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

## Output
Commit the branch and report changed files, requester-field resolution, insert timing, tests, and limitations.
