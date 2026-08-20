# Test Matrix
## HR Access ROB Authorization MVP

Appendix M is the authoritative Australia PRD test baseline. Results below distinguish source/build evidence from install, runtime, security, and UAT evidence. A source review or successful build must not be reported as an Australia runtime PASS; existing Wave 1/2 PASS entries apply only to their stated evidence type and require R1/R2 revalidation.

Status values: Not Run, Pass, Fail, Blocked, Manual Only. `Deferred` classifies
an unimplemented capability; its negative enforcement tests remain active.

| ID | Scenario | Expected result | Type | Status |
|---|---|---|---|---|
| TM-01 | Submit HR systems request | Native HR case created from Staffing entry | ATF | Not Run |
| TM-02 | Submit data/report request | Native HR case created from Analytics entry | ATF | Not Run |
| TM-03 | Missing business justification | Submission blocked | ATF | Not Run |
| TM-04 | Missing required end date | Submission blocked or exception path | ATF | Not Run |
| TM-05 | Delegated/on-behalf-of submission (deferred capability) | Supervisor, HR user, ROB Admin, platform admin, and every other actor are denied submission for another employee; no delegated role, fields, feature flag, or fallback exists | Local/PDI | Enforcement Local Pass; delegated capability Deferred; PDI Not Run |
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
| TM-62 | ROB Configuration seed | One stable governed configuration record updates to `2026.04`; reminder values remain 90/60/30; synthetic recertification and unresolved timing values are explicitly unapproved | SDK build/source/PDI | R1 Pass — one active stable record at `2026.04` |
| TM-63 | ROB Access Item starter data | Six unique stable-ID access-item records update in place with approved names, mappings, routing, system, and sort values | SDK build/source/PDI | R1 Pass — six original identities reconciled; repeat run made zero updates |
| TM-64 | Workforce Profile Charts routing reference | Starter record is Analytics-owned, requires Analytics and OM, provisions through ARM, targets OAS / Workforce Profile Charts, and maps to WPC | SDK build/source/PDI | R1 Pass — Analytics/OM/ARM/OAS/WPC verified in Australia |
| TM-65 | ROB Authorization Form schema | Authorization table builds with ROBA auto-numbering, approved choices, native references, display number, and table auditing | SDK build/source review | Pass |
| TM-66 | Authorization evidence fields | Evidence fields build without custom signature or attachment records; Form Version remains read-only, has no dictionary default, and may be blank while Draft | SDK build/source review | Pass |
| TM-67 | Authorized Access Detail schema | Detail table builds with ROBD auto-numbering, exactly eight approved statuses, exact parent/access-item references, and routing snapshots | SDK build/source/PDI | R1 Pass — eight disabled lifecycle choices and managed fields verified in Australia |
| TM-68 | Access-detail idempotency metadata | Unique source-case/access-item index and coverage/parent retrieval indexes build without test data or unrelated artifacts | SDK build/source review | Pass |

| TM-69 | Step 26 administrative navigation | Application menu and four list modules build with admin/compliance visibility and no fulfiller or Operations Manager repository navigation | SDK build/source review | Pass |
| TM-70 | Step 26 administrative forms | Four default-view forms build with approved sections; Authorization Form includes the Access Detail related list with New/Edit omitted | SDK build/source/PDI | R1 Pass — forms load and related-list New/Edit remain omitted |
| TM-71 | Wave 1 application roles | Five scoped roles build with correct names; only ROB Admin is scoped application admin | SDK build/source review | Pass |
| TM-72 | Form Version lifecycle population | A Draft may initially have no Form Version; lifecycle processing copies the active ROB Configuration version before Employee Signature, and the installed Australia read-only option permits lifecycle/server-side population | Manual/ATF | R1 UI Pass for blank/read-only Draft behavior; Wave 4 lifecycle population not run |
| TM-73 | Business Justification label rendering | The Business Justification label is visible on the normal application form; App Home Preview behavior is evaluated and recorded separately | Manual | R1 Pass on normal Australia form |
| TM-74 | Wave 2 security metadata | Both native case subclasses own the requested-items, snapshot, exception, block, gate, and correction-evidence dictionaries; native HR Task owns ROB Task Type; ACLs and Business Rules build | SDK build/source review | Pass |
| TM-75 | Requester snapshot derivation | Both approved HR services derive Position, Organization, and active non-self Supervisor from the verified self-submitting requester without trusting client values | Local/PDI/Agency | Local derivation Pass; BLOCKED-PDI persistence; agency Option B required |
| TM-76 | ROB provenance and requested-item validation | Unrelated services perform no profile lookup; inactive approved services and missing, inactive, unknown, or wrong-category items fail before requester profile access | Local/PDI | Local Pass; PDI Not Run |
| TM-77 | Protected-field injection and identity authorization | `gs.getUserID()` is the sole requester source; blank case identities are set from it; any supplied `opened_by`, `opened_for`, or `subject_person` mismatch, including supervisor/HR submission for another person, stops before requester profile lookup; no conditional fallback remains | Local/PDI | Local Pass; PDI Not Run |
| TM-78 | Supervisor exception enforcement | Missing, invalid, inactive, and self supervisors record the exact reason, block processing, keep all gates false, and create at most one configuration-routed Exception Review HR task whose ROB Task Type cannot be directly changed | Local/PDI | Local Pass; PDI Not Run |
| TM-79 | Controlled snapshot correction | Direct protected edits fail; any approved correction requires a new reason, re-derives directory values, preserves prior values/actor/time, and does not open lifecycle gates | Local/PDI/Agency | Local Pass; agency Option B implementation must validate the retained authorized correction boundary |
| TM-80 | Snapshot field read exposure | Persona/channel matrix permits only approved subject, supervisor, compliance, and administrative context; internal evidence stays admin/compliance only | Manual/ATF | Not Run |
| TM-81 | ACL and cross-scope runtime | Server rules populate protected fields; unauthorized UI/API/import/list/workspace edits fail; RCA/privileges contain only proven minimum operations | Manual/ATF | BLOCKED - validation runs, but native snapshot writes do not persist; prohibited broad API privilege removed |
| TM-82 | Complete frozen-key integration | Normal build and repeated frozen-key builds succeed with no generated-key drift or unresolved field reference | SDK build/source review | Pass |
| TM-83 | Requested Access Items deployment configuration | Both active mandatory list collectors use `x_2108496_hr_acces_rob_access` and the exact approved qualifier; exactly six complete active starter rows exist; the explicit SDK entry imports one employee active-row table read, five employee field reads, and the ROB Admin read/create/write/wildcard-read set; employees receive no create/write/delete grant | Local/PDI | PASS - local plus Australia ordinary-employee 3/3 filtering and WPC Analytics-only evidence |
| TM-84 | Native Wave 2 deployment contract | Read-only verification parses raw/display nested SDK values, verifies exact producer wording and requester scripts, reports native associations, requires all six complete rows, exact access-item ACLs, case/task ACLs, and all required configuration; any missing or inconsistent metadata returns FAIL | Local/PDI | BLOCKED - producer/service/identity contract passes; snapshot write capability fails |
| TM-85 | R1 Australia data-foundation assertions | Exactly four tables, five roles, one configuration, six stable access records, approved WPC/IPA/version/state/index/PII/key controls | Local/PDI | PASS — local 9/9 plus Australia runtime/count/reference verification |
| TM-86 | R2.1 native snapshot capability spike | Test same-record assignment, creation-time producer mapping, exact table-specific cross-scope access, then supported declarative/native configuration; stop at first secure success | PDI committed reread | FAIL / BLOCKED-PDI - A and B failed; C is unavailable because target Application Access disallows updates and only broad API access was generated; D was unavailable in the PDI |
| TM-87 | R2.1 probe cleanup | No broad API privilege, temporary role, app-scoped probe variable, or temporary producer script remains after the spike | PDI/source/build | PASS - two exact Read privileges remain; probe variables and scripts removed; normal/frozen builds pass |
| TM-88 | Agency Payroll Position snapshot | HR Core-owned mechanism persists `x_2108496_hr_acces_position_title` after reread | Agency runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-89 | Agency Payroll Organization snapshot | HR Core-owned mechanism persists `x_2108496_hr_acces_organization_snapshot` after reread | Agency runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-90 | Agency Payroll Supervisor snapshot | HR Core-owned mechanism persists `x_2108496_hr_acces_supervisor_snapshot` after reread | Agency runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-91 | Agency Analytics Position snapshot | HR Core-owned mechanism persists `x_2108496_hr_acces_position_title` after reread | Agency runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-92 | Agency Analytics Organization snapshot | HR Core-owned mechanism persists `x_2108496_hr_acces_organization_snapshot` after reread | Agency runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-93 | Agency Analytics Supervisor snapshot | HR Core-owned mechanism persists `x_2108496_hr_acces_supervisor_snapshot` after reread | Agency runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-94 | Forged snapshot values | Client-supplied Position, Organization, or Supervisor cannot become authoritative | Agency security/runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-95 | Ordinary-user snapshot immutability | Ordinary employee cannot change snapshots after creation | Agency security/runtime | BLOCKED-PDI — R2-AGENCY-01 |
| TM-96 | Approved support correction audit | If retained, correction is role-restricted and records prior values, actor, time, and reason | Agency security/runtime | BLOCKED-PDI — R2-AGENCY-01 |

| TM-97 | R3 deterministic decision suite | New, Reuse, Amendment, Renewal, Exception, coverage/delta, WPC, expiration, ambiguity, and idempotency | Local source/unit | PASS — 30/30 |
| TM-98 | R3 lifecycle guard | Decision source has no record/task write API and no runtime trigger; creates zero Form, Detail, signature, approval, or fulfillment artifacts | Local source/unit | PASS |
| TM-99 | R3 native persisted-snapshot context | Evaluate decisions from agency-persisted Position, Organization, and Supervisor snapshots on both native subclasses | Agency runtime | BLOCKED-AGENCY — R2-AGENCY-01 |
| TM-100 | Current Document Templates availability | Australia has current `sn_doc` tables, PDF templates/mappings, ordered participants, and ServiceNow Sign support | PDI runtime capability | PASS — native HR Core template rendered and generated an ordered task chain/PDF |
| TM-101 | ROB two-signer sequence | Employee signature, explicit supervisor approval, and supervisor signature execute in order with authoritative identity/timestamps | PDI/agency runtime | PASS for native combined stage — DOCT0001006 signed the same body containing explicit `APPROVED`; Rebekah identity and timestamp persisted. Production Authorization Form orchestration remains unimplemented. |
| TM-102 | Signed Form 1768 fidelity | April 2026 policy, approved fields, distinct IPA/WPC extensions, printed Date = Supervisor Signature Date / Final Authorization Date, and separate Electronic Authorization Metadata section render exactly | Policy plus PDI/agency runtime | PASS for native capability — post-sign PDF `b3d35f28c3328f1068a35f2b2b01319e` renders committed employee/supervisor timestamps, Final Authorization Date from the supervisor date, a distinct generation time, and the approved clean structure. Production lifecycle binding remains unimplemented. |
| TM-103 | Authoritative signed PDF | Exactly one immutable/auditable final PDF is associated with the Authorization Form and historical PDFs are retained | PDI/agency runtime/security | PARTIAL PASS — the final PDF is a distinct native attachment, prior attachments and signer evidence remain intact, and denial produces none. Production Authorization Form-only placement/security remains unimplemented. |
| TM-104 | R4 lifecycle source/unit suite | New, Reuse, Amendment, Renewal, denial, idempotency, lineage, evidence, and zero fulfillment behavior | Local source/unit | PASS — 52/52 after M1 Reuse evidence-completeness and stale-state regression tests |
| TM-105 | Native incomplete-chain guard | Employee completion alone does not mark the execution complete or generate a final PDF | PDI runtime | PASS — execution remained in progress until supervisor completion |
| TM-106 | Native signer isolation | Unrelated employee cannot see/sign either participant task; employee cannot perform supervisor stage | PDI security/runtime | PASS — Amelia Caputo saw no task; Amos Linnan had no supervisor task after employee completion |
| TM-107 | Native supervisor refusal | Supervisor refusal/denial prevents successful completion and final PDF | PDI runtime | PASS — DOCT0001008 persisted Rebekah, refusal state `7`, timestamp, and reason; HRC0001032 has no final PDF. |
| TM-108 | Native signed-version retention | A later completed signed artifact does not overwrite the prior artifact or signer evidence | PDI runtime | PASS — PDFs `0876f06cc33ecb1068a35f2b2b01313a` and `00f925a4c33a0f1068a35f2b2b0131a2` remain independent with distinct signer task evidence. |
| TM-109 | Post-signature final Form 1768 | Finalization runs only after employee completion and supervisor APPROVED + signature; rereads committed identities/timestamps; renders Final Authorization Date from supervisor date; preserves signing evidence and prior PDFs | PDI runtime | PASS — HRC0001034 / DOCT0001011-1012 / execution `454f0b68c3fe4f1068a35f2b2b0131bc`; accepted PDF `b3d35f28c3328f1068a35f2b2b01319e`; denied DOCT0001008 produced 0 final PDFs. |

## Critical Release Gates

TM-01, TM-02, TM-06 through TM-16, TM-20, TM-23, TM-27, TM-29, TM-49 through TM-56, TM-58, and TM-75 through TM-84 must pass before MVP acceptance.

## Test Data Rules

- Use synthetic users and records.
- Do not use production employee data.
- Do not use SSNs.
- Do not upload real signed forms.
- Use fictional business justifications.
- Use controlled dates for renewal testing.

W1-08: ROBA0001001 observed
W1-09: ROBD0001005 observed
W1-12: Visible form annotation workaround
W1-14: Source-controlled or documented manual list control
W1-15: Installed dictionary and current source reviewed
W1-16: Two unique compound indexes confirmed in source and installed metadata
W1-17: Attachment uploaded, downloaded, and removed

## R4.3 lifecycle implementation evidence

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-110 | R4 lifecycle source/unit suite | 36 deterministic lifecycle, signature, denial, idempotency, lineage, PDF, and no-fulfillment assertions | PASS |
| TM-111 | R4 regression gate | R1 9/9; Wave 2 security 22/22; deployment configuration 16/16; R3 30/30 | PASS |
| TM-112 | R4 normal/frozen build | SDK 4.8.1; five unchanged TS11 warnings | PASS |
| TM-113 | R4 normal install | Two normal installs, no `--reinstall`; installed fields/rules verified; broad privilege additions 0 | PASS |
| TM-114 | Production native template and launch | Stable-name production template count 1; published template has two ordered participants, 26 body mappings, and two signature blocks; initiation rules remain inactive | PARTIAL / BLOCKED — R4-RUNTIME-01 |
| TM-115 | Reuse request-level attestation | Exactly one qualifying Active authorization; no form/details/PDF/supersession; APPROVED + signed native evidence gates future fulfillment; denial leaves authorization unchanged; stale context invalidates; repeat-safe | Local source/unit | PASS — `R4-DESIGN-01` RESOLVED; runtime remains blocked by `R2-AGENCY-01` |
| TM-116 | Controlled New/denial/Amendment/Renewal runtime | Synthetic R3 decision fields persisted, but the three mandatory dictionary-read-only snapshots could not be populated through native UI even with an exact temporary `rob_admin` grant; grant removed; zero forms/details created | NOT RUN / BLOCKED by R2-AGENCY-01 and R4-RUNTIME-01 |

## M4 Conditional Fulfillment Evidence

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-117 | Hard gate and stopped-request guard | False gate, Denied, and Withdrawn fixtures create zero tasks | Local source/unit PASS |
| TM-118 | Staffing/Analytics grouping | One team task per Parent Case + Task Type for single, multiple, and mixed items | Local source/unit PASS |
| TM-119 | WPC routing | Analytics + OM; OM metadata remains ARM provisioning / OAS target | Local source/unit PASS |
| TM-120 | Missing OM | One Exception Review, no OM completion, parent remains ineligible | Local source/unit PASS |
| TM-121 | Task idempotency | Stable case/type keys suppress duplicate team, OM, and Exception work | Local source/unit PASS |
| TM-122 | Evidence and item activation | Closed-only rejected; completion/waiver evidence required; unrelated details remain unchanged | Local source/unit PASS |
| TM-123 | Parent closure and WPC guard | Incomplete required task/exception blocks closure; WPC waits Analytics + OM | Local source/unit PASS |
| TM-124 | OM escalation foundation | Configuration-driven, retry-safe, privacy-safe plan retains open task/case | Local source/unit PASS |
| TM-125 | Architecture guard | Native task only; inactive entry points; no direct provisioning integration | Local source/unit PASS |

Focused M4 result: 26/26 PASS. Production fulfillment runtime and native persona
validation remain **BLOCKED BY M2/M3** and are not represented as PASS.
