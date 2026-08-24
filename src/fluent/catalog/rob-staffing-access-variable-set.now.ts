import { ListCollectorVariable, VariableSet } from '@servicenow/sdk/core'
import { x_2166123_hr_acc_0_rob_access } from '../tables/rob-access-item-reference.now'

export const robStaffingAccessVariableSet = VariableSet({
    $id: Now.ID['rob-staffing-access-variable-set'],
    title: 'ROB Staffing Access',
    internalName: 'rob_staffing_access',
    description: 'Requested HR systems access items.',
    type: 'singleRow',
    layout: 'normal',
    order: 200,
    variables: {
        x_2166123_hr_acc_0_requested_items: ListCollectorVariable({
            question: 'Requested Access Items',
            listTable: x_2166123_hr_acc_0_rob_access.name,
            referenceQual: 'active=true^access_category=hr_system',
            order: 100,
            active: true,
            mandatory: true,
            mapToField: false,
        }),
    },
})
