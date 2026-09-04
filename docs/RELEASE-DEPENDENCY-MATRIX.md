# Release Execution Dependency Matrix

## C3 final development closure — 2026-09-04

This matrix is the finite pre-install contract for the frozen Australia
architecture. It traces the active production path from Employee Center intake
through Active Authorization and M4 handoff. Installed/runtime evidence cited
here is evidence already produced before this source-only closure; this package
does not install or execute a production transaction.

`UNKNOWN DEPENDENCIES = 0`

`UNKNOWN PERSISTENCE OWNERS = 0`

`PROHIBITED REACHABLE GENERIC WRITES AFTER REMEDIATION = 0`

## A–V execution matrix

| Stage | Active source / method | Source scope | Target / owner | Operation and fields | Persistence / invocation mechanism | Security and caller control | Existing proof | Certified mechanism | Correction |
|---|---|---|---|---|---|---|---|---|---|
| A Intake | Employee Center record producer; requester snapshot BRs | HR Core UI + V2 | Payroll/Workforce HR Case / HR Core | Create; self identity and intake values | Native producer plus `RobHrCasePersistenceBridge.setRobIntakeGate` | Exact HR Case subclass access and exact bridge caller RCA | HRC0001095/96/97 committed ordinary intake | Native HRSD + HR Core bridge | NO |
| B R3 | `authorization-decision-entry.server.js`; `AuthorizationDecisionService.evaluate` | V2 | HR Case decision fields / HR Core | Read context; update R3 result and closed gate | `RobHrCasePersistenceBridge.setRobDecision` | Profile/position/user/group reads; exact decision-BR bridge RCAs | New/Reuse/Amendment/Renewal and exception suites; fresh New runtime | PDI-proven bridge | NO |
| C lifecycle.create | enqueue BRs and create Event/Script Action | V2 | `sysevent` / global | Execute event with case id and family | restricted registry, enqueue-only After BR, fixed Script Action | event-management Execute; registry caller access 2 | HRC0001094/96/97 processed events | documented event pipeline | NO |
| D Authorization creation | `RobAuthorizationLifecycleEntry.executePayroll/Workforce` | V2 | ROB Authorization / V2 | Create exact governed form fields | `ROB Create Authorization Form Native` fixed native subflow | Flow runner APIs; HR Service and case/profile reads | ROBA0001053/54/55 committed | native Create Record subflow | NO |
| E Detail creation | lifecycle entry | V2 | Authorized Access Detail / V2 | Create exact uncovered-item snapshots | `ROB Create Authorized Access Detail Native` fixed native subflow | Flow runner APIs; configuration/access-item reads are same scope | ROBD0001051/52/53 committed | native Create Record subflow | NO |
| F lifecycle persistence | lifecycle entry and scheduled lifecycle | V2 | Authorization / V2 | Update deterministic status/cycle/reminder/lapse values | `ROB Persist Authorization Lifecycle Native` | Flow runner APIs | committed `pending_employee_signature`; lifecycle tests | fixed native Update Record | NO |
| G lifecycle.verify | verify Event/Script Action and `executeVerify` | V2 | committed Authorization/Details / V2 | Read and Execute signing gate | restricted event plus committed reread | event-management and Flow runner APIs | verify events processed; fail-closed status proof | event + Script Action | NO |
| H Employee task | lifecycle entry signing initializer | V2 | PDF Template, participant, task, execution / Document Templates | Read; Execute `GenerateDocumentAPI` | exact template selection and native task initiation | PDF Template/Task Scope-to-Target Read, participant Read, GenerateDocumentAPI Execute | DOCT0001036/38/39 native tasks | native Document Templates | NO |
| I Employee evidence | `authorization-signature-evidence.server.js` | V2 | task/execution reads; Authorization update | Read native evidence; update employee fields/status | typed reads then synchronous fixed Authorization persistence subflow | Task Scope-to-Target Read; exact task-execution BR RCA; Flow runner APIs | fresh handler persisted exact raw task evidence before finalization | governed Update Record | NO |
| J Supervisor approval | `ROB Authorization Supervisor Approval` | V2/native Flow | `sysapproval_approver` / global and Authorization / V2 | Create approval; update approval evidence or denial | native Ask for Approval and fixed Update Record actions | exact approval Create/Read privileges | exactly one governed approval in fresh C1 runtime | native approval Flow | NO |
| K Supervisor task | `supervisor-signature-launch.server.js` | V2 | Document Templates resources | Read task/template; Execute GenerateDocumentAPI | native supervisor-only template launch | same PDF Template/Task Reads and GenerateDocumentAPI Execute | DOCT0001037 and later fresh supervisor task | native Document Templates | NO |
| L Supervisor evidence | signature evidence BR | V2 | task/execution reads; Authorization update | Read native evidence; update supervisor fields | same typed evidence and fixed Authorization subflow | exact task-execution BR RCA; Flow runner APIs | ROBA0001055 supervisor evidence committed | governed Update Record | NO |
| M final-PDF readiness | `generateFinalPdf` and attachment finalizer | V2 | Authorization, Details, approval evidence / V2 | Read all terminal gates | same-scope GlideRecord reads | no cross-scope write | HRC0001097 reached this gate | fail-closed reads | NO |
| N final-PDF claim | `generateFinalPdf` | V2 | Authorization / V2 | Update `signed_pdf_generated` claim/reset | existing persistence subflow `finalization_stage=claim/reset` | Flow runner APIs only | prior generic denial established defect; deterministic closure test | fixed native Update Record | YES—implemented source/contract |
| O final PDF generation | `generateFinalPdf` | V2 | PDF Template and PDF Generation API | Read template; Execute fill/flatten; native attachment Create | `PDFGenerationAPI.fillDocumentFieldsAndFlatten` | PDF Template Read + RCA; PDFGenerationAPI Execute; attachment API owns Create | prior final PDF production proof | native PDF API | NO |
| P final-PDF evidence | `authorization-finalization.server.js` | V2 | Authorization / V2 | final attachment, generated flag/time | persistence subflow `finalization_stage=complete` | Flow runner APIs | pre-remediation generic denial; source regression now covers fixed path | fixed native Update Record | YES—implemented source/contract |
| Q final date | same complete branch | V2 | Authorization / V2 | `final_authorization_date` and `effective_date` from Supervisor date | direct typed Date input mapping | same scope/native subflow | C1 contract + deterministic test | fixed native Update Record | YES—contract extended |
| R activation | same complete branch | V2 | Authorization / V2 | Status = static `active` | native static Update Record mapping | no generic API | deterministic state-machine test | fixed native Update Record | YES—contract extended |
| S Detail transition | same complete branch | V2 | current Details / V2 | status `pending_fulfillment`; authorized start date | fixed-table lookup/For Each/Update Record within existing subflow | no dynamic table/field input | R4/M4 contract tests | fixed native Update Record | YES—contract extended |
| T predecessor supersession | same complete branch | V2 | predecessor Authorization/Details / V2 | reciprocal link and static `superseded` states | fixed relationships and fixed-table native updates in existing subflow | same-scope only | R4 supersession tests | fixed native Update Record | YES—contract extended |
| U fulfillment gate | finalization BR → `RobHrCasePersistenceBridge.openRobFulfillmentGate` | V2 → HR Core | HR Case gate / HR Core | Update only `fulfillment_gate_complete=1` | allowlisted HR Core-owned bridge | existing bridge Execute declaration plus exact finalizer-BR RCA | decision/reuse bridge PDI proof; focused gate tests | PDI-proven bridge pattern | YES—method and caller declaration |
| V M4 handoff | active Payroll/Workforce orchestration and task lifecycle BRs | V2 → HR Core | HR Tasks and HR Case / HR Core; Details / V2 | Create/read/validate/close HR tasks/case; activate Details | `RobHrFulfillmentBridgeV2` plus existing Detail activation subflow | exact four active BR caller RCAs; task Read; Flow runner APIs | C2 runtime and 26/26 M4 suite | HR Core bridge + fixed Detail Update Record | YES—reconciler caller declaration closes denied record |

## A–V readiness walkthrough

Stage A: IMPLEMENTED | TESTED | SECURITY READY
Stage B: IMPLEMENTED | TESTED | SECURITY READY
Stage C: IMPLEMENTED | TESTED | SECURITY READY
Stage D: IMPLEMENTED | TESTED | SECURITY READY
Stage E: IMPLEMENTED | TESTED | SECURITY READY
Stage F: IMPLEMENTED | TESTED | SECURITY READY
Stage G: IMPLEMENTED | TESTED | SECURITY READY
Stage H: IMPLEMENTED | TESTED | SECURITY READY
Stage I: IMPLEMENTED | TESTED | SECURITY READY
Stage J: IMPLEMENTED | TESTED | SECURITY READY
Stage K: IMPLEMENTED | TESTED | SECURITY READY
Stage L: IMPLEMENTED | TESTED | SECURITY READY
Stage M: IMPLEMENTED | TESTED | SECURITY READY
Stage N: IMPLEMENTED | TESTED | SECURITY READY
Stage O: IMPLEMENTED | TESTED | SECURITY READY
Stage P: IMPLEMENTED | TESTED | SECURITY READY
Stage Q: IMPLEMENTED | TESTED | SECURITY READY
Stage R: IMPLEMENTED | TESTED | SECURITY READY
Stage S: IMPLEMENTED | TESTED | SECURITY READY
Stage T: IMPLEMENTED | TESTED | SECURITY READY
Stage U: IMPLEMENTED | TESTED | SECURITY READY
Stage V: IMPLEMENTED | TESTED | SECURITY READY

## Persistence ownership

| Field / record | Sole owner | Supported mechanism | Caller |
|---|---|---|---|
| HR Case intake/R3/reuse/gate fields | Human Resources: Core | allowlisted `RobHrCasePersistenceBridge` same-scope assignment/update | exact V2 requester, decision, lifecycle/signature, and finalization callers |
| Authorization creation | V2 native subflow | fixed-table Create Record | lifecycle entry |
| Detail creation | V2 native subflow | fixed-table Create Record | lifecycle entry |
| Authorization lifecycle/reminder/lapse/signature/finalization fields | `ROB Persist Authorization Lifecycle Native` | explicit stage branches and fixed-table Update Record | lifecycle, signature evidence, finalization BRs |
| Current Detail `pending_authorization → pending_fulfillment` | Authorization persistence subflow complete branch | fixed relation lookup and native Update Record | finalization BR |
| Detail `pending_fulfillment → active` | `ROB Activate Fulfilled Access Detail Native` | fixed Detail Reference input and Update Record | M4 reconciliation BR |
| Predecessor Authorization/Details supersession | Authorization persistence subflow complete branch | fixed relationships and native Update Record | finalization BR |
| Approval and denial evidence | `ROB Authorization Supervisor Approval` | Ask for Approval and native Update Record | record-triggered native Flow |
| Native signature authority | Document Templates | native task, execution, PDF, closed-by/at | ServiceNow Sign UI |
| Final PDF bytes and attachment row | PDF Generation API | native fill/flatten and attachment association | signature evidence BR |
| HR fulfillment tasks and HR Case close | Human Resources: Core | allowlisted `RobHrFulfillmentBridgeV2` | exact orchestration/validation/reconciliation BRs |

## Reachable production write classification

| Match class | Classification | Post-remediation count |
|---|---|---:|
| V2 Authorization/Detail `.setValue()` | PROHIBITED GENERIC WRITE | 0 |
| V2 Authorization/Detail `.update()` | PROHIBITED GENERIC WRITE | 0 |
| V2 Authorization/Detail `.insert()` | PROHIBITED GENERIC WRITE | 0 |
| V2 Authorization/Detail `.deleteRecord()` | PROHIBITED GENERIC WRITE | 0 |
| HR Case/Task writes inside `manual/hr-core` bridges | HR CORE BRIDGE | allowlisted only |
| Custom-table reads and committed rereads | SAFE READ | retained |
| Inactive approval-response, profile-exception, and UI-action writers | DEAD/HISTORICAL CODE | not reachable |

## Expected release security dependencies

`EXPECTED RELEASE SECURITY DEPENDENCIES = 29`

| # | Resource | Operation | Required control |
|---:|---|---|---|
| 1 | `sys_user` | Read | allowed table privilege |
| 2 | `cmn_department` | Read | allowed table privilege |
| 3 | `sys_user_group` | Read | allowed table privilege |
| 4 | `sys_user_grmember` | Read | allowed table privilege |
| 5 | `sn_hr_core_profile` | Read | allowed table privilege |
| 6 | `sn_hr_core_position` | Read | allowed table privilege |
| 7 | `sn_hr_core_service` | Read | allowed table declaration + approved Scope-to-Target RCA |
| 8 | `sn_hr_core_case_payroll` | Read | allowed table privilege |
| 9 | `sn_hr_core_case_workforce_admin` | Read | allowed table privilege |
| 10 | `sn_hr_core_task` | Read | allowed table privilege |
| 11 | `sysapproval_approver` | Read | allowed table privilege |
| 12 | `sysapproval_approver` | Create | allowed table privilege used by native approval |
| 13 | `sys_attachment` | Read | allowed table privilege |
| 14 | `sn_doc_pdf_template` | Read | allowed table declaration + approved Scope-to-Target RCA |
| 15 | `sn_doc_participant` | Read | allowed table privilege |
| 16 | `sn_doc_task` | Read | allowed table declaration + approved Scope-to-Target RCA |
| 17 | `sn_doc_task_execution` | Read | allowed table declaration + exact signature-BR RCA |
| 18 | `sn_doc.GenerateDocumentAPI` | Execute | exact allowed Script Include privilege |
| 19 | `sn_pdfgeneratorutils.PDFGenerationAPI.fillDocumentFieldsAndFlatten` | Execute | exact allowed API privilege |
| 20 | `sn_hr_core.RobHrCasePersistenceBridge` | Execute | exact allowed caller RCAs, including finalization correction |
| 21 | `sn_hr_core.RobHrFulfillmentBridgeV2` | Execute | exact allowed active M4 caller RCAs, including reconciliation correction |
| 22 | event management | Execute | exact allowed scriptable API privilege |
| 23 | `FlowAPI.getRunner().subflow` | Execute | exact allowed runner API privilege |
| 24 | Flow runner `inForeground` | Execute | exact allowed runner API privilege |
| 25 | Flow runner `withInputs` | Execute | exact allowed runner API privilege |
| 26 | Flow runner `run` | Execute | exact allowed runner API privilege |
| 27 | Flow result `getOutputs` | Execute | exact allowed result API privilege |
| 28 | user roles/groups API | Execute | exact allowed API privilege |
| 29 | `ScopedGlideElement` reads | Execute | existing constrained platform privilege |

Generic `GlideRecord.setValue/update/insert`, Generic Insert, Scope-to-Scope,
broad native-case/task Write, Document Templates Write/Create/Delete RCA, and
temporary roles are excluded and must remain denied/zero.

## Native configuration delta for the next authorized install

Extend only Published subflow `ROB Persist Authorization Lifecycle Native`
(`dbfbb5fc8347c3504f5193a6feaad335`). Preserve the existing seven lifecycle
and five signature inputs and add exactly four inputs:

1. `finalization_stage` — String; `claim`, `reset`, `complete`, or empty.
2. `final_pdf_attachment` — Reference `sys_attachment`.
3. `final_pdf_generated_date_time` — Date/Time.
4. `final_authorization_date` — Date.

Preserve lifecycle and signature branches behind empty `finalization_stage`.
Add deterministic fixed-table branches matching
`scripts/validation/c1-signature-persistence-contract.json`. The complete
branch updates the current Authorization, its pending current Details, and—if
present—the referenced predecessor and its non-denied/non-revoked Details. No
scripted Status, dynamic table, field-name, arbitrary field-map, or output is
permitted.

Update only the existing HR Core Script Include
`sn_hr_core.RobHrCasePersistenceBridge` with the reviewed
`openRobFulfillmentGate` method in
`manual/hr-core/RobHrCasePersistenceBridge.server.js`. Preserve its identity,
scope, Caller Restriction, and all existing methods.

After installation/Upgrade Summary processing, create/reconcile only the exact
target-scope Real RCA contracts for the finalization Business Rule → case bridge
Execute and the reconciliation Business Rule → fulfillment bridge Execute.
The machine-readable whitelist is
`scripts/validation/release-security-dependencies.json`. Do not approve any
other Requested record.
