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
rule then sets all three case identities from the authenticated user and calls
the deterministic profile-context resolver. Incoming legacy case snapshot and
exception values never become authoritative.

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
legacy snapshot, exception, gate, and correction-audit evidence are rejected by
the before-update integrity rule even when a field ACL is otherwise satisfied.
The former **Re-derive ROB Requester Profile** action is inactive; active
processing does not correct or repopulate the legacy case snapshot fields.

Field read ACLs require the native HR case record-read ACL first. Legacy title
and supervisor fields remain limited to a subject whose three stored identities
remain equal, the validated supervisor, ROB Admin, or Compliance Viewer.
Internal exception, gate, and
correction evidence is limited to ROB Admin and Compliance Viewer. These
scripted read ACLs perform no database query; runtime inheritance and workspace
behavior must still pass the PDI persona/channel matrix before deployment.

## 12. M1 Reuse attestation security contract

Reuse evidence is system-managed, audited case data. The intended current
Supervisor is the only permitted native approval/signature participant.
Employee, fulfiller, unrelated-user, and direct-field edits cannot become
authoritative approval evidence. The native Document Task/execution and
committed signer/timestamp remain the signature authority; the case references
that evidence and records the explicit request outcome.

APPROVED requires both the intended Supervisor and completed attestation.
DENIED/REFUSED affects only the current case and cannot revoke, supersede, or
alter the reused authorization or its details/PDF. A deterministic context key
invalidates approval after a Supervisor, scope, decision, or authorization
context change. No broad cross-scope privilege, temporary role, snapshot
bypass, custom approval/signature table, or new business table is introduced.

## 13. M4 Fulfillment Security Boundary

M4 adds only application-owned fields to native `sn_hr_core_task`. Task type,
business key, routing references, system/target metadata, completion timestamp,
and waiver actor/time are system-managed. Native HR Task record security remains
the outer boundary; final Wave 7 persona hardening is not claimed here.

The deterministic source accepts no credentials and calls no external system.
Fixture tests emit no real notifications. Overdue-OM output contains only task,
parent, due date, and a secure record path; it excludes signed PDFs, Business
Justification, signatures, and sensitive PII. Broad cross-scope privileges,
temporary roles, direct integrations, and production task creation remain zero.

## 14. M2 profile/form context security contract

Position and Organization are never accepted as authoritative employee-entered
text. Supervisor and Organization fallback references are constrained in the
UI and revalidated on the server. The authoritative manager default must be
active. A requester-selected Supervisor correction must be active and a current
member of the configured approved-supervisors group; Organization fallback is
accepted only when automatic sources are absent and the record belongs to the
configured approved hierarchy. Self-submission remains mandatory.

The resolver receives exact Read privileges for HR Profile, HR Position,
Department, User Group, and Group Membership. It receives no Create, Update,
Delete, generic GlideRecord Execute, case-write, or attachment privilege.
Authorization Form context fields are read-only and audited. Legacy case fields
remain protected but are inactive compatibility metadata; the correction UI
action is disabled. No temporary role, broad privilege, snapshot bypass, or
new business table is part of this architecture.

## 15. C1 final runtime security evidence

C1 retained exactly four custom business tables and added no approval,
signature, audit, task, or attachment table. Broad GlideRecord Execute,
broad native-case Write, broad native-task Write, and temporary elevated roles
remain zero. The HR Core bridge uses Caller Restriction; only the exact V2
lifecycle and signature-evidence Business Rule callers are Allowed to execute
the allowlisted bridge. Direct-URL final Authorization PDF access was denied to
the unrelated synthetic employee and remained available to the authorized
compliance/admin persona. M4 production task generation remained zero.
# C2 blocker security disposition — 2026-08-27

The C2 stop introduced no security expansion: broad GlideRecord API Execute,
broad native HR Case Write, broad native HR Task Write, temporary elevated
roles, custom fulfillment tables, and external provisioning integrations
remain zero. No manual `sys_plugins` bootstrap or direct metadata repair was
performed. Persona isolation gates remain NOT RUN rather than inferred from
source evidence.

## 16. C3 governed-record release controls

The C3 candidate adds explicit record and wildcard-field read ACLs for ROB
Authorization Form and Authorized Access Detail plus administrator/configuration
ACLs. Authorization repository read is limited to ROB Admin, Compliance Viewer,
or the record subject. Supervisors continue to use native approval/signature
tasks rather than repository browse access. Operations Managers remain native
task-only and receive no Authorization or Detail ACL.

Authorized Access Detail contextual read is limited to an assigned user or
assignment-group member on an active, exact related Staffing or Analytics task,
with the matching Authorization and Access Item. The script is intentionally
query-based because declarative roles alone cannot express record/task context;
it narrows first by the indexed related Authorization and required Access Item.
No fulfiller Detail write is granted; fulfillment evidence stays on the native
HR Task and lifecycle activation remains system-managed.

No delete ACL, broad native-table Write, generic GlideRecord Execute privilege,
unexpected RCA, custom audit table, or attachment table is introduced. Final
acceptance requires the eight-persona matrix and direct attachment URL tests on
the installed PDI; source/build evidence alone is not a runtime PASS.

### C3 final security acceptance

Installed-PDI testing completed the eight-persona matrix with synthetic users. Employees can access their governed records but not another employee's Authorization, Detail, final PDF, or direct attachment URL. Staffing and Analytics fulfillers receive only exact task-context Detail access and cannot modify approval or signature evidence. Operations Managers receive required WPC/ARM task context without repository browse access. Compliance access is read-only.

Notification previews contained no signed PDF, signature value, business justification, SSN, or unnecessary sensitive PII. Operational reports and the owner-restricted dashboard retain row/field ACL enforcement. Temporary UAT roles, broad GlideRecord/native-case/native-task privileges, and unexpected RCA are zero. The exact V2-to-`sn_hr_core_task` Read path remains the approved narrow contextual-task dependency.
