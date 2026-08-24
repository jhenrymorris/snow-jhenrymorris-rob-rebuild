import { ScriptInclude } from '@servicenow/sdk/core'

export const robProfileAuthorizationContext = ScriptInclude({
    $id: Now.ID['rob-profile-authorization-context'],
    name: 'RobProfileAuthorizationContext',
    apiName: 'x_2166123_rob_auth.RobProfileAuthorizationContext',
    active: true,
    // Native catalog reference qualifiers execute outside this application
    // scope. Keep the resolver server-only, but permit that sandbox caller to
    // evaluate the two read-only qualifier methods.
    accessibleFrom: 'public',
    sandboxCallable: true,
    description:
        'Resolves authoritative Position, Organization, and validated NSF Supervisor context without persisting immutable snapshots on native HR Cases.',
    script: Now.include('../server/rob-profile-authorization-context.server.js'),
})
