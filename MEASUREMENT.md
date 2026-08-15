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

## R2 — Australia HRSD Intake / Runtime Remediation

### Start Record

- Measurement shape: `one-pass` (the package was approved once for continuous inventory, remediation, build, deployment, and Australia verification; revise only if execution actually becomes turn-by-turn).
- Start timestamp: 2026-08-15 12:49:53 EDT
- Active session 1 start: 2026-08-15 12:49:53 EDT
- Branch / worktree: remediation/02-australia-intake-validation
- Starting commit: 6bbd3bc7197d71f0287c2e54df19f8c31d076134
- Validated baseline tag: r1-data-foundation-remediated
- Target instance: Australia PDI (`rob-pdi`)
- Applicable PRD requirements: BR-1–BR-4 MVP subset; FR-1–FR-4; SEC-5; AC-1, AC-2, AC-24; Wave 2 native HRSD intake gate
- Applicable appendix/test IDs: Appendices A, C, E, F, I, J, K, L, M, N, O; W2-01 through W2-20; TM-01 through TM-05 and TM-74 through TM-84
- Planned artifact classes: Class A scoped case/task extensions, catalog variables/policies, server validation, ACLs, tests, and documentation; Class B installed HR Services, producers, templates, variable associations, taxonomy/content metadata, and supported transforms; Class C environment-specific groups, personas, and native configuration; Class D delegated intake and all Wave 3+ behavior
- Planned package scope: Validate and remediate exactly two native Australia HRSD self-service intake paths, reference-driven access selection, self-submission, required/conditional intake data, profile snapshots, WPC/OM prerequisites, approved prerequisite exceptions, and negative lifecycle guards without activating Wave 3 or later processing.
- Expected count-assertion at close-out:
  - Employee Center HR Services / native intake paths: 2
  - Custom request tables: 0
  - Active controlled access items: 6
  - Staffing-visible items: 3
  - Analytics-visible items: 3
  - WPC visible on Staffing / Analytics: 0 / 1
  - Other-subject submissions allowed: 0
  - Authorization Forms, Access Details, and signature/approval/fulfillment artifacts created by Wave 2 intake: 0
  - Unexpected existing generated-key changes: 0

### Blocked Close-Out Record

- End timestamp: 2026-08-15 13:55:53 EDT
- Calendar span: 2026-08-15 12:49:53 EDT through 2026-08-15 13:55:53 EDT (1 hour 6 minutes).
- Instrumented active-session duration: 1 hour 6 minutes; the session was continuous and no inactive time was estimated.
- Measurement shape: `one-pass`.
- One-pass narrative: validated the R1 baseline; inventoried source/native artifacts; remediated exact Wave 2 source and the two existing Class B producer scripts; passed local/build/frozen-key gates; performed normal installs; exercised ordinary-employee Staffing and Analytics portals; traced cross-scope runtime through privacy-safe temporary diagnostics; removed diagnostics and prohibited temporary privileges; stopped on native snapshot-write capability.
- Reviewer interventions: 0 during R2.
- Silent defects: 4 - employee list collectors initially returned zero items; producers did not stamp native HR Service or all self identities; Australia uses `rich_description` rather than `description`; validated snapshot writes did not persist and required targeted record inspection to reveal.
- Visible defects: 2 - the first build rejected a Fluent `ForOfStatement` and was corrected to explicit ACL declarations; runtime generated prohibited broad `GlideRecord.setValue` Execute API privilege `d3b8e750c3ba8b1068a35f2b2b013123`, which was deleted and verified absent.
- Source evidence: 22/22 Wave 2 security tests PASS; 16/16 deployment-configuration tests PASS after aligning the assertions with the runtime-proven authenticated security-attribute ACL.
- Build evidence: normal build PASS; frozen-key build PASS; exactly five unchanged TS11 reference-qualifier warnings; no conflicts.
- Install evidence: normal installs PASS without `--reinstall`; final diagnostic-cleanup rollback context `c21b271cc3ba8b1068a35f2b2b013115`.
- Runtime evidence: exactly two active services and native case paths; ordinary employee sees Staffing items 3 and Analytics items 3; WPC is Analytics-only; exact four Employment Types; Contractor/Auditor date rule and IPA non-mandate; Business Justification mandatory; case `HRC0001015` has matching `opened_by`, `opened_for`, and `subject_person`. Scoped validation logs proved provenance, justification, access-item, and requester/profile checks passed before diagnostic removal.
- Runtime blocker: position, organization, and supervisor snapshot values did not persist on the Australia native HR Case subclass. A safe table-scoped supported write mechanism was not demonstrated. The broad API privilege workaround is prohibited.
- Lifecycle guard evidence: all nine synthetic R2 case sys_ids have zero native HR child tasks; zero Authorization Forms and zero Authorized Access Details were created on 2026-08-15.
- Cleanup evidence: temporary diagnostic logging removed and normally installed; temporary ROB Admin assignments `22e9efd4c3ba8b1068a35f2b2b013101` and `336a2b58c3ba8b1068a35f2b2b01315d` removed; broad privilege query returns zero records.
- Count assertion:
  - Employee Center HR Services: expected 2; actual 2.
  - Native HR Case intake paths: expected 2; actual 2.
  - Custom request tables: expected 0; actual 0.
  - Active controlled Access Items: expected 6; actual 6.
  - Staffing-visible items: expected 3; actual 3.
  - Analytics-visible items: expected 3; actual 3.
  - WPC visible on Staffing / Analytics: expected 0 / 1; actual 0 / 1.
  - Other-subject submission allowed: expected 0; actual 0 in local enforcement and installed producer identity stamping; full persona/channel matrix incomplete.
  - Authorization Forms created by Wave 2 intake: expected 0; actual 0.
  - Authorized Access Details created by Wave 2 intake: expected 0; actual 0.
  - Signature/approval/fulfillment artifacts created by Wave 2 intake: expected 0; actual 0.
  - Unexpected existing generated-key changes: expected 0; actual 0; all additions/deleted markers are explained R2 metadata.
- Count assertion result: FAIL because required profile-snapshot and full persona/runtime gates remain incomplete despite numeric architecture/lifecycle counts passing.
- Token accounting: not exposed by the session; not estimated.
- Status: BLOCKED.
- Commit/tag: not created. Do not begin Wave 3.

### R2.1 blocker-resolution continuation

- Continuation label: R2.1 - Native HR Case Snapshot Persistence Capability Spike.
- Measurement shape: one-pass continuation of R2; one reviewer-approved environment/method-rework turn executed continuously through diagnostics, bounded capability tests, cleanup, rebuild, deployment, and reread verification.
- Active session start: 2026-08-15 14:09:06 EDT.
- Active session end: 2026-08-15 14:48:58 EDT.
- Calendar span / instrumented active duration: 39 minutes 52 seconds; no inactive time estimated.
- Turn classification: 1 environment/method-rework turn.
- Reviewer interventions: 0.
- Capability result: A FAIL (same-record property assignment); B FAIL (direct producer assignment and app-scoped mapped variables; HR Core-owned variable creation unavailable); C FAIL/unsupported (target Application Access has `update_access=false` and no exact table Write privilege was offered); D FAIL/unavailable (no supported declarative profile-derivation mechanism exposed). Final classification: Class D - BLOCKED-PDI / agency platform-owner capability decision.
- Silent defects: 2 - same-record and direct native-producer assignments completed case creation but only committed-reread inspection revealed all three snapshots remained blank.
- Visible defects: 3 - Test A generated prohibited broad `GlideRecord.setValue` Execute privilege `1d013754c33e8b1068a35f2b2b01319b` (removed); one normal install attempt returned transient `fetch failed` before a successful retry; producer cleanup initially duplicated editor content due the native syntax-highlighting editor and was caught by exact database reread, then restored exactly before close-out.
- Runtime evidence: Payroll cases `HRC0001016` (`69f07354c33e8b1068a35f2b2b013137`) and `HRC0001017` (`2313b350c37e8b1068a35f2b2b013168`) reread with blank Position, Organization, and Supervisor snapshots. App-scoped mapped-variable probe case `7394ff18c37e8b1068a35f2b2b013156` was rejected by HR Core cross-scope enforcement. Analytics was not repeated after the identical subclass ownership/Application Access boundary was proven, avoiding another prohibited privilege side effect.
- Security cleanup evidence: final source-scope privilege list contains exactly two approved Read entries (`sn_hr_core_service`, `sys_user`), no broad API Execute privilege, no temporary role, and no temporary producer script. The three app-scoped mapped-variable probe records reread as absent.
- Lifecycle guard evidence: the three R2.1 probe cases have zero native HR tasks, zero Authorization Forms, and zero Authorized Access Details; therefore zero signature, approval, or fulfillment artifacts were created.
- Test evidence: Wave 2 security 22/22 PASS; deployment-configuration 16/16 PASS.
- Build evidence: normal build PASS; frozen-key build PASS; exactly five unchanged TS11 reference-qualifier warnings; no conflicts; failed-probe keys removed and no unexpected existing-key change.
- Install evidence: cleanup normal install PASS without `--reinstall`; rollback context `1786bb10c3be8b1068a35f2b2b0131c7`.
- R2 result after R2.1: BLOCKED. Full persona/forgery runtime gates were not run because snapshot persistence did not pass both subclasses. Commit/tag not created. Wave 3 not started.
- Token accounting: not exposed by the session; not estimated.

### R2.2 architecture/governance blocker resolution

- Measurement shape: one-pass continuation of the R2 package.
- Active session start: 2026-08-15 15:06:37 EDT (session turn metadata).
- Active session end: 2026-08-15 15:13:07 EDT.
- Calendar span / active duration: 6 minutes 30 seconds.
- Turn classification: 1 `clean` turn — recorded the approved architecture direction, agency handoff, security contract, deferred runtime tests, cleanup evidence, and blocked-baseline checkpoint gates without changing application source.
- Reviewer/platform-owner interventions: 1 — the platform owner selected Option B, resolving the target ownership decision in favor of an HR Core-owned controlled population mechanism while explicitly leaving PDI implementation and R2 production acceptance blocked.
- New silent defects: 0.
- New visible defects: 0.
- Cleanup evidence: read-only Australia queries returned exactly two approved source-scope Table Read privileges (`sn_hr_core_service`, `sys_user`), zero temporary role assignments by the known R2 ids, zero `snapshot_input` probe variables, and both producer scripts restored without temporary snapshot-population blocks.
- Verification evidence: Wave 2 security 22/22 PASS; deployment-configuration 16/16 PASS; normal build PASS; frozen-key build PASS; exactly five unchanged TS11 warnings; no unexplained existing-key mutation.
- Deployment evidence: not applicable — R2.2 changed documentation and measurement only; the already tested R2 application source remained unchanged after R2.1 cleanup.
- Decision state: architecture resolved via Option B; PDI technical implementation unavailable; `R2-AGENCY-01` open; R2 production acceptance incomplete.
- Status: R2 — BLOCKED-PDI; Option B architecture approved; agency HR Core implementation required.
- Wave 3 boundary: not started. Progression requires separate authorization while R2 remains BLOCKED-PDI.
- Token accounting: not exposed by the session; not estimated.
- Recommended next package: R2 — Australia HRSD Intake / Runtime Remediation. Do not begin without explicit approval.

## R3 — Authorization Decision Engine

### Conditional Source / Unit Record

- Measurement shape: `turn-by-turn` because the baseline gate stopped for a
  reviewer confirmation before the approved implementation turn proceeded.
- Starting commit: `ab92afaa583582f0122f69065b8f592c16ee0b36`.
- Branch: `feature/03-authorization-decision-engine`.
- R2 dependency at start and close: `R2-AGENCY-01` OPEN; R2 BLOCKED-PDI.
- Instrumented implementation session start: 2026-08-15 16:37:42 EDT.
- Instrumented implementation session end: 2026-08-15 16:51:39 EDT.
- Calendar span / instrumented active duration: 13 minutes 57 seconds. The
  preceding baseline-stop turn duration was not exposed and is not estimated.
- Turn 1 classification: environment/method-rework — correct commit and clean
  tree were confirmed, but the requested R3 branch was already checked out;
  work stopped under the explicit baseline rule.
- Turn 2 classification: implementation — inventory, decision implementation,
  unit/regression tests, builds, documentation, and conditional close-out.
- Reviewer interventions: 1 — user confirmed the pre-created R3 branch was the
  approved starting state.
- Silent defects: 0.
- Visible defects: 1 — initial normal build rejected Fluent helper-function and
  object-spread composition with TS305; corrected to explicit per-subclass field
  declarations without changing the data model.
- Test evidence: R1 9/9 PASS; Wave 2 security 22/22 PASS; Wave 2 deployment
  configuration 16/16 PASS; R3 deterministic decision suite 30/30 PASS.
- Build evidence: normal PASS; frozen-key PASS; exactly five unchanged TS11
  warnings; no conflicts.
- Generated-key evidence: 827/827 baseline unique ids preserved; 177 intentional
  R3 ids added; unexplained existing-key changes 0.
- Deployment/runtime evidence: not applicable to this conditional source/unit
  package. No decision trigger was activated and no PDI runtime claim is made.
- Count assertion:
  - Decision classes: expected 5; actual 5.
  - Custom decision tables: expected 0; actual 0.
  - Custom request tables added: expected 0; actual 0.
  - Authorization Forms created by decision evaluation: expected 0; actual 0.
  - Authorized Access Details created by decision evaluation: expected 0; actual 0.
  - Signature/approval tasks created: expected 0; actual 0.
  - Fulfillment tasks created: expected 0; actual 0.
  - R2-AGENCY-01 closed: expected no; actual no.
  - Unexpected existing generated-key changes: expected 0; actual 0.
- Count assertion result: CONDITIONAL PASS.
- Token accounting: not exposed by the session; not estimated.
- Result: R3 — CONDITIONAL PASS; R2-AGENCY-01 remains open.
- Wave 4: not started; explicit approval required.

## R4 — Authorization Lifecycle, E-Signature, and Signed PDF

### Blocked capability-spike record

- Measurement shape: `turn-by-turn`; the baseline gate stopped for reviewer
  confirmation because the requested R4 branch was already checked out, then a
  separate capability-validation turn proceeded.
- Starting commit: `29a75f920d787fea85fe62cb1d97fbeacf0ecbd7`.
- Branch: `feature/04-authorization-lifecycle-signatures-pdf`.
- R2 dependency at start and close: `R2-AGENCY-01` OPEN; R2 BLOCKED-PDI.
- Instrumented capability session start: 2026-08-15 17:04:49 EDT.
- Instrumented capability session end: 2026-08-15 17:17:28 EDT.
- Calendar span / instrumented active duration: 12 minutes 39 seconds. The
  preceding baseline-stop turn duration was not exposed and is not estimated.
- Turn 1 classification: environment/method-rework — correct commit and clean
  tree were confirmed, but the requested R4 branch was already checked out;
  work stopped under the explicit baseline rule.
- Turn 2 classification: capability/environment — read required governance,
  rendered and visually verified the authoritative April 2026 PDF, inventoried
  source, and performed read-only Australia Document Templates, ServiceNow Sign,
  e-signature, PDF, participant, and privilege queries.
- Reviewer interventions: 1 — user confirmed the pre-created R4 branch as the
  approved starting state.
- Silent defects: 0.
- Visible defects: 1 environment/tooling issue — the dependency loader's
  advertised Poppler `.exe` wrapper path did not exist; the installed native
  Poppler binary was located and used without changing repository source.
- Source evidence: no R4 application source existed or changed; no lifecycle,
  signature, approval, template, PDF, or fulfillment runtime trigger was added.
- Capability evidence: current Document Templates 27.1.1, E-Signature 1.0.0,
  Digital Signature API 26.0.0, Digital signature component 27.1.0, and PDF
  Generation Utilities are active. Published HR templates use ServiceNow Sign,
  table data sources, signing order, and ordered participants. These facts prove
  availability, not the required ROB two-signer signed-PDF lifecycle.
- Runtime blocker evidence: no Document Task record or completed ROB artifact
  existed to prove signer/timestamp persistence, approval coexistence, PDF
  generation, attachment destination, immutability, or historical retention.
- Policy blocker evidence: Appendix B leaves `DOC-MAP-02` and the exact IPA/WPC/
  supplemental electronic rendering unresolved. The R4 stop rule prohibits
  implementing a template by guessing those mappings.
- Security evidence: zero `x_2108496_hr_acces` cross-scope privileges targeted
  `sn_doc` or `sn_esign`; none were created; no broad privilege or temporary
  role/artifact was introduced.
- Build/test/deployment evidence: not applicable after the capability-first stop;
  no application source or instance data changed, and no install was performed.
- Count assertion:
  - Custom authorization/signature/approval/document/PDF tables added: expected 0; actual 0.
  - New lifecycle decision classes: expected 0; actual 0.
  - Duplicate Authorization Forms / Access Details: expected 0 / 0; actual 0 / 0.
  - Fulfillment tasks / renewal processes added: expected 0 / 0; actual 0 / 0.
  - R2-AGENCY-01 closed: expected no; actual no.
  - Unexpected existing generated-key changes: expected 0; actual 0.
- Count assertion result: BLOCKED because required R4 signature/PDF/runtime and
  document-fidelity gates are not proven.
- Token accounting: not exposed by the session; not estimated.
- Result: R4 — BLOCKED.
- Wave 5: not started; explicit approval remains required after R4 blockers are resolved.

### R4.1 — Form 1768 Electronic Rendering Policy Resolution

- Measurement shape: `turn-by-turn` continuation of R4.
- Active session start: 2026-08-15 17:30:06 EDT.
- Active session end: 2026-08-15 17:35:02 EDT.
- Calendar span / active duration: 4 minutes 56 seconds.
- Turn classification: 1 policy/governance turn — recorded the approved Date,
  IPA, WPC, and supplemental metadata rendering contract; updated traceability,
  tests, backlog, capability, build, and manual-configuration records; performed
  documentation and generated-key validation.
- Reviewer/form-owner interventions: 1 — the reviewer supplied and approved all
  four electronic rendering decisions.
- Silent defects: 0.
- Visible defects: 0.
- Policy result: `R4-POLICY-01` RESOLVED. DOC-MAP-01 through DOC-MAP-04 now
  define the complete electronic rendering contract.
- Preserved dependency: `R4-PDI-01` OPEN; no template, signature, approval, PDF,
  attachment, or runtime capability is claimed by the policy decision.
- Source/build/install/runtime evidence: documentation/measurement only; no
  application source or generated-key change; build and deployment not
  applicable; source PDF unchanged.
- Token accounting: not exposed by the session; not estimated.
- Status: R4 — BLOCKED; R4-POLICY-01 resolved; R4-PDI-01 remains open.
- Wave 5: not started.
