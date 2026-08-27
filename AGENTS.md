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

When SDK support is incomplete, create only supported scaffolding and update `docs/MANUAL-CONFIGURATION.md` with exact remaining steps.

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

1. Read the required repository documentation.
2. Inspect existing files, current Git status, current branch, and the project-pinned SDK version.
3. Review current official ServiceNow **Australia** documentation for every native feature used by the proposed solution.
4. Review current SDK/Fluent guidance and installed SDK types for SDK-managed artifacts.
5. Complete or update `docs/AUSTRALIA-CAPABILITY-CERTIFICATION.md`.
6. Classify every required capability as `DOCUMENTED-SUPPORTED`, `PDI-PROVEN`, `SUPPORTED-WITH-CONSTRAINT`, `UNSUPPORTED`, or `UNKNOWN`.
7. Execute one minimal isolated synthetic proof for every required `UNKNOWN` that documentation cannot resolve.
8. Resolve every `UNSUPPORTED` capability architecturally before implementation.
9. Do not approve an implementation plan while any required capability remains `UNKNOWN`.
10. Obtain architecture approval when required, then freeze the milestone architecture.
11. Prepare one complete milestone implementation plan.
12. Implement the approved milestone once; do not split ordinary defects into micro-packages.
13. Query the PDI read-only whenever exact schema, table ownership, sys_id, caller-access, plugin, role, or installed-state information is needed.
14. Run focused tests and the SDK build.
15. Fix build, implementation, configuration, integration, and test-data defects without redesigning certified architecture.
16. If an integrated runtime failure occurs, apply the **Post-Certification Blocker Threshold** before using `BLOCKED-PLATFORM`.
17. Run the complete milestone acceptance suite, not just the test that previously failed.
18. Review `git diff`, `git diff --check`, generated-key changes, and scope/count assertions.
19. Summarize:
    - files changed
    - artifacts created or modified
    - capability certifications used
    - build result
    - tests and runtime scenarios run
    - manual PDI work remaining
    - security/cross-scope changes
    - known risks
20. Do not install until the user has reviewed the diff and explicitly authorized installation.
21. After authorized installation, verify installed instance state separately from Source/Build evidence.
22. Update traceability, test, manual-configuration, capability-certification, and measurement documentation when implementation status changes.
23. Close the milestone only when its defined runtime/security acceptance criteria are met or a blocker satisfies the Post-Certification Blocker Threshold.

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
- When the task includes deployment/runtime behavior, installation and instance verification are completed and recorded separately from Source/Build evidence.
- Remaining limitations are stated clearly.
- Ordinary defects discovered during the milestone have been resolved and retested rather than deferred into micro-packages.
