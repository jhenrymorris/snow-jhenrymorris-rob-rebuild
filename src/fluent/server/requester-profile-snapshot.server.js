(function executeRule(current) {
    var requestedItemsField = 'x_2108496_hr_acces_requested_items'
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
    var supportedServices = {
        sn_hr_core_case_payroll: {
            value: 'request_access_to_hr_systems',
            categories: { hr_system: true },
        },
        sn_hr_core_case_workforce_admin: {
            value: 'request_access_to_hr_data_and_reports',
            categories: {
                human_capital_data: true,
                report: true,
                workforce_profile_chart: true,
            },
        },
    }

    function reject(message) {
        gs.addErrorMessage(message)
        current.setAbortAction(true)
    }

    function isActive(record) {
        var active = record.getValue('active')
        return active === '1' || active === 'true'
    }

    function isApprovedRobRequest() {
        var className = current.getValue('sys_class_name')
        var servicePolicy = supportedServices[className]
        var serviceId = current.getValue('hr_service')
        var requestedItems = current.getValue(requestedItemsField)

        if (!servicePolicy) {
            return false
        }

        if (!serviceId) {
            if (requestedItems) {
                reject('The HR access request source could not be validated.')
            }
            return false
        }

        var service = new GlideRecord('sn_hr_core_service')

        if (!service.get(serviceId)) {
            if (requestedItems) {
                reject('The HR access request source could not be validated.')
            }
            return false
        }

        if (service.getValue('value') !== servicePolicy.value) {
            return false
        }

        if (!isActive(service)) {
            reject('The HR access request source is not active.')
            return false
        }

        if (!requestedItems) {
            reject('At least one approved ROB access item is required.')
            return false
        }

        var requestedItemIds = requestedItems.split(',')
        var uniqueItemIds = {}
        var expectedCount = 0
        var i

        for (i = 0; i < requestedItemIds.length; i += 1) {
            var requestedItemId = requestedItemIds[i]

            if (requestedItemId && !uniqueItemIds[requestedItemId]) {
                uniqueItemIds[requestedItemId] = true
                expectedCount += 1
            }
        }

        if (!expectedCount) {
            reject('At least one approved ROB access item is required.')
            return false
        }

        var accessItem = new GlideRecord('x_2108496_hr_acces_rob_access')
        accessItem.addQuery('sys_id', 'IN', Object.keys(uniqueItemIds).join(','))
        accessItem.addQuery('active', true)
        accessItem.query()

        var approvedCount = 0

        while (accessItem.next()) {
            if (!servicePolicy.categories[accessItem.getValue('access_category')]) {
                reject('One or more requested ROB access items are not valid for this service.')
                return false
            }
            approvedCount += 1
        }

        if (approvedCount !== expectedCount) {
            reject('One or more requested ROB access items could not be validated.')
            return false
        }

        return true
    }

    if (!isApprovedRobRequest()) {
        return
    }

    var authenticatedUserId = gs.getUserID()
    var suppliedRequesterId = current.getValue('opened_by')
    var suppliedSubjectPersonId = current.getValue('subject_person')
    var suppliedOpenedForId = current.getValue('opened_for')

    if (
        !authenticatedUserId ||
        (suppliedRequesterId &&
            suppliedRequesterId !== authenticatedUserId) ||
        (suppliedOpenedForId &&
            suppliedOpenedForId !== authenticatedUserId) ||
        (suppliedSubjectPersonId &&
            suppliedSubjectPersonId !== authenticatedUserId)
    ) {
        reject('This HR access request must be submitted by and for the same person.')
        return
    }

    current.setValue('opened_by', authenticatedUserId)
    current.setValue('opened_for', authenticatedUserId)
    current.setValue('subject_person', authenticatedUserId)

    var requesterId = authenticatedUserId
    var requester = new GlideRecord('sys_user')

    if (!requester.get(requesterId)) {
        reject('The requester profile could not be validated.')
        return
    }

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
        return
    }

    if (managerId === requesterId) {
        setSupervisorException('self_supervisor')
        return
    }

    var manager = new GlideRecord('sys_user')

    if (!manager.get(managerId)) {
        setSupervisorException('invalid_supervisor')
        return
    }

    var managerActive = manager.getValue('active')

    if (managerActive !== '1' && managerActive !== 'true') {
        setSupervisorException('inactive_supervisor')
        return
    }

    current.setValue(supervisorField, managerId)
})(current)
