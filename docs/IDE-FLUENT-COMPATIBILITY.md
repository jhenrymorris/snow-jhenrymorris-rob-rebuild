# IDE Fluent Compatibility Reconciliation

## Scope

This is a source-synchronization compatibility control for the ServiceNow IDE
Fluent compiler. It does not change application runtime behavior. The cloned
Fluent project remains authoritative for application-owned tables and fields.

`now.config.json` excludes these instance metadata tables from reverse
transformation during **Sync Changes**:

- `sys_db_object`
- `sys_dictionary`
- `sn_doc_pdf_template`

The application-owned table and field declarations remain in `src/fluent` and
continue to participate in normal and frozen-key builds. Native Document
Templates remain configured on the instance; they are not converted into
unsupported Fluent attachment declarations.

## Captured IDE diagnostics

The Australia ServiceNow IDE used `@servicenow/sdk` 4.11.0 and reported 15 hard
diagnostics. They reduce to three reverse-transform patterns:

| Source produced by Sync Changes | Artifact | Diagnostic | Count |
| --- | --- | --- | ---: |
| `src/fluent/tables/rob-configuration.now.ts` | ROB Configuration table | In-scope table emitted with self-`augments` | 1 |
| `src/fluent/tables/rob-configuration.now.ts` | `renewal_notification_copy_group` | `useReferenceQualifier: undefined` rejected with `exactOptionalPropertyTypes` | 2 |
| Four `src/fluent/generated/other/sn-doc-pdf-template/*.now.ts` files | Native PDF templates | PDF passed to image-only `Now.attach` | 8 |
| Same four generated PDF template files | Native PDF templates | Duplicate attachment property in an object literal | 4 |

Total: 15 diagnostics.

The four native PDF template records were:

- `30c54baac3fe8b1068a35f2b2b013183` — `ROB-Form-1768-Authorization-Template.pdf`
- `e43f28ecc3bacb1068a35f2b2b013105` — `rob-r42-capability-template.pdf`
- `f99c3c0ac372031068a35f2b2b013138` — `ROB-Form-1768-Authorization-Template.pdf`
- `4b8f852ec3f24b1068a35f2b2b01318a` — `ROB-Reuse-Supervisor-Attestation.pdf`

## Preserved source contracts

The committed `renewal_notification_copy_group` declaration remains explicit:

- `referenceQual: 'active=true'`
- `useReferenceQualifier: 'advanced'`

The four assignment-group qualifiers and Workforce Operations Manager qualifier
remain `simple` with their existing active-record qualifiers. The five known
TS11 warnings under local SDK 4.8.1 are therefore unchanged.

`AuthorizationDecisionService.js` remains on the post-M2 contract:

- `authorizationContext.valid`
- `authorizationContext.supervisorId`
- `authorizationContext.position`
- `authorizationContext.organization`

Legacy snapshot inputs are not reintroduced.

## Acceptance sequence

1. Run local normal and frozen-key builds.
2. Push this compatibility commit.
3. In the ServiceNow IDE, update the source branch and run **Sync Changes**.
4. Confirm the 15 hard diagnostics are absent and review any resulting source
   diff before installation.
5. Only after Sync passes, run **Build and Install**. Do not use Reinstall.

## 2026-08-23 install recovery outcome

ServiceNow IDE Sync completed with zero hard diagnostics. IDE SDK 4.11.0 then
reported a successful ordinary Build and Install, with rollback context
`318f3a72c33a8f1068a35f2b2b01313c`. The live
`AuthorizationDecisionService.js` module did not change.

One final supported IDE command, **Fluent: Force Install Fluent App in
Instance**, was executed against HR Access ROB Authorization without another
sync, Reinstall, source regeneration, or generated-key edit. The command used
application version `0.0.4`, reported success in 8.281 seconds, and exposed
rollback context `00ae03bac3fa8f1068a35f2b2b013117`.

Force Install was functionally ineffective. Before and after the command,
exactly one matching `sys_module` record existed:

| Property | Pre-Force Install | Post-Force Install |
| --- | --- | --- |
| `sys_id` | `1a197e45de33416ea795141a77307f5d` | unchanged |
| Path | `x_2108496_hr_acces/hr-access-rob-authorization/0.0.1/src/server/authorization/AuthorizationDecisionService.js` | unchanged |
| Updated (UTC) | `2026-08-16 12:01:57` | unchanged |
| Updated by | `admin` | unchanged |
| Content SHA-256 | `e8d8dc49f49ef8cd02e2c9bab18cf15633192e5e9657e59c8d5bd8b304f91a80` | unchanged |

The post-install module still contains `supervisorSnapshot`,
`positionSnapshot`, and `organizationSnapshot`. It still lacks
`authorizationContext.valid`, `authorizationContext.supervisorId`,
`authorizationContext.position`, and `authorizationContext.organization`.

Native-form analysis classifies an in-place Content replacement as **B —
Content protected/read-only**. On the normal ECMAScript Module form, the
underlying `sys_module.content` element is disabled, Save is disabled,
Replace/Replace All/Format are disabled, and no Update action exists. No field
was modified and no manual replacement was attempted.

Supported Fluent installation paths are exhausted. Reinstall, deletion,
replacement-module creation, direct metadata scripts, Background Scripts, and
generated-key edits were not used.

## 2026-08-24 clean-PDI application bootstrap result

The current `feature/05-fulfillment-orchestration` source was cloned into a
clean ServiceNow IDE workspace on `dev437065`. The authoritative source and
upstream were synchronized at commit `7e0d53bbef989417b354ab624929aec6fdb19573`.
The root configuration retained application sys_id
`b0d63cedc2d34e0ca4c05d6eb7acf61e`, scope `x_2108496_hr_acces`, and version
`0.0.4`.

IDE SDK 4.11.0 built the application successfully in 11.444 seconds. The
generated package contained the correct `sys_app` identity. Ordinary **Build
and Install** then failed before package installation with:

```text
Unable to install application as application was null
```

The exact **Fluent: Force Install Fluent App in Instance** command was then run
once against the current workspace application. It reached the same deploy
path and failed with the same null-application error. No Reinstall was used.

Immediate read-only verification on `dev437065` returned:

| Artifact | Matching count |
| --- | ---: |
| `sys_app` for the ROB sys_id/scope | 0 |
| `sys_scope` for the ROB sys_id/scope | 0 |
| `sys_module` path containing `AuthorizationDecisionService.js` | 0 |

The source, compiler, and generated application identity are valid; the IDE
failed to create or resolve the parent application record required by the
installer. Because no live module exists on this clean PDI, an in-place native
form Content replacement is not applicable. Copying the traditional `main`
branch application export, creating a new application identity, committing
build output, or editing dependency scope identities would not be an
equivalent Fluent deployment and was not attempted.

**M3 — BLOCKED-PLATFORM.** Ordinary and Force Install cannot bootstrap the
Fluent application on the clean Australia PDI. Supported installation paths
are exhausted for this gate, and M4 is not ready.
