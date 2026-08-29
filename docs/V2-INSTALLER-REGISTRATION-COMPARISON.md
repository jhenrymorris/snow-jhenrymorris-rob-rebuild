# V2 Installer Registration Comparison

Assessment date: 2026-08-27
Target: `dev437065` (Australia Patch 3)
SDK: `4.11.0`
V2 checkpoint: `5d16b27f0f6d796b1f6502e5d93b3e8b655fd02d`

This is the single E0-R installer-registration comparison. It is read-only and
does not change C2 evidence or application metadata.

## Source and repository identity

| Attribute | V2 | Last successful V2 installation line | Material difference? |
|---|---|---|---|
| Branch | `codex/dev437-rebuild-identity` | Same rebuild line | No |
| Repository | `jhenrymorris/snow-jhenrymorris-rob-rebuild` (`rebuild`) | Same authoritative rebuild repository | No |
| Scope | `x_2166123_rob_auth` | `x_2166123_rob_auth` | No |
| Scope ID | `4aba8657837a43104f5193a6feaad3c5` | `4aba8657837a43104f5193a6feaad3c5` | No |
| Application name | HR Access ROB Authorization V2 | Same | No |
| Package name | `x-2166123-hr-access-rob-authorization-v-2` | Same | No |
| Version | `0.0.4` | `0.0.4` | No |
| SDK | `4.11.0` pinned in package and lock file | `4.11.0` | No |
| Generated identities | Committed V2 key registry; current SHA-256 `67DA9426124699DD1177A940019CE20F635ED004A4BCB07249B014F7C6BD7CE8` | Same registry lineage; C2 contains only approved new Fluent identities | No registration difference |
| Post-C1 config change | `sys_restricted_caller_access` added to `ignoreTransformTableList` | Not present at C1 closeout | No; transform exclusion only, not application identity |

The built `sys_app` record also carries the expected sys_id, scope, source,
name, package path, and version. No package descriptor examined identifies V2
as a platform plugin.

## Instance comparison

| Attribute | V2 | Healthy control | Material difference? |
|---|---|---|---|
| Application | HR Access ROB Authorization V2 | Independent Research and Development Management | Identity only |
| Scope | `x_2166123_rob_auth` | `x_2166123_ird` | Identity only |
| Application sys_id | `4aba8657837a43104f5193a6feaad3c5` | `931fb0572cfafc7928efce6c384e5480` | Identity only |
| `sys_app` class | Custom Application (`sys_app`) | Custom Application (`sys_app`) | No |
| `sys_app` active | true | true | No |
| `sys_app.source` | Same as scope | Same as scope | No |
| `sys_package` resolution | Same logical record as `sys_app`; active, version `0.0.4` | Same logical record as `sys_app`; active, version `0.0.1` | No structural difference |
| `sys_plugins` by source | 0 | 0 | No |
| Installed `sys_module` ownership | package and scope both resolve to V2 sys_id | package and scope both resolve to control sys_id | No |
| Installed `sys_metadata` ownership | package and scope both resolve to V2 sys_id | package and scope both resolve to control sys_id | No |
| Store application record | None found in E0 | None found in E0 | No |
| IDE/source-control marker | No documented, readable marker established beyond the valid application/package/module ownership above | Same | No demonstrated difference |

The healthy control proves that absence of a `sys_plugins` row is normal for a
custom Fluent application on this instance. It cannot be treated as the root
cause without additional platform evidence.

## Install failure forensics

Observed chain:

```text
ServiceNow IDE Build and Install
  -> built V2 package with sys_app identity 4aba8657837a43104f5193a6feaad3c5
  -> server deployment/upgrade request
  -> sys_upgrade_history 230596d483cf4f104f5193a6feaad301
     or e2351a9883cf4f104f5193a6feaad3e8
  -> from_version = n/a; to_version = x_2166123_rob_auth
  -> changes_processed/applied = 0/0
  -> com.glide.ui.ServletErrorListener records
     "Could not find sys_plugins record for x_2166123_rob_auth: no thrown error"
```

`com.glide.ui.ServletErrorListener` is the exposed logging component, not proof
of the internal component that selected a plugin lookup. The first underlying
installer class and the lookup-producing registration record are not exposed
by the available upgrade history or system log. Therefore:

- installer emitting component: **UNKNOWN**;
- failure layer: server-side IDE deployment/upgrade routing;
- exact internal registration defect: not self-service observable.

## Ranked root-cause hypotheses

| Rank | Hypothesis | Evidence for | Evidence against | Supported correction available? |
|---:|---|---|---|---|
| 1 | Server-side installer registration/routing defect causes this custom application deployment to enter a plugin lookup path | Two normal IDE requests create zero-change upgrade histories and request `sys_plugins` by scope; local package and live custom-app identity are valid; healthy custom control needs no plugin row | Internal routing class/registration record is not exposed | No documented self-service repair |
| 2 | Stale internal application/source mapping associated with V2 | V2 previously installed normally and now the same identity is routed differently | No readable marker differs from the healthy control; exact mapping is not exposed | No documented identity-preserving refresh |
| 3 | Stale IDE workspace registration | Workspace state can be user-specific and applications can be removed/re-added | Same V2 workspace/install path previously worked; no evidence ties workspace membership to the server plugin lookup | Add/remove application is supported workspace management, but not documented as installer-registration repair; attempt not justified |
| 4 | Malformed SDK deployment descriptor or project identity drift | Failure starts after later C2 source work | Scope, scopeId, package name, version, SDK pin, built `sys_app`, and repository identity are unchanged from the successful line | No corrective identity change indicated |
| 5 | A mandatory V2 `sys_plugins` record is missing | Error text names that table | Healthy Fluent control also has no row; official Australia IDE/SDK documentation does not require one for every custom app | No; creating one is prohibited and unsupported |

## Supported-correction gate

Official Australia documentation exposes normal Build and Install, Add
Application to Workspace, clone/open, sync, Force Install, and Reinstall. It
does not document a custom-Fluent operation to repair, refresh, or re-register
an existing application's server-side installer identity while preserving its
scope and generated identities. Workspace add/remove is documented only as
workspace organization, not as a deployment-registration repair.

No correction satisfies the E0-R evidence gate. Accordingly:

- supported correction identified: **NO**;
- supported correction attempts: **0**;
- normal install attempts: **0**.

Official sources used in the single narrow research pass:

- [ServiceNow IDE commands](https://www.servicenow.com/docs/r/application-development/servicenow-ide-family-release/servicenow-ide-commands.html)
- [Create a workspace in the ServiceNow IDE](https://www.servicenow.com/docs/r/application-development/servicenow-ide-family-release/create-workspace-servicenow-ide.html)
- [Clone a Git repository with the ServiceNow IDE](https://www.servicenow.com/docs/r/application-development/servicenow-ide-family-release/clone-git-repository-servicenow-ide.html)
- [Integrate source control with the ServiceNow IDE](https://www.servicenow.com/docs/r/application-development/servicenow-ide-family-release/integrating-source-control-servicenow-ide.html)

## ServiceNow support evidence package

- Instance/release: `dev437065`, Australia Patch 3.
- IDE/SDK: ServiceNow IDE on the target, SDK `4.11.0`.
- Application: HR Access ROB Authorization V2; sys_id/scopeId
  `4aba8657837a43104f5193a6feaad3c5`; scope `x_2166123_rob_auth`;
  version `0.0.4`.
- Repository checkpoint: `5d16b27f0f6d796b1f6502e5d93b3e8b655fd02d`.
- Last successful line: same scope, scopeId, package name, version, SDK, and
  repository identity; C1 completed on commit `5ae9ce2` before C2 changes.
- Failure: `Could not find sys_plugins record for x_2166123_rob_auth` at
  2026-08-27 21:50:22 and 21:51:07 UTC instance values.
- Upgrade histories: `230596d483cf4f104f5193a6feaad301` and
  `e2351a9883cf4f104f5193a6feaad3e8`, both `0/0`, from `n/a` to the scope
  string.
- Healthy control: `x_2166123_ird`, sys_id
  `931fb0572cfafc7928efce6c384e5480`, structurally equivalent custom-app
  ownership and also no `sys_plugins` row.
- No direct metadata repair, sys_plugins insertion, Reinstall, Force Install,
  local SDK install, application recreation, scope change, or key edit was
  attempted.

## Process metrics

| Metric | Result |
|---|---:|
| Broad documentation searches | 1 narrow official-ServiceNow pass |
| Metadata comparison passes | 1 |
| Root-cause hypotheses investigated | 5 |
| Supported correction attempts | 0 |
| Install attempts | 0 |
| C2 runtime fixtures | 0 |
| Full regression runs | 0 |
| M4 source files modified | 0 |
| Architecture changes | 0 |

## Outcome

**PLATFORM SUPPORT REQUIRED.** The evidence narrows the failure to a
server-side IDE deployment registration/routing inconsistency, but no supported
in-place self-service correction is documented or conclusively indicated. A
clean-PDI rebuild remains a fallback only and is not selected by E0-R.

## E0-D superseding delta evidence

The exact successful source `8b339391` and failed checkpoint `5d16b27` both
built successfully with SDK `4.11.0`. Their generated `sys_app` XML is
byte-for-byte identical (SHA-256
`7D47E3E3D9A32A7AA5EEA18471A07A371E0953815B17A78659EE135F0ABCF646`).
The SDK BOM retains the same package, scopeId, and version; only its generated
UUID/timestamp differ. The failed package adds exactly two expected C2
`sys_script` records. Deployment artifact identity drift is therefore `NONE`.

Current IDE inspection found a concrete workspace mismatch: the only project
root is the old application `b0d63cedc2d34e0ca4c05d6eb7acf61e`, and Source
Control reports `feature/05-fulfillment-orchestration`. The V2 application and
authoritative rebuild branch are absent from the visible workspace.

One supported **Add to Workspace -> Open applications** correction selected
the existing V2 application. Although the IDE reported one folder added, a V2
project root did not appear after V2 selection and reload. The old root
remained the only workspace project. Application identity rereads remained
unchanged, and no install was attempted.

E0-D outcome: **SERVER-SIDE ROUTING ANOMALY REMAINS**. The workspace mismatch
is real, but the single supported correction did not recover the V2 project or
installer path. No second correction, clone, reset, Force Install, Reinstall,
local install, or metadata repair was attempted.

## E0-W superseding clean-workspace evidence

E0-W preserved the stale workspace as evidence and created exactly one clean
workspace, `ROB V2 C2 RECOVERY`. The authoritative rebuild repository and
branch established the existing V2 application root
`4aba8657837a43104f5193a6feaad3c5` without resetting or recreating the app.
The workspace reached checkpoint `5d16b27`, remained source-clean, and retained
the expected key blob and generated `sys_app` hash.

One IDE Build passed. After explicit authorization, one normal Build and
Install also passed in `252620 ms`, with rollback context
`95c367dc838b8f104f5193a6feaad3be` and Flow activation `1/1`. The prior
`sys_plugins` lookup error did not recur. Live V2 identity, the two C2 task
lifecycle Business Rules, generated keys, and zero broad write privileges were
verified read-only.

E0-W outcome: **INSTALLER PATH RECOVERED**. This supersedes the unresolved
deployment-routing outcome for the clean-workspace path; it does not alter the
historical E0/E0-R/E0-D evidence or any C2 runtime gate.
