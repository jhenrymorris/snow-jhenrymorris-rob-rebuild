# Manual Configuration Checklist
## HR Access ROB Authorization

## 1. PDI Capability Verification

- [ ] Australia release confirmed
- [ ] HRSD installed
- [ ] `sn_hr_core_case` available
- [ ] `sn_hr_core_task` available
- [ ] Employee Center or HR portal available
- [ ] Flow Designer available
- [ ] ATF available
- [ ] HR e-signature available
- [ ] Document/PDF capability available
- [ ] Required plugins documented

R4 capability status (2026-08-15): current Document Templates, ServiceNow Sign,
E-Signature, Digital Signature API/component, and PDF Generation Utilities are
installed. This was availability evidence only. `R4-POLICY-01` is RESOLVED by
the approved Appendix B rendering contract. At that checkpoint `R4-PDI-01` was
OPEN and still had to validate a controlled native template end to end, including both signers,
separate native supervisor approval, exact signed content, final attachment
destination, immutability, and historical retention. No broad cross-scope
privilege was approved for that work. The R4.2.2 section below records the
subsequent resolved capability result.

R4.2 runtime evidence: an HR Core-owned HTML template successfully created an
ordered employee/supervisor Document Task chain and a system-generated PDF on
synthetic Workforce Administration case HRC0001026. Persisted evidence is
DOCT0001003 (employee Amos Linnan, closed `2026-08-15 23:18:08`), DOCT0001004
(supervisor Rebekah Lindboe, closed `2026-08-15 23:19:43`), execution
`a635f8e4c33ecb1068a35f2b2b01316d`, and PDF attachment
`0876f06cc33ecb1068a35f2b2b01313a`. This is capability evidence only.

The native supervisor stage combined a required acknowledgement with ServiceNow
Sign; it did not create a separately proven approval record. Denial execution,
independent historical signed-version retention, and exact Form 1768 rendering
remain unproven. The copied template also retained unrelated sample-template
body content. Do not promote it. All R4.2 templates are non-published, and the
Staffing/Analytics HR templates have been restored without a document-template
binding. `R4-PDI-01` remains OPEN.

R4.2.1 completed explicit approval, refusal, independent-history, and clean
Form 1768 rendering tests. Approval case HRC0001031 produced PDF
`00f925a4c33a0f1068a35f2b2b0131a2`; refusal case HRC0001032 persisted
DOCT0001008 with state `7` and a decline reason and produced no PDF; Form 1768
case HRC0001033 produced clean PDF `668b256cc33a0f1068a35f2b2b0131f6`.
V1 `0876f06cc33ecb1068a35f2b2b01313a` and V2 `00f925a4c33a0f1068a35f2b2b0131a2`
remain independent. However, the native `${Date}` token is resolved before
signing and is not bound to the persisted supervisor signature timestamp;
likewise the eventual employee/supervisor timestamps cannot be rendered into
the signed body before they exist. `R4-PDI-01` is BLOCKED pending a
platform-owner-supported signed-content mechanism. Do not substitute the
template-generation date for Final Authorization Date.

Cleanup requirement is satisfied: Analytics template
`94967a0fc30e4f1068a35f2b2b013152` has no document-template binding; all four
temporary capability templates remain non-published for evidence only; broad
privilege `ef33bcacc3facb1068a35f2b2b01312a` was deleted; temporary roles are
zero. Do not publish or bind these evidence templates to normal intake.

R4.2.2 resolved the remaining timestamp/final-date capability gate. Synthetic
case HRC0001034 used execution `454f0b68c3fe4f1068a35f2b2b0131bc`, employee
task DOCT0001011, and APPROVED supervisor task DOCT0001012. A Document
Templates-owned draft template reread the committed task evidence and generated
clean final PDF `b3d35f28c3328f1068a35f2b2b01319e` on DOCT0001012. The PDF renders employee
time `2026-08-16 03:28:28`, supervisor time `2026-08-16 03:29:14`, Final
Authorization Date `2026-08-16`, and distinct generation time
`2026-08-16 03:47:35`.

The capability configuration is Class C. Two non-published evidence templates
and the two template-script helpers needed to reproduce the final rendering are
retained; none is bound to normal intake. The one-time same-scope generation UI
action was deleted. The Analytics HR template was restored exactly, the signing
template is `edit`, the finalization template is `draft`, temporary roles are
zero, and no new caller-access or cross-scope privilege remains. Production R4
must replace the synthetic constants with governed Authorization Form fields and
invoke finalization only after the readiness gate; do not reuse the capability
records as production orchestration.

## 2. Synthetic Users and Groups

Users:

- [ ] Subject / Requester
- [ ] Supervisor
- [ ] Staffing Fulfiller
- [ ] Analytics Fulfiller
- [ ] Operations Manager
- [ ] Compliance Viewer
- [ ] ROB Administrator
- [ ] Unrelated Employee

Groups:

- [ ] ROB Staffing Fulfillment
- [ ] ROB Analytics Fulfillment
- [ ] ROB Operations Manager Escalation
- [ ] ROB Exception Review
- [ ] ROB Compliance

Do not hard-code group sys_ids in source.

### Wave 1 Batch 1 Configuration

#### R1 installed-data reconciliation procedure and result

The Australia PDI already contains the seven stable Wave 1 seed/configuration
records. SDK 4.8.1 normal installs applied the R1 schema but did not update those
existing table-data rows. Do not delete and recreate them and do not use
`--reinstall`.

R1.1 completed an approved controlled in-place update while retaining these
sys_ids and all incoming references:

- `5a2f47bb7a7b4054a1cda69422fffbaf`: set Current Accepted Form Version to
  `2026.04`; retain `2027-09-30` only as an explicitly synthetic PDI value.
- `183e8d6e80fd4825bc0d0cb6b051facc`: set Form 1768 Mapping to `fpps_wtts`.
- `2f65b6a0129c49b98f1fca2b54d1e74f`: set Form 1768 Mapping to `eopf`.
- `888b607ff5564df1b0f202346e83dbfb`: set Form 1768 Mapping to `usa_staffing`.
- `52f1f7b193a143fdafbebac07a15c763`: retain code `HC_DATA`, rename in place to
  OAS/DataMart, and set Form 1768 Mapping to `oas_datamart`.
- `088251b291f84df1a551e46128c4057e`: retain code `REPORT_ACCESS`, rename in
  place to Human Capital Reports, and set Form 1768 Mapping to
  `human_capital_reports`.
- `dc96577f31514e57a137b265f3c07d78`: retain the WPC record identity, set its
  approved Analytics/OM/ARM/OAS-WPC metadata, and set Form 1768 Mapping to
  `wpc`.

The first rollback-recorded execution changed only incorrect values. The second
identical execution made zero record or field updates. Existing HR case
references still resolve to the same sys_ids, no duplicate configuration or
access-item records were created, and no historical Authorization Form was
changed. SDK 4.8.1 seed metadata alone did not reconcile these installed rows;
future upgrades must retain this Class B in-place verification step.

- [ ] Assign the five `x_2108496_hr_acces` application roles to the appropriate synthetic users or groups.
- [ ] Confirm `x_2108496_hr_acces.rob_admin` is reserved for ROB application administrators.
- [ ] Open the active record on `x_2108496_hr_acces_rob_config` and populate the Staffing, Analytics, Operations Manager escalation, and Exception Review group references.
- [ ] Confirm exactly one ROB Configuration record is active.
- [ ] Confirm the active configuration uses `2026.04` for **NSF Form 1768 — April 2026**, the approved grace window, reminders, and lapse-notification setting.
- [ ] Do not approve `2027-09-30` as agency policy from source alone. It is a synthetic PDI seed; obtain the CFG-MAP-01 business value before production use.
- [ ] Obtain approved values for OM Task Due Days, Exception Task Due Days, and OM Escalation Timing (CFG-MAP-02 through CFG-MAP-04). Do not invent defaults.
- [ ] Populate the optional Renewal Notification Copy Group only when approved.
- [ ] Review exactly six active records on `x_2108496_hr_acces_rob_access` for stable code, governed name, category/owner, routing, external systems, sort order, and Form 1768 Mapping.
- [ ] Confirm Workforce Profile Charts is logically Analytics-owned, requires OM, uses ARM for provisioning, targets OAS / Workforce Profile Charts, and maps to `WPC`.
- [ ] Confirm OAS/DataMart retains code `HC_DATA` and Human Capital Reports retains code `REPORT_ACCESS`; do not replace either record or change installed references.

The source intentionally leaves all assignment-group references blank. Populate them only after the synthetic PDI groups are available; do not copy group sys_ids into Fluent source.

### Wave 1 Batch 2 Validation

- [ ] Confirm the first ROB Authorization Form number is `ROBA0001000`.
- [ ] Confirm the first Authorized Access Detail number is `ROBD0001000`.
- [ ] Confirm `x_2108496_hr_acces_rob_auth` uses Number as its display value and is available to in-scope reporting.
- [ ] Confirm `x_2108496_hr_acces_auth_detail` uses Number as its display value and is available to in-scope reporting.
- [ ] Confirm references resolve to `sys_user`, `sn_hr_core_case`, ROB Authorization Form, and the Batch 1 ROB Access Item Reference table.
- [ ] Confirm both authorization supersession fields resolve to ROB Authorization Form records.
- [ ] Confirm normal ServiceNow attachments can be added only to the ROB Authorization Form during later document configuration; do not add a custom attachment field or table.
- [ ] Confirm ROB Authorization Form history records audited field changes.
- [ ] Confirm no automatic deletion or retention job removes Authorization Form or Authorized Access Detail history.
- [ ] Confirm a Draft ROB Authorization Form may temporarily have no Form Version.
- [ ] Confirm lifecycle processing reads the active ROB Configuration and populates Form Version before Employee Signature begins.
- [ ] Confirm the installed Australia dictionary read-only option permits lifecycle and server-side processing to populate Form Version while preventing normal form editing.
- [ ] Validate that the Business Justification label is visible on the normal HR Access ROB Authorization application form; record App Home Preview behavior separately because preview rendering is not the acceptance surface.
- [ ] Confirm Authorized Access Detail exposes only Pending Authorization, Pending Fulfillment, Active, Denied, Superseded, Revoked, Expired, and Lapsed; `requested` and `authorized` must not remain active choices.

## Authorized Access Detail related-list control

Parent table: `x_2108496_hr_acces_rob_auth`

Related list:
`x_2108496_hr_acces_auth_detail.rob_authorization_form`

Required list-control settings:

- Omit New button: true
- Omit Edit button: true
- New condition: blank
- Edit condition: blank

Purpose: Authorized Access Detail records are lifecycle-created. Direct
manual creation or mass editing from the parent related list is not supported.

Validation: Reopen an ROB Authorization Form and confirm that the related
list remains visible while New and Edit are absent.

## Known SDK Diagnostic — Simple Reference Qualifiers

SDK version evaluated:

- `@servicenow/sdk` 4.8.1

Affected files:

- `src/fluent/tables/rob-configuration.now.ts`
- `src/fluent/tables/rob-case-security-fields.now.ts`

Affected fields:

- `default_staffing_assignment_group`
- `default_analytics_assignment_group`
- `default_operations_manager_escalation_group`
- `default_exception_review_group`
- Workforce Administration `x_2108496_hr_acces_operations_manager`

Configured syntax:

```typescript
referenceQual: 'active=true',
useReferenceQualifier: 'simple',
```

For all five fields, `referenceQual` remains `active=true` and
`useReferenceQualifier` remains `simple`. This is the documented Fluent syntax
for a plain encoded-query reference qualifier. The SDK 4.8.1 build succeeds but
emits TS11 because its diagnostic incorrectly infers that any populated
`referenceQual` implies an advanced qualifier. The warning is a known SDK
diagnostic inconsistency; the explicit `simple` value is retained and used.

Reference qualifiers limit choices presented by a reference picker. They are not ACL security and do not grant or deny access to `sys_user_group` records.

Required validation after an authorized installation:

- [ ] Run TM-61 against all four assignment-group fields.
- [ ] Confirm the Analytics Operations Manager picker also shows only active
      users in Employee Center.
- [ ] Confirm only active groups appear in each reference picker.
- [ ] Confirm the installed dictionary qualifier is `active=true` and its qualifier mode is `simple`.
- [ ] Re-evaluate the source, installed metadata, and diagnostic after every SDK upgrade.

### Step 26 Navigation and Form Validation

- [ ] Confirm the HR Access ROB Authorization menu is visible to ROB Administrators and Compliance Viewers only as intended.
- [ ] Confirm ROB Administrators see all four list modules.
- [ ] Confirm Compliance Viewers see only ROB Authorization Forms and Authorized Access Details.
- [ ] Confirm Staffing, Analytics, and Operations Manager users cannot browse the administrative menu.
- [ ] Confirm each module opens the correct custom-table list without excluding inactive or historical records.
- [ ] Confirm all four custom tables use the approved default administrative form sections.
- [ ] Confirm the ROB Authorization Form related list shows only details whose `rob_authorization_form` references the current authorization.
- [ ] Revalidate compliance read-only behavior after ACLs are implemented; navigation roles do not enforce record security.
- [ ] Create the Reports and Dashboards module during the reporting wave after a valid target exists; Step 26 omits a broken placeholder.

## 3. HR Services and Employee Center

### Wave 2 SDK-first deployment ownership boundary

The following application-owned artifacts are represented in Fluent source:

- all three ROB intake variable sets and their employee-facing variables;
- the Employment Type and Access End Date dictionaries on both supported case
  subclasses and the Analytics Operations Manager dictionary;
- both Requested Access Items type-21 list collectors, including their exact
  reference table and qualifiers;
- the Access End Date catalog UI policy for time-limited employment types;
- the six starter ROB Access Item Reference records;
- least-privilege table and field ACLs that allow `snc_internal` to resolve
  active access items without create, update, or delete access;
- server-side self-submission enforcement that treats `gs.getUserID()` as the
  sole requester source, rejects supplied identity mismatches before profile
  lookup, and sets `opened_by`, `opened_for`, and `subject_person` from it.

The two installed record producers, their HR Services, HR case templates,
variable-set associations, user-criteria associations, Employee taxonomy
topics, connected-content rows, and assignment groups are existing Human
Resources: Core or Employee Experience records. They are not present in the
application build.
Creating new `CatalogItemRecordProducer` or generic `Record` definitions with
new Fluent keys would create duplicate intake records rather than safely adopt
the installed native records. The SDK does not provide a coalescing adoption
operation for those existing records. Do not hard-code their PDI sys_ids into
source and do not create duplicate M2M rows.

R2 Australia runtime on 2026-08-15 confirmed an additional native contract:
each producer must resolve its unique active HR Service by stable `value` and
write that reference to the case, must persist Business Justification to native
`rich_description`, and must stamp `opened_by`, `opened_for`, and
`subject_person` from `gs.getUserID()`. Both installed producers were corrected
in place accordingly without hard-coded sys_ids. The scoped before-insert rule
then executed and passed provenance, justification, access-item, and requester
profile validation. Its writes to the subclass-owned snapshot fields did not
persist. Do not approve or recreate a broad `GlideRecord.setValue` or
`GlideRecord.update` Execute API privilege as a workaround; the generated
`GlideRecord.setValue` record was removed by exact sys_id. R2 remains blocked
until ServiceNow/SDK guidance identifies a table-scoped supported write path.

R2.1 revalidated that boundary on 2026-08-15. The six snapshot dictionaries
are application-owned fields defined separately on `sn_hr_core_case_payroll`
and `sn_hr_core_case_workforce_admin`, while both target tables are owned by
Human Resources: Core and expose `read_access=true` but
`create_access=false`, `update_access=false`, `delete_access=false`, and
`ws_access=false`. Same-record property assignment, direct native-producer
assignment, and app-scoped creation-time mapped variables all failed database
reread. The attempted app-scoped variables were removed by normal install.
The HR Core variable form could be opened only read-only: its controls were
disabled and no Submit action was available. Exact table Write RCA was not
offered; the platform generated a broad API Execute request instead. That
request was deleted, and the final source-scope privilege list contains only
the approved exact Read entries for `sn_hr_core_service` and `sys_user`.

Do not repeat these mechanisms in the PDI. Agency platform owners must decide
whether the agency environment supports an exact, documented native HRSD
creation mapping or table-scoped write capability for these six dictionaries.
Until that capability is proven on both subclasses, R2 remains
`BLOCKED-PDI` and the full persona matrix must not be reported as passed.

### Agency platform-owner implementation required — Option B

Target tables:

- `sn_hr_core_case_payroll`
- `sn_hr_core_case_workforce_admin`

Target fields on each table:

- `x_2108496_hr_acces_position_title`
- `x_2108496_hr_acces_organization_snapshot`
- `x_2108496_hr_acces_supervisor_snapshot`

The agency mechanism must be HR Core-owned, run at native case creation or the
earliest safe server-side lifecycle point, derive values from the authenticated
user / approved Subject Person and authoritative profile/organization data,
persist before downstream authorization decisions, prevent client override,
preserve audit history, and avoid broad privilege escalation. It must expose no
general-purpose case-write API to the HR Access application.

An HR Core-owned Business Rule, controlled Script Include/API, Flow/Action,
case-creation enrichment, or another native HRSD mechanism may be evaluated;
none is selected or implemented by this repository decision.

Agency validation must prove separately on Payroll and Workforce
Administration cases: all three fields persist after database reread; employee
self-submission succeeds; forged requester, subject, and snapshot values are
ignored or rejected; ordinary employees cannot alter snapshots after creation;
and any retained support-correction path is role-restricted and audited.

The two installed `sc_cat_item_category` associations currently identify the
HR Access ROB Authorization package even though they point to Human Resources:
Core producers and categories. They are not yet represented in Fluent source.
The SDK transform attempt could not access `rob-pdi` through the transform
credential path even though read-only `now-sdk query` access succeeded.
Because a new `Record` key would create a duplicate M2M row, safe SDK adoption
of these two existing records remains a deployment blocker. Resolve it by
transforming the exact existing M2M records into reviewed source when the SDK
credential path is available; do not recreate them manually or paste their
PDI sys_ids into Fluent.

Until those native records can be transformed into reviewed, application-owned
metadata without changing scope ownership or duplicating records, they remain
a narrow native boundary. Validate them after every authorized install with:

```powershell
npm.cmd run verify:wave2:pdi
```

The underlying script is
`scripts/validation/verify-wave-2-deployment.ps1`. It uses only read-only
`now-sdk query` calls and returns `PASS` or `FAIL` with blockers. A missing or
unreadable native association is a blocker, not an assumed manual success.

Pre-deployment read-only audit on 2026-07-27 found:

- no installed ACLs on `x_2108496_hr_acces_rob_access` (the direct cause of
  ordinary employees seeing no list-collector matches);
- blank producer descriptions instead of the approved self-submission text;
- legacy requester fallbacks in both Human Resources: Core producer scripts;
- blank Operations Manager escalation and Exception Review groups on the
  active ROB Configuration;
- the two application-package catalog-category M2M rows described above are
  installed but not source-adopted.

Do not repair the missing access-item ACLs manually. They are now defined in
Fluent, explicitly imported from `src/fluent/index.now.ts`, and require a later
reviewed, explicitly authorized SDK installation.

Required native deployment contract:

- Request Access to HR Systems targets `sn_hr_core_case_payroll`, uses active
  HR Service value `request_access_to_hr_systems`, Human Resources Catalog,
  Staffing, Available For = All Users, Not Available For = SNC External, and
  the ROB Common Intake and ROB Staffing Access variable sets.
- Request Access to HR Data and Reports targets
  `sn_hr_core_case_workforce_admin`, uses active HR Service value
  `request_access_to_hr_data_and_reports`, Human Resources Catalog, Analytics,
  Available For = All Users, Not Available For = SNC External, and the ROB
  Common Intake and ROB Analytics Access variable sets.
- Both producers are active, visible in Employee Center, assigned through
  connected content to Employee > Human resources > HR Systems and Data
  Access, linked to an active HR Service and case template, and use only
  self-submission wording. Each description must contain this exact sentence:
  `This request will be submitted for your own HR systems or data access.`
- Each producer script must read `gs.getUserID()` directly, reject any supplied
  requester/subject identity that differs before any `sys_user` lookup, then
  set `opened_for` and `subject_person` from that authenticated identity. Remove
  the complete legacy conditional requester-profile fallback block. Do not
  replace it with `producer.opened_for || gs.getUserID()`,
  `producer.subject_person || gs.getUserID()`,
  `producer.requested_for || gs.getUserID()`, or an equivalent fallback.
- Do not add an on-behalf-of variable, alternate actor, supervisor override,
  HR/admin bypass, or delegated path. The deferred design remains only in
  `docs/decisions/DEFERRED-DELEGATED-SUBMISSIONS.md`.
- The linked case templates retain the approved short description, service and
  category consistency, and configured assignment group. Assignment-group
  sys_ids remain environment-specific and must not be copied into Fluent.

### Wave 2 security-remediation PDI gate

Do not run these tests until the user separately authorizes installation. Use
synthetic users, access items, cases, and correction reasons only. Enable ACL
debugging and capture case/task numbers, execution timestamps, system logs,
`sys_restricted_caller_access`, and `sys_scope_privilege` evidence.

Run every applicable case through both **Request Access to HR Systems** and
**Request Access to HR Data and Reports**:

1. Submit a valid self-request with an active non-self manager. Confirm one
   case on the expected subclass, the correct HR Service, title/supervisor
   snapshots, and unchanged short description, description, employment type,
   access end date, requested items, Operations Manager, assignment group, and
   priority.
2. Prove `opened_by`, `opened_for`, `subject_person`, and session user are all
   populated and equal before the order-100 rule runs. If native HRSD populates
   any identity later, stop and change the execution point; do not add an actor
   fallback.
3. Create unrelated Payroll and Workforce Administration cases with empty and
   populated scoped requested-items fields. Confirm an unrelated HR Service
   causes no requester lookup or ROB evidence write. Deactivate each approved
   synthetic ROB HR Service in turn and confirm a claimed request aborts before
   requester lookup; reactivate it before continuing.
4. On each approved ROB HR Service, test empty items, an unknown sys_id, an
   inactive ROB item, and an active item from the wrong category. Each must
   stop before requester profile lookup or snapshot write.
5. Test each identity empty in turn and every mismatch combination, including
   UI, API, import, flow, integration, background, administrator, and
   impersonation contexts. Confirm no delegated fallback and no victim lookup.
6. Inject title, supervisor, exception, block, and gate values on insert.
   Confirm server-derived values replace them and all native mappings remain
   unchanged.
7. Test missing, invalid, inactive, and self-referential supervisors. Confirm
   the exact reason, blank supervisor, processing block, all three gates false,
   and exactly one native Exception Review HR task assigned from active ROB
   Configuration.
8. Replay/retry the exception-task rule and update the case repeatedly. Confirm
   no second Exception Review task, signature work, approval work,
   authorization activation, or fulfillment work is created while blocked.
   Attempt to change ROB Task Type through every supported write channel and
   confirm the system-managed `exception_review` value remains unchanged.
9. As subject, supervisor, both fulfillers, Operations Manager, compliance
   viewer, unrelated employee, API/import user, and platform admin without
   `rob_admin`, attempt protected writes through form, list edit, workspace,
   API, import, and background interfaces. Every direct write must fail.
10. Confirm platform `admin` without `rob_admin` cannot use admin override and
    `rob_admin` without native HR case update permission is still denied.
11. As a user with both `rob_admin` and native case update access, try direct
    snapshot/exception/gate edits. Confirm they abort. Enter a new correction
    reason and use **Re-derive ROB Requester Profile**; confirm the title and
    supervisor come only from the original requester directory profile and
    prior title, prior supervisor, actor, timestamp, and reason appear in
    audited history.
12. Repeat the controlled correction without changing the reason, with a
    whitespace-only reason, on an unrelated case in each supported subclass,
    with a caller-supplied replacement manager/title, and after changing the
    directory manager to missing, invalid, inactive, and self. Confirm stale or
    blank reasons and unrelated cases fail, supplied replacements fail, invalid
    directory outcomes remain blocked, and no lifecycle gate opens
    automatically.
13. For subject, supervisor, approver, Staffing Fulfiller, Analytics Fulfiller,
    Operations Manager, compliance viewer, ROB Admin, platform admin, and
    unrelated employee, test form, list, workspace, API, report, export,
    reference preview/click-through, Employee Center, and notification preview.
    Title/supervisor appear only in approved context; internal exception/gate/
    correction evidence is admin/compliance only; no snapshot or exception
    detail appears in a notification.
14. Confirm the before-insert rule can write protected fields and the after-
    insert rule can create `sn_hr_core_task`. Review every matching Restricted
    Caller Access request and cross-scope privilege for `sn_hr_core_case`, both
    subclasses, `sn_hr_core_task`, `sn_hr_core_service`, and `sys_user`. Approve
    only the exact demonstrated operation; never grant broad case CRUD or any
    `sys_user` create/update/delete privilege.
15. Inspect installed dictionaries on both subclasses for Requested Items,
    Position Title Snapshot, Supervisor Snapshot, all exception/gate/correction
    fields, and their audit/read-only settings. Confirm the HR Task ROB Task
    Type choice is `exception_review`.
16. After all scoped tests pass, remove only the rejected trailing snapshot
    block from each Human Resources: Core producer in a clean reviewed update
    set. Retest one producer at a time and compare complete pre/post scripts so
    every existing mapping listed in step 1 is preserved.
17. Run a normal SDK build followed by two frozen-key conflict-checking builds
    from the complete integrated source. Confirm no key drift, duplicate
    dictionary owner, unresolved field reference, or unrelated metadata.

Deployment remains blocked until all steps pass and the captured PDI evidence
receives security review. Do not add a speculative `CrossScopePrivilege` to
make a denied test pass.

### Request Access to HR Systems

- [ ] HR service configured
- [ ] Correct COE selected
- [ ] Employee Center category = Staffing
- [ ] Self-submission enforced
- [ ] Access-item control references ROB Access Item Reference
- [ ] Filter limited to HR System category
- [ ] Business Justification required
- [ ] Conditional Access End Date configured

### Request Access to HR Data and Reports

- [ ] HR service configured
- [ ] Correct COE selected
- [ ] Employee Center category = Analytics
- [ ] Self-submission enforced
- [ ] Reference-based access-item control
- [ ] Workforce Profile Charts remains under this service
- [ ] Operations Manager condition configured
- [ ] Conditional Access End Date configured

## 4. HR Case and Task Forms

HR case:

- [ ] ROB fields added to proper view
- [ ] Related Authorization visible
- [ ] Authorized Access Details visible
- [ ] Native HR Tasks visible
- [ ] Gate fields protected
- [ ] Employee view excludes internal fields

HR task:

- [ ] ROB Task Type visible
- [ ] Access Items visible
- [ ] Provisioning and Target systems visible
- [ ] Completion Evidence visible
- [ ] Waiver fields restricted
- [ ] OM view contains minimum information

## 5. Native E-Signature

Employee:

- [ ] Assigned to Subject Person
- [ ] Used only for New, Renewal, Amendment
- [ ] Completes before supervisor
- [ ] Signer identity captured
- [ ] Date/time captured

Supervisor:

- [ ] Approval assigned to supervisor
- [ ] Signature separately required
- [ ] Approval alone does not open gate
- [ ] Approval identity/date captured
- [ ] Signature identity/date captured
- [ ] Denial closes without fulfillment

Reuse path:

- [ ] Employee signature not repeated
- [ ] Original employee evidence not overwritten
- [ ] Original PDF not overwritten
- [ ] New supervisor evidence retained in native history

## 6. Document Template and PDF

- [ ] Current policy text loaded
- [ ] Employee name mapped
- [ ] Position title mapped
- [ ] Organization mapped
- [ ] Employment type mapped
- [ ] Conditional end date mapped
- [ ] Authorized access items mapped
- [ ] Business justification mapped
- [ ] Employee signer/timestamp mapped
- [ ] Supervisor approval/timestamp mapped
- [ ] Supervisor signer/timestamp mapped
- [ ] Form version mapped
- [ ] Effective and expiration dates mapped
- [ ] Authorization number mapped
- [ ] PDF attaches only to Authorization Form
- [ ] No duplicate PDF on case
- [ ] No PDF in notifications
- [ ] Direct URL access tested

## 7. Flow Designer Review

Intake flow:

- [ ] Correct trigger
- [ ] Does not run on unrelated cases
- [ ] Retry does not duplicate access details
- [ ] Stops before signature processing

Lifecycle flow:

- [ ] Correct signature/approval sequence
- [ ] Denial behavior correct
- [ ] Supersession occurs after activation
- [ ] Fulfillment gate protected

Fulfillment flow:

- [ ] Staffing grouping correct
- [ ] Analytics grouping correct
- [ ] WPC creates Analytics + OM tasks
- [ ] ARM and OAS remain distinct
- [ ] Mixed requests do not duplicate tasks
- [ ] Parent closure waits for children
- [ ] Waivers restricted

Renewal flow:

- [ ] Runs daily
- [ ] Reads configuration
- [ ] Uses configured intervals
- [ ] Prevents duplicate reminders
- [ ] Avoids lapse when replacement exists
- [ ] Does not deprovision external systems

## 8. Security Verification

Impersonate:

- [ ] Subject
- [ ] Supervisor
- [ ] Staffing Fulfiller
- [ ] Analytics Fulfiller
- [ ] Operations Manager
- [ ] Compliance Viewer
- [ ] ROB Administrator
- [ ] Unrelated Employee

For each test:

- [ ] List access
- [ ] Record access
- [ ] Field editability
- [ ] Attachment access
- [ ] Direct attachment URL
- [ ] Report access
- [ ] Employee Center behavior

## 9. Notifications

- [ ] Employee signature required
- [ ] Supervisor approval/signature required
- [ ] Supervisor denial
- [ ] Staffing assignment
- [ ] Analytics assignment
- [ ] OM assignment
- [ ] OM overdue
- [ ] Three renewal reminders
- [ ] Lapse notice

Every notification:

- [ ] Identifies required action
- [ ] Includes secure link
- [ ] Excludes PDF
- [ ] Excludes business justification
- [ ] Excludes SSN/sensitive PII
- [ ] Excludes signature content

## 10. Synchronization

After native changes:

```powershell
npm run sn:sync
git status
git diff
```

Review:

- [ ] No duplicate metadata
- [ ] No unexpected global records
- [ ] No production sys_ids hard-coded
- [ ] Fluent and XML do not independently define the same record
- [ ] Manual-only metadata documented
- [ ] Build succeeds after synchronization

## 11. Agency Environment Revalidation

- [ ] Plugin parity
- [ ] HRSD/COE configuration
- [ ] Employee Center
- [ ] Signature policy acceptance
- [ ] Document/PDF capability
- [ ] Cross-scope privileges
- [ ] Security groups
- [ ] Attachment security
- [ ] Notifications
- [ ] Retention requirements
- [ ] ATF behavior
- [ ] Regulated-environment restrictions
