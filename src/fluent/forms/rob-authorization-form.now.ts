import { Form, default_view } from '@servicenow/sdk/core'
import { robAdminRole, robComplianceViewerRole } from '../roles/rob-roles.now'

export const robAuthorizationForm = Form({
    table: 'x_2166123_hr_acc_0_rob_auth', view: default_view,
    roles: [robAdminRole, robComplianceViewerRole],
    sections: [
        {
            caption: 'Subject and Employment', content: [{
                layout: 'two-column', leftElements: [
                    { field: 'subject_person', type: 'table_field' }, { field: 'employee_id', type: 'table_field' },
                    { field: 'organization', type: 'table_field' }, { field: 'employment_type', type: 'table_field' },
                ], rightElements: [
                    { field: 'supervisor', type: 'table_field' }, { field: 'position_title', type: 'table_field' },
                    { field: 'access_end_date', type: 'table_field' },
                ]
            }]
        },
        {
            caption: 'Authorization Scope',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'number',
                            type: 'table_field',
                        },
                        {
                            field: 'authorization_action',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'source_hrsd_case',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'annotation',
                            annotationId:
                                Now.ID[
                                'rob-authorization-business-justification-label'
                                ],
                            text: 'Business Justification (required)',
                            isPlainText: true,
                            annotationType: 'Plain_Text',
                        },
                        {
                            field: 'business_justification',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        { caption: 'Version and Dates', content: [{ layout: 'two-column', leftElements: [{ field: 'form_version', type: 'table_field' }, { field: 'effective_date', type: 'table_field' }], rightElements: [{ field: 'expiration_date', type: 'table_field' }] }] },
        { caption: 'Employee Signature Evidence', content: [{ layout: 'two-column', leftElements: [{ field: 'employee_signature_complete', type: 'table_field' }, { field: 'employee_signer', type: 'table_field' }], rightElements: [{ field: 'employee_signature_date_time', type: 'table_field' }] }] },
        {
            caption: 'Supervisor Approval and Signature Evidence', content: [{
                layout: 'two-column', leftElements: [
                    { field: 'supervisor_approval_complete', type: 'table_field' }, { field: 'supervisor_approver', type: 'table_field' }, { field: 'supervisor_approval_date_time', type: 'table_field' },
                ], rightElements: [
                    { field: 'supervisor_signature_complete', type: 'table_field' }, { field: 'supervisor_signer', type: 'table_field' }, { field: 'supervisor_signature_date_time', type: 'table_field' },
                ]
            }]
        },
        {
            caption: 'Status and Supersession', content: [
                { layout: 'two-column', leftElements: [{ field: 'status', type: 'table_field' }, { field: 'supersedes_authorization_form', type: 'table_field' }], rightElements: [{ field: 'superseded_by_authorization_form', type: 'table_field' }] },
                { layout: 'one-column', elements: [{ field: 'revocation_reason', type: 'table_field' }] },
            ]
        },
        { caption: 'Signed PDF', content: [{ layout: 'two-column', leftElements: [{ field: 'signed_pdf_generated', type: 'table_field' }], rightElements: [{ field: 'signed_pdf_generated_date_time', type: 'table_field' }] }] },
        {
            caption: 'Reminder and Lapse History', content: [{
                layout: 'two-column', leftElements: [
                    { field: 'reminder_1_sent_date_time', type: 'table_field' }, { field: 'reminder_2_sent_date_time', type: 'table_field' }, { field: 'reminder_3_sent_date_time', type: 'table_field' },
                ], rightElements: [{ field: 'lapse_notice_sent_date_time', type: 'table_field' }, { field: 'reminder_cycle_identifier', type: 'table_field' }]
            }]
        },
        { caption: 'Audit Notes', content: [{ layout: 'one-column', elements: [{ field: 'audit_notes', type: 'table_field' }] }] },
    ],
})
