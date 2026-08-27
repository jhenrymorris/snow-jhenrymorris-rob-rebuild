import { BusinessRule } from '@servicenow/sdk/core'

export const evaluatePayrollAuthorizationDecision = BusinessRule({
    $id: Now.ID['evaluate-payroll-authorization-decision'],
    name: 'ROB Evaluate Payroll Authorization Decis',
    active: true,
    table: 'sn_hr_core_case_payroll',
    when: 'before',
    action: ['update', 'insert'],
    order: 150,
    description:
        'Builds the committed R3 context when governed requested access is present, invokes AuthorizationDecisionService.evaluate(), and persists only system-managed decision outputs through the narrow HR Core bridge.',
    script: Now.include('../server/authorization-decision-entry.server.js'),
})

export const evaluateWorkforceAuthorizationDecision = BusinessRule({
    $id: Now.ID['evaluate-workforce-authorization-decision'],
    name: 'ROB Evaluate Workforce Authorization Decision',
    active: true,
    table: 'sn_hr_core_case_workforce_admin',
    when: 'before',
    action: ['insert', 'update'],
    order: 150,
    description:
        'Builds the committed R3 context when governed requested access is present, invokes AuthorizationDecisionService.evaluate(), and persists only system-managed decision outputs through the narrow HR Core bridge.',
    script: Now.include('../server/authorization-decision-entry.server.js'),
})

export const initiatePayrollAuthorizationLifecycle = BusinessRule({
    $id: Now.ID['initiate-payroll-authorization-lifecycle'],
    name: 'ROB Initiate Payroll Authorization Lifec',
    active: true,
    table: 'sn_hr_core_case_payroll',
    when: 'after',
    action: ['update', 'insert'],
    order: 300,
    filterCondition:
        'x_2166123_rob_auth_decision_evaluated_atISNOTEMPTY^x_2166123_rob_auth_authorization_processing_blocked=false^x_2166123_rob_auth_authorization_pathINnew,reuse,amendment,renewal,exception^EQ',
    description:
        'Consumes a newly persisted deterministic R3 decision and idempotently prepares the governed R4 authorization lifecycle without creating fulfillment work.',
    script: Now.include('../server/authorization-lifecycle-initiation.server.js'),
})

export const initiateWorkforceAuthorizationLifecycle = BusinessRule({
    $id: Now.ID['initiate-workforce-authorization-lifecycle'],
    name: 'ROB Initiate Workforce Authorization Lifecycle',
    active: true,
    table: 'sn_hr_core_case_workforce_admin',
    when: 'after',
    action: ['insert', 'update'],
    order: 300,
    filterCondition:
        'x_2166123_rob_auth_decision_evaluated_atISNOTEMPTY^x_2166123_rob_auth_authorization_processing_blocked=false^x_2166123_rob_auth_authorization_pathINnew,reuse,amendment,renewal,exception',
    description:
        'Consumes a newly persisted deterministic R3 decision and idempotently prepares the governed R4 authorization lifecycle without creating fulfillment work.',
    script: Now.include('../server/authorization-lifecycle-initiation.server.js'),
})

export const captureAuthorizationSignatureEvidence = BusinessRule({
    $id: Now.ID['capture-authorization-signature-evidence'],
    name: 'ROB Capture Native Authorization Signature Evidence',
    table: 'sn_doc_task',
    when: 'after',
    action: ['update'],
    order: 300,
    filterCondition: 'state=3^closed_atISNOTEMPTY',
    description:
        'Captures committed employee-only or approved Supervisor-only ServiceNow Sign Fill evidence. Native approval rejection, not PDF Fill, denies the authorization.',
    script: Now.include('../server/authorization-signature-evidence.server.js'),
})

export const captureSupervisorApprovalDecision = BusinessRule({
    $id: Now.ID['capture-supervisor-approval-decision'],
    name: 'ROB Capture Native Supervisor Approval Decision',
    active: false,
    table: 'sysapproval_approver',
    when: 'after',
    action: ['update'],
    order: 300,
    filterCondition: 'stateINapproved,rejected^source_table=x_2166123_rob_auth_rob_auth^document_idISNOTEMPTY',
    description:
        'Persists the governed Supervisor native approval decision; rejection denies without signing, while approval launches the separate required native Supervisor signature.',
    script: Now.include('../server/supervisor-approval-evidence.server.js'),
})

export const launchSupervisorSignatureAfterApproval = BusinessRule({
    $id: Now.ID['launch-supervisor-signature-after-approval'],
    name: 'ROB Launch Supervisor Signature After Approval',
    active: true,
    table: 'x_2166123_rob_auth_rob_auth',
    when: 'after',
    action: ['update'],
    order: 325,
    filterCondition:
        'status=pending_supervisor_approval_signature^employee_signature_complete=true^supervisor_approval_complete=true^supervisor_approval_outcome=approved^supervisor_signature_complete=false',
    description:
        'Launches exactly one Supervisor-only native Fill/signature execution after the governed Authorization Form contains committed Employee signature and Approved native approval evidence.',
    script: Now.include('../server/supervisor-signature-launch.server.js'),
})

export const preventDuplicateFinalAuthorizationPdf = BusinessRule({
    $id: Now.ID['prevent-duplicate-final-authorization-pdf'],
    name: 'ROB Prevent Duplicate Final Authorization PDF',
    table: 'sys_attachment',
    when: 'before',
    action: ['insert'],
    order: 90,
    filterCondition:
        'table_name=x_2166123_rob_auth_rob_auth^content_type=application/pdf^file_nameSTARTSWITHROB-Form-1768-',
    description:
        'Prevents a second authoritative Form 1768 PDF from being attached to the same governed Authorization Form.',
    script: Now.include('../server/authorization-final-pdf-guard.server.js'),
})

export const finalizeAuthorizationAfterPdfAssociation = BusinessRule({
    $id: Now.ID['finalize-authorization-after-pdf-association'],
    name: 'ROB Finalize Authorization After PDF Association',
    table: 'sys_attachment',
    when: 'after',
    action: ['insert'],
    order: 300,
    filterCondition:
        'table_name=x_2166123_rob_auth_rob_auth^content_type=application/pdf^file_nameSTARTSWITHROB-Form-1768-',
    description:
        'Activates a fully signed authorization only after its distinct final Form 1768 PDF is associated with the governed Authorization Form, then supersedes any predecessor.',
    script: Now.include('../server/authorization-finalization.server.js'),
})
