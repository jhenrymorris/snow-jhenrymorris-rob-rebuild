import {
    BooleanColumn,
    ChoiceColumn,
    DateColumn,
    DateTimeColumn,
    ListColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'
import { x_2108496_hr_acces_rob_access } from './rob-access-item-reference.now'

const supervisorExceptionChoices = {
    missing_supervisor: 'Missing supervisor',
    invalid_supervisor: 'Invalid supervisor',
    inactive_supervisor: 'Inactive supervisor',
    self_supervisor: 'Supervisor matches requester',
    missing_position: 'Missing position',
    missing_organization: 'Missing organization / DIR-DIV',
    missing_required_access_end_date: 'Missing required access end date',
    missing_operations_manager: 'Missing Operations Manager',
    invalid_operations_manager: 'Invalid Operations Manager',
    inactive_operations_manager: 'Inactive Operations Manager',
}

const employmentTypeChoices = {
    federal_employee: 'Federal Employee',
    contractor: 'Contractor',
    ipa: 'IPA',
    auditor_investigator: 'Auditor / Investigator',
}

const caseSecuritySchema = {
    x_2108496_hr_acces_employment_type: ChoiceColumn({
        label: 'Employment Type Snapshot',
        choices: employmentTypeChoices,
    }),
    x_2108496_hr_acces_access_end_date: DateColumn({
        label: 'Access End Date',
    }),
    x_2108496_hr_acces_requested_items: ListColumn({
        label: 'ROB Requested Access Items',
        referenceTable: x_2108496_hr_acces_rob_access.name,
        maxLength: 1000,
    }),
    x_2108496_hr_acces_position_title: StringColumn({
        label: 'Position Title Snapshot',
        maxLength: 160,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_organization_snapshot: ReferenceColumn({
        label: 'Organization / DIR-DIV Snapshot',
        referenceTable: 'cmn_department',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_supervisor_snapshot: ReferenceColumn({
        label: 'Supervisor Snapshot',
        referenceTable: 'sys_user',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_exception_review_required: BooleanColumn({
        label: 'ROB Exception Review Required',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_exception_reason: StringColumn({
        label: 'ROB Exception Reason',
        maxLength: 80,
        choices: supervisorExceptionChoices,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_authorization_processing_blocked: BooleanColumn({
        label: 'ROB Authorization Processing Blocked',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_requires_employee_signature: BooleanColumn({
        label: 'ROB Requires Employee Signature',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_requires_supervisor_signature: BooleanColumn({
        label: 'ROB Requires Supervisor Signature',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_fulfillment_gate_complete: BooleanColumn({
        label: 'ROB Fulfillment Gate Complete',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_correction_requested: BooleanColumn({
        label: 'ROB Snapshot Correction Requested',
        default: false,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_correction_reason: StringColumn({
        label: 'ROB Snapshot Correction Reason',
        maxLength: 1000,
        audit: true,
    }),
    x_2108496_hr_acces_prior_position_title: StringColumn({
        label: 'Prior Position Title Snapshot',
        maxLength: 160,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_prior_organization_snapshot: ReferenceColumn({
        label: 'Prior Organization / DIR-DIV Snapshot',
        referenceTable: 'cmn_department',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_prior_supervisor_snapshot: ReferenceColumn({
        label: 'Prior Supervisor Snapshot',
        referenceTable: 'sys_user',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_corrected_by: ReferenceColumn({
        label: 'ROB Snapshot Corrected By',
        referenceTable: 'sys_user',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_corrected_at: DateTimeColumn({
        label: 'ROB Snapshot Corrected At',
        readOnly: true,
        audit: true,
    }),
}

const workforceCaseSecuritySchema = {
    x_2108496_hr_acces_employment_type: ChoiceColumn({
        label: 'Employment Type Snapshot',
        choices: employmentTypeChoices,
    }),
    x_2108496_hr_acces_access_end_date: DateColumn({
        label: 'Access End Date',
    }),
    x_2108496_hr_acces_requested_items: ListColumn({
        label: 'ROB Requested Access Items',
        referenceTable: x_2108496_hr_acces_rob_access.name,
        maxLength: 1000,
    }),
    x_2108496_hr_acces_operations_manager: ReferenceColumn({
        label: 'Operations Manager',
        referenceTable: 'sys_user',
        referenceQual: 'active=true',
        useReferenceQualifier: 'simple',
        cascadeRule: 'clear',
    }),
    x_2108496_hr_acces_position_title: StringColumn({
        label: 'Position Title Snapshot',
        maxLength: 160,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_organization_snapshot: ReferenceColumn({
        label: 'Organization / DIR-DIV Snapshot',
        referenceTable: 'cmn_department',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_supervisor_snapshot: ReferenceColumn({
        label: 'Supervisor Snapshot',
        referenceTable: 'sys_user',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_exception_review_required: BooleanColumn({
        label: 'ROB Exception Review Required',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_exception_reason: StringColumn({
        label: 'ROB Exception Reason',
        maxLength: 80,
        choices: supervisorExceptionChoices,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_authorization_processing_blocked: BooleanColumn({
        label: 'ROB Authorization Processing Blocked',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_requires_employee_signature: BooleanColumn({
        label: 'ROB Requires Employee Signature',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_requires_supervisor_signature: BooleanColumn({
        label: 'ROB Requires Supervisor Signature',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_fulfillment_gate_complete: BooleanColumn({
        label: 'ROB Fulfillment Gate Complete',
        default: false,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_correction_requested: BooleanColumn({
        label: 'ROB Snapshot Correction Requested',
        default: false,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_correction_reason: StringColumn({
        label: 'ROB Snapshot Correction Reason',
        maxLength: 1000,
        audit: true,
    }),
    x_2108496_hr_acces_prior_position_title: StringColumn({
        label: 'Prior Position Title Snapshot',
        maxLength: 160,
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_prior_organization_snapshot: ReferenceColumn({
        label: 'Prior Organization / DIR-DIV Snapshot',
        referenceTable: 'cmn_department',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_prior_supervisor_snapshot: ReferenceColumn({
        label: 'Prior Supervisor Snapshot',
        referenceTable: 'sys_user',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_corrected_by: ReferenceColumn({
        label: 'ROB Snapshot Corrected By',
        referenceTable: 'sys_user',
        cascadeRule: 'clear',
        readOnly: true,
        audit: true,
    }),
    x_2108496_hr_acces_snapshot_corrected_at: DateTimeColumn({
        label: 'ROB Snapshot Corrected At',
        readOnly: true,
        audit: true,
    }),
}

export const sn_hr_core_case_payroll = Table({
    augments: 'sn_hr_core_case_payroll',
    schema: caseSecuritySchema,
})

export const sn_hr_core_case_workforce_admin = Table({
    augments: 'sn_hr_core_case_workforce_admin',
    schema: workforceCaseSecuritySchema,
})

export const sn_hr_core_task = Table({
    augments: 'sn_hr_core_task',
    schema: {
        x_2108496_hr_acces_rob_task_type: StringColumn({
            label: 'ROB Task Type',
            maxLength: 40,
            choices: {
                exception_review: 'Exception Review',
            },
            readOnly: true,
            audit: true,
        }),
    },
})
