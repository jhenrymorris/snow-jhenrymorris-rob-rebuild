import { Role } from '@servicenow/sdk/core'

export const robStaffingFulfillerRole = Role({
    name: 'x_2166123_hr_acc_0.rob_staffing_fulfiller',
    description: 'Processes Staffing fulfillment work for approved ROB access requests.',
})

export const robAnalyticsFulfillerRole = Role({
    name: 'x_2166123_hr_acc_0.rob_analytics_fulfiller',
    description: 'Processes Analytics fulfillment work for approved ROB access requests.',
})

export const robOperationsManagerRole = Role({
    name: 'x_2166123_hr_acc_0.rob_operations_manager',
    description: 'Completes assigned Operations Manager ARM role-assignment work for Workforce Profile Charts.',
})

export const robComplianceViewerRole = Role({
    name: 'x_2166123_hr_acc_0.rob_compliance_viewer',
    description: 'Reviews current and historical ROB authorization evidence for compliance purposes.',
})

export const robAdminRole = Role({
    name: 'x_2166123_hr_acc_0.rob_admin',
    description: 'Administers ROB configuration, reference data, and application setup.',
    scopedAdmin: true,
})
