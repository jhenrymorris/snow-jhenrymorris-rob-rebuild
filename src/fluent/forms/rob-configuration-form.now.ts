import { Form, default_view } from '@servicenow/sdk/core'
import { robAdminRole } from '../roles/rob-roles.now'

export const robConfigurationForm = Form({
    table: 'x_2166123_rob_auth_rob_config', view: default_view, roles: [robAdminRole],
    sections: [
        { caption: 'General', content: [{ layout: 'two-column', leftElements: [{ field: 'name', type: 'table_field' }], rightElements: [{ field: 'active', type: 'table_field' }] }] },
        { caption: 'Recertification and Grace Period', content: [{ layout: 'two-column', leftElements: [{ field: 'current_accepted_form_version', type: 'table_field' }, { field: 'agency_annual_recertification_date', type: 'table_field' }], rightElements: [{ field: 'mid_cycle_grace_window_days', type: 'table_field' }] }] },
        { caption: 'Reminder Rules', content: [{ layout: 'two-column', leftElements: [{ field: 'renewal_reminder_1_days', type: 'table_field' }, { field: 'renewal_reminder_2_days', type: 'table_field' }], rightElements: [{ field: 'renewal_reminder_3_days', type: 'table_field' }, { field: 'lapse_notification_enabled', type: 'table_field' }] }] },
        { caption: 'Assignment Groups', content: [{ layout: 'two-column', leftElements: [{ field: 'default_staffing_assignment_group', type: 'table_field' }, { field: 'default_operations_manager_escalation_group', type: 'table_field' }], rightElements: [{ field: 'default_analytics_assignment_group', type: 'table_field' }, { field: 'default_exception_review_group', type: 'table_field' }] }] },
        { caption: 'Task Timing and Renewal Oversight', content: [{ layout: 'two-column', leftElements: [{ field: 'operations_manager_task_due_days', type: 'table_field' }, { field: 'operations_manager_escalation_days', type: 'table_field' }], rightElements: [{ field: 'exception_task_due_days', type: 'table_field' }, { field: 'renewal_notification_copy_group', type: 'table_field' }] }] },
        { caption: 'Notes', content: [{ layout: 'one-column', elements: [{ field: 'notes', type: 'table_field' }] }] },
    ],
})
