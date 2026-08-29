const ACTIONS = Object.freeze({
    REMINDER: 'REMINDER',
    LAPSE: 'LAPSE',
    SUPPRESS_LAPSE: 'SUPPRESS_LAPSE',
})

const REMINDER_FIELDS = Object.freeze({
    1: 'reminder1SentAt',
    2: 'reminder2SentAt',
    3: 'reminder3SentAt',
})

function isoDay(value, label) {
    const text = String(value || '')
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
        throw new Error(`${label} must use YYYY-MM-DD`)
    }
    const date = new Date(`${text}T00:00:00.000Z`)
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== text) {
        throw new Error(`${label} is not a valid calendar date`)
    }
    return date
}

function daysBetween(fromDate, toDate) {
    return Math.round((isoDay(toDate, 'expirationDate') - isoDay(fromDate, 'evaluationDate')) / 86400000)
}

function normalizeThresholds(configuration) {
    return [1, 2, 3]
        .map((sequence) => ({
            sequence,
            days: Number(configuration[`reminder${sequence}Days`]),
            evidenceField: REMINDER_FIELDS[sequence],
        }))
        .filter((entry) => Number.isInteger(entry.days) && entry.days >= 0)
        .sort((left, right) => right.days - left.days || left.sequence - right.sequence)
}

function evaluateAuthorization(input) {
    const authorization = input.authorization || {}
    const configuration = input.configuration || {}
    const evaluationDate = String(input.evaluationDate || '')
    const expirationDate = String(authorization.expirationDate || '')

    isoDay(evaluationDate, 'evaluationDate')
    isoDay(expirationDate, 'expirationDate')

    if (authorization.status !== 'active') {
        return []
    }

    const daysRemaining = daysBetween(evaluationDate, expirationDate)
    const cycleIdentifier = expirationDate

    if (daysRemaining < 0) {
        if (authorization.activeReplacementExists === true) {
            return [{
                type: ACTIONS.SUPPRESS_LAPSE,
                authorizationId: authorization.id,
                cycleIdentifier,
            }]
        }

        return [{
            type: ACTIONS.LAPSE,
            authorizationId: authorization.id,
            cycleIdentifier,
            sendNotice:
                configuration.lapseNotificationEnabled === true &&
                !authorization.lapseNoticeSentAt,
        }]
    }

    return normalizeThresholds(configuration)
        .filter((threshold) => daysRemaining <= threshold.days)
        .filter((threshold) => !authorization[threshold.evidenceField])
        .map((threshold) => ({
            type: ACTIONS.REMINDER,
            authorizationId: authorization.id,
            sequence: threshold.sequence,
            thresholdDays: threshold.days,
            evidenceField: threshold.evidenceField,
            cycleIdentifier,
            daysRemaining,
        }))
}

module.exports = {
    ACTIONS,
    daysBetween,
    evaluateAuthorization,
    normalizeThresholds,
}
