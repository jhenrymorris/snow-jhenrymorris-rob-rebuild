# Appendix C — Logical Data Model
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

This appendix defines the logical data model for the HR Access Rules of Behavior Authorization product.

It establishes:

- authoritative business entities;
- native versus custom ServiceNow records;
- relationships and cardinality;
- logical field ownership;
- live references versus governed snapshots;
- business keys and uniqueness requirements;
- lifecycle creation timing;
- New / Reuse / Amendment / Renewal data behavior;
- system-managed versus user-managed data;
- prohibited duplicate architecture;
- audit and retention relationships.

This appendix governs the logical model.

Exact dictionary names, column types, lengths, reference qualifiers, attributes, and ServiceNow implementation details shall be maintained in:

`docs/FIELD-MAP.md`

The logical model shall not be altered solely because a particular implementation mechanism is inconvenient.

---

# 2. Core Data-Architecture Principles

## 2.1 Native HRSD for Transactional Work

The operational request shall remain a native:

`sn_hr_core_case`

Fulfillment and exception work shall remain native:

`sn_hr_core_task`

The solution shall not create a custom parent request table or a custom fulfillment-task table.

This is an explicit architectural constraint of the approved SDK plan.

---

## 2.2 Custom Tables Only for Governed ROB Data

Custom scoped business tables shall be limited to:

1. ROB Configuration
2. ROB Access Item Reference
3. ROB Authorization Form
4. Authorized Access Detail

The implementation plan requires exactly four custom business tables and prohibits substitute custom request, task, signature, approval, PDF, exception/audit, or attachment tables.

---

## 2.3 Request and Authorization Are Different Business Objects

The HR Case answers:

> What access is this employee requesting now?

The ROB Authorization Form answers:

> What access has this employee formally acknowledged, signed, and been approved to hold under this version of the Rules of Behavior?

These records shall not be combined.

The requirements explicitly recommend separate request and authorization records so authorization can be reused, amended, renewed, and retrieved historically without destroying transactional history.

---

## 2.4 Authorized Access Detail Is Not a Request Line

Requested access remains associated with the native HR Case while the authorization decision is being made.

Authorized Access Detail records shall be created only when a governed authorization scope is prepared.

An Authorized Access Detail represents:

> An access item covered by a particular ROB Authorization Form.

It does **not** represent:

> A user's temporary selection on an intake form.

The SDK implementation plan explicitly establishes this distinction.

---

# 3. High-Level Logical Model

The principal logical relationships are:

```text
sys_user
   |
   | 1
   |
   | M
sn_hr_core_case
   |
   | references / evaluates
   v
ROB Authorization Form
   |
   | 1
   |
   | M
Authorized Access Detail
   |
   | M
   |
   | 1
ROB Access Item Reference


ROB Configuration
   |
   | controls
   +---- authorization version
   +---- expiration rules
   +---- grace window
   +---- reminder thresholds
   +---- routing groups
   +---- task/escalation settings


sn_hr_core_case
   |
   | 1
   |
   | M
sn_hr_core_task
```

Additional native relationships include:

- Subject Person → `sys_user`
- Requester → `sys_user`
- Supervisor → `sys_user`
- Operations Manager → `sys_user`
- Assignment Groups → `sys_user_group`
- Approval → native approval records
- Signature/document activity → current ServiceNow document/signature records
- PDF → native attachment/document handling
- audit → native audit/history mechanisms

---

# 4. Entity Inventory

| Entity | Native / Custom | Purpose | System of Record |
|---|---|---|---|
| HR Case | Native | Transactional access request | ServiceNow HRSD |
| HR Task | Native | Fulfillment or exception work | ServiceNow HRSD |
| User | Native | Employee, requester, supervisor, OM identities | ServiceNow |
| User Group | Native | Staffing, Analytics, fallback, admin groups | ServiceNow |
| ROB Configuration | Custom | Product-level configurable behavior | Scoped application |
| ROB Access Item Reference | Custom | Controlled access catalog/routing reference | Scoped application |
| ROB Authorization Form | Custom | Governed signed compliance artifact | Scoped application |
| Authorized Access Detail | Custom | Individual authorized-scope item | Scoped application |
| Approval | Native | Supervisor decision evidence | ServiceNow |
| Signature / Document Task | Native/current platform capability | Employee and supervisor electronic-signature evidence | ServiceNow |
| Signed PDF | Native attachment/document capability | Final auditable authorization artifact | ServiceNow |
| Audit History | Native | Historical evidence | ServiceNow |

---

# 5. Entity: HR Case

## 5.1 Purpose

The HR Case represents one submitted access request.

It is the operational parent for:

- intake;
- request classification;
- authorization decision;
- approvals;
- fulfillment tasks;
- exceptions;
- request-specific history;
- closure.

The approved architecture uses `sn_hr_core_case` as the operational parent.

---

## 5.2 Logical Ownership

**Record owner:** HRSD process
**Business subject:** Subject Person
**Requester:** logged-in employee for MVP
**Primary lifecycle:** request transaction

---

## 5.3 Core Native Fields to Reuse Where Suitable

The implementation shall first evaluate native fields including:

- Opened By
- Opened For / Subject Person
- State
- Assignment Group
- Assigned To
- Parent
- Due Date
- Close Notes
- Work Notes

Native fields shall be preferred when semantically suitable. The Wave 2 plan explicitly requires this inventory before new fields are added.

---

# 6. HR Case Logical Extension Fields

Where no suitable native field exists, the HR Case may require controlled supporting fields.

| Logical Field | Purpose | Source | Editable By | Snapshot / Live |
|---|---|---|---|---|
| Request Category | Staffing / Analytics | System | System | Transactional |
| Requested Access | Requested access-item references | User | User before submission | Transactional |
| Subject Person | Employee needing access | System/user context | Controlled | Live reference |
| Requester | Submitter | System | System | Live reference |
| Supervisor | Approval routing | Profile/fallback | Controlled support | Case value |
| Operations Manager | WPC routing | Profile/manual correction | Controlled support | Case value |
| Position Snapshot | Authorization context | Profile | Controlled before auth | Snapshot |
| Organization Snapshot | DIR/DIV context | Profile | Controlled before auth | Snapshot |
| Employment Type | Form/expiration logic | Request/profile | User/support | Transactional snapshot source |
| Access End Date | Time-limited access | User | User/support | Transactional |
| Business Justification | Required authorization justification | User | User before locking | Transactional + later snapshot |
| Existing Authorization Status | Decision result | System | System | Decision output |
| Authorization Path | New / Reuse / Amendment / Renewal / Exception | System | System | Decision output |
| Related Existing Authorization | Existing applicable form | System | System | Reference |
| Related Final Authorization | Governing form for request | System | System | Reference |
| Covered Access | Decision output | System | System | Working decision data |
| Uncovered Access | Decision output | System | System | Working decision data |
| Employee Signature Required | Decision output | System | System | Boolean |
| Supervisor Signature Required | Decision output | System | System | Boolean |
| Exception Reason | Exception handling | System/support | Controlled | Transactional |

The source requirements identify subject, requester, supervisor, DIR/DIV, position, employment type, access end date, requested access, business justification, portal category, existing form status, OM action, signed version, expiration date, and fulfillment status as core data requirements.

## 6.1 Approved HR Core Ownership Boundary for Request Snapshots

Platform-owner Option B preserves `sn_hr_core_case_payroll` and
`sn_hr_core_case_workforce_admin` as the Wave 2 intake records and preserves
Position, Organization / DIR-DIV, and Supervisor as fields on those native
subclasses. An HR Core-owned controlled mechanism is responsible for deriving
and persisting those values from the authenticated/request subject profile.

The mechanism must run within the HR Core execution boundary, reject or ignore
forged client values, preserve case auditability, complete before downstream
authorization decisions, and expose no general-purpose write facility to the
HR Access scope. The exact HR Core artifact is an agency implementation
decision. The PDI remains BLOCKED-PDI until both subclasses pass committed
reread and security validation; the mandatory logical fields are not removed
or weakened.

---

# 7. Requested Access Representation

## 7.1 Requirement

Requested access shall be stored as references to controlled ROB Access Item Reference records.

It shall not be:

- free text;
- duplicated hard-coded choices;
- manually recreated independently in multiple intake items.

The Wave 2 validation criteria require access items to be active reference records rather than duplicated choice values.

---

## 7.2 Logical Representation

The HR Case may logically hold:

```text
Requested Access
    1..M references to ROB Access Item Reference
```

The exact physical ServiceNow implementation—list collector, glide list, M2M relation, or another supported approach—shall be confirmed in `FIELD-MAP.md` after the Wave 2 capability assessment.

The logical requirement is reference integrity, not a specific field type.

---

# 8. Entity: ROB Configuration

## 8.1 Purpose

ROB Configuration stores product behavior that must remain configurable rather than hard-coded.

The system shall normally operate against **exactly one active configuration record**.

Zero or more than one active configuration shall produce Exception Review rather than arbitrary selection. The decision-engine plan explicitly requires exactly one active configuration record.

---

# 9. ROB Configuration Logical Fields

| Logical Field | Purpose |
|---|---|
| Active | Identifies operational configuration |
| Current Accepted Form Version | Governs obsolete-form detection |
| Annual Recertification Date | Agency-wide renewal date |
| Grace Window Days | Mid-cycle renewal rule |
| Reminder Thresholds | Standard 90/60/30 or future configured values |
| Staffing Assignment Group | HR systems fulfillment |
| Analytics Assignment Group | Data/report fulfillment |
| Exception/Fallback Group | Exception handling |
| OM Task Due Days | WPC OM task SLA logic |
| OM Escalation Timing | WPC escalation |
| Exception Task Due Days | Exception work |
| Renewal Notification Copy Group | Optional oversight |
| Lapse Notification Enabled | Renewal/lapse behavior |
| Additional approved system properties | Configuration-driven future controls |

The Wave 1 plan requires recertification, grace, reminders, team groups, OM task due days, exception-task due days, OM escalation timing, and optional renewal-copy configuration.

---

# 10. ROB Configuration Constraints

## CFG-01 — Single Active Configuration

Only one active configuration record may govern production behavior.

Where zero or multiple active records exist:

- authorization decision shall stop;
- Exception Review shall result;
- no Authorization Form shall be created.

## CFG-02 — No Hard-Coded Configuration

The following shall not be hard-coded in lifecycle logic where configuration is intended:

- recertification date;
- grace days;
- reminder thresholds;
- assignment group sys_ids;
- OM due days;
- escalation timing;
- current form version.

## CFG-03 — Historical Interpretation

Changing current configuration shall not rewrite historical Authorization Form snapshots.

---

# 11. Entity: ROB Access Item Reference

## 11.1 Purpose

The Access Item Reference provides a controlled catalog of access that may be requested and authorized.

It separates:

- user-facing selection;
- authorization comparison;
- routing;
- downstream provisioning context;
- document rendering.

---

# 12. ROB Access Item Reference Logical Fields

| Logical Field | Purpose |
|---|---|
| Name | User-facing access-item name |
| Code | Stable business key |
| Active | Intake availability |
| Request Category | Staffing / Analytics |
| Fulfillment Owner | Staffing / Analytics |
| Requires End Date | Conditional validation |
| Requires OM Action | WPC flag |
| Provisioning System | External system where action occurs |
| Target System | System/report receiving access |
| Form 1768 Field Mapping | Official PDF selection mapping |
| Display Order | UI/document ordering |
| Description | User/administrator explanation |
| Effective From / To if needed | Future catalog governance |

---

# 13. Initial Access Item Set

At minimum, the access catalog shall support the initial access types required by the business process.

| Access Item | Category | Fulfillment | Form 1768 Mapping |
|---|---|---|---|
| FPPS/WTTS | Staffing | Staffing | FPPS/WTTS |
| eOPF | Staffing | Staffing | eOPF |
| USA Staffing | Staffing | Staffing | USA Staffing |
| OAS/DataMart | Analytics | Analytics | OAS/DataMart |
| Human Capital Reports | Analytics | Analytics | Human Capital Reports |
| Workforce Profile Charts | Analytics | Analytics + OM | **Workforce Profile Charts** |

The approved product decision adds a distinct WPC field to the electronic Form 1768.

For Workforce Profile Charts:

- provisioning system = ARM;
- target system/report = OAS-hosted Workforce Profile Charts;
- Analytics remains the primary fulfillment team;
- Operations Manager action remains separately tracked.

The source requirements distinguish ARM role assignment from OAS report access.

---

# 14. Form 1768 Employment-Type Extension

The electronic Form 1768 shall support the following employment/access-type model:

- Federal
- Contractor
- IPA
- Auditor/Investigator

The approved product decision adds an explicit **IPA** field to the form rather than mapping IPA to an existing category.

The logical Employment Type model shall therefore support IPA as a first-class value rather than an undocumented exception.

---

# 15. Entity: ROB Authorization Form

## 15.1 Purpose

The ROB Authorization Form is the authoritative governed compliance record for one signed authorization version.

It represents:

> One subject + one approved form version + one complete authorized scope + one authorization lifecycle.

---

# 16. Authorization Form Identity

The Authorization Form shall have a stable unique business identity.

Logical attributes include:

| Field | Requirement |
|---|---|
| Number | Auto-generated unique business identifier |
| Internal Record ID | ServiceNow sys_id |
| Subject Person | Required |
| Form Version | Required before signature |
| Status | Required |
| Effective Date | Required when active |
| Expiration Date | Required when active |

The approved Wave 1 design uses internal table:

`x_2108496_hr_acces_rob_auth`

and an authorization number using the `ROBA` prefix with seven numeric digits.

---

# 17. Authorization Form Logical Field Groups

## 17.1 Identity

- Number
- Subject Person
- Source/Originating HR Case
- Form Version

## 17.2 Employee Snapshot

- Employee Name Snapshot
- Position Title Snapshot
- Organization / DIR/DIV Snapshot
- Employment Type Snapshot
- Access End Date Snapshot where applicable

## 17.3 Authorization Context

- Business Justification Snapshot
- Authorization Path
- Effective Date
- Expiration Date
- Status

## 17.4 Employee Signature Evidence

- Employee Signer
- Employee Signature Complete
- Employee Signature Date/Time
- Native Document/Signature Reference

## 17.5 Supervisor Evidence

- Supervisor
- Supervisor Approval Result
- Supervisor Approval Date/Time
- Supervisor Signature Complete
- Supervisor Signature Date/Time
- Native Approval Reference
- Native Document/Signature Reference

## 17.6 Document Evidence

- Final PDF Generated
- Final PDF reference / attachment relationship
- PDF generation date/time
- optional checksum/integrity evidence if implemented

## 17.7 Lifecycle Relationships

- Supersedes Authorization Form
- Superseded By Authorization Form
- Revocation reason/date if applicable
- expiration/lapse metadata
- renewal reminder-cycle metadata

---

# 18. Authorization Form Status Model

The minimum logical statuses are:

1. Draft
2. Pending Employee Signature
3. Pending Supervisor Approval and Signature
4. Active
5. Denied
6. Superseded
7. Revoked
8. Obsolete Version
9. Expired
10. Lapsed

The implementation plan explicitly requires guards for these authorization states.

---

# 19. Status Semantics

## Draft

Authorization record exists but has not entered signature.

Form Version may be populated during draft preparation but must be nonblank before signature starts.

## Pending Employee Signature

Applicable only to:

- New;
- Amendment;
- Renewal.

## Pending Supervisor Approval and Signature

Employee requirements are complete where required; supervisor activity remains incomplete.

## Active

All required signatures/approval are complete and the authorization is effective.

## Denied

Supervisor denied the authorization/request.

No fulfillment may occur.

## Superseded

A newer approved Authorization Form has replaced the record.

The record remains historical.

## Revoked

Authorization was administratively revoked.

It may not be reused or reactivated.

## Obsolete Version

Authorization uses a form version no longer accepted.

It is not eligible for Reuse.

## Expired

Expiration date has passed according to lifecycle processing.

## Lapsed

Authorization has expired without an approved active replacement and requires lapse treatment/worklist visibility.

---

# 20. Historical-Immutability Rule

Once an Authorization Form reaches a signed/final historical state, material authorization evidence shall not be directly rewritten by ordinary users or fulfillers.

Protected fields include:

- subject snapshot;
- position snapshot;
- organization snapshot;
- business justification snapshot;
- form version;
- signature evidence;
- approval evidence;
- effective date;
- expiration date;
- signed PDF;
- supersession relationships;
- historical status.

Corrections requiring changed authorization meaning shall result in an appropriate new authorization lifecycle rather than editing signed historical evidence.

---

# 21. Entity: Authorized Access Detail

## 21.1 Purpose

Authorized Access Detail represents one item within the authorization scope.

Example:

```text
ROBA0000123
    ├── FPPS/WTTS
    ├── USA Staffing
    └── Human Capital Reports
```

Each detail means that the parent authorization governs that access item.

---

# 22. Authorized Access Detail Logical Fields

| Logical Field | Requirement |
|---|---|
| Number | Unique detail identifier |
| ROB Authorization Form | Required parent |
| Source HRSD Case | Required |
| Subject Person | Required |
| Access Item | Required |
| Status | Required |
| Business Justification Snapshot | Required as designed |
| Fulfillment Owner Snapshot | Required |
| Provisioning System Snapshot | Required |
| Target System Snapshot | Required |
| Requires OM Action Snapshot | Required |
| Access End Date if item-specific | Conditional |
| Effective Date | System-managed |
| Expiration Date | System-managed |
| Completion/Fulfillment linkage | System-managed |

The approved Wave 1 design requires Source HRSD Case, Authorization Form, Subject Person, and Access Item to be mandatory system-managed fields.

---

# 23. Access Detail Identity and Uniqueness

The detail shall have an auto-generated number.

The approved design uses:

`ROBD` + seven digits.

The following logical uniqueness constraints shall apply.

## Key 1

```text
(source_hrsd_case, access_item)
```

Purpose:

Prevent duplicate detail creation for the same requested access item during one authorization lifecycle.

## Key 2

```text
(rob_authorization_form, access_item)
```

Purpose:

Prevent duplicate access items within the same governed authorization.

These keys are explicitly required by the Wave 1 implementation plan.

---

# 24. System-Managed Detail Rule

Authorized Access Details shall be lifecycle-created.

Ordinary users shall not manually create or edit them through related lists.

The parent Authorization Form may expose them through a standard related list for visibility, but manual New/Edit shall be hidden in the production design.

---

# 25. Live Reference Versus Snapshot Model

A fundamental design distinction is required between:

### Live References

Used where the current ServiceNow entity itself remains authoritative.

Examples:

- Subject Person reference
- Supervisor reference
- Operations Manager reference
- Access Item reference
- Assignment Group reference

### Governed Snapshots

Used where historical authorization context must remain exactly as approved.

Examples:

- Employee Name
- Position Title
- DIR/DIV
- Employment Type
- Business Justification
- routing owner
- provisioning system
- target system
- Form Version

---

# 26. Snapshot Rules

## SNAP-01 — Historical Stability

Changing the employee's live ServiceNow profile shall not rewrite prior Authorization Form snapshots.

## SNAP-02 — Routing Stability

Changing an Access Item Reference's current routing shall not rewrite the fulfillment/routing context of historical authorization details.

## SNAP-03 — Form Version Stability

Changing the current accepted Form Version shall not alter prior Authorization Forms.

## SNAP-04 — Business Justification

Once an authorization enters signature, the signed authorization's justification snapshot shall remain fixed.

## SNAP-05 — Access Name

Historical reporting should be able to preserve the access-item meaning applicable at authorization time even if the reference item's display name later changes.

---

# 27. Relationship Cardinalities

## 27.1 User → HR Case

```text
One Subject Person
    may have
Many HR Cases
```

---

## 27.2 User → Authorization Form

```text
One Subject Person
    may have
Many historical Authorization Forms
```

At a particular point, business rules determine which form is currently active/reusable.

---

## 27.3 HR Case → Authorization Form

A case may:

- create one new Authorization Form;
- reuse one existing Authorization Form;
- result in no Authorization Form when denied/exception/withdrawn before creation.

Logical cardinality:

```text
HR Case 0..1 → governing/new Authorization Form
```

A single Authorization Form may be referenced by multiple HR Cases through Reuse.

Therefore:

```text
Authorization Form 1 → 1..M Cases over time
```

for a reusable active authorization.

---

# 28. Authorization Form → Access Detail

```text
One Authorization Form
    has
One or More Authorized Access Details
```

An Active authorization shall not represent an empty access scope.

---

# 29. Access Item Reference → Access Details

```text
One Access Item Reference
    may appear in
Many Authorized Access Details
```

Historical details remain even if the reference item is later inactive.

Inactive access items shall not normally be selectable for new requests.

---

# 30. HR Case → HR Task

```text
One HR Case
    may have
Zero or Many HR Tasks
```

Possible task types include:

- Staffing Fulfillment
- Analytics Fulfillment
- OM ARM Role Assignment
- Exception Review

No fulfillment task shall be created before the authorization fulfillment gate is satisfied.

---

# 31. Authorization Creation Timing

The decision engine shall **not** create Authorization Forms or Authorized Access Details.

Wave 3 shall calculate only:

- path;
- existing status;
- covered access;
- uncovered access;
- related existing form;
- expiration outcome;
- signature requirements;
- exception reason.

Authorization records shall be created later, after the path has been resolved.

The implementation plan explicitly separates decision from record creation to avoid orphan and premature records.

---

# 32. New Path Data Behavior

## Condition

No eligible prior authorization exists, or the prior authorization is Revoked.

## Records

### HR Case

Already exists.

### New Authorization Form

Create one.

### Access Details

Create one for each requested approved access item.

### Employee Signature

Required.

### Supervisor Approval

Required.

### Supervisor Signature

Required.

### Prior Form

None, or revoked form remains unchanged.

---

# 33. Reuse Path Data Behavior

## Condition

Existing authorization is:

- Active;
- current accepted version;
- contextually valid;
- requested scope fully covered.

## Records

### HR Case

New transactional case exists.

### Authorization Form

**Do not create a new form.**

The case links to the exact existing form.

### Access Details

**Do not duplicate details.**

### Employee Signature

No new employee signature.

### Supervisor Approval/Signature

Required for the new request.

### PDF

Original PDF remains unchanged.

This is an explicit rule of the approved data model.

---

# 34. Amendment Path Data Behavior

## Condition

An active/current authorization exists but:

- requested access is partially uncovered; or
- a material approved context change requires amendment.

## New Authorization Form

Create one.

## New Access Scope

```text
Active covered scope
+
approved uncovered delta
=
complete new authorization scope
```

## Access Details

Create new details under the new Authorization Form for the complete resulting approved scope.

Do not simply create a detail for the delta and leave the new authorization incomplete.

## Existing Authorization

Remain intact until new authorization activates.

After activation:

- prior form → Superseded;
- prior details → Superseded as applicable;
- new form → Active;
- bidirectional supersession linkage established.

The approved implementation plan specifically requires Amendment to carry forward covered active scope and add the uncovered delta.

---

# 35. Renewal Path Data Behavior

## Condition

Prior authorization is:

- expired;
- lapsed;
- obsolete form version;
- due for annual renewal.

## New Authorization Form

Create one.

## New Scope

The new Authorization Form receives the complete approved scope:

```text
prior approved active scope
+
approved request changes
=
new complete authorized scope
```

## Access Details

Create corresponding details for the complete new approved scope.

## Existing Authorization

Historical record remains unchanged until activation.

After activation:

- old form → Superseded;
- new form → Active;
- replacement links set;
- old PDF remains historical.

---

# 36. Revoked Path Data Behavior

A revoked authorization is not eligible for:

- reuse;
- renewal by reactivation;
- status reversal to Active.

A subsequent access request follows the New path.

New Authorization Form and Access Details are created after required approval/signature processing.

The approved state model explicitly treats a revoked prior form as New.

---

# 37. Exception Review Data Behavior

## Condition Examples

- invalid ROB Configuration;
- missing supervisor;
- missing required end date;
- duplicate equivalent open request;
- missing OM where required;
- unresolved required intake values.

## Authorization Form

Do not create until the condition requiring correction is resolved and authorization processing legitimately resumes.

## Access Details

Do not create.

## Work Record

Use native HR Task for Exception Review where work tracking is needed.

This avoids orphan compliance records.

---

# 38. Denial Data Behavior

When the supervisor denies:

### HR Case

Close as Denied according to HRSD design.

### Authorization Form

If a draft/pending form exists:

- mark Denied according to lifecycle design;
- retain required history.

### Access Details

Pending details become Denied or otherwise non-active according to final lifecycle mapping.

### Fulfillment Tasks

Do not create.

The source requirements explicitly require denied requests to close without fulfillment.

---

# 39. Withdrawal Data Behavior

When a request is withdrawn:

- HR Case closes as Withdrawn;
- partial workflow history remains;
- no new Active authorization is created;
- no unauthorized fulfillment proceeds;
- retention follows applicable records guidance.

The requirements explicitly require retention of partial history for withdrawn requests.

---

# 40. Fulfillment Task Data Model

Fulfillment work shall use native HR Tasks.

Logical task types:

| Task Type | Owner |
|---|---|
| Staffing Fulfillment | Staffing |
| Analytics Fulfillment | Analytics |
| OM ARM Role Assignment | Operations Manager |
| Exception Review | Configured support group |

---

# 41. HR Task Logical Supporting Fields

Where no native equivalent exists, logical support data may include:

- Related Authorization Form
- Task Type
- Related Access Items
- Provisioning System
- Target System
- Completion Evidence
- Provisioning Complete
- Waiver Result
- Exception Reason

The Wave 2 plan defines this minimal task-support model.

---

# 42. Task Grouping Rule

Multiple access items owned by the same team shall normally be grouped into one team task.

Example:

```text
Case HRxxxx

Requested:
- FPPS/WTTS
- eOPF
- USA Staffing
- Human Capital Reports

Creates:

Staffing Task
    FPPS/WTTS
    eOPF
    USA Staffing

Analytics Task
    Human Capital Reports
```

Do not create one task per access item unless requirements are formally changed.

The approved fulfillment plan requires multiple items for one team to be grouped into one team task.

---

# 43. Workforce Profile Chart Task Model

A Workforce Profile Chart request creates:

### Analytics Fulfillment Task

Tracks Analytics responsibility.

### OM ARM Role Assignment Task

Tracks external ARM role assignment.

Logical OM task data includes:

- parent HR Case;
- related Authorization Form;
- Workforce Profile Charts access item;
- assigned Operations Manager;
- provisioning system = ARM;
- target system = OAS / Workforce Profile Chart report;
- due date;
- completion evidence;
- completion status;
- escalation state.

The parent case shall not close until required Analytics and OM responsibilities are completed, validated, or formally waived.

---

# 44. Fulfillment-to-Access-Detail Rule

Closing one team task shall not activate unrelated Authorized Access Details.

Example:

If a mixed request includes:

- USA Staffing;
- Human Capital Reports;

then:

- completing Staffing work may permit the USA Staffing detail to progress;
- it shall not independently activate Human Capital Reports if Analytics work remains incomplete.

The implementation plan explicitly prohibits one team's completion from activating another team's access item.

---

# 45. Parent Closure Rule

The HR Case shall close only when all required fulfillment work is:

- Completed;
- formally Waived; or
- correctly determined Not Required.

Open, failed, unresolved, or overdue required work shall prevent successful completion.

---

# 46. Expiration Data Model

Expiration logic shall be centralized.

Inputs:

- agency recertification date;
- grace-window days;
- Authorization effective/signing date;
- applicable Access End Date.

Output:

`Authorization Expiration Date`

Where a time-limited access end date is earlier than the normal annual expiration, the earlier applicable date controls.

The requirements explicitly define a single agency-wide recertification model with a configurable grace rule.

---

# 47. Reminder and Renewal Tracking

The solution shall use fields on the Authorization Form and native notification/event history rather than introduce a custom reminder-history table unless native evidence is proven insufficient.

Logical tracking may include:

- cycle identifier;
- 90-day reminder sent timestamp;
- 60-day reminder sent timestamp;
- 30-day reminder sent timestamp;
- lapse notification sent timestamp;
- renewal initiation reference if needed.

The approved implementation plan specifically directs the use of existing reminder timestamps/cycle identifiers rather than a custom reminder table unless required.

---

# 48. Lapse and Replacement Relationship

An expired authorization shall become Lapsed when:

- expiration has occurred; and
- no approved active replacement exists.

When a valid approved replacement exists:

- the historical form remains Superseded;
- lapse notification is suppressed.

The expired/not-renewed worklist shall identify only subjects without an approved active replacement.

---

# 49. PDF Data Relationship

The final signed PDF is not a separate custom business entity.

It is a native document/attachment artifact associated with the Authorization Form.

Logical relationship:

```text
ROB Authorization Form
    1
    |
    | authoritative
    |
    1
Final Signed PDF
```

The design objective is exactly one authoritative final PDF.

The Australia capability spike shall determine native generation and attachment behavior before physical implementation is finalized.

---

# 50. Approval and Signature Relationship

Approval and signature records shall remain native.

The logical Authorization Form stores governed evidence/references, but it shall not recreate the native approval/signature subsystem.

Example:

```text
Authorization Form
    |
    +--> Native Employee Document/Signature Task
    |
    +--> Native Supervisor Approval
    |
    +--> Native Supervisor Document/Signature Task
```

System-managed evidence fields on the Authorization Form may snapshot:

- signer identity;
- signature date/time;
- approval identity;
- approval date/time.

Those fields shall not replace native records as the underlying evidence source.

---

# 51. Audit Relationship Model

An auditor shall be able to traverse:

```text
Subject
  |
  +--> HR Case
       |
       +--> Decision
       |
       +--> Governing Authorization Form
       |      |
       |      +--> Authorized Access Details
       |      +--> Signatures
       |      +--> Approval
       |      +--> Signed PDF
       |      +--> Supersession history
       |
       +--> HR Fulfillment Tasks
       |
       +--> OM evidence
```

The audit requirements require exact form linkage plus retention of approval, signature, fulfillment, and OM evidence.

---

# 52. Security Ownership by Entity

| Entity | General Employee | Supervisor | Staffing | Analytics | OM | Compliance | ROB Admin |
|---|---|---|---|---|---|---|---|
| HR Case | Own approved experience | Assigned-context | Contextual | Contextual | Minimal | Approved audit context | Admin as authorized |
| HR Task | Assigned/appropriate view | Assigned where applicable | Assigned work | Assigned work | Own OM task | Read as approved | Admin |
| ROB Configuration | No | No | No | No | No | Read if required | Admin |
| Access Item Reference | Intake-visible active records | Intake/context | Read | Read | Relevant | Read | Admin |
| Authorization Form | Approved contextual access | Assigned context | Limited contextual | Limited contextual | Minimum only | Read historical | Admin |
| Access Detail | Approved contextual | Assigned context | Assigned access | Assigned access | WPC minimum | Read | Admin |
| Signed PDF | Approved contextual only | Assigned context | Limited | Limited | Normally no | Read | Admin |

Exact ACL behavior shall be defined in Appendix F.

---

# 53. Prohibited Data Structures

Unless approved through architecture governance, the application shall **not** create:

- Custom Request table
- Custom Fulfillment Task table
- Custom Approval table
- Custom Signature table
- Custom Signed PDF table
- Custom Exception table
- Custom Audit History table
- Custom Attachment table
- Custom Reminder History table
- separate custom table for Workforce Profile Charts
- separate custom table for IPA
- duplicate custom user/profile table
- manually maintained duplicate catalog of requested access

---

# 54. No-PII Data Rule

The following shall not be stored in product records merely because the underlying policy concerns sensitive information:

- SSN;
- copies of sensitive HR data;
- unrelated PII;
- sensitive report contents;
- credentials;
- passwords.

Subject identity shall use ServiceNow user/employee identity.

The source requirements explicitly prohibit SSNs and other sensitive PII in request or authorization records.

---

# 55. Business Keys and Idempotency

Every lifecycle action that can retry shall have a deterministic business key or equivalent duplicate-control strategy.

At minimum:

| Process | Logical Key |
|---|---|
| Authorization detail | Authorization Form + Access Item |
| Case-associated detail | Source Case + Access Item |
| Staffing task | Parent Case + Staffing Task Type |
| Analytics task | Parent Case + Analytics Task Type |
| OM task | Parent Case + OM Task Type |
| Exception task | Parent Case + applicable Exception Type |
| Reminder | Authorization + Cycle + Threshold |
| Lapse notification | Authorization + Cycle |
| PDF finalization | Authorization Form + final-document state |
| State transition | Record + prior state + target state / lifecycle event |

The SDK plan explicitly requires idempotency for case processing, authorization details, task generation, reminders, PDF generation, and state transitions.

---

# 56. Data Creation Responsibility Matrix

| Record / Data | User Creates? | System Creates? | Support May Correct? |
|---|---:|---:|---:|
| HR Case | Through intake | Yes via HRSD | Limited |
| Requested Access | User selects | Stored by system | Controlled |
| ROB Configuration | No | Admin/config | ROB Admin |
| Access Item Reference | No | Admin/config | ROB Admin |
| Authorization Form | No manual operational creation | Lifecycle | Admin exception only |
| Authorized Access Detail | No | Lifecycle | Restricted admin only |
| Staffing Task | No | Lifecycle | Controlled |
| Analytics Task | No | Lifecycle | Controlled |
| OM Task | No | Lifecycle | Controlled |
| Approval | No manual evidence creation | Native lifecycle | Platform-controlled |
| Signature evidence | No manual field entry | Native lifecycle | Platform-controlled |
| Final PDF | No | Document lifecycle | Restricted |
| Audit history | No | Platform | No ordinary edit |

---

# 57. Data Mutation Rules

## User-Editable Before Submission

Typically:

- requested access;
- business justification;
- conditional end date;
- other approved intake values.

## Support-Correctable Before Authorization

Where necessary:

- supervisor;
- organization/profile-derived value;
- position/profile-derived value;
- Operations Manager.

## System-Managed After Authorization Preparation

- authorization path;
- form version;
- snapshots;
- signature evidence;
- approval evidence;
- authorization status;
- expiration;
- access details;
- supersession;
- PDF evidence;
- routing snapshots.

---

# 58. Form 1768 Extension Impact

The approved addition of **IPA** and **Workforce Profile Charts** to the electronic form affects the logical model as follows.

## IPA

IPA becomes:

- a first-class Employment Type;
- available for document rendering;
- subject to configurable/end-date rules as approved;
- included in the Authorization Form employment snapshot.

It does **not** require a separate database table.

## Workforce Profile Charts

WPC becomes:

- a first-class ROB Access Item Reference;
- an Analytics access item;
- explicitly printable on the electronic Form 1768;
- configured with `Requires OM Action = true`;
- associated with ARM as the provisioning dependency;
- associated with OAS-hosted WPC as the target;
- represented by normal Authorized Access Detail records.

It does **not** require a separate WPC authorization table.

---

# 59. Data Model by Wave

| Wave | Data-Model Responsibility |
|---|---|
| **1** | Four custom tables, roles, business keys, numbering, configuration, Access Item Reference, base forms/lists |
| **2** | Native HR Case/Task field inventory and minimal supporting fields; reference-based intake |
| **3** | Decision outputs on HR Case; no authorization/detail creation |
| **4** | Authorization Form and Access Detail lifecycle creation; signature/approval/PDF relationships |
| **5** | HR Task orchestration and detail-level fulfillment updates |
| **6** | Expiration, reminders, lapse/replacement state |
| **7** | ACLs, audit, attachment security, protected fields |
| **8** | Report sources, ATF fixtures, UAT, final schema verification |

---

# 60. Wave 1 Data Gate

Wave 1 shall not be considered complete unless:

- exactly four custom business tables exist;
- Authorization and Detail numbering works at runtime;
- one valid active configuration exists;
- initial Access Item Reference records exist;
- WPC is represented as a controlled access item;
- required unique constraints exist;
- Authorized Access Detail cannot exist as an orphan;
- required system fields can be populated server-side;
- no custom request/task/signature/approval/PDF table exists;
- no hard-coded assignment-group sys_ids exist;
- no SSN or prohibited PII exists.

The approved implementation plan contains these same core Wave 1 gates.

---

# 61. Wave 2 Data Gate

Before decision logic begins:

- both Employee Center entries create native HRSD cases;
- requested access uses Access Item Reference;
- self-submission cannot be bypassed;
- WPC is available through Analytics;
- Business Justification validation works;
- applicable Access End Date validation works;
- OM requirement behaves correctly;
- required profile values populate;
- only necessary native-table extensions have been introduced;
- unsupported cross-scope changes are documented rather than worked around with duplicate architecture.

---

# 62. Wave 3 Data Gate

Before lifecycle creation:

- case inputs are normalized;
- authorization lookup returns deterministic results;
- covered/uncovered sets are correct;
- New / Reuse / Amendment / Renewal / Exception outputs are correct;
- proposed expiration is deterministic;
- duplicate open case detection works;
- no Authorization Form is prematurely created;
- no Access Detail is prematurely created;
- repeated decision execution does not create duplicates.

---

# 63. Wave 4 Data Gate

Before fulfillment:

- Authorization Form contains no required blank system-managed fields;
- full authorized scope exists;
- Authorization Details are complete;
- Form Version exists;
- employee signature evidence is correct where required;
- supervisor approval evidence is correct;
- supervisor signature evidence is correct;
- final PDF is correctly related;
- supersession relationships are correct;
- Reuse creates no duplicate form/details;
- historical authorization remains intact.

---

# 64. Final Logical Data Model Acceptance Criteria

The logical data model is successfully implemented when:

1. native HRSD Case remains the request parent;
2. native HR Task remains the work record;
3. only four custom ROB business tables exist;
4. access items are configuration-driven;
5. requested access and authorized access are distinct concepts;
6. Authorization Forms remain separate from HR Cases;
7. Authorization Details represent governed authorization scope;
8. New creates one new form and approved scope;
9. Reuse creates no duplicate form/details;
10. Amendment carries covered scope forward plus approved delta;
11. Renewal carries complete approved scope forward;
12. revoked authorization cannot be reactivated;
13. exceptions do not create orphan authorization records;
14. historical signed authorization data remains stable;
15. snapshots preserve authorization-time context;
16. live references are used only where current identity/reference behavior is appropriate;
17. fulfillment completion updates only applicable access details;
18. WPC is modeled as a normal controlled access item with OM dependency;
19. IPA is modeled as a first-class employment type;
20. neither WPC nor IPA introduces unnecessary custom tables;
21. PDF/approval/signature records remain native platform artifacts;
22. idempotency prevents duplicate records;
23. no sensitive PII is introduced;
24. audit users can trace request → authorization → access → approval/signature → fulfillment → document.

---

# 65. Baseline Data-Architecture Statement

The HR Access ROB Authorization product shall use **native HRSD transactional records plus a minimal four-table governed compliance model**.

The native HR Case captures what is being requested.

The ROB Authorization Form captures the approved and signed compliance state.

Authorized Access Details capture the complete access scope governed by that authorization.

ROB Access Item Reference defines what may be requested, how it routes, and how it appears on Form 1768.

ROB Configuration controls product behavior without hard-coding agency-specific operational values.

The data model shall preserve complete historical authorization evidence while preventing duplicate, orphaned, prematurely created, or manually fabricated compliance records.
