# Remediation Backlog
## Australia / April 2026 Baseline

R0 records implementation deltas only. It does not change application metadata or runtime behavior. Preserve existing references and historical records during remediation; do not create duplicate seed records.

## R1 — Data Foundation / Configuration Remediation

- [x] Update the current accepted Form 1768 version from `2024.04` to the approved April 2026 identifier (`src/fluent/records/default-rob-configuration.now.ts`).
- [x] Reconcile `Human Capital Data Access` to `OAS/DataMart` and `Report Access` to `Human Capital Reports`, preserving or migrating existing references rather than creating duplicates (`src/fluent/records/starter-rob-access-items.now.ts`).
- [x] Add explicit Form 1768 mapping metadata to ROB Access Item Reference (`src/fluent/tables/rob-access-item-reference.now.ts`; Appendix B).
- [x] Add ROB Configuration controls for OM task due days, Exception task due days, OM escalation timing, and optional renewal-notification copy configuration (`src/fluent/tables/rob-configuration.now.ts`).
- [x] Resolve Authorized Access Detail lifecycle choices to the approved state model (`src/fluent/tables/authorized-access-detail.now.ts`; Appendix D).
- [x] Verify WPC metadata: Analytics ownership, OM required, provisioning/action system ARM, and OAS/WPC target (`src/fluent/records/starter-rob-access-items.now.ts`).
- [x] Verify IPA as a first-class Employment Type and preserve its exact business/configuration-controlled Access End Date policy as unresolved (`src/fluent/tables/rob-authorization-form.now.ts`, `src/fluent/tables/rob-case-security-fields.now.ts`, catalog policy/variable files).
- [x] Verify exactly four custom business tables and exactly five scoped functional roles.
- [x] Run normal build, frozen-key build, normal install, and separated runtime verification.

## R2 — Australia HRSD Intake / Runtime Remediation

- [x] Revalidate native HR Case extensions on Australia, including both current subclass augmentations (`src/fluent/tables/rob-case-security-fields.now.ts`).
- Revalidate native HR Task extension feasibility and cross-scope SDK/configuration behavior.
- [x] Validate Employee Center and the two native HR Services.
- [x] Validate server-side self-submission identity stamping (`src/fluent/server/requester-profile-snapshot.server.js` and the two Class B producer scripts).
- [x] Validate active-reference requested access, category filtering, Business Justification, Employment Type, and conditional Access End Date.
- [ ] **R2-AGENCY-01 — profile/form snapshot architecture.** Native HRSD
  identity ownership is verified on both intake paths, and source/unit plus
  regression pass. M2 remains BLOCKED-PLATFORM because Australia also refuses
  `GlideRecord.setValue` on the application-owned native-case intake gate
  fields. The Australia SDK installer defect remains open with the supported
  manual metadata workaround verified. M3 is NOT READY.
- [ ] **M2 controlled manual recovery.** Explicitly approved after the
  definitive Australia installer reproduction. Four primary M2 dictionary
  records were reconciled through supported native UI, but the first
  UPDATE-only Authorization Form field stopped recovery: with
  `security_admin` elevated, ServiceNow still protected the underlying
  `Read only` dictionary property and did not expose the committed
  `instance_configured` value. Status: BLOCKED-MANUAL-CONFIGURATION. Do not
  substitute another read-only mode, use Background Scripts, or create
  replacement fields. See `docs/M2-MANUAL-RECOVERY-WORKSHEET.md`.
- Validate WPC/Operations Manager prerequisites and exception handling.
- Perform Australia PDI runtime, attachment-security, and impersonation testing.

## R3 — Authorization Decision Engine (Conditional Source / Unit)

- [x] Implement deterministic New, Reuse, Amendment, Renewal, and Exception outcomes.
- [x] Separate authorization selection, access comparison, expiration calculation, and decision selection.
- [x] Preserve WPC as a first-class access item and enforce its OM prerequisite.
- [x] Route ambiguous material-change and annual-renewal mappings to controlled Exception outcomes.
- [x] Prove idempotency and zero Wave 4+ record/task creation at source/unit level.
- [x] Add approved read-only decision-output fields to both native HR Case subclasses.
- [ ] Activate and validate native runtime context acquisition/persistence only under a separately approved, secure path.
- [ ] `R2-AGENCY-01` remains OPEN; R3 fixtures do not close it.

## R4 — Authorization Lifecycle, E-Signature, and Signed PDF

- [x] **R4-POLICY-01 — Approve final Form 1768 document mappings.** Status:
  RESOLVED. Printed Date = Supervisor Signature Date / Final Authorization Date;
  IPA and WPC are distinct electronic-only extensions; ARM remains provisioning
  metadata; approved system-managed values render only in a separate Electronic
  Authorization Metadata section.
- [x] **R4-PDI-01 — Prove current Document Templates / ServiceNow Sign runtime.**
  Configure a controlled ROB template in the authorized native boundary and
  prove employee and supervisor signing with explicit supervisor approval, signer/timestamp
  evidence, final PDF generation, exact attachment destination, immutability,
  and historical retention. Status: RESOLVED for native capability. R4.2.1 proved a combined explicit supervisor approval/signature,
  executed refusal, two independently retained signed PDFs, and clean April
  2026 Form 1768 rendering with IPA/WPC and separate metadata. The blocker is
  exact signed-date integrity: native `${Date}` resolves before signing and is
  not bound to the persisted Supervisor Signature Date. R4.2.2 resolved that
  limitation through post-signature finalization: committed employee/supervisor
  task evidence is reread after APPROVED + signature, a distinct completed PDF
  is generated, Final Authorization Date equals the supervisor signature date,
  denial cannot finalize, and prior artifacts remain. Production lifecycle
  orchestration and Authorization Form-only attachment/security remain open;
  R4 itself is not yet PASS.
- [ ] Implement New, Amendment, and Renewal lifecycle only after the two R4
  gates above are resolved; keep Reuse free of new forms/details and preserve
  its original employee evidence/PDF. This item includes production
  Authorization Form data binding, repeated Access Detail rendering, and final
  Authorization Form-only attachment/security validation.
- [ ] `R2-AGENCY-01` remains OPEN; no R4 fixture or capability evidence closes
  it.

## R4.3 open production dependencies

- [ ] `R4-RUNTIME-01` — configure the production native signing and
  post-signature finalization path for both HR Case subclasses, attach the final
  PDF only to the Authorization Form, and complete controlled runtime evidence.
  The published production template now exists with two ordered participants,
  26 body mappings, and two signature blocks. Controlled runtime evidence is
  remains blocked until M2 completes. Source lifecycle initiation remains
  disabled.
- [x] `R4-DESIGN-01` — RESOLVED in M1. Reuse is a request-level native
  supervisor APPROVE + Sign attestation anchored to the current HR Case. It
  revalidates exactly one qualifying Active authorization, persists audited
  task/execution/outcome/signer/timestamp/context evidence, creates no Form,
  Detail, PDF, or supersession, leaves denial scoped to the current request,
  and invalidates stale context before future fulfillment eligibility.
- [ ] `R2-AGENCY-01` architecture is source-valid but remains BLOCKED-PLATFORM
  at runtime. The Australia SDK installer defect remains open with the manual
  metadata workaround in place.
  The durable source checkpoint is `01f5035`. A single justified normal
  `0.0.2` to `0.0.3` retry used a verified package containing all 12 primary M2
  records, but rollback context `b59d76c2c372831068a35f2b2b013106` processed
  only app/table bootstrap records and post-install reread found all M2 targets
  absent. A separately authorized post-plugin-update normal `0.0.3` install
  reproduced the defect: rollback context
  `6fb41dd2c3fa471068a35f2b2b01310f`, BAK `BAK0002276`, and upgrade history
  `98c41d5ac3fa471068a35f2b2b0131e6` again presented only four
  `sys_db_object` records and none of the 12 M2 updates. The plugin update did
  not resolve the platform blocker. A final genuine `0.0.3` to `0.0.4`
  transition (rollback `0b4b911ac3fa471068a35f2b2b0131da`, BAK `BAK0002277`,
  upgrade history `3f4b9552c37e471068a35f2b2b01312c`) again presented only
  four `sys_db_object` records and none of the 12 M2 updates. The installer
  defect is confirmed not resolved; stop installation experimentation. The
  supported manual metadata workaround is verified, but M3 is not ready.

### M2 final runtime alignment

- [x] Reconciled the two existing subclass intake Business Rules in place; both
  now contain the M2 resolver behavior and zero deprecated native-case snapshot
  writes.
- [x] Corrected both live catalog qualifiers by exposing the existing
  non-client-callable, sandbox-enabled resolver to native catalog callers.
  The Supervisor picker returns only the two active configured-group members;
  the Organization picker returns only the configured root and descendants.
- [ ] **M2-RUNTIME-02 — identity sub-gate resolved; runtime remains blocked.** Native HRSD
  populated `opened_by`, `opened_for`, and `subject_person` with the
  authenticated user on controlled Payroll `HRC0001050` and Workforce
  Administration `HRC0001051` submissions. HR Access now validates required
  equality and performs zero writes to those fields. Follow-on Payroll
  `HRC0001053` then proved Australia also refuses `GlideRecord.setValue` on
  application-owned native-case gate fields. The generated broad privilege was
  removed; both M2 rules are inactive. M2 is BLOCKED-PLATFORM, `R2-AGENCY-01`
  remains OPEN, and M3 is NOT READY.

## M4 - Fulfillment & Operations (Conditional Source / Unit)

- [x] Implement metadata-driven Staffing/Analytics/OM routing with one native HR
  Task per Parent Case + Task Type and repeat-safe planning.
- [x] Implement missing-OM Exception Review, evidence/waiver validation,
  item-specific Access Detail activation, parent closure guard, and
  configuration-driven OM escalation foundations.
- [x] Preserve zero direct external provisioning integrations and zero custom
  fulfillment tables; keep both production orchestration entry points inactive.
- [ ] Production fulfillment runtime and persona validation - BLOCKED BY M2/M3.
- [ ] Renewal/expiration/lapse automation - PENDING runtime prerequisite; not
  implemented in M4 source/unit foundation.
- [ ] `R2-AGENCY-01` remains OPEN; M4 fixtures do not close it.

## M2 Final Closeout (Supersedes Earlier Open Entries)

- [x] `R2-AGENCY-01` resolved for PDI validation on `2026-08-21` through the
  approved ownership split: native HRSD identity, HR Access policy/context,
  Authorization Form historical snapshots, and the narrowly allowlisted HR
  Core `RobHrCasePersistenceBridge` for the three coupled case-gate fields.
- [x] Manual recovery verified: primary metadata 12/12, Authorization Form
  reconciliation 3/3, Class C values 3/3, exact M2 table Reads 5/5, one bridge
  Execute path, and two named restricted callers.
- [x] Broad `GlideRecord.setValue`, `update`, `insert`, and native-case Write
  privileges are zero. The two legacy exception-task runtime entries are
  inactive after their unsupported task-write path was observed; their unit
  foundation remains for a later approved native task persistence decision.
- [ ] Australia SDK installer defect remains OPEN. The supported manual PDI
  workaround is verified and does not change the production source model.
- [x] M3 is READY but was not started.

## M3 Production Runtime Blocker

- [ ] Reconcile the two installed R4 initiation scripts from the pre-M2 case-
  snapshot version to committed current source before activation.
- [ ] Obtain platform-owner architecture/security approval for a supported
  native Document Templates/ServiceNow Sign binding that routes Supervisor from
  `x_2108496_hr_acces_rob_auth.supervisor`, launches and persists the frozen
  Reuse attestation, and creates the post-signature PDF on the Authorization
  Form without protected native-case writes or bridge expansion.
- [x] Preserve both R4 lifecycle and both M4 fulfillment entry points inactive;
  production M3/M4 artifact counts remain zero.
- [x] Preserve broad API/native-case Write privileges at zero and the M2 bridge
  at its three-field allowlist.
- [ ] M3 remains BLOCKED-PLATFORM; M4 production runtime is not ready.

### 2026-08-22 M3 blocker refinement

- [x] Replace Supervisor `assigned_to` participant routing with a governed
  Authorization Form Supervisor advanced resolver; no protected case write.
- [x] Add production signing initiation, post-signature finalization, and
  frozen Reuse native-attestation source/configuration foundations.
- [x] Run one controlled New fixture and preserve its governed form/detail as
  synthetic blocker evidence.
- [x] Deny generated Document Templates RCA
  `bcd68e66c3728b1068a35f2b2b0131ba` and remove generated broad
  setValue/insert/update privileges 3/3.
- [ ] Platform owner/ServiceNow must provide or approve a least-privilege
  supported production launch boundary for reading native Document Templates
  metadata. No new RCA was approved in M3.
- [ ] M3 remains BLOCKED-PLATFORM; Denial, Amendment, Renewal, and Reuse
  production runtime remain unexecuted; M4 production runtime is not ready.

### 2026-08-22 M3 RCA recovery and denial stop

- [x] Approve exact caller-specific PDF Template Read and Document Task Read
  access for both controlled lifecycle callers; no broad Document Templates
  access retained.
- [x] Prove Payroll and Workforce native Document Task launch.
- [x] Prove one production New authorization through governed Supervisor
  signing, post-signature PDF generation, and Active state (`ROBA0001014`).
- [x] Remove all automatically generated broad GlideRecord privileges and
  restore both R4 and both M4 production entry points inactive.
- [ ] Platform owner/ServiceNow must provide a supported native supervisor
  denial/refusal action that persists the decision and cannot produce an
  approved final PDF. PDF Fill currently exposes Save/Submit only; Review is
  not a signing action.
- [ ] M3 remains BLOCKED-PLATFORM; Amendment, Renewal, and Reuse were not run
  after the mandatory Denial stop. M4 production runtime is not ready.

## R0 Boundary

No item above is authorized for implementation in R0. Unsupported native capabilities must be recorded in Appendix L rather than replaced with custom request, task, approval, signature, PDF, attachment, or authentication architecture.

## M3 Separate Supervisor Decision Boundary

- [x] Native `sysapproval_approver` persists governed Supervisor Rejected
  identity, timestamp, relationship, and required comment separately from PDF
  Fill.
- [x] Controlled rejection denied `ROBA0001015` and its pending detail with no
  approved final PDF or new signing/fulfillment task.
- [x] Generated broad `GlideRecord.setValue` / `GlideRecord.update` privileges
  and the unapproved broad HR Case Read RCA were removed by exact sys_id.
- [ ] Platform owner must provide/approve a native Flow or HRSD response
  boundary that updates the scoped Authorization Form without generic
  GlideRecord Execute privileges.
- [ ] M3 remains BLOCKED-PLATFORM; all production entry points remain inactive
  and M4 runtime is not ready.

## M3 ROB-owned Flow Designer Boundary

- [x] Confirm native Ask For Approval and Document Templates Create Document
  Task actions are installed.
- [x] Attempt Flow creation twice from clean signed-in Workflow Studio pages.
- [x] Confirm zero HR Access ROB Authorization Flow records before and after.
- [x] Preserve zero broad privileges and all R4/M4 entry rules inactive.
- [ ] Platform owner/ServiceNow must repair Workflow Studio component loading
  or deliver the ROB-owned Flow through the supported application channel.
- [ ] M3 remains BLOCKED-PLATFORM; M4 runtime is not ready.

## M3 Controlled R3 Fixture Boundary

- [x] Configure and publish the ROB-owned Authorization Form approval Flow.
- [x] Remove Supervisor launch from the initial lifecycle and retain the
  Employee-first signing order in source/unit tests (R4 58/58).
- [x] Verify `HRC0001086` native self-submission identity and preserve its
  unmodified R3 decision fields.
- [x] Remove the ineffective temporary `rob_admin` role assignment and verify
  zero temporary roles and zero broad GlideRecord privileges.
- [ ] Platform owner must provide the supported R3 runtime producer or an
  approved native fixture mechanism for the read-only decision outputs. Inline
  edit and the native record-template editor cannot populate them.
- [ ] M3 remains BLOCKED-PLATFORM; the published approval Flow has not yet
  completed Denial, Amendment, Renewal, or Reuse runtime acceptance.

## V2 R3 production invocation/persistence boundary

- [x] Clean V2 install and current post-M2 `AuthorizationDecisionService.js`
  module verified on dev437065.
- [x] Class C 3/3 and the narrow V2 HR Core intake-gate bridge configured.
- [x] Confirm R3 decision outputs remain system-managed/read-only.
- [x] Confirm installed V2 production callers: Business Rules 0, Script
  Includes 0, Flows 0, Actions 0.
- [x] Application owner confirmed the missing production adapter is approved
  architecture and authorized its source restoration.
- [x] Add exactly one shared V2 adapter and two inactive native-case Business
  Rule entry points that invoke the existing R3 module without duplicating it.
- [x] Extend the existing HR Core bridge with a strict R3 output/reason
  allowlist and no generic GlideRecord or arbitrary-field interface.
- [ ] Reconcile the reviewed bridge source in Human Resources: Core, then
  install the V2 source through ServiceNow IDE after explicit diff approval.
- [ ] Verify the installed module caller count, bridge method, read-only output
  dictionaries, and any caller-specific RCA generated at first runtime.
- [ ] Resolve DEC-MAP-01/02 and DEC-MAP-03 through approved governing rules.
  Until then, unequal material context and annual-renewal disposition remain
  unknown and deterministically block under the committed Exception rules; do
  not infer Reuse/Amendment/annual Renewal values.
- [ ] M3 remains BLOCKED-PLATFORM; both M3 lifecycle entry rules and both M4
  rules remain inactive; M4 production runtime is not ready.

## V2 native signing source/parent boundary

- [x] Prove current R3 runtime with synthetic `New` on `HRC0001009`.
- [x] Create one native employee Document Task through exact supported APIs
  and caller records.
- [x] Prove source PDF chunks, Preview, participants, and mappings exist.
- [x] Prove the supported Table selector excludes the governed non-Task V2
  Authorization Form.
- [x] Restore production template Published, neutralize the accidental copy,
  and deactivate both M3 lifecycle entry rules.
- [ ] ServiceNow must support the governed Authorization Form as a native
  Document Templates source/parent, or the application owner must explicitly
  approve an architecture/data-integrity change. No M3.x workaround is
  authorized.
- [ ] M3 remains BLOCKED-PLATFORM; M4 remains inactive and NOT READY.

## V2 employee native-execution correction

- [x] Identify the regression from full `GenerateDocumentAPI` execution to a
  direct `DocumentTaskUtils` task shell.
- [x] Restore the prior employee-only template contract and full native launch.
- [x] Preserve intervening native approval and supervisor-only launch.
- [x] Pass all source, regression, normal-build, frozen-build, and key gates.
- [ ] Reconcile the employee-only template through supported native UI.
- [ ] Sync, Build and Install through ServiceNow IDE; do not Reinstall.
- [ ] Prove usable employee document execution before resuming the M3 matrix.

## V2 governed Supervisor launch correction

- [x] Run the ROB-owned approval Flow as System User without changing ACLs.
- [x] Prove native Supervisor approval and governed evidence persistence.
- [x] Remove the generic Create Document Task action after proving it creates
  no usable Document Task Execution.
- [x] Add a same-table post-approval adapter that reuses GenerateDocumentAPI.
- [x] Keep the prohibited sysapproval response rule inactive and broad
  privileges at zero.
- [x] Verify the installed adapter by generated `sys_script` identity and exact
  inline content; no additional install is required.
- [x] Prove stale `DOCT0001005` has neither a Document Task Execution nor PDF
  document while completed employee task `DOCT0001002` has both.
- [x] Require both native references before treating a matching signing task as
  an idempotent success.
- [ ] Build, review, Sync, and install the bounded retry correction through the
  supported IDE path; then retest on a clean task context.
- [ ] Prove Supervisor Fill Document, final PDF on Authorization Form, and
  activation before resuming the remaining M3 scenario matrix.

## V2 supported IDE deployment boundary — 2026-08-26

- [x] Ordinary IDE Build passed with zero diagnostics.
- [x] Ordinary IDE Install timed out waiting for deployment.
- [x] IDE Force Install failed to fetch.
- [x] Correct the initial verification: the rule is installed under its
  truncated live name and generated sys_id; the included server source is
  inline rather than a separate module.
- [x] Preserve the native/manual governed approval Flow and reject its
  internally incompatible generated source representation.
- [x] Keep broad caller privileges at zero and avoid Reinstall, local SDK
  deployment, Background Scripts, and duplicate runtime services.
- [ ] Platform action is required to restore IDE deployment transport or
  reconcile the reviewed artifacts through a supported installation path.
- [ ] M3 BLOCKED-PLATFORM; M4 NOT READY.
