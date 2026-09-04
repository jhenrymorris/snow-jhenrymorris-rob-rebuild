(function executeRule(current) {
    var persistenceSubflow =
        'x_2166123_rob_auth.rob_persist_authorization_lifecycle_native'

    function isTrue(value) {
        return value === '1' || value === 'true'
    }

    function runFinalization(authorization, finalDate) {
        try {
            sn_fd.FlowAPI.getRunner()
                .subflow(persistenceSubflow)
                .inForeground()
                .withInputs({
                    authorization_sys_id: authorization.getUniqueValue(),
                    status_value: 'active',
                    finalization_stage: 'complete',
                    finalization_detail_status_value: 'pending_fulfillment',
                    finalization_superseded_status_value: 'superseded',
                    final_pdf_attachment: current,
                    final_pdf_generated_date_time: new GlideDateTime(
                        current.getValue('sys_created_on')
                    ),
                    final_authorization_date: finalDate,
                })
                .run()
            return true
        } catch (error) {
            var message =
                error && typeof error.getMessage === 'function'
                    ? error.getMessage()
                    : String(error)
            gs.error('ROB governed finalization persistence failed: ' + message)
            return false
        }
    }

    var authorization = new GlideRecord('x_2166123_rob_auth_rob_auth')
    if (!authorization.get(current.getValue('table_sys_id'))) {
        return
    }

    if (authorization.getValue('final_pdf_attachment')) {
        return
    }

    if (
        authorization.getValue('status') !==
            'pending_supervisor_approval_signature' ||
        !isTrue(authorization.getValue('employee_signature_complete')) ||
        !isTrue(authorization.getValue('supervisor_approval_complete')) ||
        authorization.getValue('supervisor_approval_outcome') !== 'approved' ||
        !isTrue(authorization.getValue('supervisor_signature_complete')) ||
        !authorization.getValue('employee_document_task') ||
        !authorization.getValue('supervisor_document_task') ||
        !authorization.getValue('document_task_execution') ||
        !authorization.getValue('form_version') ||
        !authorization.getValue('expiration_date')
    ) {
        gs.error('ROB final PDF was attached before all lifecycle evidence was complete.')
        return
    }

    var supervisorDateTime = new GlideDateTime(
        authorization.getValue('supervisor_signature_date_time')
    )
    var finalDate = supervisorDateTime
        .getLocalDate()
        .getByFormat('yyyy-MM-dd')
    var authorizationId = authorization.getUniqueValue()
    var sourceCase = authorization.source_hrsd_case.getRefRecord()
    var sourceCaseId = sourceCase.isValidRecord()
        ? sourceCase.getUniqueValue()
        : ''
    var sourceCaseTable = sourceCase.isValidRecord()
        ? sourceCase.getTableName()
        : ''
    var pendingDetails = new GlideRecord(
        'x_2166123_rob_auth_auth_detail'
    )
    pendingDetails.addQuery('rob_authorization_form', authorizationId)
    pendingDetails.query()
    var pendingDetailCount = 0
    while (pendingDetails.next()) {
        pendingDetailCount += 1
        if (pendingDetails.getValue('status') !== 'pending_authorization') {
            gs.error('ROB governed finalization rejected a non-pending current Detail.')
            return
        }
    }
    if (!pendingDetailCount) {
        gs.error('ROB governed finalization found no governed Access Details.')
        return
    }
    var predecessorId = authorization.getValue('supersedes_authorization_form')
    if (predecessorId) {
        var pendingPredecessor = new GlideRecord(
            'x_2166123_rob_auth_rob_auth'
        )
        if (!pendingPredecessor.get(predecessorId)) {
            gs.error('ROB governed finalization could not resolve its predecessor.')
            return
        }
    }

    if (!sourceCaseId || !runFinalization(authorization, finalDate)) {
        gs.error('ROB authorization activation failed after final PDF association.')
        return
    }

    if (
        !authorization.get(authorizationId) ||
        authorization.getValue('final_pdf_attachment') !==
            current.getUniqueValue() ||
        !isTrue(authorization.getValue('signed_pdf_generated')) ||
        authorization.getValue('signed_pdf_generated_date_time') !==
            current.getValue('sys_created_on') ||
        authorization.getValue('final_authorization_date') !== finalDate ||
        authorization.getValue('effective_date') !== finalDate ||
        authorization.getValue('status') !== 'active'
    ) {
        gs.error('ROB governed finalization failed Authorization committed reread validation.')
        return
    }

    var details = new GlideRecord('x_2166123_rob_auth_auth_detail')
    details.addQuery('rob_authorization_form', authorizationId)
    details.query()
    var detailCount = 0
    while (details.next()) {
        detailCount += 1
        if (
            details.getValue('status') !== 'pending_fulfillment' ||
            details.getValue('authorized_start_date') !== finalDate
        ) {
            gs.error('ROB governed finalization failed current Detail committed reread validation.')
            return
        }
    }
    if (!detailCount) {
        gs.error('ROB governed finalization found no governed Access Details.')
        return
    }

    if (predecessorId) {
        var predecessor = new GlideRecord('x_2166123_rob_auth_rob_auth')
        if (
            !predecessor.get(predecessorId) ||
            predecessor.getValue('superseded_by_authorization_form') !==
                authorizationId ||
            predecessor.getValue('status') !== 'superseded'
        ) {
            gs.error('ROB governed finalization failed predecessor committed reread validation.')
            return
        }
        var predecessorDetails = new GlideRecord(
            'x_2166123_rob_auth_auth_detail'
        )
        predecessorDetails.addQuery('rob_authorization_form', predecessorId)
        predecessorDetails.addQuery('status', 'NOT IN', 'denied,revoked')
        predecessorDetails.query()
        while (predecessorDetails.next()) {
            if (predecessorDetails.getValue('status') !== 'superseded') {
                gs.error('ROB governed finalization failed predecessor Detail committed reread validation.')
                return
            }
        }
    }

    var bridge = new sn_hr_core.RobHrCasePersistenceBridge()
    if (!bridge.openRobFulfillmentGate(sourceCase, authorizationId)) {
        gs.error('ROB governed finalization could not open the HR Case fulfillment gate.')
        return
    }
    var committedCase = new GlideRecord(sourceCaseTable)
    if (
        !committedCase.get(sourceCaseId) ||
        !isTrue(
            committedCase.getValue(
                'x_2166123_rob_auth_fulfillment_gate_complete'
            )
        )
    ) {
        gs.error('ROB governed finalization failed HR Case gate committed reread validation.')
    }
})(current)
