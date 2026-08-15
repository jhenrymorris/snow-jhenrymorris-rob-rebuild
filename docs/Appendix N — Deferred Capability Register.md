# Appendix N — Deferred Capability Register
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

This appendix defines capabilities that are:

- intentionally deferred beyond the MVP;
- explicitly out of scope for the current build;
- blocked by a PDI or platform capability;
- preserved for a later phase;
- prohibited from being implemented through substitute architecture.

Its purpose is to maintain traceability without allowing future-scope requirements to expand the MVP.

This appendix shall guide:

- scope governance;
- Codex implementation instructions;
- release planning;
- architecture reviews;
- future backlog development;
- PDI limitation tracking;
- requirements change control.

---

# 2. Deferred-Capability Principles

## 2.1 Deferred Does Not Mean Deleted

A deferred capability remains part of the controlled product history.

It shall retain:

- requirement source;
- rationale;
- dependency;
- future design intent;
- status.

## 2.2 MVP Shall Not Quietly Implement Deferred Features

Codex, Flow Designer, or manual PDI configuration shall not introduce deferred capability merely because it appears technically convenient.

## 2.3 No Substitute Architecture

If a native capability is unavailable, the product shall not create a custom replacement that conflicts with the approved architecture.

## 2.4 Future Design Should Remain Compatible

Where practical, MVP design shall avoid unnecessarily blocking future implementation of an explicitly deferred capability.

---

# 3. Deferred Status Types

| Status | Meaning |
|---|---|
| **Deferred — Future Phase** | Valid future capability intentionally excluded from MVP. |
| **Out of Scope — Integration** | Requires downstream/external integration not included in MVP. |
| **Blocked — PDI** | Cannot be validated in current PDI; requires another environment. |
| **Prohibited — Architecture** | Shall not be implemented because it conflicts with the approved design. |
| **Pending Policy Decision** | Future behavior depends on unresolved policy/business decision. |

---

# 4. Deferred Capability Inventory

| ID | Capability | Status | Target / Dependency |
|---|---|---|---|
| DEF-01 | Delegated Submission | Deferred — Future Phase | Policy approval |
| DEF-02 | Organization-Level / Multi-Subject Submission | Deferred — Future Phase | Delegated model |
| DEF-03 | Requester Signing for Subject | Prohibited | Employee must sign own ROB |
| DEF-04 | Automated ARM Provisioning | Out of Scope — Integration | Future ARM integration |
| DEF-05 | Automated OAS Access Provisioning | Out of Scope — Integration | Future OAS integration |
| DEF-06 | Automated FPPS/WTTS Provisioning | Out of Scope — Integration | Future system integration |
| DEF-07 | Automated eOPF Provisioning | Out of Scope — Integration | Future system integration |
| DEF-08 | Automated USA Staffing Provisioning | Out of Scope — Integration | Future OPM/integration work |
| DEF-09 | Automated External Deprovisioning | Out of Scope — Integration | Future deprovisioning integration |
| DEF-10 | Organization-Level Authorization Record | Prohibited / Future design uses subject-level records | Future org submission design |
| DEF-11 | Custom Request Parent | Prohibited — Architecture | Native HR Case |
| DEF-12 | Custom Fulfillment Task | Prohibited — Architecture | Native HR Task |
| DEF-13 | Custom Signature Engine | Prohibited — Architecture | Native document/signature |
| DEF-14 | Custom Approval Engine | Prohibited — Architecture | Native approval |
| DEF-15 | Custom PDF Repository Table | Prohibited — Architecture | Native attachment/document |
| DEF-16 | Custom Authentication | Prohibited — Architecture | Native ServiceNow authentication |
| DEF-17 | Custom Reminder History Table | Deferred unless native evidence inadequate | Native history first |
| DEF-18 | Advanced SLA / Business-Time Metrics | Deferred — Future Enhancement | SLA definition |
| DEF-19 | AI-Based Materiality Determination | Prohibited for MVP | Deterministic business rule |
| DEF-20 | PDI-Blocked Native Capability | Blocked — PDI if discovered | Agency environment revalidation |

---

# 5. DEF-01 — Delegated Submission

## Source Status

The source requirements contemplate delegated and organization-level submission, but the implementation plan explicitly limits the MVP to self-submission only.

## MVP Rule

```text
Requester = Subject = Logged-in User
```

## Deferred Future Capability

An authorized user may later submit on behalf of another employee.

## Required Future Rules

Any future delegated design shall preserve:

- one authorization per subject;
- subject-specific signature;
- subject's supervisor approval/signature;
- requester cannot sign for subject;
- requester does not automatically gain ongoing access to the subject's signed authorization.

## Dependency

Policy approval for delegated submission.

---

# 6. DEF-02 — Organization-Level / Multi-Subject Submission

## Status

Deferred.

## Future Intent

A designated authorized user may initiate access requests for multiple employees.

## Required Design Principle

One parent operational process may coordinate multiple subjects, but:

> each subject shall have an independent authorization lifecycle.

The source requirement explicitly states that organization-level submission must result in one authorization per subject rather than an aggregate shared authorization.

## Prohibited Future Design

One signed Form 1768 covering multiple subjects.

---

# 7. DEF-03 — Requester Signing for Subject

## Status

**Prohibited**

This is not merely deferred.

A requester shall not sign the subject's Rules of Behavior.

The requirements explicitly require signature routing to the subject where requester and subject differ.

---

# 8. DEF-04 — Automated ARM Provisioning

## Status

Out of Scope — Integration.

## MVP Behavior

For WPC:

- ServiceNow creates a tracked OM task;
- Operations Manager performs ARM role assignment;
- completion evidence is recorded;
- OAS-hosted WPC access is validated operationally.

## Future Capability

ServiceNow could potentially call ARM directly if a supported integration/API is approved.

## Dependency

- ARM interface/API;
- security authorization;
- service account model;
- error handling;
- reconciliation;
- integration governance.

---

# 9. DEF-05 — Automated OAS Provisioning

## Status

Out of Scope — Integration.

OAS is treated as a downstream/target system.

MVP uses notify-and-track work rather than direct provisioning.

---

# 10. DEF-06 — Automated FPPS/WTTS Provisioning

## Status

Out of Scope — Integration.

MVP:

- Staffing receives HR Task;
- external provisioning is performed outside ServiceNow;
- evidence is recorded.

---

# 11. DEF-07 — Automated eOPF Provisioning

Same treatment as DEF-06.

No direct provisioning integration in MVP.

---

# 12. DEF-08 — Automated USA Staffing Provisioning

Same treatment.

MVP remains notify-and-track.

---

# 13. DEF-09 — Automated External Deprovisioning

## Status

Out of Scope — Integration.

## MVP Behavior

When authorization lapses:

- subject is notified;
- authorization becomes Lapsed;
- RPT-8 identifies affected authorizations/access;
- external access-removal work is handled outside ServiceNow.

The source requirements explicitly define RPT-8 as the worklist supporting externally performed deprovisioning.

## Future Capability

Potential automated deprovisioning integration by access system.

---

# 14. DEF-10 — Organization-Level Authorization Record

## Status

Prohibited as a shared compliance record.

A future organization-level request may coordinate subject-level processing, but shall not replace the requirement for one authorization per subject.

---

# 15. DEF-11 — Custom Request Parent

## Status

Prohibited — Architecture.

Use:

`sn_hr_core_case`

The implementation plan explicitly requires native HR Case as the operational parent.

---

# 16. DEF-12 — Custom Fulfillment Task

## Status

Prohibited.

Use:

`sn_hr_core_task`

for:

- Staffing;
- Analytics;
- OM;
- Exception Review.

---

# 17. DEF-13 — Custom Signature Engine

## Status

Prohibited.

Current ServiceNow document/signature capability shall be used if proven available.

If unavailable in PDI:

- mark capability blocked;
- revalidate in agency environment.

Do not implement a custom signature table or typed-name substitute.

---

# 18. DEF-14 — Custom Approval Engine

## Status

Prohibited.

Use native ServiceNow approval.

The product may snapshot evidence but shall not duplicate the approval subsystem.

---

# 19. DEF-15 — Custom PDF Repository Table

## Status

Prohibited.

Signed PDFs shall use native document/attachment capabilities and be associated with the authoritative Authorization Form.

---

# 20. DEF-16 — Custom Authentication

## Status

Prohibited.

Use native ServiceNow identity/authentication.

The Wave 7 plan explicitly prohibits a custom authentication framework.

---

# 21. DEF-17 — Custom Reminder-History Table

## Status

Deferred unless evidence demonstrates native tracking is insufficient.

## MVP Preference

Use:

- Authorization Form reminder timestamps/cycle ID;
- native notification/event history.

The Wave 6 plan explicitly prefers this approach.

---

# 22. DEF-18 — Advanced SLA / Business-Time Metrics

## Status

Deferred Enhancement.

The requirements call for workload aging and average processing time but do not define:

- SLA calendar;
- business hours;
- pause conditions;
- service targets.

MVP may use elapsed duration as documented in Appendix H.

Future SLA capability may add:

- business-time calculation;
- service targets;
- breach alerts;
- performance analytics.

---

# 23. DEF-19 — AI-Based Materiality Determination

## Status

Prohibited for MVP.

The decision engine shall not use generative AI or NLP similarity to determine whether:

- Business Justification changed materially;
- organization/role change is significant.

The product requires deterministic approved rules.

This preserves auditability and prevents production dependency on AI tooling.

---

# 24. DEF-20 — PDI-Blocked Native Capability

## Status

Conditional.

Any capability discovered in Appendix L as:

**BLOCKED-PDI**

shall be entered in this register.

Examples may include:

- unavailable Document Templates feature;
- unavailable ServiceNow Sign feature;
- unsupported cross-scope transformation;
- PDI email limitation;
- plugin licensing limitation.

## Requirement

The item shall record:

- affected requirement;
- PDI evidence;
- business impact;
- whether architecture remains valid;
- agency-environment revalidation plan.

---

# 25. Deferred Submission Data Model

The MVP should preserve future extensibility without implementing delegated behavior.

Potential future attributes may include:

- requester ≠ subject;
- submission authority;
- organization batch identifier;
- parent batch/request reference.

However, unused future fields should **not** be added to the MVP schema merely because they may someday be useful unless they serve an approved current purpose.

Future extensibility shall come primarily through documented architecture, not speculative fields.

---

# 26. Deferred Tests

Future capabilities may be represented in the test catalog as:

**Deferred**

rather than removed.

Examples:

- delegated submitter cannot currently select another subject;
- future delegated signature must route to subject;
- future organization-level request creates subject-level authorizations.

This preserves expected behavior for later implementation.

---

# 27. Deferred Capability Change Process

To move a capability from Deferred to MVP/active scope:

1. confirm business requirement;
2. resolve policy dependency;
3. update PRD scope;
4. update RTM;
5. update logical data model;
6. update state/decision model if affected;
7. update security;
8. update notifications;
9. update tests;
10. update SDK artifact classification;
11. perform capability validation;
12. approve implementation wave.

No deferred feature shall become active solely through a coding change.

---

# 28. PDI Blocked-to-Active Process

If a PDI-blocked capability is later proven in the agency environment:

1. update Appendix L status;
2. update Appendix N;
3. confirm artifact classification;
4. implement through approved architecture;
5. execute environment-specific validation;
6. update test evidence.

---

# 29. Deferred Integration Principles

Future downstream integrations shall preserve the logical separation between:

- authorization;
- provisioning;
- deprovisioning.

A successful external API call shall not itself substitute for a valid signed authorization.

Likewise, a valid authorization does not prove an external system actually provisioned access.

---

# 30. Future Provisioning Integration Model

Conceptually:

```text
Approved Active Authorization
        |
        v
ServiceNow Fulfillment Task
        |
        v
Future Integration Call
        |
        +--> Success
        |      |
        |      v
        |  Evidence / Detail Active
        |
        +--> Failure
               |
               v
         Exception / Retry
```

This remains future design only.

---

# 31. Future Deprovisioning Model

Conceptually:

```text
Authorization Lapsed / Revoked
        |
        v
Affected Access Identified
        |
        v
Future Deprovisioning Integration
        |
        +--> Success
        +--> Failure / Exception
```

MVP stops at notify-and-track / RPT-8.

---

# 32. Deferred Security Requirements

Any future delegated submission shall require new security analysis covering:

- who may submit for another employee;
- how delegated authority is granted;
- whether requester may view ongoing case;
- whether requester may view signed PDF;
- subject privacy;
- audit of delegated submission;
- impersonation/security tests.

Existing self-submission security shall not simply be disabled.

---

# 33. Deferred Reporting Enhancements

Potential future reporting may include:

- delegated submission volume;
- organization batch processing;
- provisioning integration success/failure;
- deprovisioning completion;
- integration latency;
- SLA compliance;
- service-level trends.

These are not required RPT-1 through RPT-8.

---

# 34. Deferred Notification Enhancements

Potential future notifications include:

- delegated requester status;
- organization batch completion;
- integration failure;
- deprovisioning completion;
- SLA breach notifications.

These require separate approval before implementation.

---

# 35. Deferred Capability Ownership

| Capability | Likely Owner |
|---|---|
| Delegated submission | Product / HR Policy |
| Organization submission | Product / HR |
| ARM integration | Analytics / OCIO |
| OAS integration | Analytics / OCIO |
| Staffing system integrations | Staffing / OCIO |
| Automated deprovisioning | Product / Compliance / system owners |
| SLA model | Product / Operations |
| agency-environment blocked capabilities | Platform Team |

---

# 36. Deferred Capability Register Template

Future deferred items shall include:

| Field | Description |
|---|---|
| Deferred ID | Stable identifier |
| Capability | Name |
| Source Requirement | Requirement reference |
| Status | Deferred / Blocked / Out / Prohibited |
| MVP Treatment | Current behavior |
| Future Intent | Intended capability |
| Dependency | Policy/platform/integration |
| Architecture Impact | Expected |
| Security Impact | Expected |
| Data Impact | Expected |
| Test Impact | Expected |
| Target Phase | if known |
| Owner | responsible business area |
| Decision Date | governance |
| Notes | rationale |

---

# 37. Release Validation

Before MVP release, verify:

- no delegated submission is enabled;
- no organization-level aggregate authorization exists;
- no external provisioning integration exists;
- no external deprovisioning integration exists;
- no custom request/task/signature/approval/PDF/authentication framework exists;
- PDI-blocked capabilities are documented;
- no deferred feature is accidentally enabled by UI/configuration;
- deferred requirements remain in traceability.

---

# 38. Codex Guardrail

Codex shall treat the Deferred Capability Register as an explicit **do-not-implement list** unless a later approved prompt/package changes scope.

Codex may:

- preserve extension points;
- add comments/documentation;
- maintain deferred tests.

Codex shall not:

- activate delegated submission;
- add external API provisioning;
- implement custom signatures;
- add speculative custom tables;
- bypass PDI limitations.

---

# 39. Deferred Capability Definition of Done

The Deferred Capability Register is complete when:

1. delegated submission is preserved but excluded from MVP;
2. organization-level submission is preserved but excluded;
3. requester signing for subject is explicitly prohibited;
4. direct provisioning integrations are out of scope;
5. direct deprovisioning is out of scope;
6. native HR Case/Task architecture is protected;
7. native approval/signature architecture is protected;
8. custom authentication is prohibited;
9. PDI-blocked capabilities have a formal tracking path;
10. future dependencies are documented;
11. deferred tests remain traceable;
12. no deferred capability is accidentally implemented in the MVP.

---

# 40. Baseline Deferred-Capability Statement

The HR Access ROB Authorization MVP shall remain intentionally narrow.

The product shall implement self-service authorization, approval/signature, governed Form 1768 records, native HRSD fulfillment, renewal/lapse management, reporting, security, and auditability without expanding into delegated submission, organization-level batch processing, direct downstream provisioning, direct external deprovisioning, or substitute platform architecture.

Deferred capabilities shall remain visible and traceable so future releases can extend the product without redesigning or undermining the MVP's governed authorization model.