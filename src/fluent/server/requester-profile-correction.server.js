(function executeRule(current, previous) {
    var correctionRequestedField =
        'x_2108496_hr_acces_snapshot_correction_requested'
    var requestedItemsField = 'x_2108496_hr_acces_requested_items'
    var correctionReasonField =
        'x_2108496_hr_acces_snapshot_correction_reason'
    var positionTitleField = 'x_2108496_hr_acces_position_title'
    var organizationField = 'x_2108496_hr_acces_organization_snapshot'
    var supervisorField = 'x_2108496_hr_acces_supervisor_snapshot'
    var accessEndDateField = 'x_2108496_hr_acces_access_end_date'
    var operationsManagerField = 'x_2108496_hr_acces_operations_manager'
    var exceptionRequiredField =
        'x_2108496_hr_acces_exception_review_required'
    var exceptionReasonField = 'x_2108496_hr_acces_exception_reason'
    var processingBlockedField =
        'x_2108496_hr_acces_authorization_processing_blocked'
    var employeeSignatureField =
        'x_2108496_hr_acces_requires_employee_signature'
    var supervisorSignatureField =
        'x_2108496_hr_acces_requires_supervisor_signature'
    var fulfillmentGateField =
        'x_2108496_hr_acces_fulfillment_gate_complete'
    var priorPositionTitleField =
        'x_2108496_hr_acces_prior_position_title'
    var priorOrganizationField =
        'x_2108496_hr_acces_prior_organization_snapshot'
    var priorSupervisorField =
        'x_2108496_hr_acces_prior_supervisor_snapshot'
    var correctedByField = 'x_2108496_hr_acces_snapshot_corrected_by'
    var correctedAtField = 'x_2108496_hr_acces_snapshot_corrected_at'
    var supportedServices = {
        sn_hr_core_case_payroll: 'request_access_to_hr_systems',
        sn_hr_core_case_workforce_admin:
            'request_access_to_hr_data_and_reports',
    }
    var protectedFields = [
        positionTitleField,
        organizationField,
        supervisorField,
        exceptionRequiredField,
        exceptionReasonField,
        processingBlockedField,
        employeeSignatureField,
        supervisorSignatureField,
        fulfillmentGateField,
        priorPositionTitleField,
        priorOrganizationField,
        priorSupervisorField,
        correctedByField,
        correctedAtField,
    ]

    function abort(message) {
        gs.addErrorMessage(message)
        current.setAbortAction(true)
    }

    function changed(fieldName) {
        return current.getValue(fieldName) !== previous.getValue(fieldName)
    }

    function isActive(record) {
        var active = record.getValue('active')
        return active === '1' || active === 'true'
    }

    if (changed(requestedItemsField)) {
        abort('ROB requested access items are immutable after case creation.')
        return
    }

    var signedContentFields = [
        'rich_description',
        'x_2108496_hr_acces_employment_type',
        accessEndDateField,
        operationsManagerField,
        positionTitleField,
        organizationField,
        supervisorField,
    ]
    var authorizationInProgress = new GlideRecord(
        'x_2108496_hr_acces_rob_auth'
    )
    authorizationInProgress.addQuery('source_hrsd_case', current.getUniqueValue())
    authorizationInProgress.addQuery(
        'status',
        'IN',
        'draft,pending_employee_signature,pending_supervisor_approval_signature,active'
    )
    authorizationInProgress.setLimit(1)
    authorizationInProgress.query()
    var signedContentLocked = authorizationInProgress.next()
    if (
        !signedContentLocked &&
        current.getValue('x_2108496_hr_acces_authorization_path') === 'reuse' &&
        current.getValue('x_2108496_hr_acces_decision_evaluated_at')
    ) {
        signedContentLocked = true
    }
    var signedFieldIndex
    for (
        signedFieldIndex = 0;
        signedFieldIndex < signedContentFields.length;
        signedFieldIndex += 1
    ) {
        if (signedContentLocked && changed(signedContentFields[signedFieldIndex])) {
            abort(
                'Signed ROB authorization content cannot change after lifecycle preparation. Re-evaluate or amend the authorization instead.'
            )
            return
        }
    }

    function clearResolvedException() {
        current.setValue(exceptionRequiredField, '0')
        current.setValue(exceptionReasonField, '')
        current.setValue(processingBlockedField, '0')
        current.setValue(employeeSignatureField, '0')
        current.setValue(supervisorSignatureField, '0')
        current.setValue(fulfillmentGateField, '0')
    }

    var previousExceptionReason = previous.getValue(exceptionReasonField)

    if (
        previousExceptionReason === 'missing_required_access_end_date' &&
        changed(accessEndDateField) &&
        current.getValue(accessEndDateField)
    ) {
        clearResolvedException()
        return
    }

    if (
        (previousExceptionReason === 'missing_operations_manager' ||
            previousExceptionReason === 'invalid_operations_manager' ||
            previousExceptionReason === 'inactive_operations_manager') &&
        changed(operationsManagerField)
    ) {
        var correctedOperationsManagerId = current.getValue(operationsManagerField)
        var correctedOperationsManager = new GlideRecord('sys_user')

        if (
            correctedOperationsManagerId &&
            correctedOperationsManager.get(correctedOperationsManagerId) &&
            isActive(correctedOperationsManager)
        ) {
            clearResolvedException()
            return
        }

        abort('Select an active Operations Manager before resolving this exception.')
        return
    }

    var protectedValueChanged = false
    var i

    for (i = 0; i < protectedFields.length; i += 1) {
        if (changed(protectedFields[i])) {
            protectedValueChanged = true
            break
        }
    }

    var correctionRequested =
        current.getValue(correctionRequestedField) === '1' ||
        current.getValue(correctionRequestedField) === 'true'

    if (!correctionRequested) {
        if (protectedValueChanged) {
            abort('ROB requester profile evidence can be changed only by the controlled correction action.')
        }
        return
    }

    var profileCorrectionReasons = {
        missing_supervisor: true,
        invalid_supervisor: true,
        inactive_supervisor: true,
        self_supervisor: true,
        missing_position: true,
        missing_organization: true,
    }

    if (!profileCorrectionReasons[previousExceptionReason]) {
        abort('This correction action is limited to requester profile exceptions.')
        return
    }

    if (
        !gs
            .getUser()
            .hasAssignedRole('x_2108496_hr_acces.rob_admin')
    ) {
        abort('You are not authorized to correct ROB requester profile evidence.')
        return
    }

    var correctionReason = current.getValue(correctionReasonField)

    if (
        !correctionReason ||
        !String(correctionReason).replace(/^\s+|\s+$/g, '') ||
        correctionReason === previous.getValue(correctionReasonField)
    ) {
        abort('Enter a new ROB snapshot correction reason before running the correction action.')
        return
    }

    var className = current.getValue('sys_class_name')
    var expectedServiceValue = supportedServices[className]
    var serviceId = current.getValue('hr_service')

    if (
        !expectedServiceValue ||
        !serviceId ||
        !current.getValue(requestedItemsField)
    ) {
        abort('This case is not an approved ROB access request.')
        return
    }

    var service = new GlideRecord('sn_hr_core_service')

    if (
        !service.get(serviceId) ||
        service.getValue('value') !== expectedServiceValue ||
        !isActive(service)
    ) {
        abort('This case is not an approved ROB access request.')
        return
    }

    var requesterId = current.getValue('opened_by')
    var openedForId = current.getValue('opened_for')
    var subjectPersonId = current.getValue('subject_person')

    if (
        !requesterId ||
        !openedForId ||
        !subjectPersonId ||
        requesterId !== openedForId ||
        requesterId !== subjectPersonId
    ) {
        abort('The original self-submission identities are not valid for correction.')
        return
    }

    var requester = new GlideRecord('sys_user')

    if (!requester.get(requesterId)) {
        abort('The requester profile could not be validated for correction.')
        return
    }

    current.setValue(priorPositionTitleField, previous.getValue(positionTitleField))
    current.setValue(priorOrganizationField, previous.getValue(organizationField))
    current.setValue(priorSupervisorField, previous.getValue(supervisorField))
    current.setValue(correctedByField, gs.getUserID())
    current.setValue(correctedAtField, new GlideDateTime().getValue())
    current.setValue(positionTitleField, requester.getValue('title') || '')
    current.setValue(organizationField, requester.getValue('department') || '')
    current.setValue(supervisorField, '')
    current.setValue(exceptionRequiredField, '0')
    current.setValue(exceptionReasonField, '')
    current.setValue(processingBlockedField, '0')
    current.setValue(employeeSignatureField, '0')
    current.setValue(supervisorSignatureField, '0')
    current.setValue(fulfillmentGateField, '0')

    var managerId = requester.getValue('manager')

    function setProfileException(reason) {
        current.setValue(supervisorField, '')
        current.setValue(exceptionRequiredField, '1')
        current.setValue(exceptionReasonField, reason)
        current.setValue(processingBlockedField, '1')
        current.setValue(employeeSignatureField, '0')
        current.setValue(supervisorSignatureField, '0')
        current.setValue(fulfillmentGateField, '0')
    }

    if (!current.getValue(positionTitleField)) {
        setProfileException('missing_position')
        current.setValue(correctionRequestedField, '0')
        return
    }

    if (!current.getValue(organizationField)) {
        setProfileException('missing_organization')
        current.setValue(correctionRequestedField, '0')
        return
    }

    if (!managerId) {
        setProfileException('missing_supervisor')
    } else if (managerId === requesterId) {
        setProfileException('self_supervisor')
    } else {
        var manager = new GlideRecord('sys_user')

        if (!manager.get(managerId)) {
            setProfileException('invalid_supervisor')
        } else {
            var managerActive = manager.getValue('active')

            if (managerActive !== '1' && managerActive !== 'true') {
                setProfileException('inactive_supervisor')
            } else {
                current.setValue(supervisorField, managerId)
            }
        }
    }

    current.setValue(correctionRequestedField, '0')
})(current, previous)
