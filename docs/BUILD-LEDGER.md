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
