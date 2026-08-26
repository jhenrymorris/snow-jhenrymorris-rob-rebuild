import { Record } from '@servicenow/sdk/core'

/**
 * Inactive historical record retained to preserve its generated identity.
 *
 * Australia ServiceNow Sign participants use Fill/Review, and participant
 * authoring belongs to the native Document Templates configuration surface.
 * This scoped candidate is therefore not a production deployment artifact.
 */
export const m3Form1768TemplateCandidate = Record({
    $id: Now.ID['m3-form1768-template-candidate'],
    table: 'sn_doc_pdf_template',
    data: {
        name: 'ROB Form 1768 Candidate - Retired Unsupported Scope',
        table: 'sn_hr_core_case',
        active: false,
        state: 'draft',
        language: 'en',
        signing_type: 'servicenow_sign',
        attachment_type: '1',
    },
})
