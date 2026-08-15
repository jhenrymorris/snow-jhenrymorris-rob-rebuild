# Appendix K — SDK Artifact Classification
## HR Access Rules of Behavior Authorization

**Parent Document:** HR Access Rules of Behavior Authorization — Product Requirements Document
**PRD Version:** 1.0
**Appendix Version:** 1.0 Draft
**Platform:** ServiceNow HRSD — Australia Release
**Application:** HR Access ROB Authorization
**Application Scope:** `x_2108496_hr_acces`
**Development Baseline:** ServiceNow SDK 4.8.1 + Codex

---

# 1. Purpose

This appendix defines how each implementation artifact shall be created, governed, source-controlled, deployed, validated, and maintained.

It establishes four artifact classes:

- **Class A — Source-First**
- **Class B — Configure Then Transform**
- **Class C — Manual / Environment Configuration**
- **Class D — Unsupported / Deferred**

This appendix shall guide:

- Codex implementation instructions;
- repository structure;
- wave planning;
- PDI configuration;
- source-control expectations;
- build/install validation;
- deployment documentation;
- clean-install rehearsals;
- production handoff.

The approved implementation plan explicitly requires every artifact to be classified before implementation and defines these four treatment classes.

---

# 2. Artifact Classification Principles

## 2.1 Source Is Preferred Where Supported

When the ServiceNow SDK can reliably author and install an artifact, source-first implementation shall be preferred.

## 2.2 Native Platform Configuration Shall Not Be Replaced Merely to Make It Code-First

If a capability is inherently or more safely configured through ServiceNow UI and transformed/exported afterward, it shall remain Class B.

## 2.3 Environment References Shall Remain Environment-Specific

Values such as production assignment groups and user memberships shall not be embedded in application source merely to eliminate manual configuration.

## 2.4 Unsupported Capabilities Shall Not Trigger Substitute Architecture

If the PDI cannot support a required native capability, the solution shall:

- document the limitation;
- stop the affected wave;
- revalidate in the appropriate environment;

rather than introduce an unapproved custom replacement.

This is a core architectural control of the SDK implementation plan.

---

# 3. Artifact Class Definitions

## Class A — Source-First

Artifact is authored and maintained directly in the SDK repository.

Expected characteristics:

- supported by SDK source model;
- deterministic;
- repeatable;
- installable;
- version-controlled;
- suitable for automated build validation.

---

## Class B — Configure Then Transform

Artifact is configured first in ServiceNow using supported native tools, then transformed/exported into source where supported.

Expected characteristics:

- native platform UI configuration is part of correct implementation;
- direct source authoring is impractical or unsupported;
- transformed metadata is retained where possible;
- exact manual creation steps are documented.

---

## Class C — Manual / Environment Configuration

Artifact or value is intentionally maintained per environment.

Typical examples:

- group mappings;
- user/group memberships;
- PDI-specific synthetic identities;
- environment-specific email configuration;
- platform capability activation.

Class C artifacts must be documented.

They are not undocumented exceptions.

---

## Class D — Unsupported / Deferred

Artifact cannot or should not be implemented in the current PDI/release/build phase.

Examples:

- delegated submission in MVP;
- direct external provisioning;
- unsupported native capability;
- unapproved substitute architecture.

Class D items shall remain explicitly traceable.

---

# 4. Source-Control Authority

For supported application artifacts:

> **Git + ServiceNow SDK source is the authoritative development baseline.**

ServiceNow PDI configuration is not the sole source of truth for artifacts that are expected to be source-controlled.

The implementation plan explicitly establishes Git + SDK as authoritative for supported metadata and states that production shall not depend on AI tooling.

---

# 5. Repository Principles

The repository shall contain:

- application source;
- scripts/helpers;
- metadata;
- tests;
- traceability;
- field mappings;
- security model;
- manual configuration instructions;
- build/install evidence references;
- capability-spike decisions.

Suggested logical structure:

```text
hr-access-rob-authorization/
│
├── src/
│   ├── tables/
│   ├── roles/
│   ├── acl/
│   ├── scripts/
│   ├── flows/
│   ├── reports/
│   └── other-supported-metadata/
│
├── test/
│   ├── unit/
│   ├── atf/
│   └── fixtures/
│
├── docs/
│   ├── TRACEABILITY.md
│   ├── FIELD-MAP.md
│   ├── STATE-MODEL.md
│   ├── SECURITY-MODEL.md
│   ├── MANUAL-CONFIGURATION.md
│   ├── TEST-MATRIX.md
│   ├── CAPABILITY-MATRIX.md
│   └── BUILD-LEDGER.md
│
└── package/build configuration
```

Exact repository structure may follow SDK conventions, but these controlled document functions shall be preserved.

---

# 6. Class A Candidate Inventory

The following are expected to be Class A unless the SDK capability spike proves otherwise:

| Artifact | Expected Class | Wave |
|---|---|---:|
| Application metadata | A | 1 |
| Custom roles | A | 1 |
| ROB Configuration table | A | 1 |
| ROB Access Item Reference table | A | 1 |
| ROB Authorization Form table | A | 1 |
| Authorized Access Detail table | A | 1 |
| Custom table fields | A | 1 |
| Number defaults | A | 1 |
| Unique constraints / indexes | A | 1 |
| Custom choice values | A | 1 |
| Table ACLs where supported | A | 7 |
| Field ACLs where supported | A | 7 |
| Shared security helper | A | 7 |
| Decision-engine script/service | A | 3 |
| Expiration-calculation helper | A | 3 |
| Idempotency helpers | A | 3–6 |
| Supporting constants / controlled reason codes | A | 3 |
| Runtime validation scripts | A | 1–8 |
| Source-side test helpers | A | 1–8 |

---

# 7. Application Definition

## Artifact

Scoped application:

**HR Access ROB Authorization**

Scope:

`x_2108496_hr_acces`

## Classification

**Class A**

## Requirement

The scoped application definition shall remain source-controlled through the SDK project.

---

# 8. Custom Roles

Five required roles:

- Staffing Fulfiller
- Analytics Fulfiller
- Operations Manager
- Compliance Viewer
- ROB Administrator

## Classification

**Class A**

Role definitions shall be package/source artifacts.

Actual user/group membership is Class C.

The implementation plan explicitly requires exactly these five scoped roles and no requester/subject role.

---

# 9. ROB Configuration Table

## Classification

**Class A**

Includes:

- dictionary;
- field definitions;
- form/list metadata where SDK-supported;
- validation logic;
- ACLs.

## Seed Data

Baseline configuration record may be:

- Class A where safe and environment-neutral;
- partially Class C where values reference environment-specific groups.

The schema is Class A regardless.

---

# 10. ROB Access Item Reference Table

## Classification

**Class A**

Includes:

- schema;
- stable codes;
- routing attributes;
- WPC mapping;
- Form 1768 mapping.

## Baseline Records

Initial six access items should be source-seeded where SDK/source support is reliable and where references do not rely on environment-specific sys_ids.

Environment-specific group references should not be embedded.

---

# 11. ROB Authorization Form Table

Internal table:

`x_2108496_hr_acces_rob_auth`

## Classification

**Class A**

Includes:

- fields;
- choices;
- number generation;
- relationships;
- ACLs;
- indexes;
- lifecycle support fields.

The implementation plan explicitly identifies this table and its required number/default behavior.

---

# 12. Authorized Access Detail Table

Internal table:

`x_2108496_hr_acces_auth_detail`

## Classification

**Class A**

Includes:

- fields;
- number generation;
- uniqueness controls;
- ACLs;
- parent relationships.

Manual UI creation shall remain restricted.

---

# 13. Number Generation

Approved default:

```javascript
javascript:global.getNextObjNumberPadded();
```

for the applicable auto-number pattern.

## Classification

**Class A**

The implementation plan explicitly corrected the default to this expression.

---

# 14. Decision Engine

## Artifact

Reusable authorization decision service.

## Classification

**Class A**

## Wave

3

## Responsibilities

- configuration validation;
- candidate-form selection;
- status evaluation;
- version evaluation;
- coverage comparison;
- material-change rule application;
- decision-path output;
- proposed expiration;
- reason codes.

## Prohibited Side Effects

No creation of:

- Authorization Form;
- Access Detail;
- task;
- approval;
- signature;
- PDF.

---

# 15. Expiration Calculation

## Classification

**Class A**

Central helper/service.

Inputs:

- recertification date;
- grace window;
- effective/signing date;
- access end date.

The calculation shall not be duplicated across flows.

---

# 16. Idempotency Logic

## Classification

**Class A**

Required for:

- Authorization Form creation;
- Access Details;
- fulfillment tasks;
- reminder events;
- lapse processing;
- PDF finalization;
- state transitions.

The SDK plan explicitly requires idempotency keyed to stable business identifiers.

---

# 17. Security Helper

## Classification

**Class A**

## Purpose

Reusable server-side contextual access logic for custom-table ACLs.

The Wave 7 plan explicitly calls for one shared server-side helper rather than duplicated scripted ACL logic.

---

# 18. ACLs

## Custom-Table ACLs

Expected:

**Class A**

where SDK support is reliable.

## Native HRSD Cross-Scope ACL Changes

Must first be assessed.

Do not assume they are Class A.

They may be:

- B;
- C;
- or unsupported.

The Wave 2 plan specifically requires a feasibility gate for cross-scope HRSD modifications.

---

# 19. Class B Candidate Inventory

Likely Class B artifacts include:

| Artifact | Expected Class | Wave |
|---|---|---:|
| Employee Center / HR Service configuration | B | 2 |
| Native HR Case service configuration | B | 2 |
| Native HR Task templates | B | 5 |
| Flow Designer flows/subflows | B | 3–6 |
| Native approvals | B | 4 |
| Document Templates | B | 4 |
| Document/signature participants | B | 4 |
| ServiceNow Sign configuration | B | 4 |
| Final PDF generation workflow | B | 4 |
| Reports | B | 8 |
| Dashboards | B | 8 |
| ATF tests | B, with source where supported | 1–8 |
| Notifications | B / A depending supported metadata | 4–7 |

These classifications shall be confirmed by actual Australia-release SDK behavior rather than assumed.

---

# 20. Employee Center Services

Two Employee Center service paths are required:

- Request Access to HR Systems — Staffing
- Request Access to HR Data and Reports — Analytics

## Expected Classification

**Class B**

Reason:

The implementation plan requires native HR service / Employee Center configuration and a Wave 2 feasibility check rather than direct manipulation of protected catalog internals.

---

# 21. Protected Service Catalog Tables

The implementation shall not directly manipulate protected Service Catalog internals through unsupported scripts or GlideRecord writes.

Examples include protected structures such as:

- variable-set relationships;
- choice internals;
- other native catalog metadata.

Where Service Catalog/HR Service configuration is required:

- configure through supported native mechanisms;
- transform/export if supported;
- document manual steps where necessary.

This remains a key architectural boundary.

---

# 22. Native HR Case Field Extensions

## Classification

**TBD through Wave 2 feasibility gate**

Possible outcomes:

### Class A

If supported cleanly by SDK.

### Class B

If fields must be configured in ServiceNow and transformed.

### Class C

If specific environment-only setup is required.

### Class D

If the modification is unsupported and a native alternative must be used instead.

No custom replacement request table shall be introduced merely because cross-scope modification is difficult.

## R2 Option B Disposition

For the Position, Organization / DIR-DIV, and Supervisor snapshot population
artifact, the Australia PDI result is **Class D — unsupported/blocking**. The
approved agency target is a platform-owner, HR Core-owned implementation on the
native Payroll and Workforce Administration case subclasses. It is not Class A
application source and must not be represented by a broad cross-scope
privilege or substitute custom table.

Where the agency governance model permits, the selected HR Core artifact may
later be managed as a platform-owner Class B or C configuration. That future
classification depends on the actual approved artifact and evidence; Option B
does not preselect it.

---

# 23. Native HR Task Field Extensions

Same classification rule as HR Case fields.

Feasibility shall be proven before implementation.

---

# 24. Flow Designer Artifacts

Expected flows/subflows include:

- Determine Authorization Path integration/orchestration;
- Prepare Authorization Draft;
- employee/signature sequencing;
- supervisor approval/signature orchestration;
- fulfillment task creation;
- WPC OM handling;
- daily renewal;
- lapse processing.

## Expected Classification

**Class B**

unless a particular supported SDK representation proves reliable enough for Class A.

The implementation plan explicitly anticipates configure-then-transform treatment for many native platform workflow artifacts.

---

# 25. Document Templates

## Classification

**Class B**

## Wave

4

## Reason

Must be configured and proven using current Australia Document Templates behavior.

The implementation plan explicitly requires a capability spike before assuming template/signature behavior.

---

# 26. ServiceNow Sign / Signature Configuration

## Classification

**Class B**, pending capability validation.

Includes:

- employee participant;
- supervisor participant;
- sequencing;
- completion evidence;
- signer identity/timestamp behavior.

No custom signature table shall substitute for native capability.

---

# 27. Native Supervisor Approval

## Classification

**Class B**

Native approval configuration shall remain authoritative.

The application may snapshot approval evidence but shall not create a custom approval subsystem.

---

# 28. Final PDF Generation

## Classification

**Class B**

because output behavior depends on native Document Templates/document-signature capabilities.

Supporting validation or attachment-finalization scripts may be Class A.

---

# 29. PDF Relocation / Finalization Logic

If native generation attaches the PDF to the HR Case and controlled movement is required:

- validation helper may be Class A;
- Flow orchestration may be Class B;
- final behavior must be proven during Wave 4.

Do not assume attachment behavior.

---

# 30. Notifications

Notification classification may vary.

## Native Approval/Document Notifications

**Class B**

## Custom notification metadata

Potentially:

- A if fully supported by SDK;
- B if configured then transformed.

## Environment-specific mail routing

**Class C**

The build ledger shall record the final classification per notification.

---

# 31. Reports

RPT-1 through RPT-8:

## Expected Classification

**Class B**

The SDK plan specifically identifies reports/dashboards as typical configure-then-transform artifacts.

Supporting query/script logic may be Class A.

---

# 32. Dashboards

## Classification

**Class B**

Includes:

- operational dashboards;
- compliance dashboards;
- leadership dashboard.

Dashboard sharing/group visibility may also have Class C components.

---

# 33. ATF

## Classification

Generally **Class B**, with source-managed test support where available.

ATF shall not be forced into Class A if the ServiceNow SDK does not reliably represent required test artifacts.

---

# 34. Class C Candidate Inventory

Likely Class C artifacts include:

| Artifact | Class |
|---|---|
| PDI alias/credential setup | C |
| Production instance connection | C |
| Synthetic user creation where not source-seeded | C |
| Group memberships | C |
| Staffing group mapping | C |
| Analytics group mapping | C |
| Exception group mapping | C |
| Renewal-copy group mapping | C |
| Operations Manager assignments | C/runtime data |
| email enablement/configuration | C |
| plugin activation where manual | C |
| Employee Center enablement if environment-level | C |
| production document/signature platform settings | C |
| production recertification value if operationally maintained | C |
| environment-specific system properties | C |

---

# 35. Group Definitions Versus Membership

Group behavior should be separated.

## Application configuration reference

Class A/B as appropriate.

## Actual environment group record

Often Class C.

## Actual user membership

Class C.

This avoids packaging production people/memberships into application source.

---

# 36. Synthetic PDI Identities

Synthetic users used for:

- Employee
- Supervisor
- Staffing
- Analytics
- OM
- Compliance
- ROB Admin
- Unrelated User

are **Class C test-environment setup**, unless automated fixture creation is supported safely.

No production identity data shall be packaged into source.

---

# 37. Plugin / Capability Activation

If a required plugin/application must be enabled manually in the PDI:

**Class C**

The capability itself is not recreated by the scoped application.

---

# 38. Production Assignment Groups

Production group references shall be documented and set during environment configuration.

They are not source-hard-coded.

---

# 39. Class D Candidate Inventory

The following are Class D for MVP unless requirements change:

| Capability | Status |
|---|---|
| Delegated submission | Deferred |
| Organization-level submission | Deferred |
| Requester signing for subject | Prohibited |
| Automated ARM provisioning | Out of scope |
| Automated OAS provisioning | Out of scope |
| Automated FPPS/WTTS provisioning | Out of scope |
| Automated eOPF provisioning | Out of scope |
| Automated USA Staffing provisioning | Out of scope |
| Automated external deprovisioning | Out of scope |
| Custom request parent | Prohibited architecture |
| Custom fulfillment task | Prohibited architecture |
| Custom signature engine | Prohibited architecture |
| Custom approval engine | Prohibited architecture |
| Custom PDF repository table | Prohibited architecture |
| Custom authentication | Prohibited architecture |
| Custom reminder-history table | Not approved unless native evidence insufficient |

---

# 40. Delegated Submission

## Classification

**Class D — Deferred**

MVP requires:

```text
Requester = Subject = Logged-in User
```

Future delegated design remains documented but shall not be implemented in MVP.

The requirements package itself labels delegated submission as subsequent phase for MVP implementation.

---

# 41. Organization-Level Submission

## Classification

**Class D — Deferred**

Future design may allow one parent process with separate subject-level authorization records.

No aggregate shared authorization record is permitted.

---

# 42. Direct External Provisioning

## Classification

**Class D — Out of Scope**

MVP uses notify-and-track fulfillment.

No direct external provisioning integration shall be introduced for:

- ARM;
- OAS;
- FPPS;
- eOPF;
- USA Staffing.

The architecture explicitly keeps external provisioning outside the ServiceNow MVP.

---

# 43. Direct External Deprovisioning

## Classification

**Class D — Out of Scope**

RPT-8 provides the external deprovisioning worklist.

ServiceNow does not automatically remove external access in MVP.

---

# 44. Custom Request Table

## Classification

**Class D — Prohibited**

Native `sn_hr_core_case` is required.

---

# 45. Custom Task Table

## Classification

**Class D — Prohibited**

Native `sn_hr_core_task` is required.

---

# 46. Custom Signature / Approval / PDF Tables

## Classification

**Class D — Prohibited**

Native capabilities shall be used.

The implementation plan explicitly prohibits custom business tables for request, task, signature, approval, PDF, exception, audit, and attachment purposes.

---

# 47. Unsupported Cross-Scope Modification

If a desired native-table modification is technically unsupported:

1. record the requirement;
2. document capability evidence;
3. search for a valid native alternative;
4. use a source/transform/manual approach if supported;
5. if no supported implementation exists, classify affected artifact/capability as D/Blocked.

Do not create duplicate custom architecture.

---

# 48. Artifact Classification by Wave — Wave 1

| Artifact | Class |
|---|---|
| App definition | A |
| Five roles | A |
| Four custom tables | A |
| Custom fields | A |
| numbering | A |
| unique constraints | A |
| access item reference model | A |
| baseline access seed records | A/C depending environment values |
| initial config schema | A |
| actual environment group refs | C |
| source/build validation | A |

---

# 49. Artifact Classification by Wave — Wave 2

| Artifact | Class |
|---|---|
| Employee Center HR services | B |
| HR Case configuration | B / A after feasibility |
| native field additions | TBD A/B/C |
| intake variables/record producers | B |
| access reference collector | B |
| client/server validation | A/B |
| self-submission enforcement | A/B |
| environment portal configuration | C where needed |
| unsupported cross-scope change | D |

---

# 50. Artifact Classification by Wave — Wave 3

| Artifact | Class |
|---|---|
| Decision engine | A |
| expiration helper | A |
| reason codes | A |
| duplicate detection | A |
| material-change helper | A |
| case decision output fields | A/B depending native extension |
| flow orchestration around engine | B |
| test fixtures | A/C |
| ATF decision tests | B |

---

# 51. Artifact Classification by Wave — Wave 4

| Artifact | Class |
|---|---|
| Authorization lifecycle scripts | A |
| lifecycle flow | B |
| Document Template | B |
| employee signature config | B |
| supervisor native approval | B |
| supervisor signature config | B |
| PDF generation | B |
| attachment validation helper | A |
| final PDF movement logic | A/B |
| production signer/template configuration | C |
| unsupported document capability | D/Blocked |

---

# 52. Artifact Classification by Wave — Wave 5

| Artifact | Class |
|---|---|
| task-creation helper/idempotency | A |
| fulfillment flow | B |
| Staffing task template | B |
| Analytics task template | B |
| OM task template | B |
| Exception task template | B |
| environment assignment groups | C |
| direct external provisioning | D |

---

# 53. Artifact Classification by Wave — Wave 6

| Artifact | Class |
|---|---|
| renewal calculation helper | A |
| reminder idempotency helper | A |
| lapse evaluator | A |
| daily scheduled flow | B |
| renewal reminders | A/B |
| lapse notification | A/B |
| optional copy group | C |
| direct deprovisioning | D |

---

# 54. Artifact Classification by Wave — Wave 7

| Artifact | Class |
|---|---|
| custom-table ACLs | A |
| field ACLs | A |
| shared security helper | A |
| native HRSD security config | B/C as needed |
| role/group memberships | C |
| attachment-security configuration | B/A based on capability |
| notification privacy templates | A/B |
| impersonation identities | C |

---

# 55. Artifact Classification by Wave — Wave 8

| Artifact | Class |
|---|---|
| Reports RPT-1–RPT-8 | B |
| Dashboards | B |
| ATF suites | B |
| source-side tests | A |
| synthetic test records | C/A fixture depending method |
| UAT evidence | C/documentation |
| runbooks | source-controlled documentation |
| clean-install procedure | source-controlled documentation |
| environment promotion checklist | source-controlled documentation |

---

# 56. Build Evidence Categories

Every wave shall distinguish:

- Source Evidence
- Build Evidence
- Install Evidence
- Runtime Evidence
- Security Evidence
- UAT Evidence

The implementation plan explicitly requires these evidence types to remain separate rather than treating successful source generation as proof of runtime behavior.

---

# 57. Source Evidence

Examples:

- committed `.now.ts`;
- source metadata;
- reviewed diff;
- requirement comments;
- no unexpected artifacts.

Source evidence proves:

> the intended artifact exists in source.

It does not prove runtime behavior.

---

# 58. Build Evidence

Examples:

- SDK build command succeeds;
- frozen-key build succeeds;
- no type errors;
- expected package metadata emitted.

Build success does not prove install or runtime behavior.

---

# 59. Install Evidence

Examples:

- package installs successfully;
- expected tables/fields/roles exist;
- no prohibited artifacts installed;
- no install error.

Install evidence does not prove runtime behavior.

---

# 60. Runtime Evidence

Examples:

- form opens;
- number generated;
- ACL works;
- decision returns expected path;
- Flow executes;
- PDF generates;
- task created;
- reminder behaves correctly.

Runtime proof is mandatory for functional acceptance.

---

# 61. Security Evidence

Examples:

- impersonation test;
- denied direct PDF URL;
- field write denied;
- contextual read allowed;
- unrelated user denied.

---

# 62. UAT Evidence

Examples:

- business scenario completed;
- expected result confirmed;
- screenshot/test record;
- approver acceptance.

---

# 63. Build Ledger

A controlled build ledger shall record each artifact.

Minimum fields:

| Field | Description |
|---|---|
| Artifact ID | Stable identifier |
| Requirement | Source requirement |
| Wave | Delivery wave |
| Artifact Name | ServiceNow name |
| Artifact Type | Table/Flow/ACL/etc. |
| Class | A/B/C/D |
| Source Path | Repo path if applicable |
| Native Configuration Location | ServiceNow path/module |
| Manual Step | Yes/No |
| Environment-Specific | Yes/No |
| Build Status | status |
| Install Status | status |
| Runtime Status | status |
| Evidence | reference |
| Notes | limitations/decisions |

---

# 64. Class A Exit Criteria

A Class A artifact is complete only when:

- source committed;
- build passes;
- frozen-key build passes where required;
- clean install succeeds;
- runtime behavior validated;
- tests pass;
- documentation updated.

---

# 65. Class B Exit Criteria

A Class B artifact is complete only when:

- native configuration completed;
- configuration validated;
- transform/export completed where supported;
- transformed artifact reviewed;
- reinstall/clean-install behavior understood;
- manual residual steps documented;
- runtime test passed.

---

# 66. Class C Exit Criteria

A Class C artifact is complete only when:

- exact manual step documented;
- owning role identified;
- environment-specific value identified;
- validation step documented;
- production/deployment runbook includes it.

A Class C artifact may be intentional and acceptable.

Undocumented manual setup is not acceptable.

---

# 67. Class D Exit Criteria

A Class D item requires:

- explicit deferred/unsupported status;
- reason;
- affected requirement;
- business impact;
- future dependency;
- target phase/environment if known;
- no hidden workaround.

---

# 68. AI / Codex Boundary

Codex may assist with:

- source generation;
- tests;
- documentation;
- validation scripts;
- artifact inventories.

Codex shall not become a production runtime dependency.

The approved architecture explicitly states there shall be no production dependency on AI tooling.

---

# 69. Codex Source-Generation Rule

For Class A artifacts, Codex shall:

1. inspect existing repository state;
2. map change to requirement;
3. modify only the authorized artifact set;
4. run build;
5. run frozen-key build where required;
6. review diff;
7. verify no unexpected metadata;
8. provide runtime validation instructions;
9. update traceability/build ledger.

---

# 70. Codex Class B Rule

For Class B artifacts, Codex shall not fabricate unsupported source representations.

Instead it shall:

- define exact native configuration steps;
- identify expected transform/export mechanism;
- specify validation;
- update documentation.

If transform support is unknown, mark it for capability validation.

---

# 71. Codex Class C Rule

Codex may document manual/environment steps but shall not hard-code environment-specific identities to avoid them.

Examples:

- group sys_ids;
- production user identities;
- production email recipients.

---

# 72. Codex Class D Rule

Codex shall not implement Class D functionality.

It may:

- document future design;
- maintain tests marked deferred;
- preserve interfaces/extension points where explicitly approved.

---

# 73. No `--reinstall` Shortcut

The implementation plan prohibits use of `--reinstall` as a normal workaround for deployment problems.

Deployment issues shall be diagnosed rather than masked.

---

# 74. Frozen-Key Build Requirement

Each applicable wave shall validate:

- standard build;
- frozen-key build.

Both must pass before wave completion where the SDK project requires this control.

---

# 75. Branching Rule

Recommended/approved source-control pattern:

- one branch per wave;
- do not merge/tag until wave gates pass;
- annotated tag after accepted wave baseline.

The implementation plan explicitly includes one-branch-per-wave and gated merge/tag behavior.

---

# 76. Wave Tagging

Suggested logical tags:

```text
wave-1-complete
wave-2-complete
...
wave-8-complete
```

Exact repository naming conventions may differ, but accepted wave baselines shall be identifiable.

---

# 77. Defect Protocol

When an implementation defect occurs:

1. reproduce exact failure;
2. identify artifact class;
3. determine whether source/config/environment is responsible;
4. make smallest supported correction;
5. rerun relevant build/install/runtime tests;
6. avoid unrelated artifact changes;
7. update documentation;
8. rerun regression.

---

# 78. Unsupported Artifact Stop Rule

Development shall stop for the affected requirement when:

- required native capability is unavailable;
- the only apparent implementation requires prohibited architecture;
- required cross-scope change is unsupported;
- source transformation is unreliable and no controlled manual path exists;
- security cannot be implemented safely.

The limitation shall become a capability-matrix finding rather than an improvised workaround.

---

# 79. Artifact Classification Test

Each planned artifact shall answer four questions:

### Q1

Can the SDK author it reliably?

If yes → Class A candidate.

### Q2

Does correct implementation require native ServiceNow UI configuration first?

If yes → Class B candidate.

### Q3

Is it inherently environment-specific?

If yes → Class C candidate.

### Q4

Is it unsupported, out of scope, or deferred?

If yes → Class D.

---

# 80. Artifact Classification Matrix — Consolidated

| Artifact | Class | Wave |
|---|---|---:|
| Scoped application | A | 1 |
| Roles | A | 1 |
| ROB Configuration schema | A | 1 |
| Access Item schema | A | 1 |
| Authorization Form schema | A | 1 |
| Access Detail schema | A | 1 |
| seed access items | A/C | 1 |
| environment group refs | C | 1 |
| Employee Center services | B | 2 |
| HR Case extensions | A/B/C TBD | 2 |
| HR Task extensions | A/B/C TBD | 2/5 |
| self-submission validation | A/B | 2 |
| decision engine | A | 3 |
| expiration helper | A | 3 |
| decision orchestration | B | 3 |
| Document Templates | B | 4 |
| employee signature | B | 4 |
| supervisor approval | B | 4 |
| supervisor signature | B | 4 |
| lifecycle helpers | A | 4 |
| final PDF workflow | B | 4 |
| task idempotency | A | 5 |
| fulfillment flow | B | 5 |
| native HR task templates | B | 5 |
| daily renewal logic helper | A | 6 |
| scheduled renewal flow | B | 6 |
| notifications | A/B | 4–7 |
| ACLs | A | 7 |
| security helper | A | 7 |
| group membership | C | 7 |
| reports | B | 8 |
| dashboards | B | 8 |
| ATF | B | 1–8 |
| manual runbooks | Controlled docs | all |
| delegated submission | D | Future |
| org-level submission | D | Future |
| direct provisioning | D | Future/Out |
| direct deprovisioning | D | Future/Out |
| custom request/task/signature architecture | D | Prohibited |

---

# 81. Artifact Classification Acceptance Criteria

Appendix K is successfully implemented when:

1. every expected artifact has a class;
2. Class A artifacts are source-controlled;
3. Class B artifacts have configuration/transform procedures;
4. Class C artifacts have explicit environment instructions;
5. Class D items are visibly deferred/unsupported;
6. no environment-specific sys_ids are silently embedded;
7. no unsupported native configuration is recreated through prohibited custom tables;
8. all Class A artifacts pass build/install/runtime validation;
9. all Class B artifacts have runtime validation;
10. Class C setup appears in deployment runbooks;
11. Class D requirements remain in traceability;
12. source/build/install/runtime evidence remain distinct;
13. the repository remains the authoritative source for supported application metadata;
14. production does not depend on Codex or other AI tooling.

---

## R3 Conditional Source Disposition

The deterministic decision modules and approved native-subclass decision-output
fields are Class A source-first artifacts. The conditional package intentionally
does not activate runtime orchestration or persistence. Agency/runtime tests
whose authoritative context depends on native profile snapshots remain blocked
by `R2-AGENCY-01`; this does not reclassify or close the R2 dependency.

# 82. Baseline SDK Artifact Statement

The HR Access ROB Authorization product shall use the ServiceNow SDK as the **source-controlled development backbone for supported artifacts**, while preserving native ServiceNow configuration where the platform requires it.

Artifacts shall not be forced into source merely to claim a code-first implementation.

Native UI configuration shall be transformed and governed where supported.

Environment-specific values shall remain documented environment configuration.

Unsupported or deferred requirements shall remain explicit rather than being replaced with insecure or architecturally inconsistent workarounds.

The development objective is therefore not “everything in code,” but:

> **every artifact implemented through the most supportable ServiceNow mechanism, with every supported artifact reproducible, traceable, tested, and governed.**
