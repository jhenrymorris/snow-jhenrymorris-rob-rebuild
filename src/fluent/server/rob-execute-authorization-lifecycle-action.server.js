;(function execute(inputs, outputs) {
    var caseSysId = String(inputs.case_sys_id || '').trim()
    var lifecyclePath = String(inputs.lifecycle_path || '').trim()
    var outcome = {
        success: false,
        disposition: 'failed',
        case_sys_id: caseSysId,
        authorization_sys_id: '',
        created_authorization: false,
        created_detail_count: 0,
        signing_started: false,
        reason: '',
    }

    function publish(result) {
        result = result || outcome
        outputs.success = result.success === true
        outputs.disposition = String(result.disposition || 'failed')
        outputs.case_sys_id = String(result.case_sys_id || caseSysId)
        outputs.authorization_sys_id = String(result.authorization_sys_id || '')
        outputs.created_authorization = result.created_authorization === true
        outputs.created_detail_count = parseInt(result.created_detail_count, 10) || 0
        outputs.signing_started = result.signing_started === true
        outputs.reason = String(result.reason || '')
    }

    try {
        if (lifecyclePath === 'payroll') {
            outcome = new RobAuthorizationLifecycleEntry().executePayroll(caseSysId)
        } else if (lifecyclePath === 'workforce') {
            outcome = new RobAuthorizationLifecycleEntry().executeWorkforce(caseSysId)
        } else {
            outcome.reason = 'the lifecycle path is unsupported'
        }
    } catch (lifecycleError) {
        outcome = {
            success: false,
            disposition: 'failed',
            case_sys_id: caseSysId,
            authorization_sys_id: '',
            created_authorization: false,
            created_detail_count: 0,
            signing_started: false,
            reason: 'the fixed authorization lifecycle entry failed closed',
        }
    }

    publish(outcome)
})(inputs, outputs)
