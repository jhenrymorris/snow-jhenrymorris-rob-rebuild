import { BusinessRule } from '@servicenow/sdk/core'

export const initiatePayrollAuthorizationLifecycle = BusinessRule({
    $id: Now.ID['initiate-payroll-authorization-lifecycle'],
    name: 'ROB Initiate Payroll Authorization Lifecycle',
    active: false,
    table: 'sn_hr_core_case_payroll',
    when: 'after',
    action: ['update'],
    order: 300,
    filterCondition:
        'x_2166123_rob_auth_decision_evaluated_atISNOTEMPTY^x_2166123_rob_auth_authorization_processing_blocked=false^x_2166123_rob_auth_authorization_pathINnew,reuse,amendment,renewal,exception',
    description:
        'Consumes a newly persisted deterministic R3 decision and idempotently prepares the governed R4 authorization lifecycle without creating fulfillment work.',
    script: Now.include('../server/authorization-lifecycle-initiation.server.js'),
})

export const initiateWorkforceAuthorizationLifecycle = BusinessRule({
    $id: Now.ID['initiate-workforce-authorization-lifecycle'],
    name: 'ROB Initiate Workforce Authorization Lifecycle',
    active: false,
    table: 'sn_hr_core_case_workforce_admin',
    when: 'after',
    action: ['update'],
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
    filterCondition: 'stateIN3,7^closed_atISNOTEMPTY',
    description:
        'Captures committed employee and supervisor evidence only from the controlled production ServiceNow Sign template; refusal denies the pending authorization.',
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
    filterCondition:
        'stateINapproved,rejected^source_table=x_2166123_rob_auth_rob_auth^document_idISNOTEMPTY',
    description:
        'Persists the governed Supervisor native approval decision; rejection denies without signing, while approval launches the separate required native Supervisor signature.',
    script: Now.include('../server/supervisor-approval-evidence.server.js'),
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
