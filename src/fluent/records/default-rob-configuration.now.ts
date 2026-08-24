import { Record } from '@servicenow/sdk/core'

export const defaultRobConfiguration = Record({
    $id: Now.ID['default-rob-configuration'],
    table: 'x_2166123_rob_auth_rob_config',
    data: {
        name: 'Default ROB Configuration',
        active: true,
        current_accepted_form_version: '2026.04',
        agency_annual_recertification_date: '2027-09-30',
        mid_cycle_grace_window_days: 90,
        renewal_reminder_1_days: 90,
        renewal_reminder_2_days: 60,
        renewal_reminder_3_days: 30,
        lapse_notification_enabled: true,
        allow_sys_user_title_fallback: true,
        notes: 'Synthetic PDI seed only: the agency annual recertification date and task timing values require business confirmation before production use.',
    },
})
