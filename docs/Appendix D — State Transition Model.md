# Appendix D — State Transition Model
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

This appendix defines the controlled lifecycle and state-transition model for the HR Access Rules of Behavior Authorization product.

It establishes:

- logical process stages;
- Authorization Form states;
- Authorized Access Detail states;
- HR Case lifecycle phases;
- HR Task lifecycle expectations;
- legal transitions;
- prohibited transitions;
- transition triggers;
- prerequisites and guards;
- records that may or may not be created during each stage;
- retry/idempotency expectations;
- exception, denial, withdrawal, renewal, supersession, revocation, expiration, and lapse behavior.

This appendix shall guide:

- Wave 3 decision-engine design;
- Wave 4 authorization lifecycle;
- Wave 5 fulfillment orchestration;
- Wave 6 renewal/expiration/lapse;
- Wave 7 security and audit;
- Wave 8 ATF/UAT.

---

# 2. State-Model Design Principle

The application contains several distinct lifecycle concepts.

They shall not be collapsed into one status field.

The principal state domains are:

1. **HR Case lifecycle** — status of the employee's access request.
2. **Authorization Decision Path** — New, Reuse, Amendment, Renewal, or Exception Review.
3. **ROB Authorization Form state** — status of the governed compliance artifact.
4. **Authorized Access Detail state** — status of each authorized access item.
5. **HR Task state** — status of individual fulfillment or exception work.
6. **Approval state** — native supervisor approval result.
7. **Document/signature state** — native employee/supervisor document-task state.

Each domain has a separate business meaning.

---

# 3. State Authority

## 3.1 Logical Versus Physical States

This appendix defines the **required logical states and transitions**.

It does not prescribe unverified numeric ServiceNow state values for native:

- `sn_hr_core_case`;
- `sn_hr_core_task`;
- native approval records;
- native document/signature records.

Those mappings shall be documented after Wave 2 / Wave 4 capability validation in:

`docs/FIELD-MAP.md`

and, where needed:

`docs/STATE-MODEL.md`

## 3.2 Authorization Form States

The Authorization Form states are product-defined and shall be implemented explicitly.

The approved implementation plan identifies the required authorization lifecycle states as:

- Draft
- Pending Employee Signature
- Pending Supervisor Approval and Signature
- Active
- Denied
- Superseded
- Revoked
- Obsolete Version
- Expired
- Lapsed.

---

# 4. Overall Lifecycle

The normal end-to-end lifecycle is:

```text
Request Submitted
      |
      v
Intake Validation
      |
      v
Authorization Decision
      |
      +-----------------------+
      |                       |
      v                       v
New / Amendment / Renewal    Reuse
      |                       |
      v                       |
Authorization Draft          |
      |                       |
      v                       |
Employee Signature           |
      |                       |
      +-----------+-----------+
                  |
                  v
        Supervisor Sign or Refuse
            |              |
            v              v
   Approved + Signed     Denied
                  |
                  v
          Fulfillment Gate
                  |
                  v
        Team Fulfillment Work
                  |
                  v
       Completion Validation
                  |
                  v
             Case Closed
```

Exception, denial, withdrawal, renewal, expiration, and lapse paths branch from this normal lifecycle.

---

# 5. Authorization Decision Path

The Authorization Path is not itself the Authorization Form state.

It is a decision result stored on the HR Case.

Allowed values:

- New
- Reuse
- Amendment
- Renewal
- Exception Review

Revoked prior authorization produces the **New** path rather than a separate Revoked decision path.

The approved implementation plan requires the decision engine to return only these outcomes and prohibits Authorization Form or Access Detail creation during Wave 3.

---

# 6. Decision Path Transition Model

```text
Submitted Case
     |
     v
Decision Pending
     |
     +--> New
     |
     +--> Reuse
     |
     +--> Amendment
     |
     +--> Renewal
     |
     +--> Exception Review
```

The decision engine shall not transition directly to fulfillment.

---

# 7. Decision Guards

A decision shall not be finalized unless applicable inputs are valid.

Required inputs include, as applicable:

- subject;
- requested access;
- business justification;
- supervisor;
- employment type;
- required Access End Date;
- current ROB Configuration;
- existing authorization data;
- access coverage;
- organization/position context;
- Operations Manager when required for WPC processing.

Invalid input shall result in Exception Review rather than an assumed authorization path.

---

# 8. New Path

New applies when:

- no applicable prior authorization exists; or
- prior authorization is Revoked.

Logical path:

```text
New
 |
 v
Create Authorization Draft
 |
 v
Pending Employee Signature
 |
 v
Pending Supervisor Approval and Signature
 |
 v
Active
 |
 v
Fulfillment
```

The prior revoked authorization, when present, remains historical.

It shall not be reactivated.

---

# 9. Reuse Path

Reuse applies when the existing authorization is:

- Active;
- current accepted form version;
- contextually valid;
- fully covers requested access.

Logical path:

```text
Reuse
 |
 v
Link Existing Active Authorization
 |
 v
Supervisor Approval
 |
 v
Supervisor Signature
 |
 v
Fulfillment
```

No new Authorization Form is created.

No new Authorized Access Details are created.

No new employee signature is required.

The original Authorization Form and signed PDF remain unchanged. The approved state/data model explicitly requires this behavior.

---

# 10. Amendment Path

Amendment applies when an Active/current authorization exists but:

- requested access is only partially covered; or
- a material organization, role, position, scope, or business-justification change requires a new authorization.

Logical path:

```text
Active Prior Authorization
          |
          v
      Amendment
          |
          v
Create New Draft
          |
          v
Carry Forward Covered Scope
+
Add Approved Delta
          |
          v
Pending Employee Signature
          |
          v
Pending Supervisor Approval and Signature
          |
          v
New Authorization Active
          |
          +--------------------------+
          |
          v
Prior Authorization → Superseded
```

The prior authorization shall remain Active until the replacement successfully activates.

A failed, denied, or incomplete amendment shall not prematurely invalidate the existing authorization unless another explicit business action requires revocation.

---

# 11. Renewal Path

Renewal applies when the prior authorization is:

- expired;
- lapsed;
- obsolete version;
- due for annual recertification.

Logical path:

```text
Historical / Expiring Authorization
             |
             v
          Renewal
             |
             v
       New Draft Form
             |
             v
Carry Forward Complete Approved Scope
+
Apply Approved Changes
             |
             v
Pending Employee Signature
             |
             v
Pending Supervisor Approval and Signature
             |
             v
        New Form Active
             |
             v
Prior Form → Superseded
```

The approved implementation plan requires renewal to create a new form containing complete approved scope and to supersede the prior form only after activation.

---

# 12. Exception Review Path

Exception Review occurs when the system cannot safely determine or proceed with the normal path.

Examples include:

- zero active ROB Configuration records;
- multiple active ROB Configuration records;
- missing supervisor;
- missing required Access End Date;
- missing Operations Manager;
- duplicate equivalent open request;
- unresolved mandatory profile data.

Logical path:

```text
Decision Pending
      |
      v
Exception Review
      |
      v
Native Exception Task
      |
      +--> Corrected
      |       |
      |       v
      |   Resume Decision
      |
      +--> Cannot Resolve
              |
              v
        Controlled Closure
```

No Authorization Form or Authorized Access Detail shall be created merely because an exception exists.

---

# 13. ROB Authorization Form State Model

The complete logical Authorization Form lifecycle is:

```text
                         +------------------+
                         |                  |
                         v                  |
Draft ----------------> Pending Employee Signature
 |                              |
 |                              v
 |            Pending Supervisor Approval and Signature
 |                              |
 |                              v
 |                            Active
 |                              |
 |              +---------------+---------------+
 |              |               |               |
 |              v               v               v
 |         Superseded        Revoked       Obsolete Version
 |                                              |
 |                                              v
 |                                           Renewal
 |
 +-------> Denied


Active
  |
  v
Expired
  |
  +--> Approved replacement exists → Superseded
  |
  +--> No approved replacement → Lapsed
```

Not every state is reached by every authorization.

---

# 14. State: Draft

## Definition

A new Authorization Form has been created but has not yet entered the employee-signature stage.

## Allowed Entry

From:

- New decision;
- Amendment decision;
- Renewal decision.

## Required Conditions

The lifecycle shall populate:

- Subject Person;
- Source HRSD Case;
- Form Version;
- employee/context snapshots;
- Business Justification snapshot;
- proposed/full authorized scope;
- Access Details;
- expiration calculation inputs.

## Allowed Exit

To:

- Pending Employee Signature;
- Denied, if denial/cancellation occurs under the final design before signature;
- controlled abandoned/withdrawn treatment if required by the native case lifecycle.

## Prohibited Exit

Directly to:

- Active;
- Superseded;
- Expired;
- Lapsed;
- Fulfillment.

---

# 15. Draft Exit Guard

A Draft shall not transition to Pending Employee Signature if required data is blank.

At minimum:

- Subject Person;
- Form Version;
- required employee/context snapshots;
- Business Justification;
- authorized scope;
- required Access End Date;
- proposed expiration information.

The SDK plan specifically requires Form Version to be populated before employee signature and requires required child fields to be populated explicitly.

---

# 16. State: Pending Employee Signature

## Applies To

- New
- Amendment
- Renewal

It does not apply to Reuse.

## Entry Condition

A complete authorization draft has been prepared.

## Required Activity

The Subject Person reviews and electronically signs the applicable Rules of Behavior document.

## Allowed Exit

To:

- Pending Supervisor Approval and Signature;
- Denied/closed path if the process is terminated under approved rules;
- remain Pending if signature is incomplete.

## Prohibited Exit

Directly to:

- Active;
- Fulfillment;
- Superseded.

---

# 17. Employee Signature Guard

The transition out of Pending Employee Signature requires valid evidence of:

- signer identity;
- completed electronic signature;
- authoritative completion timestamp;
- correct document/Form Version association.

A manually typed custom signature field shall not satisfy this guard.

---

# 18. State: Pending Supervisor Approval and Signature

## Applies To

New, Amendment, Renewal, and the equivalent request-level approval/signature gate for Reuse.

For Reuse, the existing Authorization Form itself remains Active; the current HR Case waits on request-specific supervisor evidence rather than placing the historical authorization into a new pending state.

## Required Activities

1. Supervisor reviews business need in the native signing task.
2. Supervisor selects Sign or Refuse.
3. Accepted Sign atomically supplies approval and signature evidence; Refuse
   supplies Denial evidence without signature evidence.

## Allowed Outcome

### Approved + Signed

Proceed to final validation/activation or fulfillment gate as appropriate.

### Denied

Proceed to Denied processing.

### Unsupported Partial Evidence

Remain blocked. The lifecycle requires the complete atomic evidence set from an
accepted native Sign and does not infer a missing value.

---

# 19. Supervisor Fulfillment Guard

The fulfillment gate shall remain **false** unless every applicable required supervisor action is complete.

Conceptually:

```text
FulfillmentGate =
    SupervisorApproval == Approved
    AND
    SupervisorSignature == Complete
    AND
    OtherRequiredAuthorizationConditions == Complete
```

For New/Amendment/Renewal:

```text
AND EmployeeSignature == Complete
AND AuthorizationForm == Active
```

For Reuse:

```text
AND ExistingAuthorization == Active/Valid
AND RequestedScope == FullyCovered
AND ReuseSupervisorDecision == Approved
AND ReuseSupervisorSignature == Complete
```

Reuse is a request-level attestation state on the current HR Case, not a new
Authorization Form lifecycle. Its controlled states are Pending, Approved,
Denied, and Invalidated. Denial leaves the existing Active authorization and
scope unchanged. A Supervisor, scope, decision, or qualifying-authorization
context change invalidates prior evidence and requires decision re-evaluation.

---

# 20. State: Active

## Definition

The Authorization Form is currently valid and may govern applicable access requests.

## Entry Guard

For New, Amendment, and Renewal, all applicable conditions must be true:

- employee signature complete;
- supervisor approval complete;
- supervisor signature complete;
- required snapshots populated;
- authorized scope complete;
- final PDF generated;
- effective date populated;
- expiration date populated;
- required validation complete.

## Effects

On Active transition:

- authorization becomes reusable where applicable;
- effective date is established;
- signed PDF becomes authoritative;
- applicable fulfillment may be released;
- amendment/renewal predecessor may then be superseded as appropriate.

---

# 21. Active Authorization Invariant

An Active Authorization Form shall have:

- a valid subject;
- current authorization identity;
- nonblank Form Version;
- one or more Authorized Access Details;
- required signature/approval evidence;
- effective date;
- expiration date;
- one authoritative final signed PDF.

An Active authorization shall not have an empty governed access scope.

---

# 22. State: Denied

## Trigger

Supervisor denies the request.

## Required Effects

- HR Case proceeds to denied closure.
- Authorization Form under preparation becomes Denied where one exists.
- pending Access Details become non-active/Denied according to final implementation.
- no fulfillment task is created.
- no form becomes Active.
- denial history remains auditable.

The source process specifies that denied requests close without fulfillment.

## Prohibited Transition

Denied → Active.

A later access request shall create a new transactional lifecycle.

---

# 23. State: Superseded

## Definition

A previously valid Authorization Form has been replaced by a newer approved Active authorization.

## Entry Trigger

Successful activation of:

- Amendment replacement; or
- Renewal replacement.

## Required Effects

- previous form remains historical;
- prior PDF remains unchanged;
- supersession links are established;
- previous details become Superseded where applicable;
- new form becomes the current governing authorization.

## Prohibited Behavior

- deleting prior form;
- replacing old PDF;
- editing old signatures;
- silently converting prior form to the new scope.

---

# 24. Supersession Relationship

The lifecycle shall support bidirectional traceability:

```text
Old Authorization
    superseded_by
          |
          v
New Authorization

New Authorization
      supersedes
          |
          v
Old Authorization
```

The SDK plan explicitly requires supersession references in both directions.

---

# 25. State: Revoked

## Definition

Authorization has been administratively withdrawn before normal expiration.

The source material establishes Revoked as a supported authorization state and specifies that a revoked prior form must follow the New path on a subsequent request.

## Allowed Entry

From:

- Active;
- potentially another appropriate non-terminal state only if an approved administrative process explicitly permits it.

## Required Effects

- authorization cannot be reused;
- active details become non-valid/revoked as appropriate;
- subsequent request follows New;
- historical PDF remains retained.

## Prohibited Transition

Revoked → Active.

Reactivation shall require a new Authorization Form.

---

# 26. State: Obsolete Version

## Definition

The authorization uses a Form Version no longer accepted under current configuration.

## Trigger

Current accepted Form Version changes and the existing authorization is determined no longer acceptable.

## Effect

- form cannot be Reused;
- new request requiring authorization follows Renewal;
- historical signed artifact remains unchanged.

## Prohibited Behavior

Do not regenerate the old PDF with new policy text.

---

# 27. State: Expired

## Definition

The authorization expiration date has passed.

## Trigger

Daily renewal/expiration processing evaluates the record after expiration.

## Required Historical Behavior

The signed record and PDF remain intact.

## Next Treatment

Two principal outcomes exist.

### Approved Active Replacement Exists

Prior authorization should remain or become Superseded according to the replacement lifecycle rather than becoming an actionable lapse.

### No Approved Active Replacement

Proceed to Lapsed treatment.

The Wave 6 design explicitly distinguishes these cases.

---

# 28. State: Lapsed

## Definition

Authorization has expired and no approved active replacement exists.

## Entry Conditions

```text
Expiration Date < Evaluation Date
AND
No Approved Active Replacement
```

## Required Effects

- authorization reflects Lapsed according to physical state mapping;
- one applicable lapse notification is issued;
- subject/access appears on Expired/Not-Renewed worklist;
- historical form and PDF remain unchanged;
- ServiceNow does not directly deprovision external access.

The source requirements require notice and lapsed/expired status when renewal has not been approved.

---

# 29. Authorization Form Legal Transition Matrix

| From | To | Allowed? | Primary Trigger |
|---|---|---:|---|
| Draft | Pending Employee Signature | Yes | Draft validation complete |
| Draft | Active | **No** | — |
| Draft | Denied | Yes | Approved denial lifecycle |
| Pending Employee Signature | Pending Supervisor Approval & Signature | Yes | Employee signature complete |
| Pending Employee Signature | Active | **No** | — |
| Pending Supervisor Approval & Signature | Active | Yes | Approval + supervisor signature + final validation |
| Pending Supervisor Approval & Signature | Denied | Yes | Supervisor denies |
| Active | Superseded | Yes | Replacement authorization activates |
| Active | Revoked | Yes | Authorized administrative revocation |
| Active | Obsolete Version | Yes | Version no longer accepted |
| Active | Expired | Yes | Expiration reached |
| Active | Lapsed | Indirect | Expiration + no replacement |
| Expired | Lapsed | Yes | No approved replacement |
| Expired | Active | **No** | Renewal requires new form |
| Superseded | Active | **No** | Historical state |
| Revoked | Active | **No** | New authorization required |
| Obsolete Version | Active | **No** | New/renewal authorization required |
| Lapsed | Active | **No** | New renewal form required |
| Denied | Active | **No** | New transaction required |

---

# 30. Authorized Access Detail State Model

The source documents specify statuses including Pending Authorization, Active, Superseded, and Denied behavior, but do not provide a complete formal dictionary for every physical detail state.

The minimum logical detail states shall therefore be:

- Pending Authorization
- Pending Fulfillment
- Active
- Denied
- Superseded
- Revoked
- Expired
- Lapsed

Exact ServiceNow choice values shall be confirmed in `FIELD-MAP.md`.

---

# 31. Access Detail Lifecycle

Normal New/Amendment/Renewal path:

```text
Pending Authorization
        |
        v
Authorization Form Active
        |
        v
Pending Fulfillment
        |
        v
Required Team Work Complete
        |
        v
Active
```

Historical transitions:

```text
Active
 |
 +--> Superseded
 |
 +--> Revoked
 |
 +--> Expired
         |
         +--> Lapsed
```

---

# 32. Detail State: Pending Authorization

## Entry

Detail created under a Draft Authorization Form.

## Meaning

The access item is proposed for authorization but is not yet approved/signed.

## Prohibited

It shall not be interpreted as active access.

No ordinary fulfiller shall treat this state as authorization to provision.

---

# 33. Detail State: Pending Fulfillment

## Entry

Authorization Form has become Active and the item's external fulfillment remains incomplete.

## Meaning

The compliance authorization is valid, but operational provisioning evidence has not yet been completed.

This state distinction is particularly useful because:

**authorization** and **provisioning** are separate concepts.

---

# 34. Detail State: Active

## Entry

All applicable requirements for that individual access item are satisfied.

Examples:

### Staffing item

Staffing fulfillment complete with evidence.

### Analytics item

Analytics fulfillment complete with evidence.

### WPC

Applicable Analytics work and required OM ARM role-assignment evidence complete/validated/waived.

---

# 35. Item-Specific Activation Rule

An Access Detail shall be activated only when **its applicable fulfillment requirements** are complete.

One team task closing shall not activate an unrelated item's detail.

The implementation plan explicitly requires item-specific updates and prohibits unrelated detail activation.

---

# 36. Detail State: Denied

A detail prepared under a denied authorization shall not become Active.

It shall retain history required for the denied transaction.

---

# 37. Detail State: Superseded

When an Authorization Form is superseded, its historical access details shall also reflect that they no longer represent the current authorization scope.

They shall not be deleted.

---

# 38. Detail State: Revoked

Where the parent authorization or specific applicable access authorization is revoked, the detail shall no longer be treated as valid.

External deprovisioning remains outside the MVP and is handled through the approved notify-and-track operating model.

---

# 39. Detail Expiration/Lapse

Where access expiration is governed by the parent authorization:

```text
Active Detail
    |
    v
Expired
    |
    v
Lapsed
```

where no active replacement applies.

Where an earlier item-specific Access End Date applies, the earlier approved end date shall govern.

---

# 40. Authorized Access Detail Transition Matrix

| From | To | Allowed? | Trigger |
|---|---|---:|---|
| Pending Authorization | Pending Fulfillment | Yes | Parent authorization activates |
| Pending Authorization | Denied | Yes | Authorization denied |
| Pending Authorization | Active | Generally No | Fulfillment gate must apply |
| Pending Fulfillment | Active | Yes | Applicable fulfillment complete |
| Pending Fulfillment | Denied | Conditional | Process termination before provisioning |
| Active | Superseded | Yes | Replacement authorization activates |
| Active | Revoked | Yes | Authorized revocation |
| Active | Expired | Yes | Applicable expiration |
| Expired | Lapsed | Yes | No approved replacement |
| Superseded | Active | No | Historical |
| Revoked | Active | No | New authorization required |
| Lapsed | Active | No | Renewal/new detail required |

---

# 41. HR Case Logical Lifecycle

The source package does not prescribe a complete custom HR Case choice list. Accordingly, the PRD defines **logical phases**, not new mandatory native state values.

The principal logical phases are:

1. Intake / Submitted
2. Decision Pending
3. Exception Review
4. Authorization in Progress
5. Supervisor Action Pending
6. Fulfillment
7. Completed
8. Denied
9. Withdrawn

These may map to existing HRSD states, service activities, subflows, or supporting fields.

A new custom HR Case state model shall not be created unless native HRSD behavior cannot support the required lifecycle and an architecture change is approved.

---

# 42. HR Case Phase: Intake / Submitted

## Entry

Employee submits one of the approved Employee Center services.

## Required Records

- one native HR Case.

## Must Not Yet Create

- Authorization Form;
- Authorized Access Detail;
- fulfillment task;
- signature task;
- renewal processing.

Wave 2 explicitly stops before decision, signature, PDF, fulfillment, and renewal behavior.

---

# 43. HR Case Phase: Decision Pending

## Entry

Valid normalized intake exists.

## Activity

Decision engine calculates:

- existing authorization status;
- path;
- covered access;
- uncovered access;
- related existing form;
- signature requirements;
- proposed expiration;
- exception reason if applicable.

## Exit

To:

- Authorization in Progress;
- Supervisor Action Pending for Reuse;
- Exception Review.

---

# 44. HR Case Phase: Exception Review

## Entry Conditions

Any controlled exception that prevents safe normal processing.

## Required Record

Native Exception Review HR Task where work tracking is required.

## Exit

### Corrected

Resume at appropriate prior lifecycle point, generally decision evaluation.

### Unresolved

Controlled closure under applicable HR process.

---

# 45. HR Case Phase: Authorization in Progress

Applies to:

- New
- Amendment
- Renewal

Activities include:

- draft preparation;
- employee signature;
- supervisor approval;
- supervisor signature;
- PDF generation;
- activation.

The case shall not advance to Fulfillment while required authorization activity is incomplete.

---

# 46. HR Case Phase: Supervisor Action Pending

For Reuse, the case waits on:

- supervisor approval;
- supervisor signature.

The existing authorization remains unchanged and Active.

For New/Amendment/Renewal, this phase corresponds to the Authorization Form's Pending Supervisor Approval and Signature state.

---

# 47. HR Case Phase: Fulfillment

## Entry Guard

Fulfillment gate = true.

## Activities

Create required native HR Tasks.

Possible tasks:

- Staffing;
- Analytics;
- OM;
- Exception where a fulfillment exception arises.

## Exit

To Completed only when all required child work satisfies closure rules.

---

# 48. HR Case Phase: Completed

## Entry Guard

All required tasks are:

- completed;
- formally waived; or
- correctly Not Required.

Completion evidence exists where required.

The final governing authorization is linked to the case.

---

# 49. HR Case Phase: Denied

## Trigger

Supervisor denies request.

## Effects

- no fulfillment;
- required denial notice;
- authorization under preparation remains non-active;
- history retained.

---

# 50. HR Case Phase: Withdrawn

## Trigger

Request is validly withdrawn.

## Effects

- no further fulfillment;
- partial history retained;
- no new authorization activates because of the withdrawn request.

The source requirements expressly require withdrawn history to be retained.

---

# 51. HR Case Logical Transition Matrix

| From | To | Allowed? |
|---|---|---:|
| Intake | Decision Pending | Yes |
| Intake | Exception Review | Yes |
| Decision Pending | Authorization in Progress | Yes |
| Decision Pending | Supervisor Action Pending | Yes — Reuse |
| Decision Pending | Exception Review | Yes |
| Authorization in Progress | Supervisor Action Pending | Yes |
| Authorization in Progress | Denied | Yes |
| Authorization in Progress | Withdrawn | Yes |
| Supervisor Action Pending | Fulfillment | Yes, after gate |
| Supervisor Action Pending | Denied | Yes |
| Supervisor Action Pending | Withdrawn | Yes |
| Exception Review | Decision Pending | Yes, after correction |
| Exception Review | Controlled Closure | Yes |
| Fulfillment | Completed | Yes, after closure guard |
| Fulfillment | Withdrawn | Conditional under business rules |
| Denied | Fulfillment | No |
| Withdrawn | Fulfillment | No |
| Completed | Fulfillment | No without a new request |

---

# 52. HR Task Logical Lifecycle

The implementation shall reuse native HR Task state capabilities wherever suitable.

At the logical level, tasks require:

- Open
- Work in Progress
- Completed
- Waived
- Not Required
- Exception/Failed as needed by native mapping

The source documents use concepts including open, pending, in progress, completed, exception, and waived, but do not establish an exact custom task dictionary.

---

# 53. Fulfillment Task State Rules

## Open

Task created after fulfillment gate.

## Work in Progress

Assigned team has begun action.

## Completed

Required external action has been performed and completion evidence captured.

## Waived

Authorized process owner has formally determined the action need not be performed.

Waiver shall require evidence/rationale.

## Not Required

Lifecycle logic determines the work is legitimately unnecessary.

## Failed / Exception

Work cannot be completed normally and requires resolution/escalation.

Exact physical mapping shall use supported HR Task state values.

---

# 54. Task Completion Guard

A task shall not satisfy parent-case completion solely because its State value was changed to a closed state.

Required evidence shall be validated.

For applicable fulfillment tasks:

```text
TaskCanSatisfyClosure =
    CompletionEvidencePresent
    AND
    (
        ProvisioningComplete
        OR AuthorizedWaiver
        OR ValidNotRequiredResult
    )
```

The implementation plan explicitly requires completion evidence and an appropriate provisioning-complete or waiver result.

---

# 55. OM Task Lifecycle

Logical lifecycle:

```text
Open
 |
 v
Work in Progress
 |
 +--> Completed
 |
 +--> Waived
 |
 +--> Overdue → Escalated → Completed/Waived
```

Overdue does not mean complete.

Escalation shall not automatically close:

- the OM task;
- the Analytics task;
- the parent case.

---

# 56. Missing Operations Manager State Behavior

When WPC is requested but Operations Manager cannot be resolved:

```text
Request
  |
  v
Exception Review
  |
  v
Resolve Operations Manager
  |
  v
Resume WPC Processing
```

The system shall not:

- fabricate an OM;
- assign the task to an arbitrary user;
- mark OM work complete;
- bypass the requirement.

---

# 57. Approval State Interaction

For New, Amendment, and Renewal, the native Document Templates Supervisor task
shall remain authoritative for both the decision and signature event.

Logical supervisor approval outcomes are:

- Requested / Pending
- Approved through accepted Sign
- Rejected / Denied through Refuse
- Cancelled or equivalent if supported/required

The Authorization Form shall snapshot authoritative approval evidence but shall not duplicate the approval engine.

---

# 58. Document-Signature State Interaction

Native document/signature behavior shall remain authoritative.

Logical signature outcomes include:

- Not Required
- Pending
- Completed
- Failed/Cancelled as applicable

The Authorization Form may store read-only lifecycle snapshots such as:

- signer;
- completed flag;
- timestamp.

It shall not permit a custom field to impersonate completion of a native signature task.

---

# 59. New Path Cross-Entity Transition

```text
HR Case: Decision Pending
        |
        v
Path = New
        |
        +--> Authorization Form = Draft
        |       |
        |       +--> Access Details = Pending Authorization
        |
        v
Authorization = Pending Employee Signature
        |
        v
Employee Signature = Completed
        |
        v
Authorization = Pending Supervisor Approval & Signature
        |
        +--> Approval = Approved
        |
        +--> Supervisor Signature = Completed
        |
        v
Authorization = Active
        |
        +--> Access Details = Pending Fulfillment
        |
        v
HR Case = Fulfillment
        |
        +--> Staffing/Analytics/OM Tasks
        |
        v
Applicable tasks complete
        |
        +--> Applicable Access Details = Active
        |
        v
All closure guards pass
        |
        v
HR Case = Completed
```

---

# 60. Reuse Path Cross-Entity Transition

```text
HR Case: Decision Pending
        |
        v
Path = Reuse
        |
        +--> Existing Authorization remains Active
        |
        +--> Existing Access Details unchanged
        |
        +--> Original PDF unchanged
        |
        v
Supervisor Approval Pending
        |
        +
        Supervisor Signature Pending
        |
        v
Fulfillment Gate
        |
        v
HR Case = Fulfillment
        |
        v
Tasks Complete
        |
        v
HR Case = Completed
```

No new employee signature or Authorization Form is created.

---

# 61. Amendment Cross-Entity Transition

```text
Existing Form = Active
      |
      v
Case Path = Amendment
      |
      v
New Form = Draft
      |
      +--> Copy covered active scope
      +--> Add uncovered approved delta
      |
      v
New Details = Pending Authorization
      |
      v
Employee Signature
      |
      v
Supervisor Approval + Signature
      |
      v
New Form = Active
      |
      +--> Prior Form = Superseded
      +--> Prior Details = Superseded
      |
      v
New Details = Pending Fulfillment
      |
      v
Fulfillment
```

---

# 62. Renewal Cross-Entity Transition

```text
Prior Form = Expired / Lapsed / Obsolete / Renewal Due
      |
      v
Case Path = Renewal
      |
      v
New Form = Draft
      |
      +--> Copy complete approved scope
      +--> Apply approved changes
      |
      v
Employee Signature
      |
      v
Supervisor Approval + Signature
      |
      v
New Form = Active
      |
      +--> Prior Form = Superseded
      |
      v
Fulfillment as required
```

---

# 63. Denial Cross-Entity Transition

```text
Supervisor Decision = Denied
        |
        +--> HR Case = Denied
        |
        +--> Draft/Pending Authorization = Denied
        |
        +--> Pending Details = Denied/non-active
        |
        +--> No Fulfillment Tasks
        |
        +--> No Active Authorization
```

---

# 64. Expiration and Lapse Transition

Daily scheduled evaluation:

```text
Active Authorization
        |
        | expiration reached
        v
Expiration Evaluation
        |
        +--> Approved Active Replacement Exists
        |          |
        |          v
        |      Superseded
        |
        +--> No Approved Replacement
                   |
                   v
                 Lapsed
                   |
                   +--> One lapse notice
                   +--> RPT-8 worklist
```

The scheduled process must be idempotent. A repeated run shall not duplicate the transition or notice.

---

# 65. Reminder Lifecycle

A reminder is not an Authorization Form state.

It is a lifecycle event.

Example:

```text
Active
 |
 +--> 90-day reminder event
 |
 +--> 60-day reminder event
 |
 +--> 30-day reminder event
 |
 +--> expiration evaluation
```

Reminder issuance shall not alter Active status.

Each reminder is sent once per:

```text
Authorization
+
Recertification Cycle
+
Threshold
```

---

# 66. Prohibited Transition Rules

The following transitions are explicitly prohibited.

## AUTH-PROHIB-01

Draft → Active without required signatures/approval.

## AUTH-PROHIB-02

Pending Employee Signature → Fulfillment.

## AUTH-PROHIB-03

Pending Supervisor Approval & Signature → Fulfillment with only one supervisor action complete.

## AUTH-PROHIB-04

Denied → Active.

## AUTH-PROHIB-05

Superseded → Active.

## AUTH-PROHIB-06

Revoked → Active.

## AUTH-PROHIB-07

Expired → Active through record editing.

## AUTH-PROHIB-08

Lapsed → Active through record editing.

## AUTH-PROHIB-09

Obsolete Version → Active/reusable without a new approved authorization.

## AUTH-PROHIB-10

Reuse → create duplicate Authorization Form.

## AUTH-PROHIB-11

Reuse → create duplicate Authorized Access Details.

## AUTH-PROHIB-12

Exception Review → create authorization data before correction.

---

# 67. Prohibited Fulfillment Transitions

## FUL-PROHIB-01

Create Staffing/Analytics/OM tasks before fulfillment gate.

## FUL-PROHIB-02

Close parent case while required child task remains incomplete.

## FUL-PROHIB-03

Close OM work because it is overdue.

## FUL-PROHIB-04

Activate Analytics access because Staffing task completed.

## FUL-PROHIB-05

Activate Staffing access because Analytics task completed.

## FUL-PROHIB-06

Treat task closed state without evidence as fulfillment completion.

## FUL-PROHIB-07

Use ServiceNow lifecycle transition to perform unapproved direct external provisioning.

---

# 68. Transition Ownership

| Transition | Authoritative Actor |
|---|---|
| Intake → Submitted | Employee / HRSD |
| Decision Pending → Path | System |
| Exception → Resume | System after corrected input |
| Draft → Pending Employee Signature | System |
| Employee signature completion | Subject via native document/signature mechanism |
| Pending Employee → Supervisor | System |
| Supervisor approval | Supervisor via native approval |
| Supervisor signature | Supervisor via native signature |
| Pending Supervisor → Active | System after validation |
| Active → Superseded | System lifecycle |
| Active → Revoked | Authorized administrative actor/process |
| Active → Expired/Lapsed | Scheduled lifecycle |
| Access Detail → Active | System after item-specific fulfillment |
| Task → Completed | Assigned authorized fulfiller with required evidence |
| Case → Completed | System closure guard |

---

# 69. Security Requirements for State Changes

Ordinary users shall not directly set system-controlled lifecycle states.

Particularly protected fields include:

- Authorization Path;
- Authorization Form status;
- Access Detail status;
- approval evidence;
- signature evidence;
- Form Version;
- effective date;
- expiration date;
- supersession fields;
- PDF-finalization fields;
- routing snapshots.

The Wave 7 implementation plan explicitly requires field-level protection for these categories.

---

# 70. State Transition Auditing

The application shall audit consequential transitions including:

- Authorization Form status;
- Form Version;
- effective date;
- expiration date;
- employee-signature evidence;
- supervisor-approval evidence;
- supervisor-signature evidence;
- supersession;
- revocation;
- critical routing snapshots.

Audit records shall identify:

- prior value;
- new value;
- actor/process;
- date/time.

---

# 71. Transition Idempotency

Every automated transition shall be retry-safe.

Examples:

### Draft Creation

Repeated lifecycle execution must not create duplicate forms.

### Detail Creation

Repeated execution must not create duplicate details.

### Activation

Repeated activation call must not recreate PDF/tasks.

### Task Creation

Repeated fulfillment orchestration must not create duplicate team tasks.

### Supersession

Repeated processing must not corrupt replacement relationships.

### Reminder

Repeated daily processing must not resend the same threshold notification.

### Lapse

Repeated daily processing must not create repeated lapse events.

---

# 72. Transition Guard Pattern

Every consequential system transition should conceptually follow:

```text
1. Read current state
2. Confirm expected source state
3. Validate prerequisites
4. Check idempotency/business key
5. Perform transition
6. Record evidence/audit
7. Trigger only authorized downstream action
```

A flow retry encountering the already-correct target state should safely return rather than reproduce downstream work.

---

# 73. Concurrency Protection

The implementation shall account for concurrent/repeated processing where practical.

Potential examples:

- two decision-engine executions;
- employee signature callback and flow retry;
- supervisor approval/signature events arriving close together;
- duplicate fulfillment triggers;
- scheduled renewal processing while a renewal activates.

Business keys, record state checks, and native transaction controls shall be used to prevent conflicting transitions.

---

# 74. Invalid-State Detection

The application shall identify logically invalid combinations.

Examples:

### Invalid

Authorization status = Active
Employee signature required = Yes
Employee signature complete = No

### Invalid

Authorization status = Active
Final PDF generated = No

### Invalid

Access Detail = Active
Required fulfillment task = Open

### Invalid

Case = Completed
Required OM task = Open

### Invalid

Authorization = Superseded
Superseded By = blank

where the field is required by final physical design.

Such conditions shall be included in validation and reporting/testing rather than accepted silently.

---

# 75. State-Derived Reporting

Reports may derive operational categories from the state model.

Examples:

### Renewal Dashboard

- Active approaching expiration;
- Obsolete Version;
- Expired;
- Lapsed;
- Revoked.

### Fulfillment Dashboard

- Open;
- In Progress;
- Overdue;
- Completed;
- Exception.

### Audit Retrieval

- Active;
- Superseded;
- Revoked;
- Obsolete;
- Expired;
- Lapsed.

Reports shall not invent lifecycle states inconsistent with this model.

---

# 76. State Model Test Requirements

At minimum, testing shall verify:

## New

- correct draft creation;
- required employee signature;
- required supervisor approval/signature;
- no fulfillment before activation;
- correct Active transition.

## Reuse

- no new form;
- no duplicate details;
- original PDF unchanged;
- supervisor gate still required.

## Amendment

- prior form remains intact while new form pending;
- complete scope carried forward;
- prior form superseded only after new activation.

## Renewal

- new form created;
- old form preserved;
- correct new Form Version;
- correct expiration;
- supersession occurs after activation.

## Denial

- no Active authorization;
- no fulfillment.

## Revocation

- cannot reactivate;
- next request follows New.

## Obsolete

- cannot Reuse;
- Renewal required.

## Expiration

- status/date behavior correct.

## Lapse

- occurs only without approved replacement;
- notification occurs once;
- worklist entry appears.

## Exception

- no orphan authorization/detail;
- resolution resumes appropriate lifecycle.

---

# 77. Negative State Tests

The test suite shall intentionally attempt:

- direct Draft → Active;
- Active with missing signature;
- Active with missing PDF;
- fulfillment before supervisor signature;
- Reuse creating new details;
- Superseded → Active;
- Revoked → Active;
- Lapsed → Active;
- case closure with open required child;
- WPC case closure with incomplete OM work;
- detail activation from unrelated team's task;
- duplicate activation trigger;
- duplicate lapse trigger.

Every prohibited path shall fail safely.

---

# 78. State Model Relationship to ATF

ATF should automate deterministic transitions where technically reliable.

Likely candidates include:

- decision outcomes;
- state guards;
- denial;
- fulfillment gating;
- task generation;
- case closure guard;
- expiration calculations;
- reminders/lapse with controlled dates;
- prohibited transitions.

Document Templates and electronic-signature UI behavior may require controlled manual tests depending on Australia PDI automation support.

The Wave 8 plan explicitly calls for ATF suites covering Intake, Decision, Signature/PDF, Fulfillment, Renewal, Security, and Reporting, while retaining manual procedures where UI/platform behavior is not reliably automatable.

---

# 79. State Model Implementation Rule for Codex

Codex shall not infer new lifecycle states merely because they simplify implementation.

When generating logic, Codex shall:

- use the approved logical states;
- map native HRSD states rather than replace them where feasible;
- preserve state guards;
- preserve idempotency;
- prohibit terminal-state reactivation;
- separate authorization from fulfillment;
- separate request phase from Authorization Form status;
- keep approval and signature in separate system-managed evidence fields even
  when accepted native Sign populates both atomically;
- avoid setting states directly where a native lifecycle event should remain authoritative.

---

# 80. Open Physical-Mapping Decisions

The following are intentionally not invented by this appendix.

## STATE-MAP-01 — Native HR Case States

Exact Australia HR Case state values and mappings for:

- submitted;
- pending authorization;
- pending supervisor;
- fulfillment;
- completed;
- denied;
- withdrawn.

**Resolution:** Wave 2 native-field/state inventory.

---

## STATE-MAP-02 — Native HR Task States

Exact state values used for:

- Open;
- Work in Progress;
- Completed;
- Waived;
- Not Required;
- exception/failure.

**Resolution:** Wave 2/Wave 5 native-task assessment.

---

## STATE-MAP-03 — Authorization Detail Physical Choices

Confirm final physical choice values for:

- Pending Authorization;
- Pending Fulfillment;
- Active;
- Denied;
- Superseded;
- Revoked;
- Expired;
- Lapsed.

**Resolution:** Wave 1 schema confirmation before lifecycle implementation.

---

## STATE-MAP-04 — Revocation Administrative Process

The source requirements establish Revoked as a state but do not fully define:

- who may revoke;
- required reason;
- whether supervisor notice is required;
- whether associated external-access-removal work is automatically generated.

These business rules require separate confirmation before a production revocation workflow is implemented.

---

## STATE-MAP-05 — Denied Draft Retention

The requirements require audit history and denial behavior but do not fully prescribe whether a denied pre-signature Draft Authorization Form is always retained as a separate business record or whether some denial scenarios retain only native case/approval evidence.

The Wave 4 lifecycle implementation should establish one consistent governed rule.

---

# 81. Cross-Wave Ownership

| State Capability | Wave |
|---|---:|
| Authorization status dictionary | 1 |
| Access Detail status dictionary | 1 |
| Native Case state mapping | 2 |
| Native Task state mapping | 2 / 5 |
| Authorization Path | 3 |
| Decision guards | 3 |
| Draft creation | 4 |
| Signature states | 4 |
| Approval interaction | 4 |
| Authorization activation | 4 |
| Denial | 4 |
| Supersession | 4 |
| Fulfillment task lifecycle | 5 |
| Item-level activation | 5 |
| Parent closure | 5 |
| Expiration | 6 |
| Lapse | 6 |
| Reminder events | 6 |
| Revocation security | 7 |
| State ACLs/audit | 7 |
| Full state regression | 8 |

---

# 82. State Model Definition of Done

The state-transition model is correctly implemented when:

1. all logical Authorization Form states exist;
2. each state has defined entry and exit rules;
3. terminal historical states cannot be directly reactivated;
4. decision paths remain separate from authorization states;
5. HR Case phases map to native HRSD behavior;
6. HR Tasks use native supported states wherever possible;
7. New follows the complete authorization lifecycle;
8. Reuse creates no new form/details;
9. Amendment supersedes only after replacement activation;
10. Renewal supersedes only after replacement activation;
11. revoked forms cannot be reused/reactivated;
12. obsolete forms cannot be reused;
13. expiration/lapse behavior distinguishes replacement versus no replacement;
14. employee signature precedes supervisor finalization where required;
15. accepted native Supervisor Sign supplies complete approval and signature
    evidence atomically for New, Amendment, and Renewal, while Refuse supplies
    Denial evidence without signature evidence;
16. fulfillment cannot start early;
17. details activate only after item-specific fulfillment;
18. required OM work prevents premature WPC closure;
19. denied requests create no fulfillment;
20. withdrawn requests preserve history;
21. exception processing creates no orphan authorization artifacts;
22. automated transitions are idempotent;
23. invalid state combinations are detected;
24. state changes are appropriately audited;
25. protected lifecycle fields cannot be manipulated by unauthorized users;
26. ATF/manual tests prove both positive and prohibited transitions.

---

# 83. Baseline State Architecture Statement

The HR Access ROB Authorization solution shall treat lifecycle state as a controlled business mechanism rather than a collection of independently editable status fields.

The **HR Case** governs the transactional request.

The **Authorization Path** governs which compliance lifecycle is required.

The **Authorization Form** governs signed authorization validity.

The **Authorized Access Detail** governs individual authorized-scope status.

The **HR Task** governs operational fulfillment or exception work.

Native approval and document/signature records remain authoritative for their respective activities.

No downstream lifecycle shall proceed merely because a status field has been manually changed; every consequential transition shall be protected by the applicable business prerequisites, evidence requirements, and idempotency controls.
