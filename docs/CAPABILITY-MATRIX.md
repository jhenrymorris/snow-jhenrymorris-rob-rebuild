# Capability Matrix

Appendix K — SDK Artifact Classification and Appendix L — PDI Capability Validation Matrix are authoritative. This file is an implementation pointer only. Unsupported or unproven Australia capabilities must be classified and recorded there; they must not be replaced with substitute custom architecture.

## R1 Classification

| R1 artifact | Class | Disposition |
|---|---|---|
| Four custom table schemas, fields, choices, indexes, forms, related list, roles, and controlled reference records | A — source-first | Implemented in Fluent; build/install/runtime evidence tracked separately |
| Existing access-item identity reconciliation | B — configure then transform | Completed on the Australia PDI through a controlled, rollback-recorded, idempotent in-place script after validation proved that neither `apply_once` nor normal `update` record metadata updates pre-existing installed table data. Stable explicit keys, sys_ids, codes, and references were preserved. No migration metadata remains in source. |
| Assignment-group records/membership and approved recertification/timing values | C — manual/environment | Never hard-coded; requires environment/business owner confirmation |
| HRSD intake, decisions, signatures/PDF, fulfillment, renewal, security hardening, reporting | D for R1 / deferred to approved later packages | No R1 implementation |

## R2 Classification and Australia Result

| R2 artifact | Class | Disposition |
|---|---|---|
| Scoped fields, choices, ACLs, validation rules, catalog variables/policies, and local tests | A - source-first | Implemented; local tests and both build gates pass |
| Existing HR Services, record producers, templates, taxonomy/content links, and producer scripts | B - configure then transform | Two native producers corrected in place for service resolution, `rich_description`, and authenticated identity stamping; SDK cannot coalesce/adopt the existing HR Core records |
| Exact HR Service caller-access records and synthetic personas | C - manual/environment | Two source-specific HR Service read requests were reviewed and allowed; temporary persona role assignments were removed |
| Scoped writes to native HR Case snapshot fields on Australia | PDI: D - unsupported/blocking; agency target: platform-owner / HR Core-owned implementation required | The PDI rule executes and validates, but snapshot writes do not persist. Option B resolves the target architecture without making runtime acceptance complete. The HR Access scope receives no broad write/API privilege. |

### R2.1 native snapshot persistence capability spike

| Test | Mechanism | Payroll | Workforce Administration | Privilege / security result | Classification |
|---|---|---|---|---|---|
| A | Same-record before-rule property assignment | FAIL; committed case reread showed all three snapshots blank | Not repeated after the identical native-table policy rejected the Payroll writes | Generated broad `GlideRecord.setValue` Execute API access, which is prohibited and was removed | D |
| B | Creation-time producer assignment and mapped producer variables | FAIL; direct `current` assignment and app-scoped mapped variables did not persist | Same HR Core producer/app-scope boundary; no broader repeat was authorized | App-scoped producer variables were inaccessible from HR Core; HR Core-owned variable creation was unavailable in the PDI | D |
| C | Exact table-specific cross-scope Write | Unsupported | Unsupported | Both target subclasses have `update_access=false`; Australia generated API Execute access rather than an exact table Write privilege | D |
| D | Supported declarative/native configuration | Unavailable | Unavailable | Native HR Core variable creation was read-only/disabled and exposed no Submit action; no safe Set Field Values/profile-derivation mechanism was available | D - BLOCKED-PDI |

R2.1 therefore confirms the blocker as an agency platform-owner capability
decision. No substitute case or snapshot table, global bypass, broad privilege,
or `--reinstall` path is approved.

### R2.2 approved target direction

Option B is approved: an agency-controlled HR Core-owned mechanism will
populate Position, Organization / DIR-DIV, and Supervisor snapshots on
`sn_hr_core_case_payroll` and `sn_hr_core_case_workforce_admin`. The exact HR
Core artifact is deliberately unselected pending agency design and validation.
Architecture decision: resolved. PDI implementation: unavailable. Agency
dependency: open. R2 production acceptance: incomplete.

### R3 conditional source/unit capability

| Artifact | Classification | Result |
|---|---|---|
| Authorization selector and scope comparator | Class A source-first | Implemented and unit validated |
| Expiration calculator | Class A source-first | Implemented and unit validated |
| Deterministic five-path decision service | Class A source-first | Implemented and unit validated |
| Native-subclass decision-output fields | Class A source-first metadata | Build validated; runtime persistence not activated |
| Runtime context acquisition/persistence | Conditional / agency-dependent | Not activated; must not imply R2 acceptance |

`R2-AGENCY-01` remains OPEN. Source tests use explicit synthetic snapshot values
and are not native persistence evidence.

## R4 capability spike — BLOCKED

Read-only Australia PDI inspection on 2026-08-15 established only a partial
native capability result:

| Capability | Evidence | Classification / result |
|---|---|---|
| Current Document Templates | Active `sn_doc` scope, version `27.1.1`; published ServiceNow Sign templates exist for `sn_hr_core_case` and `sn_hr_core_case_workforce_admin` | Class B/C candidate; availability proven, ROB configuration not proven |
| Current electronic signature | Active `sn_esign` 1.0.0, Digital Signature API 26.0.0, and Digital signature component 27.1.0; native `sn_esign_acknowledgement` retains user, document/revision, signature, acknowledgement, and creation time | Class B/C candidate; component availability proven, compliant two-signer ROB execution not proven |
| Participant sequencing | `sn_doc_template.set_signing_order` and ordered `sn_doc_participant` records are present; sample HR templates use ServiceNow Sign | Partial; employee → approval → supervisor sequence not runtime proven |
| PDF template/mapping | `sn_doc_pdf_template` and `sn_doc_pdf_template_mapping` are installed; PDF Generation Utilities is active | Partial; exact ROB data source, related-detail repetition, signed output, and attachment destination not proven |
| Final authoritative PDF | No Document Task records or completed ROB artifact were available as committed runtime evidence | Class D for this PDI spike until generation, association, immutability, and retention are demonstrated |

No cross-scope privilege from `x_2108496_hr_acces` to `sn_doc` or `sn_esign`
was present or created. No template, participant, signature, approval, or PDF
record was modified.

`R4-POLICY-01` is RESOLVED by Appendix B DOC-MAP-01 through DOC-MAP-04: printed
Date = Supervisor Signature Date / Final Authorization Date; IPA and WPC are
distinct electronic-only extensions; ARM remains non-rendered provisioning
metadata; and approved system-managed values render in a separate Electronic
Authorization Metadata section. `R4-PDI-01` remains OPEN because this policy
does not prove template/signature/PDF runtime capability.
