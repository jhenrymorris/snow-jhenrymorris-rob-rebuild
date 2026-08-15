# Appendix F — Security and Persona Matrix
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

This appendix defines the logical security model for the HR Access Rules of Behavior Authorization product.

It establishes:

- security personas;
- record-level access expectations;
- create/read/update/delete expectations;
- field-level protections;
- attachment and signed-PDF security;
- native HRSD access assumptions;
- fulfillment-team boundaries;
- Operations Manager limitations;
- compliance/audit access;
- ROB Administrator privileges;
- reporting security;
- notification privacy;
- impersonation and negative testing;
- minimum ACL design principles.

This appendix shall guide:

- Wave 2 native HRSD field-access assessment;
- Wave 4 signature and document security;
- Wave 5 fulfillment-task access;
- Wave 7 ACL implementation;
- Wave 7 notification security;
- Wave 7 attachment security;
- Wave 8 report security testing;
- UAT and release-readiness validation.

The governing requirements establish that signed forms and related requests must be role-protected, attachment access must be restricted, notifications must not expose sensitive content, historical authorization evidence must be retained, and SSNs/sensitive PII must not be stored.

---

# 2. Security Objectives

The product security model shall achieve the following objectives:

1. enforce least privilege;
2. prevent broad access to signed authorization records;
3. prevent unrelated users from retrieving signed PDFs;
4. allow employees to complete only their own assigned actions;
5. allow supervisors to perform only assigned approval/signature actions;
6. restrict Staffing and Analytics to records relevant to their authorized work;
7. prevent Operations Managers from browsing the authorization repository;
8. provide authorized Compliance users read-only historical retrieval;
9. provide ROB Administrators controlled administrative access;
10. protect system-managed evidence from ordinary modification;
11. prevent reports from circumventing record security;
12. preserve native HRSD security wherever appropriate;
13. avoid introducing a separate authentication framework.

The approved Wave 7 implementation plan specifically requires contextual access, minimum OM visibility, protected system-managed fields, direct-PDF testing, impersonation testing, and no custom authentication framework.

---

# 3. Security Architecture Principle

Security shall be layered.

The expected control hierarchy is:

```text
Authentication
    |
    v
Native ServiceNow / HRSD Access
    |
    v
Scoped Application Roles
    |
    v
Record ACLs
    |
    v
Contextual Record Relationship
    |
    v
Field ACL / Read-Only Controls
    |
    v
Attachment / Document Security
    |
    v
Report / Dashboard Security
```

No single control shall be assumed to protect every access path.

---

# 4. Authentication

The product shall use the organization's existing ServiceNow authentication and identity framework.

The scoped application shall not create:

- custom passwords;
- custom login pages;
- parallel authentication stores;
- application-specific identity credentials.

The Wave 7 plan expressly prohibits a custom authentication framework.

---

# 5. Persona Inventory

The principal security personas are:

1. Employee / Subject Person
2. Supervisor
3. Staffing Fulfiller
4. Human Capital Analytics Fulfiller
5. Operations Manager
6. Compliance Viewer
7. ROB Administrator
8. ServiceNow Platform Administrator
9. Unrelated Authenticated User

---

# 6. Scoped Application Roles

The scoped application shall define only the roles necessary for privileged application responsibilities.

The approved Wave 1 implementation plan specifies five scoped roles:

- Staffing fulfiller
- Analytics fulfiller
- Operations Manager
- Compliance viewer
- ROB admin

and expressly says not to create requester or subject roles.

Logical role identifiers shall be finalized in `FIELD-MAP.md` / `SECURITY-MODEL.md`.

---

# 7. Employee / Subject Person Persona

## 7.1 Responsibilities

The employee:

- submits their own request in MVP;
- provides required access information;
- provides Business Justification;
- reviews the Rules of Behavior;
- completes employee electronic signature when required;
- views appropriate status through approved Employee Center/HRSD experiences.

## 7.2 Security Principle

The employee shall not receive broad direct-list access to the ROB Authorization repository merely because they are a subject.

The Wave 7 design states that general users should use approved HRSD/Employee Center experiences rather than custom authorization list modules.

## 7.3 Allowed

Depending on final HRSD configuration:

- create own HR access request;
- view own case through approved experience;
- update permitted intake fields before they are locked;
- complete assigned employee signature task;
- view own applicable authorization/document where policy and experience permit.

## 7.4 Prohibited

Employee shall not:

- select another subject in MVP;
- edit Authorization Form system evidence;
- edit authorization status;
- edit signature timestamps;
- edit supervisor approval evidence;
- change Form Version;
- change expiration;
- change supersession;
- create Authorized Access Details manually;
- browse another employee's authorization records;
- retrieve another employee's signed PDF.

---

# 8. Supervisor Persona

## 8.1 Responsibilities

Supervisor:

- reviews business need;
- reviews Business Justification;
- approves or denies;
- electronically signs when required.

The source requirements identify supervisor approval and signature as required before fulfillment.

## 8.2 Allowed

Supervisor may:

- view the assigned request necessary for decision;
- view appropriate authorization context;
- review requested access;
- review Business Justification;
- submit assigned native approval;
- complete assigned supervisor signature;
- view resulting status as required for their role.

## 8.3 Prohibited

Supervisor shall not receive broad repository access merely because they supervise one or more subjects.

Supervisor shall not:

- alter employee signature evidence;
- alter system-calculated Form Version;
- alter expiration;
- alter authorized scope after signature;
- create fulfillment tasks manually as a normal process;
- browse unrelated employees' signed forms.

---

# 9. Staffing Fulfiller Persona

## 9.1 Responsibilities

Staffing processes approved HR systems access.

Relevant access may include:

- FPPS/WTTS;
- eOPF;
- USA Staffing;
- future Staffing-owned access items.

## 9.2 Security Principle

Staffing shall have access only to the records and information needed to complete authorized Staffing work.

The Wave 7 plan requires Staffing and Analytics to see only records tied to authorized work.

## 9.3 Allowed

Staffing may:

- read assigned Staffing HR Tasks;
- read relevant parent HR Case context;
- read applicable requested access;
- read the related Authorization Form only to the extent necessary for fulfillment;
- read applicable Authorized Access Details;
- enter fulfillment completion evidence;
- update permitted task fields;
- close/complete assigned Staffing work according to lifecycle rules.

## 9.4 Prohibited

Staffing shall not:

- browse all Authorization Forms;
- browse all signed PDFs without work context;
- edit employee/supervisor signatures;
- edit approval evidence;
- edit Form Version;
- edit expiration;
- change historical status;
- change supersession relationships;
- create Access Details manually;
- activate unrelated Analytics access;
- access WPC OM information beyond operational need.

---

# 10. Human Capital Analytics Fulfiller Persona

## 10.1 Responsibilities

Analytics processes:

- OAS/DataMart access;
- Human Capital Reports;
- Workforce Profile Charts;
- future Analytics-owned access items.

## 10.2 Allowed

Analytics may:

- read assigned Analytics tasks;
- read relevant parent HR Cases;
- read related Authorization Forms where needed;
- read applicable Authorized Access Details;
- view WPC OM task status;
- enter Analytics fulfillment evidence;
- validate applicable WPC prerequisites;
- complete assigned Analytics work.

## 10.3 Prohibited

Analytics shall not:

- browse the full authorization repository without contextual reason;
- modify signatures;
- modify supervisor approval evidence;
- edit Form Version;
- edit expiration;
- alter historical authorization artifacts;
- complete OM work on behalf of the OM unless an approved exception/waiver process explicitly permits it;
- activate unrelated Staffing access.

---

# 11. Operations Manager Persona

## 11.1 Responsibilities

Operations Manager performs the ARM role-assignment action for Workforce Profile Chart access.

The requirements distinguish:

- ARM = provisioning system;
- OAS = target/report-hosting environment.

## 11.2 Security Principle

Operations Manager access shall be extremely narrow.

The OM requires enough information to:

- identify the subject;
- identify the required WPC/ARM action;
- complete and evidence the assigned task.

The OM does not require broad authorization-repository access.

## 11.3 Allowed

OM may:

- read own assigned OM task;
- view minimum subject/context information necessary to perform ARM role assignment;
- enter completion evidence;
- complete or update the assigned task within approved fields;
- access secure links provided for assigned work.

## 11.4 Prohibited

OM shall not:

- browse all Authorization Forms;
- browse unrelated employee requests;
- browse all signed PDFs;
- access unrelated Business Justifications;
- change authorization status;
- change authorized scope;
- change signatures;
- alter approval evidence;
- administer configuration;
- view Staffing/Analytics workload beyond the minimum task context.

The Wave 7 validation gate expressly requires that Operations Managers cannot browse the full authorization repository.

---

# 12. Compliance Viewer Persona

## 12.1 Responsibilities

Compliance/Audit personnel shall be able to:

- retrieve current authorizations;
- retrieve historical authorizations;
- search by individual;
- search by organization;
- review signed forms;
- review approval/signature/fulfillment traceability.

The source requirements explicitly require current and historical retrieval by employee and organization.

## 12.2 Access Model

Compliance Viewer shall be:

**read-only**

for governed authorization records unless another separately approved role grants administrative capability.

## 12.3 Allowed

Compliance may:

- read Authorization Forms;
- read historical statuses;
- read Authorized Access Details;
- retrieve authorized signed PDFs;
- view approval/signature evidence;
- view associated request and fulfillment history;
- run approved audit reports;
- search by subject and organization.

## 12.4 Prohibited

Compliance Viewer shall not:

- alter authorization states;
- alter signatures;
- alter approval evidence;
- edit Business Justification;
- edit access scope;
- replace PDFs;
- change expiration;
- change supersession;
- create operational fulfillment tasks;
- administer reference/configuration data.

The Wave 7 plan requires Compliance to retrieve current/historical records but not alter them.

---

# 13. ROB Administrator Persona

## 13.1 Responsibilities

ROB Administrator maintains application-level governed configuration and supports authorized administration.

Expected responsibilities may include:

- ROB Configuration;
- Access Item Reference;
- application administration;
- authorized correction/support procedures;
- monitoring data integrity;
- controlled administrative actions.

## 13.2 Access

ROB Admin may receive broad access to the four custom business tables, subject to platform and agency policies.

## 13.3 Restrictions

Even ROB Administrator access shall not justify bypassing native signature/approval evidence.

ROB Admin shall not normally:

- fabricate employee signatures;
- fabricate supervisor signatures;
- rewrite native approval history;
- overwrite historical PDFs;
- create false fulfillment evidence.

Privileged administrative corrections shall be auditable.

---

# 14. ServiceNow Platform Administrator Persona

Platform Administrator performs technical platform administration.

This persona may possess broad ServiceNow platform privilege independent of the scoped application's functional roles.

The application security model shall not assume that application ACLs can meaningfully restrict a true platform super-admin in every administrative context.

However:

- administrative activity should remain auditable;
- production operating procedures should limit use of elevated access;
- application design shall not require routine platform-admin intervention.

---

# 15. Unrelated Authenticated User Persona

This persona represents a valid ServiceNow user who has no relationship to a particular ROB authorization/request.

## Required Result

Access shall be denied to:

- custom ROB Authorization records;
- Authorized Access Details;
- signed PDFs;
- sensitive request details;
- audit reports;
- team workload data not otherwise authorized.

The Wave 7 validation criteria expressly require that unrelated users cannot read custom records or direct PDF URLs.

---

# 16. Custom Table Security Matrix

Legend:

- **C** = Create
- **R** = Read
- **U** = Update
- **D** = Delete
- **CTX** = Context-dependent only
- **RO** = Read-only
- **ADM** = Administrative
- **—** = No normal access

| Persona | ROB Configuration | ROB Access Item Reference | ROB Authorization Form | Authorized Access Detail |
|---|---|---|---|---|
| Employee | — | R active/intake context | CTX / approved experience | CTX if exposed |
| Supervisor | — | R as needed | CTX | CTX |
| Staffing | — | R | CTX, primarily R | CTX, primarily R |
| Analytics | — | R | CTX, primarily R | CTX, primarily R |
| OM | — | R WPC context only if needed | Minimal CTX | Minimal WPC CTX |
| Compliance | RO if required | RO | RO | RO |
| ROB Admin | ADM | ADM | ADM | ADM |
| Platform Admin | Platform governed | Platform governed | Platform governed | Platform governed |
| Unrelated User | — | Only public/intake-safe active values if required | — | — |

This table defines logical intent. Exact create/update permissions shall be refined per field and process in the ACL implementation.

---

# 17. ROB Configuration Security

## Read

Recommended normal access:

- ROB Admin: Read
- Compliance: optional Read where needed for audit
- other personas: no direct table access

System processes may read configuration through server-side application logic.

## Create/Update

ROB Admin only, subject to final application administration model.

## Delete

Prefer controlled administrative deactivation/history rather than casual deletion.

The configuration record materially controls:

- Form Version;
- recertification;
- grace window;
- routing;
- reminders;
- task timing.

Changes should be audited.

---

# 18. Access Item Reference Security

## Employee

Employees need access to active, user-selectable items through intake.

This does not require unrestricted access to all administrative fields on the reference record.

## Fulfillers

Staffing and Analytics may need Read access to applicable routing/reference data.

## ROB Admin

Create/Update/Deactivate.

## Historical Integrity

An inactive Access Item Reference may remain readable to authorized personnel through historical Authorization Details.

It shall not disappear from old authorization history.

---

# 19. Authorization Form Security

This is the most sensitive custom business table.

## Employee

May interact through approved own-process experiences.

Direct list access is not required for MVP.

## Supervisor

May read assigned/current authorization context necessary for approval/signature.

## Staffing / Analytics

Contextual Read only where tied to authorized assigned work.

## OM

Minimal contextual access only if required.

## Compliance

Read-only current and historical access.

## ROB Admin

Administrative access.

## Unrelated User

No access.

---

# 20. Authorized Access Detail Security

Access Detail visibility shall follow:

- parent authorization security;
- assigned work context;
- persona requirement.

Ordinary employees and supervisors shall not manually create/update details.

Fulfillers may need Read and controlled status/evidence interaction through fulfillment logic, but should not directly alter historical/system-managed fields.

---

# 21. Native HR Case Security

The application shall leverage native HRSD security wherever possible.

This appendix does not redefine all native HR Case access controls.

Instead:

- employees access their own cases through approved HRSD experiences;
- supervisors access assigned approval context;
- fulfillers access assigned HR work;
- compliance receives authorized audit access as designed;
- custom fields on native HR Case may require field-level ACLs where their sensitivity exceeds standard case exposure.

Wave 7 specifically directs the design to use native HRSD access for requesters/subjects and custom ACLs primarily on the four custom tables and sensitive fields.

---

# 22. Native HR Task Security

HR Tasks shall use native assignment/context security where possible.

## Staffing Task

Accessible to appropriate Staffing assignment group/users.

## Analytics Task

Accessible to appropriate Analytics assignment group/users.

## OM Task

Accessible to assigned Operations Manager and approved oversight personnel.

## Exception Review Task

Accessible to designated support/fallback group.

Task records shall not provide a back door to unrelated Authorization Form data.

---

# 23. Approval Security

Native approval records remain authoritative.

Only assigned/authorized approvers shall be able to act on the approval.

Other personas may receive read-only evidence where their work requires it.

No scoped custom field shall be writable in a way that falsely represents an approval as completed.

---

# 24. Signature Security

Native document/signature records remain authoritative.

Only the assigned signer shall complete the relevant signature action.

## Employee Signature

Assigned to Subject Person.

## Supervisor Signature

Assigned to Supervisor.

## Deferred Delegated Model

Requester cannot sign on behalf of Subject Person.

The requirements explicitly require signature routing to the subject rather than requester in delegated cases.

---

# 25. Protected Field Categories

The following fields are system-managed or highly sensitive and shall not be freely editable by ordinary personas.

## Authorization Evidence

- employee signer
- employee signature complete
- employee signature timestamp
- supervisor approval result
- supervisor approval timestamp
- supervisor signer
- supervisor signature complete
- supervisor signature timestamp

## Lifecycle

- Authorization Path
- Authorization Form Status
- Access Detail Status
- Effective Date
- Expiration Date
- Lapse state
- Revocation state

## Governance

- Form Version
- Authorization Number
- Access Detail Number
- Supersedes
- Superseded By

## Document

- Final PDF Generated flag
- authoritative PDF linkage
- document finalization metadata

## Routing Snapshots

- fulfillment owner snapshot
- provisioning system snapshot
- target system snapshot
- Requires OM Action snapshot

The Wave 7 design expressly requires protection of signatures, approvals, status, version, expiration, PDF flags, supersession, audit notes, and routing snapshots.

---

# 26. User-Editable Field Categories

Normal user-editable values shall be narrowly limited.

Before submission/lock, examples may include:

- Requested Access
- Business Justification
- conditional Access End Date
- other approved intake information

After authorization preparation/signature begins, material authorization inputs shall not be casually editable.

---

# 27. Support-Correctable Fields

Designated support personnel may require controlled correction ability for:

- Supervisor
- Operations Manager
- organization/profile-derived information
- position/profile-derived information
- exception resolution fields

Such corrections shall:

- be limited to authorized roles;
- be auditable;
- occur before the applicable decision/document lock where possible;
- trigger recalculation only under the controlled decision rules.

---

# 28. Business Justification Security

Business Justification is required for authorization but may contain sensitive business context.

Accordingly:

- Employee may enter their own justification.
- Supervisor may view it for approval.
- Assigned Staffing/Analytics personnel may view it when needed for fulfillment.
- OM should receive only the minimum necessary context.
- Compliance may read it for approved audit purposes.
- Unrelated users receive no access.

Business Justification shall not appear in routine notification bodies.

The Wave 6 and Wave 7 plans explicitly prohibit business justification from privacy-sensitive notifications.

---

# 29. Signed PDF Security

The signed Form 1768 is a governed compliance artifact.

## Authorized Access

Potential authorized readers:

- Subject Person through approved experience if policy permits;
- assigned Supervisor where appropriate;
- assigned Staffing/Analytics personnel where operationally necessary;
- Compliance/Audit;
- ROB Admin;
- approved platform administrators.

## Restricted Access

Operations Manager should not receive PDF access merely to perform WPC ARM work unless specifically justified.

Unrelated users receive no access.

---

# 30. Direct Attachment URL Requirement

Security testing shall not rely only on whether the attachment is hidden from a form.

Testing shall include direct attachment/document URLs.

Required result:

> A user who lacks authorization to the parent/governed artifact shall not be able to retrieve the signed PDF directly.

The implementation plan explicitly requires attachment access testing through parent-record security and direct URLs.

---

# 31. Attachment Security Strategy

Preferred sequence:

1. rely on native attachment inheritance/security where sufficient;
2. validate actual runtime behavior;
3. add custom attachment controls only where native inheritance is insufficient.

Custom attachment ACL logic shall not be added reflexively.

The approved plan expressly requires this native-first approach.

---

# 32. PDF Repository Browsing

No general employee, supervisor, fulfiller, or OM role shall receive a broad module that exposes the entire signed-form repository.

Compliance and ROB Admin may have controlled repository/list access according to business need.

---

# 33. Historical Form Security

Historical Authorization Forms include:

- Superseded
- Revoked
- Obsolete Version
- Expired
- Lapsed
- Denied where retained

Historical status does not make a record less sensitive.

The same or stricter access controls apply.

---

# 34. Reporting Security Principle

Reports and dashboards shall not provide broader access than the underlying user's authorization.

The Wave 8 release criteria specifically prohibit reports from exposing data beyond ACL access.

---

# 35. Staffing Dashboard Security

Staffing users may see:

- Staffing workload;
- Staffing task status;
- applicable request/access context;
- organization/supervisor information needed for work.

They shall not gain unrestricted Analytics or repository data merely because a dashboard uses a broad report source.

---

# 36. Analytics Dashboard Security

Analytics users may see:

- Analytics workload;
- applicable report/data-access requests;
- WPC workload;
- OM action status.

They shall not receive unrestricted Staffing or historical repository access unless separately authorized.

---

# 37. OM Dashboard / Oversight Security

Where OM-related reporting exists:

- individual OM users should see their applicable actions;
- Analytics oversight users may see authorized OM workload information;
- no broad authorization repository should be exposed unnecessarily.

---

# 38. Compliance Reporting Security

Compliance may access:

- audit retrieval;
- current/historical Authorization Forms;
- organization-level retrieval;
- renewal/lapse worklists where authorized.

Compliance access is read-only unless separately approved.

---

# 39. Leadership Dashboard Security

Enterprise Process reporting shall expose only the detail level approved for leadership.

Where aggregate reporting suffices, the dashboard should avoid unnecessary exposure of:

- signed PDFs;
- Business Justification text;
- signature data;
- sensitive employee-level details.

---

# 40. Notification Security

Notifications shall contain only the minimum information required to:

- identify the requested action;
- identify the relevant case/authorization number where appropriate;
- communicate applicable due date;
- provide a secure platform link.

Notifications shall not include:

- SSN;
- sensitive PII;
- signed PDF attachments;
- signature images;
- full Form 1768 content;
- full Business Justification;
- unnecessary sensitive access information.

The source security requirements expressly prohibit SSNs, sensitive form content, and signed-form attachments in notifications.

---

# 41. Privacy-Safe Notification Matrix

| Notification | Recipient | Allowed Content | Prohibited Content |
|---|---|---|---|
| Employee Signature Required | Employee | action, case/auth number, secure link | PDF, signatures, SSN, full justification |
| Supervisor Approval/Signature | Supervisor | action, subject/request context needed to decide, secure link | unnecessary sensitive detail |
| Denial | Employee | outcome, case number, appropriate next step | signed PDF |
| Staffing Assignment | Staffing | task, permitted access-item context, secure link | unrelated Analytics data |
| Analytics Assignment | Analytics | task, permitted access context, secure link | unrelated Staffing data |
| OM Assignment | OM | subject/action needed for ARM, due date, secure link | full ROB form / unrelated justification |
| OM Escalation | Approved recipient | overdue action metadata | signed PDF / excess content |
| Renewal Reminder | Subject | authorization number/date/action/link | signed artifact |
| Lapse Notice | Subject / approved HR recipient | lapse status/action/date | sensitive form content |

---

# 42. Data Minimization

The security model shall enforce the product's data-minimization principle.

The solution shall not store:

- SSNs;
- unnecessary sensitive PII;
- actual sensitive report content;
- downstream-system credentials;
- passwords;
- copies of unrelated HR data.

The source requirements require subject identification through ServiceNow user/employee ID rather than SSN.

---

# 43. Person Reference Security

References to:

- Subject Person
- Supervisor
- Operations Manager

shall not by themselves grant access to the referenced user's unrelated ServiceNow data.

The application shall use the reference only for the authorized process purpose.

---

# 44. Contextual Access Principle

For fulfillers and supervisors, access should generally be determined from record relationships.

Examples:

## Staffing

User is member of authorized Staffing group
AND
record/task is assigned to Staffing or otherwise related to authorized work.

## Analytics

User is member of authorized Analytics group
AND
record/task is associated with authorized Analytics work.

## OM

User is the assigned OM
AND
access is limited to the associated task/context.

This is preferable to broad role-only access to all records.

---

# 45. Shared Security Helper

Where scripted contextual ACL logic is required, the design should use a reusable server-side access helper instead of duplicating complex conditions across ACLs.

The Wave 7 plan expressly calls for one shared server-side access helper for contextual decisions.

---

# 46. Scripted ACL Rule

A scripted ACL shall be introduced only when declarative role/condition controls are insufficient.

Every scripted ACL shall have:

- documented business rationale;
- supported tables/fields;
- positive tests;
- negative tests;
- performance review;
- regression tests.

The implementation plan prohibits proceeding where a scripted ACL lacks documented rationale and regression testing.

---

# 47. Delete Security

Routine users and fulfillers shall not delete governed authorization records.

Recommended logical deletion policy:

| Record | Normal Delete |
|---|---|
| ROB Configuration | Admin-governed only |
| Access Item Reference | Prefer deactivate over delete |
| Authorization Form | No ordinary deletion |
| Authorized Access Detail | No ordinary deletion |
| Signed PDF | No ordinary deletion once authoritative |
| HR Case/Task | Native records/retention controls |
| Approval/Signature Evidence | Native governance |
| Audit History | Platform/records governance |

Retention/disposition shall follow applicable agency records guidance.

---

# 48. Create Security

Operational records shall primarily be system/lifecycle-created.

| Record | Normal Creator |
|---|---|
| HR Case | Employee via Employee Center / HRSD |
| HR Task | Lifecycle/system |
| ROB Configuration | ROB Admin |
| Access Item Reference | ROB Admin |
| Authorization Form | Lifecycle/system |
| Access Detail | Lifecycle/system |
| Approval | Native workflow |
| Signature Task | Native document lifecycle |
| Final PDF | Document lifecycle |

Manual creation of Authorization Form/Access Detail shall not be part of normal end-user or fulfiller behavior.

---

# 49. Update Security by Field Ownership

Field ownership categories shall be explicit.

## USER

User-editable intake fields.

## SUPPORT

Authorized correction fields before lock.

## SYSTEM

Lifecycle-managed fields.

## NATIVE

Native approval/signature/task evidence.

## ADMIN

Configuration/reference administration.

ACLs/UI policies/data policies shall align with these ownership categories.

---

# 50. Security Matrix — Authorization Form Fields

| Field Category | Employee | Supervisor | Staffing | Analytics | OM | Compliance | ROB Admin |
|---|---|---|---|---|---|---|---|
| Subject snapshot | R own | R assigned | R CTX | R CTX | Minimal R | R | R/U admin only if authorized correction |
| Position/org snapshot | R own | R | R CTX | R CTX | Minimal | R | Controlled |
| Business Justification | R own | R assigned | R CTX | R CTX | Minimal/No | R | Controlled |
| Form Version | R | R | R | R | Minimal/No | R | System/Admin |
| Status | R | R | R | R | task-related only | R | System/Admin |
| Effective/Expiration | R | R | R | R | minimal | R | System/Admin |
| Employee signature evidence | R own | R as needed | RO | RO | No | R | RO/admin evidence |
| Supervisor approval evidence | R own/status | R own | RO | RO | No | R | RO/admin evidence |
| Supervisor signature evidence | R own/status | R own | RO | RO | No | R | RO/admin evidence |
| Supersession | R | R | RO | RO | No | R | System/Admin |
| PDF metadata | R as permitted | R as permitted | RO CTX | RO CTX | No | R | Admin |

---

# 51. Security Matrix — Access Detail Fields

| Field | Employee | Supervisor | Staffing | Analytics | OM | Compliance | ROB Admin |
|---|---|---|---|---|---|---|---|
| Access Item | R own/context | R | R applicable | R applicable | R WPC | R | Admin |
| Status | R | R | R | R | task context | R | System/Admin |
| Fulfillment Owner Snapshot | R limited | R limited | R | R | minimal | R | System/Admin |
| Provisioning System | R limited | R limited | R applicable | R applicable | ARM for WPC | R | System/Admin |
| Target System | R limited | R limited | R applicable | R applicable | WPC/OAS | R | System/Admin |
| Source Case | R own | R assigned | R CTX | R CTX | task relation | R | Admin |
| Parent Authorization | R own as permitted | R assigned | R CTX | R CTX | minimal | R | Admin |
| Historical evidence | Limited | Limited | RO | RO | No | R | Admin |

---

# 52. Security Matrix — HR Tasks

| Task | Employee | Supervisor | Staffing | Analytics | OM | Compliance | ROB Admin |
|---|---|---|---|---|---|---|---|
| Staffing Fulfillment | Status if exposed | Limited | R/U assigned | No unless authorized context | No | R audit | Admin |
| Analytics Fulfillment | Status if exposed | Limited | No unless authorized context | R/U assigned | No | R audit | Admin |
| OM ARM Role Assignment | Status if exposed | Limited | No | Oversight R | R/U assigned | R audit | Admin |
| Exception Review | Status if exposed | Limited | Based on assignment | Based on assignment | only if assigned | R audit | Admin |

---

# 53. Security Matrix — Actions

| Action | Employee | Supervisor | Staffing | Analytics | OM | Compliance | ROB Admin |
|---|---:|---:|---:|---:|---:|---:|---:|
| Submit own request | Yes | Yes as employee | Yes as employee | Yes as employee | Yes as employee | Yes as employee | Yes as employee |
| Submit for another employee | **No MVP** | No | No | No | No | No | No |
| Employee signature | Own only | Own if subject | Own if subject | Own if subject | Own if subject | Own if subject | Own if subject |
| Supervisor approval | No | Assigned only | No unless assigned supervisor | No unless assigned supervisor | No unless assigned supervisor | No | No normal |
| Supervisor signature | No | Assigned only | No unless assigned supervisor | No unless assigned supervisor | No unless assigned supervisor | No | No normal |
| Complete Staffing task | No | No | Assigned | No | No | No | Admin exception |
| Complete Analytics task | No | No | No | Assigned | No | No | Admin exception |
| Complete OM task | No | No | No | Oversight only | Assigned | No | Admin exception |
| View full repository | No | No | No | No | No | Read-only authorized | Admin |
| Maintain configuration | No | No | No | No | No | No | Yes |
| Maintain access reference | No | No | No | No | No | No | Yes |

---

# 54. Self-Submission Security

MVP intake shall enforce:

```text
Requester = Logged-in User
Subject Person = Logged-in User
```

Another subject shall not be user-selectable.

Security shall not rely only on hiding the field in the UI.

Server-side validation or equivalent process control shall prevent bypass.

The Wave 2 stop criteria explicitly prohibit proceeding when self-submission can be bypassed.

---

# 55. Delegated Submission Future Security

When delegated submission is later approved:

- delegated capability shall require specifically authorized requester access;
- authorization remains per subject;
- requester cannot sign for subject;
- supervisor is the subject's supervisor;
- delegated requester does not automatically gain persistent access to the subject's signed authorization.

This remains deferred for MVP.

---

# 56. WPC Security

Workforce Profile Chart processing involves three distinct roles:

1. Subject
2. Analytics
3. Operations Manager

Security shall preserve those boundaries.

The OM task shall expose only what the OM needs for ARM role assignment.

The Analytics team may view task completion status and evidence necessary to validate WPC processing.

The OM role shall not implicitly inherit Analytics access.

---

# 57. Revocation Security

The source requirements recognize Revoked as an authorization status but do not yet define the complete administrative revocation procedure.

Until `STATE-MAP-04` is resolved:

- Revocation shall not be exposed as a general fulfiller action.
- Only an explicitly approved administrative role/process may perform it.
- Revocation reason and actor shall be auditable.
- Revoked authorization cannot be reactivated.

---

# 58. Signed-Artifact Immutability

After finalization:

- employee signature cannot be replaced;
- supervisor signature cannot be replaced;
- Form Version cannot be changed;
- Business Justification snapshot cannot be silently changed;
- authorized scope cannot be silently changed;
- final PDF cannot be overwritten as routine editing.

A new authorization lifecycle shall be used where authorization meaning changes.

---

# 59. Security Audit Requirements

Security-sensitive activity shall be auditable where supported, including:

- Authorization Form state;
- Access Detail state;
- Form Version;
- effective/expiration dates;
- employee signature evidence;
- supervisor approval evidence;
- supervisor signature evidence;
- supersession;
- revocation;
- routing snapshots.

The Wave 7 plan explicitly requires auditing for these critical changes.

---

# 60. Impersonation Test Personas

Wave 7 shall include test users representing:

1. Subject Employee
2. Supervisor
3. Staffing Fulfiller
4. Analytics Fulfiller
5. Operations Manager
6. Compliance Viewer
7. ROB Administrator
8. Unrelated User

The approved implementation plan explicitly requires impersonation tests across these personas.

---

# 61. Employee Impersonation Tests

Verify employee can:

- submit own request;
- access own allowed HRSD experience;
- complete own employee signature.

Verify employee cannot:

- submit for another subject;
- browse custom repository;
- retrieve unrelated PDF;
- edit protected authorization fields;
- edit supervisor evidence;
- create Access Details.

---

# 62. Supervisor Impersonation Tests

Verify supervisor can:

- access assigned approval;
- see required business context;
- approve/deny;
- complete assigned signature.

Verify supervisor cannot:

- approve an unrelated request;
- sign as employee;
- browse unrelated forms;
- alter system-managed evidence.

---

# 63. Staffing Impersonation Tests

Verify Staffing can:

- access assigned Staffing task;
- read required parent/context;
- enter completion evidence;
- complete valid task.

Verify Staffing cannot:

- access unrelated authorization;
- edit signature fields;
- edit Form Version;
- change supersession;
- complete Analytics/OM task without authorization;
- retrieve unrelated PDF.

---

# 64. Analytics Impersonation Tests

Verify Analytics can:

- access assigned Analytics work;
- view appropriate WPC OM task status;
- complete authorized Analytics work.

Verify Analytics cannot:

- alter employee/supervisor evidence;
- broadly browse unrelated authorization records;
- perform OM action simply because Analytics role exists;
- activate Staffing items improperly.

---

# 65. OM Impersonation Tests

Verify OM can:

- access assigned OM task;
- view minimum required WPC subject/action context;
- enter completion evidence;
- complete task.

Verify OM cannot:

- browse Authorization Form repository;
- retrieve unrelated PDFs;
- access full Business Justification where unnecessary;
- alter authorization scope/status;
- administer configuration.

---

# 66. Compliance Impersonation Tests

Verify Compliance can:

- retrieve current forms;
- retrieve historical forms;
- search by employee;
- search by organization;
- read signed PDFs;
- review audit evidence.

Verify Compliance cannot:

- alter records;
- change state;
- change signatures;
- replace PDFs;
- create fulfillment work.

---

# 67. Unrelated-User Tests

The unrelated user shall fail all attempts to:

- read Authorization Form;
- read Access Detail;
- access custom list/module;
- retrieve signed PDF through UI;
- retrieve signed PDF through direct URL;
- query restricted report;
- access sensitive request context.

These are release-blocking negative tests.

---

# 68. Negative Tests Before Positive Tests

For sensitive ACL validation, negative tests should execute before confirming authorized access.

This reduces the risk of testing only expected access and overlooking over-permission.

The Wave 7 implementation plan explicitly requires negative tests before positive tests.

---

# 69. Role-Membership Testing

Tests shall include:

- user with role but no task/context;
- user with task/context but missing required role where role is needed;
- inactive group;
- removed group membership;
- cross-team user;
- dual-role user where applicable.

This verifies that access is not accidentally based on only one weak condition.

---

# 70. Attachment Test Matrix

| Scenario | Expected |
|---|---|
| Subject accessing permitted own PDF | Allow if approved design permits |
| Supervisor accessing assigned document context | Allow as required |
| Staffing assigned record | Allow only if operationally required |
| Analytics assigned record | Allow only if required |
| OM requesting full signed PDF | Deny unless explicitly approved |
| Compliance | Allow |
| ROB Admin | Allow |
| Unrelated user UI access | Deny |
| Unrelated user direct URL | Deny |
| User after relationship/task removed | Reevaluate; deny unless another basis exists |

---

# 71. Report Security Test Matrix

For each RPT-1 through RPT-8:

1. verify intended persona can access report;
2. verify row/detail visibility matches ACL;
3. verify unrelated user cannot access;
4. verify sensitive fields are not unintentionally exposed;
5. verify drill-down does not bypass record restrictions;
6. verify export behavior is consistent with permissions.

---

# 72. Export Security

Where report/list export is available, export shall not become a means of bypassing row or field access.

Particular attention is required for:

- Authorization Forms;
- Business Justification;
- employee lists;
- renewal/lapse reports;
- audit retrieval data.

---

# 73. Search and Reference Security

Reference fields and autocomplete/search behavior shall not expose restricted records or users beyond what is necessary.

Examples:

- employee cannot search arbitrary Authorization Forms;
- OM reference lookup shall not expose application data;
- Authorization reference fields shall honor ACLs.

---

# 74. API / Background Access

Server-side application logic may require elevated application-context access.

Such logic shall:

- execute only for approved lifecycle purposes;
- not expose unrestricted results back to unauthorized clients;
- apply explicit contextual validation;
- avoid using elevated access as a blanket substitute for proper ACL design.

---

# 75. ACL Performance

Contextual scripted ACL logic shall be designed to avoid expensive broad queries for every row.

The Wave 8 plan requires performance checks for ACL scripts along with decision queries, related lists, reports, and scheduled renewal selection.

---

# 76. ACL Source-Control Classification

Security artifacts shall be classified according to the SDK artifact model.

Likely examples:

### Class A — Source-First

- many custom-table ACL records;
- roles;
- supported field ACLs;
- server-side security helper.

### Class B — Configure Then Transform

Where applicable for platform-configured security artifacts not practical to author source-first.

### Class C — Manual

- group membership;
- production role assignments;
- platform-owner/security approvals.

Exact classification shall be recorded in the build ledger.

---

# 77. Security Change Control

Security changes shall not be made casually to “make the form work.”

When a security defect occurs:

1. reproduce exact access failure;
2. determine whether expected behavior is allow or deny;
3. identify record/field/table ACL involved;
4. identify persona/context;
5. make the smallest correction;
6. rerun negative test;
7. rerun positive test;
8. rerun regression suite;
9. update `SECURITY-MODEL.md`.

---

# 78. Prohibited Security Shortcuts

The implementation shall not:

- grant broad admin-like role to solve an ACL issue;
- grant Staffing read access to all authorization records;
- grant Analytics read access to all authorization records;
- grant OM repository access;
- disable ACLs for testing and leave them disabled;
- expose signed PDFs through public/unguarded attachment URLs;
- rely only on UI hiding;
- mark fields read-only only in the form UI while allowing API/server modification by unauthorized roles;
- hard-code individual user sys_ids into ACLs;
- use unrestricted admin impersonation as evidence that a business persona works.

---

# 79. PDI Security Test Data

Synthetic identities shall represent each security persona.

No production employee information, real signed forms, real SSN, or real sensitive business justification shall be used in the PDI.

The pre-wave readiness gate expressly requires synthetic users/groups and prohibits production/sensitive test data.

---

# 80. Security Evidence Requirements

Each security test shall capture:

- Test ID
- Persona
- Impersonated user
- Role/group memberships
- Record tested
- Relationship/context
- Action attempted
- Expected result
- Actual result
- Allow/Deny
- Pass/Fail
- Evidence reference
- Applicable ACL/helper
- Regression tests

---

# 81. Security Requirements Traceability

| Security Area | Requirement |
|---|---|
| Role-protected records | SEC-1 |
| Signed PDF/attachment restrictions | SEC-2 |
| Privacy-safe notifications | SEC-3 |
| Historical integrity | SEC-4 |
| No SSN/sensitive PII | SEC-5 |
| Exact form linkage | AUD-1 |
| Evidence retention | AUD-2 |
| Authorized retrieval | AUD-3 |
| Employee retrieval | AC-13 |
| Organization retrieval | AC-14 |
| Notification privacy | AC-17 |
| Exact signed-form traceability | AC-18 |
| No sensitive PII | AC-24 |

---

# 82. Release-Blocking Security Conditions

Release shall not proceed if:

1. unrelated user can read a custom authorization record;
2. unrelated user can download a signed PDF;
3. OM can browse the repository;
4. Staffing or Analytics have broad access beyond authorized work;
5. ordinary users can modify signature evidence;
6. fulfillers can modify Form Version;
7. fulfillers can modify historical status/supersession;
8. reports reveal records beyond underlying authorized access;
9. notifications expose prohibited sensitive content;
10. SSN/sensitive PII is stored;
11. Compliance has unintended write capability;
12. a scripted ACL lacks documented rationale/testing;
13. production security depends on undocumented manual changes.

These conditions align with the explicit Wave 7 and Wave 8 stop criteria.
---

# 83. Security Definition of Done

The security model is complete when:

1. all five scoped roles are defined;
2. no requester/subject custom role is required;
3. native HRSD access is reused where appropriate;
4. custom-table ACLs are implemented;
5. contextual access helper is implemented where justified;
6. protected fields have effective controls;
7. employee access is limited to own approved experience;
8. supervisor access is limited to assigned actions/context;
9. Staffing access is tied to authorized Staffing work;
10. Analytics access is tied to authorized Analytics work;
11. OM access is limited to assigned WPC work;
12. Compliance access is read-only;
13. ROB Admin access is appropriately administrative;
14. unrelated-user access is denied;
15. direct signed-PDF access is tested;
16. notification content is privacy-safe;
17. historical records remain protected;
18. report/dashboard security matches record security;
19. negative impersonation tests pass;
20. positive impersonation tests pass;
21. no sensitive PII is stored;
22. all scripted ACLs have rationale and regression tests;
23. security documentation matches the installed implementation.

---

# 84. Baseline Security Statement

The HR Access ROB Authorization product shall use **least-privilege, contextual, native-first security**.

Employees and supervisors interact through the HRSD processes assigned to them.

Staffing and Analytics receive only the authorization context needed for their assigned fulfillment responsibilities.

Operations Managers receive only the minimum WPC context required to complete ARM role assignment.

Compliance personnel receive controlled read-only access to current and historical authorization evidence.

ROB Administrators manage application configuration and governed records without replacing native approval or signature evidence.

Signed Forms, authorization records, system-managed lifecycle fields, and historical evidence shall remain inaccessible or non-editable to unrelated or unauthorized users, including through direct attachment paths and reports.