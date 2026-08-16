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

### R4.2 native runtime proof

Controlled Australia runtime testing materially advanced the capability result,
but did not satisfy every mandatory `R4-PDI-01` acceptance criterion:

| Capability | Runtime evidence | Classification / result |
|---|---|---|
| HR Core HTML Document Template | Temporary HR Core-owned template `41103ca0c3facb1068a35f2b2b0131b0` rendered native case data and ordered participants | Class C capability configuration; PASS for mechanics, not production Form 1768 fidelity |
| Employee signing | DOCT0001003 closed by Amos Linnan at `2026-08-15 23:18:08` | PASS; intended employee identity and timestamp persisted |
| Supervisor attestation/signing | DOCT0001004 closed by Rebekah Lindboe at `2026-08-15 23:19:43` after employee completion | PARTIAL PASS; acknowledgement plus signature persisted, but a distinct approval record was not produced |
| PDF output and association | System attachment `0876f06cc33ecb1068a35f2b2b01313a`, `application/pdf`, 11,519 bytes, on native case HRC0001026 | PASS for PDF generation and native-case association |
| Completed-artifact control | Execution `a635f8e4c33ecb1068a35f2b2b01316d` is closed; completed signer UI is read-only | PARTIAL PASS; replacement audit/version behavior was not exercised |
| Denial and independent history | Refusal control was visible; a second execution could not be started after Preview opened only a blank child tab | NOT PROVEN |
| Full Form 1768 rendering | Not attempted because the minimal capability path did not fully pass | NOT RUN |

The copied native template retained unrelated source-template body content, so
the minimal rendering was not clean enough for production use. All temporary
templates are non-published (`draft` or `edit`), both intake template bindings
were removed, and the successful synthetic case/PDF/task chain is retained only
as audit evidence. No broad cross-scope privilege remains.

`R4-PDI-01` therefore remains OPEN. Classification is Class C for the manual
PDI capability proof and Class D for the still-unproven complete ROB runtime.

### R4.2.1 remaining runtime and Form 1768 proof

The continuation proved the remaining native mechanics except for the approved
signed-date/content contract:

| Capability | Runtime evidence | Classification / result |
|---|---|---|
| Explicit supervisor decision plus signature | DOCT0001006 persisted `Supervisor Authorization Decision: APPROVED` in the signed body and was closed/signed by Rebekah Lindboe at `2026-08-16 03:04:45`; PDF `00f925a4c33a0f1068a35f2b2b0131a2` was generated | Class C; PASS as one combined native approval/attestation stage. The generic task `approval` field remains `not requested`; no separate approval table is required for this proof. |
| Executed refusal | DOCT0001008 closed in refused state `7` by Rebekah Lindboe at `2026-08-16 03:07:57`, with persisted decline reason; no PDF was created for HRC0001032 | Class C; PASS |
| Independent signed history | V1 PDF `0876f06cc33ecb1068a35f2b2b01313a` and V2 PDF `00f925a4c33a0f1068a35f2b2b0131a2` remain distinct, independently associated, and unchanged since creation; signer tasks remain intact | Class C; PASS for independent native history. Native regeneration explicitly replaces the current attachment and must not be used for governed amendment/renewal history. |
| Clean Form 1768 rendering | HRC0001033 / DOCT0001009-1010 produced PDF `668b256cc33a0f1068a35f2b2b0131f6`; April 2026 structure, IPA, WPC, signatures, and the separate Electronic Authorization Metadata section rendered without sample contamination or ARM | Class C; PASS for clean layout/content mechanics |
| Final Authorization Date and signature-time metadata | `${Date}` resolved when the document body was prepared. The final task body therefore does not bind the printed Date or metadata rows to the later persisted supervisor/employee task timestamps. A different-day execution cannot correct that semantic mismatch. | Class D / BLOCKED; platform-owner-supported signed-content enrichment or an approved alternate native design is required. |

Cleanup restored the Analytics HR case template without a document-template
binding and returned all four capability templates to non-published `draft` or
`edit` state. One prohibited `GlideRecord.setValue` Execute privilege created
during the earlier R4.2 run (`ef33bcacc3facb1068a35f2b2b01312a`) was found,
deleted, and verified absent. Only the two approved read privileges remain.

`R4-PDI-01` is therefore **BLOCKED**, not resolved. Production lifecycle source
must not start until the platform owner approves and proves the signed-date and
electronic signature-timestamp rendering mechanism.
