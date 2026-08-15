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
