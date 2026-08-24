'use strict'

const SUPPORTED_DECISIONS = new Set([
    'NEW',
    'REUSE',
    'AMENDMENT',
    'RENEWAL',
    'EXCEPTION',
])

function normalize(values) {
    return [...new Set((values || []).filter(Boolean).map(String))].sort()
}

function completeScope(input) {
    const decisionClass = String(input.decisionClass || '').toUpperCase()
    const requested = normalize(input.requestedAccess)
    const prior = normalize(input.priorAuthorizedAccess)

    if (!SUPPORTED_DECISIONS.has(decisionClass)) {
        throw new Error('Unsupported authorization decision')
    }

    if (decisionClass === 'EXCEPTION') return []
    if (decisionClass === 'REUSE') return prior
    if (decisionClass === 'NEW') return requested

    return normalize([...prior, ...requested])
}

function detailPlan(input) {
    if (String(input.decisionClass || '').toUpperCase() === 'REUSE') return []

    return completeScope(input).map((accessItemId) => ({
        accessItemId,
        status: 'pending_authorization',
    }))
}

module.exports = { completeScope, detailPlan, normalize }
