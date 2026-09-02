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

### 2026-08-29 post-install intake RCA correction

Manual Employee Center submission reopened C3 release acceptance. The exact
Workforce validation caller-to-`sn_hr_core_service` Read request
`e0156cec8307cf104f5193a6feaad35c` and exact Workforce decision caller-to-
`RobHrCasePersistenceBridge` Execute request
`c682eef883cbc3504f5193a6feaad39f` were restored from Requested to Allowed.
The exact Payroll decision Execute request
`c9a07f2b833287104f5193a6feaad352` was restored from Invalidated to Allowed.
No scope-wide caller, generic GlideRecord privilege, native-case/native-task
Write, temporary role, or unrelated pending RCA was allowed.

The corrected inventory removed the reported HR Service and bridge denials. A
fresh Analytics self-request (`HRC0001058`) then failed at the shared profile
resolver with `PROFILE_CONTEXT_POSITION_UNRESOLVED`. Exact HR Profile/Position
caller records and table Read privileges were Allowed, but the resolver still
did not return the authoritative position. C3 therefore remains reopened and
release is not ready. C2/M4 acceptance is unaffected.

### 2026-08-29 profile-context superseding evidence

`PROFILE_CONTEXT_POSITION_UNRESOLVED` was caused by incomplete synthetic test
data, not a missing platform read capability. Populating the existing synthetic
HR Profile with authoritative Position `NSF V2 Position A` and governed manager
`V2 Supervisor A` resolved Position, Organization, and Supervisor without a
resolver or HR Core bridge change. Exact Workforce validation bridge RCA
`a4037af0838fc3504f5193a6feaad330` was Allowed when that caller became
reachable; broad and unexpected RCA counts remain zero.

The post-correction intake reached the governed lifecycle and exposed a distinct
generic API restriction. Direct assignment removed the denied
`GlideRecord.setValue` call, but both service paths then stopped at denied
`GlideRecord.insert` (`HRC0001062`, `HRC0001063`). The generic Insert privilege
remains denied. No broad GlideRecord Execute, native-case/native-task Write,
temporary role, or HR Core bridge expansion was introduced.

Historical comparison shows that C1 creation relied on the same generic API
while privilege `ea217fab833287104f5193a6feaad330` was `allowed`; it was not a
separate caller-restricted mechanism. That privilege was changed to `denied` on
2026-08-27 and remains denied. Re-enabling it would violate the final security
contract, so the historical runtime outcome is not valid least-privilege proof
for the post-install intake smoke.

### 2026-08-30 after-commit lifecycle security boundary

The bounded correction changes orchestration timing only. The existing V2
Payroll/Workforce lifecycle rules execute asynchronously after the source case
operation and reread only an exact sys_id from an allowlisted native case table.
They continue to invoke the two narrow native Create Record subflows and retain
exact Authorization/Detail duplicate queries plus signature-task suppression.

No generic GlideRecord Insert, Update, or setValue privilege, broad native
case/task Write, new table, HR Core bridge method, RCA, or role was added.
Runtime least-privilege acceptance remains pending the authorized install and
TM-01/TM-02/TM-258 replay.
## 2026-08-30 native after-commit parity security evidence

The two existing lifecycle Business Rules were reconciled in place without a
new rule, table, broad privilege, or generic GlideRecord grant. Fresh Analytics
`HRC0001077` and Staffing `HRC0001078` produced no new generic RCA request. The
runtime failure occurred before deferred lifecycle execution and therefore does
not disprove the previously accepted narrow native creation subflows. Generic
Insert remains unavailable; broad native-case/native-task Write and temporary
role counts remain zero.

### 2026-08-30 package-private lifecycle entry security contract

`RobAuthorizationLifecycleEntry` is active only inside
`x_2166123_rob_auth`: `accessibleFrom=package_private`, client callable false,
and sandbox callable false. The surface accepts only a case sys_id through
`executePayroll` or `executeWorkforce`; the method fixes the native table and
performs an exact committed reread. It exposes no generic table, query, field,
script, or persistence input and returns no sensitive profile, justification,
signature, or record object. No CrossScopePrivilege, role, bridge method, or
generic GlideRecord API was added.

### 2026-08-30 fixed lifecycle Action security contract

`ROB Execute Authorization Lifecycle` is package-private and V2-owned. Its only
inputs are a mandatory 32-character committed-case sys_id and a mandatory
`payroll`/`workforce` choice. The instance Script step performs fixed dispatch
to the corresponding method on `RobAuthorizationLifecycleEntry`; it accepts no
table, query, script, class, method, record, or field map. It contains no
lifecycle or persistence logic and returns only the approved narrow outcome.
No CrossScopePrivilege, role, bridge method, or generic GlideRecord access was
added.

### 2026-09-01 post-commit event caller-control contract

The approved C3 candidate replaces the retired Flow/Action invocation path with
two registered events in `x_2166123_rob_auth`. Each Event Registry record uses
`caller_access = 2`. On this platform that value is the registered event's
**cross-scope Caller Restriction**: callers outside the owning scope are
restricted and require an approved caller-access relationship. It is not a
claim that the event or its Script Action is package-private.

The Fluent `ScriptAction` artifact has no `accessibleFrom`, package-private, or
client-callable runtime property. Runtime control is instead provided by V2
scope ownership, binding each Script Action to one restricted registered event,
fixed event parameter positions, exact 32-character sys_id validation, fixed
Payroll/Workforce dispatch, and the independent committed-state eligibility
checks in `RobAuthorizationLifecycleEntry`. Developer protection policy, if
used, controls artifact viewing/editing; it is not caller authorization.

The create event carries only the source HR Case sys_id and fixed lifecycle
path. The verify event carries only the exact Authorization Form sys_id returned
by the successful create transaction. Neither event accepts a table, query,
field, script, class, method, record object, or sensitive employee data. The
default platform event queue is used. No generic GlideRecord Insert/Update/
setValue privilege, broad native-case/native-task Write, role, bridge method, or
CrossScopePrivilege is added. Any unexpected RCA generated at deployment or
runtime is a stop condition, not an approval target.
