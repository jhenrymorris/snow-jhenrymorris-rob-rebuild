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
| Supervisor | `x_2108496_hr_acces_supervisor_snapshot` on both native subclasses | Scoped extension | HR Core-owned profile enrichment | Request snapshot; client values are not authoritative |
| Position Title | `x_2108496_hr_acces_position_title` on both native subclasses | Scoped extension | HR Core-owned profile enrichment | Request snapshot; client values are not authoritative |
| DIR/DIV / Organization | `x_2108496_hr_acces_organization_snapshot` on both native subclasses | Scoped extension | HR Core-owned profile enrichment | Request snapshot; client values are not authoritative |
| Employment Type | ROB Employment Type | Scoped extension | Request | Aligned to Authorization Form |
| Access End Date | ROB Access End Date | Scoped extension | Request | Conditionally required |
| Request Category | ROB Request Category | Scoped extension | Intake item | Systems or Data/Reports |
| Requested Access Items | ROB Requested Access Items | Scoped extension | Request | Reference-based list |
| Business Justification | Native HR case `rich_description` | Native | Request | Required; Australia producer/runtime validation uses the rich-description field |
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

Australia R2 runtime proved that the scoped before-insert rule can read and
validate native HR Service data only after exact caller-access approval, but
its writes to the subclass-owned snapshot fields do not persist without an
unsupported broad API privilege. The profile snapshot rows above therefore
remain blocked runtime requirements, not completed runtime mappings.

Platform-owner Option B preserves these mappings and assigns population to an
HR Core-owned controlled mechanism. PDI classification remains Class D —
unsupported/blocking. Agency implementation must derive authoritative values
from the authenticated/request subject, persist them before downstream
authorization decisions, ignore or reject client overrides, and preserve the
audited support-correction contract without granting the HR Access scope a
general case-write capability.

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
| Operations Manager Task Due Days | Integer | Yes | R1 configuration remediation |
| Exception Task Due Days | Integer | Yes | R1 configuration remediation |
| Operations Manager Escalation Timing | Integer/duration | Yes | R1 configuration remediation |
| Renewal Notification Copy Configuration | String/reference | No | Optional; R1 configuration remediation |
| Notes | Multiline text | No | Administrative |

R1 adds the three timing dictionaries as blank-capable fields without numeric defaults because CFG-MAP-02 through CFG-MAP-04 remain business-owned decisions. They are logically required before the later runtime capability that consumes them may proceed, but are not dictionary-mandatory while no approved value exists. The source value `2027-09-30` is retained only as a clearly labeled synthetic PDI seed; CFG-MAP-01 remains unresolved and the value is not approved agency policy.

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
| Form 1768 Mapping | Choice `form_1768_mapping` | Controlled document key: FPPS/WTTS, eOPF, USA Staffing, OAS/DataMart, Human Capital Reports, or WPC |
| Notes | Multiline text | Administrative |

Starter values:

| Access item | Physical category / logical owner | Staffing | Analytics | OM | Provisioning | Target | Form mapping |
|---|---|---:|---:|---:|---|---|---|
| FPPS/WTTS | HR System / Staffing | Yes | No | No | FPPS/WTTS | FPPS/WTTS | FPPS/WTTS |
| eOPF | HR System / Staffing | Yes | No | No | eOPF | eOPF | eOPF |
| USA Staffing | HR System / Staffing | Yes | No | No | USA Staffing | USA Staffing | USA Staffing |
| OAS/DataMart | Human Capital Data / Analytics | No | Yes | No | N/A | N/A | OAS/DataMart |
| Human Capital Reports | Report / Analytics | No | Yes | No | N/A | N/A | Human Capital Reports |
| Workforce Profile Charts | Stable physical value `workforce_profile_chart`, logical label/owner Analytics | No | Yes | Yes | ARM | OAS / Workforce Profile Charts | WPC |

R1 preserves the existing access-item codes and generated record identities. `HC_DATA` and `REPORT_ACCESS` remain the stable codes for the renamed OAS/DataMart and Human Capital Reports records so installed case references are not broken.

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
| Status | Choice | Governed lifecycle per Appendix D; current source requires R1 reconciliation |
| Staffing Required Snapshot | Boolean | Access-item snapshot |
| Analytics Required Snapshot | Boolean | Access-item snapshot |
| OM Required Snapshot | Boolean | Access-item snapshot |
| Provisioning System Snapshot | String | Access-item snapshot |
| Target System Snapshot | String | Access-item snapshot |
| Notes | Multiline text | Operational/audit |

## 7. Prohibited Fields

Authorized Access Detail is created only as governed authorization scope in Wave 4. Wave 2 intake and Wave 3 decision evaluation do not create details; Reuse creates no new details.

Do not create:

- SSN
- Full sensitive PII payload
- Separate signature date and time fields
- Custom password or signature credential fields
- Duplicate signed-PDF field on the HR case
- Hard-coded access-item choices that duplicate the reference table

## 8. R3 Native HR Case Decision Outputs

The following application-owned, read-only, audited fields are defined on both
`sn_hr_core_case_payroll` and `sn_hr_core_case_workforce_admin`:

| Logical output | Physical field |
|---|---|
| Authorization Path | `x_2108496_hr_acces_authorization_path` |
| Decision Reason | `x_2108496_hr_acces_decision_reason` |
| Decision Evaluated At | `x_2108496_hr_acces_decision_evaluated_at` |
| Existing Authorization Status | `x_2108496_hr_acces_existing_authorization_status` |
| Evaluated Authorization | `x_2108496_hr_acces_evaluated_authorization` |
| Covered Access | `x_2108496_hr_acces_covered_access` |
| Uncovered Access | `x_2108496_hr_acces_uncovered_access` |
| Proposed Expiration Date | `x_2108496_hr_acces_proposed_expiration_date` |
| Requires Supervisor Approval | `x_2108496_hr_acces_requires_supervisor_approval` |
| Material Context Change | `x_2108496_hr_acces_material_context_change` |
| Renewal Reason | `x_2108496_hr_acces_renewal_reason` |
| Duplicate Case | `x_2108496_hr_acces_duplicate_case` |

Conditional R3 source validation does not activate a PDI persistence trigger.
Later controlled persistence must respect the native-table ownership boundary
and must not be treated as evidence that R2 snapshot persistence works.

## 9. R4 Electronic Form 1768 Rendering Contract

The April 2026 source PDF remains unchanged and authoritative. The electronic
artifact preserves its recognizable body while distinguishing printed fields,
electronic-only extensions, and system-managed metadata.

Electronic Access Request Type values are Federal, Contractor, IPA, and
Auditor/Investigator. IPA is an approved electronic-only extension and does not
introduce an IPA End Date rule.

Electronic System Requesting Access values are FPPS/WTTS, eOPF, USA Staffing,
OAS/DataMart, Human Capital Reports, and Workforce Profile Charts. WPC remains
distinct and uses the controlled `WPC` document mapping. ARM is provisioning
metadata and is not rendered as a requested system/access option.

The single printed Date renders Supervisor Signature Date / Final Authorization
Date. `Employee Signature Date/Time` and `Supervisor Signature Date/Time` remain
separate authoritative audit fields.

The separate **Electronic Authorization Metadata** section renders only:

| Rendered label | Approved logical/physical source |
|---|---|
| Authorization Number | Authorization Form `Number` |
| Source HRSD Case | Authorization Form `Source HRSD Case`; render referenced HR Case Number |
| Form Version | Authorization Form `Form Version` |
| Employee Signature Date/Time | Authorization Form `Employee Signature Date/Time` |
| Supervisor Signature Date/Time | Authorization Form `Supervisor Signature Date/Time` |
| Effective Date | Authorization Form `Effective Date` |
| Expiration Date | Authorization Form `Expiration Date` |
| ROB Authorization Path | Source HRSD Case `x_2108496_hr_acces_authorization_path` |
| Signed PDF Generated Date/Time | Authorization Form `Signed PDF Generated Date/Time` |

These values shall not be intermingled with printed-form fields, and no
implementation/debug metadata may be rendered. This policy resolves
`R4-POLICY-01`. R4.2.2 resolved the PDI capability gate by rendering these
values after signing from committed native Document Task evidence. Production
Authorization Form persistence/orchestration remains R4 implementation work.

Post-signature binding contract:

- Employee Signature Date/Time = committed employee Document Task `closed_at`.
- Supervisor Signature Date/Time = committed APPROVED supervisor Document Task
  `closed_at`.
- Final Authorization Date = local calendar date of Supervisor Signature
  Date/Time.
- Signed PDF Generated Date/Time = the distinct final-generation event.
- Native signing tasks/execution remain the authoritative signature evidence.

### R4.3 lifecycle evidence additions

The Authorization Form now has system-managed, audited references for the
evaluated decision, employee and supervisor Document Tasks, native Document Task
Execution, explicit supervisor outcome, Final Authorization Date, and the one
authoritative final PDF attachment. These fields record native evidence; they do
not implement a custom signature, approval, or document store. Reuse continues
to link the case to the existing Authorization Form and needs a separately
approved request-level attestation persistence/fulfillment-gate contract.

R4.3.1 configured the Class C production template `ROB Form 1768 Authorization`
(`f99c3c0ac372031068a35f2b2b013138`) with 26 body mappings and two signature
blocks. The stable access mapping values are `fpps_wtts`, `eopf`,
`usa_staffing`, `oas_datamart`, `human_capital_reports`, and `wpc`; ARM remains
provisioning metadata only. This is configuration evidence, not completed
lifecycle evidence, because the PDI cannot safely fixture-populate the three
mandatory native-case snapshots while `R2-AGENCY-01` is open.

## 10. M1 Reuse Request-Level Evidence

Both `sn_hr_core_case_payroll` and `sn_hr_core_case_workforce_admin` use the
same application-owned, read-only, audited evidence fields. Existing R3 fields
remain the authority for decision, related authorization, covered scope, and
current Supervisor.

| Logical evidence | Physical field |
|---|---|
| Reuse Attestation Status | `x_2108496_hr_acces_reuse_attestation_status` |
| Reuse Supervisor Decision | `x_2108496_hr_acces_reuse_supervisor_decision` |
| Reuse Supervisor Signer | `x_2108496_hr_acces_reuse_supervisor_signer` |
| Reuse Supervisor Signature At | `x_2108496_hr_acces_reuse_supervisor_signature_at` |
| Reuse Document Task | `x_2108496_hr_acces_reuse_document_task` |
| Reuse Document Execution | `x_2108496_hr_acces_reuse_document_execution` |
| Reuse Attestation Completed At | `x_2108496_hr_acces_reuse_attestation_completed_at` |
| Reuse Attestation Context | `x_2108496_hr_acces_reuse_attestation_context` |

The context value is a deterministic system-managed snapshot of the request,
Supervisor, selected authorization, status/version/expiration, and requested
scope used only for repeat safety and stale-attestation invalidation. It is not
an end-user field or a substitute authorization artifact. Reuse adds no field
to the Authorization Form or Authorized Access Detail.

## 11. M4 Native HR Task Physical Fields

The approved HR Task logical fields are implemented as application-owned
columns on existing `sn_hr_core_task`; no custom task table is added.

| Logical field | Physical field |
|---|---|
| Task Type | `x_2108496_hr_acces_rob_task_type` |
| Stable business key | `x_2108496_hr_acces_fulfillment_business_key` |
| Related Authorization | `x_2108496_hr_acces_related_authorization` |
| Access Items | `x_2108496_hr_acces_rob_access_items` |
| Provisioning System | `x_2108496_hr_acces_external_provisioning_system` |
| Target System | `x_2108496_hr_acces_external_target_system` |
| Fulfillment Outcome | `x_2108496_hr_acces_fulfillment_outcome` |
| Completion Evidence | `x_2108496_hr_acces_completion_evidence` |
| Provisioning Completed | `x_2108496_hr_acces_provisioning_completed` |
| Completion Date/Time | `x_2108496_hr_acces_completion_timestamp` |
| Exception Reason | `x_2108496_hr_acces_exception_reason` |
| Formally Waived | `x_2108496_hr_acces_formally_waived` |
| Waiver Reason | `x_2108496_hr_acces_waiver_reason` |
| Waived By | `x_2108496_hr_acces_waived_by` |
| Waiver Date/Time | `x_2108496_hr_acces_waiver_date_time` |

Task Type values are `staffing_fulfillment`, `analytics_fulfillment`,
`operations_manager_arm_assignment`, and `exception_review`. Assignment group,
assigned user, state, due date, work notes, close notes, and parent remain native
HR Task fields. Production form/list placement and environment groups remain
Class C configuration.
