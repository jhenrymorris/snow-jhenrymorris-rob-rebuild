import { BusinessRule } from '@servicenow/sdk/core'

const terminalRobTask =
    'x_2166123_rob_auth_rob_task_typeISNOTEMPTY^stateCHANGESTO3'

const closedRobTask =
    'x_2166123_rob_auth_rob_task_typeISNOTEMPTY^state=3'

export const validateRobFulfillmentTaskCompletion = BusinessRule({
    $id: Now.ID['validate-rob-fulfillment-task-completion'],
    name: 'ROB Validate Fulfillment Task Completion',
    active: false,
    table: 'sn_hr_core_task',
    when: 'before',
    action: ['update'],
    order: 250,
    filterCondition: terminalRobTask,
    description:
        'Historical V2 cross-scope validation adapter retained inactive; Human Resources: Core owns the same-scope completion validation and transaction abort boundary.',
    script: Now.include('../server/validate-fulfillment-task-completion.server.js'),
})

export const reconcileRobFulfillmentTaskCompletion = BusinessRule({
    $id: Now.ID['reconcile-rob-fulfillment-task-completion'],
    name: 'ROB Reconcile Fulfillment Task Completion',
    active: true,
    table: 'sn_hr_core_task',
    when: 'after',
    action: ['update'],
    order: 350,
    filterCondition: closedRobTask,
    description:
        'Activates only covered Authorized Access Details and requests guarded HR Case closure after complete native fulfillment evidence is committed.',
    script: Now.include('../server/reconcile-fulfillment-task-completion.server.js'),
})
