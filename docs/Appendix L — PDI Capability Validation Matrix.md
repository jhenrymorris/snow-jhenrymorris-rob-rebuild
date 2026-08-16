# Appendix L — PDI Capability Validation Matrix
## HR Access Rules of Behavior Authorization

**Parent Document:** HR Access Rules of Behavior Authorization — Product Requirements Document
**PRD Version:** 1.0
**Appendix Version:** 1.0 Draft
**Platform:** ServiceNow HRSD — Australia Release
**Application:** HR Access ROB Authorization
**Application Scope:** `x_2108496_hr_acces`
**Development Baseline:** ServiceNow SDK 4.8.1 + Codex
**Target Environment:** ServiceNow Personal Developer Instance (PDI) for MVP validation

---

# 1. Purpose

This appendix defines the capability-validation gates that must be completed before implementation relies on native ServiceNow functionality in the Australia-release PDI.

Its purpose is to prevent:

- unsupported assumptions;
- cross-scope workarounds;
- unnecessary custom tables;
- unsupported metadata manipulation;
- false confidence based only on source/build success;
- PDI-specific limitations being mistaken for product defects.

This appendix shall guide:

- pre-Wave readiness;
- Wave 2 native HRSD validation;
- Wave 4 Document Templates and electronic-signature capability spike;
- Wave 5 native HR Task validation;
- Wave 7 attachment/security validation;
- Wave 8 ATF/reporting validation;
- agency-environment revalidation.

The approved implementation plan requires the PDI baseline to include the Australia release, native HRSD case/task capabilities, Employee Center, current Document Templates, synthetic identities/groups, and no production data. Development must stop when a required capability is unavailable rather than substitute an unapproved architecture.

---

# 2. Capability Validation Principle

A capability shall not be treated as available because:

- it is documented generally for ServiceNow;
- it existed in another release;
- it existed in another instance;
- Codex can generate source referring to it;
- a table name can be queried;
- a build succeeds.

For this project, capability is considered proven only when it is demonstrated in the target PDI through appropriate runtime evidence.

---

# 3. Capability Status Values

Each capability shall receive one status:

| Status | Meaning |
|---|---|
| **PROVEN** | Capability exists and required behavior is demonstrated in PDI. |
| **PARTIAL** | Capability exists but one or more required behaviors are limited. |
| **MANUAL** | Capability works but requires documented environment/manual configuration. |
| **BLOCKED-PDI** | Requirement cannot be validated or implemented in the PDI. |
| **UNSUPPORTED** | Platform does not support the required approach. |
| **DEFERRED** | Intentionally outside MVP/current wave. |
| **NOT TESTED** | Capability has not yet been validated. |

`NOT TESTED` shall never be treated as equivalent to `PROVEN`.

---

# 4. Evidence Types

Each capability shall include one or more evidence categories.

| Code | Evidence |
|---|---|
| SRC | Source evidence |
| BLD | SDK build evidence |
| INS | Install evidence |
| RUN | Runtime behavior |
| MAN | Manual validation |
| SEC | Security/impersonation test |
| ATF | Automated Test Framework |
| DOC | Configuration/documentation evidence |
| NEG | Negative test |
| ENV | Environment configuration evidence |

Runtime capability may not be proven using only SRC or BLD.

---

# 5. PDI Readiness Gate

Before Wave 1 implementation, confirm:

| ID | Capability | Required Result |
|---|---|---|
| PDI-01 | Instance release | Australia |
| PDI-02 | Scoped application development available | Yes |
| PDI-03 | ServiceNow SDK connectivity | Yes |
| PDI-04 | SDK alias configured | `rob-pdi` or controlled equivalent |
| PDI-05 | HRSD available | Yes |
| PDI-06 | `sn_hr_core_case` available | Yes |
| PDI-07 | `sn_hr_core_task` available | Yes |
| PDI-08 | Employee Center available | Yes |
| PDI-09 | Current Document Templates capability available | Yes or Wave 4 blocked |
| PDI-10 | Synthetic test identities possible | Yes |
| PDI-11 | Synthetic groups possible | Yes |
| PDI-12 | No production/sensitive test data required | Yes |

These readiness expectations are explicitly defined in the implementation plan.

---

# 6. PDI-01 — Australia Release

## Validation

Confirm the instance reports the **Australia** ServiceNow release.

## Status Requirement

**PROVEN**

## Evidence

- instance/system information screenshot or runtime record;
- build documentation.

## Stop Condition

If the PDI is not Australia, do not treat release-specific results as valid for the target PRD.

---

# 7. PDI-02 — Scoped Application Development

## Validation

Confirm the PDI permits development in:

**HR Access ROB Authorization**

with scope:

`x_2108496_hr_acces`

## Evidence

- application visible;
- source can install/update;
- runtime records can be created.

---

# 8. PDI-03 — ServiceNow SDK Connectivity

## Validation

Confirm SDK 4.8.1 can authenticate/connect to the PDI using the approved project alias.

## Required Tests

- source inspection;
- build;
- instance authentication;
- install/deploy of controlled test metadata.

## Status

PROVEN before Wave 1 source deployment.

---

# 9. PDI-04 — Build Modes

Validate:

- standard SDK build;
- frozen-key build.

Both shall pass where applicable.

The implementation plan requires both normal and frozen-key build validation and prohibits treating source compilation alone as runtime evidence.

---

# 10. HRSD Native Record Capabilities

The following capabilities shall be validated before custom substitutes are considered.

| ID | Capability |
|---|---|
| HRSD-01 | Native HR Case creation |
| HRSD-02 | Native HR Task creation |
| HRSD-03 | Parent/child case-task relationship |
| HRSD-04 | Assignment Group behavior |
| HRSD-05 | Assigned To behavior |
| HRSD-06 | Due Date behavior |
| HRSD-07 | Close Notes / Work Notes |
| HRSD-08 | Native state behavior |
| HRSD-09 | HR service linkage |
| HRSD-10 | Employee Center submission |

---

# 11. HRSD-01 — Native HR Case

## Target

`sn_hr_core_case`

## Required Result

The product can create the operational request as a native HR Case.

## Evidence

- case created from intended service/intake path;
- subject/requester values correct;
- required case fields readable;
- case number generated;
- case accessible through Employee Center as expected.

## Stop Condition

If the only implementation path requires replacing the native HR Case with a custom request table, stop the affected wave.

The architecture explicitly requires native HR Case as the operational parent.

---

# 12. HRSD-02 — Native HR Task

## Target

`sn_hr_core_task`

## Required Result

Native HR Task supports:

- Staffing fulfillment;
- Analytics fulfillment;
- OM ARM Role Assignment;
- Exception Review.

## Evidence

- task created;
- parent relation works;
- assignment works;
- due date works;
- task can retain completion evidence.

## Stop Condition

Do not create a custom task table if native HR Task support requires additional configuration.

---

# 13. HRSD-03 — Parent / Child Relationship

Validate:

```text
HR Case
  |
  +--> HR Task
```

including:

- one parent case;
- multiple child tasks;
- task querying;
- parent closure guard feasibility.

---

# 14. HRSD-04 — Assignment Groups

Validate native task assignment to:

- Staffing synthetic group;
- Analytics synthetic group;
- Exception synthetic group.

Operations Manager may use individual assignment.

Confirm inactive groups can be excluded from required configuration/reference selection where designed.

---

# 15. Native Case Field Feasibility Gate

Wave 2 shall assess whether required request data can be stored through:

1. suitable existing native HR Case fields;
2. supported custom fields on native HR Case;
3. supported source/transform/manual configuration.

The implementation shall not assume cross-scope field creation is supported.

The approved Wave 2 plan explicitly requires a feasibility spike and native-first evaluation.

---

# 16. CASE-01 — Custom Field Extension on Native HR Case

Validate whether the scoped application can safely create/use required supporting fields on the native HR Case.

Candidate logical fields include:

- Authorization Path
- Related Existing Authorization
- Related Final Authorization
- Business Justification if native field is insufficient
- Access End Date
- Operations Manager
- Covered Access
- Uncovered Access
- Exception Reason

## Possible Result

- PROVEN
- PARTIAL
- MANUAL
- UNSUPPORTED

## Stop Rule

If unsupported, identify a supported native or transform-based design.

Do not create a custom request table.

## CASE-01A — R2 Snapshot Population Outcome

The PDI can host the six application-owned snapshot dictionaries but cannot
safely populate them from the HR Access scope across the native HR Core table
boundary. Both target subclasses expose Read but disallow cross-scope Create,
Update, Delete, and web-service access. Same-record assignment, direct producer
assignment, app-scoped mapped variables, exact table Write access, and available
declarative mechanisms did not yield a supported secure solution.

Status: **BLOCKED-PDI**.

Platform-owner Option B resolves the architecture direction: an agency HR
Core-owned controlled mechanism must populate the fields from authenticated/
subject profile data. Agency validation must cover committed persistence on
both subclasses, forged requester/subject/snapshot inputs, ordinary-user field
immutability, and any approved audited correction path. No broad privilege or
replacement data model is permitted.

---

# 17. CASE-02 — Field Label Validation

Before adding a duplicate field, inspect existing native fields.

Example:

Business Justification must be validated against actual Australia dictionary behavior rather than assumed.

The implementation plan specifically calls for runtime validation of the Business Justification dictionary label.

---

# 18. TASK-01 — Custom Field Extension on Native HR Task

Validate support for logical fields such as:

- Task Type
- Related Authorization Form
- Related Access Items
- Provisioning System
- Target System
- Completion Evidence
- Provisioning Complete
- Waiver Result
- Exception Reason

Use native equivalents first.

---

# 19. Employee Center Capability Matrix

| ID | Capability | Required |
|---|---|---:|
| EC-01 | HR Systems service visible | Yes |
| EC-02 | HR Data/Reports service visible | Yes |
| EC-03 | self-submission enforced | Yes |
| EC-04 | requested access reference selection | Yes |
| EC-05 | dynamic category filtering | Yes |
| EC-06 | conditional end-date validation | Yes |
| EC-07 | Business Justification validation | Yes |
| EC-08 | supervisor derivation | Yes |
| EC-09 | profile values derived | Yes |
| EC-10 | WPC available under Analytics path | Yes |

The Wave 2 plan requires both Employee Center services, reference-based access selection, self-submission, conditional validation, and WPC intake.

---

# 20. EC-01 — Request Access to HR Systems

Validate that a user can launch and submit the Staffing HR service through Employee Center.

Expected:

- native HR Case created;
- requester = logged-in user;
- subject = logged-in user;
- Staffing access items available.

---

# 21. EC-02 — Request Access to HR Data and Reports

Validate:

- native HR Case creation;
- Analytics access items;
- WPC selectable;
- subject self-submission enforced.

---

# 22. EC-03 — Self-Submission Enforcement

Validation must include both positive and bypass testing.

Expected:

```text
Requester = Logged-in User
Subject = Logged-in User
```

Negative tests must attempt:

- URL manipulation;
- client-field manipulation;
- direct record/API submission where applicable.

The Wave 2 stop criteria explicitly state that self-submission must not be bypassable.

---

# 23. EC-04 — Access Item Reference Selection

Confirm requested access can be presented as controlled references rather than duplicated choice values.

Required behavior:

- active items selectable;
- inactive items excluded;
- category filtering works;
- WPC appears as its own access item.

---

# 24. Document Templates Capability Spike

Wave 4 shall not begin implementation of electronic authorization until the following are tested.

| ID | Capability |
|---|---|
| DOC-01 | Current Document Templates available |
| DOC-02 | Template can use required data source |
| DOC-03 | Custom scoped Authorization Form data usable |
| DOC-04 | Related Access Details can render |
| DOC-05 | Multiple access items can render reliably |
| DOC-06 | Current ServiceNow Sign available |
| DOC-07 | Employee signer supported |
| DOC-08 | Supervisor signer supported |
| DOC-09 | Sequential signing supported |
| DOC-10 | Native approval can coexist with signing |
| DOC-11 | Signer identity retained |
| DOC-12 | Signature timestamp retained |
| DOC-13 | PDF generated |
| DOC-14 | PDF attachment destination known |
| DOC-15 | PDF can be controlled/moved if needed |
| DOC-16 | Template configuration source-control path known |
| DOC-17 | Deprecated HR Document Template mechanism avoided |

The implementation plan explicitly requires this capability spike and states that current Document Templates shall be used rather than deprecated HR Document Templates or legacy task types.

---

# 25. DOC-01 — Current Document Templates

## Required

Confirm the current Australia Document Templates capability is installed/available.

## Stop Condition

If unavailable:

**BLOCKED-PDI**

Do not substitute:

- custom PDF table;
- custom signature engine;
- manually uploaded signed PDF as the normal MVP process.

---

# 26. DOC-02 — Template Data Source

Validate whether the template can consume required data from:

- Authorization Form;
- related Subject information;
- related Access Details;
- Business Justification;
- Form Version;
- expiration/effective metadata.

---

# 27. DOC-03 — Custom Scoped Table Support

Prove whether:

`x_2108496_hr_acces_rob_auth`

can serve directly or indirectly as an approved document data source.

If indirect transformation is required, classify the artifact accordingly.

---

# 28. DOC-04 — Access Detail Rendering

Validate the template can represent the complete authorized scope from multiple Authorized Access Details.

This is essential for:

- Amendment;
- Renewal;
- multi-access New requests.

---

# 29. DOC-05 — Checkbox / Selection Rendering

Validate Form 1768 output for:

- FPPS/WTTS
- eOPF
- USA Staffing
- OAS/DataMart
- Human Capital Reports
- Workforce Profile Charts

Also validate:

- Federal
- Contractor
- IPA
- Auditor/Investigator.

WPC and IPA are approved additions to the electronic form.

---

# 30. DOC-06 — ServiceNow Sign Availability

Confirm the current Australia signing capability required by Document Templates is available.

Do not rely on historical/deprecated HR document mechanisms unless separately approved.

---

# 31. DOC-07 — Employee Signer

Test:

- subject receives signature action;
- only assigned subject can sign;
- signer identity recorded;
- completion timestamp recorded.

---

# 32. DOC-08 — Supervisor Signer

Test:

- correct supervisor receives signature action;
- identity recorded;
- timestamp recorded;
- signature cannot be completed by unauthorized user.

---

# 33. DOC-09 — Sequential Signing

Required sequence for New/Amendment/Renewal:

```text
Employee Signature
→
Supervisor Approval
→
Supervisor Signature
→
Final Validation
```

Validate whether native capabilities support this sequence directly or require controlled Flow orchestration.

---

# 34. DOC-10 — Approval + Signature Coexistence

Confirm supervisor can be required to:

1. submit native approval;
2. complete document signature.

The application must not collapse these into one event.

---

# 35. DOC-11 — Signature Evidence

Validate runtime evidence for:

- signer;
- completion;
- date/time;
- document relationship.

A visually displayed signature alone is not sufficient evidence.

---

# 36. DOC-12 — Final PDF

Validate:

- PDF generated;
- contains required policy/content;
- contains authorization data;
- contains authorized scope;
- contains employee signature;
- contains supervisor signature;
- contains signer timestamps/metadata as designed.

---

# 37. DOC-13 — PDF Attachment Destination

Determine exactly where the final PDF is initially attached.

Possible:

- HR Case;
- Authorization Form;
- another native document record.

This must be demonstrated, not assumed.

The implementation plan explicitly states that final PDF location must be proven.

---

# 38. DOC-14 — Authoritative PDF Relocation

If the platform initially generates the PDF on the HR Case, validate whether a controlled process can:

- identify the correct completed PDF;
- copy/move it to Authorization Form;
- verify target;
- avoid breaking native document history;
- safely remove unnecessary competing copy where appropriate.

Expected final objective:

**exactly one authoritative final PDF on the Authorization Form.**

---

# 39. DOC-15 — Reuse Behavior

Validate that a Reuse request can:

- retain prior Authorization Form;
- retain prior PDF;
- avoid employee re-signature;
- retain request-specific supervisor approval/signature evidence.

Do not regenerate the historical PDF.

---

# 40. DOC-16 — Source / Transform Support

Determine:

- which Document Template records can be exported/transformed;
- what remains manual;
- whether participant/signature configuration survives clean install;
- what belongs in `MANUAL-CONFIGURATION.md`.

---

# 41. Native Approval Capability

| ID | Capability |
|---|---|
| APR-01 | Supervisor approval record creation |
| APR-02 | Assigned approver resolution |
| APR-03 | Approval denial |
| APR-04 | Approval history retention |
| APR-05 | Approval timestamp |
| APR-06 | Approval identity |
| APR-07 | Programmatic read of outcome |
| APR-08 | No fulfillment before approved |

All shall be validated at runtime.

---

# 42. Fulfillment Capability Matrix

| ID | Capability |
|---|---|
| FUL-01 | Staffing task creation |
| FUL-02 | Analytics task creation |
| FUL-03 | grouped access items per team |
| FUL-04 | mixed request creates two team tasks |
| FUL-05 | WPC creates OM task |
| FUL-06 | OM task individual assignment |
| FUL-07 | completion evidence captured |
| FUL-08 | waiver behavior supported |
| FUL-09 | parent closure guard |
| FUL-10 | item-specific Access Detail activation |
| FUL-11 | task creation idempotency |

The approved Wave 5 plan requires team grouping, WPC OM work, evidence, closure guards, and item-specific activation.

---

# 43. FUL-03 — Team Grouping

Validate that multiple Staffing items result in one Staffing task and multiple Analytics items result in one Analytics task.

No task-per-item proliferation unless requirements later change.

---

# 44. FUL-05 — WPC OM Task

Validate:

- WPC produces OM task;
- provisioning context = ARM;
- target context = OAS-hosted WPC;
- OM is assigned;
- task remains independently trackable.

---

# 45. FUL-09 — Parent Closure Guard

Prove case cannot close successfully when a required task remains:

- Open;
- In Progress;
- Failed/unresolved;
- overdue but incomplete.

---

# 46. FUL-10 — Item-Level Activation

Test mixed requests.

Example:

- Staffing completed;
- Analytics incomplete.

Expected:

- Staffing-owned detail may activate;
- Analytics-owned detail remains pending;
- parent case remains open.

---

# 47. Renewal Capability Matrix

| ID | Capability |
|---|---|
| REN-01 | Single daily scheduled flow |
| REN-02 | relative expiration query |
| REN-03 | 90-day reminder |
| REN-04 | 60-day reminder |
| REN-05 | 30-day reminder |
| REN-06 | reminder idempotency |
| REN-07 | grace-window calculation |
| REN-08 | earlier end-date calculation |
| REN-09 | replacement detection |
| REN-10 | lapse transition |
| REN-11 | lapse notification once |
| REN-12 | RPT-8 inclusion/exclusion |
| REN-13 | no external deprovisioning |

The implementation plan requires all of these behaviors in Wave 6.

---

# 48. REN-01 — Scheduled Flow

Validate a single daily scheduled process can perform the required renewal/lapse evaluation.

Do not create separate independent scheduled jobs for every reminder threshold unless technically justified.

---

# 49. REN-02 — Relative Date Selection

Validate the PDI can query Authorizations relative to current date for:

- 90-day;
- 60-day;
- 30-day;
- expired;
- lapsed processing.

---

# 50. REN-06 — Reminder Idempotency

Repeated scheduled execution shall not send duplicate notification for:

```text
Authorization
+
Cycle
+
Threshold
```

---

# 51. REN-09 — Replacement Detection

Validate the scheduled logic can identify an approved active replacement before:

- lapse notification;
- RPT-8 inclusion.

---

# 52. Security Capability Matrix

| ID | Capability |
|---|---|
| SEC-CAP-01 | Custom table ACLs |
| SEC-CAP-02 | Custom field ACLs |
| SEC-CAP-03 | Contextual scripted ACL |
| SEC-CAP-04 | Shared security helper |
| SEC-CAP-05 | Impersonation testing |
| SEC-CAP-06 | Attachment inheritance |
| SEC-CAP-07 | Direct attachment URL denial |
| SEC-CAP-08 | Report ACL enforcement |
| SEC-CAP-09 | Field write denial |
| SEC-CAP-10 | Historical record protection |

Wave 7 explicitly requires these security validations.

---

# 53. SEC-CAP-01 — Custom Table ACLs

Validate ACLs on:

- ROB Configuration;
- ROB Access Item Reference;
- ROB Authorization Form;
- Authorized Access Detail.

Include positive and negative persona testing.

---

# 54. SEC-CAP-02 — Field ACLs

Validate protection of:

- status;
- Form Version;
- expiration;
- signature evidence;
- approval evidence;
- supersession;
- PDF finalization;
- routing snapshots.

---

# 55. SEC-CAP-03 — Contextual ACL Logic

Validate scripted/contextual checks can support:

- Staffing assigned-work access;
- Analytics assigned-work access;
- OM minimum assigned-task access;
- Compliance read-only access.

---

# 56. SEC-CAP-06 — Attachment Inheritance

Test whether native attachment security on the Authorization Form is sufficient.

Do not add custom attachment ACLs before this behavior is known.

---

# 57. SEC-CAP-07 — Direct Attachment URL

Required negative test:

An unrelated authenticated user attempts direct access to the signed PDF.

Expected:

**Denied**

A hidden related list is not sufficient security evidence.

---

# 58. Reporting Capability Matrix

| ID | Capability |
|---|---|
| RPT-CAP-01 | Native report against HR Task |
| RPT-CAP-02 | Native report against Authorization Form |
| RPT-CAP-03 | Related access-item reporting |
| RPT-CAP-04 | Relative expiration filters |
| RPT-CAP-05 | Dashboard creation |
| RPT-CAP-06 | Drill-down ACL enforcement |
| RPT-CAP-07 | Export ACL enforcement |
| RPT-CAP-08 | Report source/database view where needed |
| RPT-CAP-09 | Dashboard sharing/security |
| RPT-CAP-10 | Report transform/source-control behavior |

Wave 8 requires report sources, security, performance, and release validation.

---

# 59. ATF Capability Matrix

| ID | Capability |
|---|---|
| ATF-01 | Case/intake tests |
| ATF-02 | Decision tests |
| ATF-03 | State guard tests |
| ATF-04 | Fulfillment-task tests |
| ATF-05 | Renewal calculation tests |
| ATF-06 | Security/impersonation tests |
| ATF-07 | Reporting-source tests |
| ATF-08 | Document/signature automation |
| ATF-09 | PDF verification automation |
| ATF-10 | Clean fixture reset |

The Wave 8 plan calls for suites spanning Intake, Decision, Signature/PDF, Fulfillment, Renewal, Security, and Reporting, with manual procedures retained for platform interactions that cannot be automated reliably.

---

# 60. ATF-08 — Signature Automation

Determine whether ATF can reliably:

- launch employee signature;
- complete sign action;
- validate signature completion;
- repeat for supervisor.

If not:

**MANUAL**

with exact scripted manual procedure.

Do not fabricate ATF coverage merely to claim automation.

---

# 61. ATF-09 — PDF Verification

Determine whether ATF can verify:

- file existence;
- attachment parent;
- expected filename;
- metadata.

Visual/content verification may remain manual where technically necessary.

---

# 62. Notification Capability Matrix

| ID | Capability |
|---|---|
| NOT-CAP-01 | Native document notification |
| NOT-CAP-02 | Native approval notification |
| NOT-CAP-03 | Custom task notification |
| NOT-CAP-04 | Scheduled reminder notification |
| NOT-CAP-05 | Recipient resolution |
| NOT-CAP-06 | duplicate suppression |
| NOT-CAP-07 | email log evidence |
| NOT-CAP-08 | secure links |
| NOT-CAP-09 | no attachment |
| NOT-CAP-10 | privacy-safe content |

The notification requirements are defined in Appendix G and SEC-3.

---

# 63. Notification Delivery in PDI

The PDI may constrain actual external email delivery.

If so, required proof may use:

- generated notification/email record;
- recipient resolution;
- rendered body;
- secure link;
- attachment absence.

External mail transport itself may require agency-environment revalidation.

---

# 64. Report Source Performance

Validate representative source queries for:

- Staffing workload;
- Analytics workload;
- authorization lookup;
- renewal selection;
- RPT-8;
- Audit Retrieval.

The Wave 8 plan explicitly requires performance checking of reports, ACL scripts, related lists, and renewal selection.

---

# 65. Attachment Size / Performance

If signed PDFs or authorization history materially affect form/list performance, record findings.

No source requirement defines a specific PDF size threshold, so this remains a technical performance observation rather than a business requirement.

---

# 66. SDK Transform Capability Matrix

| ID | Artifact | Validate |
|---|---|---|
| SDK-TR-01 | HR Service | Transform/export support |
| SDK-TR-02 | Employee Center config | Transform/export support |
| SDK-TR-03 | Flow Designer | Transform/export support |
| SDK-TR-04 | Document Template | Transform/export support |
| SDK-TR-05 | Signature config | Transform/export support |
| SDK-TR-06 | Approval config | Transform/export support |
| SDK-TR-07 | Report | Transform/export support |
| SDK-TR-08 | Dashboard | Transform/export support |
| SDK-TR-09 | ATF | Transform/export support |
| SDK-TR-10 | Notifications | Transform/export support |

Each result feeds Appendix K artifact classification.

---

# 67. Cross-Scope Modification Matrix

| ID | Modification | Required Outcome |
|---|---|---|
| XS-01 | Add fields to native HR Case | Prove support |
| XS-02 | Add fields to native HR Task | Prove support |
| XS-03 | Read native case/task from scoped code | Prove support |
| XS-04 | Create native tasks from scoped process | Prove support |
| XS-05 | Query native approvals | Prove support |
| XS-06 | Query native document/signature records | Prove support |
| XS-07 | Create/report across required tables | Prove support |

Where cross-scope privileges are required, document exact platform behavior.

Do not silently widen cross-scope access.

---

# 68. Capability Validation Sequence

The recommended sequence is:

```text
1. Verify platform/release
2. Verify native tables/applications
3. Verify SDK connection/build/install
4. Verify HR Case/Task runtime
5. Verify Employee Center intake
6. Verify native-field extension feasibility
7. Verify decision-layer data access
8. Verify Document Templates / Sign
9. Verify approvals
10. Verify PDF behavior
11. Verify fulfillment tasks
12. Verify scheduled renewal
13. Verify security/attachments
14. Verify reports/ATF
15. Perform clean-install rehearsal
```

---

# 69. Capability Spike Documentation

Each spike shall document:

- capability ID;
- requirement supported;
- test performed;
- configuration used;
- expected result;
- actual result;
- evidence;
- status;
- artifact classification impact;
- workaround considered;
- approved resolution;
- agency-environment revalidation requirement.

---

# 70. Stop / Go Rule

A wave may proceed only when all required capabilities for that wave are:

- PROVEN;
- or intentionally MANUAL with an approved documented path.

A required capability marked:

- BLOCKED-PDI;
- UNSUPPORTED;
- NOT TESTED

shall block implementation that depends on it.

---

# 71. Partial Capability Rule

A PARTIAL result requires explicit impact analysis.

Example:

Document Templates may generate a PDF but may not support related-list repetition.

This cannot be recorded simply as “Document Templates works.”

The matrix must document the exact limitation and design impact.

---

# 72. PDI Limitation Versus Product Defect

A capability failure must be classified.

## PDI Limitation

The required feature is absent or restricted in the PDI but may be available in an agency environment.

## Product Defect

The feature exists and the implemented design fails.

## Design Conflict

The requested approach is unsupported by ServiceNow architecture.

These categories shall not be conflated.

---

# 73. Agency-Environment Revalidation

Capabilities that may need revalidation outside PDI include:

- production Employee Center configuration;
- organization-specific HRSD security;
- group/reference mappings;
- enterprise email delivery;
- agency Document Templates configuration;
- ServiceNow Sign licensing/plugin behavior;
- production ACL interactions;
- data volume/performance;
- enterprise records-retention settings.

---

# 74. Clean-Install Rehearsal

Before release readiness:

1. establish clean/known instance baseline;
2. install supported source artifacts;
3. perform documented Class C/manual steps;
4. execute required Class B configuration/transform steps;
5. verify configuration;
6. run smoke tests;
7. run critical regression;
8. verify no hidden PDI-only manual fix is missing.

The Wave 8 plan explicitly requires a clean-install rehearsal.

---

# 75. Prohibited Capability Workarounds

The following shall not be used to convert a failed capability test into an apparent success:

- custom request table in place of HR Case;
- custom task table in place of HR Task;
- custom signature table;
- custom approval engine;
- manually uploaded signed PDF as the standard process;
- direct protected catalog-table patching;
- unsupported GlideRecord writes to platform internals;
- broad admin roles to bypass ACL design;
- direct external provisioning to avoid ServiceNow task workflow;
- hidden manual edits not recorded in deployment documentation.

---

# 76. Wave 1 Capability Gate

Required:

- PDI-01 through PDI-12;
- SDK build/install;
- custom table creation;
- role creation;
- numbering;
- unique constraints;
- baseline configuration;
- access-item seed support.

---

# 77. Wave 2 Capability Gate

Required:

- HRSD-01 through HRSD-10 as applicable;
- CASE-01/02;
- TASK extension feasibility as needed;
- EC-01 through EC-10;
- self-submission negative test;
- reference-based access selection.

---

# 78. Wave 3 Capability Gate

Required:

- read/query required case/custom data;
- deterministic existing-authorization query;
- reference-set comparison;
- proposed expiration calculation;
- duplicate detection;
- no side effects;
- unit/ATF capability for decision testing.

---

# 79. Wave 4 Capability Gate

Required:

- DOC-01 through DOC-16;
- APR-01 through APR-08;
- employee signature;
- supervisor approval;
- supervisor signature;
- PDF generation;
- PDF authoritative location;
- Reuse behavior.

No Wave 5 fulfillment implementation should depend on a hypothetical Wave 4 authorization gate.

---

# 80. Wave 5 Capability Gate

Required:

- FUL-01 through FUL-11;
- task grouping;
- OM assignment;
- evidence validation;
- closure guard;
- detail-level activation.

---

# 81. Wave 6 Capability Gate

Required:

- REN-01 through REN-13;
- scheduled selection;
- reminder suppression;
- replacement detection;
- lapse;
- RPT-8 source logic.

---

# 82. Wave 7 Capability Gate

Required:

- SEC-CAP-01 through SEC-CAP-10;
- direct PDF URL test;
- field-write negative tests;
- persona impersonation;
- report/security interaction.

---

# 83. Wave 8 Capability Gate

Required:

- RPT-CAP-01 through RPT-CAP-10;
- ATF-01 through ATF-10 where applicable;
- manual procedures for unsupported automation;
- performance checks;
- clean-install rehearsal;
- UAT evidence.

---

# 84. Capability Matrix Template

Each capability shall be recorded using:

| Field | Value |
|---|---|
| Capability ID | |
| Capability Name | |
| Requirement(s) | |
| Wave | |
| Expected Behavior | |
| Test Procedure | |
| Expected Result | |
| Actual Result | |
| Status | |
| Evidence Type | |
| Evidence Reference | |
| Artifact Classification Impact | |
| Limitation | |
| Resolution | |
| Agency Revalidation Required? | |
| Owner | |
| Date Tested | |

---

# 85. Initial Critical Capability Register

The following shall be treated as highest-priority capability spikes:

| Priority | Capability |
|---:|---|
| 1 | Australia PDI / SDK connection |
| 2 | Native HR Case/Task viability |
| 3 | Native HR Case field-extension feasibility |
| 4 | Employee Center self-service/intake |
| 5 | Current Document Templates |
| 6 | ServiceNow Sign |
| 7 | Native supervisor approval + signature sequencing |
| 8 | Final PDF attachment destination |
| 9 | Authorization Form / Access Detail template data |
| 10 | Direct attachment security |
| 11 | Flow/report/ATF transform behavior |
| 12 | Clean install |

---

# 86. Capability Traceability

| Capability Area | Requirements / Appendices |
|---|---|
| Native HR Case/Task | PRD architecture, Appendix C |
| Employee Center | BR-1–BR-4, FR-1–FR-4 |
| Decision data access | FR-5–FR-9, Appendix E |
| Document/Signature | FR-10, FR-11, FR-17, FR-19 |
| PDF | AC-18–AC-20, Appendix B |
| Fulfillment | FR-12–FR-16 |
| Renewal | FR-21–FR-24 |
| Security | SEC-1–SEC-5, Appendix F |
| Reporting | RPT-1–RPT-8, Appendix H |
| Exceptions | EX-1–EX-10, Appendix I |
| Configuration | Appendix J |
| Artifact handling | Appendix K |

---

# 87. Capability Validation Definition of Done

The PDI capability-validation program is complete when:

1. Australia release is proven;
2. SDK 4.8.1 connectivity works;
3. standard and frozen-key builds pass;
4. native HR Case is proven;
5. native HR Task is proven;
6. Employee Center submission works;
7. self-submission cannot be bypassed;
8. native-field extension feasibility is documented;
9. current Document Templates is validated;
10. ServiceNow Sign behavior is validated;
11. employee and supervisor signers work;
12. native supervisor approval works;
13. approval/signature sequencing works;
14. signer identity/timestamp evidence is proven;
15. final PDF generation is proven;
16. final attachment location is known;
17. authoritative PDF handling is proven;
18. native fulfillment tasks work;
19. WPC OM task works;
20. parent closure guards work;
21. renewal scheduling works;
22. reminder idempotency works;
23. lapse/replacement behavior works;
24. ACLs work;
25. direct attachment access is denied appropriately;
26. reports honor security;
27. ATF limitations are documented;
28. Class B/C/D classifications are updated from actual findings;
29. clean-install rehearsal succeeds;
30. unresolved PDI limitations are explicitly documented for agency-environment revalidation.

---

# 88. Baseline Capability Statement

The HR Access ROB Authorization product shall be built only on **capabilities demonstrated in the target ServiceNow environment or explicitly documented as environment-specific limitations**.

The SDK shall not be used to infer that a runtime platform feature works merely because metadata can be authored.

Native HRSD, Employee Center, current Document Templates, electronic signature, approval, attachment, security, reporting, and testing capabilities shall each be proven through the appropriate runtime evidence.

Where a required PDI capability is unavailable, development shall stop for that dependency and preserve the approved architecture rather than introducing unsupported replacement components.

---

# 89. R4 Australia Capability-Spike Result — 2026-08-15

The capability-first R4 spike stopped before implementation with a partial
platform result and unresolved policy dependencies.

| ID | Result | Evidence / limitation |
|---|---|---|
| DOC-01 | PASS — availability only | Active Document Templates scope `sn_doc` version 27.1.1 |
| DOC-02–05 | NOT PROVEN | No controlled ROB template demonstrated the custom Authorization Form data source, related Access Details, or reliable multi-item rendering |
| DOC-06 | PASS — availability only | Active ServiceNow Sign support plus E-Signature 1.0.0, Digital Signature API 26.0.0, and Digital signature component 27.1.0 |
| DOC-07–12 | NOT PROVEN | No ROB employee/supervisor runtime sequence, separate approval coexistence, signer/timestamp reread, or final signed-content test |
| DOC-13–15 | NOT PROVEN | No generated ROB PDF established output, attachment destination, authoritative relocation, immutability, or Reuse retention behavior |
| DOC-16 | NOT PROVEN | No R4 Class B transform/source-control round trip was attempted after the stop condition |

Installed schema confirms `sn_doc_template` supports table-based templates,
ServiceNow Sign, signing order, and storage configuration; ordered
`sn_doc_participant` records and `sn_doc_pdf_template_mapping` are present.
Sample published templates target native HR Case tables. The PDI contained zero
Document Task records, so no committed generated/signed output was available as
runtime evidence.

The HR Access source scope had zero `sn_doc`/`sn_esign` cross-scope privileges,
and this spike created none. No instance record was modified.

Policy update: `R4-POLICY-01` is RESOLVED by the approved Appendix B contract.
The printed Date is Supervisor Signature Date / Final Authorization Date; IPA
and WPC are distinct electronic-only extensions; ARM is provisioning metadata;
and approved system-managed values render in a separate Electronic
Authorization Metadata section. This removes the policy blocker but does not
prove the runtime capabilities tracked by `R4-PDI-01`.

Classification: native template/signature/PDF configuration remains a Class
B/C candidate, but the unproven ROB runtime path is Class D for the current PDI
spike. R4 remains BLOCKED by `R4-PDI-01`. No substitute signature, approval, or PDF
architecture is authorized.

# 90. R4.2 Native Runtime Proof — 2026-08-15

The controlled R4.2 spike used a temporary HR Core-owned HTML template against
`sn_hr_core_case_workforce_admin`. It produced ordered employee and supervisor
Document Tasks, persisted each closer and close timestamp, closed the native
task execution only after both stages, and generated one system PDF attachment
on synthetic case HRC0001026.

| ID | R4.2 result | Evidence / limitation |
|---|---|---|
| DOC-01 | PASS | HR Core template `41103ca0c3facb1068a35f2b2b0131b0` rendered native case data |
| DOC-06–08 | PASS | Amos Linnan completed DOCT0001003; Rebekah Lindboe completed DOCT0001004; identities and timestamps persisted |
| DOC-09 | PARTIAL PASS | Supervisor task required acknowledgement plus ServiceNow Sign; no distinct native approval record was proven |
| DOC-10 | PASS | Employee completion alone left the execution incomplete; supervisor task was isolated from employee/unrelated user |
| DOC-11 | NOT PROVEN | Native refusal control was visible but a denial execution was not completed |
| DOC-13 | PASS | PDF `0876f06cc33ecb1068a35f2b2b01313a` was generated by system and attached to HRC0001026 |
| DOC-14 | PARTIAL PASS | Completed signer task was read-only and signer had no replace action; replacement/version audit was not exercised |
| DOC-15 | NOT PROVEN | No second completed signed version established independent retention |
| DOC-16 | NOT APPLICABLE | Class C spike only; no transform/source artifact retained |

The copied template retained unrelated sample body content, so it is not a
production Form 1768 template. A later Preview attempt opened only a blank child
tab, preventing the required denial/history rerun without bypassing the native
path. All temporary templates were returned to non-published state and intake
template bindings were removed. No broad privilege remains.

Conclusion: `R4-PDI-01` remains OPEN. The PDI proves partial native capability,
not the complete governed ROB path.

## R4.2.1 Remaining Runtime Result — 2026-08-15

| ID | Result | Evidence / limitation |
|---|---|---|
| DOC-07 | PASS | Employee DOCT0001005 and supervisor DOCT0001006 completed in order with persisted identities/timestamps. |
| DOC-09 | PASS for combined native stage | DOCT0001006 signed the same persisted body containing explicit `Supervisor Authorization Decision: APPROVED`; no custom/separate approval table was needed. |
| DOC-10 | PASS | DOCT0001008 persisted supervisor refusal state `7`, identity, timestamp, and reason; no final PDF was created. |
| DOC-12 | PASS | V1 `0876f06cc33ecb1068a35f2b2b01313a` and V2 `00f925a4c33a0f1068a35f2b2b0131a2` remain independent and unchanged with separate signer histories. |
| DOC-13 | PARTIAL PASS | Clean April 2026 PDF `668b256cc33a0f1068a35f2b2b0131f6` rendered IPA, WPC, signatures, and separate metadata without ARM or sample contamination. `${Date}` was prepared before signing and is not bound to the persisted supervisor timestamp. |
| DOC-14 | PASS for native history control | Completed tasks are read-only and separate executions retain separate PDFs. Native regeneration states that it replaces the current attachment and is not approved for historical authorization versions. |
| DOC-15 | PASS after cleanup | Temporary binding removed; four templates non-published; temporary roles zero; broad privilege `ef33bcacc3facb1068a35f2b2b01312a` deleted and verified absent. |

Classification: Class C for the proven native configuration mechanics and
Class D for the unresolved signed-date/timestamp rendering boundary.
`R4-PDI-01` is BLOCKED pending a platform-owner-supported mechanism. This does
not close `R2-AGENCY-01` and does not authorize production lifecycle work.
