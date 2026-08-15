import { BusinessRule } from '@servicenow/sdk/core'

const supportedCaseFilter =
    'sys_class_nameINsn_hr_core_case_payroll,sn_hr_core_case_workforce_admin'

export const populateRequesterProfileSnapshotsBeforeInsert = BusinessRule({
    $id: Now.ID['populate-requester-profile-snapshots-before-insert'],
    name: 'ROB Validate Payroll Intake and Populate Requester Profile Snapshots',
    table: 'sn_hr_core_case_payroll',
    when: 'before',
    action: ['insert'],
    order: 100,
    description:
        'Validates approved Staffing HR-service provenance, access items, and self-submission identities before deriving requester profile snapshots.',
    script: Now.include('../server/requester-profile-snapshot.server.js'),
})

export const populateWorkforceRequesterProfileSnapshotsBeforeInsert = BusinessRule({
    $id: Now.ID['populate-workforce-requester-profile-snapshots-before-insert'],
    name: 'ROB Validate Workforce Intake and Populate Requester Profile Snapshots',
    table: 'sn_hr_core_case_workforce_admin',
    when: 'before',
    action: ['insert'],
    order: 100,
    description:
        'Validates approved Analytics HR-service provenance, access items, and self-submission identities before deriving requester profile snapshots.',
    script: Now.include('../server/requester-profile-snapshot.server.js'),
})

export const enforceRequesterProfileSecurityBeforeUpdate = BusinessRule({
    $id: Now.ID['enforce-requester-profile-security-before-update'],
    name: 'ROB Enforce Requester Profile Security',
    table: 'sn_hr_core_case',
    when: 'before',
    action: ['update'],
    order: 90,
    filterCondition: supportedCaseFilter,
    description:
        'Rejects direct protected-field changes and performs an audited, directory-derived correction only when a ROB administrator supplies a reason.',
    script: Now.include('../server/requester-profile-correction.server.js'),
})

export const createSupervisorExceptionReviewTaskAfterInsert = BusinessRule({
    $id: Now.ID['create-supervisor-exception-review-task-after-insert'],
    name: 'ROB Create Payroll Intake Exception Review Task',
    table: 'sn_hr_core_case_payroll',
    when: 'after',
    action: ['insert'],
    order: 200,
    filterCondition:
        'x_2108496_hr_acces_exception_review_required=true^x_2108496_hr_acces_authorization_processing_blocked=true',
    description:
        'Creates at most one native HR Exception Review task for an approved Staffing intake prerequisite exception.',
    script: Now.include('../server/create-supervisor-exception-task.server.js'),
})

export const createWorkforceExceptionReviewTaskAfterInsert = BusinessRule({
    $id: Now.ID['create-workforce-exception-review-task-after-insert'],
    name: 'ROB Create Workforce Intake Exception Review Task',
    table: 'sn_hr_core_case_workforce_admin',
    when: 'after',
    action: ['insert'],
    order: 200,
    filterCondition:
        'x_2108496_hr_acces_exception_review_required=true^x_2108496_hr_acces_authorization_processing_blocked=true',
    description:
        'Creates at most one native HR Exception Review task for an approved Analytics intake prerequisite exception.',
    script: Now.include('../server/create-supervisor-exception-task.server.js'),
})
