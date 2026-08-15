# Appendix I — Exception Matrix
## HR Access Rules of Behavior Authorization

**Parent Document:** HR Access Rules of Behavior Authorization — Product Requirements Document
**PRD Version:** 1.0
**Appendix Version:** 1.0 Draft
**Platform:** ServiceNow HRSD — Australia Release
**Application:** HR Access ROB Authorization
**Application Scope:** `x_2108496_hr_acces`
**Development Baseline:** ServiceNow SDK 4.8.1 + Codex

---

# 1. Purpose

This appendix defines the controlled exception-handling model for the HR Access Rules of Behavior Authorization product.

It establishes:

- exception conditions;
- exception identifiers;
- detection points;
- system behavior;
- assignment/ownership;
- records that may be created;
- records that must not be created;
- user notifications;
- escalation behavior;
- correction criteria;
- lifecycle resume points;
- closure conditions;
- testing requirements.

This appendix shall guide:

- Wave 2 intake validation;
- Wave 3 decision-engine exceptions;
- Wave 4 approval/signature exceptions;
- Wave 5 fulfillment exceptions;
- Wave 6 renewal/lapse exceptions;
- Wave 7 security and notification controls;
- Wave 8 ATF/UAT.

The source requirements define ten exception scenarios covering missing supervisor, denial, missing Operations Manager, material organizational/role change, missing end date, duplicate requests, mixed-team routing, incomplete electronic signature, overdue OM action, and withdrawal.

---

# 2. Exception-Handling Principles

## 2.1 Fail Safely

A blocking exception shall stop normal processing rather than allow an incomplete or unauthorized request to continue.

## 2.2 Preserve History

Exception handling shall not erase:

- request history;
- approval history;
- partial authorization activity;
- fulfillment evidence;
- corrective actions.

## 2.3 Do Not Create Invalid Compliance Artifacts

Where the exception prevents a valid authorization decision, the system shall not create:

- an Authorization Form;
- Authorized Access Details;
- signature tasks;
- approval tasks;
- fulfillment tasks,

unless the applicable lifecycle has already legitimately reached a later stage.

## 2.4 Resume, Do Not Duplicate

After correction, the process shall resume at the appropriate lifecycle point.

It shall not create a second request or duplicate downstream artifacts unless a new request is explicitly required.

---

# 3. Exception Categories

Exceptions are grouped into five logical categories:

1. **Intake / Data Integrity**
2. **Authorization Decision**
3. **Approval / Signature**
4. **Fulfillment**
5. **Lifecycle / User Action**

---

# 4. Exception Codes

The MVP shall use controlled exception codes.

Recommended codes:

| Code | Exception |
|---|---|
| EX-01 | Missing or Invalid Supervisor |
| EX-02 | Supervisor Denied |
| EX-03 | Missing Operations Manager |
| EX-04 | Material Organization / Role / Justification Change |
| EX-05 | Missing Required Access End Date |
| EX-06 | Duplicate Open Request |
| EX-07 | Mixed-Team Request |
| EX-08 | Incomplete Electronic Signature |
| EX-09 | Operations Manager Action Overdue |
| EX-10 | Request Withdrawn |
| EX-11 | Invalid ROB Configuration |
| EX-12 | Conflicting Active Authorization Data |
| EX-13 | Invalid / Inactive Requested Access Item |
| EX-14 | Missing Required Request Data |
| EX-15 | Document / PDF Generation Failure |
| EX-16 | Fulfillment Evidence Incomplete |
| EX-17 | Unsupported PDI Capability |

EX-01 through EX-10 map to the source requirements. EX-11 through EX-17 are supporting implementation exceptions necessary to enforce the approved PRD/SDK design and should be treated as derived product controls rather than source-numbered business requirements.

---

# 5. Exception Matrix — Summary

| Code | Condition | Detection Point | Primary Owner | Normal Resume Point |
|---|---|---|---|---|
| EX-01 | Supervisor missing/invalid | Intake / Decision | HR support/fallback | Decision |
| EX-02 | Supervisor denies | Approval | Supervisor / system | Terminal denied |
| EX-03 | OM missing for WPC | Intake / Fulfillment prep | Analytics triage | WPC processing |
| EX-04 | Material context change | Decision | System / business rule | Amendment |
| EX-05 | Required end date missing | Intake / Decision | Employee/support | Decision |
| EX-06 | Duplicate open request | Decision | System/support | Existing case / controlled closure |
| EX-07 | Mixed request | Routing | System | Split fulfillment |
| EX-08 | Signature incomplete | Authorization | Subject/Supervisor | Pending signature |
| EX-09 | OM overdue | Fulfillment | OM / Analytics escalation | OM task |
| EX-10 | Request withdrawn | Any pre-completion stage | Subject/support | Terminal withdrawn |
| EX-11 | Invalid config | Decision | ROB Admin | Decision |
| EX-12 | Conflicting active forms | Decision | ROB Admin/Compliance | Decision |
| EX-13 | Invalid access item | Intake / Decision | ROB Admin/support | Intake/Decision |
| EX-14 | Missing required request data | Intake / Decision | Employee/support | Decision |
| EX-15 | PDF generation fails | Authorization finalization | Platform/Product support | PDF generation |
| EX-16 | Completion evidence missing | Fulfillment closure | Assigned fulfiller | Task completion |
| EX-17 | Required capability unavailable | Any wave | Platform team/Product | Blocked / agency env |

---

# 6. EX-01 — Missing or Invalid Supervisor

## Source Basis

The source requirements state that a missing or inaccurate supervisor shall route to an HR intake coordinator or designated fallback group for correction before approval.

## Detection Points

- Wave 2 intake;
- Wave 3 decision validation;
- before supervisor approval creation.

## Condition

Supervisor:

- is blank;
- cannot be resolved;
- is inactive;
- is known to be incorrect;
- fails another approved validation rule.

## System Action

Return or maintain:

**Exception Review**

## Allowed Records

- HR Case
- native Exception Review HR Task
- work notes / correction evidence

## Prohibited Records

Before correction:

- no new Authorization Form;
- no Access Details;
- no supervisor approval;
- no signature tasks;
- no fulfillment.

## Assignment

Configured exception/fallback group.

## Resolution

Authorized support corrects the supervisor relationship/value.

## Resume Point

**Authorization Decision**

The decision engine reruns using corrected data.

## Notification

EX-08-style Exception Review notification to assigned support.

---

# 7. EX-02 — Supervisor Denied

## Source Basis

The requirements specify that denial shall notify the requester/subject as appropriate, close the request as denied, and create no fulfillment tasks.

## Detection Point

Supervisor approval.

## Condition

Native supervisor approval result = Denied / Rejected.

## System Action

- HR Case → Denied;
- Draft/Pending Authorization → Denied where created;
- pending Access Details → non-active/Denied as designed;
- no fulfillment;
- retain audit history.

## Allowed Records

- HR Case
- existing authorization draft/history
- native approval history
- existing signature evidence if any
- denial notification

## Prohibited

- Authorization → Active
- Staffing task
- Analytics task
- OM task
- external provisioning

## Resume

None.

A future access request begins a new transaction.

---

# 8. EX-03 — Missing Operations Manager

## Source Basis

The requirements state that a Workforce Profile Chart request with a missing OM shall route to Analytics triage for manual OM identification.

## Detection Points

- Wave 2 intake;
- Wave 3 decision;
- Wave 5 OM task creation.

## Condition

WPC requested
AND
Operations Manager cannot be resolved.

## System Action

**Exception Review**

## Owner

Analytics triage / configured fallback.

## Allowed Records

- HR Case
- native exception task

## Prohibited

Until resolved:

- arbitrary OM assignment;
- false OM completion;
- WPC closure;
- bypass of OM requirement.

## Resolution

Authorized support identifies valid OM.

## Resume Point

- decision stage if detected before authorization;
- WPC fulfillment-task creation if detected after authorization.

---

# 9. EX-04 — Material Organization / Role / Justification Change

## Source Basis

The source requires review and amendment when organization, position, role, or business justification materially changes.

## Detection Point

Wave 3 decision.

## Condition

Active authorization exists
AND
material approved context change detected.

## System Action

Authorization Path = **Amendment**

This is a controlled exception to Reuse, not an operational failure.

## Owner

System, using approved deterministic business rules.

## Records

Wave 3 creates no new compliance record.

Wave 4 creates the new Amendment Authorization Form.

## Resume

Amendment lifecycle.

---

# 10. EX-05 — Missing Required Access End Date

## Source Basis

The source requires blocking or correction where a contractor, auditor/investigator, or other time-limited access lacks an end date.

## Detection Points

- intake validation;
- decision validation.

## Condition

Access End Date required
AND
Access End Date blank/invalid.

## Preferred Behavior

Prevent initial submission where practical.

If the case exists:

**Exception Review**

## Owner

Employee before submission or designated support afterward.

## Prohibited

- authorization draft;
- signature;
- approval;
- fulfillment.

## Resume

Decision evaluation after valid date is supplied.

---

# 11. EX-06 — Duplicate Open Request

## Source Basis

The source requires duplicate open requests to alert the submitter or link/merge according to an agreed business rule.

The approved SDK plan further defines detection by subject plus normalized requested-access set and returns the existing case reference.

## Detection Point

Wave 3 decision.

## Condition

Equivalent open request exists.

Recommended logical key:

```text
Subject
+
Normalized Requested Access Set
```

## System Action

**Exception Review**

## Outputs

- Exception Reason = Duplicate Open Request
- existing Case Reference

## Prohibited

- duplicate Authorization Form;
- duplicate Access Details;
- duplicate fulfillment;
- silent parallel processing.

## Owner

System / support where review is needed.

## Resolution Options

Final implementation may:

- direct user/support to existing case;
- close duplicate case;
- use another approved controlled disposition.

## Resume

Normally the existing original case continues.

---

# 12. EX-07 — Mixed-Team Request

## Source Basis

A mixed request shall create separate child tasks while preserving one parent request.

## Important Classification

This is not an error condition.

It is a routing exception/branch.

## Condition

Requested authorized access contains:

- at least one Staffing-owned item;
- at least one Analytics-owned item.

## System Action

After fulfillment gate:

- one Staffing task;
- one Analytics task;
- one parent HR Case.

If WPC exists:

- add OM task.

## Prohibited

- separate parent cases;
- aggregate task that prevents team-level accountability;
- premature parent closure.

## Resume

Normal fulfillment.

---

# 13. EX-08 — Incomplete Electronic Signature

## Source Basis

The source requires an incomplete electronic signature to keep the case pending and prevent fulfillment.

## Detection Points

- employee-signature stage;
- supervisor-signature stage;
- final authorization validation.

## Condition

Required signature evidence is absent/incomplete.

## System Action

Remain in applicable pending authorization state.

## Prohibited

- Authorization Active;
- fulfillment gate true;
- task creation;
- PDF finalization as a completed authorization.

## Owner

Assigned signer.

## Resume

Same signature stage after valid completion.

---

# 14. EX-09 — Operations Manager Action Overdue

## Source Basis

The source requires overdue OM action to escalate to the Analytics lead or designated contact.

## Detection Point

Wave 5 fulfillment / scheduled due-date evaluation.

## Condition

OM task not complete
AND
due/escalation threshold exceeded.

## System Action

- send configured escalation;
- preserve OM task as open/overdue;
- preserve parent case as open.

## Prohibited

- auto-complete OM task;
- mark WPC active solely because overdue;
- close Analytics task incorrectly;
- close parent case.

## Owner

Assigned OM + escalation recipient.

## Resume

OM task continues until:

- completed;
- validly waived;
- another approved resolution occurs.

---

# 15. EX-10 — Request Withdrawn

## Source Basis

The requirements require withdrawal to close the request while retaining partial history.

## Detection Point

Any eligible pre-completion stage.

## Condition

Authorized withdrawal action occurs.

## System Action

- HR Case → Withdrawn;
- stop future normal processing;
- retain applicable partial history.

## Prohibited

- new Active authorization;
- new fulfillment after withdrawal;
- deletion of existing audit history.

## Existing Draft

If an Authorization Form already exists, final treatment shall align with STATE-MAP-05 / final Wave 4 lifecycle rules.

## Resume

None.

A future request is a new transaction.

---

# 16. EX-11 — Invalid ROB Configuration

## Basis

Derived from approved Wave 3 controls.

The decision service requires exactly one active ROB Configuration record.

## Condition

Active configuration count:

- 0; or
- >1.

## Result

**Exception Review**

## Owner

ROB Administrator.

## Prohibited

- arbitrary configuration selection;
- authorization creation;
- expiration calculation;
- normal path determination.

## Resolution

Restore exactly one valid active configuration.

## Resume

Decision engine.

---

# 17. EX-12 — Conflicting Active Authorization Data

## Basis

Derived from the approved one-governing-authorization lifecycle and decision integrity controls.

## Condition

Decision engine detects conflicting records such as:

- more than one apparently current Active governing authorization;
- contradictory supersession relationships;
- Active and Superseded state conflict that cannot be deterministically resolved.

## Result

**Exception Review**

## Owner

ROB Administrator / Compliance / Product support.

## Prohibited

- selecting arbitrary record;
- Reuse based on whichever record was most recently updated;
- rewriting historical data automatically.

## Resolution

Authorized data-integrity correction.

## Resume

Decision.

---

# 18. EX-13 — Invalid or Inactive Requested Access Item

## Condition

Case references:

- deleted/invalid access reference;
- inactive item not eligible for new intake;
- access item outside the selected service/category.

## Preferred Detection

Prevent selection during intake.

If submitted data is invalid:

**Exception Review**

## Owner

ROB Admin / support.

## Prohibited

- silently substituting another access item;
- storing new free-text replacement;
- proceeding with ambiguous authorization scope.

## Resume

Decision after corrected controlled access reference.

---

# 19. EX-14 — Missing Required Request Data

## Condition

Required request data other than the specifically defined Supervisor/End Date/OM conditions is missing.

Examples:

- Subject Person;
- Requested Access;
- Business Justification;
- Employment Type;
- required organization/position context.

## Preferred Behavior

Block submission where practical.

If detected after submission:

**Exception Review**

## Owner

Employee / HR support depending field.

## Resume

Decision after correction.

---

# 20. EX-15 — Document / PDF Generation Failure

## Basis

Derived from the PRD requirement that an authorization cannot become Active without a valid final signed PDF and from Wave 4 stop conditions. The SDK plan requires reliable association between the generated PDF and exact Authorization Form.

## Detection Point

Wave 4 finalization.

## Condition

Examples:

- Document Template fails;
- PDF not generated;
- wrong Authorization Form association;
- required fields missing from generated PDF;
- duplicate competing authoritative PDF remains;
- attachment finalization fails.

## System Action

Do **not** activate Authorization Form.

Remain in controlled pending/error state consistent with physical implementation.

## Owner

ServiceNow Platform / application support.

## Prohibited

- fulfillment;
- manually marking PDF complete;
- activating without valid artifact.

## Resume

PDF finalization after correction.

---

# 21. EX-16 — Fulfillment Evidence Incomplete

## Basis

Derived from Wave 5 requirement that task closure requires completion evidence and provisioning-complete/waiver outcome.

## Detection Point

Task completion / parent closure.

## Condition

Task is being completed but:

- completion evidence missing; or
- provisioning-complete result absent; or
- waiver required but not approved/documented.

## System Action

Prevent task from satisfying closure guard.

## Owner

Assigned fulfiller.

## Prohibited

- parent case completion;
- affected Access Detail activation.

## Resume

Same fulfillment task after valid evidence recorded.

---

# 22. EX-17 — Unsupported PDI Capability

## Basis

The SDK plan explicitly requires development to stop when a required plugin, native table, role, or authentication path is unavailable and prohibits substitute custom architecture.

## Detection Point

Any implementation wave.

Examples:

- required plugin unavailable;
- Document Templates capability unavailable;
- required signature capability unavailable;
- unsupported cross-scope modification;
- transform/source-control limitation.

## System Action

Mark capability:

**Blocked / PDI Limitation**

## Owner

Platform Team + Product Owner.

## Required Documentation

- affected requirement;
- exact limitation;
- evidence;
- whether agency development environment may resolve it;
- revalidation plan.

## Prohibited

- unapproved substitute table;
- insecure workaround;
- architecture change disguised as a defect fix.

---

# 23. Exception Ownership Matrix

| Exception | Employee | Supervisor | Staffing | Analytics | OM | ROB Admin | Platform |
|---|---:|---:|---:|---:|---:|---:|---:|
| EX-01 Supervisor |  |  | Support | Support |  |  |  |
| EX-02 Denial |  | Primary |  |  |  |  |  |
| EX-03 Missing OM |  |  |  | Primary triage |  |  |  |
| EX-04 Material Change | Context input |  |  |  |  | Policy/system |  |
| EX-05 Missing End Date | Primary before submit |  | Support | Support |  |  |  |
| EX-06 Duplicate |  |  | Support | Support |  |  | System |
| EX-07 Mixed |  |  | Fulfillment | Fulfillment | conditional |  | System |
| EX-08 Signature | Employee or Supervisor | Employee/supervisor stage |  |  |  |  | Platform support if technical |
| EX-09 OM Overdue |  |  |  | Escalation owner | Primary |  |  |
| EX-10 Withdrawn | Primary action as allowed |  | Support | Support |  |  |  |
| EX-11 Config |  |  |  |  |  | Primary | Platform |
| EX-12 Data Conflict |  |  |  |  |  | Primary | Support |
| EX-13 Access Item |  |  |  |  |  | Primary | Support |
| EX-14 Missing Data | Primary/support |  | Support | Support |  |  |  |
| EX-15 PDF Failure |  |  |  |  |  | Support | Primary |
| EX-16 Evidence |  |  | Primary | Primary | Primary |  |  |
| EX-17 Capability |  |  |  |  |  | Product/Admin | Primary |

---

# 24. Exception Task Model

Where active work is needed to correct an exception, use native:

`sn_hr_core_task`

with Task Type:

**Exception Review**

The application shall not create a custom Exception table.

The approved architecture requires native HR Task for exception work.

---

# 25. Exception Task Logical Fields

Where no suitable native field exists:

- Parent HR Case
- Task Type = Exception Review
- Exception Code
- Exception Reason
- Related Authorization Form if applicable
- Assigned Group
- Assigned To
- Due Date
- Resolution Notes
- Resolution Result

Exact fields shall be maintained in `FIELD-MAP.md`.

---

# 26. Exception Task Idempotency

A retry shall not create multiple open Exception Review tasks for the same unresolved exception condition.

Recommended logical key:

```text
Parent Case
+
Exception Code
+
Current Exception Cycle
```

Where one exception is corrected and later genuinely recurs, the design may allow a subsequent separately auditable cycle.

---

# 27. Multiple Simultaneous Exceptions

A request may have more than one invalid condition.

Example:

- missing Supervisor;
- missing required End Date.

The implementation may either:

- create one Exception Review task containing multiple controlled issues; or
- create separate exception work only where separate owners are required.

The design shall avoid unnecessary task proliferation.

The exact grouping rule should be finalized during Wave 5 task-template design.

---

# 28. Exception Priority

Blocking exceptions should be resolved before nonblocking operational warnings.

Recommended precedence:

1. security/data-integrity blocker;
2. missing mandatory authorization prerequisite;
3. duplicate/conflict;
4. signature/approval blocker;
5. fulfillment evidence blocker;
6. overdue/escalation condition.

---

# 29. Exception and Authorization Creation

| Exception | Authorization Form May Exist? | New Form Created During Exception? |
|---|---:|---:|
| Missing Supervisor before decision | No | No |
| Missing OM before decision | No | No |
| Missing End Date | No | No |
| Duplicate Request | No | No |
| Invalid Config | No | No |
| Conflicting Active Forms | Historical forms yes | No |
| Incomplete Employee Signature | Yes, Draft/Pending | No duplicate |
| Supervisor Denial | Yes possible | No further form |
| PDF Failure | Yes | No duplicate |
| Fulfillment Evidence Missing | Yes, Active | No |
| OM Overdue | Yes, Active | No |

---

# 30. Exception and Fulfillment Creation

| Condition | Staffing/Analytics/OM Task Allowed? |
|---|---:|
| Missing Supervisor | No |
| Missing End Date | No |
| Invalid Config | No |
| Duplicate Open Request | No |
| Employee Signature Incomplete | No |
| Supervisor Signature Incomplete | No |
| Supervisor Denied | No |
| PDF Finalization Failed | No |
| Authorization Active and gate valid | Yes |
| Missing OM discovered during WPC task generation | Exception task only until resolved |
| Evidence Missing | Existing task remains open; no closure |

---

# 31. Resume-Point Rules

An exception shall resume at the **earliest lifecycle point affected by the correction**, not restart the entire case unnecessarily.

Examples:

### Correct Supervisor

Resume decision / approval preparation.

### Correct End Date

Resume decision.

### Resolve OM Before Authorization

Resume decision.

### Resolve OM After Authorization

Resume OM task creation.

### Complete Missing Employee Signature

Resume supervisor stage.

### Repair PDF Generation

Resume final authorization validation.

### Add Fulfillment Evidence

Resume task completion/closure guard.

---

# 32. Exception Notification Rules

Exception notifications shall comply with Appendix G.

Minimum content:

- task/case number;
- high-level exception category;
- action required;
- due date if applicable;
- secure ServiceNow link.

Detailed sensitive diagnostic content belongs inside ServiceNow.

---

# 33. Exception Escalation

Not every exception requires automatic escalation.

Explicit source-defined escalation exists for:

**EX-09 — OM Overdue**

Other exception escalation rules should be configuration-driven only where operationally approved.

Do not invent broad escalation chains without business-owner approval.

---

# 34. Exception Aging

Exception tasks should support aging and due-date visibility.

The Wave 1 configuration already calls for exception-task due days.

This may support later operational reporting, but no separate required exception dashboard is defined in the source package.

---

# 35. Exception Audit Evidence

For each exception, retain enough evidence to show:

- what condition was detected;
- when detected;
- which case/form/task was involved;
- assigned owner;
- corrective action;
- correction date/time;
- resolution outcome;
- lifecycle resume point.

Native task/work-note/audit records should be preferred over a custom exception-history table.

---

# 36. Exception Security

Exception tasks may expose data needed for correction, but shall not create broader access.

Examples:

- fallback group correcting Supervisor does not automatically gain full PDF repository access;
- Analytics resolving OM does not gain Staffing records;
- Platform support repairing document generation does not need authority to alter business approval evidence.

---

# 37. Exception Reporting

Exception conditions should be reportable from:

- HR Task Task Type;
- Exception Code/Reason;
- HR Case Authorization Path where Exception Review;
- relevant lifecycle fields.

RPT-7 may include Exception Review counts as a recommended metric.

No separate required RPT-9 is introduced.

---

# 38. Exception Test Matrix

| Code | Test Scenario | Expected Result |
|---|---|---|
| EX-01 | Missing Supervisor | Exception; no authorization |
| EX-02 | Supervisor denies | Denied; no fulfillment |
| EX-03 | WPC + missing OM | Exception |
| EX-04 | Active form + material context change | Amendment |
| EX-05 | Contractor/IPA/time-limited + missing end date | Block/Exception |
| EX-06 | Equivalent open case | Exception + existing case ref |
| EX-07 | Mixed Staffing/Analytics | Separate team tasks after gate |
| EX-08 | Employee signature incomplete | Pending; no fulfillment |
| EX-08 | Supervisor signature incomplete | Pending; no fulfillment |
| EX-09 | OM task overdue | Escalate; remain open |
| EX-10 | Withdraw request | Withdrawn; history retained |
| EX-11 | Zero active config | Exception |
| EX-11 | Two active configs | Exception |
| EX-12 | Conflicting active forms | Exception |
| EX-13 | Inactive access item submitted | Exception |
| EX-14 | Missing Business Justification | Block/Exception |
| EX-15 | PDF generation failure | No activation/fulfillment |
| EX-16 | Close task without evidence | Prevent closure qualification |
| EX-17 | Capability unavailable | Block/document; no substitute architecture |

---

# 39. Negative Exception Tests

Tests shall prove the system does **not**:

- create an authorization when config is invalid;
- create fulfillment with missing supervisor;
- create fulfillment after denial;
- bypass OM because OM is blank;
- create duplicate lifecycle for duplicate case;
- activate on incomplete signature;
- close WPC because OM is overdue;
- close a task without evidence;
- activate authorization when PDF generation fails;
- auto-select one of two conflicting Active forms;
- create custom substitute architecture for PDI capability failure.

---

# 40. Exception Evidence Requirements

Each test shall capture:

- Test ID
- Exception Code
- Input State
- Detection Point
- Expected System Action
- Actual System Action
- Exception Task created? Y/N
- Unauthorized downstream records created? Y/N
- Resolution
- Resume Point
- Notification result
- Pass / Fail / Blocked
- Evidence Reference

---

# 41. Exception Traceability to Source Requirements

| Source Requirement | Exception |
|---|---|
| EX-1 | EX-01 Missing Supervisor |
| EX-2 | EX-02 Supervisor Denial |
| EX-3 | EX-03 Missing OM |
| EX-4 | EX-04 Material Context Change |
| EX-5 | EX-05 Missing End Date |
| EX-6 | EX-06 Duplicate Open Request |
| EX-7 | EX-07 Mixed-Team Request |
| EX-8 | EX-08 Incomplete Signature |
| EX-9 | EX-09 OM Overdue |
| EX-10 | EX-10 Withdrawal |

The source defines these ten exception requirements directly.

---

# 42. Derived Exception Controls

EX-11 through EX-17 are implementation/control exceptions derived from the approved PRD and SDK design.

They are necessary to enforce:

- configuration integrity;
- data integrity;
- controlled access references;
- complete required input;
- signed-PDF requirement;
- fulfillment evidence;
- no-substitute-architecture rule.

These derived controls shall be traceable to their governing PRD/SDK requirement rather than misrepresented as original EX-11 through EX-17 requirements from the v1.2 source document.

---

# 43. Exception Artifact Classification

Likely implementation:

## Class A

- exception codes/choices where source-supported;
- server-side validation helpers;
- supporting ACLs.

## Class B

- Exception Review Flow/subflow;
- native HR Task template;
- assignment logic;
- notifications;
- ATF.

## Class C

- production fallback group;
- escalation recipient;
- support group membership.

No Class D workaround shall substitute for missing required platform capability.

---

# 44. Exception Definition of Done

Exception handling is complete when:

1. EX-01 through EX-10 source exceptions are implemented;
2. derived implementation exceptions are documented separately;
3. missing Supervisor cannot bypass approval;
4. denial creates no fulfillment;
5. missing OM cannot bypass WPC control;
6. material changes correctly prevent inappropriate Reuse;
7. missing required End Date is blocked;
8. duplicate cases do not create duplicate lifecycle artifacts;
9. mixed requests preserve one parent and separate team work;
10. incomplete signature prevents fulfillment;
11. overdue OM action escalates without false completion;
12. withdrawal preserves history and stops processing;
13. invalid configuration safely blocks decision;
14. conflicting Active forms do not resolve arbitrarily;
15. invalid access references do not proceed silently;
16. missing required data cannot create authorization;
17. PDF failure prevents activation;
18. missing completion evidence prevents successful task/case closure;
19. unsupported PDI capability is documented rather than replaced with unapproved architecture;
20. exception tasks are idempotent;
21. corrective action resumes the correct lifecycle point;
22. security remains least-privilege;
23. all positive and negative exception tests pass.

---

# 45. Baseline Exception Statement

The HR Access ROB Authorization product shall treat exceptions as **controlled lifecycle states requiring correction or explicit disposition**, not as reasons to weaken authorization controls.

A blocking exception shall stop downstream processing, preserve the existing request and audit history, create only the minimum native exception work needed for resolution, and resume from the appropriate lifecycle point after correction.

No exception shall justify bypassing supervisor approval, required signatures, WPC Operations Manager action, document finalization, fulfillment evidence, PII controls, or the approved native-HRSD architecture.