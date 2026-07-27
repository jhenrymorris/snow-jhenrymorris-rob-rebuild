import { BusinessRule } from '@servicenow/sdk/core'

const supportedCaseFilter =
    'sys_class_nameINsn_hr_core_case_payroll,sn_hr_core_case_workforce_admin'

export const populateRequesterProfileSnapshotsBeforeInsert = BusinessRule({
    $id: Now.ID['populate-requester-profile-snapshots-before-insert'],
    name: 'ROB Validate Intake and Populate Requester Profile Snapshots',
    table: 'sn_hr_core_case',
    when: 'before',
    action: ['insert'],
    order: 100,
    filterCondition: supportedCaseFilter,
    description:
        'Validates approved ROB HR-service provenance, access items, and self-submission identities before deriving requester profile snapshots.',
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
    name: 'ROB Create Supervisor Exception Review Task',
    table: 'sn_hr_core_case',
    when: 'after',
    action: ['insert'],
    order: 200,
    filterCondition:
        'sys_class_name=sn_hr_core_case_payroll^x_2108496_hr_acces_exception_review_required=true^x_2108496_hr_acces_authorization_processing_blocked=true^NQsys_class_name=sn_hr_core_case_workforce_admin^x_2108496_hr_acces_exception_review_required=true^x_2108496_hr_acces_authorization_processing_blocked=true',
    description:
        'Creates at most one native HR Exception Review task for a supervisor validation exception.',
    script: Now.include('../server/create-supervisor-exception-task.server.js'),
})
