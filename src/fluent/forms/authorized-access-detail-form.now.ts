import { Form, default_view } from '@servicenow/sdk/core'
import { robAdminRole, robComplianceViewerRole } from '../roles/rob-roles.now'

export const authorizedAccessDetailForm = Form({
    table: 'x_2108496_hr_acces_auth_detail', view: default_view,
    roles: [robAdminRole, robComplianceViewerRole],
    sections: [
        { caption: 'Source Records', content: [{ layout: 'two-column', leftElements: [
            { field: 'number', type: 'table_field' }, { field: 'source_hrsd_case', type: 'table_field' },
        ], rightElements: [
            { field: 'rob_authorization_form', type: 'table_field' }, { field: 'subject_person', type: 'table_field' },
        ] }] },
        { caption: 'Access Item', content: [{ layout: 'one-column', elements: [
            { field: 'access_item', type: 'table_field' }, { field: 'business_justification_snapshot', type: 'table_field' },
        ] }] },
        { caption: 'Authorization Status and Dates', content: [{ layout: 'two-column', leftElements: [
            { field: 'status', type: 'table_field' }, { field: 'authorized_start_date', type: 'table_field' },
        ], rightElements: [{ field: 'authorized_end_date', type: 'table_field' }] }] },
        { caption: 'Routing Snapshot', content: [{ layout: 'two-column', leftElements: [
            { field: 'staffing_task_required_snapshot', type: 'table_field' }, { field: 'operations_manager_task_required_snapshot', type: 'table_field' }, { field: 'provisioning_system_snapshot', type: 'table_field' },
        ], rightElements: [
            { field: 'analytics_task_required_snapshot', type: 'table_field' }, { field: 'target_system_snapshot', type: 'table_field' },
        ] }] },
        { caption: 'Notes', content: [{ layout: 'one-column', elements: [{ field: 'notes', type: 'table_field' }] }] },
    ],
})
