import { Acl } from '@servicenow/sdk/core'
import {
    robAdminRole,
    robComplianceViewerRole,
} from '../roles/rob-roles.now'

const snapshotReadScript = `var userId = gs.getUserID();
var openedBy = current.getValue('opened_by');
var openedFor = current.getValue('opened_for');
var subjectPerson = current.getValue('subject_person');
var isSelfSubmittingSubject = openedBy &&
    openedBy == userId &&
    openedBy == openedFor &&
    openedBy == subjectPerson;
return gs.getUser().hasAssignedRole('x_2108496_hr_acces.rob_admin') ||
    gs.getUser().hasAssignedRole('x_2108496_hr_acces.rob_compliance_viewer') ||
    isSelfSubmittingSubject ||
    current.getValue('x_2108496_hr_acces_supervisor_snapshot') == userId;`

Acl({
    $id: Now.ID['payroll-requested-items-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_requested_items',
    operation: 'write',
    decisionType: 'allow',
    script: 'return false;',
    adminOverrides: false,
    description: 'Prevents direct field writes. The approved native record producer maps requested items in server context before insert.',
})

Acl({
    $id: Now.ID['payroll-position-title-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_position_title',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-supervisor-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_supervisor_snapshot',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-exception-required-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_exception_review_required',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-exception-reason-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_exception_reason',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-processing-blocked-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_authorization_processing_blocked',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-employee-signature-gate-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_requires_employee_signature',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-supervisor-signature-gate-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_requires_supervisor_signature',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-fulfillment-gate-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_fulfillment_gate_complete',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-correction-requested-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_correction_requested',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-prior-position-title-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_prior_position_title',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-prior-supervisor-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_prior_supervisor_snapshot',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-corrected-by-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_corrected_by',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-corrected-at-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_corrected_at',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['payroll-correction-reason-write'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_correction_reason',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Allows an ROB Administrator with native case update access to enter the mandatory controlled-correction reason.',
})

Acl({
    $id: Now.ID['payroll-position-title-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_position_title',
    operation: 'read',
    decisionType: 'allow',
    adminOverrides: false,
    script: snapshotReadScript,
    description: 'Allows the subject, validated supervisor, ROB Admin, or Compliance Viewer only after native HR case record-read ACLs pass. Performs no query.',
})

Acl({
    $id: Now.ID['payroll-supervisor-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_supervisor_snapshot',
    operation: 'read',
    decisionType: 'allow',
    adminOverrides: false,
    script: snapshotReadScript,
    description: 'Allows the subject, validated supervisor, ROB Admin, or Compliance Viewer only after native HR case record-read ACLs pass. Performs no query.',
})

Acl({
    $id: Now.ID['payroll-exception-required-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_exception_review_required',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-exception-reason-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_exception_reason',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-processing-blocked-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_authorization_processing_blocked',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-employee-signature-gate-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_requires_employee_signature',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-supervisor-signature-gate-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_requires_supervisor_signature',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-fulfillment-gate-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_fulfillment_gate_complete',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-correction-requested-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_correction_requested',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-correction-reason-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_correction_reason',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-prior-position-title-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_prior_position_title',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-prior-supervisor-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_prior_supervisor_snapshot',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-corrected-by-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_corrected_by',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['payroll-corrected-at-read'],
    type: 'record',
    table: 'sn_hr_core_case_payroll',
    field: 'x_2108496_hr_acces_snapshot_corrected_at',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-requested-items-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_requested_items',
    operation: 'write',
    decisionType: 'allow',
    script: 'return false;',
    adminOverrides: false,
    description: 'Prevents direct field writes. The approved native record producer maps requested items in server context before insert.',
})

Acl({
    $id: Now.ID['workforce-admin-position-title-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_position_title',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-supervisor-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_supervisor_snapshot',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-exception-required-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_exception_review_required',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-exception-reason-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_exception_reason',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-processing-blocked-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_authorization_processing_blocked',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-employee-signature-gate-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_requires_employee_signature',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-supervisor-signature-gate-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_requires_supervisor_signature',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-fulfillment-gate-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_fulfillment_gate_complete',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-correction-requested-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_correction_requested',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-prior-position-title-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_prior_position_title',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-prior-supervisor-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_prior_supervisor_snapshot',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-corrected-by-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_corrected_by',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-corrected-at-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_corrected_at',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Requires ROB Admin and native HR case update access. The integrity rule rejects direct evidence changes outside controlled re-derivation.',
})

Acl({
    $id: Now.ID['workforce-admin-correction-reason-write'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_correction_reason',
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Allows an ROB Administrator with native case update access to enter the mandatory controlled-correction reason.',
})

Acl({
    $id: Now.ID['workforce-admin-position-title-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_position_title',
    operation: 'read',
    decisionType: 'allow',
    adminOverrides: false,
    script: snapshotReadScript,
    description: 'Allows the subject, validated supervisor, ROB Admin, or Compliance Viewer only after native HR case record-read ACLs pass. Performs no query.',
})

Acl({
    $id: Now.ID['workforce-admin-supervisor-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_supervisor_snapshot',
    operation: 'read',
    decisionType: 'allow',
    adminOverrides: false,
    script: snapshotReadScript,
    description: 'Allows the subject, validated supervisor, ROB Admin, or Compliance Viewer only after native HR case record-read ACLs pass. Performs no query.',
})

Acl({
    $id: Now.ID['workforce-admin-exception-required-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_exception_review_required',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-exception-reason-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_exception_reason',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-processing-blocked-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_authorization_processing_blocked',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-employee-signature-gate-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_requires_employee_signature',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-supervisor-signature-gate-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_requires_supervisor_signature',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-fulfillment-gate-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_fulfillment_gate_complete',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-correction-requested-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_correction_requested',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-correction-reason-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_correction_reason',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-prior-position-title-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_prior_position_title',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-prior-supervisor-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_prior_supervisor_snapshot',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-corrected-by-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_corrected_by',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['workforce-admin-corrected-at-read'],
    type: 'record',
    table: 'sn_hr_core_case_workforce_admin',
    field: 'x_2108496_hr_acces_snapshot_corrected_at',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits internal exception, gate, and correction evidence to ROB Admin and Compliance Viewer after native HR case record-read ACLs pass.',
})

Acl({
    $id: Now.ID['hr-task-rob-task-type-write'],
    type: 'record',
    table: 'sn_hr_core_task',
    field: 'x_2108496_hr_acces_rob_task_type',
    operation: 'write',
    decisionType: 'allow',
    script: 'return false;',
    adminOverrides: false,
    description: 'Prevents direct changes to the system-managed ROB Task Type used for exception-task idempotency.',
})
