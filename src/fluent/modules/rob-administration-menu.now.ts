import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { robAdminRole, robComplianceViewerRole } from '../roles/rob-roles.now'

const admin = 'x_2166123_hr_acc_0.rob_admin'
const compliance = 'x_2166123_hr_acc_0.rob_compliance_viewer'

export const robAdministrationMenu = ApplicationMenu({
    $id: Now.ID['rob-administration-menu'],
    title: 'HR Access ROB Authorization',
    name: 'hr_access_rob_authorization',
    hint: 'Administer ROB authorization records, reference data, and configuration.',
    description: 'Administrative navigation for the HR Access ROB Authorization application.',
    roles: [robAdminRole, robComplianceViewerRole],
    active: true,
    order: 100,
})

export const robAuthorizationFormsModule = Record({
    $id: Now.ID['rob-authorization-forms-module'], table: 'sys_app_module',
    data: { title: 'ROB Authorization Forms', application: robAdministrationMenu, link_type: 'LIST', name: 'x_2166123_hr_acc_0_rob_auth', hint: 'Open the ROB Authorization Form list.', roles: [admin, compliance], active: true, order: 100 },
})

export const authorizedAccessDetailsModule = Record({
    $id: Now.ID['authorized-access-details-module'], table: 'sys_app_module',
    data: { title: 'Authorized Access Details', application: robAdministrationMenu, link_type: 'LIST', name: 'x_2166123_hr_acc_0_auth_detail', hint: 'Open the Authorized Access Detail list.', roles: [admin, compliance], active: true, order: 200 },
})

export const robAccessItemsModule = Record({
    $id: Now.ID['rob-access-items-module'], table: 'sys_app_module',
    data: { title: 'ROB Access Items', application: robAdministrationMenu, link_type: 'LIST', name: 'x_2166123_hr_acc_0_rob_access', hint: 'Open the ROB Access Item Reference list.', roles: [admin], active: true, order: 300 },
})

export const robConfigurationModule = Record({
    $id: Now.ID['rob-configuration-module'], table: 'sys_app_module',
    data: { title: 'ROB Configuration', application: robAdministrationMenu, link_type: 'LIST', name: 'x_2166123_hr_acc_0_rob_config', hint: 'Open the ROB Configuration list.', roles: [admin], active: true, order: 400 },
})
