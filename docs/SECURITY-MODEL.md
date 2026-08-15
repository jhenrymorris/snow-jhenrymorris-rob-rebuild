# Security Model
## HR Access ROB Authorization

This implementation view is governed by Appendix F and the Australia PRD. Existing source/build evidence does not prove Australia runtime enforcement. R2 must revalidate ACL, attachment direct-URL protection, contextual fulfiller access, Operations Manager isolation, self-submission, and impersonation behavior on the PDI.

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
| Internal employee | No | Active catalog-reference rows and selection fields only | No |
| External user | No | No | No |

The Employee Center list collectors require ordinary internal employees to
resolve active rows on `x_2108496_hr_acces_rob_access`. The SDK-managed ACL
model therefore requires an authenticated session and `snc_internal`:

- table read only when `active=true`;
- field read for `sys_id`, `name`, `access_category`, `active`, and
  `sort_order`, also only when `active=true`.

A wildcard field-read ACL remains restricted to ROB Admin so routing,
assignment, external-system, notes, description, and access-item-code fields
are not exposed to catalog users. ROB Admin receives table read, create, and
write. No delete ACL is granted. Ordinary employees receive no create, write,
or delete ACL. The reference qualifier narrows choices but is not treated as a
security control.

These six employee-read ACLs use the same no-query script,
`gs.hasRole('snc_internal')`, in addition to the declarative
`user_is_authenticated` security attribute and `active=true` condition. A
pure `roles: [Now.ref('sys_user_role', { name: 'snc_internal' })]` definition
was tested first, but SDK 4.8.1 generated a new unresolved external-role sys_id
and new ACL-role link keys on each build, causing the mandatory frozen-key gate
to fail. The script is limited to a cached session role check, performs no
GlideRecord query, and is covered by TM-83. This exception must be re-evaluated
after an SDK upgrade.

The access-item ACL module is also imported by `src/fluent/index.now.ts`.
This explicit edge supplements normal `.now.ts` discovery and is verified
against the built package so the ten-record ACL set cannot silently fall out
of the deployable source graph.

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

## 11. Wave 2 requester-profile security controls

The Wave 2 requester-profile implementation is fail-closed for the two approved
intake paths. The parent-case before-insert rule first validates the active
native HR Service by its stable value and target case subclass, then validates every
requested item as an active ROB Access Item in an allowed category. A populated
requested-items field alone is not trusted provenance. Unrelated Payroll and
Workforce Administration services return without a requester lookup or ROB
evidence write. A claimed ROB service with missing, inactive, unknown, or
wrong-category items aborts before requester profile access.

For accepted ROB intake, `gs.getUserID()` is the only requester source. Any
nonblank supplied `opened_by`, `opened_for`, or `subject_person` that differs
from that session identity is rejected before `sys_user` profile access. The
rule then sets all three case identities from the authenticated user and
derives Position Title Snapshot and Supervisor Snapshot from that user's
directory record; incoming snapshot and exception values are overwritten.

Missing, invalid, inactive, or self-referential supervisors atomically set:

- Exception Review Required = true
- a controlled exception reason
- Authorization Processing Blocked = true
- employee-signature, supervisor-signature, and fulfillment gates = false

An after-insert rule creates at most one native `sn_hr_core_task` with ROB Task
Type `exception_review`, using the active ROB Configuration's Exception Review
group. ROB Task Type is system-managed and protected from direct writes because
it is part of the idempotency discriminator. No signature, authorization, or
fulfillment process may proceed while Authorization Processing Blocked is true.

Direct edits to requested items after creation are rejected. Direct edits to
snapshot, exception, gate, and correction-audit evidence are rejected by the
before-update integrity rule even when the field ACL is otherwise satisfied.
The ROB Admin-only **Re-derive ROB Requester Profile** action requires a
nonblank new correction reason, revalidates active ROB HR Service provenance,
and re-derives the current title and supervisor from the original requester's
directory profile. It records the prior title, prior supervisor, correction
actor, and authoritative date/time on audited fields. The action never accepts
a caller-supplied replacement supervisor or title and never opens a lifecycle
gate automatically.

Field read ACLs require the native HR case record-read ACL first. Title and
supervisor snapshots are limited to a subject whose three stored identities
remain equal, the validated supervisor, ROB Admin, or Compliance Viewer.
Internal exception, gate, and
correction evidence is limited to ROB Admin and Compliance Viewer. These
scripted read ACLs perform no database query; runtime inheritance and workspace
behavior must still pass the PDI persona/channel matrix before deployment.
