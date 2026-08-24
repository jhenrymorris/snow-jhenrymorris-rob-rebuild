(function executeRule(current) {
    var exceptionTask = new GlideRecord('sn_hr_core_task')
    exceptionTask.addQuery('parent', current.getUniqueValue())
    exceptionTask.addQuery(
        'x_2166123_rob_auth_rob_task_type',
        'exception_review'
    )
    exceptionTask.setLimit(1)
    exceptionTask.query()

    if (exceptionTask.next()) {
        return
    }

    var assignmentGroup = ''
    var configuration = new GlideRecord('x_2166123_rob_auth_rob_config')
    configuration.addQuery('active', true)
    configuration.setLimit(1)
    configuration.query()

    if (configuration.next()) {
        assignmentGroup = configuration.getValue(
            'default_exception_review_group'
        )
    }

    exceptionTask.initialize()
    exceptionTask.setValue('parent', current.getUniqueValue())
    exceptionTask.setValue(
        'x_2166123_rob_auth_rob_task_type',
        'exception_review'
    )
    exceptionTask.setValue(
        'short_description',
        'Review ROB intake prerequisite exception'
    )
    exceptionTask.setValue(
        'description',
        'Correct the recorded ROB intake prerequisite identified on the parent case. Profile-derived values must use the controlled ROB snapshot correction action. Authorization, signatures, and fulfillment remain blocked.'
    )

    if (assignmentGroup) {
        exceptionTask.setValue('assignment_group', assignmentGroup)
    }

    exceptionTask.insert()
})(current)
