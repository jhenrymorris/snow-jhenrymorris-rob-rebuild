import { ListCollectorVariable, ReferenceVariable, VariableSet } from '@servicenow/sdk/core'
import { x_2166123_hr_acc_0_rob_access } from '../tables/rob-access-item-reference.now'

export const robAnalyticsAccessVariableSet = VariableSet({
    $id: Now.ID['rob-analytics-access-variable-set'],
    title: 'ROB Analytics Access',
    internalName: 'rob_analytics_access',
    description: 'Requested human capital data and report access items.',
    type: 'singleRow',
    layout: 'normal',
    order: 300,
    variables: {
        x_2166123_hr_acc_0_requested_items: ListCollectorVariable({
            question: 'Requested Access Items',
            listTable: x_2166123_hr_acc_0_rob_access.name,
            referenceQual:
                'active=true^access_categoryINhuman_capital_data,report,workforce_profile_chart',
            order: 100,
            active: true,
            mandatory: true,
            mapToField: false,
        }),
        x_2166123_hr_acc_0_operations_manager: ReferenceVariable({
            question: 'Operations Manager',
            referenceTable: 'sys_user',
            useReferenceQualifier: 'simple',
            referenceQualCondition: 'active=true',
            order: 200,
            active: true,
            mandatory: false,
            mapToField: false,
        }),
    },
})
