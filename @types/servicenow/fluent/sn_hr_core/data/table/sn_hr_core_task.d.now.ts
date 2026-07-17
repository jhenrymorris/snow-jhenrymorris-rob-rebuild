import {
    Table,
    ReferenceColumn,
    IntegerColumn,
    DateTimeColumn,
    BooleanColumn,
    StringColumn,
    HtmlColumn,
    ListColumn,
    GenericColumn,
    UrlColumn,
    DocumentIdColumn,
    TableNameColumn,
    TranslatedTextColumn,
    DateColumn,
    OverrideColumn,
} from '@servicenow/sdk/core'

export const sn_hr_core_task = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        display_image: 'assigned_to',
        email_client: true,
        live_feed: true,
        use_document_viewer: true,
    },
    audit: true,
    autoNumber: {
        prefix: 'HRT',
    },
    callerAccess: 'restricted',
    extends: 'task',
    label: 'HR Task',
    name: 'sn_hr_core_task',
    schema: {
        depends_on: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Depends on',
            referenceTable: 'task',
        }),
        days_due_before_start: IntegerColumn({
            label: [
                {
                    hint: 'Number of days until prospective employee starts',
                    label: 'Days due before start',
                    plural: 'Days due before starts',
                },
            ],
        }),
        hr_task_document: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Acknowledgement document',
            referenceTable: 'dms_document',
            referenceQual: 'document.department=93b25282c0a8000b0b55c8ab34e2f1e6^EQ',
            useReferenceQualifier: 'simple',
        }),
        hr_service: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'HR Service',
            referenceTable: 'sn_hr_core_service',
            referenceQual: "javascript:'value!='+sn_hr_core.hr.BULK_PARENT_CASE_SERVICE",
            useReferenceQualifier: 'simple',
        }),
        start_date: DateTimeColumn({
            label: 'Start date',
        }),
        auto_create_plan: BooleanColumn({
            default: false,
            label: [
                {
                    hint: "Create plan automatically without user's intervention",
                    label: 'Create plan automatically',
                    plural: 'Create plan automaticallies',
                },
            ],
        }),
        ja_plan: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Journey accelerator action plan',
            referenceTable: 'sn_ja_plan',
        }),
        external_attendees: BooleanColumn({
            label: 'External attendees',
        }),
        meeting_subject: StringColumn({
            label: [
                {
                    hint: 'Subject of the meeting',
                    label: 'Meeting subject',
                    plural: 'Meeting subjects',
                },
            ],
            maxLength: 160,
        }),
        rich_description: HtmlColumn({
            label: 'Description',
            maxLength: 8000,
        }),
        jny_context: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'Journey reference record that is associated to the HR case',
                    label: 'Journey',
                    plural: 'Journeys',
                },
            ],
            referenceTable: 'sn_jny_journey',
        }),
        employee_form: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Employee form',
            referenceTable: 'sn_hr_core_employee_form',
            referenceQual: 'active=true^form_definition.publish_state=published^EQ',
            useReferenceQualifier: 'simple',
        }),
        parent_case_users: ListColumn({
            attributes: {
                array: 'denormalized',
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            default: 'Assigned to',
            label: [
                {
                    hint: 'Add users or groups from parent case',
                    label: 'Parent case users',
                    plural: 'Parent case users',
                },
            ],
            maxLength: 1024,
            referenceTable: 'sn_hr_core_service_approval_option',
            referenceQual: 'active=true^EQ',
            useReferenceQualifier: 'simple',
        }),
        set_reminder: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Send a reminder email to task assignee before task due date',
                    label: 'Set reminder',
                    plural: 'Set reminders',
                },
            ],
        }),
        hr_task_type: StringColumn({
            choices: {
                hr_service: {
                    label: 'HR Service',
                    sequence: 4,
                    hint: 'Employee needs to fill and submit an HR Service',
                },
                submit_catalog_item: {
                    label: 'Submit Catalog Item',
                    sequence: 5,
                    hint: 'Employee needs to fill and submit a catalog item',
                },
                submit_order_guide: {
                    label: 'Submit Order Guide',
                    sequence: 6,
                    hint: 'Employee needs to fill and submit an order guide',
                },
                collect_Information: {
                    label: 'Collect Employee Input',
                    sequence: 7,
                    hint: 'Employee needs to fill information and submit',
                },
                checklist: {
                    label: 'Checklist',
                    sequence: 10,
                    hint: 'Define a checklist for assignee',
                },
                credential: {
                    label: 'Credential',
                    sequence: 20,
                    inactive: true,
                    hint: 'Employee needs to provide their credentials to acknowledge the document',
                },
                e_signature: {
                    label: 'E-signature',
                    sequence: 30,
                    inactive: true,
                    hint: 'Employee needs to sign the document',
                },
                e_sign: {
                    label: 'E-signature',
                    sequence: 31,
                    hint: 'Employee needs to sign document based on E-Signature configuration',
                },
                meeting: {
                    label: 'Schedule a meeting',
                    sequence: 35,
                    hint: 'Schedule a meeting',
                },
                mark_when_complete: {
                    label: 'Mark When Complete',
                    sequence: 40,
                    hint: 'Mark when complete',
                },
                sign_document: {
                    label: 'Sign Document',
                    sequence: 50,
                    inactive: true,
                    hint: 'Employee needs to sign the generated document',
                },
                take_survey: {
                    label: 'Take Survey',
                    sequence: 60,
                    hint: 'Employee needs to take a survey',
                },
                upload_documents: {
                    label: 'Upload Documents',
                    sequence: 70,
                    hint: 'Employee uploads one or more attachments to the task',
                },
                url: {
                    label: 'URL',
                    sequence: 80,
                    hint: 'A link to a page for user to work on',
                },
                view_video: {
                    label: 'View Video',
                    sequence: 90,
                    hint: 'Employee needs to view the video',
                },
                action_url: {
                    label: 'Auto-close integration task',
                    sequence: 120,
                    hint: 'A link to an external system page for user to work on',
                },
                create_JA_plan: {
                    label: 'Create Journey Accelerator Action Plan',
                    sequence: 130,
                    hint: 'Manager needs to create a journey accelator action plan for an employee',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'HR task type',
        }),
        task_support_team: StringColumn({
            default: 'users_and_groups',
            choices: {
                users_and_groups: {
                    label: 'Users and groups',
                    sequence: 10,
                },
                agent_workspace: {
                    label: 'Agent Workspace',
                    sequence: 30,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'Point of contact(s) for questions',
                    label: 'Task support team',
                    plural: 'Task support teams',
                },
            ],
        }),
        attendees: ListColumn({
            attributes: {
                array: 'denormalized',
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            label: 'Attendees',
            maxLength: 1024,
            referenceTable: 'sys_user',
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
        plan_description: GenericColumn({
            attributes: {
                encode_utf8: false,
                serializer: 'com.glide.script.TranslatedTextXMLSerializer',
            },
            columnType: 'translated_html',
            label: 'Plan description',
            maxLength: 8000,
        }),
        plan_type: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Plan type',
            referenceTable: 'sn_ja_plan_type',
        }),
        end_date: DateTimeColumn({
            label: 'End date',
        }),
        url: UrlColumn({
            label: 'External URL',
        }),
        sc_cat_item: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Catalog Item',
            referenceTable: 'sc_cat_item',
            referenceQual: 'javascript:new sn_hr_core.hr_Utils().getCatalogItemFilter();',
            useReferenceQualifier: 'simple',
        }),
        generated_id: DocumentIdColumn({
            dependent: 'generated_table',
            label: 'Generated id',
        }),
        generated_table: TableNameColumn({
            attributes: {
                base_start: true,
            },
            label: 'Generated table',
        }),
        when_to_send: IntegerColumn({
            label: [
                {
                    hint: 'Number of days before task due date when reminder email should be sent',
                    label: 'When to send (days)',
                    plural: 'When to send (days)',
                },
            ],
        }),
        date_offset_quantity: IntegerColumn({
            default: '0',
            label: [
                {
                    hint: 'Number of hours, days, weeks, or months to offset due date calculation',
                    label: 'Date offset quantity',
                    plural: 'Date offset quantities',
                },
            ],
        }),
        groups: ListColumn({
            attributes: {
                array: 'denormalized',
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            label: [
                {
                    hint: 'Add groups',
                    label: 'Groups',
                    plural: 'Groups',
                },
            ],
            maxLength: 1024,
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true^EQ',
            useReferenceQualifier: 'simple',
        }),
        template: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Template',
            referenceTable: 'sn_hr_core_template',
            referenceQual: "javascript:'active=true^tableIN' + hr.TABLE_TASK_EXTENSIONS",
            useReferenceQualifier: 'simple',
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
        suspend_request: BooleanColumn({
            label: [
                {
                    hint: 'Parent request suspended because of this task',
                    label: 'Suspend request',
                    plural: 'Suspend requests',
                },
            ],
            readOnly: true,
        }),
        employee: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: [
                {
                    hint: 'Person that the JA plan is for',
                    label: 'Who is this plan for',
                    plural: 'Who is this plan for',
                },
            ],
            referenceTable: 'sys_user',
            referenceQual: 'active=true^EQ',
            useReferenceQualifier: 'simple',
        }),
        plan_name: TranslatedTextColumn({
            label: [
                {
                    hint: 'The name of the plan',
                    label: 'Plan name',
                    plural: 'Plan names',
                },
            ],
            maxLength: 150,
        }),
        use_assignment_date: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Set due date from assignment date',
                    label: 'Use assignment date',
                    plural: 'Use assignment dates',
                },
            ],
        }),
        schedule_method: StringColumn({
            choices: {
                manual: {
                    label: 'Manual entry',
                    sequence: 10,
                    hint: 'Manually schedule the interivew',
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'Scheduling and editing calendar method must be done in the Workspace platform',
                    label: 'Scheduling method',
                    plural: 'Scheduling methods',
                },
            ],
        }),
        awa_queue: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'AWA Queue',
            referenceTable: 'awa_queue',
            referenceQual: 'active=true^service_channel=27f675e3739713004a905ee515f6a7c3^EQ',
            useReferenceQualifier: 'simple',
        }),
        order_guide: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Order Guide',
            referenceTable: 'sc_cat_item_guide',
            referenceQual: 'active=true^EQ',
            useReferenceQualifier: 'simple',
        }),
        date_offset_type: StringColumn({
            default: 'on',
            choices: {
                before: {
                    label: 'Before',
                    sequence: 0,
                },
                on: {
                    label: 'On',
                    sequence: 1,
                },
                after: {
                    label: 'After',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'Calculate due date before, on, or after the assignment date',
                    label: 'Date offset type',
                    plural: 'Date offset types',
                },
            ],
        }),
        survey: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'Survey',
            referenceTable: 'asmt_metric_type',
            referenceQual: 'evaluation_method=survey^active=true^state=published^EQ',
            useReferenceQualifier: 'simple',
        }),
        acknowledgment_text: TranslatedTextColumn({
            label: [
                {
                    hint: 'Text that defines the meaning of a user’s signature. Overrides text from document template.',
                    label: 'Acknowledgment text',
                    plural: 'Acknowledgment texts',
                },
            ],
            maxLength: 1000,
        }),
        date_offset_units: StringColumn({
            choices: {
                hours: {
                    label: 'Hours',
                    sequence: 0,
                },
                days: {
                    label: 'Days',
                    sequence: 1,
                },
                weeks: {
                    label: 'Weeks',
                    sequence: 2,
                },
                months: {
                    label: 'Months',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'Units for the time used to offset due date calculation',
                    label: 'Date offset units',
                    plural: 'Date offset units',
                },
            ],
        }),
        external_attendees_list: StringColumn({
            label: [
                {
                    hint: 'List of external attendees',
                    label: 'External invite email',
                    plural: 'External invite emails',
                },
            ],
            maxLength: 512,
        }),
        survey_instance: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Survey instance',
            referenceTable: 'asmt_assessment_instance',
        }),
        integrating_system: StringColumn({
            choices: {
                cicplus: {
                    label: 'CICPlus',
                    sequence: 10,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'External Integrating System for which task is created.',
                    label: 'Integrating system',
                    plural: 'Integrating systems',
                },
            ],
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
        request_suspension_reason: StringColumn({
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
                    sequence: 2,
                    dependentValue: 'sys_user_group',
                    hint: 'Please specify User Group we are suspending SLA for',
                },
                other: {
                    label: 'Other',
                    sequence: 4,
                    hint: 'Please specify what we are suspending SLA for',
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'Parent request suspended because of this task',
                    label: 'Request suspension reason',
                    plural: 'Request suspension reasons',
                },
            ],
            readOnly: true,
        }),
        interval: IntegerColumn({
            label: [
                {
                    hint: 'Interval at which reminder email should continue to be sent',
                    label: 'Interval (days)',
                    plural: 'Interval (days)',
                },
            ],
        }),
        meeting_details: HtmlColumn({
            label: 'Meeting details',
            maxLength: 8000,
        }),
        email_template: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: [
                {
                    hint: 'Email template for the reminder email',
                    label: 'Reminder template',
                    plural: 'Reminder templates',
                },
            ],
            referenceTable: 'sn_hr_core_email_content',
            referenceQual: 'table=sn_hr_core_task^EQ',
            useReferenceQualifier: 'simple',
        }),
        cloned_from: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                hasListeners: true,
                largeTable: true,
                readonly_clickthrough: true,
            },
            label: [
                {
                    hint: 'The task from which this task was cloned',
                    label: 'Cloned from',
                    plural: 'Cloned froms',
                },
            ],
            referenceTable: 'sn_hr_core_task',
        }),
        optional: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Is this task optional?',
                    label: 'Optional',
                    plural: 'Optionals',
                },
            ],
        }),
        start_on: DateColumn({
            label: [
                {
                    hint: 'Date that the plan starts',
                    label: 'Plan publish date',
                    plural: 'Plan publish dates',
                },
            ],
        }),
        assignment_group: OverrideColumn({
            baseTable: 'task',
            referenceQualifier:
                'active=true^typeLIKE7a5370019f22120047a2d126c42e705c^ORtypeLIKEba5370019f22120047a2d126c42e705c',
        }),
        state: OverrideColumn({
            baseTable: 'task',
            default: '1',
            attributes: {
                close_states: '3;4;7;9',
                default_close_state: 3,
                default_work_state: 18,
            },
        }),
        parent: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'sys_class_name=sn_hr_core_case',
            attributes: {
                readonly_clickthrough: true,
            },
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
        opened_by: OverrideColumn({
            baseTable: 'task',
        }),
        short_description: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),
    },
})
