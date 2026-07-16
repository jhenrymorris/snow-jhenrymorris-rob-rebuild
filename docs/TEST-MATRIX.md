# Test Matrix
## HR Access ROB Authorization MVP

Status values: Not Run, Pass, Fail, Blocked, Manual Only.

| ID | Scenario | Expected result | Type | Status |
|---|---|---|---|---|
| TM-01 | Submit HR systems request | Native HR case created from Staffing entry | ATF | Not Run |
| TM-02 | Submit data/report request | Native HR case created from Analytics entry | ATF | Not Run |
| TM-03 | Missing business justification | Submission blocked | ATF | Not Run |
| TM-04 | Missing required end date | Submission blocked or exception path | ATF | Not Run |
| TM-05 | Attempt on-behalf-of submission | Another subject cannot be selected | Manual/ATF | Not Run |
| TM-06 | No existing authorization | New Authorization path | ATF | Not Run |
| TM-07 | Fully covered active authorization | Reuse path; no employee signature | ATF | Not Run |
| TM-08 | Partially covered authorization | Amendment path; uncovered delta only | ATF | Not Run |
| TM-09 | Expired authorization | Renewal path | ATF | Not Run |
| TM-10 | Obsolete form version | Renewal path; obsolete status recorded | ATF | Not Run |
| TM-11 | Employee signature sequence | Employee signs before supervisor | Manual/ATF | Not Run |
| TM-12 | Supervisor approval plus signature | Both required before gate | Manual/ATF | Not Run |
| TM-13 | HR systems-only fulfillment | One Staffing task only | ATF | Not Run |
| TM-14 | Analytics-only fulfillment | One Analytics task only | ATF | Not Run |
| TM-15 | Mixed request | Separate Staffing and Analytics tasks | ATF | Not Run |
| TM-16 | Workforce Profile Charts | Analytics task + OM ARM task; OAS target | ATF | Not Run |
| TM-17 | OM completion evidence | Case waits for completion/waiver | ATF | Not Run |
| TM-18 | Exact authorization linkage | Case links exact authorization | ATF | Not Run |
| TM-19 | Team reporting | Correct counts and filters | Manual | Not Run |
| TM-20 | Signed PDF generation | One PDF on Authorization Form | Manual | Not Run |
| TM-21 | Signature routed to subject | Subject receives employee signature task | Manual | Not Run |
| TM-22 | Shared annual date | Configured recertification date used | Unit/ATF | Not Run |
| TM-23 | Grace-window calculation | Following cycle expiration used | Unit/ATF | Not Run |
| TM-24 | Reminder 1 | One notice at first threshold | ATF/Manual | Not Run |
| TM-25 | Reminder 2 | One notice at second threshold | ATF/Manual | Not Run |
| TM-26 | Reminder 3 | One notice at third threshold | ATF/Manual | Not Run |
| TM-27 | Reminder retry | No duplicate notice | ATF | Not Run |
| TM-28 | Active replacement exists | No lapse notice | ATF | Not Run |
| TM-29 | Lapse without renewal | Lapsed/expired status and one notice | ATF | Not Run |
| TM-30 | Missing supervisor | Exception Review; no progression | ATF | Not Run |
| TM-31 | Supervisor denial | Denied; no fulfillment | ATF/Manual | Not Run |
| TM-32 | Missing Operations Manager | Exception task created | ATF | Not Run |
| TM-33 | Material organization change | Amendment path | ATF | Not Run |
| TM-34 | Missing end date after submission | Exception Review | ATF | Not Run |
| TM-35 | Duplicate open request | No duplicate authorization work | ATF | Not Run |
| TM-36 | Incomplete signature | Fulfillment gate remains false | ATF | Not Run |
| TM-37 | Overdue OM task | Escalation sent; case remains open | ATF/Manual | Not Run |
| TM-38 | Withdrawn request | Closed withdrawn; history retained | ATF | Not Run |
| TM-39 | Staffing report | Correct workload | Manual | Not Run |
| TM-40 | Analytics report | Correct workload | Manual | Not Run |
| TM-41 | OM report | Correct open/overdue/completed status | Manual | Not Run |
| TM-42 | Approval report | Correct approver and aging | Manual | Not Run |
| TM-43 | Renewal report | Correct relative-date results | Manual | Not Run |
| TM-44 | Audit retrieval | Search by subject and organization | Manual | Not Run |
| TM-45 | Enterprise overview | Correct volume, aging, closure | Manual | Not Run |
| TM-46 | Expired/not-renewed worklist | Lapsed form appears without replacement | Manual | Not Run |
| TM-47 | Subject access | No broad repository browse | Manual | Not Run |
| TM-48 | Supervisor access | Approval/signature experience only | Manual | Not Run |
| TM-49 | Staffing contextual access | Related records only | Manual | Not Run |
| TM-50 | Analytics contextual access | Related records only | Manual | Not Run |
| TM-51 | OM contextual access | Minimum assigned-task information | Manual | Not Run |
| TM-52 | Compliance access | Historical records and PDFs readable | Manual | Not Run |
| TM-53 | Admin access | Configuration manageable | Manual | Not Run |
| TM-54 | Unrelated user | No authorization/PDF access | Manual | Not Run |
| TM-55 | Direct PDF URL | Unauthorized user denied | Manual | Not Run |
| TM-56 | Notification review | No sensitive content or attachments | Manual | Not Run |
| TM-57 | Historical preservation | Prior form retained and linked | ATF | Not Run |
| TM-58 | Schema PII review | No SSN/prohibited fields | Manual | Not Run |
| TM-59 | Audit history | Required lifecycle evidence retained | Manual | Not Run |
| TM-60 | Retention behavior | No automatic deletion configured | Manual | Not Run |
| TM-61 | Configuration group reference qualifiers | Each ROB Configuration assignment-group picker shows only active groups; installed `reference_qual` is `active=true` and `use_reference_qualifier` is `simple` | Manual | Not Run |
| TM-62 | ROB Configuration seed | Configuration table and one first-install default record build with approved dates and reminder values; group references remain blank | SDK build/source review | Pass |
| TM-63 | ROB Access Item starter data | Six unique first-install access-item records build with approved routing, system, and sort values | SDK build/source review | Pass |
| TM-64 | Workforce Profile Charts routing reference | Starter record requires Analytics and Operations Manager tasks, provisions through ARM, and targets OAS | SDK build/source review | Pass |
| TM-65 | ROB Authorization Form schema | Authorization table builds with ROBA auto-numbering, approved choices, native references, display number, and table auditing | SDK build/source review | Pass |
| TM-66 | Authorization evidence fields | Employee, approval, supervisor-signature, PDF, reminder, lapse, and supersession fields build without custom signature or attachment records | SDK build/source review | Pass |
| TM-67 | Authorized Access Detail schema | Detail table builds with ROBD auto-numbering, approved statuses, exact parent/access-item references, and routing snapshots | SDK build/source review | Pass |
| TM-68 | Access-detail idempotency metadata | Unique source-case/access-item index and coverage/parent retrieval indexes build without test data or unrelated artifacts | SDK build/source review | Pass |

| TM-69 | Step 26 administrative navigation | Application menu and four list modules build with admin/compliance visibility and no fulfiller or Operations Manager repository navigation | SDK build/source review | Pass |
| TM-70 | Step 26 administrative forms | Four default-view forms build with approved sections and the Authorization Form includes the Authorized Access Detail related list | SDK build/source review | Pass |
| TM-71 | Wave 1 application roles | Five scoped roles build with correct names; only ROB Admin is scoped application admin | SDK build/source review | Pass |

## Critical Release Gates

TM-01, TM-02, TM-06 through TM-16, TM-20, TM-23, TM-27, TM-29, TM-49 through TM-56, and TM-58 must pass before MVP acceptance.

## Test Data Rules

- Use synthetic users and records.
- Do not use production employee data.
- Do not use SSNs.
- Do not upload real signed forms.
- Use fictional business justifications.
- Use controlled dates for renewal testing.
