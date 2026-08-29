# V2 Last Successful Install to C2 Failure Delta

## Immutable checkpoints

- Last successfully installed source: `8b339391cd7b95dedf5fdbbcd238b854b9dec934`.
- C1 closeout checkpoint: `5ae9ce2` (documentation-only after the installed source).
- First failed C2 checkpoint: `5d16b27f0f6d796b1f6502e5d93b3e8b655fd02d`.
- Target: `dev437065`, Australia Patch 3, SDK `4.11.0`.

## Successful-install versus failed-install delta

| Attribute | Last successful install | First failed C2 install | Changed? | Could affect installer registration? |
|---|---|---|---|---|
| Scope | `x_2166123_rob_auth` | `x_2166123_rob_auth` | No | No |
| Scope/application sys_id | `4aba8657837a43104f5193a6feaad3c5` | `4aba8657837a43104f5193a6feaad3c5` | No | No |
| Package | `x-2166123-hr-access-rob-authorization-v-2` | Same | No | No |
| Version | `0.0.4` | `0.0.4` | No | No |
| SDK | `4.11.0` | `4.11.0` | No | No |
| `package.json` / lockfile | Baseline | Byte-identical | No | No |
| `ignoreTransformTableList` | `sys_db_object`, `sys_dictionary`, `sn_doc_pdf_template` | Adds `sys_restricted_caller_access` | Yes | No. The generated application identity is unchanged. |
| Generated keys | Blob `005e10992032fe8e86930004f2cdd6684f460c49` | Blob `fe18dc0211c8912ed5514b4a0cd11b3c526061f7` | Yes | No identity drift. Two new C2 Business Rule identities only. |
| Generated app inventory | 720 files; 678 update records | 722 files; 680 update records | Yes | Expected C2 payload delta only. |
| Generated `sys_app` XML | SHA-256 `7D47E3E3D9A32A7AA5EEA18471A07A371E0953815B17A78659EE135F0ABCF646` | Same SHA-256 | No | No |
| SDK BOM application identity | ScopeId, package and version match V2 | Same | No | No. Only nondeterministic UUID/timestamp differ. |
| IDE workspace project | Successful V2 installs necessarily operated on V2; exact historical folder id was not recorded | Current workspace exposes old root `b0d63cedc2d34e0ca4c05d6eb7acf61e` on `feature/05-fulfillment-orchestration` | Material current mismatch | Yes. Current Build and Install surface is not the V2 project. |

## Generated-key classification

The eight added lines represent two logical, approved C2 identities:

| Logical key | Table | Generated id | Classification |
|---|---|---|---|
| `reconcile-rob-fulfillment-task-completion` | `sys_script` | `31b6f6fe7198436d8d6600355948fe70` | Expected C2 Business Rule addition |
| `validate-rob-fulfillment-task-completion` | `sys_script` | `ac053c7003d6498ab045cc1cc7ffa7ec` | Expected C2 Business Rule addition |

Pre-existing generated-key mutations: `0`. Pre-existing generated-key
deletions: `0`.

## Deployment artifact comparison

Both checkpoints built successfully with SDK `4.11.0` in isolated disposable
directories. The generated `sys_app` record is byte-for-byte identical and
retains the same scope, scopeId, source, package path, version, application
type, and license fields. The failed checkpoint adds only the two expected C2
`sys_script` update records. Therefore:

`deployment artifact identity drift = NONE`

Adding `sys_restricted_caller_access` to `ignoreTransformTableList` changes no
installer identity or routing field and is classified non-causal.

## Live registration and failure evidence

- V2 remains one active Custom Application in `sys_app`, `sys_scope`, and
  `sys_package`, with sys_id `4aba8657837a43104f5193a6feaad3c5`.
- Healthy control `x_2166123_ird` remains one active Custom Application with
  sys_id `931fb0572cfafc7928efce6c384e5480`.
- Neither custom application has a `sys_plugins` record.
- Upgrade histories `230596d483cf4f104f5193a6feaad301` and
  `e2351a9883cf4f104f5193a6feaad3e8` remain `0/0`, from `n/a` to the V2 scope.
- System logs `a70596d483cf4f104f5193a6feaad303` and
  `e2351a9883cf4f104f5193a6feaad3e9` contain the plugin lookup error and expose
  only `com.glide.ui.ServletErrorListener`. Installer emitter: `UNKNOWN`.

## Ranked actual-delta hypotheses

| Rank | Hypothesis | Evidence | Result |
|---:|---|---|---|
| 1 | IDE workspace/project registration drift | Current IDE workspace exposes the old application root and old feature branch, not V2 | Concrete current mismatch; supported correction attempted |
| 2 | Server-side routing anomaly | Two zero-change requests entered a plugin lookup despite intact V2 identity | Remains possible and unresolved |
| 3 | Deployment descriptor drift | Identity-facing build artifacts are equal | Rejected |
| 4 | `now.config.json` routing change | Only transform-ignore behavior changed; generated identity is equal | Rejected |
| 5 | Missing mandatory `sys_plugins` | Healthy control also has no row | Rejected |

## One supported correction attempt

The supported IDE **Add to Workspace -> Open applications** surface was used
once to select the existing `HR Access ROB Authorization V2` application. The
IDE reported that one folder was added and then exposed the V2 application
selector. After selecting V2 and reloading, the workspace still contained only
the old `b0d63...` project root; no usable V2 project root or V2 source-control
association appeared.

No application was deleted, reset, cloned, recreated, or re-scoped. Live
`sys_app` and `sys_scope` rereads confirm that the V2 application sys_id,
scope, source, package, and version remain unchanged. Repository generated
keys were not modified.

Correction result: `FAILED TO ESTABLISH V2 PROJECT ROOT`.

Under the one-attempt rule, no further workspace experiment and no normal
install were performed.

## Outcome

**SERVER-SIDE ROUTING ANOMALY REMAINS.** A concrete current workspace mismatch
was found, but the single supported workspace correction did not establish a
usable V2 project. The installer path is not recovered.

Operational options:

1. Preserve `dev437065` and freeze C2 at `2/13 PASS`.
2. Rebuild the same V2 identity on a clean PDI as a controlled fallback.

Option 2 is not classified as required.
