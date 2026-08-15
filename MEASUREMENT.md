# MEASUREMENT.md
## HR Access Rules of Behavior Authorization — Codex / ServiceNow SDK Development Measurement

**Application:** HR Access ROB Authorization
**ServiceNow target:** Australia release
**Development method:** Codex + ServiceNow SDK
**Purpose:** Establish a consistent package-level measurement method for estimating effort, identifying sources of rework, and improving forecasting against funding and deadline constraints.

---

## 1. Scope

This file defines the required measurement method for every development or remediation work package.

Measurement begins with the **first action taken on a package** and ends only when the package is **deployed and verified on the ServiceNow instance**. A successful local build, source commit, or package generation is not the end of measurement.

Each package close-out must record:

- measurement shape;
- wall-clock calendar span;
- active session duration;
- token usage where required and exposed;
- agent-turn classification;
- reviewer interventions;
- defects found;
- deployment and instance-verification evidence;
- package count-assertion / scope assertion.

The objective is to create a usable package-level base rate for forecasting rather than an approximate activity log.

---

## 2. Wall-Clock Measurement

**Start:** the first action taken on the package.

Examples include:

- opening or inspecting the package requirements;
- reading the applicable PRD section;
- creating the package branch/worktree;
- making the first source or configuration change;
- beginning a capability spike that is part of the package.

**End:** the package is both:

1. deployed to the target ServiceNow instance; and
2. verified on the instance.

Do **not** stop the clock at:

- build success;
- test success only in the local workspace;
- commit;
- pull request;
- package generation;
- install command submission without verification.

Record both:

1. **Calendar span** — first action timestamp through deployed-and-verified timestamp.
2. **Active session duration** — sum of actual working-session time, excluding idle, overnight, or other inactive gaps.

The calendar span by itself must not be presented as elapsed effort for a package that spans multiple sessions because it overstates active effort.

### Required close-out fields

```text
Started:
Deployed and verified:
Calendar span:
Active session duration:
Number of active sessions:
Excluded idle/overnight span:
```

When a package spans multiple sessions, list each session:

| Session | Start | End | Active Duration | Notes |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

**Active session duration = sum of the individual active-session durations.**

---

## 3. Tokens — Budget Instrument

Beginning with **WP9**, record the total tokens used for each package when the session/tool exposes token accounting.

The purpose is **per-package base-rate forecasting against funding and deadline limits**.

### 3.1 What to record

Record the package's actual token accounting from the session/tool itself at close-out:

- input tokens;
- output tokens;
- cache-read tokens, if exposed;
- cache-write tokens, if exposed;
- total tokens as reported or calculated from the exposed categories.

**Never estimate token usage after the fact.**

If the tool does not expose token accounting, record:

`Not exposed by session/tool — no estimate recorded.`

Do not insert a guessed value.

### 3.2 Multi-session / multi-tool packages

If a package spans multiple sessions or tools:

- record each session/tool separately;
- record the actual figure exposed by that session/tool;
- calculate the total from those actual figures;
- do not guess at missing figures.

Example:

| Session / Tool | Input | Output | Cache Read | Cache Write | Total | Accounting Source |
|---|---:|---:|---:|---:|---:|---|
| Session 1 — Codex | | | | | | |
| Session 2 — Codex | | | | | | |
| SDK/other session, if token-accounted | | | | | | |
| **Package total** | | | | | | |

### 3.3 Reporting rule

Token counts must appear in the **package close-out section alongside the count-assertion**, not only in an informal session note.

Before quoting or comparing token figures, state the package's **measurement shape**.

Token averages must not pool packages with different measurement shapes.

---

## 4. Agent Turns

Every agent turn associated with the package must be tagged with **exactly one** category.

Permitted categories:

### `clean`

The turn executed as planned and did not require rework.

Examples:

- implementation followed the approved plan;
- expected test passed;
- planned deployment step completed;
- expected verification completed.

### `spec-ambiguity`

The turn was required to resolve an underspecified or conflicting requirement.

Examples:

- asking the reviewer/user to choose between valid designs;
- re-reading the PRD to resolve an unclear requirement;
- resolving a conflict between active implementation instructions;
- deciding how a business rule must be represented because the specification was incomplete.

Do not use this category merely because normal requirements reading was performed. Use it when ambiguity materially affected the turn.

### `method-rework`

The turn occurred because an earlier technical or implementation approach did not work and had to change.

Examples:

- build error caused a source change;
- assumed API was incorrect;
- chosen SDK artifact representation was unsupported;
- prior implementation logic failed a test and had to be rewritten;
- wrong tool or method had to be replaced.

### `environment`

The turn was spent on deployment/install mechanics, instance state, access, or tooling friction unrelated to the substantive requested change.

Examples:

- nondeterministic install issue;
- missing CLI capability;
- instance authentication failure;
- inaccessible plugin;
- PDI state problem;
- tooling permission issue;
- environment-specific configuration preventing deployment.

Do not use `environment` for an application defect merely because the defect was discovered during deployment.

---

## 5. Turn Classification Rules

Each recorded turn has one and only one category.

Do not:

- multi-tag a turn;
- classify the same turn as both `method-rework` and `environment`;
- retroactively change categories solely to improve package statistics.

When a turn contains more than one activity, classify it by the **primary reason the turn was necessary**.

### Turn log — `turn-by-turn` packages

| Turn | Timestamp / Sequence | Category | Activity / Result | Requirement or Artifact | Notes |
|---:|---|---|---|---|---|
| 1 | | `clean` | | | |
| 2 | | | | | |
| 3 | | | | | |

### Turn totals

| Category | Count |
|---|---:|
| `clean` | |
| `spec-ambiguity` | |
| `method-rework` | |
| `environment` | |
| **Total** | |

The four category counts must equal the package's recorded agent-turn count.

---

## 6. Measurement Shape

Every package must be tagged as exactly one measurement shape before package metrics are quoted.

Allowed values:

### `turn-by-turn`

The package proceeds through discrete plan/build/verify exchanges and uses a per-turn table.

### `one-pass`

The plan is approved once and implementation proceeds through build, deploy, and verification in a single agentic session. The close-out uses a per-step narrative reconstructed from the session.

The measurement shape changed at **WP7**.

Therefore:

> **Turn counts are not comparable across `turn-by-turn` and `one-pass` packages.**

Any cross-package:

- turn average;
- token average;
- rework-rate analysis tied to turns;

must be computed **within a single measurement shape**, not pooled across both shapes.

Always state the shape before quoting a per-package figure.

### Required field

```text
Measurement shape: turn-by-turn | one-pass
```

---

## 7. One-Pass Step Narrative

For `one-pass` packages, record the major steps even though they are not represented as discrete reviewer/agent exchanges.

| Step | Activity | Outcome | Classification if attributable | Evidence |
|---:|---|---|---|---|
| 1 | Plan/baseline | | | |
| 2 | Source changes | | | |
| 3 | Local validation | | | |
| 4 | Build | | | |
| 5 | Deploy/install | | | |
| 6 | Instance verification | | | |

Do not reconstruct artificial "turn counts" from one-pass steps for comparison with turn-by-turn packages.

---

## 8. Reviewer Interventions

Record every point where the reviewer/user:

- corrected direction;
- caught a wrong conclusion;
- redirected scope;
- rejected an assumption;
- supplied a missing constraint that changed implementation.

Do not record only a tally. Record **what the intervention caught** and what changed as a result.

### Required table

| # | Point in Package | Intervention | What It Caught / Corrected | Resulting Change |
|---:|---|---|---|---|
| 1 | | | | |

If there were none, record:

`Reviewer interventions: None.`

A reviewer intervention may coincide with a `spec-ambiguity` or `method-rework` turn, but the intervention log and the turn classification serve different purposes and both should be retained.

---

## 9. Defects Found

Every defect discovered during package execution must be classified as either `silent` or `visible`.

### `silent`

A defect that would have shipped or passed undetected without the specific verification/check that caught it.

Examples:

- a reference qualifier appeared functional but permitted inactive records;
- a PDF generated successfully but mapped the wrong field;
- an ACL worked in the UI but direct attachment URL access bypassed it;
- a Reuse path silently created duplicate Access Details;
- a report total looked plausible but double-counted mixed requests.

The defect is classified `silent` because the system did not expose the problem on its own.

### `visible`

A defect that surfaced independently through an obvious failure.

Examples:

- build error;
- failed automated test;
- install failure;
- runtime exception;
- visibly blank required field;
- obviously wrong output.

### Defect log

| Defect ID | Classification | Detection Check | Defect | Would It Have Shipped Without This Check? | Resolution | Retest |
|---|---|---|---|---|---|---|
| | `silent` / `visible` | | | | | |

If no defects were found, record:

`Defects found: None.`

---

## 10. Count-Assertion / Scope Assertion

Every package close-out must state what the package was expected to create or change and confirm the resulting counts.

This protects against:

- duplicate records;
- unplanned metadata;
- missing artifacts;
- scope creep;
- accidental custom architecture.

Examples:

```text
Expected custom business-table count: 4
Actual custom business-table count: 4

Expected new Access Detail records from a Reuse test: 0
Actual: 0

Expected Staffing fulfillment tasks: 1
Actual: 1

Expected Analytics fulfillment tasks: 1
Actual: 1

Expected authoritative final PDFs: 1
Actual: 1
```

The assertion must be specific to the work package.

When applicable, also assert **zero prohibited artifacts**.

---

## 11. Package Start Record

Complete this at the beginning of each package.

```markdown
## <PACKAGE-ID> — <PACKAGE NAME>

### Start Record

- Measurement shape:
- Start timestamp:
- Active session 1 start:
- Branch / worktree:
- Starting commit:
- Target instance:
- Applicable PRD requirements:
- Applicable appendix/test IDs:
- Planned artifact class(es):
- Planned package scope:
- Expected count-assertion at close-out:
```

---

## 12. Package Close-Out Record

Complete this only after the package is deployed **and verified on the instance**.

```markdown
### Close-Out

#### Measurement shape
- Shape: `turn-by-turn` | `one-pass`

#### Wall-clock
- Started:
- Deployed and verified:
- Calendar span:
- Active session duration:
- Number of active sessions:
- Idle/overnight gaps excluded from active duration:

#### Token accounting
> Required from WP9 onward when exposed by the session/tool.

| Session / Tool | Input | Output | Cache Read | Cache Write | Total |
|---|---:|---:|---:|---:|---:|
| | | | | | |
| **Total** | | | | | |

If unavailable:
`Not exposed by session/tool — no estimate recorded.`

#### Agent turns
| Category | Count |
|---|---:|
| `clean` | |
| `spec-ambiguity` | |
| `method-rework` | |
| `environment` | |
| **Total** | |

#### Reviewer interventions
| # | What It Caught / Corrected | Resulting Change |
|---:|---|---|
| | | |

#### Defects found
| Defect ID | `silent` / `visible` | Detection Check | Resolution | Retest |
|---|---|---|---|---|
| | | | | |

#### Count-assertion
- Expected:
- Actual:
- Result: PASS / FAIL

#### Build / deployment evidence
- Normal SDK build:
- Frozen-key build:
- Commit:
- Package/deployment:
- Instance installation:
- Runtime verification:
- Security verification, if applicable:
- Test evidence:
- Evidence references:

#### Package result
- Status: PASS / FAIL / BLOCKED
- Remaining blockers:
- Follow-up package, if any:
```

---

## 13. Multi-Session Package Example

A package begins Monday at 09:00, work stops at 12:00, resumes Tuesday from 14:00 to 17:30, and is deployed and verified Tuesday at 17:30.

Record:

```text
Start: Monday 09:00
End: Tuesday 17:30
Calendar span: 32h 30m
Active session duration: 6h 30m
```

Do **not** report 32h 30m as active engineering effort.

---

## 14. Analysis Rules

When package history is later used for forecasting:

1. State the measurement shape first.
2. Compare `turn-by-turn` packages only with other `turn-by-turn` packages for turn-based averages.
3. Compare `one-pass` packages only with other `one-pass` packages for turn/token averages.
4. Do not estimate missing token figures.
5. Use active session duration for effort/base-rate analysis.
6. Use calendar span separately for delivery-latency analysis.
7. Preserve `environment` turns because they measure delivery friction, but do not treat them as substantive implementation complexity.
8. Preserve reviewer interventions as qualitative evidence of specification/implementation risk.
9. Track `silent` defects carefully because they estimate the value of targeted verification that normal build/test success would not reveal.

---

## 15. Recommended Derived Metrics

These may be calculated from recorded facts; they should not replace the raw measurements.

### Rework turn rate — turn-by-turn packages only

```text
(method-rework turns + spec-ambiguity turns) / total turns
```

Report `environment` separately rather than automatically treating it as implementation rework.

### Environment friction rate — turn-by-turn packages only

```text
environment turns / total turns
```

### Reviewer intervention rate

For comparable packages:

```text
reviewer interventions / package
```

### Silent-defect yield

```text
silent defects / package
```

or, where the test/check count is known:

```text
silent defects / targeted verification checks
```

### Token rate — same measurement shape only

```text
actual exposed package tokens / active session hour
```

Do not calculate this metric for packages whose token accounting was not exposed.

---

## 16. Governance Rules

- Measurement entries are part of package close-out evidence.
- Do not alter historical package measurements merely to normalize later packages.
- Corrections to a measurement entry should be identified as corrections.
- Do not mix measurement shapes in a pooled turn/token average.
- Do not infer token counts.
- Do not close wall-clock measurement before instance verification.
- Do not classify an environment failure as a product defect without evidence.
- Do not omit reviewer interventions that materially changed implementation.
- Do not omit a defect because it was fixed within the same package.
- Do not label a defect `visible` merely because a targeted test exposed it; if the targeted check was necessary to reveal an otherwise passing result, it is `silent`.

---

## 17. Current Product Baseline Note

The active HR Access ROB Authorization remediation/completion effort targets the **ServiceNow Australia release**.

The approved electronic Rules of Behavior baseline is the **April 2026 NSF Form 1768**.

Package measurements should identify the PRD/requirement baseline used so that work performed against earlier Zurich-era assumptions is distinguishable from Australia remediation and completion work.

---

## 18. Definition of Done for Measurement

A work package is not measurement-complete until:

1. measurement shape is recorded;
2. start and deployed-and-verified timestamps are recorded;
3. calendar span is recorded;
4. active session duration is recorded;
5. multi-session durations are itemized where applicable;
6. token accounting is recorded from actual exposed accounting from WP9 onward, or explicitly marked unavailable without estimation;
7. every recorded agent turn has exactly one valid category where the package is turn-by-turn;
8. turn-category totals reconcile to total recorded turns;
9. one-pass packages contain the required step narrative;
10. reviewer interventions are documented with what they caught;
11. defects are classified `silent` or `visible`;
12. count-assertion is recorded;
13. build/deploy/instance-verification evidence is recorded;
14. package status is stated;
15. the record is completed only after instance verification.

---

# Package Measurement Records

## R0 — Australia / PRD Baseline Synchronization

### Start Record

- Measurement shape: turn-by-turn
- Start timestamp: 2026-08-15 08:45 EDT
- Active session 1 start: 2026-08-15 08:45 EDT
- Branch / worktree: remediation/00-australia-prd-baseline
- Starting commit: 8dfd5ecd61b6b641f9d0dc9b15b050a7a39c859f
- Target instance: Australia PDI
- Applicable PRD requirements: Repository and documentation governance; Australia remediation baseline
- Applicable appendix/test IDs: Appendices A–O; Appendix K — SDK Artifact Classification; Appendix L — PDI Capability Validation Matrix
- Planned artifact class(es): Documentation / repository governance
- Planned package scope: Rebaseline the existing Zurich-derived repository to the approved Australia PRD and April 2026 NSF Form 1768 baseline without intentionally changing ServiceNow application metadata or runtime behavior.
- Expected count-assertion at close-out:
  - Application metadata files intentionally changed: 0
  - New custom business tables: 0
  - Changed generated stable keys: 0
  - New runtime processes: 0
  - New external integrations: 0

### Turn Log

| Turn | Timestamp / Sequence | Category | Activity / Result | Requirement or Artifact | Notes |
|---:|---|---|---|---|---|
| 1 | R0-01 | `clean` | Captured Git repository baseline: working-tree status, current branch, starting commit, recent history, and existing tags. | Repository baseline | Application source showed no uncommitted changes; documentation changes were identified. |
| 2 | R0-02 | `clean` | Preserved pre-R0 baseline and established the R0 remediation branch; inspected the replacement PRD and Zurich archive. | Repository governance | New PRD and archive structure were confirmed as R0 documentation changes. |
| 3 | R0-03 | `spec-ambiguity` | Clarified where and how the live R0 record should be maintained in `MEASUREMENT.md` and corrected measurement shape to reflect the actual package execution. | `MEASUREMENT.md` | Live package data belongs after the permanent measurement standard, not inside the reusable template. |
| 4 | R0-04 | `clean` | Reconciled active governance and supporting documentation to the Australia / April 2026 baseline, archived Zurich-era prompts, recorded R1/R2 implementation deltas, and began R0 validation. | R0 documentation baseline | No application metadata or runtime source was intentionally changed. |

### Reviewer Interventions

| # | Point in Package | Intervention | What It Caught / Corrected | Resulting Change |
|---:|---|---|---|---|
| 1 | R0 startup procedure | Reviewer identified that the original Step 1 instructions were unclear. | The procedure mixed repository-baseline capture with premature manual measurement-entry instructions and did not make the immediate action sufficiently clear. | R0 startup was simplified to first capture the repository state, then populate the measurement record from actual values. |

### Close-Out

#### Measurement shape
- Shape: `turn-by-turn`

#### Wall-clock
- Started: 2026-08-15 08:45:00 EDT
- Deployed and verified: 2026-08-15 09:47:39 EDT
- Calendar span: 1h 2m 39s
- Active session duration: 1h 2m 39s
- Number of active sessions: 1
- Idle/overnight gaps excluded from active duration: None

| Session | Start | End | Active Duration | Notes |
|---|---|---|---|---|
| 1 | 2026-08-15 08:45:00 EDT | 2026-08-15 09:47:39 EDT | 1h 2m 39s | Baseline review, documentation reconciliation, validation, deployment, and Australia verification. |

#### Token accounting

Not exposed by session/tool — no estimate recorded.

#### Turn totals

| Category | Count |
|---|---:|
| `clean` | 3 |
| `spec-ambiguity` | 1 |
| `method-rework` | 0 |
| `environment` | 0 |
| **Total** | **4** |

#### Defects

| # | Type | Finding | Disposition |
|---:|---|---|---|
| 1 | `silent` | Active Wave 2 pilot prompt identified Zurich as the current PDI release. | Prompt set archived as historical evidence. |
| 2 | `silent` | Active architecture directed intake to create requested access-detail records. | Corrected to retain request input on the HR Case and defer governed artifact creation to Wave 4. |
| 3 | `silent` | Active manual configuration treated `2024.04` as the accepted form baseline. | Corrected active guidance; source value deferred to R1. |
| 4 | `visible` | Initial PRD diff contained trailing whitespace. | Corrected; final `git diff --check` passed. |

#### Count assertion

| Measure | Expected | Actual | Result |
|---|---:|---:|---|
| Application metadata files intentionally changed | 0 | 0 | PASS |
| New custom business tables | 0 | 0 | PASS |
| Deleted custom business tables | 0 | 0 | PASS |
| Changed generated stable keys | 0 | 0 | PASS |
| New scoped roles | 0 | 0 | PASS |
| New runtime flows/processes | 0 | 0 | PASS |
| New external integrations | 0 | 0 | PASS |
| New ServiceNow functional behavior | 0 | 0 | PASS |
| Documentation files added | — | 22 | Recorded |
| Documentation files changed | — | 9 | Recorded |
| Documentation files moved/archived | — | 9 | Recorded |

#### Build / deployment evidence
- Normal SDK build: PASS — `npm run build`; five existing TS11 reference-qualifier warnings, no errors.
- Frozen-key build: PASS — `npx @servicenow/sdk build --frozenKeys true --errorOnConflict true`; generated-key diff empty.
- Tests: PASS — security 18/18; deployment-configuration 16/16.
- Commit: R0 commit `Rebaseline repository for Australia PRD remediation`; exact immutable commit is the target of tag `r0-australia-prd-baseline`.
- Package/deployment: PASS — normal `npm run deploy:open`; no `--reinstall`; rollback context `e303329cc33e4b1068a35f2b2b0131b5`.
- Instance installation: PASS — application scope `x_2108496_hr_acces`, sys_id `b0d63cedc2d34e0ca4c05d6eb7acf61e`, version `0.0.1`.
- Runtime verification: PASS for the R0 minimum — Australia patch 3; four scoped custom business tables; native HR Case and HR Task present; zero scoped runtime-flow records.
- Security verification: Not expanded in R0; existing local security tests passed and Australia impersonation/attachment validation remains R2.
- Evidence references: SDK command output and read-only PDI queries from the R0 session.

#### Package result
- Status: PASS
- Remaining blockers: None for R0. R1/R2 implementation and broader runtime/security validation remain intentionally deferred.
- Follow-up package: R1 — Data Foundation / Configuration Remediation

## R1 — Data Foundation / Configuration Remediation

### Start Record

- Measurement shape: one-pass
- Start timestamp: 2026-08-15 10:52:23 EDT (first instrumented timestamp; package work began with the baseline-inspection turn earlier in this same active session)
- Active session 1 start: 2026-08-15 10:52:23 EDT (instrumented)
- Branch / worktree: remediation/01-data-foundation-alignment
- Starting commit: c98a5448222664bfb92189e668536f28f6a81ca6
- Validated baseline tag: r0-australia-prd-baseline
- Target instance: Australia PDI (`rob-pdi`)
- Applicable PRD requirements: Wave 1 governed data foundation; April 2026 NSF Form 1768; WPC and IPA electronic extensions; configuration/state model
- Applicable appendix/test IDs: Appendices B, C, D, E, J, K, L, M, N, O; W1-01 through W1-19
- Planned artifact classes: Class A schema/reference/form/test metadata; Class C environment groups and unresolved business values; Class D deferred Wave 2+ capabilities
- Planned package scope: Remediate the four-table/five-role Wave 1 foundation, six stable access-item records, configuration schema/version, Form 1768 mapping metadata, and Access Detail state choices without implementing Wave 2 or later behavior.
- Expected count-assertion at close-out:
  - Custom business tables: 4
  - Scoped functional roles: 5
  - Active ROB Configuration records: 1
  - Initial active Access Item Reference records: 6
  - Workforce Profile Charts records: 1
  - OAS/DataMart records: 1
  - Human Capital Reports records: 1
  - Custom request/task/signature/approval/PDF/auth tables: 0
  - Unexpected existing generated-key changes: 0

### Blocked Close-Out Record

- End timestamp: 2026-08-15 11:24:00 EDT
- Calendar span: less than one calendar day (2026-08-15)
- Instrumented active-session duration: 31 minutes 37 seconds; package work began slightly before instrumentation, so no unexposed duration was estimated.
- One-pass narrative: validated the R0 baseline and authoritative PDF; inventoried source and PDI data; implemented and tested the R1 schema/reference remediation; passed normal and frozen-key builds; performed two normal installs; queried installed governed records; stopped when installed table data did not reconcile.
- Reviewer interventions: 0
- Silent defects: 0 recorded
- Visible defects: 3 — one validation-regex false positive corrected; initially mandatory timing dictionaries rejected blank seed values and were corrected to configuration-controlled blank-capable fields; installed-data reconciliation failed under both `apply_once` and normal `update` metadata.
- Source evidence: R1 source test PASS (9/9); exact four-table/five-role architecture preserved; stable seed IDs and codes preserved.
- Build evidence: normal build PASS with the unchanged five-warning TS11 baseline.
- Frozen-key evidence: PASS with no conflicts; 460 generated-key additions and 0 removals, all reviewed as new/deleted metadata markers; unexpected existing-key changes: 0.
- Install evidence: two normal installs PASS; no `--reinstall`; rollback contexts `11474b18c3728b1068a35f2b2b0131ff` and `39c80bdcc3728b1068a35f2b2b013153`.
- Runtime evidence: FAIL/BLOCKED. Exactly one active configuration remains at `2024.04`; all six installed access-item records retain blank Form 1768 Mapping values. Schema fields are present and exactly five scoped roles were observed.
- Data/migration evidence: all seven governed sys_ids remained stable and no duplicate seed was created. No Authorized Access Detail state migration was performed because the pre-edit PDI count was zero. An approved in-place transformed/manual migration is required.
- Count assertion result: FAIL because required installed values are not reconciled; source count assertions pass.
- Token accounting: unavailable from the session; not estimated.
- Status: BLOCKED
- Blocker: SDK 4.8.1 installation did not update pre-existing governed table-data rows. R1 cannot be committed or tagged until a reference-preserving in-place migration and Australia UI/runtime verification pass.
- Follow-up: Complete the R1 migration and verification. Do not begin R2.

### R1.1 — Existing Governed Record Reconciliation

- Measurement shape: `turn-by-turn` continuation of the one-pass R1 source/install session; do not pool its turn counts with one-pass package averages.
- Active session 2: 2026-08-15 11:56:36 EDT through 2026-08-15 12:19:57 EDT (23 minutes 21 seconds).
- Combined instrumented R1 active-session duration: 54 minutes 58 seconds.
- Combined R1 calendar span: 2026-08-15 10:52:23 EDT through 2026-08-15 12:19:57 EDT (1 hour 27 minutes 34 seconds).
- Excluded inactive/reviewer-authentication span: 32 minutes 36 seconds between the blocked close-out and R1.1 start.

| Turn | Timestamp / Sequence | Category | Activity / Result | Requirement or Artifact | Notes |
|---:|---|---|---|---|---|
| 1 | R1.1 start | `environment` | Re-read governance, confirmed source remained correct, inventoried the seven installed records and all catalog reference fields/counts, then paused for PDI authentication. | R1.1 before-state and access | No instance write occurred. |
| 2 | R1.1 reconciliation/close-out | `method-rework` | Used the documented Class B manual path after SDK seed updates proved ineffective; reconciled records in place, removed two generated privilege side effects, proved a zero-write repeat, completed runtime/UI/reference/count checks, and reran build gates. | Seven governed records and R1 close-out | No source migration artifact or `--reinstall`. |

- Reviewer interventions: 1 — reviewer signed into the in-app Australia PDI after the authenticated UI was required for the controlled manual correction.
- Additional silent defects: 0.
- Additional visible defects: 1 — the scoped background execution automatically generated broad `GlideRecord.setValue` and `GlideRecord.update` API privileges. Both were identified and deleted by exact sys_id; direct post-delete UI checks returned `Record not found`.
- Total recorded R1 visible defects: 4. Total recorded R1 silent defects: 0.
- Reconciliation method: Class B controlled manual in-place script in the application scope with rollback recording enabled. It validated one active configuration, six active access items, every target sys_id, and every stable code before writing. It contained no insert/delete path.
- First execution evidence: script history `7f741798c3368b1068a35f2b2b013193`; rollback context `f3741798c3368b1068a35f2b2b013193` (`BAK0001929`); six access records updated, nine field changes. Configuration `2024.04` to `2026.04` was saved immediately beforehand through the standard record form.
- Idempotency evidence: second identical execution history `40e49b1cc3368b1068a35f2b2b01310c`; `recordsUpdated: 0`, `fieldChanges: 0`, `changes: []`.

| Record | sys_id | Stable code | Before | After | Changed |
|---|---|---|---|---|---|
| ROB Configuration | `5a2f47bb7a7b4054a1cda69422fffbaf` | n/a | `2024.04` | `2026.04` | Yes |
| FPPS/WTTS | `183e8d6e80fd4825bc0d0cb6b051facc` | `FPPS_WTTS` | name `FPPS / WTTS`; mapping blank | name `FPPS/WTTS`; mapping `fpps_wtts` | Yes |
| eOPF | `2f65b6a0129c49b98f1fca2b54d1e74f` | `EOPF` | mapping blank | mapping `eopf` | Yes |
| USA Staffing | `888b607ff5564df1b0f202346e83dbfb` | `USA_STAFFING` | mapping blank | mapping `usa_staffing` | Yes |
| OAS/DataMart | `52f1f7b193a143fdafbebac07a15c763` | `HC_DATA` | name `Human Capital Data Access`; mapping blank | name `OAS/DataMart`; mapping `oas_datamart` | Yes |
| Human Capital Reports | `088251b291f84df1a551e46128c4057e` | `REPORT_ACCESS` | name `Report Access`; mapping blank | name `Human Capital Reports`; mapping `human_capital_reports` | Yes |
| Workforce Profile Charts | `dc96577f31514e57a137b265f3c07d78` | `WORKFORCE_PROFILE_CHARTS` | mapping blank | mapping `wpc`; Analytics/OM/ARM/OAS values retained | Yes |

- Duplicate evidence before/after: one active configuration and six active access items both before and after; zero new configuration/access-item records.
- Reference evidence before/after: FPPS/WTTS, eOPF, and USA Staffing each remain referenced by two Payroll HR cases; OAS/DataMart and WPC each remain referenced by four Workforce Administration HR cases; Human Capital Reports has zero current HR case references; all six have zero Authorized Access Detail references. The same original sys_ids resolve after migration and no broken references were observed.
- Historical evidence: two existing Draft Authorization Forms remain unchanged with blank Form Version; no historical authorization or Access Detail record was rewritten.
- Runtime/UI evidence: exact six display names and mappings; WPC Analytics/OM/ARM/OAS; Authorization Form numbering, Business Justification label, blank/read-only Draft Form Version, ten approved authorization states, and related-list New/Edit omission; eight approved disabled Access Detail states.
- R1 source test: PASS, 9/9.
- Normal build: PASS with exactly the five pre-existing TS11 warnings.
- Frozen-key build: PASS with the same warnings and no conflicts.
- Generated keys: 460 reviewed R1 additions, 0 removals, 0 unexpected existing-key changes.
- R1.1 deployment: not applicable; no source-controlled migration metadata changed, so no meaningless deployment was run. Prior normal R1 installations remain the install evidence.
- Count assertion:
  - Custom business tables: expected 4; actual 4.
  - Scoped functional roles: expected 5; actual 5.
  - Active ROB Configuration: expected 1; actual 1.
  - Current Accepted Form Version: expected `2026.04`; actual `2026.04`.
  - Active Access Item References: expected 6; actual 6.
  - Populated Form 1768 Mapping values: expected 6; actual 6.
  - Duplicate access items: expected 0; actual 0.
  - Changed existing sys_ids: expected 0; actual 0.
  - Broken references: expected 0; actual 0.
  - Custom request tables: expected 0; actual 0.
  - Custom task tables: expected 0; actual 0.
  - Custom signature/approval/PDF/auth tables: expected 0; actual 0.
  - Unexpected generated-key changes: expected 0; actual 0.
- Count assertion result: PASS.
- Token accounting: Not exposed by session/tool — no estimate recorded.
- R1 status: PASS.
- Recommended next package: R2 — Australia HRSD Intake / Runtime Remediation. Do not begin without explicit approval.
