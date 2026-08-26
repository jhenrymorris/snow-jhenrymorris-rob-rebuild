(function executeRule(current, previous) {
    var authorizationTable = 'x_2166123_rob_auth_rob_auth'
    var supervisorTemplateName = 'ROB Form 1768 Authorization'

    function isTerminalDecision(state) {
        return state === 'approved' || state === 'rejected'
    }

    function fail(message) {
        gs.error('ROB supervisor decision stopped: ' + message)
    }

    function publishedSupervisorTemplate() {
        var template = new GlideRecord('sn_doc_pdf_template')
        template.addQuery('name', supervisorTemplateName)
        template.addQuery('table', 'sn_hr_core_case')
        template.addQuery('state', 'published')
        template.addQuery('active', true)
        template.setLimit(2)
        template.query()
        if (!template.next()) return null
        var templateId = template.getUniqueValue()
        if (template.next() || !template.get(templateId)) return null
        return template
    }

    function launchSupervisorSignature(sourceCase, authorization, isReuse) {
        var template = publishedSupervisorTemplate()
        if (!template) {
            fail('exactly one published supervisor signature template is required')
            return false
        }

        var existingTask = new GlideRecord('sn_doc_task')
        existingTask.addQuery('parent', sourceCase.getUniqueValue())
        existingTask.addQuery('document_template', template.getUniqueValue())
        existingTask.addNotNullQuery('document_task_execution')
        existingTask.addNotNullQuery('pdf_document')
        existingTask.setLimit(1)
        existingTask.query()
        if (existingTask.next()) return true

        var prefix = isReuse
            ? 'ROB-Reuse-Supervisor-Attestation-'
            : 'ROB-Supervisor-Authorization-Signature-'
        return Boolean(
            new sn_doc.GenerateDocumentAPI().initiateDocumentTasks(
                sourceCase,
                '',
                template.getUniqueValue(),
                prefix + authorization.getValue('number'),
                ''
            )
        )
    }

    function sourceCase(caseId) {
        var supportedTables = [
            'sn_hr_core_case_payroll',
            'sn_hr_core_case_workforce_admin',
        ]
        var index
        for (index = 0; index < supportedTables.length; index += 1) {
            var record = new GlideRecord(supportedTables[index])
            if (record.get(caseId)) return record
        }
        return null
    }

    var state = current.getValue('state')
    if (
        !isTerminalDecision(state) ||
        state === previous.getValue('state') ||
        current.getValue('source_table') !== authorizationTable
    ) {
        return
    }

    var authorization = new GlideRecord(authorizationTable)
    if (!authorization.get(current.getValue('document_id'))) {
        fail('the related governed Authorization Form is missing')
        return
    }

    var approverId = current.getValue('approver')
    if (!approverId || approverId !== authorization.getValue('supervisor')) {
        fail('the native approver is not the governed supervisor')
        return
    }

    var sourceCaseId = current.getValue('sysapproval')
    if (!sourceCaseId) {
        fail('the related native HR Case is missing')
        return
    }

    var isReuse = authorization.getValue('source_hrsd_case') !== sourceCaseId
    if (
        !isReuse &&
        authorization.getValue('employee_signature_complete') !== '1' &&
        authorization.getValue('employee_signature_complete') !== 'true'
    ) {
        fail('the employee signature must complete before supervisor decision')
        return
    }

    var decidedAt = current.getValue('sys_updated_on')
    if (state === 'rejected') {
        if (isReuse) return

        authorization.setValue('supervisor_approval_complete', '0')
        authorization.setValue('supervisor_approval_outcome', 'denied')
        authorization.setValue('supervisor_approver', approverId)
        authorization.setValue('supervisor_approval_date_time', decidedAt)
        authorization.setValue('supervisor_signature_complete', '0')
        authorization.setValue('supervisor_signer', '')
        authorization.setValue('supervisor_signature_date_time', '')
        authorization.setValue('supervisor_document_task', '')
        authorization.setValue('status', 'denied')
        if (!authorization.update()) {
            fail('the denied Authorization Form could not be persisted')
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
            details.setValue('status', 'denied')
            details.update()
        }
        return
    }

    var relatedCase = sourceCase(sourceCaseId)
    if (!relatedCase) {
        fail('the related native HR Case is missing')
        return
    }
    if (
        isReuse &&
        (relatedCase.getValue('x_2166123_rob_auth_authorization_path') !==
            'reuse' ||
            relatedCase.getValue(
                'x_2166123_rob_auth_evaluated_authorization'
            ) !== authorization.getUniqueValue())
    ) {
        fail('the Reuse decision no longer references this authorization')
        return
    }

    if (!isReuse) {
        authorization.setValue('supervisor_approval_complete', '1')
        authorization.setValue('supervisor_approval_outcome', 'approved')
        authorization.setValue('supervisor_approver', approverId)
        authorization.setValue('supervisor_approval_date_time', decidedAt)
        if (!authorization.update()) {
            fail('the approved supervisor decision could not be persisted')
            return
        }
    }

    if (!launchSupervisorSignature(relatedCase, authorization, isReuse)) {
        fail('the supervisor signature task could not be initiated')
    }
})(current, previous)
