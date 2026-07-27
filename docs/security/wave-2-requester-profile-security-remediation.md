# Wave 2 Requester Profile Security Remediation

## Review basis

- Candidate implementation reviewed: `bec24a8fe40bbd0aa3ed79a4b2b992180ceba3a1`
- Security review reviewed: `94c457ad79150d741749644d4e43f0725629ccb3`
- Blocking report: `wave-2-requester-profile-security-second-review.md`
- Deployment: not performed and not authorized

The candidate tip was generated keys only. This remediation integrates the
executable correction in source, adds source ownership for every referenced
case field, and adds the controls that the second review found missing. The SDK
alone cannot prove installed native HRSD ACL, Restricted Caller Access,
cross-scope, producer timing, or channel behavior; those remain explicit PDI
release gates rather than assumed passes.

## Finding-to-fix mapping

| Finding | Remediation | Local evidence | Remaining release evidence |
|---|---|---|---|
| R2-F01 - exception flag was not an enforced stop | Supervisor exceptions set Authorization Processing Blocked and force employee-signature, supervisor-signature, and fulfillment gates false. An after-insert rule creates at most one configuration-routed native HR Exception Review task, and its ROB Task Type idempotency discriminator denies direct writes. | Local gate, task-idempotency, and metadata protection tests pass. | Prove installed task creation, retry idempotency, and that every later Flow/approval/signature/fulfillment entry point checks the block. |
| R2-F02 - direct `rob_admin` evidence edits | A before-update integrity rule rejects direct protected changes. The ROB Admin-only re-derivation action requires a nonblank new reason, revalidates ROB service provenance, reads the original requester's directory profile, preserves prior title/supervisor, actor, and timestamp, and never opens a gate. | Direct-edit, unrelated-case, blank-reason, and controlled-correction tests pass. | Prove form/list/API/import/background denial, native audit history, role/record ACL intersection, and platform-admin behavior. |
| R2-F03 - ACL and cross-scope runtime unverified | Source defines field ACLs and avoids speculative cross-scope privileges. Operations are limited to service/item/user reads, current-record writes, configuration read, and one native HR Task insert. | SDK build and source inspection pass. | Run ACL debugging and inspect RCA/privilege/log evidence after authorized install; add only a proven minimum Fluent privilege if required. |
| R2-F04 - field reads deferred | Snapshot read ACLs allow only a subject with coherent self-submission identities, the validated supervisor, ROB Admin, or Compliance Viewer after native case access. Internal exception/gate/correction evidence is role-limited to Admin/Compliance. | ACL metadata builds; scripts perform no read-side query. | Run the full persona/channel matrix and confirm native approval/signature experiences still work without excess exposure. |
| R2-F05 - mutable requested-items discriminator | The rule no longer treats requested items as provenance. It validates case subclass plus active stable approved HR Service value and then verifies every item is active and belongs to an allowed service category. Requested items are immutable after creation and direct writes are denied. | Unrelated/inactive-service and forged/inactive/wrong-category local tests pass before requester lookup. | Prove HR Service and identity timing on both producers and test crafted cases through every supported channel. |
| R2-F06 - generated-key-only, source-incomplete tip | Fluent source now owns Requested Items, Position Title Snapshot, Supervisor Snapshot, exception/block/gate/correction fields on both subclasses and ROB Task Type on `sn_hr_core_task`, plus rules, ACLs, and UI action. Keys are SDK-generated only. | Normal SDK build succeeds. | Repeated frozen-key builds and installed dictionary ownership review must pass. |

## Local validation

Run from the repository root:

```powershell
node scripts/validation/wave-2-security-remediation.test.cjs
npm.cmd run build
npx.cmd @servicenow/sdk build --frozenKeys true --errorOnConflict true
git diff --check
```

The local regression suite covers both approved intake paths, required mapping
preservation, unrelated/crafted provenance, identity mismatch, supervisor stop
state, direct edit denial, audited re-derivation, and task idempotency.

## Remaining blockers

There is no remaining known source-code blocker after all required local
commands pass. Deployment remains blocked by the PDI-only evidence in
`docs/MANUAL-CONFIGURATION.md`, section **Wave 2 security-remediation PDI
gate**, including producer timing, native ACL inheritance, field read exposure,
Restricted Caller Access, cross-scope privilege disposition, task creation,
audit history, flow gate consumption, and native producer cleanup/rollback.
