(function enqueueCommittedLifecycle() {
    var CREATE_EVENT = 'x_2166123_rob_auth.lifecycle.create'
    var PAYROLL_TABLE = 'sn_hr_core_case_payroll'
    var WORKFORCE_TABLE = 'sn_hr_core_case_workforce_admin'
    var caseSysId = String(current.getUniqueValue() || '').trim()
    var sourceTable = String(current.getTableName() || '')
    var lifecyclePath = ''

    if (!/^[0-9a-f]{32}$/.test(caseSysId)) {
        gs.error('ROB lifecycle event requires an exact HR Case sys_id')
        return
    }

    if (sourceTable === PAYROLL_TABLE) {
        lifecyclePath = 'payroll'
    } else if (sourceTable === WORKFORCE_TABLE) {
        lifecyclePath = 'workforce'
    } else {
        gs.error('ROB lifecycle event rejected an unsupported HR Case table')
        return
    }

    gs.eventQueue(CREATE_EVENT, current, caseSysId, lifecyclePath)
})()
