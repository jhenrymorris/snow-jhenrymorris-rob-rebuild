(function () {
    var AUTH_TABLE = 'x_2166123_rob_auth_rob_auth'
    var DETAIL_TABLE = 'x_2166123_rob_auth_auth_detail'
    var CONFIG_TABLE = 'x_2166123_rob_auth_rob_config'
    var REMINDER_EVENT = 'x_2166123_rob_auth.renewal'
    var LAPSE_EVENT = 'x_2166123_rob_auth.lapse'

    function fail(message) {
        gs.error('ROB daily renewal/lapse: ' + message)
    }

    function today() {
        return new GlideDate().getValue()
    }

    function daysUntil(dateValue, evaluationDate) {
        var evaluation = new GlideDateTime(evaluationDate + ' 00:00:00')
        var expiration = new GlideDateTime(dateValue + ' 00:00:00')
        return Math.floor(GlideDateTime.subtract(evaluation, expiration).getNumericValue() / 86400000)
    }

    function activeReplacementExists(authorization) {
        var replacement = new GlideRecord(AUTH_TABLE)
        replacement.addQuery('subject_person', authorization.getValue('subject_person'))
        replacement.addQuery('status', 'active')
        replacement.addQuery('sys_id', '!=', authorization.getUniqueValue())
        replacement.addQuery('supersedes_authorization_form', authorization.getUniqueValue())
        replacement.setLimit(1)
        replacement.query()
        return replacement.hasNext()
    }

    function persistAuthorization(authorization, values, expectedStatus) {
        var id = authorization.getUniqueValue()
        sn_fd.FlowAPI.getRunner()
            .subflow('x_2166123_rob_auth.rob_persist_authorization_lifecycle_native')
            .inForeground()
            .withInputs({
                authorization_sys_id: id,
                status_value: values.status,
                reminder_1_value: values.reminder1,
                reminder_2_value: values.reminder2,
                reminder_3_value: values.reminder3,
                lapse_notice_value: values.lapseNotice,
                cycle_identifier: values.cycle,
            })
            .run()
        var committed = new GlideRecord(AUTH_TABLE)
        if (!committed.get(id)) {
            throw new Error('Authorization disappeared after update: ' + id)
        }
        if (expectedStatus && committed.getValue('status') !== expectedStatus) {
            throw new Error('Authorization status did not persist for ' + id)
        }
        return committed
    }

    function authorizationValues(authorization) {
        return {
            status: authorization.getValue('status'),
            reminder1: authorization.getValue('reminder_1_sent_date_time'),
            reminder2: authorization.getValue('reminder_2_sent_date_time'),
            reminder3: authorization.getValue('reminder_3_sent_date_time'),
            lapseNotice: authorization.getValue('lapse_notice_sent_date_time'),
            cycle: authorization.getValue('reminder_cycle_identifier'),
        }
    }

    function lapseDetails(authorizationId) {
        var detail = new GlideRecord(DETAIL_TABLE)
        detail.addQuery('rob_authorization_form', authorizationId)
        detail.addQuery('status', 'active')
        detail.query()
        while (detail.next()) {
            var detailId = detail.getUniqueValue()
            sn_fd.FlowAPI.getRunner()
                .subflow('x_2166123_rob_auth.rob_lapse_authorized_access_detail_native')
                .inForeground()
                .withInputs({
                    access_detail: detail,
                    status_value: 'lapsed',
                })
                .run()
            var committed = new GlideRecord(DETAIL_TABLE)
            if (!committed.get(detailId) || committed.getValue('status') !== 'lapsed') {
                throw new Error('Detail lapse status did not persist for ' + detailId)
            }
        }
    }

    var configuration = new GlideRecord(CONFIG_TABLE)
    configuration.addQuery('active', true)
    configuration.orderBy('sys_created_on')
    configuration.setLimit(2)
    configuration.query()
    if (!configuration.next()) {
        fail('no active ROB Configuration exists')
        return
    }
    if (configuration.hasNext()) {
        fail('multiple active ROB Configuration records exist')
        return
    }

    var evaluationDate = today()
    var thresholds = [
        { sequence: 1, days: parseInt(configuration.getValue('renewal_reminder_1_days'), 10), field: 'reminder_1_sent_date_time' },
        { sequence: 2, days: parseInt(configuration.getValue('renewal_reminder_2_days'), 10), field: 'reminder_2_sent_date_time' },
        { sequence: 3, days: parseInt(configuration.getValue('renewal_reminder_3_days'), 10), field: 'reminder_3_sent_date_time' },
    ]

    var authorization = new GlideRecord(AUTH_TABLE)
    authorization.addQuery('status', 'active')
    authorization.addNotNullQuery('expiration_date')
    authorization.query()
    while (authorization.next()) {
        try {
            var expirationDate = authorization.getValue('expiration_date')
            var remaining = daysUntil(expirationDate, evaluationDate)
            var cycle = authorization.getValue('reminder_cycle_identifier')
            if (cycle && cycle !== expirationDate) {
                fail('cycle mismatch for ' + authorization.getValue('number'))
                continue
            }

            if (remaining < 0) {
                if (activeReplacementExists(authorization)) {
                    continue
                }
                var lapseValues = authorizationValues(authorization)
                lapseValues.status = 'lapsed'
                lapseValues.cycle = expirationDate
                var sendLapse =
                    configuration.getValue('lapse_notification_enabled') === '1' &&
                    !authorization.getValue('lapse_notice_sent_date_time')
                if (sendLapse) {
                    lapseValues.lapseNotice = new GlideDateTime().getValue()
                }
                var lapsed = persistAuthorization(authorization, lapseValues, 'lapsed')
                lapseDetails(lapsed.getUniqueValue())
                if (sendLapse) {
                    gs.eventQueue(LAPSE_EVENT, lapsed, '', '')
                }
                continue
            }

            var changed = false
            var reminderValues = authorizationValues(authorization)
            for (var index = 0; index < thresholds.length; index++) {
                var threshold = thresholds[index]
                if (isNaN(threshold.days) || threshold.days < 0) {
                    continue
                }
                if (remaining <= threshold.days && !authorization.getValue(threshold.field)) {
                    reminderValues['reminder' + threshold.sequence] = new GlideDateTime().getValue()
                    reminderValues.cycle = expirationDate
                    changed = true
                }
            }
            if (changed) {
                var reminded = persistAuthorization(authorization, reminderValues, 'active')
                gs.eventQueue(REMINDER_EVENT, reminded, String(remaining), '')
            }
        } catch (error) {
            fail(authorization.getValue('number') + ': ' + error.message)
        }
    }
})()
