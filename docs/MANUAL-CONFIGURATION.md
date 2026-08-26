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

## R4.3 native production configuration required

Before enabling either installed R4 lifecycle-initiation Business Rule, the
platform owner must configure and validate production Document Templates for
both native case subclasses, ordered employee and supervisor participants,
explicit APPROVED/refused semantics, post-signature rendering from committed
native evidence, and final PDF association only to the Authorization Form.
The stable runtime template name is `ROB Form 1768 Authorization`.

Current Australia evidence: one published Class C production template exists
with that exact name (`f99c3c0ac372031068a35f2b2b013138`). It has the ordered
Employee/Supervisor participant chain, 26 governed body mappings, and two
signature blocks. The template is not bound to ordinary intake. Both initiation
rules remain intentionally inactive. The blocked native-case fixture model is
superseded by M2's approved profile/form snapshot architecture. Do not use
global script, broad cross-scope privilege, ACL bypass, or a parallel store.
Do not enable the initiation rules until controlled M3 New, denial, Amendment,
Renewal, idempotency, lineage,
attachment-security, and Reuse-contract tests pass. No broad cross-scope
privilege is permitted.

## M4 Fulfillment Runtime Prerequisites

The M4 source/unit foundation is installed only with both production
fulfillment Business Rules inactive. Do not enable them until M2/M3 production
gates are proven and the platform owner has completed these Class C items:

- populate the active ROB Configuration Staffing, Analytics, OM escalation, and
  Exception Review groups;
- approve Operations Manager and Exception due/escalation day values;
- place the application-owned fulfillment/evidence fields on the native HR Task
  form for the correct personas;
- map approved native HR Task states to Completed, Waived, Not Required, and
  Failed/Exception without treating closed-only as completion;
- validate field/persona access, audited waiver handling, secure task links, and
  privacy-safe notification content;
- verify the two orchestration rules remain inactive until a separately approved
  production enablement and M3 gate handoff.

No REST Message, IntegrationHub spoke, credential, direct provisioning action,
custom task table, or renewal scheduler is part of M4.

## M2 profile/form context environment configuration

On the single active ROB Configuration record, platform owners must set:

- **Approved NSF Supervisors Group** to the active production-equivalent NSF
  Supervisors group;
- **Approved NSF Organization Root** to the approved organization hierarchy
  root used only for exceptional fallback selection;
- **Allow sys_user Title Fallback** according to approved data-governance policy.

The Australia PDI validation uses synthetic equivalents only. Do not hard-code
their sys_ids in source. After configuration, verify the Supervisor variable
shows only active configured-group members and the Organization fallback shows
only configured-root records, then tamper-test both selections because the
server resolver—not the qualifier—is authoritative.

The three legacy case snapshot fields remain installed for backward
compatibility. Do not populate, delete, expose for correction, or make them a
lifecycle prerequisite. Both R4 lifecycle and both M4 fulfillment production
entry points remain inactive until their separately authorized runtime gates.

The native catalog qualifiers execute outside the application scope. The
server-only `RobProfileAuthorizationContext` Script Include must therefore be
**Accessible from: All application scopes**, remain non-client-callable, and
remain sandbox enabled. This narrow exposure allows only the existing
server-side qualifier/resolution API; it does not authorize native-case writes
or broad GlideRecord access.

Australia M2 install note: normal installs at `0.0.1` and supported patch
upgrades to `0.0.2` and `0.0.3` completed but processed zero M2 metadata. Before
the single `0.0.3` recovery install, the local package was verified to contain
all 12 primary M2 records and the existing Authorization Form snapshot-field
updates, with the same sys_id/scope/package identity as the PDI. Rollback
context `b59d76c2c372831068a35f2b2b013106` recorded only app/table bootstrap
operations, and direct database reread found every required M2 artifact absent.
The resolver, configuration dictionaries, variables, and exact read privileges
therefore remain absent and these Class C values cannot yet be set. Do not use
`--reinstall`, stable-ID replacement, or scoped Background updates as a
workaround. The latter was tested once, created two broad API Execute
privileges, and was fully cleaned up.

Post-plugin-update revalidation on 2026-08-21 did not change this boundary.
With ServiceNow IDE `4.4.2`, one normal same-version `0.0.3` install produced
rollback context `6fb41dd2c3fa471068a35f2b2b01310f` and BAK `BAK0002276`, but
upgrade history again contained only four `sys_db_object` records and none of
the 12 M2 update names. Direct reread again returned 0/12 required M2 records.
Do not configure the three Class C values or begin M2 runtime acceptance until
the installer presents and persists the required metadata.

A definitive genuine version transition was then executed once with only the
package version advanced. Australia recognized `0.0.3` to `0.0.4` under
rollback context `0b4b911ac3fa471068a35f2b2b0131da` / BAK `BAK0002277`, but
upgrade history `3f4b9552c37e471068a35f2b2b01312c` again contained only four
`sys_db_object` records and none of the 12 M2 updates. The platform blocker is
therefore confirmed after the Patch 3 / ServiceNow IDE `4.4.2` update. Do not
attempt further installation variants or begin M2 runtime configuration.

### Final native HR Case identity ownership

The supported manual metadata recovery and Class C configuration subsequently
completed. Native HRSD is authoritative for `opened_by`, `opened_for`, and
`subject_person` on both approved record producers. HR Access must not assign,
`setValue`, or update those fields. The two M2 before-insert validation rules
require the native values to be present and equal `gs.getUserID()` before any
profile lookup; missing or mismatched identity is rejected as an invalid self-
submission.

Australia PDI evidence on 2026-08-21 verified this contract with ordinary
synthetic user Amos Linnan on Payroll `HRC0001050` and Workforce Administration
`HRC0001051`. Both committed records contained Amos in all three native fields.
Neither catalog item exposes a requested-for/delegated identity input.

The supported manual metadata workaround uses only exact table Reads plus
three record-specific Restricted Caller Access Reads: each M2 validation rule
to HR Service, and `RobProfileAuthorizationContext` to HR Profile. Do not add
generic `GlideRecord` Execute, table Write, or identity-field write access.
Both R4 and both M4 production entry points remain inactive until M3.

The native identity ownership result does not close M2. A follow-on controlled
Payroll submission reached the committed intake-gate initialization and
Australia refused `GlideRecord.setValue` on the application-owned native-case
field `x_2108496_hr_acces_exception_review_required`. The automatically
generated broad Execute privilege was removed. Both M2 validation rules are
inactive pending a supported HR Core/platform-owner execution boundary for
those application-owned same-record gate fields. Do not substitute direct
property assignment, Background Script, global Business Rule, broad API
privilege, or ACL bypass. M3 is not ready.

### HR Core persistence bridge

The preceding gate-field stop is superseded by the approved HR Core-owned
bridge. Create and maintain exactly one `RobHrCasePersistenceBridge` Script
Include in `sn_hr_core` using the reviewed source at
`manual/hr-core/RobHrCasePersistenceBridge.server.js`. It is active,
server-only, accessible from all scopes, Caller Restriction, protection None,
and exposes only `setRobIntakeGate(caseRecord, required, reason)`.

Allow one exact HR Access-to-bridge Execute privilege and the two named M2
Business Rule callers. Do not allow generic `GlideRecord` APIs or table Write.
The bridge accepts only Payroll or Workforce cases, strict booleans, and the
fixed approved reason set, and it writes only the three coupled prerequisite-
exception gate fields. Native identity and deprecated snapshot fields remain
outside the contract.

PDI evidence: bridge sys_id `a7feb29ac3b2c71068a35f2b2b01314b`; scope Execute
sys_id `848103dac336c71068a35f2b2b013166`; caller records
`7d21c35ac336c71068a35f2b2b01310b` and
`a291c7dac336c71068a35f2b2b013166`. Keep the two R4 and two M4 production
entry rules inactive until M3. The two legacy native HR-task exception entry
rules also remain inactive because their unsupported task-write path generated
broad privileges during the controlled test; no broad privilege remains.

## M3 production signing binding stop

Do not activate the two R4 lifecycle initiation Business Rules while the
published production template resolves its Supervisor participant from native
case `assigned_to`. The intended production signer is the immutable Supervisor
stored on the governed Authorization Form. Case assignment is not equivalent
authorization evidence and HR Access is not permitted to write that protected
native field.

Before M3 can resume, the platform owner must approve and prove one supported
native configuration that launches the ordered ServiceNow Sign execution from
the governed lifecycle, resolves the supervisor from the Authorization Form
snapshot, supports the frozen Reuse case-level attestation, and generates the
post-signature Form 1768 PDF on the Authorization Form. Do not use a participant
advanced script, change the template target, add a cross-scope privilege, or
broaden `RobHrCasePersistenceBridge` without separate architecture/security
approval and controlled proof.

### 2026-08-22 governed binding result

The `assigned_to` issue above is superseded for signer selection. Supervisor
participant `a235d582c3f6031068a35f2b2b01316b` now uses the supported native
advanced participant surface to return the active Supervisor stored on the
associated governed Authorization Form. Template target remains the native HR
case because the installed target selector does not expose the custom
Authorization Form table. Do not revert the participant to `assigned_to`.

Production activation remains prohibited for a different platform boundary.
At runtime, HR Access was denied read access to protected
`sn_doc_pdf_template` metadata and ServiceNow generated Restricted Caller
Access record `bcd68e66c3728b1068a35f2b2b0131ba`. It is explicitly Denied and
must not be approved without a separate platform-owner/security decision.
The runtime also generated broad GlideRecord setValue/insert/update privileges;
all were removed. Do not recreate them, do not broaden the M2 bridge, and do
not activate the R4 rules while this caller boundary remains unresolved.

### 2026-08-22 RCA recovery and native denial boundary

The prior Document Templates caller boundary was recovered with exact,
caller-specific Restricted Caller Access only. Payroll Business Rule
`2d7ed4c1f8fd48ef8fa20a7cb699f105` and Workforce Business Rule
`65fb34e074784dd1a17feff394e2ab64` each received one PDF Template Read and
one Document Task Read approval. No PDF Template create, update, or delete
access and no generic API access was retained. Restoring the lifecycle rules
to inactive invalidated those temporary caller approvals.

Controlled New authorization `ROBA0001014` proved ordered employee and
governed-supervisor signing plus post-signature PDF finalization. Production
activation remains prohibited because the installed native PDF Fill
participant UI exposes Save and Submit only. It provides no supported
persisted supervisor Deny/Refuse outcome while retaining signature semantics;
the alternative Review action is not a signing action. Do not simulate denial
by changing task state administratively. Platform-owner/ServiceNow direction
is required for a supported combined Approve + Sign / Deny contract.

### Separate native approval response boundary

Do not enable `ROB Capture Native Supervisor Approval Decision` on Australia.
Native `sysapproval_approver` provides the separate Approved/Rejected decision,
but the HR Access response Business Rule generated prohibited generic
`GlideRecord.setValue` and `GlideRecord.update` Execute privileges when it
persisted the decision to the scoped Authorization Form. Those privileges were
removed. Resume only with a platform-owner-approved Flow/HRSD execution
boundary; do not restore PDF-task denial semantics.

### ROB-owned Flow Designer orchestration stop

The approved replacement is one HR Access ROB Authorization Flow operating on
the governed Authorization Form: Ask For Approval routes to `supervisor`, the
Rejected branch denies the form and pending details, and the Approved branch
launches the governed Supervisor Document Task. Do not enable the provisional
Global response rule.

Australia Workflow Studio currently cannot create or open a Flow because its
designer components fail to load and the page has no active navigation
context. Resume only after platform repair or platform-owner delivery through
the supported application configuration channel. Do not insert Flow metadata
directly, use Background Scripts, expand the HR Core bridge, or approve generic
GlideRecord privileges.

### ROB-owned Flow configured; R3 fixture prerequisite

The previous Workflow Studio authoring stop is superseded. Published Flow
`ROB Authorization Supervisor Approval` is owned by HR Access ROB
Authorization and implements the governed Authorization Form approval branches.
Do not re-enable the provisional Global approval-response rule.

The two lifecycle entry rules remain inactive because a controlled case must
first contain a committed R3 decision. The four R3 outputs are intentionally
read-only; Australia blocks inline edit and excludes them from the supported
record-template field picker. Do not change dictionary read-only properties,
create a script fixture, or grant a temporary role to bypass this boundary.
Resume runtime validation only through the approved R3 producer or a
platform-owner-approved native fixture mechanism.

### R3 live runtime reconciliation hard stop

The fixture prerequisite above is superseded by inspection of the actual live
R3 producer artifact. ECMAScript Module
`1a197e45de33416ea795141a77307f5d` is the stable installed identity for
`src/server/authorization/AuthorizationDecisionService.js`, but its PDI
`content` still implements the retired `supervisorSnapshot`,
`positionSnapshot`, and `organizationSnapshot` contract.

Do not edit the `sys_module` record directly. Its native form exposes disabled
content with no Save/Update action; legacy Studio does not surface the source
file; current ServiceNow Studio directs Fluent source management to the
ServiceNow IDE. Reconciliation therefore requires the normal supported SDK
application installation path after the Australia installer defect is resolved
and after installation is separately authorized. Do not use Background
Scripts, direct metadata manipulation, `--reinstall`, a duplicate engine, or a
fixture/workaround. Until then, leave the production lifecycle and M4 entry
rules inactive.

## V2 R3 production-entry boundary

V2 dev437065 has the reviewed bridge installed as
`sn_hr_core.RobHrCasePersistenceBridge` (`f058c4eb837ec3104f5193a6feaad3fb`)
with Caller Restriction. V2 scope `x_2166123_rob_auth` has exactly one allowed
Script Include Execute privilege (`fb1908ef837ec3104f5193a6feaad34a`). The
application owner subsequently confirmed that the missing production
invocation/persistence adapter was approved architecture and authorized its
restoration. The source correction adds a strictly allowlisted
`setRobDecision` method to this same bridge and exactly two inactive V2
Business Rules. It does not create a general case writer or a second decision
engine.

Before installing or activating the V2 callers:

1. In Human Resources: Core, open the existing
   `RobHrCasePersistenceBridge` Script Include through its supported native
   editor and replace its Script with the reviewed complete source in
   `manual/hr-core/RobHrCasePersistenceBridge.server.js`.
2. Preserve its record identity, API name, Caller Restriction, scope, active
   state, and the single narrow V2 Execute privilege. Do not add generic
   GlideRecord privileges or native HR Case Write.
3. Build and install the reviewed V2 source through ServiceNow IDE. Do not use
   Reinstall or local SDK deployment.
4. Verify exactly one Payroll and one Workforce rule named `ROB Evaluate ...
   Authorization Decision`, both inactive, and verify the existing lifecycle
   rules also remain inactive.
5. Confirm the R3 output dictionaries are still read-only and the adapter
   contains the post-M2 authorization-context inputs with no deprecated
   snapshot references.
6. Activate the two evaluator rules only after the M2/Class C smoke gate and
   bridge tests pass. Then activate the two existing lifecycle rules for M3;
   leave both M4 entry rules inactive.

DEC-MAP-01/02 and DEC-MAP-03 are still unresolved. The adapter preserves
unequal material context as `unknown` and deliberately supplies
`annualRenewalDue = unknown`; do not alter these values in the PDI or infer a
disposition. Active/current authorization scenarios will block under the
committed Exception rules until the governing mappings are approved.

## V2 native Document Templates hard stop

Do not reactivate the Payroll or Workforce lifecycle entry Business Rules on
dev437065. The supported native PDF Template editor does not offer
`x_2166123_rob_auth_rob_auth` because the governed Authorization Form is not
Task-derived. An `sn_hr_core_case` template can create a native Document Task,
but it cannot satisfy the approved Authorization-Form source/parent and final-
PDF attachment contract.

Do not change table inheritance, use HR Case as the final document repository,
add a custom signing mechanism, directly manipulate metadata, or grant broader
cross-scope access. Production template `7119926383f247104f5193a6feaad318`
must remain Published. Accidental copy `ec9a80b783f687104f5193a6feaad34c`
is intentionally inactive/Draft and is not a deployable production feature.

### Restored employee-only native signing template

The prior hard-stop guidance is superseded for the `Attachment Not Found`
failure. Configure exactly one active Published PDF Template named
`ROB Form 1768 Employee Signature`, bound to `sn_hr_core_case`, containing the
approved Form 1768 PDF and exactly one ordered Employee/Fill participant sourced
from `subject_person`. Use the existing 26 governed body mappings and employee
signature block. Do not include a Supervisor participant in this template.

The lifecycle launches this template through
`GenerateDocumentAPI.initiateDocumentTasks`. Native approval must complete
before the existing supervisor-only template is launched. Do not restore the
direct `DocumentTaskUtils.createDocumentTask` call.

### V2 governed Supervisor approval execution settings

Configure Flow `ROB Authorization Supervisor Approval`
(`73105d6b833a07104f5193a6feaad363`) as follows:

- Run As: **System User**. The employee session correctly cannot read the
  governed Authorization Form under repository ACLs.
- Ask For Approval record: Trigger Authorization Form Record.
- Approver: Trigger Authorization Form Record > Supervisor.
- Approved branch: persist the approved outcome, approver, and decision time
  on the Authorization Form.
- Rejected branch: persist Denied and deny pending Authorized Access Details.
- Do not use the generic **Create Document Task** action. It creates only a
  task shell on this Australia PDI and does not create the required document
  execution context.

The installed same-table rule `ROB Launch Supervisor Signature After Approval`
must remain the sole post-approval signing launcher. It runs only for a fully
employee-signed, explicitly approved Authorization Form and calls
`GenerateDocumentAPI.initiateDocumentTasks` with the source HRSD Case as the
technical native parent. Keep `ROB Capture Native Supervisor Approval Decision`
inactive; do not approve generic GlideRecord privileges.

### V2 post-approval participant-order hard stop

The production-template selection above is installed, but it is not a valid
manual completion path. A fresh post-approval invocation of the published
two-participant `ROB Form 1768 Authorization` template created `DOCT0001007`
with valid native execution/PDF references and then started at its first
participant, Employee. The supported `GenerateDocumentAPI` interface does not
offer a participant, order, or resume-at-Supervisor input.

Do not sign `DOCT0001007`, reorder the production participant chain, bypass a
read-only native field, manipulate `sys_module`/Document Templates metadata,
or add broad caller access. Do not enable additional M3 or any M4 entry rules.
Continuation requires an explicit architecture decision for either:

1. a supported Supervisor-only production Form 1768 signing template; or
2. one continuous Employee/Supervisor native execution with a supported gate
   that prevents Supervisor signing until native approval is Approved.

Until that decision is approved and proven, **M3 is BLOCKED-PLATFORM and M4 is
NOT READY**.

### Conditional-participant attempt and native signing failure

The approved no-new-template experiment retained the production template's two
participants and 28 mappings. Employee is optional and uses an advanced script
that resolves the HR Case `subject_person` normally, returning blank only for
one unambiguous governed Authorization Form that is employee-signed and has an
explicit approved Supervisor decision. A fresh post-approval execution created
`DOCT0001008` for V2 Supervisor A as intended.

Do not treat that routing proof as production acceptance. Native signature
acceptance failed in `sn_doc_templates/snc_viewer.js:setSignatureField` because
the skipped participant left the expected signature-field DOM element null.
Do not delete/recreate the task, add a second template, broaden privileges, or
manipulate protected metadata. M3 remains blocked pending a supported
ServiceNow correction or an explicitly approved signing-architecture change.
