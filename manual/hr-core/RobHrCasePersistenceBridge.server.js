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
            typeof caseRecord.getUniqueValue !== 'function'
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

        // Assign the allowlisted scoped elements from the HR Core-owned bridge.
        // Calling GlideRecord.setValue on the V2-created GlideRecord would make
        // the caller request the broad GlideRecord.setValue cross-scope API.
        caseRecord.x_2166123_rob_auth_exception_review_required = required
            ? '1'
            : '0'
        caseRecord.x_2166123_rob_auth_exception_reason = required ? reason : ''
        caseRecord.x_2166123_rob_auth_authorization_processing_blocked = required
            ? '1'
            : '0'

        return true
    },

    setRobDecision: function (caseRecord, decisionPayload) {
        function reject(code) {
            gs.error('ROB decision persistence rejected: ' + code)
            return false
        }

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
            typeof caseRecord.getUniqueValue !== 'function'
        ) {
            return reject('invalid_case_record')
        }

        var decision
        try {
            decision = JSON.parse(String(decisionPayload || ''))
        } catch (error) {
            return reject('invalid_json_payload')
        }

        if (!decision || typeof decision !== 'object') {
            return reject('invalid_decision_payload')
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

        if (!allowedTables[tableName] || !validSysId(caseSysId, false)) {
            return reject('invalid_case_identity')
        }
        if (!allowedDecisionClasses[decisionClass]) {
            return reject('invalid_decision_class')
        }
        if (!allowedReasonCodes[reasonCode]) {
            return reject('invalid_decision_reason')
        }
        if (!allowedStatuses[status]) {
            return reject('invalid_existing_authorization_status')
        }
        if (
            !validSysId(decision.relatedAuthorizationId, true) ||
            !validSysId(decision.duplicateCaseId, true)
        ) {
            return reject('invalid_decision_reference')
        }
        if (
            !validSysIdList(decision.coveredAccess || []) ||
            !validSysIdList(decision.uncoveredAccess || [])
        ) {
            return reject('invalid_access_list')
        }
        if (
            !allowedRenewalReasons[renewalReason] ||
            (decisionClass === 'RENEWAL' && !renewalReason) ||
            (decisionClass !== 'RENEWAL' && renewalReason)
        ) {
            return reject('invalid_renewal_reason')
        }
        if (
            (isException && proposedExpirationDate) ||
            (!isException &&
                !/^\d{4}-\d{2}-\d{2}$/.test(proposedExpirationDate))
        ) {
            return reject('invalid_proposed_expiration')
        }
        if (
            ((isReuse || isReplacement) &&
                !String(decision.relatedAuthorizationId || '')) ||
            (reasonCode === 'EX_DUPLICATE_OPEN_CASE' &&
                !String(decision.duplicateCaseId || '')) ||
            (reasonCode !== 'EX_DUPLICATE_OPEN_CASE' &&
                String(decision.duplicateCaseId || ''))
        ) {
            return reject('invalid_decision_relationship')
        }
        if (
            typeof decision.materialContextChange !== 'boolean' ||
            (decisionClass !== 'AMENDMENT' &&
                decision.materialContextChange === true) ||
            decision.employeeSignatureRequired !==
                expectedEmployeeSignature ||
            decision.supervisorApprovalRequired !== expectedSupervisorGate ||
            decision.supervisorSignatureRequired !== expectedSupervisorGate
        ) {
            return reject('invalid_decision_flags')
        }

        var prefix = 'x_2166123_rob_auth_'
        // Keep every write inside this HR Core-owned allowlist. Element
        // assignment avoids granting the V2 scope a generic setValue API.
        caseRecord[prefix + 'authorization_path'] =
            allowedDecisionClasses[decisionClass]
        caseRecord[prefix + 'decision_reason'] = reasonCode
        caseRecord[prefix + 'decision_evaluated_at'] =
            new GlideDateTime().getValue()
        caseRecord[prefix + 'existing_authorization_status'] = status
        caseRecord[prefix + 'evaluated_authorization'] = String(
            decision.relatedAuthorizationId || ''
        )
        caseRecord[prefix + 'covered_access'] = (decision.coveredAccess || []).join(',')
        caseRecord[prefix + 'uncovered_access'] = (decision.uncoveredAccess || []).join(',')
        caseRecord[prefix + 'proposed_expiration_date'] = proposedExpirationDate
        caseRecord[prefix + 'requires_supervisor_approval'] =
            decision.supervisorApprovalRequired === true ? '1' : '0'
        caseRecord[prefix + 'requires_employee_signature'] =
            decision.employeeSignatureRequired === true ? '1' : '0'
        caseRecord[prefix + 'requires_supervisor_signature'] =
            decision.supervisorSignatureRequired === true ? '1' : '0'
        caseRecord[prefix + 'material_context_change'] =
            decision.materialContextChange === true ? '1' : '0'
        caseRecord[prefix + 'renewal_reason'] = renewalReason
        caseRecord[prefix + 'duplicate_case'] = String(
            decision.duplicateCaseId || ''
        )
        caseRecord[prefix + 'exception_review_required'] = isException ? '1' : '0'
        caseRecord[prefix + 'exception_reason'] = isException ? reasonCode : ''
        caseRecord[prefix + 'authorization_processing_blocked'] = isException
            ? '1'
            : '0'
        caseRecord[prefix + 'fulfillment_gate_complete'] = '0'

        return true
    },

    beginRobReuseAttestation: function (caseRecord, contextKey) {
        var allowedTables = {
            sn_hr_core_case_payroll: true,
            sn_hr_core_case_workforce_admin: true,
        }
        if (
            !caseRecord ||
            !allowedTables[String(caseRecord.getTableName() || '')] ||
            !/^[0-9a-f]{32}$/.test(String(caseRecord.getUniqueValue() || '')) ||
            caseRecord.getValue('x_2166123_rob_auth_authorization_path') !==
                'reuse' ||
            !caseRecord.getValue(
                'x_2166123_rob_auth_evaluated_authorization'
            ) ||
            typeof contextKey !== 'string' ||
            !contextKey ||
            contextKey.length > 1000
        ) {
            return false
        }

        var prefix = 'x_2166123_rob_auth_'
        if (
            caseRecord.getValue(prefix + 'reuse_attestation_status') ===
                'pending' &&
            caseRecord.getValue(prefix + 'reuse_attestation_context') ===
                contextKey
        ) {
            return true
        }

        caseRecord[prefix + 'reuse_attestation_status'] = 'pending'
        caseRecord[prefix + 'reuse_supervisor_decision'] = ''
        caseRecord[prefix + 'reuse_supervisor_signer'] = ''
        caseRecord[prefix + 'reuse_supervisor_signature_at'] = ''
        caseRecord[prefix + 'reuse_document_task'] = ''
        caseRecord[prefix + 'reuse_document_execution'] = ''
        caseRecord[prefix + 'reuse_attestation_completed_at'] = ''
        caseRecord[prefix + 'reuse_attestation_context'] = contextKey
        caseRecord[prefix + 'fulfillment_gate_complete'] = '0'
        return Boolean(caseRecord.update())
    },

    completeRobReuseAttestation: function (caseRecord, evidencePayload) {
        var allowedTables = {
            sn_hr_core_case_payroll: true,
            sn_hr_core_case_workforce_admin: true,
        }
        var evidence
        try {
            evidence = JSON.parse(String(evidencePayload || ''))
        } catch (error) {
            return false
        }
        function validSysId(value) {
            return /^[0-9a-f]{32}$/.test(String(value || ''))
        }
        if (
            !caseRecord ||
            !allowedTables[String(caseRecord.getTableName() || '')] ||
            !validSysId(caseRecord.getUniqueValue()) ||
            caseRecord.getValue('x_2166123_rob_auth_authorization_path') !==
                'reuse' ||
            !validSysId(
                caseRecord.getValue(
                    'x_2166123_rob_auth_evaluated_authorization'
                )
            ) ||
            !evidence ||
            !validSysId(evidence.signerId) ||
            !validSysId(evidence.documentTaskId) ||
            !validSysId(evidence.documentTaskExecutionId) ||
            typeof evidence.completedAt !== 'string' ||
            !evidence.completedAt ||
            typeof evidence.contextKey !== 'string' ||
            !evidence.contextKey ||
            evidence.contextKey !==
                caseRecord.getValue(
                    'x_2166123_rob_auth_reuse_attestation_context'
                )
        ) {
            return false
        }

        var prefix = 'x_2166123_rob_auth_'
        if (
            caseRecord.getValue(prefix + 'reuse_attestation_status') ===
                'approved' &&
            caseRecord.getValue(prefix + 'reuse_document_task') ===
                evidence.documentTaskId
        ) {
            return true
        }
        if (
            caseRecord.getValue(prefix + 'reuse_attestation_status') !==
                'pending' ||
            caseRecord.getValue(prefix + 'reuse_document_task')
        ) {
            return false
        }

        caseRecord[prefix + 'reuse_attestation_status'] = 'approved'
        caseRecord[prefix + 'reuse_supervisor_decision'] = 'approved'
        caseRecord[prefix + 'reuse_supervisor_signer'] = evidence.signerId
        caseRecord[prefix + 'reuse_supervisor_signature_at'] =
            evidence.completedAt
        caseRecord[prefix + 'reuse_document_task'] = evidence.documentTaskId
        caseRecord[prefix + 'reuse_document_execution'] =
            evidence.documentTaskExecutionId
        caseRecord[prefix + 'reuse_attestation_completed_at'] =
            evidence.completedAt
        caseRecord[prefix + 'requires_supervisor_approval'] = '0'
        caseRecord[prefix + 'requires_supervisor_signature'] = '0'
        caseRecord[prefix + 'fulfillment_gate_complete'] = '1'
        return Boolean(caseRecord.update())
    },

    invalidateRobReuseAttestation: function (caseRecord, currentContextKey) {
        var allowedTables = {
            sn_hr_core_case_payroll: true,
            sn_hr_core_case_workforce_admin: true,
        }
        if (
            !caseRecord ||
            !allowedTables[String(caseRecord.getTableName() || '')] ||
            !/^[0-9a-f]{32}$/.test(String(caseRecord.getUniqueValue() || '')) ||
            caseRecord.getValue('x_2166123_rob_auth_authorization_path') !==
                'reuse' ||
            typeof currentContextKey !== 'string' ||
            !currentContextKey ||
            currentContextKey.length > 1000
        ) {
            return false
        }

        var prefix = 'x_2166123_rob_auth_'
        caseRecord[prefix + 'reuse_attestation_status'] = 'invalidated'
        caseRecord[prefix + 'reuse_supervisor_decision'] = ''
        caseRecord[prefix + 'reuse_supervisor_signer'] = ''
        caseRecord[prefix + 'reuse_supervisor_signature_at'] = ''
        caseRecord[prefix + 'reuse_document_task'] = ''
        caseRecord[prefix + 'reuse_document_execution'] = ''
        caseRecord[prefix + 'reuse_attestation_completed_at'] = ''
        caseRecord[prefix + 'reuse_attestation_context'] = currentContextKey
        caseRecord[prefix + 'requires_supervisor_approval'] = '1'
        caseRecord[prefix + 'requires_supervisor_signature'] = '1'
        caseRecord[prefix + 'fulfillment_gate_complete'] = '0'
        return Boolean(caseRecord.update())
    },

    openRobFulfillmentGate: function (caseRecord, authorizationId) {
        var allowedTables = {
            sn_hr_core_case_payroll: true,
            sn_hr_core_case_workforce_admin: true,
        }
        var allowedPaths = {
            new: true,
            amendment: true,
            renewal: true,
        }
        if (
            !caseRecord ||
            !allowedTables[String(caseRecord.getTableName() || '')] ||
            !/^[0-9a-f]{32}$/.test(String(caseRecord.getUniqueValue() || '')) ||
            !/^[0-9a-f]{32}$/.test(String(authorizationId || '')) ||
            !allowedPaths[
                String(
                    caseRecord.getValue(
                        'x_2166123_rob_auth_authorization_path'
                    ) || ''
                )
            ] ||
            !caseRecord.getValue(
                'x_2166123_rob_auth_decision_evaluated_at'
            ) ||
            caseRecord.getValue(
                'x_2166123_rob_auth_authorization_processing_blocked'
            ) === '1' ||
            caseRecord.getValue(
                'x_2166123_rob_auth_exception_review_required'
            ) === '1'
        ) {
            return false
        }

        var gate = 'x_2166123_rob_auth_fulfillment_gate_complete'
        if (caseRecord.getValue(gate) === '1') {
            return true
        }
        caseRecord[gate] = '1'
        if (!caseRecord.update()) {
            return false
        }
        return (
            caseRecord.get(caseRecord.getUniqueValue()) &&
            caseRecord.getValue(gate) === '1'
        )
    },

    type: 'RobHrCasePersistenceBridge',
}
