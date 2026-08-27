# CLAUDE.md
## HR Access ROB Authorization — Claude Code Project Instructions

You are working in a ServiceNow Australia scoped-application repository that uses the ServiceNow SDK, Fluent, TypeScript, Git, and native HRSD configuration.

Follow this file for every Claude Code session.

---
## Australia Capability Certification Gate

Before proposing or implementing any milestone plan that depends on
native ServiceNow behavior, the agent MUST review the current official
ServiceNow Australia documentation for every native capability used by
the proposed architecture.

This requirement applies in addition to repository documentation.

For every native capability, record:

- requirement
- exact ServiceNow feature
- Australia documentation source
- supported operations
- unsupported operations / documented constraints
- required plugin/version
- required role
- owning application/scope
- table/inheritance requirement
- cross-scope requirement
- required manual configuration
- PDI proof when documentation is insufficient
- final classification:
  DOCUMENTED-SUPPORTED
  PDI-PROVEN
  SUPPORTED-WITH-CONSTRAINT
  UNSUPPORTED
  UNKNOWN

No implementation plan may be approved while any required capability
is UNKNOWN.

If a capability is UNSUPPORTED, resolve the architecture before coding.

Do not discover documented native-platform limitations during
implementation when they could have been identified during this gate.

Once the capability matrix is approved, the architecture is frozen for
the milestone. Ordinary defects are corrected within the execution;
they do not create new micro-packages.


---

## Post-Certification Blocker Threshold

The purpose of capability certification is to move foreseeable Australia platform constraints to planning, not to create another stopping mechanism.

After an architecture has passed the Australia Capability Certification Gate, an integrated runtime failure is **not** a new platform blocker unless evidence proves at least one of the following:

1. A capability classified `DOCUMENTED-SUPPORTED` behaves differently on the target Australia environment when invoked through the documented mechanism.
2. A capability classified `PDI-PROVEN` fails when invoked through the same supported mechanism and equivalent preconditions used by the proof.
3. A new requirement outside the certified architecture is introduced.
4. The certification evidence or interpretation is proven factually incorrect.

Otherwise classify the issue as an ordinary:

- implementation defect
- configuration defect
- integration defect
- test-data defect

Resolve ordinary defects inside the current milestone execution and retest. Do not create a new micro-package merely because an integrated test failed.

Before architecture freeze, an `UNSUPPORTED` capability requires architecture resolution before coding. After architecture freeze, do not reopen the architecture unless one of the four conditions above is met.

The agent's primary objective is completion of the approved implementation. The certification gate exists to prevent foreseeable rework, not to maximize stop conditions.

---

## Completion Execution Model

For the remaining V2 completion effort, use exactly these bounded executions unless the user explicitly approves a scope change:

1. **C0 — Australia Capability Certification + Final Architecture Freeze**
2. **C1 — M3 Final Runtime + Closeout**
3. **C2 — M4 Runtime + Closeout**
4. **C3 — M5 Security / UAT / Release**

Do not create `M3.x`, `C1.x`, `C2.x`, or similar remediation packages for ordinary defects. Fix those defects inside the active execution.

A new package is justified only by:

- a user-approved scope change;
- a genuinely new requirement;
- or a platform blocker satisfying the Post-Certification Blocker Threshold above.

Do not begin the next execution automatically unless the current package instructions or the user explicitly authorize it.

---

## Required Context

Read these files before planning or editing:

- `MEASUREMENT.md`
- `docs/PRD.md`
- applicable Appendices A–O under `docs/`
- `docs/ARCHITECTURE.md`
- `docs/FIELD-MAP.md`
- `docs/TRACEABILITY.md`
- `docs/SECURITY-MODEL.md`
- `docs/TEST-MATRIX.md`
- `docs/MANUAL-CONFIGURATION.md`

Use the installed ServiceNow SDK skill/plugin and current SDK documentation. Do not rely on stale API memory when `now-sdk explain`, official SDK types, or read-only instance queries can resolve uncertainty.

Content under `docs/archive/zurich-development/` is historical evidence only and is not current implementation guidance. Do not invent requirements when the PRD and appendices are silent.

---

## Project Identity

- Application: `HR Access ROB Authorization V2`
- Platform: ServiceNow Australia
- App type: Scoped
- PDI authentication alias: `pdi`
- SDK baseline: `4.11.0` for the V2 / `dev437065` line
- Do not downgrade to SDK 4.8.1 based on historical branch documentation; use the version pinned by the current V2 project and verify with `package.json` / lockfile before SDK work
- Scope: `x_2166123_rob_auth` (preserve the value in `now.config.json`)
- MVP: self-submission only

This identity applies only to the `codex/dev437-rebuild-identity` rebuild line
targeting `dev437065`. Preserve the original
`feature/05-fulfillment-orchestration` branch and do not target `dev285962`
from this rebuild line.

---

## Architecture Constraints

- Parent request: native `sn_hr_core_case`
- Work records: native `sn_hr_core_task`
- No custom request table
- No custom fulfillment-task table
- Only these custom business tables:
  1. ROB Configuration
  2. ROB Access Item Reference
  3. ROB Authorization Form
  4. Authorized Access Detail
- Authorized Access Detail is governed authorization scope, not request input. Wave 2 intake and Wave 3 decision evaluation do not create it; Wave 3 does not create Authorization Forms; Reuse creates neither a new form nor duplicate details.
- No custom approval table
- No custom signature table
- No custom authentication
- No custom attachment repository
- No direct provisioning integrations
- Keep ARM and OAS separate
- No SSN or unnecessary sensitive PII
- Store one final PDF on the Authorization Form only
- Preserve all historical authorization and signature evidence
- Use configuration and references instead of hard-coded values

Before architecture freeze, if a requirement cannot be implemented with supported SDK or native metadata, classify the capability and resolve the architecture or document the exact supported manual configuration before coding. After certification, apply the Post-Certification Blocker Threshold before stopping; ordinary implementation/configuration/integration failures must be fixed inside the current milestone. Do not invent substitute architecture.

---

## Development Boundary

### Source-controlled SDK work

- Roles
- Tables and fields
- Scoped extensions to native HRSD tables
- Cross-scope privileges
- Seed records
- Application navigation
- Reusable decision and calculation services
- Supported flows/subflows
- ACLs
- Notifications
- Reports
- ATF artifacts
- Synthetic test data
- Documentation

### Native/manual PDI work

- HR services and COEs
- Employee Center placement
- HR case/task templates
- Native HR e-signature
- Native supervisor approval
- Current Australia Document Templates and PDF mapping
- Attachment-security testing
- Impersonation testing
- Final dashboard/flow visual review

Update `docs/MANUAL-CONFIGURATION.md` whenever native/manual work remains.

---

## Core Business Logic

The authorization decision must return:

- Existing Authorization Status
- Request Path
- Existing Authorization Form
- Covered Access Items
- Uncovered Access Items
- Requires Employee Signature
- Requires Supervisor Signature
- Calculated Expiration Date
- Exception Reason
- Duplicate Case Reference when applicable

Required outcomes:

| Condition | Path | Employee Signature | Supervisor Approval + Signature |
|---|---|---:|---:|
| No form | New Authorization | Yes | Yes |
| Current and fully covered | Reuse Existing Authorization | No | Yes |
| Current and partly covered | Amendment | Yes | Yes |
| Expired/lapsed | Renewal | Yes | Yes |
| Obsolete version | Renewal | Yes | Yes |
| Revoked | New Authorization | Yes | Yes |
| Material role/org change | Amendment | Yes | Yes |
| Missing supervisor/end date | Exception Review | Stop | Stop |
| Duplicate open request | Exception Review | No duplicate work | No duplicate work |

Partial access must create an amendment delta for uncovered items only.

---

## Signature and PDF Sequence

New, Renewal, Amendment:

```text
Authorization Form created
→ Employee e-signature
→ Supervisor approval
→ Supervisor e-signature
→ Signed PDF generated
→ Authorization activated
→ Fulfillment gate opened
```

Requirements:

- Employee signs first.
- Approval without supervisor signature does not satisfy the gate.
- Denial prevents fulfillment.
- Reuse does not overwrite the original employee signature or PDF.
- PDF attaches only to Authorization Form.
- PDF and notification content contain no SSN or unnecessary sensitive PII.

---

## Fulfillment

- Systems-only: one Staffing HR task.
- Data/report-only: one Analytics HR task.
- Mixed: one Staffing and one Analytics HR task.
- Workforce Profile Charts:
  - Analytics task
  - Operations Manager ARM Role Assignment task
  - Provisioning system = ARM
  - Target system = OAS
- Do not duplicate team tasks on retry.
- Parent case closes only after required work is completed or formally waived.
- Access-detail status becomes Active only after related fulfillment completes.

---

## Renewal and Idempotency

The daily process must:

- Read active configuration
- Use configurable reminder intervals
- Send each reminder once per cycle
- Apply the annual recertification date
- Apply the grace rule
- Use an earlier access end date where applicable
- Avoid lapse if an active approved replacement exists
- Send a lapse notice once
- Preserve historical forms and PDFs
- Never deprovision external access directly

Flow retries must not duplicate:

- Access-detail records
- HR tasks
- Approvals/signature activities
- Reminders
- Lapse notices

---

## Security

- Apply least privilege.
- Unrelated users cannot read authorization records or attachments.
- Operations Managers cannot browse the repository.
- Fulfillers receive contextual access only.
- Signature, approval, audit, supersession, reminder, and waiver fields are protected.
- Direct attachment URLs must respect authorization.
- Every scripted ACL requires written justification and tests.
- Update `docs/SECURITY-MODEL.md` and `docs/TEST-MATRIX.md` with security changes.

---

## Repository and File Conventions

Preferred structure:

```text
src/
├── fluent/
│   ├── roles/
│   ├── tables/
│   ├── extensions/
│   ├── security/
│   ├── records/
│   ├── modules/
│   ├── flows/
│   ├── notifications/
│   ├── reports/
│   └── tests/
└── server/
    └── authorization/
        ├── AuthorizationRepository.ts
        ├── AccessComparisonService.ts
        ├── AuthorizationDecisionService.ts
        ├── ExpirationDateService.ts
        ├── DuplicateRequestService.ts
        └── types.ts
```

Use clear, small files and avoid large monolithic scripts.

---

## Commands

Inspect `package.json` before invoking scripts. Expected commands:

```powershell
npm run sn:build
npm run sn:install:pdi
npm run sn:sync
npm run sn:dependencies
```

Useful direct commands:

```powershell
npx @servicenow/sdk --version
npx @servicenow/sdk explain quickstart --format raw
npx @servicenow/sdk auth --use rob-pdi
```

Do not install to the PDI without explicit user approval after diff review.

---

## Required Session Workflow

For each request that depends on native ServiceNow behavior:

1. Read the required repository documentation.
2. Inspect Git status, current branch, existing files, and the project-pinned SDK version.
3. Review current official ServiceNow **Australia** documentation for every native feature used by the proposed solution.
4. Use current ServiceNow SDK skill guidance, `now-sdk explain`, and installed SDK types for SDK-managed artifacts.
5. Complete or update `docs/AUSTRALIA-CAPABILITY-CERTIFICATION.md`.
6. Classify every required capability as `DOCUMENTED-SUPPORTED`, `PDI-PROVEN`, `SUPPORTED-WITH-CONSTRAINT`, `UNSUPPORTED`, or `UNKNOWN`.
7. Run one minimal isolated synthetic PDI proof for every required `UNKNOWN` that official documentation cannot resolve.
8. Resolve every `UNSUPPORTED` capability architecturally before implementation.
9. Do not approve an implementation plan while any required capability remains `UNKNOWN`.
10. Obtain required architecture approval, then freeze the milestone architecture.
11. Plan the full milestone implementation and acceptance sequence before substantial edits.
12. Implement only the approved milestone and do it as one bounded execution; ordinary defects do not create micro-packages.
13. Query the PDI read-only whenever exact schema, ownership, sys_id, caller-access, plugin, role, or installed-state information is needed.
14. Run focused tests and the project-pinned SDK build.
15. Fix build, implementation, configuration, integration, and test-data defects without changing certified architecture.
16. Apply the **Post-Certification Blocker Threshold** before declaring any new `BLOCKED-PLATFORM` condition.
17. Run the complete milestone acceptance suite.
18. Review the Git diff, `git diff --check`, generated-key changes, and count/scope assertions.
19. Update capability certification, traceability, tests, manual configuration, security documentation where applicable, and measurement evidence.
20. Report:
    - capability certifications relied upon
    - files/artifacts changed
    - build/test/runtime results
    - manual PDI work
    - security/cross-scope changes
    - remaining risks
21. Wait for explicit user approval before PDI installation.
22. After authorized installation, verify instance state separately from Source/Build evidence.
23. Close the milestone only after defined runtime/security acceptance passes or a blocker satisfies the Post-Certification Blocker Threshold.

For planning-only requests, do not edit files.

---

## Do Not

- Change the scope
- Create replacement request/task tables
- Create custom signature or authentication frameworks
- Hard-code sys_ids, groups, dates, versions, access items, or reminder values
- Store production data, SSNs, or real signed forms
- Grant broad cross-scope or ACL access
- Conflate ARM and OAS
- Attach signed PDFs to emails
- Add delegated/bulk submission
- Add external integrations
- Delete historical records
- Run `install --reinstall` without explicit approval
- Use `--reinstall` as a normal deployment workaround
- Stage unexpected generated-key changes
- Treat Source or Build evidence as Install, Runtime, Security, or UAT evidence
- Modify unrelated working artifacts
- Install without approval

---

## Plan-Only Response Format

When asked to plan, provide:

1. Objective
2. Requirements addressed
3. Files affected
4. SDK/Fluent APIs
5. Dependencies
6. Cross-scope privileges
7. Implementation sequence
8. Tests
9. Manual PDI work
10. Risks and assumptions

Do not edit files during plan-only work.

---

## Definition of Done

Work is done only when:

- Required native capabilities are certified and no required capability remains `UNKNOWN`.
- Architecture constraints remain intact and certified architecture is not reopened without evidence meeting the Post-Certification Blocker Threshold.
- The project-pinned SDK build succeeds.
- The Git diff and generated-key changes are reviewed.
- Traceability, tests, capability certification, and measurement evidence are updated.
- Manual PDI work is documented.
- When deployment/runtime is in scope, installation and instance verification are completed and recorded separately from Source/Build evidence.
- Ordinary defects are resolved and retested inside the milestone rather than deferred into micro-packages.
- Remaining limitations are clearly identified.
