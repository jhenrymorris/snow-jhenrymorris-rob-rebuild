import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['read-hr-profile'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sn_hr_core_profile',
    targetScope: 'sn_hr_core',
    targetType: 'sys_db_object',
})

CrossScopePrivilege({
    $id: Now.ID['read-hr-position'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sn_hr_core_position',
    targetScope: 'sn_hr_core',
    targetType: 'sys_db_object',
})

CrossScopePrivilege({
    $id: Now.ID['read-department'],
    operation: 'read',
    status: 'allowed',
    targetName: 'cmn_department',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

CrossScopePrivilege({
    $id: Now.ID['read-user-group'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_user_group',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

CrossScopePrivilege({
    $id: Now.ID['read-user-group-membership'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_user_grmember',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
