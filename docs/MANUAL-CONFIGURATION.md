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
