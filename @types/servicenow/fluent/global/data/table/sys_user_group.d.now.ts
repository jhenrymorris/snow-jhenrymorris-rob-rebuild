import {
    Table,
    ReferenceColumn,
    BooleanColumn,
    IntegerColumn,
    EmailColumn,
    ListColumn,
    StringColumn,
    DateTimeColumn,
    UserRolesColumn,
    GuidColumn,
} from '@servicenow/sdk/core'

export const sys_user_group = Table({
    allowWebServiceAccess: true,
    attributes: {
        'all_tables.text_index_translations': true,
        allow_data_replicate: true,
        forcePrimaryKeyOrdering: true,
        ih_process_sync_enabled: true,
        iterativeDelete: true,
        kagami_csindex_enabled: true,
        slushbucket_omit_embedded: true,
    },
    label: 'Group',
    name: 'sys_user_group',
    schema: {
        default_assignee: ReferenceColumn({
            label: [
                {
                    hint: 'Default assignee for this assignment group',
                    label: 'Default assignee',
                    plural: 'Default assignees',
                },
            ],
            referenceTable: 'sys_user',
        }),
        include_members: BooleanColumn({
            label: [
                {
                    hint: 'Should members also get email when a group email is supplied?',
                    label: 'Include members',
                    plural: 'Include members',
                },
            ],
        }),
        parent: ReferenceColumn({
            label: 'Parent',
            referenceTable: 'sys_user_group',
        }),
        sys_mod_count: IntegerColumn({
            label: [
                {
                    label: 'Updates',
                    plural: 'Updates',
                },
            ],
        }),
        email: EmailColumn({
            label: [
                {
                    hint: 'By default the group email address overrides individual email addresses of members',
                    label: 'Group email',
                    plural: 'Group emails',
                },
            ],
            maxLength: 100,
        }),
        type: ListColumn({
            attributes: {
                slushbucket_ref_no_expand: true,
            },
            label: [
                {
                    hint: 'Types of this group',
                    label: 'Type',
                    plural: 'Types',
                },
            ],
            maxLength: 1024,
            referenceTable: 'sys_user_group_type',
        }),
        sys_created_by: StringColumn({
            label: [
                {
                    label: 'Created by',
                    plural: 'Created by',
                },
            ],
        }),
        source: StringColumn({
            label: 'Source',
            maxLength: 255,
        }),
        sys_updated_by: StringColumn({
            label: [
                {
                    label: 'Updated by',
                    plural: 'Updated by',
                },
            ],
        }),
        exclude_manager: BooleanColumn({
            label: [
                {
                    hint: 'Manager will not get email notifications sent to this group',
                    label: 'Exclude manager',
                    plural: 'Exclude managers',
                },
            ],
        }),
        cost_center: ReferenceColumn({
            label: 'Cost center',
            referenceTable: 'cmn_cost_center',
        }),
        manager: ReferenceColumn({
            label: 'Manager',
            referenceTable: 'sys_user',
        }),
        active: BooleanColumn({
            default: true,
            label: 'Active',
        }),
        sys_created_on: DateTimeColumn({
            label: [
                {
                    label: 'Created',
                    plural: 'Created',
                },
            ],
        }),
        name: StringColumn({
            label: [
                {
                    hint: 'Descriptive name, e.g. DBAs, Network, etc.',
                    label: 'Name',
                    plural: 'Names',
                },
            ],
            maxLength: 80,
            unique: true,
        }),
        roles: UserRolesColumn({
            array: true,
            attributes: {
                record_watcher_blacklist: true,
            },
            label: 'Roles',
            maxLength: 100,
        }),
        sys_updated_on: DateTimeColumn({
            label: [
                {
                    label: 'Updated',
                    plural: 'Updated',
                },
            ],
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000,
        }),
        sys_id: GuidColumn({
            label: [
                {
                    label: 'Sys ID',
                    plural: 'Sys IDs',
                },
            ],
            primary: true,
        }),
    },
    textIndex: true,
})
