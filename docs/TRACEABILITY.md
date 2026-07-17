# Requirements Traceability Matrix
## HR Access ROB Authorization

Status values: Planned, In Development, Implemented, Tested, Accepted, Deferred.

| Requirement | SDK artifact | Native/manual artifact | Test reference | Status |
|---|---|---|---|---|
| FR-1 | HR case support fields | Staffing HR service and Employee Center entry | TM-01 | Planned |
| FR-2 | HR case support fields | Analytics HR service and Employee Center entry | TM-02 | Planned |
| FR-3 | Table extensions and validation support | Intake variables and UI policies | TM-03, TM-04 | Planned |
| FR-4 | Self-submission logic | Intake restriction | TM-05 | Planned |
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
| SDK-LIM-1 | Four ROB Configuration group references retain `referenceQual: 'active=true'` and `useReferenceQualifier: 'simple'`; SDK 4.8.1 emits a non-blocking diagnostic inconsistency | Validate installed dictionary mode and active-group picker behavior; qualifiers are not ACLs; re-evaluate after SDK upgrade | TM-61 | Implemented |

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

## Wave 1 Batch 1 Implementation

| Step | SDK artifact | Test reference | Status |
|---|---|---|---|
| Step 21 — Application roles | `src/fluent/roles/rob-roles.now.ts` | TM-71 | Implemented |
| Step 22 — ROB Configuration | `src/fluent/tables/rob-configuration.now.ts`; `src/fluent/records/default-rob-configuration.now.ts` | TM-62 | Implemented |
| Step 23 — ROB Access Item Reference | `src/fluent/tables/rob-access-item-reference.now.ts`; `src/fluent/records/starter-rob-access-items.now.ts` | TM-63, TM-64 | Implemented |

## Wave 1 Batch 2 Implementation

| Step | SDK artifact | Test reference | Status |
|---|---|---|---|
| Step 24 — ROB Authorization Form | `src/fluent/tables/rob-authorization-form.now.ts` | TM-65, TM-66, TM-72 | Implemented |
| Step 25 — Authorized Access Detail | `src/fluent/tables/authorized-access-detail.now.ts` | TM-67, TM-68 | Implemented |
