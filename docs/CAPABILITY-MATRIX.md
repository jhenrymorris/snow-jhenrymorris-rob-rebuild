# Capability Matrix

Appendix K — SDK Artifact Classification and Appendix L — PDI Capability Validation Matrix are authoritative. This file is an implementation pointer only. Unsupported or unproven Australia capabilities must be classified and recorded there; they must not be replaced with substitute custom architecture.

## R1 Classification

| R1 artifact | Class | Disposition |
|---|---|---|
| Four custom table schemas, fields, choices, indexes, forms, related list, roles, and controlled reference records | A — source-first | Implemented in Fluent; build/install/runtime evidence tracked separately |
| Existing access-item identity reconciliation | B — configure then transform | Completed on the Australia PDI through a controlled, rollback-recorded, idempotent in-place script after validation proved that neither `apply_once` nor normal `update` record metadata updates pre-existing installed table data. Stable explicit keys, sys_ids, codes, and references were preserved. No migration metadata remains in source. |
| Assignment-group records/membership and approved recertification/timing values | C — manual/environment | Never hard-coded; requires environment/business owner confirmation |
| HRSD intake, decisions, signatures/PDF, fulfillment, renewal, security hardening, reporting | D for R1 / deferred to approved later packages | No R1 implementation |
