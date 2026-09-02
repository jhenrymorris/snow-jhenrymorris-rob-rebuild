;(function execute(inputs, outputs) {
    var authorizationSysId = String(inputs.authorization_sys_id || '').trim()
    var outcome = {
        success: false,
        disposition: 'failed',
        case_sys_id: '',
        authorization_sys_id: authorizationSysId,
        signing_started: false,
        reason: '',
    }

    function publish(result) {
        result = result || outcome
        outputs.success = result.success === true
        outputs.disposition = String(result.disposition || 'failed')
        outputs.case_sys_id = String(result.case_sys_id || '')
        outputs.authorization_sys_id = String(
            result.authorization_sys_id || authorizationSysId
        )
        outputs.signing_started = result.signing_started === true
        outputs.reason = String(result.reason || '')
    }

    if (!/^[0-9a-f]{32}$/.test(authorizationSysId)) {
        outcome.reason = 'the exact Authorization Form sys_id is required'
        publish(outcome)
        return
    }

    try {
        outcome = new RobAuthorizationLifecycleEntry().verifyAuthorizationSigning(
            authorizationSysId
        )
    } catch (verificationError) {
        outcome.reason = 'the post-commit signing verification failed closed'
    }

    publish(outcome)
})(inputs, outputs)
