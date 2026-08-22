import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['read-native-supervisor-approval'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sysapproval_approver',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

CrossScopePrivilege({
    $id: Now.ID['create-native-supervisor-approval'],
    operation: 'create',
    status: 'allowed',
    targetName: 'sysapproval_approver',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
