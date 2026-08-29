const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const root = path.resolve(__dirname, '..', '..')
const service = require(path.join(root, 'src/server/renewal/RenewalLapseService.js'))

const configuration = {
    reminder1Days: 90,
    reminder2Days: 60,
    reminder3Days: 30,
    lapseNotificationEnabled: true,
}

function authorization(overrides = {}) {
    return {
        id: 'synthetic-auth',
        status: 'active',
        expirationDate: '2027-09-30',
        activeReplacementExists: false,
        reminder1SentAt: '',
        reminder2SentAt: '',
        reminder3SentAt: '',
        lapseNoticeSentAt: '',
        ...overrides,
    }
}

test('90-day boundary queues only the first reminder', () => {
    const actions = service.evaluateAuthorization({
        authorization: authorization(),
        configuration,
        evaluationDate: '2027-07-02',
    })
    assert.deepEqual(actions.map((action) => action.sequence), [1])
})

test('late daily execution queues each missing governed threshold once', () => {
    const actions = service.evaluateAuthorization({
        authorization: authorization({ reminder1SentAt: '2027-07-02 02:00:00' }),
        configuration,
        evaluationDate: '2027-09-01',
    })
    assert.deepEqual(actions.map((action) => action.sequence), [2, 3])
})

test('retry emits no reminder after all threshold evidence exists', () => {
    const actions = service.evaluateAuthorization({
        authorization: authorization({
            reminder1SentAt: 'a',
            reminder2SentAt: 'b',
            reminder3SentAt: 'c',
        }),
        configuration,
        evaluationDate: '2027-09-15',
    })
    assert.equal(actions.length, 0)
})

test('expired authorization lapses and sends one notice', () => {
    const actions = service.evaluateAuthorization({
        authorization: authorization(),
        configuration,
        evaluationDate: '2027-10-01',
    })
    assert.deepEqual(actions, [{
        type: service.ACTIONS.LAPSE,
        authorizationId: 'synthetic-auth',
        cycleIdentifier: '2027-09-30',
        sendNotice: true,
    }])
})

test('lapse notice retry remains idempotent', () => {
    const actions = service.evaluateAuthorization({
        authorization: authorization({ lapseNoticeSentAt: '2027-10-01 02:00:00' }),
        configuration,
        evaluationDate: '2027-10-02',
    })
    assert.equal(actions[0].sendNotice, false)
})

test('active replacement suppresses lapse and notice', () => {
    const actions = service.evaluateAuthorization({
        authorization: authorization({ activeReplacementExists: true }),
        configuration,
        evaluationDate: '2027-10-01',
    })
    assert.equal(actions[0].type, service.ACTIONS.SUPPRESS_LAPSE)
})

test('historical and non-active records are immutable', () => {
    for (const status of ['denied', 'superseded', 'revoked', 'lapsed']) {
        assert.equal(service.evaluateAuthorization({
            authorization: authorization({ status }),
            configuration,
            evaluationDate: '2027-10-01',
        }).length, 0)
    }
})

test('invalid dates fail closed', () => {
    assert.throws(() => service.evaluateAuthorization({
        authorization: authorization({ expirationDate: '2027-02-30' }),
        configuration,
        evaluationDate: '2027-01-01',
    }))
})

test('scheduled job is daily, configuration-driven, and contains no external provisioning', () => {
    const metadata = fs.readFileSync(path.join(root, 'src/fluent/scheduled/rob-daily-renewal-lapse.now.ts'), 'utf8')
    const runtime = fs.readFileSync(path.join(root, 'src/fluent/server/daily-renewal-lapse.server.js'), 'utf8')
    assert.match(metadata, /frequency:\s*'daily'/)
    assert.match(runtime, /renewal_reminder_1_days/)
    assert.match(runtime, /activeReplacementExists/)
    assert.doesNotMatch(runtime, /RESTMessage|sn_ws|https?:\/\//)
})

test('notifications are privacy-safe and never attach PDFs', () => {
    const source = fs.readFileSync(path.join(root, 'src/fluent/notifications/rob-renewal-notifications.now.ts'), 'utf8')
    assert.match(source, /includeAttachments:\s*false/g)
    assert.match(source, /\$\{URI_REF\}/)
    assert.doesNotMatch(source, /business_justification|signature_|final_pdf_attachment|SSN/i)
})

test('governed record ACLs deny broad repository and edit access', () => {
    const source = fs.readFileSync(path.join(root, 'src/fluent/security/rob-governed-record-acls.now.ts'), 'utf8')
    assert.match(source, /rob_compliance_viewer/)
    assert.match(source, /subject_person/)
    assert.match(source, /staffing_fulfillment/)
    assert.match(source, /analytics_fulfillment/)
    assert.doesNotMatch(source, /rob_operations_manager.*hasAssignedRole/)
    assert.doesNotMatch(source, /operation:\s*'delete'/)
    assert.doesNotMatch(source, /GlideRecord\.setValue|GlideRecord\.update|GlideRecord\.insert/)
})
