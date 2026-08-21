(function executeRule(current) {
    var requestedItemsField = 'x_2108496_hr_acces_requested_items'
    var employmentTypeField = 'x_2108496_hr_acces_employment_type'
    var accessEndDateField = 'x_2108496_hr_acces_access_end_date'
    var operationsManagerField = 'x_2108496_hr_acces_operations_manager'
    var requestRequirements = {
        requiresAccessEndDate: false,
        requiresOperationsManager: false,
    }
    var approvedEmploymentTypes = {
        federal_employee: true,
        contractor: true,
        ipa: true,
        auditor_investigator: true,
    }
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
        var className = current.getTableName()

        if (!supportedServices[className]) {
            className =
                current.getValue('sys_class_name') ||
                current.getRecordClassName()
        }
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

            if (isActiveFlag(accessItem.getValue('requires_access_end_date'))) {
                requestRequirements.requiresAccessEndDate = true
            }

            if (
                isActiveFlag(
                    accessItem.getValue('requires_operations_manager_task')
                )
            ) {
                requestRequirements.requiresOperationsManager = true
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

    function isActiveFlag(value) {
        return value === '1' || value === 'true'
    }

    var businessJustification = current.getValue('rich_description')

    if (
        !businessJustification ||
        !String(businessJustification).replace(/^\s+|\s+$/g, '')
    ) {
        reject('Business Justification is required.')
        return
    }

    var employmentType = current.getValue(employmentTypeField)

    if (!approvedEmploymentTypes[employmentType]) {
        reject('Select an approved Employment Type.')
        return
    }

    var authenticatedUserId = gs.getUserID()
    var suppliedRequesterId = current.getValue('opened_by')
    var suppliedSubjectPersonId = current.getValue('subject_person')
    var suppliedOpenedForId = current.getValue('opened_for')

    if (
        !authenticatedUserId ||
        !suppliedRequesterId ||
        !suppliedOpenedForId ||
        !suppliedSubjectPersonId ||
        suppliedRequesterId !== authenticatedUserId ||
        suppliedOpenedForId !== authenticatedUserId ||
        suppliedSubjectPersonId !== authenticatedUserId
    ) {
        reject('This HR access request must be submitted by and for the same person.')
        return
    }

    // Native HRSD owns the committed request identity fields. This rule
    // validates the native values against the authenticated user but never
    // rewrites opened_by, opened_for, or subject_person.
    var requesterId = authenticatedUserId
    var requester = new GlideRecord('sys_user')

    if (!requester.get(requesterId)) {
        reject('The requester profile could not be validated.')
        return
    }

    var profileContext = new RobProfileAuthorizationContext().resolveFromCase(current)
    if (!profileContext.valid) {
        reject(
            'Position, Organization, and Supervisor could not be validated for authorization. Resolve the profile context and submit again.'
        )
        return
    }

    // The three legacy case snapshot fields intentionally remain untouched.
    // Final validated values become immutable historical evidence only when
    // copied to the governed ROB Authorization Form before signing.
    function setPrerequisiteException(reason) {
        return new sn_hr_core.RobHrCasePersistenceBridge().setRobIntakeGate(
            current,
            true,
            reason
        )
    }

    function clearPrerequisiteException() {
        return new sn_hr_core.RobHrCasePersistenceBridge().setRobIntakeGate(
            current,
            false,
            ''
        )
    }

    function rejectPersistenceFailure() {
        reject('The ROB intake gate could not be persisted by HR Core.')
    }

    var requiresEmploymentEndDate =
        employmentType === 'contractor' ||
        employmentType === 'auditor_investigator'

    if (
        (requiresEmploymentEndDate || requestRequirements.requiresAccessEndDate) &&
        !current.getValue(accessEndDateField)
    ) {
        if (!setPrerequisiteException('missing_required_access_end_date')) {
            rejectPersistenceFailure()
        }
        return
    }

    if (requestRequirements.requiresOperationsManager) {
        var operationsManagerId = current.getValue(operationsManagerField)

        if (!operationsManagerId) {
            if (!setPrerequisiteException('missing_operations_manager')) {
                rejectPersistenceFailure()
            }
            return
        }

        var operationsManager = new GlideRecord('sys_user')

        if (!operationsManager.get(operationsManagerId)) {
            if (!setPrerequisiteException('invalid_operations_manager')) {
                rejectPersistenceFailure()
            }
            return
        }

        if (!isActive(operationsManager)) {
            if (!setPrerequisiteException('inactive_operations_manager')) {
                rejectPersistenceFailure()
            }
            return
        }
    }

    if (!clearPrerequisiteException()) {
        rejectPersistenceFailure()
    }

})(current)
