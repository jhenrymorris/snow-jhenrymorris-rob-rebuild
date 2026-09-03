# Australia Capability Certification

## C0 decision

**Application:** HR Access ROB Authorization V2<br>
**Scope:** `x_2166123_rob_auth`<br>
**Platform:** ServiceNow Australia Patch 3<br>
**Validation instance:** `dev437065`<br>
**Certification date:** 2026-08-26

**C0 — PASS.** The remaining M3, M4, and M5 architecture has a supported
Australia implementation path. No required capability is classified `UNKNOWN`.
This certification authorizes C1 planning and implementation; it does not
activate, install, or change production behavior.

The certified M3 control flow is:

```text
R3 decision and governed artifact creation
    → Employee-only ServiceNow Sign PDF Fill/Submit
    → Native Ask for Approval
        ├─ Rejected → Denied; stop
        └─ Approved → Supervisor-only ServiceNow Sign PDF Fill/Submit
                       → post-signature final renderer
                       → final PDF on Authorization Form only
                       → Active / supersede predecessor
                       → open M4 fulfillment gate
```

The employee and supervisor signing templates are Document Templates
(`sn_doc`)-owned native configuration. The governed Authorization Form remains
the business lifecycle record. Native `sysapproval_approver` is the approval and
denial evidence store. PDF Fill is not a denial control.

## Evidence rules

- `DOCUMENTED-SUPPORTED` means current official Australia documentation defines
  the selected feature and required behavior.
- `PDI-PROVEN` means the exact or stronger behavior has committed runtime
  evidence on `dev437065` in addition to documentation.
- `SUPPORTED-WITH-CONSTRAINT` means the selected native capability is supported
  only when the stated ownership, inheritance, role, security, or manual
  configuration constraint is observed.
- `UNSUPPORTED` and `UNKNOWN` are permitted classification values, but no
  required capability in the selected architecture has either classification.
- Physical PDI `sys_id` values are evidence only. Runtime source uses logical
  names, configuration references, or generated source identities.

## Required-reading register

C0 reviewed `AGENTS.md`, `CLAUDE.md`, `MEASUREMENT.md`, the PRD,
Architecture, Field Map, Traceability, Security Model, Test Matrix, Manual
Configuration, and Appendices A–O. The appendices were applied as follows:

| Appendix | Certification use |
|---|---|
| A — Requirements Traceability | Bound every remaining requirement to C1, C2, or C3 |
| B — Form 1768 Mapping | Froze 26 body mappings, two signatures, and post-signature date semantics |
| C — Logical Data Model | Preserved the four-table model and native parent/task ownership |
| D — State Transition Model | Separated employee signature, approval/rejection, supervisor signature, finalization, and fulfillment |
| E — Decision Matrix | Preserved five decisions, deterministic unknowns, coverage/delta, and reuse rules |
| F — Security and Persona Matrix | Bound ACL, role, attachment, fulfiller, OM, supervisor, compliance, and unrelated-user tests |
| G — Notification Matrix | Froze privacy-safe renewal/lapse content and recipient constraints |
| H — Reporting Catalog | Bound reports/dashboards to secured sources and restricted audiences |
| I — Exception Matrix | Preserved deterministic blocking and the M4 missing-OM exception task |
| J — Configuration Catalog | Kept groups, due days, dates, grace, reminders, and thresholds environment-owned |
| K — SDK Artifact Classification | Separated source-first artifacts from native Class C configuration |
| L — PDI Capability Validation | Reconciled historical results with later V2 proof; superseded obsolete blocker labels |
| M — Test Matrix | Defined the focused and full C1–C3 gates |
| N — Deferred Capability Register | Kept post-MVP delegation, bulk, integrations, and deprovisioning out of scope |
| O — Glossary | Preserved canonical terms, system boundaries, ARM/OAS distinction, and evidence meanings |

## Master capability matrix

### M3 — Production Authorization Runtime

| Capability ID | Milestone | Business requirement | Required behavior | Proposed ServiceNow feature | Australia documentation citation/link | Documented supported behavior | Documented limitation | Required plugin/application | Required role | Owning scope/application | Table/inheritance constraint | Cross-scope requirement | Manual configuration required | Existing V2 runtime proof | Additional isolated proof required? | Final classification | Architecture consequence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M3-01 | M3-A | Invoke committed R3 | Evaluate once from supported Payroll/Workforce entry rules | Scoped Business Rules plus installed server module | [Now SDK BusinessRule API](https://www.servicenow.com/docs/bundle/australia-application-development/page/script/server-scripting/concept/c_BusinessRules.html) | Before/after rules can invoke scoped server logic on supported tables | Rules must be guarded, idempotent, and inactive until C1 proof | HR Access ROB Authorization V2 | scoped admin/developer | `x_2166123_rob_auth` | Only Payroll and Workforce HR Case subclasses | Five exact reads and one narrow HR Core gate bridge only | Activate two entry rules in C1 | Current adapter/module installed; post-M2 `authorizationContext` contract and New decision proven | No | PDI-PROVEN | Preserve the installed adapter; do not create a second engine |
| M3-02 | M3-A | Deterministic classification | New, Amendment, Renewal, Reuse, Exception; unknown DEC-MAP blocks | `AuthorizationDecisionService` and repository services | [Now SDK server scripting](https://www.servicenow.com/docs/bundle/australia-application-development/page/script/server-scripting/concept/c_ServerSideScripting.html) | Scoped server modules support deterministic reusable logic | Native docs do not define ROB policy; PRD/tests are authoritative | HR Access ROB Authorization V2 | none at runtime beyond caller | `x_2166123_rob_auth` | V2 tables plus approved read dependencies | Exact table reads only | None | R3 30/30; current module contains `authorizationContext.valid`, supervisor, position, organization and no deprecated snapshots | No | PDI-PROVEN | Freeze current post-M2 input contract and Exception fallback |
| M3-03 | M3-A | Persist system-managed decision outputs | Write decision class, reason, coverage/delta and block flags without exposing editable outputs | V2-owned fields plus narrow HR Core persistence bridge | [Application access](https://www.servicenow.com/docs/r/application-development/r_TableApplicationAccessFields.html) | Scoped applications control own fields; cross-scope operations require explicit access | Protected HR Core fields must be written from HR Core ownership, not broad V2 GlideRecord APIs | HR Core and V2 | bridge caller only | HR Core bridge / V2 data | Allowlisted case classes and fields only | One exact V2 → bridge Execute grant | Verify bridge allowlist in C1 | Payroll/Workforce gate persistence and rejected arbitrary table/field tests previously passed | Focused C1 reread | PDI-PROVEN | Keep outputs read-only; preserve narrow bridge |
| M3-04 | M3-A | Duplicate prevention and access delta | Prevent duplicate open work; compute covered/uncovered items | Repository queries, unique business keys, guarded lifecycle rule | [Business Rules](https://www.servicenow.com/docs/bundle/australia-application-development/page/script/server-scripting/concept/c_BusinessRules.html) | Guarded rules and indexed queries support deterministic idempotency | Retry control is application responsibility | V2 | scoped runtime | V2 | Four-table model only | None beyond exact reads | None | Unit suites cover duplicate/delta; lifecycle idempotency logic installed | C1 retry proof | PDI-PROVEN | No new request/detail table and no duplicate governed artifacts |
| M3-05 | M3-B | Employee signature | One employee PDF task; signature, user, time, task and execution retained | `sn_doc` ServiceNow Sign PDF template with one required Fill participant | [Document Templates](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/document-templates-overview.html), [Fill and sign PDF](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/fill-sign-document.html) | Fill tasks support editable fields, signature, Generate, Save and Submit | Fill exposes no documented Approve/Reject control | Document Templates (`com.sn_doc`) | `sn_doc.admin` to configure; no end-user role | `sn_doc` | Template table `sn_hr_core_case`; governed parent remains Authorization Form | Caller-specific template Read and `GenerateDocumentAPI` Execute only | Create/reconcile employee-only native template | Employee Fill task state 3, signer/time/execution and downstream runtime proven | C1 split-stage proof | PDI-PROVEN | Employee Fill is signature only; never use it for denial |
| M3-06 | M3-B | Bind employee and signature correctly | Employee required, order 1, non-advanced `subject_person`; mandatory signature mapping | Native participant and PDF mappings | [Create PDF participant](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/create-participant.html), [Mark signature blocks](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/mark-signature-doctemp.html) | Participants define users, actions and order; signature blocks bind to participants | Participant authoring applies only to templates created in `sn_doc`; ServiceNow Sign supports Fill/Review, not Sign | Document Templates | `sn_doc.admin` | `sn_doc` | `sn_doc_participant` and `sn_doc_pdf_template_mapping` | None for native authoring | Configure through native UI | Production mappings and employee signatures have rendered successfully | C1 readiness validator | SUPPORTED-WITH-CONSTRAINT | Build both signing stages in `sn_doc`, never as V2-owned candidate templates |
| M3-07 | M3-B | Ordered document work | One execution per signing stage; task identity and completion evidence retained | Document Task Execution and `sn_doc_task` | [Document Templates](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/document-templates-overview.html), [Participant task mapping](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/task-mapped-participants.html) | Native tasks are initiated in participant order and retain task/execution state | Cross-template stages use separate executions by design | Document Templates | native task user | `sn_doc` | `sn_doc_task` extends Task | Exact Read only where V2 evidence handler requires it | None | Multiple document executions and state-3 completions proven | C1 split-stage task-count proof | PDI-PROVEN | Retain separate employee and supervisor task references |
| M3-08 | M3-C | Explicit Supervisor approval | Route only to governed Authorization Form Supervisor | Workflow Studio Ask for Approval | [Ask for Approval](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/ask-approval-flow-designer.html) | Supports user approvers, approval/rejection rules, due date and Approved/Rejected outputs | Table must support approval inputs; do not request the same record in parallel | Workflow Studio / Flow Designer | `flow_designer` or admin to configure | V2 Flow | Governed Authorization Form is the approval record | Flow-created native approval only; no broad V2 write to Global | Publish/activate one ROB-owned Flow | Published Flow `73105d6b833a07104f5193a6feaad363` and both outcome branches proven | C1 focused approval run | PDI-PROVEN | Native approval is the sole New/Amendment/Renewal denial mechanism |
| M3-09 | M3-C/E | Approval and denial audit | Preserve approver, state, decision time, reason/comments | `sysapproval_approver` plus Flow outputs | [Ask for Approval](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/ask-approval-flow-designer.html), [Approval table reference](https://www.servicenow.com/docs/r/servicenow-platform/approvals/r_Approvals.html) | Approval reason and state are stored on Approval; outputs include approved/rejected/cancelled states | Rejection comments depend on the selected approval UI/configuration and must be required in the governed path | Platform approvals | approver access through native UI | Global approval engine | `sysapproval_approver` is not an Authorization Form child table | Exact table Read only if evidence is reread; creation belongs to Ask for Approval | Require rejection comments in Flow/UI | Native approval records and outcome routing already proven | C1 rejection-comments proof | SUPPORTED-WITH-CONSTRAINT | Flow branches persist normalized evidence; legacy approval-response BR remains inactive |
| M3-10 | M3-D | Supervisor signature after approval | Independently launch one Supervisor-only Fill task after Approved | `sn_doc` ServiceNow Sign template with one required order-1 governed Supervisor participant | [Configure editable PDF](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/configure-editable-pdf.html), [Create PDF participant](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/create-participant.html) | A native PDF template can be created, mapped, published and initiated with a participant | Must be created in Document Templates application; ServiceNow Sign action is Fill | Document Templates | `sn_doc.admin` and delegated developer as required | `sn_doc` | Template targets `sn_hr_core_case`; participant resolver must return governed Supervisor | Caller-specific Read/Execute only | Complete the existing `sn_doc`-owned draft, then publish | `sn_doc` draft accepted the Managed Document/PDF revision; governed Supervisor resolver and Fill signature mechanics proven on prior template | Bounded C1 authoring/readiness gate | SUPPORTED-WITH-CONSTRAINT | Use the existing native-scope draft as the one supervisor-only stage; no third participant or shared execution assumption |
| M3-11 | M3-D | Prevent wrong signer | `closed_by` must equal snapshotted governed Supervisor; task/execution/template must match | Guarded V2 evidence Business Rule | [Business Rules](https://www.servicenow.com/docs/bundle/australia-application-development/page/script/server-scripting/concept/c_BusinessRules.html) | Server rules can validate terminal task transitions before persisting downstream evidence | Application must reject duplicate/wrong participant events | V2 and Document Templates | runtime caller | V2 rule on native task | Exact task/template/execution match | Exact native task Read only | None | Wrong-state/duplicate checks are source tested; governed signer persisted in Approved New | C1 negative runtime cases | PDI-PROVEN | Do not trust `assigned_to` as Supervisor authority |
| M3-12 | M3-E | Denial stops lifecycle | Rejected approval sets form/details Denied and creates no Supervisor task, final PDF, activation, supersession or fulfillment | Rejected Flow branch and V2 evidence service | [Ask for Approval](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/ask-approval-flow-designer.html) | Rejected is a first-class output and terminates approval action | PDF Fill is not a reject control | Workflow Studio and V2 | flow runtime | V2 Flow | Denied writes are V2-owned records | No new cross-scope write | Configure rejected branch | Rejected native approval routing proven; lack of Fill Refuse definitively observed and documented | C1 focused Denial | PDI-PROVEN | Eliminate all production reliance on PDF task state 7/refuse |
| M3-13 | M3-F | Final governed Form 1768 | After both signatures and approval, render 26 body mappings plus two signature evidences | Published `ROB Form 1768 Authorization` used as final renderer only | [Configure editable PDF](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/configure-editable-pdf.html), [Document Templates](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/document-templates-overview.html) | Published templates support mapped PDF generation and preview | Final renderer must not initiate obsolete two-participant workflow | Document Templates | `sn_doc.admin` to configure | Existing V2 template; native rendering engine | Exactly 28 mappings; logical-name uniqueness | Exact PDF Template Read and `GenerateDocumentAPI` Execute | Keep current template/mappings; validate readiness | Approved New `ROBA0001004` rendered one final PDF and activated successfully | C1 split-stage finalization proof | PDI-PROVEN | Preserve current 28-map renderer, but launch it only after Supervisor signature |
| M3-14 | M3-F | Correct timestamps/date | Employee and Supervisor times come from committed native tasks; Final Authorization Date comes from Supervisor signature; generated time separate | Evidence reread plus post-signature finalization service | [Fill and sign PDF](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/fill-sign-document.html) | Submitted tasks are completed native evidence | Pre-sign rendering cannot know later signature time | Document Templates and V2 | runtime | V2 finalizer | Read committed `closed_by`/`closed_at`; system-managed V2 fields | Exact task Read only | None | Post-signature rendering proof and Approved New persisted correct evidence | C1 exact reread | PDI-PROVEN | Never render authoritative dates before the terminal Supervisor task is committed |
| M3-15 | M3-F | PDF stored only on governed form | Exactly one authoritative final PDF on Authorization Form; none on case | Generate then guarded copy/association to V2 Authorization Form; remove transient duplicate as supported | [Document Templates](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/document-templates-overview.html), [ACL rule types](https://www.servicenow.com/docs/r/platform-security/access-control/acl-rule-types.html) | Native PDF generation and table/field ACLs are supported | Native generation initially associates to its technical source/task; application must enforce the governed final association idempotently | Document Templates and V2 | runtime | V2 Authorization Form | `sys_attachment` parent must be V2 Authorization Form for authoritative artifact | Exact attachment operation only as already approved/proven | None | Approved New produced exactly one final PDF on Authorization Form and no fulfillment | C1 direct-URL/security proof | PDI-PROVEN | Final PDF guard remains; no HR Case duplicate |
| M3-16 | M3-F | Historical immutability and supersession | Finalized form/PDF/signers unchanged; predecessor superseded only after replacement Active | Audited/read-only fields, immutable attachments, guarded finalizer | [ACL rule types](https://www.servicenow.com/docs/r/platform-security/access-control/acl-rule-types.html) | Table and field ACLs can prevent updates; history is retained | Native regeneration can replace a current attachment and therefore is prohibited for governed history | V2 and platform ACLs | functional roles only | V2 | Four-table versioning model | None | None | Distinct historical PDFs/tasks preserved in R4 and V2 runtime; source tests cover activation ordering | C1 Amendment/Renewal mutation proof | SUPPORTED-WITH-CONSTRAINT | Always create a replacement form; never regenerate an old governed artifact |
| M3-17 | M3-G | Reuse without duplicate governed artifacts | Current Supervisor attestation; zero new form/detail/PDF/supersession; stale context invalidates | Existing Reuse attestation template/service and native approval evidence | [Ask for Approval](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/ask-approval-flow-designer.html) | Native approval supports current Supervisor attestation evidence | Reuse policy and context-key invalidation are application logic | Workflow Studio, Document Templates, V2 | governed approver | Existing V2 Reuse path | Reused Authorization Form remains immutable | Existing exact reads only | Keep Reuse template unchanged | Reuse source contract and stale-context tests exist | C1 full Reuse runtime | PDI-PROVEN | Do not route Reuse through employee/supervisor signing templates |

### M4 — Fulfillment Runtime

| Capability ID | Milestone | Business requirement | Required behavior | Proposed ServiceNow feature | Australia documentation citation/link | Documented supported behavior | Documented limitation | Required plugin/application | Required role | Owning scope/application | Table/inheritance constraint | Cross-scope requirement | Manual configuration required | Existing V2 runtime proof | Additional isolated proof required? | Final classification | Architecture consequence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M4-01 | M4 | Native fulfillment tasks | Create child Staffing, Analytics, OM ARM and Exception Review tasks | Native `sn_hr_core_task` records | [Create Task action](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/create-task-flow-designer.html), [HR Case management](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/c_HRCaseManagement.html) | Create Task supports Task extensions and Parent association; HR cases support HR tasks | Protected HR Core task writes must execute from HR Core ownership | HR Core / Workflow Studio | `sn_hr_core.admin` to configure | Human Resources: Core | `sn_hr_core_task` extends Task; Parent is supported HR Case | One exact V2 → HR Core bridge Execute grant | Create one allowlisted HR Core fulfillment bridge or HR Core subflow | Table inheritance confirmed on PDI; source routing/unit M4 26/26 | C2 bridge contract and record creation | SUPPORTED-WITH-CONSTRAINT | Replace current direct V2 `GlideRecord('sn_hr_core_task').insert()` path before M4 activation |
| M4-02 | M4 | Least-privilege task persistence | Create/update only approved ROB task types and fields | HR Core-owned `RobHrFulfillmentBridgeV2` (or equivalently narrow HR Core subflow) | [Application access](https://www.servicenow.com/docs/r/application-development/r_TableApplicationAccessFields.html) | Cross-scope callers can be restricted to an application-owned API | Broad `GlideRecord.insert/update/setValue` Execute and native-table Write are prohibited | HR Core | server-only; caller restriction | Human Resources: Core | Allowlisted case classes, task types, fields and state transitions | Exactly one Execute path; no generic API privilege | Configure/test bridge in HR Core during C2 | Task creation and completion validation passed; final supported replay did not activate the matching detail or close the eligible case | C2 bounded bridge proof | UNSUPPORTED | C2 stopped at 10/13 after the final authorized install and corrected governed bridge task queries; no alternate architecture or privilege expansion was attempted |
| M4-03 | M4 | Grouped routing | One Staffing task, one Analytics task, plus one OM task only for WPC; ARM provisioning/OAS target | Existing deterministic routing/orchestration services | [Configure HR task template](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/configure-hr-task-template.html) | HR task templates can populate assignment, due date, state and other fields | Grouping and ARM/OAS rules are application policy | HR Core and V2 | `sn_hr_core.admin` for templates | V2 planning / HR Core persistence | Native task fields plus scoped extension fields | Through M4-02 bridge | Set three synthetic assignment groups and due-day values | M4 routing/orchestration 26/26; no external calls | C2 full route matrix | DOCUMENTED-SUPPORTED | Preserve one task per responsible team, not one per access item |
| M4-04 | M4 | Assignment and due dates | Route to configured groups/person; calculate due dates; preserve native task state | HR Task template/fields and active ROB Configuration | [Configure HR task template](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/configure-hr-task-template.html) | Supports assignment group/skills, due dates, task states, reminders and extra fields | Values are environment-specific and must not be hard-coded | HR Core and V2 | config admin | HR Core templates / V2 config | Native `assignment_group`, `assigned_to`, `due_date`, `state` | Bridge allowlist | Class C group and due-date configuration | Configuration fields/source exist | C2 environment binding | SUPPORTED-WITH-CONSTRAINT | Fail closed on missing required configuration |
| M4-05 | M4 | Idempotency | Retry creates no duplicate task | Unique fulfillment business key plus bridge lookup/create transaction | [Business Rules](https://www.servicenow.com/docs/bundle/australia-application-development/page/script/server-scripting/concept/c_BusinessRules.html) | Guarded server logic can query before create | Database-level atomicity must be enforced by a unique index/business key | V2 and HR Core | runtime | HR Core persistence | Unique scoped business-key field on native HR task | Through bridge | Verify unique index/key behavior | Existing planner suppresses duplicate keys | C2 concurrent/retry proof | SUPPORTED-WITH-CONSTRAINT | Bridge performs final idempotency check; V2 planner alone is insufficient |
| M4-06 | M4 | Completion evidence | Require close notes/evidence/time and allowed outcome before detail Active | Native HR task fields plus scoped evidence fields and completion rule | [View an HR task](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/t_ViewAnHRTask.html), [Configure HR task template](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/configure-hr-task-template.html) | HR tasks retain parent, state, assignment, due and completion fields | ROB evidence semantics must be validated server-side | HR Core and V2 | fulfillers by task | HR Core task / V2 detail | Only matching task can activate its covered details | Bridge for protected task updates; V2 owns detail status | Form layout/config for evidence fields | Evidence/closure services unit tested | C2 positive/negative closure | DOCUMENTED-SUPPORTED | No detail becomes Active from task state alone |
| M4-07 | M4 | Parent closure gate | Case closes only after every required task is satisfied or formally waived | Closure service plus HR Core-owned guarded transition | [HR Case management](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/c_HRCaseManagement.html), [Configure task fulfillment](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/configure-task-to-fulfill-hr-service.html) | HR services support child task activities and ordered completion | Closing the protected HR Case must occur in HR Core ownership | HR Core and V2 | case writer through bridge | Human Resources: Core | Approved case subclasses only | Same narrow bridge; exact close operation | Configure allowed terminal state/waiver policy | Closure service unit tested | C2 parent-close proof | SUPPORTED-WITH-CONSTRAINT | Add allowlisted case-close operation to the same bridge; no native-case Write grant |
| M4-08 | M4 | Notify-and-track only | No calls to ARM, OAS, FPPS/WTTS, eOPF or USA Staffing | Native HR task instructions/evidence only | [HR task templates](https://www.servicenow.com/docs/r/employee-service-management/hr-service-delivery/configure-hr-task-template.html) | Task descriptions and assignments support manual fulfillment | Native task does not provision external systems | HR Core | fulfiller roles | HR Core | No integration records/credentials | None | Configure privacy-safe descriptions | Orchestration reports `externalCalls: 0` | C2 outbound/integration inventory | DOCUMENTED-SUPPORTED | External completion is attested and tracked, never automated in MVP |
| M4-09 | M4 | OM missing exception | Create one Exception Review task and block closure | Native HR task type through same bridge | [Create Task action](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/create-task-flow-designer.html) | Task extension creation supports dynamic fields and parent | Exception does not waive required OM work automatically | HR Core and V2 | exception group | HR Core | Task type `exception_review`; parent case | Same narrow bridge | Configure exception group/due days | Planner emits `MISSING_OPERATIONS_MANAGER` | C2 exception closure proof | DOCUMENTED-SUPPORTED | No separate custom exception table |

### M5 — Renewal, Security, Reporting, UAT, and Release

| Capability ID | Milestone | Business requirement | Required behavior | Proposed ServiceNow feature | Australia documentation citation/link | Documented supported behavior | Documented limitation | Required plugin/application | Required role | Owning scope/application | Table/inheritance constraint | Cross-scope requirement | Manual configuration required | Existing V2 runtime proof | Additional isolated proof required? | Final classification | Architecture consequence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M5-01 | M5 | Daily renewal/lapse evaluation | Read active config; apply reminders, shared recertification, grace and earlier end date | SDK Scheduled Script or Workflow Studio daily scheduled trigger calling V2 renewal service | [Scheduled triggers](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/create-scheduled-trigger.html) | Daily/weekly/monthly triggers and timezone selection are supported | Trigger runs only while flow is active; business date policy is application logic | V2 / Workflow Studio | `trigger_designer`, `flow_designer` or admin to configure | V2 | V2 Authorization Form and Configuration only | None | Choose agency timezone and run time | Expiration service and configuration fields exist; renewal decisions unit tested | C3 date-boundary proof | DOCUMENTED-SUPPORTED | Use one daily job and configuration-driven intervals; no hard-coded dates |
| M5-02 | M5 | Prevent duplicate reminders/lapse notices | One notice per authorization, notice type and cycle | Existing reminder timestamps/cycle markers plus transactional guard | [Scheduled triggers](https://www.servicenow.com/docs/r/build-workflows/workflow-studio/create-scheduled-trigger.html) | Scheduled execution is supported | Idempotency is application responsibility | V2 | runtime | V2 | Existing system-managed evidence fields; no fifth table | None | None | Configuration/data model contains reminder evidence | C3 retry/timezone proof | SUPPORTED-WITH-CONSTRAINT | Use existing evidence fields and deterministic cycle keys; no notification ledger table |
| M5-03 | M5 | Privacy-safe notifications | Send only authorization number, subject, expiration, required action and secure link | Native Email Notification/event | [Create a notification](https://www.servicenow.com/docs/r/platform-administration/t_CreateANotification.html) | Notifications support conditions/events, recipients and active state | Delivery depends on SMTP and user notification preferences | V2 / Notifications | admin to configure | V2 | Triggered from governed record; no PDF attachment | No cross-scope data write | Configure sender, event, test recipients | Source notification artifacts not yet implemented | C3 email preview/capture | SUPPORTED-WITH-CONSTRAINT | Never attach signed PDF or include signature/justification/sensitive PII |
| M5-04 | M5 | Replacement-aware expiration/lapse | Preserve old records; suppress lapse when approved active replacement exists | V2 renewal service and guarded state updates | [Business Rules](https://www.servicenow.com/docs/bundle/australia-application-development/page/script/server-scripting/concept/c_BusinessRules.html) | Scoped server logic supports guarded record transitions | Replacement policy is application logic | V2 | runtime | V2 | Four-table historical model | None | None | Expiration/repository services exist; supersession design proven | C3 lifecycle boundary matrix | PDI-PROVEN | Never delete or overwrite expired/lapsed authorization history |
| M5-05 | M5 | Least-privilege record access | Enforce table and field ACLs for all four tables and native extensions | Declarative ACLs, role containment and field ACLs | [ACL rule types](https://www.servicenow.com/docs/r/platform-security/access-control/acl-rule-types.html) | Users must pass applicable table and field ACLs; inheritance is evaluated | ACLs must be tested in each persona and inheritance path | Platform security / V2 | `security_admin` to configure; five functional roles at runtime | V2 | Four business tables and scoped native fields | Exact privileges only | None beyond persona setup | Wave 2 security 22/22 and five-role source model | C3 impersonation/ATF proof | PDI-PROVEN | No broad repository access for fulfillers or Operations Managers |
| M5-06 | M5 | Secure final PDF/direct URL | Authorization Form ACL determines attachment access; unrelated users denied | Parent-record attachment authorization plus direct-URL test | [ACL rule types](https://www.servicenow.com/docs/r/platform-security/access-control/acl-rule-types.html), [Default security filters](https://www.servicenow.com/docs/r/platform-security/default-security-filters.html) | ACL/security filters apply across UI, API and secure record access | Official docs do not certify this custom parent ACL outcome without runtime validation | Platform attachments and V2 | functional personas | V2 parent / platform attachment | Final PDF parent must be Authorization Form | None | None | Final PDF parent association proven; source ACLs exist | Mandatory C1 and C3 direct-URL tests | SUPPORTED-WITH-CONSTRAINT | Runtime attachment denial is a release gate, not an architecture unknown |
| M5-07 | M5 | Secure operational reports | Role-restricted reports respect row/field access | Platform Analytics reports plus `report_view` ACL where needed | [Read access control for reports](https://www.servicenow.com/docs/r/now-intelligence/reporting/read-access-control.html), [Report ACL assessment](https://www.servicenow.com/docs/r/now-intelligence/reporting/perform-report-view-acl-assessment-scan.html) | Report access evaluates `report_view` and table/field access; ACL assessment scans are available | Roles-only table ACL fallback and database views require careful review | Platform Analytics | `report_admin`; `security_admin` for ACL scan | V2 / Platform Analytics | Reports query secured V2 tables only | None | Configure/report ACL and run assessment | Source security/report scaffolding exists | C3 report persona matrix | SUPPORTED-WITH-CONSTRAINT | Do not use report sharing as a substitute for record ACLs |
| M5-08 | M5 | Dashboards without data leakage | Only authorized aggregates and drilldowns | Platform Analytics dashboards built from secured reports | [Distribute reports](https://www.servicenow.com/docs/r/now-intelligence/reporting/c_DistributeReports.html), [Dashboard roles](https://www.servicenow.com/docs/r/now-intelligence/c_DashboardRoles.html) | Dashboards/reports support sharing and role controls | Aggregate visualizations can expose aggregate values even when users lack row access | Platform Analytics | dashboard/report roles | V2 / Platform Analytics | Approved reports only; no sensitive aggregate to broad audience | None | Configure restrictive audience | No production runtime proof yet | C3 unauthorized aggregate/drilldown proof | SUPPORTED-WITH-CONSTRAINT | Restrict dashboards to compliance/admin roles; do not expose sensitive aggregates to requesters/fulfillers |
| M5-09 | M5 | Automated regression | Non-production server, form, catalog, security and report tests | Automated Test Framework | [Run ATF tests](https://www.servicenow.com/docs/r/application-development/automated-test-framework-atf/atf-run-test.html), [ATF business-rule testing](https://www.servicenow.com/docs/r/application-development/automated-test-framework-atf/atf-biz-rule-use.html) | ATF runs tests in non-production and supports user/role/test data operations | Execution is disabled by default and native e-signature UI may still need manual validation | ATF | `atf_test_admin` | V2 / Global ATF | Synthetic data only | None | Enable ATF only on PDI and create personas | Source/unit suites exist; PDI role installed | C3 ATF and manual signing UAT | SUPPORTED-WITH-CONSTRAINT | Automate deterministic paths; retain manual native signing/PDF and direct-URL UAT |
| M5-10 | M5 | Persona validation | Requester, supervisor, fulfillers, OM, compliance/admin and unrelated user behave correctly | Impersonation plus ATF users | [Impersonate a user](https://www.servicenow.com/docs/r/platform-administration/user-administration/c_ImpersonateAUser.html) | Impersonation supports role/persona verification | Admin/security behavior and external identity factors have documented limits | Platform user administration | admin/impersonator | Global | Synthetic users only | None | Create synthetic personas; remove temporary roles | Prior synthetic persona/security testing completed | C3 full matrix | DOCUMENTED-SUPPORTED | No production employee records or temporary elevated roles remain |
| M5-11 | M5 | Audit/history | Preserve approval, signatures, PDF, tasks, supersession, reminders and fulfillment evidence | Native audit/history plus immutable governed records | [ACL rule types](https://www.servicenow.com/docs/r/platform-security/access-control/acl-rule-types.html) | Audited fields and read-only controls preserve change history | Auditing must be limited to required evidence fields; retention policy is environment governance | V2, Approvals, Document Templates, HR Core | compliance/admin | Respective owning applications | Evidence remains on native records and four V2 tables | Read-only exact access | Confirm audit flags/retention | Prior tasks/PDFs remained independently retained | C1–C3 historical reread | SUPPORTED-WITH-CONSTRAINT | Do not create a custom audit table or overwrite native evidence |
| M5-12 | M5 | Stable release/deployment | Build, frozen keys, normal IDE Sync/Build/Install; no reinstall | Now SDK 4.11.0 and ServiceNow IDE Fluent | [ServiceNow SDK documentation](https://www.servicenow.com/docs/bundle/australia-application-development/page/build/servicenow-sdk/concept/servicenow-sdk.html) | SDK/IDE support source build and application installation | Generated keys are identity; instance-specific Class C records remain manual | ServiceNow SDK / IDE | developer/admin | V2 | Scope `x_2166123_rob_auth`, versioned application | Only source-declared exact privileges | Platform must restore the missing application bootstrap record before another supported install | Earlier clean V2 0.0.4 Build/Install passed; C2 final normal install failed with missing `sys_plugins` and applied 0 changes | C2 log/upgrade-history/identity evidence | UNSUPPORTED | C2 stopped without metadata workaround; platform bootstrap repair is required before supported deployment can resume |

## Frozen ownership and cross-scope model

| Operation | Owner | Supported caller path | Prohibited alternative |
|---|---|---|---|
| Read M2 profile/context data | V2 | Five exact table Reads | Broad GlideRecord API Execute |
| Persist M3 exception/block flags on protected HR Cases | HR Core bridge | One allowlisted Execute path | Native-case Write or generic `setValue/update` |
| Create/update/close M4 HR Tasks and close eligible HR Case | HR Core fulfillment bridge/subflow | One allowlisted V2 Execute path with positive and negative tests | Direct V2 `sn_hr_core_task.insert/update`, broad API Execute, native-table Write |
| Generate native documents | Document Templates | Caller-specific PDF Template Read and `GenerateDocumentAPI` Execute | Scope-wide Execute or PDF Template create/update/delete |
| Create approvals | Workflow Studio Ask for Approval | Native action creates `sysapproval_approver` | Custom approval table or hand-built global approval record |

The current inactive M4 server rule contains direct V2 `GlideRecord` insert
logic for `sn_hr_core_task`. That code is **not certified for activation**. C2
must move the protected writes behind the frozen HR Core-owned bridge contract
before enabling either M4 entry rule. This is an ordinary implementation change
inside C2, not a new architecture investigation.

## Manual Class C configuration freeze

The following environment-owned work is anticipated and bounded:

1. In Document Templates (`sn_doc`), reconcile/publish exactly one employee-only
   and one supervisor-only ServiceNow Sign PDF template. Both use Fill. Only the
   supervisor template is launched after an Approved native approval.
2. Keep the existing 28-mapping `ROB Form 1768 Authorization` as the final
   renderer. It must not launch its historical two-participant workflow.
3. Configure the existing ROB-owned Ask for Approval Flow to persist both
   branches and require rejection comments. Keep legacy approval-response rules
   inactive.
4. In HR Core, configure the narrow case persistence bridge and the narrow M4
   fulfillment bridge/subflow. Grant V2 only exact Execute access.
5. Bind synthetic PDI groups, organization root, due dates, scheduled-job
   timezone, notification sender, report/dashboard audiences, and ATF personas.
6. Remove all temporary `sn_doc.admin`, `sn_doc.writer`, `security_admin`, and
   other elevated assignments after validation.

## Explicitly excluded alternatives

These are not required dependencies and must not be retried during C1–C3:

| Alternative | Classification | Reason |
|---|---|---|
| Use ServiceNow Sign PDF Fill as a denial/refusal control | UNSUPPORTED | Australia documents Save/Submit for Fill; `dev437065` exposed no Refuse/Reject control |
| Configure ServiceNow Sign participant action `Sign` | UNSUPPORTED | Australia documents Sign for external signing; ServiceNow Sign PDF participants expose Fill/Review |
| Author native PDF participants on a V2-owned template | UNSUPPORTED | Australia participant documentation limits this flow authoring to templates created in `sn_doc` |
| Optional/conditional participant skip to split one execution | UNSUPPORTED | Runtime skip semantics do not provide the required approval/signature state machine and already failed PDI proof |
| Direct V2 writes to protected HR Case or HR Task data | UNSUPPORTED | Violates ownership and generated broad GlideRecord privilege constraints |
| Custom approval, signature, fulfillment-task, audit, reminder-ledger, or fifth business table | UNSUPPORTED | Native capabilities and existing four-table architecture cover the requirements |

## C1–C3 acceptance consequences

- **C1/M3:** first complete the `sn_doc` supervisor-only authoring/readiness
  gate, then deploy the split lifecycle, then require focused Approved New and
  Denial before Amendment/Renewal/Reuse/Exception.
- **C2/M4:** implement and prove the HR Core fulfillment bridge before activating
  the two existing M4 entry rules. No direct V2 native-task writes may remain.
- **C3/M5:** implement the one daily job, privacy-safe notifications, secured
  reports/dashboards and ATF/manual persona matrix. Attachment direct-URL and
  aggregate-leakage tests are mandatory release gates.
- A later stop is justified only if the documented feature behaves differently
  in the bounded runtime gate, or the required least-privilege ownership path is
  unavailable. Ordinary source, mapping, condition, or configuration defects
  are corrected within their certified execution.

## Known source/configuration reconciliation already assigned

These are implementation work, not unresolved capability questions:

- C1 replaces the currently installed continuous two-participant signing path
  with the certified split stages. It updates the template-readiness validator,
  employee completion handoff, approval branches, supervisor-only launcher and
  finalization tests. Current tests that assert shared execution or PDF-task
  state-7 denial are expected to change.
- C1 reconciles the `sn_doc`-owned supervisor draft, the employee-only template,
  the inactive published approval Flow, and the 28-map final renderer through
  supported native UI. V2-owned failed candidates remain inactive evidence.
- C2 replaces direct native HR Task insert/update logic in the inactive M4 rule
  with the certified HR Core bridge/subflow contract before activation.
- C3 adds the scheduled renewal/lapse job, notifications, secured reports and
  dashboards, and ATF/manual UAT artifacts; none exists as accepted production
  runtime today.

## Certification status

| Gate | Result |
|---|---|
| Required capabilities classified | 38/38 |
| `UNKNOWN` required capabilities | 0 |
| Selected capabilities classified `UNSUPPORTED` | 0 |
| Foreseeable Document Templates constraint resolved | PASS — native templates owned by `sn_doc`; Fill is signature only |
| Foreseeable denial constraint resolved | PASS — native Ask for Approval rejection |
| Foreseeable M4 protected-write constraint resolved | PASS — HR Core-owned allowlisted fulfillment bridge |
| M5 scheduling/security/reporting path | PASS WITH DOCUMENTED CONSTRAINTS |
| Production behavior changed during C0 | 0 |
| Preserved source/unit baseline | M2 19/19; R1 9/9; Security 22/22; Deployment 16/16; R3 30/30; current adapter 13/13; current R4 63/63; M4 26/26 |

**C0 — COMPLETE**<br>
**FINAL REMAINING ARCHITECTURE — FROZEN**<br>
**C1 / M3 IMPLEMENTATION — READY**

## C1 split-stage implementation evidence (2026-08-27)

- The C0-selected split architecture remains unchanged. No capability row is
  reclassified and no excluded alternative has been reopened.
- Production readiness validation now passes against two active Published
  `sn_doc` signing templates: one required Employee `Fill` participant sourced
  from `subject_person`, and one required governed Supervisor `Fill`
  participant. Each template has exactly one mandatory participant-bound
  signature mapping.
- The active Published `ROB Form 1768 Authorization` remains the post-signature
  renderer with 28 mappings and is not used to orchestrate signing.
- The ROB-owned approval Flow remains inactive pending source installation and
  focused runtime proof. Its Approved and Rejected branches use native
  `sysapproval_approver` evidence; the Rejected branch persists Denied on the
  Authorization Form and its pending Access Details.
- Local pre-install acceptance is PASS: M2 19/19, R1 9/9, Security 22/22,
  Deployment 16/16, R3 30/30, R3 adapter 13/13, R4 62/62, M4 26/26,
  split-template validator 7/7, normal build, and frozen-key build. Generated
  key diff is empty.
- Runtime classification remains pending until the supported IDE install and
  focused Approved New and Denial proofs are complete.

### C1 runtime certification closure

C1 converted every remaining runtime-required M3 capability from pending proof
to accepted PDI evidence. Approved New, Denial, Amendment, Renewal, Reuse,
Exception, retry/idempotency, historical immutability, direct-URL attachment
security, least privilege, regression, and normal/frozen build gates PASS.
Reuse `HRC0001044` retained one native attestation task and no new governed
Authorization Form, Access Detail, final Authorization PDF, supersession, or
M4 task. No required capability is UNKNOWN and no C0 capability was disproven.

**C0 — COMPLETE. C1 — COMPLETE. M3 — COMPLETE. C2 / M4 RUNTIME — READY.**

## C2 M4 certification reuse and implementation evidence

C2 reused M4-01 through M4-09 without reclassification. Australia Patch 3,
`dev437065`, V2 scope `x_2166123_rob_auth`, SDK 4.11.0, and required HR Core
capabilities are unchanged. New capability investigations and architecture
changes are zero.

The candidate implementation follows the certified constraint: V2 plans
grouped work, while the HR Core-owned `RobHrFulfillmentBridgeV2` allowlists the
two case subclasses, four task types, assignments, deterministic business
keys, terminal evidence, waiver authority, and eligible case closure. Focused
source tests are 31/31 PASS. PDI classification remains pending Install #1 and
the fixed 13-gate acceptance matrix.

## C1 signature-evidence native persistence reuse — 2026-09-03

| Requirement | Australia capability | Classification |
|---|---|---|
| Update protected governed fields without generic GlideRecord privilege | Workflow Studio ServiceNow Core Update Record action on the fixed V2 Authorization table | DOCUMENTED-SUPPORTED |
| Invoke the existing subflow and wait for committed state | Generated server snippet uses `sn_fd.FlowAPI.getRunner().subflow(...).inForeground().withInputs(...).run()` | PDI-PROVEN |
| Preserve exact stage evidence | Explicit Reference/DateTime/String inputs and direct/static Update Record values | SUPPORTED-WITH-CONSTRAINT |

Constraint: the current Published subflow must be extended through its native
editor after owner approval. Status must remain a direct/static internal choice;
scripted template handling is prohibited because it previously persisted
`fd-scripted`. No required capability is UNKNOWN and the certified split-stage
architecture is unchanged.
