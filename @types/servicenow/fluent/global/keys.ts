import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'e8522cd851d844b0a12b111568608a9d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '189a133bf75a49dc93ec06e5cc0d6c40'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '033d1d00a52103108bb220b7a4d21200'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Chief Technology Officer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '033d1d00a52103108bb220b7a4d21207'
                        key: {
                            name: 'sys_user'
                            element: 'calendar_integration'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '033dd900a52103108bb220b7a4d2129f'
                        key: {
                            name: 'sys_user_group'
                            element: 'default_assignee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '033dd900a52103108bb220b7a4d212c6'
                        key: {
                            name: 'sys_user'
                            element: 'user_password'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '033dd900a52103108bb220b7a4d212cd'
                        key: {
                            name: 'sys_user'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '033dd900a52103108bb220b7a4d212d4'
                        key: {
                            name: 'sys_user'
                            element: 'accumulated_roles'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '033dd900a52103108bb220b7a4d212db'
                        key: {
                            name: 'sys_user'
                            element: 'last_login_device'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '033dd900a52103108bb220b7a4d212e2'
                        key: {
                            name: 'sys_user'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '033dd900a52103108bb220b7a4d212e9'
                        key: {
                            name: 'sys_user'
                            element: 'employee_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '033dd900a52103108bb220b7a4d212fb'
                        key: {
                            name: 'sys_user'
                            element: 'preferred_language'
                            value: 'NULL_OVERRIDE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '033dd900a52103108bb220b7a4d212fc'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'ES'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '073d1d00a52103108bb220b7a4d21200'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'IT Technician'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d2129d'
                        key: {
                            name: 'sys_user_group'
                            element: 'include_members'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212a4'
                        key: {
                            name: 'sys_user_group'
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212aa'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_mod_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212c4'
                        key: {
                            name: 'sys_user'
                            element: 'sys_class_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212cb'
                        key: {
                            name: 'sys_user'
                            element: 'middle_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212d2'
                        key: {
                            name: 'sys_user'
                            element: 'gender'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212d9'
                        key: {
                            name: 'sys_user'
                            element: 'locked_out'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212e0'
                        key: {
                            name: 'sys_user'
                            element: 'default_perspective'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212e7'
                        key: {
                            name: 'sys_user'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212ee'
                        key: {
                            name: 'sys_user'
                            element: 'cost_center'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073dd900a52103108bb220b7a4d212f4'
                        key: {
                            name: 'sys_user'
                            element: 'sys_mod_count'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '073dd900a52103108bb220b7a4d212fc'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'CN'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b3d1d00a52103108bb220b7a4d21207'
                        key: {
                            name: 'sys_user'
                            element: 'edu_status'
                            value: 'staff'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d21299'
                        key: {
                            name: 'sys_user_group'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d2129b'
                        key: {
                            name: 'sys_user_group'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212a2'
                        key: {
                            name: 'sys_user_group'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212a8'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_created_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212c9'
                        key: {
                            name: 'sys_user'
                            element: 'introduction'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212d0'
                        key: {
                            name: 'sys_user'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212d7'
                        key: {
                            name: 'sys_user'
                            element: 'last_login'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212de'
                        key: {
                            name: 'sys_user'
                            element: 'calendar_integration'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212e5'
                        key: {
                            name: 'sys_user'
                            element: 'street'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212ec'
                        key: {
                            name: 'sys_user'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3dd900a52103108bb220b7a4d212f2'
                        key: {
                            name: 'sys_user'
                            element: 'sys_created_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b3dd900a52103108bb220b7a4d212fe'
                        key: {
                            name: 'sys_user'
                            element: 'introduction'
                            value: 'Mrs.'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b6e9908a56103108bb220b7a4d21254'
                        key: {
                            name: 'sys_user'
                            element: 'federated_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f3d1d00a52103108bb220b7a4d21202'
                        key: {
                            name: 'sys_user'
                            element: 'gender'
                            value: 'Male'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f3dd900a52103108bb220b7a4d21299'
                        key: {
                            name: 'sys_user_group'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212a0'
                        key: {
                            name: 'sys_user_group'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212a6'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_updated_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212c7'
                        key: {
                            name: 'sys_user'
                            element: 'preferred_language'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212ce'
                        key: {
                            name: 'sys_user'
                            element: 'home_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212d5'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212dc'
                        key: {
                            name: 'sys_user'
                            element: 'manager_hp1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212e3'
                        key: {
                            name: 'sys_user'
                            element: 'company'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212ea'
                        key: {
                            name: 'sys_user'
                            element: 'building'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3dd900a52103108bb220b7a4d212f0'
                        key: {
                            name: 'sys_user'
                            element: 'sys_updated_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f3dd900a52103108bb220b7a4d212fb'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'US'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f3dd900a52103108bb220b7a4d212ff'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Senior Developer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2fab5556d713310091204187ed6103f1'
                        key: {
                            name: 'sys_user'
                            element: 'enable_multifactor_authn'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3af6ad88a5a903108bb220b7a4d212fa'
                        key: {
                            name: 'sys_user'
                            element: 'identity_type'
                            value: 'ai_agent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ef6ad88a5a903108bb220b7a4d212f4'
                        key: {
                            name: 'sys_user'
                            element: 'identity_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '433d1d00a52103108bb220b7a4d21200'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Chief Executive Officer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212a0'
                        key: {
                            name: 'sys_user_group'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212a6'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212c7'
                        key: {
                            name: 'sys_user'
                            element: 'password_needs_reset'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212ce'
                        key: {
                            name: 'sys_user'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212d5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212dc'
                        key: {
                            name: 'sys_user'
                            element: 'manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212e3'
                        key: {
                            name: 'sys_user'
                            element: 'edu_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212ea'
                        key: {
                            name: 'sys_user'
                            element: 'vip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433dd900a52103108bb220b7a4d212f0'
                        key: {
                            name: 'sys_user'
                            element: 'sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '433dd900a52103108bb220b7a4d212fb'
                        key: {
                            name: 'sys_user'
                            element: 'preferred_language'
                            value: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '433dd900a52103108bb220b7a4d212fc'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'IT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f150a0a0b99004ddcb93e306d34'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                            value: 'dd/MM/yyyy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f150a0a0b99009223557f206609'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                            value: 'MM-dd-yyyy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f150a0a0b9900b3808c63bf1f15'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                            value: 'dd.MM.yyyy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f150a0a0b9900d636fa50643500'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                            value: 'dd-MM-yyyy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f190a0a0b99008e24859bc1798c'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                            value: 'yyyy-MM-dd'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f190a0a0b9900bb078c4d985f19'
                        key: {
                            name: 'sys_user'
                            element: 'time_format'
                            value: 'HH.mm.ss'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f190a0a0b9900ffd40e697ec7ab'
                        key: {
                            name: 'sys_user'
                            element: 'time_format'
                            value: 'HH:mm:ss'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f1a0a0a0b9900ec9c176210d0e2'
                        key: {
                            name: 'sys_user'
                            element: 'time_format'
                            value: 'hh:mm:ss a'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '453b8f220a0a0b9900012d7cb126fb6d'
                        key: {
                            name: 'sys_user'
                            element: 'time_format'
                            value: 'hh.mm.ss a'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4545fa550a0a0b9900d6d8b46b0b831f'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                            value: 'NULL_OVERRIDE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '45481cf90a0a0b99009d777823a844b6'
                        key: {
                            name: 'sys_user'
                            element: 'time_format'
                            value: 'NULL_OVERRIDE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '473d1d00a52103108bb220b7a4d21206'
                        key: {
                            name: 'sys_user'
                            element: 'notification'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d2129e'
                        key: {
                            name: 'sys_user_group'
                            element: 'exclude_manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212a5'
                        key: {
                            name: 'sys_user_group'
                            element: 'cost_center'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212c5'
                        key: {
                            name: 'sys_user'
                            element: 'user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212cc'
                        key: {
                            name: 'sys_user'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212d3'
                        key: {
                            name: 'sys_user'
                            element: 'roles'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212da'
                        key: {
                            name: 'sys_user'
                            element: 'last_password'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212e1'
                        key: {
                            name: 'sys_user'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212e8'
                        key: {
                            name: 'sys_user'
                            element: 'zip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '473dd900a52103108bb220b7a4d212ef'
                        key: {
                            name: 'sys_user'
                            element: 'avatar'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48fe1980a5a103108bb220b7a4d2126d'
                        key: {
                            name: 'sys_user'
                            element: 'enable_multifactor_authn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b3d1d00a52103108bb220b7a4d21207'
                        key: {
                            name: 'sys_user'
                            element: 'edu_status'
                            value: 'student'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d2129c'
                        key: {
                            name: 'sys_user_group'
                            element: 'manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212a3'
                        key: {
                            name: 'sys_user_group'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212a9'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_created_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212ca'
                        key: {
                            name: 'sys_user'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212d1'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212d8'
                        key: {
                            name: 'sys_user'
                            element: 'last_login_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212df'
                        key: {
                            name: 'sys_user'
                            element: 'photo'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212e6'
                        key: {
                            name: 'sys_user'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212ed'
                        key: {
                            name: 'sys_user'
                            element: 'sys_domain'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3dd900a52103108bb220b7a4d212f3'
                        key: {
                            name: 'sys_user'
                            element: 'sys_created_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b3dd900a52103108bb220b7a4d212fe'
                        key: {
                            name: 'sys_user'
                            element: 'introduction'
                            value: 'Dr.'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b3dd900a52103108bb220b7a4d212ff'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'System Administrator'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f3d1d00a52103108bb220b7a4d21202'
                        key: {
                            name: 'sys_user'
                            element: 'gender'
                            value: 'Female'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d2129a'
                        key: {
                            name: 'sys_user_group'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212a1'
                        key: {
                            name: 'sys_user_group'
                            element: 'roles'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212a7'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_updated_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212c8'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212cf'
                        key: {
                            name: 'sys_user'
                            element: 'mobile_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212d6'
                        key: {
                            name: 'sys_user'
                            element: 'time_format'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212dd'
                        key: {
                            name: 'sys_user'
                            element: 'notification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212e4'
                        key: {
                            name: 'sys_user'
                            element: 'source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212eb'
                        key: {
                            name: 'sys_user'
                            element: 'failed_attempts'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd900a52103108bb220b7a4d212f1'
                        key: {
                            name: 'sys_user'
                            element: 'sys_updated_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f3dd900a52103108bb220b7a4d212fb'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'GB'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f3dd900a52103108bb220b7a4d212ff'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Junior Developer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50ce51cca56103108bb220b7a4d2120c'
                        key: {
                            name: 'sys_user'
                            element: 'hashed_user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cb1e18ca52503108bb220b7a4d21280'
                        key: {
                            name: 'sys_user'
                            element: 'schedule'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60bd9908a52103108bb220b7a4d212e2'
                        key: {
                            name: 'sys_user'
                            element: 'internal_integration_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b47ed0ca5a903108bb220b7a4d212b7'
                        key: {
                            name: 'sys_user'
                            element: 'sys_domain_path'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72f6ad88a5a903108bb220b7a4d212f6'
                        key: {
                            name: 'sys_user'
                            element: 'identity_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7af6ad88a5a903108bb220b7a4d212fa'
                        key: {
                            name: 'sys_user'
                            element: 'identity_type'
                            value: 'unclassified'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '833d1d00a52103108bb220b7a4d21200'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Solution Consultant'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d2129e'
                        key: {
                            name: 'sys_user_group'
                            element: 'exclude_manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212a5'
                        key: {
                            name: 'sys_user_group'
                            element: 'cost_center'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212c5'
                        key: {
                            name: 'sys_user'
                            element: 'user_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212cc'
                        key: {
                            name: 'sys_user'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212d3'
                        key: {
                            name: 'sys_user'
                            element: 'roles'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212da'
                        key: {
                            name: 'sys_user'
                            element: 'last_password'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212e1'
                        key: {
                            name: 'sys_user'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212e8'
                        key: {
                            name: 'sys_user'
                            element: 'zip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '833dd900a52103108bb220b7a4d212ef'
                        key: {
                            name: 'sys_user'
                            element: 'avatar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '833dd900a52103108bb220b7a4d212fc'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'BR'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '873d1d00a52103108bb220b7a4d21206'
                        key: {
                            name: 'sys_user'
                            element: 'notification'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d2129c'
                        key: {
                            name: 'sys_user_group'
                            element: 'manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212a3'
                        key: {
                            name: 'sys_user_group'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212a9'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_created_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212ca'
                        key: {
                            name: 'sys_user'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212d1'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212d8'
                        key: {
                            name: 'sys_user'
                            element: 'last_login_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212df'
                        key: {
                            name: 'sys_user'
                            element: 'photo'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212e6'
                        key: {
                            name: 'sys_user'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212ed'
                        key: {
                            name: 'sys_user'
                            element: 'sys_domain'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '873dd900a52103108bb220b7a4d212f3'
                        key: {
                            name: 'sys_user'
                            element: 'sys_created_on'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '873dd900a52103108bb220b7a4d212fe'
                        key: {
                            name: 'sys_user'
                            element: 'introduction'
                            value: 'Mr.'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '876e9908a56103108bb220b7a4d21255'
                        key: {
                            name: 'sys_user'
                            element: 'federated_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8b182180a5e903108bb220b7a4d2120e'
                        key: {
                            name: 'sys_user_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d2129a'
                        key: {
                            name: 'sys_user_group'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212a1'
                        key: {
                            name: 'sys_user_group'
                            element: 'roles'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212a7'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212c8'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212cf'
                        key: {
                            name: 'sys_user'
                            element: 'mobile_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212d6'
                        key: {
                            name: 'sys_user'
                            element: 'time_format'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212dd'
                        key: {
                            name: 'sys_user'
                            element: 'notification'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212e4'
                        key: {
                            name: 'sys_user'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212eb'
                        key: {
                            name: 'sys_user'
                            element: 'failed_attempts'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b3dd900a52103108bb220b7a4d212f1'
                        key: {
                            name: 'sys_user'
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b3dd900a52103108bb220b7a4d212ff'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Vice President'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f3d1d00a52103108bb220b7a4d21202'
                        key: {
                            name: 'sys_user'
                            element: 'gender'
                            value: 'Not Specified'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d2129f'
                        key: {
                            name: 'sys_user_group'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212a5'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8f3dd900a52103108bb220b7a4d212c0'
                        key: {
                            name: 'sys_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212c6'
                        key: {
                            name: 'sys_user'
                            element: 'password_needs_reset'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212cd'
                        key: {
                            name: 'sys_user'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212d4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212db'
                        key: {
                            name: 'sys_user'
                            element: 'manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212e2'
                        key: {
                            name: 'sys_user'
                            element: 'edu_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212e9'
                        key: {
                            name: 'sys_user'
                            element: 'vip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3dd900a52103108bb220b7a4d212ef'
                        key: {
                            name: 'sys_user'
                            element: 'sys_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f3dd900a52103108bb220b7a4d212fb'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'DE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f3dd900a52103108bb220b7a4d212ff'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Administrative Assistant'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9618ad40a5e903108bb220b7a4d21220'
                        key: {
                            name: 'sys_user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9cb1e18ca52503108bb220b7a4d21281'
                        key: {
                            name: 'sys_user'
                            element: 'schedule'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938177c6112278001de498db9d9ea0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'MIT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938181c6112278008ae45ac892ebf7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Apia'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493818cc61122780095da3854fdacaf'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Midway'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938196c61122780029c2044059c640'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Niue'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381a0c61122780180cf2a894bae4d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Pago_Pago'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381a0c611227801a0d86681987229'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Samoa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381aac611227800df48c4b75d48d5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Samoa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381aac611227801226a77dbeeb604'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Adak'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381b4c6112278007be8c2b970ac1e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Atka'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381bec6112278004cd580fe4b4a92'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'HST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381c8c61122780054f9f17f8de3f0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Fakaofo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381d2c611227800dc86eb67ba36f5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Johnston'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381d2c611227800e576d47bee2ca9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Honolulu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381dcc6112278001db5ecb7625d4d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Rarotonga'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381dcc61122780092b1a10108b96f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Tahiti'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381e6c611227800cbf9bd32e592cd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/HST10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381e6c6112278017918f008569480'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Aleutian'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381f0c611227801546dbc2af4dd07'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Hawaii'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381f0c611227801f08ed849541b25'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Marquesas'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381fac611227800322bce39a5f5f9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'AST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49381fac611227801d9e28222bd4c49'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Anchorage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938204c611227801a5db4bbdc16fa1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Juneau'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938204c611227801e0512a008665c3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Nome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493820ec611227801f0aecc040342e3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Yakutat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938218c611227801c1ac4611685583'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/YST9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938218c611227801cebc9fc488ae5b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Gambier'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938222c611227801342a6752850f03'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/YST9YDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938222c611227801cbda0a46027aef'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Alaska'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493822cc61122780057ea52c1fc9607'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Dawson'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493822cc611227801d8d39f37e595f7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Ensenada'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938236c6112278002d95b396251744'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Los_Angeles'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938240c611227800bf555587e3c418'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Tijuana'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938240c6112278017b47031b05ea6e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Vancouver'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493824ac6112278006c1a822dd7947b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Pacific'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493824ac61122780073305c94c9134d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Whitehorse'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938254c611227801408a92021f7d12'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Yukon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493825ec6112278001fc1a6904b5139'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'PST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493825ec6112278015db13f1e7d74d0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Mexico/BajaNorte'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938268c6112278001ec58adf84be13'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Pitcairn'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938268c611227800718242acc79aa5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'PST8PDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493827cc611227800c4d04d94aae515'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/PST8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938286c61122780046b90adcf96c4c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/PST8PDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938290c6112278011e67aceaa99ecd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Pacific'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938290c611227801284fd4b1f661ec'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Pacific-New'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493829ac6112278003f96ee94bb5c2b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Cambridge_Bay'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493829ac611227800ce16ad63bd5704'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Chihuahua'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493829ac61122780190ef12bbea75b2'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Boise'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382a4c61122780032bd650fecb71f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Dawson_Creek'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382aec611227800257f1bfb4c80b7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Hermosillo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382aec61122780130633a8fcce634'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Denver'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382aec611227801c286e2be0a621f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Edmonton'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382b8c611227800bcb23e28bdb2ca'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Inuvik'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382c2c6112278005a3923a6224592'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Mazatlan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382c2c6112278015d616e52628e8e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Phoenix'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382ccc61122780044f787d837786f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Yellowknife'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382ccc611227801a7b0bf210ae1bf'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Shiprock'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382ccc611227801d6fbb3bb5b5a5e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Mountain'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382eac6112278002016b077708deb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'MST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382f4c611227800c00025336134b4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'MST7MDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382f4c61122780149a794828d2698'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Mexico/BajaSur'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382fec6112278009903f4c2bf2f95'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Navajo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49382fec611227801d2b9b77b9649aa'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'PNT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938308c611227800c5aa00f0ac405d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/MST7MDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938308c6112278019ecd802827954a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/MST7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938312c611227800b23d12b4ef64bf'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Mountain'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938312c6112278011c0d60ee6f9729'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Arizona'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493831cc6112278019c0bd62175e983'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Cancun'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493831cc611227801c783c5f599a722'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Belize'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493831cc611227801cd280bb88bf654'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Chicago'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938326c6112278000029ac92767c92'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Costa_Rica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938326c611227800b0095d27ee14df'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/El_Salvador'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938330c6112278001827d18a0ca974'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Managua'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938330c61122780136d9d8ad2732ac'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Guatemala'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493833ac611227801be289324f00a90'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Merida'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493833ac611227801de45e2df813e4d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Menominee'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938344c61122780159e154eaff03eb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Mexico_City'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938344c611227801d87b852f3a337b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Monterrey'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493834ec61122780118958e842d18d6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Rainy_River'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493834ec611227801958bf97f6e0103'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/North_Dakota/Center'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938358c61122780022d166630f0b40'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Regina'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938358c61122780102b2b69da2f900'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Rankin_Inlet'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938358c611227801e1962d77cb83dd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Swift_Current'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938362c6112278014a75bb0eac53f8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Tegucigalpa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493836cc611227800e3570c37fc17bc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'CST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493836cc6112278017779e32bd8e260'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Winnipeg'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938376c6112278015bc6c80539977d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Central'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938376c61122780167e3a5338e2bd4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'CST6CDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938380c611227800b203525d230ee6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/East-Saskatchewan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493838ac6112278006dbdc99bc9ea90'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Chile/EasterIsland'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493838ac611227800f8395f979dbbcb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Saskatchewan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938394c611227800b3f9b894c68ba7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Mexico/General'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493839ec61122780039c8c1b25befdc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Galapagos'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493839ec611227801cfb8028734a336'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Easter'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383a8c611227800aa0877a218ea97'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/CST6CDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383a8c61122780111ded2483a7ef9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Central'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383a8c611227801ab2b553e408d03'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/CST6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383b2c6112278003bc20ef9e64a1a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Bogota'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383b2c6112278014150561f2fa694'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Cayman'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383bcc611227800b096973d91dd6b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Eirunepe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383bcc611227801014e21edf782e8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Detroit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383c6c6112278004bf53ed6c0dfec'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Grand_Turk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383c6c6112278016eb6bcb9dcbf1c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Fort_Wayne'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383d0c611227800d1e7c2c1625e80'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Guayaquil'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383dac611227800b514047339757b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Indiana/Indianapolis'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383dac611227800c68a989431990c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Havana'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383e4c611227800354749adb2071a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Indiana/Knox'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383eec61122780167d7fbcbfe0c14'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Indiana/Vevay'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383eec611227801db484d9c1ef217'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Indiana/Marengo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49383f8c61122780094cb8b0d42ee69'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Indianapolis'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938402c611227801a1c42f58ddfeeb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Iqaluit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493840cc61122780019a37a850bac31'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Kentucky/Louisville'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493840cc61122780121b59aa6a363c6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Jamaica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938420c611227801381960775a84ca'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Knox_IN'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938420c6112278013bdd368b106ab7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Kentucky/Monticello'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493842ac6112278004845aac55e756c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Louisville'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493842ac61122780120dbf383f08abc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Lima'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493843ec611227801701bdc789f4b53'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Montreal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938467c6112278008c5ea2d4b6b548'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Nassau'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938471c61122780198defc9d5da0ee'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/New_York'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493847bc6112278004bfe6b9979820c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Panama'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493847bc6112278012c543139956aa1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Pangnirtung'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493847bc611227801579a3047830d71'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Nipigon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938485c6112278009aba323310e801'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Porto_Acre'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938485c6112278014b6bed733341e3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Port-au-Prince'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938499c6112278013e75a58f41f31e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Rio_Branco'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384a3c611227800633d510e740a80'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Thunder_Bay'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384b7c611227800b533b8fc2d03a8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Brazil/Acre'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384c1c6112278003468f41f9c1992'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Cuba'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384c1c611227800569c6087cd6253'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Eastern'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384cbc611227800d6706769f0fc96'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'EST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384d5c6112278006db72453bdf963'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'EST5EDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384dfc611227800b6d6abc5e6e02d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'IET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384dfc611227801c7865b016470ec'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Jamaica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384e9c61122780045c97b7e0809f8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/EST5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384e9c611227800e22f2b0bdfffb0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/EST5EDT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384f3c611227800510e393600d6a7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Indiana-Starke'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384f3c611227801412e75385fc628'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Eastern'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384f3c61122780186dda38ecee1fc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/East-Indiana'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384fdc611227801295fe84867d50d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Anguilla'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49384fdc6112278017cf6b65f26085f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'US/Michigan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938507c611227801071c844af75cbb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Antigua'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938511c6112278000d13299b42d1ec'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Asuncion'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938511c611227801e152f462243eb6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Aruba'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493851bc611227800650892396472a0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Barbados'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493851bc61122780115d06c07d19142'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Boa_Vista'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938525c61122780126a29c034b62ef'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Caracas'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938525c6112278013e15f72486a38e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Curacao'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938525c6112278017dc1cb8f895dc3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Cuiaba'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493852fc61122780061373fac9777ff'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Glace_Bay'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493852fc6112278011410e5a8bf4d96'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Dominica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938539c6112278000237569225a439'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Grenada'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938539c6112278007244caf67d5c2c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Goose_Bay'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938539c6112278017f11fb80c2b7a3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Guadeloupe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938543c611227800ebf068ad5f16e9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Halifax'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938543c61122780175ade603fe8515'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Guyana'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493854dc611227800602b6bcc0428ed'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Manaus'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493854dc611227801f44ec7ceda65a0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/La_Paz'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938557c6112278007173238533f4e9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Montserrat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938557c611227801c297a33da5f9d1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Martinique'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938561c611227800313170593c77a1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Porto_Velho'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938561c61122780191f80145a5dc78'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Port_of_Spain'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493856bc611227800afae4a67941c97'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Santiago'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493856bc611227801a4c5b4016a0122'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Puerto_Rico'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493856bc611227801db9852c29ffba5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Santo_Domingo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938575c6112278003cb075bd6833aa'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/St_Lucia'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938575c611227801ed54599d194253'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/St_Kitts'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493857fc61122780019f9d232b6b624'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/St_Vincent'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493857fc6112278006504bc0b0ea59c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/St_Thomas'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493857fc6112278016089a52631a68d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Thule'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938589c611227800c16b1831511fcd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Virgin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938589c611227800ecb67f864ba45d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Tortola'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938593c61122780015fb385c8b2e01'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Bermuda'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938593c6112278005e222ee8103995'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/Palmer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493859dc61122780120540c7d11097d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Stanley'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493859dc6112278016de06707ecb828'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Brazil/West'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49385a7c6112278004d2af2c2dab318'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Chile/Continental'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49385a7c611227800a7c45e81062cfd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Atlantic'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49385b1c6112278015b0333cff69bf1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'PRT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49385f7c611227800e265d0f2c0293d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/AST4ADT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49385f7c611227801d47b2b893ce255'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SystemV/AST4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938601c6112278003a9d953ed606d8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Canada/Newfoundland'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938601c611227801581e8020155e73'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'CNT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938601c6112278018a6e6e3bcb0011'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/St_Johns'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493860bc6112278003fbbfc41d334a9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'AGT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493860bc6112278004ed904ebdcb920'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Araguaina'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938615c6112278008997d123ef86b1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Belem'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938615c6112278014e45b30b85510b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Buenos_Aires'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493861fc611227800e99ce5f40e667c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Cayenne'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493861fc6112278013b9fae90cd3f7c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Cordoba'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493861fc611227801c1f5b223a13935'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Catamarca'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938629c6112278002f356f77292345'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Godthab'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938629c611227801706da8ee93e6ad'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Fortaleza'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938633c61122780033b121c89618ce'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Maceio'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938633c6112278015d252d4f5cdb1d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Jujuy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938633c611227801b229208e7b3dc8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Mendoza'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493863dc61122780137d4a4210a4eb9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Montevideo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493863dc611227801aa2c2301221e7f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Miquelon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938647c6112278006963d0ab12ab5e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Paramaribo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938647c61122780118223dbb373366'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Recife'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938647c61122780170039183c7e41c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Rosario'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938651c611227800fa39d78cfc1723'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Sao_Paulo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938651c611227801eb904d560cd680'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'BET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493865bc6112278004eeaafe2105f57'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Brazil/East'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938665c611227800457d21bfff6442'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/South_Georgia'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938665c61122780104fc2366b00173'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Noronha'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493866fc6112278001a0ae611ee816c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Brazil/DeNoronha'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938679c611227800c92507286c015e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Cape_Verde'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938679c6112278015e92d766bac828'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Scoresbysund'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938679c611227801fa681c83c4591f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Azores'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938683c6112278008aeed02c6faf95'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Abidjan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493868dc611227800132ae7eebb203f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Bamako'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493868dc61122780144b18f0a6aaef3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Accra'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938697c61122780065b738c8e1bcfb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Banjul'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938697c611227801dfd868db4b3659'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Bissau'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386a1c611227800f894ced24845e2'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Casablanca'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386a1c611227801e6e30587313e99'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Dakar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386a1c611227801f1680f63655aad'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Conakry'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386abc61122780045e228d43a318f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Freetown'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386abc6112278014275d4158b6abf'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/El_Aaiun'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386b5c61122780002b249a95d473c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Lome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386b5c611227801021f3437a7df04'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Nouakchott'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386b5c61122780106dabac9df73b0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Monrovia'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386bfc611227800163956083506d9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Sao_Tome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386bfc6112278004eb043cc0e56ab'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Ouagadougou'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386c9c611227800f864fe19a4043b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Canary'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386c9c6112278010e434dde613239'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Timbuktu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386c9c6112278016477d9c414aa4d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'America/Danmarkshavn'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386d3c6112278002c17f7976e7393'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Madeira'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386d3c611227801ae9aaae04a6315'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Faeroe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386ddc611227800d9896e4988b9a8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Reykjavik'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386ddc611227801cda59bf078f283'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/St_Helena'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386e7c61122780033788df1834302'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Eire'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49386fcc6112278007898695298ee57'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Etc/Greenwich'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493872ec611227800e4bb3c35b6dc48'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Etc/UCT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938738c611227800c8769b14c7bc98'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Etc/Universal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938738c611227800cffc791eedcdbc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Etc/UTC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938738c611227800e2ecc779b12130'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Etc/Zulu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938742c611227800272961f56c2042'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Belfast'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938742c6112278010dc656f258c8d8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Dublin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493874cc611227800e0e51500f7b5d1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/London'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493874cc61122780158480747f33d24'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Lisbon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938756c6112278009abc698c3f87cc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'GB-Eire'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938756c611227800dfcb47649e1115'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'GB'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938760c61122780078dc4c5899a608'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'GMT0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938760c611227800c70b0dbd39eaa0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Greenwich'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938760c611227800c792d4189d5249'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'GMT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493876ac611227801a6a1a759e4f45c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Iceland'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938774c6112278005c98f359a008fa'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'UCT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938774c611227800bef361736f679a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Portugal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938774c6112278013d946094b2f2b7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'UTC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493877ec611227800867fc987c21c0c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'WET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493877ec611227801d840cd191359f1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Universal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938788c6112278002f81160458a7c3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Zulu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938788c611227800c3e82b9d8bf54d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Algiers'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938788c611227801bf7b230969f800'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Bangui'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938792c6112278002b349d6d869d96'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Ceuta'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938792c6112278002d74407e3fd309'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Brazzaville'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938792c6112278008b567cf504c51c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Douala'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493879cc611227801c1c92b5b179316'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Lagos'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493879cc611227801dafbaf5710c046'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Kinshasa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387a6c611227800ea546178010eda'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Malabo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387a6c6112278012e7c6a72f69591'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Luanda'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387a6c6112278017e4dee2c2ce719'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Libreville'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387b0c61122780049cf9fb8df671b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Ndjamena'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387b0c611227800bc55968647cb7a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Porto-Novo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387b0c611227801de0b5e3e9d3153'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Niamey'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387c4c611227800497904815c680d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Windhoek'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387c4c6112278009871979355854f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Tunis'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387d8c6112278005c7734d7bd878b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Atlantic/Jan_Mayen'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387d8c611227800ff9053dbde00c9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Arctic/Longyearbyen'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387e2c61122780096212a20c914bb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'CET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49387f6c6112278005b675e32f95560'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'ECT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938800c6112278004c6320e73bed20'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Amsterdam'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493880ac6112278000754fc8009045d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Berlin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493880ac611227800ffd135be8c1881'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Andorra'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493880ac611227801000bcf6dcdbc89'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Belgrade'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938814c6112278006458a65c36a129'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Brussels'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938814c6112278015c998a17da0eae'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Bratislava'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493881ec6112278009b622079e7edae'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Gibraltar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493881ec611227801bb96969f351887'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Copenhagen'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493881ec611227801f82ab4d30d50d5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Budapest'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938828c611227801474e45eb25aca4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Ljubljana'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938832c61122780063a721c7041404'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Luxembourg'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938832c611227800719f1f6b2115aa'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Madrid'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493883cc611227801401d28217ec757'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Monaco'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493883cc61122780185ad796051d6f0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Malta'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938846c61122780023801607c93f8f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Paris'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938846c6112278003a6e5c511dfcd8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Oslo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938846c611227800ae464692c8e535'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Prague'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938850c61122780187b2878b0be5a6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Rome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938850c611227801d9e2c7d471fb27'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/San_Marino'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493885ac6112278000951a06a018d9d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Skopje'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493885ac611227801b7ae22965f2213'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Sarajevo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493885ac611227801ce1beabadada13'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Stockholm'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938864c6112278008acfc32058af30'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Tirane'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938864c6112278014e0e90e0c7039b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Vaduz'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938864c6112278019e11a135cac4e6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Vatican'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493886ec61122780062610bc440893b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Warsaw'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493886ec611227800979f67b52146f6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Vienna'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938878c611227800d12eeaf2b549dd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Zagreb'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938878c6112278015f157b950db4ff'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Zurich'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938882c611227800e7f6eb8ff36a6c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Poland'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938882c61122780103de900a8b0210'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'ART'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938882c6112278017b40fe6141fb05'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'MET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493888cc6112278000b6ef803f9149b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Bujumbura'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493888cc61122780108f8e07c791bbf'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Blantyre'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938896c611227800a29c6eefae1242'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Cairo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938896c611227801cc0a7fe52a58eb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Gaborone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388a0c6112278003b4b1ec3583550'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Johannesburg'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388a0c611227800c0a9f94322a529'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Kigali'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388a0c611227800c52200f33a38d0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Harare'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388aac611227800d7220065e173a2'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Lubumbashi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388b4c61122780164b9b6c908a1d9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Maseru'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388b4c611227801a80aeaa5e1e3d6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Maputo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388b4c611227801f9338f3a7346a7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Lusaka'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388bec61122780053c3f54a7cdb7c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Tripoli'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388bec611227801dc64a510f7715b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Mbabane'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388c8c611227800e33e18d874f1f8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Beirut'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388c8c61122780166340c458223dd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Amman'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388d2c611227800e9094392e8912d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Gaza'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388d2c61122780101ac9351398cd7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Damascus'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388dcc6112278001474eaf9552564'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Jerusalem'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388dcc61122780107bd0d354cf012'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Nicosia'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388dcc6112278015f1f9c4fdd3b68'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Istanbul'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388e6c61122780061f533a81e0e75'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'CAT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388e6c6112278010ca208a3b502db'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Tel_Aviv'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388f0c6112278012922f61466d809'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'EET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388f0c611227801b66b0634e33e3e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Egypt'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388fac611227800009f0d71fd991d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Athens'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49388fac611227800ca37837562701c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Bucharest'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938904c61122780002a6ffe3adc35c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Chisinau'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938904c61122780021d23b72db8d03'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Helsinki'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493890ec6112278001f770839fea2a7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Kaliningrad'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493890ec6112278007124af85208948'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Istanbul'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938918c611227801bfbfb819354599'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Kiev'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938922c61122780125d61eff80d42f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Minsk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493892cc611227800c722438c72b58b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Riga'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493892cc6112278010c6cfc36a657e6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Nicosia'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938940c61122780155d3a3e22e4cdc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Sofia'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938940c6112278019a8416a75a92db'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Simferopol'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493894ac611227800dc9766f9932da2'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Tiraspol'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493894ac611227801b994de6cebecf1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Tallinn'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938954c61122780057e787ebba810c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Uzhgorod'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938954c611227801217e6773c7e69d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Vilnius'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493895ec61122780128edf238ff2813'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Libya'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493895ec611227801d686c1667d5443'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Israel'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493895ec611227801f1bd988abed98e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Zaporozhye'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938968c6112278001dddba0817a845'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Turkey'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938968c611227800c7e8a76d10973c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Addis_Ababa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938972c6112278007b4703d879d07e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Asmera'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938972c611227801732ed2b5f404a4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Dar_es_Salaam'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493897cc611227800e9399918886ce1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Djibouti'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938986c611227801779885fe5310fd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Khartoum'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938986c611227801c486f27f8c0e44'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Kampala'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938990c611227800682406f8553d7f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Mogadishu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938990c61122780115126e7b14a687'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Africa/Nairobi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a493899ac61122780035e6e3ff63f647'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/Syowa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389a4c611227800c9630a8e8550b3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Aden'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389a4c6112278011daa0ed750ee93'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Bahrain'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389a4c61122780185572a4d078dd4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Baghdad'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389aec61122780024de7dfe9eba08'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Qatar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389aec611227800879860ca130bfb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Kuwait'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389b9c6112278008b058b74e03836'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Riyadh'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389c3c61122780020f2379fd400d9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Antananarivo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389c3c611227800fe315d0e7b19d4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Comoro'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389c3c611227801f21c50bf70671f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Moscow'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389cdc6112278002803d5012b3f88'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Riyadh87'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389cdc6112278005aebd9b7e93164'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Mayotte'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389cdc61122780132021a94994192'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'W-SU'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389d7c61122780113981b30a8b2b3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Riyadh88'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389d7c611227801672bbb7a95ec81'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Riyadh89'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389e1c6112278001bdb58b2f97dba'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Mideast/Riyadh89'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389e1c6112278006833f2f392b4e1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Mideast/Riyadh87'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389e1c6112278012a73d988575674'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Mideast/Riyadh88'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389ebc611227800dd75a46c2e72c8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Tehran'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389ebc6112278015686547bd23801'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Iran'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389ebc6112278018d30fb2e76caee'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Aqtau'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389f5c6112278008ab08f9280f018'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Baku'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389f5c6112278014d921af980663c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Dubai'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389f5c611227801b3262790f1bfc1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Muscat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389ffc6112278008dcd5de6767c6f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Oral'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a49389ffc611227801a5af9ff2f36dbe'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Tbilisi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a09c611227800ad157fe7e3996b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Yerevan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a09c611227801bfa3d38b47988a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Europe/Samara'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a13c6112278009c82f4ad562e88'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Mahe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a13c61122780159780d7477edfd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Mauritius'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a1dc611227800c8570cdc36e0f7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'NET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a1dc611227800caf0ed2fee328d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Kabul'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a1dc611227800d8ca48d12005b1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Reunion'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a27c61122780146b6dbed57efb2'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Ashgabat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a27c6112278018f655961698139'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Aqtobe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a31c611227800717d91f0a5b51e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Bishkek'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a31c611227800eafb714bc6a1a6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Dushanbe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a31c6112278018f1be94959d550'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Ashkhabad'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a3bc61122780004ab2f7543e5d4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Tashkent'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a3bc611227800c26b16abcdb7aa'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Samarkand'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a3bc61122780121df2a85cc2350'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Karachi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a45c61122780082d210a05fb9d5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Yekaterinburg'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a45c611227801302fc5325067c4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Kerguelen'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a4fc61122780048f675373acdd4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'PLT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a4fc61122780090302571af1e11'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Maldives'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a59c6112278002c91038db3affb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Kolkata'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a59c61122780105eb6f1a82e1f1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Katmandu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a63c61122780026f9e555b5a1a3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/Vostok'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a63c611227800e06703f23ecb56'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Almaty'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a63c611227801a3ca10df039841'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/Mawson'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a6dc6112278006c5482130dbfb5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Dacca'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a6dc6112278008b1a4ff509dc97'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Colombo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a77c61122780020575627618cc5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Dhaka'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a77c611227800ed32c41061fcc4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Omsk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a77c61122780145f939d44a15bf'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Novosibirsk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a81c6112278009fea8a4e30459f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Qyzylorda'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a81c611227800df2d3870a26ce7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Thimbu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a8bc61122780011e83168f22abc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Thimphu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a8bc611227801a2f02eb3d967d2'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'BST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a95c611227800d75c478504d96d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Chagos'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a95c611227800eb67e8c17df093'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Rangoon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a9fc611227800f2ea4226f0401a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Cocos'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a9fc611227801858aa0fb5f9f32'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Bangkok'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938a9fc611227801f1cbf651c9d693'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/Davis'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938aa9c611227800504ec12dd4790c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Hovd'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938abdc6112278006287044aecccfd'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Jakarta'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938abdc6112278008e48054cb0e27a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Krasnoyarsk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938abdc6112278011a4bd4d8c218d3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Phnom_Penh'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ac7c6112278016877f8f0c19faa'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Pontianak'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ac7c6112278019c7c21a383f190'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Saigon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ad1c611227800996cca1f60278c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Vientiane'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ad1c6112278018adae29de10c25'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Indian/Christmas'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938adbc611227800873723462639a4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Brunei'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938adbc6112278012830520cc6e0d0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'VST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938adbc6112278017c96a91e0991c9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/Casey'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ae5c6112278004257432817b904'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Harbin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ae5c61122780134eb8413e70655'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Chongqing'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ae5c611227801522de24048fdc8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Chungking'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938aefc6112278001b7c761b2927ca'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Irkutsk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938aefc6112278016ef7058143cf20'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Hong_Kong'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938af9c611227800883357aec11919'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Kashgar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b03c611227800d480ead60f5976'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Macao'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b03c6112278017cfd38fcdcbb9d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Kuching'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b03c611227801e2afb25b5f5d6e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Kuala_Lumpur'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b0dc6112278015b8520ebe9297d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Macau'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b0dc6112278018105e8ace513c3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Makassar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b0dc611227801aacd5f167bc1ed'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Manila'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b17c61122780056b93af9c78ec4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Taipei'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b17c611227800913dc1d4d011b5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Shanghai'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b17c6112278016d81964162a599'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Singapore'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b21c6112278019abd2bbca07830'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Ujung_Pandang'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b21c611227801f98d58af2686db'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Ulaanbaatar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b2bc6112278005a2eaa3a2d3668'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Ulan_Bator'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b35c6112278004c71d2a18ea54e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/West'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b35c6112278009fe84e989220d7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Perth'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b35c611227800adae915717ed45'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Urumqi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b3fc611227800c4bc347615a73a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'CTT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b49c6112278009300cc68e71861'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Hongkong'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b49c611227801198ff263c10d6c'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'PRC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b49c611227801397e5ccd3604f1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Singapore'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b53c61122780091f005501ed980'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Dili'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b53c6112278009bad5a84186c69'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Choibalsan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b5dc6112278003a0ab18a99371a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Pyongyang'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b5dc611227800940f82213290b9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Seoul'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b5dc611227801250ff21e9607b9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Jayapura'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b67c611227800864e4374bc7a81'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Tokyo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b67c6112278017c28919fad36f8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Yakutsk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b71c61122780069a4cb09463e55'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Japan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b71c61122780179d854dcf121e9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'JST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b71c611227801c20eb7f1309542'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Palau'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b7bc6112278003a835d02cabdb6'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'ACT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b7bc61122780154114794f28b4a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'ROK'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b85c611227800b86944bf40be6e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Broken_Hill'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b85c61122780107108e03f79015'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Darwin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b85c611227801867df995d40b5e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Adelaide'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b8fc611227800cfe049a6cade24'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/North'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b8fc6112278018e18a3f4ace18d'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/South'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b99c611227801642bd6a03b3861'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'AET'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b99c61122780179f36b60d02719'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/DumontDUrville'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938b99c611227801f38fc6c16d655a'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Yancowinna'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ba3c6112278006f8b2be7e44c60'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Vladivostok'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938ba3c6112278015bfdbd0b7a08a8'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Sakhalin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938badc611227800a8e586953498e0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Canberra'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938badc61122780119e5836d3265e5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/ACT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938badc6112278012b19c53dea1952'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Brisbane'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bb7c61122780074cb02abaa81e0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Hobart'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bb7c611227801bc1fb9ebf1d1ec'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Lindeman'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bc1c6112278017f1841a724c7b9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Queensland'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bc1c611227801afb0c785e483d9'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/NSW'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bc1c611227801c6e818afaed11f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Melbourne'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bcbc61122780068cd7929732a8b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Tasmania'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bcbc61122780089e2f1ab386bf0'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Victoria'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bcbc611227801117a20e5178ef1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Sydney'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bd5c6112278018a9fc8bb99eee5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Guam'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bdfc6112278000025158b8deb4b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Port_Moresby'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bdfc61122780159d51036c8e965'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Truk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bdfc61122780182c132a1bc793f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Saipan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938be9c611227800b31b77d6d97558'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Yap'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938be9c611227800d0357a27f8eeef'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/LHI'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bf3c61122780166f9b9cac45096'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Australia/Lord_Howe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bf3c6112278019518ccdbaafcfa'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Magadan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bfdc611227800940b84e06b2032'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Guadalcanal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938bfdc611227801fb32119f24ae07'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Efate'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c07c6112278016504fa2d108b61'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Noumea'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c07c6112278018041e043ed28df'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Kosrae'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c11c611227800b85c173fa89772'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Norfolk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c11c61122780129e5e9273ec3b5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Ponape'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c11c611227801b5391b80fcf5c1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'SST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c1bc61122780044d99019d6b772'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/South_Pole'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c1bc611227801a5ec6cffa24437'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Antarctica/McMurdo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c25c611227800278e835e7c9e7b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Anadyr'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c25c611227800fd66a519538757'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Asia/Kamchatka'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c2fc611227800061cd25b4d5a90'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Kwajalein'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c2fc6112278014e4e3177427fa5'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'NST'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c39c6112278003228a1ac7ea2d1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Auckland'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c39c6112278010980e7de47cee4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Fiji'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c39c611227801ef7de4da74f0bb'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'NZ'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c43c611227800639bf1cb6ee89b'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Kwajalein'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c43c611227800edbe397fc92d5f'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Funafuti'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c4dc611227800bd09e8c93b4ee4'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Tarawa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c4dc61122780166bfd8253ce917'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Nauru'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c4dc611227801931579b596ac96'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Majuro'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c57c61122780014627ab78f70f7'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Wallis'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c57c611227800d58ce25458eb27'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Wake'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c61c61122780020807c11d6f7bf'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Chatham'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c61c6112278004d41e2cbeda5f3'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'NZ-CHAT'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c6cc611227800cbd8dc433cc6fc'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Tongatapu'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c6cc6112278016d835fc31873e1'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Enderbury'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4938c76c6112278012696c2c9d3893e'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'Pacific/Kiritimati'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8bd9908a52103108bb220b7a4d212e2'
                        key: {
                            name: 'sys_user'
                            element: 'internal_integration_user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af47ed0ca5a903108bb220b7a4d212b8'
                        key: {
                            name: 'sys_user'
                            element: 'sys_domain_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2f129c0a56503108bb220b7a4d2124d'
                        key: {
                            name: 'sys_user'
                            element: 'ldap_server'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6f6ad88a5a903108bb220b7a4d212fa'
                        key: {
                            name: 'sys_user'
                            element: 'identity_type'
                            value: 'human'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'baf169c0a56503108bb220b7a4d21221'
                        key: {
                            name: 'sys_user'
                            element: 'ldap_server'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf93650ca5a503108bb220b7a4d2126d'
                        key: {
                            name: 'sys_user'
                            element: 'web_service_access_only'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c33d1d00a52103108bb220b7a4d21200'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Sales Executive'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c33dd900a52103108bb220b7a4d21298'
                        key: {
                            name: 'sys_user_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33dd900a52103108bb220b7a4d2129f'
                        key: {
                            name: 'sys_user_group'
                            element: 'default_assignee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c33dd900a52103108bb220b7a4d212c2'
                        key: {
                            name: 'sys_user'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33dd900a52103108bb220b7a4d212c6'
                        key: {
                            name: 'sys_user'
                            element: 'user_password'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33dd900a52103108bb220b7a4d212cd'
                        key: {
                            name: 'sys_user'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33dd900a52103108bb220b7a4d212d4'
                        key: {
                            name: 'sys_user'
                            element: 'accumulated_roles'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33dd900a52103108bb220b7a4d212db'
                        key: {
                            name: 'sys_user'
                            element: 'last_login_device'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33dd900a52103108bb220b7a4d212e2'
                        key: {
                            name: 'sys_user'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33dd900a52103108bb220b7a4d212e9'
                        key: {
                            name: 'sys_user'
                            element: 'employee_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c33dd900a52103108bb220b7a4d212fc'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'JP'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c73d1d00a52103108bb220b7a4d21207'
                        key: {
                            name: 'sys_user'
                            element: 'edu_status'
                            value: 'faculty'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d2129d'
                        key: {
                            name: 'sys_user_group'
                            element: 'include_members'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212a4'
                        key: {
                            name: 'sys_user_group'
                            element: 'parent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212aa'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_mod_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212c2'
                        key: {
                            name: 'sys_user'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212c4'
                        key: {
                            name: 'sys_user'
                            element: 'sys_class_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212cb'
                        key: {
                            name: 'sys_user'
                            element: 'middle_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212d2'
                        key: {
                            name: 'sys_user'
                            element: 'gender'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212d9'
                        key: {
                            name: 'sys_user'
                            element: 'locked_out'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212e0'
                        key: {
                            name: 'sys_user'
                            element: 'default_perspective'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212e7'
                        key: {
                            name: 'sys_user'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212ee'
                        key: {
                            name: 'sys_user'
                            element: 'cost_center'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c73dd900a52103108bb220b7a4d212f4'
                        key: {
                            name: 'sys_user'
                            element: 'sys_mod_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c73dd900a52103108bb220b7a4d212fe'
                        key: {
                            name: 'sys_user'
                            element: 'introduction'
                            value: 'Ms.'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca3ea1640a0170330062b9d3cf3ffa71'
                        key: {
                            name: 'sys_user'
                            element: 'time_zone'
                            value: 'NULL_OVERRIDE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d2129b'
                        key: {
                            name: 'sys_user_group'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212a2'
                        key: {
                            name: 'sys_user_group'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212a8'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_created_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212c9'
                        key: {
                            name: 'sys_user'
                            element: 'introduction'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212d0'
                        key: {
                            name: 'sys_user'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212d7'
                        key: {
                            name: 'sys_user'
                            element: 'last_login'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212de'
                        key: {
                            name: 'sys_user'
                            element: 'calendar_integration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212e5'
                        key: {
                            name: 'sys_user'
                            element: 'street'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212ec'
                        key: {
                            name: 'sys_user'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb3dd900a52103108bb220b7a4d212f2'
                        key: {
                            name: 'sys_user'
                            element: 'sys_created_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb3dd900a52103108bb220b7a4d212fb'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'NULL_OVERRIDE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb3dd900a52103108bb220b7a4d212ff'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Director'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212a0'
                        key: {
                            name: 'sys_user_group'
                            element: 'source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212a6'
                        key: {
                            name: 'sys_user_group'
                            element: 'sys_updated_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212c7'
                        key: {
                            name: 'sys_user'
                            element: 'preferred_language'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212ce'
                        key: {
                            name: 'sys_user'
                            element: 'home_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212d5'
                        key: {
                            name: 'sys_user'
                            element: 'date_format'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212dc'
                        key: {
                            name: 'sys_user'
                            element: 'manager_hp1'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212e3'
                        key: {
                            name: 'sys_user'
                            element: 'company'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212ea'
                        key: {
                            name: 'sys_user'
                            element: 'building'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf3dd900a52103108bb220b7a4d212f0'
                        key: {
                            name: 'sys_user'
                            element: 'sys_updated_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf3dd900a52103108bb220b7a4d212fb'
                        key: {
                            name: 'sys_user'
                            element: 'country'
                            value: 'FR'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf3dd900a52103108bb220b7a4d212ff'
                        key: {
                            name: 'sys_user'
                            element: 'title'
                            value: 'Chief Financial Officer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0ce51cca56103108bb220b7a4d2120b'
                        key: {
                            name: 'sys_user'
                            element: 'hashed_user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3b5907ec34a871068a35f2b2b013166'
                        key: {
                            name: 'sys_user'
                            element: 'sso_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6f6ad88a5a903108bb220b7a4d212fa'
                        key: {
                            name: 'sys_user'
                            element: 'identity_type'
                            value: 'machine'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbb5507ec34a871068a35f2b2b013180'
                        key: {
                            name: 'sys_user'
                            element: 'sso_source'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff93650ca5a503108bb220b7a4d2126e'
                        key: {
                            name: 'sys_user'
                            element: 'web_service_access_only'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
