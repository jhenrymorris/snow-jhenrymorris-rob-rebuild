(function executeRule(current) {
    var employeeTemplateName = 'ROB Form 1768 Employee Signature'
    var supervisorTemplateName = 'ROB Reuse Supervisor Attestation'

    function isTrue(value) {
        return value === '1' || value === 'true'
    }

    function checkbox(value) {
        return value ? 'Yes' : 'Off'
    }

    function localDate(dateTimeValue) {
        return new GlideDateTime(dateTimeValue)
            .getLocalDate()
            .getByFormat('yyyy-MM-dd')
    }

    function finalPdfFieldMap(authorization, generatedAt) {
        var fieldMap = {}
        var employmentType = authorization.getValue('employment_type')
        var endDate = authorization.getValue('access_end_date') || ''
        var sourceCase = authorization.source_hrsd_case.getRefRecord()

        fieldMap['Employee Name'] = authorization.getDisplayValue('subject_person')
        fieldMap['Position Title'] = authorization.getValue('position_title')
        fieldMap['Directorate/Office'] = authorization.getValue('organization')
        fieldMap.Federal = checkbox(employmentType === 'federal_employee')
        fieldMap.Contractor = checkbox(employmentType === 'contractor')
        fieldMap.IPA = checkbox(employmentType === 'ipa')
        fieldMap['Auditor/Investigator'] = checkbox(
            employmentType === 'auditor_investigator'
        )
        fieldMap['Contractor End Date'] =
            employmentType === 'contractor' ? endDate : ''
        fieldMap['Auditor End Date'] =
            employmentType === 'auditor_investigator' ? endDate : ''
        fieldMap.Justification = authorization.getValue('business_justification')

        var selectedMappings = {}
        var details = new GlideRecord('x_2108496_hr_acces_auth_detail')
        details.addQuery(
            'rob_authorization_form',
            authorization.getUniqueValue()
        )
        details.query()
        while (details.next()) {
            var accessItem = details.access_item.getRefRecord()
            if (accessItem.isValidRecord()) {
                selectedMappings[accessItem.getValue('form_1768_mapping')] = true
            }
        }
        fieldMap['FPPS/WTTS'] = checkbox(selectedMappings.fpps_wtts)
        fieldMap.eOPF = checkbox(selectedMappings.eopf)
        fieldMap['USA Staffing'] = checkbox(selectedMappings.usa_staffing)
        fieldMap['OAS/DataMart'] = checkbox(selectedMappings.oas_datamart)
        fieldMap['Human Capital Reports'] = checkbox(
            selectedMappings.human_capital_reports
        )
        fieldMap['Workforce Profile Charts'] = checkbox(selectedMappings.wpc)

        var employeeSignedAt = authorization.getValue(
            'employee_signature_date_time'
        )
        var supervisorSignedAt = authorization.getValue(
            'supervisor_signature_date_time'
        )
        var finalDate = localDate(supervisorSignedAt)
        fieldMap['Employee Signature'] =
            'Signed electronically by ' +
            authorization.getDisplayValue('employee_signer')
        fieldMap['Supervisor Signature'] =
            'Signed electronically by ' +
            authorization.getDisplayValue('supervisor_signer')
        fieldMap.Date = finalDate
        fieldMap['Authorization Number'] = authorization.getValue('number')
        fieldMap['HR Case Number'] = sourceCase.isValidRecord()
            ? sourceCase.getValue('number')
            : ''
        fieldMap['Form Version'] = authorization.getValue('form_version')
        fieldMap['Employee Signature Date/Time'] = employeeSignedAt
        fieldMap['Supervisor Signature Date/Time'] = supervisorSignedAt
        fieldMap['Effective Date'] = finalDate
        fieldMap['Expiration Date'] = authorization.getValue('expiration_date')
        fieldMap['Decision Type'] = authorization.getDisplayValue(
            'authorization_action'
        )
        fieldMap['Generated Date/Time'] = generatedAt
        return fieldMap
    }

    function finalPdfTemplate() {
        var template = new GlideRecord('sn_doc_pdf_template')
        template.addQuery('name', employeeTemplateName)
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

    function requestSupervisorDecision(authorization, sourceCaseId) {
        var existing = new GlideRecord('sysapproval_approver')
        existing.addQuery('sysapproval', sourceCaseId)
        existing.addQuery('source_table', 'x_2108496_hr_acces_rob_auth')
        existing.addQuery('document_id', authorization.getUniqueValue())
        existing.addQuery('approver', authorization.getValue('supervisor'))
        existing.setLimit(2)
        existing.query()
        if (existing.next()) {
            var existingId = existing.getUniqueValue()
            if (existing.next()) {
                gs.error('ROB duplicate native supervisor decisions exist.')
                return false
            }
            return Boolean(existingId)
        }

        var approval = new GlideRecord('sysapproval_approver')
        approval.initialize()
        approval.setValue('sysapproval', sourceCaseId)
        approval.setValue('source_table', 'x_2108496_hr_acces_rob_auth')
        approval.setValue('document_id', authorization.getUniqueValue())
        approval.setValue('approver', authorization.getValue('supervisor'))
        approval.setValue('state', 'requested')
        if (!approval.insert()) {
            gs.error('ROB native supervisor decision could not be requested.')
            return false
        }
        return true
    }

    function generateFinalPdf(authorization) {
        if (authorization.getValue('final_pdf_attachment')) return true
        var template = finalPdfTemplate()
        if (!template) {
            gs.error('ROB exact published final Form 1768 template is missing.')
            return false
        }
        var documentId = template.getValue('document')
        if (!documentId) {
            gs.error('ROB production template has no fillable source PDF.')
            return false
        }

        var generatedAt = new GlideDateTime().getValue()
        var flatten = { FlattenType: 'fully_flatten' }
        var result = new sn_pdfgeneratorutils.PDFGenerationAPI()
            .fillDocumentFieldsAndFlatten(
                finalPdfFieldMap(authorization, generatedAt),
                documentId,
                'x_2108496_hr_acces_rob_auth',
                authorization.getUniqueValue(),
                'ROB-Form-1768-' + authorization.getValue('number'),
                flatten
            )
        if (!result || String(result.status) !== 'success') {
            gs.error(
                'ROB final Form 1768 generation failed: ' +
                    (result ? result.message : 'no response')
            )
            return false
        }
        return true
    }
    var template = current.document_template.getRefRecord()
    var templateName = template.isValidRecord()
        ? template.getValue('name')
        : ''

    if (
        templateName !== employeeTemplateName &&
        templateName !== supervisorTemplateName
    ) {
        return
    }

    var sourceCaseId = current.getValue('parent')
    if (!sourceCaseId) {
        return
    }

    var authorization = new GlideRecord('x_2108496_hr_acces_rob_auth')
    authorization.addQuery('source_hrsd_case', sourceCaseId)
    authorization.addQuery(
        'status',
        'IN',
        'pending_employee_signature,pending_supervisor_approval_signature'
    )
    authorization.setLimit(1)
    authorization.query()
    if (!authorization.next()) {
        return
    }

    var state = current.getValue('state')
    var signerId = current.getValue('closed_by')
    var completedAt = current.getValue('closed_at')
    var executionId = current.getValue('document_task_execution')
    var isEmployeeStage = templateName === employeeTemplateName

    if (isEmployeeStage) {
        if (
            state !== '3' ||
            !signerId ||
            signerId !== authorization.getValue('subject_person') ||
            !completedAt
        ) {
            gs.error('ROB employee signature evidence did not satisfy the lifecycle gate.')
            return
        }
        if (authorization.getValue('employee_document_task')) {
            return
        }

        authorization.setValue('employee_signature_complete', '1')
        authorization.setValue('employee_signer', signerId)
        authorization.setValue('employee_signature_date_time', completedAt)
        authorization.setValue(
            'employee_document_task',
            current.getUniqueValue()
        )
        authorization.setValue('document_task_execution', executionId)
        authorization.setValue(
            'status',
            'pending_supervisor_approval_signature'
        )
        if (!authorization.update()) {
            gs.error('ROB employee signature evidence could not be persisted.')
            return
        }
        requestSupervisorDecision(authorization, sourceCaseId)
        return
    }

    if (signerId !== authorization.getValue('supervisor') || !completedAt) {
        gs.error('ROB supervisor signature evidence did not satisfy the lifecycle gate.')
        return
    }

    if (state !== '3') {
        return
    }
    if (!isTrue(authorization.getValue('employee_signature_complete'))) {
        gs.error('ROB supervisor action arrived before employee signature completion.')
        return
    }
    if (authorization.getValue('supervisor_document_task')) {
        return
    }
    if (
        !isTrue(authorization.getValue('supervisor_approval_complete')) ||
        authorization.getValue('supervisor_approval_outcome') !== 'approved'
    ) {
        gs.error('ROB supervisor signature arrived without explicit approval.')
        return
    }

    authorization.setValue('supervisor_signature_complete', '1')
    authorization.setValue('supervisor_signer', signerId)
    authorization.setValue('supervisor_signature_date_time', completedAt)
    authorization.setValue(
        'supervisor_document_task',
        current.getUniqueValue()
    )
    authorization.setValue('document_task_execution', executionId)
    if (!authorization.update()) {
        gs.error('ROB supervisor evidence could not be persisted.')
        return
    }
    generateFinalPdf(authorization)
})(current)
