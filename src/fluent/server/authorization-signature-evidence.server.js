(function executeRule(current) {
    var employeeTemplateName = 'ROB Form 1768 Employee Signature'
    var supervisorTemplateName = 'ROB Form 1768 Supervisor Signature'
    var reuseTemplateName = 'ROB Reuse Supervisor Attestation'
    var finalRendererName = 'ROB Form 1768 Authorization'
    var signaturePersistenceSubflow =
        'x_2166123_rob_auth.rob_persist_authorization_lifecycle_native'
    function isTrue(value) {
        return value === '1' || value === 'true'
    }

    function checkbox(value) {
        return value ? 'Yes' : 'Off'
    }

    function normalizeSysIds(value) {
        var values = String(value || '')
            .split(',')
            .filter(Boolean)
            .sort()
        return values.filter(function (item, index) {
            return index === 0 || item !== values[index - 1]
        })
    }

    function reuseContextKey(sourceCase, authorization, supervisorId) {
        return JSON.stringify({
            caseId: sourceCase.getUniqueValue(),
            decisionEvaluatedAt: sourceCase.getValue(
                'x_2166123_rob_auth_decision_evaluated_at'
            ),
            subjectId:
                sourceCase.getValue('subject_person') ||
                sourceCase.getValue('opened_for'),
            supervisorId: supervisorId,
            relatedAuthorizationId: authorization.getUniqueValue(),
            authorizationStatus: authorization.getValue('status'),
            authorizationFormVersion: authorization.getValue('form_version'),
            authorizationExpirationDate: authorization.getValue(
                'expiration_date'
            ),
            requestedAccess: normalizeSysIds(
                sourceCase.getValue('x_2166123_rob_auth_requested_items')
            ),
        })
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
        var details = new GlideRecord('x_2166123_rob_auth_auth_detail')
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
        template.addQuery('name', finalRendererName)
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

    function persistFinalizationState(authorization, finalizationStage) {
        var authorizationId = authorization.getUniqueValue()
        try {
            sn_fd.FlowAPI.getRunner()
                .subflow(signaturePersistenceSubflow)
                .inForeground()
                .withInputs({
                    authorization_sys_id: authorizationId,
                    finalization_stage: finalizationStage,
                })
                .run()
        } catch (error) {
            var message =
                error && typeof error.getMessage === 'function'
                    ? error.getMessage()
                    : String(error)
            gs.error(
                'ROB final Form 1768 ' +
                    finalizationStage +
                    ' persistence failed: ' +
                    message
            )
            return false
        }

        if (!authorization.get(authorizationId)) {
            gs.error(
                'ROB final Form 1768 ' +
                    finalizationStage +
                    ' persistence could not reread the Authorization Form.'
            )
            return false
        }

        var expected = finalizationStage === 'claim'
        if (isTrue(authorization.getValue('signed_pdf_generated')) !== expected) {
            gs.error(
                'ROB final Form 1768 ' +
                    finalizationStage +
                    ' failed committed reread validation.'
            )
            return false
        }
        return true
    }

    function generateFinalPdf(authorization) {
        if (authorization.getValue('final_pdf_attachment')) return true
        if (isTrue(authorization.getValue('signed_pdf_generated'))) return true

        // Claim final generation before invoking the native PDF API. A single
        // native Submit can produce follow-on updates to the same closed
        // Document Task; without this persisted claim each update can enter
        // PDF generation before the attachment-association callback records
        // final_pdf_attachment.
        if (!persistFinalizationState(authorization, 'claim')) {
            gs.error('ROB final Form 1768 generation claim could not be persisted.')
            return false
        }

        var template = finalPdfTemplate()
        if (!template) {
            gs.error('ROB exact published final Form 1768 template is missing.')
            persistFinalizationState(authorization, 'reset')
            return false
        }
        var documentId = template.getValue('document')
        if (!documentId) {
            gs.error('ROB production template has no fillable source PDF.')
            persistFinalizationState(authorization, 'reset')
            return false
        }

        var generatedAt = new GlideDateTime().getValue()
        var flatten = { FlattenType: 'fully_flatten' }
        var result = new sn_pdfgeneratorutils.PDFGenerationAPI()
            .fillDocumentFieldsAndFlatten(
                finalPdfFieldMap(authorization, generatedAt),
                documentId,
                'x_2166123_rob_auth_rob_auth',
                authorization.getUniqueValue(),
                'ROB-Form-1768-' + authorization.getValue('number'),
                flatten
            )
        if (!result || String(result.status) !== 'success') {
            gs.error(
                'ROB final Form 1768 generation failed: ' +
                    (result ? result.message : 'no response')
            )
            persistFinalizationState(authorization, 'reset')
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
        templateName !== supervisorTemplateName &&
        templateName !== reuseTemplateName
    ) {
        return
    }

    var sourceCaseId = current.getValue('parent')
    if (!sourceCaseId) {
        return
    }

    function persistSignatureEvidence(
        authorization,
        signatureStage,
        signerId,
        completedAt,
        documentTaskId,
        executionId
    ) {
        var authorizationId = authorization.getUniqueValue()
        var signer = new GlideRecord('sys_user')
        var documentTask = new GlideRecord('sn_doc_task')
        var documentTaskExecution = new GlideRecord('sn_doc_task_execution')
        if (
            !signer.get(signerId) ||
            !documentTask.get(documentTaskId) ||
            !documentTaskExecution.get(executionId)
        ) {
            gs.error(
                'ROB native signature evidence persistence could not resolve its typed reference inputs.'
            )
            return false
        }
        var inputs = {
            authorization_sys_id: authorizationId,
            signature_stage: signatureStage,
            signature_signer: signer,
            signature_date_time: new GlideDateTime(completedAt),
            signature_document_task: documentTask,
            signature_document_task_execution: documentTaskExecution,
        }

        try {
            sn_fd.FlowAPI.getRunner()
                .subflow(signaturePersistenceSubflow)
                .inForeground()
                .withInputs(inputs)
                .run()
        } catch (error) {
            var message =
                error && typeof error.getMessage === 'function'
                    ? error.getMessage()
                    : String(error)
            gs.error(
                'ROB native signature evidence persistence failed: ' + message
            )
            return false
        }

        if (!authorization.get(authorizationId)) {
            gs.error(
                'ROB native signature evidence persistence could not reread the governed Authorization Form.'
            )
            return false
        }

        var isEmployee = signatureStage === 'employee'
        var completeField = isEmployee
            ? 'employee_signature_complete'
            : 'supervisor_signature_complete'
        var signerField = isEmployee ? 'employee_signer' : 'supervisor_signer'
        var signedAtField = isEmployee
            ? 'employee_signature_date_time'
            : 'supervisor_signature_date_time'
        var taskField = isEmployee
            ? 'employee_document_task'
            : 'supervisor_document_task'
        var expectedStatus = 'pending_supervisor_approval_signature'

        if (
            !isTrue(authorization.getValue(completeField)) ||
            authorization.getValue(signerField) !== signerId ||
            authorization.getValue(signedAtField) !== completedAt ||
            authorization.getValue(taskField) !== documentTaskId ||
            authorization.getValue('document_task_execution') !== executionId ||
            authorization.getValue('status') !== expectedStatus
        ) {
            gs.error(
                'ROB native signature evidence persistence failed committed reread validation.'
            )
            return false
        }
        return true
    }

    if (templateName === reuseTemplateName) {
        if (!current.state.changesTo('3')) return

        var reuseCase = current.parent.getRefRecord()
        if (
            !reuseCase.isValidRecord() ||
            reuseCase.getValue(
                'x_2166123_rob_auth_authorization_path'
            ) !== 'reuse'
        ) {
            gs.error('ROB Reuse attestation is not linked to a current Reuse case.')
            return
        }

        var reuseExecutionId = current.getValue('document_task_execution')
        var reuseSignerId = current.getValue('closed_by')
        var reuseCompletedAt = current.getValue('closed_at')
        var reuseParticipant = current.participant.getRefRecord()
        if (
            !reuseExecutionId ||
            !current.getValue('pdf_document') ||
            !reuseCompletedAt ||
            !reuseParticipant.isValidRecord() ||
            reuseParticipant.getValue('name') !== 'Supervisor' ||
            reuseParticipant.getValue('action') !== 'fill'
        ) {
            gs.error('ROB Reuse attestation is missing complete native evidence.')
            return
        }

        var reuseContext = new RobProfileAuthorizationContext().resolveFromCase(
            reuseCase
        )
        if (
            !reuseContext.valid ||
            !reuseSignerId ||
            reuseSignerId !== reuseContext.supervisorId
        ) {
            gs.error('ROB Reuse attestation signer is not the current governed Supervisor.')
            return
        }

        var reusedAuthorizationId = reuseCase.getValue(
            'x_2166123_rob_auth_evaluated_authorization'
        )
        var reusedAuthorization = new GlideRecord(
            'x_2166123_rob_auth_rob_auth'
        )
        var currentContextKey = ''
        if (
            reusedAuthorizationId &&
            reusedAuthorization.get(reusedAuthorizationId)
        ) {
            currentContextKey = reuseContextKey(
                reuseCase,
                reusedAuthorization,
                reuseContext.supervisorId
            )
        }
        var bridge = new sn_hr_core.RobHrCasePersistenceBridge()
        if (
            !currentContextKey ||
            currentContextKey !==
                reuseCase.getValue(
                    'x_2166123_rob_auth_reuse_attestation_context'
                )
        ) {
            bridge.invalidateRobReuseAttestation(
                reuseCase,
                currentContextKey || 'invalid-current-context'
            )
            gs.error('ROB Reuse attestation context became stale before completion.')
            return
        }

        if (
            reuseCase.getValue(
                'x_2166123_rob_auth_reuse_document_task'
            ) === current.getUniqueValue()
        ) {
            return
        }
        if (
            reuseCase.getValue(
                'x_2166123_rob_auth_reuse_document_task'
            )
        ) {
            gs.error('ROB Reuse attestation is already bound to another task.')
            return
        }

        var reusePayload = JSON.stringify({
            signerId: reuseSignerId,
            completedAt: reuseCompletedAt,
            documentTaskId: current.getUniqueValue(),
            documentTaskExecutionId: reuseExecutionId,
            contextKey: reuseCase.getValue(
                'x_2166123_rob_auth_reuse_attestation_context'
            ),
        })
        if (
            !bridge.completeRobReuseAttestation(reuseCase, reusePayload)
        ) {
            gs.error('ROB Reuse attestation evidence could not be persisted.')
        }
        return
    }

    var authorization = new GlideRecord('x_2166123_rob_auth_rob_auth')
    authorization.addQuery('source_hrsd_case', sourceCaseId)
    authorization.addQuery(
        'status',
        'IN',
        'pending_employee_signature,pending_supervisor_approval_signature'
    )
    authorization.setLimit(2)
    authorization.query()
    if (!authorization.next()) {
        return
    }
    var authorizationId = authorization.getUniqueValue()
    if (authorization.next() || !authorization.get(authorizationId)) {
        gs.error('ROB signature evidence found ambiguous Authorization Forms.')
        return
    }

    var state = current.getValue('state')
    var signerId = current.getValue('closed_by')
    var completedAt = current.getValue('closed_at')
    var executionId = current.getValue('document_task_execution')
    var participant = current.participant.getRefRecord()
    var participantName = participant.isValidRecord()
        ? participant.getValue('name')
        : ''
    var participantAction = participant.isValidRecord()
        ? participant.getValue('action')
        : ''
    var isEmployeeStage =
        templateName === employeeTemplateName &&
        participantName === 'Employee' &&
        participantAction === 'fill'
    var isSupervisorStage =
        templateName === supervisorTemplateName &&
        participantName === 'Supervisor' &&
        participantAction === 'fill'

    if (!isEmployeeStage && !isSupervisorStage) {
        gs.error('ROB signature evidence rejected an unexpected participant contract.')
        return
    }

    // Process only the native transition into the completed state. Subsequent
    // updates to a closed task are replays and must not regenerate artifacts.
    if (!current.state.changesTo('3')) {
        return
    }

    if (!executionId || !current.getValue('pdf_document')) {
        gs.error('ROB signature evidence is missing its native execution or PDF document reference.')
        return
    }

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
        var recordedEmployeeTaskId = authorization.getValue(
            'employee_document_task'
        )
        if (recordedEmployeeTaskId === current.getUniqueValue()) {
            return
        }
        if (recordedEmployeeTaskId) {
            gs.error('ROB employee signature evidence is already bound to another task.')
            return
        }

        if (
            !persistSignatureEvidence(
                authorization,
                'employee',
                signerId,
                completedAt,
                current.getUniqueValue(),
                executionId
            )
        ) {
            gs.error('ROB employee signature evidence could not be persisted.')
            return
        }
        return
    }

    if (
        state !== '3' ||
        signerId !== authorization.getValue('supervisor') ||
        !completedAt
    ) {
        gs.error('ROB supervisor Fill/signature evidence did not satisfy the lifecycle gate.')
        return
    }

    if (!isTrue(authorization.getValue('employee_signature_complete'))) {
        gs.error('ROB supervisor action arrived before employee signature completion.')
        return
    }
    if (
        !isTrue(authorization.getValue('supervisor_approval_complete')) ||
        authorization.getValue('supervisor_approval_outcome') !== 'approved' ||
        !authorization.getValue('supervisor_approver') ||
        !authorization.getValue('supervisor_approval_date_time')
    ) {
        gs.error('ROB supervisor signature arrived without committed Approved native approval evidence.')
        return
    }
    var recordedSupervisorTaskId = authorization.getValue(
        'supervisor_document_task'
    )
    if (recordedSupervisorTaskId === current.getUniqueValue()) {
        return
    }
    if (recordedSupervisorTaskId) {
        gs.error('ROB supervisor evidence is already bound to another task.')
        return
    }

    if (
        !persistSignatureEvidence(
            authorization,
            'supervisor',
            signerId,
            completedAt,
            current.getUniqueValue(),
            executionId
        )
    ) {
        gs.error('ROB approved Supervisor Fill/signature evidence could not be persisted.')
        return
    }
    generateFinalPdf(authorization)
})(current)
