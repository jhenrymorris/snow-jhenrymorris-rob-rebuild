# Field Map
## HR Access ROB Authorization

Legend:

- **Native** — reuse an existing platform field when suitable.
- **Scoped extension** — application-scoped field added to a native table.
- **Custom** — field on a custom application table.
- **Derived** — calculated or copied by flow/service.
- **Manual validation** — exact native field must be confirmed on the PDI.

## 1. HR Case Field Map

| Business data | Intended location | Type | Source | Notes |
|---|---|---|---|---|
| Requester | Native HR case `opened_by` or equivalent | Native | Logged-in user | Confirm exact field |
| Subject Person | Native HR case `opened_for` or equivalent | Native | Logged-in user | Self-submission only |
| Supervisor | ROB Supervisor | Scoped extension or native | HR profile/user | Fallback correction allowed |
| Position Title | ROB Position Title | Scoped extension or native | HR profile/user | Request snapshot |
| DIR/DIV / Organization | ROB Organization | Scoped extension or native | HR profile/user | Reporting |
| Employment Type | ROB Employment Type | Scoped extension | Request | Aligned to Authorization Form |
| Access End Date | ROB Access End Date | Scoped extension | Request | Conditionally required |
| Request Category | ROB Request Category | Scoped extension | Intake item | Systems or Data/Reports |
| Requested Access Items | ROB Requested Access Items | Scoped extension | Request | Reference-based list |
| Business Justification | ROB Business Justification | Scoped extension | Request | Required |
| Operations Manager | ROB Operations Manager | Scoped extension | Request/profile | WPC only or exception |
| Existing Authorization Status | ROB Existing Authorization Status | Scoped extension | Decision service | None, Active, Expired, etc. |
| Request Path | ROB Request Path | Scoped extension | Decision service | New, Reuse, Renewal, Amendment, Exception |
| Related Authorization | Related ROB Authorization Form | Scoped extension | Flow | Exact form used |
| Requires Employee Signature | Boolean flag | Scoped extension | Decision service | System-managed |
| Requires Supervisor Signature | Boolean flag | Scoped extension | Decision service | System-managed |
| Fulfillment Gate Complete | Boolean flag | Scoped extension | Lifecycle flow | Required before task creation |
| Decision Completed | Boolean flag | Scoped extension | Intake flow | Idempotency |
| Decision Date/Time | Date/time | Scoped extension | Intake flow | Audit |
| Exception Reason | ROB Exception Reason | Scoped extension | Decision service | Human-readable outcome |

Wave 2 security adds these scoped, audited controls separately to Payroll and
Workforce Administration because the existing intake dictionaries are
subclass-owned rather than inherited from `sn_hr_core_case`:

| Business data | Intended location | Behavior |
|---|---|---|
| ROB Authorization Processing Blocked | Both supported HR case subclasses | System-managed mandatory stop for supervisor exceptions |
| Requires Employee Signature | Both supported HR case subclasses | Forced false while blocked; later lifecycle-owned |
| Requires Supervisor Signature | Both supported HR case subclasses | Forced false while blocked; later lifecycle-owned |
| Fulfillment Gate Complete | Both supported HR case subclasses | Forced false while blocked; later lifecycle-owned |
| Snapshot Correction Requested | Both supported HR case subclasses | Server action trigger; reset after processing |
| Snapshot Correction Reason | Both supported HR case subclasses | ROB Admin-entered, required and changed for each correction |
| Prior Position Title / Supervisor | Both supported HR case subclasses | Audited prior values captured by controlled correction |
| Snapshot Corrected By / At | Both supported HR case subclasses | Audited authoritative actor and date/time |

## 2. HR Task Field Map

| Business data | Intended location | Type | Notes |
|---|---|---|---|
| Parent HR case | Native parent/reference | Native | Reuse native relationship |
| Assignment Group | Native assignment group | Native | Configuration-driven |
| Assigned To | Native assigned_to | Native | OM task assigned to selected OM |
| State | Native task state | Native | Reuse native lifecycle |
| Due Date | Native due date | Native | Configurable where practical |
| Work Notes | Native work notes | Native | Operational history |
| Close Notes | Native close notes | Native | Completion evidence |
| Related Authorization | Related ROB Authorization Form | Scoped extension | Exact form |
| Task Type | ROB Task Type | Scoped extension | System-managed; Staffing, Analytics, OM, Exception |
| Access Items | ROB Access Items | Scoped extension | Reference-based list |
| Provisioning System | External Provisioning System | Scoped extension | ARM, FPPS/WTTS, eOPF, USA Staffing |
| Target System | External Target System | Scoped extension | OAS or other target |
| Completion Evidence | Multiline text | Scoped extension | Required before completion |
| Provisioning Completed | Boolean | Scoped extension | External work confirmed |
| Exception Reason | Multiline text | Scoped extension | Exception review |
| Formally Waived | Boolean | Scoped extension | Restricted |
| Waiver Reason | Multiline text | Scoped extension | Required if waived |
| Waived By | Reference `sys_user` | Scoped extension | System-managed |
| Waiver Date/Time | Date/time | Scoped extension | System-managed |

## 3. ROB Configuration

| Field | Type | Required | Default / notes |
|---|---|---:|---|
| Name | String | Yes | Display field |
| Active | Boolean | Yes | True |
| Current Accepted Form Version | String | Yes | Business-owned |
| Agency Annual Recertification Date | Date | Yes | Shared annual date |
| Mid-Cycle Grace Window Days | Integer | Yes | 90 |
| Renewal Reminder 1 Days | Integer | Yes | 90 |
| Renewal Reminder 2 Days | Integer | Yes | 60 |
| Renewal Reminder 3 Days | Integer | Yes | 30 |
| Lapse Notification Enabled | Boolean | Yes | True |
| Default Staffing Assignment Group | Reference `sys_user_group` | No | PDI-configured |
| Default Analytics Assignment Group | Reference `sys_user_group` | No | PDI-configured |
| Default OM Escalation Group | Reference `sys_user_group` | No | PDI-configured |
| Default Exception Review Group | Reference `sys_user_group` | No | PDI-configured |
| Notes | Multiline text | No | Administrative |

## 4. ROB Access Item Reference

| Field | Type | Notes |
|---|---|---|
| Name | String | Display |
| Active | Boolean | Default true |
| Access Item Code | String | Required and unique |
| Access Category | Choice | HR System, Human Capital Data, Report, Workforce Profile Chart |
| Description | Multiline text | Business description |
| Default Fulfillment Team | Choice | Staffing, Analytics, Mixed, Exception Review |
| Default Assignment Group | Reference | Optional override |
| Requires Staffing Task | Boolean | Routing |
| Requires Analytics Task | Boolean | Routing |
| Requires Operations Manager Task | Boolean | Routing |
| Requires Access End Date | Boolean | Intake validation |
| External Provisioning System | Choice | ARM, FPPS/WTTS, eOPF, USA Staffing, Other, N/A |
| External Target System | Choice | OAS, FPPS/WTTS, eOPF, USA Staffing, Other, N/A |
| Sort Order | Integer | Employee experience |
| Notes | Multiline text | Administrative |

Starter values:

| Access item | Category | Staffing | Analytics | OM | Provisioning | Target |
|---|---|---:|---:|---:|---|---|
| FPPS / WTTS | HR System | Yes | No | No | FPPS / WTTS | FPPS / WTTS |
| eOPF | HR System | Yes | No | No | eOPF | eOPF |
| USA Staffing | HR System | Yes | No | No | USA Staffing | USA Staffing |
| Human Capital Data Access | Human Capital Data | No | Yes | No | N/A | N/A |
| Report Access | Report | No | Yes | No | N/A | N/A |
| Workforce Profile Charts | Workforce Profile Chart | No | Yes | Yes | ARM | OAS |

## 5. ROB Authorization Form

| Field | Type | Source / behavior |
|---|---|---|
| Number | Auto-number | System |
| Subject Person | Reference `sys_user` | Case subject |
| Employee ID | String | Derived from user/profile |
| Supervisor | Reference `sys_user` | Case snapshot |
| DIR/DIV or Organization | String | Case snapshot |
| Position Title | String | Case snapshot |
| Employment Type | Choice | Case snapshot |
| Access End Date | Date | Case snapshot |
| Business Justification | Multiline text | Case snapshot |
| Authorization Action | Choice | New, Renewal, Amendment |
| Form Version | String | System-managed from active configuration before Employee Signature; may be blank while Draft |
| Effective Date | Date | Activation |
| Expiration Date | Date | Expiration service |
| Status | Choice | Governed lifecycle |
| Employee Signature Complete | Boolean | Native signature result |
| Employee Signer | Reference `sys_user` | Native signature result |
| Employee Signature Date/Time | Date/time | Authoritative |
| Supervisor Approval Complete | Boolean | Native approval result |
| Supervisor Approver | Reference `sys_user` | Native approval result |
| Supervisor Approval Date/Time | Date/time | Authoritative |
| Supervisor Signature Complete | Boolean | Native signature result |
| Supervisor Signer | Reference `sys_user` | Native signature result |
| Supervisor Signature Date/Time | Date/time | Authoritative |
| Source HRSD Case | Reference | Exact source |
| Supersedes Authorization Form | Self-reference | Amendment/renewal |
| Superseded By Authorization Form | Self-reference | Historical chain |
| Revocation Reason | Multiline text | Required for revocation |
| Signed PDF Generated | Boolean | System |
| Signed PDF Generated Date/Time | Date/time | System |
| Audit Notes | Multiline text | Restricted |
| Reminder 1 Sent Date/Time | Date/time | Idempotency |
| Reminder 2 Sent Date/Time | Date/time | Idempotency |
| Reminder 3 Sent Date/Time | Date/time | Idempotency |
| Lapse Notice Sent Date/Time | Date/time | Idempotency |
| Reminder Cycle Identifier | String/integer | Prevent cross-cycle duplicates |

Attachment policy:

- Attach the final PDF to this record only.
- Do not place a duplicate on the HR case.
- Apply parent-record or stronger security.

## 6. Authorized Access Detail

| Field | Type | Source / behavior |
|---|---|---|
| Number | Auto-number | System |
| Source HRSD Case | Reference | Required |
| ROB Authorization Form | Reference | Linked when known |
| Subject Person | Reference `sys_user` | Case subject |
| Access Item | Reference | ROB Access Item Reference |
| Business Justification Snapshot | Multiline text | Case snapshot |
| Authorized Start Date | Date | Activation |
| Authorized End Date | Date | Expiration/end date |
| Status | Choice | Requested through historical states |
| Staffing Required Snapshot | Boolean | Access-item snapshot |
| Analytics Required Snapshot | Boolean | Access-item snapshot |
| OM Required Snapshot | Boolean | Access-item snapshot |
| Provisioning System Snapshot | String | Access-item snapshot |
| Target System Snapshot | String | Access-item snapshot |
| Notes | Multiline text | Operational/audit |

## 7. Prohibited Fields

Do not create:

- SSN
- Full sensitive PII payload
- Separate signature date and time fields
- Custom password or signature credential fields
- Duplicate signed-PDF field on the HR case
- Hard-coded access-item choices that duplicate the reference table
