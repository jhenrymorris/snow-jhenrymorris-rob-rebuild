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

## R0 Boundary

No item above is authorized for implementation in R0. Unsupported native capabilities must be recorded in Appendix L rather than replaced with custom request, task, approval, signature, PDF, attachment, or authentication architecture.
