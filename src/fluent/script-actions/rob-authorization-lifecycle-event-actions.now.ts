import { ScriptAction } from '@servicenow/sdk/core'
import {
    lifecycleCreateEventName,
    lifecycleVerifyEventName,
} from '../events/rob-authorization-lifecycle-events.now'

export const robAuthorizationLifecycleCreateEventAction = ScriptAction({
    $id: Now.ID['rob-authorization-lifecycle-create-event-action'],
    name: 'ROB Process Authorization Lifecycle Create Event',
    active: true,
    eventName: lifecycleCreateEventName,
    order: 100,
    description:
        'Fixed V2 event handler that rereads one committed Payroll or Workforce HR Case and invokes the existing shared lifecycle entry.',
    script: Now.include(
        '../server/authorization-lifecycle-create-event.server.js'
    ),
})

export const robAuthorizationLifecycleVerifyEventAction = ScriptAction({
    $id: Now.ID['rob-authorization-lifecycle-verify-event-action'],
    name: 'ROB Verify Committed Authorization Signing Event',
    active: true,
    eventName: lifecycleVerifyEventName,
    order: 100,
    description:
        'Fixed V2 event handler that rereads one exact committed Authorization Form before idempotent signing launch.',
    script: Now.include(
        '../server/authorization-lifecycle-verify-event.server.js'
    ),
})
