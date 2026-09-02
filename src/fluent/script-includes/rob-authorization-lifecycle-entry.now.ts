import { ScriptInclude } from '@servicenow/sdk/core'

export const robAuthorizationLifecycleEntry = ScriptInclude({
    $id: Now.ID['rob-authorization-lifecycle-entry'],
    name: 'RobAuthorizationLifecycleEntry',
    apiName: 'x_2166123_rob_auth.RobAuthorizationLifecycleEntry',
    active: true,
    clientCallable: false,
    accessibleFrom: 'package_private',
    sandboxCallable: false,
    description:
        'Package-private fixed-table entry for V2-owned post-commit Payroll and Workforce lifecycle Flows. Rereads the exact committed case and invokes the single governed authorization lifecycle implementation.',
    script: Now.include('../server/rob-authorization-lifecycle-entry.server.js'),
})
