import { Record } from '@servicenow/sdk/core'

export const robAuthorizationRelatedList = Record({
    $id: Now.ID['rob-authorization-access-details-related-list'],
    table: 'sys_ui_related_list',
    data: {
        name: 'x_2166123_rob_auth_rob_auth',
        view: 'Default view',
    },
})

export const robAuthorizationAccessDetailsRelatedListEntry = Record({
    $id: Now.ID['rob-authorization-access-details-related-list-entry'],
    table: 'sys_ui_related_list_entry',
    data: {
        list_id: robAuthorizationRelatedList,
        position: 0,
        related_list: 'x_2166123_rob_auth_auth_detail.rob_authorization_form',
    },
})

export const robAuthorizationAccessDetailsListControl = Record({
    $id: Now.ID['rob-authorization-access-details-list-control'],
    table: 'sys_ui_list_control',
    data: {
        name: 'x_2166123_rob_auth_rob_auth',
        related_list: 'x_2166123_rob_auth_auth_detail.rob_authorization_form',
        omit_new_button: true,
        omit_edit_button: true,
    },
})
