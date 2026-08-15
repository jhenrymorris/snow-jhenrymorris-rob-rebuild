# Appendix E — Authorization Decision Matrix
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

This appendix defines the authoritative decision logic used to determine which Rules of Behavior authorization path applies to each HR access request.

The decision engine shall resolve exactly one principal result:

- **New**
- **Reuse**
- **Amendment**
- **Renewal**
- **Exception Review**

The decision shall be based on normalized request data, current ROB configuration, existing authorization history, authorized access coverage, profile/context changes, expiration rules, and exception conditions.

This appendix is intended to directly support:

- Wave 3 decision-engine implementation;
- unit testing;
- ATF decision testing;
- controlled synthetic test data;
- Codex implementation tasks;
- regression testing;
- audit explanation of why a request followed a particular authorization path.

The source requirements require the product to search for an active authorization, compare requested access against authorized scope, require renewal for expired or obsolete forms, and require amendment for uncovered access.

---

# 2. Decision-Engine Principle

The decision engine shall be:

- deterministic;
- idempotent;
- configuration-driven;
- side-effect free with respect to Authorization Form and Access Detail creation.

Wave 3 shall determine the authorization path and persist decision outputs on the HR Case, but it shall **not** create an Authorization Form, Authorized Access Detail, signature task, PDF, approval, fulfillment task, notification, or renewal work.

---

# 3. Decision Inputs

The decision engine shall evaluate the following logical inputs.

## 3.1 Request Inputs

- Subject Person
- Requester
- Requested Access
- Business Justification
- Position Title
- Organization / DIR-DIV
- Employment Type
- Access End Date, where required
- Operations Manager, where required
- Portal Category
- Case identity
- case submission status

## 3.2 Configuration Inputs

- Active ROB Configuration
- Current Accepted Form Version
- Annual Recertification Date
- Grace Window Days
- reminder configuration where relevant
- active Access Item Reference configuration

## 3.3 Existing Authorization Inputs

- whether authorization exists
- authorization status
- Form Version
- Effective Date
- Expiration Date
- Subject Person
- organization snapshot
- position snapshot
- employment-type snapshot
- business-justification snapshot
- current Authorized Access Details
- supersession status
- revocation status
- approved replacement relationship

## 3.4 Duplicate-Request Inputs

- subject
- normalized requested-access set
- open-equivalent case existence

The implementation plan explicitly requires candidate Authorization Forms to be evaluated by subject, status, form version, expiration, organization, position, and active Authorized Access Details.

---

# 4. Decision Outputs

The decision service shall return, at minimum:

| Output | Purpose |
|---|---|
| Authorization Path | New / Reuse / Amendment / Renewal / Exception Review |
| Existing Authorization Status | None / Active / Expired / Lapsed / Superseded / Revoked / Obsolete |
| Related Existing Authorization | Exact applicable form |
| Covered Access | Requested items already authorized |
| Uncovered Access | Requested items not currently authorized |
| Employee Signature Required | Yes / No |
| Supervisor Approval Required | Yes |
| Supervisor Signature Required | Yes |
| Proposed Expiration Date | Calculated outcome |
| Exception Reason | Controlled exception code/text |
| Duplicate Case Reference | Existing case where applicable |
| Material Context Change | Yes / No |
| Renewal Reason | Expired / Lapsed / Obsolete / Annual Renewal Due / Other defined reason |

---

# 5. Decision Precedence

The decision engine shall evaluate conditions in a controlled precedence order.

Recommended logical order:

```text
1. Validate mandatory input/configuration
2. Detect duplicate equivalent open request
3. Identify applicable prior authorization
4. Evaluate prior authorization status
5. Evaluate form version
6. Evaluate expiration / annual recertification condition
7. Evaluate material context changes
8. Compare requested access to authorized access
9. Calculate path
10. Calculate proposed expiration
11. Persist decision outputs only
```

This sequence prevents lower-priority conditions from masking a blocking exception or renewal condition.

---

# 6. Pre-Decision Validation

Before evaluating authorization history, the system shall validate that required request inputs are usable.

## 6.1 Mandatory Validation Conditions

At minimum:

- Subject Person exists
- Requested Access is non-empty
- Business Justification exists
- Supervisor exists
- Employment Type exists
- Access End Date exists when required
- active ROB Configuration count = exactly 1
- requested access items are valid/active where required
- Operations Manager exists where WPC requires it, or Exception Review applies

---

# 7. Invalid Configuration Decision

## Condition

```text
Active ROB Configuration count != 1
```

## Result

**Exception Review**

## Required Outputs

- Authorization Path = Exception Review
- Exception Reason = Invalid ROB Configuration
- no Authorization Form creation
- no Access Detail creation

The Wave 3 plan explicitly requires Exception Review when there are zero or multiple active configuration records.

---

# 8. Missing Supervisor Decision

## Condition

Supervisor cannot be resolved or is invalid.

## Result

**Exception Review**

## Reason

Supervisor review, approval, and signature are mandatory before fulfillment.

The source exception requirement directs missing or inaccurate supervisor data to correction before approval.

---

# 9. Missing Required Access End Date

## Condition

Employment/access type is time-limited and Access End Date is blank.

Examples include:

- Contractor
- Auditor/Investigator
- IPA if configured as time-limited
- another access item configured to require an end date

## Result

**Exception Review** or submission blocking before decision, depending on final intake implementation.

If the case reaches the decision engine with the value missing, the engine shall return Exception Review.

The requirements explicitly require correction before approval for time-limited access without an end date.

---

# 10. Missing Operations Manager

## Condition

Requested Access includes Workforce Profile Charts and Operations Manager cannot be resolved.

## Result

**Exception Review**

The WPC request shall not bypass the OM dependency.

The source exception requirement routes missing OM information to Analytics triage/manual resolution.

---

# 11. Duplicate Open Request

## Condition

An equivalent open case exists based on:

```text
Subject Person
+
Normalized Requested Access Set
```

with any additional business criteria required to avoid false positives.

## Result

**Exception Review**

## Outputs

- Exception Reason = Duplicate Open Request
- Duplicate Case Reference = existing case
- no new authorization artifacts

The implementation plan requires duplicate detection using subject plus normalized requested-access set and requires the existing case reference to be returned.

---

# 12. Candidate Authorization Selection

The decision engine shall evaluate applicable Authorization Forms for the Subject Person.

It shall not simply select the most recently updated record.

Selection logic shall consider:

- status
- current accepted Form Version
- effective/expiration state
- supersession
- revocation
- authorized access
- contextual validity

Historical records remain relevant for audit but may not qualify for Reuse.

---

# 13. No Prior Authorization

## Condition

No applicable prior Authorization Form exists.

## Result

**New**

## Outputs

- Existing Authorization Status = None
- Employee Signature Required = Yes
- Supervisor Approval Required = Yes
- Supervisor Signature Required = Yes
- Covered Access = empty
- Uncovered Access = all requested items

---

# 14. Revoked Prior Authorization

## Condition

Most applicable prior authorization is Revoked and no later valid Active authorization exists.

## Result

**New**

A revoked form shall never be reactivated or reused.

The approved state/data model explicitly treats Revoked prior form as the New path.

---

# 15. Superseded Prior Authorization

A Superseded form shall not be eligible for Reuse.

The engine shall determine whether a newer applicable Active replacement exists.

## If Active Replacement Exists

Evaluate the replacement instead.

## If No Active Replacement Exists

The request requires a new qualifying authorization path based on the remaining conditions.

The system shall not reuse the superseded record merely because its prior scope covered the requested access.

---

# 16. Obsolete Form Version

## Condition

Existing authorization uses a Form Version that does not match the configured current accepted version and the version is no longer accepted.

## Result

**Renewal**

## Outputs

- Renewal Reason = Obsolete Form Version
- Employee Signature Required = Yes
- Supervisor Approval/Signature Required = Yes

The requirements explicitly require a new or renewed form when the existing version is no longer accepted.

---

# 17. Expired Authorization

## Condition

Authorization expiration has passed.

## Result

**Renewal**

An expired historical authorization shall not be reused.

The source requirements require renewal before fulfillment where a form is expired or due for annual renewal.

---

# 18. Lapsed Authorization

## Condition

Authorization has expired and has no approved active replacement.

## Result

**Renewal**

The historical Lapsed form remains intact.

The new request creates a new authorization lifecycle only after Wave 4 processes the Renewal decision.

---

# 19. Annual Renewal Due

## Condition

Existing authorization is approaching or at the approved annual recertification point such that a new authorization is required.

## Result

**Renewal**

Even if access scope is unchanged.

The source decision table states that annual renewal generates a renewal form even where access is unchanged.

---

# 20. Grace-Window Treatment

A form signed within the configured grace window before the annual recertification date shall be assigned the following cycle's recertification date.

This affects the authorization's calculated expiration but does **not by itself create a separate decision path**.

## Example

Configured:

- Recertification Date = October 31
- Grace Window = 90 days

If a qualifying new/renewal/amendment form becomes effective within that configured window before October 31, the proposed expiration is the following cycle's October 31 rather than the imminent date.

The source requirement specifies the default configurable 90-day rule.

---

# 21. Material Context Change

An existing Active authorization may not automatically qualify for Reuse solely because requested access is covered.

The engine shall evaluate material authorization context.

At minimum:

- Organization / DIR-DIV
- Position
- Role context where represented
- Business Justification
- employment/access context where material

The source requirements require review and Amendment where organization, position, role, or justification has materially changed.

---

# 22. Material Organization Change

## Condition

Existing Active authorization exists, but current organization/DIR-DIV materially differs from the authorization snapshot.

## Result

**Amendment**, where approved business rules determine the change affects the authorization context.

The decision shall not silently rewrite the historical snapshot.

---

# 23. Material Position/Role Change

## Condition

Position or role context materially differs from the Active authorization.

## Result

**Amendment**, where the change affects current business need or authorization context.

---

# 24. Material Business-Justification Change

## Condition

Current request's Business Justification materially differs from the active authorization context.

## Result

**Amendment**

This prevents reuse of an authorization whose approved rationale no longer reflects the access need.

---

# 25. Access Coverage Comparison

If an Active/current/context-valid authorization exists, the engine shall compare:

```text
Requested Access Set
vs.
Active Authorized Access Set
```

It shall calculate:

```text
Covered Access =
Requested ∩ Authorized

Uncovered Access =
Requested - Authorized
```

The engine shall return these sets without creating Access Detail records.

---

# 26. Full Coverage

## Condition

```text
Uncovered Access = empty
```

and:

- authorization is Active;
- Form Version is accepted;
- not expired/lapsed;
- no material context change requiring Amendment.

## Result

**Reuse**

---

# 27. Partial Coverage

## Condition

```text
Covered Access != empty
AND
Uncovered Access != empty
```

## Result

**Amendment**

The uncovered portion constitutes the delta.

However, the future Amendment Authorization Form shall contain:

```text
carried-forward active approved scope
+
approved uncovered delta
```

not merely the delta.

The requirements explicitly require partial coverage to trigger amendment for the uncovered portion.

---

# 28. No Requested Access Covered

## Condition

An Active/current/context-valid form exists but:

```text
Covered Access = empty
```

## Result

**Amendment**

because the employee already has an active authorization context, but the requested access is entirely new relative to that authorization.

The new amended authorization shall contain the appropriate complete approved scope after lifecycle processing.

---

# 29. New Versus Amendment Principle

The existence of a valid Active authorization determines whether new access is treated as:

- **Amendment** to the current authorization; or
- **New** where no valid active authorization exists.

Therefore:

```text
Valid Active Form + New Access = Amendment
No Valid Active Form + Requested Access = New or Renewal depending on history/status
```

---

# 30. Renewal Takes Precedence Over Coverage

If the prior authorization is:

- expired;
- lapsed;
- obsolete;
- due for renewal;

the decision shall be **Renewal**, even when the requested access is fully covered by the old scope.

Access coverage does not override renewal requirements.

---

# 31. Revocation Takes Precedence Over Coverage

A revoked form shall not qualify for Reuse or Amendment as the current valid authorization.

Even if its historical access covered the requested items:

**Result = New**

---

# 32. Exception Takes Precedence Over Normal Authorization Paths

A blocking exception shall prevent New/Reuse/Amendment/Renewal from proceeding until corrected.

For example:

```text
Active authorization + full coverage
BUT supervisor missing
=
Exception Review
```

not Reuse.

---

# 33. Decision Matrix — Primary Form Status

| Existing Form Status | Accepted Version? | Expired? | Coverage | Material Change? | Result |
|---|---:|---:|---|---:|---|
| None | — | — | — | — | New |
| Active | Yes | No | Full | No | Reuse |
| Active | Yes | No | Partial | No | Amendment |
| Active | Yes | No | None | No | Amendment |
| Active | Yes | No | Full | Yes | Amendment |
| Active | Yes | No | Partial | Yes | Amendment |
| Active | No | Any | Any | Any | Renewal |
| Expired | Any | Yes | Any | Any | Renewal |
| Lapsed | Any | Yes | Any | Any | Renewal |
| Obsolete Version | No | Any | Any | Any | Renewal |
| Revoked | Any | Any | Any | Any | New |
| Superseded | Any | Any | Any | Any | Evaluate active replacement; never Reuse superseded record |

---

# 34. Decision Matrix — Exception Precedence

| Condition | Otherwise Possible Path | Final Result |
|---|---|---|
| Zero active config | Any | Exception Review |
| Multiple active config | Any | Exception Review |
| Missing subject | Any | Exception Review |
| Missing requested access | Any | Exception Review / intake reject |
| Missing business justification | Any | Exception Review / intake reject |
| Missing supervisor | Any | Exception Review |
| Missing required Access End Date | Any | Exception Review |
| WPC + missing OM | Any | Exception Review |
| Duplicate equivalent open case | Any | Exception Review |

---

# 35. Decision Matrix — Full Coverage

| Form | Current Version | Current Context | Current Date | Requested Access | Result |
|---|---|---|---|---|---|
| Active | Yes | Same | Valid | Fully covered | Reuse |
| Active | Yes | Changed materially | Valid | Fully covered | Amendment |
| Active | No | Any | Any | Fully covered | Renewal |
| Expired | Any | Any | Expired | Fully covered | Renewal |
| Revoked | Any | Any | Any | Fully covered | New |

---

# 36. Decision Matrix — Added Access

| Form | Current Version | Existing Scope | Requested Scope | Result |
|---|---|---|---|---|
| Active | Yes | FPPS | FPPS + eOPF | Amendment |
| Active | Yes | OAS/DataMart | WPC | Amendment |
| Active | Yes | Human Capital Reports | Human Capital Reports + WPC | Amendment |
| None | — | — | WPC | New |
| Expired | Any | prior scope exists | prior + new access | Renewal |
| Revoked | Any | prior scope exists | any requested scope | New |

---

# 37. WPC Decision Rules

Workforce Profile Charts shall be treated as a first-class Access Item Reference.

If WPC is requested:

- primary category = Analytics;
- Requires OM Action = true;
- Operations Manager must be resolvable before normal processing proceeds;
- access coverage is evaluated like any other access item;
- the presence of WPC does not create a separate authorization path.

Examples:

### No prior form + WPC

Result = New.

### Active current form already includes WPC

Result = Reuse if no other amendment/renewal condition exists.

### Active current form does not include WPC

Result = Amendment.

### Expired form includes WPC

Result = Renewal.

---

# 38. IPA Decision Rules

IPA is a first-class Employment Type.

IPA status itself does not create a separate authorization path.

It may affect:

- required Access End Date;
- expiration calculation;
- printed Form 1768 field mapping;
- material context evaluation.

Exact IPA end-date business rules shall be configuration/business-rule driven as approved.

---

# 39. Time-Limited Access Expiration Rule

After authorization path is determined, proposed expiration shall be calculated.

Logical formula:

```text
StandardExpiration =
    configured annual recertification result
    after grace-window treatment

FinalExpiration =
    earlier of:
      StandardExpiration
      Applicable Access End Date
```

where a time-limited end date applies.

The source data requirements explicitly state that expiration may use the agency recertification date or a shorter access end date.

---

# 40. Expiration Calculation Decision Table

| Signature/Effective Timing | Grace Window? | Time-Limited End Date | Proposed Expiration |
|---|---:|---|---|
| Outside grace window | No | None | Upcoming agency recertification date |
| Inside grace window | Yes | None | Following cycle recertification date |
| Outside grace window | No | Earlier than recertification | Earlier end date |
| Inside grace window | Yes | Earlier than following-cycle date | Earlier end date |
| Any | Any | Invalid/missing when required | Exception Review |

---

# 41. Proposed Expiration Is Not Activation

The Wave 3 decision engine calculates a **proposed expiration date**.

The final governed Authorization Form expiration is committed during the authorization lifecycle after approved data/signature processing.

The decision calculation shall not imply that an authorization is already Active.

---

# 42. Reuse Signature Decision

For Reuse:

```text
EmployeeSignatureRequired = false
SupervisorApprovalRequired = true
SupervisorSignatureRequired = true
```

The original employee signature and signed PDF remain unchanged.

The SDK plan explicitly requires this.

---

# 43. New Signature Decision

For New:

```text
EmployeeSignatureRequired = true
SupervisorApprovalRequired = true
SupervisorSignatureRequired = true
```

---

# 44. Amendment Signature Decision

For Amendment:

```text
EmployeeSignatureRequired = true
SupervisorApprovalRequired = true
SupervisorSignatureRequired = true
```

---

# 45. Renewal Signature Decision

For Renewal:

```text
EmployeeSignatureRequired = true
SupervisorApprovalRequired = true
SupervisorSignatureRequired = true
```

---

# 46. Exception Signature Decision

For Exception Review:

```text
EmployeeSignatureRequired = false
SupervisorApprovalRequired = false
SupervisorSignatureRequired = false
```

until the exception is corrected and normal decision processing resumes.

---

# 47. Material-Change Comparison Rules

Material comparison should use normalized values.

Examples:

### Organization

Compare stable organization identity where available, not only display text.

### Position

Compare controlled position/title context according to the approved field model.

### Business Justification

The source requirements establish that material change requires review, but do not prescribe a text-similarity algorithm.

Therefore:

**The implementation shall not invent AI/NLP similarity scoring to determine whether free-text justification is materially different.**

A deterministic business rule shall be used.

---

# 48. Business-Justification Change — Open Implementation Rule

The source material states that a material business-justification change may require Amendment, but does not define how “material” is computed.

Therefore:

### DEC-MAP-01 — Material Justification Change

A controlled rule must be chosen before implementation.

Potential supported approaches include:

- any changed approved justification triggers Amendment;
- explicit fulfiller/business-owner review flag;
- another deterministic approved rule.

Codex shall not infer semantic similarity or decide materiality using generative AI.

---

# 49. Organization/Position Change — Open Implementation Rule

The source requirements require review for material organization/position/role change but do not fully define all threshold conditions.

### DEC-MAP-02 — Material Profile Change

The business owner shall confirm whether:

- any organization change triggers Amendment;
- any position-title change triggers Amendment;
- only changes to a defined role/business context trigger Amendment.

Until resolved, Wave 3 tests shall preserve the requirement without inventing a policy.

---

# 50. Multiple Existing Authorization Forms

The product may encounter multiple historical forms for one subject.

The decision engine shall not assume that the newest updated record is the valid governing form.

It shall evaluate:

- current status;
- supersession;
- revocation;
- version;
- expiration;
- active-replacement relationships.

### Invalid Condition

If the model indicates multiple simultaneously Active governing authorizations in a way that violates the approved lifecycle, the system shall return:

**Exception Review**

rather than choose arbitrarily.

---

# 51. Active Form With Active Replacement Conflict

If both:

- prior form appears Active;
- replacement form also appears Active;

and the relationship cannot be deterministically resolved from valid supersession data:

**Exception Review**

This is a data-integrity condition.

---

# 52. Access Item Validity

Requested access shall be evaluated against controlled Access Item Reference records.

## Invalid/Inactive Item

If a request contains an access reference that is no longer valid for normal intake:

- do not silently map it to another item;
- route to Exception Review where the case has already been submitted.

Historical Authorization Details may continue to reference inactive catalog items for audit purposes.

---

# 53. Routing Is Not Authorization Path

The authorization decision and fulfillment routing are separate outputs.

Examples:

### New + FPPS

Authorization Path = New
Future Fulfillment = Staffing

### Amendment + Human Capital Reports + WPC

Authorization Path = Amendment
Future Fulfillment = Analytics + OM dependency

### Renewal + mixed access

Authorization Path = Renewal
Future Fulfillment = Staffing + Analytics + possibly OM

The decision engine may derive routing indicators but shall not create fulfillment tasks.

---

# 54. Mixed Request Decision

A mixed Staffing + Analytics request still receives exactly one principal authorization path.

Example:

Existing form:

- FPPS
- Human Capital Reports

Requested:

- FPPS
- Human Capital Reports
- WPC

Coverage:

- FPPS = covered
- Human Capital Reports = covered
- WPC = uncovered

Result:

**Amendment**

Future fulfillment after authorization may include:

- Analytics task;
- OM WPC task;
- Staffing task only if Staffing work is required by the current request/fulfillment design.

The authorization path is not split by team.

---

# 55. Decision Examples

## Example 1 — First-Time Federal Employee

Prior Authorization: None
Requested: USA Staffing
Supervisor: Valid
Business Justification: Present
Form Config: Valid

**Result:** New

---

## Example 2 — Fully Covered Reuse

Prior Authorization: Active
Version: Current
Scope: FPPS, eOPF
Requested: FPPS
Context: unchanged
Expiration: valid

**Result:** Reuse

Covered = FPPS
Uncovered = none

---

## Example 3 — Partial Coverage

Prior Authorization: Active
Version: Current
Scope: FPPS
Requested: FPPS + USA Staffing

**Result:** Amendment

Covered = FPPS
Uncovered = USA Staffing

---

## Example 4 — Entirely New Access on Active Form

Prior Authorization: Active
Scope: FPPS
Requested: Human Capital Reports

**Result:** Amendment

Covered = none
Uncovered = Human Capital Reports

---

## Example 5 — Expired, Same Scope

Prior Authorization: Expired
Scope: Human Capital Reports
Requested: Human Capital Reports

**Result:** Renewal

Coverage does not override expiration.

---

## Example 6 — Obsolete Version

Prior Authorization: Active by date
Version: 1.0
Current Accepted Version: 2.0
Requested scope fully covered

**Result:** Renewal

---

## Example 7 — Revoked Prior Form

Prior Authorization: Revoked
Requested: FPPS

**Result:** New

---

## Example 8 — WPC Added

Prior Authorization: Active
Scope: Human Capital Reports
Requested: Human Capital Reports + WPC
OM: Resolved

**Result:** Amendment

---

## Example 9 — WPC With Missing OM

Prior Authorization: Active
Requested: WPC
OM: Missing

**Result:** Exception Review

---

## Example 10 — Changed Business Context

Prior Authorization: Active/current
Scope: USA Staffing
Requested: USA Staffing
Organization materially changed

**Result:** Amendment, subject to final material-change rule.

---

## Example 11 — Duplicate Open Request

Existing open case has same subject and normalized requested-access set.

**Result:** Exception Review

Duplicate case reference returned.

---

## Example 12 — Contractor Missing End Date

Employment Type: Contractor
Access End Date: blank

**Result:** Exception Review

---

# 56. Comprehensive Decision Matrix

| # | Blocking Exception? | Prior Form | Version | Time Status | Context | Coverage | Result |
|---:|---|---|---|---|---|---|---|
| 1 | Yes | Any | Any | Any | Any | Any | Exception Review |
| 2 | No | None | — | — | — | — | New |
| 3 | No | Revoked | Any | Any | Any | Any | New |
| 4 | No | Active | Current | Valid | Same | Full | Reuse |
| 5 | No | Active | Current | Valid | Same | Partial | Amendment |
| 6 | No | Active | Current | Valid | Same | None | Amendment |
| 7 | No | Active | Current | Valid | Material change | Full | Amendment |
| 8 | No | Active | Current | Valid | Material change | Partial | Amendment |
| 9 | No | Active | Current | Valid | Material change | None | Amendment |
| 10 | No | Active | Obsolete | Any | Any | Any | Renewal |
| 11 | No | Expired | Any | Expired | Any | Any | Renewal |
| 12 | No | Lapsed | Any | Expired | Any | Any | Renewal |
| 13 | No | Obsolete Version | Obsolete | Any | Any | Any | Renewal |
| 14 | No | Renewal Due | Current | Renewal due | Any | Any | Renewal |
| 15 | No | Superseded | Any | Any | Any | Any | Evaluate replacement; do not Reuse superseded |
| 16 | No | conflicting multiple active forms | Any | Any | Any | Any | Exception Review |

---

# 57. Decision Precedence Table

When multiple conditions are true, apply this precedence:

| Priority | Condition | Result |
|---:|---|---|
| 1 | Invalid/missing required configuration or request data | Exception Review |
| 2 | Duplicate equivalent open request | Exception Review |
| 3 | Conflicting authorization data integrity | Exception Review |
| 4 | Prior authorization Revoked | New |
| 5 | No prior qualifying authorization | New |
| 6 | Obsolete Form Version | Renewal |
| 7 | Expired / Lapsed / annual renewal due | Renewal |
| 8 | Material context change | Amendment |
| 9 | Partial/no access coverage on valid active form | Amendment |
| 10 | Full coverage on valid active/context-valid form | Reuse |

This ordering ensures that Reuse is the most restrictive normal-path outcome: it is permitted only after every disqualifying condition has been ruled out.

---

# 58. Reuse Eligibility Formula

Conceptually:

```text
ReuseEligible =
    ExactlyOneValidConfiguration
    AND RequiredInputsComplete
    AND NoDuplicateOpenCase
    AND ExistingAuthorizationStatus == Active
    AND ExistingFormVersionAccepted == true
    AND AuthorizationNotExpired
    AND AuthorizationNotLapsed
    AND AuthorizationNotRevoked
    AND AuthorizationNotSuperseded
    AND NoMaterialContextChange
    AND RequestedAccessFullyCovered
```

Only when all applicable conditions are true shall the engine return Reuse.

---

# 59. Amendment Eligibility Formula

Conceptually:

```text
AmendmentRequired =
    ValidActiveAuthorizationExists
    AND CurrentFormVersionAccepted
    AND NotExpired
    AND
    (
        RequestedAccessNotFullyCovered
        OR MaterialContextChange
    )
```

---

# 60. Renewal Eligibility Formula

Conceptually:

```text
RenewalRequired =
    PriorAuthorizationExists
    AND
    (
        FormVersionObsolete
        OR AuthorizationExpired
        OR AuthorizationLapsed
        OR AnnualRenewalDue
    )
```

Revoked is intentionally excluded because Revoked produces New.

---

# 61. New Eligibility Formula

Conceptually:

```text
NewRequired =
    NoApplicablePriorAuthorization
    OR PriorApplicableAuthorizationRevoked
```

subject to no blocking exception.

---

# 62. Exception Formula

Conceptually:

```text
ExceptionRequired =
    InvalidConfiguration
    OR MissingMandatoryInput
    OR MissingSupervisor
    OR MissingRequiredEndDate
    OR MissingRequiredOM
    OR DuplicateEquivalentOpenCase
    OR ConflictingActiveAuthorizationData
    OR InvalidRequestedAccessReference
```

---

# 63. Decision Idempotency

Given the same authoritative input state, repeated evaluation shall return the same decision.

The decision engine shall not change outcome because:

- it was called twice;
- a flow retried;
- a user refreshed;
- the same event was replayed.

No persistent downstream side effects shall occur from repeated decision evaluation.

---

# 64. Decision Persistence

After successful evaluation, the HR Case shall persist the decision outputs required by later waves.

At minimum:

- Authorization Path
- Existing Authorization Status
- Related Existing Authorization
- Covered Access
- Uncovered Access
- Employee Signature Required
- Supervisor Approval Required
- Supervisor Signature Required
- Proposed Expiration Date
- Exception Reason
- Duplicate Case Reference where applicable

This prevents Wave 4 from independently recomputing decision logic with potentially different results.

---

# 65. Recalculation Rule

Decision outputs may be recalculated only when an input that materially affects the decision changes before downstream authorization processing is locked.

Examples:

- corrected supervisor;
- corrected Access End Date;
- corrected OM;
- corrected requested access;
- corrected profile data.

Once a new Authorization Form has entered signature, the decision context shall not be silently recalculated in a way that changes the signed artifact.

A material change at that point requires controlled cancellation/restart or another approved lifecycle response.

---

# 66. Decision Lock Point

Recommended logical lock point:

**authorization draft enters employee signature**

At that point:

- requested access;
- material authorization snapshots;
- Form Version;
- Business Justification;
- decision path;
- full draft scope

shall be treated as governed inputs for that authorization attempt.

Changes requiring different authorization content should not mutate the document mid-signature.

---

# 67. Decision Explainability

The system should retain enough structured output to explain:

> Why did this request require New / Reuse / Amendment / Renewal / Exception Review?

Recommended explanation attributes include:

- prior status
- prior Form Version
- current accepted Form Version
- expiration status
- covered count/items
- uncovered count/items
- material-change indicator
- exception code
- renewal reason

This is preferable to relying only on free-text Flow execution logs.

---

# 68. Decision Reason Codes

Recommended controlled reason codes:

### New

- `NEW_NO_PRIOR_FORM`
- `NEW_PRIOR_REVOKED`

### Reuse

- `REUSE_FULLY_COVERED`

### Amendment

- `AMD_PARTIAL_COVERAGE`
- `AMD_NO_COVERAGE_ACTIVE_FORM`
- `AMD_ORG_CHANGE`
- `AMD_POSITION_ROLE_CHANGE`
- `AMD_JUSTIFICATION_CHANGE`
- `AMD_MULTIPLE_MATERIAL_CHANGES`

### Renewal

- `REN_EXPIRED`
- `REN_LAPSED`
- `REN_OBSOLETE_VERSION`
- `REN_ANNUAL_RECERTIFICATION`

### Exception

- `EX_INVALID_CONFIG`
- `EX_MISSING_SUPERVISOR`
- `EX_MISSING_END_DATE`
- `EX_MISSING_OM`
- `EX_DUPLICATE_OPEN_CASE`
- `EX_INVALID_ACCESS_ITEM`
- `EX_CONFLICTING_ACTIVE_FORMS`
- `EX_MISSING_REQUIRED_DATA`

Exact physical implementation may use choices/constants, but the conceptual reason structure should be preserved.

---

# 69. Decision Reason Versus Exception Reason

These shall not be conflated.

**Decision Reason** explains a valid normal path.

Example:

`AMD_PARTIAL_COVERAGE`

**Exception Reason** explains why normal processing cannot proceed.

Example:

`EX_MISSING_SUPERVISOR`

---

# 70. Decision-Engine Prohibited Behaviors

The decision engine shall not:

- create Authorization Forms;
- create Authorized Access Details;
- create HR fulfillment tasks;
- create signature tasks;
- create approvals;
- generate PDFs;
- send renewal reminders;
- change historical forms;
- overwrite signed PDF;
- reactivate Revoked/Superseded/Lapsed forms;
- hard-code recertification dates;
- hard-code current Form Version;
- select arbitrary active configuration when more than one exists;
- infer materiality using AI/NLP;
- silently remap invalid access references;
- make direct downstream provisioning calls.

---

# 71. Codex Implementation Guardrails

Codex shall implement the decision logic from this appendix as controlled deterministic logic.

Codex shall not:

- simplify New/Reuse/Amendment/Renewal into only “form exists/form doesn't exist”;
- determine Reuse before checking version/expiration/context;
- treat Revoked as Renewal;
- treat Expired as Reuse;
- treat partial coverage as New;
- create child records during decision evaluation;
- encode WPC as a separate authorization path;
- encode IPA as a separate authorization path;
- duplicate expiration logic in several flows;
- use generative-AI judgment to classify Business Justification changes.

---

# 72. Wave 3 Required Test Data

Synthetic prior authorization records shall cover at least:

1. no form
2. active/current/full coverage
3. active/current/partial coverage
4. active/current/no coverage
5. active/material organization change
6. active/material position change
7. active/material justification change
8. expired
9. lapsed
10. obsolete version
11. revoked
12. superseded with valid replacement
13. conflicting active forms
14. annual renewal due
15. grace-window case
16. time-limited access end date
17. missing supervisor
18. missing end date
19. WPC missing OM
20. duplicate open case
21. invalid configuration — zero active
22. invalid configuration — multiple active

---

# 73. Minimum Wave 3 ATF / Unit Scenarios

| Test | Expected Path |
|---|---|
| No prior form | New |
| Active/current/full coverage | Reuse |
| Active/current/partial coverage | Amendment |
| Active/current/no coverage | Amendment |
| Active + material org change | Amendment |
| Active + material position/role change | Amendment |
| Active + material justification change | Amendment |
| Expired | Renewal |
| Lapsed | Renewal |
| Obsolete version | Renewal |
| Revoked | New |
| Superseded with valid replacement | Evaluate replacement |
| Invalid config: zero active | Exception Review |
| Invalid config: >1 active | Exception Review |
| Missing supervisor | Exception Review |
| Missing required end date | Exception Review |
| WPC missing OM | Exception Review |
| Duplicate equivalent case | Exception Review |
| Grace window | Correct proposed expiration |
| Earlier access end date | Earlier expiration |
| Repeated run | Same output, no side effects |

---

# 74. Negative Decision Tests

Tests shall prove that the following incorrect outcomes do not occur:

- expired + full coverage → Reuse
- revoked + full coverage → Reuse
- obsolete + full coverage → Reuse
- material change + full coverage → Reuse
- partial coverage → Reuse
- active form + no coverage → New
- missing supervisor → New/Reuse/Amendment/Renewal
- multiple active config → arbitrary normal path
- WPC missing OM → normal path
- duplicate open request → duplicate lifecycle
- decision rerun → new Authorization Form
- decision rerun → new Access Detail
- decision rerun → fulfillment task

---

# 75. Decision-Test Evidence

Each decision test shall record:

- test ID
- subject
- prior authorization state
- prior Form Version
- current accepted version
- expiration date
- organization/position context
- requested access
- existing access
- covered output
- uncovered output
- decision path
- reason code
- proposed expiration
- expected result
- actual result
- Pass / Fail / Blocked
- evidence reference

---

# 76. Relationship to Appendix D

Appendix E determines:

**Which path applies.**

Appendix D determines:

**Which state transitions may then occur.**

Example:

```text
Appendix E:
Path = Amendment

Appendix D:
Draft
→ Pending Employee Signature
→ Pending Supervisor Approval & Signature
→ Active
→ prior form Superseded
```

The decision engine shall not bypass the state model.

---

# 77. Relationship to Appendix C

Appendix E determines which records Wave 4 is permitted to create.

| Decision | Authorization Form Creation | Access Detail Creation |
|---|---:|---:|
| New | Yes | Requested approved scope |
| Reuse | No | No |
| Amendment | Yes | Complete carried-forward + delta scope |
| Renewal | Yes | Complete approved scope |
| Exception Review | No until corrected | No |

This preserves the logical data model defined in Appendix C.

---

# 78. Open Decision Rules

The following remain business-owner decisions because the source requirements do not define them precisely enough for implementation without inventing policy.

## DEC-MAP-01 — Material Business-Justification Change

Define the deterministic rule that determines when changed justification requires Amendment.

**Recommended product-safe default:** any substantive modification to the governed Business Justification after an active authorization exists requires Amendment.

A more nuanced rule requires explicit business-owner definition.

---

## DEC-MAP-02 — Material Organization / Position / Role Change

Define which profile changes automatically require Amendment versus review.

The source requirement establishes the need for review but does not fully prescribe threshold rules.

---

## DEC-MAP-03 — Annual Renewal-Due Trigger Point

The source requirements define annual recertification and 90/60/30 reminders, but implementation should define precisely when a user-initiated request is classified as Renewal rather than Reuse as the recertification date approaches.

This should align with the approved renewal operating model and grace-window rule.

---

## DEC-MAP-04 — Multiple Active Authorization Integrity Rule

Confirm whether multiple simultaneous Active forms for one subject are always invalid or whether a future approved model could allow them.

**Recommended MVP default:** one current governing Active Authorization Form per subject; conflicting Active forms produce Exception Review.

---

# 79. Recommended MVP Decision Defaults

Unless the business owner approves a different policy, the safest MVP interpretation is:

1. one current governing Active Authorization Form per subject;
2. any active-form scope expansion = Amendment;
3. any material governed-context change = Amendment;
4. expired/lapsed/obsolete = Renewal;
5. revoked = New;
6. fully covered/current/context-valid = Reuse;
7. any missing required prerequisite = Exception Review;
8. WPC missing OM = Exception Review;
9. duplicate equivalent open request = Exception Review;
10. decision logic never creates compliance/fulfillment artifacts.

---

# 80. Decision Matrix Definition of Done

The authorization decision capability is complete when:

1. all inputs are normalized;
2. exactly one active configuration is required;
3. duplicate cases are detected;
4. prior authorization is correctly identified;
5. Revoked produces New;
6. no prior form produces New;
7. obsolete produces Renewal;
8. expired produces Renewal;
9. lapsed produces Renewal;
10. annual renewal due produces Renewal;
11. material context change produces Amendment according to approved rules;
12. partial coverage produces Amendment;
13. no coverage with valid active form produces Amendment;
14. full coverage/current/context-valid produces Reuse;
15. WPC participates in standard access comparison;
16. IPA participates in employment/expiration logic without creating a separate path;
17. covered/uncovered outputs are correct;
18. proposed expiration is deterministic;
19. grace-window calculation is correct;
20. earlier applicable end date controls expiration;
21. missing prerequisites produce Exception Review;
22. conflicting authorization data produces Exception Review;
23. repeated execution returns the same decision;
24. no Authorization Form is created;
25. no Access Detail is created;
26. no approval/signature/PDF/task is created;
27. decision outputs are persisted on the case;
28. all positive and negative matrix tests pass.

---

# 81. Baseline Decision Statement

The HR Access ROB Authorization product shall determine authorization need by first validating request/configuration integrity, then evaluating the status and validity of the subject's existing authorization, then evaluating material authorization context, and finally comparing requested access against current authorized scope.

**Reuse is permitted only when a qualifying Active authorization is current, unexpired, contextually valid, and fully covers the request.**

**Amendment applies when a valid Active authorization remains in effect but its scope or governed context must change.**

**Renewal applies when the prior authorization is expired, lapsed, obsolete, or due for recertification.**

**New applies when no qualifying prior authorization exists or when the prior authorization was revoked.**

**Exception Review applies whenever the system lacks the valid information or data integrity necessary to make a safe normal-path decision.**