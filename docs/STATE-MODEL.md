# State Model

Appendix D — State Transition Model is the authoritative Australia PRD state model. This file does not define a competing lifecycle.

## R1 Physical Choice Reconciliation

The physical `x_2108496_hr_acces_auth_detail.status` choices are:

- `pending_authorization` — Pending Authorization
- `pending_fulfillment` — Pending Fulfillment
- `active` — Active
- `denied` — Denied
- `superseded` — Superseded
- `revoked` — Revoked
- `expired` — Expired
- `lapsed` — Lapsed

The default is `pending_authorization`. Legacy `requested` and `authorized` choices are removed from active source semantics. The pre-R1 Australia data audit found zero Authorized Access Detail records, so no record-state transformation was required; post-install dictionary reconciliation and zero-record confirmation remain runtime evidence, not source evidence.

## R3 Decision Path

Authorization Path is a native HR Case decision result, not an Authorization
Form or Access Detail state. The only values are New, Reuse, Amendment, Renewal,
and Exception Review. Conditional R3 source evaluation does not transition the
case into Wave 4, create governed authorization records, or open fulfillment.

## M1 Reuse Attestation State

Reuse request evidence is case-level and has only these controlled states:

- `pending` — one qualifying authorization and current Supervisor are fixed for attestation;
- `approved` — the intended Supervisor explicitly approved and completed native attestation;
- `denied` — the Supervisor denied/refused the current request;
- `invalidated` — Supervisor, scope, decision, or qualifying authorization context changed.

`approved` permits the future M4 fulfillment gate only while the qualifying
context remains unchanged. `denied` and `invalidated` keep that gate false.
None of these states changes the existing Active Authorization Form or its
Access Details. Reprocessing an unchanged completed attestation is idempotent;
a changed context returns the case for decision re-evaluation/Exception.

## M4 Fulfillment State Guards

- A false fulfillment gate, Denied request, or Withdrawn request creates zero
  fulfillment tasks.
- A native HR Task is closure-satisfying only when it is closed and carries a
  permitted outcome plus the required completion/waiver evidence and timestamp.
- Staffing completion can activate only Staffing-dependent Access Details;
  Analytics completion can activate only Analytics-dependent details.
- Workforce Profile Charts remains Pending Fulfillment until both Analytics and
  Operations Manager requirements are satisfied. Missing OM creates an
  unresolved Exception Review requirement.
- The parent case is closure-eligible only after all applicable details are
  Active and no unresolved required task/exception remains.

These are deterministic source/unit guards. Exact native HR Case/Task state
mapping and production activation remain blocked by M2/M3.

## M2 Authorization Context Gate

New, Amendment, and Renewal may move from lifecycle preparation to Pending
Employee Signature only after Position, Organization, and Supervisor resolve,
the Supervisor passes active approved-group validation, and all three final
values are copied to the governed Authorization Form. An unresolved or invalid
value routes to the existing Exception/re-evaluation path and creates no
signing work. Once copied, the Authorization Form values remain the historical
context; live profile changes cannot redirect an in-flight supervisor stage.

Reuse retains its M1 state model. It validates the current request Supervisor
from the same resolver but never updates the historical context on the reused
Authorization Form.
