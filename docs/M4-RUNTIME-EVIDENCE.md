# M4 Runtime Evidence

## C2 fixed acceptance matrix

Target: `dev437065`  
Application: HR Access ROB Authorization V2  
Scope: `x_2166123_rob_auth`  
Platform: ServiceNow Australia Patch 3  
SDK: 4.11.0

C0 M4 certification is reused. Architecture changes and new capability
investigations are zero. Runtime evidence is kept separate from source, build,
install, and security evidence.

| Gate | Status | Runtime evidence |
|---|---|---|
| Systems-only | NOT RUN | |
| Data/report-only | NOT RUN | |
| Mixed | NOT RUN | |
| WPC | NOT RUN | |
| Retry/idempotency | NOT RUN | |
| Missing OM Exception | NOT RUN | |
| Task completion evidence | NOT RUN | |
| Partial completion keeps case open | NOT RUN | |
| All required complete closes case | NOT RUN | |
| Access Detail activation | NOT RUN | |
| Waiver | NOT RUN | |
| External integrations = 0 | NOT RUN | |
| Least privilege | NOT RUN | |

## Pre-install evidence

- Full C2 source/PDI inventory completed before edits.
- Focused M4 suite: 31/31 PASS.
- Normal SDK 4.11.0 build and `git diff --check`: PASS.
- Expected generated keys: two new task-lifecycle Business Rule identities;
  no existing key mutation or deletion.
- Effective installs used: 0/2.

No acceptance gate is marked PASS until synthetic PDI evidence exists.
