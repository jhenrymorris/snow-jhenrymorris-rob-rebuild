import { Record } from '@servicenow/sdk/core'

export const fppsWttsAccessItem = Record({
    $id: Now.ID['rob-access-item-fpps-wtts'],
    table: 'x_2166123_hr_acc_0_rob_access',
    data: {
        name: 'FPPS/WTTS',
        active: true,
        access_item_code: 'FPPS_WTTS',
        access_category: 'hr_system',
        default_fulfillment_team: 'staffing',
        requires_staffing_task: true,
        requires_analytics_task: false,
        requires_operations_manager_task: false,
        requires_access_end_date: false,
        external_provisioning_system: 'fpps_wtts',
        external_target_system: 'fpps_wtts',
        form_1768_mapping: 'fpps_wtts',
        sort_order: 100,
    },
})

export const eopfAccessItem = Record({
    $id: Now.ID['rob-access-item-eopf'],
    table: 'x_2166123_hr_acc_0_rob_access',
    data: {
        name: 'eOPF',
        active: true,
        access_item_code: 'EOPF',
        access_category: 'hr_system',
        default_fulfillment_team: 'staffing',
        requires_staffing_task: true,
        requires_analytics_task: false,
        requires_operations_manager_task: false,
        requires_access_end_date: false,
        external_provisioning_system: 'eopf',
        external_target_system: 'eopf',
        form_1768_mapping: 'eopf',
        sort_order: 200,
    },
})

export const usaStaffingAccessItem = Record({
    $id: Now.ID['rob-access-item-usa-staffing'],
    table: 'x_2166123_hr_acc_0_rob_access',
    data: {
        name: 'USA Staffing',
        active: true,
        access_item_code: 'USA_STAFFING',
        access_category: 'hr_system',
        default_fulfillment_team: 'staffing',
        requires_staffing_task: true,
        requires_analytics_task: false,
        requires_operations_manager_task: false,
        requires_access_end_date: false,
        external_provisioning_system: 'usa_staffing',
        external_target_system: 'usa_staffing',
        form_1768_mapping: 'usa_staffing',
        sort_order: 300,
    },
})

export const humanCapitalDataAccessItem = Record({
    $id: Now.ID['rob-access-item-human-capital-data'],
    table: 'x_2166123_hr_acc_0_rob_access',
    data: {
        name: 'OAS/DataMart',
        active: true,
        access_item_code: 'HC_DATA',
        access_category: 'human_capital_data',
        default_fulfillment_team: 'analytics',
        requires_staffing_task: false,
        requires_analytics_task: true,
        requires_operations_manager_task: false,
        requires_access_end_date: false,
        external_provisioning_system: 'not_applicable',
        external_target_system: 'not_applicable',
        form_1768_mapping: 'oas_datamart',
        sort_order: 400,
    },
})

export const reportAccessItem = Record({
    $id: Now.ID['rob-access-item-report-access'],
    table: 'x_2166123_hr_acc_0_rob_access',
    data: {
        name: 'Human Capital Reports',
        active: true,
        access_item_code: 'REPORT_ACCESS',
        access_category: 'report',
        default_fulfillment_team: 'analytics',
        requires_staffing_task: false,
        requires_analytics_task: true,
        requires_operations_manager_task: false,
        requires_access_end_date: false,
        external_provisioning_system: 'not_applicable',
        external_target_system: 'not_applicable',
        form_1768_mapping: 'human_capital_reports',
        sort_order: 500,
    },
})

export const workforceProfileChartsAccessItem = Record({
    $id: Now.ID['rob-access-item-workforce-profile-charts'],
    table: 'x_2166123_hr_acc_0_rob_access',
    data: {
        name: 'Workforce Profile Charts',
        active: true,
        access_item_code: 'WORKFORCE_PROFILE_CHARTS',
        access_category: 'workforce_profile_chart',
        default_fulfillment_team: 'analytics',
        requires_staffing_task: false,
        requires_analytics_task: true,
        requires_operations_manager_task: true,
        requires_access_end_date: false,
        external_provisioning_system: 'arm',
        external_target_system: 'oas',
        form_1768_mapping: 'wpc',
        sort_order: 600,
    },
})
