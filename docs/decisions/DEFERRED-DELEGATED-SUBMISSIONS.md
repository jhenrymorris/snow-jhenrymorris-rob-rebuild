# Deferred Decision: Delegated Submissions

## Decision

Delegated or on-behalf-of submission is not permitted for the current HR Access
ROB Authorization MVP. An employee may submit a request only for themself.

For every accepted ROB intake request, the following identities must be present
and equal before any requester profile lookup occurs:

```text
authenticated user = opened_by = opened_for = subject_person
```

The Wave 2 before-insert security rule rejects an identity mismatch and aborts
before reading the subject's `sys_user` profile. This rejection is an
authorization control and must not be weakened, bypassed, or replaced by an
actor fallback.

## Security rationale

The four-way equality check prevents an authenticated user from selecting or
injecting another employee as the requester or subject through Employee Center,
an API, import, flow, integration, background script, administrator session, or
impersonation context. Performing identity authorization before profile access
also prevents an unauthorized actor from using the request path to retrieve or
derive another employee's title or supervisor.

No current application role confers authority to submit for another employee.
Platform administration, ROB administration, supervisor status, HR duties, or
native HR case access do not override this control.

## Prohibited scenarios

The current release must reject all of the following before subject profile
lookup or snapshot writes:

- `opened_for` differs from the authenticated requester.
- `subject_person` differs from the authenticated requester.
- A supervisor submits for a direct or indirect report.
- An HR user or ROB administrator submits for another employee.
- Any other mismatch among the authenticated user, `opened_by`, `opened_for`,
  and `subject_person`.

The application must not add a delegated-requester role, delegated-submission
fields, inactive feature flags, alternate requester resolution, or partially
active delegated code while this decision remains in force.

## Deferred design

If policy later permits delegated submission, implement it as a separately
approved security capability rather than relaxing the self-submission check.
The future design should:

1. Authorize the actor before any lookup of the proposed subject's profile.
2. Keep the authenticated actor and subject as distinct, immutable audit
   identities.
3. Support supervisor delegation only after validating the current directory
   relationship and the permitted relationship depth.
4. Support authorized-HR delegation only through a narrowly governed
   entitlement and explicit business purpose; general HR, ROB Admin, and
   platform admin access must not imply submission authority.
5. Capture the delegation basis, reason, authorization result, actor, subject,
   source channel, and authoritative timestamp.
6. Apply equivalent authorization to UI, API, import, flow, integration,
   background, administrator, and impersonation channels.
7. Continue to fail closed before subject profile access when authorization is
   absent, stale, ambiguous, or invalid.
8. Preserve the current self-submission path and historical evidence without
   rewriting prior requests.

The exact native HRSD capability, data model, roles or groups, ACLs, and
cross-scope privileges must be selected only after current Australia-release
capabilities and the agency security model are reviewed. None of this deferred
design is implemented or activated in Wave 2.

## Activation prerequisites

Delegated submission may be considered only after all of the following are
complete:

- Written policy approval identifies permitted delegate types, populations,
  purposes, channels, relationship depth, and revocation rules.
- Privacy, security, HR records, and legal owners approve the audit evidence,
  retention, notification, and subject-transparency requirements.
- The PDI schema and native HRSD delegation features are inspected before any
  custom field, role, ACL, or cross-scope privilege is proposed.
- Threat modeling covers confused-deputy, privilege-escalation, impersonation,
  stale-manager, bulk-access, API/import, and unauthorized profile-lookup risks.
- A separately reviewed implementation plan updates the PRD, architecture,
  field map, security model, traceability matrix, test matrix, and manual
  configuration instructions.
- Automated and PDI tests prove both permitted delegate paths and denial for
  every unauthorized actor/channel combination.
- Deployment receives the same diff review, frozen-key builds, least-privilege
  review, attachment/security validation, and explicit installation approval
  required for other security changes.

Until every prerequisite is satisfied, delegated submission remains deferred
and the four-way identity-mismatch rejection remains mandatory.
