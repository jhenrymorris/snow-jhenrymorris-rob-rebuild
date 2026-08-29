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

## Completion-First Rule

For C1-C3, the primary objective is completion of the approved application, not exhaustive explanation of every tooling anomaly.

After architecture freeze:

- treat implementation, configuration, deployment, and test-data issues as ordinary defects unless they require a prohibited architecture or security change;
- do not create a new package, capability proof, or platform blocker merely because SDK, IDE, Git, Sync, packaging, incremental deployment, or metadata reconciliation behaves unexpectedly;
- if the intended configuration can be established through a supported ServiceNow administration surface, use that surface and document source/runtime parity;
- tooling provenance is subordinate to correct, secure, auditable runtime behavior in the PDI;
- a source-control, SDK, IDE, Git, Sync, packaging, incremental-deployment, or metadata-identity problem is not by itself a platform-capability blocker;
- before stopping, determine whether the approved behavior can be completed through another supported native ServiceNow administration/configuration surface without changing architecture or security; if it can, continue implementation.

Do not recommend ServiceNow support escalation as a completion path for PDI-specific development or configuration issues.

## Post-C0 Execution Efficiency

C0 certification is reusable evidence.

For C1-C3, do not repeat full capability certification unless at least one of the following is true:

1. The ServiceNow release, patch, plugin, API, ownership boundary, or native capability materially changed.
2. A genuinely new requirement was introduced.
3. Existing certification evidence was disproven by supported runtime behavior.

At milestone startup:

- read only the capability-certification rows applicable to the active milestone plus any directly related frozen dependencies;
- verify the target environment, application identity, SDK version, required plugins, and frozen assumptions;
- reuse all still-valid classifications;
- record `new capability investigations = 0` unless one of the three conditions above is met.

Before editing:

- inspect the complete milestone implementation surface first;
- identify every detectable mismatch against the frozen architecture;
- create one consolidated defect/reconciliation list;
- batch all detectable corrections into one implementation set.

Do not fix and install one defect at a time.

### Deployment discipline

Install count is a measurement and efficiency metric, not a completion barrier.

Do not perform speculative or repetitive installs.

Perform a normal installation when:

- a reviewed source-controlled change genuinely requires deployment;
- focused validation and build gates pass; and
- the user has approved the deployment when approval is required.

If supported native ServiceNow configuration can reconcile an existing PDI artifact without an application install, prefer that route when the SDK/IDE deployment path is unreliable.

Do not spend additional execution cycles solely to remain below an historical install-count threshold.

Reinstall and Force Install remain prohibited unless the user explicitly authorizes them for a specific reason.

### Testing efficiency

During implementation:

- run only focused tests for the source/configuration being changed;
- do not run the full historical regression suite after each local edit.

Before the planned install:

- run the active milestone focused suite;
- run required build/diff/generated-key gates.

After a runtime defect:

- rerun the failed scenario and directly affected tests only;
- gather all known runtime defects before preparing the one corrective install.

At final closeout:

- run the complete required regression suite exactly once;
- record final source, build, install, runtime, security, and count evidence separately.

A runtime gate that has PASS evidence is closed. Do not rerun it unless a later change can reasonably affect that gate.

### Token and analysis efficiency

Before substantial documentation/web/SDK research, determine whether the question is already answered by the approved capability matrix.

Prefer:

`existing certification → exact source/PDI inspection → focused test → implementation`

Do not:

- re-summarize certified Australia documentation;
- reproduce the full project history in every turn;
- reread unrelated appendices;
- perform broad research for an already-certified capability;
- repeatedly explain frozen architecture;
- rerun full regression after localized defects;
- create fresh fixtures solely to reconfirm a gate already closed by accepted evidence.

### Progress reporting

Report progress by closure, not activity.

Every substantive milestone status update must include:

```text
Acceptance gates passed / total:
Remaining gates:
Open functional defects:
Native configuration changes:
Installs performed:
Architecture changes:
New capability investigations:
IDE workspace identity:
```

`Acceptance gates passed / total` should move monotonically toward completion. If it decreases, explain exactly which later source/configuration change invalidated prior evidence.

The objective is milestone closure, not repeated confirmation of already-proven behavior.

## Mandatory ServiceNow IDE Workspace Identity Gate

The ServiceNow IDE workspace is part of the deployment identity. A correct Git repository, branch, `package.json`, or `now.config.json` does **not** by itself prove that the IDE is operating on the intended application.

For all remaining V2 work, the only authorized ServiceNow IDE deployment workspace is:

```text
Workspace: ROB V2 C2 RECOVERY
Application: HR Access ROB Authorization V2
Project Root / ScopeId: 4aba8657837a43104f5193a6feaad3c5
Scope: x_2166123_rob_auth
Repository: jhenrymorris/snow-jhenrymorris-rob-rebuild
Branch: codex/dev437-rebuild-identity
```

The historical workspace exposing application root `b0d63cedc2d34e0ca4c05d6eb7acf61e` and branch `feature/05-fulfillment-orchestration` is preserved as historical evidence only and is **not authorized** for V2 Pull, Sync, Build, Build and Install, or other deployment operations.

### Mandatory preflight

Before **every** ServiceNow IDE Pull, Sync, Build, Build and Install, source-control operation, or deployment:

1. Confirm the active IDE workspace is `ROB V2 C2 RECOVERY`.
2. Confirm the active project root / ScopeId is `4aba8657837a43104f5193a6feaad3c5`.
3. Confirm the application is `HR Access ROB Authorization V2`.
4. Confirm scope is `x_2166123_rob_auth`.
5. Confirm repository is `jhenrymorris/snow-jhenrymorris-rob-rebuild`.
6. Confirm branch is `codex/dev437-rebuild-identity` unless the user has explicitly approved a later V2 branch for the active milestone.
7. Confirm the intended milestone HEAD/commit.
8. Confirm Source Control staged and working changes are understood and expected.

If any value does not match, do not Build, Sync, Pull, Install, troubleshoot product behavior, or modify source from that workspace. If the authorized `ROB V2 C2 RECOVERY` workspace is empty or has lost its V2 association, apply the Workspace rehydration rule below exactly once and then repeat the gate. For any wrong, ambiguous, or non-empty mismatched workspace, **STOP**.

Never infer IDE application identity from the local Git working directory, branch name alone, `package.json`, `now.config.json` alone, or the application selector alone. The IDE project root and V2 application identity must both be explicitly verified.

### Workspace rehydration rule

An empty authorized workspace is a recoverable preflight condition, not a new milestone blocker.

If `ROB V2 C2 RECOVERY` opens with no V2 project root, no application association, or `Apps` reports `No apps to show`, do **not** classify C2/C3 as blocked solely for that condition. Perform exactly one deterministic workspace rehydration using the already-proven supported association path:

1. Remain in `ROB V2 C2 RECOVERY`.
2. Associate/open the existing repository `jhenrymorris/snow-jhenrymorris-rob-rebuild`.
3. Select branch `codex/dev437-rebuild-identity` unless the user has explicitly approved a later V2 branch for the active milestone.
4. Select/open the existing `HR Access ROB Authorization V2` application.
5. Do **not** create, reset, scaffold, clone into a new scope, or regenerate the application.
6. Verify the resulting active project root / ScopeId is `4aba8657837a43104f5193a6feaad3c5`.
7. Re-run the complete Mandatory ServiceNow IDE Workspace Identity Gate.

If rehydration passes, continue the already-authorized active milestone from its preserved gate state. Workspace rehydration is routine environment preflight and does **not** count as:
- a new `E0` package;
- a new capability investigation;
- an architecture change;
- an ordinary corrective install;
- a reason to rerun already-passed runtime gates.

If the single rehydration attempt fails to establish the exact V2 project identity, **STOP**. Do not perform a second workspace experiment inside the active milestone and do not build or install.

A wrong or ambiguous non-empty workspace remains a mandatory STOP. The rehydration allowance applies only when the authorized `ROB V2 C2 RECOVERY` workspace is empty or has lost its V2 association.

### Pre-install identity recheck

Immediately before any authorized normal install, repeat and record:

```text
Workspace:
Project root / ScopeId:
Application:
Scope:
Repository:
Branch:
HEAD:
SDK:
Generated-key unexpected drift:
```

All values must match the intended V2 milestone state. Any mismatch cancels the install.

### Workspace transition rule

Do not silently change ServiceNow IDE workspaces. Any workspace transition must be reported as:

```text
IDE workspace transition:
FROM:
TO:
Reason:
V2 identity verified: YES / NO
```

### Progress reporting

Every substantive C2/C3 status update must include:

```text
IDE workspace identity: PASS — ROB V2 C2 RECOVERY / V2 root verified
```

If the workspace identity is not `PASS`, no build or install may occur.

An empty-workspace condition that is successfully rehydrated in the same preflight should be reported as `IDE workspace identity: PASS — rehydrated / V2 root verified`, not as a milestone blocker.


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
- Existing application-owned Dictionary records when the intended source metadata cannot be reconciled through the IDE/SDK deployment path
- Existing application-owned Business Rules or Script Includes when the reviewed source cannot be reconciled through normal IDE deployment
- Existing application-owned metadata configuration through normal ServiceNow administration forms, provided:
  - the existing record is updated in place;
  - no duplicate metadata is created;
  - architecture is unchanged;
  - broad privilege is not introduced;
  - the intended source and live runtime configuration are compared and documented afterward

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

1. Read repository documentation relevant to the active milestone.
2. Inspect Git status, current branch, existing files, and the project-pinned SDK version.
3. Pass the Mandatory ServiceNow IDE Workspace Identity Gate before any IDE Pull, Sync, Build, source-control operation, or deployment. If the authorized workspace is empty or has lost only its V2 association, perform the one allowed Workspace rehydration and repeat the gate before continuing.
4. Read the capability-certification rows applicable to the active milestone and verify their environment assumptions.
5. Reuse C0 certification when still valid; do not repeat Australia documentation research simply because a new execution begins.
6. Review new Australia documentation or run a new isolated capability proof only if a certified assumption changed, a new requirement exists, or certification was disproven.
7. Confirm that no required capability remains `UNKNOWN`.
8. Inspect the complete milestone implementation surface before editing and create one consolidated defect/reconciliation list.
9. Freeze the implementation scope to the approved architecture.
10. Plan the full milestone implementation and acceptance sequence before substantial edits.
11. Implement the approved milestone as one bounded execution; batch all detectable corrections before installation.
12. Query the PDI read-only whenever exact schema, ownership, sys_id, caller-access, plugin, role, or installed-state information is needed.
13. During implementation, run focused tests only for changed or directly affected components.
14. Run the active milestone focused suite and project-pinned SDK build before the planned install.
15. Review Git diff, `git diff --check`, generated-key changes, and count/scope assertions.
16. Wait for explicit user approval before PDI installation.
17. After the planned install, execute the fixed acceptance matrix and mark each gate `NOT RUN`, `PASS`, or `FAIL`.
18. Treat a `PASS` gate as closed unless a later change can reasonably affect it.
19. If several runtime failures exist, diagnose them together and prepare one combined corrective change set.
20. Use the minimum necessary deployment/configuration actions to reach the approved runtime state; do not use install count as a stop condition.
21. After a runtime correction, rerun only failed/affected scenarios and directly affected tests.
22. Apply the **Post-Certification Blocker Threshold** before declaring any new `BLOCKED-PLATFORM`.
If normal IDE/SDK deployment does not reconcile an existing metadata record, do not automatically begin deployment forensics.

First determine whether the same intended configuration can be applied through the normal supported ServiceNow administration surface.

If yes:

1. update the existing record in place;
2. verify committed live state;
3. verify no duplicate record or broad privilege was created;
4. document source/runtime parity;
5. continue runtime acceptance.

Do not require another SDK install solely to reproduce configuration already established safely through the supported native UI.

23. Run the complete historical regression suite once, at final milestone closeout.
24. Verify instance state separately from Source/Build evidence.
25. Update capability certification, traceability, tests, manual configuration, security documentation where applicable, and measurement evidence.
26. Report:
    - acceptance gates passed / total
    - remaining gates
    - open functional defects
    - native configuration changes
    - installs performed
    - architecture changes
    - new capability investigations
27. Close the milestone only when all defined runtime/security acceptance passes or a blocker satisfies the Post-Certification Blocker Threshold.

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
- Repeat full C0 capability certification for C1-C3 when certified assumptions remain unchanged
- Rerun a PASS runtime gate without a documented reason that a later change could affect it
- Run the full regression suite after each localized defect
- Install one ordinary defect at a time when multiple detectable defects can be batched
- Do not create diagnostic or remediation subpackages for ordinary implementation/configuration/tooling defects
- Do not repeatedly test variants of the same failing API family
- Do not convert a tooling/deployment failure into a platform-capability conclusion
- Do not recommend ServiceNow support as the resolution for a PDI-specific development/configuration issue
- Do not block PDI completion solely because live metadata cannot be perfectly reconciled to generated physical sys_ids
- Do not require an additional install solely for source-provenance symmetry when supported native configuration already establishes the intended live behavior
- Use the historical `b0d63cedc2d34e0ca4c05d6eb7acf61e` / `feature/05-fulfillment-orchestration` workspace for V2 Pull, Sync, Build, or Install
- Proceed with any IDE operation when the Mandatory ServiceNow IDE Workspace Identity Gate does not pass

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
- Supported native PDI configuration is acceptable completion evidence where SDK/IDE deployment is unreliable, provided source/runtime parity and the exact existing records changed are documented.
- When deployment/runtime is in scope, installation and instance verification are completed and recorded separately from Source/Build evidence.
- Ordinary defects are resolved and retested inside the milestone rather than deferred into micro-packages.
- Remaining limitations are clearly identified.
- Deployment activity was limited to what was necessary to establish and verify the approved runtime behavior; unnecessary speculative installs were avoided.
- Full regression was run once at closeout rather than repeatedly during localized remediation.
- Passed acceptance gates were not unnecessarily repeated.
- Every IDE Pull/Sync/Build/Install used the authorized V2 workspace and passed the workspace identity gate immediately before the operation.
