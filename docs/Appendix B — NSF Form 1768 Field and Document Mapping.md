# Appendix B — NSF Form 1768 Field and Document Mapping
## HR Access Rules of Behavior Authorization

**Parent Document:** HR Access Rules of Behavior Authorization — Product Requirements Document
**PRD Version:** 1.0
**Appendix Version:** 1.0 Draft
**Platform:** ServiceNow HRSD — Australia Release
**Application:** HR Access ROB Authorization
**Application Scope:** `x_2108496_hr_acces`
**Development Baseline:** ServiceNow SDK 4.8.1 + Codex
**Governing Form:** NSF Form 1768, Rules of Behavior for Sensitive Information, April 2026

---

# 1. Purpose

This appendix defines how NSF Form 1768 shall be represented, populated, signed, generated, retained, and traced within the HR Access ROB Authorization product.

It establishes the controlled relationship between:

**NSF Form 1768 → ServiceNow Intake Data → Authorization Data → Signature/Approval Evidence → Document Template → Final Signed PDF**

This appendix shall be used to support:

- Wave 2 intake-field implementation;
- Wave 3 authorization-decision inputs;
- Wave 4 Document Templates capability validation;
- Wave 4 electronic-signature implementation;
- Wave 4 signed-PDF generation;
- Wave 7 security and audit controls;
- Wave 8 acceptance testing.

This document defines **logical and document mappings**. Exact ServiceNow dictionary names for native HRSD case/task fields shall be maintained in `docs/FIELD-MAP.md` after the Wave 2 cross-scope/native-field assessment rather than invented in this appendix.

---

# 2. Governing Form Structure

NSF Form 1768 consists of two pages.

## 2.1 Page 1 — Rules of Behavior

Page 1 contains the substantive Responsibility / Accountability Requirements governing access to sensitive information.

The form states that personnel with access to sensitive and Personally Identifiable Information must avoid inappropriate access, use, or disclosure and comply with NSF methods for protecting such information.

The eleven Rules of Behavior address:

1. authorized use of systems, software, and data;
2. use of PII only for its intended purpose;
3. protection of confidential/sensitive information;
4. restrictions on storage of sensitive information;
5. prohibition on transmitting SSNs by email;
6. compliance with NSF password policy;
7. restricted network storage;
8. safeguarding removable or transportable media;
9. secure disposition of sensitive information;
10. reporting of security incidents/fraud/waste/misuse;
11. consequences for failure to comply.

The generated authorization artifact shall reproduce the approved policy content rather than create a shortened or paraphrased substitute.

## 2.2 Page 2 — Acknowledgment and Authorization Information

Page 2 contains:

- annual-renewal statement;
- employee acknowledgment;
- Employee Name;
- Position Title;
- Directorate/Office;
- Access Request Type;
- Federal;
- Contractor;
- Contractor End Date;
- Auditor/Investigator;
- Auditor/Investigator End Date;
- system/access selections;
- Business Justification;
- Employee Signature;
- Supervisor Signature;
- Date.

The visual layout of page 2 groups these elements into four principal sections:

1. employee/context information;
2. access-request type;
3. systems/access requested;
4. business justification and signatures.

The ServiceNow document template should preserve this recognizable structure unless NSF approves a redesigned electronic version.

---

# 3. Document-Generation Principles

## 3.1 Policy Fidelity

The final PDF shall reproduce the **approved version of the Rules of Behavior** associated with the Authorization Form.

The application shall not dynamically rewrite or summarize the policy text.

## 3.2 Version Fidelity

Every generated signed PDF shall be associated with the exact approved ROB form version used at signing.

The application's configurable current accepted form version shall determine whether an existing authorization remains reusable or requires renewal/replacement.

## 3.3 Snapshot Principle

Fields material to an authorization shall be captured as governed snapshots at the time the authorization is prepared.

Later changes to the employee's live user/profile record shall not silently rewrite historical signed authorization artifacts.

## 3.4 Source-of-Truth Principle

Each printed field shall have one defined authoritative source.

A value shall not be independently maintained in multiple editable locations without explicit synchronization rules.

## 3.5 Signature Integrity

Employee and supervisor signature information shall originate from authoritative ServiceNow document/signature activities rather than manually editable text fields.

## 3.6 Single Authoritative PDF

Exactly one authoritative final signed PDF shall be retained for each completed Authorization Form.

Duplicate final copies on the HR case shall not become competing authoritative artifacts.

---

# 4. Mapping Conventions

The following source-method classifications are used.

| Code | Source Method | Meaning |
|---|---|---|
| **PROFILE** | Profile derived | Initially obtained from an authoritative ServiceNow user/HR profile source. |
| **USER** | User entered | Explicitly provided during request intake. |
| **SYSTEM** | System derived | Calculated or assigned by application logic. |
| **CONFIG** | Configuration | Obtained from ROB Configuration or Access Item Reference. |
| **SIGN** | Signature mechanism | Obtained from native document/e-signature activity. |
| **APPROVAL** | Approval record | Obtained from native approval processing. |
| **SNAPSHOT** | Governed snapshot | Persisted on the Authorization Form/Detail for historical fidelity. |

---

# 5. Form-Level Metadata Mapping

The following metadata is required by the product even when it does not appear as a visibly labeled field on the paper source form.

| Product Element | Source | Governed Record | PDF Requirement | Notes |
|---|---|---|---|---|
| Authorization Number | SYSTEM | ROB Authorization Form | Yes | Unique authorization identifier. |
| Form Version | CONFIG → SNAPSHOT | ROB Authorization Form | Yes | Must be populated before signature begins. |
| Effective Date | SYSTEM | ROB Authorization Form | Yes | Final effective/activation date. |
| Expiration Date | SYSTEM | ROB Authorization Form | Yes | Derived from recertification/grace/end-date rules. |
| Authorization Status | SYSTEM | ROB Authorization Form | Optional visible; required metadata | Governs lifecycle. |
| Source HRSD Case | SYSTEM | Authorization/Detail linkage | Not necessarily printed | Required for audit traceability. |
| Supersedes Form | SYSTEM | ROB Authorization Form | Not necessarily printed | Required for renewal/amendment history. |
| Superseded By Form | SYSTEM | ROB Authorization Form | Not necessarily printed | Required for history. |
| PDF Generation Timestamp | SYSTEM | Authorization metadata | Optional | Document evidence. |
| Document checksum/hash if implemented | SYSTEM | Technical evidence | No | Implementation-dependent integrity evidence. |

The implementation plan requires Form Version to be populated from active configuration before employee signature and prohibits progression from Draft when it is blank.

---

# 6. Employee Identity and Organizational Mapping

| Form 1768 Element | Required | Source Method | ServiceNow Logical Source | Governed Snapshot | PDF | Validation |
|---|---:|---|---|---:|---:|---|
| **Employee Name** | Yes | PROFILE | Subject Person / ServiceNow user | Yes | Yes | Subject must resolve to valid user identity. |
| **Position Title** | Yes | PROFILE / controlled correction | HR profile / case | Yes | Yes | Must contain value before authorization draft proceeds. |
| **Directorate/Office** | Yes | PROFILE / controlled correction | DIR/DIV / organization | Yes | Yes | Required for audit/reporting. |
| **Employee/Subject Identifier** | Yes internally | SYSTEM | ServiceNow user/employee identifier | Yes/reference | No unless approved | SSN shall not be used. |
| **Requester** | Yes internally | SYSTEM | Logged-in user | Case-level | No | MVP requester = subject. |
| **Supervisor** | Yes internally | PROFILE / controlled correction | Subject's supervisor | Yes/reference | Signature section | Must resolve before approval/signature. |

The source requirements specifically identify Subject Person, Requester, Supervisor, DIR/DIV/Organization, Position Title, and Employment Type as required process data. Subject identification is through the user record/employee ID rather than SSN.

## 6.1 Historical Snapshot Rule

The signed Authorization Form shall retain the employee's:

- name;
- position;
- organization;
- relevant employment/access context

as it existed for that authorization.

A later profile change shall not retroactively modify a previously signed PDF.

## 6.2 Material Profile Changes

A material organization, position, role, or business-justification change may require Amendment processing when an active authorization exists.

The requirements explicitly require review/amendment where the authorization is tied to an old organization or role and the relevant context has materially changed.

---

# 7. Access Request Type Mapping

The printed Form 1768 provides an **ACCESS REQUEST TYPE** area containing:

- Federal
- Contractor
- Contractor End Date
- Auditor/Investigator
- Auditor/Investigator End Date.

The requirements package broadens the application's Employment Type data model to include Federal, contractor, IPA, auditor/investigator, or another approved type.

This creates a document-mapping distinction that must be handled explicitly.

## 7.1 Mapping Table

| Application Employment Type | Printed Form Element | End Date Rule | Mapping Status |
|---|---|---|---|
| Federal | Federal | Not normally required by form | Defined |
| Contractor | Contractor | Required for time-limited access | Defined |
| Auditor/Investigator | Auditor/Investigator | Required | Defined |
| IPA | Approved electronic-only Access Request Type extension; no printed checkbox on the April 2026 source form | No additional requirement approved; remain configuration/policy controlled | **Approved electronic extension** |
| Other approved type | No explicit printed field | Product rule dependent | **Mapping confirmation required** |

## 7.2 Design Rule

The electronic authorization shall present IPA as a distinct electronic Access
Request Type and shall identify it as an electronic-only extension. It shall not
claim that the April 2026 source PDF contains an IPA checkbox. No IPA End Date
requirement is approved by this rendering decision; any such requirement remains
business/configuration controlled.

## 7.3 End-Date Rules

Access End Date shall be required for:

- contractor;
- auditor/investigator;
- other time-limited access as defined by configuration/business rules.

A request lacking a required end date shall not proceed normally to approval. The requirements require submission prevention or correction before approval for time-limited access without an end date.

---

# 8. Requested-System / Access Mapping

## 8.1 Printed Form Options

The April 2026 Form 1768 displays the following five system/access selections:

1. FPPS/WTTS
2. eOPF
3. USA Staffing
4. OAS/DataMart
5. Human Capital Reports.

## 8.2 ServiceNow Access Reference Model

Requested access shall be represented through active **ROB Access Item Reference** records rather than duplicated free-text or choice-list values.

The Access Item Reference shall support routing and document mapping independently.

## 8.3 Core Mapping

| Form 1768 Selection | ServiceNow Access Category | Primary Fulfillment | Provisioning / Target Context | Document Rendering |
|---|---|---|---|---|
| **FPPS/WTTS** | HR Systems | Staffing | FPPS / WTTS | Mark corresponding Form 1768 selection |
| **eOPF** | HR Systems | Staffing | eOPF | Mark corresponding selection |
| **USA Staffing** | HR Systems | Staffing | USA Staffing | Mark corresponding selection |
| **OAS/DataMart** | Analytics | Human Capital Analytics | OAS/DataMart as applicable | Mark corresponding selection |
| **Human Capital Reports** | Analytics | Human Capital Analytics | Report/data access | Mark corresponding selection |

The routing requirements assign FPPS/WTTS, eOPF, and USA Staffing to Staffing; human-capital data and report access to Analytics.

---

# 9. Workforce Profile Charts Mapping

Workforce Profile Charts are a special product access type.

The business requirements establish that:

- Workforce Profile Chart requests route through Human Capital Analytics;
- an Operations Manager performs the required ARM role assignment;
- ARM grants the role necessary for access to the report hosted in OAS;
- the OM action is tracked separately.

However, **the April 2026 Form 1768 does not contain a printed field explicitly
labeled “Workforce Profile Charts.”**

### DOC-MAP-01 — Resolved Electronic Extension

Workforce Profile Charts shall render as a distinct electronic-only option in
System Requesting Access. It shall not be collapsed into OAS/DataMart or Human
Capital Reports and shall not be described as a printed checkbox on the April
2026 source form.

ARM shall not render as a requested system/access option. ARM remains
system-managed provisioning metadata for WPC; OAS / Workforce Profile Charts
remains the target/hosting context.

---

# 10. Business Justification Mapping

## 10.1 Source Requirement

Form 1768 identifies:

**BUSINESS JUSTIFICATION FOR SENSITIVE INFORMATION ACCESS (REQUIRED)**

and provides examples such as HR Specialist Role, PSS Role, and Directorate Admin Role.

## 10.2 Mapping

| Attribute | Requirement |
|---|---|
| Source | User-entered at request intake |
| Required | Yes |
| Operational Record | Native HRSD case |
| Governed Authorization | Snapshot on Authorization Form and/or applicable Authorized Access Detail according to final data model |
| PDF | Yes |
| Editable Before Submission | Yes |
| Editable After Authorization Preparation | Controlled |
| Editable After Signature | No ordinary-user modification |
| Notification Use | Do not reproduce sensitive justification content in ordinary notifications |

## 10.3 Snapshot Rule

The justification associated with the authorization shall be frozen into the governed authorization context before signature.

Changing the HR case's justification after the authorization document has entered signature shall not silently alter the document being signed.

If a material justification change occurs after an active authorization exists, the decision engine shall treat it as an Amendment condition when required by the approved decision rules.

---

# 11. Rules-of-Behavior Acknowledgment Mapping

Page 2 contains the employee acknowledgment:

> The employee acknowledges receipt, understanding, responsibility, and agreement to comply with the Sensitive Information Rules of Behavior.

The application shall implement this acknowledgment through the approved document/signature experience rather than a separate unsecured checkbox that is unrelated to the signed document.

## 11.1 Employee Acknowledgment Requirements

Before employee signature:

- the applicable Rules of Behavior content shall be available to the employee;
- the document shall represent the approved current form version;
- required employee/context data shall be populated;
- authorized scope shall be populated;
- Business Justification shall be populated;
- Form Version shall be populated.

An employee signature shall evidence acknowledgment of the Rules of Behavior associated with that exact document/version.

---

# 12. Employee Signature Mapping

| Element | Requirement |
|---|---|
| Printed Form Element | Employee Signature |
| Required For | New, Amendment, Renewal |
| Not Required For | Reuse of qualifying existing authorization |
| Source | Native current ServiceNow document/e-signature task |
| Signer | Subject Person |
| Requester May Sign for Subject | No |
| Signature Identity | System captured |
| Signature Timestamp | System captured |
| Editable After Completion | No |
| PDF Rendering | Required |
| Audit Retention | Required |

## 12.1 Sequence

Employee signature shall occur **before supervisor approval/signature is finalized** for New, Renewal, and Amendment.

## 12.2 Reuse Exception

Reuse shall preserve:

- original employee signature;
- original employee signature timestamp;
- original signed PDF.

A new employee signature shall not overwrite or modify the existing authorization artifact.

## 12.3 Deferred Delegated Scenario

When delegated submission is implemented in a future phase, the signature shall route to the subject person rather than the requester.

The source requirement explicitly states that a requester cannot sign on the subject's behalf.

---

# 13. Supervisor Approval and Signature Mapping

The product distinguishes **approval** from **electronic signature**.

These are related but separate requirements.

| Evidence | Source | Required | PDF | Audit |
|---|---|---:|---:|---:|
| Supervisor Approval Decision | Native approval | Yes | May be reflected indirectly | Yes |
| Supervisor Electronic Signature | Document/signature task | Yes | Yes | Yes |
| Supervisor Identity | Native records | Yes | Yes/as signature identity | Yes |
| Approval Timestamp | Native approval | Yes | Not necessarily printed | Yes |
| Signature Timestamp | Signature task | Yes | Yes/metadata | Yes |

## 13.1 Fulfillment Gate

Fulfillment shall not open when only one of the following has occurred:

- supervisor approval without signature;
- supervisor signature without required approval.

The implementation plan expressly requires both supervisor actions before fulfillment.

## 13.2 Denial

If the supervisor denies the request:

- the case closes as Denied;
- applicable pending authorization/detail records reflect denial as designed;
- no fulfillment tasks are created;
- no authorization becomes Active.

---

# 14. Printed Date Field Mapping

The paper Form 1768 contains a single visible **Date** field next to the employee and supervisor signature areas.

The system, however, shall retain more granular electronic evidence:

- employee signature timestamp;
- supervisor approval timestamp;
- supervisor signature timestamp;
- authorization effective date;
- expiration date.

### DOC-MAP-02 — Resolved Date Rendering Decision

The printed Form 1768 **Date** field shall represent the **Supervisor Signature
Date / Final Authorization Date**. The supervisor signature completes execution
of the authorization, so its completion date is the printed final execution
date.

Employee Signature Date/Time and Supervisor Signature Date/Time remain separate
authoritative electronic audit values. Neither timestamp is collapsed into or
replaced by the printed Date field, and the employee signature timestamp does
not populate that printed field.

---

# 15. Authorization Expiration Mapping

The source paper form states that the Rules are renewed annually but does not provide a dedicated general annual-expiration field.

The ServiceNow product introduces a governed Authorization Expiration Date.

## 15.1 Calculation

The expiration date shall use:

- the configured agency-wide recertification date;
- the configurable grace-window rule;
- an earlier applicable time-limited Access End Date.

## 15.2 Grace Window

An authorization signed inside the configurable grace window shall receive the following cycle's recertification date rather than the imminent date.

The source requirements define a default configurable 90-day grace window.

## 15.3 PDF Rendering

The PRD requires effective and expiration dates on the generated audit artifact.

If the approved electronic Form 1768 template provides these as supplemental metadata rather than fields present on the original printed form, that presentation shall be documented in the final Document Template specification.

The original April 2026 form itself does not contain a labeled general expiration-date field beyond the specific Contractor and Auditor/Investigator End Date fields.

---

# 16. Authorization Scope Rendering

For New, Amendment, and Renewal, the PDF shall represent the **complete authorized scope**, not merely the newest delta.

## 16.1 New

Render all approved requested access items.

## 16.2 Amendment

Render:

**carried-forward active authorized scope + newly approved delta**

The PDF shall represent the new complete authorization.

## 16.3 Renewal

Render:

**complete prior approved scope + approved changes**

## 16.4 Reuse

Do not regenerate the original authorization PDF merely to represent the new request.

The existing signed PDF remains the authorization artifact.

The new HR case links to the exact existing form.

This follows the approved state/data model, which prohibits duplicate details for Reuse while requiring Amendment and Renewal to carry the appropriate complete authorization scope forward.

---

# 17. Document Template Field Mapping Matrix

The following matrix shall become the basis for the final Australia Document Template mapping.

| Template Element | Logical Source | Source Method | Snapshot? | Required Before Signature? | Rendered? |
|---|---|---|---:|---:|---:|
| Approved ROB policy text | Approved form/template | CONFIG | Version-controlled | Yes | Yes |
| Form Version | ROB Configuration → Authorization Form | CONFIG/SNAPSHOT | Yes | Yes | Yes |
| Authorization Number | Authorization Form | SYSTEM | Yes | Yes | Yes |
| Employee Name | Subject Person | PROFILE/SNAPSHOT | Yes | Yes | Yes |
| Position Title | Subject profile/case | PROFILE/SNAPSHOT | Yes | Yes | Yes |
| Directorate/Office | Organization/DIR/DIV | PROFILE/SNAPSHOT | Yes | Yes | Yes |
| Federal indicator | Employment Type | USER/SNAPSHOT | Yes | If applicable | Yes |
| Contractor indicator | Employment Type | USER/SNAPSHOT | Yes | If applicable | Yes |
| Contractor End Date | Access End Date | USER/SNAPSHOT | Yes | Conditional | Yes |
| Auditor/Investigator indicator | Employment Type | USER/SNAPSHOT | Yes | If applicable | Yes |
| Auditor/Investigator End Date | Access End Date | USER/SNAPSHOT | Yes | Conditional | Yes |
| IPA electronic extension | Employment Type | USER/SNAPSHOT | Yes | If applicable | Yes; distinct electronic-only Access Request Type |
| FPPS/WTTS | Authorized Access Detail | CONFIG/SNAPSHOT | Yes | If selected | Yes |
| eOPF | Authorized Access Detail | CONFIG/SNAPSHOT | Yes | If selected | Yes |
| USA Staffing | Authorized Access Detail | CONFIG/SNAPSHOT | Yes | If selected | Yes |
| OAS/DataMart | Authorized Access Detail | CONFIG/SNAPSHOT | Yes | If selected | Yes |
| Human Capital Reports | Authorized Access Detail | CONFIG/SNAPSHOT | Yes | If selected | Yes |
| Workforce Profile Charts electronic extension | Authorized Access Detail | CONFIG/SNAPSHOT | Yes | If selected | Yes; distinct electronic-only access option mapped by `WPC` |
| Business Justification | Case → Authorization snapshot | USER/SNAPSHOT | Yes | Yes | Yes |
| Employee Signature | Native signature record | SIGN | Evidence | Yes for N/A/R | Yes |
| Employee Signature Timestamp | Native signature record | SIGN | Evidence | Yes for N/A/R | Yes/metadata |
| Supervisor Signature | Native signature record | SIGN | Evidence | Yes | Yes |
| Supervisor Signature Timestamp | Native signature record | SIGN | Evidence | Yes | Yes/metadata |
| Supervisor Approval | Native approval | APPROVAL | Evidence | Yes | Audit; visible treatment TBD |
| Approval Timestamp | Native approval | APPROVAL | Evidence | Yes | Metadata as approved |
| Effective Date | Authorization Form | SYSTEM | Yes | Finalization | Yes |
| Authorization Expiration Date | Authorization Form | SYSTEM | Yes | Finalization | Yes |
| Source HRSD Case Number | HR Case | SYSTEM | Link | No | Optional metadata |

## 17.1 Approved Electronic Rendering Contract

The electronic artifact shall preserve three explicit layers:

1. **Printed source-form body.** Preserve the recognizable April 2026 Form 1768
   policy and printed fields: Employee Name, Position Title,
   Directorate/Office, Federal, Contractor and Contractor End Date,
   Auditor/Investigator and Auditor/Investigator End Date, the five printed
   system/access selections, Business Justification, Employee Signature,
   Supervisor Signature, and the single printed Date.
2. **Electronic-only extensions.** Add IPA as a distinct Access Request Type and
   Workforce Profile Charts as a distinct System Requesting Access option.
   Clearly identify both as electronic extensions. Do not represent IPA or WPC
   as printed April 2026 checkboxes. Do not render ARM as a requested access
   option.
3. **Electronic Authorization Metadata.** Render approved system-managed
   governance values in a clearly separated section titled exactly
   **Electronic Authorization Metadata**. Do not insert or intermingle these
   values with the printed-form fields and do not include implementation/debug
   metadata.

The Electronic Authorization Metadata section shall use the approved field-map
terminology and include:

- Authorization Number;
- Source HRSD Case (render the HR Case Number);
- Form Version;
- Employee Signature Date/Time;
- Supervisor Signature Date/Time;
- Effective Date;
- Expiration Date;
- ROB Authorization Path;
- Signed PDF Generated Date/Time.

The printed Date renders Supervisor Signature Date / Final Authorization Date.
The two signature Date/Time fields remain separate electronic audit metadata.

---

# 18. Required Pre-Signature Validation

The employee signature task for New, Amendment, or Renewal shall not begin until all applicable required document values are populated.

At minimum:

- Subject Person;
- Employee Name;
- Position Title;
- Directorate/Office;
- Employment Type;
- required Access End Date;
- requested/authorized access scope;
- Business Justification;
- Form Version;
- Authorization Number;
- calculated/proposed expiration;
- approved policy/template version.

The SDK implementation plan specifically requires Form Version to be populated before any employee-signature task and requires every system-managed child field to be explicitly populated.

A blank required value shall stop transition out of Draft rather than generate an incomplete document.

---

# 19. Finalization Validation

Before the Authorization Form can become Active, the system shall confirm:

### New / Amendment / Renewal

- employee signature exists;
- employee signer identity exists;
- employee signature timestamp exists;
- supervisor approval = approved;
- supervisor approval identity exists;
- supervisor approval timestamp exists;
- supervisor signature exists;
- supervisor signer identity exists;
- supervisor signature timestamp exists;
- full approved scope exists;
- Form Version exists;
- effective date exists;
- expiration date exists;
- final PDF generated successfully;
- final PDF corresponds to the correct Authorization Form.

### Reuse

- linked existing Authorization Form is valid/current;
- requested access is fully covered;
- no new employee signature was generated;
- request-specific supervisor approval is complete;
- request-specific supervisor signature is complete;
- original signed PDF remains unchanged;
- HR case links to the exact existing authorization.

---

# 20. PDF Attachment and Storage Rules

## 20.1 Authoritative Location

Preferred authoritative location:

**ROB Authorization Form**

## 20.2 Native-Generation Exception

The Australia capability spike shall determine where the native Document Templates process initially places the generated signed document.

If native generation attaches the document to the HR case:

1. confirm document completion;
2. verify correct form/case association;
3. verify expected filename/document identity;
4. perform any approved copy/move processing;
5. verify target attachment;
6. ensure native document history is not broken;
7. remove an unnecessary competing final copy only when safe;
8. record the Authorization Form as the authoritative location.

The implementation plan explicitly requires this behavior to be proven rather than assumed.

## 20.3 Prohibited Behavior

The solution shall not:

- retain multiple competing authoritative signed PDFs;
- email the signed PDF as a routine notification attachment;
- expose the PDF to unrelated users;
- permit ordinary fulfillers to replace historical signed artifacts.

---

# 21. PDF Naming Standard

A final naming convention should be configuration-driven or documented.

Recommended logical format:

`NSF1768_<AuthorizationNumber>_<SubjectIdentifier>_<EffectiveDate>.pdf`

However, **the source documents do not prescribe a filename standard**.

Therefore the exact production naming convention shall be finalized during the Document Templates capability spike and documented in:

`docs/FIELD-MAP.md`
and
`docs/MANUAL-CONFIGURATION.md`

The filename shall not include:

- SSN;
- sensitive PII;
- full Business Justification;
- unnecessary personal information.

---

# 22. Security Mapping

| Document/Data Element | Employee | Supervisor | Staffing | Analytics | OM | Compliance | ROB Admin | Unrelated User |
|---|---|---|---|---|---|---|---|---|
| Own active process | Required contextual access | Assigned contextual access | Assigned-work context | Assigned-work context | Minimum assigned-task context | Read if authorized | Admin | No |
| Authorization Form | Through approved experience | Through approved experience | Context-dependent | Context-dependent | No broad repository | Read | Admin | No |
| Signed PDF | Approved self-service if authorized by policy/design | Assigned-context only | Limited as required | Limited as required | Normally not required | Read | Admin | No |
| Business Justification | Own request | Approval context | Assigned work | Assigned work | Minimum necessary only | Audit | Admin | No |
| Signature Evidence | Own/assigned context | Own/assigned context | Read-only if required | Read-only if required | No unnecessary access | Read | Admin | No |
| Historical forms | No broad repository | No broad repository | No broad repository | No broad repository | No | Read | Admin | No |

The final ACL matrix shall be defined in Appendix F / `SECURITY-MODEL.md`.

Direct attachment URLs shall be included in security testing.

---

# 23. Notification Rules Related to Form 1768

Notifications may reference:

- action required;
- request/case number;
- authorization number where appropriate;
- due date;
- secure ServiceNow link.

Notifications shall not include:

- SSN;
- signed Form 1768 attachment;
- signature images;
- full sensitive form content;
- unnecessary Business Justification;
- confidential access information beyond the minimum required for the recipient's task.

The requirements explicitly prohibit SSNs, sensitive form content, and signed-form attachments in notifications.

---

# 24. Audit Mapping

For every signed Authorization Form, audit retrieval shall be able to establish:

1. who the subject was;
2. which HR request initiated or referenced the authorization;
3. which form version applied;
4. which access items were authorized;
5. what business justification was approved;
6. when the employee signed;
7. who signed as employee;
8. when the supervisor approved;
9. who approved;
10. when the supervisor signed;
11. who signed as supervisor;
12. when the authorization became effective;
13. when it expires;
14. whether it superseded another form;
15. whether another form superseded it;
16. fulfillment evidence associated with the request;
17. OM evidence when Workforce Profile Charts were involved;
18. where the authoritative signed PDF is stored.

The product's audit requirements specifically require linkage to the exact signed form, retention of approval/signature/fulfillment/OM evidence, and authorized retrieval of current and historical forms.

---

# 25. Document-Version Change Behavior

When ROB Configuration identifies a new accepted Form Version:

1. newly prepared forms shall use the new version;
2. an existing form on a no-longer-accepted version shall not be reused;
3. the authorization decision shall return Renewal as defined by the approved state model;
4. the historical prior form and PDF shall remain unchanged;
5. the new authorization shall use the current approved policy/template;
6. supersession linkage shall preserve history.

An old PDF shall never be regenerated with new policy text while retaining the identity of the old authorization.

---

# 26. Document Lifecycle by Authorization Path

## 26.1 New

**Create new document:** Yes
**Employee signs:** Yes
**Supervisor approves:** Yes
**Supervisor signs:** Yes
**Generate PDF:** Yes
**Final state:** Active after complete validation

## 26.2 Reuse

**Create new authorization document:** No
**Employee signs again:** No
**Supervisor approves current request:** Yes
**Supervisor signs current request:** Yes
**Regenerate original PDF:** No
**Original authorization:** Remains intact

## 26.3 Amendment

**Create new document:** Yes
**Authorized scope:** Carried-forward covered scope + new approved delta
**Employee signs:** Yes
**Supervisor approves/signs:** Yes
**Generate PDF:** Yes
**Old form:** Superseded after activation

## 26.4 Renewal

**Create new document:** Yes
**Authorized scope:** Complete approved scope + approved changes
**Employee signs:** Yes
**Supervisor approves/signs:** Yes
**Generate PDF:** Yes
**Old form:** Superseded after activation

## 26.5 Revoked Prior Authorization

**Reactivation:** Prohibited
**Path:** New
**New signatures:** Required
**New PDF:** Required

## 26.6 Denial

**Final signed authorization:** No
**Fulfillment:** No
**Pending authorization:** Denied according to lifecycle design
**History:** Retained

---

# 27. Australia Document Templates Capability Spike

Before final Wave 4 configuration, the development team shall verify the actual Australia PDI behavior for:

1. current Document Templates application availability;
2. supported template source format;
3. merge-field support;
4. custom scoped-table data sources;
5. HR Case data sources;
6. related Authorized Access Detail rendering;
7. repeating/multiple access-item rendering;
8. employee participant routing;
9. supervisor participant routing;
10. participant sequencing;
11. native supervisor approval interaction;
12. ServiceNow Sign/electronic-signature capability;
13. signer identity evidence;
14. signer timestamp evidence;
15. generated document format;
16. attachment destination;
17. post-generation attachment handling;
18. source-control/SDK transform support;
19. upgrade-safe configuration method;
20. ATF automation feasibility.

The approved SDK plan requires an Australia-release capability spike covering Document Templates, participant sequencing, document tasks, ServiceNow Sign, supervisor approval, attachment behavior, and transform/source-control support before implementation.

---

# 28. Capability Spike Decision Record

The following fields shall be completed during Wave 4.

| Decision | Result |
|---|---|
| Document Templates available | TBD |
| ServiceNow Sign capability available | TBD |
| Employee signature supported | TBD |
| Supervisor signature supported | TBD |
| Sequential participants supported | TBD |
| Native approval + document signature sequencing supported | TBD |
| Custom Authorization Form usable as template data source | TBD |
| Authorized Access Detail repeating data supported | TBD |
| Generated PDF format acceptable | TBD |
| Native attachment destination | TBD |
| Controlled relocation/copy supported | TBD |
| Duplicate removal safe | TBD |
| Transform to SDK supported | TBD |
| Manual configuration required | TBD |
| ATF coverage feasible | TBD |
| Agency-environment revalidation required | TBD |

No `TBD` result shall be silently treated as supported implementation behavior.

---

# 29. Approved Electronic Rendering Decisions

## DOC-MAP-01 — Workforce Profile Charts — RESOLVED

Workforce Profile Charts is a distinct electronic-only System Requesting Access
option. It does not map to OAS/DataMart or Human Capital Reports. ARM remains
provisioning metadata and does not render as a requested access option.

---

## DOC-MAP-02 — Printed Date — RESOLVED

The single printed Date represents Supervisor Signature Date / Final
Authorization Date. Employee Signature Date/Time and Supervisor Signature
Date/Time remain separately retained electronic audit values.

---

## DOC-MAP-03 — IPA Representation — RESOLVED

IPA is a distinct electronic-only Access Request Type. The implementation shall
not claim that IPA is a printed April 2026 checkbox and shall not infer an IPA
End Date requirement from this rendering decision.

---

## DOC-MAP-04 — Electronic Supplemental Metadata — RESOLVED

Approved system-managed governance values shall appear in a clearly separated
**Electronic Authorization Metadata** section. The section shall preserve the
recognizable source-form body, use approved field-map terminology, and exclude
implementation/debug metadata.

Together, DOC-MAP-01 through DOC-MAP-04 resolve `R4-POLICY-01`. They do not
prove Document Templates, signature, approval, PDF, attachment, or security
runtime behavior; `R4-PDI-01` remains open.

---

# 30. Wave Traceability

| Mapping Area | Wave 1 | Wave 2 | Wave 3 | Wave 4 | Wave 7 | Wave 8 |
|---|---:|---:|---:|---:|---:|---:|
| Authorization data fields | X |  |  |  |  |  |
| Access Item Reference | X | X |  | X |  |  |
| Employee/profile intake |  | X |  | X |  |  |
| Employment/end date | X | X | X | X |  |  |
| Business Justification | X | X | X | X | X |  |
| Authorization decision |  |  | X | X |  |  |
| Form Version | X |  | X | X |  |  |
| Full scope determination | X | X | X | X |  |  |
| Employee signature |  |  |  | X | X | X |
| Supervisor approval |  |  |  | X | X | X |
| Supervisor signature |  |  |  | X | X | X |
| PDF generation |  |  |  | X | X | X |
| PDF attachment security |  |  |  | X | X | X |
| Audit linkage | X |  |  | X | X | X |
| Retrieval |  |  |  |  | X | X |
| No-PII validation | X | X | X | X | X | X |

---

# 31. Required Test Scenarios

The document/signature test suite shall include at least:

### New Authorization

- valid Federal employee;
- valid Contractor with end date;
- valid Auditor/Investigator with end date;
- multiple system selections;
- Analytics access;
- mixed scope represented correctly.

### Required-Field Failure

- missing Form Version;
- missing Business Justification;
- missing position;
- missing organization;
- missing required end date;
- missing access scope.

### Signature Sequence

- employee signature before supervisor;
- supervisor approval without signature;
- supervisor signature without valid approval;
- incomplete employee signature;
- denial.

### Reuse

- original PDF unchanged;
- original employee signature unchanged;
- no duplicate Authorization Form;
- no duplicate Access Details;
- request-specific supervisor evidence retained.

### Amendment

- covered scope carried forward;
- delta added;
- complete new scope rendered;
- old authorization preserved;
- supersession correctly linked.

### Renewal

- complete scope rendered;
- current Form Version used;
- expiration recalculated;
- prior artifact retained.

### PDF

- correct form version;
- correct subject;
- correct organization;
- correct position;
- correct access selections;
- correct Business Justification;
- correct signatures;
- correct signature metadata;
- correct effective/expiration metadata;
- exactly one authoritative PDF.

### Security

- unrelated user cannot retrieve PDF;
- direct attachment URL denied;
- OM cannot browse repository;
- fulfiller cannot alter signature fields;
- historical PDF cannot be replaced by ordinary roles.

### Privacy

- no SSN;
- no prohibited PII;
- no PDF in notification;
- no sensitive form content in routine notification.

---

# 32. Document Definition of Done

The Form 1768 document capability is complete only when:

- approved policy text is represented correctly;
- all controlled field mappings are implemented;
- all open mapping decisions required for production are resolved;
- required fields block incomplete signature initiation;
- New, Amendment, and Renewal produce the correct complete authorization scope;
- Reuse preserves the original artifact;
- employee signature works;
- supervisor approval works;
- supervisor signature works;
- signature identities and timestamps are retained;
- final PDF renders correctly;
- exactly one authoritative final PDF exists;
- the PDF is associated with the exact Authorization Form;
- unauthorized attachment access fails;
- historical signed artifacts cannot be altered by ordinary roles;
- no prohibited PII is stored;
- audit retrieval works;
- applicable ATF/manual evidence is recorded;
- Document Template configuration/transform/manual steps are documented.

---

# 33. Controlled Implementation Artifacts

The following implementation artifacts shall remain aligned with this appendix:

- `docs/FIELD-MAP.md`
- `docs/TRACEABILITY.md`
- `docs/SECURITY-MODEL.md`
- `docs/MANUAL-CONFIGURATION.md`
- `docs/TEST-MATRIX.md`
- Document Template configuration/source
- Authorization Form dictionary
- Authorized Access Detail dictionary
- signature/document flows or subflows
- PDF finalization logic
- authorization decision logic

Any change to a Form 1768 mapping after approval shall update this appendix or its controlled successor before becoming the production baseline.

---

# 34. Baseline Mapping Statement

The HR Access ROB Authorization product shall implement NSF Form 1768 as a **version-controlled, system-populated, electronically signed, audit-retained compliance artifact**.

ServiceNow shall use the employee's request and authoritative profile information to prepare the authorization; apply controlled New, Reuse, Amendment, or Renewal logic; capture employee and supervisor electronic evidence; generate the final signed artifact; and preserve the exact authorization used for each access request.

The electronic implementation may add approved audit metadata needed by the product, but it shall not silently alter the policy meaning or invent mappings for elements not defined by the governing form.

## R4.2.1 Rendering Evidence and Remaining Blocker

Controlled Australia rendering produced clean PDF
`668b256cc33a0f1068a35f2b2b0131f6` with the recognizable April 2026 structure,
IPA and Workforce Profile Charts clearly marked as electronic extensions, ARM
excluded from requested access, and a separate Electronic Authorization
Metadata section. Sample-template contamination was removed.

The native `${Date}` token is evaluated when the document body is prepared; it
is not bound to the later persisted supervisor signature timestamp. Actual
employee and supervisor task timestamps likewise exist only after their signing
events. Consequently DOC-MAP-01 remains mandatory but is not runtime-satisfied
by this PDI mechanism. `R4-PDI-01` is BLOCKED pending a platform-owner-supported
signed-content mechanism; the approved mapping itself is unchanged.

## R4.2.2 Post-Signature Rendering Evidence

The approved post-signature finalization design satisfies DOC-MAP-01 without
reusing the preparation-time `${Date}` token. Native employee and supervisor
Document Tasks remain the authoritative signing evidence. After the supervisor
task commits APPROVED + signature, a Document Templates-owned finalization step
rereads both `closed_at` values and renders a new completed PDF.

Accepted synthetic PDF `b3d35f28c3328f1068a35f2b2b01319e` renders:

- Employee Signature Date/Time: `2026-08-16 03:28:28`;
- Supervisor Signature Date/Time: `2026-08-16 03:29:14`;
- Final Authorization Date: `2026-08-16`;
- Generated Date/Time: `2026-08-16 03:47:35`.

The three values are distinct and the final date exactly equals the local
calendar date of the persisted supervisor timestamp. The clean April 2026 body
uses explicit `[X]`/`[ ]` access markers, identifies IPA and WPC as electronic
extensions, excludes ARM from requested access, and separates Electronic
Authorization Metadata. `R4-PDI-01` is resolved for native capability; final
Authorization Form placement remains production R4 work.
