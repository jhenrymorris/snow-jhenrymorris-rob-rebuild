# CLAUDE.md
## HR Access ROB Authorization — Claude Code Project Instructions

You are working in a ServiceNow Australia scoped-application repository that uses the ServiceNow SDK, Fluent, TypeScript, Git, and native HRSD configuration.

Follow this file for every Claude Code session.

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

- Application: `HR Access ROB Authorization`
- Platform: ServiceNow Australia
- App type: Scoped
- PDI authentication alias: `rob-pdi`
- SDK baseline: `4.8.1`
- Scope: `x_2108496_hr_acces` (preserve the value in `now.config.json`)
- MVP: self-submission only

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

If a requirement cannot be implemented with supported SDK or native metadata, stop and document the exact manual configuration needed. Do not invent substitute architecture.

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

For each request:

1. Read project documentation.
2. Inspect Git status and existing files.
3. Use ServiceNow SDK skill guidance.
4. Query the PDI read-only when exact schema is needed.
5. Plan before substantial edits.
6. Implement only the approved wave.
7. Run the SDK build.
8. Fix build errors without changing approved architecture.
9. Review the diff.
10. Update traceability and tests.
11. Report manual configuration still required.
12. Wait for explicit approval before PDI installation.

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

- SDK build succeeds.
- Architecture constraints remain intact.
- The Git diff is reviewed.
- Traceability is updated.
- Tests are added or updated.
- Manual PDI work is documented.
- Remaining limitations are clearly identified.
