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
| Decision output model on native subclasses | `rob-case-security-fields.now.ts`; `authorization-decision-entry.server.js`; HR Core `RobHrCasePersistenceBridge.setRobDecision` | TM-98, TM-169 through TM-176 | Source/build validated; two production callers inactive; runtime persistence not yet installed/activated |
| No Wave 4+ side effects | inactive R3 entry points; fulfillment gate forced false during decision persistence | TM-98, TM-169 through TM-176 | Source/unit PASS |
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

## V2 R3 production adapter reconciliation (2026-08-25)

| Requirement | V2 evidence | Status |
|---|---|---|
| Production R3 invocation | Active gated Payroll `5fc23b27a0fd4e14af71b4455896f263` and Workforce `795fabaf203843a79117c1e346a57290` callers | PASS |
| ROB-only scope | `x_2166123_rob_auth_requested_itemsISNOTEMPTY` on both callers | PASS |
| Current R3 contract | `authorizationContext` present; legacy snapshot inputs 0 | PASS |
| System-managed persistence | HR Core bridge `f058c4eb837ec3104f5193a6feaad3fb`; narrow Execute `fb1908ef837ec3104f5193a6feaad34a` | PASS |
| Read-only outputs | Six decision/gate dictionaries on two subclasses read-only 12/12 | PASS |
| Standard install | IDE Build and Install PASS; rollback `082405e783b607104f5193a6feaad3c7`; no Reinstall | PASS |
| Governed lifecycle | V2 Supervisor Approval Flow absent; both lifecycle initiation rules inactive | OPEN |
| M4 boundary | Both ROB orchestration rules inactive | PASS / NOT STARTED |
| Overall | Invocation/persistence restored; complete M3 lifecycle runtime not yet accepted | M3 OPEN; M4 NOT READY |

## V2 native signing hard stop (2026-08-25)

| Requirement | V2 evidence | Status |
|---|---|---|
| Current R3 decision invocation | `HRC0001009` -> `New`; `ROBA0001002` created | PASS |
| Native employee signing task | `DOCT0001001`, governed employee participant, narrow caller records | PASS to launch gate |
| Native signing UI | Employee **Fill Document** returned `Attachment Not Found` | BLOCKED-PLATFORM |
| Governed source/parent | Published template is HR Case-bound; selector excludes non-Task Authorization Form | UNSUPPORTED |
| Approved PDF storage | Final PDF only on Authorization Form cannot be configured through this path | BLOCKED-PLATFORM |
| Security/safe state | Broad privileges 0; production template Published; copy inactive/Draft; M3/M4 entry rules inactive | PASS |
| Overall | Architecture/data-integrity change required to proceed | M3 BLOCKED-PLATFORM; M4 NOT READY |

## V2 restored native launch model (2026-08-25)

| Requirement | Corrected evidence | Status |
|---|---|---|
| Employee native execution | `GenerateDocumentAPI.initiateDocumentTasks`; employee-only template | SOURCE/BUILD PASS |
| Approval before supervisor signing | Employee template excludes Supervisor; existing approval response launches supervisor template | PRESERVED |
| Governed Supervisor | Authorization Form supervisor remains authoritative; `assigned_to` absent | PASS |
| Native parent | HR Case remains the supported Document Templates parent | PASS |
| Final governed PDF | Existing post-signature generator targets Authorization Form | SOURCE PASS / RUNTIME PENDING |
| Overall | Prior platform classification superseded by bounded implementation correction | PDI RETEST REQUIRED; M4 NOT READY |

## V2 governed approval to Supervisor signing boundary (2026-08-25)

| Requirement | Evidence | Status |
|---|---|---|
| Governed approval source | ROB-owned Flow operates on Authorization Form and runs as System User | PDI PASS |
| Governed Supervisor | Native approval assigned to Authorization Form supervisor; `assigned_to` is not authority | PDI PASS |
| Separate approval/signature | Flow persists approval; active same-table adapter `e56b96952f53473c96e6ec811ff0ec95` launches later native signature | INSTALLED; INCOMPLETE-SHELL RETRY CORRECTION PENDING |
| Supported native execution | `GenerateDocumentAPI.initiateDocumentTasks` with HR Case technical parent; matching tasks require execution and PDF references | SOURCE CORRECTION; BUILD/INSTALL/RETEST REQUIRED |
| Security boundary | Global-table response rule inactive; broad GlideRecord/native-case Write 0 | PASS |
| Final PDF | Existing post-signature generator targets Authorization Form only | RUNTIME RETEST REQUIRED |

## V2 production Form 1768 stage separation (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| Employee-before-approval | Employee-stage template remains `ROB Form 1768 Employee Signature` | PRESERVED |
| Supervisor signing after approval | Existing same-table launcher selects published `ROB Form 1768 Authorization` | SOURCE/BUILD/INSTALL PASS; PARTICIPANT ORDER BLOCKED BELOW |
| Reuse isolation | `ROB Reuse Supervisor Attestation` is no longer accepted by the Authorization Form evidence adapter | SOURCE/TEST PASS |
| Final governed PDF | Final renderer selects production `ROB Form 1768 Authorization` and targets the Authorization Form | SOURCE/BUILD/INSTALL PASS; RUNTIME BLOCKED BELOW |
| Security | Only exact caller PDF Template Read and Document Task Read were added; broad privileges remain prohibited | PDI CONFIGURATION PASS |

## V2 native participant-order boundary (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| IDE reconciliation | Commit `58ea979` pulled; Sync reviewed; Build and normal Install applied; generated-key diff empty | PASS |
| Governed native approval | Approval `c88b6eb3837a0b104f5193a6feaad3ee` assigned to V2 Supervisor A and persisted Approved | PASS |
| Production template launch | `DOCT0001007`; template `7119926383f247104f5193a6feaad318`; native execution and PDF present | PASS |
| Post-approval Supervisor signing | New template execution selected Employee participant order 1 and employee assignee | BLOCKED-PLATFORM |
| Supported API capability | `GenerateDocumentAPISNC.initiateDocumentTasks` has no participant/order/resume input | UNSUPPORTED |
| Security/safe state | Task unsigned/retained; admin restored; broad privileges and temporary roles 0; M4 inactive | PASS |
| M3/M4 status | Architecture decision required; no workaround or M4 activation performed | M3 BLOCKED-PLATFORM; M4 NOT READY |

## V2 conditional-participant runtime boundary (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| Preserve original production template | Template `7119926383f247104f5193a6feaad318`; two ordered participants; 28 mappings | PASS |
| Post-approval governed routing | Optional Employee resolver skips only after employee signature and explicit approval; `DOCT0001008` assigned to V2 Supervisor A | PASS |
| Native Supervisor signature | Accept callback fails in `snc_viewer.js:setSignatureField` on null `.style`; task remains Ready | BLOCKED-PLATFORM |
| Final PDF and activation | No Supervisor evidence, approved final PDF, activation, or fulfillment created | CORRECTLY ABSENT |
| Security/build | Admin restored; broad privileges/temporary roles 0; M4 inactive; all suites and normal/frozen builds pass | PASS |
| M3/M4 status | Supported no-new-template path exhausted at native signing runtime | M3 BLOCKED-PLATFORM; M4 NOT READY |

## V2 continuous native Sign correction (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| Original ordered execution | Lifecycle launches `ROB Form 1768 Authorization` once; no participant resume | SOURCE/TEST PASS |
| Employee evidence | Required Employee order 1/action `fill`; subject identity and shared execution enforced | SOURCE/TEST PASS; PDI CONFIG PENDING |
| Supervisor approval/signature | Required Supervisor order 2/action `fill` with mandatory signature mapping; accepted state `3` atomically persists both evidence sets | SOURCE/UNIT PASS; PDI RUNTIME PENDING |
| Denial | Refused state `7` requires decline reason, retains task/execution, denies form/details, and creates no final PDF or fulfillment | SOURCE/TEST PASS; PDI RUNTIME PENDING |
| Split runtime removal | Post-approval relaunch rule source-inactive; approval response rule remains inactive | SOURCE/BUILD PASS; INSTALL PENDING |
| Security and scope | No new table, field, role, broad privilege, native-case Write, or M4 activation | PASS |

## C1 split-stage implementation traceability (2026-08-27)

| Requirement | C1 implementation/evidence | Status |
|---|---|---|
| Employee signature | Active Published `sn_doc` template with one required Employee `Fill` participant sourced from `subject_person` and one mandatory signature mapping | PDI CONFIG PASS; RUNTIME PENDING |
| Supervisor approval | One ROB-owned Ask for Approval Flow on the governed Authorization Form; native approval record remains authoritative | CONFIG REVIEW PASS; FLOW INACTIVE |
| Denial | Rejected branch stores native approver/update evidence, marks approval complete with canonical Denied outcome, and denies the form plus pending details | CONFIG REVIEW PASS; RUNTIME PENDING |
| Supervisor signature | Active Published `sn_doc` template with one required governed Supervisor `Fill` participant and one mandatory signature mapping | PDI CONFIG PASS; RUNTIME PENDING |
| Final governed PDF | Existing active Published `ROB Form 1768 Authorization` retained as the 28-map renderer only | PDI CONFIG PASS; RUNTIME PENDING |
| Source lifecycle | Employee completion hands off to approval; Approved alone launches Supervisor signing; Supervisor completion requires prior approval before finalization | SOURCE/UNIT/BUILD PASS; INSTALL PENDING |
| M4 separation | M4 entry rules remain inactive and C1 creates no fulfillment tasks | SAFE STATE PASS |

## V2 continuous native Sign configuration boundary (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| Source deployment | Commit `221ec1d`; normal IDE Build and Install; live continuous evidence handler; split launcher inactive | PASS |
| Employee participant | Safe baseline restored: optional/advanced order-1 `fill` with original resolver | RESTORED |
| Supervisor participant | Existing required order-2 `fill` with governed resolver is the supported Australia ServiceNow Sign contract | CONFIGURATION MATCHING |
| Form 1768 mapping integrity | Production template active/Published; all 28 mappings and both signature mappings retained | PASS |
| Supported conversion path | Native form requires clearing/recreating complete mapping set; no direct metadata path or new architecture authorized | UNSUPPORTED WITHIN BOUNDED CORRECTION |
| Runtime/security | Focused runtime not started; lifecycle/M4 entry rules inactive; no broad privilege or new artifact | SAFE STOP |
| M3/M4 status | Irreversible mapping-integrity risk prevents reconciliation | M3 BLOCKED-PLATFORM; M4 NOT READY |

## V2 template-first M3 reconstruction authorization (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| Bounded native correction | Existing V2 application/scope retained; temporary parallel Draft template authorized; no table/field/role/runtime-engine change | APPROVED |
| Combined decision/signature contract | Accepted native Supervisor Fill/Submit populates separate approval and signature evidence fields; Refuse records Denial without signature | REQUIREMENT SUPERSEDED / SOURCE ALIGNED |
| Logical readiness contract | `scripts/validation/m3-form1768-template-contract.json` contains names, table, participant semantics, and 28 logical mapping keys without PDI sys_ids | SOURCE PASS |
| Read-only validator | `scripts/validation/m3-native-template-readiness.cjs` queries the three native Document Templates tables and validates the stable production contract only | UNIT 4/4 PASS; PDI PENDING |
| Runtime parity | One continuous execution enforces Employee `fill`, Supervisor `fill`, state `3` acceptance, and state `7` denial | SOURCE/R4 62/62 PASS / NATIVE CONFIG PENDING |
| M4 boundary | Both M4 entry rules remain inactive | PASS / NOT STARTED |

## V2 proven Fill/Refuse restoration (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| Australia participant semantics | ServiceNow Sign uses `Fill` with mandatory participant-bound signature mappings; `Sign` is reserved for external signing | CONFIRMED |
| Production preservation | Existing `ROB Form 1768 Authorization` remains active/Published with 28 mappings; no template copy or remap | READ-ONLY BASELINE PASS |
| Employee restoration | Order 1, required, `fill`, non-advanced `subject_person` | PDI CONFIG PENDING |
| Supervisor restoration | Existing order 2, required, `fill`, governed Authorization Form Supervisor resolver | READ-ONLY BASELINE PASS |
| Split path neutralization | Approval Flow, employee-only template, legacy response, and post-approval relaunch inactive | PDI CONFIG PENDING |
| Runtime acceptance | Approved New and Refuse Denial precede the remaining M3 matrix | PENDING |

## V2 focused Fill runtime outcome (2026-08-26)

| Requirement | Evidence | Status |
|---|---|---|
| Approved New | `HRC0001011`; `ROBA0001004`; Employee `DOCT0001011`; Supervisor `DOCT0001012`; shared execution; atomic approval/signature; one final Authorization Form PDF; Active; fulfillment 0 | PASS |
| Governed Denial fixture | `HRC0001012`; Employee `DOCT0001013` Closed; Supervisor `DOCT0001014` Ready for V2 Supervisor A on shared execution `83d5090883c38b104f5193a6feaad3f1` | REACHED NATIVE DECISION TASK |
| Native Refuse capability | Classic Fill Document and Employee Center My Tasks expose Save/Submit only; Australia Fill documentation contains no decline | UNSUPPORTED |
| State `7` evidence | Decline is documented for `Sign`, not PDF `Fill`; no supported Fill operation can produce required state/reason | BLOCKED-PLATFORM |
| Safe state | `DOCT0001014` untouched; no direct write, custom engine, broad privilege, or M4 activation | PASS |
| M3/M4 status | Full matrix stopped after focused Denial failed as required | M3 BLOCKED-PLATFORM; M4 NOT READY |

## C1 final M3 closeout (2026-08-27)

| Requirement | Final evidence | Status |
|---|---|---|
| Split signing and approval | Employee-only Fill, native Ask for Approval Approved/Rejected, Supervisor-only Fill, and 28-map final renderer all produced accepted evidence | PASS |
| New / Denial / Amendment / Renewal / Exception | Existing accepted C1 evidence retained; no closed scenario was restarted | PASS |
| Reuse | `HRC0001044` / `DOCT0001034`; current governed Supervisor attestation; no new governed form/detail/final PDF/supersession/M4 task | PASS |
| Retry/idempotency | Replayed completed Reuse event retained one task/execution/attachment and unchanged terminal evidence | PASS |
| Historical immutability | Live synthetic context mutation left `ROBA0001012` and final attachment hash unchanged; source context restored | PASS |
| Least privilege | Exact HR Core bridge Execute callers only; broad GlideRecord/native-case/native-task privileges and temporary roles remain zero | PASS |
| Regression/build | M2 19, R1 9, Security 22, Deployment 16, R3 30, adapter 13, R4 64, M4 26, template 7; normal/frozen builds PASS; keys clean | PASS |
| Milestone | C1 and M3 complete; M4 production runtime not activated | COMPLETE / C2 READY |
# C2 runtime disposition — 2026-08-27

C2 proved systems-only routing and retry idempotency on `HRC0001045` /
`HRT0001002`. The remaining M4 runtime requirements retain their existing
traceability but remain unaccepted because C0 capability `M5-12` was disproven:
normal IDE Build and Install could not find the scope's `sys_plugins` bootstrap
record and applied zero changes. See `docs/M4-RUNTIME-EVIDENCE.md`. No M3
requirement or M4 architecture was changed.

## C2 final M4 closeout (2026-08-28)

| Requirement | Final implementation/evidence | Status |
|---|---|---|
| Deterministic fulfillment routing | Systems-only, data/report-only, Mixed, WPC, and missing-OM outputs matched the frozen routing matrix | PASS |
| Retry/idempotency | Case/type business keys and bridge query-before-insert produced zero duplicate Staffing, Analytics, OM, or Exception tasks | PASS |
| Completion evidence | Correct parent/type/assignment, authorized fulfiller, terminal state, time, close notes, evidence, and outcome/waiver proof are required | PASS |
| Authorized Access Detail activation | Published native Update Record subflow activates only the exact Detail already matched by Authorization and Access Item; committed state is reread and verified | PASS |
| Waiver | `HRT0001003` retained authorized actor/reason/time/evidence and activated only `ROBD0001028` | PASS |
| Parent case closure | Partial completion retained an open case; eligible Mixed completion closed `HRC0001049` through `sn_hr_core.RobHrFulfillmentBridgeV2` | PASS |
| Least privilege | Broad GlideRecord/native-case/native-task privileges zero; unexpected RCA zero; four custom business tables; no fulfillment table | PASS |
| External boundary | ARM/OAS/FPPS-WTTS/eOPF/USA Staffing provisioning calls zero; notify-and-track only | PASS |
| Regression/build | M2 19, R1 9, Security 22, Deployment 16, R3 30, adapter 13, R4 64, M4 34, template 7; normal/frozen SDK builds and key/diff gates | PASS |
| Milestone | C2 and M4 complete; C3/M5 ready but not started | COMPLETE / C3 READY |

## C3 / M5 implementation start (2026-08-28)

| Requirement | Candidate implementation/evidence | Status |
|---|---|---|
| FR-23 / AC-22 | Daily Scheduled Script plus deterministic 90/60/30 and retry-safe service | SOURCE/FOCUSED TEST PASS; PDI runtime pending |
| FR-24 / AC-23 | Replacement-aware lapse, one notice, preserved history, no external deprovisioning | SOURCE/FOCUSED TEST PASS; PDI runtime pending |
| SEC-1 / SEC-2 | Governed Authorization/Detail/Configuration ACLs and parent-secured final PDF | SOURCE PASS; persona/direct-URL runtime pending |
| SEC-3 / AC-17 | Two event-driven notifications with attachments disabled and privacy-safe content | SOURCE PASS; native preview pending |
| RPT-1â€“RPT-8 | Eight native secured-report definitions and dashboard audience matrix documented | NATIVE CONFIGURATION/UAT pending |
| AUD-1â€“AUD-3 / RET-1 | Existing audit/history fields and no-delete model retained | SOURCE PASS; historical retrieval/retention review pending |
| M5 release | Focused M5 `11/11`, normal build PASS, expected new keys only | PRE-INSTALL PASS |

## C3 / M5 final release traceability (2026-08-29)

| Requirement | Final evidence | Status |
|---|---|---|
| FR-23 / AC-22 | Active daily job; 90/60/30 reminder and replay evidence on `ROBA0001040` | PASS |
| FR-24 / AC-23 | One-time lapse on `ROBA0001039`, replacement suppression by `ROBA0001041`, retained history/PDF, zero external calls | PASS |
| SEC-1 / SEC-2 | Eight-persona UAT and unrelated-user Authorization, Detail, PDF, and direct-URL denial | PASS |
| SEC-3 / AC-17 | Privacy-safe renewal/lapse notification previews with attachments disabled | PASS |
| RPT-1–RPT-8 outcomes | Restricted authorization/renewal/lapse and fulfillment reports plus owner-restricted operational dashboard | PASS |
| AUD-1–AUD-3 / RET-1 | Historical authorization, Detail, PDF, replacement, reminder, and lapse evidence retained | PASS |
| M5 release | C3 10/10; full regression and normal/frozen builds PASS; counts clean | COMPLETE |
