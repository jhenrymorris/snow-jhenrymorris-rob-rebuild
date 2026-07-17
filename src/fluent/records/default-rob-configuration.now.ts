import { Record } from '@servicenow/sdk/core'

export const defaultRobConfiguration = Record({
    $id: Now.ID['default-rob-configuration'],
    $meta: { installMethod: 'first install' },
    table: 'x_2108496_hr_acces_rob_config',
    data: {
        name: 'Default ROB Configuration',
        active: true,
        current_accepted_form_version: '2024.04',
        agency_annual_recertification_date: '2027-09-30',
        mid_cycle_grace_window_days: 90,
        renewal_reminder_1_days: 90,
        renewal_reminder_2_days: 60,
        renewal_reminder_3_days: 30,
        lapse_notification_enabled: true,
    },
})
