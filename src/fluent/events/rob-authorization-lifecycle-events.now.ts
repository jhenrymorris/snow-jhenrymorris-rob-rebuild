import { Record } from '@servicenow/sdk/core'

const sourceCaseTable = 'sn_hr_core_case'

export const lifecycleCreateEventName =
    'x_2166123_rob_auth.lifecycle.create'
export const lifecycleVerifyEventName =
    'x_2166123_rob_auth.lifecycle.verify'

export const robAuthorizationLifecycleCreateEvent = Record({
    $id: Now.ID['x-2166123-rob-auth-lifecycle-create-event'],
    table: 'sysevent_register',
    data: {
        suffix: 'lifecycle.create',
        event_name: lifecycleCreateEventName,
        description: 'Runs governed lifecycle creation after HR Case commit.',
        table: sourceCaseTable,
        fired_by: 'ROB Payroll/Workforce lifecycle enqueue Business Rules',
        priority: 100,
        caller_access: '2',
    },
})

export const robAuthorizationLifecycleVerifyEvent = Record({
    $id: Now.ID['x-2166123-rob-auth-lifecycle-verify-event'],
    table: 'sysevent_register',
    data: {
        suffix: 'lifecycle.verify',
        event_name: lifecycleVerifyEventName,
        description: 'Verifies committed governed records before signing.',
        table: sourceCaseTable,
        fired_by: 'ROB lifecycle create-event Script Action',
        priority: 100,
        caller_access: '2',
    },
})
