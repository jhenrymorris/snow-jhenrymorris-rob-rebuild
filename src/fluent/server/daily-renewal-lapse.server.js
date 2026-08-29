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
        return Math.floor(gs.dateDiff(
            evaluationDate + ' 00:00:00',
            dateValue + ' 00:00:00',
            true
        ) / 86400)
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

    function persistAuthorization(authorization, expectedStatus) {
        var id = authorization.getUniqueValue()
        var result = authorization.update()
        if (!result) {
            throw new Error('Authorization update returned no sys_id for ' + id)
        }
        var committed = new GlideRecord(AUTH_TABLE)
        if (!committed.get(id)) {
            throw new Error('Authorization disappeared after update: ' + id)
        }
        if (expectedStatus && committed.getValue('status') !== expectedStatus) {
            throw new Error('Authorization status did not persist for ' + id)
        }
        return committed
    }

    function lapseDetails(authorizationId) {
        var detail = new GlideRecord(DETAIL_TABLE)
        detail.addQuery('rob_authorization_form', authorizationId)
        detail.addQuery('status', 'active')
        detail.query()
        while (detail.next()) {
            detail.setValue('status', 'lapsed')
            var detailId = detail.getUniqueValue()
            if (!detail.update()) {
                throw new Error('Detail lapse update returned no sys_id for ' + detailId)
            }
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
                authorization.setValue('status', 'lapsed')
                authorization.setValue('reminder_cycle_identifier', expirationDate)
                var sendLapse =
                    configuration.getValue('lapse_notification_enabled') === '1' &&
                    !authorization.getValue('lapse_notice_sent_date_time')
                if (sendLapse) {
                    authorization.setValue('lapse_notice_sent_date_time', new GlideDateTime())
                }
                var lapsed = persistAuthorization(authorization, 'lapsed')
                lapseDetails(lapsed.getUniqueValue())
                if (sendLapse) {
                    gs.eventQueue(LAPSE_EVENT, lapsed, '', '')
                }
                continue
            }

            var changed = false
            for (var index = 0; index < thresholds.length; index++) {
                var threshold = thresholds[index]
                if (isNaN(threshold.days) || threshold.days < 0) {
                    continue
                }
                if (remaining <= threshold.days && !authorization.getValue(threshold.field)) {
                    authorization.setValue(threshold.field, new GlideDateTime())
                    authorization.setValue('reminder_cycle_identifier', expirationDate)
                    changed = true
                }
            }
            if (changed) {
                var reminded = persistAuthorization(authorization, 'active')
                gs.eventQueue(REMINDER_EVENT, reminded, String(remaining), '')
            }
        } catch (error) {
            fail(authorization.getValue('number') + ': ' + error.message)
        }
    }
})()
