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

## M2 Approved Profile/Form Snapshot Evidence

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-126 | Position precedence | HR Profile Position, configured user-title fallback, unresolved stop | M2 local PASS; PDI BLOCKED-INSTALL |
| TM-127 | Organization precedence/fallback | Profile Position department, user department, approved-root descendant; outside root rejected | M2 local PASS; PDI BLOCKED-INSTALL |
| TM-128 | Supervisor population/security | Manager default; active configured-group member accepted; inactive/nonmember/manipulation rejected | M2 local PASS; PDI BLOCKED-INSTALL |
| TM-129 | Authorization Form snapshot gate | Position, Organization, Supervisor copied before signing; missing context blocks; signer route fixed to form Supervisor | M2 local PASS; PDI BLOCKED-INSTALL |
| TM-130 | Historical stability and Reuse | Later profile changes do not mutate form; Reuse uses current Supervisor without changing reused form | M2 local PASS |
| TM-131 | Legacy field retirement | Active decision/lifecycle source has no read/write dependency; metadata and protections retained; correction UI inactive | M2 local PASS |
| TM-132 | M2 regressions | R1 9/9; Wave 2 security 22/22; deployment 16/16; R3 30/30; R4 52/52; M4 26/26 | PASS |

Focused M2 source/unit result: 19/19 PASS. Supported manual metadata recovery,
Class C configuration, native identity proof, and the narrowly allowlisted HR
Core bridge resolved `R2-AGENCY-01` for PDI validation. The Australia SDK
installer defect remains open, but is no longer the M2 runtime gate. The native-
case persistence requirement in TM-86 through TM-96 is historical capability
evidence and is superseded by TM-126 through TM-131; the failed fields remain
compatibility metadata, not production prerequisites.

## M3 Production Authorization Runtime

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-133 | M3 production preflight | Commit `c325b13`; four custom tables; exact M2 Reads 5/5; bridge Execute 1; broad writes 0; R4/M4 entry rules inactive | PASS |
| TM-134 | Installed lifecycle-source reconciliation | Exact R4 rule records are installed but contain pre-M2 snapshot-dependent scripts | BLOCKED before activation |
| TM-135 | Governed supervisor signer routing | Published template targets `sn_hr_core_case`; Supervisor participant reads `assigned_to` rather than Authorization Form `supervisor` | FAIL — security/architecture stop |
| TM-136 | New/Denial/Amendment/Renewal/Reuse production runtime | No entry rule activated and no synthetic production lifecycle executed after TM-135 stop | NOT RUN / BLOCKED-PLATFORM |

M3 created zero cases, Authorization Forms, Access Details, Document Tasks,
PDFs, or fulfillment tasks. M4 production runtime remains not ready.

### M3 governed signer binding follow-up

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-137 | Governed Supervisor advanced resolver | Production Supervisor participant reads associated `rob_auth.supervisor`; `assigned_to` dependency 0 | PASS — configuration/source |
| TM-138 | Controlled New launch | `HRC0001061` created `ROBA0001005` and one pending USA Staffing detail | PARTIAL — stopped before signing |
| TM-139 | Native Document Templates caller boundary | Logs `38d68e66c3728b1068a35f2b2b0131bc` / `b4d68e66c3728b1068a35f2b2b0131bc`; RCA `bcd68e66c3728b1068a35f2b2b0131ba` denied | BLOCKED-PLATFORM |
| TM-140 | Security cleanup | Generated setValue/insert/update privileges deleted 3/3; broad writes 0; R4/M4 rules inactive | PASS |
| TM-141 | Remaining lifecycle runtime | Denial, Amendment, Renewal, and Reuse not attempted after mandatory security stop | NOT RUN / BLOCKED-PLATFORM |

The earlier zero-artifact statement applies only to the preflight run. The
follow-up intentionally retained one synthetic case, one governed Authorization
Form, and one pending Access Detail as blocker evidence; it created zero
Document Tasks, final PDFs, or fulfillment tasks.

### M3 Document Templates RCA recovery and production stop

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-142 | Exact Document Templates RCA recovery | Payroll and Workforce each approved only caller-specific PDF Template Read and Document Task Read | PASS |
| TM-143 | Payroll and Workforce native launch | Payroll `DOCT0001013`; Workforce `DOCT0001014`; governed Supervisor retained | PASS |
| TM-144 | Production New lifecycle | `HRC0001083` / `ROBA0001014`; employee `DOCT0001018`; supervisor `DOCT0001019`; PDF `ffea3266c37e8b1068a35f2b2b01312d`; Active | PASS |
| TM-145 | Supervisor denial/refusal | Native PDF Fill offers Save/Submit only; Review does not sign; no supported persisted Deny/Refuse action | BLOCKED-PLATFORM |
| TM-146 | Amendment, Renewal, Reuse | Not executed after mandatory TM-145 stop | NOT RUN / BLOCKED-PLATFORM |
| TM-147 | Security cleanup and safe state | All generated broad privileges removed; post-13:30 generated privilege count 0; R4/M4 rules inactive | PASS |

### M3 separate supervisor decision and persistence boundary

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-148 | Native supervisor decision | `sysapproval_approver` `0db9cb6ac332cb1068a35f2b2b013146` routed to governed Supervisor Robyn and persisted Rejected with timestamp/comment | PASS |
| TM-149 | Denial branch behavior | `ROBA0001015` and its pending detail became Denied; supervisor signature task 0; approved final PDF 0; fulfillment 0 | FUNCTIONAL PASS / NOT PRODUCTION-SAFE |
| TM-150 | Scoped response persistence | HR Access response generated prohibited generic `GlideRecord.setValue` and `GlideRecord.update` Execute privileges | BLOCKED-PLATFORM |
| TM-151 | Security cleanup | Both generic privileges and the unapproved abstract HR Case Read RCA were removed; response and production entry rules inactive | PASS |
| TM-152 | Amendment, Renewal, Reuse continuation | Not run after the mandatory scoped-persistence security stop | NOT RUN / BLOCKED-PLATFORM |

The native approval record proves that decision and PDF signature can be
separate. It does not prove a production-safe response path: a platform-owner-
approved Flow/HRSD boundary is still required to persist the Global approval
response into the scoped governed Authorization Form without generic
GlideRecord privileges.

### M3 ROB-owned Flow orchestration

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-153 | Required native Flow actions | Ask For Approval `bae0a1120b10030085c083eb37673a92`; Create Document Task `b4fd25d877441010195693df591061b4` | PASS |
| TM-154 | ROB-owned Flow creation | Two clean Workflow Studio attempts; component-load errors and missing navigation context; Flow count remained 0 | BLOCKED-PLATFORM |
| TM-155 | Runtime lifecycle continuation | No Flow existed, so Denial/New/Amendment/Renewal/Reuse were not executed | NOT RUN |
| TM-156 | Safe-state preservation | Approval response, R4, and M4 rules inactive; broad GlideRecord privileges 0 | PASS |

Direct metadata creation, Background Scripts, Global response logic, and bridge
expansion were not used.

### M3 ROB-owned Flow configured and fixture boundary

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-157 | ROB-owned Flow publication | Flow `9fea8036c3fecb1068a35f2b2b013184` active/published in HR Access ROB Authorization | PASS |
| TM-158 | Governed branches | Rejected denies form/details; Approved launches template `f99c3c0ac372031068a35f2b2b013138` participant `a235d582c3f6031068a35f2b2b01316b` | CONFIGURATION PASS |
| TM-159 | Employee-first source alignment | Initial lifecycle creates only Employee Document Task; R4 focused suite 58/58 | PASS |
| TM-160 | Controlled R3 fixture | Inline edit denied and native record-template picker excludes all four read-only R3 outputs | BLOCKED-PLATFORM |
| TM-161 | Cleanup | Temporary role absent; no fixture template; both R4/M4 entry pairs inactive; broad GlideRecord privileges 0 | PASS |
| TM-162 | Remaining runtime | Flow Denial, Amendment, Renewal, and Reuse not executed without committed R3 input | NOT RUN / BLOCKED-PLATFORM |
| TM-163 | V2 installed R3 module contract | Authorization context inputs present; legacy snapshots absent | PASS |
| TM-164 | V2 R3 production caller inventory | Exactly one approved caller/persistence path | FAIL: 0 callers |
| TM-165 | V2 R3 outputs remain read-only | No editable synthetic decision outputs | PASS |
| TM-166 | V2 HR Core bridge scope | Only approved case classes, fields, and M2 reasons | PASS |
| TM-167 | V2 R3 Exception persistence | Committed Exception codes persist through approved boundary | BLOCKED: no approved boundary |
| TM-168 | Lifecycle safety at V2 blocker | M3/M4 rules inactive; signing/fulfillment 0 | PASS |

### V2 R3 production invocation/persistence source correction

| ID | Test | Evidence | Result |
|---|---|---|---|
| TM-169 | Single current R3 engine invocation | Shared adapter requires built `AuthorizationDecisionService.js` and calls `evaluate(context)`; no duplicate service | Source PASS |
| TM-170 | Post-M2 input contract | Adapter supplies `authorizationContext.valid`, `supervisorId`, `position`, and `organization`; retired snapshot inputs absent | Source PASS |
| TM-171 | Native case entry coverage | Exactly one inactive before-insert evaluator rule for Payroll and one for Workforce; existing lifecycle rules accept insert | Source/build PASS |
| TM-172 | Narrow HR Core persistence | Existing bridge accepts only two case classes, committed decision/reason values, valid references, and system-managed R3 outputs | Focused test PASS |
| TM-173 | Identity and arbitrary-write rejection | No write to `opened_by`, `opened_for`, or `subject_person`; no generic table/field input; no bridge insert/update | Focused test PASS |
| TM-174 | Deterministic unknown mapping | Adapter preserves unequal material context and annual-renewal disposition as `unknown`; engine returns the corresponding committed Exception | Source/R3 unit PASS |
| TM-175 | Exception gate persistence | Exception sets review/block true, signature/approval requirements false, and fulfillment gate false | Focused test PASS |
| TM-176 | Installed/runtime adapter acceptance | Reconcile HR Core bridge, install V2 callers, verify RCA and read-only outputs, then run New/Denial/Amendment/Renewal/Reuse/Exception | NOT RUN - install authorization required |
| TM-177 | V2 current R3 live decision | `HRC0001009` persisted `New` / `NEW_NO_PRIOR_FORM` using current authorization context | PASS |
| TM-178 | Retry-safe employee signing launch | `ROBA0001002`; native `DOCT0001001`; exact caller-specific Reads/Execute only | PASS to native task gate |
| TM-179 | Native Fill Document | Synthetic employee invoked supported action; modal returned `Attachment Not Found` | BLOCKED-PLATFORM |
| TM-180 | Governed template source/parent | Source PDF Preview succeeds, but supported Table selector excludes `x_2166123_rob_auth_rob_auth` | UNSUPPORTED |
| TM-181 | Safe stop and local regression | Production template Published; duplicate inactive/Draft; M3/M4 lifecycle rules inactive; all required suites/builds pass | PASS |
| TM-182 | Restored employee signing launch | Employee-only HR Case template uses `GenerateDocumentAPI.initiateDocumentTasks`; direct `DocumentTaskUtils` launch absent | SOURCE/BUILD PASS |
| TM-183 | Approval-order preservation | Employee-only template has no Supervisor participant; native approval precedes existing supervisor-only launch | MANUAL/PDI RETEST REQUIRED |
| TM-184 | Complete native employee execution | Employee task has Document Task Execution and opens usable Fill Document content | PDI RETEST REQUIRED |
| TM-185 | Flow execution identity | Published Flow runs as System User and can read the ACL-governed Authorization Form | PDI PASS |
| TM-186 | Governed native approval | `ROBA0001002` creates native approval for V2 Supervisor A; approval identity/time persist separately | PDI PASS |
| TM-187 | Generic task-action exclusion | Flow contains no Create Document Task action; incomplete task-shell path is not production | CONFIGURATION PASS |
| TM-188 | Same-table Supervisor launch adapter | Active `sys_script` `e56b96952f53473c96e6ec811ff0ec95` contains inline `GenerateDocumentAPI` and accepts supported Payroll/Workforce source case only | PDI INSTALL PASS; CLEAN RUNTIME RETEST REQUIRED |
| TM-189 | Incomplete native task shell retry | A matching task suppresses `GenerateDocumentAPI` only when both `document_task_execution` and `pdf_document` are populated | SOURCE/TEST/BUILD PASS; IDE INSTALL/RETEST REQUIRED |
| TM-190 | Complete Supervisor native launch | `DOCT0001006` contains native execution `3fc1eaf783b60b104f5193a6feaad31b` and PDF `e9fb6627837647104f5193a6feaad375` | PDI PASS |
| TM-191 | Template purpose isolation | Employee stage uses `ROB Form 1768 Employee Signature`; New/Amendment/Renewal Supervisor and final PDF use `ROB Form 1768 Authorization`; Reuse attestation is excluded | SOURCE/TEST/BUILD/INSTALL PASS |
| TM-192 | IDE stage-separation deployment | IDE Pull/Sync review/Build/normal Install; live launcher and finalizer contain committed template selection; generated-key diff empty | PASS |
| TM-193 | Governed approval retry | Native approval `c88b6eb3837a0b104f5193a6feaad3ee` routed to V2 Supervisor A and persisted Approved at `2026-08-26 10:14:55` | PASS |
| TM-194 | Production-template native task creation | `DOCT0001007` uses production template `7119926383f247104f5193a6feaad318` and has execution/PDF references | PASS |
| TM-195 | Post-approval Supervisor participant selection | New execution starts production template at Employee participant order 1; protected `GenerateDocumentAPISNC` exposes no participant/order/resume parameter | BLOCKED-PLATFORM |
| TM-196 | Safe stop | `DOCT0001007` unsigned and retained; admin restored; broad privileges/temporary roles 0; M4 inactive | PASS |
| TM-197 | Remaining M3 matrix | New activation, Denial, Amendment, Renewal, Reuse, Exception, immutability, and complete regression acceptance not continued after TM-195 hard stop | NOT RUN / BLOCKED-PLATFORM |
| TM-198 | Conditional Employee participant | Published production template retains Employee order 1/Supervisor order 2 and 28 mappings; Employee optional resolver skips only after employee signature and explicit approval | CONFIGURATION PASS |
| TM-199 | Correct post-approval participant routing | `DOCT0001008` assigned to V2 Supervisor A with execution `fad6363f83ba0b104f5193a6feaad3aa` | PDI PASS |
| TM-200 | Native Supervisor signature Accept | `snc_viewer.js:setSignatureField` throws null `.style`; task remains Ready and unsigned | BLOCKED-PLATFORM |
| TM-201 | Conditional-participant safe stop | Admin restored; broad privileges/temporary roles 0; M4 inactive; all suites and normal/frozen builds pass | PASS |
| TM-202 | Continuous production execution | New/Amendment/Renewal launch `ROB Form 1768 Authorization` once through `GenerateDocumentAPI`; employee-only template absent from runtime source | SOURCE/TEST PASS; IDE INSTALL PENDING |
| TM-203 | Participant contract | Employee is required order-1 `fill`; Supervisor is required order-2 `fill`; both have mandatory signature mappings and share one native execution | SOURCE GUARD PASS; PDI CONFIG/RUNTIME PENDING |
| TM-204 | Accepted native Sign | Governed Supervisor state `3` atomically persists approval and signature identity/time/task/execution before final PDF | SOURCE/UNIT PASS; PDI RUNTIME PENDING |
| TM-205 | Refused native Sign | Governed Supervisor state `7` plus decline reason retains refused task/execution, denies pending records, and produces no signature/PDF/activation/fulfillment | SOURCE/UNIT PASS; PDI RUNTIME PENDING |
| TM-206 | Split execution neutralization | Post-approval relaunch and legacy approval response rules inactive; approval Flow and employee-only template scheduled for native deactivation | SOURCE/BUILD PASS; PDI CONFIG PENDING |
| TM-207 | IDE deployment of continuous correction | Commit `221ec1d`; normal IDE Build and Install; live evidence handler current; split launcher inactive | PASS |
| TM-208 | Australia action reconciliation | Existing Supervisor `fill` is retained because ServiceNow Sign uses Fill/Review; no mapping deletion or action conversion is required | SUPERSEDED / RESOLVED BY CONTRACT |
| TM-209 | Single-mapping preservation | Authorized Supervisor Signature mapping delete did not persist; mapping `86e62aab83f247104f5193a6feaad318` and all 28 mappings remain | PASS — no destructive change |
| TM-210 | Native safe restoration | Production template active/Published; prior Employee optional/advanced `fill`, Supervisor required `fill`, 28 mappings, active Flow/employee-only template; Reuse unchanged | PASS |
| TM-211 | Continuous Fill/Refuse runtime matrix | Accepted New, Denial, Amendment, Renewal, Reuse, Exception, and immutability after supported Fill contract restoration | PDI PENDING |

### V2 template-first M3 reconstruction

| ID | Test | Method | Status |
|---|---|---|---|
| TM-212 | Logical Form 1768 contract | Source-controlled manifest defines one HR Case template, Employee required order-1 `fill`/`subject_person`, Supervisor required order-2 `fill`/governed resolver, 26 body mappings, and two mandatory participant signatures | SOURCE PASS |
| TM-213 | Read-only production contract rejection | Validator rejects duplicate/Draft templates, optional or conditional Employee, non-Fill Supervisor, incomplete/unexpected body fields, and missing signature mappings | UNIT 4/4 PASS |
| TM-214 | Read-only production readiness | Production mode requires exactly one active Published stable-name template with source PDF, exact participants, and all 28 mappings; no PDI sys_id exists in the contract | PDI PENDING |
| TM-215 | Approved continuous execution | Employee state `3` and governed Supervisor Fill/Submit state `3` share one execution; both evidence sets persist; exactly one final PDF; Authorization Active; fulfillment zero | PDI PASS - `HRC0001011` / `ROBA0001004` |
| TM-216 | Native Refuse denial | Governed Supervisor state `7` must retain identity/time/task/execution/reason; the live Fill task offers no supported Refuse/Decline operation capable of producing this evidence | BLOCKED-PLATFORM |
| TM-217 | Approved New continuous Fill runtime | `HRC0001011` / `ROBA0001004`; `DOCT0001011` and `DOCT0001012` share execution `7d104d8883838b104f5193a6feaad392`; both state `3`; atomic Supervisor evidence; one final Authorization Form PDF; Active; fulfillment 0 | PDI PASS |
| TM-218 | Denial fixture reaches governed Supervisor | `HRC0001012`; Employee `DOCT0001013` Closed; Supervisor `DOCT0001014` Ready for V2 Supervisor A; shared execution `83d5090883c38b104f5193a6feaad3f1` | PDI PASS TO NATIVE DECISION GATE |
| TM-219 | Native PDF Fill refusal control | Classic Fill Document and Employee Center My Tasks inspected as governed Supervisor; Save/Submit only, no Refuse/Decline/Reject | BLOCKED-PLATFORM |
| TM-220 | Australia contract verification | Official Fill documentation supports Save/Submit; native Decline is documented for `Sign` participants, not PDF `Fill` | CONFIRMED UNSUPPORTED |
| TM-221 | Denial safe stop | `DOCT0001014` preserved Ready/untouched; no manufactured state `7`, direct metadata write, custom denial engine, broad privilege, or M4 activation | PASS |
| TM-222 | Remaining M3 matrix | Amendment, Renewal, Reuse, Exception, immutability, and final closeout not continued after focused Denial hard stop | NOT RUN / BLOCKED-PLATFORM |

### C1 split-stage native approval and signing

| ID | Test | Method | Status |
|---|---|---|---|
| TM-223 | Split-template contract | Unit validator requires separate Employee and Supervisor `sn_doc` Fill templates plus the 28-map renderer; shared execution, Fill state-7 denial, `Sign`, and optional-skip assertions are absent | PASS 7/7 |
| TM-224 | Production template readiness | Read-only validator finds exactly one active Published employee template, one active Published supervisor template, one participant/signature mapping on each, and the final renderer with 28 mappings | PDI PASS |
| TM-225 | Employee participant residue | Employee is non-advanced `subject_person`; hidden copied Supervisor resolver script is empty | PDI PASS |
| TM-226 | Native approval branches | Ask for Approval uses the governed Authorization Form and Supervisor; Approved and Rejected branch lookups resolve the matching native approval record | CONFIG REVIEW PASS; RUNTIME PENDING |
| TM-227 | Rejected persistence | Rejected branch records native approver/update time, canonical Denied outcome, and denies only pending Access Details for the current Authorization Form | CONFIG REVIEW PASS; RUNTIME PENDING |
| TM-228 | Focused Approved New | Employee signs, native approval Approved, governed Supervisor signs, one final PDF is attached only to the Authorization Form, Active, fulfillment zero | PENDING AFTER INSTALL |
| TM-229 | Focused Denial | Employee signs, native approval Rejected with comments, Authorization Form/details Denied, no Supervisor signing task/PDF/Active/supersession/fulfillment | PENDING AFTER INSTALL |
| TM-230 | C1 local acceptance | M2 19/19; R1 9/9; Security 22/22; Deployment 16/16; R3 30/30; adapter 13/13; R4 62/62; M4 26/26; normal/frozen builds; generated-key diff empty | PASS |

### C1 final acceptance (2026-08-27)

| ID | Test | Runtime evidence | Status |
|---|---|---|---|
| TM-231 | Final lifecycle matrix | Approved New, Denial, Amendment (approved and rejected replacement), Renewal, Reuse, and Exception completed against frozen requirements | PASS |
| TM-232 | Reuse zero-governed-artifact contract | `HRC0001044`; `REUSE_FULLY_COVERED`; `DOCT0001034`; no new Authorization Form, Access Detail, governed final Authorization PDF, supersession, or M4 task | PASS |
| TM-233 | Reuse idempotency | Completed lifecycle replay retained one task/execution/working attachment and unchanged terminal evidence | PASS |
| TM-234 | Historical immutability | Live synthetic title/Department/Manager mutation did not change `ROBA0001012` snapshots, signers, timestamps, or final PDF hash; live context restored | PASS |
| TM-235 | Final regression/build | M2 19/19; R1 9/9; Security 22/22; Deployment 16/16; R3 30/30; adapter 13/13; R4 64/64; M4 26/26; template 7/7; normal/frozen builds PASS; generated-key unexpected changes 0 | PASS |

### C2 M4 runtime acceptance

| ID | Test | Method | Status |
|---|---|---|---|
| TM-236 | HR Core bridge allowlist | Positive supported case creation and negative arbitrary case/task/field/state/identity checks | PASS |
| TM-237 | Systems-only grouping | One Staffing task; no Analytics/OM/Exception duplicate | PASS |
| TM-238 | Data/report grouping | One Analytics task; no Staffing/OM duplicate | PASS |
| TM-239 | Mixed grouping | Exactly one Staffing and one Analytics task | PASS |
| TM-240 | WPC ARM/OAS routing | One Analytics plus one governed OM ARM assignment | PASS |
| TM-241 | Missing OM blocking | One Exception Review task; normal OM absent; case open | PASS |
| TM-242 | Bridge idempotency | Planner replay and final bridge check create zero duplicates | PASS |
| TM-243 | Completion/detail scope | Native Update Record subflow activated only covered Details; incomplete/unauthorized evidence failed closed | PASS |
| TM-244 | Parent closure | Partial Mixed completion remained open; after both obligations completed, `HRC0001049` closed through the HR Core bridge | PASS |
| TM-245 | Authorized waiver | `HRT0001003` retained actor, reason, time, close notes, and evidence; matching `ROBD0001028` became Active | PASS |
| TM-246 | Least privilege | Exact bridge Execute only; broad API/native Write zero; unexpected RCA zero | PASS |
| TM-247 | No external provisioning | External API calls remain zero | PASS |

### C2 final closeout — 2026-08-28

C2 runtime acceptance is 13/13 PASS. Final regression passed M2 19/19, R1
9/9, Security 22/22, Deployment 16/16, R3 30/30, R3 adapter 13/13, R4
64/64, M4 34/34, and split-template validator 7/7. Normal/frozen SDK 4.11.0
builds and diff/generated-key gates passed with zero unexpected key changes.

### C3 / M5 security, UAT, and release

| ID | Test | Method | Status |
|---|---|---|---|
| TM-248 | Daily renewal boundary matrix | 90/60/30, late daily execution, invalid dates, non-active immutability | Focused source `PASS` |
| TM-249 | Reminder/lapse idempotency | Existing timestamp evidence suppresses retries; one cycle key; no ledger table | Focused source `PASS`; PDI pending |
| TM-250 | Active replacement suppression | Expired predecessor with active replacement receives no lapse/notice | Focused source `PASS`; PDI pending |
| TM-251 | Privacy-safe renewal/lapse notifications | Secure link; no attachment/PDF/signature/justification/SSN | Focused source `PASS`; native preview pending |
| TM-252 | Governed-record ACL metadata | Subject/Admin/Compliance plus exact Staffing/Analytics task context; OM repository denial | Focused source `PASS`; PDI persona matrix pending |
| TM-253 | Final PDF direct URL | Authorized compliance/admin allowed; unrelated employee denied | PDI impersonation | Not Run |
| TM-254 | Eight-persona UAT matrix | Employee, Supervisor, Staffing, Analytics, OM, Admin, unrelated, Compliance across approved channels | PDI manual/ATF | Not Run |
| TM-255 | Secured reports/dashboard | RPT-1â€“RPT-8 counts, filters, audience, aggregate and drilldown isolation | PDI report/UAT | Not Run |
| TM-256 | Privacy/schema/retention release review | Synthetic-only, no SSN, no notification attachment, no automatic deletion/deprovisioning | Source/PDI/manual | Source partial PASS; runtime pending |
| TM-257 | C3 final release regression | Complete prior suites, M5 suite, normal/frozen build, keys/security counts | Local/PDI | Not Run |
# C2 runtime disposition — 2026-08-27

- Systems-only routing: PASS (`HRC0001045` → one Staffing task
  `HRT0001002`).
- Retry/idempotency: PASS (replay retained one deterministic business key).
- Remaining fixed C2 gates: NOT RUN after the supported final IDE install
  failed with zero applied changes because `sys_plugins` has no
  `x_2166123_rob_auth` record.
- Post-C0 blocker: `M5-12` disproven; no alternate deployment or metadata
  workaround was attempted.
