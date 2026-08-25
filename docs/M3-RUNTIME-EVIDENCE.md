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

## 2026-08-23 Force Install runtime reconciliation gate

This gate used the synchronized, clean ServiceNow IDE workspace on
`feature/05-fulfillment-orchestration`. Local HEAD and upstream were both
compatibility commit `8b423fcf2f10483dee49b1fa85d4fa5267e91e27`.
The committed and IDE source contained the post-M2 `authorizationContext`
contract and no legacy snapshot references. No additional sync or source
regeneration was performed.

### Pre-install live fingerprint

Exactly one `sys_module` path contained
`AuthorizationDecisionService.js`. Record
`1a197e45de33416ea795141a77307f5d` belonged to HR Access ROB Authorization,
retained its `0.0.1` module path, was created and last updated at
`2026-08-16 12:01:57` UTC by `admin`, and had Content SHA-256
`e8d8dc49f49ef8cd02e2c9bab18cf15633192e5e9657e59c8d5bd8b304f91a80`.
All three legacy snapshot inputs were present; every required
`authorizationContext` input was absent.

### Supported Force Install result

The exact IDE command **Fluent: Force Install Fluent App in Instance** was run
once for HR Access ROB Authorization. IDE SDK 4.11.0 deployed application
version `0.0.4`, reported `Install completed successfully in 8281ms`, and
created rollback context `00ae03bac3fa8f1068a35f2b2b013117`.

Immediate read-only verification returned one matching module with the same
sys_id, path, timestamp, updater, Content hash, and legacy contract. Therefore:

**Force Install — FUNCTIONALLY FAILED.**

The supported-path classification is now:

- Local Now SDK install — failed to reconcile the module.
- IDE ordinary Install — reported success but failed to reconcile the module
  (rollback context `318f3a72c33a8f1068a35f2b2b01313c`).
- IDE Force Install — reported success but failed to reconcile the module
  (rollback context `00ae03bac3fa8f1068a35f2b2b013117`).

### Native-form diagnostic classification

Read-only inspection under the HR Access ROB Authorization application context
confirmed the native ECMAScript Module form exposes the underlying
`sys_module.content` field as disabled. Save, Replace, Replace All, Format, and
syntax-check actions are disabled, and there is no Update action. This is
classification **B — Content protected/read-only**. No attempt was made to
type, save, replace, delete, recreate, or otherwise modify the record.

No focused R3 runtime or wider M3 acceptance was executed because both the
supported Force Install and native-form editability gates failed before a
current runtime could exist. No broad privilege, generated-key edit, Reinstall,
Background Script, direct metadata script, or replacement module was used.

**M3 — BLOCKED-PLATFORM.** Fluent runtime reconciliation has exhausted the
supported installation paths. Platform owner / ServiceNow action is required,
and M4 is not ready.

## 2026-08-24 clean-PDI Fluent bootstrap and Force Install gate

To distinguish the stale-module condition on `dev285962` from application
bootstrap behavior, the current Fluent repository was cloned into a clean IDE
workspace on `dev437065`. Source Control was clean on
`feature/05-fulfillment-orchestration` at
`7e0d53bbef989417b354ab624929aec6fdb19573`.

IDE SDK 4.11.0 compiled application version `0.0.4` successfully in 11.444
seconds. The generated package included the correct application sys_id and
scope. Ordinary Install failed before creating the application with
`Unable to install application as application was null`. The one permitted
Force Install attempt failed with the identical error.

Post-attempt read-only queries found zero matching `sys_app` records, zero
matching `sys_scope` records, and zero `sys_module` paths containing
`AuthorizationDecisionService.js`. No partial ROB installation exists on
`dev437065`. Consequently, the PDI-only in-place Content diagnostic cannot be
performed on this instance because there is no logical module record to edit;
deletion, recreation, replacement-module creation, and direct metadata
creation remain prohibited.

No application record, module, role, privilege, generated key, fixture,
Business Rule, Flow, table, or production lifecycle record was created or
modified by the failed attempts. Reinstall and local SDK deployment were not
used.

**M3 — BLOCKED-PLATFORM.** Fluent application bootstrap and runtime
reconciliation have exhausted the supported IDE installation paths on the
clean PDI. M4 is not ready.

## 2026-08-24 V2 clean-PDI bootstrap and R3 production-entry hard stop

The prior clean-PDI bootstrap failure is superseded. ServiceNow IDE installed
`HR Access ROB Authorization V2` version `0.0.4` in scope
`x_2166123_rob_auth` (application sys_id
`4aba8657837a43104f5193a6feaad3c5`). The authoritative source checkpoint was
`349c542bac1e9653b886b2097b07995935ad8764`; the working tree and generated-key
diff were empty before native configuration.

Read-only inventory proved exactly four custom business tables, five scoped
functional roles, five exact M2 table Reads, one current R3 ECMAScript module,
the R4 and M4 source artifacts, and inactive M3/M4 production entry rules.
The current R3 module is `sys_module` `9c06697e84f74fb09e05847797fa793b`.
Its content uses `authorizationContext.valid`, `supervisorId`, `position`, and
`organization`; it does not use the three retired snapshot inputs.

The V2 Class C environment binding completed 3/3 with one active synthetic
Supervisor group, an approved root with two descendants, an unrelated
department, and title fallback enabled. Minimal synthetic users, Positions,
and an HR Profile were created through supported native forms. The exact
reviewed HR Core persistence bridge was created as
`sn_hr_core.RobHrCasePersistenceBridge` (`f058c4eb837ec3104f5193a6feaad3fb`),
with Caller Restriction. The single allowed V2-to-bridge Execute privilege is
`fb1908ef837ec3104f5193a6feaad34a`. Broad GlideRecord privileges remain 0.

Runtime continuation then reached a genuine architecture/security boundary:

- the installed R3 implementation is a side-effect-free CommonJS module that
  exports `evaluate`; no V2 Business Rule, Script Include, Flow, or Action
  invokes it or persists its result;
- read-only instance queries returned 0 Business Rule callers, 0 Script
  Include callers, 0 V2 Flows, and 0 V2 Actions;
- downstream lifecycle Business Rules consume
  `authorization_path`/`decision_evaluated_at` but do not produce them;
- R3 decision-output dictionaries remain system-managed/read-only; and
- the approved bridge exposes only `setRobIntakeGate` and allowlists the four
  M2 prerequisite reasons. It does not accept
  `EX_UNRESOLVED_ANNUAL_RENEWAL_RULE` or
  `EX_AMBIGUOUS_MATERIAL_CHANGE` and cannot persist the complete R3 output
  contract.

Creating a new evaluator Flow/Action/Business Rule, making the decision fields
editable, or expanding the HR Core bridge into a general decision-output
writer would change the approved architecture/security contract. None was
performed. The two M3 lifecycle entry rules and both M4 entry rules remain
inactive, so no signing, PDF finalization, activation, or fulfillment started
against synthetic decision values.

**M3 — BLOCKED-PLATFORM.** Exact failing artifact:
`AuthorizationDecisionService.js` production invocation/persistence boundary.
Exact unsupported operation: invoke the installed R3 module and atomically
persist its system-managed outputs through an existing supported V2-owned
runtime entry point. This is application-wide, not a stale-module or
dev437065-specific install defect. M4 is not ready.

## 2026-08-25 V2 R3 production adapter source correction

The application owner confirmed that the missing invocation/persistence
adapter previously belonged to the approved production architecture and
authorized its restoration. The repository now contains one shared adapter,
two inactive native-case entry Business Rules, and a narrow extension to the
existing HR Core persistence bridge.

Source evidence:

- `authorization-decision-entry.server.js` invokes the existing built
  `AuthorizationDecisionService.js`; no second decision engine exists.
- The context uses `authorizationContext.valid`, `supervisorId`, `position`,
  and `organization`; it does not read the three deprecated native-case
  snapshot inputs.
- The adapter reads the active ROB configuration, requested access,
  authoritative M2 profile context, authorization history/details, and
  duplicate open cases. It never writes HRSD identity fields.
- Unequal material context is explicitly `unknown` under DEC-MAP-01/02, and
  `annualRenewalDue` is explicitly `unknown` under DEC-MAP-03. These conditions
  therefore remain deterministic Exception blocks and are not inferred.
- `RobHrCasePersistenceBridge.setRobDecision` rejects unsupported tables,
  fields, decision values, reason codes, and malformed references. It writes
  only the complete system-managed R3 output/gate set on the supplied current
  case and performs no standalone insert/update.
- Payroll and Workforce evaluator rules are inactive before-insert rules.
  Existing lifecycle entry rules now support the corresponding after-insert
  transition and remain inactive.

Validation evidence at this source checkpoint:

- focused production-adapter/security tests: 11/11 PASS;
- committed R3 decision suite: 30/30 PASS;
- M2 focused suite: 19/19 PASS;
- Wave 2 security suite: 22/22 PASS; and
- explicit ServiceNow SDK 4.11.0 normal build: PASS.

This is not runtime evidence. The changed bridge source must first be applied
through the supported HR Core Script Include editor, the V2 source diff must
be installed through ServiceNow IDE after explicit authorization, and both
inactive evaluator rules must be reviewed before activation. M3 remains open;
M4 production runtime remains inactive.

## 2026-08-25 V2 R3 adapter install and live activation evidence

The approved source was installed through the standard ServiceNow IDE Build
and Install path. The final gated incremental install passed in 95.264 seconds
with rollback context `082405e783b607104f5193a6feaad3c7`; Reinstall was not
used.

- The existing HR Core bridge `f058c4eb837ec3104f5193a6feaad3fb` contains
  exactly one bridge class and one `setRobDecision` method. It contains no
  `opened_by`, `opened_for`, or `subject_person` reference.
- The existing V2-to-HR-Core Execute RCA
  `fb1908ef837ec3104f5193a6feaad34a` remains the only narrow bridge path.
- Payroll caller `5fc23b27a0fd4e14af71b4455896f263` and Workforce caller
  `795fabaf203843a79117c1e346a57290` are active and gated by
  `x_2166123_rob_auth_requested_itemsISNOTEMPTY`; unrelated Payroll and
  Workforce cases are excluded.
- Both callers reference `AuthorizationDecisionService.js`, contain the
  current `authorizationContext`, and contain zero legacy snapshot-input
  references.
- Authorization path, decision reason, evaluation time, exception-required,
  exception reason, and processing-blocked dictionaries remain read-only on
  both subclasses (12/12).
- Both downstream lifecycle rules remain inactive because no governed V2
  Supervisor Approval Flow is installed. Both M4 orchestration rules remain
  inactive. No signing, authorization artifact, PDF, activation, or
  fulfillment runtime was started.

The focused adapter suite is 11/11 PASS; normal/frozen SDK 4.11.0 builds PASS;
generated-key diff is empty. The invocation/persistence correction is live,
but complete M3 runtime acceptance remains open and M4 remains not ready.

## 2026-08-25 V2 evaluator module-path correction

The first valid Employee Center Payroll submission on the clean V2 PDI
resolved the governed profile context and preserved native HRSD identity, but
the active evaluator logged a `ModuleResolutionException`. The installed
module is uniquely present at
`x_2166123_rob_auth/x-2166123-hr-access-rob-authorization-v-2/0.0.4/src/server/authorization/AuthorizationDecisionService.js`,
while the adapter required the nonexistent equivalent under `dist/modules`.

The source-owned adapter now requires the exact installed `src/server` path.
The focused regression assertion was updated with it. This correction changes
no decision inputs, outputs, reason codes, bridge fields, privileges, generated
keys, or lifecycle behavior. Runtime proof remains pending a normal IDE Sync
and Build and Install of this source change; Reinstall is not authorized.

## 2026-08-25 V2 Supervisor approval Flow and Document Templates stop

The governed V2 Flow `ROB Authorization Supervisor Approval`
(`sys_hub_flow` `73105d6b833a07104f5193a6feaad363`) remains Draft/Inactive.
Supported Workflow Studio configuration completed through the approved branch:

- native `Ask For Approval` routes to the Authorization Form Supervisor;
- the Approved branch looks up the newest matching native
  `sysapproval_approver` record by current Authorization Form, V2 source table,
  Supervisor, and Approved state; and
- the Authorization Form update persists approval-complete, the exact
  `approved` outcome, native approver identity, and the approval record's
  `sys_updated_on` timestamp. It does not advance Status or start fulfillment.

The clean V2 scope contains zero `sn_doc_template` records. A supported native
PDF Template creation attempt used the verified two-page April 2026 Form 1768
artifact (28 AcroForm fields/widgets), but the native Template Table selector
did not offer the installed V2 `ROB Authorization Form`
(`x_2166123_rob_auth_rob_auth`, `sys_db_object`
`fbb6439783be83104f5193a6feaad35f`). The selector offered supported native
task/case tables only. No template record was submitted or published, and the
incomplete `Create Document Task` Flow action was cancelled.

**M3 — BLOCKED-PLATFORM.** Exact failing artifact: native Document Templates
PDF Template source-table binding for the V2 Authorization Form. Exact failing
operation: create the required current Document Template with the governed V2
Authorization Form as its source through the supported native PDF Template
form. Using a native HR Case target, hard-coded template/participant sys_ids,
or a duplicate/custom signing mechanism would change the approved architecture
and was not attempted. This boundary is proven on dev437065; broader
Australia-instance scope has not been inferred. The Flow, both lifecycle
rules, and both M4 entry rules remain inactive. M4 is not ready.
### V2 record-producer decision-entry reconciliation — 2026-08-25

- HRC0001006 was submitted from Employee Center after the corrected R3 module path was installed.
- Native HRSD identity remained correct: `opened_by`, `opened_for`, and `subject_person` all resolved to the synthetic profile employee.
- The producer persisted `x_2166123_rob_auth_requested_items`, but the insert-only evaluator did not observe the mapped value during its before-insert filter and no decision outputs were persisted.
- The existing Payroll and Workforce evaluator rules were reconciled to run on insert and update. Their existing `decision_evaluated_at` / processing-blocked guard remains authoritative and prevents duplicate evaluation.
- This is an in-place lifecycle compatibility correction; it adds no engine, table, Flow, privilege, or production-facing field.

### V2 exact module-dependency reconciliation — 2026-08-25

- The insert/update evaluator correction was installed successfully under rollback context `b96523ef837e47104f5193a6feaad3ad`.
- A normal Ready-for-Work update on HRC0001006 reached the existing Payroll evaluator and failed at its load of the committed R3 module. System log `d0b62f6f83be47104f5193a6feaad31f` records the failure at evaluator line 303 before the HR Core bridge was invoked.
- The installed R3 module and both of its dependency modules exist as single logical `sys_module` records under the V2 package `src/server/authorization` path.
- `AuthorizationDecisionService.js` used extensionless relative dependency names even though the installed runtime records have exact `.js` paths. The dependencies were reconciled in place to `./AuthorizationRepository.js` and `./ExpirationDateService.js`.
- The production adapter remains single and unchanged, no duplicate decision engine or persistence mechanism was introduced, and unknown DEC-MAP inputs remain fail-closed Exception inputs.
- Focused adapter tests: 12/12 PASS. R3 tests: 30/30 PASS. SDK 4.11.0 normal and frozen-key builds: PASS. Generated-key diff: empty.

### V2 persisted Glide-list entry reconciliation — 2026-08-25

- Live HRC0001006 proved the reconciled R3 module and its exact `.js`
  dependencies: the Payroll evaluator persisted `New`,
  `NEW_NO_PRIOR_FORM`, the evaluation timestamp, the proposed expiration
  date, and the committed employee/supervisor gate flags.
- Caller-specific RCA `c9a07f2b833287104f5193a6feaad352` allows only
  Payroll evaluator Business Rule `5fc23b27a0fd4e14af71b4455896f263`
  to execute HR Core bridge `f058c4eb837ec3104f5193a6feaad3fb`.
- Caller-specific RCA `2e217fab833287104f5193a6feaad34b` allows only
  Payroll lifecycle Business Rule `b9973651027140a68e3f2d1ed1beabfc`
  to read the Document Templates PDF Template table. No write, create, or
  delete operation was approved.
- Employee Center cases HRC0001007 and HRC0001008 preserved native HRSD
  identity and deterministically blocked as `EX_DUPLICATE_OPEN_CASE`; both
  were then cancelled through Employee Center after evidence capture.
- HRC0001009 contains the governed requested-access Glide list, but the
  `ISNOTEMPTY` encoded Business Rule condition did not match the persisted
  value on either its insert follow-up or normal Ready-state update. The two
  existing evaluator rules therefore now use their shared adapter's explicit
  empty-input guard instead of the unreliable Glide-list encoded condition.
  This preserves exclusion of unrelated HR cases and introduces no new
  Business Rule, engine, table, field, or privilege.

### V2 restricted-scope decision payload reconciliation — 2026-08-25

- The supported Force Install completed for commit `d240492`; read-only live
  inspection confirmed the corrected explicit requested-items guard in the
  single Payroll evaluator. The exact five M3 Business Rules were restored to
  Active and both M4 entry rules remain Inactive.
- Force Install invalidated the two previously approved caller records. Only
  the exact evaluator-to-HR-Core-bridge Execute record and the exact
  lifecycle-to-PDF-Template Read record were restored to Allowed.
- HRC0001009 then reached `setRobDecision`, but the HR Core bridge rejected the
  complex cross-scope JavaScript object and the evaluator's fallback
  `current.setAbortAction(true)` was separately refused by Australia's
  cross-scope API policy.
- The bounded compatibility correction passes the decision as JSON text and
  parses and validates it inside the existing HR Core-owned bridge. The bridge
  continues to accept only the two approved case classes, committed decision
  classes/reasons, valid references, and allowlisted system-managed outputs.
  The unsupported `setAbortAction` call is removed; a failed bridge remains
  fail-closed because no decision output exists to satisfy the downstream
  lifecycle rule.
- Focused adapter tests: 12/12 PASS. R3 tests: 30/30 PASS. SDK 4.11.0 normal
  and frozen-key builds: PASS. Generated-key diff: empty. Live runtime retest
  remains pending installation of this correction and the matching supported
  native-form update to the existing HR Core bridge.
