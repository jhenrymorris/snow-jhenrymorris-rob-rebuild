import { BusinessRule } from '@servicenow/sdk/core'

const fulfillmentFilter =
    'x_2166123_rob_auth_fulfillment_gate_complete=true^x_2166123_rob_auth_authorization_processing_blocked=false^x_2166123_rob_auth_authorization_pathINnew,reuse,amendment,renewal'

export const orchestratePayrollFulfillment = BusinessRule({
    $id: Now.ID['orchestrate-payroll-fulfillment'],
    name: 'ROB Orchestrate Payroll Fulfillment',
    active: true,
    table: 'sn_hr_core_case_payroll',
    when: 'after',
    action: ['update'],
    order: 400,
    filterCondition: fulfillmentFilter,
    description:
        'Active M4 entry point. Plans grouped fulfillment work and delegates retry-safe native HR Task creation to the narrow HR Core bridge only after the authorization gate is complete.',
    script: Now.include('../server/fulfillment-orchestration.server.js'),
})

export const orchestrateWorkforceAdministrationFulfillment = BusinessRule({
    $id: Now.ID['orchestrate-workforce-administration-fulfillment'],
    name: 'ROB Orchestrate Workforce Administration Fulfillment',
    active: true,
    table: 'sn_hr_core_case_workforce_admin',
    when: 'after',
    action: ['update'],
    order: 400,
    filterCondition: fulfillmentFilter,
    description:
        'Active M4 entry point. Plans grouped fulfillment work and delegates retry-safe native HR Task creation to the narrow HR Core bridge only after the authorization gate is complete.',
    script: Now.include('../server/fulfillment-orchestration.server.js'),
})
