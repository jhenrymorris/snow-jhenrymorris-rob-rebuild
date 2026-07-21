# Security Review Agent Prompt

Work only in `agent/wave-2-security-review`.

Review:
- requester identity resolution
- fields read from `sys_user`
- ACL and cross-scope implications
- delegated request and impersonation behavior
- exposure of title and manager snapshots
- missing-manager handling
- opened-for versus subject-person semantics

Allowed path: `docs/security/`.
Return ranked findings, required corrections, negative tests, and approve/reject recommendation.
