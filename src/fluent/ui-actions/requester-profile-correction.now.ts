import { UiAction } from '@servicenow/sdk/core'
import { robAdminRole } from '../roles/rob-roles.now'

export const rederiveRequesterProfileSnapshots = UiAction({
    $id: Now.ID['rederive-requester-profile-snapshots'],
    name: 'Re-derive ROB Requester Profile',
    actionName: 'x_2108496_hr_acces_rederive_requester_profile',
    table: 'sn_hr_core_case',
    active: true,
    roles: [robAdminRole],
    condition:
        "gs.getUser().hasAssignedRole('x_2108496_hr_acces.rob_admin') && (current.getValue('sys_class_name') == 'sn_hr_core_case_payroll' || current.getValue('sys_class_name') == 'sn_hr_core_case_workforce_admin')",
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
    hint: 'Re-derive title and supervisor from the requester directory profile after entering a new correction reason.',
    script: `current.setValue('x_2108496_hr_acces_snapshot_correction_requested', '1');
current.update();
action.setRedirectURL(current);`,
})
