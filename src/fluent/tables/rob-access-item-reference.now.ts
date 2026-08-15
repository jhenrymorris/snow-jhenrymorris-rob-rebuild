import {
    BooleanColumn,
    ChoiceColumn,
    IntegerColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_2108496_hr_acces_rob_access = Table({
    name: 'x_2108496_hr_acces_rob_access',
    label: 'ROB Access Item Reference',
    display: 'name',
    extensible: false,
    accessibleFrom: 'package_private',
    allowWebServiceAccess: false,
    createAccessControls: false,
    index: [
        {
            name: 'rob_access_code_uq',
            unique: true,
            element: 'access_item_code',
        },
        {
            name: 'rob_access_browse',
            unique: false,
            element: ['active', 'access_category', 'sort_order'],
        },
    ],
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 120,
        }),
        active: BooleanColumn({
            label: 'Active',
            mandatory: true,
            default: true,
        }),
        access_item_code: StringColumn({
            label: 'Access Item Code',
            mandatory: true,
            maxLength: 40,
        }),
        access_category: ChoiceColumn({
            label: 'Access Category',
            mandatory: true,
            choices: {
                hr_system: 'HR System',
                human_capital_data: 'Human Capital Data',
                report: 'Report',
                workforce_profile_chart: 'Analytics',
            },
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 4000,
        }),
        default_fulfillment_team: ChoiceColumn({
            label: 'Default Fulfillment Team',
            mandatory: true,
            choices: {
                staffing: 'Staffing',
                analytics: 'Analytics',
                mixed: 'Mixed',
                exception_review: 'Exception Review',
            },
        }),
        default_assignment_group: ReferenceColumn({
            label: 'Default Assignment Group',
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true',
            useReferenceQualifier: 'simple',
            cascadeRule: 'clear',
        }),
        requires_staffing_task: BooleanColumn({
            label: 'Requires Staffing Task',
            mandatory: true,
            default: false,
        }),
        requires_analytics_task: BooleanColumn({
            label: 'Requires Analytics Task',
            mandatory: true,
            default: false,
        }),
        requires_operations_manager_task: BooleanColumn({
            label: 'Requires Operations Manager Task',
            mandatory: true,
            default: false,
        }),
        requires_access_end_date: BooleanColumn({
            label: 'Requires Access End Date',
            mandatory: true,
            default: false,
        }),
        external_provisioning_system: ChoiceColumn({
            label: 'External Provisioning System',
            mandatory: true,
            choices: {
                arm: 'ARM',
                fpps_wtts: 'FPPS / WTTS',
                eopf: 'eOPF',
                usa_staffing: 'USA Staffing',
                other: 'Other',
                not_applicable: 'Not Applicable',
            },
        }),
        external_target_system: ChoiceColumn({
            label: 'External Target System',
            mandatory: true,
            choices: {
                oas: 'OAS / Workforce Profile Charts',
                fpps_wtts: 'FPPS / WTTS',
                eopf: 'eOPF',
                usa_staffing: 'USA Staffing',
                other: 'Other',
                not_applicable: 'Not Applicable',
            },
        }),
        form_1768_mapping: ChoiceColumn({
            label: 'Form 1768 Mapping',
            mandatory: true,
            choices: {
                fpps_wtts: 'FPPS/WTTS',
                eopf: 'eOPF',
                usa_staffing: 'USA Staffing',
                oas_datamart: 'OAS/DataMart',
                human_capital_reports: 'Human Capital Reports',
                wpc: 'WPC',
            },
        }),
        sort_order: IntegerColumn({
            label: 'Sort Order',
            mandatory: true,
            min: 0,
        }),
        notes: MultiLineTextColumn({
            label: 'Notes',
            maxLength: 4000,
        }),
    },
})
