# Appendix A — Requirements Traceability Matrix
## HR Access Rules of Behavior Authorization

**Parent Document:** HR Access Rules of Behavior Authorization — Product Requirements Document
**PRD Version:** 1.0
**RTM Version:** 1.0 Draft
**Platform:** ServiceNow HRSD — Australia Release
**Application:** HR Access ROB Authorization
**Application Scope:** `x_2108496_hr_acces`
**Development Baseline:** ServiceNow SDK 4.8.1 + Codex

---

# 1. Purpose

This Requirements Traceability Matrix (RTM) provides end-to-end traceability between:

**Business Need → Product Requirement → Functional / Security / Reporting Requirement → ServiceNow Capability → Delivery Wave → Verification → Acceptance Evidence**

The RTM is a controlled companion to the Product Requirements Document (PRD).

Its objectives are to:

1. preserve the identifiers from the approved requirements package;
2. distinguish MVP requirements from deferred capabilities;
3. map requirements to the approved ServiceNow SDK Waves 1–8;
4. identify the principal ServiceNow implementation component;
5. define how each requirement must be verified;
6. prevent source generation or configuration from being mistaken for successful runtime implementation;
7. provide the basis for `docs/TRACEABILITY.md` and `docs/TEST-MATRIX.md`;
8. support Codex task generation without allowing Codex to reinterpret product requirements.

The original requirements package defines 14 Business Requirements, 24 Functional Requirements, 10 Exception Requirements, 8 Reporting Requirements, 5 Security Requirements, 3 Audit Requirements, 1 Retention Requirement, and 24 Acceptance Criteria.
---

# 2. Traceability Status Values

| Status | Meaning |
|---|---|
| **MVP** | Required for the PDI MVP and subsequent production candidate. |
| **MVP Subset** | Only the explicitly defined subset is in MVP. |
| **Deferred** | Requirement is preserved but intentionally not implemented in the MVP. |
| **Supporting** | Implemented as infrastructure supporting one or more MVP capabilities. |
| **Future / Conditional** | Activated only after a separate product or architecture decision. |

---

# 3. Verification Evidence Types

Every requirement shall ultimately reference one or more of the following evidence types.

| Evidence Code | Evidence Type | Description |
|---|---|---|
| **SRC** | Source Review | SDK source or transformed metadata reviewed. |
| **BLD** | Build | Standard and frozen-key SDK builds pass. |
| **INS** | Installation | Metadata installs successfully in the PDI/environment. |
| **RUN** | Runtime | Installed functionality behaves correctly. |
| **ATF** | Automated Test Framework | Deterministic ServiceNow test automated where appropriate. |
| **MAN** | Manual Functional Test | Human validation where automation is unsuitable. |
| **NEG** | Negative-Path Test | Prohibited or exception behavior verified. |
| **SEC** | Security Test | ACL, impersonation, attachment, or field-security validation. |
| **RPT** | Report Reconciliation | Report output reconciled against controlled source data. |
| **DOC** | Artifact Inspection | PDF/document/signature output inspected. |
| **UAT** | User Acceptance Testing | Business users validate required end-to-end behavior. |
| **REL** | Release Evidence | Clean install, deployment, rollback, or release-gate evidence. |

**Rule:** SRC and BLD evidence alone cannot satisfy a requirement that specifies runtime behavior.

---

# 4. Delivery-Wave Traceability

| Wave | Capability | Primary Requirement Coverage |
|---|---|---|
| **Wave 1** | Data Foundation | Supporting FR-3, FR-5–FR-9, FR-17–FR-24; SEC-4–SEC-5; AUD-1–AUD-3 |
| **Wave 2** | HRSD Intake and Native Case/Task Support | BR-1–BR-4 MVP subset; FR-1–FR-4; AC-1, AC-2, AC-24 |
| **Wave 3** | Authorization Decision Engine | BR-7–BR-8; FR-5–FR-9; FR-21–FR-22; AC-3–AC-6, AC-21 |
| **Wave 4** | Approval, Document Templates, E-Signature, PDF | BR-5–BR-6; FR-10–FR-11, FR-17, FR-19–FR-20; AC-7, AC-18–AC-20 |
| **Wave 5** | Fulfillment Orchestration | BR-9–BR-12; FR-12–FR-16; AC-8–AC-12 |
| **Wave 6** | Renewal, Expiration, Lapse | FR-21–FR-24; RPT-5, RPT-8; AC-16, AC-21–AC-23 |
| **Wave 7** | Security, Audit, Notifications | BR-13–BR-14; SEC-1–SEC-5; AUD-1–AUD-3; RET-1; AC-13, AC-14, AC-17, AC-24 |
| **Wave 8** | Reporting, ATF, UAT, Release | FR-18; RPT-1–RPT-8; AC-1–AC-24 final evidence |

Wave 1 may establish supporting fields or structures for later requirements without activating the associated business process.

---

# 5. Business Requirements Traceability

| ID | Business Requirement Summary | Supporting Requirements | PRD Capability | Wave | MVP Status | Principal Verification |
|---|---|---|---|---:|---|---|
| **BR-1** | Provide employee-facing HR systems and HR data/report request options through Employee Center. | FR-1, FR-2, FR-3 | Employee Center Experience | 2 | MVP | RUN, ATF/MAN, UAT |
| **BR-2** | HR Systems Access shall be accessible from Staffing. | FR-1, FR-3 | Staffing Intake | 2 | MVP | RUN, ATF/MAN |
| **BR-3** | HR Data and Report Access shall be accessible from Analytics. | FR-2, FR-3 | Analytics Intake | 2 | MVP | RUN, ATF/MAN |
| **BR-4** | Support self-submission and preserve future delegated/per-subject authorization model. | FR-4, FR-20, FR-18 | Submission Model | 2 / Future | **MVP Subset** | NEG, RUN, future UAT |
| **BR-5** | Require supervisor review, approval, and electronic signature before fulfillment. | FR-11 | Approval & Signature | 4 | MVP | RUN, NEG, MAN |
| **BR-6** | Capture electronic signatures and retain signed ROB forms and approval history. | FR-10, FR-11, FR-17, FR-19, SEC-1, AUD-1, AUD-2 | Authorization Artifact | 4 / 7 | MVP | MAN, DOC, SEC |
| **BR-7** | Determine whether a valid signed authorization already exists. | FR-5 | Decision Engine | 3 | MVP | ATF, RUN |
| **BR-8** | Determine whether an existing form requires renewal, supersession, or amendment. | FR-6–FR-9, FR-21, FR-22 | Decision Engine | 3 | MVP | ATF, RUN, NEG |
| **BR-9** | Route HR systems access to Staffing. | FR-12 | Staffing Fulfillment | 5 | MVP | ATF/RUN |
| **BR-10** | Route human-capital data/report/WPC requests to Analytics. | FR-13 | Analytics Fulfillment | 5 | MVP | ATF/RUN |
| **BR-11** | Require OM action for Workforce Profile Chart ARM assignment after approval. | FR-15, FR-16 | WPC Fulfillment | 5 | MVP | ATF/RUN, MAN |
| **BR-12** | Provide separate Staffing and Analytics workload visibility. | FR-18, RPT-1, RPT-2 | Reporting | 8 | MVP | RPT, SEC, UAT |
| **BR-13** | Permit authorized retrieval of signed forms by individual and organization. | AUD-3, RPT-6 | Audit Retrieval | 7 / 8 | MVP | SEC, RUN, RPT |
| **BR-14** | Avoid exposing sensitive content and do not store sensitive PII. | SEC-3, SEC-5 | Privacy & Security | 2 / 7 | MVP | SEC, NEG, data inspection |

## 5.1 BR-4 MVP Interpretation

BR-4 remains traceable to the source requirement, but the approved MVP implementation is limited to **self-submission**.

For MVP:

- requester = logged-in employee;
- subject = logged-in employee;
- another employee cannot be selected;
- no delegated or organization-level intake is exposed.

The future delegated model remains documented so that, if later approved:

- authorization remains per subject person;
- the requester cannot sign for the subject;
- signature and approval route independently for each subject.

This constitutes a **scope deferral, not deletion of the requirement**.

---

# 6. Functional Requirements Traceability

| ID | Functional Requirement | Primary Product Capability | Wave | MVP Status | Primary Acceptance Link | Verification |
|---|---|---|---:|---|---|---|
| **FR-1** | Create HR Systems Access request associated with Staffing. | Intake | 2 | MVP | AC-1 | RUN, ATF/MAN |
| **FR-2** | Create HR Data Access request associated with Analytics. | Intake | 2 | MVP | AC-2 | RUN, ATF/MAN |
| **FR-3** | Capture subject, requester, position, DIR/DIV, supervisor, requested access, business justification, employment type, and applicable end date. | Intake / Data | 1 supporting / 2 active | MVP | AC-1, AC-2, AC-24 | RUN, NEG |
| **FR-4** | Support per-subject delegated processing, while limiting MVP to self-submission. | Submission Model | 2 | **MVP Subset** | — | NEG for MVP; future test for delegated path |
| **FR-5** | Search for active authorization for subject. | Authorization Lookup | 3 | MVP | AC-3, AC-4, AC-6 | ATF, RUN |
| **FR-6** | Compare requested access with active authorized access; identify uncovered delta. | Access Comparison | 3 | MVP | AC-4, AC-5 | ATF |
| **FR-7** | Require renewal before fulfillment when expired/due. | Renewal Decision | 3 / 4 | MVP | AC-6 | ATF, NEG |
| **FR-8** | Detect obsolete form version using configurable current accepted version. | Version Control | 3 | MVP | AC-6 | ATF |
| **FR-9** | Require amendment when existing authorization does not cover requested access. | Amendment Decision | 3 / 4 | MVP | AC-5 | ATF, RUN |
| **FR-10** | Collect employee in-system electronic signature for New/Renewal/Amendment. | E-Signature | 4 | MVP | AC-19 | MAN, DOC |
| **FR-11** | Require supervisor approval and electronic signature before fulfillment. | Approval & E-Signature | 4 | MVP | AC-7, AC-19 | NEG, MAN |
| **FR-12** | Create/assign Staffing fulfillment task for approved HR systems access. | Fulfillment | 5 | MVP | AC-8 | ATF/RUN |
| **FR-13** | Create/assign Analytics fulfillment task for approved data/report access. | Fulfillment | 5 | MVP | AC-9 | ATF/RUN |
| **FR-14** | Create separate Staffing and Analytics tasks under one parent for mixed requests. | Split Fulfillment | 5 | MVP | AC-10 | ATF/RUN |
| **FR-15** | Create tracked OM task/notification for WPC ARM assignment after supervisor approval. | WPC | 5 | MVP | AC-11 | ATF/RUN |
| **FR-16** | Capture OM completion evidence before closure. | WPC | 5 | MVP | AC-12 | RUN, NEG |
| **FR-17** | Link exact signed form version to request and authorization detail. | Audit Linkage | 4 / 7 | MVP | AC-18 | RUN, DOC |
| **FR-18** | Support reporting by team, status, DIR/DIV, access type, supervisor, date, renewal status. | Reporting | 8 | MVP | AC-15, AC-16 | RPT, SEC |
| **FR-19** | Generate completed, downloadable signed Rules of Behavior PDF. | Document Generation | 4 | MVP | AC-20 | DOC, MAN |
| **FR-20** | When requester differs from subject, route employee signature to subject. | Delegated Signature Routing | Future | **Deferred** | — | Future UAT |
| **FR-21** | Assign agency-wide authorization expiration aligned to annual recertification. | Expiration | 3 / 6 | MVP | AC-16, AC-21 | ATF |
| **FR-22** | Apply configurable mid-cycle grace rule; default 90 days. | Expiration | 3 / 6 | MVP | AC-21 | ATF |
| **FR-23** | Daily scheduled process updates expiration and sends 90/60/30 reminders and lapse notice. | Renewal Automation | 6 | MVP | AC-22, AC-23 | ATF/RUN |
| **FR-24** | Notify subject and set lapsed/expired status when renewal is not approved. | Lapse Management | 6 | MVP | AC-23 | ATF/RUN |

---

# 7. Functional Decision-State Traceability

The following state/decision model shall be treated as controlling for implementation.

| Decision Path | New Authorization Form | Employee Signature | Supervisor Approval + Signature | Access Detail Treatment | Principal Requirements |
|---|---:|---:|---:|---|---|
| **New** | Yes | Yes | Yes | Create detail for each requested approved item | FR-5, FR-10, FR-11 |
| **Reuse** | No | No | Yes | Do not duplicate existing details; case links exact existing form | FR-5, FR-6, FR-11, FR-17 |
| **Amendment** | Yes | Yes | Yes | Carry forward covered scope and add approved delta | FR-6, FR-9, FR-10, FR-11 |
| **Renewal** | Yes | Yes | Yes | Carry complete approved scope forward and apply approved changes | FR-7, FR-8, FR-10, FR-11 |
| **Revoked Prior Form** | Yes — New path | Yes | Yes | Do not reactivate revoked details | FR-5, FR-10, FR-11 |
| **Exception Review** | No until corrected | No | No | No authorization detail creation | EX-series |

**Critical rule:** Authorized Access Detail is an authorization-scope record. It shall not be treated as a manually entered request line.

---

# 8. Exception Requirements Traceability

| ID | Exception | Required Product Behavior | Primary Wave | Related Requirements | Verification |
|---|---|---|---:|---|---|
| **EX-1** | Supervisor missing/inaccurate | Route for correction before approval; do not bypass supervisor control. | 2 / 3 | FR-3, FR-11 | NEG, RUN |
| **EX-2** | Supervisor denies | Notify appropriately; close denied; create no fulfillment. | 4 | FR-11, FR-12–FR-16 | NEG, RUN |
| **EX-3** | Operations Manager missing | Route WPC request to Analytics/Exception Review for OM resolution. | 2 / 5 | FR-15, FR-16 | NEG, RUN |
| **EX-4** | Active form tied to materially changed organization/role | Require review and Amendment when applicable. | 3 | FR-6, FR-9 | ATF |
| **EX-5** | Time-limited access missing end date | Block submission/progression or route for correction. | 2 / 3 | FR-3, FR-21 | NEG |
| **EX-6** | Duplicate open request | Detect duplicate; prevent duplicate lifecycle work and surface existing case. | 3 | Decision Engine | ATF, NEG |
| **EX-7** | Mixed request | Create team-specific tasks under one parent. | 5 | FR-14 | ATF |
| **EX-8** | Electronic signature incomplete | Keep pending; prohibit fulfillment. | 4 | FR-10, FR-11 | NEG |
| **EX-9** | OM action overdue | Escalate without incorrectly completing or closing request. | 5 | FR-15, FR-16 | ATF/RUN |
| **EX-10** | Request withdrawn | Close withdrawn and retain applicable history. | 5 / 7 | AUD-2, RET-1 | RUN, audit inspection |

---

# 9. Reporting Requirements Traceability

| ID | Report / Dashboard | Audience | Principal Source | Wave | Related Requirements | Verification |
|---|---|---|---|---:|---|---|
| **RPT-1** | Staffing Workload Dashboard | Staffing | HR cases/tasks | 8 | BR-12, FR-18, AC-15 | RPT, SEC, UAT |
| **RPT-2** | Analytics Workload Dashboard | Analytics | HR cases/tasks | 8 | BR-12, FR-18, AC-15 | RPT, SEC, UAT |
| **RPT-3** | Operations Manager Action Dashboard | Analytics / OM oversight | OM HR tasks | 8 | BR-11, FR-15, FR-16 | RPT, SEC |
| **RPT-4** | Supervisor Approval Dashboard | HR / Managers | HR cases/approvals | 8 | BR-5, FR-11 | RPT, SEC |
| **RPT-5** | Authorization Renewal Dashboard | HR / Compliance | Authorization Forms | 6 / 8 | FR-21–FR-23, AC-16 | RPT |
| **RPT-6** | Audit Retrieval Report | Audit / Compliance | Authorization Forms / Details | 8 | BR-13, AUD-3, AC-13, AC-14 | RPT, SEC |
| **RPT-7** | Enterprise Process Dashboard | HR Leadership | Cases/tasks/auth records | 8 | FR-18 | RPT, UAT |
| **RPT-8** | Expired / Not-Renewed Authorizations | HR / Compliance | Authorization state / replacement logic | 6 / 8 | FR-24, AC-23 | RPT, ATF |

## 9.1 Reporting Data Requirements

Reports shall use authoritative populated fields only.

Reporting shall not depend on:

- display-only values;
- temporary variables;
- unpopulated snapshots;
- manually duplicated access values;
- fields that bypass the final security model.

Report access shall be restricted consistently with the underlying data-security requirements.

---

# 10. Security Requirements Traceability

| ID | Requirement | Primary Control | Wave | Related Acceptance | Verification |
|---|---|---|---:|---|---|
| **SEC-1** | Protect signed forms and related requests using role-based controls. | Record ACLs / contextual access | 7 | AC-13, AC-14 | SEC, NEG |
| **SEC-2** | Restrict attachments/signed-form viewing to authorized personnel. | Parent security + attachment validation | 7 | AC-13, AC-14 | SEC, direct URL test |
| **SEC-3** | Notifications shall not contain SSNs, sensitive form content, or signed-form attachments. | Notification templates / event logic | 7 | AC-17 | SEC, content inspection |
| **SEC-4** | Retain historical forms rather than overwrite active/expired/superseded/revoked/obsolete records. | Lifecycle/state controls | 1 supporting / 4 / 6 / 7 | AC-18 | RUN, audit inspection |
| **SEC-5** | Do not store SSNs or sensitive PII; identify subject through ServiceNow user/employee identity. | Data model / intake / security review | 1 / 2 / 7 | AC-24 | SEC, schema/data inspection |

---

# 11. Audit and Retention Requirements Traceability

| ID | Requirement | Primary Capability | Wave | Related Requirements | Verification |
|---|---|---|---:|---|---|
| **AUD-1** | Link each request to exact signed form version used for authorization. | Case ↔ Authorization linkage | 4 / 7 | FR-17, AC-18 | RUN, DOC |
| **AUD-2** | Retain approval history, signature evidence, fulfillment history, notes, and OM evidence. | Native audit/history + governed records | 4 / 5 / 7 | BR-6, FR-16 | audit inspection |
| **AUD-3** | Authorized users can retrieve current/historical forms by employee and organization. | Audit retrieval | 7 / 8 | BR-13, RPT-6, AC-13, AC-14 | SEC, RPT, UAT |
| **RET-1** | Retention/disposition follows applicable agency records guidance. | Records governance | 7 / release | SEC-4 | MAN, governance review |

No application-specific deletion rule shall supersede applicable agency records requirements.

---

# 12. Acceptance Criteria Traceability

| ID | Acceptance Criterion | Primary Requirements | Primary Wave | Final Verification |
|---|---|---|---:|---|
| **AC-1** | User can submit HR Systems Access Request from Staffing. | BR-1, BR-2, FR-1 | 2 | RUN + UAT |
| **AC-2** | User can submit HR Data Access Request from Analytics. | BR-1, BR-3, FR-2 | 2 | RUN + UAT |
| **AC-3** | No existing signed form is detected and New is required. | BR-7, FR-5 | 3 | ATF |
| **AC-4** | Active form with fully covered access is identified. | BR-7, FR-5, FR-6 | 3 | ATF |
| **AC-5** | Partial coverage correctly requires Amendment/delta. | BR-8, FR-6, FR-9 | 3 | ATF |
| **AC-6** | Expired, revoked, superseded, obsolete, or renewal-due states are correctly identified. | BR-8, FR-5, FR-7, FR-8 | 3 | ATF |
| **AC-7** | Fulfillment is unavailable before supervisor approval and signature. | BR-5, FR-11 | 4 | NEG |
| **AC-8** | Approved HR systems request routes to Staffing. | BR-9, FR-12 | 5 | ATF/RUN |
| **AC-9** | Approved HR data/report request routes to Analytics. | BR-10, FR-13 | 5 | ATF/RUN |
| **AC-10** | Mixed request creates separate Staffing and Analytics tasks under one parent. | FR-14 | 5 | ATF |
| **AC-11** | WPC request creates OM ARM task/notification after approval. | BR-11, FR-15 | 5 | ATF/RUN |
| **AC-12** | WPC remains open until OM action is completed, validated, or waived. | FR-16 | 5 | NEG/RUN |
| **AC-13** | Authorized users can retrieve forms by employee. | BR-13, AUD-3 | 7 / 8 | SEC + UAT |
| **AC-14** | Authorized users can retrieve forms by DIR/DIV/organization. | BR-13, AUD-3 | 7 / 8 | SEC + UAT |
| **AC-15** | Staffing and Analytics dashboards show separate workloads/statuses. | BR-12, FR-18, RPT-1, RPT-2 | 8 | RPT + UAT |
| **AC-16** | Reporting shows authorizations due within 30/60/90 days. | FR-21, FR-23, RPT-5 | 6 / 8 | RPT |
| **AC-17** | Notifications contain no sensitive form contents or signed attachments. | BR-14, SEC-3 | 7 | SEC |
| **AC-18** | Completed requests link to exact signed form version. | FR-17, AUD-1 | 4 / 7 | RUN + DOC |
| **AC-19** | Employee and supervisor complete electronic signatures in ServiceNow without standard-path manual upload. | FR-10, FR-11 | 4 | MAN + DOC |
| **AC-20** | System generates downloadable signed ROB PDF with fields, signatures, metadata. | FR-19 | 4 | DOC |
| **AC-21** | Grace-window authorization receives following cycle expiration. | FR-21, FR-22 | 3 / 6 | ATF |
| **AC-22** | 90/60/30 reminders issue automatically. | FR-23 | 6 | ATF |
| **AC-23** | Expired authorization without renewal produces notice and RPT-8 entry. | FR-24, RPT-8 | 6 | ATF + RPT |
| **AC-24** | SSNs and sensitive PII are not stored. | BR-14, SEC-5 | 1 / 2 / 7 / 8 | schema/data/security scan |

---

# 13. NSF Form 1768 Policy Traceability

The application requirements shall remain traceable to the governing Rules of Behavior artifact.

| Form / Policy Element | Product Requirement Mapping |
|---|---|
| User must access only authorized systems/data | Authorization decision and governed access scope |
| Protect sensitive/confidential information | SEC-1–SEC-5 |
| Annual renewal | FR-21–FR-24 |
| Employee Name | FR-3 / PDF mapping |
| Position Title | FR-3 / PDF mapping |
| Directorate/Office | FR-3 / PDF mapping |
| Access Request Type | FR-3 / access reference |
| Applicable End Date | FR-3 / FR-21 |
| FPPS/WTTS | Access Item Reference / Staffing routing |
| eOPF | Access Item Reference / Staffing routing |
| USA Staffing | Access Item Reference / Staffing routing |
| OAS/DataMart | Access Item Reference / Analytics routing |
| Human Capital Reports | Access Item Reference / Analytics routing |
| Business Justification | FR-3 |
| Employee Signature | FR-10 |
| Supervisor Signature | FR-11 |
| Signed authorization artifact | FR-17 / FR-19 / AUD-1 |

---

# 14. Data-Requirement Traceability

| Data Element | Requirement Source | Primary Record | Wave | Validation |
|---|---|---|---:|---|
| Subject Person | FR-3 | HR Case / Authorization snapshot | 2 | Required / system resolved |
| Requester | FR-3 | HR Case | 2 | Logged-in user |
| Supervisor | FR-3 / FR-11 | HR Case / approval | 2 / 4 | Must resolve before authorization |
| DIR/DIV / Organization | FR-3 | HR Case / authorization snapshot | 2 | Required |
| Position Title | FR-3 | HR Case / authorization snapshot | 2 | Required |
| Employment Type | FR-3 | HR Case | 2 | Required |
| Access End Date | FR-3 / FR-21 | HR Case / expiration calculation | 2 / 3 | Conditional |
| Requested Access | FR-3 / FR-6 | HR Case | 2 / 3 | Reference-based |
| Business Justification | FR-3 | HR Case / authorization snapshot | 2 / 4 | Required |
| Portal Category | FR-1 / FR-2 | HR Case | 2 | System generated |
| Existing Form Status | FR-5 | HR Case | 3 | System generated |
| Request Path | FR-5–FR-9 | HR Case | 3 | System generated |
| Requires OM Action | FR-15 | HR Case/task | 2 / 5 | System derived |
| Signed Form Version | FR-8 / FR-17 | Authorization Form | 1 / 4 | System generated |
| Authorization Expiration Date | FR-21 / FR-22 | Authorization Form | 3 / 4 / 6 | System calculated |
| Fulfillment Status | FR-12–FR-16 | Native HR Task | 5 | Controlled lifecycle |

---

# 15. ServiceNow Component Traceability

| Product Capability | Preferred ServiceNow Component | Principal Requirements |
|---|---|---|
| Employee self-service intake | Employee Center + HR Service/record producer | BR-1–BR-4, FR-1–FR-4 |
| Operational request | Native `sn_hr_core_case` | FR-1–FR-18 |
| Fulfillment / exception work | Native `sn_hr_core_task` | FR-12–FR-16, EX-series |
| Configuration | ROB Configuration | FR-8, FR-21–FR-23 |
| Access catalog | ROB Access Item Reference | FR-3, FR-6, routing |
| Compliance artifact | ROB Authorization Form | BR-6–BR-8, FR-5–FR-11, FR-17–FR-24 |
| Authorized scope | Authorized Access Detail | FR-6, FR-9, FR-17 |
| Authorization decision | Flow/subflow/action | FR-5–FR-9, FR-21, FR-22 |
| Approval | Native approval capability | FR-11 |
| Electronic signature | Current Australia Document Templates / document-signature capabilities subject to spike | FR-10, FR-11 |
| Signed PDF | Document Templates + validated final attachment process | FR-19 |
| Fulfillment orchestration | Flow Designer/subflows | FR-12–FR-16 |
| Scheduled renewal | Scheduled Flow + reusable subflow | FR-21–FR-24 |
| Security | ACLs + native HRSD access | SEC-1–SEC-5 |
| Audit | Native audit/history + governed records | AUD-1–AUD-3 |
| Reporting | Reports / dashboards | FR-18, RPT-1–RPT-8 |
| Testing | ATF + controlled manual tests | AC-1–AC-24 |

---

# 16. Deferred Capability Register

| Requirement | Deferred Capability | MVP Behavior | Future Constraint |
|---|---|---|---|
| BR-4 | Delegated/on-behalf-of submission | Self-submission only | Authorization must remain per subject |
| FR-4 | Organization-level submission/fan-out | Not exposed | Each subject receives independent authorization/signature/approval |
| FR-20 | Signature routing when requester ≠ subject | Not invoked in MVP | Requester may never sign for subject |
| External provisioning | Direct ARM/OAS/FPPS/eOPF/USA Staffing integration | Notify-and-track | Separate future integration approval required |
| Bulk intake | Office-level/bulk request submission | Not available | Must not generate one aggregate authorization artifact |

Deferred requirements shall remain in the RTM with an explicit status rather than being removed.

---

# 17. Requirements With Multiple-Wave Responsibility

Some requirements intentionally span multiple waves.

## FR-21 / FR-22 — Expiration Calculation

- Wave 1 creates required configuration/data fields.
- Wave 3 calculates the proposed expiration.
- Wave 4 stores the final value on the governed authorization.
- Wave 6 operates against the approved expiration lifecycle.

## FR-17 / AUD-1 — Exact Form Linkage

- Wave 1 provides supporting relationships.
- Wave 4 creates authoritative linkage during authorization lifecycle.
- Wave 7 protects and audits the linkage.
- Wave 8 verifies retrieval/reporting.

## SEC-5 / AC-24 — No Sensitive PII

This is a **cross-cutting requirement**.

It applies during:

- data-model creation;
- intake configuration;
- document generation;
- notification configuration;
- testing;
- reporting;
- release validation.

It is therefore not considered satisfied by a single wave.

---

# 18. Required Traceability Fields During Development

The repository version of the RTM shall contain, at minimum:

| Field | Purpose |
|---|---|
| Requirement ID | Stable requirement identifier |
| Requirement Type | BR / FR / EX / RPT / SEC / AUD / RET / AC |
| Description | Controlled requirement text/summary |
| PRD Section | Product specification reference |
| MVP Status | MVP / subset / deferred |
| Implementation Wave | Primary delivery wave |
| ServiceNow Artifact | Actual component implementing requirement |
| Artifact Classification | A / B / C / D |
| Source File | SDK/transform/manual-config source |
| Test ID | Corresponding TEST-MATRIX test |
| Evidence Type | SRC / BLD / INS / RUN / ATF / etc. |
| Test Result | Not Run / Pass / Fail / Blocked / Deferred |
| Evidence Reference | Screenshot, record, log, report, commit, etc. |
| Known Limitation | PDI/environment limitation |
| Requirement Owner | Business/product owner |
| Implementation Owner | Developer/configurator |
| Last Validated | Date |
| Notes | Controlled remarks |

---

# 19. Requirement Status Rules

A requirement shall use only the following test-status meanings:

### Not Run

Implementation/test has not yet executed.

### Pass

The required level of evidence has successfully demonstrated the requirement.

### Fail

Actual behavior does not meet the requirement.

### Blocked

Testing cannot proceed because a documented dependency is unavailable.

### Deferred

The product owner has explicitly placed the requirement outside the MVP.

### PDI Limitation

The requirement cannot be fully proven in the PDI and requires agency-environment revalidation.

**A requirement may not be marked Pass solely because Codex generated code or because the SDK build succeeded.**

---

# 20. Defect-to-Requirement Traceability

Every development defect shall identify:

- affected requirement ID(s);
- affected test(s);
- affected ServiceNow artifact;
- defect classification;
- expected behavior;
- actual behavior;
- correction;
- regression tests;
- final validation evidence.

Defect classifications shall include:

- Source
- Build
- Install
- Runtime Configuration
- Data
- Security
- Unsupported Capability

A correction shall not be considered complete until the affected test and defined regression subset pass.

---

# 21. Release-Gate Traceability

Before the MVP release candidate is approved:

1. every MVP BR shall trace to supporting requirements;
2. every MVP FR shall trace to implementation and test evidence;
3. all exception paths shall have tested disposition;
4. RPT-1–RPT-8 shall reconcile to controlled test data;
5. SEC-1–SEC-5 shall pass security validation;
6. AUD-1–AUD-3 shall have demonstrable audit evidence;
7. RET-1 shall have approved records disposition guidance or documented dependency;
8. AC-1–AC-24 shall be Pass or have an approved formal disposition;
9. all deferred requirements shall be explicitly identified;
10. no requirement shall be considered satisfied only by source review;
11. PDI limitations shall be identified for agency-environment revalidation;
12. release evidence shall identify the exact application/source version tested.

---

# 22. Wave Exit Traceability Rule

A delivery wave may be merged/tagged only when:

- its mapped MVP requirements have required evidence;
- associated tests pass or have approved disposition;
- no unresolved defect violates a wave stop condition;
- `TRACEABILITY.md` is updated;
- `TEST-MATRIX.md` is updated;
- affected supporting documentation is updated;
- the installed behavior corresponds to the committed source/configuration baseline.

Wave completion is therefore a **requirements-evidence gate**, not merely a development milestone.

---

# 23. RTM Source of Truth

The repository implementation of this appendix should be maintained as:

`docs/TRACEABILITY.md`

The PRD/controlled document remains the approved product baseline.

`docs/TRACEABILITY.md` becomes the working implementation traceability record and shall be updated as each ServiceNow artifact and corresponding test is created.

Where the working RTM conflicts with the approved PRD, the PRD controls until an approved requirements change is completed.

---

# 24. Baseline Traceability Summary

The MVP traceability baseline is:

- **BR-1–BR-3:** MVP
- **BR-4:** self-submission MVP subset; delegated portion deferred
- **BR-5–BR-14:** MVP
- **FR-1–FR-3:** MVP
- **FR-4:** self-submission portion MVP; delegated portion deferred
- **FR-5–FR-19:** MVP
- **FR-20:** deferred with delegated submission
- **FR-21–FR-24:** MVP
- **EX-1–EX-10:** MVP exception handling
- **RPT-1–RPT-8:** MVP
- **SEC-1–SEC-5:** MVP
- **AUD-1–AUD-3:** MVP
- **RET-1:** MVP governance requirement
- **AC-1–AC-24:** MVP acceptance baseline, subject to the delegated-scope interpretation above

The ServiceNow SDK Waves 1–8 remain the approved delivery sequence. The RTM governs traceability across that sequence; the waves do not redefine the requirements.