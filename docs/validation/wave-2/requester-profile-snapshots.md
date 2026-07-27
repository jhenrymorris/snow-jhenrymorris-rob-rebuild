# Wave 2 Requester Profile Snapshot Validation

## Implemented outcome

The scoped application now owns a source-complete requester-profile security
slice for the approved Payroll and Workforce Administration HR access cases.
No PDI installation or native HR Core edit was performed.

The before-insert rule validates, in order:

1. supported native case subclass;
2. the matching active native HR Service stable value;
3. a non-empty set of active ROB Access Item records in categories allowed for
   that service;
4. equality of `opened_by`, `opened_for`, `subject_person`, and session user;
5. the verified requester directory record and manager.

Unrelated HR Services return before requester lookup. A claimed ROB service
with invalid access items aborts before requester lookup. Accepted requests
overwrite untrusted title, supervisor, exception, block, and gate inputs with
server-derived values.

## Security stop and correction

A supervisor validation failure records one controlled reason, leaves the
Supervisor Snapshot blank, sets Authorization Processing Blocked, and forces
employee signature, supervisor signature, and fulfillment gates false. The
after-insert rule queries native HR Tasks by parent plus ROB Task Type and
creates one `exception_review` task only when none exists. Assignment comes
from active ROB Configuration and is never hard-coded.

Protected evidence cannot be directly changed after insert. The ROB Admin-only
re-derivation action requires a nonblank newly changed correction reason,
revalidates the active ROB HR Service, and re-reads the original self-submitting
requester. It preserves prior title and supervisor plus correction actor and
timestamp in audited fields. It never accepts a supplied replacement title or
supervisor and never opens a gate. The native task's ROB Task Type is protected
from direct writes because it participates in exception-task idempotency.

## Source artifacts

| Artifact | Purpose |
|---|---|
| `src/fluent/tables/rob-case-security-fields.now.ts` | Source-owned case and native HR Task dictionaries |
| `src/fluent/business-rules/rob-requester-profile-security.now.ts` | Insert validation, update integrity, and exception-task rules |
| `src/fluent/server/requester-profile-snapshot.server.js` | Provenance, item, identity, and supervisor validation |
| `src/fluent/server/requester-profile-correction.server.js` | Controlled audited directory re-derivation |
| `src/fluent/server/create-supervisor-exception-task.server.js` | Idempotent native Exception Review task creation |
| `src/fluent/security/rob-case-requester-profile-acls.now.ts` | Write and least-privilege field read controls |
| `src/fluent/ui-actions/requester-profile-correction.now.ts` | Restricted correction entry point |
| `scripts/validation/wave-2-security-remediation.test.cjs` | Dependency-free local regression suite |

## Required mapping preservation

The security scripts do not change HR Service, short description, description,
employment type, access end date, requested access items, Operations Manager,
assignment group, or priority. The local suite asserts every listed mapping on
both representative paths. Native producer cleanup remains manual and may
remove only the rejected trailing snapshot block after the scoped correction
passes PDI validation.

## Local test result

Command:

```powershell
node scripts/validation/wave-2-security-remediation.test.cjs
```

Result on 2026-07-27: 13 passed, 0 failed.

This result does not substitute for installed Business Rule timing, native HR
case/task ACL inheritance, cross-scope and Restricted Caller Access, workspace
and API enforcement, audit-history rendering, Flow gate consumption, or native
producer cleanup. Run the exact PDI gate in `docs/MANUAL-CONFIGURATION.md`
after separate installation authorization.
