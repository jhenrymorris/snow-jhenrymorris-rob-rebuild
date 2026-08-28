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
| Data/report-only | PASS | A deterministic Analytics-only fixture created exactly one Analytics task and no Staffing, OM, or Exception task. |
| Mixed | PASS | `HRC0001049` created exactly one Staffing task (`HRT0001004`) and one Analytics task (`HRT0001005`). |
| WPC | PASS | `HRC0001050` created exactly one Analytics task (`HRT0001006`) and one Operations Manager ARM task (`HRT0001007`) with ARM/OAS metadata. |
| Retry/idempotency | PASS | Replayed case update retained one Staffing task; duplicate count remained zero. |
| Missing OM Exception | PASS | The missing-OM WPC fixture created one Exception Review task (`HRT0001009`), no OM task, retained the Analytics task, and remained blocked. |
| Task completion evidence | PASS | Invalid/incomplete completion was rejected; accepted Staffing and Analytics completions retained the required parent, type, assignment, terminal outcome, timestamp, close notes, evidence, and business key. |
| Partial completion keeps case open | PASS | Closing only `HRT0001004` left the sibling task open, the parent open, and unsatisfied scope non-Active. |
| All required complete closes case | NOT RUN | The final governed bridge replay did not close an otherwise eligible case. See the final runtime stop below. |
| Access Detail activation | NOT RUN | The final governed bridge replay did not activate the matching pending detail. See the final runtime stop below. |
| Waiver | NOT RUN | `HRT0001003` retained complete authorized waiver evidence, but its matching detail and parent did not reconcile. |
| External integrations = 0 | PASS | Static and runtime review found zero ARM, OAS, FPPS/WTTS, eOPF, USA Staffing, or other outbound provisioning calls. |
| Least privilege | PASS | Broad GlideRecord/native case/native task privileges, unexpected RCAs, and temporary test memberships are zero; custom business tables remain four. |

## Pre-install evidence

- Full C2 source/PDI inventory completed before edits.
- Focused M4 suite: 31/31 PASS.
- Normal SDK 4.11.0 build and `git diff --check`: PASS.
- Expected generated keys: two new task-lifecycle Business Rule identities;
  no existing key mutation or deletion.
- Effective installs used: 0/2.

No acceptance gate is marked PASS until synthetic PDI evidence exists.

## Final resumed-C2 runtime stop

- Accepted gates are preserved at `10/13`; the three remaining gates remain
  `NOT RUN`, not failed.
- The authorized exceptional normal IDE install applied commit `481c6cb` and
  live verification confirmed the V2 reconciliation Business Rule contains
  the normalized parent, authorization, and access-item identifiers.
- A same-architecture review found two literal two-argument
  `addQuery(field, 'ISNOTEMPTY')` calls in the manually governed HR Core
  bridge. They were corrected through the supported Script Include editor to
  `addNotNullQuery(field)` and recorded in the reviewed manual source; focused
  M4 tests remain `34/34` PASS.
- The exact V2 reconciliation caller RCA to
  `sn_hr_core.RobHrFulfillmentBridgeV2` remains approved. Waiver task
  `HRT0001003` was then recommitted in native state `3` with matching
  Authorization/access item, completion timestamp, close notes, evidence,
  authorized waiver reason, actor, and timestamp.
- Actual Australia runtime result: matching detail `ROBD0001028` remained
  `pending_fulfillment` and case `HRC0001048` remained open. No direct detail
  or case write, privilege expansion, extra install, or alternate architecture
  was used.
- Final classification: the C0 `M4-02` supported-with-constraint bridge path
  did not deliver its certified detail-reconciliation/case-closure result under
  equivalent governed preconditions after the final authorized correction.
  C2 stops `BLOCKED`; no additional C2 remediation loop is opened.

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
