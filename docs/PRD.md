# Product Requirements Document
## HR Access ROB Authorization — ServiceNow HRSD MVP

**Target platform:** ServiceNow Australia release  
**Implementation model:** ServiceNow SDK + Fluent + native HRSD configuration  
**Application name:** HR Access ROB Authorization  
**MVP submission model:** Self-submission only

## 1. Purpose

The application manages requests for HR systems, human capital data, reports, and Workforce Profile Charts. It preserves a governed Rules of Behavior authorization artifact for each subject person while using native HRSD cases and native HR tasks for operational processing.

## 2. Goals

- Provide Employee Center entry points for Staffing and Analytics requests.
- Use `sn_hr_core_case` as the parent operational record.
- Use `sn_hr_core_task` for Staffing, Analytics, Operations Manager, and exception work.
- Support new, reuse, amendment, renewal, obsolete-version, revoked, and exception paths.
- Require employee e-signature for new, renewal, and amendment.
- Require supervisor approval and e-signature before fulfillment.
- Generate one signed PDF and retain it on the authorization record.
- Automate annual recertification reminders and lapse tracking.
- Protect signed forms and avoid storing SSNs or unnecessary sensitive PII.
- Keep routing, form version, dates, reminders, and groups configurable.

## 3. Scope

### In scope

- Request Access to HR Systems
- Request Access to HR Data and Reports
- Self-submission
- Native HRSD case creation
- Native HR task creation
- Authorization lookup and access comparison
- Employee and supervisor electronic signatures
- Supervisor approval
- Signed PDF generation
- Staffing, Analytics, and Operations Manager tasking
- Annual recertification and reminders
- Lapse notifications and worklists
- Reports, dashboards, ACLs, auditing, and tests

### Out of scope for MVP

- Delegated or on-behalf-of submission
- Organization-level bulk submission
- Direct provisioning or deprovisioning integrations
- ARM, OAS, FPPS/WTTS, eOPF, or USA Staffing API integrations
- Custom authentication or custom signature framework
- Production data migration
- Production retention-policy changes

## 4. Users and Roles

| Role | Responsibilities |
|---|---|
| Requester / Subject | Submits own request and completes employee signature when required |
| Supervisor | Reviews, approves, and signs |
| Staffing Fulfiller | Processes HR systems work |
| Analytics Fulfiller | Processes data/report work |
| Operations Manager | Completes ARM role-assignment task for Workforce Profile Charts |
| Compliance Viewer | Retrieves current and historical authorization evidence |
| ROB Administrator | Maintains configuration, reference data, and app setup |

Application roles:

- `rob_staffing_fulfiller`
- `rob_analytics_fulfiller`
- `rob_operations_manager`
- `rob_compliance_viewer`
- `rob_admin`

Requesters and subjects use native HRSD access behavior.

## 5. Required Architecture

1. Native HRSD case remains the parent request.
2. Native HR task remains the fulfillment and exception record.
3. No custom request table is permitted.
4. No custom task table is permitted.
5. Custom tables are limited to:
   - ROB Configuration
   - ROB Access Item Reference
   - ROB Authorization Form
   - Authorized Access Detail
6. Access items are reference-driven.
7. Routing and date rules are configuration-driven.
8. One authoritative date/time field is used for each signature.
9. The signed PDF is stored only on the ROB Authorization Form.
10. ARM and OAS remain separate.
11. External provisioning is notify-and-track only.
12. No SSN field is permitted.

## 6. Functional Requirements

| ID | Requirement |
|---|---|
| FR-1 | HR systems request is available from Staffing. |
| FR-2 | HR data/report request is available from Analytics. |
| FR-3 | Capture subject, requester, supervisor, title, organization, employment type, access end date when applicable, access items, justification, and Operations Manager when needed. |
| FR-4 | MVP permits self-submission only. |
| FR-5 | Search for relevant authorization records. |
| FR-6 | Compare requested access with active Authorized Access Detail records. |
| FR-7 | Expired or lapsed authorization requires renewal. |
| FR-8 | Obsolete form version requires renewal/replacement. |
| FR-9 | Partial coverage requires amendment for the uncovered delta. |
| FR-10 | New, renewal, and amendment require employee e-signature. |
| FR-11 | Supervisor approval and supervisor signature are both required before fulfillment. |
| FR-12 | HR systems access creates Staffing work. |
| FR-13 | Data/report access creates Analytics work. |
| FR-14 | Mixed requests create separate Staffing and Analytics tasks. |
| FR-15 | Workforce Profile Charts create Analytics and Operations Manager tasks. |
| FR-16 | OM completion evidence is captured before closure. |
| FR-17 | Each request links to the exact authorization used. |
| FR-18 | Reporting supports team, status, organization, access item, supervisor, date, renewal, and aging. |
| FR-19 | Generate a signed PDF with policy text, request data, signature identities/timestamps, form version, dates, and authorization number. |
| FR-20 | Employee-signature task is assigned to the subject. |
| FR-21 | Normal active forms use the shared annual recertification date. |
| FR-22 | Forms signed inside the grace window receive the following cycle's expiration date. |
| FR-23 | Daily scheduled processing sends configured reminders and prevents duplicates. |
| FR-24 | Lapsed subjects are notified and appear on the expired/not-renewed worklist. |

## 7. Decision Outcomes

| Condition | Request Path | Employee Signature | Supervisor Approval + Signature |
|---|---|---:|---:|
| No prior authorization | New Authorization | Yes | Yes |
| Active/current/fully covered | Reuse Existing Authorization | No | Yes |
| Active/partially covered | Amendment | Yes | Yes |
| Expired or lapsed | Renewal | Yes | Yes |
| Obsolete form version | Renewal | Yes | Yes |
| Revoked | New Authorization | Yes | Yes |
| Material role or organization change | Amendment | Yes | Yes |
| Missing supervisor | Exception Review | Stop | Stop |
| Missing required end date | Exception Review | Stop | Stop |
| Duplicate open request | Exception Review | No duplicate work | No duplicate work |

## 8. Security and Privacy

- No SSN or unnecessary sensitive PII.
- Signed PDFs are protected by the same or stronger access rules as their parent authorization.
- Fulfillers receive contextual access only.
- Operations Managers cannot browse the authorization repository.
- Signature and approval evidence is system-managed.
- Notifications exclude signed PDFs, business justification, signature content, and sensitive PII.

## 9. Acceptance Summary

The MVP is accepted when:

- Both intake paths create native HRSD cases.
- Self-submission is enforced.
- All authorization paths behave correctly.
- Partial access produces an amendment delta.
- Fulfillment is blocked until required approval and signatures are complete.
- The PDF is generated once and protected.
- Team and OM tasks route correctly.
- Renewal and lapse processing is idempotent.
- Reports support operational and audit needs.
- No prohibited PII fields exist.
