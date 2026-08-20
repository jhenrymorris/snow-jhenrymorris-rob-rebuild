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
