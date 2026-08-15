import { Form, default_view } from '@servicenow/sdk/core'
import { robAdminRole } from '../roles/rob-roles.now'

export const robAccessItemForm = Form({
    table: 'x_2108496_hr_acces_rob_access', view: default_view, roles: [robAdminRole],
    sections: [
        { caption: 'Access Item', content: [
            { layout: 'two-column', leftElements: [{ field: 'name', type: 'table_field' }, { field: 'access_item_code', type: 'table_field' }, { field: 'access_category', type: 'table_field' }], rightElements: [{ field: 'active', type: 'table_field' }, { field: 'sort_order', type: 'table_field' }] },
            { layout: 'one-column', elements: [{ field: 'description', type: 'table_field' }] },
        ] },
        { caption: 'Routing', content: [{ layout: 'two-column', leftElements: [{ field: 'default_fulfillment_team', type: 'table_field' }], rightElements: [{ field: 'default_assignment_group', type: 'table_field' }] }] },
        { caption: 'External Systems', content: [{ layout: 'two-column', leftElements: [{ field: 'external_provisioning_system', type: 'table_field' }, { field: 'form_1768_mapping', type: 'table_field' }], rightElements: [{ field: 'external_target_system', type: 'table_field' }] }] },
        { caption: 'Conditions', content: [{ layout: 'two-column', leftElements: [{ field: 'requires_staffing_task', type: 'table_field' }, { field: 'requires_operations_manager_task', type: 'table_field' }], rightElements: [{ field: 'requires_analytics_task', type: 'table_field' }, { field: 'requires_access_end_date', type: 'table_field' }] }] },
        { caption: 'Notes', content: [{ layout: 'one-column', elements: [{ field: 'notes', type: 'table_field' }] }] },
    ],
})
