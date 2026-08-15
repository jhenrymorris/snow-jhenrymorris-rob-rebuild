# Appendix O — Glossary
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

This appendix defines the standard terminology used throughout the HR Access Rules of Behavior Authorization product.

Its purpose is to:

- eliminate ambiguity;
- preserve consistent business and technical language;
- distinguish request, authorization, fulfillment, and evidence concepts;
- support Codex implementation prompts;
- support test scripts;
- support future change control;
- reduce inconsistent terminology across PRD appendices.

Where a ServiceNow physical implementation term differs from the logical product term, both are identified.

---

# 2. Access Detail

A governed record representing one approved access item associated with one ROB Authorization Form.

Physical table:

`x_2108496_hr_acces_auth_detail`

An Access Detail represents **authorization scope**, not merely a line item requested by the user.

Examples:

- FPPS/WTTS
- eOPF
- USA Staffing
- Workforce Profile Charts

---

# 3. Access End Date

The date on which time-limited access should end.

It may apply based on:

- Employment Type;
- Access Item configuration;
- another approved business rule.

Where an Access End Date precedes the normal annual recertification expiration, the earlier applicable date controls the relevant authorization/access period.

---

# 4. Access Item

A controlled type of HR system, human-capital data, report, or related resource that may be requested.

Initial items are:

- FPPS/WTTS
- eOPF
- USA Staffing
- OAS/DataMart
- Human Capital Reports
- Workforce Profile Charts

---

# 5. Access Item Reference

The governed configuration record defining an Access Item and its routing/behavior.

It may contain:

- category;
- fulfillment owner;
- Requires End Date;
- Requires OM;
- provisioning system;
- target system;
- Form 1768 mapping;
- display order.

---

# 6. Active Authorization

A ROB Authorization Form that has completed all required signature, approval, document, and activation gates and has not become:

- Superseded;
- Revoked;
- Obsolete Version;
- Expired;
- Lapsed.

---

# 7. Amendment

The authorization path used when a valid Active authorization exists but its governed scope or context must change.

Typical triggers include:

- added access;
- partial access coverage;
- materially changed organization;
- materially changed position/role;
- materially changed Business Justification.

An Amendment creates a new Authorization Form.

The prior Authorization remains Active until the replacement becomes Active, after which the prior record becomes Superseded.

---

# 8. Annual Recertification Date

The common agency-wide date used to determine regular ROB authorization expiration.

The exact date is configuration-driven and requires business-owner confirmation.

---

# 9. Approval

A native ServiceNow approval action performed by the Supervisor.

Approval is distinct from electronic signature.

For a valid supervisor authorization gate, both approval and required supervisor signature must be completed.

---

# 10. ARM

The external provisioning system used for the role-assignment action associated with Workforce Profile Chart access.

For WPC:

- ARM = provisioning/action system;
- OAS = report-hosting/target environment.

MVP ServiceNow behavior is notify-and-track, not direct ARM provisioning.

---

# 11. Artifact Class A — Source-First

A ServiceNow artifact that should be authored, maintained, and version-controlled directly through the ServiceNow SDK project.

Examples may include:

- custom tables;
- roles;
- ACLs;
- server-side helpers;
- decision logic.

---

# 12. Artifact Class B — Configure Then Transform

A ServiceNow artifact that should first be configured through supported native ServiceNow functionality and then transformed/exported into source where supported.

Typical examples may include:

- Flow Designer artifacts;
- Document Templates;
- reports;
- dashboards;
- native approval/document configuration.

---

# 13. Artifact Class C — Manual / Environment Configuration

A value or configuration intentionally specific to an environment.

Examples:

- group memberships;
- instance-specific group references;
- PDI synthetic users;
- email configuration;
- plugin enablement.

Class C does not mean undocumented.

Exact setup must be recorded in deployment documentation.

---

# 14. Artifact Class D — Unsupported / Deferred

A capability or artifact that:

- is outside current scope;
- is deferred;
- is prohibited by architecture;
- cannot be implemented in the current environment.

Class D items shall not be replaced with unsupported workarounds.

---

# 15. Authorized Access Detail

See **Access Detail**.

Full product term for the governed access-scope record associated with an Authorization Form.

---

# 16. Authorization

The governed approval state allowing specified HR-system/data/report access for a specific Subject Person.

Authorization is distinct from:

- request;
- fulfillment;
- external provisioning.

---

# 17. Authorization Form

The governed ROB compliance record representing one version of the employee's Rules of Behavior authorization.

Physical table:

`x_2108496_hr_acces_rob_auth`

It contains or references:

- subject;
- context snapshots;
- Form Version;
- signatures;
- approval evidence;
- authorized access scope;
- effective date;
- expiration;
- signed PDF;
- lifecycle status;
- supersession lineage.

---

# 18. Authorization Number

The unique identifier assigned to an Authorization Form.

It identifies the compliance record independently from the HR Case number.

---

# 19. Authorization Path

The Wave 3 decision result controlling what authorization processing is required.

Valid paths:

- New
- Reuse
- Amendment
- Renewal
- Exception Review

---

# 20. Authorization Scope

The complete set of approved Access Details under an Authorization Form.

For Amendment or Renewal, scope must represent the appropriate complete approved set, not only the newly requested delta.

---

# 21. Business Justification

The employee-provided explanation describing the business need for requested access.

It is a required authorization input.

It may be viewed by appropriately authorized personas but should not be reproduced in routine email notifications.

---

# 22. Candidate Authorization

An existing Authorization Form being evaluated by the Wave 3 decision engine to determine whether it qualifies for:

- Reuse;
- Amendment;
- Renewal;
- another outcome.

Selection must consider lifecycle status, version, expiration, supersession, and scope—not merely the most recently updated record.

---

# 23. Case

See **HR Case**.

---

# 24. Compliance Viewer

The scoped application persona authorized to retrieve current and historical ROB authorization evidence for audit/compliance purposes.

Expected access is read-only.

---

# 25. Covered Access

Requested Access that is already validly represented by active applicable Access Details under the candidate Authorization.

Logical formula:

```text
Covered Access =
Requested Access ∩ Authorized Access
```

---

# 26. Current Accepted Form Version

The currently approved Form 1768 version that may be used for new authorizations and considered valid for Reuse.

It is stored in ROB Configuration.

Historical forms retain their original Form Version.

---

# 27. Decision Engine

The reusable Wave 3 logic that determines the Authorization Path.

It evaluates:

- request completeness;
- configuration;
- duplicate requests;
- prior authorization status;
- Form Version;
- expiration;
- context changes;
- access coverage.

The decision engine does not create authorization, signature, approval, PDF, or fulfillment artifacts.

---

# 28. Delegated Submission

A future capability in which an authorized Requester submits an access request for another Subject Person.

It is **not enabled in the MVP**.

Even when eventually implemented:

- authorization remains per Subject;
- Subject signs;
- Requester cannot sign for Subject.

---

# 29. Denied

A terminal outcome in which Supervisor approval is denied.

Consequences include:

- no fulfillment;
- no authorization activation;
- retained audit history.

---

# 30. Detail-Level Activation

Activation of an individual Authorized Access Detail only when the applicable fulfillment requirements for that item have been completed.

This allows mixed requests to support independent team completion while the parent HR Case remains open.

---

# 31. DIR/DIV

Directorate/Division or corresponding organizational context used for:

- employee profile;
- reporting;
- audit retrieval;
- authorization context.

The exact ServiceNow source field/reference shall be defined in the field map.

---

# 32. Document Templates

The current ServiceNow native document-generation capability targeted for electronic Form 1768 generation in the Australia release.

The product shall not assume legacy/deprecated HR Document Templates behavior.

---

# 33. Electronic Signature

A native ServiceNow-supported signing action producing auditable evidence that a specific individual signed the applicable Rules of Behavior document.

Required evidence includes signer identity and timestamp.

---

# 34. Employee

The Subject Person acting in the self-service MVP.

The Employee submits their own request and signs their own Rules of Behavior when required.

---

# 35. Employee Center

The native ServiceNow self-service experience through which employees access HR services.

The MVP includes:

- Request Access to HR Systems
- Request Access to HR Data and Reports

---

# 36. Employment Type

The governed employee/access context represented on the electronic Form 1768.

Initial types:

- Federal
- Contractor
- IPA
- Auditor/Investigator

---

# 37. Exception Review

A decision/lifecycle condition requiring correction or explicit disposition before normal authorization processing can continue.

Exception work uses native HR Task, not a custom exception table.

---

# 38. Expired

An Authorization Form whose expiration date has passed.

An Expired form is not eligible for Reuse.

A subsequent applicable request normally follows Renewal.

---

# 39. Expiration Date

The date after which the Authorization Form is no longer valid.

It is calculated using:

- agency recertification;
- grace-window treatment;
- earlier Access End Date where applicable.

---

# 40. External Provisioning

The actual act of granting access in a downstream system outside ServiceNow.

Examples:

- ARM role assignment;
- USA Staffing provisioning;
- eOPF provisioning.

MVP uses notify-and-track fulfillment rather than direct external provisioning integrations.

---

# 41. Final PDF

The authoritative completed electronic Form 1768 generated after all required authorization prerequisites are satisfied.

It shall include the appropriate form data, authorized scope, signatures, and relevant metadata.

The final PDF is a governed compliance artifact.

---

# 42. Form 1768

NSF Form 1768, Rules of Behavior for Sensitive Information.

The electronic version used by the product preserves the governing Rules of Behavior content and includes approved electronic extensions for:

- Workforce Profile Charts;
- IPA.

The source form includes employee information, access-request type, requested systems/data, Business Justification, employee signature, supervisor signature, and date.

---

# 43. Form Version

The version identifier of the Rules of Behavior form used for a specific Authorization Form.

It is historical evidence and shall not be overwritten after signing.

---

# 44. FPPS/WTTS

A Staffing-owned HR-system access item represented in the controlled Access Item Reference catalog.

---

# 45. Fulfillment

The operational work performed after a valid authorization gate to provision or validate requested access.

Fulfillment is distinct from authorization.

Native HR Tasks are used for fulfillment.

---

# 46. Fulfillment Gate

The condition that must be satisfied before Staffing, Analytics, or OM work may begin.

For New, Amendment, and Renewal this includes the required:

- employee signature;
- supervisor approval;
- supervisor signature;
- final authorization validation;
- signed PDF.

Reuse follows its approved supervisor-action path without generating a new employee-signed form.

---

# 47. Fulfillment Owner

The team responsible for processing an Access Item.

Initial owners:

- Staffing
- Analytics

WPC also requires an Operations Manager action.

---

# 48. Grace Window

A configurable period before the annual recertification date during which a qualifying new authorization is assigned to the following recertification cycle.

Baseline:

**90 days, configurable**.

---

# 49. HR Case

The native ServiceNow HRSD operational parent record for an HR access request.

Physical table:

`sn_hr_core_case`

The HR Case represents the request/process transaction.

It is not the same as the governed Authorization Form.

---

# 50. HR Service

The native ServiceNow HRSD service exposed through Employee Center.

The MVP uses separate service experiences for:

- HR Systems / Staffing
- HR Data and Reports / Analytics

---

# 51. HR Task

The native ServiceNow HRSD child work record.

Physical table:

`sn_hr_core_task`

Used for:

- Staffing fulfillment;
- Analytics fulfillment;
- Operations Manager action;
- Exception Review.

---

# 52. Human Capital Analytics

The team responsible for Analytics-owned access such as:

- OAS/DataMart;
- Human Capital Reports;
- Workforce Profile Charts.

---

# 53. Human Capital Reports

An Analytics-owned Access Item represented on Form 1768.

---

# 54. Idempotency

The property that repeating the same business event or operation does not create unintended duplicate side effects.

Required for:

- decision runs;
- Authorization Form creation;
- Access Detail creation;
- task creation;
- reminders;
- lapse notices;
- PDF finalization;
- supersession.

---

# 55. IPA

Intergovernmental Personnel Act-related employment/access type.

IPA is an explicit field in the approved electronic Form 1768 design.

Its precise Access End Date rule requires approved business configuration/policy.

---

# 56. Lapsed

The state of an authorization that has expired without an approved active replacement.

Lapsed authorizations:

- trigger one lapse notice;
- appear on RPT-8;
- support external deprovisioning follow-up.

A Lapsed authorization cannot simply be reactivated.

---

# 57. Material Context Change

A change significant enough that an otherwise reusable Authorization requires Amendment.

Potential governed context includes:

- DIR/DIV / organization;
- position;
- role;
- Business Justification.

Exact deterministic materiality rules shall be business-approved.

---

# 58. Mixed Request

A single HR Case requesting both Staffing-owned and Analytics-owned access.

After authorization:

- one Staffing task;
- one Analytics task;

are created under one parent HR Case.

WPC may add a separate OM task.

---

# 59. New

The authorization path used when no qualifying prior Authorization exists, or when the relevant prior authorization is Revoked.

New requires:

- a new Authorization Form;
- employee signature;
- supervisor approval;
- supervisor signature;
- final PDF.

---

# 60. Native

A ServiceNow platform or HRSD capability used rather than recreated in the scoped application.

Examples:

- HR Case;
- HR Task;
- approval;
- authentication;
- Document Templates;
- electronic signature.

---

# 61. Notification

A privacy-safe prompt sent to a recipient to alert them to a required action or lifecycle event.

Notifications are not authoritative evidence of:

- task assignment;
- approval;
- signature;
- authorization;
- provisioning.

The authoritative records remain in ServiceNow.

---

# 62. Notify-and-Track

The MVP fulfillment model in which ServiceNow:

- creates and assigns a task;
- records completion evidence;
- tracks status;

but does not directly provision or deprovision the downstream system.

---

# 63. OAS

Oracle Analytics-related target/report environment used for human-capital reporting and Workforce Profile Chart access.

For WPC:

- ARM performs the role-assignment action;
- OAS hosts the WPC report.

---

# 64. Obsolete Version

An Authorization Form whose Form Version is no longer accepted for current authorization purposes.

An obsolete form is not eligible for Reuse and normally triggers Renewal for a new applicable request.

---

# 65. Operations Manager

The persona responsible for the tracked ARM role-assignment action required for Workforce Profile Chart access.

The OM receives narrowly scoped access to their assigned WPC work.

---

# 66. PDI

Personal Developer Instance.

The controlled ServiceNow environment used to test-build the MVP.

PDI limitations must be distinguished from:

- product defects;
- unsupported architecture;
- agency-environment capabilities.

---

# 67. PDI Capability Status — BLOCKED-PDI

The required capability cannot currently be implemented or validated in the PDI.

It requires documentation and agency-environment revalidation rather than an unsupported workaround.

---

# 68. PDI Capability Status — MANUAL

The capability works but requires a documented manual/environment-specific configuration step.

---

# 69. PDI Capability Status — PARTIAL

The capability exists but does not satisfy every required behavior.

Exact limitations must be documented.

---

# 70. PDI Capability Status — PROVEN

The capability exists and the required behavior has been demonstrated through appropriate runtime evidence.

---

# 71. Provisioning System

The external system in which access-granting action is actually performed.

Example:

For WPC, provisioning system = ARM.

---

# 72. Recertification Cycle

The annual authorization-validity cycle associated with the configured Annual Recertification Date.

Reminder and lapse idempotency should distinguish cycles.

---

# 73. Reminder Threshold

A configurable number of days before expiration at which the system generates a renewal reminder.

Baseline:

- 90 days
- 60 days
- 30 days

---

# 74. Renewal

The authorization path used when a prior Authorization requires recertification because it is:

- expired;
- lapsed;
- obsolete version;
- due for annual renewal.

Renewal creates a new Authorization Form and carries forward the applicable complete approved scope plus approved changes.

---

# 75. Request

The employee's transactional request for HR system/data/report access.

Represented operationally by the HR Case.

A Request is not itself an Authorization.

---

# 76. Requested Access

The controlled set of Access Items selected by the employee on the current HR Case.

---

# 77. Requester

The individual initiating the HR access request.

For MVP:

**Requester = Subject Person = logged-in user**

Future delegated submission may allow Requester and Subject to differ.

---

# 78. Reuse

The authorization path used when:

- an Active Authorization exists;
- Form Version remains accepted;
- authorization remains valid;
- governed context remains valid;
- all requested access is already covered.

Reuse:

- creates no new Authorization Form;
- creates no new Access Details;
- requires no new employee signature;
- still requires the current request's supervisor approval/signature before fulfillment;
- preserves the existing signed PDF.

---

# 79. Revoked

A terminal Authorization state indicating that the authorization was administratively withdrawn/revoked.

A Revoked Authorization:

- cannot reactivate;
- cannot be reused;
- causes a later applicable request to follow New.

The detailed revocation administration process remains to be finalized.

---

# 80. ROB

Rules of Behavior.

In this product, ROB refers to the governed employee authorization for HR systems and human-capital data/report access.

---

# 81. ROB Administrator

The scoped application administrator responsible for governed product configuration and authorized application administration.

This role does not replace native approval or signature evidence.

---

# 82. ROB Configuration

The custom governed configuration entity controlling product-wide values such as:

- Current Accepted Form Version;
- Annual Recertification Date;
- Grace Window;
- reminder thresholds;
- assignment groups;
- OM timing;
- escalation timing.

Exactly one active configuration record is required at runtime.

---

# 83. RPT-1 through RPT-8

The eight required reporting capabilities:

1. Staffing Workload
2. Analytics Workload
3. Operations Manager Actions
4. Supervisor Approvals
5. Authorization Renewal
6. Audit Retrieval
7. Enterprise Process
8. Expired / Not-Renewed Authorizations

---

# 84. RPT-8

The Expired / Not-Renewed Authorizations worklist.

It identifies lapsed authorization/access requiring external follow-up when no approved active replacement exists.

It supports deprovisioning operations but does not directly remove external access.

---

# 85. ServiceNow Sign

The current ServiceNow native electronic-signature capability to be validated for the Australia release and used with the electronic Form 1768 where available.

---

# 86. Signed PDF

See **Final PDF**.

The authoritative completed Form 1768 artifact retained for audit and compliance retrieval.

---

# 87. Staffing

The HR team responsible for HR-system access such as:

- FPPS/WTTS;
- eOPF;
- USA Staffing.

---

# 88. Staffing Fulfiller

The scoped persona assigned Staffing-owned fulfillment work.

Access shall be contextual and limited to authorized Staffing work.

---

# 89. Subject Person

The employee whose HR access is being authorized.

For MVP, Subject Person is the logged-in Requester.

Authorization and signatures are always associated with the Subject, not merely the person initiating a future delegated request.

---

# 90. Superseded

A historical authorization state indicating that a newer approved Authorization Form has replaced the prior form.

Superseded records remain available for audit but are not eligible for Reuse.

---

# 91. Supersedes

The backward relationship from a newer Authorization Form to the prior form it replaced.

---

# 92. Superseded By

The forward relationship from a historical Authorization Form to the newer replacement.

Both relationships support authorization lineage and audit traversal.

---

# 93. Supervisor

The Subject Person's supervisory approver.

The Supervisor:

- reviews business need;
- approves or denies;
- electronically signs where required.

Approval and signature remain separate evidence.

---

# 94. Target System

The system/resource to which the access ultimately applies.

Example:

For WPC:

- provisioning system = ARM;
- target = OAS-hosted Workforce Profile Charts.

---

# 95. Time-Limited Access

Access whose authorization validity is constrained by a specified end date.

Examples may include:

- Contractor;
- Auditor/Investigator;
- IPA where approved configuration requires it.

---

# 96. Uncovered Access

Requested Access not contained in the currently valid Authorized Access scope.

Logical formula:

```text
Uncovered Access =
Requested Access - Authorized Access
```

Uncovered access on a valid Active form triggers Amendment.

---

# 97. Unrelated User

An authenticated ServiceNow user with no authorized relationship to the request, authorization, task, or audit role.

An Unrelated User shall not be able to:

- read Authorization Forms;
- read Access Details;
- access signed PDFs;
- access restricted reports.

---

# 98. Workforce Profile Charts

A distinct Analytics Access Item added explicitly to the electronic Form 1768.

Abbreviation:

**WPC**

WPC requires:

- Analytics fulfillment;
- Operations Manager action;
- ARM role assignment;
- OAS-hosted target/report access.

---

# 99. WPC

See **Workforce Profile Charts**.

---

# 100. Wave

A controlled implementation stage in the SDK build plan.

The current plan contains:

- Wave 1 — Data Foundation
- Wave 2 — Intake
- Wave 3 — Decision
- Wave 4 — Authorization / Signature / PDF
- Wave 5 — Fulfillment
- Wave 6 — Renewal / Lapse
- Wave 7 — Security
- Wave 8 — Reporting / Release

---

# 101. Wave Gate

A set of conditions that must pass before the next implementation wave begins.

Possible evidence includes:

- source;
- build;
- install;
- runtime;
- security;
- test;
- capability validation.

---

# 102. Withdrawal

A user/process disposition that ends an eligible open request before completion.

Withdrawal:

- stops future normal processing;
- retains partial history;
- does not produce a valid Active Authorization.

---

# 103. Glossary Usage Rule

Future PRD revisions, Codex prompts, design documents, ATF tests, and runbooks should use these terms consistently.

In particular, avoid conflating:

- Request with Authorization;
- Authorization with Provisioning;
- Approval with Signature;
- Access Detail with Requested Access;
- Expired with Lapsed;
- Superseded with Revoked;
- ARM with OAS;
- Reuse with Renewal;
- HR Case with Authorization Form.

---

# 104. Baseline Terminology Statement

The HR Access ROB Authorization product shall maintain a clear distinction between:

**request → authorization → fulfillment → external access**

The native HR Case represents the request.

The ROB Authorization Form and Authorized Access Details represent the governed authorization.

Native HR Tasks represent fulfillment work.

External systems remain the location where actual downstream access is provisioned or removed.

This terminology shall remain consistent across implementation, testing, audit documentation, and future product enhancements.