# V2 Application Bootstrap Recovery Assessment

Assessment date: 2026-08-27
Target: `dev437065` (ServiceNow Australia Patch 3)
Application: HR Access ROB Authorization V2
Scope: `x_2166123_rob_auth`
SDK: 4.11.0
Authoritative source checkpoint: `5d16b27f0f6d796b1f6502e5d93b3e8b655fd02d`

## Evidence

| Evidence | Result |
|---|---|
| V2 `sys_app` | Present, active, unique by scope; class `sys_app` |
| V2 `sys_scope` | Present through the `sys_scope` hierarchy with the same logical record and identity as `sys_app` |
| V2 `sys_plugins` | No row with `source=x_2166123_rob_auth`; no exact-name or application-sys-id match found |
| V2 version | `0.0.4` |
| V2 app sys_id | `4aba8657837a43104f5193a6feaad3c5` |
| V2 scope | `x_2166123_rob_auth` |
| Healthy comparison app `sys_plugins` relationship | Control app `Independent Research and Development Management` (`x_2166123_ird`, sys_id `931fb0572cfafc7928efce6c384e5480`) has active `sys_app`/`sys_scope` records, installed `sys_module` and `sys_metadata` artifacts owned by that same scope/package, and no `sys_plugins` row by source. Absence of a custom-app `sys_plugins` row is therefore not, by itself, anomalous on this PDI. |
| Adjunct version/package records | No V2 `sys_store_app` row by scope. `sys_app_version` is protected from this read-only Table API caller (403), so no conclusion is inferred from that table. The authoritative readable version remains `sys_app.version=0.0.4`. |
| Official documented bootstrap expectation | Australia IDE documentation says cloning a repository containing `now.config.json` and `package.json` adds the application to the instance/workspace. SDK documentation identifies the application by `now.config.json.scopeId`/`sys_app` and documents normal build/install. Official documentation does not state that every IDE/Fluent custom app must have a corresponding `sys_plugins` row. |
| Supported in-place repair documented? | **NO.** No Australia IDE/SDK operation documents registering, re-registering, refreshing, or reconstructing the bootstrap identity of an existing custom Fluent application while preserving the record. |
| Supported platform restore documented? | **NO for restoration of this application state.** Australia documents destructive PDI reset/wipe, not restoration of this PDI to a selected pre-defect application state. |
| Fresh-PDI rebuild supported? | **YES.** Australia IDE documentation supports cloning an IDE/SDK repository to another non-production instance; the SDK supports building/installing the repository application. |
| ServiceNow support required? | **NO for the selected clean-PDI rebuild. YES if repair of the current PDI in place is mandatory.** Application Manager directs unresolved platform issues to ServiceNow Support, but its documented Repair action applies to Store applications/plugins and is not a custom-Fluent bootstrap repair. |

## Finding

The installer error is real, but the premise that a `sys_plugins` row is a
documented mandatory record for every custom IDE/Fluent application is not
supported by the official documentation or the healthy same-instance control.
Both custom applications have `sys_app`/`sys_scope` identity without a matching
`sys_plugins.source` row. The inconsistent behavior is that the V2 normal IDE
installer requested such a row and applied zero changes.

No supported in-place ServiceNow IDE or SDK command was found that repairs this
condition. The Australia Application Manager **Repair** function is documented
for Store applications and platform plugins and performs a reinstall; it is not
documented as a repair mechanism for an existing Git/Fluent custom application.
Manual `sys_plugins` manipulation would therefore be an unsupported inference
from an internal table and remains prohibited.

## Selected recovery classification

**C - CLEAN-PDI REBUILD REQUIRED**

### Rationale

1. Normal IDE build/install already failed without applying metadata.
2. Official ServiceNow documentation provides no supported identity-preserving
   in-place bootstrap repair for this custom Fluent application.
3. The authoritative Git checkpoint contains the application identity,
   generated keys, source artifacts, tests, and documentation required to add
   the application to a clean non-production instance through the documented
   IDE Git-clone workflow.
4. A destructive PDI reset or a newly assigned PDI is supported, but it is a
   fresh-environment rebuild, not restoration of the current PDI state.

### Supported source and documentation

- [Clone a Git repository with the ServiceNow IDE](https://www.servicenow.com/docs/r/application-development/servicenow-ide-family-release/clone-git-repository-servicenow-ide.html)
- [Build and install an application in the ServiceNow IDE](https://www.servicenow.com/docs/r/application-development/servicenow-ide-family-release/build-applications-servicenow-ide.html)
- [ServiceNow SDK CLI reference](https://servicenow.github.io/sdk/cli)
- [Resetting your PDI to its initial state](https://www.servicenow.com/docs/r/application-development/building-applications/resetting_your_pdi_to_its_initial_state.html)
- [Repair an application or plugin](https://www.servicenow.com/docs/r/platform-administration/application-manager/repair-application-app-mgr.html)

### Rebuild boundary

- Clone/build from checkpoint
  `5d16b27f0f6d796b1f6502e5d93b3e8b655fd02d`.
- Retain `now.config.json` identity:
  `scope=x_2166123_rob_auth` and
  `scopeId=4aba8657837a43104f5193a6feaad3c5`.
- Retain the committed `src/fluent/generated/keys.ts` unchanged.
- Do not create a new scope or regenerate identifiers. A new scope/sys_id is not
  required when the clean target has no conflicting application identity.
- Recreate instance-owned/Class C configuration: HR Services/COE and Employee
  Center placement, synthetic users/groups and ROB configuration references,
  HR Core persistence and fulfillment bridges plus exact caller access,
  Document Templates/signing templates and mappings, the ROB Supervisor
  Approval Flow, environment assignment groups/due-date settings, and the
  synthetic test fixtures/persona bindings documented in
  `docs/MANUAL-CONFIGURATION.md`.
- Source/build evidence and the accepted C2 systems-only and idempotency evidence
  remain historical evidence. Instance-bound installation, Class C, security,
  and runtime results must be revalidated on the clean target before C2 resumes.

### Risks and required action

**Data-loss risk:** High if `dev437065` is reset/wiped. All instance-only
configuration, synthetic data, native approvals/signatures/documents, and
runtime records are lost unless exported as evidence first. Git/source is not
lost.

**Identity/scope risk:** Low when the clean target has no conflicting identity
and the repository's `scope`/`scopeId` and generated keys are used unchanged.
The official clone documentation does not expressly guarantee preservation of
physical sys_ids, so exact identity must be verified immediately after clone
and before configuration.

**Required user/platform-owner action:** Approve either a reset/wipe of the PDI
or acquisition of a clean Australia PDI, then separately authorize the
documented Git clone and normal IDE build/install. If the current PDI must be
preserved and repaired in place, submit the evidence below to ServiceNow rather
than editing metadata.

**Support evidence package for an in-place request:** instance/release/patch;
application name, scope, sys_id, and version; `now.config.json` identity;
normal IDE build/install log with `Could not find sys_plugins record for
x_2166123_rob_auth`; upgrade histories
`230596d483cf4f104f5193a6feaad301` and
`e2351a9883cf4f104f5193a6feaad3e8` showing processed/applied `0/0`; read-only
`sys_app`, `sys_scope`, and `sys_plugins` results; healthy-control comparison;
and confirmation that no Reinstall, Force Install, local SDK install, or direct
metadata repair was attempted.

**C2 impact:** No C2 status or implementation changes. Systems-only and
retry/idempotency remain accepted PASS evidence; the other eleven gates remain
NOT RUN. C2 may resume only after a separately authorized clean-environment
bootstrap and required revalidation.

## E0-R superseding installer-registration assessment

The earlier classification above correctly prohibited direct metadata repair,
but its selection of a clean-PDI rebuild is superseded by the bounded E0-R
comparison dated 2026-08-27.

The healthy Fluent control and V2 have the same relevant custom-application
structure: active `sys_app`/`sys_scope`/`sys_package` identity, installed
modules and metadata owned by that identity, and no `sys_plugins` row. The
absence of `sys_plugins` is therefore not independently anomalous.

The two failed upgrade histories instead show a server deployment request that
processed/applied `0/0` changes and looked up the V2 scope through a plugin path.
The exposed system-log source is only `com.glide.ui.ServletErrorListener`; the
internal component or registration record that selected the plugin lookup is
not exposed. Repository, scope, scopeId, package name, version, SDK pin, and
built `sys_app` identity have not drifted from the successful V2 line.

Official Australia documentation does not identify an in-place operation that
repairs or re-registers this custom Fluent installer identity. Removing or
adding an application to a workspace is documented as workspace management,
not as deployment-registration repair, so it did not meet the evidence gate for
the one allowed correction attempt.

Current recovery classification: **PLATFORM SUPPORT REQUIRED**. The exact
support evidence and ranked analysis are recorded in
`docs/V2-INSTALLER-REGISTRATION-COMPARISON.md`. Clean-PDI rebuild remains a
fallback only. No correction or install was attempted, and C2 gate status is
unchanged.
