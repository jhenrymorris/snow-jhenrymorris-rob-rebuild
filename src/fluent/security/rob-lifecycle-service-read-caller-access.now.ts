import { Record } from '@servicenow/sdk/core'

import { robAuthorizationLifecycleEntry } from '../script-includes/rob-authorization-lifecycle-entry.now'

Record({
    $id: Now.ID['rob-lifecycle-entry-read-hr-service-caller-access'],
    table: 'sys_restricted_caller_access',
    data: {
        source: robAuthorizationLifecycleEntry,
        source_type: '2',
        source_scope: Now.ref('sys_scope', {
            scope: 'x_2166123_rob_auth',
        }),
        target: Now.ref('sys_db_object', {
            name: 'sn_hr_core_service',
        }),
        target_scope: Now.ref('sys_scope', { scope: 'sn_hr_core' }),
        operation: 'read',
        status: '2',
    },
})
