(function executeRule(current) {
    var productionTemplateName = 'ROB Form 1768 Authorization'

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

    function generateFinalPdf(authorization, template) {
        if (authorization.getValue('final_pdf_attachment')) return true
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

    if (!template.isValidRecord() || template.getValue('name') !== productionTemplateName) {
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
    var previousTaskId = current.getValue('previous_task')
    var isEmployeeStage = !previousTaskId

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
        authorization.update()
        return
    }

    if (signerId !== authorization.getValue('supervisor') || !completedAt) {
        gs.error('ROB supervisor signature evidence did not satisfy the lifecycle gate.')
        return
    }

    if (state === '7') {
        authorization.setValue('supervisor_approval_complete', '0')
        authorization.setValue('supervisor_approval_outcome', 'denied')
        authorization.setValue('supervisor_approver', signerId)
        authorization.setValue('supervisor_approval_date_time', completedAt)
        authorization.setValue('supervisor_signature_complete', '0')
        authorization.setValue('supervisor_signer', signerId)
        authorization.setValue('supervisor_signature_date_time', completedAt)
        authorization.setValue(
            'supervisor_document_task',
            current.getUniqueValue()
        )
        authorization.setValue('document_task_execution', executionId)
        authorization.setValue('status', 'denied')
        authorization.update()

        var deniedDetails = new GlideRecord(
            'x_2108496_hr_acces_auth_detail'
        )
        deniedDetails.addQuery(
            'rob_authorization_form',
            authorization.getUniqueValue()
        )
        deniedDetails.addQuery('status', 'pending_authorization')
        deniedDetails.query()
        while (deniedDetails.next()) {
            deniedDetails.setValue('status', 'denied')
            deniedDetails.update()
        }
        return
    }

    // Native Document Templates persists the supervisor's explicit outcome in
    // the completed task state: Closed (3) is the signed/approved submission,
    // while Closed Rejected (7) is handled above as denial. PDF-template tasks
    // persist their entered values in filled_fields and leave body empty, so
    // body text is not authoritative approval evidence.
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

    authorization.setValue('supervisor_approval_complete', '1')
    authorization.setValue('supervisor_approval_outcome', 'approved')
    authorization.setValue('supervisor_approver', signerId)
    authorization.setValue('supervisor_approval_date_time', completedAt)
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
    generateFinalPdf(authorization, template)
})(current)
