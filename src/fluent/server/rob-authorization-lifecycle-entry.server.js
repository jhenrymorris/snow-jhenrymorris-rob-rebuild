var RobAuthorizationLifecycleEntry = Class.create()
RobAuthorizationLifecycleEntry.prototype = (function () {
    function lifecycleResult(caseSysId) {
        return {
        success: false,
        disposition: 'failed',
        case_sys_id: String(caseSysId || ''),
        authorization_sys_id: '',
        created_authorization: false,
        created_detail_count: 0,
        signing_started: false,
        reason: '',
    }
    }

    function rejectedResult(caseSysId, message) {
        var result = lifecycleResult(caseSysId)
        result.reason = String(message || 'lifecycle failed')
        gs.error('ROB lifecycle initiation stopped: ' + result.reason)
        return result
    }

    function executeFixed(caseSysId, sourceCaseTable, verificationAuthorizationId) {
    var result = lifecycleResult(caseSysId)
    var prefix = 'x_2166123_rob_auth_'
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
        if (!result.reason) result.reason = String(message || 'lifecycle failed')
        gs.error('ROB lifecycle initiation stopped: ' + message)
    }

    function succeed(disposition, authorizationId, signingStarted) {
        result.success = true
        result.disposition = disposition
        result.authorization_sys_id = String(authorizationId || '')
        result.signing_started = signingStarted === true
        result.reason = ''
        return result
    }

    function isTrue(value) {
        return value === true || value === '1' || value === 'true'
    }

    function nativeCreatedRecordId(subflowName, inputs, outputName) {
        try {
            var execution = sn_fd.FlowAPI.getRunner()
                .subflow(subflowName)
                .inForeground()
                .withInputs(inputs)
                .run()
            var outputs = execution.getOutputs()
            var created = outputs && outputs[outputName]
            if (created && typeof created.getUniqueValue === 'function') {
                return String(created.getUniqueValue() || '')
            }
            return String(created || '')
        } catch (creationError) {
            fail('native governed-record creation failed')
            return ''
        }
    }

    function recordMatches(record, expected) {
        var field
        for (field in expected) {
            if (
                Object.prototype.hasOwnProperty.call(expected, field) &&
                String(record.getValue(field) || '') !==
                    String(expected[field] || '')
            ) {
                return false
            }
        }
        return true
    }

    function committedSourceCase() {
        var sourceCaseId = String(caseSysId || '').trim()
        if (!sourceCaseId) {
            fail('the committed source HR Case sys_id is required')
            return null
        }

        var committedCase = new GlideRecord(sourceCaseTable)
        if (!committedCase.get(sourceCaseId)) {
            fail('the deferred source HR Case could not be reread after commit')
            return null
        }
        return committedCase
    }

    function isApprovedRobService(current) {
        var servicePolicy = {
            sn_hr_core_case_payroll: 'request_access_to_hr_systems',
            sn_hr_core_case_workforce_admin:
                'request_access_to_hr_data_and_reports',
        }[sourceCaseTable]
        var serviceId = String(current.getValue('hr_service') || '')
        if (!servicePolicy || !serviceId) return false

        var service = new GlideRecord('sn_hr_core_service')
        return (
            service.get(serviceId) &&
            isTrue(service.getValue('active')) &&
            String(service.getValue('value') || '') === servicePolicy
        )
    }

    function publishedTemplate(templateName) {
        var template = new GlideRecord('sn_doc_pdf_template')
        template.addQuery('name', templateName)
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

    function initiateAuthorizationSigning(templateName, outputName) {
        var template = publishedTemplate(templateName)
        if (!template) {
            fail('exactly one published production signing template is required')
            return false
        }

        var existingTask = new GlideRecord('sn_doc_task')
        existingTask.addQuery('parent', current.getUniqueValue())
        existingTask.addQuery('document_template', template.getUniqueValue())
        existingTask.addNotNullQuery('document_task_execution')
        existingTask.addNotNullQuery('pdf_document')
        existingTask.setLimit(1)
        existingTask.query()
        if (existingTask.next()) {
            return true
        }

        var initiated = new sn_doc.GenerateDocumentAPI().initiateDocumentTasks(
            current,
            '',
            template.getUniqueValue(),
            outputName,
            ''
        )
        if (!initiated) {
            fail('the native Authorization signing execution could not be initiated')
            return false
        }
        return true
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

    function reuseContextKey(authorization, supervisorId) {
        return JSON.stringify({
            caseId: current.getUniqueValue(),
            decisionEvaluatedAt: current.getValue(
                'x_2166123_rob_auth_decision_evaluated_at'
            ),
            subjectId:
                current.getValue('subject_person') ||
                current.getValue('opened_for'),
            supervisorId: supervisorId,
            relatedAuthorizationId: authorization.getUniqueValue(),
            authorizationStatus: authorization.getValue('status'),
            authorizationFormVersion: authorization.getValue('form_version'),
            authorizationExpirationDate: authorization.getValue(
                'expiration_date'
            ),
            requestedAccess: normalizeSysIds(
                current.getValue('x_2166123_rob_auth_requested_items')
            ),
        })
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

    function existingAuthorizationForCase() {
        var authorization = new GlideRecord(
            'x_2166123_rob_auth_rob_auth'
        )
        authorization.addQuery('source_hrsd_case', current.getUniqueValue())
        authorization.setLimit(2)
        authorization.query()
        if (!authorization.next()) return null

        var authorizationId = authorization.getUniqueValue()
        if (authorization.next() || !authorization.get(authorizationId)) {
            fail('duplicate governed Authorization Forms exist for the case')
            return false
        }
        return authorization
    }

    function resumeAuthorizationSigning(authorization) {
        if (
            authorization &&
            supportedDecisions[current.getValue(decisionField)] &&
            current.getValue(processingBlockedField) !== '1' &&
            current.getValue(processingBlockedField) !== 'true' &&
            authorization.getValue('status') === 'pending_employee_signature'
        ) {
            return initiateAuthorizationSigning(
                'ROB Form 1768 Employee Signature',
                'ROB-Employee-Authorization-Signature-' +
                    authorization.getValue('number')
            )
        }
        return false
    }

    var current = committedSourceCase()
    if (!current) {
        return result
    }

    if (!isApprovedRobService(current)) {
        fail('the committed source HR Case is not an approved ROB HR Service')
        return result
    }
    if (!String(current.getValue(requestedItemsField) || '').trim()) {
        fail('the committed source HR Case has no requested ROB access items')
        return result
    }
    if (!String(current.getValue(decisionTimeField) || '').trim()) {
        fail('the committed R3 decision timestamp is missing')
        return result
    }

    if (
        current.getValue(processingBlockedField) === '1' ||
        current.getValue(processingBlockedField) === 'true'
    ) {
        fail('the source case is blocked for prerequisite correction')
        result.disposition = 'blocked'
        return result
    }

    var decision = current.getValue(decisionField)
    if (decision === 'exception') {
        result.disposition = 'exception'
        result.reason = 'the committed R3 decision is Exception Review'
        return result
    }
    if (decision !== 'reuse' && !supportedDecisions[decision]) {
        fail('the R3 decision is missing or unsupported')
        return result
    }

    if (verificationAuthorizationId) {
        if (decision === 'reuse') {
            fail('post-commit signing verification does not apply to Reuse')
            return result
        }

        var verifiedAuthorization = new GlideRecord(
            'x_2166123_rob_auth_rob_auth'
        )
        if (
            !verifiedAuthorization.get(verificationAuthorizationId) ||
            verifiedAuthorization.getValue('source_hrsd_case') !==
                current.getUniqueValue()
        ) {
            fail('the exact committed Authorization Form could not be reread')
            return result
        }

        var authorizationForCase = existingAuthorizationForCase()
        if (
            authorizationForCase === false ||
            !authorizationForCase ||
            authorizationForCase.getUniqueValue() !==
                String(verificationAuthorizationId) ||
            verifiedAuthorization.getValue('status') !==
                'pending_employee_signature'
        ) {
            fail('the committed Authorization Form signing gate could not be verified')
            return result
        }

        if (!resumeAuthorizationSigning(verifiedAuthorization)) {
            return result
        }
        return succeed(
            'post_commit_signing_started',
            verificationAuthorizationId,
            true
        )
    }

    var subjectId =
        current.getValue('subject_person') || current.getValue('opened_for')
    var contextResolver = new RobProfileAuthorizationContext()
    var profileContext = contextResolver.resolveFromCase(current)
    if (!subjectId || !profileContext.valid) {
        fail(
            'validated profile context is incomplete: ' +
                profileContext.errors.join(',')
        )
        return result
    }
    if (decision === 'reuse') {
        // The frozen M1 Reuse path consumes this validated current Supervisor
        // without mutating the historical Authorization Form snapshots.
        // The native decision record anchors the current case to the reused
        // Authorization Form. Approved decisions launch the supervisor-only
        // attestation; denied decisions create no signing task or governed PDF.
        var reusedAuthorizationId = current.getValue(
            relatedAuthorizationField
        )
        if (!reusedAuthorizationId) {
            fail('Reuse requires exactly one governed Authorization Form')
            return result
        }
        var reusedAuthorization = new GlideRecord(
            'x_2166123_rob_auth_rob_auth'
        )
        if (
            !reusedAuthorization.get(reusedAuthorizationId) ||
            reusedAuthorization.getValue('status') !== 'active'
        ) {
            fail('Reuse requires an Active governed Authorization Form')
            return result
        }

        var contextKey = reuseContextKey(
            reusedAuthorization,
            profileContext.supervisorId
        )
        if (
            current.getValue(
                'x_2166123_rob_auth_reuse_attestation_status'
            ) === 'approved' &&
            current.getValue(
                'x_2166123_rob_auth_reuse_attestation_context'
            ) === contextKey
        ) {
            return succeed(
                'reuse_attestation_already_approved',
                reusedAuthorizationId,
                false
            )
        }

        if (
            !initiateAuthorizationSigning(
                'ROB Reuse Supervisor Attestation',
                'ROB-Reuse-Supervisor-Attestation-' +
                    current.getValue('number')
            )
        ) {
            return result
        }

        if (
            !new sn_hr_core.RobHrCasePersistenceBridge().beginRobReuseAttestation(
                current,
                contextKey
            )
        ) {
            fail('the Reuse attestation state could not be persisted')
            return result
        }
        return succeed(
            'reuse_attestation_started',
            reusedAuthorizationId,
            true
        )
    }

    var existing = existingAuthorizationForCase()
    if (existing === false) {
        return result
    }
    if (existing) {
        return succeed(
            'existing_authorization',
            existing.getUniqueValue(),
            false
        )
    }

    var configuration = new GlideRecord('x_2166123_rob_auth_rob_config')
    configuration.addQuery('active', true)
    configuration.query()
    if (!configuration.next()) {
        fail('exactly one active ROB Configuration is required')
        return result
    }
    var formVersion = configuration.getValue('current_accepted_form_version')
    if (!formVersion || configuration.next()) {
        fail('exactly one valid active ROB Configuration is required')
        return result
    }

    var supervisorId = profileContext.supervisorId
    var positionSnapshot = profileContext.position
    var organizationSnapshot =
        profileContext.organizationId || profileContext.organization
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
        return result
    }
    if (
        (decision === 'amendment' || decision === 'renewal') &&
        !priorAuthorizationId
    ) {
        fail('a replacement decision requires its evaluated authorization')
        return result
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
            'x_2166123_rob_auth_auth_detail'
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
        return result
    }

    var scopeRecords = []
    var scopeIndex
    for (scopeIndex = 0; scopeIndex < scopeIds.length; scopeIndex += 1) {
        var accessItem = new GlideRecord('x_2166123_rob_auth_rob_access')
        if (!accessItem.get(scopeIds[scopeIndex])) {
            fail('an access item in the governed scope no longer exists')
            return result
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

    var profileContextEvidence = contextResolver.evidenceText(profileContext)
    var accessEndDate = current.getValue(prefix + 'access_end_date')
    var decisionReason = current.getValue(decisionReasonField)
    var decisionEvaluatedAt = current.getValue(decisionTimeField)
    var decisionEvidence =
        'Covered access: ' +
        current.getValue(coveredItemsField) +
        '\nUncovered access: ' +
        current.getValue(uncoveredItemsField)
    var supersedesAuthorizationId =
        decision === 'amendment' || decision === 'renewal'
            ? priorAuthorizationId
            : ''
    var authorizationId = nativeCreatedRecordId(
        'x_2166123_rob_auth.rob_create_authorization_form_native',
        {
            subject_person: subjectId,
            employee_id: employeeId,
            supervisor: supervisorId,
            organization: organizationSnapshot,
            position_title: positionSnapshot,
            profile_context_evidence: profileContextEvidence,
            employment_type: employmentType,
            access_end_date: accessEndDate,
            business_justification: businessJustification,
            authorization_action: decision,
            form_version: formVersion,
            expiration_date: expirationDate,
            source_hrsd_case: current.getUniqueValue(),
            decision_reason: decisionReason,
            decision_evaluated_at: decisionEvaluatedAt,
            evaluated_authorization: priorAuthorizationId,
            decision_evidence: decisionEvidence,
            supersedes_authorization_form: supersedesAuthorizationId,
        },
        'created_authorization_sys_id'
    )
    var authorization = new GlideRecord('x_2166123_rob_auth_rob_auth')
    if (
        !authorizationId ||
        !authorization.get(authorizationId) ||
        !recordMatches(authorization, {
            subject_person: subjectId,
            supervisor: supervisorId,
            source_hrsd_case: current.getUniqueValue(),
            authorization_action: decision,
            form_version: formVersion,
        })
    ) {
        fail('the Authorization Form could not be created')
        return result
    }
    result.created_authorization = true
    result.authorization_sys_id = String(authorizationId)

    var createdDetailIds = []
    for (scopeIndex = 0; scopeIndex < scopeRecords.length; scopeIndex += 1) {
        var scopeRecord = scopeRecords[scopeIndex]
        var existingDetail = new GlideRecord(
            'x_2166123_rob_auth_auth_detail'
        )
        existingDetail.addQuery('rob_authorization_form', authorizationId)
        existingDetail.addQuery('access_item', scopeRecord.id)
        existingDetail.setLimit(2)
        existingDetail.query()
        var detailId = ''
        if (existingDetail.next()) {
            detailId = String(existingDetail.getUniqueValue() || '')
            if (existingDetail.next()) {
                fail('duplicate governed Access Details exist for the scope')
                return result
            }
        } else {
            detailId = nativeCreatedRecordId(
                'x_2166123_rob_auth.rob_create_authorized_access_detail_native',
                {
                    source_hrsd_case: current.getUniqueValue(),
                    rob_authorization_form: authorizationId,
                    subject_person: subjectId,
                    access_item: scopeRecord.id,
                    business_justification_snapshot: businessJustification,
                    authorized_end_date: expirationDate,
                    staffing_task_required_snapshot: scopeRecord.staffing,
                    analytics_task_required_snapshot: scopeRecord.analytics,
                    operations_manager_task_required_snapshot:
                        scopeRecord.operationsManager,
                    provisioning_system_snapshot: scopeRecord.provisioning,
                    target_system_snapshot: scopeRecord.target,
                },
                'created_detail_sys_id'
            )
            if (detailId) result.created_detail_count += 1
        }
        var committedDetail = new GlideRecord(
            'x_2166123_rob_auth_auth_detail'
        )
        if (
            !detailId ||
            !committedDetail.get(detailId) ||
            !recordMatches(committedDetail, {
                source_hrsd_case: current.getUniqueValue(),
                rob_authorization_form: authorizationId,
                subject_person: subjectId,
                access_item: scopeRecord.id,
                status: 'pending_authorization',
            })
        ) {
            fail('the complete governed scope could not be created')
            return result
        }
        createdDetailIds.push(String(detailId))
    }

    if (authorization.get(authorizationId)) {
        try {
            sn_fd.FlowAPI.getRunner()
                .subflow(
                    'x_2166123_rob_auth.rob_persist_authorization_lifecycle_native'
                )
                .inForeground()
                .withInputs({
                    authorization_sys_id: authorizationId,
                    status_value: 'pending_employee_signature',
                    reminder_1_value: authorization.getValue(
                        'reminder_1_sent_date_time'
                    ),
                    reminder_2_value: authorization.getValue(
                        'reminder_2_sent_date_time'
                    ),
                    reminder_3_value: authorization.getValue(
                        'reminder_3_sent_date_time'
                    ),
                    lapse_notice_value: authorization.getValue(
                        'lapse_notice_sent_date_time'
                    ),
                    cycle_identifier: authorization.getValue(
                        'reminder_cycle_identifier'
                    ),
                })
                .run()
        } catch (statusError) {
            fail('the Authorization Form signing gate could not be persisted')
            return result
        }
        return succeed('authorization_persisted', authorizationId, false)
    }
    fail('the committed Authorization Form could not be reread')
    return result
    }

    return {
        initialize: function () {},

        executePayroll: function (caseSysId) {
            return executeFixed(caseSysId, 'sn_hr_core_case_payroll')
        },

        executeWorkforce: function (caseSysId) {
            return executeFixed(caseSysId, 'sn_hr_core_case_workforce_admin')
        },

        verifyAuthorizationSigning: function (authorizationSysId) {
            var authorizationId = String(authorizationSysId || '').trim()
            if (!/^[0-9a-f]{32}$/.test(authorizationId)) {
                return rejectedResult(
                    '',
                    'the exact Authorization Form sys_id is required'
                )
            }

            var authorization = new GlideRecord(
                'x_2166123_rob_auth_rob_auth'
            )
            if (!authorization.get(authorizationId)) {
                return rejectedResult(
                    '',
                    'the exact committed Authorization Form could not be reread'
                )
            }

            var sourceCaseId = String(
                authorization.getValue('source_hrsd_case') || ''
            )
            if (!sourceCaseId) {
                return rejectedResult(
                    '',
                    'the committed Authorization Form source case is missing'
                )
            }

            var payrollCase = new GlideRecord('sn_hr_core_case_payroll')
            if (payrollCase.get(sourceCaseId)) {
                return executeFixed(
                    sourceCaseId,
                    'sn_hr_core_case_payroll',
                    authorizationId
                )
            }

            var workforceCase = new GlideRecord(
                'sn_hr_core_case_workforce_admin'
            )
            if (workforceCase.get(sourceCaseId)) {
                return executeFixed(
                    sourceCaseId,
                    'sn_hr_core_case_workforce_admin',
                    authorizationId
                )
            }

            return rejectedResult(
                sourceCaseId,
                'the Authorization Form does not reference a supported ROB HR Case'
            )
        },

        type: 'RobAuthorizationLifecycleEntry',
    }
})()
