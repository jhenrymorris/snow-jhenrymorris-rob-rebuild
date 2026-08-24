(function executeRule(current) {
    function isTrue(value) {
        return value === '1' || value === 'true'
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
    var previousStatus = authorization.getValue('status')

    authorization.setValue('final_pdf_attachment', current.getUniqueValue())
    authorization.setValue('signed_pdf_generated', '1')
    authorization.setValue(
        'signed_pdf_generated_date_time',
        current.getValue('sys_created_on')
    )
    authorization.setValue('final_authorization_date', finalDate)
    authorization.setValue('effective_date', finalDate)
    authorization.setValue('status', 'active')

    if (!authorization.update()) {
        gs.error('ROB authorization activation failed after final PDF association.')
        return
    }

    var details = new GlideRecord('x_2166123_rob_auth_auth_detail')
    details.addQuery(
        'rob_authorization_form',
        authorization.getUniqueValue()
    )
    details.addQuery('status', 'pending_authorization')
    details.query()
    while (details.next()) {
        details.setValue('status', 'pending_fulfillment')
        details.setValue('authorized_start_date', finalDate)
        details.update()
    }

    var predecessorId = authorization.getValue(
        'supersedes_authorization_form'
    )
    if (!predecessorId) {
        return
    }

    var predecessor = new GlideRecord('x_2166123_rob_auth_rob_auth')
    if (!predecessor.get(predecessorId)) {
        authorization.setValue('status', previousStatus)
        authorization.update()
        gs.error('ROB predecessor authorization was not found; activation was rolled back.')
        return
    }

    predecessor.setValue('superseded_by_authorization_form', authorization.getUniqueValue())
    predecessor.setValue('status', 'superseded')
    if (!predecessor.update()) {
        authorization.setValue('status', previousStatus)
        authorization.update()
        gs.error('ROB predecessor supersession failed; activation was rolled back.')
        return
    }

    var predecessorDetails = new GlideRecord(
        'x_2166123_rob_auth_auth_detail'
    )
    predecessorDetails.addQuery('rob_authorization_form', predecessorId)
    predecessorDetails.addQuery('status', 'NOT IN', 'denied,revoked')
    predecessorDetails.query()
    while (predecessorDetails.next()) {
        predecessorDetails.setValue('status', 'superseded')
        predecessorDetails.update()
    }
})(current)
