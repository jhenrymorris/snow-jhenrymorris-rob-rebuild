(function executeRule(current) {
    var productionTemplateName = 'ROB Form 1768 Authorization'

    function isTrue(value) {
        return value === '1' || value === 'true'
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

    if (state !== '3' || String(current.getValue('body') || '').indexOf('APPROVED') < 0) {
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
    authorization.update()
})(current)
