# Snapshot Test Agent Prompt

Work only in `agent/wave-2-snapshot-tests`.

Create repeatable tests for:
1. Staffing requester with title and manager.
2. Staffing requester with no manager.
3. Analytics requester with title and manager.
4. Analytics requester with no manager.
5. Existing snapshot values are preserved.
6. Existing mappings remain intact: HR service, short description, description, employment type, end date, requested items, Operations Manager, and assignment group.

Allowed paths:
- `docs/validation/wave-2/`
- `scripts/validation/`
- `src/fluent/tests/` if supported

Do not deploy.
