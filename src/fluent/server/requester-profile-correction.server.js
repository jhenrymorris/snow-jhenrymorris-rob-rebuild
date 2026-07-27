(function executeRule(current, previous) {
    var correctionRequestedField =
        'x_2108496_hr_acces_snapshot_correction_requested'
    var requestedItemsField = 'x_2108496_hr_acces_requested_items'
    var correctionReasonField =
        'x_2108496_hr_acces_snapshot_correction_reason'
    var positionTitleField = 'x_2108496_hr_acces_position_title'
    var supervisorField = 'x_2108496_hr_acces_supervisor_snapshot'
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
        supervisorField,
        exceptionRequiredField,
        exceptionReasonField,
        processingBlockedField,
        employeeSignatureField,
        supervisorSignatureField,
        fulfillmentGateField,
        priorPositionTitleField,
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
    current.setValue(priorSupervisorField, previous.getValue(supervisorField))
    current.setValue(correctedByField, gs.getUserID())
    current.setValue(correctedAtField, new GlideDateTime().getValue())
    current.setValue(positionTitleField, requester.getValue('title') || '')
    current.setValue(supervisorField, '')
    current.setValue(exceptionRequiredField, '0')
    current.setValue(exceptionReasonField, '')
    current.setValue(processingBlockedField, '0')
    current.setValue(employeeSignatureField, '0')
    current.setValue(supervisorSignatureField, '0')
    current.setValue(fulfillmentGateField, '0')

    var managerId = requester.getValue('manager')

    function setSupervisorException(reason) {
        current.setValue(supervisorField, '')
        current.setValue(exceptionRequiredField, '1')
        current.setValue(exceptionReasonField, reason)
        current.setValue(processingBlockedField, '1')
        current.setValue(employeeSignatureField, '0')
        current.setValue(supervisorSignatureField, '0')
        current.setValue(fulfillmentGateField, '0')
    }

    if (!managerId) {
        setSupervisorException('missing_supervisor')
    } else if (managerId === requesterId) {
        setSupervisorException('self_supervisor')
    } else {
        var manager = new GlideRecord('sys_user')

        if (!manager.get(managerId)) {
            setSupervisorException('invalid_supervisor')
        } else {
            var managerActive = manager.getValue('active')

            if (managerActive !== '1' && managerActive !== 'true') {
                setSupervisorException('inactive_supervisor')
            } else {
                current.setValue(supervisorField, managerId)
            }
        }
    }

    current.setValue(correctionRequestedField, '0')
})(current, previous)
