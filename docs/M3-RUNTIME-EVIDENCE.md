# M3 Production Authorization Runtime Evidence

## 2026-08-21 preflight and mandatory stop

M3 began from clean commit `c325b13`. No application installation, SDK
deployment, Background Script, production lifecycle activation, M4 runtime
work, or synthetic lifecycle execution occurred during this checkpoint.

### Repository and security baseline

- Starting commit: `c325b139975dcd6c66768ed7c7ea4bcbbdc5f0d0`.
- Generated-key diff: empty.
- Custom business tables: 4.
- Exact M2 resolver table Reads: 5/5.
- Exact ROB-to-HR-Core bridge Execute privilege: 1.
- Broad `GlideRecord.setValue`, `GlideRecord.update`, and
  `GlideRecord.insert` privileges: 0.
- Broad native-case Write privileges: 0.
- Temporary roles: 0.
- Legacy exception-task rules `dbf1f9645e35471bbaa426930f97b2d3` and
  `193d566b565c433f93508c8d4de33f77`: inactive.
- M4 fulfillment rules `301db8288406426cb2ca63bc2dc0511a` and
  `57278c58e6d04ed6a7d6dfc9cd222688`: inactive.

### Installed lifecycle comparison

The two production lifecycle entry records exist and remain inactive:

| Path | Business Rule sys_id | Installed result |
|---|---|---|
| Payroll | `2d7ed4c1f8fd48ef8fa20a7cb699f105` | Inactive; installed script is the pre-M2 version |
| Workforce Administration | `65fb34e074784dd1a17feff394e2ab64` | Inactive; installed script is the pre-M2 version |

Both installed scripts still read the deprecated native-case Position,
Organization, and Supervisor snapshot fields and return immediately for Reuse.
The committed source instead resolves current profile context with
`RobProfileAuthorizationContext` and never consumes the deprecated snapshots.
Activation was therefore prohibited until reconciliation.

### Native signing-route blocker

The published production template `ROB Form 1768 Authorization`
(`f99c3c0ac372031068a35f2b2b013138`) is active and targets
`sn_hr_core_case`. Its participant configuration is:

| Participant | sys_id | User source |
|---|---|---|
| Employee | `0fd199c2c3b6031068a35f2b2b013103` | `subject_person` |
| Supervisor | `a235d582c3f6031068a35f2b2b01316b` | `assigned_to` |

The M2-approved production contract requires the intended supervisor signer to
come from the immutable `x_2108496_hr_acces_rob_auth.supervisor` snapshot.
Native case `assigned_to` is not that evidence and may represent an HR
fulfiller. HR Access may not write `assigned_to`, and the verified HR Core
bridge may not be broadened beyond its three allowlisted intake-gate fields.

The committed lifecycle initiation script also creates no native Document Task
or signing execution. The committed finalization rule consumes a qualifying
PDF attachment but does not generate the post-signature PDF. Reuse source/unit
logic defines the frozen attestation contract, but the installed production
entry script returns without creating or persisting its native supervisor
attestation execution.

Closing these gaps requires a supported native Document Templates/ServiceNow
Sign production binding that can:

1. launch from the governed lifecycle without a protected native-case write;
2. route the supervisor participant from the Authorization Form snapshot;
3. persist the frozen Reuse case-level attestation evidence; and
4. generate and associate the post-signature final PDF with the Authorization
   Form.

Using participant advanced script would introduce a new cross-scope read and
caller-access security boundary. Changing the template target from the native
case to the custom Authorization Form would change the previously validated
native association model. Neither was approved or proven during this package.
Manually assigning the case to the supervisor would falsely substitute an
operational case field for governed signer routing.

### Stop result

This is a security/architecture stop condition, not an ordinary lifecycle
test defect. The two R4 entry rules remain inactive. New, Denial, Amendment,
Renewal, Reuse, signing, PDF, immutability, and exception regression scenarios
were not executed because the production signer route was not safe to
activate. Resulting production artifacts from M3: cases 0, Authorization Forms
0, Access Details 0, Document Tasks 0, PDFs 0, fulfillment tasks 0.

**M3 — BLOCKED-PLATFORM.** A platform-owner-approved native production
Document Templates/ServiceNow Sign binding is required. M4 production runtime
is not ready and was not started.
