import { EmailNotification, Record } from '@servicenow/sdk/core'

const authorizationTable = 'x_2166123_rob_auth_rob_auth'
const renewalEventName = 'x_2166123_rob_auth.renewal'
const lapseEventName = 'x_2166123_rob_auth.lapse'

export const robRenewalEvent = Record({
    $id: Now.ID['rob-renewal-notice-event'],
    table: 'sysevent_register',
    data: {
        suffix: 'renewal',
        event_name: renewalEventName,
        description: 'Queued once per governed renewal reminder threshold.',
        table: authorizationTable,
        fired_by: 'ROB Daily Renewal and Lapse Evaluation',
        priority: 100,
    },
})

export const robLapseEvent = Record({
    $id: Now.ID['rob-lapse-notice-event'],
    table: 'sysevent_register',
    data: {
        suffix: 'lapse',
        event_name: lapseEventName,
        description: 'Queued once when an authorization lapses without an active replacement.',
        table: authorizationTable,
        fired_by: 'ROB Daily Renewal and Lapse Evaluation',
        priority: 100,
    },
})

export const robRenewalNotification = EmailNotification({
    $id: Now.ID['rob-renewal-notification'],
    table: authorizationTable,
    name: 'ROB Authorization Renewal Reminder',
    description: 'Privacy-safe reminder that a governed ROB authorization requires renewal.',
    active: true,
    mandatory: true,
    triggerConditions: {
        generationType: 'event',
        eventName: renewalEventName,
    },
    recipientDetails: {
        recipientFields: ['subject_person'],
        sendToCreator: false,
        excludeDelegates: true,
    },
    emailContent: {
        contentType: 'text/plain',
        subject: 'Action required: ROB authorization ${number} renewal',
        messageText:
            'Authorization: ${number}\nSubject: ${subject_person}\nExpiration date: ${expiration_date}\nRequired action: Submit the applicable ROB access request for renewal.\nSecure record: ${URI_REF}',
        includeAttachments: false,
        omitWatermark: false,
    },
})

export const robLapseNotification = EmailNotification({
    $id: Now.ID['rob-lapse-notification'],
    table: authorizationTable,
    name: 'ROB Authorization Lapse Notice',
    description: 'Privacy-safe notice that a governed ROB authorization has lapsed.',
    active: true,
    mandatory: true,
    triggerConditions: {
        generationType: 'event',
        eventName: lapseEventName,
    },
    recipientDetails: {
        recipientFields: ['subject_person'],
        sendToCreator: false,
        excludeDelegates: true,
    },
    emailContent: {
        contentType: 'text/plain',
        subject: 'ROB authorization ${number} lapsed',
        messageText:
            'Authorization: ${number}\nSubject: ${subject_person}\nExpiration date: ${expiration_date}\nRequired action: Contact the ROB support team or submit a renewal request. ServiceNow does not deprovision external access.\nSecure record: ${URI_REF}',
        includeAttachments: false,
        omitWatermark: false,
    },
})
