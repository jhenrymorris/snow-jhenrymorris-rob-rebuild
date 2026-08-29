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
| All required complete closes case | PASS | Eligible Mixed case `HRC0001049` closed through `sn_hr_core.RobHrFulfillmentBridgeV2` after both required Details became Active; native state `3`, inactive, close timestamp, and governed close notes persisted. |
| Access Detail activation | PASS | Native subflow `ROB Activate Fulfilled Access Detail Native` activated matching waiver Detail `ROBD0001028` and the two eligible Mixed Details `ROBD0001036`/`ROBD0001037`; unrelated Details were not changed. |
| Waiver | PASS | `HRT0001003` retained the authorized actor, reason, timestamp, close notes, and completion evidence while its exact matching Detail `ROBD0001028` became Active. |
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

## C2 final superseding closeout — 2026-08-28

- C2 runtime acceptance is **13/13 PASS**. This section supersedes the earlier
  implementation stops without rewriting their historical evidence.
- The production reconciliation rule invokes published native subflow
  `ROB Activate Fulfilled Access Detail Native`
  (`da2e07ac838743504f5193a6feaad339`) synchronously with the already-matched
  Authorized Access Detail. Its native Update Record action changes only
  `status` to `active`; the caller rereads the record and fails closed unless
  the committed state is Active.
- Gate 10: governed replay of `HRT0001003` changed only matching
  `ROBD0001028` from `pending_fulfillment` to `active` at
  `2026-08-28 21:00:47`.
- Gate 11: the same replay retained the complete authorized waiver actor,
  reason, timestamp, close notes, completion evidence, and terminal task state.
- Gate 9: the waiver fixture was correctly ineligible for parent close because
  its Authorization also contained two unsatisfied Staffing Details. The
  eligible Mixed fixture was therefore used. Replaying `HRT0001005` activated
  `ROBD0001036` and `ROBD0001037`; the existing HR Core bridge completed the
  native HRSD acceptance lifecycle and closed `HRC0001049` at
  `2026-08-28 21:08:53` with state `3`, `active=false`, and governed close
  notes.
- The HR Core bridge close method now uses same-scope `setValue` for the native
  state and close-notes fields and verifies the committed terminal state. Task
  eligibility, waiver semantics, routing, and case-close ordering are
  unchanged.
- Final regression: M2 `19/19`, R1 `9/9`, Security `22/22`, Deployment
  `16/16`, R3 `30/30`, R3 adapter `13/13`, R4 `64/64`, M4 `34/34`, and split
  template validator `7/7` PASS. Normal and frozen-key SDK 4.11.0 builds and
  `git diff --check` PASS; unexpected generated-key changes `0`.
- Final security/count evidence: broad GlideRecord/native-case/native-task
  privileges `0`; unexpected RCA additions `0`; custom business tables `4`;
  custom fulfillment tables `0`; external provisioning integrations `0`.

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

## C2-T final reconciliation execution trace

- Trace timestamp: `2026-08-28`; checkpoint:
  `9ab031c096f4173cc74d0a1ead36e65228e56cf3`.
- Workspace identity passed for `ROB V2 C2 RECOVERY`, V2 root/scopeId
  `4aba8657837a43104f5193a6feaad3c5`, branch
  `codex/dev437-rebuild-identity`, SDK `4.11.0`.
- Stage A passed. `HRT0001003` contains the expected parent, Analytics task
  type, Authorization, Access Item, business key, terminal state `3`, completion
  timestamp, close notes/evidence, and complete authorized waiver evidence.
- Stage B passed. Live `sn_hr_core.RobHrFulfillmentBridgeV2` matches the
  governed manual source for the traced methods and contains both corrected
  `addNotNullQuery('x_2166123_rob_auth_rob_task_type')` calls.
- Stage C passed. The persisted task deterministically yields one satisfied
  waived Analytics evidence item for Authorization
  `29d5889083830f104f5193a6feaad3f4` and Access Item
  `6832a044e89646949e88010fd8d0f023`; the exact RCA is approved.
- Stage D passed. System log `1d91252883cfcf104f5193a6feaad32c`
  identifies caller `sys_script_31b6f6fe7198436d8d6600355948fe70`, proving
  the active reconciliation Business Rule executed for the `12:43:58` replay.
- Stage E failed after the Detail query matched and `taskSatisfied(...)`
  evaluated true. The only reached activation statement is
  `details.setValue('status', 'active')`; Australia raised
  `CrossScopeAccessNotAllowedException: Access to GlideRecord.setValue from
  scope x_2166123_rob_auth not allowed`. `ROBD0001028` therefore remained
  `pending_fulfillment`.
- Stage F was not reached because the uncaught Stage E exception terminated the
  rule before `closeEligibleCase(...)`. `HRC0001048` remained open.
- Primary finding: **C — Detail match/activation failure**. This trace
  classifies the condition as an ordinary C2 implementation/configuration
  defect at the exact write boundary. It does not change M4-02, M4-06, or
  M4-07 classifications or any C2 gate status.
- C2-T mutations: source `0`; HR Core `0`; installs `0`; builds `0`; fixtures
  `0`; regressions `0`; capability investigations `0`.

## C2-F same-scope Detail persistence result

- The single bounded V2 correction changed the matched Detail write from
  restricted generic `GlideRecord.setValue` to direct field assignment and
  retained the existing `details.update()` call, matching, evidence, waiver,
  idempotency, and close ordering.
- Pre-install gates passed: focused M4 `34/34`, normal build, frozen build,
  diff check, and generated-key review (`0` unexpected changes).
- The normal IDE installation succeeded and the live reconciliation Business
  Rule contains `details.status = 'active'`. The SDK client subsequently
  reported `Failed to fetch` while receiving the upload response; the native
  success banner and live source prove effective installation, so no retry was
  performed.
- Governed native-form replay updated `HRT0001003` at
  `2026-08-28 15:08:01`. Complete Analytics waiver evidence remained valid.
  No new `CrossScopeAccessNotAllowedException` or generated RCA appeared.
- `ROBD0001028` nevertheless remained `pending_fulfillment`, and
  `HRC0001048` remained open. The replacement direct assignment did not persist
  the V2-owned Detail, so gates 10, 11, and 9 could not be accepted.
- Caller and target ownership are identical: V2 scope/package
  `4aba8657837a43104f5193a6feaad3c5`; table application access is
  `package_private`. Broad GlideRecord/native-case/native-task privileges
  remain `0`.
- C2-F stopped without another persistence strategy, install, architecture
  change, capability investigation, broad privilege, or full regression.
  Preserved state: `10/13` PASS; M4 not complete.

## C2-P isolated same-scope persistence proof

- Production C2 source, the HR Core bridge, accepted runtime records, and gate
  statuses were not changed. No install, build, C2 replay, or regression ran.
- Live ownership confirms `x_2166123_rob_auth_auth_detail` belongs to V2 scope,
  application, and package `4aba8657837a43104f5193a6feaad3c5`; application
  access is `package_private`. The `status` dictionary element is read-only.
- A controlled insert attempt was denied by the scoped generic
  `GlideRecord.insert` API and created no Detail. The proof then isolated
  `ROBD0001015` (`8358cc1883830f104f5193a6feaad3e6`), linked to a non-active
  Authorization and cancelled `HRC0001024`, with status `fd-scripted`.
- Test A used a query-obtained record. Direct assignment changed the in-memory
  value to `active`, but `update()` raised `CrossScopeAccessNotAllowedException`
  and the database reread remained `fd-scripted`.
- Test B used a new GlideRecord loaded by the exact Detail sys_id. It produced
  the same update exception and unchanged reread. This rules out contamination
  from the native task callback or the original record object.
- Test C was not run because the repository contains no distinct eligible
  V2-owned persistence service/API; all existing paths ultimately use generic
  GlideRecord `update`/`insert`.
- No active Detail Business Rule, table-specific ACL write mechanism, Data
  Policy, UI Policy, audit change, generated RCA, or broad scope privilege was
  found. The update timestamp remained unchanged, proving there was no commit
  followed by rollback.
- Result: **C — all tested same-scope V2 GlideRecord persistence forms fail on
  the installed table configuration.** Same-scope persistence is disproven for
  this installed application/table boundary. No architecture change is
  authorized by the proof; the next action is formal blocker closure unless an
  exact supported correction is separately approved.

## C2-S supported Australia persistence pattern

- ServiceNow Australia introduces field-level read-only modes. `Display Read
  Only` preserves a non-editable UI while explicitly allowing controlled
  server-side operations; `Client Script Modifiable` blocks server-side APIs.
- SDK 4.11.0 maps Fluent `readOnly: true` to
  `read_only_option=instance_configured`. On dev437065, the governing legacy
  property resolves that mode to `client_script_modifiable`. This is the exact
  metadata discrepancy behind the C2-P results; it is not evidence that the
  business requirement is unsupported.
- The accepted M3 denial path provides the local precedent: the System-run ROB
  Supervisor Approval Flow uses native Update Record actions to persist
  system-managed Authorization and Detail lifecycle values. M4's scoped
  Business Rule used a server-side record update while the target field was
  configured to block server updates.
- Bounded source reconciliation changes only the Detail `status` field to
  `readOnlyOption: 'display_read_only'`, restores the documented scoped
  `setValue`/`update` operation, and adds an explicit failure guard. Routing,
  evidence, waiver, bridge, matching, and case-close semantics are unchanged.
- Focused M4 `34/34`, normal/frozen builds, diff check, and generated-key review
  passed. The generated Dictionary XML contains
  `read_only_option=display_read_only`; unexpected generated-key changes and
  broad privileges remain `0`.
- No install or runtime replay occurred. Gates 9-11 remain unaccepted and C2
  remains `10/13` pending explicit authorization for the exceptional normal
  install.
## C2-S authorized install preflight stop

The reviewed supported-pattern correction is published at `47dc053`, and all local pre-install gates passed. The recovered IDE workspace identity also passed. The supported IDE Git Pull failed twice with HTTP 500 (the initial operation and the UI-offered retry), leaving the IDE checkout without `display_read_only`. In accordance with the mandatory source gate, no IDE Build or Install was attempted and gates 9–11 were not replayed. C2 remains `10/13 PASS`.
