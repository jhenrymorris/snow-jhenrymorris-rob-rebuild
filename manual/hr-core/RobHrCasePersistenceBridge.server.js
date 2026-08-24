var RobHrCasePersistenceBridge = Class.create()
RobHrCasePersistenceBridge.prototype = {
    initialize: function () {},

    setRobIntakeGate: function (caseRecord, required, reason) {
        var allowedTables = {
            sn_hr_core_case_payroll: true,
            sn_hr_core_case_workforce_admin: true,
        }
        var allowedReasons = {
            missing_required_access_end_date: true,
            missing_operations_manager: true,
            invalid_operations_manager: true,
            inactive_operations_manager: true,
        }

        if (required !== true && required !== false) {
            return false
        }

        if (
            !caseRecord ||
            typeof caseRecord.getTableName !== 'function' ||
            typeof caseRecord.getUniqueValue !== 'function' ||
            typeof caseRecord.setValue !== 'function'
        ) {
            return false
        }

        var tableName = String(caseRecord.getTableName() || '')
        var caseSysId = String(caseRecord.getUniqueValue() || '')

        if (!allowedTables[tableName] || !/^[0-9a-f]{32}$/.test(caseSysId)) {
            return false
        }

        if (
            typeof caseRecord.isValidRecord === 'function' &&
            !caseRecord.isValidRecord() &&
            !(
                typeof caseRecord.isNewRecord === 'function' &&
                caseRecord.isNewRecord()
            )
        ) {
            return false
        }

        if (required === true) {
            if (typeof reason !== 'string' || !allowedReasons[reason]) {
                return false
            }
        } else if (reason !== '' && reason !== null && reason !== undefined) {
            return false
        }

        caseRecord.setValue(
            'x_2166123_hr_acc_0_exception_review_required',
            required ? '1' : '0'
        )
        caseRecord.setValue(
            'x_2166123_hr_acc_0_exception_reason',
            required ? reason : ''
        )
        caseRecord.setValue(
            'x_2166123_hr_acc_0_authorization_processing_blocked',
            required ? '1' : '0'
        )

        return true
    },

    type: 'RobHrCasePersistenceBridge',
}
