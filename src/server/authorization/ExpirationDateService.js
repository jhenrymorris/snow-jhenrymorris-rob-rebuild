'use strict'

function parseDate(value, label) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) {
        throw new Error(`${label} must use YYYY-MM-DD`)
    }

    const date = new Date(`${value}T00:00:00.000Z`)

    if (Number.isNaN(date.getTime())) {
        throw new Error(`${label} is invalid`)
    }

    return date
}

function formatDate(date) {
    return date.toISOString().slice(0, 10)
}

function addYears(date, years) {
    const result = new Date(date.getTime())
    result.setUTCFullYear(result.getUTCFullYear() + years)
    return result
}

function daysBetween(start, end) {
    return Math.floor((end.getTime() - start.getTime()) / 86400000)
}

function calculateProposedExpiration(input) {
    const evaluationDate = parseDate(input.evaluationDate, 'evaluationDate')
    let recertificationDate = parseDate(
        input.annualRecertificationDate,
        'annualRecertificationDate'
    )
    const graceWindowDays = Number(input.graceWindowDays)

    if (!Number.isInteger(graceWindowDays) || graceWindowDays < 0) {
        throw new Error('graceWindowDays must be a non-negative integer')
    }

    while (recertificationDate < evaluationDate) {
        recertificationDate = addYears(recertificationDate, 1)
    }

    const daysUntilRecertification = daysBetween(
        evaluationDate,
        recertificationDate
    )

    if (daysUntilRecertification <= graceWindowDays) {
        recertificationDate = addYears(recertificationDate, 1)
    }

    if (input.accessEndDate) {
        const accessEndDate = parseDate(input.accessEndDate, 'accessEndDate')

        if (accessEndDate < recertificationDate) {
            return formatDate(accessEndDate)
        }
    }

    return formatDate(recertificationDate)
}

module.exports = { calculateProposedExpiration }
