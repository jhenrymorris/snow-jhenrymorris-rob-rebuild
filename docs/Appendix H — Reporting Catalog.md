# Appendix H — Reporting Catalog
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

This appendix defines the reporting and dashboard requirements for the HR Access Rules of Behavior Authorization product.

It establishes:

- required reports and dashboards;
- intended audiences;
- business questions answered;
- authoritative source records;
- measures;
- dimensions and filters;
- drill-down behavior;
- security constraints;
- data-quality rules;
- reconciliation expectations;
- implementation notes;
- test requirements;
- release acceptance criteria.

This appendix shall guide:

- Wave 6 renewal/lapse worklist implementation;
- Wave 7 report security;
- Wave 8 report and dashboard configuration;
- ATF/manual validation;
- UAT;
- release-readiness testing.

The source requirements define eight required reporting capabilities: Staffing Workload, Analytics Workload, Operations Manager Actions, Supervisor Approvals, Authorization Renewal, Audit Retrieval, Enterprise Process, and Expired/Not-Renewed Authorizations.

---

# 2. Reporting Principles

## 2.1 Authoritative Data Only

Reports shall use authoritative populated records and fields.

Reports shall not depend on:

- temporary Flow variables;
- unpersisted decision values;
- display-only logic;
- stale duplicate fields;
- manually maintained shadow data;
- free-text representations of controlled access items.

## 2.2 Security Inheritance

Reports and dashboards shall not expose information beyond what the user is authorized to access through the underlying record model.

The Wave 8 release criteria explicitly prohibit reports from exposing data beyond ACL access.

## 2.3 Native-First Reporting

Use standard ServiceNow reports, dashboards, database views/report sources where appropriate.

Do not create a custom reporting data mart solely for the MVP unless the native model cannot satisfy an approved requirement.

## 2.4 Separate Operational and Compliance Reporting

Operational workload reporting and compliance/audit reporting serve different audiences and shall not be collapsed into one broad dashboard.

---

# 3. Required Reporting Inventory

| ID | Report / Dashboard | Primary Audience |
|---|---|---|
| RPT-1 | Staffing Workload Dashboard | Staffing Team |
| RPT-2 | Analytics Workload Dashboard | Human Capital Analytics Team |
| RPT-3 | Operations Manager Action Dashboard | Analytics / OM Oversight |
| RPT-4 | Supervisor Approval Dashboard | HR Teams / Managers |
| RPT-5 | Authorization Renewal Dashboard | HR Teams / Compliance |
| RPT-6 | Audit Retrieval Report | Audit / Compliance |
| RPT-7 | Enterprise Process Dashboard | HR Leadership |
| RPT-8 | Expired / Not-Renewed Authorizations | HR / Compliance |

These reports are explicitly required in the source package.

---

# 4. Reporting Source Model

The principal source entities are:

- native HR Case (`sn_hr_core_case`);
- native HR Task (`sn_hr_core_task`);
- ROB Authorization Form;
- Authorized Access Detail;
- ROB Access Item Reference;
- native approval records;
- native document/signature evidence where reportable;
- native user / organization references.

The exact physical report sources shall be defined only after the final data model is installed and populated.

The Wave 8 plan explicitly requires report sources and filters to be defined against the final data model before dashboards are created.

---

# 5. Reporting Grain

Each report shall have a defined reporting grain.

Examples:

| Reporting Need | Grain |
|---|---|
| Staffing workload | one Staffing HR Task |
| Analytics workload | one Analytics HR Task |
| OM actions | one OM HR Task |
| Supervisor approvals | one request/approval action |
| Renewal | one Authorization Form |
| Audit retrieval | one Authorization Form, with related detail |
| Enterprise process | one HR Case |
| Expired/not-renewed | one lapsed authorization or subject/access combination depending final report design |

Grain shall be defined before metric calculation to prevent double-counting.

---

# 6. Metric Integrity

Metrics shall not mix records with different business meanings.

For example:

- HR Case count ≠ HR Task count;
- Authorization Form count ≠ Authorized Access Detail count;
- one mixed request may create multiple tasks but remains one request;
- one authorization may contain multiple access items.

Dashboard labels shall clearly indicate the reporting grain.

---

# 7. Common Filters

Where applicable, reports should support filters such as:

- date range;
- status;
- DIR/DIV / Organization;
- supervisor;
- subject;
- request category;
- access item;
- fulfillment team;
- Form Version;
- expiration period;
- authorization status;
- WPC indicator.

Not every filter applies to every report.

---

# 8. Date Definitions

Reports shall distinguish relevant dates.

Potential date concepts include:

- Case Opened Date;
- Case Closed Date;
- Task Created Date;
- Task Due Date;
- Task Closed Date;
- Authorization Effective Date;
- Authorization Expiration Date;
- Approval Date;
- Signature Date;
- lapse date/event.

A report shall not label one date simply “Date” if the business meaning matters.

---

# 9. Aging Definition

Operational aging should be calculated from an authoritative event.

Recommended logical basis:

```text
Open Work Aging =
Current Date/Time - Work Start/Open Date
```

Completed work may use:

```text
Processing Time =
Completion Date/Time - Work Start/Open Date
```

The exact business clock, pause behavior, and SLA interpretation are not defined in the source requirements.

Therefore, MVP reporting may use elapsed calendar duration unless a separate SLA/business-duration definition is approved.

---

# 10. Overdue Definition

A task is overdue when:

```text
Task not in qualifying closed state
AND
Due Date < Current Date/Time
```

The dashboard shall not infer overdue solely from age when an actual Due Date exists.

---

# 11. RPT-1 — Staffing Workload Dashboard

## 11.1 Audience

Staffing Team.

## 11.2 Business Question

> What HR systems access work is currently assigned to Staffing, how old is it, what is complete or overdue, and what types of systems are being requested?

## 11.3 Primary Grain

One Staffing fulfillment HR Task.

## 11.4 Authoritative Source

Primary:

- native HR Task.

Related:

- parent HR Case;
- Authorized Access Details / Access Item Reference where required.

## 11.5 Minimum Metrics

The source requirements require:

- Open
- In Progress
- Completed
- Overdue
- Average Processing Time
- System Requested
- DIR/DIV
- Supervisor.

## 11.6 Recommended Measures

- Total Staffing Tasks
- Open Tasks
- In Progress Tasks
- Completed Tasks
- Overdue Open Tasks
- Average Processing Time
- Median Processing Time, optional
- Average Open Age, optional

## 11.7 Required Dimensions / Filters

- Task Status
- System/Access Item
- DIR/DIV
- Supervisor
- Assigned To
- Date range
- Parent Case
- overdue indicator

## 11.8 Security

Staffing users shall see only workload they are authorized to access.

Dashboard drill-down shall honor record security.

## 11.9 Reconciliation

Dashboard totals shall reconcile to the set of Staffing HR Tasks satisfying the same source filters.

---

# 12. RPT-2 — Analytics Workload Dashboard

## 12.1 Audience

Human Capital Analytics Team.

## 12.2 Business Question

> What HR data/report access workload is assigned to Analytics, including Workforce Profile Charts, and what is its current status and age?

## 12.3 Primary Grain

One Analytics fulfillment HR Task.

## 12.4 Authoritative Source

- native HR Task;
- parent HR Case;
- related Access Item References.

## 12.5 Minimum Metrics

The source requirements require:

- Open
- In Progress
- Completed
- Overdue
- Average Processing Time
- Report/Data Type
- Workforce Profile Charts
- DIR/DIV.

## 12.6 Recommended Measures

- Total Analytics Tasks
- Open
- In Progress
- Completed
- Overdue
- Average Processing Time
- WPC Task Count
- non-WPC Analytics Count

## 12.7 Required Filters

- status
- report/data access type
- WPC yes/no
- organization
- supervisor
- assigned analyst
- date range

## 12.8 Security

Analytics dashboard shall not provide unrestricted Staffing or authorization-repository visibility.

---

# 13. RPT-3 — Operations Manager Action Dashboard

## 13.1 Audience

Human Capital Analytics Team and authorized OM oversight.

## 13.2 Business Question

> Which Workforce Profile Chart requests are waiting for Operations Manager ARM action, which are complete, and which are overdue?

## 13.3 Primary Grain

One OM ARM Role Assignment HR Task.

## 13.4 Authoritative Source

- native HR Task with Task Type = OM ARM Role Assignment.

Related:

- parent HR Case;
- Subject Person;
- assigned Operations Manager;
- WPC access item.

## 13.5 Minimum Metrics

The source requirements require:

- OM tasks Open
- Completed
- Overdue
- Pending Role Assignment
- Request Aging.

## 13.6 Recommended Measures

- Open OM Tasks
- In Progress
- Completed
- Overdue
- Average OM Task Age
- Average Completion Time
- Escalated Count

## 13.7 Required Filters

- Operations Manager
- DIR/DIV
- task status
- overdue
- due-date range
- subject
- parent request

## 13.8 Security

An individual OM shall not obtain full authorization-repository visibility through this dashboard.

Analytics oversight may receive broader OM-task visibility according to the approved security model.

---

# 14. RPT-4 — Supervisor Approval Dashboard

## 14.1 Audience

HR Teams / Managers as authorized.

## 14.2 Business Question

> Which requests are waiting on supervisor action, who is the approver, and how long have they been waiting?

## 14.3 Primary Grain

One pending supervisor approval/signature requirement per request.

## 14.4 Authoritative Sources

Potentially:

- native approval records;
- HR Case;
- document/signature task status.

Because approval and signature are separate requirements, the report must not imply that approval completion alone equals supervisor completion.

## 14.5 Minimum Metrics

The source requirements require:

- Requests Pending Approval
- Approver
- Age
- Request Type
- DIR/DIV.

## 14.6 Recommended Enhancement

Expose supervisor-action condition as:

- Approval Pending
- Signature Pending
- Approval + Signature Pending
- Complete

if the final data model supports reliable reporting.

## 14.7 Security

Managers shall not receive unrestricted authorization detail through the approval dashboard.

---

# 15. RPT-5 — Authorization Renewal Dashboard

## 15.1 Audience

HR Teams / Compliance.

## 15.2 Business Question

> Which Rules of Behavior authorizations are approaching renewal, expired, obsolete, revoked, or otherwise require compliance attention?

## 15.3 Primary Grain

One ROB Authorization Form.

## 15.4 Authoritative Source

ROB Authorization Form.

## 15.5 Minimum Metrics / Filters

The source requires:

- due within 30 days;
- due within 60 days;
- due within 90 days;
- Expired;
- Obsolete Version;
- Revoked.

## 15.6 Important Requirement

Renewal-dashboard visibility shall be based on relative date filters against the Authorization Expiration Date.

It shall **not depend on whether the daily scheduled flow has already run**.

The source requirement explicitly says visibility does not depend on the scheduled process.

## 15.7 Recommended Measures

- Active Due ≤ 90 Days
- Active Due ≤ 60 Days
- Active Due ≤ 30 Days
- Expired
- Lapsed
- Obsolete Version
- Revoked
- Renewed/Replacement Created, optional

## 15.8 Required Filters

- expiration range
- authorization status
- subject
- DIR/DIV
- supervisor
- Form Version
- employment type
- access item

## 15.9 Security

Compliance and authorized HR users only.

---

# 16. Renewal Buckets

Care shall be taken to avoid ambiguous overlapping counts.

Two valid approaches exist.

## Approach A — Cumulative

- Due within 90 includes 60 and 30.
- Due within 60 includes 30.
- Due within 30 is the most urgent subset.

## Approach B — Exclusive Buckets

- 61–90
- 31–60
- 0–30

The source requirements specify due within 30/60/90 but do not prescribe cumulative versus exclusive visualization.

### RPT-MAP-01 — Renewal Bucket Presentation

The product owner should select the display convention.

Recommended approach:

- KPI counts use **exclusive bands** to avoid apparent double-counting;
- user filters may also provide standard “within 30/60/90” relative filters.

---

# 17. RPT-6 — Audit Retrieval Report

## 17.1 Audience

Audit / Compliance.

## 17.2 Business Question

> What current or historical Rules of Behavior authorization existed for a particular employee or organization, and what evidence supported it?

## 17.3 Primary Grain

One Authorization Form.

Related:

- Authorized Access Details;
- HR Cases;
- approvals;
- signatures;
- fulfillment evidence;
- PDF.

## 17.4 Minimum Filters

The source requires:

- Employee
- DIR/DIV
- Supervisor
- Access Type
- Form Version
- Approval Date.

## 17.5 Additional Recommended Filters

- Authorization Number
- Authorization Status
- Effective Date
- Expiration Date
- WPC
- supersession relationship

## 17.6 Drill-Down

Authorized users should be able to navigate from report result to:

- Authorization Form;
- Access Details;
- exact signed PDF;
- related HR Case;
- applicable approval/signature evidence;
- fulfillment history.

## 17.7 Security

Compliance retrieval is read-only.

Signed PDF access must remain subject to the same authorization controls as direct record access.

---

# 18. RPT-7 — Enterprise Process Dashboard

## 18.1 Audience

HR Leadership.

## 18.2 Business Question

> What is the volume, status, aging, and throughput of the end-to-end HR access authorization process?

## 18.3 Primary Grain

One native HR Case.

## 18.4 Minimum Metrics

The source requires:

- total request volume;
- Staffing / Analytics / WPC split;
- status;
- aging;
- closure time.

## 18.5 Recommended Measures

- Total Requests
- Open Requests
- Completed Requests
- Denied Requests
- Withdrawn Requests
- Exception Review Count
- Staffing-only Requests
- Analytics-only Requests
- Mixed Requests
- WPC Requests
- Average Case Age
- Average Closure Time
- Median Closure Time, optional

## 18.6 Recommended Dimensions

- request category
- authorization path
- DIR/DIV
- month/quarter
- status
- WPC indicator

## 18.7 Security / Privacy

Leadership dashboard should favor aggregate indicators.

Detailed Business Justification, signatures, and PDFs are not appropriate dashboard content.

---

# 19. RPT-8 — Expired / Not-Renewed Authorizations

## 19.1 Audience

HR / Compliance.

## 19.2 Business Question

> Which personnel have lapsed authorization with no approved replacement, and what access may require externally performed removal?

## 19.3 Purpose

This worklist supports **notify-and-track external deprovisioning**.

It does not directly remove access.

The source requirements explicitly define RPT-8 as the worklist used to drive externally performed deprovisioning.

## 19.4 Primary Grain

The exact grain should support operational action.

Recommended:

**one Subject + Authorization + Access Item**

where item-level detail is necessary to determine what external access is affected.

If the operating team only needs form-level action, a form-level view may be provided in addition.

## 19.5 Required Data

At minimum, source requirements call for:

- Subject
- DIR/DIV
- Access Type
- Expiration Date.

Recommended additional fields:

- Authorization Number
- Authorization Status
- Access Item
- Fulfillment Owner
- Provisioning System
- Target System
- Supervisor
- replacement authorization indicator
- lapse date
- external follow-up status if formally added to the operating model

## 19.6 Inclusion Rule

Include only where:

```text
Authorization = Lapsed
AND
No approved active replacement exists
```

The Wave 6 implementation plan explicitly requires the worklist to contain only subjects without an approved active replacement.

## 19.7 Exclusion Rule

Exclude:

- Superseded form with valid replacement;
- active authorization;
- approved renewed replacement;
- historical authorization not requiring current action.

---

# 20. RPT-8 and External Deprovisioning

ServiceNow shall not automatically call:

- ARM
- OAS
- FPPS/WTTS
- eOPF
- USA Staffing

to remove access in the MVP.

RPT-8 supplies authorized HR personnel with the worklist necessary to perform external follow-up.

This preserves the approved notify-and-track boundary.

---

# 21. Reporting by Authorization Path

The Enterprise Process and audit reporting should support analysis by:

- New
- Reuse
- Amendment
- Renewal
- Exception Review

This provides visibility into how often existing forms are successfully reused versus requiring new compliance work.

This is a recommended product metric derived from the approved decision model.

---

# 22. Recommended Additional Operational Metrics

The following are useful but are **not explicitly required by the source package** and should therefore be treated as recommended enhancements:

- Reuse Rate
- Amendment Rate
- Renewal Rate
- Exception Rate
- Supervisor Approval Aging
- Employee Signature Aging
- OM Escalation Rate
- Average Time to Authorization
- Average Time from Authorization to Fulfillment
- Duplicate Request Rate
- Lapse Rate

These should not displace required RPT-1 through RPT-8.

---

# 23. Request Category Reporting

The system should distinguish:

- Staffing
- Analytics
- Mixed

WPC remains identifiable as an Analytics access item requiring OM action.

A mixed request remains one parent HR Case even when it produces multiple fulfillment tasks.

---

# 24. Access Item Reporting

Access reporting shall use ROB Access Item Reference rather than parsing free text.

Initial reportable items include:

- FPPS/WTTS
- eOPF
- USA Staffing
- OAS/DataMart
- Human Capital Reports
- Workforce Profile Charts

WPC is now a first-class access item and electronic Form 1768 field.

---

# 25. Employment-Type Reporting

Where useful and authorized, reports may distinguish:

- Federal
- Contractor
- IPA
- Auditor/Investigator

Employment Type is a governed request/authorization context value and may support compliance analysis.

---

# 26. Form Version Reporting

RPT-5 and RPT-6 shall support Form Version filtering.

This allows identification of:

- current accepted forms;
- obsolete versions;
- historical authorization populations.

A change in current accepted Form Version shall not rewrite historical report values.

---

# 27. Supersession Reporting

Audit reports should permit users to understand authorization lineage.

Recommended display:

- Supersedes
- Superseded By
- Current/Historical indicator

This enables a reviewer to move between renewal/amendment generations.

---

# 28. Approval and Signature Reporting

The source requires a Supervisor Approval Dashboard and audit evidence, but it does not mandate a separate employee-signature dashboard.

The product may expose signature-aging metrics if operationally useful.

Any such report must distinguish:

- employee signature pending;
- supervisor approval pending;
- supervisor signature pending.

These are not equivalent lifecycle events.

---

# 29. Report Security Matrix

| Report | Employee | Supervisor | Staffing | Analytics | OM | Compliance | ROB Admin | Leadership |
|---|---|---|---|---|---|---|---|---|
| RPT-1 Staffing | No | Limited if approved | Yes | No | No | Read if authorized | Yes | Aggregate if approved |
| RPT-2 Analytics | No | Limited if approved | No | Yes | No | Read if authorized | Yes | Aggregate if approved |
| RPT-3 OM Actions | No | No | No | Yes oversight | Own/approved subset | Read if authorized | Yes | Aggregate if approved |
| RPT-4 Supervisor Approval | No | Own/authorized subset | Authorized HR | Authorized HR | No | Read if approved | Yes | Aggregate |
| RPT-5 Renewal | No broad access | No broad access | Limited if approved | Limited if approved | No | Yes | Yes | Aggregate if approved |
| RPT-6 Audit Retrieval | No | No | No | No | No | Yes | Yes | No unless separately authorized |
| RPT-7 Enterprise | No | No | Optional | Optional | No | Optional | Yes | Yes |
| RPT-8 Lapsed | No | No | Authorized operational subset | Authorized operational subset | No | Yes | Yes | Aggregate only |

Exact visibility shall follow Appendix F.

---

# 30. Drill-Down Security

Dashboard totals may be visible at one level while underlying record drill-down is more restricted.

The design shall validate both:

- top-level dashboard access;
- underlying record/list access.

A visible KPI shall not imply unrestricted access to every source record.

---

# 31. Report Export

Where export is enabled:

- row ACLs must still apply;
- field ACLs must still apply;
- signed PDFs are not embedded;
- sensitive fields shall not be added simply for export convenience.

Export functionality shall be included in security testing where used.

---

# 32. Reporting Refresh Expectations

For MVP, ServiceNow reports may use current transactional data.

No separate real-time streaming requirement is defined.

Expected behavior:

- operational dashboards reflect committed record updates;
- renewal dashboards derive from current expiration/status data;
- RPT-8 reflects current lapse/replacement logic.

The source does not specify a formal refresh SLA.

---

# 33. Renewal Dashboard Independence

RPT-5 shall not rely on reminder flags alone.

For example, an authorization due in 30 days should appear in the appropriate report even if:

- the scheduled reminder job has not yet run;
- an email notification failed.

The source explicitly states that renewal visibility does not depend on scheduled processing.

---

# 34. Reconciliation Rules

Each report shall have a documented source-query reconciliation procedure.

Example:

## Staffing

Dashboard Open Staffing Count should equal:

```text
count(
  HR Tasks
  where Task Type = Staffing Fulfillment
  and State in approved open states
)
```

## RPT-8

Count should equal records satisfying:

```text
Lapsed
AND
No approved Active replacement
```

This prevents visually plausible dashboards from being accepted without source reconciliation.

---

# 35. Reporting Test Data

Synthetic data should include:

- Staffing-only case
- Analytics-only case
- mixed case
- WPC case
- completed case
- overdue Staffing task
- overdue Analytics task
- overdue OM task
- pending supervisor case
- Active authorization due 90 days
- Active due 60 days
- Active due 30 days
- Expired authorization
- Lapsed authorization without replacement
- Superseded authorization with active replacement
- Revoked authorization
- Obsolete version
- multiple organizations
- multiple supervisors
- multiple access items

---

# 36. RPT-1 Test Cases

Verify:

- Staffing task counts reconcile;
- Analytics tasks are excluded;
- open/in-progress/completed mapping is correct;
- overdue logic works;
- system requested is populated correctly;
- DIR/DIV and Supervisor filters work;
- unauthorized users cannot access inappropriate detail.

---

# 37. RPT-2 Test Cases

Verify:

- Analytics count reconciles;
- WPC is identifiable;
- Staffing-only tasks excluded;
- report/data-type filter works;
- overdue and processing measures work;
- security is correct.

---

# 38. RPT-3 Test Cases

Verify:

- only OM tasks included;
- open/completed/overdue counts reconcile;
- assigned OM filter works;
- WPC context correct;
- individual OM does not obtain unauthorized records;
- Analytics oversight sees approved workload.

---

# 39. RPT-4 Test Cases

Verify:

- pending supervisor actions are correctly identified;
- approval vs signature status is not misrepresented;
- approver filter correct;
- aging correct;
- request type and DIR/DIV correct;
- unauthorized users cannot access.

---

# 40. RPT-5 Test Cases

Verify:

- due 90-day record appears;
- due 60-day record appears;
- due 30-day record appears;
- Expired appears;
- Obsolete appears;
- Revoked appears;
- Lapsed appears where designed;
- relative date logic works before scheduled-flow execution;
- Form Version filter works.

---

# 41. RPT-6 Test Cases

Verify:

- search by employee;
- search by organization;
- search by supervisor;
- search by access item/type;
- search by Form Version;
- search by approval date;
- historical forms returned;
- Active and Superseded records distinguishable;
- signed PDF can be accessed only by authorized user;
- Compliance remains read-only.

---

# 42. RPT-7 Test Cases

Verify:

- total case volume reconciles;
- Staffing/Analytics/WPC counts correct;
- mixed request is not double-counted as two cases;
- status distribution correct;
- aging/closure metrics use the documented grain;
- aggregate security is appropriate.

---

# 43. RPT-8 Test Cases

Verify:

- lapsed/no-replacement appears;
- active replacement suppresses entry;
- superseded form with replacement excluded;
- subject correct;
- organization correct;
- access item correct;
- expiration date correct;
- WPC item appears when applicable;
- no automated deprovisioning occurs.

---

# 44. Negative Reporting Tests

The test suite shall verify that:

- Staffing dashboard does not count Analytics tasks;
- Analytics dashboard does not count Staffing tasks;
- OM dashboard does not count ordinary Analytics tasks;
- mixed request is not counted as two requests in case-level reporting;
- one authorization with three access details is not counted as three authorizations;
- Superseded records do not appear as current Active authorizations;
- RPT-8 does not include an approved replacement;
- report drill-down does not bypass ACLs;
- unrelated user cannot open Audit Retrieval;
- Leadership dashboard does not expose signed PDFs.

---

# 45. Reporting Data-Quality Checks

Before report acceptance, validate:

- no blank mandatory reporting dimensions where they should be populated;
- no orphan Access Details;
- task types populated;
- request category populated;
- authorization path populated;
- Form Version populated;
- expiration populated for Active forms;
- WPC flag/mapping correct;
- organization snapshots populated where required.

A report should not be used to mask incomplete source data.

---

# 46. Reporting Artifact Classification

Likely SDK classification:

## Class B — Configure Then Transform

Typically:

- reports;
- dashboards;
- report sources;
- some database views;
- ATF reporting tests.

The existing SDK plan identifies reports and dashboards as typical Class B artifacts.

## Class A

Supporting source-first metadata may be used where the SDK supports it reliably.

## Class C

Environment-specific dashboard sharing/group access may require documented manual configuration.

---

# 47. Dashboard Construction Sequence

Recommended sequence:

1. finalize source fields;
2. validate source data population;
3. define report grain;
4. define report source;
5. define measures/filters;
6. test raw report;
7. reconcile to source records;
8. apply security;
9. test impersonation;
10. add to dashboard;
11. test drill-down;
12. document results.

Do not build dashboard visualization before data behavior is proven.

---

# 48. Reporting and ATF

ATF may validate deterministic report prerequisites and source records.

Where direct chart/dashboard rendering is difficult to automate reliably:

- test the report source/query;
- reconcile counts manually;
- capture evidence.

The Wave 8 plan permits exact manual procedures for platform/UI behaviors that are not reliable ATF candidates.

---

# 49. Report Evidence

For each required report, the test matrix shall capture:

- Report ID
- ServiceNow report/dashboard name
- source table/report source
- grain
- filter definition
- test-data scenario
- expected result
- actual result
- count reconciliation
- persona tested
- security result
- screenshot/evidence reference
- Pass / Fail / Blocked

---

# 50. Reporting Traceability

| Report | Business Requirement | Functional Requirement | Acceptance |
|---|---|---|---|
| RPT-1 | BR-12 | FR-18 | AC-15 |
| RPT-2 | BR-12 | FR-18 | AC-15 |
| RPT-3 | BR-11 | FR-15, FR-16, FR-18 | AC-11, AC-12 |
| RPT-4 | BR-5 | FR-11, FR-18 | supporting approval validation |
| RPT-5 | BR-7/8 supporting | FR-21, FR-22, FR-23 | AC-16, AC-21, AC-22 |
| RPT-6 | BR-13 | AUD-3, FR-17, FR-18 | AC-13, AC-14, AC-18 |
| RPT-7 | BR-12 supporting | FR-18 | AC-15 / UAT |
| RPT-8 | Renewal/lapse | FR-24 | AC-23 |

---

# 51. Report Naming Standard

Recommended names:

- **ROB – Staffing Workload**
- **ROB – Analytics Workload**
- **ROB – Operations Manager Actions**
- **ROB – Supervisor Approvals**
- **ROB – Authorization Renewals**
- **ROB – Audit Retrieval**
- **ROB – Enterprise Process Overview**
- **ROB – Expired / Not-Renewed Authorizations**

Consistent prefixing helps administrative identification without affecting user-friendly dashboard titles.

---

# 52. Dashboard Naming Standard

Recommended:

- **HR Access – Staffing Operations**
- **HR Access – Analytics Operations**
- **HR Access – Compliance & Renewals**
- **HR Access – Leadership Overview**

The source requires the reporting capabilities but does not prescribe exact dashboard packaging.

Multiple reports may appear on the same dashboard where audience/security are aligned.

---

# 53. Open Reporting Decisions

## RPT-MAP-01 — Renewal Buckets

Choose cumulative versus exclusive dashboard presentation.

**Recommended:** exclusive KPI bands plus relative-date filtering.

---

## RPT-MAP-02 — Processing-Time Definition

The source requires average processing time but does not specify:

- elapsed calendar time;
- business duration;
- SLA duration;
- paused-state treatment.

**Recommended PDI MVP:** elapsed duration from task creation to qualifying completion, clearly labeled.

A future production SLA definition may replace or supplement it.

---

## RPT-MAP-03 — RPT-8 Operational Grain

Confirm whether the primary worklist should display:

- one record per lapsed Authorization Form; or
- one row per lapsed access item.

**Recommended:** item-level operational view with form/subject grouping, because external deprovisioning actions may differ by system/access item.

---

## RPT-MAP-04 — Leadership Detail Level

Confirm whether leadership may drill to employee-level records or should receive aggregate-only reporting.

**Recommended:** aggregate-first, with detailed access only where the user's separate role permits it.

---

# 54. Reporting Definition of Done

Reporting capability is complete when:

1. RPT-1 through RPT-8 exist;
2. each has a documented grain;
3. each uses authoritative source fields;
4. Staffing workload reconciles;
5. Analytics workload reconciles;
6. OM workload reconciles;
7. supervisor pending-action reporting is accurate;
8. renewal reports work independently of scheduled notification execution;
9. audit retrieval returns current and historical forms;
10. exact signed artifact is reachable by authorized Compliance users;
11. Enterprise Process counts cases rather than accidentally counting tasks;
12. RPT-8 excludes records with valid active replacements;
13. WPC is reportable as a distinct access item;
14. IPA is available as an employment-type dimension where appropriate;
15. access item filters use controlled references;
16. report security matches Appendix F;
17. drill-down security is validated;
18. exports do not bypass security;
19. representative counts reconcile to synthetic source data;
20. performance checks identify no material blocker;
21. required UAT participants accept the dashboards;
22. reports and dashboard configuration are source-controlled or documented according to artifact class.

---

# 55. Baseline Reporting Statement

The HR Access ROB Authorization product shall provide **separate operational, compliance, audit, and leadership reporting based on authoritative ServiceNow records**.

Staffing and Analytics shall have distinct workload visibility.

Operations Manager dependencies shall be explicitly visible.

Annual renewal and lapse status shall be reportable independently of notification execution.

Compliance users shall be able to retrieve current and historical authorization evidence by employee and organization.

Leadership shall receive accurate end-to-end process measures without using reports as a means to bypass record security.

Expired or lapsed authorizations without approved replacements shall be surfaced through a controlled worklist that supports external deprovisioning activities without introducing direct provisioning integrations.