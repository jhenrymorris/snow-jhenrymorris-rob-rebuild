# Build Ledger

Build evidence is package-specific and must remain distinct from install, runtime, security, and UAT evidence. Historical Wave evidence remains under `docs/validation/`. R0 evidence is recorded in `MEASUREMENT.md`; a successful build does not prove Australia runtime behavior.

## R1 — Data Foundation / Configuration Remediation

- Baseline: `c98a5448222664bfb92189e668536f28f6a81ca6` / `r0-australia-prd-baseline`
- Branch: `remediation/01-data-foundation-alignment`
- Source test: `npm run test:r1` — PASS, 9/9 assertions before build
- Normal SDK build: PASS — `npm run build`; exactly five pre-existing TS11 reference-qualifier warnings, no new warnings and no errors
- Frozen-key build: PASS — `npx @servicenow/sdk build --frozenKeys true --errorOnConflict true`; same five warnings, no conflicts
- Normal install: PASS twice using the normal installer (no `--reinstall`). Attempt 1 rollback context: `11474b18c3728b1068a35f2b2b0131ff`; attempt 2 rollback context: `39c80bdcc3728b1068a35f2b2b013153`.
- Install/data result: both installs applied schema metadata, but neither `apply_once` nor normal `update` record metadata reconciled the seven pre-existing governed data rows. The active configuration remains `2024.04`, and all six installed Form 1768 mappings remain blank.
- R1.1 reconciliation: PASS using a controlled, rollback-recorded Scripts - Background run against the seven positively identified custom-table records. First execution updated six access-item records (nine fields); the configuration version had already been saved through its standard form. A second identical execution reported `recordsUpdated: 0` and `fieldChanges: 0`.
- Migration side-effect disposition: the scoped background run generated two broad API cross-scope privileges (`GlideRecord.setValue` and `GlideRecord.update`). Both generated records were identified and deleted by exact sys_id; direct UI verification returned `Record not found` for each afterward. No source privilege metadata was added.
- Australia runtime verification: PASS. One active configuration is `2026.04`; six active access items have the approved names and mappings; WPC retains Analytics/OM/ARM/OAS routing; all original sys_ids/codes and HR case references resolve; Access Detail reference count remains zero; Authorization Form and Access Detail lifecycle choices render correctly.
- Generated-key disposition: Existing explicit seed IDs preserved unchanged. Reviewed additions cover four configuration dictionaries, one mapping dictionary and its six choices, two approved Detail states, and form elements. Reviewed deletions cover legacy Detail choices `requested`/`authorized` and three moved Access Item form-layout elements. Unexpected existing-key changes: 0.

## R2 - Australia HRSD Intake / Runtime Remediation (BLOCKED)

- Baseline: `6bbd3bc7197d71f0287c2e54df19f8c31d076134` / `r1-data-foundation-remediated`; branch `remediation/02-australia-intake-validation`.
- Local security tests: PASS, 22/22. Deployment-configuration tests: PASS, 16/16.
- Normal and frozen-key builds: PASS with exactly the five pre-existing TS11 reference-qualifier warnings and no conflicts.
- Normal installs: PASS without `--reinstall`; final diagnostic-cleanup rollback context `c21b271cc3ba8b1068a35f2b2b013115`.
- Runtime PASS evidence: exactly two native HR Services; Staffing/Analytics reference filtering 3/3; WPC Analytics-only; four Employment Types; Business Justification required; Contractor/Auditor date policy and IPA non-mandate; ordinary employee access-item resolution; native cases created with `opened_by = opened_for = subject_person`.
- Runtime blocker: scoped validation reached provenance, justification, access-item, and requester/profile checks, but position, organization, and supervisor snapshot writes did not persist on the Australia native case subclasses.
- Privilege disposition: exact source-specific HR Service read caller-access was allowed. Unexpected broad `GlideRecord.setValue` Execute API privilege `d3b8e750c3ba8b1068a35f2b2b013123` was deleted and verified absent. Temporary role assignments `22e9efd4c3ba8b1068a35f2b2b013101` and `336a2b58c3ba8b1068a35f2b2b01315d` were deleted and verified absent.
- No commit or validation tag was created because runtime, persona, lifecycle-guard, and count gates are incomplete.

### R2.1 capability-spike continuation (BLOCKED-PDI)

- Capability tests A-D found no supported narrow snapshot persistence mechanism on Australia.
- Payroll committed-reread evidence: same-record assignment case `HRC0001016` (`69f07354c33e8b1068a35f2b2b013137`) and direct producer-assignment case `HRC0001017` (`2313b350c37e8b1068a35f2b2b013168`) retained blank Position, Organization, and Supervisor snapshots. The app-scoped mapped-variable probe case `7394ff18c37e8b1068a35f2b2b013156` was also rejected by cross-scope enforcement.
- Security cleanup: prohibited generated API privilege `1d013754c33e8b1068a35f2b2b01319b` removed; only exact Read privileges for `sn_hr_core_service` and `sys_user` remain. Three failed app-scoped probe variables and both temporary producer-script blocks were removed.
- Tests: Wave 2 security PASS 22/22; deployment-configuration PASS 16/16.
- Builds: normal PASS and frozen-key PASS with the same five documented TS11 warnings; failed-probe generated keys removed; no unexplained existing-key mutation.
- Cleanup install: normal install PASS without `--reinstall`; rollback context `1786bb10c3be8b1068a35f2b2b0131c7`.
- Result: R2 remains BLOCKED. No commit or validation tag created; Wave 3 not started.

### R2.2 architecture/governance blocker resolution

- Platform-owner decision: Option B approved — HR Core owns controlled
  population of the three application-owned request snapshots on both native
  case subclasses.
- Classification: PDI remains Class D / BLOCKED-PDI; agency target requires a
  platform-owner HR Core implementation. Architecture question resolved;
  implementation and production acceptance remain open under `R2-AGENCY-01`.
- Security contract: authoritative authenticated/subject profile data only;
  client overrides rejected or ignored; ordinary-user edits prohibited;
  corrections audited and restricted; no broad API or case Write privilege.
- R2.2 changes are documentation and measurement only. No additional PDI
  deployment is applicable.
- Wave 3 was not started and requires separate authorization.

## R3 — Conditional Authorization Decision Engine

- Baseline: `ab92afaa583582f0122f69065b8f592c16ee0b36` on
  `feature/03-authorization-decision-engine`; R2 remains BLOCKED-PDI and
  `R2-AGENCY-01` remains OPEN.
- Added pure source modules for candidate selection/scope comparison,
  configuration-driven expiration, and deterministic five-path selection.
- Added approved read-only decision-output fields to Payroll and Workforce
  Administration native subclasses. No runtime decision trigger was activated.
- Open `DEC-MAP-01`/`02`/`03` inputs route to controlled Exception when their
  disposition is unknown; no AI or semantic inference is used.
- R3 source/unit suite: 30/30 PASS. Lifecycle guard confirms no downstream
  record/task APIs.
- Initial build exposed Fluent TS305 for helper-function/object-spread field
  composition; corrected to explicit field declarations without model changes.
- Deployment: not performed; conditional source/unit validation does not
  require premature runtime activation.
- Regression evidence: R1 9/9 PASS; Wave 2 security 22/22 PASS; Wave 2
  deployment configuration 16/16 PASS; R3 decision suite 30/30 PASS.
- Build evidence: normal PASS; frozen-key PASS; exactly five unchanged TS11
  reference-qualifier warnings.
- Generated-key evidence: all 827 baseline unique ids remain present; 177 new
  ids correspond to intentional R3 native fields, choices, documentation, and
  three packaged source modules; unexplained existing-key changes = 0.

## R4 — Authorization Lifecycle, E-Signature, and Signed PDF (BLOCKED)

- Baseline: `29a75f920d787fea85fe62cb1d97fbeacf0ecbd7` on
  `feature/04-authorization-lifecycle-signatures-pdf`; the branch was already
  present and the reviewer explicitly confirmed it as the approved start.
- Source inventory found no pre-existing R4 lifecycle, signature, approval,
  Document Template, or PDF-generation implementation to preserve or extend.
- Authoritative source-form verification: the two-page April 2026 AcroForm was
  rendered and inspected. Printed elements match Appendix B; IPA and WPC are
  electronic extensions, and the printed form exposes only one Date field.
- Australia capability evidence: current Document Templates 27.1.1,
  E-Signature 1.0.0, Digital Signature API 26.0.0, Digital signature component
  27.1.0, and PDF Generation Utilities are active. Published native HR case
  templates demonstrate ServiceNow Sign and ordered participants.
- Capability gaps: no ROB template/runtime artifact demonstrated custom
  Authorization Form data, related Access Detail repetition, both required
  signers plus separate supervisor approval, generated signed PDF placement,
  or signed-content immutability. The PDI contained no Document Task record to
  serve as committed output evidence.
- Policy blockers: Appendix B leaves `DOC-MAP-02`, IPA rendering, and WPC /
  supplemental electronic rendering unapproved. The implementation stop rule
  prohibits guessing those mappings.
- No application source, generated keys, instance records, cross-scope
  privileges, or runtime activation changed. Build, deployment, and lifecycle
  tests were therefore not applicable after the capability stop.
- Result: R4 BLOCKED. R2 remains BLOCKED-PDI and `R2-AGENCY-01` remains OPEN.

### R4.1 electronic rendering policy resolution

- Reviewer/form-owner decision resolved `R4-POLICY-01` without application or
  instance changes.
- Printed Date mapping: Supervisor Signature Date / Final Authorization Date;
  Employee and Supervisor Signature Date/Time remain separate audit metadata.
- IPA is a distinct electronic-only Access Request Type with no invented IPA
  End Date rule.
- Workforce Profile Charts is a distinct electronic-only System Requesting
  Access option; it is not collapsed into OAS/DataMart or Human Capital Reports,
  and ARM remains non-rendered provisioning metadata.
- Approved governance values render only in a separate **Electronic
  Authorization Metadata** section using field-map terminology.
- Source PDF unchanged. Application source and generated keys unchanged.
  Deployment not applicable. `R4-PDI-01` remains OPEN and R4 remains BLOCKED.

### R4.2 native Document Templates / ServiceNow Sign runtime proof

- Classification: Class C manual/native capability configuration; no source or
  generated-key artifact was retained.
- Successful synthetic chain: HRC0001026; execution
  `a635f8e4c33ecb1068a35f2b2b01316d`; employee task DOCT0001003; supervisor
  task DOCT0001004; final PDF attachment
  `0876f06cc33ecb1068a35f2b2b01313a`.
- Persisted employee and supervisor identities/timestamps passed, ordered
  participant gating passed, and one `application/pdf` attachment was generated
  by `system` on the native Workforce Administration case.
- Supervisor acknowledgement and signature were combined by the native task;
  a distinct approval record was not proven. Denial execution, independent
  historical signed-version retention, exact Form 1768 rendering, and final
  Authorization Form association/security were not proven.
- Cleanup: both HR Service template bindings removed; temporary templates left
  non-published for auditable evidence; failed draft case HRC0001025 deleted;
  one unintended RCA record removed and verified absent; broad HR Access
  cross-scope privileges remaining = 0.
- Source/build/deployment: documentation only; build and deployment not
  applicable. Generated-key diff empty.
- Result: `R4-PDI-01` OPEN; partial native capability only. R4 remains BLOCKED.

### R4.2.1 native approval, refusal, history, and Form 1768 fidelity proof

- Classification: Class C manual/native capability configuration plus Class D
  blocker; no application source or generated-key change.
- Explicit approval: HRC0001031, employee DOCT0001005, supervisor DOCT0001006,
  and PDF `00f925a4c33a0f1068a35f2b2b0131a2`. The signed body contains explicit
  `APPROVED`; supervisor identity/timestamp persisted.
- Refusal: HRC0001032, employee DOCT0001007, supervisor DOCT0001008. The
  supervisor task persisted state `7`, Rebekah Lindboe, timestamp, and decline
  reason; no final PDF was created.
- History: V1 `0876f06cc33ecb1068a35f2b2b01313a` and V2
  `00f925a4c33a0f1068a35f2b2b0131a2` remain independent and unchanged, with
  separate signer records. Native regeneration is documented as replacing the
  current attachment and is not an approved history mechanism.
- Form fidelity: HRC0001033 / DOCT0001009-1010 generated clean April 2026 PDF
  `668b256cc33a0f1068a35f2b2b0131f6` with IPA/WPC electronic extensions, no
  ARM requested-access rendering, signatures, and a separate Electronic
  Authorization Metadata section. No sample-template contamination remained.
- Blocker: `${Date}` resolves at document preparation rather than from the
  persisted supervisor signature event; actual employee/supervisor timestamps
  cannot be inserted into content before those signatures exist. The approved
  Final Authorization Date / signed-metadata contract is therefore not proven.
- Security/cleanup: temporary intake binding removed; all four templates
  non-published; temporary roles 0. Prohibited broad privilege
  `ef33bcacc3facb1068a35f2b2b01312a` discovered from the prior R4.2 run was
  deleted and verified absent; only approved read privileges remain.
- Source/build/deployment: no application source changed; SDK build/deploy not
  applicable; generated-key diff empty.
- Result: `R4-PDI-01` BLOCKED; platform-owner design decision required. R4
  remains BLOCKED and Wave 5 has not started.

### R4.2.2 post-signature final Form 1768 proof

- Approved design: native ServiceNow Sign remains authoritative; the completed
  Form 1768 is rendered only after committed employee signature and supervisor
  APPROVED + signature evidence exists.
- Synthetic chain: HRC0001034; execution
  `454f0b68c3fe4f1068a35f2b2b0131bc`; employee DOCT0001011 (Amos Linnan,
  `2026-08-16 03:28:28`); supervisor DOCT0001012 (Rebekah Lindboe,
  `2026-08-16 03:29:14`).
- Accepted output: PDF `b3d35f28c3328f1068a35f2b2b01319e`,
  `application/pdf`, attached to DOCT0001012. It renders employee and supervisor
  Date/Time from committed evidence, Final Authorization Date `2026-08-16`, and
  separate Generated Date/Time `2026-08-16 03:47:35`.
- History/integrity: earlier final PDFs
  `78631368c3328f1068a35f2b2b01316d` and
  `4f93d76cc3fe4f1068a35f2b2b0131c4` retain distinct sys_ids; native signing
  tasks/execution were unchanged; refused DOCT0001008 has zero attachments.
- Visual correction: unsupported checked-box glyphs were replaced with explicit
  `[X]` / `[ ]` markers. A source-editor append was detected and corrected;
  final PDF is clean, two pages, and contains no sample/duplicate body.
- Security/cleanup: exact HR template restored; signing/final templates are
  non-published; one-time Document Templates-owned generation UI action and one
  unused helper were deleted; no RCA, broad privilege, temporary role, normal
  intake binding, Authorization Form, or Access Detail remains/was created.
- Source/build/deployment: documentation/measurement only; SDK build and deploy
  not applicable; generated-key diff empty.
- Result: `R4-PDI-01` RESOLVED; R4 is unblocked for production lifecycle
  implementation. R4 is not PASS, `R2-AGENCY-01` remains OPEN, and Wave 5 has
  not started.

### R4.3 production lifecycle implementation checkpoint

- Added Class A lifecycle, scope, native evidence, denial, final-PDF guard, and
  activation/lineage source plus 10 governed Authorization Form evidence fields.
- R4 source/unit: 36/36 PASS. Regression: R1 9/9, Wave 2 security 22/22,
  deployment configuration 16/16, R3 30/30.
- Normal and frozen-key builds PASS with exactly five unchanged TS11 warnings.
  Generated keys contain intentional additions only; existing key mutations 0.
- First normal install succeeded (`1794eba4c3368f1068a35f2b2b013159`).
  After the OAuth alias was restored, the safe-trigger update installed normally
  (`e7966fa0c3768f1068a35f2b2b0131f2`). No `--reinstall` was used.
- Installed privilege set remains the two approved read grants only. The two
  initiation rules are inactive. Production template count for the stable name
  is 0, so controlled runtime lifecycle acceptance was not executed.
- Status: R4 BLOCKED by `R4-RUNTIME-01` and `R4-DESIGN-01`; no commit/tag and no
  Wave 5 work.

### R4.3.1 production native template and runtime validation

- Configured and published the Class C native template `ROB Form 1768
  Authorization` (`f99c3c0ac372031068a35f2b2b013138`). Runtime reread confirmed
  two ordered participants, 26 body mappings, two signature blocks, and corrected
  stable internal access-item mappings. The template is not bound to ordinary
  Employee Center intake.
- A first Employee Center case (`HRC0001037`) reproduced the known R2 snapshot
  boundary and generated one prohibited broad `GlideRecord.setValue` privilege
  (`6097f502c3fe031068a35f2b2b0131d9`). It was removed exactly; final privilege
  inventory contains only the approved `sn_hr_core_service` and `sys_user` reads.
- Native synthetic form seeding persisted decision fields on HRC0001038 through
  HRC0001040 but did not persist Position, Organization, or Supervisor snapshots.
  An exact temporary `rob_admin` grant
  (`715c71c2c332431068a35f2b2b0131f1`) did not override dictionary read-only
  behavior and was removed. No global script, ACL bypass, or broad privilege was
  used.
- The four stopped synthetic cases created 0 Authorization Forms and 0 Access
  Details. Initiation rules remain inactive. No deployment was applicable because
  the production template is Class C and application source was not changed by
  R4.3.1.
- Fresh regression: R1 9/9, Wave 2 security 22/22, deployment configuration
  16/16, R3 30/30, and R4 36/36 PASS.
- Result: R4 BLOCKED; `R4-RUNTIME-01`, `R4-DESIGN-01`, and `R2-AGENCY-01`
  remain OPEN. No commit/tag and no Wave 5 work.

### M1 authorization design closure

- Added the Class A pure `ReuseAttestationService.js` and eight audited,
  system-managed request-evidence fields to each existing native HR Case
  subclass. No table, Form, Detail, PDF, supersession, or fulfillment artifact
  was added.
- Reuse now revalidates lifecycle eligibility without duplicating R3 decision
  selection, records APPROVED/DENIED native evidence, uses a deterministic
  context key for idempotency and stale-context invalidation, and leaves the
  underlying authorization unchanged.
- R4 source/unit suite: 52/52 PASS. Full regression/build/install evidence is
  R1 9/9, Wave 2 security 22/22, deployment configuration 16/16, and R3
  30/30 also PASS. Normal and frozen-key builds PASS with the same five TS11
  warnings. The generated-key diff adds 49 intentional metadata records and
  removes/mutates zero existing keys.
- Final normal install completed without `--reinstall`; rollback context
  `8386de02c3f6431068a35f2b2b013171`. Installed metadata reread confirmed all
  16 read-only/audited Reuse fields across both native subclasses and both
  production initiation rules remain inactive. Cross-scope inventory remains
  exactly two approved table reads and zero broad privileges.
- `R4-DESIGN-01` RESOLVED and R4 design FROZEN. `R4-RUNTIME-01` remains
  BLOCKED BY `R2-AGENCY-01`; lifecycle initiation remains inactive and Wave 5
  was not started.

## M4 - Fulfillment & Operations (Conditional Source / Unit)

- Branch: `feature/05-fulfillment-orchestration`, created from M1 commit
  `3483d1d`; starting tree clean and both R4 initiation rules inactive.
- Added five Class A deterministic services for routing, task planning,
  evidence, item/parent closure, and configuration-driven OM escalation.
- Extended existing native `sn_hr_core_task` with the approved task types,
  stable business key, authorization/access references, ARM/OAS metadata, and
  completion/exception/waiver evidence. Added zero custom tables.
- Added two Class A case entry-point Business Rules; both are installed inactive.
  Production execution remains blocked by M2/M3.
- Focused M4 tests: 26/26 PASS. Regression: R1 9/9, Wave 2 security
  22/22, deployment configuration 16/16, R3 30/30, R4 52/52 PASS.
- Normal and frozen-key SDK builds PASS with exactly the five pre-existing TS11
  qualifier warnings. Generated-key review: intentional additions only;
  existing-key mutations/deletions 0.
- Two normal install attempts failed before an install context with SDK
  `fetch failed`; OAuth was refreshed through the supported flow. A diagnostic
  normal install (no `--reinstall`) then PASSed with rollback context
  `0108e642c33e431068a35f2b2b013105`.
- Installed verification: M4 rules 2/2 inactive; R4 rules 2/2 inactive; three
  new fulfillment task choices reread by exact sys_id; production Staffing,
  Analytics, and OM tasks 0; custom fulfillment tables 0; cross-scope inventory
  unchanged at the two approved reads. The PDI Table API did not enumerate
  augmented HR Task dictionaries through `sys_dictionary`; this is recorded as
  an evidence limitation, not production runtime acceptance.
- Result: M4 IN PROGRESS; fulfillment source/unit foundation PASS; production
  runtime BLOCKED BY M2/M3; renewal/expiration/lapse PENDING; M5 not started.

## M2 — Approved Profile/Form Snapshot Architecture

- Baseline: `feature/05-fulfillment-orchestration` at `69601bf`; clean tree;
  R4 and M4 production entry points inactive.
- Implemented one Class A server resolver with authoritative profile precedence,
  configured title/organization fallbacks, and active supervisor-group
  validation. Added two optional reference variables and three ROB
  Configuration controls; no custom table.
- Retained the three failed case snapshot fields as protected compatibility
  metadata only. Disabled the obsolete correction UI and removed all active
  R3/R4 read/write dependencies.
- Authorization Form Position, Organization, and Supervisor are now read-only,
  audited historical context populated before signing; deterministic source
  evidence is stored with the form.
- Tests: M2 19/19; R1 9/9; Wave 2 security 22/22; deployment configuration
  16/16; R3 30/30; R4 52/52; M4 26/26 PASS.
- Normal and frozen-key builds PASS with exactly five unchanged TS11 warnings.
  Generated-key review contains only intentional M2 additions and zero existing
  key mutation/deletion.
- Three normal Australia installs completed without `--reinstall`; rollback
  contexts include `8232f28ac3be431068a35f2b2b013184`,
  `0e14fa02c3fe431068a35f2b2b0131bb`, and
  `26f43ac2c3fe431068a35f2b2b013103`. The same-version packages and the
  versioned `0.0.2` package processed zero new metadata. Direct installed
  reread confirmed the resolver and new dictionaries absent, so runtime tests
  could not execute.
- One scoped Background attempt to populate the existing configuration row
  produced unintended broad `GlideRecord.setValue` and `GlideRecord.update`
  Execute privileges (`e9137e0ec3be431068a35f2b2b013137` and
  `6913ba4ec3be431068a35f2b2b01315c`). Both were removed by exact sys_id;
  final broad privilege count is zero and the configuration remained unchanged.
- Result: M2 BLOCKED-PLATFORM; approved source/unit foundation PASS;
  `R2-AGENCY-01` OPEN; M3 not started.
- Durable blocked checkpoint: `01f5035` (`Preserve M2 profile authorization
  foundation pending PDI install`). The local `0.0.3` package contains all 12
  primary M2 metadata records plus the three existing Authorization Form
  snapshot dictionary updates; local and PDI application sys_id/scope/package
  identity match.
- One controlled normal `0.0.2` to `0.0.3` retry completed without
  `--reinstall` (rollback context `b59d76c2c372831068a35f2b2b013106`,
  BAK `BAK0002045`, blank error). Its 18 rollback sequences were limited to
  `sys_app`, `sys_db_object`, and one `sys_trigger`; post-install reread found
  the resolver, four new dictionaries, two variables, and five intended Read
  privileges all absent. No runtime test was started. M2 remains
  BLOCKED-PLATFORM and M3 is not ready.
