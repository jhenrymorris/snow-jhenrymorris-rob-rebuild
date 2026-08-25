# Requirements Traceability Matrix
## HR Access ROB Authorization

Appendix A is the authoritative Australia PRD traceability baseline. This file records repository implementation evidence only. Existing Wave 1/2 source statuses are historical source/build evidence and do not establish Australia install, runtime, security, or UAT PASS status. R1 and R2 must revalidate them.

Status values: Planned, In Development, Implemented, Tested, Accepted, Deferred.

| Requirement | SDK artifact | Native/manual artifact | Test reference | Status |
|---|---|---|---|---|
| FR-1 | Staffing list collector, access-item ACLs, deployment contract and verifier | Native Staffing HR service, producer, category, topic and template | TM-01, TM-83, TM-84 | Australia runtime verified: service visible, native case, exact three Staffing items |
| FR-2 | Analytics list collector, access-item ACLs, deployment contract and verifier | Native Analytics HR service, producer, category, topic and template | TM-02, TM-83, TM-84 | Australia runtime verified: service visible, exact three Analytics items, WPC only here |
| FR-3 | Table extensions, intake variable sets, conditional Access End Date policy and validation support | Native producer mappings | TM-03, TM-04, TM-83 | SDK configuration implemented; native deployment verification pending |
| FR-4 | Four-way self-submission identity authorization | Intake restriction | TM-05, TM-77 | Implemented; PDI validation pending |
| DEFERRED-1 | Delegated supervisor and authorized-HR submission design is documented but not implemented or activated | `docs/decisions/DEFERRED-DELEGATED-SUBMISSIONS.md`; no delegated role, fields, feature flags, or code | TM-05, TM-77 | Deferred |
| FR-5 | AuthorizationRepository | None | TM-06 | Planned |
| FR-6 | AccessComparisonService | None | TM-07, TM-08 | Planned |
| FR-7 | AuthorizationDecisionService | Lifecycle flow | TM-09 | Planned |
| FR-8 | AuthorizationDecisionService | Lifecycle flow | TM-10 | Planned |
| FR-9 | AccessComparisonService | Lifecycle flow | TM-08 | Planned |
| FR-10 | Lifecycle fields | Native HR e-signature | TM-11 | Planned |
| FR-11 | Gate fields and lifecycle | Native approval and e-signature | TM-12 | Planned |
| FR-12 | Task-generation logic | Native Staffing HR task | TM-13 | Planned |
| FR-13 | Task-generation logic | Native Analytics HR task | TM-14 | Planned |
| FR-14 | Task grouping | Native HR tasks | TM-15 | Planned |
| FR-15 | Routing snapshots | Analytics and OM HR tasks | TM-16 | Planned |
| FR-16 | HR task extension fields | Native close process | TM-17 | Planned |
| FR-17 | Case/authorization references | Related lists | TM-18 | Planned |
| FR-18 | Report metadata | Dashboard layout | TM-19 | Planned |
| FR-19 | Lifecycle fields | Native document template | TM-20 | Planned |
| FR-20 | Subject reference | Native e-signature assignment | TM-21 | Planned |
| FR-21 | ExpirationDateService | None | TM-22 | Planned |
| FR-22 | ExpirationDateService | None | TM-23 | Planned |
| FR-23 | Scheduled flow and reminder fields | Notifications | TM-24 to TM-28 | Planned |
| FR-24 | Status logic | Lapse notification/worklist | TM-29 | Planned |
| EX-1 | Decision exception | Exception HR task | TM-30 | Planned |
| EX-2 | Lifecycle logic | Native denial behavior | TM-31 | Planned |
| EX-3 | Fulfillment exception | Exception HR task | TM-32 | Planned |
| EX-4 | Decision logic | None | TM-33 | Planned |
| EX-5 | Validation/decision logic | Intake validation | TM-04, TM-34 | Planned |
| EX-6 | DuplicateRequestService | Exception HR task | TM-35 | Planned |
| EX-7 | Task grouping | Native HR tasks | TM-15 | Planned |
| EX-8 | Gate logic | Native signature task | TM-36 | Planned |
| EX-9 | Escalation logic | Notification | TM-37 | Planned |
| EX-10 | Case lifecycle support | Native withdrawal behavior | TM-38 | Planned |
| RPT-1 | Report definition | Dashboard layout | TM-39 | Planned |
| RPT-2 | Report definition | Dashboard layout | TM-40 | Planned |
| RPT-3 | Report definition | Dashboard layout | TM-41 | Planned |
| RPT-4 | Report definition | Dashboard layout | TM-42 | Planned |
| RPT-5 | Report definition | Dashboard layout | TM-43 | Planned |
| RPT-6 | Report definition | List/report access | TM-44 | Planned |
| RPT-7 | Report definition | Dashboard layout | TM-45 | Planned |
| RPT-8 | Report definition | Worklist/dashboard | TM-46 | Planned |
| SEC-1 | ACLs | HRSD contextual security | TM-47 to TM-54 | Planned |
| SEC-2 | Attachment ACL strategy | Direct URL validation | TM-55 | Planned |
| SEC-3 | Notification definitions | Template review | TM-56 | Planned |
| SEC-4 | Status/supersession fields | Records guidance | TM-57 | Planned |
| SEC-5 | Schema review | Manual PII review | TM-58 | Planned |
| AUD-1 | Exact references | Related lists | TM-18 | Planned |
| AUD-2 | Audit-enabled fields | Native histories | TM-59 | Planned |
| AUD-3 | Reports and ACLs | Retrieval validation | TM-44 | Planned |
| RET-1 | No automatic deletion | Records-owner validation | TM-60 | Planned |
| SDK-LIM-1 | Four ROB Configuration group references and the Analytics Operations Manager reference retain `referenceQual: 'active=true'` and `useReferenceQualifier: 'simple'`; SDK 4.8.1 emits a non-blocking diagnostic inconsistency | Validate installed dictionary mode and active reference-picker behavior; qualifiers are not ACLs; re-evaluate after SDK upgrade | TM-61, TM-84 | Implemented |

## Step 26 Implementation

| Step | SDK artifact | Test reference | Status |
|---|---|---|---|
| Step 26 - Administrative navigation and forms | `src/fluent/modules/rob-administration-menu.now.ts`; `src/fluent/forms/*.now.ts` | TM-69, TM-70, TM-73 | Implemented |

## Wave Mapping

| Wave | Primary scope |
|---|---|
| Wave 1 | Custom tables, roles, reference data |
| Wave 2 | HR case/task extensions and cross-scope access |
| Wave 3 | Authorization decision and expiration logic |
| Wave 4 | Approval, signature, PDF, and lifecycle |
| Wave 5 | Fulfillment and exception tasking |
| Wave 6 | Renewal, lapse, and reminder processing |
| Wave 7 | Security, audit, and notifications |
| Wave 8 | Reporting, ATF, manual tests, and hardening |

## Wave 2 requester-profile security remediation

| Requirement / finding | SDK artifact | Test reference | Status |
|---|---|---|---|
| FR-3 requester Position, Organization, and Supervisor snapshots | Fields remain on both native subclasses; agency HR Core-owned Option B enrichment is required (`R2-AGENCY-01`) | TM-75, TM-88–TM-96 | BLOCKED-PDI; architecture direction approved, agency implementation and runtime proof open |
| FR-4 self-submission and trusted ROB provenance; delegated submission remains deferred | `rob-requester-profile-security.now.ts`; `requester-profile-snapshot.server.js`; exact common intake notice; `docs/decisions/DEFERRED-DELEGATED-SUBMISSIONS.md` | TM-05, TM-76, TM-77, TM-84 | `gs.getUserID()` is the sole requester source; supplied mismatches fail before profile lookup; delegated capability remains documentation-only; native producer correction and PDI validation pending |
| EX-1 / R2-F01 supervisor exception stop and native task | `create-supervisor-exception-task.server.js`; block/gate fields; native HR Task ROB Task Type | TM-78 | Implemented; PDI validation pending |
| R2-F02 controlled audited correction | `requester-profile-correction.server.js`; `requester-profile-correction.now.ts`; correction evidence fields and ACLs | TM-79 | Implemented; PDI validation pending |
| R2-F03 ACL and cross-scope runtime behavior | Declarative field ACLs plus approved HR Core-owned Option B boundary; no broad CrossScopePrivilege | TM-81, TM-86, TM-87 | BLOCKED-PDI: exact reads work; application-owned writes do not persist across the native table boundary; broad generated API privilege removed |
| R2-AGENCY-01 HR Core-owned snapshot population | Agency-owned native HRSD enrichment on Payroll and Workforce Administration cases; exact artifact unselected | TM-88–TM-96 | OPEN — required for R2 production acceptance |
| R2-F04 least-privilege snapshot reads | Snapshot relationship read ACLs; internal evidence role ACLs | TM-80 | Source implemented; PDI persona/channel evidence required |
| R2-F05 mutable discriminator | Active stable HR Service value/class validation plus active category-valid item validation | TM-76 | Implemented; PDI producer timing required |
| R2-F06 source-complete integration | Source-owned dictionaries, rules, ACLs, task field, UI action, generated keys | TM-74, TM-82 | Implemented; final frozen-key validation pending |
| Requested Access Items catalog resolution | Exact list collectors plus active-row `snc_internal` table/field reads; ROB Admin maintenance ACLs; explicit `index.now.ts` ACL import; no employee create/write/delete grants | TM-83 | Corrected source builds the exact ten-ACL set; authorized installation and PDI persona validation remain pending |
| Native Wave 2 deployment contract | `wave-2-deployment-expectations.json`; nested-value parser; read-only `verify-wave-2-deployment.ps1`; explicit native ownership boundary | TM-84 | Corrected verifier is fail-closed for producer policy, all six complete rows, exact ACLs, and required configuration; native corrections and authorized re-verification remain pending |

## Wave 3 Conditional Decision Engine

| Requirement | Source artifact | Test | Status |
|---|---|---|---|
| Deterministic five-path decision | `AuthorizationDecisionService.js` | TM-97 / W3-01–W3-27 | Source/unit PASS |
| Existing authorization selection and scope delta | `AuthorizationRepository.js` | TM-97 | Source/unit PASS |
| Configuration-driven expiration and grace | `ExpirationDateService.js` | TM-97 | Source/unit PASS with synthetic configuration |
| Decision output model on native subclasses | `rob-case-security-fields.now.ts` | TM-98 | Build validated; runtime persistence not activated |
| No Wave 4+ side effects | pure source modules; no runtime trigger | TM-98 | Source/unit PASS |
| Native persisted snapshot-dependent evaluation | `R2-AGENCY-01` | TM-88–TM-96, TM-99 | BLOCKED-AGENCY; remains OPEN |

## Wave 4 Capability Gate

| Requirement | Artifact / dependency | Test | Status |
|---|---|---|---|
| Current Document Templates and ServiceNow Sign availability | Native `sn_doc` / `sn_esign` applications | TM-100 | PASS — native HR Core rendering/task/PDF mechanics proven |
| Employee → supervisor approval → supervisor signature | `R4-PDI-01` controlled native runtime configuration | TM-101 | PASS for native combined stage — signed body contains explicit APPROVED and Rebekah identity/timestamp persisted; no custom approval table |
| Exact April 2026 Form 1768 rendering policy | Appendix B DOC-MAP-01 through DOC-MAP-04 and `docs/FIELD-MAP.md` | TM-102, TM-109 | PASS for native capability — accepted post-sign PDF binds committed employee/supervisor timestamps and Final Authorization Date to supervisor date; production lifecycle binding remains open |
| Exactly one authoritative immutable signed PDF | `R4-PDI-01` native output and attachment validation | TM-103, TM-108, TM-109 | PASS for capability / production open — distinct final attachment and independent history proven; Authorization Form-only placement/security remains production R4 work |
| Native signer isolation and incomplete-chain guard | Ordered native document tasks | TM-105–TM-107 | PASS for capability — isolation, incomplete chain, and executed supervisor refusal all proven |
| Lifecycle implementation and guards | No R4 source artifact created | TM-104 | NOT RUN — capability-first stop condition |

## Wave 1 Batch 1 Implementation

| Step | SDK artifact | Test reference | Status |
|---|---|---|---|
| Step 21 — Application roles | `src/fluent/roles/rob-roles.now.ts` | TM-71 | Implemented |
| Step 22 — ROB Configuration | `src/fluent/tables/rob-configuration.now.ts`; `src/fluent/records/default-rob-configuration.now.ts` | TM-62; Appendix M W1-09–W1-14 | R1 PASS — source/schema installed and stable active record reconciled to `2026.04` |
| Step 23 — ROB Access Item Reference | `src/fluent/tables/rob-access-item-reference.now.ts`; `src/fluent/records/starter-rob-access-items.now.ts` | TM-63, TM-64; Appendix M W1-15–W1-16 | R1 PASS — six stable identities reconciled and runtime verified |

## R4.3 authorization lifecycle implementation

| Requirement | Source / evidence | Status |
|---|---|---|
| New, Amendment, Renewal governed preparation | `AuthorizationLifecycleService.js`, `AuthorizationScopeService.js`, and guarded runtime scripts | Source/unit PASS; runtime BLOCKED |
| Native employee and supervisor evidence | `SignatureExecutionService.js`, native-evidence handler, and production template `f99c3c0ac372031068a35f2b2b013138` | Source/unit PASS; template configured; controlled lifecycle runtime READY FOR M3 |
| Denial and zero final PDF | Native-evidence handler and R4 suite | Source/unit PASS; production runtime not run |
| Post-signature PDF activation/lineage | `AuthorizationFinalizationService.js` and PDF guard/finalization rules | Source/unit PASS; Authorization Form attachment runtime not run |
| Reuse | `ReuseAttestationService.js`; audited case evidence fields on both native subclasses; no new form/details/PDF/supersession | M1 source/unit PASS — request-level contract frozen; `R4-DESIGN-01` RESOLVED; runtime is an M3 gate |
| Profile/form snapshots | `RobProfileAuthorizationContext` and governed Authorization Form fields | Architecture/source PASS; `R2-AGENCY-01` OPEN/BLOCKED-PLATFORM because Australia did not install the new metadata |

## M4 Fulfillment Traceability

| Requirement | Source / test | Status |
|---|---|---|
| AC-8 / W5-01, W5-04 Staffing grouping | `FulfillmentRoutingService`, `FulfillmentOrchestrationService`, TM-118 | Source/unit PASS |
| AC-9 / W5-02, W5-05 Analytics grouping | Same services, TM-118 | Source/unit PASS |
| AC-10 / W5-03 mixed split | Same services, TM-118 | Source/unit PASS |
| AC-11 / W5-06-W5-08 WPC/OM/Exception | Routing/orchestration services, TM-119-TM-120 | Source/unit PASS; production OM fixture blocked |
| AC-12 / W5-09 closure guard | `FulfillmentEvidenceService`, `FulfillmentClosureService`, TM-122-TM-123 | Source/unit PASS |
| W5-10-W5-12 evidence/waiver | Evidence service and native HR Task fields, TM-122 | Source/unit PASS |
| W5-15 overdue OM escalation | `FulfillmentEscalationService`, TM-124 | Source/unit foundation PASS; production notification Class C |
| IDP-04-IDP-07 | Stable case/type key and existing-task checks, TM-121 | Source/unit PASS |
| Production fulfillment runtime | Inactive Business Rules on both native case subclasses | BLOCKED BY M2/M3 |

## Wave 1 Batch 2 Implementation

| Step | SDK artifact | Test reference | Status |
|---|---|---|---|
| Step 24 — ROB Authorization Form | `src/fluent/tables/rob-authorization-form.now.ts` | TM-65, TM-66, TM-72 | R1 PASS — form, numbering, labels, read-only version, states, and related list verified in Australia |
| Step 25 — Authorized Access Detail | `src/fluent/tables/authorized-access-detail.now.ts` | TM-67, TM-68; Appendix M W1-05–W1-08, W1-18 | R1 PASS — exact managed lifecycle choices and zero broken references verified in Australia |

## M2 Approved Profile/Form Snapshot Traceability

| Requirement | Source / evidence | Status |
|---|---|---|
| Authoritative Position | `RobProfileAuthorizationContext`; HR Profile Position then configured user-title fallback | Source/unit PASS |
| Authoritative Organization | Resolver; HR Position department, user department, then configured approved-root fallback | Source/unit PASS |
| Constrained Supervisor | Resolver; manager default plus active configured-group validation | Source/security unit PASS |
| Historical context | Authorization Form `position_title`, `organization`, `supervisor`, `profile_context_evidence` | Source/unit PASS; signing gate enforced |
| Native-case dependency retirement | Lifecycle/decision source no longer reads the three legacy snapshot fields; former correction action inactive | Source/security PASS |
| Reuse preservation | Existing `ReuseAttestationService`; current resolved Supervisor only; historical form unchanged | R4 52/52 PASS |
| R2-AGENCY-01 | Approved architecture revision, supported manual metadata recovery, HR Core bridge, and PDI validation | RESOLVED FOR PDI VALIDATION; Australia SDK installer defect remains open; M3 preflight is separately blocked by production signing binding |

## M3 Production Authorization Runtime

| Requirement | Evidence | Status |
|---|---|---|
| Production lifecycle entry | Exact Payroll/Workforce records exist but installed scripts are pre-M2 and inactive | BLOCKED before activation |
| Governed supervisor routing | Template `f99c3c0ac372031068a35f2b2b013138` Supervisor participant uses native case `assigned_to`, not Authorization Form `supervisor` | BLOCKED-PLATFORM / security review required |
| Post-signature finalization | Evidence-capture and attachment-finalization rules exist; automatic governed signing launch/PDF generation binding is not configured | BLOCKED |
| Five production paths | New, Denial, Amendment, Renewal, and Reuse were not executed after the mandatory signer-route stop | NOT RUN |
| M4 readiness | M4 entry rules remain inactive and no fulfillment task was created | NOT READY |

### M3 governed signer binding follow-up

| Requirement | Evidence | Status |
|---|---|---|
| Governed Supervisor routing | Participant `a235d582c3f6031068a35f2b2b01316b` advanced resolver reads associated Authorization Form Supervisor; no `assigned_to` | Configuration/source PASS |
| Production signing launch | Controlled `HRC0001061`; Document Templates read fenced before task creation; RCA `bcd68e66c3728b1068a35f2b2b0131ba` denied | BLOCKED-PLATFORM |
| Post-signature finalization | Deterministic source exists; runtime not reached because native signing launch was fenced | Source PASS / runtime BLOCKED |
| Reuse attestation | Published native template and governed participant configured; production runtime not reached | Configuration PASS / runtime BLOCKED |
| Security | Generated broad setValue/insert/update privileges removed; no new caller access approved; R4/M4 rules inactive | Cleanup PASS |
| M3/M4 status | Remaining lifecycle scenarios stopped at mandatory security boundary | M3 BLOCKED-PLATFORM; M4 NOT READY |

### M3 RCA recovery and native denial boundary

| Requirement | Evidence | Status |
|---|---|---|
| Narrow Document Templates caller access | Exact Payroll and Workforce PDF Template Read plus Document Task Read RCAs; caller-specific only | PASS |
| Governed Supervisor signing | `ROBA0001014`; supervisor task `DOCT0001019` assigned to snapshotted Robyn, not case `assigned_to` | PASS |
| Post-signature finalization | PDF `ffea3266c37e8b1068a35f2b2b01312d` generated after supervisor completion and attached only to the Authorization Form | PASS |
| Supervisor denial/refusal | Native PDF Fill action set has no supported persisted Deny/Refuse action; Review does not supply signature semantics | BLOCKED-PLATFORM |
| Remaining lifecycle paths | Amendment, Renewal, and Reuse stopped after mandatory denial capability failure | NOT RUN |
| Security and activation | Generated broad privileges removed; both R4 and both M4 entry rules inactive | PASS |
| M3/M4 status | Platform-owner/ServiceNow action required for denial contract | M3 BLOCKED-PLATFORM; M4 NOT READY |

### M3 separate supervisor decision traceability

| Requirement | Evidence | Status |
|---|---|---|
| Explicit governed Supervisor decision | Native approval `0db9cb6ac332cb1068a35f2b2b013146`; approver Robyn; Rejected with persisted decision time/comment | PASS |
| Denied authorization outcome | Synthetic `ROBA0001015` and its one detail Denied; no approved PDF, supervisor signature, activation, or fulfillment | FUNCTIONAL PASS |
| Approved branch preserves signature requirement | Source launches the separate Supervisor PDF signature only after native Approved; prior production New remains runtime PASS | SOURCE PASS / PRIOR RUNTIME PASS |
| Production-safe response persistence | Scoped response created generic `GlideRecord.setValue` and `GlideRecord.update` privileges | BLOCKED-PLATFORM |
| Safe closeout | Generated privileges and abstract HR Case RCA removed; approval response, both R4 entry rules, and both M4 rules inactive | PASS |
| Remaining paths | Amendment, Renewal, and Reuse not resumed after the security stop | NOT RUN |

The required next boundary is platform-owner-approved native Flow/HRSD
orchestration for the approval response. PDF-task denial workarounds,
`assigned_to` manipulation, bridge expansion, and generic GlideRecord access
remain prohibited.

### M3 ROB-owned Flow orchestration attempt

| Requirement | Evidence | Status |
|---|---|---|
| Native decision action | Installed Ask For Approval action and documented SDK output contract | CAPABILITY PRESENT |
| Governed signing action | Installed Document Templates Create Document Task action | CAPABILITY PRESENT |
| ROB-owned orchestration | Workflow Studio component-load/navigation failure; scoped Flow count 0 before/after | BLOCKED-PLATFORM |
| Runtime scenarios | No production Flow; no lifecycle entry activation | NOT RUN |
| Security | No new privileges; provisional response and R4/M4 entry rules inactive | PASS |
| M4 readiness | Native approval response boundary remains unavailable | NOT READY |

### M3 ROB-owned Flow configured; R3 fixture boundary

| Requirement | Evidence | Status |
|---|---|---|
| ROB-owned approval response | Active/published Flow `9fea8036c3fecb1068a35f2b2b013184` in scope `x_2108496_hr_acces` | CONFIGURED |
| Governed Supervisor | Ask For Approval and Supervisor Document Task derive from Authorization Form supervisor; `assigned_to` dependency 0 | PASS |
| Rejected/Approved branching | Rejected denies form/pending details; Approved records evidence and launches signing | CONFIGURATION PASS |
| Controlled R3 input | `HRC0001086` has correct native identity but no writable supported UI surface for the four read-only decision outputs | BLOCKED-PLATFORM |
| Security cleanup | Temporary role 0; broad GlideRecord privileges 0; R4/M4 entry rules inactive | PASS |
| M3/M4 status | Approval Flow exists but runtime cannot proceed without supported committed R3 decision input | M3 BLOCKED-PLATFORM; M4 NOT READY |

### M3 R3 live runtime reconciliation gate

| Requirement | Evidence | Status |
|---|---|---|
| Exact runtime identity | `sys_module` `1a197e45de33416ea795141a77307f5d`; generated key and repository source resolve to the same artifact | PASS |
| Installed/committed comparison | Live uses three legacy snapshot inputs; committed source uses the four `authorizationContext` values | DRIFT CONFIRMED |
| Supported native reconciliation | Module content disabled on native form; absent from legacy Studio; current Studio directs Fluent source to ServiceNow IDE | UNSUPPORTED ON PDI |
| Identity/security preservation | No PDI write, metadata manipulation, install, reinstall, privilege, role, or generated-key change | PASS |
| Runtime acceptance | Reconciliation prerequisite failed; New, Denial, Amendment, Renewal, Reuse, and Exception not executed in this gate | NOT RUN — HARD STOP |
| M3/M4 status | Australia SDK installer defect prevents the only supported reconciliation path permitted by this package | M3 BLOCKED-PLATFORM; M4 NOT READY |

## V2 M3 runtime boundary (2026-08-24)

| Requirement | V2 evidence | Status |
|---|---|---|
| Current post-M2 R3 implementation installed | `sys_module` `9c06697e84f74fb09e05847797fa793b` | PASS |
| Class C environment configuration | Supervisor group, organization root, title fallback | PASS 3/3 |
| Narrow HR Core prerequisite persistence | bridge `f058c4eb837ec3104f5193a6feaad3fb`; Execute `fb1908ef837ec3104f5193a6feaad34a` | PASS |
| Production R3 invocation | 0 invoking BR/SI/Flow/Action | BLOCKED |
| System-managed R3 output persistence | no approved complete-output writer; existing bridge is M2-only | BLOCKED |
| M3 lifecycle acceptance | lifecycle rules retained inactive | NOT RUN |
| M4 production runtime | entry rules retained inactive | NOT READY |
