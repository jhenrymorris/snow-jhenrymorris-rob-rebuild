import { UiAction } from '@servicenow/sdk/core'
import { robAdminRole } from '../roles/rob-roles.now'

export const rederiveRequesterProfileSnapshots = UiAction({
    $id: Now.ID['rederive-requester-profile-snapshots'],
    name: 'Re-derive ROB Requester Profile',
    actionName: 'x_2166123_rob_auth_rederive_requester_profile',
    table: 'sn_hr_core_case',
    active: false,
    roles: [robAdminRole],
    condition:
        "gs.getUser().hasAssignedRole('x_2166123_rob_auth.rob_admin') && (current.getValue('sys_class_name') == 'sn_hr_core_case_payroll' || current.getValue('sys_class_name') == 'sn_hr_core_case_workforce_admin')",
    showInsert: false,
    showUpdate: true,
    form: {
        showButton: true,
        showContextMenu: true,
        showLink: false,
        style: 'primary',
    },
    list: {
        showButton: false,
        showContextMenu: false,
        showLink: false,
        showListChoice: false,
        showBannerButton: false,
        showSaveWithFormButton: false,
    },
    hint: 'Deprecated: final validated profile context is snapshotted on the governed Authorization Form.',
    script: `current.setValue('x_2166123_rob_auth_snapshot_correction_requested', '1');
current.update();
action.setRedirectURL(current);`,
})
