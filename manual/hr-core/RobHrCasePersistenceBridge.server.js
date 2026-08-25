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
            'x_2166123_rob_auth_exception_review_required',
            required ? '1' : '0'
        )
        caseRecord.setValue(
            'x_2166123_rob_auth_exception_reason',
            required ? reason : ''
        )
        caseRecord.setValue(
            'x_2166123_rob_auth_authorization_processing_blocked',
            required ? '1' : '0'
        )

        return true
    },

    setRobDecision: function (caseRecord, decisionPayload) {
        var allowedTables = {
            sn_hr_core_case_payroll: true,
            sn_hr_core_case_workforce_admin: true,
        }
        var allowedDecisionClasses = {
            NEW: 'new',
            REUSE: 'reuse',
            AMENDMENT: 'amendment',
            RENEWAL: 'renewal',
            EXCEPTION: 'exception',
        }
        var allowedReasonCodes = {
            NEW_NO_PRIOR_FORM: true,
            NEW_PRIOR_REVOKED: true,
            NEW_NO_CURRENT_FORM: true,
            REUSE_FULLY_COVERED: true,
            AMD_PARTIAL_COVERAGE: true,
            AMD_NO_COVERAGE_ACTIVE_FORM: true,
            AMD_ORG_CHANGE: true,
            AMD_POSITION_ROLE_CHANGE: true,
            AMD_JUSTIFICATION_CHANGE: true,
            AMD_MULTIPLE_MATERIAL_CHANGES: true,
            REN_EXPIRED: true,
            REN_LAPSED: true,
            REN_OBSOLETE_VERSION: true,
            REN_ANNUAL_RECERTIFICATION: true,
            EX_INVALID_CONFIG: true,
            EX_MISSING_REQUIRED_DATA: true,
            EX_MISSING_SUPERVISOR: true,
            EX_MISSING_END_DATE: true,
            EX_MISSING_OM: true,
            EX_INVALID_ACCESS_ITEM: true,
            EX_DUPLICATE_OPEN_CASE: true,
            EX_CONFLICTING_ACTIVE_FORMS: true,
            EX_INCOMPLETE_AUTHORIZATION_HISTORY: true,
            EX_AMBIGUOUS_MATERIAL_CHANGE: true,
            EX_UNRESOLVED_ANNUAL_RENEWAL_RULE: true,
        }
        var allowedStatuses = {
            none: true,
            active: true,
            expired: true,
            lapsed: true,
            superseded: true,
            revoked: true,
            obsolete_version: true,
            denied: true,
        }
        var allowedRenewalReasons = {
            '': true,
            Expired: true,
            Lapsed: true,
            'Obsolete Form Version': true,
            'Annual Renewal Due': true,
        }

        function validSysId(value, optional) {
            var normalized = String(value || '')
            return (optional && !normalized) || /^[0-9a-f]{32}$/.test(normalized)
        }

        function validSysIdList(values) {
            if (!Array.isArray(values)) return false
            var seen = {}
            var index
            for (index = 0; index < values.length; index += 1) {
                var value = String(values[index] || '')
                if (!validSysId(value, false) || seen[value]) return false
                seen[value] = true
            }
            return true
        }

        if (
            !caseRecord ||
            typeof caseRecord.getTableName !== 'function' ||
            typeof caseRecord.getUniqueValue !== 'function' ||
            typeof caseRecord.setValue !== 'function' ||
            typeof decisionPayload !== 'string'
        ) {
            return false
        }

        var decision
        try {
            decision = JSON.parse(decisionPayload)
        } catch (error) {
            return false
        }

        if (!decision || typeof decision !== 'object') {
            return false
        }

        var tableName = String(caseRecord.getTableName() || '')
        var caseSysId = String(caseRecord.getUniqueValue() || '')
        var decisionClass = String(decision.decisionClass || '')
        var reasonCode = String(decision.reasonCode || '')
        var status = String(decision.existingAuthorizationStatus || 'none')
        var renewalReason = String(decision.renewalReason || '')
        var proposedExpirationDate = String(
            decision.proposedExpirationDate || ''
        )
        var isException = decisionClass === 'EXCEPTION'
        var isReuse = decisionClass === 'REUSE'
        var isReplacement =
            decisionClass === 'AMENDMENT' || decisionClass === 'RENEWAL'
        var expectedEmployeeSignature = !isException && !isReuse
        var expectedSupervisorGate = !isException

        if (
            !allowedTables[tableName] ||
            !validSysId(caseSysId, false) ||
            !allowedDecisionClasses[decisionClass] ||
            !allowedReasonCodes[reasonCode] ||
            !allowedStatuses[status] ||
            !validSysId(decision.relatedAuthorizationId, true) ||
            !validSysId(decision.duplicateCaseId, true) ||
            !validSysIdList(decision.coveredAccess || []) ||
            !validSysIdList(decision.uncoveredAccess || []) ||
            !allowedRenewalReasons[renewalReason] ||
            (decisionClass === 'RENEWAL' && !renewalReason) ||
            (decisionClass !== 'RENEWAL' && renewalReason) ||
            (isException && proposedExpirationDate) ||
            (!isException &&
                !/^\d{4}-\d{2}-\d{2}$/.test(proposedExpirationDate)) ||
            ((isReuse || isReplacement) &&
                !String(decision.relatedAuthorizationId || '')) ||
            (reasonCode === 'EX_DUPLICATE_OPEN_CASE' &&
                !String(decision.duplicateCaseId || '')) ||
            (reasonCode !== 'EX_DUPLICATE_OPEN_CASE' &&
                String(decision.duplicateCaseId || '')) ||
            typeof decision.materialContextChange !== 'boolean' ||
            (decisionClass !== 'AMENDMENT' &&
                decision.materialContextChange === true) ||
            decision.employeeSignatureRequired !==
                expectedEmployeeSignature ||
            decision.supervisorApprovalRequired !== expectedSupervisorGate ||
            decision.supervisorSignatureRequired !== expectedSupervisorGate
        ) {
            return false
        }

        var prefix = 'x_2166123_rob_auth_'
        caseRecord.setValue(
            prefix + 'authorization_path',
            allowedDecisionClasses[decisionClass]
        )
        caseRecord.setValue(prefix + 'decision_reason', reasonCode)
        caseRecord.setValue(
            prefix + 'decision_evaluated_at',
            new GlideDateTime().getValue()
        )
        caseRecord.setValue(prefix + 'existing_authorization_status', status)
        caseRecord.setValue(
            prefix + 'evaluated_authorization',
            String(decision.relatedAuthorizationId || '')
        )
        caseRecord.setValue(
            prefix + 'covered_access',
            (decision.coveredAccess || []).join(',')
        )
        caseRecord.setValue(
            prefix + 'uncovered_access',
            (decision.uncoveredAccess || []).join(',')
        )
        caseRecord.setValue(
            prefix + 'proposed_expiration_date',
            proposedExpirationDate
        )
        caseRecord.setValue(
            prefix + 'requires_supervisor_approval',
            decision.supervisorApprovalRequired === true ? '1' : '0'
        )
        caseRecord.setValue(
            prefix + 'requires_employee_signature',
            decision.employeeSignatureRequired === true ? '1' : '0'
        )
        caseRecord.setValue(
            prefix + 'requires_supervisor_signature',
            decision.supervisorSignatureRequired === true ? '1' : '0'
        )
        caseRecord.setValue(
            prefix + 'material_context_change',
            decision.materialContextChange === true ? '1' : '0'
        )
        caseRecord.setValue(
            prefix + 'renewal_reason',
            renewalReason
        )
        caseRecord.setValue(
            prefix + 'duplicate_case',
            String(decision.duplicateCaseId || '')
        )
        caseRecord.setValue(
            prefix + 'exception_review_required',
            isException ? '1' : '0'
        )
        caseRecord.setValue(
            prefix + 'exception_reason',
            isException ? reasonCode : ''
        )
        caseRecord.setValue(
            prefix + 'authorization_processing_blocked',
            isException ? '1' : '0'
        )
        caseRecord.setValue(prefix + 'fulfillment_gate_complete', '0')

        return true
    },

    type: 'RobHrCasePersistenceBridge',
}
