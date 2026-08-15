# Appendix G — Notification Matrix
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

This appendix defines the notification requirements for the HR Access Rules of Behavior Authorization product.

It establishes:

- notification events;
- recipients;
- triggering conditions;
- timing;
- content requirements;
- prohibited content;
- secure-link destinations;
- suppression and idempotency rules;
- escalation behavior;
- notification ownership;
- test requirements;
- traceability to functional, security, and acceptance requirements.

This appendix shall guide:

- Wave 4 signature and approval notifications;
- Wave 5 fulfillment assignment and escalation notifications;
- Wave 6 renewal and lapse notifications;
- Wave 7 privacy/security implementation;
- Wave 8 testing and release validation.

The source requirements require privacy-safe notifications and explicitly prohibit SSNs, sensitive form content, and signed-form attachments.

---

# 2. Notification Design Principles

All notifications shall follow these principles.

## 2.1 Minimum Necessary Content

A notification shall contain only the information necessary for the recipient to:

- understand why they received it;
- understand the required action;
- identify the relevant request or authorization;
- know the applicable due date where relevant;
- navigate securely to ServiceNow.

## 2.2 Secure-Link Principle

Actionable notifications shall direct recipients to the applicable authenticated ServiceNow experience.

Sensitive data shall not be duplicated into email merely for convenience.

## 2.3 No Signed Attachments

The signed Form 1768 shall not be sent as a routine notification attachment.

The source security requirement explicitly prohibits signed-form attachments in notifications.

## 2.4 Privacy by Default

Notification content shall assume email and similar channels are less controlled than the authenticated application.

## 2.5 Idempotency

Retry of a flow or event shall not generate duplicate notifications for the same business event unless the design explicitly calls for repeated reminders.

---

# 3. Notification Classes

Notifications are grouped into five classes:

1. **Authorization Action**
2. **Decision / Outcome**
3. **Fulfillment Assignment**
4. **Escalation**
5. **Renewal / Compliance**

---

# 4. Core Notification Inventory

The MVP shall support, at minimum:

| ID | Notification | Recipient |
|---|---|---|
| NOT-01 | Employee Signature Required | Subject Person |
| NOT-02 | Supervisor Approval and Signature Required | Supervisor |
| NOT-03 | Request Denied | Subject Person |
| NOT-04 | Staffing Fulfillment Assigned | Staffing |
| NOT-05 | Analytics Fulfillment Assigned | Analytics |
| NOT-06 | Operations Manager ARM Action Required | Operations Manager |
| NOT-07 | Operations Manager Escalation | Approved escalation recipient |
| NOT-08 | Exception Review Assigned | Assigned exception group/user |
| NOT-09 | 90-Day Renewal Reminder | Subject Person |
| NOT-10 | 60-Day Renewal Reminder | Subject Person |
| NOT-11 | 30-Day Renewal Reminder | Subject Person |
| NOT-12 | Authorization Lapsed | Subject Person |
| NOT-13 | Optional Renewal Copy Notification | Configured HR/supervisor group if enabled |

Additional informational notifications may be introduced only where they support an approved requirement and comply with this appendix.

---

# 5. General Notification Content Rules

## Allowed Content

As appropriate:

- recipient name;
- case number;
- Authorization Number;
- task number;
- general action description;
- access-request category;
- due date;
- expiration date;
- renewal date;
- secure ServiceNow link;
- concise next-step instructions.

## Prohibited Content

Unless a separately approved requirement explicitly permits it:

- SSN;
- other unnecessary sensitive PII;
- signature images;
- full signature evidence;
- full Form 1768 text;
- signed PDF attachment;
- full Business Justification;
- sensitive downstream data;
- credentials;
- passwords;
- copies of human-capital report content.

The source requirements specifically state that notifications shall avoid sensitive form content and signed-form attachments.

---

# 6. Notification Link Rules

Each actionable notification should contain a secure authenticated link to the most appropriate ServiceNow record or user experience.

Preferred targets:

| Notification | Link Target |
|---|---|
| Employee Signature | Assigned document/signature task or approved Employee Center action |
| Supervisor Approval/Signature | Assigned approval/signature experience |
| Denial | Subject's HR Case |
| Staffing Assignment | Assigned HR Task |
| Analytics Assignment | Assigned HR Task |
| OM Action | Assigned OM HR Task |
| Exception Review | Exception HR Task |
| Renewal Reminder | Renewal intake or applicable authorization renewal experience |
| Lapse Notice | Appropriate authorization/request or renewal initiation experience |

Links shall not be direct unauthenticated attachment URLs.

---

# 7. NOT-01 — Employee Signature Required

## Trigger

A New, Amendment, or Renewal Authorization Form is complete and ready for employee signature.

The Authorization Form has transitioned to:

**Pending Employee Signature**

## Recipient

Subject Person.

## Not Sent For

Reuse.

The approved state model specifically states that Reuse does not require a new employee signature.

## Minimum Content

- action required;
- case or Authorization Number;
- brief description that Rules of Behavior acknowledgment/signature is required;
- due date if implemented;
- secure link.

## Prohibited Content

- signed PDF;
- employee signature image;
- full Business Justification;
- SSN;
- unnecessary requested-access details.

## Duplicate-Suppression Key

Conceptually:

```text
Authorization Form
+
Employee Signature Required Event
+
Current Signature Cycle
```

Repeated flow execution shall not send duplicate notices merely because the same pending state was reevaluated.

---

# 8. NOT-02 — Supervisor Approval and Signature Required

## Trigger

For New, Amendment, and Renewal:

- employee signature completed;
- Authorization Form enters Pending Supervisor Approval and Signature.

For Reuse:

- decision = Reuse;
- request-specific supervisor action is ready.

## Recipient

Subject Person's Supervisor.

## Required Action

Supervisor must:

1. review business need;
2. approve or deny;
3. complete electronic signature if approving.

Approval and signature are separate requirements; approval alone does not satisfy the fulfillment gate.

## Minimum Content

- supervisor action required;
- employee/subject name where appropriate;
- case number;
- general access-request type;
- due date if applicable;
- secure link.

## Business Justification

The full Business Justification should be reviewed inside authenticated ServiceNow rather than reproduced in the notification.

## Duplicate Suppression

One initial supervisor-action notification per applicable request/action cycle.

Native approval/document mechanisms may generate platform notifications; the implementation shall avoid sending duplicative custom notifications where native notification behavior already satisfies the requirement.

---

# 9. NOT-03 — Request Denied

## Trigger

Supervisor denies the request.

## Recipient

Subject Person.

For future delegated submission, the requester may also receive an appropriate status notification where approved.

## Minimum Content

- request has been denied;
- case number;
- general request category;
- secure link;
- approved next-step/help information if applicable.

## Prohibited Content

- signed PDF;
- signature evidence;
- unnecessary supervisor comments where sensitive;
- sensitive PII.

## Lifecycle Effect

Notification occurs only after the denial outcome has been committed.

No fulfillment task is created.

The source requirements require denial notification and closure without fulfillment.

---

# 10. NOT-04 — Staffing Fulfillment Assigned

## Trigger

Fulfillment gate opens and a Staffing HR Task is created/assigned.

## Recipient

Configured Staffing assignment group and/or assigned fulfiller according to the approved notification model.

## Minimum Content

- Staffing fulfillment action assigned;
- task number;
- parent case number;
- general access item(s) necessary for fulfillment;
- due date where applicable;
- secure task link.

## Permitted Access Context

May identify relevant Staffing-owned access such as:

- FPPS/WTTS;
- eOPF;
- USA Staffing.

## Prohibited Content

- signed Form 1768 attachment;
- signature images;
- unrelated Analytics access;
- excessive Business Justification;
- sensitive data not needed for provisioning.

---

# 11. NOT-05 — Analytics Fulfillment Assigned

## Trigger

Fulfillment gate opens and an Analytics HR Task is created/assigned.

## Recipient

Configured Analytics assignment group and/or assigned user.

## Minimum Content

- Analytics fulfillment action required;
- task number;
- parent case number;
- relevant Analytics access;
- WPC indicator where applicable;
- due date;
- secure link.

## Prohibited Content

- unrelated Staffing access;
- signed PDF;
- signatures;
- sensitive content beyond operational need.

---

# 12. NOT-06 — Operations Manager ARM Action Required

## Trigger

Approved request includes Workforce Profile Charts and the OM ARM Role Assignment task is created.

## Recipient

Operations Manager assigned to the case/task.

## Purpose

Prompt the OM to perform the required ARM role assignment that grants access to the WPC report hosted in OAS.

The requirements establish that the OM performs the ARM role assignment after supervisor approval.

## Minimum Content

- action required;
- subject name;
- task number;
- "Workforce Profile Charts" action;
- ARM role-assignment instruction at a high level;
- due date;
- secure task link.

## Prohibited Content

- complete Form 1768;
- signed PDF;
- employee or supervisor signature evidence;
- full Business Justification;
- unrelated HR-system access.

---

# 13. NOT-07 — Operations Manager Escalation

## Trigger

OM ARM Role Assignment task exceeds configured escalation timing.

The source exception requirement requires overdue OM action to escalate to the Analytics lead or designated escalation contact.

## Recipient

Configured escalation recipient.

Possible recipient:

- Analytics lead;
- approved escalation group;
- other configured operational owner.

## Minimum Content

- OM action overdue;
- task number;
- subject;
- aging/due date;
- assigned OM;
- secure link.

## Lifecycle Effect

Escalation does **not**:

- close the OM task;
- mark OM work complete;
- close the Analytics task;
- close the parent case.

---

# 14. NOT-08 — Exception Review Assigned

## Trigger

A controlled Exception Review HR Task is created.

Possible causes include:

- missing supervisor;
- missing OM;
- invalid configuration;
- missing required end date;
- duplicate open request;
- unresolved required data.

## Recipient

Configured exception/fallback group or assigned support user.

## Minimum Content

- exception action required;
- case/task number;
- controlled exception category;
- secure link;
- due date.

## Prohibited Content

Avoid exposing unnecessary sensitive details in the notification body.

Detailed diagnostic context belongs inside authenticated ServiceNow.

---

# 15. Renewal Notification Model

The renewal process shall support three standard reminder thresholds:

- 90 days;
- 60 days;
- 30 days before expiration.

The requirements explicitly call for reminders at these thresholds.

Thresholds should remain configuration-driven even though 90/60/30 are the approved baseline.

---

# 16. NOT-09 — 90-Day Renewal Reminder

## Trigger

Daily scheduled process evaluates an Active authorization whose expiration date is at the configured 90-day threshold.

## Recipient

Subject Person.

Optional configurable copy recipient may be supported if approved.

## Minimum Content

- authorization renewal is approaching;
- Authorization Number;
- expiration date;
- number of days remaining;
- secure renewal link.

## Duplicate-Suppression Key

```text
Authorization Form
+
Recertification Cycle
+
90-Day Threshold
```

Only one 90-day reminder shall be sent per authorization/cycle.

---

# 17. NOT-10 — 60-Day Renewal Reminder

Same rules as NOT-09, using the configured 60-day threshold.

Duplicate key:

```text
Authorization Form
+
Recertification Cycle
+
60-Day Threshold
```

---

# 18. NOT-11 — 30-Day Renewal Reminder

Same rules as NOT-09, using the configured 30-day threshold.

Duplicate key:

```text
Authorization Form
+
Recertification Cycle
+
30-Day Threshold
```

---

# 19. Renewal Reminder Recipient Model

The source requirements recommend:

- Subject as the primary recipient;
- configurable copy to Supervisor and/or HR.

Therefore:

## Primary Recipient

Subject Person.

## Optional Copies

Controlled through ROB Configuration.

Potential optional recipients:

- Supervisor;
- configured HR/Compliance group.

No optional copy shall be hard-coded.

---

# 20. Renewal Reminder Suppression

A reminder shall not be sent when:

- authorization is no longer Active/current for renewal purposes;
- approved replacement already exists and the reminder is no longer applicable;
- reminder for that threshold/cycle has already been sent;
- notification function is disabled by approved configuration.

A daily scheduled retry shall not generate duplicate reminders.

The approved Wave 6 design specifically requires one notification per threshold/cycle and suppression when an approved active replacement exists.

---

# 21. Renewal Initiation Link

Renewal reminders should provide a secure link that:

- initiates the approved renewal service/process;
- preserves the prior Authorization Form context where supported;
- does not require the employee to locate the old signed PDF manually.

The Wave 6 plan specifically calls for a secure renewal initiation link retaining prior form context.

---

# 22. NOT-12 — Authorization Lapsed

## Trigger

Authorization expires with:

```text
No approved active replacement
```

and enters the defined Lapsed condition.

## Recipient

Subject Person.

Optional approved HR recipient may be included through configuration/operational policy.

## Minimum Content

- authorization has lapsed;
- Authorization Number;
- expiration date;
- general next-step instruction;
- secure renewal/request link where appropriate.

## Prohibited Content

- signed PDF;
- signature evidence;
- full Business Justification;
- SSN;
- sensitive form details.

## Duplicate-Suppression Key

```text
Authorization Form
+
Recertification Cycle
+
Lapse Event
```

Only one lapse notice shall be issued for the same lapse event.

The requirements require a lapse notice when an authorization expires without an approved renewal.

---

# 23. Lapse Notification Suppression

Do not send lapse notification where an approved active replacement exists.

The Wave 6 implementation plan specifically requires replacement detection to suppress the lapse notification.

---

# 24. NOT-13 — Optional Renewal Oversight Copy

## Trigger

A 90/60/30-day reminder or lapse event occurs and the active configuration identifies an approved oversight copy group.

## Recipient

Configured group only.

## Purpose

Provide optional HR/compliance awareness without embedding operational recipient logic in code.

## Configuration

The Wave 1 design includes an optional renewal-notification copy group as configuration.

---

# 25. Notification Matrix — Detailed

| ID | Event | Recipient | Trigger | Timing | Secure Target | Duplicate Control |
|---|---|---|---|---|---|---|
| NOT-01 | Employee Signature Required | Subject | Authorization ready for employee signature | Immediate/event driven | Document/signature task | Form + signature cycle |
| NOT-02 | Supervisor Approval & Signature | Supervisor | Employee signature complete or Reuse ready | Immediate/event driven | Approval/signature action | Case + supervisor action cycle |
| NOT-03 | Request Denied | Subject | Supervisor denial committed | Immediate | HR Case | Case + denial event |
| NOT-04 | Staffing Assignment | Staffing | Staffing task created | Immediate | HR Task | Task identity |
| NOT-05 | Analytics Assignment | Analytics | Analytics task created | Immediate | HR Task | Task identity |
| NOT-06 | OM ARM Action | Assigned OM | OM task created | Immediate | OM HR Task | Task identity |
| NOT-07 | OM Escalation | Configured escalation recipient | OM task overdue | Configured | OM HR Task | Task + escalation threshold |
| NOT-08 | Exception Review | Exception group/user | Exception task created | Immediate | Exception HR Task | Task identity |
| NOT-09 | 90-Day Reminder | Subject | 90-day threshold | Daily evaluation | Renewal service | Form + cycle + threshold |
| NOT-10 | 60-Day Reminder | Subject | 60-day threshold | Daily evaluation | Renewal service | Form + cycle + threshold |
| NOT-11 | 30-Day Reminder | Subject | 30-day threshold | Daily evaluation | Renewal service | Form + cycle + threshold |
| NOT-12 | Lapse Notice | Subject | Expired with no replacement | Daily evaluation | Renewal/request experience | Form + cycle + lapse |
| NOT-13 | Renewal Oversight Copy | Configured recipient | Enabled applicable renewal event | With primary event | Appropriate secure link | Same underlying event |

---

# 26. Notification Event Versus State

Notifications shall be event-driven.

A notification is not itself a lifecycle state.

Example:

```text
Authorization = Active
    |
    +--> 90-day reminder event
    |
    +--> 60-day reminder event
    |
    +--> 30-day reminder event
```

The authorization remains Active while reminders occur.

This distinction prevents notification logic from becoming entangled with state transitions.

---

# 27. Notification Timing Rules

## Immediate/Event-Driven

Use for:

- signature actions;
- supervisor action;
- denial;
- fulfillment assignment;
- OM task assignment;
- exception assignment.

## Scheduled

Use for:

- renewal reminders;
- lapse notices;
- time-based escalations where configured.

The implementation should not create multiple independent renewal scheduled flows when one daily process can evaluate all thresholds.

The source requirements call for a single daily scheduled renewal process.

---

# 28. Notification Idempotency

Notification creation shall be retry-safe.

Examples:

### Task Assignment

One notification associated with the creation/assignment event, not every time a flow reevaluates the task.

### Renewal Reminder

One per:

```text
Form + Cycle + Threshold
```

### Lapse

One per:

```text
Form + Cycle + Lapse Event
```

### OM Escalation

One per configured escalation stage unless the approved design explicitly defines multiple escalation stages.

---

# 29. Reminder Tracking

The approved design shall use fields on the Authorization Form and native notification/event history rather than creating a custom reminder-history table unless native evidence proves inadequate.

Logical tracking may include:

- renewal-cycle ID;
- 90-day reminder timestamp;
- 60-day reminder timestamp;
- 30-day reminder timestamp;
- lapse-notice timestamp.

The Wave 6 plan explicitly directs this approach.

---

# 30. Notification Auditability

For compliance-relevant notifications, the system should retain sufficient evidence to demonstrate:

- triggering event;
- recipient;
- date/time;
- notification type;
- associated case/authorization/task;
- success/failure where available through native notification records.

A separate custom notification-audit table shall not be introduced unless native platform records prove insufficient and architecture approval is obtained.

---

# 31. Failed Notification Handling

A failed email delivery shall not automatically imply that the underlying ServiceNow action failed.

The action remains available in ServiceNow.

Where operationally significant:

- failed delivery may be visible through native notification logs;
- support may investigate;
- the business process shall not fabricate completion because an email was sent.

---

# 32. Notification and Assignment Separation

Assignment is authoritative in ServiceNow.

Email is a convenience/awareness mechanism.

Therefore:

```text
Task Assignment
!=
Email Delivery
```

A user cannot avoid an assigned responsibility merely because an email was not received.

Likewise, an email shall not create an action that does not exist in ServiceNow.

---

# 33. Native Versus Custom Notification Behavior

Where native ServiceNow Document Templates, approval, or HR Task behavior already sends an adequate, privacy-compliant notification, the implementation should not automatically create a duplicate custom notification.

The Wave 4 capability spike shall identify:

- native employee signature notifications;
- native supervisor signature notifications;
- native approval notifications.

The final solution shall document which notification is authoritative for each event.

---

# 34. Notification Ownership Matrix

| Notification Class | Business Owner | Technical Owner |
|---|---|---|
| Employee Signature | Product/Compliance | ServiceNow team |
| Supervisor Action | Product/HR | ServiceNow team |
| Denial | Product/HR | ServiceNow team |
| Staffing Assignment | Staffing | ServiceNow team |
| Analytics Assignment | Analytics | ServiceNow team |
| OM Action | Analytics / operational owner | ServiceNow team |
| OM Escalation | Analytics | ServiceNow team |
| Exception Review | Product support owner | ServiceNow team |
| Renewal Reminders | Compliance / Product | ServiceNow team |
| Lapse | Compliance / Product | ServiceNow team |

---

# 35. Notification Configuration Values

Configuration should support, where applicable:

- reminder thresholds;
- renewal copy group;
- lapse notification enabled;
- OM due days;
- OM escalation timing;
- exception task due days;
- assignment groups.

The Wave 1 plan requires these operational values to be configuration-driven.

---

# 36. Hard-Coding Restrictions

Do not hard-code:

- recipient sys_ids;
- group sys_ids;
- reminder dates;
- reminder thresholds;
- OM escalation contacts;
- production environment links.

Use:

- record references;
- configuration;
- assigned users/groups;
- platform-generated URLs;
- environment-aware system properties where appropriate.

---

# 37. Notification Subject-Line Standard

Subject lines should be concise and action-oriented.

Recommended logical patterns:

### Employee

`Action Required: Sign HR Access Rules of Behavior – <Authorization Number>`

### Supervisor

`Action Required: Review and Sign HR Access Request – <Case Number>`

### Staffing

`HR Access Fulfillment Assigned – <Task Number>`

### Analytics

`HR Data/Report Fulfillment Assigned – <Task Number>`

### OM

`Action Required: Workforce Profile Chart ARM Assignment – <Task Number>`

### Renewal

`HR Access Rules of Behavior Renewal Due <X> Days – <Authorization Number>`

### Lapse

`HR Access Authorization Has Expired – <Authorization Number>`

Exact production wording shall be approved during communication/template review.

---

# 38. Accessibility and Plain-Language Rules

Notification content shall:

- use clear action language;
- avoid internal technical jargon where recipients do not need it;
- identify what the user needs to do;
- avoid relying solely on color or formatting;
- use descriptive link text where the platform permits;
- avoid dense blocks of policy text.

---

# 39. Employee Signature Notification Test

Verify:

- correct subject receives notification;
- no other employee receives it;
- correct Authorization/Case reference;
- secure link opens assigned action;
- no signed PDF attached;
- no sensitive justification;
- retry does not duplicate.

---

# 40. Supervisor Notification Test

Verify:

- correct supervisor receives notification;
- unauthorized supervisor does not receive it;
- secure action link works;
- employee signature prerequisite behaves correctly for New/Amendment/Renewal;
- Reuse routes request-specific supervisor action correctly;
- content excludes prohibited information.

---

# 41. Denial Notification Test

Verify:

- subject receives one denial notification;
- case is already Denied when notification is sent;
- no fulfillment task exists;
- no signed PDF attached;
- no inappropriate sensitive comments exposed.

---

# 42. Staffing Assignment Test

Verify:

- correct Staffing group/assignee receives notification;
- task exists before notification;
- no notification is sent before fulfillment gate;
- relevant access context is correct;
- no Analytics-only sensitive data is exposed.

---

# 43. Analytics Assignment Test

Verify:

- correct Analytics recipient;
- task exists;
- no premature assignment;
- WPC indicator appears where needed;
- no Staffing-only details beyond business need.

---

# 44. OM Assignment Test

Verify:

- correct OM receives notification;
- WPC task exists;
- subject and task are correct;
- ARM action context is clear;
- no full PDF;
- no excessive Business Justification;
- secure link resolves to assigned OM task.

---

# 45. OM Escalation Test

Verify:

- escalation only occurs after configured threshold;
- correct escalation recipient;
- OM task remains open;
- parent request remains appropriately open;
- repeated evaluation does not create duplicate same-stage escalation.

---

# 46. Renewal Reminder Tests

For each configured threshold:

- controlled test date triggers correct reminder;
- correct subject receives it;
- correct expiration date is shown;
- secure renewal link works;
- second daily execution does not duplicate;
- approved replacement suppresses reminder where applicable;
- historical forms are not modified.

The Wave 6 validation gate explicitly requires reminder idempotency and replacement suppression.

---

# 47. Lapse Notification Test

Verify:

- expiration has passed;
- no approved replacement exists;
- status is correctly lapsed;
- subject receives one notice;
- RPT-8 entry exists;
- repeated daily evaluation sends no duplicate;
- no external deprovisioning is executed.

---

# 48. Notification Security Negative Tests

Test that:

- unrelated user is not copied;
- signed PDF is not attached;
- SSN is absent;
- signature data is absent;
- Business Justification is absent from ordinary email body;
- secure links require authentication;
- direct attachment URLs are not used;
- incorrect assignment group does not receive team notification.

---

# 49. Notification Data Inspection

Before release, representative notification samples shall be reviewed for:

- recipient;
- subject line;
- body;
- links;
- attachments;
- rendered variables;
- unintended blanks;
- sensitive data;
- environment-specific URLs.

BR-14 specifically requires notification samples to demonstrate that sensitive content and attachments are not exposed.

---

# 50. Notification Traceability Matrix

| Notification | Requirements | Acceptance / Test |
|---|---|---|
| NOT-01 Employee Signature | BR-6, FR-10 | AC-19 |
| NOT-02 Supervisor Approval/Signature | BR-5, FR-11 | AC-7, AC-19 |
| NOT-03 Denial | EX-2 | Negative lifecycle test |
| NOT-04 Staffing Assignment | BR-9, FR-12 | AC-8 |
| NOT-05 Analytics Assignment | BR-10, FR-13 | AC-9 |
| NOT-06 OM Action | BR-11, FR-15 | AC-11 |
| NOT-07 OM Escalation | EX-9 | Fulfillment exception test |
| NOT-08 Exception Review | EX-1, EX-3, EX-5, EX-6 | Exception tests |
| NOT-09 90-Day | FR-23 | AC-22 |
| NOT-10 60-Day | FR-23 | AC-22 |
| NOT-11 30-Day | FR-23 | AC-22 |
| NOT-12 Lapse | FR-24 | AC-23 |
| Privacy rules | BR-14, SEC-3, SEC-5 | AC-17, AC-24 |

---

# 51. Notification Artifact Classification

Likely treatment:

## Class A — Source-First

Where supported:

- notification metadata;
- events;
- reusable scripts/helpers;
- configuration references.

## Class B — Configure Then Transform

Where notification behavior is embedded within:

- Flow Designer;
- Document Templates;
- approval/document tasks;
- HRSD configuration.

## Class C — Manual Environment Configuration

Potential examples:

- production distribution groups;
- environment-specific recipients;
- email system configuration;
- platform email enablement.

Exact classification shall be recorded in the SDK build ledger.

---

# 52. PDI Email Considerations

The PDI shall use synthetic recipients and test identities.

No production email addresses shall be required to validate core notification logic.

Where actual outbound delivery is constrained by PDI behavior:

- validate notification generation in platform records/logs;
- document the limitation;
- revalidate external delivery behavior in the agency development environment.

A PDI email-delivery limitation shall not justify weakening notification security.

---

# 53. Notification Definition of Done

Notification capability is complete when:

1. all required lifecycle events have defined notification behavior;
2. recipients are resolved dynamically/configurably;
3. employee signature notification works;
4. supervisor action notification works;
5. denial notification works;
6. Staffing assignment notification works;
7. Analytics assignment notification works;
8. OM assignment notification works;
9. OM escalation works;
10. exception notification works;
11. 90-day reminder works;
12. 60-day reminder works;
13. 30-day reminder works;
14. lapse notification works;
15. reminders are idempotent;
16. lapse notice is idempotent;
17. approved replacements suppress inappropriate lapse notices;
18. optional renewal copy is configuration-driven;
19. signed PDFs are not attached;
20. sensitive form content is absent;
21. SSNs/sensitive PII are absent;
22. links point to authenticated ServiceNow experiences;
23. notification generation is traceable in native platform evidence;
24. representative notification samples pass privacy review;
25. retries do not produce duplicate routine notifications;
26. PDI limitations are documented for agency-environment revalidation.

---

# 54. Baseline Notification Statement

The HR Access ROB Authorization product shall use notifications as **minimal, privacy-safe prompts to actions that remain authoritative inside ServiceNow**.

Notifications shall never substitute for:

- assignment;
- approval;
- signature;
- authorization status;
- fulfillment evidence;
- signed document storage.

The application shall send the minimum information necessary, use secure authenticated links, suppress duplicates, preserve auditable delivery evidence where supported, and avoid exposing signed forms or sensitive information outside the controlled ServiceNow experience.