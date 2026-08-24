import { Acl } from '@servicenow/sdk/core'
import { robAdminRole } from '../roles/rob-roles.now'

const accessItemTable = 'x_2166123_rob_auth_rob_access'
export const activeAccessItemInternalRead = Acl({
    $id: Now.ID['rob-access-item-active-internal-read'],
    type: 'record',
    table: accessItemTable,
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    condition: 'active=true',
    adminOverrides: false,
    description:
        'Allows ordinary authenticated internal users to resolve active ROB access items in Employee Center list collectors.',
})

export const accessItemAdminRead = Acl({
    $id: Now.ID['rob-access-item-admin-read'],
    type: 'record',
    table: accessItemTable,
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description:
        'Allows ROB administrators to read active and inactive ROB access-item reference records.',
})

export const accessItemAdminCreate = Acl({
    $id: Now.ID['rob-access-item-admin-create'],
    type: 'record',
    table: accessItemTable,
    operation: 'create',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description:
        'Allows only ROB administrators to create ROB access-item reference records.',
})

export const accessItemAdminWrite = Acl({
    $id: Now.ID['rob-access-item-admin-write'],
    type: 'record',
    table: accessItemTable,
    operation: 'write',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description:
        'Allows only ROB administrators to maintain ROB access-item reference records. No delete ACL is granted.',
})

export const accessItemInternalFieldMask = Acl({
    $id: Now.ID['rob-access-item-internal-field-mask'],
    type: 'record',
    table: accessItemTable,
    field: '*',
    operation: 'read',
    decisionType: 'allow',
    roles: [robAdminRole],
    adminOverrides: false,
    description:
        'Masks routing, assignment, external-system, notes, and other internal fields from ordinary catalog users.',
})

export const activeAccessItemSysIdRead = Acl({
    $id: Now.ID['rob-access-item-active-sys-id-read'],
    type: 'record',
    table: accessItemTable,
    field: 'sys_id',
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    condition: 'active=true',
    adminOverrides: false,
    description:
        'Allows internal catalog users to resolve the sys_id value stored by a list collector for active access items.',
})

export const activeAccessItemNameRead = Acl({
    $id: Now.ID['rob-access-item-active-name-read'],
    type: 'record',
    table: accessItemTable,
    field: 'name',
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    condition: 'active=true',
    adminOverrides: false,
    description:
        'Allows internal catalog users to read the display name of active access items.',
})

export const activeAccessItemCategoryRead = Acl({
    $id: Now.ID['rob-access-item-active-category-read'],
    type: 'record',
    table: accessItemTable,
    field: 'access_category',
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    condition: 'active=true',
    adminOverrides: false,
    description:
        'Allows the two list-collector reference qualifiers to evaluate the category of active access items.',
})

export const activeAccessItemActiveRead = Acl({
    $id: Now.ID['rob-access-item-active-active-read'],
    type: 'record',
    table: accessItemTable,
    field: 'active',
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    condition: 'active=true',
    adminOverrides: false,
    description:
        'Allows list-collector qualifiers to evaluate the active flag without exposing inactive records.',
})

export const activeAccessItemSortOrderRead = Acl({
    $id: Now.ID['rob-access-item-active-sort-order-read'],
    type: 'record',
    table: accessItemTable,
    field: 'sort_order',
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    condition: 'active=true',
    adminOverrides: false,
    description:
        'Allows Employee Center to order active access-item choices while keeping routing fields hidden.',
})
