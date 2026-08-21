import { ScriptInclude } from '@servicenow/sdk/core'

export const robProfileAuthorizationContext = ScriptInclude({
    $id: Now.ID['rob-profile-authorization-context'],
    name: 'RobProfileAuthorizationContext',
    apiName: 'x_2108496_hr_acces.RobProfileAuthorizationContext',
    active: true,
    accessibleFrom: 'package_private',
    sandboxCallable: true,
    description:
        'Resolves authoritative Position, Organization, and validated NSF Supervisor context without persisting immutable snapshots on native HR Cases.',
    script: Now.include('../server/rob-profile-authorization-context.server.js'),
})
