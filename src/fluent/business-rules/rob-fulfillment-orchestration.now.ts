import { BusinessRule } from '@servicenow/sdk/core'

const fulfillmentFilter =
    'x_2108496_hr_acces_fulfillment_gate_complete=true^x_2108496_hr_acces_authorization_processing_blocked=false^x_2108496_hr_acces_authorization_pathINnew,reuse,amendment,renewal'

export const orchestratePayrollFulfillment = BusinessRule({
    $id: Now.ID['orchestrate-payroll-fulfillment'],
    name: 'ROB Orchestrate Payroll Fulfillment',
    active: false,
    table: 'sn_hr_core_case_payroll',
    when: 'after',
    action: ['update'],
    order: 400,
    filterCondition: fulfillmentFilter,
    description:
        'Inactive M4 entry point. Creates retry-safe native HR fulfillment tasks only after the production authorization gate is proven.',
    script: Now.include('../server/fulfillment-orchestration.server.js'),
})

export const orchestrateWorkforceAdministrationFulfillment = BusinessRule({
    $id: Now.ID['orchestrate-workforce-administration-fulfillment'],
    name: 'ROB Orchestrate Workforce Administration Fulfillment',
    active: false,
    table: 'sn_hr_core_case_workforce_admin',
    when: 'after',
    action: ['update'],
    order: 400,
    filterCondition: fulfillmentFilter,
    description:
        'Inactive M4 entry point. Creates retry-safe native HR fulfillment tasks only after the production authorization gate is proven.',
    script: Now.include('../server/fulfillment-orchestration.server.js'),
})
