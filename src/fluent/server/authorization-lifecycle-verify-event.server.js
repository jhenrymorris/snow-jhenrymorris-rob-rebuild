(function processAuthorizationLifecycleVerifyEvent() {
    var authorizationSysId = String(event.parm1 || '').trim()

    if (!/^[0-9a-f]{32}$/.test(authorizationSysId)) {
        throw new Error(
            'ROB lifecycle verify event requires an exact Authorization sys_id'
        )
    }

    var outcome = new RobAuthorizationLifecycleEntry()
        .verifyAuthorizationSigning(authorizationSysId)

    if (!outcome || outcome.success !== true) {
        throw new Error('ROB lifecycle verify event failed closed')
    }
})()
