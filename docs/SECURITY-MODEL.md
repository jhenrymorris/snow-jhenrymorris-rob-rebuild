# Security Model
## HR Access ROB Authorization

## 1. Objectives

- Protect authorization records and signed PDFs.
- Prevent broad Employee Center access.
- Limit fulfillers to assigned or related work.
- Prevent Operations Managers from browsing the authorization repository.
- Protect signature and approval evidence from unauthorized edits.
- Preserve audit history.
- Keep notifications free of sensitive content.
- Use least privilege and native HRSD security where practical.

## 2. Roles

| Role | Purpose |
|---|---|
| `rob_admin` | Application configuration and administration |
| `rob_compliance_viewer` | Read current and historical authorization evidence |
| `rob_staffing_fulfiller` | Process Staffing work |
| `rob_analytics_fulfiller` | Process Analytics work |
| `rob_operations_manager` | Complete assigned OM work |
| Native HRSD users | Submit and interact with own requests |
| Platform administrator | Platform-level configuration |

## 3. Table Access

### ROB Authorization Form

| Persona | Create | Read | Update | Delete |
|---|---:|---:|---:|---:|
| ROB Admin | Yes | Yes | Yes | No by default |
| Compliance Viewer | No | Yes | No | No |
| Staffing Fulfiller | No | Context only | No signature/audit edits | No |
| Analytics Fulfiller | No | Context only | No signature/audit edits | No |
| Operations Manager | No | Minimum assigned-task context | No | No |
| Subject | No direct browse | Own approved experience only | No | No |
| Supervisor | No direct browse | Related approval/signature experience only | No | No |
| Unrelated user | No | No | No | No |
| Application processes | As required | Yes | As required | No |

### Authorized Access Detail

| Persona | Create | Read | Update | Delete |
|---|---:|---:|---:|---:|
| ROB Admin | Yes | Yes | Yes | No by default |
| Compliance Viewer | No | Yes | No | No |
| Staffing Fulfiller | No | Context only | Related operational fields only | No |
| Analytics Fulfiller | No | Context only | Related operational fields only | No |
| Operations Manager | No | Minimum assigned-task context | No | No |
| Subject | No | Own approved experience only | No | No |
| Unrelated user | No | No | No | No |
| Application processes | Yes | Yes | Yes | No |

### Configuration and Access Items

| Persona | Create | Read | Update |
|---|---:|---:|---:|
| ROB Admin | Yes | Yes | Yes |
| Authorized process | No | Yes | No |
| Fulfillers | No | Read when required | No |
| General user | No | No direct administration | No |

## 4. Protected Fields

System-managed or administrator-only:

- Form Version
- Effective Date
- Expiration Date
- Authorization Status
- Employee Signature Complete
- Employee Signer
- Employee Signature Date/Time
- Supervisor Approval Complete
- Supervisor Approver
- Supervisor Approval Date/Time
- Supervisor Signature Complete
- Supervisor Signer
- Supervisor Signature Date/Time
- Supersession references
- Signed PDF status and timestamp
- Reminder/lapse history
- Audit Notes
- Waiver fields

Fulfillers may update only operational fields related to assigned work.

## 5. Attachment Security

The signed PDF must inherit the same or stronger protection as the Authorization Form.

Required tests:

1. Record-form access
2. Attachment related-list access
3. Direct attachment URL
4. Employee Center access
5. Workspace access
6. Impersonated subject
7. Impersonated fulfiller
8. Impersonated Operations Manager
9. Unrelated user
10. Compliance viewer

The PDF must never be attached to notification emails.

## 6. Contextual Access

Contextual fulfiller access may be based on:

- User is assigned to a related open HR task.
- User belongs to the assignment group on a related task.
- User has compliance or admin role.
- User is the subject and uses an approved own-record experience.
- User is the supervisor and uses the native approval/signature experience.

Avoid broad scripted ACLs. Every scripted ACL must document:

- Requirement
- Why declarative ACLs are insufficient
- Query performed
- Performance considerations
- Test cases

## 7. Cross-Scope Security

The app may require explicit privileges to:

- Read/update scoped ROB fields on `sn_hr_core_case`
- Create/update scoped ROB fields on `sn_hr_core_task`
- Read `sys_user`
- Read `sys_user_group`
- Invoke approved HRSD actions
- Use supported approval/document APIs

Grant only the required operation and target. Revalidate all privileges in the agency development environment.

## 8. Notification Security

Permitted content:

- Authorization number
- Subject name
- Expiration date
- Required action
- Secure link

Prohibited content:

- SSN or sensitive PII
- Signed PDF
- Signature image/value
- Full business justification
- Sensitive authorization details

## 9. Auditing

Enable auditing for:

- Authorization status
- Form version
- Effective/expiration dates
- Signer identities
- Signature timestamps
- Approval identity/timestamp
- Supersession
- Revocation reason
- Signed-PDF status
- Reminder/lapse history
- Waiver fields

## 10. Impersonation Personas

- Subject
- Supervisor
- Staffing Fulfiller
- Analytics Fulfiller
- Operations Manager
- Compliance Viewer
- ROB Administrator
- Unrelated Employee

For each persona test list, record, field, attachment, direct URL, report, task, and Employee Center access.
