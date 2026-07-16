import {
    BooleanColumn,
    ChoiceColumn,
    DateColumn,
    DateTimeColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_2108496_hr_acces_rob_auth = Table({
    name: 'x_2108496_hr_acces_rob_auth',
    label: 'ROB Authorization Form',
    display: 'number',
    extensible: false,
    accessibleFrom: 'package_private',
    allowWebServiceAccess: false,
    createAccessControls: false,
    audit: true,
    autoNumber: {
        prefix: 'ROBA',
        number: 1000,
        numberOfDigits: 7,
    },
    index: [
        {
            name: 'rob_auth_number_uq',
            unique: true,
            element: 'number',
        },
        {
            name: 'rob_auth_source_case_uq',
            unique: true,
            element: 'source_hrsd_case',
        },
        {
            name: 'rob_auth_subject_status',
            unique: false,
            element: ['subject_person', 'status', 'expiration_date'],
        },
        {
            name: 'rob_auth_expiry',
            unique: false,
            element: ['status', 'expiration_date'],
        },
    ],
    schema: {
        number: StringColumn({
            label: 'Number',
            mandatory: true,
            readOnly: true,
            maxLength: 40,
        }),
        subject_person: ReferenceColumn({
            label: 'Subject Person',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'none',
        }),
        employee_id: StringColumn({
            label: 'Employee ID',
            maxLength: 40,
        }),
        supervisor: ReferenceColumn({
            label: 'Supervisor',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'none',
        }),
        organization: StringColumn({
            label: 'Organization',
            mandatory: true,
            maxLength: 255,
        }),
        position_title: StringColumn({
            label: 'Position Title',
            mandatory: true,
            maxLength: 255,
        }),
        employment_type: ChoiceColumn({
            label: 'Employment Type',
            mandatory: true,
            choices: {
                federal_employee: 'Federal Employee',
                contractor: 'Contractor',
                ipa: 'IPA',
                auditor_investigator: 'Auditor / Investigator',
                other_time_limited: 'Other Time-Limited Access',
            },
        }),
        access_end_date: DateColumn({
            label: 'Access End Date',
        }),
        business_justification: MultiLineTextColumn({
            label: 'Business Justification',
            mandatory: true,
            maxLength: 4000,
        }),
        authorization_action: ChoiceColumn({
            label: 'Authorization Action',
            mandatory: true,
            choices: {
                new: 'New',
                renewal: 'Renewal',
                amendment: 'Amendment',
            },
        }),
        form_version: StringColumn({
            label: 'Form Version',
            mandatory: true,
            readOnly: true,
            maxLength: 40,
        }),
        effective_date: DateColumn({
            label: 'Effective Date',
            readOnly: true,
        }),
        expiration_date: DateColumn({
            label: 'Expiration Date',
            readOnly: true,
        }),
        status: ChoiceColumn({
            label: 'Status',
            mandatory: true,
            readOnly: true,
            default: 'draft',
            choices: {
                draft: 'Draft',
                pending_employee_signature: 'Pending Employee Signature',
                pending_supervisor_approval_signature: 'Pending Supervisor Approval and Signature',
                active: 'Active',
                expired: 'Expired',
                lapsed: 'Lapsed',
                superseded: 'Superseded',
                revoked: 'Revoked',
                obsolete_version: 'Obsolete Version',
                denied: 'Denied',
            },
        }),
        employee_signature_complete: BooleanColumn({
            label: 'Employee Signature Complete',
            default: false,
            readOnly: true,
        }),
        employee_signer: ReferenceColumn({
            label: 'Employee Signer',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            readOnly: true,
        }),
        employee_signature_date_time: DateTimeColumn({
            label: 'Employee Signature Date/Time',
            readOnly: true,
        }),
        supervisor_approval_complete: BooleanColumn({
            label: 'Supervisor Approval Complete',
            default: false,
            readOnly: true,
        }),
        supervisor_approver: ReferenceColumn({
            label: 'Supervisor Approver',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            readOnly: true,
        }),
        supervisor_approval_date_time: DateTimeColumn({
            label: 'Supervisor Approval Date/Time',
            readOnly: true,
        }),
        supervisor_signature_complete: BooleanColumn({
            label: 'Supervisor Signature Complete',
            default: false,
            readOnly: true,
        }),
        supervisor_signer: ReferenceColumn({
            label: 'Supervisor Signer',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            readOnly: true,
        }),
        supervisor_signature_date_time: DateTimeColumn({
            label: 'Supervisor Signature Date/Time',
            readOnly: true,
        }),
        source_hrsd_case: ReferenceColumn({
            label: 'Source HRSD Case',
            referenceTable: 'sn_hr_core_case',
            mandatory: true,
            cascadeRule: 'restrict',
            readOnly: true,
        }),
        supersedes_authorization_form: ReferenceColumn({
            label: 'Supersedes Authorization Form',
            referenceTable: 'x_2108496_hr_acces_rob_auth',
            cascadeRule: 'restrict',
            readOnly: true,
        }),
        superseded_by_authorization_form: ReferenceColumn({
            label: 'Superseded By Authorization Form',
            referenceTable: 'x_2108496_hr_acces_rob_auth',
            cascadeRule: 'restrict',
            readOnly: true,
        }),
        revocation_reason: MultiLineTextColumn({
            label: 'Revocation Reason',
            readOnly: true,
            maxLength: 4000,
        }),
        signed_pdf_generated: BooleanColumn({
            label: 'Signed PDF Generated',
            default: false,
            readOnly: true,
        }),
        signed_pdf_generated_date_time: DateTimeColumn({
            label: 'Signed PDF Generated Date/Time',
            readOnly: true,
        }),
        audit_notes: MultiLineTextColumn({
            label: 'Audit Notes',
            maxLength: 4000,
        }),
        reminder_1_sent_date_time: DateTimeColumn({
            label: 'Reminder 1 Sent Date/Time',
            readOnly: true,
        }),
        reminder_2_sent_date_time: DateTimeColumn({
            label: 'Reminder 2 Sent Date/Time',
            readOnly: true,
        }),
        reminder_3_sent_date_time: DateTimeColumn({
            label: 'Reminder 3 Sent Date/Time',
            readOnly: true,
        }),
        lapse_notice_sent_date_time: DateTimeColumn({
            label: 'Lapse Notice Sent Date/Time',
            readOnly: true,
        }),
        reminder_cycle_identifier: StringColumn({
            label: 'Reminder Cycle Identifier',
            readOnly: true,
            maxLength: 40,
        }),
    },
})
