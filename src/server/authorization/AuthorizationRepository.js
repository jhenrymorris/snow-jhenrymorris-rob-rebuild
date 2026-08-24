'use strict'

const ACTIVE = 'active'
const HISTORICAL_NON_GOVERNING = new Set(['superseded', 'denied'])

function normalizeSet(values) {
    return [...new Set((values || []).filter(Boolean).map(String))].sort()
}

function selectApplicableAuthorization(authorizations) {
    const candidates = (authorizations || []).filter(
        (authorization) => authorization && authorization.applicable !== false
    )
    const active = candidates.filter(
        (authorization) => authorization.status === ACTIVE
    )

    if (active.length > 1) {
        return { conflict: 'EX_CONFLICTING_ACTIVE_FORMS', authorization: null }
    }

    if (active.length === 1) {
        return { conflict: '', authorization: active[0] }
    }

    const explicitlyGoverning = candidates.filter(
        (authorization) => authorization.governing === true
    )

    if (explicitlyGoverning.length > 1) {
        return { conflict: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY', authorization: null }
    }

    if (explicitlyGoverning.length === 1) {
        return { conflict: '', authorization: explicitlyGoverning[0] }
    }

    const eligibleHistory = candidates.filter(
        (authorization) => !HISTORICAL_NON_GOVERNING.has(authorization.status)
    )

    if (eligibleHistory.length > 1) {
        return { conflict: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY', authorization: null }
    }

    return {
        conflict: '',
        authorization: eligibleHistory.length === 1 ? eligibleHistory[0] : null,
    }
}

function compareAccess(requestedAccess, authorizedAccess) {
    const requested = normalizeSet(requestedAccess)
    const authorized = new Set(normalizeSet(authorizedAccess))

    return {
        coveredAccess: requested.filter((item) => authorized.has(item)),
        uncoveredAccess: requested.filter((item) => !authorized.has(item)),
    }
}

module.exports = {
    compareAccess,
    normalizeSet,
    selectApplicableAuthorization,
}
