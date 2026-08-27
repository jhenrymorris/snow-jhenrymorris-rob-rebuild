# M4 Runtime Evidence

## C2 fixed acceptance matrix

Target: `dev437065`  
Application: HR Access ROB Authorization V2  
Scope: `x_2166123_rob_auth`  
Platform: ServiceNow Australia Patch 3  
SDK: 4.11.0

C0 M4 certification is reused. Architecture changes and new capability
investigations are zero. Runtime evidence is kept separate from source, build,
install, and security evidence.

| Gate | Status | Runtime evidence |
|---|---|---|
| Systems-only | PASS | `HRC0001045` created exactly one Staffing task `HRT0001002` with the deterministic case/type business key. |
| Data/report-only | NOT RUN | |
| Mixed | NOT RUN | |
| WPC | NOT RUN | |
| Retry/idempotency | PASS | Replayed case update retained one Staffing task; duplicate count remained zero. |
| Missing OM Exception | NOT RUN | |
| Task completion evidence | NOT RUN | |
| Partial completion keeps case open | NOT RUN | |
| All required complete closes case | NOT RUN | |
| Access Detail activation | NOT RUN | |
| Waiver | NOT RUN | |
| External integrations = 0 | NOT RUN | |
| Least privilege | NOT RUN | |

## Pre-install evidence

- Full C2 source/PDI inventory completed before edits.
- Focused M4 suite: 31/31 PASS.
- Normal SDK 4.11.0 build and `git diff --check`: PASS.
- Expected generated keys: two new task-lifecycle Business Rule identities;
  no existing key mutation or deletion.
- Effective installs used: 0/2.

No acceptance gate is marked PASS until synthetic PDI evidence exists.

## Post-C0 supported-install blocker

The current Payroll and Workforce adapters are live and contain the approved
C2 post-filter correction. The supported final normal IDE Build and Install,
however, failed before applying any metadata. The Australia system log reports
`Could not find sys_plugins record for x_2166123_rob_auth`; plugin upgrade
histories `230596d483cf4f104f5193a6feaad301` and
`e2351a9883cf4f104f5193a6feaad3e8` both processed/applied zero changes.

Read-only identity checks prove:

- V2 `sys_app` and `sys_scope` record `4aba8657837a43104f5193a6feaad3c5`
  exists and remains active at version `0.0.4`;
- `sys_plugins.source = x_2166123_rob_auth` count is zero;
- no package rollback or effective final-install mutation occurred.

This disproves C0 capability `M5-12` (`PDI-PROVEN`) through the same normal IDE
Sync/Build/Install mechanism on the unchanged PDI. No direct bootstrap repair,
Reinstall, Force Install, local SDK install, or privilege expansion was used.
The remaining gates stay `NOT RUN`; C2 terminates `BLOCKED` under the explicit
post-C0 threshold.
