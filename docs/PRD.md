# HR Access Rules of Behavior Authorization
## Product Requirements Document

**Version:** 1.0 Draft
**Date:** August 2026
**Platform:** ServiceNow HRSD — Australia Release
**Application:** HR Access ROB Authorization
**Application Scope:** `x_2108496_hr_acces`
**Development Approach:** ServiceNow SDK 4.8.1 + Codex
**Deployment Target:** ServiceNow Personal Developer Instance (PDI), followed by agency development/test environments

---

# 1. Document Purpose and Authority

## 1.1 Purpose

This Product Requirements Document (PRD) defines the product requirements for the **HR Access Rules of Behavior (ROB) Authorization** solution implemented on ServiceNow HR Service Delivery (HRSD).

The solution will manage authorization for access to HR systems, human capital data, reports, and Workforce Profile Charts. It will provide digital intake, authorization determination, employee and supervisor electronic signatures, supervisor approval, fulfillment routing, annual recertification, signed-form retention, exception management, audit retrieval, and operational reporting.

The solution implements NSF Form 1768, *Rules of Behavior for Sensitive Information*, as a governed electronic authorization process.

## 1.2 Product Authority

This PRD is the authoritative source for **what the product must do**.

The implementation hierarchy is:

1. NSF Form 1768 and applicable NSF policy
2. This Product Requirements Document
3. Requirements Traceability Matrix
4. Technical architecture and design documentation
5. ServiceNow SDK Waves 1–8 Implementation Plan
6. Codex development tasks and implementation instructions
7. ServiceNow SDK source and transformed metadata
8. Test and validation evidence

Implementation artifacts shall not silently modify, override, or reinterpret an approved product requirement.

Changes to approved requirements shall be reflected in this PRD and the requirements traceability documentation before being treated as the new implementation baseline.

---

# 2. Product Summary

## 2.1 Product Vision

Provide a single, secure, auditable ServiceNow process through which NSF personnel can request authorized access to HR systems and human-capital information while ensuring that the applicable Rules of Behavior are acknowledged, approved, electronically signed, retained, renewed, and traceable throughout the access lifecycle.

## 2.2 Product Concept

The signed Rules of Behavior authorization shall be treated as a **governed compliance artifact**, not merely as an attachment to an individual service request.

For every request, the product shall determine whether an authorization already exists and whether that authorization may be:

- reused;
- amended;
- renewed; or
- replaced with a new authorization.

The solution shall retain authorization history independently of individual access requests, thereby supporting reuse, annual recertification, amendment, supersession, revocation, and audit retrieval.

## 2.3 Primary Outcomes

The product shall provide:

- user-friendly Employee Center intake for HR systems and HR data/report access;
- electronic Rules of Behavior acknowledgment and signature;
- supervisor approval and electronic signature;
- system-generated signed NSF Form 1768 PDF;
- automated authorization determination;
- separate Staffing and Analytics fulfillment;
- tracked Operations Manager action for Workforce Profile Charts;
- annual authorization recertification;
- expiration and lapse management;
- audit-ready authorization history;
- secure retrieval of current and historical authorization records;
- separate operational dashboards for Staffing, Analytics, Operations Manager activity, renewals, and compliance.

---

# 3. Business Context and Problem Statement

NSF Form 1768 establishes behavioral and accountability requirements for personnel with access to sensitive information. It requires users to use systems and data only when authorized, protect confidential or sensitive information, comply with applicable safeguards, and report security incidents.

The form also requires identifiable authorization information, access type, requested systems or data, business justification, and employee and supervisor signatures. The Rules of Behavior are renewed annually.

The target product addresses the need for a consistent process that can:

- determine whether a current authorization already exists;
- avoid unnecessary duplicate authorization forms;
- determine whether new access changes an existing authorization;
- ensure signatures and approval occur before fulfillment;
- retain the precise authorization used for a request;
- track externally performed provisioning;
- identify authorizations requiring annual renewal;
- identify access associated with lapsed authorization;
- provide reliable audit evidence.

---

# 4. Product Goals

The product shall:

1. Digitize the standard processing path for NSF Form 1768.
2. Provide a single governed authorization model across HR systems and human-capital data/report requests.
3. Eliminate manual signed-PDF upload from the standard user journey.
4. Prevent fulfillment before required authorization, approval, and signatures are complete.
5. Reuse valid authorization where the requested access is already covered.
6. Support controlled New, Reuse, Amendment, Renewal, and Exception Review paths.
7. Preserve authorization history rather than overwrite prior compliance records.
8. Support a common agency recertification model with configurable renewal controls.
9. Provide workload visibility separately for Staffing and Human Capital Analytics.
10. Track Workforce Profile Chart ARM role assignment without introducing direct external provisioning.
11. Minimize sensitive information stored in ServiceNow.
12. Support audit retrieval by individual and organization.
13. Use native HRSD records and capabilities wherever practical.
14. Produce a maintainable solution that does not depend on Codex, Now Assist, Build Agent, or another AI system at runtime.

---

# 5. Scope

## 5.1 MVP In Scope

The MVP includes:

- Employee Center self-service intake;
- HR Systems Access entry under Staffing;
- HR Data and Reports Access entry under Analytics;
- Workforce Profile Charts as Analytics-controlled access;
- self-submission by the logged-in employee;
- subject, organization, position, employment type, supervisor, access request, and business-justification capture;
- configurable access-item reference data;
- active-authorization lookup;
- access coverage comparison;
- New authorization;
- Reuse;
- Amendment;
- Renewal;
- Exception Review;
- electronic employee signature where required;
- supervisor approval;
- supervisor electronic signature;
- NSF Form 1768 generation;
- signed PDF retention;
- Staffing fulfillment;
- Analytics fulfillment;
- Operations Manager ARM role-assignment task;
- fulfillment completion evidence;
- annual expiration logic;
- configurable grace-window logic;
- renewal reminders;
- lapse notification;
- Expired/Not-Renewed worklist;
- ACLs and security;
- auditing;
- notifications;
- dashboards and reporting;
- ATF where technically appropriate;
- manual test procedures where platform behavior cannot be reliably automated.

## 5.2 Deferred Capabilities

The following capabilities are deliberately preserved for possible future implementation but are **not part of the MVP**:

- delegated submission on behalf of another employee;
- organization-level or bulk submissions;
- bulk authorization creation;
- automated downstream provisioning;
- agency-only external integrations not available in the PDI.

MVP intake shall enforce self-submission. Another subject cannot be selected. The implementation plan likewise classifies delegated/bulk intake as unsupported/deferred rather than requiring substitute custom architecture.
## 5.3 Out of Scope

The following are outside the product scope unless separately approved:

- replacement of ARM, OAS, FPPS/WTTS, eOPF, USA Staffing, or other provisioning systems;
- automated ARM role assignment;
- automated OAS provisioning;
- automated FPPS/WTTS provisioning;
- automated eOPF provisioning;
- automated USA Staffing provisioning;
- automated access removal/deprovisioning;
- redesign of NSF Form 1768 policy language;
- creation of a new enterprise records schedule;
- storage of SSNs or other sensitive PII solely for this process.

Downstream provisioning remains **notify-and-track**.

---

# 6. Product Users and Roles

| Role | Product Responsibility |
|---|---|
| Employee / Subject Person | Submits an access request, provides required justification, reviews the Rules of Behavior, and signs when required. |
| Supervisor | Reviews business need, approves or denies the request, and completes the required supervisor electronic signature. |
| Staffing Fulfiller | Processes HR systems access. |
| Human Capital Analytics Fulfiller | Processes HR data/report access and coordinates Workforce Profile Chart requests. |
| Operations Manager | Performs the ARM role-assignment action required for Workforce Profile Chart access. |
| Compliance Viewer | Retrieves current and historical authorizations for approved audit/compliance purposes. |
| ROB Administrator | Maintains ROB configuration, authorized access references, and authorized administrative functions. |
| ServiceNow Platform Administrator | Supports application/platform configuration and technical administration. |
| Product Owner | Owns product scope, requirements, priorities, and acceptance. |

Requester and subject shall be the same user for MVP intake.

Requester/subject roles shall not require a custom scoped application role merely to use Employee Center.

---

# 7. Product Architecture Principles

## 7.1 Native HRSD Parent Records

The product shall use:

- `sn_hr_core_case` as the operational parent request;
- `sn_hr_core_task` as the fulfillment and exception work record.

A custom request table or custom fulfillment-task table shall not be created.

The approved SDK architecture explicitly retains these native HRSD records and limits scoped custom tables to governed ROB compliance data.

## 7.2 Separate Transaction from Authorization

An individual HR request and an ROB authorization are distinct business objects.

The HR case represents a transactional request.

The Authorization Form represents the governed compliance artifact.

This separation shall allow authorization reuse, annual renewal, amendment, supersession, historical retention, and audit retrieval without destroying individual request history.

## 7.3 Configuration-Driven Behavior

The solution shall use configuration rather than hard-coded logic for values including:

- current form version;
- recertification date;
- grace period;
- reminder thresholds;
- fulfillment assignment groups;
- Operations Manager task due period;
- escalation timing;
- access items;
- routing ownership;
- provisioning system;
- target system.

Environment-specific assignment-group `sys_id` values shall not be hard-coded into source.

## 7.4 Data Minimization

The application shall not store SSNs or other sensitive PII unnecessary to the authorization process.

The subject shall be represented by the ServiceNow user/employee identity.

## 7.5 No Unsupported Substitute Architecture

Where a PDI capability is unavailable or unsupported, the team shall document the limitation rather than create an unapproved custom table, insecure workaround, or parallel subsystem.

---

# 8. Product Data Model

## 8.1 Native Business Records

The solution shall reuse native ServiceNow records where suitable, including:

- HR Case;
- HR Task;
- User;
- User Group;
- approval records;
- document/signature records;
- attachment records;
- audit history.

## 8.2 Scoped ROB Business Tables

The scoped application shall maintain exactly four custom business tables:

1. **ROB Configuration**
2. **ROB Access Item Reference**
3. **ROB Authorization Form**
4. **Authorized Access Detail**

No separate custom request, fulfillment task, signature, approval, PDF, exception, attachment, or audit table shall be introduced without an approved architecture change.

## 8.3 Authorization Form

The ROB Authorization Form shall represent one governed version of an individual's Rules of Behavior authorization.

The record shall support:

- ROB number;
- subject;
- organization snapshot;
- position snapshot;
- employment-type snapshot;
- business-justification snapshot;
- form version;
- effective date;
- expiration date;
- status;
- employee signature evidence;
- supervisor signature/approval evidence;
- supersession relationships;
- signed PDF;
- renewal tracking metadata;
- audit metadata.

## 8.4 Authorized Access Detail

An Authorized Access Detail represents an individual approved access item associated with an Authorization Form.

The detail is an **authorization-scope record, not a request line**.

It shall be created by lifecycle processing rather than ordinary manual entry.

At minimum, system-managed fields include:

- source HRSD case;
- ROB Authorization Form;
- subject;
- access item;
- routing snapshots;
- authorization status.

Unique business constraints shall prevent duplicate access details for the same applicable parent/form and access item.

---

# 9. Required Intake Data

The product shall capture or derive the following data.

| Data Element | Requirement |
|---|---|
| Subject Person | Required; logged-in employee for MVP |
| Requester | Required; logged-in employee |
| Supervisor | Required before authorization can proceed |
| DIR/DIV / Organization | Required |
| Position Title | Required |
| Employment Type | Required |
| Access End Date | Conditional |
| Requested Access | Required |
| Business Justification | Required |
| Portal Category | System derived |
| Operations Manager | Conditional for Workforce Profile Charts |
| Existing Authorization Status | System derived |
| Request Path | System derived |
| Related Authorization Form | System derived |
| Form Version | System derived |
| Authorization Expiration Date | System derived |

The source requirements specify subject, requester, supervisor, organization, position, employment type, requested access and justification as core process data and require end-date handling for applicable time-limited access.

Implementation dependency: an HR Core-owned server-side snapshot population
mechanism is required in the agency environment for Position, Organization /
DIR-DIV, and Supervisor on both approved native HR Case subclasses. The PDI
cannot implement this execution boundary safely. This dependency does not
remove or weaken the snapshot requirement; successful persistence, resistance
to forged client values, and post-creation protection remain mandatory for
production acceptance.

---

# 10. Employee Center Experience

## 10.1 HR Systems Access

The Employee Center shall provide **Request Access to HR Systems** under the Staffing category.

Eligible access items shall be presented using active records from ROB Access Item Reference.

## 10.2 HR Data and Reports Access

The Employee Center shall provide **Request Access to HR Data and Reports** under Analytics.

Workforce Profile Charts shall be available only through the Analytics path.

## 10.3 Self-Submission

For MVP:

- requester = logged-in user;
- subject = logged-in user;
- the subject shall not be user-selectable;
- another employee cannot be selected;
- on-behalf-of submission shall not be available.

## 10.4 Validation

The product shall prevent submission or route to correction/Exception Review when required information cannot be resolved.

Business Justification shall always be required.

Access End Date shall be required for applicable time-limited employment/access.

Operations Manager shall be required when Workforce Profile Chart processing requires an OM task.

---

# 11. Authorization Decision Model

Every valid submitted case shall be evaluated against the subject's authorization history.

The decision engine shall produce exactly one principal path:

- **New**
- **Reuse**
- **Amendment**
- **Renewal**
- **Exception Review**

## 11.1 Decision Matrix

| Condition | Result |
|---|---|
| No applicable prior form | New |
| Active/current form fully covers requested access | Reuse |
| Active/current form covers only part of requested access | Amendment |
| Active form exists but material organization/position/role/justification changed | Amendment |
| Expired authorization | Renewal |
| Lapsed authorization | Renewal |
| Obsolete form version | Renewal |
| Revoked prior authorization | New |
| Invalid configuration or unresolved required data | Exception Review |
| Duplicate equivalent open case | Exception Review |

The decision process shall determine covered and uncovered access without prematurely creating Authorization Forms or Authorized Access Details.

## 11.2 Reuse

Reuse shall:

- create no new Authorization Form;
- create no duplicate Authorized Access Details;
- preserve the original signed PDF;
- require request-specific supervisor approval and signature;
- link the case to the exact existing authorization used.

## 11.3 Amendment

Amendment shall create a new Authorization Form containing:

- the complete carried-forward active authorized scope; plus
- the newly approved uncovered delta.

The prior authorization shall remain intact until the new authorization activates.

## 11.4 Renewal

Renewal shall create a new Authorization Form containing the complete approved authorization scope and applicable approved changes.

After successful activation, the prior authorization shall be linked and superseded.

## 11.5 Revoked Prior Authorization

A revoked authorization shall not be reactivated.

A subsequent request shall follow the New path.

The approved state/data model distinguishes these paths and explicitly prohibits duplicate form/detail creation during Reuse.

---

# 12. Authorization State Model

The Authorization Form shall support, at minimum:

- Draft
- Pending Employee Signature
- Pending Supervisor Approval and Signature
- Active
- Denied
- Superseded
- Revoked
- Obsolete Version
- Expired
- Lapsed

Transitions shall be controlled by lifecycle logic rather than unrestricted user editing.

An authorization shall not become Active unless all applicable required authorization steps have completed successfully.

Historical statuses shall not result in deletion of the prior authorization record or its signed artifact.

---

# 13. Electronic Signature and Approval

## 13.1 New, Amendment, and Renewal

The standard sequence shall be:

1. prepare Authorization Form;
2. populate current form version;
3. populate full authorization scope;
4. employee electronic signature;
5. supervisor native Sign or Refuse;
6. accepted Sign records approval and electronic-signature evidence atomically;
7. final validation;
8. signed PDF generation;
9. authorization activation;
10. fulfillment release.

For New, Amendment, and Renewal, the native Supervisor **Sign** action is the
single authoritative event that supplies both explicit approval and electronic
signature evidence. The native Supervisor **Refuse** action supplies the Denial
identity, timestamp, task, execution, and decline reason without signature
evidence. This decision formally supersedes the earlier split native-approval
then signature sequence for these three paths.

## 13.2 Reuse

Reuse shall not require a new employee signature.

It shall require supervisor review, approval, and signature for the current access request.

## 13.3 Signature Evidence

Electronic signature evidence shall include authoritative:

- signer identity;
- completion date/time;
- related document/task;
- authorization or request context.

System-managed signature data shall be read-only to ordinary users and fulfillers.

## 13.4 Fulfillment Gate

For New, Amendment, and Renewal, fulfillment shall not be released until the
accepted native Supervisor Sign has populated both system-managed approval and
signature evidence. Refuse shall keep signature evidence incomplete and shall
block final PDF generation, activation, supersession, and fulfillment.

Reuse retains its request-specific supervisor-attestation contract and is not
changed by the combined Sign/Refuse decision above.

---

# 14. NSF Form 1768 Generation

The product shall generate a completed, downloadable Rules of Behavior PDF.

The generated artifact shall reproduce the approved NSF Form 1768 content and include, as applicable:

- employee name;
- position title;
- Directorate/Office;
- access request type;
- relevant end date;
- authorized systems/data/report access;
- required business justification;
- employee signature;
- supervisor signature;
- signature date/timestamp;
- form version;
- authorization number;
- effective date;
- expiration date.

Page 2 of NSF Form 1768 identifies the employee information, access-request type, systems/data requested, required business justification, and employee and supervisor signatures forming the core authorization artifact.

Exactly **one authoritative final signed PDF** shall be retained for the Authorization Form.

Signed PDFs shall not be attached to email notifications.

Where native Document Templates initially attaches the generated artifact to another supported record, implementation shall validate and control final authoritative placement without creating an uncontrolled duplicate.

---

# 15. Fulfillment Requirements

Fulfillment shall use native `sn_hr_core_task` records.

## 15.1 Staffing

An approved request containing HR systems access shall create one Staffing fulfillment task for the applicable Staffing-owned access items.

## 15.2 Analytics

An approved request containing HR data/report access shall create one Analytics fulfillment task for applicable Analytics-owned access.

## 15.3 Mixed Requests

A request containing both Staffing and Analytics access shall maintain one parent HR case while creating separate team fulfillment tasks.

## 15.4 Workforce Profile Charts

Workforce Profile Chart access shall create:

- Analytics processing work; and
- a separate Operations Manager task for ARM role assignment.

ARM is the provisioning system for the role assignment.

OAS is the target/report-hosting system.

These terms shall remain distinct.

## 15.5 Completion Evidence

A task shall not satisfy fulfillment merely because it has been closed.

Required completion evidence and provisioning-completion/approved-waiver information shall be recorded.

## 15.6 Parent Closure

The HR case shall remain open until all required work is:

- completed;
- formally waived; or
- correctly determined not required.

The fulfillment model shall be retry-safe and shall not create duplicate team tasks.

---

# 16. Exception Requirements

The solution shall support controlled Exception Review rather than allowing invalid requests to continue silently.

At minimum, exception scenarios include:

| Condition | Required Behavior |
|---|---|
| Missing supervisor | Stop normal authorization path and route for correction/review |
| Missing required Access End Date | Prevent progression until corrected |
| Missing Operations Manager | Create/route Exception Review rather than falsely complete OM work |
| Zero active ROB Configuration records | Exception Review |
| Multiple active ROB Configuration records | Exception Review |
| Duplicate equivalent open request | Identify existing request and prevent duplicate lifecycle work |
| Material profile/business change | Amendment |
| Incomplete employee signature | Remain pending; no fulfillment |
| Incomplete supervisor approval/signature | Remain pending; no fulfillment |
| Overdue OM task | Escalate without incorrectly closing request |
| Withdrawal | Close as withdrawn while retaining appropriate history |
| Denial | Close as denied; no fulfillment |
| Unsupported PDI capability | Document limitation; do not create substitute architecture |

Existing requirements expressly require correction or controlled treatment for material profile changes, missing time-limited dates, duplicate requests, mixed requests, incomplete signatures, OM delays, and withdrawal.

---

# 17. Renewal, Expiration, and Lapse

## 17.1 Agency Recertification Date

The application shall use a configurable agency-wide annual recertification date.

## 17.2 Grace Window

A configurable grace period shall determine whether an authorization signed shortly before recertification receives the imminent expiration date or the following cycle's recertification date.

The default requirement is a 90-day configurable grace window.

## 17.3 Time-Limited Access

When an approved access end date is earlier than the standard authorization expiration date, the earlier applicable date shall control expiration.

## 17.4 Daily Scheduled Process

A single daily scheduled process shall:

- evaluate authorization expiration;
- send configured renewal reminders;
- update expiration/lapse status;
- issue lapse notifications where applicable;
- support the Expired/Not-Renewed worklist.

## 17.5 Renewal Reminders

The standard reminder thresholds are:

- 90 days;
- 60 days;
- 30 days.

Each applicable reminder shall be sent only once per authorization, threshold, and recertification cycle.

## 17.6 Lapse

When an authorization expires without an approved replacement:

- the authorization shall become Lapsed according to the approved state model;
- the subject shall receive an appropriate privacy-safe notification;
- the access shall appear in the Expired/Not-Renewed worklist.

ServiceNow shall **not directly remove downstream access** as part of MVP.

The implementation shall be idempotent so repeated daily executions do not generate duplicate reminders, notices, or state changes.

---

# 18. Security and Privacy Requirements

## 18.1 Least Privilege

Signed forms, Authorization Forms, access details, HR cases, tasks, reports, and attachments shall be restricted according to business role and work relationship.

## 18.2 Sensitive PII

SSNs and other sensitive PII shall not be stored in ROB request or authorization records.

## 18.3 Signed Document Access

An unrelated user shall not be able to:

- browse authorization records;
- retrieve a signed PDF;
- bypass record security through a direct attachment URL.

## 18.4 System-Managed Fields

Ordinary users and fulfillment users shall not manually change system-managed evidence such as:

- signatures;
- approval evidence;
- authorization status;
- form version;
- expiration;
- supersession;
- routing snapshots;
- generated-document status.

## 18.5 Notifications

Notifications shall not include:

- SSNs;
- sensitive form content;
- full business justification where not operationally required;
- employee or supervisor signature artifacts;
- signed PDF attachments.

## 18.6 Historical Integrity

Expired, superseded, revoked, obsolete, or lapsed authorization records shall be retained rather than overwritten.

The source requirements explicitly require role-based protection, restricted attachment access, privacy-safe notifications, historical retention, and prohibition on SSN/PII storage.

---

# 19. Audit and Records Requirements

Every completed request shall be traceable to the exact Authorization Form that governed the request.

The product shall retain, as applicable:

- request history;
- authorization history;
- employee signature evidence;
- supervisor approval evidence;
- supervisor signature evidence;
- exact signed form version;
- authorized access scope;
- fulfillment history;
- completion notes;
- Operations Manager completion evidence;
- supersession relationships;
- revocation/expiration/lapse status changes;
- audit history.

Authorized users shall be able to retrieve current and historical forms by:

- employee; and
- organization/DIR/DIV.

Retention and disposition shall follow applicable NSF records requirements rather than an application-specific deletion rule.

---

# 20. Notifications

The product shall support privacy-safe notifications for applicable lifecycle events including:

| Event | Primary Recipient |
|---|---|
| Employee signature required | Employee |
| Supervisor approval/signature required | Supervisor |
| Request denied | Employee |
| Staffing assignment | Staffing |
| Analytics assignment | Analytics |
| OM ARM action required | Operations Manager |
| OM escalation | Defined escalation recipient |
| 90-day renewal | Employee |
| 60-day renewal | Employee |
| 30-day renewal | Employee |
| Authorization lapse | Employee and/or approved HR recipient |

Notifications shall contain the minimum information necessary to identify the required action and provide a secure platform link.

---

# 21. Reporting and Dashboard Requirements

The MVP shall provide the following controlled reports or dashboards.

## 21.1 Staffing Workload

Minimum capability:

- open;
- in progress;
- completed;
- overdue;
- processing time;
- system requested;
- DIR/DIV;
- supervisor.

## 21.2 Analytics Workload

Minimum capability:

- open;
- in progress;
- completed;
- overdue;
- processing time;
- data/report type;
- Workforce Profile Chart indicator;
- DIR/DIV.

## 21.3 Operations Manager Actions

Minimum capability:

- open OM tasks;
- completed;
- overdue;
- pending ARM role assignment;
- request aging.

## 21.4 Supervisor Approval

Minimum capability:

- pending approval/signature;
- approver;
- age;
- request type;
- organization.

## 21.5 Authorization Renewal

Minimum capability:

- due within 90 days;
- due within 60 days;
- due within 30 days;
- expired;
- obsolete;
- revoked.

## 21.6 Audit Retrieval

Minimum filters include:

- employee;
- organization;
- supervisor;
- access item/type;
- form version;
- approval date;
- status.

## 21.7 Enterprise Process Dashboard

Minimum capability:

- total volume;
- Staffing vs Analytics;
- Workforce Profile Charts;
- status;
- aging;
- closure time.

## 21.8 Expired / Not-Renewed

The worklist shall identify lapsed authorization with no approved replacement and expose the information needed by authorized HR staff to support externally performed deprovisioning.

These reporting requirements are defined in the existing requirements package.

---

# 22. Nonfunctional Requirements

## 22.1 Maintainability

The application shall favor:

1. native ServiceNow behavior;
2. declarative configuration;
3. Flow Designer/subflows;
4. reusable server-side logic only where required.

Scripted behavior shall be documented and tested.

## 22.2 Idempotency

Retry-safe design is required for:

- authorization decision;
- Authorization Form creation;
- Authorized Access Detail creation;
- fulfillment-task generation;
- signed-PDF generation/post-processing;
- reminders;
- lapse notification;
- status transitions.

Duplicate lifecycle work shall not result from retry or rerun.

## 22.3 Accessibility

The final product shall validate:

- meaningful field labels;
- required-field indication;
- keyboard accessibility;
- logical focus order;
- understandable validation messages;
- no dependency on color alone to indicate state.

## 22.4 Performance

Decision queries, ACL logic, reports, related lists, and scheduled processing shall be designed to avoid unnecessary broad table scans and materially degraded user experience.

Final measurable thresholds may be established during agency environment performance testing.

## 22.5 Upgradeability

The product shall use Australia-supported ServiceNow capabilities for new development.

Deprecated HR Document Templates and deprecated legacy HR e-signature/task approaches shall not be selected for new functionality.

---

# 23. ServiceNow Document and Signature Capability

The target design shall use the current Document Templates capability available in the ServiceNow Australia release, subject to capability validation.

Before implementation is finalized, the product shall validate:

- Document Templates availability;
- participant sequencing;
- document tasks;
- ServiceNow Sign/electronic signature behavior;
- supervisor approval interaction;
- signature metadata;
- final document generation;
- attachment destination;
- source-control/transform behavior.

The SDK implementation plan requires this capability validation before implementing the authorization-document lifecycle.

---

# 24. ServiceNow SDK and Codex Development Requirements

## 24.1 Development Backbone

ServiceNow SDK 4.8.1 and Git shall form the source-controlled development backbone for supported application metadata.

Codex may assist development but shall not constitute a runtime application dependency.

## 24.2 Artifact Classification

Every implementation artifact shall be classified before development.

### Class A — Source-First

Author directly in `.now.ts` where supported.

Typical examples:

- custom tables;
- roles;
- reference records;
- forms/lists/modules;
- related-list metadata;
- supported ACL metadata;
- supported notification metadata.

### Class B — Configure Then Transform

Configure and validate on the ServiceNow instance, transform to SDK source where supported, review, then commit.

Typical examples:

- HR services;
- record producers;
- Flow Designer artifacts;
- HR task templates;
- reports;
- dashboards;
- ATF;
- Document Templates when supported by transform.

### Class C — Manual Environment Configuration

Document exact values and procedures rather than hard-coding environment-specific identifiers.

Examples:

- plugin activation;
- production group membership;
- environment assignment groups;
- platform-owner approvals;
- credentials;
- unsupported environment-specific configuration.

### Class D — Unsupported / Deferred

Document the capability and defer it.

Do not construct unapproved replacement architecture.

The implementation plan establishes this four-class model.

## 24.3 Codex Guardrails

Codex shall not:

- invent additional business requirements;
- create custom request or task tables contrary to the architecture;
- hard-code environment `sys_id` values;
- bypass security controls;
- store prohibited PII;
- substitute unsupported functionality with an unapproved architecture;
- regenerate stable SDK metadata keys without cause;
- treat successful source inspection as successful runtime testing;
- introduce production dependencies on Codex or another generative-AI tool;
- introduce direct downstream provisioning unless requirements are formally changed.

---

# 25. Development and Source-Control Controls

Each implementation wave shall use a dedicated source-control branch.

Stable SDK metadata keys shall be preserved.

Normal application updates shall not depend on `--reinstall`.

Before installation, the build process shall include source/build checks including frozen-key validation.

Documentation shall be maintained alongside implementation, including:

- `TRACEABILITY.md`
- `FIELD-MAP.md`
- `SECURITY-MODEL.md`
- `MANUAL-CONFIGURATION.md`
- `TEST-MATRIX.md`
- build ledger

The implementation plan establishes the required build, source-control, documentation, and defect gates.

---

# 26. PDI Test Requirements

The PDI shall use synthetic data only.

PDI testing shall not use:

- production employees;
- real SSNs;
- sensitive production PII;
- actual signed NSF authorization forms;
- real business justification containing sensitive information.

Synthetic test identities shall support, at minimum:

- employee;
- supervisor;
- Staffing fulfiller;
- Analytics fulfiller;
- Operations Manager;
- Compliance user;
- ROB administrator;
- unrelated user.

Both active and inactive synthetic assignment groups shall be available where required for testing.

The current implementation plan establishes these readiness conditions for the Australia PDI.

---

# 27. Verification Model

A requirement shall not be considered complete merely because source code exists or an SDK build succeeds.

Evidence shall be differentiated as:

1. **Source**
2. **Build**
3. **Install**
4. **Runtime**
5. **Security**
6. **UAT**

Source review alone cannot satisfy a runtime requirement.

---

# 28. Definition of Done

A product requirement is complete only when all applicable conditions are satisfied:

- requirement is traced to implementation;
- intended metadata/source exists;
- SDK build succeeds;
- frozen-key validation succeeds;
- application installs through the approved process;
- runtime functionality matches expected behavior;
- relevant negative-path tests pass;
- relevant security tests pass;
- applicable ATF/manual tests pass;
- documentation is updated;
- known manual configuration is documented;
- no prohibited data or architecture was introduced;
- regression tests pass;
- required evidence is recorded.

A wave cannot be accepted solely because source generation succeeded.

---

# 29. MVP Acceptance Criteria

The MVP shall demonstrate, at minimum:

1. Employee Center exposes separate Staffing and Analytics entry points.
2. Both entry points create native HRSD cases.
3. MVP intake prevents selection of another subject.
4. Required intake information is captured or derived.
5. Active authorization is correctly identified.
6. Fully covered access resolves to Reuse.
7. Partial coverage resolves to Amendment.
8. Expired/lapsed/obsolete authorization resolves to Renewal.
9. Revoked authorization follows New.
10. Exception conditions do not create invalid authorization artifacts.
11. Employee signature is required for New, Amendment, and Renewal.
12. Reuse does not alter original employee signature evidence.
13. Supervisor approval and signature are required before fulfillment. For
    New, Amendment, and Renewal on Australia ServiceNow Sign, the required
    order-2 Supervisor participant uses action `Fill`; submitting the mapped
    signature atomically supplies approval and signature evidence, while native
    Refuse supplies Denial without signature evidence.
14. Denial creates no fulfillment.
15. Staffing-only requests create Staffing work.
16. Analytics-only requests create Analytics work.
17. Mixed requests create separate team tasks.
18. Workforce Profile Charts create the required Analytics and OM work.
19. Fulfillment closure requires completion evidence.
20. Final signed Form 1768 is generated and retained.
21. Exactly one authoritative final signed PDF is retained.
22. Annual expiration is calculated correctly.
23. Grace-window calculation is correct.
24. 90/60/30 reminders function without duplicate notifications.
25. Lapsed authorization appears in the appropriate worklist.
26. Historical records remain intact after supersession.
27. Authorized compliance users can perform approved retrieval.
28. Unrelated users cannot retrieve authorization data or signed PDFs.
29. Notifications do not expose prohibited sensitive content.
30. SSNs/sensitive PII are not stored.
31. Reports respect record security.
32. Retry processing does not create duplicate records or work.

The existing requirements package already defines AC-4 through AC-24 covering authorization decisions, fulfillment gates, routing, Workforce Profile Charts, retrieval, dashboards, renewal, signatures, PDF generation, lapse handling, and PII controls.

---

# 30. Delivery Alignment

The PRD defines capabilities independently of implementation sequence.

The implementation shall continue to use the approved eight-wave delivery structure:

| Wave | Capability |
|---|---|
| 1 | Data Foundation |
| 2 | HRSD Intake and Native Case/Task Support |
| 3 | Authorization Decision Engine |
| 4 | Approval, Document Templates, E-Signature, and PDF |
| 5 | Fulfillment Orchestration |
| 6 | Renewal, Expiration, and Lapse |
| 7 | Security, Audit, Notifications, and Retention |
| 8 | Reporting, ATF, UAT, and Release Readiness |

Movement of a requirement between delivery waves does **not** modify the requirement itself.

---

# 31. Release Readiness

Before the MVP is considered production-ready:

- critical requirements shall have passed evidence;
- security testing shall be complete;
- privacy review shall be complete;
- records requirements shall be reviewed;
- UAT shall be complete;
- reports shall reconcile to test data;
- no prohibited PII shall exist;
- application scanning/source review shall identify no blocking issue;
- accessibility testing shall identify no material blocker;
- deployment instructions shall be executable;
- rollback procedures shall be documented;
- manual configuration shall be fully documented;
- known PDI limitations shall be identified for agency-environment revalidation;
- a clean installation or equivalent rehearsal shall demonstrate that the application does not depend upon undocumented instance configuration.

The implementation plan requires all critical tests, release documentation, security/UAT evidence, reproducible deployment, and explicit disposition of PDI limitations before release.

---

# 32. Risks and Dependencies

## 32.1 Platform Dependencies

The product depends on availability and supported configuration of:

- ServiceNow HRSD;
- Employee Center;
- native HR Cases;
- native HR Tasks;
- Document Templates;
- current electronic-signature capability;
- approval capability;
- user and supervisor information;
- attachment security;
- Flow Designer;
- reporting/dashboard functionality.

## 32.2 Primary Technical Risks

Key risks include:

- cross-scope modification/configuration limitations on native HRSD tables;
- SDK transform coverage for HRSD artifacts;
- Document Template transformability;
- electronic-signature behavior;
- final signed-PDF attachment location;
- instance-specific assignment-group dependencies;
- differences between PDI and agency development environments;
- direct attachment security;
- retry-induced duplicate work;
- report security differing from underlying record ACL expectations.

## 32.3 Capability-Gate Rule

When a required plugin, native table, authentication path, or essential platform capability is unavailable, development shall stop at the affected dependency and document the blocker rather than silently alter the approved architecture.

---

# 33. Controlled Supporting Documents

The following supporting artifacts shall be maintained with this PRD:

## Appendix / Document A — Requirements Traceability Matrix

Trace:

**Business Need → Product Requirement → Functional Requirement → Implementation Wave → ServiceNow Component → Test → Evidence**

## Appendix / Document B — NSF Form 1768 Mapping

Map every applicable Form 1768 element to:

- ServiceNow source;
- record/table;
- field;
- input/source method;
- PDF output field.

## Appendix / Document C — Logical Data Model

Document:

- HR Case;
- HR Task;
- ROB Configuration;
- ROB Access Item Reference;
- ROB Authorization Form;
- Authorized Access Detail;
- relationships and business keys.

## Appendix / Document D — State Model

Define allowed and prohibited lifecycle transitions for:

- HR Case;
- Authorization Form;
- Authorized Access Detail;
- HR Task.

## Appendix / Document E — Authorization Decision Matrix

Define all New, Reuse, Amendment, Renewal, Revoked, and Exception scenarios.

## Appendix / Document F — Security and Persona Matrix

Define record-, field-, attachment-, and report-level access by persona.

## Appendix / Document G — Notification Matrix

Define:

- trigger;
- recipient;
- template purpose;
- secure link;
- prohibited content.

## Appendix / Document H — Reporting Catalog

Define data source, audience, security, measures, dimensions, and filters for every approved report/dashboard.

## Appendix / Document I — Exception Matrix

Define:

- condition;
- detection point;
- user behavior;
- system behavior;
- responsible role;
- resolution;
- resumption point.

## Appendix / Document J — Configuration Catalog

Define all configuration values and ownership.

## Appendix / Document K — SDK Artifact Classification

Classify every application artifact as A, B, C, or D.

## Appendix / Document L — PDI Capability Matrix

Record Australia-release capability validation and any agency-environment revalidation requirement.

## Appendix / Document M — Test Matrix

Map requirements to:

- positive test;
- negative test;
- security test;
- ATF/manual status;
- expected result;
- actual result;
- evidence.

## Appendix / Document N — Deferred Capability Register

Maintain future requirements such as delegated and organization-level submission without introducing them into MVP behavior.

---

# 34. Product Requirement Governance

Approved requirements shall not be altered solely to resolve an implementation difficulty.

Where implementation identifies a conflict among:

- policy;
- PRD requirement;
- platform capability;
- SDK capability; or
- current implementation,

the issue shall be recorded and resolved through product/technical governance.

An implementation limitation shall not automatically redefine the business requirement.

Likewise, Codex or another development assistant shall not infer product-policy decisions from technical convenience.

---

# 35. Product Baseline

The MVP product baseline is therefore:

> **A native-HRSD, self-service Rules of Behavior authorization solution on ServiceNow Australia that uses native HR Cases and HR Tasks for transactional work, governed scoped records for authorization compliance, current ServiceNow document/signature capabilities for electronic authorization, configuration-driven decision and renewal logic, external notify-and-track fulfillment, strict PII minimization, complete audit traceability, and ServiceNow SDK/Codex-assisted source-controlled development without runtime dependence on AI tooling.**

This PRD remains authoritative regardless of the specific implementation wave in which an individual requirement is delivered.

## Approved M2 Profile/Form Snapshot Architecture

The former requirement to persist immutable Position, Organization, and
Supervisor snapshots on the native HR Case subclasses is superseded. Native HR
Cases remain the operational intake records, while authoritative server-side
profile resolution supplies the decision/lifecycle context. Position uses the
active HR Profile Position with a configured `sys_user.title` fallback.
Organization uses the authoritative profile/department source with a
configured, server-validated organization fallback only when automatic data is
unavailable. Supervisor defaults from the authoritative profile manager and
may be corrected only to an active member of the configured NSF Supervisors
population.

Before New, Amendment, or Renewal can enter employee signing, all three values
must resolve and be copied to the governed ROB Authorization Form. Those form
values are the stable historical evidence and the Supervisor value fixes the
native signer route for the in-flight authorization. Reuse retains its frozen
request-level attestation model and does not rewrite historical form context.
