import { Record } from '@servicenow/sdk/core'

/**
 * Draft-only bootstrap for the native M3 Form 1768 template reconstruction.
 *
 * The Australia application-file creator does not expose sn_doc_pdf_template
 * for scoped applications.  Owning the empty Draft through Fluent lets the
 * Document Templates UI add the approved PDF, participants, and mappings
 * without direct metadata manipulation.  The record is renamed to the stable
 * production name only after the native readiness contract passes.
 */
export const m3Form1768TemplateCandidate = Record({
    $id: Now.ID['m3-form1768-template-candidate'],
    table: 'sn_doc_pdf_template',
    data: {
        name: 'ROB Form 1768 Authorization Candidate V2',
        table: 'sn_hr_core_case',
        active: true,
        state: 'draft',
        language: 'en',
        signing_type: 'servicenow_sign',
        attachment_type: '1',
    },
})
