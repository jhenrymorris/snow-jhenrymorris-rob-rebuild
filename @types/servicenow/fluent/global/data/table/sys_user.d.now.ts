import {
    Table,
    GenericColumn,
    StringColumn,
    ReferenceColumn,
    SystemClassNameColumn,
    BooleanColumn,
    IntegerColumn,
    EmailColumn,
    DateColumn,
    MultiLineTextColumn,
    ChoiceColumn,
    DomainPathColumn,
    UserRolesColumn,
    DateTimeColumn,
    DomainIdColumn,
    GuidColumn,
} from '@servicenow/sdk/core'

export const sys_user = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        'all_tables.text_index_translations': true,
        allow_data_replicate: true,
        display_image: 'photo',
        global_search_config_handler: 'UserConfig',
        ih_process_sync_enabled: true,
        iterativeDelete: true,
        kagami_csindex_enabled: true,
        metadata_link_exempt: true,
        ref_ac_columns: 'email',
        ref_ac_columns_search: true,
        ref_ac_order_by: 'name',
        ref_auto_completer: 'AJAXTableCompleter',
        slushbucket_omit_embedded: true,
    },
    extensible: true,
    label: 'User',
    name: 'sys_user',
    schema: {
        user_password: GenericColumn({
            columnType: 'password',
            label: 'Password',
            maxLength: 100,
        }),
        name: StringColumn({
            dynamicValueDefinitions: {
                type: 'calculated_value',
                calculatedValue: `if (current.first_name.nil() && current.last_name.nil() && !current.name.nil()) {
  var names = current.name.toString().split(" ");
  if (names.length > 1) {
    current.first_name = names[0];
    names.shift();
    current.last_name = names.join(" ");
  } else 
    current.last_name = names[0];
}  

if(current.first_name.nil()) { 
    current.last_name; 
  } else { 
    current.first_name + ' ' + current.last_name;
  }`,
            },
            label: 'Name',
            maxLength: 151,
        }),
        accumulated_roles: StringColumn({
            label: 'Accumulated roles',
            maxLength: 4000,
        }),
        last_login_device: StringColumn({
            active: false,
            attributes: {
                no_text_index: true,
            },
            label: 'Last login device',
        }),
        department: ReferenceColumn({
            dependent: 'company',
            label: 'Department',
            referenceTable: 'cmn_department',
        }),
        employee_number: StringColumn({
            label: 'Employee number',
        }),
        sys_class_name: SystemClassNameColumn({
            default: 'javascript:current.getTableName();',
            dropdown: 'dropdown_without_none',
            label: 'Class',
            maxLength: 80,
        }),
        middle_name: StringColumn({
            label: 'Middle name',
            maxLength: 50,
        }),
        gender: StringColumn({
            choices: {
                Female: {
                    label: 'Female',
                },
                Male: {
                    label: 'Male',
                },
                'Not Specified': {
                    label: 'Not Specified',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Gender',
        }),
        locked_out: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'When checked, user cannot login',
                    label: 'Locked out',
                    plural: 'Locked out',
                },
            ],
        }),
        default_perspective: ReferenceColumn({
            label: 'Default perspective',
            referenceTable: 'sys_perspective',
        }),
        state: StringColumn({
            label: 'State / Province',
        }),
        cost_center: ReferenceColumn({
            label: 'Cost center',
            referenceTable: 'cmn_cost_center',
        }),
        sys_mod_count: IntegerColumn({
            label: [
                {
                    label: 'Updates',
                    plural: 'Updates',
                },
            ],
        }),
        introduction: StringColumn({
            choices: {
                'Dr.': {
                    label: 'Dr.',
                },
                'Mr.': {
                    label: 'Mr.',
                },
                'Mrs.': {
                    label: 'Mrs.',
                },
                'Ms.': {
                    label: 'Ms.',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Prefix',
        }),
        email: EmailColumn({
            label: 'Email',
            maxLength: 100,
        }),
        last_login: DateColumn({
            label: 'Last login',
        }),
        calendar_integration: IntegerColumn({
            default: '1',
            choices: {
                1: {
                    label: 'Outlook',
                    sequence: 1,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Calendar integration',
        }),
        street: MultiLineTextColumn({
            label: 'Street',
            maxLength: 255,
        }),
        active: BooleanColumn({
            default: true,
            label: [
                {
                    hint: 'Inactive users do not show in user choice lists',
                    label: 'Active',
                    plural: 'Active',
                },
            ],
        }),
        sys_created_by: StringColumn({
            label: [
                {
                    label: 'Created by',
                    plural: 'Created by',
                },
            ],
        }),
        federated_id: StringColumn({
            label: 'Federated ID',
            maxLength: 100,
        }),
        preferred_language: StringColumn({
            choices: {
                en: {
                    label: 'English',
                },
                NULL_OVERRIDE: {
                    label: "javascript:gs.getMessage('System ({0})', new global.I18nUtils().getUserLanguage())",
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Language',
        }),
        home_phone: GenericColumn({
            columnType: 'ph_number',
            label: 'Home phone',
        }),
        date_format: StringColumn({
            choices: {
                NULL_OVERRIDE: {
                    label: "javascript:gs.getMessage('System ({0})', gs.getProperty('glide.sys.date_format'))",
                },
                'MM-dd-yyyy': {
                    label: 'MM-dd-yyyy',
                    sequence: 1,
                },
                'dd/MM/yyyy': {
                    label: 'dd/MM/yyyy',
                    sequence: 2,
                },
                'dd-MM-yyyy': {
                    label: 'dd-MM-yyyy',
                    sequence: 3,
                },
                'dd.MM.yyyy': {
                    label: 'dd.MM.yyyy',
                    sequence: 4,
                },
                'yyyy-MM-dd': {
                    label: 'yyyy-MM-dd',
                    sequence: 5,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'Display dates with this format (blank means system default)',
                    label: 'Date format',
                    plural: 'Date formats',
                },
            ],
        }),
        manager_hp1: GenericColumn({
            attributes: {
                loader_exempt: true,
                serializer: 'com.glide.script.OmittedElementXMLSerializer',
            },
            columnType: 'record_hierarchy_path',
            label: 'Manager HP1',
            maxLength: 255,
            readOnly: true,
        }),
        company: ReferenceColumn({
            label: 'Company',
            referenceTable: 'core_company',
        }),
        building: ReferenceColumn({
            label: 'Building',
            referenceTable: 'cmn_building',
        }),
        sys_updated_by: StringColumn({
            label: [
                {
                    label: 'Updated by',
                    plural: 'Updated by',
                },
            ],
        }),
        enable_multifactor_authn: BooleanColumn({
            default: false,
            label: 'Enable Multifactor Authentication',
        }),
        identity_type: ChoiceColumn({
            choices: {
                human: {
                    label: 'Human',
                    sequence: 100,
                },
                machine: {
                    label: 'Machine',
                    sequence: 200,
                },
                ai_agent: {
                    label: 'AI',
                    sequence: 300,
                },
                unclassified: {
                    label: '-',
                    sequence: 400,
                },
            },
            dropdown: 'dropdown_without_none',
            label: 'Identity type',
        }),
        schedule: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                ref_contributions: 'schedule_show',
            },
            label: 'Schedule',
            referenceTable: 'cmn_schedule',
        }),
        internal_integration_user: BooleanColumn({
            default: false,
            label: 'Internal Integration User',
            maxLength: 1,
        }),
        sys_domain_path: DomainPathColumn({
            attributes: {
                case_sensitive: true,
            },
            default: '/',
            label: 'Domain Path',
        }),
        user_name: StringColumn({
            label: 'User ID',
            unique: true,
        }),
        last_name: StringColumn({
            label: 'Last name',
            maxLength: 50,
        }),
        roles: UserRolesColumn({
            array: true,
            attributes: {
                record_watcher_blacklist: true,
            },
            label: 'Roles',
            maxLength: 40,
        }),
        last_password: StringColumn({
            active: false,
            label: 'Last password',
        }),
        location: ReferenceColumn({
            attributes: {
                tree_picker: true,
            },
            dependent: 'company',
            label: 'Location',
            referenceTable: 'cmn_location',
        }),
        zip: StringColumn({
            label: 'Zip / Postal code',
        }),
        avatar: GenericColumn({
            columnType: 'user_image',
            dynamicValueDefinitions: {
                type: 'calculated_value',
                calculatedValue:
                    '(function calculatedFieldValue(current) { if (typeof GlideAvatarFinder != "undefined") return GlideAvatarFinder.getAvatarID(current.getUniqueValue()) })(current);',
            },
            label: 'Avatar',
            readOnly: true,
        }),
        first_name: StringColumn({
            label: 'First name',
            maxLength: 50,
        }),
        title: StringColumn({
            choices: {
                'Administrative Assistant': {
                    label: 'Administrative Assistant',
                },
                'Chief Executive Officer': {
                    label: 'Chief Executive Officer',
                },
                'Chief Financial Officer': {
                    label: 'Chief Financial Officer',
                },
                'Chief Technology Officer': {
                    label: 'Chief Technology Officer',
                },
                Director: {
                    label: 'Director',
                },
                'IT Technician': {
                    label: 'IT Technician',
                },
                'Junior Developer': {
                    label: 'Junior Developer',
                },
                'Sales Executive': {
                    label: 'Sales Executive',
                },
                'Senior Developer': {
                    label: 'Senior Developer',
                },
                'Solution Consultant': {
                    label: 'Solution Consultant',
                },
                'System Administrator': {
                    label: 'System Administrator',
                },
                'Vice President': {
                    label: 'Vice President',
                },
            },
            dropdown: 'suggestion',
            label: 'Title',
            maxLength: 60,
        }),
        last_login_time: DateTimeColumn({
            label: 'Last login time',
        }),
        photo: GenericColumn({
            columnType: 'user_image',
            label: 'Photo',
        }),
        city: StringColumn({
            label: 'City',
        }),
        sys_domain: DomainIdColumn({
            label: [
                {
                    hint: 'Domain to which the user belongs',
                    label: 'Domain',
                    plural: 'Domains',
                },
            ],
            referenceTable: 'sys_user_group',
        }),
        sys_created_on: DateTimeColumn({
            label: [
                {
                    label: 'Created',
                    plural: 'Created',
                },
            ],
        }),
        country: StringColumn({
            choices: {
                BR: {
                    label: 'Brazil',
                },
                CN: {
                    label: 'China',
                },
                DE: {
                    label: 'Germany',
                },
                ES: {
                    label: 'Spain',
                },
                FR: {
                    label: 'France',
                },
                GB: {
                    label: 'United Kingdom',
                },
                IT: {
                    label: 'Italy',
                },
                JP: {
                    label: 'Japan',
                },
                NULL_OVERRIDE: {
                    label: "javascript:gs.getMessage('System ({0})', GlideLocale.get().getCurrent().getCountry())",
                },
                US: {
                    label: 'United States',
                },
            },
            dropdown: 'dropdown_without_none',
            label: 'Country code',
            maxLength: 3,
        }),
        mobile_phone: GenericColumn({
            columnType: 'ph_number',
            label: 'Mobile phone',
        }),
        time_format: StringColumn({
            choices: {
                'HH:mm:ss': {
                    label: 'hh:mm:ss (24 hour)',
                    sequence: 0,
                },
                'HH.mm.ss': {
                    label: 'hh.mm.ss (24 hour)',
                    sequence: 1,
                },
                'hh:mm:ss a': {
                    label: 'hh:mm:ss (12 hour)',
                    sequence: 2,
                },
                'hh.mm.ss a': {
                    label: 'hh.mm.ss (12 hour)',
                    sequence: 3,
                },
                NULL_OVERRIDE: {
                    label: "javascript:gs.getMessage('System ({0})', gs.getProperty('glide.sys.time_format'))",
                    sequence: 4,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    hint: 'Display times with this format (blank means system default)',
                    label: 'Time format',
                    plural: 'Time formats',
                },
            ],
        }),
        notification: IntegerColumn({
            default: '2',
            choices: {
                1: {
                    label: 'Disable',
                    sequence: 1,
                },
                2: {
                    label: 'Enable',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    hint: 'Enable or disable notifications for this user ie. email, SMS etc',
                    label: 'Notification',
                    plural: 'Notifications',
                },
            ],
        }),
        source: StringColumn({
            label: 'Source',
            maxLength: 255,
        }),
        failed_attempts: IntegerColumn({
            label: 'Failed login attempts',
        }),
        sys_updated_on: DateTimeColumn({
            label: [
                {
                    label: 'Updated',
                    plural: 'Updated',
                },
            ],
        }),
        password_needs_reset: BooleanColumn({
            label: [
                {
                    hint: 'User will be prompted to change password at next login',
                    label: 'Password needs reset',
                    plural: 'Password needs resets',
                },
            ],
        }),
        phone: GenericColumn({
            columnType: 'ph_number',
            label: 'Business phone',
        }),
        time_zone: StringColumn({
            choices: {
                ACT: {
                    label: 'ACT',
                    sequence: 0,
                    inactive: true,
                },
                NULL_OVERRIDE: {
                    label: "javascript:gs.getMessage('System ({0})', gs.getSysTimeZone())",
                    sequence: 0,
                },
                AET: {
                    label: 'AET',
                    sequence: 1,
                    inactive: true,
                },
                'Canada/Atlantic': {
                    label: 'Canada/Atlantic',
                    sequence: 1,
                },
                'Africa/Abidjan': {
                    label: 'Africa/Abidjan',
                    sequence: 2,
                    inactive: true,
                },
                'Canada/Central': {
                    label: 'Canada/Central',
                    sequence: 2,
                },
                'Africa/Accra': {
                    label: 'Africa/Accra',
                    sequence: 3,
                    inactive: true,
                },
                'Canada/Eastern': {
                    label: 'Canada/Eastern',
                    sequence: 3,
                },
                'Africa/Addis_Ababa': {
                    label: 'EAT',
                    sequence: 329,
                    inactive: true,
                },
                'Canada/Mountain': {
                    label: 'Canada/Mountain',
                    sequence: 4,
                },
                'Africa/Algiers': {
                    label: 'Africa/Algiers',
                    sequence: 5,
                    inactive: true,
                },
                'Canada/Pacific': {
                    label: 'Canada/Pacific',
                    sequence: 5,
                },
                'Africa/Asmera': {
                    label: 'Africa/Asmera',
                    sequence: 6,
                    inactive: true,
                },
                'Europe/Amsterdam': {
                    label: 'Europe/Amsterdam',
                    sequence: 6,
                },
                'Africa/Bamako': {
                    label: 'Africa/Bamako',
                    sequence: 7,
                    inactive: true,
                },
                'Europe/Berlin': {
                    label: 'Europe/Berlin',
                    sequence: 7,
                },
                'Africa/Bangui': {
                    label: 'Africa/Bangui',
                    sequence: 8,
                    inactive: true,
                },
                'Europe/Brussels': {
                    label: 'Europe/Brussels',
                    sequence: 8,
                },
                'Africa/Banjul': {
                    label: 'Africa/Banjul',
                    sequence: 9,
                    inactive: true,
                },
                'Europe/Copenhagen': {
                    label: 'Europe/Copenhagen',
                    sequence: 9,
                },
                'Africa/Bissau': {
                    label: 'Africa/Bissau',
                    sequence: 10,
                    inactive: true,
                },
                'Europe/Dublin': {
                    label: 'Europe/Dublin',
                    sequence: 10,
                },
                'Africa/Blantyre': {
                    label: 'Africa/Blantyre',
                    sequence: 11,
                    inactive: true,
                },
                'Europe/London': {
                    label: 'Europe/London',
                    sequence: 11,
                },
                'Africa/Brazzaville': {
                    label: 'Africa/Brazzaville',
                    sequence: 12,
                    inactive: true,
                },
                'Europe/Madrid': {
                    label: 'Europe/Madrid',
                    sequence: 12,
                },
                'Africa/Bujumbura': {
                    label: 'Africa/Bujumbura',
                    sequence: 13,
                    inactive: true,
                },
                'Europe/Paris': {
                    label: 'Europe/Paris',
                    sequence: 13,
                },
                'Africa/Cairo': {
                    label: 'Africa/Cairo',
                    sequence: 14,
                    inactive: true,
                },
                'Europe/Rome': {
                    label: 'Europe/Rome',
                    sequence: 14,
                },
                'Africa/Casablanca': {
                    label: 'Africa/Casablanca',
                    sequence: 15,
                    inactive: true,
                },
                'Europe/Stockholm': {
                    label: 'Europe/Stockholm',
                    sequence: 15,
                },
                'Africa/Ceuta': {
                    label: 'Africa/Ceuta',
                    sequence: 16,
                    inactive: true,
                },
                'Europe/Zurich': {
                    label: 'Europe/Zurich',
                    sequence: 16,
                },
                'Africa/Conakry': {
                    label: 'Africa/Conakry',
                    sequence: 17,
                    inactive: true,
                },
                GMT: {
                    label: 'GMT',
                    sequence: 17,
                },
                'Africa/Dakar': {
                    label: 'Africa/Dakar',
                    sequence: 18,
                    inactive: true,
                },
                Hongkong: {
                    label: 'Hongkong',
                    sequence: 18,
                },
                'Africa/Dar_es_Salaam': {
                    label: 'Africa/Dar_es_Salaam',
                    sequence: 19,
                    inactive: true,
                },
                'US/Arizona': {
                    label: 'US/Arizona',
                    sequence: 19,
                },
                'Africa/Djibouti': {
                    label: 'Africa/Djibouti',
                    sequence: 20,
                    inactive: true,
                },
                'US/Central': {
                    label: 'US/Central',
                    sequence: 20,
                },
                'Africa/Douala': {
                    label: 'Africa/Douala',
                    sequence: 21,
                    inactive: true,
                },
                'US/Eastern': {
                    label: 'US/Eastern',
                    sequence: 21,
                },
                'Africa/El_Aaiun': {
                    label: 'Africa/El_Aaiun',
                    sequence: 22,
                    inactive: true,
                },
                'US/Hawaii': {
                    label: 'US/Hawaii',
                    sequence: 22,
                },
                'Africa/Freetown': {
                    label: 'Africa/Freetown',
                    sequence: 23,
                    inactive: true,
                },
                'US/Mountain': {
                    label: 'US/Mountain',
                    sequence: 23,
                },
                'Africa/Gaborone': {
                    label: 'Africa/Gaborone',
                    sequence: 24,
                    inactive: true,
                },
                'US/Pacific': {
                    label: 'US/Pacific',
                    sequence: 24,
                },
                'Africa/Harare': {
                    label: 'Africa/Harare',
                    sequence: 25,
                    inactive: true,
                },
                'Asia/Kolkata': {
                    label: 'IST',
                    sequence: 432,
                    inactive: true,
                },
                'Africa/Johannesburg': {
                    label: 'Africa/Johannesburg',
                    sequence: 26,
                    inactive: true,
                },
                'Africa/Kampala': {
                    label: 'Africa/Kampala',
                    sequence: 27,
                    inactive: true,
                },
                'Africa/Khartoum': {
                    label: 'Africa/Khartoum',
                    sequence: 28,
                    inactive: true,
                },
                'Africa/Kigali': {
                    label: 'Africa/Kigali',
                    sequence: 29,
                    inactive: true,
                },
                'Africa/Kinshasa': {
                    label: 'Africa/Kinshasa',
                    sequence: 30,
                    inactive: true,
                },
                'Africa/Lagos': {
                    label: 'Africa/Lagos',
                    sequence: 31,
                    inactive: true,
                },
                'Africa/Libreville': {
                    label: 'Africa/Libreville',
                    sequence: 32,
                    inactive: true,
                },
                'Africa/Lome': {
                    label: 'Africa/Lome',
                    sequence: 33,
                    inactive: true,
                },
                'Africa/Luanda': {
                    label: 'Africa/Luanda',
                    sequence: 34,
                    inactive: true,
                },
                'Africa/Lubumbashi': {
                    label: 'Africa/Lubumbashi',
                    sequence: 35,
                    inactive: true,
                },
                'Africa/Lusaka': {
                    label: 'Africa/Lusaka',
                    sequence: 36,
                    inactive: true,
                },
                'Africa/Malabo': {
                    label: 'Africa/Malabo',
                    sequence: 37,
                    inactive: true,
                },
                'Africa/Maputo': {
                    label: 'Africa/Maputo',
                    sequence: 38,
                    inactive: true,
                },
                'Africa/Maseru': {
                    label: 'Africa/Maseru',
                    sequence: 39,
                    inactive: true,
                },
                'Africa/Mbabane': {
                    label: 'Africa/Mbabane',
                    sequence: 40,
                    inactive: true,
                },
                'Africa/Mogadishu': {
                    label: 'Africa/Mogadishu',
                    sequence: 41,
                    inactive: true,
                },
                'Africa/Monrovia': {
                    label: 'Africa/Monrovia',
                    sequence: 42,
                    inactive: true,
                },
                'Africa/Nairobi': {
                    label: 'Africa/Nairobi',
                    sequence: 43,
                    inactive: true,
                },
                'Africa/Ndjamena': {
                    label: 'Africa/Ndjamena',
                    sequence: 44,
                    inactive: true,
                },
                'Africa/Niamey': {
                    label: 'Africa/Niamey',
                    sequence: 45,
                    inactive: true,
                },
                'Africa/Nouakchott': {
                    label: 'Africa/Nouakchott',
                    sequence: 46,
                    inactive: true,
                },
                'Africa/Ouagadougou': {
                    label: 'Africa/Ouagadougou',
                    sequence: 47,
                    inactive: true,
                },
                'Africa/Porto-Novo': {
                    label: 'Africa/Porto-Novo',
                    sequence: 48,
                    inactive: true,
                },
                'Africa/Sao_Tome': {
                    label: 'Africa/Sao_Tome',
                    sequence: 49,
                    inactive: true,
                },
                'Africa/Timbuktu': {
                    label: 'Africa/Timbuktu',
                    sequence: 50,
                    inactive: true,
                },
                'Africa/Tripoli': {
                    label: 'Africa/Tripoli',
                    sequence: 51,
                    inactive: true,
                },
                'Africa/Tunis': {
                    label: 'Africa/Tunis',
                    sequence: 52,
                    inactive: true,
                },
                'Africa/Windhoek': {
                    label: 'Africa/Windhoek',
                    sequence: 53,
                    inactive: true,
                },
                AGT: {
                    label: 'AGT',
                    sequence: 54,
                    inactive: true,
                },
                'America/Adak': {
                    label: 'America/Adak',
                    sequence: 55,
                    inactive: true,
                },
                'America/Anchorage': {
                    label: 'America/Anchorage',
                    sequence: 56,
                    inactive: true,
                },
                'America/Anguilla': {
                    label: 'America/Anguilla',
                    sequence: 57,
                    inactive: true,
                },
                'America/Antigua': {
                    label: 'America/Antigua',
                    sequence: 58,
                    inactive: true,
                },
                'America/Araguaina': {
                    label: 'America/Araguaina',
                    sequence: 59,
                    inactive: true,
                },
                'America/Aruba': {
                    label: 'America/Aruba',
                    sequence: 60,
                    inactive: true,
                },
                'America/Asuncion': {
                    label: 'America/Asuncion',
                    sequence: 61,
                    inactive: true,
                },
                'America/Atka': {
                    label: 'America/Atka',
                    sequence: 62,
                    inactive: true,
                },
                'America/Barbados': {
                    label: 'America/Barbados',
                    sequence: 63,
                    inactive: true,
                },
                'America/Belem': {
                    label: 'America/Belem',
                    sequence: 64,
                    inactive: true,
                },
                'America/Belize': {
                    label: 'America/Belize',
                    sequence: 65,
                    inactive: true,
                },
                'America/Boa_Vista': {
                    label: 'America/Boa_Vista',
                    sequence: 66,
                    inactive: true,
                },
                'America/Bogota': {
                    label: 'America/Bogota',
                    sequence: 67,
                    inactive: true,
                },
                'America/Boise': {
                    label: 'America/Boise',
                    sequence: 68,
                    inactive: true,
                },
                'America/Buenos_Aires': {
                    label: 'America/Buenos_Aires',
                    sequence: 69,
                    inactive: true,
                },
                'America/Cambridge_Bay': {
                    label: 'America/Cambridge_Bay',
                    sequence: 70,
                    inactive: true,
                },
                'America/Cancun': {
                    label: 'America/Cancun',
                    sequence: 71,
                    inactive: true,
                },
                'America/Caracas': {
                    label: 'America/Caracas',
                    sequence: 72,
                    inactive: true,
                },
                'America/Catamarca': {
                    label: 'America/Catamarca',
                    sequence: 73,
                    inactive: true,
                },
                'America/Cayenne': {
                    label: 'America/Cayenne',
                    sequence: 74,
                    inactive: true,
                },
                'America/Cayman': {
                    label: 'America/Cayman',
                    sequence: 75,
                    inactive: true,
                },
                'America/Chicago': {
                    label: 'America/Chicago',
                    sequence: 76,
                    inactive: true,
                },
                'America/Chihuahua': {
                    label: 'America/Chihuahua',
                    sequence: 77,
                    inactive: true,
                },
                'America/Cordoba': {
                    label: 'America/Cordoba',
                    sequence: 78,
                    inactive: true,
                },
                'America/Costa_Rica': {
                    label: 'America/Costa_Rica',
                    sequence: 79,
                    inactive: true,
                },
                'America/Cuiaba': {
                    label: 'America/Cuiaba',
                    sequence: 80,
                    inactive: true,
                },
                'America/Curacao': {
                    label: 'America/Curacao',
                    sequence: 81,
                    inactive: true,
                },
                'America/Danmarkshavn': {
                    label: 'America/Danmarkshavn',
                    sequence: 82,
                    inactive: true,
                },
                'America/Dawson': {
                    label: 'America/Dawson',
                    sequence: 83,
                    inactive: true,
                },
                'America/Dawson_Creek': {
                    label: 'America/Dawson_Creek',
                    sequence: 84,
                    inactive: true,
                },
                'America/Denver': {
                    label: 'America/Denver',
                    sequence: 85,
                    inactive: true,
                },
                'America/Detroit': {
                    label: 'America/Detroit',
                    sequence: 86,
                    inactive: true,
                },
                'America/Dominica': {
                    label: 'America/Dominica',
                    sequence: 87,
                    inactive: true,
                },
                'America/Edmonton': {
                    label: 'America/Edmonton',
                    sequence: 88,
                    inactive: true,
                },
                'America/Eirunepe': {
                    label: 'America/Eirunepe',
                    sequence: 89,
                    inactive: true,
                },
                'America/El_Salvador': {
                    label: 'America/El_Salvador',
                    sequence: 90,
                    inactive: true,
                },
                'America/Ensenada': {
                    label: 'America/Ensenada',
                    sequence: 91,
                    inactive: true,
                },
                'America/Fortaleza': {
                    label: 'America/Fortaleza',
                    sequence: 92,
                    inactive: true,
                },
                'America/Fort_Wayne': {
                    label: 'America/Fort_Wayne',
                    sequence: 93,
                    inactive: true,
                },
                'America/Glace_Bay': {
                    label: 'America/Glace_Bay',
                    sequence: 94,
                    inactive: true,
                },
                'America/Godthab': {
                    label: 'America/Godthab',
                    sequence: 95,
                    inactive: true,
                },
                'America/Goose_Bay': {
                    label: 'America/Goose_Bay',
                    sequence: 96,
                    inactive: true,
                },
                'America/Grand_Turk': {
                    label: 'America/Grand_Turk',
                    sequence: 97,
                    inactive: true,
                },
                'America/Grenada': {
                    label: 'America/Grenada',
                    sequence: 98,
                    inactive: true,
                },
                'America/Guadeloupe': {
                    label: 'America/Guadeloupe',
                    sequence: 99,
                    inactive: true,
                },
                'America/Guatemala': {
                    label: 'America/Guatemala',
                    sequence: 100,
                    inactive: true,
                },
                'America/Guayaquil': {
                    label: 'America/Guayaquil',
                    sequence: 101,
                    inactive: true,
                },
                'America/Guyana': {
                    label: 'America/Guyana',
                    sequence: 102,
                    inactive: true,
                },
                'America/Halifax': {
                    label: 'America/Halifax',
                    sequence: 103,
                    inactive: true,
                },
                'America/Havana': {
                    label: 'America/Havana',
                    sequence: 104,
                    inactive: true,
                },
                'America/Hermosillo': {
                    label: 'America/Hermosillo',
                    sequence: 105,
                    inactive: true,
                },
                'America/Indiana/Indianapolis': {
                    label: 'America/Indiana/Indianapolis',
                    sequence: 106,
                    inactive: true,
                },
                'America/Indiana/Knox': {
                    label: 'America/Indiana/Knox',
                    sequence: 107,
                    inactive: true,
                },
                'America/Indiana/Marengo': {
                    label: 'America/Indiana/Marengo',
                    sequence: 108,
                    inactive: true,
                },
                'America/Indiana/Vevay': {
                    label: 'America/Indiana/Vevay',
                    sequence: 109,
                    inactive: true,
                },
                'America/Indianapolis': {
                    label: 'America/Indianapolis',
                    sequence: 110,
                    inactive: true,
                },
                'America/Inuvik': {
                    label: 'America/Inuvik',
                    sequence: 111,
                    inactive: true,
                },
                'America/Iqaluit': {
                    label: 'America/Iqaluit',
                    sequence: 112,
                    inactive: true,
                },
                'America/Jamaica': {
                    label: 'America/Jamaica',
                    sequence: 113,
                    inactive: true,
                },
                'America/Jujuy': {
                    label: 'America/Jujuy',
                    sequence: 114,
                    inactive: true,
                },
                'America/Juneau': {
                    label: 'America/Juneau',
                    sequence: 115,
                    inactive: true,
                },
                'America/Kentucky/Louisville': {
                    label: 'America/Kentucky/Louisville',
                    sequence: 116,
                    inactive: true,
                },
                'America/Kentucky/Monticello': {
                    label: 'America/Kentucky/Monticello',
                    sequence: 117,
                    inactive: true,
                },
                'America/Knox_IN': {
                    label: 'America/Knox_IN',
                    sequence: 118,
                    inactive: true,
                },
                'America/La_Paz': {
                    label: 'America/La_Paz',
                    sequence: 119,
                    inactive: true,
                },
                'America/Lima': {
                    label: 'America/Lima',
                    sequence: 120,
                    inactive: true,
                },
                'America/Los_Angeles': {
                    label: 'America/Los_Angeles',
                    sequence: 121,
                    inactive: true,
                },
                'America/Louisville': {
                    label: 'America/Louisville',
                    sequence: 122,
                    inactive: true,
                },
                'America/Maceio': {
                    label: 'America/Maceio',
                    sequence: 123,
                    inactive: true,
                },
                'America/Managua': {
                    label: 'America/Managua',
                    sequence: 124,
                    inactive: true,
                },
                'America/Manaus': {
                    label: 'America/Manaus',
                    sequence: 125,
                    inactive: true,
                },
                'America/Martinique': {
                    label: 'America/Martinique',
                    sequence: 126,
                    inactive: true,
                },
                'America/Mazatlan': {
                    label: 'America/Mazatlan',
                    sequence: 127,
                    inactive: true,
                },
                'America/Mendoza': {
                    label: 'America/Mendoza',
                    sequence: 128,
                    inactive: true,
                },
                'America/Menominee': {
                    label: 'America/Menominee',
                    sequence: 129,
                    inactive: true,
                },
                'America/Merida': {
                    label: 'America/Merida',
                    sequence: 130,
                    inactive: true,
                },
                'America/Mexico_City': {
                    label: 'America/Mexico_City',
                    sequence: 131,
                    inactive: true,
                },
                'America/Miquelon': {
                    label: 'America/Miquelon',
                    sequence: 132,
                    inactive: true,
                },
                'America/Monterrey': {
                    label: 'America/Monterrey',
                    sequence: 133,
                    inactive: true,
                },
                'America/Montevideo': {
                    label: 'America/Montevideo',
                    sequence: 134,
                    inactive: true,
                },
                'America/Montreal': {
                    label: 'America/Montreal',
                    sequence: 135,
                    inactive: true,
                },
                'America/Montserrat': {
                    label: 'America/Montserrat',
                    sequence: 136,
                    inactive: true,
                },
                'America/Nassau': {
                    label: 'America/Nassau',
                    sequence: 137,
                    inactive: true,
                },
                'America/New_York': {
                    label: 'America/New_York',
                    sequence: 138,
                    inactive: true,
                },
                'America/Nipigon': {
                    label: 'America/Nipigon',
                    sequence: 139,
                    inactive: true,
                },
                'America/Nome': {
                    label: 'America/Nome',
                    sequence: 140,
                    inactive: true,
                },
                'America/Noronha': {
                    label: 'America/Noronha',
                    sequence: 141,
                    inactive: true,
                },
                'America/North_Dakota/Center': {
                    label: 'America/North_Dakota/Center',
                    sequence: 142,
                    inactive: true,
                },
                'America/Panama': {
                    label: 'America/Panama',
                    sequence: 143,
                    inactive: true,
                },
                'America/Pangnirtung': {
                    label: 'America/Pangnirtung',
                    sequence: 144,
                    inactive: true,
                },
                'America/Paramaribo': {
                    label: 'America/Paramaribo',
                    sequence: 145,
                    inactive: true,
                },
                'America/Phoenix': {
                    label: 'America/Phoenix',
                    sequence: 146,
                    inactive: true,
                },
                'America/Port-au-Prince': {
                    label: 'America/Port-au-Prince',
                    sequence: 147,
                    inactive: true,
                },
                'America/Porto_Acre': {
                    label: 'America/Porto_Acre',
                    sequence: 148,
                    inactive: true,
                },
                'America/Porto_Velho': {
                    label: 'America/Porto_Velho',
                    sequence: 149,
                    inactive: true,
                },
                'America/Port_of_Spain': {
                    label: 'America/Port_of_Spain',
                    sequence: 150,
                    inactive: true,
                },
                'America/Puerto_Rico': {
                    label: 'America/Puerto_Rico',
                    sequence: 151,
                    inactive: true,
                },
                'America/Rainy_River': {
                    label: 'America/Rainy_River',
                    sequence: 152,
                    inactive: true,
                },
                'America/Rankin_Inlet': {
                    label: 'America/Rankin_Inlet',
                    sequence: 153,
                    inactive: true,
                },
                'America/Recife': {
                    label: 'America/Recife',
                    sequence: 154,
                    inactive: true,
                },
                'America/Regina': {
                    label: 'America/Regina',
                    sequence: 155,
                    inactive: true,
                },
                'America/Rio_Branco': {
                    label: 'America/Rio_Branco',
                    sequence: 156,
                    inactive: true,
                },
                'America/Rosario': {
                    label: 'America/Rosario',
                    sequence: 157,
                    inactive: true,
                },
                'America/Santiago': {
                    label: 'America/Santiago',
                    sequence: 158,
                    inactive: true,
                },
                'America/Santo_Domingo': {
                    label: 'America/Santo_Domingo',
                    sequence: 159,
                    inactive: true,
                },
                'America/Sao_Paulo': {
                    label: 'America/Sao_Paulo',
                    sequence: 160,
                    inactive: true,
                },
                'America/Scoresbysund': {
                    label: 'America/Scoresbysund',
                    sequence: 161,
                    inactive: true,
                },
                'America/Shiprock': {
                    label: 'America/Shiprock',
                    sequence: 162,
                    inactive: true,
                },
                'America/St_Johns': {
                    label: 'America/St_Johns',
                    sequence: 163,
                    inactive: true,
                },
                'America/St_Kitts': {
                    label: 'America/St_Kitts',
                    sequence: 164,
                    inactive: true,
                },
                'America/St_Lucia': {
                    label: 'America/St_Lucia',
                    sequence: 165,
                    inactive: true,
                },
                'America/St_Thomas': {
                    label: 'America/St_Thomas',
                    sequence: 166,
                    inactive: true,
                },
                'America/St_Vincent': {
                    label: 'America/St_Vincent',
                    sequence: 167,
                    inactive: true,
                },
                'America/Swift_Current': {
                    label: 'America/Swift_Current',
                    sequence: 168,
                    inactive: true,
                },
                'America/Tegucigalpa': {
                    label: 'America/Tegucigalpa',
                    sequence: 169,
                    inactive: true,
                },
                'America/Thule': {
                    label: 'America/Thule',
                    sequence: 170,
                    inactive: true,
                },
                'America/Thunder_Bay': {
                    label: 'America/Thunder_Bay',
                    sequence: 171,
                    inactive: true,
                },
                'America/Tijuana': {
                    label: 'America/Tijuana',
                    sequence: 172,
                    inactive: true,
                },
                'America/Tortola': {
                    label: 'America/Tortola',
                    sequence: 173,
                    inactive: true,
                },
                'America/Vancouver': {
                    label: 'America/Vancouver',
                    sequence: 174,
                    inactive: true,
                },
                'America/Virgin': {
                    label: 'America/Virgin',
                    sequence: 175,
                    inactive: true,
                },
                'America/Whitehorse': {
                    label: 'America/Whitehorse',
                    sequence: 176,
                    inactive: true,
                },
                'America/Winnipeg': {
                    label: 'America/Winnipeg',
                    sequence: 177,
                    inactive: true,
                },
                'America/Yakutat': {
                    label: 'America/Yakutat',
                    sequence: 178,
                    inactive: true,
                },
                'America/Yellowknife': {
                    label: 'America/Yellowknife',
                    sequence: 179,
                    inactive: true,
                },
                'Antarctica/Casey': {
                    label: 'Antarctica/Casey',
                    sequence: 180,
                    inactive: true,
                },
                'Antarctica/Davis': {
                    label: 'Antarctica/Davis',
                    sequence: 181,
                    inactive: true,
                },
                'Antarctica/DumontDUrville': {
                    label: 'Antarctica/DumontDUrville',
                    sequence: 182,
                    inactive: true,
                },
                'Antarctica/Mawson': {
                    label: 'Antarctica/Mawson',
                    sequence: 183,
                    inactive: true,
                },
                'Antarctica/McMurdo': {
                    label: 'Antarctica/McMurdo',
                    sequence: 184,
                    inactive: true,
                },
                'Antarctica/Palmer': {
                    label: 'Antarctica/Palmer',
                    sequence: 185,
                    inactive: true,
                },
                'Antarctica/South_Pole': {
                    label: 'Antarctica/South_Pole',
                    sequence: 186,
                    inactive: true,
                },
                'Antarctica/Syowa': {
                    label: 'Antarctica/Syowa',
                    sequence: 187,
                    inactive: true,
                },
                'Antarctica/Vostok': {
                    label: 'Antarctica/Vostok',
                    sequence: 188,
                    inactive: true,
                },
                'Arctic/Longyearbyen': {
                    label: 'Arctic/Longyearbyen',
                    sequence: 189,
                    inactive: true,
                },
                ART: {
                    label: 'ART',
                    sequence: 190,
                    inactive: true,
                },
                'Asia/Aden': {
                    label: 'Asia/Aden',
                    sequence: 191,
                    inactive: true,
                },
                'Asia/Almaty': {
                    label: 'Asia/Almaty',
                    sequence: 192,
                    inactive: true,
                },
                'Asia/Amman': {
                    label: 'Asia/Amman',
                    sequence: 193,
                    inactive: true,
                },
                'Asia/Anadyr': {
                    label: 'Asia/Anadyr',
                    sequence: 194,
                    inactive: true,
                },
                'Asia/Aqtau': {
                    label: 'Asia/Aqtau',
                    sequence: 195,
                    inactive: true,
                },
                'Asia/Aqtobe': {
                    label: 'Asia/Aqtobe',
                    sequence: 196,
                    inactive: true,
                },
                'Asia/Ashgabat': {
                    label: 'Asia/Ashgabat',
                    sequence: 197,
                    inactive: true,
                },
                'Asia/Ashkhabad': {
                    label: 'Asia/Ashkhabad',
                    sequence: 198,
                    inactive: true,
                },
                'Asia/Baghdad': {
                    label: 'Asia/Baghdad',
                    sequence: 199,
                    inactive: true,
                },
                'Asia/Bahrain': {
                    label: 'Asia/Bahrain',
                    sequence: 200,
                    inactive: true,
                },
                'Asia/Baku': {
                    label: 'Asia/Baku',
                    sequence: 201,
                    inactive: true,
                },
                'Asia/Bangkok': {
                    label: 'Asia/Bangkok',
                    sequence: 202,
                    inactive: true,
                },
                'Asia/Beirut': {
                    label: 'Asia/Beirut',
                    sequence: 203,
                    inactive: true,
                },
                'Asia/Bishkek': {
                    label: 'Asia/Bishkek',
                    sequence: 204,
                    inactive: true,
                },
                'Asia/Brunei': {
                    label: 'Asia/Brunei',
                    sequence: 205,
                    inactive: true,
                },
                'Asia/Choibalsan': {
                    label: 'Asia/Choibalsan',
                    sequence: 206,
                    inactive: true,
                },
                'Asia/Chongqing': {
                    label: 'Asia/Chongqing',
                    sequence: 207,
                    inactive: true,
                },
                'Asia/Chungking': {
                    label: 'Asia/Chungking',
                    sequence: 208,
                    inactive: true,
                },
                'Asia/Colombo': {
                    label: 'Asia/Colombo',
                    sequence: 209,
                    inactive: true,
                },
                'Asia/Dacca': {
                    label: 'Asia/Dacca',
                    sequence: 210,
                    inactive: true,
                },
                'Asia/Damascus': {
                    label: 'Asia/Damascus',
                    sequence: 211,
                    inactive: true,
                },
                'Asia/Dhaka': {
                    label: 'Asia/Dhaka',
                    sequence: 212,
                    inactive: true,
                },
                'Asia/Dili': {
                    label: 'Asia/Dili',
                    sequence: 213,
                    inactive: true,
                },
                'Asia/Dubai': {
                    label: 'Asia/Dubai',
                    sequence: 214,
                    inactive: true,
                },
                'Asia/Dushanbe': {
                    label: 'Asia/Dushanbe',
                    sequence: 215,
                    inactive: true,
                },
                'Asia/Gaza': {
                    label: 'Asia/Gaza',
                    sequence: 216,
                    inactive: true,
                },
                'Asia/Harbin': {
                    label: 'Asia/Harbin',
                    sequence: 217,
                    inactive: true,
                },
                'Asia/Hong_Kong': {
                    label: 'Asia/Hong_Kong',
                    sequence: 218,
                    inactive: true,
                },
                'Asia/Hovd': {
                    label: 'Asia/Hovd',
                    sequence: 219,
                    inactive: true,
                },
                'Asia/Irkutsk': {
                    label: 'Asia/Irkutsk',
                    sequence: 220,
                    inactive: true,
                },
                'Asia/Istanbul': {
                    label: 'Asia/Istanbul',
                    sequence: 221,
                    inactive: true,
                },
                'Asia/Jakarta': {
                    label: 'Asia/Jakarta',
                    sequence: 222,
                    inactive: true,
                },
                'Asia/Jayapura': {
                    label: 'Asia/Jayapura',
                    sequence: 223,
                    inactive: true,
                },
                'Asia/Jerusalem': {
                    label: 'Asia/Jerusalem',
                    sequence: 224,
                    inactive: true,
                },
                'Asia/Kabul': {
                    label: 'Asia/Kabul',
                    sequence: 225,
                    inactive: true,
                },
                'Asia/Kamchatka': {
                    label: 'Asia/Kamchatka',
                    sequence: 226,
                    inactive: true,
                },
                'Asia/Karachi': {
                    label: 'Asia/Karachi',
                    sequence: 227,
                    inactive: true,
                },
                'Asia/Kashgar': {
                    label: 'Asia/Kashgar',
                    sequence: 228,
                    inactive: true,
                },
                'Asia/Katmandu': {
                    label: 'Asia/Katmandu',
                    sequence: 229,
                    inactive: true,
                },
                'Asia/Krasnoyarsk': {
                    label: 'Asia/Krasnoyarsk',
                    sequence: 230,
                    inactive: true,
                },
                'Asia/Kuala_Lumpur': {
                    label: 'Asia/Kuala_Lumpur',
                    sequence: 231,
                    inactive: true,
                },
                'Asia/Kuching': {
                    label: 'Asia/Kuching',
                    sequence: 232,
                    inactive: true,
                },
                'Asia/Kuwait': {
                    label: 'Asia/Kuwait',
                    sequence: 233,
                    inactive: true,
                },
                'Asia/Macao': {
                    label: 'Asia/Macao',
                    sequence: 234,
                    inactive: true,
                },
                'Asia/Macau': {
                    label: 'Asia/Macau',
                    sequence: 235,
                    inactive: true,
                },
                'Asia/Magadan': {
                    label: 'Asia/Magadan',
                    sequence: 236,
                    inactive: true,
                },
                'Asia/Makassar': {
                    label: 'Asia/Makassar',
                    sequence: 237,
                    inactive: true,
                },
                'Asia/Manila': {
                    label: 'Asia/Manila',
                    sequence: 238,
                    inactive: true,
                },
                'Asia/Muscat': {
                    label: 'Asia/Muscat',
                    sequence: 239,
                    inactive: true,
                },
                'Asia/Nicosia': {
                    label: 'Asia/Nicosia',
                    sequence: 240,
                    inactive: true,
                },
                'Asia/Novosibirsk': {
                    label: 'Asia/Novosibirsk',
                    sequence: 241,
                    inactive: true,
                },
                'Asia/Omsk': {
                    label: 'Asia/Omsk',
                    sequence: 242,
                    inactive: true,
                },
                'Asia/Oral': {
                    label: 'Asia/Oral',
                    sequence: 243,
                    inactive: true,
                },
                'Asia/Phnom_Penh': {
                    label: 'Asia/Phnom_Penh',
                    sequence: 244,
                    inactive: true,
                },
                'Asia/Pontianak': {
                    label: 'Asia/Pontianak',
                    sequence: 245,
                    inactive: true,
                },
                'Asia/Pyongyang': {
                    label: 'Asia/Pyongyang',
                    sequence: 246,
                    inactive: true,
                },
                'Asia/Qatar': {
                    label: 'Asia/Qatar',
                    sequence: 247,
                    inactive: true,
                },
                'Asia/Qyzylorda': {
                    label: 'Asia/Qyzylorda',
                    sequence: 248,
                    inactive: true,
                },
                'Asia/Rangoon': {
                    label: 'Asia/Rangoon',
                    sequence: 249,
                    inactive: true,
                },
                'Asia/Riyadh': {
                    label: 'Asia/Riyadh',
                    sequence: 250,
                    inactive: true,
                },
                'Asia/Riyadh87': {
                    label: 'Asia/Riyadh87',
                    sequence: 251,
                    inactive: true,
                },
                'Asia/Riyadh88': {
                    label: 'Asia/Riyadh88',
                    sequence: 252,
                    inactive: true,
                },
                'Asia/Riyadh89': {
                    label: 'Asia/Riyadh89',
                    sequence: 253,
                    inactive: true,
                },
                'Asia/Saigon': {
                    label: 'Asia/Saigon',
                    sequence: 254,
                    inactive: true,
                },
                'Asia/Sakhalin': {
                    label: 'Asia/Sakhalin',
                    sequence: 255,
                    inactive: true,
                },
                'Asia/Samarkand': {
                    label: 'Asia/Samarkand',
                    sequence: 256,
                    inactive: true,
                },
                'Asia/Seoul': {
                    label: 'Asia/Seoul',
                    sequence: 257,
                    inactive: true,
                },
                'Asia/Shanghai': {
                    label: 'Asia/Shanghai',
                    sequence: 258,
                    inactive: true,
                },
                'Asia/Singapore': {
                    label: 'Asia/Singapore',
                    sequence: 259,
                    inactive: true,
                },
                'Asia/Taipei': {
                    label: 'Asia/Taipei',
                    sequence: 260,
                    inactive: true,
                },
                'Asia/Tashkent': {
                    label: 'Asia/Tashkent',
                    sequence: 261,
                    inactive: true,
                },
                'Asia/Tbilisi': {
                    label: 'Asia/Tbilisi',
                    sequence: 262,
                    inactive: true,
                },
                'Asia/Tehran': {
                    label: 'Asia/Tehran',
                    sequence: 263,
                    inactive: true,
                },
                'Asia/Tel_Aviv': {
                    label: 'Asia/Tel_Aviv',
                    sequence: 264,
                    inactive: true,
                },
                'Asia/Thimbu': {
                    label: 'Asia/Thimbu',
                    sequence: 265,
                    inactive: true,
                },
                'Asia/Thimphu': {
                    label: 'Asia/Thimphu',
                    sequence: 266,
                    inactive: true,
                },
                'Asia/Tokyo': {
                    label: 'Asia/Tokyo',
                    sequence: 267,
                    inactive: true,
                },
                'Asia/Ujung_Pandang': {
                    label: 'Asia/Ujung_Pandang',
                    sequence: 268,
                    inactive: true,
                },
                'Asia/Ulaanbaatar': {
                    label: 'Asia/Ulaanbaatar',
                    sequence: 269,
                    inactive: true,
                },
                'Asia/Ulan_Bator': {
                    label: 'Asia/Ulan_Bator',
                    sequence: 270,
                    inactive: true,
                },
                'Asia/Urumqi': {
                    label: 'Asia/Urumqi',
                    sequence: 271,
                    inactive: true,
                },
                'Asia/Vientiane': {
                    label: 'Asia/Vientiane',
                    sequence: 272,
                    inactive: true,
                },
                'Asia/Vladivostok': {
                    label: 'Asia/Vladivostok',
                    sequence: 273,
                    inactive: true,
                },
                'Asia/Yakutsk': {
                    label: 'Asia/Yakutsk',
                    sequence: 274,
                    inactive: true,
                },
                'Asia/Yekaterinburg': {
                    label: 'Asia/Yekaterinburg',
                    sequence: 275,
                    inactive: true,
                },
                'Asia/Yerevan': {
                    label: 'Asia/Yerevan',
                    sequence: 276,
                    inactive: true,
                },
                AST: {
                    label: 'AST',
                    sequence: 277,
                    inactive: true,
                },
                'Atlantic/Azores': {
                    label: 'Atlantic/Azores',
                    sequence: 278,
                    inactive: true,
                },
                'Atlantic/Bermuda': {
                    label: 'Atlantic/Bermuda',
                    sequence: 279,
                    inactive: true,
                },
                'Atlantic/Canary': {
                    label: 'Atlantic/Canary',
                    sequence: 280,
                    inactive: true,
                },
                'Atlantic/Cape_Verde': {
                    label: 'Atlantic/Cape_Verde',
                    sequence: 281,
                    inactive: true,
                },
                'Atlantic/Faeroe': {
                    label: 'Atlantic/Faeroe',
                    sequence: 282,
                    inactive: true,
                },
                'Atlantic/Jan_Mayen': {
                    label: 'Atlantic/Jan_Mayen',
                    sequence: 283,
                    inactive: true,
                },
                'Atlantic/Madeira': {
                    label: 'Atlantic/Madeira',
                    sequence: 284,
                    inactive: true,
                },
                'Atlantic/Reykjavik': {
                    label: 'Atlantic/Reykjavik',
                    sequence: 285,
                    inactive: true,
                },
                'Atlantic/South_Georgia': {
                    label: 'Atlantic/South_Georgia',
                    sequence: 286,
                    inactive: true,
                },
                'Atlantic/Stanley': {
                    label: 'Atlantic/Stanley',
                    sequence: 287,
                    inactive: true,
                },
                'Atlantic/St_Helena': {
                    label: 'Atlantic/St_Helena',
                    sequence: 288,
                    inactive: true,
                },
                'Australia/ACT': {
                    label: 'Australia/ACT',
                    sequence: 289,
                    inactive: true,
                },
                'Australia/Adelaide': {
                    label: 'Australia/Adelaide',
                    sequence: 290,
                    inactive: true,
                },
                'Australia/Brisbane': {
                    label: 'Australia/Brisbane',
                    sequence: 291,
                    inactive: true,
                },
                'Australia/Broken_Hill': {
                    label: 'Australia/Broken_Hill',
                    sequence: 292,
                    inactive: true,
                },
                'Australia/Canberra': {
                    label: 'Australia/Canberra',
                    sequence: 293,
                    inactive: true,
                },
                'Australia/Darwin': {
                    label: 'Australia/Darwin',
                    sequence: 294,
                    inactive: true,
                },
                'Australia/Hobart': {
                    label: 'Australia/Hobart',
                    sequence: 295,
                    inactive: true,
                },
                'Australia/LHI': {
                    label: 'Australia/LHI',
                    sequence: 296,
                    inactive: true,
                },
                'Australia/Lindeman': {
                    label: 'Australia/Lindeman',
                    sequence: 297,
                    inactive: true,
                },
                'Australia/Lord_Howe': {
                    label: 'Australia/Lord_Howe',
                    sequence: 298,
                    inactive: true,
                },
                'Australia/Melbourne': {
                    label: 'Australia/Melbourne',
                    sequence: 299,
                    inactive: true,
                },
                'Australia/North': {
                    label: 'Australia/North',
                    sequence: 300,
                    inactive: true,
                },
                'Australia/NSW': {
                    label: 'Australia/NSW',
                    sequence: 301,
                    inactive: true,
                },
                'Australia/Perth': {
                    label: 'Australia/Perth',
                    sequence: 302,
                    inactive: true,
                },
                'Australia/Queensland': {
                    label: 'Australia/Queensland',
                    sequence: 303,
                    inactive: true,
                },
                'Australia/South': {
                    label: 'Australia/South',
                    sequence: 304,
                    inactive: true,
                },
                'Australia/Sydney': {
                    label: 'Australia/Sydney',
                    sequence: 305,
                    inactive: true,
                },
                'Australia/Tasmania': {
                    label: 'Australia/Tasmania',
                    sequence: 306,
                    inactive: true,
                },
                'Australia/Victoria': {
                    label: 'Australia/Victoria',
                    sequence: 307,
                    inactive: true,
                },
                'Australia/West': {
                    label: 'Australia/West',
                    sequence: 308,
                    inactive: true,
                },
                'Australia/Yancowinna': {
                    label: 'Australia/Yancowinna',
                    sequence: 309,
                    inactive: true,
                },
                BET: {
                    label: 'BET',
                    sequence: 310,
                    inactive: true,
                },
                'Brazil/Acre': {
                    label: 'Brazil/Acre',
                    sequence: 311,
                    inactive: true,
                },
                'Brazil/DeNoronha': {
                    label: 'Brazil/DeNoronha',
                    sequence: 312,
                    inactive: true,
                },
                'Brazil/East': {
                    label: 'Brazil/East',
                    sequence: 313,
                    inactive: true,
                },
                'Brazil/West': {
                    label: 'Brazil/West',
                    sequence: 314,
                    inactive: true,
                },
                BST: {
                    label: 'BST',
                    sequence: 315,
                    inactive: true,
                },
                'Canada/East-Saskatchewan': {
                    label: 'Canada/East-Saskatchewan',
                    sequence: 316,
                    inactive: true,
                },
                'Canada/Newfoundland': {
                    label: 'Canada/Newfoundland',
                    sequence: 317,
                    inactive: true,
                },
                'Canada/Saskatchewan': {
                    label: 'Canada/Saskatchewan',
                    sequence: 318,
                    inactive: true,
                },
                'Canada/Yukon': {
                    label: 'Canada/Yukon',
                    sequence: 319,
                    inactive: true,
                },
                CAT: {
                    label: 'CAT',
                    sequence: 320,
                    inactive: true,
                },
                CET: {
                    label: 'CET',
                    sequence: 321,
                    inactive: true,
                },
                'Chile/Continental': {
                    label: 'Chile/Continental',
                    sequence: 322,
                    inactive: true,
                },
                'Chile/EasterIsland': {
                    label: 'Chile/EasterIsland',
                    sequence: 323,
                    inactive: true,
                },
                CNT: {
                    label: 'CNT',
                    sequence: 324,
                    inactive: true,
                },
                CST: {
                    label: 'CST',
                    sequence: 325,
                    inactive: true,
                },
                CST6CDT: {
                    label: 'CST6CDT',
                    sequence: 326,
                    inactive: true,
                },
                CTT: {
                    label: 'CTT',
                    sequence: 327,
                    inactive: true,
                },
                Cuba: {
                    label: 'Cuba',
                    sequence: 328,
                    inactive: true,
                },
                ECT: {
                    label: 'ECT',
                    sequence: 330,
                    inactive: true,
                },
                EET: {
                    label: 'EET',
                    sequence: 331,
                    inactive: true,
                },
                Egypt: {
                    label: 'Egypt',
                    sequence: 332,
                    inactive: true,
                },
                Eire: {
                    label: 'Eire',
                    sequence: 333,
                    inactive: true,
                },
                EST: {
                    label: 'EST',
                    sequence: 334,
                    inactive: true,
                },
                EST5EDT: {
                    label: 'EST5EDT',
                    sequence: 335,
                    inactive: true,
                },
                'Etc/Greenwich': {
                    label: 'Etc/Greenwich',
                    sequence: 366,
                    inactive: true,
                },
                'Etc/UCT': {
                    label: 'Etc/UCT',
                    sequence: 367,
                    inactive: true,
                },
                'Etc/Universal': {
                    label: 'Etc/Universal',
                    sequence: 368,
                    inactive: true,
                },
                'Etc/UTC': {
                    label: 'Etc/UTC',
                    sequence: 369,
                    inactive: true,
                },
                'Etc/Zulu': {
                    label: 'Etc/Zulu',
                    sequence: 370,
                    inactive: true,
                },
                'Europe/Andorra': {
                    label: 'Europe/Andorra',
                    sequence: 371,
                    inactive: true,
                },
                'Europe/Athens': {
                    label: 'Europe/Athens',
                    sequence: 372,
                    inactive: true,
                },
                'Europe/Belfast': {
                    label: 'Europe/Belfast',
                    sequence: 373,
                    inactive: true,
                },
                'Europe/Belgrade': {
                    label: 'Europe/Belgrade',
                    sequence: 374,
                    inactive: true,
                },
                'Europe/Bratislava': {
                    label: 'Europe/Bratislava',
                    sequence: 375,
                    inactive: true,
                },
                'Europe/Bucharest': {
                    label: 'Europe/Bucharest',
                    sequence: 376,
                    inactive: true,
                },
                'Europe/Budapest': {
                    label: 'Europe/Budapest',
                    sequence: 377,
                    inactive: true,
                },
                'Europe/Chisinau': {
                    label: 'Europe/Chisinau',
                    sequence: 378,
                    inactive: true,
                },
                'Europe/Gibraltar': {
                    label: 'Europe/Gibraltar',
                    sequence: 379,
                    inactive: true,
                },
                'Europe/Helsinki': {
                    label: 'Europe/Helsinki',
                    sequence: 380,
                    inactive: true,
                },
                'Europe/Istanbul': {
                    label: 'Europe/Istanbul',
                    sequence: 381,
                    inactive: true,
                },
                'Europe/Kaliningrad': {
                    label: 'Europe/Kaliningrad',
                    sequence: 382,
                    inactive: true,
                },
                'Europe/Kiev': {
                    label: 'Europe/Kiev',
                    sequence: 383,
                    inactive: true,
                },
                'Europe/Lisbon': {
                    label: 'Europe/Lisbon',
                    sequence: 384,
                    inactive: true,
                },
                'Europe/Ljubljana': {
                    label: 'Europe/Ljubljana',
                    sequence: 385,
                    inactive: true,
                },
                'Europe/Luxembourg': {
                    label: 'Europe/Luxembourg',
                    sequence: 386,
                    inactive: true,
                },
                'Europe/Malta': {
                    label: 'Europe/Malta',
                    sequence: 387,
                    inactive: true,
                },
                'Europe/Minsk': {
                    label: 'Europe/Minsk',
                    sequence: 388,
                    inactive: true,
                },
                'Europe/Monaco': {
                    label: 'Europe/Monaco',
                    sequence: 389,
                    inactive: true,
                },
                'Europe/Moscow': {
                    label: 'Europe/Moscow',
                    sequence: 390,
                    inactive: true,
                },
                'Europe/Nicosia': {
                    label: 'Europe/Nicosia',
                    sequence: 391,
                    inactive: true,
                },
                'Europe/Oslo': {
                    label: 'Europe/Oslo',
                    sequence: 392,
                    inactive: true,
                },
                'Europe/Prague': {
                    label: 'Europe/Prague',
                    sequence: 393,
                    inactive: true,
                },
                'Europe/Riga': {
                    label: 'Europe/Riga',
                    sequence: 394,
                    inactive: true,
                },
                'Europe/Samara': {
                    label: 'Europe/Samara',
                    sequence: 395,
                    inactive: true,
                },
                'Europe/San_Marino': {
                    label: 'Europe/San_Marino',
                    sequence: 396,
                    inactive: true,
                },
                'Europe/Sarajevo': {
                    label: 'Europe/Sarajevo',
                    sequence: 397,
                    inactive: true,
                },
                'Europe/Simferopol': {
                    label: 'Europe/Simferopol',
                    sequence: 398,
                    inactive: true,
                },
                'Europe/Skopje': {
                    label: 'Europe/Skopje',
                    sequence: 399,
                    inactive: true,
                },
                'Europe/Sofia': {
                    label: 'Europe/Sofia',
                    sequence: 400,
                    inactive: true,
                },
                'Europe/Tallinn': {
                    label: 'Europe/Tallinn',
                    sequence: 401,
                    inactive: true,
                },
                'Europe/Tirane': {
                    label: 'Europe/Tirane',
                    sequence: 402,
                    inactive: true,
                },
                'Europe/Tiraspol': {
                    label: 'Europe/Tiraspol',
                    sequence: 403,
                    inactive: true,
                },
                'Europe/Uzhgorod': {
                    label: 'Europe/Uzhgorod',
                    sequence: 404,
                    inactive: true,
                },
                'Europe/Vaduz': {
                    label: 'Europe/Vaduz',
                    sequence: 405,
                    inactive: true,
                },
                'Europe/Vatican': {
                    label: 'Europe/Vatican',
                    sequence: 406,
                    inactive: true,
                },
                'Europe/Vienna': {
                    label: 'Europe/Vienna',
                    sequence: 407,
                    inactive: true,
                },
                'Europe/Vilnius': {
                    label: 'Europe/Vilnius',
                    sequence: 408,
                    inactive: true,
                },
                'Europe/Warsaw': {
                    label: 'Europe/Warsaw',
                    sequence: 409,
                    inactive: true,
                },
                'Europe/Zagreb': {
                    label: 'Europe/Zagreb',
                    sequence: 410,
                    inactive: true,
                },
                'Europe/Zaporozhye': {
                    label: 'Europe/Zaporozhye',
                    sequence: 411,
                    inactive: true,
                },
                GB: {
                    label: 'GB',
                    sequence: 412,
                    inactive: true,
                },
                'GB-Eire': {
                    label: 'GB-Eire',
                    sequence: 413,
                    inactive: true,
                },
                GMT0: {
                    label: 'GMT0',
                    sequence: 414,
                    inactive: true,
                },
                Greenwich: {
                    label: 'Greenwich',
                    sequence: 415,
                    inactive: true,
                },
                HST: {
                    label: 'HST',
                    sequence: 416,
                    inactive: true,
                },
                Iceland: {
                    label: 'Iceland',
                    sequence: 417,
                    inactive: true,
                },
                IET: {
                    label: 'IET',
                    sequence: 418,
                    inactive: true,
                },
                'Indian/Antananarivo': {
                    label: 'Indian/Antananarivo',
                    sequence: 419,
                    inactive: true,
                },
                'Indian/Chagos': {
                    label: 'Indian/Chagos',
                    sequence: 420,
                    inactive: true,
                },
                'Indian/Christmas': {
                    label: 'Indian/Christmas',
                    sequence: 421,
                    inactive: true,
                },
                'Indian/Cocos': {
                    label: 'Indian/Cocos',
                    sequence: 422,
                    inactive: true,
                },
                'Indian/Comoro': {
                    label: 'Indian/Comoro',
                    sequence: 423,
                    inactive: true,
                },
                'Indian/Kerguelen': {
                    label: 'Indian/Kerguelen',
                    sequence: 424,
                    inactive: true,
                },
                'Indian/Mahe': {
                    label: 'Indian/Mahe',
                    sequence: 425,
                    inactive: true,
                },
                'Indian/Maldives': {
                    label: 'Indian/Maldives',
                    sequence: 426,
                    inactive: true,
                },
                'Indian/Mauritius': {
                    label: 'Indian/Mauritius',
                    sequence: 427,
                    inactive: true,
                },
                'Indian/Mayotte': {
                    label: 'Indian/Mayotte',
                    sequence: 428,
                    inactive: true,
                },
                'Indian/Reunion': {
                    label: 'Indian/Reunion',
                    sequence: 429,
                    inactive: true,
                },
                Iran: {
                    label: 'Iran',
                    sequence: 430,
                    inactive: true,
                },
                Israel: {
                    label: 'Israel',
                    sequence: 431,
                    inactive: true,
                },
                Jamaica: {
                    label: 'Jamaica',
                    sequence: 433,
                    inactive: true,
                },
                Japan: {
                    label: 'Japan',
                    sequence: 434,
                    inactive: true,
                },
                JST: {
                    label: 'JST',
                    sequence: 435,
                    inactive: true,
                },
                Kwajalein: {
                    label: 'Kwajalein',
                    sequence: 436,
                    inactive: true,
                },
                Libya: {
                    label: 'Libya',
                    sequence: 437,
                    inactive: true,
                },
                MET: {
                    label: 'MET',
                    sequence: 438,
                    inactive: true,
                },
                'Mexico/BajaNorte': {
                    label: 'Mexico/BajaNorte',
                    sequence: 439,
                    inactive: true,
                },
                'Mexico/BajaSur': {
                    label: 'Mexico/BajaSur',
                    sequence: 440,
                    inactive: true,
                },
                'Mexico/General': {
                    label: 'Mexico/General',
                    sequence: 441,
                    inactive: true,
                },
                'Mideast/Riyadh87': {
                    label: 'Mideast/Riyadh87',
                    sequence: 442,
                    inactive: true,
                },
                'Mideast/Riyadh88': {
                    label: 'Mideast/Riyadh88',
                    sequence: 443,
                    inactive: true,
                },
                'Mideast/Riyadh89': {
                    label: 'Mideast/Riyadh89',
                    sequence: 444,
                    inactive: true,
                },
                MIT: {
                    label: 'MIT',
                    sequence: 445,
                    inactive: true,
                },
                MST: {
                    label: 'MST',
                    sequence: 446,
                    inactive: true,
                },
                MST7MDT: {
                    label: 'MST7MDT',
                    sequence: 447,
                    inactive: true,
                },
                Navajo: {
                    label: 'Navajo',
                    sequence: 448,
                    inactive: true,
                },
                NET: {
                    label: 'NET',
                    sequence: 449,
                    inactive: true,
                },
                NST: {
                    label: 'NST',
                    sequence: 450,
                    inactive: true,
                },
                NZ: {
                    label: 'NZ',
                    sequence: 451,
                    inactive: true,
                },
                'NZ-CHAT': {
                    label: 'NZ-CHAT',
                    sequence: 452,
                    inactive: true,
                },
                'Pacific/Apia': {
                    label: 'Pacific/Apia',
                    sequence: 453,
                    inactive: true,
                },
                'Pacific/Auckland': {
                    label: 'Pacific/Auckland',
                    sequence: 454,
                    inactive: true,
                },
                'Pacific/Chatham': {
                    label: 'Pacific/Chatham',
                    sequence: 455,
                    inactive: true,
                },
                'Pacific/Easter': {
                    label: 'Pacific/Easter',
                    sequence: 456,
                    inactive: true,
                },
                'Pacific/Efate': {
                    label: 'Pacific/Efate',
                    sequence: 457,
                    inactive: true,
                },
                'Pacific/Enderbury': {
                    label: 'Pacific/Enderbury',
                    sequence: 458,
                    inactive: true,
                },
                'Pacific/Fakaofo': {
                    label: 'Pacific/Fakaofo',
                    sequence: 459,
                    inactive: true,
                },
                'Pacific/Fiji': {
                    label: 'Pacific/Fiji',
                    sequence: 460,
                    inactive: true,
                },
                'Pacific/Funafuti': {
                    label: 'Pacific/Funafuti',
                    sequence: 461,
                    inactive: true,
                },
                'Pacific/Galapagos': {
                    label: 'Pacific/Galapagos',
                    sequence: 462,
                    inactive: true,
                },
                'Pacific/Gambier': {
                    label: 'Pacific/Gambier',
                    sequence: 463,
                    inactive: true,
                },
                'Pacific/Guadalcanal': {
                    label: 'Pacific/Guadalcanal',
                    sequence: 464,
                    inactive: true,
                },
                'Pacific/Guam': {
                    label: 'Pacific/Guam',
                    sequence: 465,
                    inactive: true,
                },
                'Pacific/Honolulu': {
                    label: 'Pacific/Honolulu',
                    sequence: 466,
                    inactive: true,
                },
                'Pacific/Johnston': {
                    label: 'Pacific/Johnston',
                    sequence: 467,
                    inactive: true,
                },
                'Pacific/Kiritimati': {
                    label: 'Pacific/Kiritimati',
                    sequence: 468,
                    inactive: true,
                },
                'Pacific/Kosrae': {
                    label: 'Pacific/Kosrae',
                    sequence: 469,
                    inactive: true,
                },
                'Pacific/Kwajalein': {
                    label: 'Pacific/Kwajalein',
                    sequence: 470,
                    inactive: true,
                },
                'Pacific/Majuro': {
                    label: 'Pacific/Majuro',
                    sequence: 471,
                    inactive: true,
                },
                'Pacific/Marquesas': {
                    label: 'Pacific/Marquesas',
                    sequence: 472,
                    inactive: true,
                },
                'Pacific/Midway': {
                    label: 'Pacific/Midway',
                    sequence: 473,
                    inactive: true,
                },
                'Pacific/Nauru': {
                    label: 'Pacific/Nauru',
                    sequence: 474,
                    inactive: true,
                },
                'Pacific/Niue': {
                    label: 'Pacific/Niue',
                    sequence: 475,
                    inactive: true,
                },
                'Pacific/Norfolk': {
                    label: 'Pacific/Norfolk',
                    sequence: 476,
                    inactive: true,
                },
                'Pacific/Noumea': {
                    label: 'Pacific/Noumea',
                    sequence: 477,
                    inactive: true,
                },
                'Pacific/Pago_Pago': {
                    label: 'Pacific/Pago_Pago',
                    sequence: 478,
                    inactive: true,
                },
                'Pacific/Palau': {
                    label: 'Pacific/Palau',
                    sequence: 479,
                    inactive: true,
                },
                'Pacific/Pitcairn': {
                    label: 'Pacific/Pitcairn',
                    sequence: 480,
                    inactive: true,
                },
                'Pacific/Ponape': {
                    label: 'Pacific/Ponape',
                    sequence: 481,
                    inactive: true,
                },
                'Pacific/Port_Moresby': {
                    label: 'Pacific/Port_Moresby',
                    sequence: 482,
                    inactive: true,
                },
                'Pacific/Rarotonga': {
                    label: 'Pacific/Rarotonga',
                    sequence: 483,
                    inactive: true,
                },
                'Pacific/Saipan': {
                    label: 'Pacific/Saipan',
                    sequence: 484,
                    inactive: true,
                },
                'Pacific/Samoa': {
                    label: 'Pacific/Samoa',
                    sequence: 485,
                    inactive: true,
                },
                'Pacific/Tahiti': {
                    label: 'Pacific/Tahiti',
                    sequence: 486,
                    inactive: true,
                },
                'Pacific/Tarawa': {
                    label: 'Pacific/Tarawa',
                    sequence: 487,
                    inactive: true,
                },
                'Pacific/Tongatapu': {
                    label: 'Pacific/Tongatapu',
                    sequence: 488,
                    inactive: true,
                },
                'Pacific/Truk': {
                    label: 'Pacific/Truk',
                    sequence: 489,
                    inactive: true,
                },
                'Pacific/Wake': {
                    label: 'Pacific/Wake',
                    sequence: 490,
                    inactive: true,
                },
                'Pacific/Wallis': {
                    label: 'Pacific/Wallis',
                    sequence: 491,
                    inactive: true,
                },
                'Pacific/Yap': {
                    label: 'Pacific/Yap',
                    sequence: 492,
                    inactive: true,
                },
                PLT: {
                    label: 'PLT',
                    sequence: 493,
                    inactive: true,
                },
                PNT: {
                    label: 'PNT',
                    sequence: 494,
                    inactive: true,
                },
                Poland: {
                    label: 'Poland',
                    sequence: 495,
                    inactive: true,
                },
                Portugal: {
                    label: 'Portugal',
                    sequence: 496,
                    inactive: true,
                },
                PRC: {
                    label: 'PRC',
                    sequence: 497,
                    inactive: true,
                },
                PRT: {
                    label: 'PRT',
                    sequence: 498,
                    inactive: true,
                },
                PST: {
                    label: 'PST',
                    sequence: 499,
                    inactive: true,
                },
                PST8PDT: {
                    label: 'PST8PDT',
                    sequence: 500,
                    inactive: true,
                },
                ROK: {
                    label: 'ROK',
                    sequence: 501,
                    inactive: true,
                },
                Singapore: {
                    label: 'Singapore',
                    sequence: 502,
                    inactive: true,
                },
                SST: {
                    label: 'SST',
                    sequence: 503,
                    inactive: true,
                },
                'SystemV/AST4': {
                    label: 'SystemV/AST4',
                    sequence: 504,
                    inactive: true,
                },
                'SystemV/AST4ADT': {
                    label: 'SystemV/AST4ADT',
                    sequence: 505,
                    inactive: true,
                },
                'SystemV/CST6': {
                    label: 'SystemV/CST6',
                    sequence: 506,
                    inactive: true,
                },
                'SystemV/CST6CDT': {
                    label: 'SystemV/CST6CDT',
                    sequence: 507,
                    inactive: true,
                },
                'SystemV/EST5': {
                    label: 'SystemV/EST5',
                    sequence: 508,
                    inactive: true,
                },
                'SystemV/EST5EDT': {
                    label: 'SystemV/EST5EDT',
                    sequence: 509,
                    inactive: true,
                },
                'SystemV/HST10': {
                    label: 'SystemV/HST10',
                    sequence: 510,
                    inactive: true,
                },
                'SystemV/MST7': {
                    label: 'SystemV/MST7',
                    sequence: 511,
                    inactive: true,
                },
                'SystemV/MST7MDT': {
                    label: 'SystemV/MST7MDT',
                    sequence: 512,
                    inactive: true,
                },
                'SystemV/PST8': {
                    label: 'SystemV/PST8',
                    sequence: 513,
                    inactive: true,
                },
                'SystemV/PST8PDT': {
                    label: 'SystemV/PST8PDT',
                    sequence: 514,
                    inactive: true,
                },
                'SystemV/YST9': {
                    label: 'SystemV/YST9',
                    sequence: 515,
                    inactive: true,
                },
                'SystemV/YST9YDT': {
                    label: 'SystemV/YST9YDT',
                    sequence: 516,
                    inactive: true,
                },
                Turkey: {
                    label: 'Turkey',
                    sequence: 517,
                    inactive: true,
                },
                UCT: {
                    label: 'UCT',
                    sequence: 518,
                    inactive: true,
                },
                Universal: {
                    label: 'Universal',
                    sequence: 519,
                    inactive: true,
                },
                'US/Alaska': {
                    label: 'US/Alaska',
                    sequence: 520,
                    inactive: true,
                },
                'US/Aleutian': {
                    label: 'US/Aleutian',
                    sequence: 521,
                    inactive: true,
                },
                'US/East-Indiana': {
                    label: 'US/East-Indiana',
                    sequence: 522,
                    inactive: true,
                },
                'US/Indiana-Starke': {
                    label: 'US/Indiana-Starke',
                    sequence: 523,
                    inactive: true,
                },
                'US/Michigan': {
                    label: 'US/Michigan',
                    sequence: 524,
                    inactive: true,
                },
                'US/Pacific-New': {
                    label: 'US/Pacific-New',
                    sequence: 525,
                    inactive: true,
                },
                'US/Samoa': {
                    label: 'US/Samoa',
                    sequence: 526,
                    inactive: true,
                },
                UTC: {
                    label: 'UTC',
                    sequence: 527,
                    inactive: true,
                },
                VST: {
                    label: 'VST',
                    sequence: 528,
                    inactive: true,
                },
                'W-SU': {
                    label: 'W-SU',
                    sequence: 529,
                    inactive: true,
                },
                WET: {
                    label: 'WET',
                    sequence: 530,
                    inactive: true,
                },
                Zulu: {
                    label: 'Zulu',
                    sequence: 531,
                    inactive: true,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Time zone',
        }),
        manager: ReferenceColumn({
            attributes: {
                no_auto_map: true,
            },
            label: 'Manager',
            referenceTable: 'sys_user',
        }),
        edu_status: StringColumn({
            active: false,
            default: 'faculty',
            choices: {
                faculty: {
                    label: 'Faculty',
                },
                staff: {
                    label: 'Staff',
                },
                student: {
                    label: 'Student',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'EDU Status',
        }),
        vip: BooleanColumn({
            default: false,
            label: 'VIP',
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
        ldap_server: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                no_text_index: true,
            },
            label: 'LDAP server',
            referenceTable: 'ldap_server_config',
        }),
        web_service_access_only: BooleanColumn({
            default: false,
            label: [
                {
                    hint: 'Prevent user from accessing UI, and require a SOAP role to make API protocol calls (such as SOAP and WSDL requests)',
                    label: 'Web service access only',
                    plural: 'Web service access onlies',
                },
            ],
        }),
        hashed_user_id: StringColumn({
            label: 'Hashed User ID',
            maxLength: 200,
        }),
        sso_source: StringColumn({
            label: [
                {
                    hint: 'IdP or Federation source',
                    label: 'SSO Source',
                    plural: 'SSO Sources',
                },
            ],
            maxLength: 128,
        }),
    },
    textIndex: true,
})
