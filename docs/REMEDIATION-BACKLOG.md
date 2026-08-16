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
- [ ] **R2-AGENCY-01 — HR Core-owned profile snapshot population.** Status: OPEN — requires agency platform-owner implementation. Option B is approved, but the PDI remains Class D / blocked. Acceptance requires all three snapshots to persist on both native subclasses, authoritative profile derivation, no ordinary-client override, no broad cross-scope privilege, and a passing full persona/forgery matrix.
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
- [ ] `R2-AGENCY-01` remains OPEN; no R4 fixture or capability evidence closes it.

## R0 Boundary

No item above is authorized for implementation in R0. Unsupported native capabilities must be recorded in Appendix L rather than replaced with custom request, task, approval, signature, PDF, attachment, or authentication architecture.
