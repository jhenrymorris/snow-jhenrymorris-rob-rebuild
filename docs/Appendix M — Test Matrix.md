# Appendix M — Test Matrix
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

This appendix defines the master verification and validation matrix for the HR Access Rules of Behavior Authorization product.

It establishes:

- test domains;
- test identifiers;
- requirements traceability;
- wave ownership;
- test data;
- expected results;
- positive tests;
- negative tests;
- idempotency tests;
- security tests;
- capability tests;
- installation tests;
- UAT scenarios;
- release-blocking conditions.

This appendix shall guide:

- source-side tests;
- ServiceNow ATF;
- manual test scripts;
- PDI capability validation;
- security impersonation testing;
- regression testing;
- UAT;
- clean-install rehearsal;
- release-readiness evidence.

---

# 2. Testing Principles

## 2.1 Requirement Traceability

Every required business, functional, security, audit, reporting, and acceptance behavior shall map to at least one test.

## 2.2 Source Acceptance Criteria Preservation

The source AC-1 through AC-24 shall retain their original identifiers.

They shall not be renumbered or replaced by internal test IDs.

## 2.3 Positive and Negative Testing

A behavior is not proven solely because the successful path works.

Critical controls require negative testing.

Examples:

- unrelated user denied;
- fulfillment blocked before signature;
- Revoked form cannot reactivate;
- duplicate task not created on retry.

## 2.4 Runtime Proof

Source/build success alone does not satisfy a functional test.

The implementation plan requires runtime, security, and UAT evidence separately from source/build/install evidence.

---

# 3. Test Domains

The master test suite is organized into:

1. Wave 1 — Data Foundation
2. Wave 2 — Intake
3. Wave 3 — Decision
4. Wave 4 — Authorization / Signature / PDF
5. Wave 5 — Fulfillment
6. Wave 6 — Renewal / Lapse
7. Wave 7 — Security / Privacy
8. Wave 8 — Reporting / Release
9. Cross-Wave — Idempotency
10. Cross-Wave — Installation / Regression
11. UAT

---

# 4. Test Evidence Types

| Code | Evidence |
|---|---|
| SRC | source review |
| BLD | build output |
| INS | install evidence |
| RUN | runtime execution |
| ATF | automated test |
| MAN | manual test |
| NEG | negative test |
| SEC | security/impersonation |
| RPT | reporting reconciliation |
| DOC | document/PDF evidence |
| UAT | user acceptance |
| REL | release-readiness |

---

# 5. Test Status Values

- Not Started
- In Progress
- Pass
- Fail
- Blocked
- Deferred
- Not Applicable

Blocked tests shall include a documented reason and dependency.

---

# 6. Synthetic Persona Test Data

Synthetic users shall represent:

- Employee A
- Employee B
- Supervisor A
- Supervisor B
- Staffing Fulfiller
- Analytics Fulfiller
- Operations Manager
- Compliance Viewer
- ROB Administrator
- Unrelated User

No production PII or real signed Forms shall be used in the PDI.

---

# 7. Synthetic Access Items

Required baseline access items:

1. FPPS/WTTS
2. eOPF
3. USA Staffing
4. OAS/DataMart
5. Human Capital Reports
6. Workforce Profile Charts

---

# 8. Synthetic Employment Types

Test:

- Federal
- Contractor
- IPA
- Auditor/Investigator

Include valid and invalid Access End Date combinations.

---

# 9. Wave 1 — Data Foundation Tests

## W1-01 — Scoped Application Exists

**Expected:** application and scope correct.

Evidence: SRC / INS / RUN

---

## W1-02 — Exactly Four Custom Business Tables

Expected:

- ROB Configuration
- ROB Access Item Reference
- ROB Authorization Form
- Authorized Access Detail

Negative:

No custom request/task/signature/approval/PDF/exception/audit/attachment business tables exist.

The implementation plan expressly limits the design to four custom business tables.

---

## W1-03 — Five Scoped Roles

Verify exactly the required functional roles exist:

- Staffing
- Analytics
- OM
- Compliance
- ROB Admin

No custom requester/subject role.

---

## W1-04 — Authorization Number Generation

Create Authorization Form.

Expected:

- unique Authorization Number;
- approved format;
- no collision.

---

## W1-05 — Access Detail Number Generation

Create Authorized Access Detail through controlled test setup.

Expected unique number.

---

## W1-06 — Unique Constraint — Case + Access Item

Attempt duplicate.

Expected:

**Rejected/prevented**

---

## W1-07 — Unique Constraint — Authorization + Access Item

Attempt duplicate.

Expected:

**Rejected/prevented**

---

## W1-08 — Orphan Access Detail

Attempt to create detail without required:

- Authorization Form;
- Source Case;
- Subject;
- Access Item.

Expected failure.

---

## W1-09 — Single Active Configuration

One active config:

Expected valid.

---

## W1-10 — Zero Active Configuration

Expected:

Decision processing would fail safely / Exception Review.

---

## W1-11 — Multiple Active Configurations

Expected:

Exception Review.

---

## W1-12 — Current Form Version

Verify configuration value is populated and usable.

---

## W1-13 — Grace Window

Baseline value = 90 days unless changed for controlled test.

---

## W1-14 — Reminder Thresholds

Baseline contains:

- 90
- 60
- 30.

---

## W1-15 — Six Access Items

Verify exactly the intended baseline records exist and are active.

---

## W1-16 — WPC Configuration

Expected:

- Category = Analytics
- Requires OM = true
- Provisioning = ARM
- Target = OAS/WPC
- Form mapping = Workforce Profile Charts

---

## W1-17 — No SSN Fields

Inspect custom schema.

Expected:

No SSN or equivalent sensitive-PII field introduced.

---

## W1-18 — System-Created Access Detail Behavior

Verify manual user creation/edit is not part of ordinary experience.

---

## W1-19 — Build and Frozen-Key Build

Both pass.

---

# 10. Wave 2 — Intake Tests

## W2-01 — HR Systems Service Visible

Employee sees Staffing service in Employee Center.

Supports AC-1.

---

## W2-02 — HR Data/Reports Service Visible

Employee sees Analytics service.

Supports AC-2.

---

## W2-03 — Staffing Submission

Submit valid Staffing request.

Expected:

- one native HR Case;
- Staffing category;
- correct subject/requester.

Maps AC-1.

---

## W2-04 — Analytics Submission

Submit valid Analytics request.

Maps AC-2.

---

## W2-05 — Self Submission

Expected:

Requester = logged-in user
Subject = logged-in user.

---

## W2-06 — Self-Submission Bypass

Attempt to submit for Employee B as Employee A.

Expected:

Denied / blocked.

---

## W2-07 — Access Reference Selection

Verify items come from active Access Item Reference.

---

## W2-08 — Inactive Item Not Selectable

Deactivate test access item.

Expected:

not selectable for new request.

---

## W2-09 — Staffing Category Filter

Only Staffing items shown on Staffing service.

---

## W2-10 — Analytics Category Filter

Only Analytics items shown on Analytics service.

---

## W2-11 — WPC Selectable

WPC appears as a distinct Analytics access option.

---

## W2-12 — Business Justification Required

Blank justification.

Expected:

Submission blocked or controlled exception.

---

## W2-13 — Contractor End Date

Contractor + no date.

Expected:

Blocked.

---

## W2-14 — Auditor/Investigator End Date

No date.

Expected:

Blocked.

---

## W2-15 — IPA Field

IPA selectable and rendered in request context.

Exact end-date rule follows approved configuration.

---

## W2-16 — Supervisor Derivation

Correct supervisor populated.

---

## W2-17 — Missing Supervisor

Expected:

Exception Review.

---

## W2-18 — Profile Context

Position and DIR/DIV populate correctly.

---

## W2-19 — WPC Missing OM

Expected:

Exception Review.

---

## W2-20 — No Downstream Lifecycle Yet

At Wave 2 baseline, submission does not prematurely create:

- Authorization Form;
- Access Details;
- signature;
- approval;
- fulfillment.

---

## W2-21 — Agency HR Core-owned Snapshot Persistence

Status in PDI: **BLOCKED-PDI**. Required agency Option B tests:

1. Payroll Position snapshot persists after database reread.
2. Payroll Organization snapshot persists after database reread.
3. Payroll Supervisor snapshot persists after database reread.
4. Workforce Administration Position snapshot persists after database reread.
5. Workforce Administration Organization snapshot persists after database reread.
6. Workforce Administration Supervisor snapshot persists after database reread.
7. Forged client snapshot values are ignored or rejected.
8. Ordinary employees cannot modify snapshots after creation.
9. Any retained support correction is role-restricted and records prior values,
   actor, timestamp, and reason.

All tests must use an HR Core-owned mechanism and must prove that no broad
cross-scope privilege is required. Passing source/unit tests alone is not
runtime acceptance.

---

# 11. Wave 3 — Decision Tests

## W3-01 — No Existing Form

Expected path:

**New**

Supports AC-3.

---

## W3-02 — Active Current Fully Covered

Expected:

**Reuse**

Supports AC-4.

---

## W3-03 — Active Current Partial Coverage

Expected:

**Amendment**

Supports AC-5.

---

## W3-04 — Active Current No Coverage

Expected:

**Amendment**

---

## W3-05 — Expired Form

Expected:

**Renewal**

Supports AC-6.

---

## W3-06 — Lapsed Form

Expected Renewal.

---

## W3-07 — Obsolete Form Version

Expected Renewal.

---

## W3-08 — Revoked Form

Expected New.

---

## W3-09 — Full Coverage + Material Org Change

Expected Amendment subject to approved material-change rule.

---

## W3-10 — Position/Role Change

Expected Amendment under approved rule.

---

## W3-11 — Business Justification Change

Expected Amendment under approved deterministic rule.

---

## W3-12 — Duplicate Open Request

Expected:

Exception Review + existing case reference.

---

## W3-13 — Invalid Config — Zero

Expected Exception.

---

## W3-14 — Invalid Config — Multiple

Expected Exception.

---

## W3-15 — Conflicting Active Forms

Expected Exception.

---

## W3-16 — Requested Access Coverage Calculation

Validate Covered set.

---

## W3-17 — Uncovered Access Calculation

Validate Uncovered set.

---

## W3-18 — WPC Fully Covered

Active current form includes WPC.

Expected Reuse if no other disqualifier.

---

## W3-19 — WPC Added

Expected Amendment.

---

## W3-20 — Revoked WPC Form

Expected New.

---

## W3-21 — Employee Signature Flags

Expected:

| Path | Employee Signature |
|---|---|
| New | Yes |
| Reuse | No |
| Amendment | Yes |
| Renewal | Yes |
| Exception | No |

---

## W3-22 — Supervisor Action Flags

Normal paths require supervisor approval/signature.

---

## W3-23 — Grace Window

Test signing/effective scenario inside configured window.

Expected following-cycle expiration.

Supports AC-21.

---

## W3-24 — Outside Grace Window

Expected upcoming recertification expiration.

---

## W3-25 — Earlier Access End Date

Expected earlier date controls expiration.

---

## W3-26 — Decision Idempotency

Run same decision twice.

Expected:

same outputs.

---

## W3-27 — Decision Has No Side Effects

After repeated runs:

No:

- Authorization Form;
- Access Detail;
- task;
- signature;
- approval;
- PDF.

---

# 12. Wave 4 — Authorization / Signature / PDF Tests

## W4-01 — New Draft Creation

New path creates one Authorization Form.

---

## W4-02 — New Scope Details

One Access Detail per full requested approved scope.

---

## W4-03 — Amendment Scope Carry-Forward

Prior active scope + delta represented on new form.

---

## W4-04 — Renewal Scope Carry-Forward

Complete prior approved scope + approved changes represented.

---

## W4-05 — Reuse Creates No Form

Expected no duplicate Authorization Form.

---

## W4-06 — Reuse Creates No Details

Expected no duplicate Access Details.

---

## W4-07 — Form Version Before Signature

Blank Form Version must prevent employee signature initiation.

---

## W4-08 — Employee Signature

New path.

Expected:

- correct subject;
- signature captured;
- signer identity;
- timestamp.

Supports AC-19.

---

## W4-09 — Reuse No Employee Signature

Expected original employee signature retained.

---

## W4-10 — Supervisor Approval

Expected native approval.

---

## W4-11 — Supervisor Signature

Expected native electronic signature.

---

## W4-12 — Approval Without Signature

Expected:

No fulfillment.

Supports AC-7.

---

## W4-13 — Signature Without Approval

Expected:

No fulfillment.

---

## W4-14 — Employee Signature Incomplete

Expected pending.

---

## W4-15 — Supervisor Denial

Expected:

- Denied;
- no fulfillment.

---

## W4-16 — PDF Generated

New authorization produces signed PDF.

Supports AC-20.

---

## W4-17 — PDF Required Fields

Verify PDF contains:

- approved policy text;
- subject;
- position;
- organization;
- employment type;
- access scope;
- Business Justification;
- employee signature;
- supervisor signature;
- timestamps;
- Form Version;
- Authorization Number;
- effective/expiration metadata.

---

## W4-18 — WPC Field on PDF

Expected explicit WPC field rendered correctly.

---

## W4-19 — IPA Field on PDF

Expected explicit IPA field rendered correctly.

---

## W4-20 — Exact Signed Form Linkage

Case and authorization resolve to exact signed PDF.

Supports AC-18.

---

## W4-21 — Single Authoritative PDF

Expected exactly one authoritative final PDF.

---

## W4-22 — Reuse PDF Unchanged

Reuse does not regenerate historical PDF.

---

## W4-23 — Amendment Supersession

Prior form remains active until replacement activates.

Then:

- prior → Superseded;
- new → Active.

---

## W4-24 — Renewal Supersession

Same replacement behavior.

---

## W4-25 — PDF Failure

Simulate failure.

Expected:

No activation / no fulfillment.

---

## W4-26 — Direct Manual Status Change Attempt

Attempt Draft → Active without prerequisites.

Expected blocked.

---

## W4-27 — Reuse Qualifying Authorization

Exactly one Active, subject-matched, current-version, unexpired authorization
that fully covers requested scope permits request-level attestation.

---

## W4-28 — Reuse Historical-State Rejection

Expired, Lapsed, Revoked, and Superseded authorizations each reject Reuse
continuation and require decision re-evaluation/Exception.

---

## W4-29 — Reuse Coverage Revalidation

Any uncovered requested item rejects Reuse continuation.

---

## W4-30 — Reuse Supervisor Approval and Signature

Only the intended current Supervisor may persist APPROVED plus completed native
attestation, signer, timestamp, Document Task, and execution evidence.

---

## W4-31 — Reuse Denial Isolation

DENIED/REFUSED makes the current request ineligible while leaving the reused
Authorization Form, Access Details, employee evidence, and PDF unchanged.

---

## W4-32 — Reuse Idempotency

Repeating unchanged completed context creates no duplicate signing execution,
evidence reference, Authorization Form, or Access Detail.

---

## W4-33 — Reuse Context Invalidation

A changed Supervisor, requested scope, decision, or qualifying authorization
context invalidates prior attestation and requires re-evaluation.

---

# 13. Wave 5 — Fulfillment Tests

## W5-01 — Staffing Routing

FPPS/eOPF/USA Staffing produce Staffing task.

Supports AC-8.

---

## W5-02 — Analytics Routing

Analytics items produce Analytics task.

Supports AC-9.

---

## W5-03 — Mixed Request

Creates:

- one Staffing task;
- one Analytics task;
- one parent case.

Supports AC-10.

---

## W5-04 — Multiple Staffing Items Grouped

One Staffing task, not one per item.

---

## W5-05 — Multiple Analytics Items Grouped

One Analytics task.

---

## W5-06 — WPC OM Task

WPC creates separate OM task after authorization.

Supports AC-11.

---

## W5-07 — OM Assignment

Correct OM receives task.

---

## W5-08 — Missing OM

Expected Exception Review, not arbitrary assignment.

---

## W5-09 — WPC Closure Guard

Parent remains open until Analytics and OM requirements complete/validated/waived.

Supports AC-12.

---

## W5-10 — Staffing Completion Evidence

Task cannot qualify as complete without evidence.

---

## W5-11 — Analytics Completion Evidence

Same.

---

## W5-12 — OM Completion Evidence

Required.

---

## W5-13 — Staffing Detail Activation

Only Staffing-related applicable details activate.

---

## W5-14 — Analytics Remains Pending

When Analytics task remains incomplete.

---

## W5-15 — OM Overdue

Expected escalation, no false completion.

---

## W5-16 — Task Creation Idempotency

Retry orchestration.

Expected no duplicate tasks.

---

## W5-17 — Parent Closure Guard

Open required task prevents completion.

---

## W5-18 — Waiver

Where validly supported, waiver requires evidence and permits closure only according to approved rules.

---

## W5-19 — No External Provisioning

Verify no direct API/provisioning action occurs.

---

# 14. Wave 6 — Renewal / Lapse Tests

## W6-01 — 90-Day Reminder

Expected exactly one reminder.

Supports AC-22.

---

## W6-02 — 60-Day Reminder

Expected exactly one.

---

## W6-03 — 30-Day Reminder

Expected exactly one.

---

## W6-04 — Reminder Retry

Run scheduled process twice.

Expected no duplicate.

---

## W6-05 — Renewal Dashboard Before Scheduler

Form due within threshold appears even before scheduled notification job.

Supports AC-16.

---

## W6-06 — Grace Window

Validate following-cycle expiration.

Supports AC-21.

---

## W6-07 — Earlier End Date

Expected earlier expiration.

---

## W6-08 — Expiration

Authorization reaches expiration correctly.

---

## W6-09 — No Replacement

Expected Lapsed.

Supports AC-23.

---

## W6-10 — Lapse Notification

One notice.

---

## W6-11 — Lapse Retry

No duplicate notice.

---

## W6-12 — Active Replacement Exists

Expected:

- no inappropriate lapse notice;
- prior appropriately Superseded;
- RPT-8 exclusion.

---

## W6-13 — RPT-8 Inclusion

Lapsed/no replacement appears.

---

## W6-14 — RPT-8 Exclusion

Valid replacement excluded.

---

## W6-15 — No External Deprovisioning

No automatic downstream access removal.

---

# 15. Wave 7 — Security Tests

## W7-01 — Employee Own Experience

Employee may access approved own request.

---

## W7-02 — Employee Other Record

Attempt access Employee B's authorization.

Expected denied.

---

## W7-03 — Supervisor Assigned Approval

Expected allowed.

---

## W7-04 — Supervisor Unrelated Approval

Expected denied.

---

## W7-05 — Staffing Assigned Work

Expected allowed.

---

## W7-06 — Staffing Unrelated Authorization

Expected denied.

---

## W7-07 — Analytics Assigned Work

Expected allowed.

---

## W7-08 — Analytics Unrelated Authorization

Expected denied.

---

## W7-09 — OM Assigned WPC Task

Expected allowed minimum context.

---

## W7-10 — OM Repository Browse

Expected denied.

---

## W7-11 — Compliance Current Form

Expected read.

Supports AC-13.

---

## W7-12 — Compliance Historical Form

Expected read.

Supports AC-14.

---

## W7-13 — Compliance Update Attempt

Expected denied.

---

## W7-14 — Unrelated Authorization Form

Expected denied.

---

## W7-15 — Unrelated Access Detail

Expected denied.

---

## W7-16 — Direct PDF URL — Unrelated User

Expected denied.

---

## W7-17 — Protected Signature Fields

Fulfiller attempts update.

Expected denied.

---

## W7-18 — Protected Approval Fields

Expected denied.

---

## W7-19 — Form Version Update by Fulfiller

Expected denied.

---

## W7-20 — Historical Status Update

Expected denied.

---

## W7-21 — Supersession Update

Expected denied for ordinary persona.

---

## W7-22 — Notification Privacy

Representative messages contain no:

- SSN;
- signed PDF;
- signature image;
- full sensitive form;
- inappropriate justification.

Supports AC-17, AC-24.

---

## W7-23 — No SSN Storage

Inspect records/tables.

Supports AC-24.

---

## W7-24 — Direct Attachment Security for Compliance

Expected allowed.

---

## W7-25 — Report Drilldown Security

Report does not bypass record ACL.

---

# 16. Wave 8 — Reporting Tests

## W8-01 — RPT-1 Staffing Workload

Counts reconcile to Staffing HR Tasks.

---

## W8-02 — RPT-2 Analytics Workload

Counts reconcile.

---

## W8-03 — RPT-3 OM Actions

Counts reconcile.

---

## W8-04 — RPT-4 Supervisor Approval

Pending actions accurate.

---

## W8-05 — RPT-5 Renewal

90/60/30, Expired, Obsolete, Revoked categories correct.

---

## W8-06 — RPT-6 Employee Audit Retrieval

Search by employee.

Supports AC-13.

---

## W8-07 — RPT-6 Organization Retrieval

Search by DIR/DIV.

Supports AC-14.

---

## W8-08 — RPT-6 Form Version

Correct historical Form Version.

---

## W8-09 — RPT-7 Enterprise Volume

One mixed request counted as one case.

---

## W8-10 — RPT-7 WPC Split

WPC correctly identified.

---

## W8-11 — RPT-8 Lapsed

Correct inclusion.

---

## W8-12 — RPT-8 Replacement Exclusion

Correct exclusion.

---

## W8-13 — Dashboard ACL

Unauthorized user cannot obtain hidden source data.

---

## W8-14 — Report Export Security

Export does not bypass row/field access.

---

# 17. Acceptance Criteria Mapping

The following preserves AC-1 through AC-24.

| AC | Test Coverage |
|---|---|
| AC-1 Staffing submit | W2-03 |
| AC-2 Analytics submit | W2-04 |
| AC-3 No form → New | W3-01 |
| AC-4 Active covered | W3-02 |
| AC-5 Partial coverage | W3-03 |
| AC-6 expired/revoked/superseded/obsolete/renewal | W3-05–W3-15 |
| AC-7 approval/signature gate | W4-10–W4-13 |
| AC-8 Staffing routing | W5-01 |
| AC-9 Analytics routing | W5-02 |
| AC-10 Mixed split | W5-03 |
| AC-11 WPC OM action | W5-06 |
| AC-12 WPC closure guard | W5-09 |
| AC-13 individual retrieval | W7-11 / W8-06 |
| AC-14 org retrieval | W7-12 / W8-07 |
| AC-15 separate dashboards | W8-01 / W8-02 |
| AC-16 renewal 30/60/90 | W6-05 / W8-05 |
| AC-17 notification privacy | W7-22 |
| AC-18 exact form linkage | W4-20 |
| AC-19 employee + supervisor e-sign | W4-08 / W4-11 |
| AC-20 signed PDF | W4-16–W4-19 |
| AC-21 grace window | W3-23 / W6-06 |
| AC-22 90/60/30 reminders | W6-01–W6-04 |
| AC-23 lapse + RPT-8 | W6-09–W6-14 |
| AC-24 no SSN/sensitive PII | W7-22 / W7-23 |

The source AC-1 through AC-24 are explicitly defined in the requirements package.

---

# 18. Exception Test Coverage

| Exception | Test |
|---|---|
| EX-01 Missing Supervisor | W2-17 |
| EX-02 Denial | W4-15 |
| EX-03 Missing OM | W2-19 / W5-08 |
| EX-04 Material Change | W3-09–W3-11 |
| EX-05 Missing End Date | W2-13–W2-15 |
| EX-06 Duplicate Request | W3-12 |
| EX-07 Mixed Request | W5-03 |
| EX-08 Incomplete Signature | W4-14 |
| EX-09 OM Overdue | W5-15 |
| EX-10 Withdrawal | UAT/exception test below |
| EX-11 Invalid Config | W3-13–W3-14 |
| EX-12 Conflicting Forms | W3-15 |
| EX-13 Invalid Access Item | W2-08 |
| EX-14 Missing Required Data | W2-12 |
| EX-15 PDF Failure | W4-25 |
| EX-16 Evidence Incomplete | W5-10–W5-12 |
| EX-17 Unsupported Capability | Appendix L gate tests |

---

# 19. Cross-Wave Idempotency Tests

## IDP-01 — Authorization Form Creation

Repeat same lifecycle event.

Expected one form.

---

## IDP-02 — Access Detail Creation

Expected no duplicate details.

---

## IDP-03 — Decision Recalculation

No downstream side effects.

---

## IDP-04 — Staffing Task

No duplicate.

---

## IDP-05 — Analytics Task

No duplicate.

---

## IDP-06 — OM Task

No duplicate.

---

## IDP-07 — Exception Task

No duplicate for same unresolved cycle.

---

## IDP-08 — PDF Finalization

No duplicate authoritative final PDF.

---

## IDP-09 — 90-Day Reminder

No duplicate.

---

## IDP-10 — 60-Day Reminder

No duplicate.

---

## IDP-11 — 30-Day Reminder

No duplicate.

---

## IDP-12 — Lapse Notice

No duplicate.

---

## IDP-13 — Supersession

Repeated transition does not corrupt linkage.

---

# 20. State Negative Tests

## STN-01

Draft → Active without signatures.

Expected denied.

## STN-02

Pending Employee Signature → Fulfillment.

Denied.

## STN-03

Supervisor approval only → fulfillment.

Denied.

## STN-04

Denied → Active.

Denied.

## STN-05

Superseded → Active.

Denied.

## STN-06

Revoked → Active.

Denied.

## STN-07

Expired → Active through direct edit.

Denied.

## STN-08

Lapsed → Active through direct edit.

Denied.

## STN-09

Obsolete → Reuse.

Denied by decision logic.

---

# 21. Form 1768 Tests

## FORM-01

Page 1 approved policy content present.

The source Form 1768 contains the Responsibility / Accountability requirements that must be retained in the generated artifact.

## FORM-02

Employee Name.

## FORM-03

Position Title.

## FORM-04

Directorate/Office.

## FORM-05

Federal field.

## FORM-06

Contractor field.

## FORM-07

Contractor End Date.

## FORM-08

IPA field.

## FORM-09

Auditor/Investigator field.

## FORM-10

Auditor/Investigator End Date.

## FORM-11

FPPS/WTTS.

## FORM-12

eOPF.

## FORM-13

USA Staffing.

## FORM-14

OAS/DataMart.

## FORM-15

Human Capital Reports.

## FORM-16

Workforce Profile Charts.

## FORM-17

Business Justification.

## FORM-18

Employee Signature.

## FORM-19

Supervisor Signature.

## FORM-20

Date/timestamp treatment.

## FORM-21

Form Version.

## FORM-22

Authorization Number.

## FORM-23

Effective Date.

## FORM-24

Expiration Date.

---

# 22. Notification Tests

For each NOT-01 through NOT-13, validate:

- trigger;
- recipient;
- timing;
- link;
- no prohibited content;
- duplicate suppression.

Key privacy tests:

- no signed PDF;
- no SSN;
- no signature images;
- no unnecessary Business Justification.

---

# 23. Configuration Tests

## CFG-T01

Exactly one Active config.

## CFG-T02

Form Version change triggers obsolete behavior.

## CFG-T03

Grace days change affects future calculation only.

## CFG-T04

Reminder threshold change respected.

## CFG-T05

Inactive Staffing group produces safe failure.

## CFG-T06

Inactive Analytics group produces safe failure.

## CFG-T07

WPC Requires OM disabled unexpectedly.

Expected configuration/control test failure under approved MVP baseline.

## CFG-T08

Historical form unchanged after config update.

---

# 24. Reporting Reconciliation Tests

For each RPT-1 through RPT-8:

1. establish known synthetic records;
2. calculate expected count manually;
3. run report;
4. compare;
5. drill into results;
6. confirm record ACL;
7. test export where allowed.

---

# 25. Performance Tests

Minimum targeted checks:

- existing authorization lookup;
- Access Detail related list;
- decision-engine query;
- renewal daily selection;
- RPT-5;
- RPT-6 audit retrieval;
- RPT-8;
- scripted ACL helper.

The implementation plan explicitly calls for performance checks in Wave 8.

No formal numeric SLA is defined by the source; performance issues shall therefore be evaluated for material usability/blocking risk rather than against invented thresholds.

---

# 26. Accessibility Tests

Employee Center and key interactive experiences should be checked for:

- keyboard usability where applicable;
- clear labels;
- required field indicators;
- accessible error messages;
- link labels;
- no reliance solely on color;
- readable notification content.

The Wave 8 plan requires accessibility validation.

---

# 27. Clean-Install Tests

## CI-01

Clean baseline established.

## CI-02

Class A source installs successfully.

## CI-03

Required Class B configuration restored/transformed.

## CI-04

Class C steps completed from documentation.

## CI-05

Exactly four custom tables exist.

## CI-06

No prohibited artifacts appear.

## CI-07

Configuration resolves.

## CI-08

Employee Center services work.

## CI-09

Decision smoke tests work.

## CI-10

Signature/PDF smoke test works.

## CI-11

Fulfillment smoke test works.

## CI-12

Security smoke test works.

## CI-13

Reporting smoke test works.

The implementation plan requires a clean-install rehearsal before release readiness.

---

# 28. Upgrade / Reinstall Regression

The project shall not use `--reinstall` as a routine defect workaround.

Regression shall validate that approved deployment procedures do not:

- duplicate seed data;
- create duplicate fields;
- create duplicate access items;
- reset configuration incorrectly;
- alter historical records.

---

# 29. PII Tests

## PII-01

No SSN field in custom schema.

## PII-02

No SSN entered in synthetic request data.

## PII-03

Notifications contain no SSN.

## PII-04

PDF test data contains no actual sensitive production PII.

## PII-05

Reports do not expose unnecessary sensitive data.

---

# 30. UAT Scenario 1 — New Staffing Authorization

Persona:

Federal Employee

Request:

USA Staffing

Expected:

1. submit Staffing request;
2. New path;
3. employee signs;
4. supervisor approves;
5. supervisor signs;
6. PDF generated;
7. Staffing task created;
8. Staffing completes;
9. case completes;
10. authorization retrievable.

---

# 31. UAT Scenario 2 — Reuse

Existing Active/current form includes FPPS/WTTS.

Employee requests FPPS/WTTS.

Expected:

- Reuse;
- no new employee signature;
- no new form;
- no duplicate details;
- supervisor approval/signature;
- fulfillment proceeds;
- original PDF unchanged.

---

# 32. UAT Scenario 3 — Amendment

Existing Active form:

Human Capital Reports.

New request:

Human Capital Reports + WPC.

Expected:

- Amendment;
- old scope carried forward;
- WPC added;
- employee signs;
- supervisor approves/signs;
- new PDF includes explicit WPC field;
- Analytics + OM tasks;
- old authorization superseded only after new activation.

---

# 33. UAT Scenario 4 — Renewal

Existing form expired/current historical scope.

Expected:

- Renewal;
- complete scope carried forward;
- current Form Version;
- new signatures;
- new PDF;
- prior form historical/superseded.

---

# 34. UAT Scenario 5 — Mixed Request

Request:

USA Staffing + Human Capital Reports.

Expected:

- one parent HR Case;
- one Staffing task;
- one Analytics task;
- independent completion;
- parent closes only when both complete.

---

# 35. UAT Scenario 6 — WPC

Request:

Workforce Profile Charts.

Expected:

- Analytics path;
- explicit WPC Form 1768 field;
- OM task;
- ARM action evidence;
- OAS/WPC target;
- no premature closure.

---

# 36. UAT Scenario 7 — IPA

Employment Type:

IPA.

Expected:

- explicit IPA field on Form 1768;
- configured end-date rule enforced;
- correct expiration calculation.

---

# 37. UAT Scenario 8 — Denial

Supervisor denies.

Expected:

- employee notified;
- request denied;
- no fulfillment;
- audit history retained.

---

# 38. UAT Scenario 9 — Renewal/Lapse

Authorization approaches expiration.

Expected:

- 90/60/30 reminders;
- no duplicate reminders;
- no renewal completed;
- expires/lapses;
- lapse notice;
- RPT-8 entry;
- no automatic external deprovisioning.

---

# 39. UAT Scenario 10 — Compliance Retrieval

Compliance searches:

- by Employee;
- by Organization.

Expected:

- current/historical forms;
- access details;
- exact PDF;
- read-only behavior.

---

# 40. Withdrawal Test

## UAT-EX-01

Employee withdraws eligible open request.

Expected:

- case Withdrawn;
- downstream processing stops;
- partial history retained;
- no new active authorization.

This maps EX-10.

---

# 41. Release-Blocking Test Failures

Release shall not proceed if any of the following are unresolved:

1. self-submission can be bypassed;
2. unauthorized user can read Authorization Form;
3. unauthorized user can retrieve signed PDF;
4. fulfillment starts before required signatures/approval;
5. Reuse creates duplicate form/details;
6. Amendment loses prior active scope;
7. Renewal fails to preserve complete scope;
8. Revoked form can reactivate;
9. WPC can close without required OM action;
10. PDF is missing or incorrect;
11. multiple authoritative PDFs remain;
12. reminder/lapse notifications duplicate;
13. RPT-8 includes records with active replacements;
14. SSN/sensitive PII is stored;
15. reports bypass ACLs;
16. clean install requires undocumented manual repair;
17. required Australia capability remains unproven.

---

# 42. Test Record Template

Each detailed test shall record:

| Field | Description |
|---|---|
| Test ID | Stable test identifier |
| Requirement ID | BR/FR/AC/SEC/AUD/RPT/EX |
| Wave | Delivery wave |
| Test Type | Positive / Negative / Security / etc. |
| Preconditions | Required state |
| Persona | Test user |
| Input Data | Synthetic data |
| Steps | Exact actions |
| Expected Result | Required outcome |
| Actual Result | Observed |
| Status | Pass/Fail/etc. |
| Evidence Type | ATF/MAN/SEC/etc. |
| Evidence Reference | Screenshot/log/test result |
| Defect ID | if failed |
| Retest Status | if applicable |

---

# 43. Defect Severity Guidance

## Critical

Security, compliance, or data-integrity failure.

Examples:

- unauthorized PDF access;
- no signature gate;
- wrong employee authorization;
- PII storage.

## High

Core business process cannot complete correctly.

## Medium

Important function works incorrectly but safe workaround exists.

## Low

Cosmetic/documentation/nonblocking issue.

Final production severity standards may align to agency standards if different.

---

# 44. Regression Trigger Rules

Regression shall run after changes to:

- data model;
- decision engine;
- authorization state logic;
- document template;
- signature sequencing;
- fulfillment flow;
- renewal logic;
- ACLs;
- reports;
- configuration schema.

---

# 45. Wave Exit Testing Rule

A wave cannot exit based solely on:

- source written;
- build passed;
- records exist.

It must satisfy the applicable:

- source gate;
- build gate;
- install gate;
- runtime gate;
- security gate;
- test gate.

This follows the implementation plan's evidence-separation model.

---

# 46. Test Automation Strategy

## Prefer ATF / Automated

For:

- decision logic;
- state guards;
- field validation;
- task creation;
- idempotency;
- renewal calculations;
- ACL outcomes where reliable;
- report-source logic.

## Manual Where Necessary

For:

- current Document Templates visual behavior;
- signature UI where ATF unreliable;
- PDF visual/content inspection;
- accessibility review;
- some dashboard rendering.

Manual does not mean informal.

Each manual test shall have an exact procedure and expected result.

## R4.2 native capability evidence

| Test | Result | Evidence |
|---|---|---|
| Minimal template rendering | PASS with defect | R4.2 content rendered, but copied source template also rendered unrelated sample body |
| Employee signer routing | PASS | DOCT0001003 assigned/closed by Amos Linnan |
| Supervisor signer routing | PASS | DOCT0001004 created only after employee completion and closed by Rebekah Lindboe |
| Separate supervisor approval | NOT PROVEN | Native task combined acknowledgement and ServiceNow Sign; no separate approval record |
| Incomplete chain | PASS | Execution remained in progress and no final PDF existed after employee-only completion |
| Final PDF | PASS | `application/pdf` attachment `0876f06cc33ecb1068a35f2b2b01313a` on HRC0001026 |
| Completed artifact control | PARTIAL PASS | Closed task/read-only signer UI proven; replacement/version audit unproven |
| Historical retention | NOT PROVEN | No second completed signed document created |
| Supervisor refusal | NOT PROVEN | Refusal control visible; denial execution not completed |
| Full Form 1768 rendering | NOT RUN | Minimal path did not meet every `R4-PDI-01` criterion |

`R4-PDI-01` remains OPEN. `R2-AGENCY-01` remains OPEN.

## R4.2.1 native capability evidence

| Test | Result | Evidence |
|---|---|---|
| Explicit supervisor approval/signature | PASS for combined native stage | DOCT0001006 body contains explicit `APPROVED`; Rebekah identity, timestamp, signature, and PDF persisted. |
| Executed supervisor refusal | PASS | DOCT0001008 persisted refusal state `7`, identity, timestamp, and reason; no PDF on HRC0001032. |
| Independent signed history | PASS | V1 `0876f06cc33ecb1068a35f2b2b01313a` and V2 `00f925a4c33a0f1068a35f2b2b0131a2` remain distinct with independent signer evidence. |
| Clean Form 1768 rendering | PARTIAL PASS | PDF `668b256cc33a0f1068a35f2b2b0131f6` cleanly renders April 2026 structure, IPA/WPC electronic extensions, signatures, and separate metadata; ARM/sample content absent. |
| Final Authorization Date fidelity | FAIL / BLOCKED | `${Date}` resolves at preparation time, not from the persisted supervisor signature timestamp. |
| Electronic signature timestamp rendering | FAIL / BLOCKED | Actual employee/supervisor timestamps exist on native tasks only after signing and were not inserted into the already signed body. |
| Cleanup/security | PASS | Test binding removed, templates non-published, temporary roles zero, broad privilege removed. |

`R4-PDI-01` is BLOCKED; platform-owner design input is required. Production R4
lifecycle implementation and Wave 5 remain out of scope. `R2-AGENCY-01`
remains OPEN.

---

# 47. ATF Suite Structure

Recommended suites:

1. `ROB - Intake`
2. `ROB - Decision`
3. `ROB - Authorization`
4. `ROB - Signature and PDF`
5. `ROB - Fulfillment`
6. `ROB - Renewal`
7. `ROB - Security`
8. `ROB - Reporting`

This aligns with the Wave 8 test-suite categories in the implementation plan.

---

# 48. Test Traceability Governance

`docs/TEST-MATRIX.md` shall remain aligned with:

- Appendix A — RTM
- Appendix B — Form Mapping
- Appendix C — Data Model
- Appendix D — State Model
- Appendix E — Decision Matrix
- Appendix F — Security
- Appendix G — Notifications
- Appendix H — Reporting
- Appendix I — Exceptions
- Appendix J — Configuration
- Appendix K — Artifact Classification
- Appendix L — Capability Matrix

A changed requirement shall trigger impact analysis on relevant tests.

---

# 49. Test Data Reset

Synthetic test data shall support repeatable reset.

The test design shall avoid relying on progressively contaminated manual records.

Where possible:

- deterministic fixtures;
- stable synthetic personas;
- known expiration dates;
- controlled authorization histories.

---

# 50. Baseline Test Definition of Done

Testing is complete when:

1. AC-1 through AC-24 are all evidenced;
2. all BR/FR requirements have mapped tests;
3. EX-1 through EX-10 are tested;
4. derived implementation exceptions are tested;
5. all required positive tests pass;
6. all release-critical negative tests pass;
7. all persona security tests pass;
8. direct PDF tests pass;
9. New/Reuse/Amendment/Renewal all pass;
10. WPC passes;
11. IPA passes;
12. reminders/lapse pass;
13. RPT-1 through RPT-8 reconcile;
14. idempotency tests pass;
15. no PII violations exist;
16. required capability spikes are proven;
17. clean-install rehearsal passes;
18. UAT scenarios pass;
19. unresolved defects are dispositioned;
20. release-blocking conditions are cleared.

---

## R3 Conditional Source/Unit Evidence

The R3 deterministic suite implements W3-01 through W3-27 at source/unit level
using synthetic inputs. It verifies five decision classes, subject/status/
version/date/scope precedence, WPC as a distinct item, configuration-driven
expiration, ambiguous-policy Exception routing, idempotency, and zero Wave 4+
side effects. Native tests that require persisted Position, Organization, and
Supervisor snapshots remain **BLOCKED-AGENCY — R2-AGENCY-01**.

# 51. Baseline Test Statement

The HR Access ROB Authorization product shall be accepted only through **traceable runtime evidence demonstrating both successful behavior and enforcement of prohibited behavior**.

Testing shall prove not only that employees can request access, sign, receive approval, and reach fulfillment, but also that the system prevents unauthorized submission, premature fulfillment, duplicate compliance records, invalid state transitions, inappropriate reuse, unauthorized document access, privacy violations, and incorrect lapse/deprovisioning handling.

No wave or release shall be considered complete solely because code builds or metadata installs successfully.

## R4.2.2 Capability Evidence

| Test | Result | Evidence |
|---|---|---|
| Post-signature readiness | PASS | DOCT0001011 and APPROVED DOCT0001012 both closed with non-null committed timestamps before final generation. |
| Final Authorization Date | PASS | Rendered `2026-08-16` equals DATE(supervisor display timestamp `2026-08-16 03:29:14`). |
| Employee/Supervisor metadata | PASS | Rendered `2026-08-16 03:28:28` / `2026-08-16 03:29:14` match committed native task display values. |
| Generated Date/Time separation | PASS | Rendered `2026-08-16 03:47:35`, later and distinct from both signing events. |
| Final PDF/association | PASS | `b3d35f28c3328f1068a35f2b2b01319e`, `application/pdf`, on DOCT0001012. |
| History/integrity | PASS | Three independent final attachment sys_ids retained; signer tasks/execution unchanged. |
| Denial guard | PASS | Refused DOCT0001008 has zero attachments/final PDFs. |
| Form fidelity | PASS | Two-page clean April 2026 rendering; explicit selections; IPA/WPC labeled electronic extensions; ARM absent; metadata separate; no duplicate/sample body. |
| Cleanup/security | PASS | No new RCA/broad privilege, role, published test template, intake binding, Authorization Form, or Access Detail. |

These are native capability tests, not production lifecycle acceptance and not
evidence that `R2-AGENCY-01` is closed. They resolve `R4-PDI-01` and unblock R4
production lifecycle implementation; they do not mark R4 PASS.

## M4 Conditional Source/Unit Evidence

W5-01 through W5-09, W5-10 through W5-12, W5-15, IDP-04 through IDP-07,
FUL-PROHIB-01, and FUL-PROHIB-06 are covered by 26 deterministic local tests.
The suite proves gate enforcement, team grouping, mixed requests, WPC
Analytics-plus-OM routing, ARM/OAS separation, missing-OM Exception Review,
retry safety, completion/waiver evidence, item-specific activation, parent
closure, stopped-request guards, and privacy-safe/configuration-driven OM
escalation planning.

This is source/unit evidence only. Production HR Task creation, assignment,
persona security, notification delivery, and closure remain BLOCKED BY M2/M3.

## M2 approved profile/form snapshot tests

The focused M2 suite covers primary/fallback Position and Organization,
approved-root validation, manager default, active supervisor-group membership,
client-tamper rejection, pre-signature Authorization Form copy, historical
stability, fixed signer routing, missing-context stop, frozen Reuse behavior,
legacy-field retirement, and no-table/no-broad-write guards. Source/unit result:
19/19 PASS. Runtime evidence belongs to the current M2 ledger and must not be
recast as native-case persistence proof.
