# Architecture
## HR Access ROB Authorization

## 1. Summary

The solution is a scoped application that extends HRSD rather than replacing it.

### Native operational records

- Parent request: `sn_hr_core_case`
- Work records: `sn_hr_core_task`

### Custom governed records

1. ROB Configuration
2. ROB Access Item Reference
3. ROB Authorization Form
4. Authorized Access Detail

### Orchestration

- Flow Designer flows and subflows
- Reusable server-side decision services
- Native HRSD approvals and tasks
- Native HR e-signature and document capabilities
- Daily renewal/lapse flow
- ATF and manual tests

## 2. Principles

1. Native first
2. Separate request from authorization artifact
3. Reference-driven access items
4. Configuration-driven rules
5. Deterministic, reusable decision services
6. Minimal custom scripting
7. Historical preservation
8. Least privilege
9. Idempotent processing
10. Source-controlled metadata

## 3. Logical Model

```text
Employee Center
    |
    v
Native HR Service / Intake
    |
    v
sn_hr_core_case
    |
    +--> Determine ROB Authorization Path
    |       +--> ROB Configuration
    |       +--> ROB Access Item Reference
    |       +--> ROB Authorization Form
    |       +--> Authorized Access Detail
    |
    +--> Employee Signature
    +--> Supervisor Approval + Signature
    +--> Signed PDF
    +--> Fulfillment Gate
            +--> Staffing HR Task
            +--> Analytics HR Task
            +--> OM ARM Role Assignment HR Task
            +--> Exception Review HR Task
```

## 4. Custom Table Responsibilities

### ROB Configuration

Stores:

- Current accepted form version
- Annual recertification date
- Grace-window days
- Reminder intervals
- Default assignment groups
- Lapse behavior

### ROB Access Item Reference

Stores requestable access items and routing flags. Starter records:

- FPPS / WTTS
- eOPF
- USA Staffing
- OAS/DataMart
- Human Capital Reports
- Workforce Profile Charts

For Workforce Profile Charts:

- Provisioning system = ARM
- Target system = OAS

### ROB Authorization Form

Stores:

- Subject and employment snapshot
- Form version and dates
- Employee signature evidence
- Supervisor approval/signature evidence
- Status and supersession
- Signed PDF attachment
- Reminder/lapse history

### Authorized Access Detail

Stores one governed authorization-scope record per access item. It is not a request line and supports:

- Coverage comparison
- Amendment delta
- Routing snapshots
- Fulfillment status
- Audit reporting

## 5. Decision-Service Structure

```text
src/server/authorization/
├── AuthorizationRepository.ts
├── AccessComparisonService.ts
├── AuthorizationDecisionService.ts
├── ExpirationDateService.ts
├── DuplicateRequestService.ts
└── types.ts
```

Responsibilities:

- Repository: query records only
- Comparison service: covered/uncovered access items
- Decision service: choose request path and signature requirements
- Expiration service: annual date, grace rule, earlier access end date
- Duplicate service: identify substantially similar open cases

## 6. Flow Model

### Intake flow

1. Trigger on valid ROB HR case.
2. Read request values.
3. Call decision subflow/service.
4. Retain requested access on the native HR Case without creating Authorization Forms or Authorized Access Details.
5. Update the case decision outcome.
6. Stop before signature processing.

### Authorization lifecycle flow

1. In Wave 4, create an Authorization Form and governed Authorized Access Details for New, Amendment, or Renewal only.
2. Route employee signature.
3. Route supervisor approval and signature.
4. Handle denial.
5. Generate signed PDF.
6. Activate authorization.
7. Open fulfillment gate.

Reuse links the current case to the existing Authorization Form, creates no new form or detail records, and preserves the existing employee signature and signed PDF.

### Fulfillment flow

1. Confirm gate.
2. Group items by team.
3. Create required HR tasks once.
4. Monitor child tasks.
5. Update access-detail status.
6. Close parent only after all required work is complete or properly waived.

### Renewal/lapse flow

1. Run daily.
2. Read configuration.
3. Identify reminder candidates.
4. Prevent duplicates.
5. Identify expired authorizations without active replacements.
6. Update status and send privacy-safe notice.

## 7. SDK vs Native Configuration

### SDK-managed

- Custom tables and fields
- Roles and ACLs
- Cross-scope privileges
- Seed records
- Reusable logic
- Supported flows/subflows
- Notifications, reports, and ATF metadata
- Application modules

### Native/manual finalization

- HR services and COE configuration
- Employee Center placement
- HR case/task templates
- current Australia-supported electronic signature capability
- current Document Templates and PDF mapping
- Visual flow review
- Attachment and impersonation testing
- Dashboard presentation refinements

## 8. Deployment Rules

- Build before install.
- Review Git diff before install.
- Synchronize instance changes before later installs.
- Do not define the same metadata independently in Fluent and XML.
- Avoid reinstall unless exact reconciliation is intended.
- Do not use `--reinstall` as a normal deployment workaround.
- Tag validated waves.
- Use only synthetic PDI data.

## 9. R2 Option B — HR Core-owned Snapshot Population

The platform owner has approved Option B as the target architecture for Wave 2
request-time profile snapshots. Native-case ownership remains unchanged:

- Staffing intake creates `sn_hr_core_case_payroll`.
- Analytics intake creates `sn_hr_core_case_workforce_admin`.
- Position, Organization / DIR-DIV, and Supervisor snapshots remain
  application-owned fields on those native subclasses.

Population responsibility belongs to HR Core. An HR Core-owned controlled
mechanism shall operate within the HR Core application boundary, derive values
from the authenticated/request subject and authoritative profile data, populate
the three approved fields at case creation or the earliest safe server-side
lifecycle point, prevent client values from becoming authoritative, and
preserve case auditability. It shall expose no general-purpose write interface
to the HR Access scope and shall require no broad cross-scope API privilege.

The exact HR Core artifact remains an agency platform-owner implementation
decision. Candidate mechanisms for evaluation include an HR Core-owned Business
Rule, Script Include or controlled API, Flow/Action, case-creation enrichment,
or another approved native HRSD mechanism. None is represented as implemented.

R2 status remains **BLOCKED-PDI / architecture dependency resolved via Option
B**. Production acceptance requires agency implementation and runtime proof on
both subclasses. Wave 3 progression requires separate authorization while R2
remains blocked.
