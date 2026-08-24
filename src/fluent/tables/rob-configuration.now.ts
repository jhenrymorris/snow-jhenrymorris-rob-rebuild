import {
    BooleanColumn,
    DateColumn,
    IntegerColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_2166123_rob_auth_rob_config = Table({
    name: 'x_2166123_rob_auth_rob_config',
    label: 'ROB Configuration',
    display: 'name',
    extensible: false,
    accessibleFrom: 'package_private',
    allowWebServiceAccess: false,
    createAccessControls: false,
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 100,
        }),
        active: BooleanColumn({
            label: 'Active',
            mandatory: true,
            default: true,
        }),
        current_accepted_form_version: StringColumn({
            label: 'Current Accepted Form Version',
            mandatory: true,
            maxLength: 40,
        }),
        agency_annual_recertification_date: DateColumn({
            label: 'Agency Annual Recertification Date',
            mandatory: true,
        }),
        mid_cycle_grace_window_days: IntegerColumn({
            label: 'Mid-Cycle Grace Window Days',
            mandatory: true,
            default: 90,
            min: 0,
        }),
        renewal_reminder_1_days: IntegerColumn({
            label: 'Renewal Reminder 1 Days',
            mandatory: true,
            default: 90,
            min: 0,
        }),
        renewal_reminder_2_days: IntegerColumn({
            label: 'Renewal Reminder 2 Days',
            mandatory: true,
            default: 60,
            min: 0,
        }),
        renewal_reminder_3_days: IntegerColumn({
            label: 'Renewal Reminder 3 Days',
            mandatory: true,
            default: 30,
            min: 0,
        }),
        lapse_notification_enabled: BooleanColumn({
            label: 'Lapse Notification Enabled',
            mandatory: true,
            default: true,
        }),
        default_staffing_assignment_group: ReferenceColumn({
            label: 'Default Staffing Assignment Group',
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true',
            useReferenceQualifier: 'simple',
            cascadeRule: 'clear',
        }),
        default_analytics_assignment_group: ReferenceColumn({
            label: 'Default Analytics Assignment Group',
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true',
            useReferenceQualifier: 'simple',
            cascadeRule: 'clear',
        }),
        default_operations_manager_escalation_group: ReferenceColumn({
            label: 'Default Operations Manager Escalation Group',
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true',
            useReferenceQualifier: 'simple',
            cascadeRule: 'clear',
        }),
        default_exception_review_group: ReferenceColumn({
            label: 'Default Exception Review Group',
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true',
            useReferenceQualifier: 'simple',
            cascadeRule: 'clear',
        }),
        approved_supervisors_group: ReferenceColumn({
            label: 'Approved NSF Supervisors Group',
            referenceTable: 'sys_user_group',
            cascadeRule: 'clear',
        }),
        approved_organization_root: ReferenceColumn({
            label: 'Approved NSF Organization Root',
            referenceTable: 'cmn_department',
            cascadeRule: 'clear',
        }),
        allow_sys_user_title_fallback: BooleanColumn({
            label: 'Allow sys_user Title Fallback',
            mandatory: true,
            default: true,
        }),
        operations_manager_task_due_days: IntegerColumn({
            label: 'Operations Manager Task Due Days',
            min: 0,
        }),
        exception_task_due_days: IntegerColumn({
            label: 'Exception Task Due Days',
            min: 0,
        }),
        operations_manager_escalation_days: IntegerColumn({
            label: 'Operations Manager Escalation Timing (Days)',
            min: 0,
        }),
        renewal_notification_copy_group: ReferenceColumn({
            label: 'Renewal Notification Copy Group',
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true',
            useReferenceQualifier: 'advanced',
            cascadeRule: 'clear',
        }),
        notes: MultiLineTextColumn({
            label: 'Notes',
            maxLength: 4000,
        }),
    },
})
