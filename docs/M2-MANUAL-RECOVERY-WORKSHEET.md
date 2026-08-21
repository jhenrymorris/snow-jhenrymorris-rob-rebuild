# M2 Manual PDI Recovery Worksheet

Date: 2026-08-21
Application: HR Access ROB Authorization
Scope: `x_2108496_hr_acces`
Application sys_id: `b0d63cedc2d34e0ca4c05d6eb7acf61e`
Package: `0.0.4`

This worksheet is the authoritative source/package-to-PDI mapping for the
explicitly approved M2 manual recovery. It reproduces committed metadata only
through supported native ServiceNow configuration surfaces. Physical PDI
sys_ids do not replace Fluent/generated-key identities.

## Source/package agreement

The committed Fluent source and `dist/app/update` XML agree for every material
property below. Every primary package record uses `INSERT_OR_UPDATE`, appears
once in `dist/app/update`, once in `dist/app/package_inventory.csv`, and once
in the packaged ZIP `/update/` stream.

## Primary 12-record worksheet

| # | Metadata table | Logical identity / source `$id` | Package sys_id | Source file | Internal name / label | Target / material properties | Manual path | Preflight / action | Verification |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | `sys_script_include` | `rob-profile-authorization-context` | `fc05ae8aa83c4d2f8dd0927fe324f453` | `src/fluent/script-includes/rob-profile-authorization-context.now.ts`; body: `src/fluent/server/rob-profile-authorization-context.server.js` | `RobProfileAuthorizationContext`; API `x_2108496_hr_acces.RobProfileAuthorizationContext` | Active true; client callable false; mobile callable false; accessible from package private; sandbox callable true; caller access blank; description as below | System Definition → Script Includes | ABSENT — CREATE | Logical-name count 1; reopen and compare every property/body |
| 2 | `sys_dictionary` | implicit `Table.schema.approved_supervisors_group` | `42606cc272ac4e2299fb23e823bb27ef` | `src/fluent/tables/rob-configuration.now.ts` | `approved_supervisors_group`; Approved NSF Supervisors Group | Table `x_2108496_hr_acces_rob_config`; Reference; length 32; reference `sys_user_group`; cascade clear; mandatory false; read-only false; audit false; active true; default blank; qualifier blank/simple | System Definition → Dictionary | PRESENT BUT DIFFERENT: `be32768ac3be431068a35f2b2b01315f`; active false — UPDATE | Logical count 1; active true; exact reference/properties |
| 3 | `sys_dictionary` | implicit `Table.schema.approved_organization_root` | `c40c243f9d7844689354d80f81bcfc0c` | `src/fluent/tables/rob-configuration.now.ts` | `approved_organization_root`; Approved NSF Organization Root | Table `x_2108496_hr_acces_rob_config`; Reference; length 32; reference `cmn_department`; cascade clear; mandatory false; read-only false; audit false; active true; default blank; qualifier blank/simple | System Definition → Dictionary | PRESENT BUT DIFFERENT: `f232768ac3be431068a35f2b2b013156`; active false — UPDATE | Logical count 1; active true; exact reference/properties |
| 4 | `sys_dictionary` | implicit `Table.schema.allow_sys_user_title_fallback` | `2334582941e3439baa5ce462660b26c3` | `src/fluent/tables/rob-configuration.now.ts` | `allow_sys_user_title_fallback`; Allow sys_user Title Fallback | Table `x_2108496_hr_acces_rob_config`; Boolean; length 40; mandatory true; read-only false; audit false; active true; default `true`; qualifier simple | System Definition → Dictionary | PRESENT BUT DIFFERENT: `2e32768ac3be431068a35f2b2b01314b`; active false — UPDATE | Logical count 1; active/default/mandatory exact |
| 5 | `sys_dictionary` | implicit `Table.schema.profile_context_evidence` | `a3766e7d56c7424a89f0fd4a1384dd7a` | `src/fluent/tables/rob-authorization-form.now.ts` | `profile_context_evidence`; Profile Context Evidence | Table `x_2108496_hr_acces_rob_auth`; Two Line Text Area (`multi_two_lines`); length 4000; mandatory false; read-only true (`instance_configured`); audit true; active true; default blank | System Definition → Dictionary | PRESENT BUT DIFFERENT: `7e32768ac3be431068a35f2b2b0131b4`; active false — UPDATE | Logical count 1; active/read-only/audit exact |
| 6 | `item_option_new` | implicit variable-set key `x_2108496_hr_acces_selected_supervisor` | `91500736a21e4be3a8bde1b1f7c7d4bc` | `src/fluent/catalog/rob-common-intake-variable-set.now.ts` | `x_2108496_hr_acces_selected_supervisor`; Supervisor (profile default; select only to correct) | Variable set `be7867ca16a44820af330aac92ae053d`; Reference/type 8; `sys_user`; order 350; active true; mandatory/read-only/map-to-field false; advanced qualifier `javascript:new x_2108496_hr_acces.RobProfileAuthorizationContext().getSupervisorQualifier()`; default blank; description exactly from source | Service Catalog → Catalog Variables → Variable Sets → ROB Common Intake | ABSENT — CREATE inside existing set | Logical count 1; set unchanged; qualifier/order/reference exact |
| 7 | `item_option_new` | implicit variable-set key `x_2108496_hr_acces_organization_fallback` | `2c94ff7cb90146b38c0fd31243f13c52` | `src/fluent/catalog/rob-common-intake-variable-set.now.ts` | `x_2108496_hr_acces_organization_fallback`; Organization (only if profile organization is unavailable) | Variable set `be7867ca16a44820af330aac92ae053d`; Reference/type 8; `cmn_department`; order 360; active true; mandatory/read-only/map-to-field false; advanced qualifier `javascript:new x_2108496_hr_acces.RobProfileAuthorizationContext().getOrganizationQualifier()`; default blank; description exactly from source | Service Catalog → Catalog Variables → Variable Sets → ROB Common Intake | ABSENT — CREATE inside existing set | Logical count 1; set unchanged; qualifier/order/reference exact |
| 8 | `sys_scope_privilege` | `read-hr-profile` | `61321494139c4ed1bf903ba644b92a4e` | `src/fluent/security/rob-profile-read-privileges.now.ts` | Read `sn_hr_core_profile` | Source `x_2108496_hr_acces`; target scope `sn_hr_core`; target type Table (`sys_db_object`); operation Read; status Allowed | System Applications → Application Cross-Scope Access | ABSENT — CREATE | Exact logical tuple count 1; Allowed |
| 9 | `sys_scope_privilege` | `read-hr-position` | `db6b41b372874f0996ca9faf0b1d2ae2` | same | Read `sn_hr_core_position` | Source `x_2108496_hr_acces`; target scope `sn_hr_core`; target type Table; operation Read; status Allowed | same | ABSENT — CREATE | Exact logical tuple count 1; Allowed |
| 10 | `sys_scope_privilege` | `read-user-group` | `8aaf09bbb5a6464791dc236298d404a9` | same | Read `sys_user_group` | Source `x_2108496_hr_acces`; target scope `global`; target type Table; operation Read; status Allowed | same | ABSENT — CREATE | Exact logical tuple count 1; Allowed |
| 11 | `sys_scope_privilege` | `read-user-group-membership` | `0b28721c615b438399f05253a14a212e` | same | Read `sys_user_grmember` | Source `x_2108496_hr_acces`; target scope `global`; target type Table; operation Read; status Allowed | same | ABSENT — CREATE | Exact logical tuple count 1; Allowed |
| 12 | `sys_scope_privilege` | `read-department` | `0f2374bcc70340378388f9951bc5918a` | same | Read `cmn_department` | Source `x_2108496_hr_acces`; target scope `global`; target type Table; operation Read; status Allowed | same | ABSENT — CREATE | Exact logical tuple count 1; Allowed |

All records target application scope `x_2108496_hr_acces`. Dictionary and
variable records have no separately declared explicit Fluent `$id`; their
source identities are their owning Table/VariableSet keys, with stable package
sys_ids recorded above.

## Existing Authorization Form dictionary updates

These are UPDATE-only. Never create replacements.

| Field | Package sys_id | Physical PDI sys_id | Type / reference | Length | Mandatory | Source target | Preflight |
|---|---|---|---|---:|---:|---|---|
| Position Title (`position_title`) | `5ed4e93e6b0246f788d2c99dd6d021b5` | `56911636c38a4b1068a35f2b2b0131dc` | String | 255 | true | active true; read-only true; audit true; default blank | PRESENT BUT DIFFERENT: active/mandatory/type/length match; read-only false; audit false — UPDATE |
| Organization (`organization`) | `22fd131702c74ea9b7b8dc9a419af147` | `1e911636c38a4b1068a35f2b2b0131d8` | String | 255 | true | active true; read-only true; audit true; default blank | PRESENT BUT DIFFERENT: active/mandatory/type/length match; read-only false; audit false — UPDATE |
| Supervisor (`supervisor`) | `fd94ac60beee4732b0d4bf2376aee40d` | `d2911636c38a4b1068a35f2b2b0131d5` | Reference `sys_user`; cascade none | 32 | true | active true; read-only true; audit true; default blank | PRESENT BUT DIFFERENT: active/mandatory/type/reference/length match; read-only false; audit false — UPDATE |

Verification path: System Definition → Dictionary, filtered by table
`x_2108496_hr_acces_rob_auth` and exact element. Required logical count is one
per element; duplicate count zero.

## Script Include exact settings and body source

- Name: `RobProfileAuthorizationContext`
- API name: `x_2108496_hr_acces.RobProfileAuthorizationContext`
- Active: true
- Client callable: false
- Mobile callable: false
- Accessible from: This application scope only / package private
- Sandbox callable: true
- Caller access: blank (not emitted/configured)
- Protection setting: not emitted by source/package; do not infer one
- Description: `Resolves authoritative Position, Organization, and validated NSF Supervisor context without persisting immutable snapshots on native HR Cases.`
- Exact body: the complete, unmodified contents of
  `src/fluent/server/rob-profile-authorization-context.server.js`
- Body SHA-256: `7C164DAD6DB44CBCEBED7F47971C1F2BCDB307BAF321385009F8FB8C04D6DC93`
- Body length: 285 source lines

The file above is the authoritative script-body source. Copy it verbatim; do
not re-author, simplify, translate, or add wrapper code.

## Variable descriptions

Selected Supervisor description:

> Leave blank to use your authoritative profile manager. Any correction is
> limited to active members of the configured NSF Supervisors group and is
> validated again on the server.

Organization fallback description:

> Used only when authoritative profile and directory organization sources are
> unavailable. The selection is constrained to the configured NSF organization
> hierarchy and validated again on the server.

## Preflight classification summary

- Primary dictionaries: 4 PRESENT BUT DIFFERENT; update existing physical
  records, never create duplicates.
- Existing Authorization Form context dictionaries: 3 PRESENT BUT DIFFERENT;
  update existing physical records only.
- Resolver Script Include: ABSENT; create exactly one.
- Intake variables: 2 ABSENT; create exactly two inside existing ROB Common
  Intake variable set `be7867ca16a44820af330aac92ae053d`.
- Exact table Read privileges: 5 ABSENT; create exactly five.
- Duplicate logical identities: 0.
- Existing variable set: PRESENT AND MATCHING logical identity; leave unchanged.
- Native producers and existing M2M associations: leave unchanged and do not
  recreate.

## Manual recovery execution result

Execution date: 2026-08-21

The supported native Dictionary UI reconciled the four primary M2 dictionary
records without creating duplicates:

| Logical field | Physical PDI sys_id | Result |
|---|---|---|
| `allow_sys_user_title_fallback` | `2e32768ac3be431068a35f2b2b01314b` | Active true; source properties match |
| `approved_organization_root` | `f232768ac3be431068a35f2b2b013156` | Active true; source properties match |
| `approved_supervisors_group` | `be32768ac3be431068a35f2b2b01315f` | Active true; source properties match |
| `profile_context_evidence` | `7e32768ac3be431068a35f2b2b0131b4` | Active true; read-only true; audit true; source properties match |

Recovery stopped during the required UPDATE-only reconciliation of the three
existing Authorization Form context fields. With `security_admin` elevated,
the supported Table definition editor allowed `Audit` to be changed, but the
underlying `Read only` field remained protected with the explicit message
`Security prevents writing to this field`. The normal Dictionary form exposes
only `Display Read Only`, `Client Script Modifiable`, and `Strict Read Only`;
it does not expose the committed package value `instance_configured`.

Current existing-field state after committed reread:

| Field | Physical PDI sys_id | Audit | Read only | Reconciliation |
|---|---|---:|---:|---|
| Position Title | `56911636c38a4b1068a35f2b2b0131dc` | true | false | PARTIAL; blocked on exact read-only setting |
| Organization | `1e911636c38a4b1068a35f2b2b0131d8` | false | false | NOT STARTED after stop condition |
| Supervisor | `d2911636c38a4b1068a35f2b2b0131d5` | false | false | NOT STARTED after stop condition |

No alternative read-only option was selected because that would differ from
the committed source/package definition. No Background Script, direct
metadata write, broad privilege, replacement field, or duplicate record was
used. In accordance with the approved stop condition, the Script Include, two
variables, five cross-scope Read privileges, Class C values, and runtime tests
were not started.

Manual recovery count at stop:

- Primary M2 records matching: 4/12.
- Existing Authorization Form fields fully reconciled: 0/3.
- Duplicate logical identities created: 0.
- Broad API/write privileges created: 0.
- New custom tables created: 0.
- Production entry points activated: 0.

Result: **M2 - BLOCKED-MANUAL-CONFIGURATION**. The Australia SDK installer
defect remains open, and the supported manual UI cannot reproduce the exact
committed read-only metadata at the first blocked UPDATE-only artifact.
