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

## Wave 1 Batch 1 Implementation

| Step | SDK artifact | Test reference | Status |
|---|---|---|---|
| Step 21 — Application roles | `src/fluent/roles/rob-roles.now.ts` | TM-71 | Implemented |
| Step 22 — ROB Configuration | `src/fluent/tables/rob-configuration.now.ts`; `src/fluent/records/default-rob-configuration.now.ts` | TM-62; Appendix M W1-09–W1-14 | R1 PASS — source/schema installed and stable active record reconciled to `2026.04` |
| Step 23 — ROB Access Item Reference | `src/fluent/tables/rob-access-item-reference.now.ts`; `src/fluent/records/starter-rob-access-items.now.ts` | TM-63, TM-64; Appendix M W1-15–W1-16 | R1 PASS — six stable identities reconciled and runtime verified |

## Wave 1 Batch 2 Implementation

| Step | SDK artifact | Test reference | Status |
|---|---|---|---|
| Step 24 — ROB Authorization Form | `src/fluent/tables/rob-authorization-form.now.ts` | TM-65, TM-66, TM-72 | R1 PASS — form, numbering, labels, read-only version, states, and related list verified in Australia |
| Step 25 — Authorized Access Detail | `src/fluent/tables/authorized-access-detail.now.ts` | TM-67, TM-68; Appendix M W1-05–W1-08, W1-18 | R1 PASS — exact managed lifecycle choices and zero broken references verified in Australia |
