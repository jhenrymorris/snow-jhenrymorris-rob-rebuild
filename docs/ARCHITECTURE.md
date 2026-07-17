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
- Human Capital Data Access
- Report Access
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

Stores one record per access item and supports:

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
4. Create missing Requested access-detail records.
5. Snapshot routing values.
6. Update case outcome.
7. Stop before signature processing.

### Authorization lifecycle flow

1. Create Authorization Form when needed.
2. Route employee signature.
3. Route supervisor approval and signature.
4. Handle denial.
5. Generate signed PDF.
6. Activate authorization.
7. Open fulfillment gate.

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
- HR e-signature
- HR document template and PDF mapping
- Visual flow review
- Attachment and impersonation testing
- Dashboard presentation refinements

## 8. Deployment Rules

- Build before install.
- Review Git diff before install.
- Synchronize instance changes before later installs.
- Do not define the same metadata independently in Fluent and XML.
- Avoid reinstall unless exact reconciliation is intended.
- Tag validated waves.
- Use only synthetic PDI data.
