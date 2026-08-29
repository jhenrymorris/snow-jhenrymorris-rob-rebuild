# V2 Clean IDE Workspace Recovery

## E0-W scope

E0-W reconstructed the ServiceNow IDE workspace around the existing V2
application identity. It did not change application source, generated keys,
tests, package version, scope, or C2 runtime status.

Target identity:

| Attribute | Verified value |
|---|---|
| Instance | `dev437065` |
| Application | `HR Access ROB Authorization V2` |
| Application sys_id / scopeId | `4aba8657837a43104f5193a6feaad3c5` |
| Scope | `x_2166123_rob_auth` |
| Package | `x-2166123-hr-access-rob-authorization-v-2` |
| Version | `0.0.4` |
| SDK | `4.11.0` |
| Repository | `jhenrymorris/snow-jhenrymorris-rob-rebuild` |
| Branch | `codex/dev437-rebuild-identity` |
| Checkpoint | `5d16b27f0f6d796b1f6502e5d93b3e8b655fd02d` |

## Old workspace evidence

The preserved historical workspace exposed only the old application root
`b0d63cedc2d34e0ca4c05d6eb7acf61e` on
`feature/05-fulfillment-orchestration`. The V2 project was absent. The old
workspace was not reset, deleted, or modified during E0-W.

## Clean workspace reconstruction

Exactly one empty workspace named `ROB V2 C2 RECOVERY` was created through the
supported ServiceNow IDE workspace UI. Exactly one repository/application
association was performed:

1. Clone/open the authoritative rebuild repository.
2. Select `codex/dev437-rebuild-identity`.
3. When the IDE reported that `x_2166123_rob_auth` already existed, choose
   **Open Application**.
4. Do not choose Reset Application, Create App, or application scaffolding.

The resulting active project root was the existing V2 application at
`4aba8657837a43104f5193a6feaad3c5`. The stale old root was not active in the
new workspace. A supported Git pull advanced the clean checkout to the exact
frozen checkpoint. Source Control then reported staged changes `0` and changes
`0`.

## Readiness and build evidence

| Gate | Result |
|---|---|
| V2 project root established | PASS |
| Repository/branch/checkpoint | PASS |
| Scope/scopeId/package/version | PASS |
| Source drift | `0` |
| Unexpected generated-key drift | `0` |
| Generated-key blob | `fe18dc0211c8912ed5514b4a0cd11b3c526061f7` |
| IDE Build | PASS in `26722 ms` |
| Authorized install build | PASS in `25477 ms` |
| Generated `sys_app` SHA-256 | `7D47E3E3D9A32A7AA5EEA18471A07A371E0953815B17A78659EE135F0ABCF646` |

The generated `sys_app` retained sys_id
`4aba8657837a43104f5193a6feaad3c5`, scope `x_2166123_rob_auth`, and version
`0.0.4`. Identity drift was `NONE`.

## Normal Build and Install

After explicit user authorization, one normal ServiceNow IDE **Build and
Install** was run. No Force Install, Reinstall, local SDK install, version bump,
alternate target, or retry was used.

Result:

- install: **PASS** in `252620 ms`;
- rollback context: `95c367dc838b8f104f5193a6feaad3be`;
- rollback recording state: `Finished recording`;
- flow activation: `1/1 succeeded`;
- upgrade history: `0204a79483cb8f104f5193a6feaad313`;
- `sys_plugins` lookup error repeated: **NO**.

The successful IDE output did not expose numeric processed/applied counters.
Effective installed state was therefore verified directly rather than inferred
from a counter.

## Installed-state verification

Read-only SDK queries confirmed:

- the V2 `sys_app` remains a Custom Application with the same sys_id, scope,
  source, and version;
- Business Rule `ROB Reconcile Fulfillment Task Completion`, generated identity
  `31b6f6fe7198436d8d6600355948fe70`, is active on `sn_hr_core_task` in the V2
  package/scope;
- Business Rule `ROB Validate Fulfillment Task Completion`, generated identity
  `ac053c7003d6498ab045cc1cc7ffa7ec`, is active on `sn_hr_core_task` in the V2
  package/scope;
- their installed scripts match the source at checkpoint `5d16b27`;
- broad `GlideRecord.setValue`, `GlideRecord.insert`, and
  `GlideRecord.update` privileges are `0`;
- broad V2 native-case and native-task Write ACLs/privileges are `0`;
- generated-key unexpected changes remain `0`.

The post-install metadata-sync notification was not accepted over Git. IDE
Source Control remained staged `0`, changes `0`.

## C2 state preservation

No C2 fixtures or regressions were run. No M3/M4 source or architecture was
changed.

| C2 gate | Status |
|---|---|
| Systems-only | PASS |
| Retry/idempotency | PASS |
| Remaining gates | 11 NOT RUN |

## Outcome

**INSTALLER PATH RECOVERED.** The clean V2 workspace restored the supported
normal ServiceNow IDE Build and Install path. C2 is ready to resume separately
with its two accepted gates preserved.
