import { ScheduledScript } from '@servicenow/sdk/core'

export const robDailyRenewalLapse = ScheduledScript({
    $id: Now.ID['rob-daily-renewal-lapse'],
    name: 'ROB Daily Renewal and Lapse Evaluation',
    script: Now.include('../server/daily-renewal-lapse.server.js'),
    frequency: 'daily',
    executionTime: { hours: 2, minutes: 0, seconds: 0 },
    timeZone: 'America/New_York',
    active: false,
})
