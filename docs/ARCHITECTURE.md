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

## 10. Conditional R3 Decision Engine

R3 is a deterministic, side-effect-free source layer with separate
authorization selection/scope comparison, expiration calculation, and decision
selection components. It returns exactly New, Reuse, Amendment, Renewal, or
Exception Review and creates no Authorization Form, Authorized Access Detail,
signature, approval, PDF, or fulfillment artifact.

The engine consumes normalized authoritative inputs. No runtime Business Rule
is activated by the conditional source/unit package. Approved read-only
decision-output fields are defined on both native case subclasses for later
controlled persistence.

Open policy mappings `DEC-MAP-01`, `DEC-MAP-02`, and `DEC-MAP-03` are not
inferred. An unresolved material-change or annual-renewal disposition returns a
controlled Exception. Synthetic snapshot fixtures do not resolve
`R2-AGENCY-01`.

## 11. R4 Post-Signature Finalization

The native ServiceNow Sign execution is the authoritative evidence for employee
identity/time, supervisor identity, the explicit supervisor outcome, supervisor
signature time, and refusal. After the employee stage and an APPROVED supervisor
stage are both committed, an HR Core/Document Templates-owned finalization step
rereads that native evidence and generates a distinct completed Form 1768 PDF.

The final PDF is derived output, not a replacement for the native signing
execution. `Final Authorization Date` is the local calendar date of the persisted
Supervisor Signature Date/Time. Employee Signature Date/Time, Supervisor
Signature Date/Time, and PDF Generated Date/Time remain distinct. A refused or
incomplete execution is not eligible for finalization. Production R4 must attach
the final PDF only to the governed Authorization Form; the R4.2.2 capability
proof used the completed supervisor Document Task as its synthetic native source.

Australia runtime proof established this mechanism inside the Document Templates
execution boundary without an HR Access cross-scope write/API privilege. It does
not close `R2-AGENCY-01` and does not itself implement the production lifecycle.

## R4.3 production lifecycle checkpoint

R4.3 adds a source-first lifecycle foundation for New, Amendment, and Renewal:
decision-context validation, idempotent Authorization Form and complete-scope
Access Detail preparation, committed native signer-evidence capture, denial,
post-signature PDF gating, activation, and deferred predecessor supersession.
Reuse still creates no form or detail. The two case initiation rules remain
inactive until the production native templates, launch/finalization handoff, and
Reuse request-level attestation contract are configured and runtime-validated.
No Wave 5 task or provisioning behavior is present.

### R4.3.1 production native-template checkpoint

The Class C production template `ROB Form 1768 Authorization` is configured and
published in Australia as `sn_doc_pdf_template`
`f99c3c0ac372031068a35f2b2b013138`. It has the ordered Employee and Supervisor
participants, 26 governed body mappings, and two signature blocks. The six
access-item mappings use stable internal access values; ARM is not a requested
access option. The template is not bound directly to Employee Center intake.

Controlled lifecycle execution remains blocked in this PDI. R3 decision fields
can be seeded on a synthetic native case, but the three mandatory snapshot
fields remain dictionary read-only and cannot be populated through the native
form/list path. An exact temporary `rob_admin` grant did not weaken or bypass
that dictionary boundary and was removed. Global script, broad cross-scope, or
ACL-bypass fixture injection is not an approved substitute for
`R2-AGENCY-01`. Therefore `R4-RUNTIME-01` remains open and both lifecycle
initiation rules remain inactive.
