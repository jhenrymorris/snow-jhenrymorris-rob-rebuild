import { Acl } from '@servicenow/sdk/core'
import {
    robAdminRole,
    robComplianceViewerRole,
} from '../roles/rob-roles.now'

const authorizationTable = 'x_2166123_rob_auth_rob_auth'
const detailTable = 'x_2166123_rob_auth_auth_detail'
const configurationTable = 'x_2166123_rob_auth_rob_config'

const authorizationReadScript = `var userId = gs.getUserID();
return gs.getUser().hasAssignedRole('x_2166123_rob_auth.rob_admin') ||
    gs.getUser().hasAssignedRole('x_2166123_rob_auth.rob_compliance_viewer') ||
    current.getValue('subject_person') == userId;`

const detailReadScript = `var userId = gs.getUserID();
if (gs.getUser().hasAssignedRole('x_2166123_rob_auth.rob_admin') ||
    gs.getUser().hasAssignedRole('x_2166123_rob_auth.rob_compliance_viewer') ||
    current.getValue('subject_person') == userId) {
    return true;
}
var staffing = gs.getUser().hasAssignedRole('x_2166123_rob_auth.rob_staffing_fulfiller');
var analytics = gs.getUser().hasAssignedRole('x_2166123_rob_auth.rob_analytics_fulfiller');
if (!staffing && !analytics) {
    return false;
}
var task = new GlideRecord('sn_hr_core_task');
task.addActiveQuery();
task.addQuery('x_2166123_rob_auth_related_authorization', current.getValue('rob_authorization_form'));
task.addQuery('x_2166123_rob_auth_rob_access_items', 'LIKE', current.getValue('access_item'));
task.query();
while (task.next()) {
    var assigned = task.getValue('assigned_to') == userId ||
        (task.getValue('assignment_group') && gs.getUser().isMemberOf(task.getValue('assignment_group')));
    var taskType = task.getValue('x_2166123_rob_auth_rob_task_type');
    if (assigned && ((staffing && taskType == 'staffing_fulfillment') ||
        (analytics && taskType == 'analytics_fulfillment'))) {
        return true;
    }
}
return false;`

export const authorizationRead = Acl({
    $id: Now.ID['rob-authorization-read'],
    type: 'record',
    table: authorizationTable,
    operation: 'read',
    decisionType: 'allow',
    script: authorizationReadScript,
    adminOverrides: false,
    description:
        'Allows ROB Admin, Compliance Viewer, and the synthetic/self-submitting subject to read a governed authorization. Supervisors and fulfillers use native task experiences instead of repository browse access.',
})

export const authorizationFieldRead = Acl({
    $id: Now.ID['rob-authorization-field-read'],
    type: 'record',
    table: authorizationTable,
    field: '*',
    operation: 'read',
    decisionType: 'allow',
    script: authorizationReadScript,
    adminOverrides: false,
    description: 'Applies the governed Authorization Form record-read decision to its fields.',
})

export const authorizationAdminCreate = Acl({
    $id: Now.ID['rob-authorization-admin-create'],
    type: 'record',
    table: authorizationTable,
    operation: 'create',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Restricts interactive Authorization Form creation to ROB Admin; governed lifecycle processing runs in server context.',
})

export const authorizationAdminWrite = Acl({
    $id: Now.ID['rob-authorization-admin-write'],
    type: 'record',
    table: authorizationTable,
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Prevents subjects, supervisors, fulfillers, Operations Managers, and compliance viewers from editing Authorization Forms.',
})

export const detailRead = Acl({
    $id: Now.ID['rob-authorization-detail-read'],
    type: 'record',
    table: detailTable,
    operation: 'read',
    decisionType: 'allow',
    script: detailReadScript,
    adminOverrides: false,
    description:
        'Allows Admin/Compliance/subject access and exact open-task contextual access for assigned Staffing or Analytics fulfillers. Operations Managers remain task-only.',
})

export const detailFieldRead = Acl({
    $id: Now.ID['rob-authorization-detail-field-read'],
    type: 'record',
    table: detailTable,
    field: '*',
    operation: 'read',
    decisionType: 'allow',
    script: detailReadScript,
    adminOverrides: false,
    description: 'Applies the governed Authorized Access Detail record-read decision to its fields.',
})

export const detailAdminCreate = Acl({
    $id: Now.ID['rob-authorization-detail-admin-create'],
    type: 'record',
    table: detailTable,
    operation: 'create',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Restricts interactive Detail creation to ROB Admin; governed lifecycle processing runs in server/native Flow context.',
})

export const detailAdminWrite = Acl({
    $id: Now.ID['rob-authorization-detail-admin-write'],
    type: 'record',
    table: detailTable,
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Prevents fulfillers and Operations Managers from editing governed Detail or approval/signature evidence.',
})

export const configurationAdminRead = Acl({
    $id: Now.ID['rob-configuration-admin-read'],
    type: 'record',
    table: configurationTable,
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole, robComplianceViewerRole],
    adminOverrides: false,
    description: 'Limits governed configuration visibility to ROB Admin and Compliance Viewer.',
})

export const configurationAdminWrite = Acl({
    $id: Now.ID['rob-configuration-admin-write'],
    type: 'record',
    table: configurationTable,
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Restricts configuration updates to ROB Admin. No delete ACL is granted.',
})

export const configurationAdminCreate = Acl({
    $id: Now.ID['rob-configuration-admin-create'],
    type: 'record',
    table: configurationTable,
    operation: 'create',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description: 'Restricts configuration creation to ROB Admin. The single-active-record runtime guard remains authoritative.',
})
