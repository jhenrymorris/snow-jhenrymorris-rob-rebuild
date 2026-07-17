import {
    Table,
    ReferenceColumn,
    GenericColumn,
    IntegerColumn,
    BooleanColumn,
    DecimalColumn,
    ListColumn,
    StringColumn,
    HtmlColumn,
    JsonColumn,
    DateTimeColumn,
    OverrideColumn,
} from '@servicenow/sdk/core'

export const sn_hr_core_case = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        display_image: 'opened_for',
        email_client: true,
        kagami_csindex_enabled: true,
        live_feed: true,
        use_document_viewer: true,
    },
    audit: true,
    autoNumber: {
        prefix: 'HRC',
    },
    callerAccess: 'restricted',
    extends: 'task',
    extensible: true,
    label: 'HR Case',
    name: 'sn_hr_core_case',
    schema: {
        hr_service: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            dependent: 'topic_detail',
            label: 'HR service',
            mandatory: true,
            referenceTable: 'sn_hr_core_service',
            referenceQual: 'javascript:new hr_CaseHierarchyUtils().getQueryToLimitServices(current)',
            useReferenceQualifier: 'simple',
        }),
        stage: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'Lifecycle Event Activity Set',
                    label: 'Stage',
                    plural: 'Stages',
                },
            ],
            referenceTable: 'sn_hr_le_activity_set',
            referenceQual: 'javascript:new sn_hr_le.hr_LERefQual().stageActivitySetRefQual();',
            useReferenceQualifier: 'simple',
        }),
        jny_context: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Journey',
            readOnly: true,
            referenceTable: 'sn_jny_journey',
        }),
        resolution_requires: GenericColumn({
            columnType: 'Choice',
            choices: {
                critical: {
                    label: 'Urgent agent action',
                    sequence: 10,
                },
                noncritical: {
                    label: 'Self-Service content only',
                    sequence: 20,
                },
                inconclusive: {
                    label: 'Non-Urgent agent action',
                    sequence: 30,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    hint: 'Type of agent intervention needed to resolve case',
                    label: 'Resolution requires',
                    plural: 'Resolution requires',
                },
            ],
        }),
        display_order: IntegerColumn({
            attributes: {
                ref_contributions: 'sn_hr_le_activity_set_display_order',
            },
            label: [
                {
                    hint: 'Set the display order of activity',
                    label: 'Display order',
                    plural: 'Display orders',
                },
            ],
        }),
        topic_category: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Topic category',
            mandatory: true,
            referenceTable: 'sn_hr_core_topic_category',
            referenceQual: "javascript:'coe='+current.sys_class_name",
            useReferenceQualifier: 'simple',
        }),
        sla_breached: BooleanColumn({
            label: 'SLA breached',
            readOnly: true,
        }),
        ettr: DecimalColumn({
            label: [
                {
                    hint: 'Estimated resolution time in days for case completion. Estimate is based on the time taken for resolving similar HR cases.',
                    label: 'ETTR in days',
                    plural: 'ETTR in days',
                },
            ],
            maxLength: 15,
            readOnly: true,
        }),
        collaborators: ListColumn({
            attributes: {
                array: 'denormalized',
                no_email: true,
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            label: [
                {
                    hint: 'List of collaborators for the case',
                    label: 'Collaborators',
                    plural: 'Collaborators',
                },
            ],
            maxLength: 1024,
            referenceTable: 'sys_user',
            referenceQual: 'javascript:new hr_CaseHierarchyUtils().getQueryToLimitUsersWithCaseWriterRole(current)',
            useReferenceQualifier: 'simple',
        }),
        opened_for: ReferenceColumn({
            attributes: {
                readonly_clickthrough: true,
                ref_contributions: 'sn_hr_core_show_hr_profile',
            },
            label: [
                {
                    hint: 'Person this request was opened for',
                    label: 'Opened for',
                    plural: 'Opened for',
                },
            ],
            mandatory: true,
            referenceTable: 'sys_user',
            referenceQual: 'javascript:new sn_hr_core.hr_Utils().getOpenedForUsers()',
        }),
        payload: StringColumn({
            label: 'Payload',
            maxLength: 4000,
        }),
        pending_approval_action: GenericColumn({
            columnType: 'workflow',
            choices: {
                awaiting_reapproval: {
                    label: 'Awaiting resubmission of approvals',
                    sequence: 0,
                    hint: 'Approval step is waiting for an agent to resubmit approval request',
                },
                generating_approvals: {
                    label: 'Generating approvals',
                    sequence: 2,
                    hint: 'Approval step is generating approvals and awaiting responses',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Pending approval action',
            maxLength: 80,
        }),
        actual_resolution_time: DecimalColumn({
            label: [
                {
                    hint: 'Actual time taken in days for completion of HR cases.',
                    label: 'Actual resolution time',
                    plural: 'Actual resolution times',
                },
            ],
            maxLength: 15,
            readOnly: true,
        }),
        auto_initiate_doc_tasks: BooleanColumn({
            default: false,
            label: 'Automatically initiate document tasks',
        }),
        document_template: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'Document template to be used',
                    label: 'Document template',
                    plural: 'Document templates',
                },
            ],
            referenceTable: 'sn_doc_template',
            referenceQual:
                'javascript: new HRDocumentTemplateUtils().getFilteredTemplatesCondition(current.document_template_category, current.subject_person, current.getRecordClassName())',
            useReferenceQualifier: 'simple',
        }),
        details: GenericColumn({
            attributes: {
                encode_utf8: false,
            },
            columnType: 'translated_html',
            label: 'Details',
            maxLength: 65536,
        }),
        bulk_case_request: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            cascadeRule: 'none',
            label: [
                {
                    hint: 'Bulk case request that the HR case is associated with',
                    label: 'Bulk case request',
                    plural: 'Bulk case requests',
                },
            ],
            referenceTable: 'sn_hr_core_bulk_case_request',
        }),
        sla: GenericColumn({
            columnType: 'percent_complete',
            default: '0',
            label: 'SLA',
            maxLength: 15,
            readOnly: true,
        }),
        template_invoked: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Indicates whether the template field has been applied to this record',
                    label: 'Template invoked',
                    plural: 'Template invoked',
                },
            ],
            readOnly: true,
        }),
        html_template_body_override: GenericColumn({
            attributes: {
                convert_urls: false,
                serializer: 'com.glide.script.TranslatedTextXMLSerializer',
            },
            columnType: 'html_script',
            label: [
                {
                    hint: 'Html template body',
                    label: 'HTML template body override',
                    plural: 'HTML template body overrides',
                },
            ],
            maxLength: 8000,
        }),
        max_ettr: IntegerColumn({
            label: [
                {
                    hint: 'Maximum estimated resolution time in days for case completion. Estimate is based on the time taken for resolving similar HR cases.',
                    label: 'Max ETTR in days',
                    plural: 'Max ETTR in days',
                },
            ],
            readOnly: true,
        }),
        topic_detail: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            dependent: 'topic_category',
            label: 'Topic detail',
            mandatory: true,
            referenceTable: 'sn_hr_core_topic_detail',
            referenceQual: "javascript:'topic_category.coe='+current.sys_class_name",
            useReferenceQualifier: 'simple',
        }),
        skip_auto_assign: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Use this when Workflow is being used to manage assignment',
                    label: 'Skip auto assign',
                    plural: 'Skip auto assigns',
                },
            ],
        }),
        min_ettr: IntegerColumn({
            label: [
                {
                    hint: 'Minimum estimated resolution time in days for case completion. Estimate is based on the time taken for resolving similar HR cases.',
                    label: 'Min ETTR in days',
                    plural: 'Min ETTR in days',
                },
            ],
            readOnly: true,
        }),
        transferred_to: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Transferred to',
            readOnly: true,
            referenceTable: 'task',
        }),
        employee_percent_complete: GenericColumn({
            columnType: 'percent_complete',
            default: '0',
            label: [
                {
                    hint: 'Completion status of work required by employee',
                    label: 'Employee percent complete',
                    plural: 'Employee percent completes',
                },
            ],
            maxLength: 15,
        }),
        fulfillment_instructions: GenericColumn({
            attributes: {
                encode_utf8: false,
                serializer: 'com.glide.script.TranslatedTextXMLSerializer',
            },
            columnType: 'translated_html',
            label: 'Fulfillment instructions',
            maxLength: 8000,
            readOnly: true,
        }),
        submitter_can_cancel: BooleanColumn({
            default: true,
            label: 'Submitter can cancel',
        }),
        workflow: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Workflow',
            referenceTable: 'wf_workflow',
        }),
        predicted_hr_service: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Predicted HR service',
            readOnly: true,
            referenceTable: 'sn_hr_core_service',
        }),
        subject_person_job: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'Job of the subject_person user',
                    label: 'Subject person job',
                    plural: 'Subject person jobs',
                },
            ],
            referenceTable: 'sn_hr_core_job',
        }),
        task_percent_complete: GenericColumn({
            columnType: 'percent_complete',
            default: '0',
            label: [
                {
                    hint: 'Calculated on the completion status of related tasks',
                    label: 'Task percent complete',
                    plural: 'Task percent completes',
                },
            ],
            maxLength: 15,
            readOnly: true,
        }),
        workflow_type: StringColumn({
            choices: {
                flow: {
                    label: 'Flow',
                    sequence: 0,
                },
                workflow: {
                    label: 'Workflow',
                    sequence: 1,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Workflow type',
            maxLength: 50,
        }),
        department: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Department',
            referenceTable: 'cmn_department',
        }),
        doc_tasks_initiated: BooleanColumn({
            default: false,
            label: 'Document tasks initiated',
        }),
        initiated_from: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Initiated from',
            readOnly: true,
            referenceTable: 'task',
        }),
        template: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Template',
            referenceTable: 'sn_hr_core_template',
            referenceQual: "javascript:'active=true^tableIN' + hr.TABLE_CASE_EXTENSIONS",
            useReferenceQualifier: 'simple',
        }),
        skip_automatic_user_acceptance_state: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Use this to skip automatically transitioning to the Awaiting Acceptance state',
                    label: 'Skip automatic user acceptance state',
                    plural: 'Skip automatic user acceptance states',
                },
            ],
        }),
        document_template_category: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'Document template category associated with the case',
                    label: 'Document template category',
                    plural: 'Document template categories',
                },
            ],
            referenceTable: 'sn_doc_template_category',
        }),
        sla_suspended_for: StringColumn({
            label: [
                {
                    hint: 'Person, Company or Group we are suspending SLA for',
                    label: 'Suspended for',
                    plural: 'Suspended for',
                },
            ],
        }),
        transferred_from: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Transferred from',
            readOnly: true,
            referenceTable: 'sn_hr_core_case',
        }),
        rich_description: HtmlColumn({
            label: 'Description',
            maxLength: 8000,
        }),
        rtbi_report_template: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'The pdf template to be used for generating the RTBI report',
                    label: 'RTBI report template',
                    plural: 'RTBI report templates',
                },
            ],
            referenceTable: 'sn_rtbi_report_template',
            referenceQual: 'state=published',
            useReferenceQualifier: 'simple',
        }),
        sla_suspended: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Indicates whether the SLA clock is running or is suspended',
                    label: 'Suspended',
                    plural: 'Suspended',
                },
            ],
            readOnly: true,
        }),
        case_reassignment_count: IntegerColumn({
            default: '0',
            label: 'Case reassignment count',
        }),
        approval_flow_params: JsonColumn({
            label: [
                {
                    hint: 'Apporval Param field used in approval flow',
                    label: 'Approval flow params',
                    plural: 'Approval flow params',
                },
            ],
            maxLength: 10000,
        }),
        hr_profile: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'HR Profile of the opened_for user',
                    label: 'HR profile',
                    plural: 'HR profiles',
                },
            ],
            referenceTable: 'sn_hr_core_profile',
        }),
        generated_document: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            cascadeRule: 'none',
            label: [
                {
                    hint: 'Attached generated document',
                    label: 'Generated Document',
                    plural: 'Generated Documents',
                },
            ],
            referenceTable: 'sys_attachment',
        }),
        sla_suspended_on: DateTimeColumn({
            label: [
                {
                    hint: 'Date and time on which the SLA clock got suspended',
                    label: 'Suspended on',
                    plural: 'Suspended ons',
                },
            ],
        }),
        subject_person_hr_profile: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'HR Profile of the subject_person user',
                    label: 'Subject person HR profile',
                    plural: 'Subject person HR profiles',
                },
            ],
            referenceTable: 'sn_hr_core_profile',
        }),
        case_support_team: ListColumn({
            attributes: {
                array: 'denormalized',
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            label: [
                {
                    hint: 'Point of contact(s) for this case',
                    label: 'Case support team',
                    plural: 'Case support teams',
                },
            ],
            maxLength: 1024,
            referenceTable: 'sys_user',
            referenceQual: 'active=true^EQ',
            useReferenceQualifier: 'simple',
        }),
        subject_person: ReferenceColumn({
            attributes: {
                readonly_clickthrough: true,
                ref_contributions: 'sn_hr_core_show_hr_profile',
            },
            label: [
                {
                    hint: 'Person that is the subject of this request',
                    label: 'Subject person',
                    plural: 'Subject persons',
                },
            ],
            referenceTable: 'sys_user',
            referenceQual: 'javascript:new sn_hr_core.hr_Utils().getSubjectPersonUsers()',
        }),
        source: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Source',
            referenceTable: 'sn_hr_integrations_source',
        }),
        workflow_invoked: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Is the template workflow invoked',
                    label: 'Workflow invoked',
                    plural: 'Workflow invoked',
                },
            ],
            readOnly: true,
        }),
        sla_suspended_reason: StringColumn({
            choices: {
                user: {
                    label: 'User',
                    sequence: 0,
                    dependentValue: 'sys_user',
                    hint: 'Please specify User we are suspending SLA for',
                },
                company: {
                    label: 'Company',
                    sequence: 1,
                    dependentValue: 'core_company',
                    hint: 'Please specify Company we are suspending SLA for',
                },
                group: {
                    label: 'Group',
                    sequence: 3,
                    dependentValue: 'sys_user_group',
                    hint: 'Please specify User Group we are suspending SLA for',
                },
                other: {
                    label: 'Other',
                    sequence: 999,
                    hint: 'Please specify what we are suspending SLA for',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Suspended reason',
        }),
        service_activities_triggered: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Indicates whether the flow has been triggered to execute service activities',
                    label: 'Service activities triggered',
                    plural: 'Service activities triggered',
                },
            ],
            readOnly: true,
        }),
        number: OverrideColumn({
            baseTable: 'task',
        }),
        assigned_to: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: '',
            attributes: {
                ref_qual_elements: 'sys_id',
                readonly_clickthrough: true,
            },
        }),
        watch_list: OverrideColumn({
            baseTable: 'task',
            attributes: {
                no_email: true,
            },
        }),
        priority: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),
        state: OverrideColumn({
            baseTable: 'task',
            default: '1',
            attributes: {
                close_states: '3;4;7;202',
                default_close_state: 3,
                default_work_state: 18,
            },
        }),
        short_description: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
            attributes: {
                no_truncate: true,
                knowledge_search: true,
                knowledge_custom: 'customKnowledgeSearch',
                ts_weight: 10,
            },
        }),
        parent: OverrideColumn({
            baseTable: 'task',
            referenceQualifier:
                "javascript:'sys_id!='+current.sys_id+'^sys_class_nameINSTANCEOFsn_hr_core_case^ORsys_class_name=sc_request'",
        }),
        assignment_group: OverrideColumn({
            baseTable: 'task',
            referenceQualifier:
                'active=true^typeLIKE7a5370019f22120047a2d126c42e705c^ORtypeLIKEba5370019f22120047a2d126c42e705c',
        }),
        opened_by: OverrideColumn({
            baseTable: 'task',
        }),
    },
})
