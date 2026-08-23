# M3 Production Authorization Runtime Evidence

## 2026-08-21 preflight and mandatory stop

M3 began from clean commit `c325b13`. No application installation, SDK
deployment, Background Script, production lifecycle activation, M4 runtime
work, or synthetic lifecycle execution occurred during this checkpoint.

### Repository and security baseline

- Starting commit: `c325b139975dcd6c66768ed7c7ea4bcbbdc5f0d0`.
- Generated-key diff: empty.
- Custom business tables: 4.
- Exact M2 resolver table Reads: 5/5.
- Exact ROB-to-HR-Core bridge Execute privilege: 1.
- Broad `GlideRecord.setValue`, `GlideRecord.update`, and
  `GlideRecord.insert` privileges: 0.
- Broad native-case Write privileges: 0.
- Temporary roles: 0.
- Legacy exception-task rules `dbf1f9645e35471bbaa426930f97b2d3` and
  `193d566b565c433f93508c8d4de33f77`: inactive.
- M4 fulfillment rules `301db8288406426cb2ca63bc2dc0511a` and
  `57278c58e6d04ed6a7d6dfc9cd222688`: inactive.

### Installed lifecycle comparison

The two production lifecycle entry records exist and remain inactive:

| Path | Business Rule sys_id | Installed result |
|---|---|---|
| Payroll | `2d7ed4c1f8fd48ef8fa20a7cb699f105` | Inactive; installed script is the pre-M2 version |
| Workforce Administration | `65fb34e074784dd1a17feff394e2ab64` | Inactive; installed script is the pre-M2 version |

Both installed scripts still read the deprecated native-case Position,
Organization, and Supervisor snapshot fields and return immediately for Reuse.
The committed source instead resolves current profile context with
`RobProfileAuthorizationContext` and never consumes the deprecated snapshots.
Activation was therefore prohibited until reconciliation.

### Native signing-route blocker

The published production template `ROB Form 1768 Authorization`
(`f99c3c0ac372031068a35f2b2b013138`) is active and targets
`sn_hr_core_case`. Its participant configuration is:

| Participant | sys_id | User source |
|---|---|---|
| Employee | `0fd199c2c3b6031068a35f2b2b013103` | `subject_person` |
| Supervisor | `a235d582c3f6031068a35f2b2b01316b` | `assigned_to` |

The M2-approved production contract requires the intended supervisor signer to
come from the immutable `x_2108496_hr_acces_rob_auth.supervisor` snapshot.
Native case `assigned_to` is not that evidence and may represent an HR
fulfiller. HR Access may not write `assigned_to`, and the verified HR Core
bridge may not be broadened beyond its three allowlisted intake-gate fields.

The committed lifecycle initiation script also creates no native Document Task
or signing execution. The committed finalization rule consumes a qualifying
PDF attachment but does not generate the post-signature PDF. Reuse source/unit
logic defines the frozen attestation contract, but the installed production
entry script returns without creating or persisting its native supervisor
attestation execution.

Closing these gaps requires a supported native Document Templates/ServiceNow
Sign production binding that can:

1. launch from the governed lifecycle without a protected native-case write;
2. route the supervisor participant from the Authorization Form snapshot;
3. persist the frozen Reuse case-level attestation evidence; and
4. generate and associate the post-signature final PDF with the Authorization
   Form.

Using participant advanced script would introduce a new cross-scope read and
caller-access security boundary. Changing the template target from the native
case to the custom Authorization Form would change the previously validated
native association model. Neither was approved or proven during this package.
Manually assigning the case to the supervisor would falsely substitute an
operational case field for governed signer routing.

### Stop result

This is a security/architecture stop condition, not an ordinary lifecycle
test defect. The two R4 entry rules remain inactive. New, Denial, Amendment,
Renewal, Reuse, signing, PDF, immutability, and exception regression scenarios
were not executed because the production signer route was not safe to
activate. Resulting production artifacts from M3: cases 0, Authorization Forms
0, Access Details 0, Document Tasks 0, PDFs 0, fulfillment tasks 0.

**M3 — BLOCKED-PLATFORM.** A platform-owner-approved native production
Document Templates/ServiceNow Sign binding is required. M4 production runtime
is not ready and was not started.

## 2026-08-22 Governed Signer Binding and Controlled Runtime Stop

The prior `assigned_to` blocker was resolved in native configuration without
changing the M2 ownership boundary. Production template
`f99c3c0ac372031068a35f2b2b013138` retains the native-case signing source, and
Supervisor participant `a235d582c3f6031068a35f2b2b01316b` now uses a
server-side advanced participant resolver that reads the associated governed
Authorization Form `supervisor`. The resolver performs no case write and has
no `assigned_to` dependency. Direct Authorization Form targeting was not
supported by the installed template table selector.

The production source now includes ordered native-signing initiation,
post-signature final PDF generation, and the frozen Reuse supervisor
attestation. Reuse template `4b8f852ec3f24b1068a35f2b2b01318a` is published
with one governed Supervisor participant. These are source/configuration
results, not production-runtime acceptance.

### Controlled New evidence

- Native case: `HRC0001061` / `92c60266c3728b1068a35f2b2b01313d`.
- Synthetic identity: Amos Linnan
  (`56826bf03710200044e0bfc8bcbe5dca`); native self-submission validation
  correctly rejected the administrator-session mismatch.
- Decision fixture: New / `NEW_NO_PRIOR_FORM`, USA Staffing.
- Governed Authorization Form: `ROBA0001005` /
  `f8d68e66c3728b1068a35f2b2b0131b2`, state Pending Employee Signature.
- Authorized Access Detail: `bcd68e66c3728b1068a35f2b2b0131b3`, state
  Pending Authorization.
- Document Tasks: 0. Final governed PDFs: 0. Fulfillment tasks: 0.

The launch was fenced before native signing creation. System logs
`38d68e66c3728b1068a35f2b2b0131bc` and
`b4d68e66c3728b1068a35f2b2b0131bc` record that HR Access read access to
`sn_doc_pdf_template` was denied and requires Document Templates Restricted
Caller Access. Generated RCA record `bcd68e66c3728b1068a35f2b2b0131ba`
was not approved and is explicitly Denied. Because its target is protected
store metadata, it remains as denied audit evidence.

The same transaction generated prohibited broad API privileges for
`GlideRecord.setValue` (`b8d68e66c3728b1068a35f2b2b0131a9`),
`GlideRecord.insert` (`b0d68e66c3728b1068a35f2b2b0131af`), and
`GlideRecord.update` (`38d68e66c3728b1068a35f2b2b0131b5`). Each was
removed by exact sys_id. Committed reread confirmed all three absent, no broad
native-case Write privilege, and no approved new restricted caller path.

Both R4 entry rules were restored to inactive/update-only and their installed
scripts were restored to committed source. Both M4 rules remain inactive.
New did not reach signing, so Denial, Amendment, Renewal, and Reuse production
runtime were not attempted after the mandatory security stop.

**M3 — BLOCKED-PLATFORM.** Governed Supervisor binding is configured, but the
production native-signing launch requires a new protected Document Templates
caller boundary that this package explicitly may not approve. Platform-owner /
ServiceNow action is required. M4 production runtime is not ready.

## 2026-08-22 RCA Recovery, New PASS, and Denial Stop

The exact production callers were held unchanged while ServiceNow generated
caller-specific Document Templates records. Payroll PDF Template Read
`bcd68e66c3728b1068a35f2b2b0131ba` and Document Task Read
`2b44f6aac3fa8b1068a35f2b2b01316a` were allowed. Workforce equivalents were
`0d4672a2c33e8b1068a35f2b2b01316e` and
`1596f6e2c33e8b1068a35f2b2b013140`. Payroll then created `DOCT0001013`, and
Workforce created `DOCT0001014`, proving parity. Restoring the callers to their
committed inactive/update-only state invalidated all four records.

### Successful New evidence

- Case: `HRC0001083` / `858a32e2c37e8b1068a35f2b2b01312c`.
- Authorization Form: `ROBA0001014` /
  `dd8af2e2c37e8b1068a35f2b2b0131b3`.
- Employee: Amos Linnan / `56826bf03710200044e0bfc8bcbe5dca`;
  task `DOCT0001018` / `658a76e2c37e8b1068a35f2b2b013165`;
  signed `2026-08-22 14:05:57`.
- Supervisor: Robyn Christophel / `52826bf03710200044e0bfc8bcbe5dbf`;
  task `DOCT0001019` / `fbca3a26c37e8b1068a35f2b2b013100`;
  approved and signed `2026-08-22 14:06:28`.
- Final PDF: `ffea3266c37e8b1068a35f2b2b01312d`,
  `ROB-Form-1768-ROBA0001014`, `application/pdf`, 1,143,162 bytes, attached to
  the Authorization Form at `2026-08-22 14:06:31`.
- Final state: Active. Final Authorization Date and Effective Date are both
  `2026-08-22`, derived from the persisted supervisor signature timestamp.

Two ordinary defects were corrected before the passing fixture. Native PDF
Fill tasks persist approval as terminal task state and leave `body` empty, so
`Closed (3)` is the signed/approved outcome and `Closed Rejected (7)` is the
denial branch. Australia also fences `gs.nowDateTime()` in scope; finalization
now uses `new GlideDateTime().getValue()`.

### Mandatory Denial stop

Denial fixture `HRC0001084` / `e45bf6a6c37e8b1068a35f2b2b01317c`
created `ROBA0001015` / `345b7aa6c37e8b1068a35f2b2b013157`.
Amos completed `DOCT0001020`; supervisor task `DOCT0001021` routed correctly
to Robyn. The installed native Document Task PDF widget exposes only Save and
Submit for a Fill participant. The participant configuration exposes Fill or
Review; Review supplies a review outcome but not the required supervisor
signature. Therefore the intended supervisor cannot execute a persisted
refusal while preserving the frozen combined approval/signature contract.

No denial was fabricated and no administrator state edit was used. Amendment,
Renewal, and Reuse were stopped after this mandatory capability boundary.
Both R4 and both M4 entry rules are inactive. All generated scope privileges
from the controlled execution were removed; broad GlideRecord and native-case
Write privileges are zero. No SDK installation/deployment occurred.

**M3 — BLOCKED-PLATFORM.** Native PDF-template supervisor refusal requires a
platform-owner/ServiceNow-supported combined deny-or-approve-and-sign path.
M4 production runtime is not ready.

## 2026-08-22 Separate Native Decision Validation and Security Stop

Global `sysapproval_approver` proved the supported decision stage. Controlled
decision `0db9cb6ac332cb1068a35f2b2b013146` linked `HRC0001084` /
`e45bf6a6c37e8b1068a35f2b2b01317c` and `ROBA0001015` /
`345b7aa6c37e8b1068a35f2b2b013157`, routed to governed supervisor Robyn
Christophel (`52826bf03710200044e0bfc8bcbe5dbf`), and persisted Rejected with
the required comment. During the controlled transaction the form and its one
pending detail became Denied, approval identity/outcome/time persisted, final
PDF remained empty, and no new supervisor signature or fulfillment launched.

That transition is not production-safe: Australia automatically created
prohibited Global `GlideRecord.setValue` and `GlideRecord.update` Execute
privileges for the HR Access response rule. They were removed immediately by
exact sys_ids `d9aacbaec332cb1068a35f2b2b0131d5` and
`15aa4faec332cb1068a35f2b2b013137`. Unapproved abstract HR Case Read RCA
`7bd9cfeac332cb1068a35f2b2b0131d7` was also removed. The two lifecycle rules,
both M4 rules, and the provisional approval response rule are inactive.

**M3 — BLOCKED-PLATFORM.** Native approval/denial exists, but a
platform-owner-approved Flow/HRSD response boundary is required to persist it
to the governed scoped Authorization Form without generic GlideRecord
privileges. New remains previously proven PASS; Amendment, Renewal, and Reuse
were not resumed after this security stop. M4 production runtime is not ready.

Closeout source validation is green: M2 19/19, R1 9/9, Wave 2 security 22/22,
deployment configuration 16/16, R3 30/30, R4 57/57, and M4 26/26. Normal and
frozen-key SDK builds pass with the five unchanged TS11 warnings. The three
new generated keys are additions; existing-key mutations/deletions are zero.
No SDK installation or deployment was run.

## 2026-08-22 ROB-owned Flow orchestration attempt

The installed action catalog contains native `Ask For Approval`
(`bae0a1120b10030085c083eb37673a92`) and Document Templates `Create Document
Task` (`b4fd25d877441010195693df591061b4`). SDK 4.8.1 also documents
`action.core.askForApproval` as a blocking action that returns Approved or
Rejected and can update the record in the same Flow context. The requested
ROB-owned architecture is therefore well-defined without a Global response
Business Rule.

Runtime configuration could not be created. On two clean signed-in attempts,
Australia Workflow Studio loaded the Flow list but its `New` control and flow
links remained inert. The client recorded `Error loading component Object`,
failed loads for `sn-conv-fa/index` and `sn-data-mapping-connected/index`, and
`No current page in dataContext, skipping click handling`. The New control
remained `aria-expanded=false`. Direct committed reread confirmed zero
`sys_hub_flow` records in HR Access ROB Authorization before and after the
attempt.

No metadata-write substitute was used. The provisional Global approval rule,
both R4 rules, and both M4 rules remain inactive; broad GlideRecord privileges
remain zero. Denial, approved New reconfirmation, Amendment, Renewal, and Reuse
were not executed because no ROB Flow existed to govern the decision response.

Closeout source validation is green: M2 19/19, R1 9/9, Wave 2 security 22/22,
deployment configuration 16/16, R3 30/30, R4 57/57, and M4 26/26. Normal and
frozen-key SDK builds pass with the five unchanged TS11 warnings, and the
generated-key diff is empty. No SDK installation or deployment was run.

**M3 — BLOCKED-PLATFORM.** Australia Workflow Studio must be repaired or the
platform owner must supply the supported ROB-owned Flow through the normal
application configuration channel. Native approval response boundary remains
unavailable; M4 runtime is not ready.

## 2026-08-22 ROB-owned Flow configured; controlled-runtime fixture stop

The prior Workflow Studio authoring finding is superseded. Flow
`ROB Authorization Supervisor Approval`
(`9fea8036c3fecb1068a35f2b2b013184`) is published and active in
`x_2108496_hr_acces`. It operates on the governed Authorization Form, routes
native `Ask For Approval` to `rob_auth.supervisor`, denies the form and pending
details on Rejected, and creates the governed Supervisor Document Task only on
Approved. The Supervisor task uses production template
`f99c3c0ac372031068a35f2b2b013138`, participant
`a235d582c3f6031068a35f2b2b01316b`, and the source HRSD Case sys_id as its
parent. `assigned_to` is not used.

Source was aligned so the lifecycle creates only the Employee Document Task;
the Flow owns the later Supervisor approval/signature launch. Focused R4
source/unit validation passes 58/58.

Controlled case `HRC0001086` (`5df86472c3b60f1068a35f2b2b0131b2`)
was created through normal Employee Center self-submission with committed
native identity fields all equal to Amos Linnan. Before enabling the Payroll
lifecycle entry rule, the approved New fixture outputs were required on the
native case. ServiceNow correctly prevented manual list writes to the four
read-only R3 outputs. Assigning `rob_admin` did not override dictionary
read-only behavior; assignment `70c96836c3b60f1068a35f2b2b01318b` was
removed and reread absent. The supported record-template editor also excludes
all four read-only fields, so no template or case mutation was created.

Safe closeout reread: Payroll and Workforce lifecycle entry rules inactive;
M4 entry rules remain inactive; broad GlideRecord privileges zero; temporary
roles zero. The published approval Flow cannot be exercised without a
committed R3 decision, and this run did not weaken the R3 evidence boundary or
create a script-based fixture bypass.

Closeout validation passes: M2 19/19, R1 9/9, Wave 2 security 22/22,
deployment configuration 16/16, R3 30/30, R4 58/58, and M4 26/26. Normal and
frozen-key SDK builds pass with five unchanged TS11 warnings; generated-key
diff is empty. No SDK installation or deployment was run.

**M3 — BLOCKED-PLATFORM.** The ROB-owned approval architecture is configured,
but Australia exposes no supported manual surface for seeding the read-only R3
decision fixture required by this controlled runtime package. New remains
previously proven; Denial through the new Flow, Amendment, Renewal, and Reuse
were not executed. M4 production runtime is not ready.

## 2026-08-22 R3 live runtime reconciliation gate

This gate supersedes the fixture-input investigation above. No fixture,
replacement service, Flow, Action, Business Rule, table, or metadata bypass was
created.

### Installed artifact identity and provenance

| Property | Committed PDI value |
|---|---|
| Table / type | `sys_module` / ECMAScript Module |
| `sys_id` | `1a197e45de33416ea795141a77307f5d` |
| Name / path | `x_2108496_hr_acces/hr-access-rob-authorization/0.0.1/src/server/authorization/AuthorizationDecisionService.js` |
| Application / scope | HR Access ROB Authorization / `x_2108496_hr_acces` (`b0d63cedc2d34e0ca4c05d6eb7acf61e`) |
| Active | Not applicable; `sys_module` exposes no Active field |
| Source field | `content` |
| `sys_package` | HR Access ROB Authorization (`b0d63cedc2d34e0ca4c05d6eb7acf61e`) |
| `sys_update_name` | `sys_module_1a197e45de33416ea795141a77307f5d` |
| Created | `2026-08-16 12:01:57` by `admin` |
| Updated | `2026-08-16 12:01:57` by `admin` |
| Update-version provenance | No `sys_update_version` row for the exact update name |

The owning repository artifact is
`src/server/authorization/AuthorizationDecisionService.js`. Stable generated
key `src_server_authorization_AuthorizationDecisionService_js` maps to the same
`sys_module` sys_id. The normal build output also retains that identity in
`dist/app/update/sys_module_1a197e45de33416ea795141a77307f5d.xml`; no generated
key was changed.

### Installed-versus-committed contract

The live `content` and committed source are behaviorally identical outside the
R3 validation-context block. The exact drift is:

| Contract element | Installed runtime | Committed source |
|---|---:|---:|
| `request.supervisorSnapshot` | referenced | absent |
| `request.positionSnapshot` | referenced | absent |
| `request.organizationSnapshot` | referenced | absent |
| `request.authorizationContext.valid` | absent | required to equal `true` |
| `request.authorizationContext.supervisorId` | absent | required |
| `request.authorizationContext.position` | absent | required |
| `request.authorizationContext.organization` | absent | required |

Thus the installed artifact is the pre-M2 R3 contract and cannot consume the
current `RobProfileAuthorizationContext` result. It would incorrectly block the
approved current inputs and still depend on the retired snapshots.

### Supported-editor determination

Read-only native inspection found no supported in-place application-owned edit
surface for this exact Fluent source module:

- The native ECMAScript Module form shows `content` disabled and provides no
  Save or Update action.
- Legacy Studio does not surface `AuthorizationDecisionService` as an editable
  application file.
- Current ServiceNow Studio identifies the application as Fluent and states
  that its source code must be managed through the ServiceNow IDE. It does not
  provide an in-instance source editor for the module.

The remaining mechanisms are an SDK application installation or direct
`sys_module` metadata manipulation. Both are expressly prohibited by this gate;
the former is also the open Australia installer-defect boundary. No PDI record
was changed. Logical identity, package/scope ownership, installed content, and
all system-managed/read-only R3 output fields remain untouched. The New,
Denial, Amendment, Renewal, Reuse, and Exception acceptance scenarios and the
full regression/build acceptance were not run because the hard-stop condition
was met before reconciliation.

**M3 — BLOCKED-PLATFORM.** R3 live runtime reconciliation is unsupported on
this PDI. The Australia SDK installer defect is a direct M3 blocker. M4 is not
ready.
