(function executeRule(current, previous) {
    var prefix = 'x_2108496_hr_acces_'
    var decisionField = prefix + 'authorization_path'
    var decisionTimeField = prefix + 'decision_evaluated_at'
    var decisionReasonField = prefix + 'decision_reason'
    var relatedAuthorizationField = prefix + 'evaluated_authorization'
    var requestedItemsField = prefix + 'requested_items'
    var coveredItemsField = prefix + 'covered_access'
    var uncoveredItemsField = prefix + 'uncovered_access'
    var expirationField = prefix + 'proposed_expiration_date'
    var processingBlockedField = prefix + 'authorization_processing_blocked'
    var supportedDecisions = {
        new: true,
        amendment: true,
        renewal: true,
    }

    function fail(message) {
        gs.error('ROB lifecycle initiation stopped: ' + message)
    }

    function listValues(value) {
        var result = []
        var seen = {}
        var parts = String(value || '').split(',')
        var index

        for (index = 0; index < parts.length; index += 1) {
            var item = String(parts[index] || '').trim()
            if (item && !seen[item]) {
                seen[item] = true
                result.push(item)
            }
        }

        return result
    }

    function addUnique(target, seen, value) {
        if (value && !seen[value]) {
            seen[value] = true
            target.push(value)
        }
    }

    if (
        current.getValue(decisionTimeField) ===
        previous.getValue(decisionTimeField)
    ) {
        return
    }

    if (
        current.getValue(processingBlockedField) === '1' ||
        current.getValue(processingBlockedField) === 'true'
    ) {
        fail('the source case is blocked for prerequisite correction')
        return
    }

    var decision = current.getValue(decisionField)
    if (decision === 'exception' || decision === 'reuse') {
        return
    }
    if (!supportedDecisions[decision]) {
        fail('the R3 decision is missing or unsupported')
        return
    }

    var existing = new GlideRecord('x_2108496_hr_acces_rob_auth')
    existing.addQuery('source_hrsd_case', current.getUniqueValue())
    existing.setLimit(1)
    existing.query()
    if (existing.next()) {
        return
    }

    var configuration = new GlideRecord('x_2108496_hr_acces_rob_config')
    configuration.addQuery('active', true)
    configuration.query()
    if (!configuration.next()) {
        fail('exactly one active ROB Configuration is required')
        return
    }
    var formVersion = configuration.getValue('current_accepted_form_version')
    if (!formVersion || configuration.next()) {
        fail('exactly one valid active ROB Configuration is required')
        return
    }

    var subjectId =
        current.getValue('subject_person') || current.getValue('opened_for')
    var supervisorId = current.getValue(prefix + 'supervisor_snapshot')
    var positionSnapshot = current.getValue(prefix + 'position_title')
    var organizationSnapshot = current.getDisplayValue(
        prefix + 'organization_snapshot'
    )
    var employmentType = current.getValue(prefix + 'employment_type')
    var businessJustification = current.getValue('rich_description')
    var expirationDate = current.getValue(expirationField)
    var priorAuthorizationId = current.getValue(relatedAuthorizationField)

    if (
        !subjectId ||
        !supervisorId ||
        !positionSnapshot ||
        !organizationSnapshot ||
        !employmentType ||
        !businessJustification ||
        !expirationDate ||
        !current.getValue(decisionReasonField)
    ) {
        fail('required governed lifecycle data is incomplete')
        return
    }
    if (
        (decision === 'amendment' || decision === 'renewal') &&
        !priorAuthorizationId
    ) {
        fail('a replacement decision requires its evaluated authorization')
        return
    }

    var scopeIds = []
    var scopeSeen = {}
    var requestedIds = listValues(current.getValue(requestedItemsField))
    var requestedIndex
    for (requestedIndex = 0; requestedIndex < requestedIds.length; requestedIndex += 1) {
        addUnique(scopeIds, scopeSeen, requestedIds[requestedIndex])
    }

    if (decision === 'amendment' || decision === 'renewal') {
        var priorDetails = new GlideRecord(
            'x_2108496_hr_acces_auth_detail'
        )
        priorDetails.addQuery('rob_authorization_form', priorAuthorizationId)
        priorDetails.addQuery('status', 'NOT IN', 'denied,revoked')
        priorDetails.query()
        while (priorDetails.next()) {
            addUnique(
                scopeIds,
                scopeSeen,
                priorDetails.getValue('access_item')
            )
        }
    }

    if (!scopeIds.length) {
        fail('the governed authorization scope is empty')
        return
    }

    var scopeRecords = []
    var scopeIndex
    for (scopeIndex = 0; scopeIndex < scopeIds.length; scopeIndex += 1) {
        var accessItem = new GlideRecord('x_2108496_hr_acces_rob_access')
        if (!accessItem.get(scopeIds[scopeIndex])) {
            fail('an access item in the governed scope no longer exists')
            return
        }
        scopeRecords.push({
            id: accessItem.getUniqueValue(),
            staffing: accessItem.getValue('requires_staffing_task'),
            analytics: accessItem.getValue('requires_analytics_task'),
            operationsManager: accessItem.getValue(
                'requires_operations_manager_task'
            ),
            provisioning: accessItem.getDisplayValue(
                'external_provisioning_system'
            ),
            target: accessItem.getDisplayValue('external_target_system'),
        })
    }

    var employeeId = ''
    var employee = new GlideRecord('sys_user')
    if (employee.get(subjectId)) {
        employeeId =
            employee.getValue('employee_number') || employee.getValue('user_name')
    }

    var authorization = new GlideRecord('x_2108496_hr_acces_rob_auth')
    authorization.initialize()
    authorization.setValue('subject_person', subjectId)
    authorization.setValue('employee_id', employeeId)
    authorization.setValue('supervisor', supervisorId)
    authorization.setValue('organization', organizationSnapshot)
    authorization.setValue('position_title', positionSnapshot)
    authorization.setValue('employment_type', employmentType)
    authorization.setValue(
        'access_end_date',
        current.getValue(prefix + 'access_end_date')
    )
    authorization.setValue('business_justification', businessJustification)
    authorization.setValue('authorization_action', decision)
    authorization.setValue('form_version', formVersion)
    authorization.setValue('expiration_date', expirationDate)
    authorization.setValue('status', 'draft')
    authorization.setValue('source_hrsd_case', current.getUniqueValue())
    authorization.setValue(
        'decision_reason',
        current.getValue(decisionReasonField)
    )
    authorization.setValue(
        'decision_evaluated_at',
        current.getValue(decisionTimeField)
    )
    authorization.setValue('evaluated_authorization', priorAuthorizationId)
    authorization.setValue(
        'decision_evidence',
        'Covered access: ' +
            current.getValue(coveredItemsField) +
            '\nUncovered access: ' +
            current.getValue(uncoveredItemsField)
    )
    if (decision === 'amendment' || decision === 'renewal') {
        authorization.setValue(
            'supersedes_authorization_form',
            priorAuthorizationId
        )
    }

    var authorizationId = authorization.insert()
    if (!authorizationId) {
        fail('the Authorization Form could not be created')
        return
    }

    var createdDetailIds = []
    for (scopeIndex = 0; scopeIndex < scopeRecords.length; scopeIndex += 1) {
        var scopeRecord = scopeRecords[scopeIndex]
        var detail = new GlideRecord('x_2108496_hr_acces_auth_detail')
        detail.initialize()
        detail.setValue('source_hrsd_case', current.getUniqueValue())
        detail.setValue('rob_authorization_form', authorizationId)
        detail.setValue('subject_person', subjectId)
        detail.setValue('access_item', scopeRecord.id)
        detail.setValue(
            'business_justification_snapshot',
            businessJustification
        )
        detail.setValue('authorized_end_date', expirationDate)
        detail.setValue('status', 'pending_authorization')
        detail.setValue(
            'staffing_task_required_snapshot',
            scopeRecord.staffing
        )
        detail.setValue(
            'analytics_task_required_snapshot',
            scopeRecord.analytics
        )
        detail.setValue(
            'operations_manager_task_required_snapshot',
            scopeRecord.operationsManager
        )
        detail.setValue(
            'provisioning_system_snapshot',
            scopeRecord.provisioning
        )
        detail.setValue('target_system_snapshot', scopeRecord.target)
        var detailId = detail.insert()
        if (!detailId) {
            var cleanupIndex
            for (
                cleanupIndex = 0;
                cleanupIndex < createdDetailIds.length;
                cleanupIndex += 1
            ) {
                var cleanupDetail = new GlideRecord(
                    'x_2108496_hr_acces_auth_detail'
                )
                if (cleanupDetail.get(createdDetailIds[cleanupIndex])) {
                    cleanupDetail.deleteRecord()
                }
            }
            if (authorization.get(authorizationId)) {
                authorization.deleteRecord()
            }
            fail('the complete governed scope could not be created')
            return
        }
        createdDetailIds.push(String(detailId))
    }

    if (authorization.get(authorizationId)) {
        authorization.setValue('status', 'pending_employee_signature')
        authorization.update()
    }
})(current, previous)
