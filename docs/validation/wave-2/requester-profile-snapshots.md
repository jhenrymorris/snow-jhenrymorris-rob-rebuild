# Wave 2D Requester Profile Snapshots

## Outcome

ServiceNow SDK 4.8.1 supports creating a complete record producer with
`CatalogItemRecordProducer`, including its pre-insert `script`. It does not
expose a supported API for augmenting only the script of an existing record
producer owned by another application.

Both affected record producers are owned by Human Resources: Core. They must
not be recreated or claimed by HR Access ROB Authorization source. The minimum
bridge change is therefore to append the script block below to each existing
record producer's pre-insert Script field through normal HRSD configuration.
No bridge change was applied to the PDI as part of this source-only update.

## Affected artifacts

| Record producer | Target table | Ownership | Required change |
|---|---|---|---|
| Request Access to HR Systems | `sn_hr_core_case_payroll` | Human Resources: Core | Append the profile-snapshot block to the existing pre-insert script |
| Request Access to HR Data and Reports | `sn_hr_core_case_workforce_admin` | Human Resources: Core | Append the same profile-snapshot block to the existing pre-insert script |

The existing mappings for HR service, requested access items, employment type,
access end date, business justification, Operations Manager, and short
description must remain unchanged.

Read-only PDI inspection found no direct variables on either producer. Their
attached ROB variable sets contain no `opened_for` or `subject_person`
variable. Requester resolution must therefore use inherited fields on
`current`, not `producer.opened_for` or `producer.subject_person`.

## Exact bridge script

Append this block after the existing mappings in both record-producer scripts:

```javascript
// Snapshot the requester profile without overwriting explicit case values.
var requesterId = current.getValue('subject_person');

if (!requesterId)
    requesterId = current.getValue('opened_for');

if (!requesterId)
    requesterId = gs.getUserID();

if (requesterId) {
    var requester = new GlideRecord('sys_user');

    if (requester.get(requesterId)) {
        var requesterTitle = requester.getValue('title');
        var requesterManager = requester.getValue('manager');

        if (
            !current.getValue('x_2108496_hr_acces_position_title') &&
            requesterTitle
        ) {
            current.setValue(
                'x_2108496_hr_acces_position_title',
                requesterTitle
            );
        }

        if (
            !current.getValue('x_2108496_hr_acces_supervisor_snapshot') &&
            requesterManager
        ) {
            current.setValue(
                'x_2108496_hr_acces_supervisor_snapshot',
                requesterManager
            );
        }
    }
}
```

The block is ES5-compatible and runs before the record-producer insert. It
does not call `current.update()`, `current.insert()`, or
`current.setAbortAction()`.

## Requester resolution order

1. `current.subject_person`
2. `current.opened_for`
3. `gs.getUserID()`

The first non-empty sys_id is used to retrieve one `sys_user` record.

## Target fields

| Target field | Source user field | Behavior |
|---|---|---|
| `x_2108496_hr_acces_position_title` | `sys_user.title` | Set only when the case field is empty and the user title is non-empty |
| `x_2108496_hr_acces_supervisor_snapshot` | `sys_user.manager` | Set only when the case field is empty and the user manager is non-empty |

## Null handling

- An empty subject person falls through to opened for.
- An empty opened-for value falls through to the logged-in user.
- An empty session user leaves the snapshot fields unchanged.
- A missing or inaccessible `sys_user` record leaves both fields unchanged.
- A user without a title leaves Position Title Snapshot unchanged.
- A user without a manager leaves Supervisor Snapshot unchanged.
- A value already assigned by existing producer logic or platform processing
  is never overwritten.

## Expected staffing case result

Submitting **Request Access to HR Systems** creates an
`sn_hr_core_case_payroll` record with all existing mappings preserved. When
the resolved requester has profile values and the target fields were not
already populated:

- Position Title Snapshot equals the resolved user's `title`.
- Supervisor Snapshot references the resolved user's `manager`.

## Expected analytics case result

Submitting **Request Access to HR Data and Reports** creates an
`sn_hr_core_case_workforce_admin` record with all existing mappings preserved,
including Operations Manager. When the resolved requester has profile values
and the target fields were not already populated:

- Position Title Snapshot equals the resolved user's `title`.
- Supervisor Snapshot references the resolved user's `manager`.

## PDI validation procedure

1. Use synthetic users only. Give the submitting user a known title and
   manager.
2. Capture the complete current Script value of each producer for rollback.
3. In the appropriate HRSD configuration scope, append the exact bridge block
   to **Request Access to HR Systems** without changing its existing script.
4. Append the same block to **Request Access to HR Data and Reports** without
   changing its existing script.
5. Confirm neither script contains `current.update()` or `current.insert()`.
6. Submit the Staffing producer and verify the created Payroll case retains
   its existing variable mappings and contains the expected two snapshots.
7. Submit the Analytics producer and verify the created Workforce
   Administration case retains HR service, short description, Operations
   Manager, and all common mappings, plus the expected two snapshots.
8. Validate subject-person precedence with a synthetic case where subject
   person and opened for resolve to different test users, if the HRSD intake
   permits that state.
9. Validate opened-for fallback when subject person is empty.
10. Validate session-user fallback when both inherited fields are empty.
11. Validate null handling with a synthetic user lacking title, manager, or
    both.
12. Validate non-overwrite behavior by arranging an explicit target value
    before the snapshot block and confirming it remains unchanged.
13. Confirm exactly one case is created per submission and no post-insert
    update is issued by the bridge block.

## Rollback procedure

1. Stop further synthetic submissions through the affected producer.
2. Restore the complete pre-change Script value captured for that producer,
   or remove only the appended profile-snapshot block.
3. Save the producer without changing its variables, variable-set
   associations, target table, HR service, publication state, or other
   mappings.
4. Submit one synthetic request and confirm the previous behavior is restored.
5. Preserve any cases created during validation as test evidence unless the
   PDI test-data procedure explicitly authorizes their removal.

