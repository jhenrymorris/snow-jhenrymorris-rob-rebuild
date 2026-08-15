# Appendix J — Configuration Catalog
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

This appendix defines the configurable values that govern the HR Access Rules of Behavior Authorization product.

Its purpose is to ensure that agency-operational rules are:

- controlled centrally;
- changeable without code modification where appropriate;
- auditable;
- validated;
- safe for reuse across flows/subflows;
- consistent across environments.

This appendix shall guide:

- Wave 1 configuration-table implementation;
- Wave 2 routing and intake behavior;
- Wave 3 authorization decision logic;
- Wave 5 task due/escalation rules;
- Wave 6 renewal/reminder logic;
- Wave 7 administration/security;
- Wave 8 test configuration.

---

# 2. Configuration Architecture

The product shall use the custom **ROB Configuration** entity for product-level business configuration.

At runtime, the solution shall expect:

> **Exactly one Active ROB Configuration record**

The Wave 3 plan explicitly requires zero or multiple active records to result in Exception Review rather than arbitrary selection.

---

# 3. Configuration Principles

## 3.1 No Hard-Coded Operational Values

Values that may change through business policy or operational administration shall not be embedded directly in:

- Flow Designer logic;
- scripts;
- ACLs;
- notification code;
- report logic;
- Codex-generated constants,

unless the value is a stable technical constant rather than business configuration.

## 3.2 Historical Stability

Changing current configuration shall not alter historical signed authorizations.

## 3.3 Environment Portability

Configuration shall avoid hard-coded environment-specific `sys_id` values in source.

## 3.4 Validation

Invalid configuration shall fail safely through Exception Review or implementation stop conditions.

---

# 4. Configuration Domains

The product configuration is grouped into:

1. Form Governance
2. Renewal / Recertification
3. Assignment and Routing
4. Task Timing and Escalation
5. Notification
6. Access-Item Configuration
7. Environment-Specific Configuration
8. Feature / Future Controls

---

# 5. ROB Configuration Catalog

| ID | Configuration Element | Required | Type | Default / Baseline | Used By |
|---|---|---:|---|---|---|
| CFG-01 | Active | Yes | Boolean | One record = true | All runtime logic |
| CFG-02 | Current Accepted Form Version | Yes | String/reference | Current approved Form 1768 version | Decision / PDF |
| CFG-03 | Annual Recertification Date | Yes | Date rule | Agency-defined | Decision / Renewal |
| CFG-04 | Grace Window Days | Yes | Integer | 90 | Expiration |
| CFG-05 | Renewal Reminder Thresholds | Yes | Controlled values | 90 / 60 / 30 | Renewal |
| CFG-06 | Staffing Assignment Group | Yes | Group reference | Environment-specific | Fulfillment |
| CFG-07 | Analytics Assignment Group | Yes | Group reference | Environment-specific | Fulfillment |
| CFG-08 | Exception / Fallback Group | Yes | Group reference | Environment-specific | Exceptions |
| CFG-09 | OM Task Due Days | Yes | Integer | Business-defined | Fulfillment |
| CFG-10 | Exception Task Due Days | Yes | Integer | Business-defined | Exceptions |
| CFG-11 | OM Escalation Timing | Yes | Integer/duration | Business-defined | Escalation |
| CFG-12 | Renewal Notification Copy Group | No | Group reference | Blank unless approved | Renewal |
| CFG-13 | Lapse Notification Enabled | Yes | Boolean | Yes | Renewal/Lapse |
| CFG-14 | Renewal Copy Enabled | Optional | Boolean | False unless configured | Renewal |
| CFG-15 | Configuration Description / Notes | Recommended | String | — | Administration |

The Wave 1 implementation plan explicitly requires current version, recertification, grace, reminders, groups, OM task timing, exception timing, escalation, and optional renewal-copy settings.

---

# 6. CFG-01 — Active

## Purpose

Identifies the configuration record used by runtime logic.

## Rule

There shall be exactly one Active record.

## Invalid Conditions

- 0 Active records
- >1 Active records

## Runtime Result

**Exception Review**

## Administrative Control

Only ROB Administrator should normally modify this field.

---

# 7. CFG-02 — Current Accepted Form Version

## Purpose

Defines which Rules of Behavior form/template version is currently accepted for new and reusable authorization decisions.

## Used By

- FR-8 obsolete-version detection
- Wave 3 decision engine
- Wave 4 document preparation
- RPT-5 renewal/compliance reporting

## Rule

An authorization using a version no longer accepted shall not qualify for Reuse.

The source requirements require the current accepted form version to be configurable.

## Historical Rule

Updating this configuration shall not rewrite prior Authorization Form values or PDFs.

---

# 8. CFG-03 — Annual Recertification Date

## Purpose

Defines the common agency recertification point used to calculate authorization expiration.

## Requirement

The requirements specify a single agency-wide expiration date aligned to annual recertification.

## Implementation Note

The source does not specify the exact annual month/day value in the extracted requirements.

Therefore, the production value shall be set by the approved business owner rather than inferred.

---

# 9. CFG-04 — Grace Window Days

## Purpose

Determines when a newly signed authorization rolls to the following recertification cycle.

## Baseline

**90 calendar days, configurable**

The requirements explicitly describe a default 90-day configurable grace period.

## Validation

Value must be:

- numeric;
- nonnegative;
- operationally reasonable.

A change shall not alter historical expiration dates already committed to signed Authorization Forms.

---

# 10. CFG-05 — Renewal Reminder Thresholds

## Baseline

- 90 days
- 60 days
- 30 days

The source requires scheduled reminders at these thresholds.

## Design

Thresholds should be maintained as controlled configuration rather than repeated literals across flow logic.

## Runtime

Single daily scheduled process evaluates these thresholds.

---

# 11. CFG-06 — Staffing Assignment Group

## Purpose

Identifies the group responsible for Staffing fulfillment.

## Used By

- Staffing task creation
- assignment notification
- contextual access
- workload reporting

## Environment Rule

Do not embed production group `sys_id` in source.

Use:

- configuration record reference;
- environment-specific setup;
- documented seeding/manual mapping.

---

# 12. CFG-07 — Analytics Assignment Group

Same control model as CFG-06.

Used for:

- Analytics task assignment;
- WPC Analytics work;
- reporting;
- contextual security.

---

# 13. CFG-08 — Exception / Fallback Group

## Purpose

Receives Exception Review work where no more specific owner applies.

Examples:

- missing Supervisor;
- invalid required data;
- unresolved intake corrections.

## Note

Specific exceptions such as missing OM may route to Analytics triage rather than the generic fallback group.

---

# 14. CFG-09 — OM Task Due Days

## Purpose

Controls due date for the WPC Operations Manager ARM role-assignment task.

## Used By

- Wave 5 task generation;
- overdue calculation;
- OM dashboard;
- escalation logic.

## Rule

Value shall be configurable.

No default is specified by the source documents.

Therefore, production value requires business confirmation.

---

# 15. CFG-10 — Exception Task Due Days

## Purpose

Provides consistent due-date assignment for Exception Review tasks.

The Wave 1 plan specifically requires this configuration element.

## Source Status

No numeric default is specified.

---

# 16. CFG-11 — OM Escalation Timing

## Purpose

Determines when incomplete OM action triggers escalation.

The source requires overdue OM work to escalate but does not define a numeric timing threshold.

## Rule

The value shall be configurable and business-approved.

---

# 17. CFG-12 — Renewal Notification Copy Group

## Purpose

Allows optional oversight recipients to receive renewal-related copies without code changes.

The implementation plan includes this as optional configuration.

## Default

Blank / none unless approved.

---

# 18. CFG-13 — Lapse Notification Enabled

## Purpose

Controls whether the standard lapse-notification function is active.

## Baseline

Enabled for MVP because FR-24 requires a lapse notification.

Disabling this in production would therefore require an approved requirements/configuration change.

---

# 19. CFG-14 — Renewal Copy Enabled

## Purpose

Optional control separating existence of a configured copy group from whether copies are actively sent.

## Status

Derived implementation convenience.

Not explicitly mandated by the source requirements.

Use only if the implementation benefits from a separate enable/disable switch.

---

# 20. Assignment Configuration Rules

Group assignment configuration shall:

- reference active groups;
- avoid hard-coded sys_ids;
- fail safely when a required group is missing/inactive;
- be validated during deployment.

The Wave 1 validation gate requires assignment-group pickers to exclude inactive groups.

---

# 21. ROB Access Item Reference Configuration

The Access Item Reference entity is also a configuration catalog.

Each access item controls its own routing and document behavior.

| Configuration Attribute | Purpose |
|---|---|
| Name | User-facing name |
| Stable Code | Business identity |
| Active | Intake eligibility |
| Request Category | Staffing / Analytics |
| Fulfillment Owner | Staffing / Analytics |
| Requires End Date | Conditional validation |
| Requires OM Action | WPC control |
| Provisioning System | External action system |
| Target System | Access destination/report |
| Form 1768 Mapping | PDF field/checkbox |
| Display Order | UI/document order |
| Description | User/admin context |

---

# 22. Initial Access Item Configuration

| Access Item | Category | Fulfillment | OM | Provisioning / Target |
|---|---|---|---:|---|
| FPPS/WTTS | Staffing | Staffing | No | FPPS/WTTS |
| eOPF | Staffing | Staffing | No | eOPF |
| USA Staffing | Staffing | Staffing | No | USA Staffing |
| OAS/DataMart | Analytics | Analytics | No unless later configured | OAS/DataMart |
| Human Capital Reports | Analytics | Analytics | No unless later configured | Reports/Data |
| Workforce Profile Charts | Analytics | Analytics | **Yes** | ARM → OAS-hosted WPC |

The implementation plan requires six initial access-item records and specifically preserves ARM as the WPC provisioning system and OAS as the target.

---

# 23. Workforce Profile Charts Configuration

WPC shall be represented as a normal Access Item Reference with:

```text
Active = true
Category = Analytics
Fulfillment Owner = Analytics
Requires OM Action = true
Provisioning System = ARM
Target System = OAS / Workforce Profile Charts
Form 1768 Mapping = Workforce Profile Charts
```

This preserves the approved explicit WPC field added to the electronic Form 1768.

---

# 24. IPA Configuration

IPA is an Employment Type, not an Access Item.

The electronic Form 1768 shall include an explicit IPA field.

Configuration may govern whether IPA:

- always requires Access End Date;
- follows another approved time-limited rule.

The source requirements identify IPA as an employment type, but do not provide the exact IPA end-date rule.

Therefore this specific business rule shall remain explicit configuration/policy rather than inferred.

---

# 25. Access-End-Date Configuration

The system shall support conditional Access End Date requirements.

At minimum, source requirements define time-limited access such as contractor and auditor/investigator as requiring end-date handling.

The logical rule may evaluate:

```text
Employment Type requires End Date
OR
Access Item requires End Date
```

If either condition is true, the field is required.

---

# 26. Configuration Versus Code Decision Table

| Behavior | Configuration | Code / Logic |
|---|---:|---:|
| Current accepted Form Version | Yes | Reads config |
| Recertification date | Yes | Calculates |
| Grace days | Yes | Calculates |
| Reminder thresholds | Yes | Evaluates |
| Staffing group | Yes | Assigns |
| Analytics group | Yes | Assigns |
| Exception group | Yes | Assigns |
| OM due days | Yes | Calculates due date |
| OM escalation timing | Yes | Evaluates |
| WPC requires OM | Access Item config | Uses flag |
| ARM/OAS mapping | Access Item config | Uses values |
| New/Reuse/Amend/Renew logic | No | Controlled product logic |
| Revoked → New | No | Controlled product logic |
| Expired → Renewal | No | Controlled product logic |
| No PII | No | Mandatory security requirement |

Not every business rule should be configurable.

Core compliance rules should not be turned into toggles merely for flexibility.

---

# 27. Non-Configurable Compliance Controls

The following are mandatory product behavior and shall not be exposed as ordinary configuration switches:

- supervisor approval required;
- supervisor signature required;
- employee signature required for New/Amendment/Renewal;
- no employee signature for qualifying Reuse;
- no fulfillment before required authorization gate;
- no SSN/sensitive PII storage;
- historical signed artifact retention;
- Revoked cannot reactivate;
- signed PDF required for completed new authorization;
- self-submission only in MVP;
- WPC OM requirement while WPC access item is active under current approved requirements.

A requirements change is required to alter these controls.

---

# 28. Configuration Change Audit

Changes to material configuration should be audited where supported.

At minimum:

- Active flag;
- Current Form Version;
- Recertification Date;
- Grace Window;
- Reminder Thresholds;
- assignment groups;
- OM task timing;
- escalation timing.

Audit shall identify:

- old value;
- new value;
- actor;
- timestamp.

---

# 29. Configuration Effective Timing

Configuration changes generally affect **future processing**.

They shall not automatically rewrite:

- existing signed PDF;
- historical Form Version;
- historical expiration;
- routing snapshots already committed to historical authorization details.

---

# 30. Form-Version Change Behavior

When Current Accepted Form Version changes:

- future new drafts use new version;
- existing forms remain historical;
- decision engine evaluates prior forms against new accepted version;
- obsolete prior forms require Renewal when used for a new request.

No historical PDF is regenerated.

---

# 31. Access Item Deactivation

When an Access Item Reference is deactivated:

- it shall no longer be normally selectable for new intake;
- historical Authorized Access Details retain the reference;
- historical reports remain meaningful;
- deactivation does not delete prior authorization history.

If an open case references an item that becomes inactive, the application shall follow a controlled exception rule rather than silently substitute another item.

---

# 32. Configuration Deployment Model

Configuration values divide into three deployment categories.

## 32.1 Seedable Application Configuration

Suitable for SDK/source/seeding where stable:

- configuration schema;
- access-item baseline records;
- standard default reminder thresholds;
- baseline logical flags.

## 32.2 Environment-Specific References

Examples:

- Staffing group;
- Analytics group;
- exception group;
- optional copy group.

These should be set per environment rather than hard-coded.

## 32.3 Business-Approved Values

Examples:

- annual recertification date;
- OM due days;
- escalation timing;
- IPA end-date rule.

These require controlled business confirmation.

---

# 33. Configuration Validation at Deployment

Deployment/validation shall confirm:

- exactly one Active configuration;
- current form version populated;
- recertification value populated;
- grace days valid;
- reminder thresholds valid;
- required groups resolve and are active;
- WPC access item exists and is active;
- WPC provisioning/target values correct;
- access-item mappings complete;
- no hard-coded production sys_ids.

---

# 34. Configuration Validation at Runtime

Runtime processes shall not assume configuration is valid merely because deployment validation once passed.

Critical logic shall defensively validate required configuration.

Example:

```text
if ActiveConfigurationCount != 1
    return Exception Review
```

---

# 35. Reminder-Threshold Validation

Configuration shall prevent or flag nonsensical values.

Examples:

- negative threshold;
- duplicate threshold;
- zero where not intended;
- nonnumeric value.

If thresholds are stored as a collection, ordering should be normalized.

---

# 36. Grace-Window Validation

Grace window shall not:

- be negative;
- exceed a business-approved maximum if one is later established;
- be hard-coded in multiple components.

One centralized calculation shall consume the value.

---

# 37. Group Reference Validation

Required fulfillment groups shall:

- exist;
- be active;
- be appropriate for the environment.

If a required assignment group becomes invalid, the process shall fail safely rather than silently assign to an arbitrary group.

---

# 38. Configuration and Security

Only authorized administrators shall modify configuration.

Recommended:

- ROB Admin = Create/Read/Update;
- Compliance = optional read-only;
- fulfillers = no direct update;
- employees/supervisors = no direct table access.

Configuration fields that directly affect compliance behavior shall be protected and audited.

---

# 39. Configuration and Reporting

Reports may use configuration for:

- current form version context;
- relative renewal logic;
- thresholds.

However, reporting shall not depend on notification-send flags to determine whether a form is due for renewal.

RPT-5 visibility is based on authoritative expiration dates.

---

# 40. Configuration and Testing

The test matrix shall include controlled configurations for:

- normal single active config;
- zero active config;
- multiple active configs;
- changed Form Version;
- 90-day grace;
- alternate grace value;
- 90/60/30 reminder thresholds;
- changed reminder threshold;
- valid/invalid assignment group;
- WPC OM flag;
- missing required group;
- alternate recertification dates.

---

# 41. Synthetic Test Configuration

PDI test configuration shall use synthetic:

- groups;
- users;
- dates;
- access-item records.

No production email distribution lists or sensitive agency data are required for the functional proof.

---

# 42. Configuration Error Tests

At minimum:

| Scenario | Expected |
|---|---|
| Zero active configuration | Exception Review |
| Two active configurations | Exception Review |
| Blank current Form Version | Block authorization |
| Invalid grace value | Prevent/flag config |
| Missing Staffing group | Prevent valid Staffing fulfillment |
| Missing Analytics group | Prevent valid Analytics fulfillment |
| Missing exception group | Deployment/runtime exception |
| WPC missing OM mapping | Exception |
| WPC wrong provisioning target | Test failure |
| Inactive access item requested | Exception |

---

# 43. Configuration Naming Standards

Recommended names should clearly identify business meaning.

Examples:

- `Current Accepted ROB Form Version`
- `Annual Recertification Date`
- `Grace Window Days`
- `Renewal Reminder Thresholds`
- `Staffing Fulfillment Group`
- `Analytics Fulfillment Group`
- `Exception Review Group`
- `OM Task Due Days`
- `OM Escalation Days`
- `Renewal Notification Copy Group`

Do not use ambiguous names such as:

- `Days1`
- `GroupA`
- `CurrentValue`
- `Flag2`

---

# 44. Configuration Documentation

Every configuration element shall be documented with:

- logical name;
- physical field;
- data type;
- required status;
- default;
- allowed values;
- owner;
- runtime consumers;
- environment-specific status;
- change impact;
- validation rule.

This detail belongs in:

`docs/FIELD-MAP.md`

and:

`docs/MANUAL-CONFIGURATION.md`

where appropriate.

---

# 45. Configuration Ownership

Recommended logical ownership:

| Configuration Domain | Owner |
|---|---|
| Form Version | Product / Compliance |
| Recertification Date | Product / Compliance |
| Grace Window | Product / Compliance |
| Reminder Thresholds | Product / Compliance |
| Staffing Group | Staffing / Platform |
| Analytics Group | Analytics / Platform |
| Exception Group | Product / Platform |
| OM Due/Escalation | Analytics / Product |
| Renewal Copy Group | Compliance / Product |
| Access Items | Product / owning HR team |
| Technical environment references | Platform |

---

# 46. Open Configuration Decisions

## CFG-MAP-01 — Annual Recertification Date

The source establishes a common annual recertification date but does not specify the actual date in the extracted requirements.

**Required:** Business-owner value.

---

## CFG-MAP-02 — OM Task Due Days

No numeric default is prescribed.

**Required:** Analytics/Product confirmation.

---

## CFG-MAP-03 — OM Escalation Timing

No numeric default is prescribed.

**Required:** Analytics/Product confirmation.

---

## CFG-MAP-04 — Exception Task Due Days

No numeric default is prescribed.

**Required:** Product/support-owner confirmation.

---

## CFG-MAP-05 — IPA End-Date Rule

IPA is now explicitly represented on Form 1768, but the precise time-limit rule is not fully defined by the source requirements.

**Required:** Product/business confirmation.

---

# 47. Configuration Artifact Classification

## Class A — Source-First

Expected:

- ROB Configuration table definition;
- ROB Access Item Reference table;
- seed reference values where safe;
- validation metadata;
- roles/ACLs where supported.

## Class B — Configure Then Transform

Potential:

- flow actions consuming configuration;
- reports;
- notifications;
- task templates.

## Class C — Manual / Environment

Expected:

- assignment group references;
- production group membership;
- environment-specific business values where not packaged;
- final production recertification value if managed operationally.

The SDK plan defines these artifact classes and requires classification before implementation.

---

# 48. Configuration Change-Control Rule

A material configuration change shall follow:

```text
1. Identify requirement/configuration being changed
2. Determine future vs historical impact
3. Obtain appropriate business approval
4. Update configuration
5. Validate runtime behavior
6. Run affected regression tests
7. Record evidence/change
```

Form Version and recertification changes require particular care because they influence authorization validity.

---

# 49. Prohibited Configuration Practices

The implementation shall not:

- store multiple conflicting Active configs;
- hard-code group sys_ids;
- hard-code the current form version in Flow logic;
- hard-code 90/60/30 separately across several scripts;
- hard-code WPC special routing outside the access-item configuration where configuration is intended;
- delete historical access-item records merely because inactive;
- allow ordinary users to edit compliance configuration;
- silently fall back to arbitrary values when required config is missing.

---

# 50. Configuration Definition of Done

Configuration capability is complete when:

1. ROB Configuration exists;
2. exactly one Active configuration is enforced/validated;
3. Current Accepted Form Version is configurable;
4. Annual Recertification Date is configurable;
5. Grace Window is configurable;
6. reminder thresholds are configurable;
7. Staffing group is configurable;
8. Analytics group is configurable;
9. Exception group is configurable;
10. OM task timing is configurable;
11. OM escalation timing is configurable;
12. optional renewal-copy group is configurable;
13. WPC access item is correctly configured;
14. IPA is represented as an employment type/form field;
15. access-item routing is configuration-driven;
16. environment-specific sys_ids are not hard-coded;
17. inactive access items remain historically retrievable;
18. invalid configuration fails safely;
19. material configuration changes are audited;
20. configuration tests pass.

---

# 51. Baseline Configuration Statement

The HR Access ROB Authorization product shall use a **single active governed configuration plus controlled access-item reference records** to manage business values that may change independently of application code.

Configuration shall control form-version validity, recertification timing, grace behavior, reminder thresholds, routing groups, task timing, escalation, and access-item behavior.

Core compliance requirements—such as required approval/signature, no sensitive PII, historical integrity, and the prohibition against premature fulfillment—shall remain mandatory product rules rather than optional configuration toggles.