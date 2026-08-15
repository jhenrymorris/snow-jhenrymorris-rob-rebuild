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
