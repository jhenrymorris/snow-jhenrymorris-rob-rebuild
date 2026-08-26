(function executeRule(current) {
    var supervisorTemplateName = 'ROB Reuse Supervisor Attestation'

    function isTrue(value) {
        return value === '1' || value === 'true'
    }

    function fail(message) {
        gs.error('ROB supervisor signature launch stopped: ' + message)
    }

    if (
        current.getValue('status') !==
            'pending_supervisor_approval_signature' ||
        !isTrue(current.getValue('employee_signature_complete')) ||
        !isTrue(current.getValue('supervisor_approval_complete')) ||
        current.getValue('supervisor_approval_outcome') !== 'approved' ||
        isTrue(current.getValue('supervisor_signature_complete')) ||
        current.getValue('supervisor_document_task')
    ) {
        return
    }

    var sourceCase = current.source_hrsd_case.getRefRecord()
    if (
        !sourceCase.isValidRecord() ||
        (sourceCase.getTableName() !== 'sn_hr_core_case_payroll' &&
            sourceCase.getTableName() !==
                'sn_hr_core_case_workforce_admin')
    ) {
        fail('the supported source HRSD Case is missing')
        return
    }

    var supervisorId = current.getValue('supervisor')
    if (!supervisorId) {
        fail('the governed Supervisor is missing')
        return
    }

    var template = new GlideRecord('sn_doc_pdf_template')
    template.addQuery('name', supervisorTemplateName)
    template.addQuery('table', 'sn_hr_core_case')
    template.addQuery('state', 'published')
    template.addQuery('active', true)
    template.setLimit(2)
    template.query()
    if (!template.next()) {
        fail('the published Supervisor signature template is missing')
        return
    }
    var templateId = template.getUniqueValue()
    if (template.next() || !template.get(templateId)) {
        fail('exactly one published Supervisor signature template is required')
        return
    }

    var existingTask = new GlideRecord('sn_doc_task')
    existingTask.addQuery('parent', sourceCase.getUniqueValue())
    existingTask.addQuery('document_template', templateId)
    existingTask.addQuery('assigned_to', supervisorId)
    existingTask.addQuery('state', 'IN', '1,2,3')
    existingTask.setLimit(1)
    existingTask.query()
    if (existingTask.next()) {
        return
    }

    var initiated = new sn_doc.GenerateDocumentAPI().initiateDocumentTasks(
        sourceCase,
        '',
        templateId,
        'ROB-Supervisor-Authorization-Signature-' +
            current.getValue('number'),
        ''
    )
    if (!initiated) {
        fail('the native Supervisor signature task could not be initiated')
    }
})(current)
