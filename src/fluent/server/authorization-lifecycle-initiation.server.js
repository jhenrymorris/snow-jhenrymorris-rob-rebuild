(function executeRule(current) {
    var caseSysId = String(current.getUniqueValue() || '')
    var tableName = String(current.getTableName() || '')
    var lifecycleEntry = new RobAuthorizationLifecycleEntry()

    if (tableName === 'sn_hr_core_case_payroll') {
        lifecycleEntry.executePayroll(caseSysId)
        return
    }
    if (tableName === 'sn_hr_core_case_workforce_admin') {
        lifecycleEntry.executeWorkforce(caseSysId)
    }
})(current)
