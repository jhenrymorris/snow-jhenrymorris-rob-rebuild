# AGENTS.md
## HR Access ROB Authorization — Codex Project Instructions

This repository contains a ServiceNow Australia scoped application developed with the ServiceNow SDK, Fluent, TypeScript, Git, and native HRSD configuration.

Codex must follow these instructions for every task in this repository.

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

## 1. Required Reading

Before planning or modifying files, read:

- `MEASUREMENT.md`
- `docs/PRD.md`
- applicable Appendices A–O under `docs/`
- `docs/ARCHITECTURE.md`
- `docs/FIELD-MAP.md`
- `docs/TRACEABILITY.md`
- `docs/SECURITY-MODEL.md`
- `docs/TEST-MATRIX.md`
- `docs/MANUAL-CONFIGURATION.md`

Do not rely only on this file. The documents above contain the approved requirements, architecture, field mappings, security model, test cases, and manual configuration boundaries.

Content under `docs/archive/zurich-development/` is historical evidence only. Do not use it as current implementation guidance. Do not invent requirements when the PRD and appendices are silent; record the question or stop condition instead.

---

## 2. Application Identity

- Application name: `HR Access ROB Authorization V2`
- Application type: Scoped
- Target release: ServiceNow Australia
- Development target: Personal Developer Instance
- Authentication alias: `pdi`
- SDK baseline: `4.11.0` for the V2 / `dev437065` line
- Do not downgrade to SDK 4.8.1 based on historical branch documentation; use the version pinned by the current V2 project and verify with `package.json` / lockfile before SDK work
- Scope: `x_2166123_rob_auth` (use the scope already defined in `now.config.json`)
- MVP submission model: Self-submission only

Do not change the application scope after metadata creation begins.

This identity applies only to the `codex/dev437-rebuild-identity` rebuild line
targeting `dev437065`. The original `feature/05-fulfillment-orchestration`
branch and the `dev285962` application remain separate and must not be changed
as part of rebuild work.

---

## 3. Non-Negotiable Architecture Rules

1. Use native `sn_hr_core_case` as the parent operational request record.
2. Use native `sn_hr_core_task` for:
   - Staffing Fulfillment
   - Analytics Fulfillment
   - Operations Manager ARM Role Assignment
   - Exception Review
3. Do not create a custom parent request table.
4. Do not create a custom fulfillment-task table.
5. Custom business tables are limited to:
   - ROB Configuration
   - ROB Access Item Reference
   - ROB Authorization Form
   - Authorized Access Detail
   Authorized Access Detail is governed authorization scope, not request input or a request line. Wave 2 intake and Wave 3 decision evaluation must not create it; Wave 3 must not create Authorization Forms. New, Amendment, and Renewal create governed artifacts in Wave 4. Reuse creates neither a new form nor duplicate details.
6. Do not create custom approval, signature, authentication, or attachment tables.
7. MVP supports self-submission only.
8. Delegated, on-behalf-of, organization-level, and bulk submission are post-MVP.
9. External provisioning is notify-and-track only.
10. Do not build integrations with ARM, OAS, FPPS/WTTS, eOPF, or USA Staffing.
11. Keep ARM and OAS separate:
    - Provisioning system = ARM
    - Target/report platform = OAS
12. Do not store SSNs or unnecessary sensitive PII.
13. Store the final signed PDF only on the ROB Authorization Form.
14. Do not duplicate the signed PDF on the HRSD case.
15. Use one authoritative date/time field for each signature.
16. Preserve historical authorization, approval, signature, PDF, and supersession evidence.
17. Do not overwrite prior authorization records.
18. Prefer configuration records, references, Flow Designer, subflows, and decision services over hard-coded logic.
19. Do not hard-code:
    - sys_ids
    - assignment groups
    - access items
    - form versions
    - recertification dates
    - grace periods
    - reminder intervals
20. Report unsupported metadata or platform limitations instead of inventing substitute architecture.

---

## 4. Development Boundaries

### SDK and source-controlled work

Use the ServiceNow SDK and Fluent where supported for:

- Scoped application metadata
- Custom tables and fields
- Scoped fields on native HRSD tables
- Roles and ACLs
- Cross-scope privileges
- Seed configuration/reference records
- Application menus and modules
- Reusable server-side logic
- Supported flows and subflows
- Notifications
- Reports and dashboards
- ATF metadata
- Synthetic test records
- Release documentation

### Native/manual PDI work

Do not replace these with custom mechanisms:

- HR service and COE configuration
- Employee Center category/topic placement
- HR case templates
- HR task templates
- Native HR e-signature
- Native supervisor approval
- Current Australia Document Templates and PDF mappings
- Final Flow Designer visual review
- Attachment security validation
- Impersonation testing
- Dashboard visual refinements
- Existing application-owned Dictionary records when the intended source metadata cannot be reconciled through the IDE/SDK deployment path
- Existing application-owned Business Rules or Script Includes when the reviewed source cannot be reconciled through normal IDE deployment
- Existing application-owned metadata configuration through normal ServiceNow administration forms, provided:
  - the existing record is updated in place;
  - no duplicate metadata is created;
  - architecture is unchanged;
  - broad privilege is not introduced;
  - the intended source and live runtime configuration are compared and documented afterward

When SDK support is incomplete or IDE/SDK deployment cannot reliably reconcile an existing PDI artifact, use the supported native administration/configuration surface where safe, update the existing record in place, and document exact source/runtime parity in `docs/MANUAL-CONFIGURATION.md`.

---

## 5. Repository Conventions

Recommended source layout:

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

Use descriptive file names. Keep one logical artifact group per file when practical.

---

## 6. Required ServiceNow Practices

1. Inspect the PDI schema before creating fields.
2. Reuse native fields when they satisfy the requirement.
3. Add scoped fields to native tables only when no suitable native field exists.
4. Download dependencies for referenced tables and scopes.
5. Use explicit cross-scope privileges.
6. Grant only the minimum required operation and target.
7. Avoid broad scripted ACLs.
8. Document every scripted ACL and explain why declarative security is insufficient.
9. Make flow and scheduled processing idempotent.
10. Prevent retries from creating duplicate:
    - Authorized Access Detail records
    - Staffing tasks
    - Analytics tasks
    - Operations Manager tasks
    - Exception tasks
    - Reminder notices
    - Lapse notices
11. Preserve native HR task fields for parent, assignment, state, due date, work notes, close notes, and completion date where available.
12. Use references to ROB Access Item Reference instead of duplicated access-item choice lists.
13. Enable auditing only where required by the security and audit model.
14. Use synthetic test data only.
15. Preserve stable generated keys. Investigate any change to `src/fluent/generated/keys.ts` before staging or deployment.
16. Keep Source, Build, Install, Runtime, Security, and UAT evidence distinct. Source review or build success is not runtime proof.
17. Before architecture freeze, if a required native capability is `UNSUPPORTED`, resolve the architecture and update the capability matrix before coding. After certification, apply the Post-Certification Blocker Threshold; do not treat ordinary implementation/configuration/integration failures as new platform blockers.

---

## 7. Required Authorization Outcomes

The decision engine must support:

| Condition | Request Path | Employee Signature | Supervisor Approval + Signature |
|---|---|---:|---:|
| No prior authorization | New Authorization | Yes | Yes |
| Active/current/fully covered | Reuse Existing Authorization | No | Yes |
| Active/partially covered | Amendment | Yes | Yes |
| Expired or lapsed | Renewal | Yes | Yes |
| Obsolete form version | Renewal | Yes | Yes |
| Revoked | New Authorization | Yes | Yes |
| Material role/organization change | Amendment | Yes | Yes |
| Missing supervisor | Exception Review | Stop | Stop |
| Missing required end date | Exception Review | Stop | Stop |
| Duplicate open request | Exception Review | No duplicate work | No duplicate work |

Partial coverage must return covered and uncovered access items and use only the uncovered items as the amendment delta.

---

## 8. Signature and Fulfillment Gate Rules

For New, Renewal, and Amendment:

```text
Create Authorization Form
→ Employee Signature
→ Supervisor Approval
→ Supervisor Signature
→ Generate PDF
→ Activate Authorization
→ Open Fulfillment Gate
```

Rules:

- Employee signature occurs before supervisor processing.
- Supervisor approval alone is insufficient.
- Supervisor signature is separately required.
- Denial must prevent fulfillment.
- No fulfillment task may be created before the gate is complete.
- Reuse must not overwrite the original employee signature or signed PDF.
- Amendment and renewal must link supersession records without deleting history.

---

## 9. Fulfillment Rules

- HR systems-only request: one Staffing HR task.
- Data/report-only request: one Analytics HR task.
- Mixed request: one Staffing task and one Analytics task.
- Workforce Profile Charts:
  - one Analytics task
  - one Operations Manager ARM Role Assignment task
  - provisioning system = ARM
  - target system = OAS
- Do not create one task per access item unless explicitly approved later.
- Parent case remains open until every required child task is complete or formally waived by an authorized process.
- Authorized Access Detail becomes Active only after its required fulfillment is complete.

---

## 10. Renewal and Lapse Rules

The daily process must:

1. Read the active ROB Configuration record.
2. Use configured reminder intervals.
3. Prevent duplicate reminders.
4. Respect the shared agency recertification date.
5. Apply the configured grace period.
6. Use an earlier time-limited Access End Date when applicable.
7. Avoid lapse notices when an approved active replacement exists.
8. Preserve expired/lapsed forms and PDFs.
9. Never deprovision access directly in external systems.

Privacy-safe notifications may include only:

- Authorization number
- Subject name
- Expiration date
- Required action
- Secure link

---

## 11. Security Rules

- Apply least privilege.
- Unrelated users must not read authorization records or PDFs.
- Operations Managers must not browse the authorization repository.
- Fulfillers receive contextual access only.
- Fulfillers must not edit signature or approval evidence.
- Signed PDF access must not be obtainable by direct URL without authorization.
- Notifications must not include:
  - signed PDFs
  - signature values
  - business justification
  - SSNs
  - sensitive PII
- Update `docs/SECURITY-MODEL.md` when a security design changes.
- Add or update tests in `docs/TEST-MATRIX.md` for every ACL or attachment-security change.

---

## 12. Commands

Use the scripts present in `package.json`. Common commands are expected to include:

```powershell
npm run sn:build
npm run sn:install:pdi
npm run sn:sync
npm run sn:dependencies
```

When a script is absent, inspect `package.json` before assuming a command.

Useful direct SDK commands:

```powershell
npx @servicenow/sdk --version
npx @servicenow/sdk explain quickstart --format raw
npx @servicenow/sdk query sys_db_object --query "nameINsn_hr_core_case,sn_hr_core_task" --fields "name,label,sys_scope,super_class" --auth rob-pdi --output json
```

Do not run installation against the PDI until the user has reviewed the diff and explicitly authorizes installation.

---

## 13. Mandatory Work Pattern

For each task that depends on native ServiceNow behavior:

1. Read the required repository documentation relevant to the active milestone.
2. Inspect existing files, current Git status, current branch, and the project-pinned SDK version.
3. Pass the Mandatory ServiceNow IDE Workspace Identity Gate before any IDE Pull, Sync, Build, source-control operation, or deployment. If the authorized workspace is empty or has lost only its V2 association, perform the one allowed Workspace rehydration and repeat the gate before continuing.
4. Read the capability-certification rows applicable to the active milestone and verify that the target environment still satisfies their assumptions.
5. Reuse existing C0 certification when valid. Do not repeat Australia documentation research merely because a new execution begins.
6. Review new Australia documentation or run a new isolated capability proof only when a certified assumption changed, a new requirement exists, or certification is disproven.
7. Confirm that no required capability for the active milestone is `UNKNOWN`.
8. Inspect the complete milestone implementation surface before editing and create one consolidated defect/reconciliation list.
9. Freeze the milestone implementation scope from the approved architecture.
10. Prepare one complete milestone implementation and acceptance plan.
11. Implement the approved milestone once and batch all detectable corrections before installation.
12. Query the PDI read-only whenever exact schema, table ownership, sys_id, caller-access, plugin, role, or installed-state information is needed.
13. During development, run focused tests only for changed or directly affected components.
14. Run the active milestone focused suite and SDK build before the planned install.
15. Review `git diff`, `git diff --check`, generated-key changes, and scope/count assertions before installation.
16. Do not install until the user has reviewed the diff and explicitly authorized installation.
17. After the planned install, execute the fixed acceptance matrix and mark each gate `NOT RUN`, `PASS`, or `FAIL`.
18. A `PASS` gate is closed and is not rerun unless a later change can reasonably affect it.
19. If multiple runtime failures exist, diagnose them together and batch the corrections into one corrective change set.
20. Use the minimum necessary deployment/configuration actions to reach the approved runtime state; do not use install count as a stop condition.
21. After a runtime defect, rerun only the failed/affected scenario and directly affected tests.
22. Apply the **Post-Certification Blocker Threshold** before declaring any new `BLOCKED-PLATFORM` condition.
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
24. Verify installed instance state separately from Source/Build evidence.
25. Update traceability, test, manual-configuration, capability-certification, and measurement documentation when implementation status changes.
26. Report progress using:
    - acceptance gates passed / total
    - remaining gates
    - open functional defects
    - native configuration changes
    - installs performed
    - architecture changes
    - new capability investigations
27. Close the milestone only when all defined runtime/security gates pass or a blocker satisfies the Post-Certification Blocker Threshold.

For planning-only requests, stop after the plan and do not modify files.

---

## 14. Prohibited Actions

Do not:

- Change scope name
- Create replacement request or task tables
- Create a custom signature system
- Create a custom authentication mechanism
- Store SSNs or real sensitive data
- Use production employee records in PDI
- Use production data, SSNs, or sensitive PII in PDI testing
- Hard-code sys_ids
- Grant broad cross-scope privileges
- Grant broad repository access to fulfillers or Operations Managers
- Attach PDFs to notifications
- Add delegated or bulk submission
- Add external provisioning integrations
- Delete historical authorization records
- Use `install --reinstall` unless the user explicitly approves exact reconciliation
- Use `--reinstall` as a normal deployment workaround
- Modify unrelated working artifacts during defect correction
- install to the PDI without explicit approval
- repeat full C0 capability certification for C1-C3 when the certified assumptions remain unchanged
- rerun a PASS runtime gate without a documented reason that a later change could affect it
- run the full regression suite after each localized defect
- install one ordinary defect at a time when multiple detectable defects can be batched
- Do not create diagnostic or remediation subpackages for ordinary implementation/configuration/tooling defects
- Do not repeatedly test variants of the same failing API family
- Do not convert a tooling/deployment failure into a platform-capability conclusion
- Do not recommend ServiceNow support as the resolution for a PDI-specific development/configuration issue
- Do not block PDI completion solely because live metadata cannot be perfectly reconciled to generated physical sys_ids
- Do not require an additional install solely for source-provenance symmetry when supported native configuration already establishes the intended live behavior
- use the historical `b0d63cedc2d34e0ca4c05d6eb7acf61e` / `feature/05-fulfillment-orchestration` workspace for V2 Pull, Sync, Build, or Install
- proceed with any IDE operation when the Mandatory ServiceNow IDE Workspace Identity Gate does not pass

---

## 15. Planning Response Format

When asked to plan a wave, respond with:

1. Objective
2. Requirements addressed
3. Files to create or modify
4. Fluent APIs or SDK features
5. Native tables and dependencies
6. Cross-scope privileges
7. Implementation sequence
8. Tests
9. Manual PDI steps
10. Risks and assumptions

Do not modify files during a planning-only request.

---

## 16. Completion Criteria

A task is complete only when:

- Source changes are scoped to the approved work.
- Required native capabilities are certified and no required capability remains `UNKNOWN`.
- The approved architecture remains frozen unless a documented blocker meets the Post-Certification Blocker Threshold.
- The project-pinned SDK build succeeds.
- No prohibited architecture was introduced.
- Git diff and generated-key changes have been reviewed.
- Traceability, test, capability-certification, and measurement documentation are updated.
- Tests are added or updated.
- Manual configuration is documented.
- Supported native PDI configuration is acceptable completion evidence where SDK/IDE deployment is unreliable, provided source/runtime parity and the exact existing records changed are documented.
- When the task includes deployment/runtime behavior, installation and instance verification are completed and recorded separately from Source/Build evidence.
- Remaining limitations are stated clearly.
- Ordinary defects discovered during the milestone have been resolved and retested rather than deferred into micro-packages.
- Deployment activity was limited to what was necessary to establish and verify the approved runtime behavior; unnecessary speculative installs were avoided.
- Full regression was run once at closeout rather than repeatedly during localized remediation.
- Passed acceptance gates were not unnecessarily repeated.
- Every IDE Pull/Sync/Build/Install used the authorized V2 workspace and passed the workspace identity gate immediately before the operation.
