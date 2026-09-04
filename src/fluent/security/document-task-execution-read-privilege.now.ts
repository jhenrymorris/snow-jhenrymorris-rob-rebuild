import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['read-document-task-execution'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sn_doc_task_execution',
    targetScope: '6a9ea833b763330088d9bc78ee11a88q',
    targetType: 'sys_db_object',
})
