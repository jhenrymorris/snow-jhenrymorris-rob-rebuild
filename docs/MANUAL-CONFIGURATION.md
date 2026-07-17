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

- [ ] Assign the five `x_2108496_hr_acces` application roles to the appropriate synthetic users or groups.
- [ ] Confirm `x_2108496_hr_acces.rob_admin` is reserved for ROB application administrators.
- [ ] Open the active record on `x_2108496_hr_acces_rob_config` and populate the Staffing, Analytics, Operations Manager escalation, and Exception Review group references.
- [ ] Confirm exactly one ROB Configuration record is active.
- [ ] Confirm the default configuration uses form version `2024.04`, annual recertification date `2027-09-30`, grace window 90, reminders 90/60/30, and lapse notification enabled.
- [ ] Review the six records on `x_2108496_hr_acces_rob_access` for active state, category, routing flags, external systems, and sort order.
- [ ] Confirm Workforce Profile Charts uses ARM for provisioning and OAS as the target platform.

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

## Known SDK Diagnostic — Simple Reference Qualifiers

SDK version evaluated:

- `@servicenow/sdk` 4.8.1

Affected file:

- `src/fluent/tables/rob-configuration.now.ts`

Affected fields:

- `default_staffing_assignment_group`
- `default_analytics_assignment_group`
- `default_operations_manager_escalation_group`
- `default_exception_review_group`

Configured syntax:

```typescript
referenceQual: 'active=true',
useReferenceQualifier: 'simple',
```

For all four fields, `referenceQual` remains `active=true` and `useReferenceQualifier` remains `simple`. This is the documented Fluent syntax for a plain encoded-query reference qualifier. The SDK 4.8.1 build succeeds but emits TS11 because its diagnostic incorrectly infers that any populated `referenceQual` implies an advanced qualifier. The warning is a known SDK diagnostic inconsistency; the explicit `simple` value is retained and used.

Reference qualifiers limit choices presented by a reference picker. They are not ACL security and do not grant or deny access to `sys_user_group` records.

Required validation after an authorized installation:

- [ ] Run TM-61 against all four assignment-group fields.
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
