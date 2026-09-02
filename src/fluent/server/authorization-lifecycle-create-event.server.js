(function processAuthorizationLifecycleCreateEvent() {
    var VERIFY_EVENT = 'x_2166123_rob_auth.lifecycle.verify'
    var caseSysId = String(event.parm1 || '').trim()
    var lifecyclePath = String(event.parm2 || '').trim()
    var lifecycle = new RobAuthorizationLifecycleEntry()
    var outcome

    if (!/^[0-9a-f]{32}$/.test(caseSysId)) {
        throw new Error('ROB lifecycle create event requires an exact HR Case sys_id')
    }

    if (lifecyclePath === 'payroll') {
        outcome = lifecycle.executePayroll(caseSysId)
    } else if (lifecyclePath === 'workforce') {
        outcome = lifecycle.executeWorkforce(caseSysId)
    } else {
        throw new Error('ROB lifecycle create event rejected an unsupported path')
    }

    if (!outcome || outcome.success !== true) {
        throw new Error('ROB lifecycle create event failed closed')
    }

    if (outcome.disposition !== 'authorization_persisted') {
        return
    }

    var authorizationSysId = String(
        outcome.authorization_sys_id || ''
    ).trim()
    if (!/^[0-9a-f]{32}$/.test(authorizationSysId)) {
        throw new Error(
            'ROB lifecycle create event did not return an exact Authorization sys_id'
        )
    }

    gs.eventQueue(VERIFY_EVENT, current, authorizationSysId, '')
})()
