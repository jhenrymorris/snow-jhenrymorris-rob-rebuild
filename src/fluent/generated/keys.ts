import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'af2cb67914044d6f9b26e9adc35ff208'
                    }
                    'default-rob-configuration': {
                        table: 'x_2108496_hr_acces_rob_config'
                        id: '5a2f47bb7a7b4054a1cda69422fffbaf'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '10d0af9bef15499e86e2a10d364b35f4'
                    }
                    'rob-access-item-eopf': {
                        table: 'x_2108496_hr_acces_rob_access'
                        id: '2f65b6a0129c49b98f1fca2b54d1e74f'
                    }
                    'rob-access-item-fpps-wtts': {
                        table: 'x_2108496_hr_acces_rob_access'
                        id: '183e8d6e80fd4825bc0d0cb6b051facc'
                    }
                    'rob-access-item-human-capital-data': {
                        table: 'x_2108496_hr_acces_rob_access'
                        id: '52f1f7b193a143fdafbebac07a15c763'
                    }
                    'rob-access-item-report-access': {
                        table: 'x_2108496_hr_acces_rob_access'
                        id: '088251b291f84df1a551e46128c4057e'
                    }
                    'rob-access-item-usa-staffing': {
                        table: 'x_2108496_hr_acces_rob_access'
                        id: '888b607ff5564df1b0f202346e83dbfb'
                    }
                    'rob-access-item-workforce-profile-charts': {
                        table: 'x_2108496_hr_acces_rob_access'
                        id: 'dc96577f31514e57a137b265f3c07d78'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00106815a5514e56b4fd2bad9eb98da7'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'source_hrsd_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0142f4ef359042f2a833b7e6c3a99f89'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '022ed3955d8a444abe06b91c3fa46b98'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03207414addb48548e67b0f47934d5de'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_id'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '04aca85ceed14f4c91a9635d9398a50f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_fulfillment_team'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0539bf6b597f4f208789769ff5436052'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '06bb28aa957d45d68f98614e77e02af8'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0abf1ed95a6c43c2b32586272f27458d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_analytics_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b00c8e60d6c46d39d6c6e32b7aa14ff'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0be6ea23a9584f52bfb6e2ccde382151'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d4737eed73d4a828229e19a214ce990'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'source_hrsd_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e68c0cf37884570944d01d831801ef3'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'staffing_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11c3f794d0e4469b913884203f306d37'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'renewal_reminder_1_days'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1240846b83694607b8eb32e76353f0e2'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'authorized_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1378eeb9ae9f43249fe615d2d4fc118c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'agency_annual_recertification_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '13cee5132d8b45bc9757e029230dfe96'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1417223b6a014b0a82d1b55c1a57c063'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'expiration_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1439a56fcee64d7089c7a662400283cb'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'authorized_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '146d4eac8d5449c3811b4307b2ec9829'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'lapse_notice_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '153ce2bc3d204e6d8f4a50ae473a7f46'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '156d6550d5c249568664e16d876dba33'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15dd99f8165e476d9f8968f65716c980'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '170c14a75f294790a60b459addfde5d1'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'exception_review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17d7795eb1074ecd92413e0072947721'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'form_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '181bdcb782454fc7bbfd1a7d98ad0c86'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_analytics_task'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '194b830b60aa4f56b3a4162f08206f12'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_rob_access'
                            col_name_string: 'active,access_category,sort_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19f97131cba1419db34cc1a8c4752f0f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_operations_manager_escalation_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b2d433ebd114918b13af807d0ec7fda'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'effective_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bd05fcfba1b412ca58f31787736cdf4'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'lapse_notification_enabled'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '1d1cd31013864031875d3637859b479d'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_auth_detail'
                            col_name_string: 'source_hrsd_case,access_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d29431ca7dc4847960f47e416bbb567'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'analytics_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1d643dde2328415cb39d090c97e692b6'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_staffing_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1db70ad6bbcc4fcca186ca225ccf2deb'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '1dda7069b41f4310882e844ec82afd8b'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_rob_auth'
                            col_name_string: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e961c4f6ff44035aa576e60e587dac0'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_exception_review_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1fc640aef20441959db64beb1934cb55'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '20075d866bfb41c289b64489b5138a3e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '211b0fa33dac46bfa259c653ddeff93a'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_signature_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21d8a5332f124c28a1a266ecdbe8b1ca'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'operations_manager_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '21ef7efa2c3f4e9c992320219d856964'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22240ee4307d402baaa31683d981824e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_approval_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22fd131702c74ea9b7b8dc9a419af147'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'organization'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '259ca9bd57e540b8a498bb0a4ec346ef'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_auth_detail'
                            col_name_string: 'rob_authorization_form,status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '274d433056334e2db8a9b5dbdcaf251c'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27674aba561d486da9276f081a2a4117'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'mid_cycle_grace_window_days'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2c40a7b90f114ddb96231f87082a88be'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2caef58717404d4685dd8b9c148d4cca'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_fulfillment_team'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d74fb3630a44ba2912557e79d753b9e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d958f4eee7443a6a7495671f7c5e6cc'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'superseded_by_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2dbe00e41d8a4125842cc2ee62ef6154'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_signature_complete'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e31e27406ab4482909c4f1043b99669'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_1_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ee9f32d3fcf4ae285791cc4846de763'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30a7c5109cd44faa95aec66654742b21'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'authorized'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '32450f4b38bd460395f9eb2fe5d3dda3'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'authorization_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32f7a840efec4c5e9d9e016aed612878'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3411fe233d064ffb881120ffc8e30a8e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'current_accepted_form_version'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '341f0e0fc2d144098f5d151f2e9d84f9'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_staffing_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '342b1f44b2b843e4a85ddb50cb2b9c9d'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'provisioning_system_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34e7fcba602b4bca909ebb67dbcca8fe'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '351c49938f784a42815cd0389549f324'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36a02936be0e45dd84c5a5ef671c46d0'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supersedes_authorization_form'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36fb2dd6be3649889a8530ba914c8dd4'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_3_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3803aea1971e42b4916113981d5c1e16'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'effective_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '389e4f95d8eb4cc5a3722f4eab1916d6'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_access_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38d790e6bd9b4e65aef92cf25f98bfc4'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'analytics_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '392581c5cbdc485795ca724c997fd300'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_category'
                            value: 'report'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '393512fe39444f8a8710f409704f640d'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3db6b02a4dc243b3b9a304e92ab99f6b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e9df4b314334c4da224805d97aecf9b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_signature_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '400d51d1f6794e59be177c152c89d36d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'lapse_notification_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4110c86776464c2a8c3f652d8798e4f5'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '414e5ba722f54400b135042fa031cdea'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '419779b305ca4211a99cfc5fb643a6b7'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '429e9c1aa8cf4e4a96d6bfbaa3c48f0b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '45ad11312e0e4f46813b28ccca58d387'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'mixed'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '4782184c3ba74e7a87030c388f92b05f'
                        key: {
                            category: 'x_2108496_hr_acces_auth_detail'
                            prefix: 'ROBD'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47f2124fcea74134aad224df8c1a1848'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4879a80e3f99431da89aed01e4917872'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_category'
                            value: 'human_capital_data'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49d181c6982d4e1bb8591c90066f1e4c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_approval_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '49e255248b9748cfb8e5f29130fa9869'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a676107e24e4bc28fff6c25418e6c47'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'rob_authorization_form'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c99495d81ba450aadf404db32aeb182'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'access_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ca3462dc5634afe9979ec2bc6d6dbd3'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d5f944e767741f1a567f6072a59f176'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'lapse_notice_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4ee5a6a993e74fe094704972f9567ff4'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f715d08c0424019a5e98a41becf761c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '503eab04547245a3b425081714c47e9c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'renewal_reminder_1_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51a88fe0938b4325822dee3f5c0344af'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_analytics_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5396ec7e94e74e0296c439d078974f53'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '542a528333594d8b80ae3cb2eb0dfdd2'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5457a73f42854463bf45f9c1cf274bc2'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_approval_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55f8640035b243b0b892c34cc6e1d696'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'agency_annual_recertification_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5672ff6fba9244359d9c274145a24fb4'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_signature_date_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '57524e24bd1b4bd5bfffcdb96f618522'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'requested'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '586cab56c4af4c05ba3aceaa3d0bcdbd'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a297366aeca49b18f6bae85f171612a'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_2_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5a7a4232396b4fb5bcd90856a2d3f9a6'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'target_system_snapshot'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5add9c8c9edc478cbe6c9a5dfa66a8d1'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5afe7b23206f48978fee5d69c151f02c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'authorization_action'
                            value: 'amendment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c6ada3aa98147bdb13d9097505d3325'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5dcf70767ec64667b5ae6f72c34f3a95'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ec0cb5d373740bfb7f9ee6d26480ac3'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ed4e93e6b0246f788d2c99dd6d021b5'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'position_title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f3a39480e9845189b95e4cad1a05d8d'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'rob_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5fbbe48ee5ee4887a970b4a0ba16869f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'staffing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6021278eee2344068d2fec29e32025dc'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'access_end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60a22e7394514f919bd47ddbb53c0de4'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'operations_manager_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '618bd77c60424841a46ffa3819e8dc3e'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6277eaa9c5bb4f4dadde68e7dae87416'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6427359f8b8d4791845250ad22094cb8'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_operations_manager_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6495795faa954ea39ba906ef328a89c8'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'signed_pdf_generated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66db83e6c38a48d5b11489b1032baf84'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69b78bcd304a438f8dc21908e4c7260f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'revocation_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f407716176d4650acff768c892211a8'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fedb9f842df480580c0e0bf41220349'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'renewal_reminder_3_days'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7064e3a6b4194add884740fcd4f26f78'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'business_justification_snapshot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71063b96eef5445f9b0c545b9e91e32d'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'business_justification_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '711e3bf3df06429cb9d8fc2760dc9dbe'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_rob_auth'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '734eaafbf3dc4027b9a139425aefda9f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supersedes_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7466db953fda4a819b66b15b353c7754'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '747e8344dfd04a0aa9945d91d6b3ec2d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74f6d2d56d804b2ea210ba0ab9f39852'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7593eaa19099492194cc66882844ae0f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75b082993a23464eb9b54352006f7d3c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75c641ab3ff14c9cb078e5c562793601'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_signature_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76082efa5dc04d968650bc0ee0a22b86'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78867ca80308402c8c0339f4b811f648'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                            value: 'oas'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '792b9dd9f6e149caba58c17f98063eea'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'analytics'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a2ddd697c70414d8a3f5e829cb93a99'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a65cecec5a747dc9e8af2b0a28e0bb0'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'access_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7afc65aba6d1440aa5c520a8f8225971'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'renewal_reminder_2_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7aff7c0a3f3745ea9606159846814780'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d3d14e4217b4cf2958ec3853aaa74f3'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_signer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e9ca725e78f44708772cc1819be8e90'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'renewal_reminder_2_days'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fc17edcd48c4c45bd8692f15748706d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_1_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8172399caecd485889d480bcc7bb8392'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'target_system_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81cb1129a3f647afbe6000c1e7dedc6f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82b56e4a968a497f8e4d62614496b737'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82be40606b064d629385fe8d0187c0b0'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_analytics_assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '837f20460638402493f1b69849559c5d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'business_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '839f11d9246b4d54afdc6127f1f86558'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'subject_person'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83b57483dd8a48e9b6e4e2a0a86862b0'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_3_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '849fe798a7ed4d2685ec1af400bd5d56'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_item_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8551f9d323924970b5f6965311ffff4e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_cycle_identifier'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86b770aee82244c984605fc4301f31de'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'renewal_reminder_3_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86b9b5dbbe1e430ba3a71f6aa97df411'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '87fe0aacd6b24ea596305670eedf4c93'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_operations_manager_escalation_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8928624b19134e25b5dbe12172849ee2'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'signed_pdf_generated_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a2f49b65bde4317b1ddd35c785ec750'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_signature_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8ad9d07bdaf94065b6de2d807d8089fa'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'authorized_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8bfbd2ccdb78449b9cfb5d83d4615c72'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8c4f3d59f7cb47deb011617c7d766b70'
                        key: {
                            name: 'x_2108496_hr_acces.rob_staffing_fulfiller'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cf0cf8252fa4e4ba0017ea36ed9ab4b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_staffing_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d067ba1868a48f1bec43144d32241e2'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d20b103bf4d4671b420aa96c7b8ca15'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'mid_cycle_grace_window_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d53e7bcd1c243478da4886476d9c999'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_cycle_identifier'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '90b7a9013f9044389578a1635197ed1d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'authorization_action'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91501d74efbc4c5ea79c971ac0510202'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '91ecc9d0ccb44bf7af4c93201820795e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'pending_supervisor_approval_signature'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91f630b4b00049b593fd4711132f47dd'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92b748e767b1457bb9be2396d8fd5642'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9462db7b4fb749ababdce259b33c94b8'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95ece77e60ed4258b8f83f394490b25c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_category'
                            value: 'hr_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95fabdc060a943eca1ac40f48b832c79'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9ad6a440d15549a4bc273483800649a8'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e0638d812544330b411ee3a85bc2a23'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'authorization_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e63ecbf66144b278be107bc0a709b7a'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9e9171277c7c4025a3ebfe635214accf'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1134c211178488fb02714b3ad1d1dfa'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_signer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a186489bd5e94c35b1eee985427e40f1'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'revocation_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a30427a5df5c42e5ae73fa1085291d11'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a34cae3ed7154d088676128f394d83ff'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5c79942fd764c8593cb87d70e29ebdd'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'authorized_start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a5ebb30819a349e583a6c36634dec9ff'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'pending_authorization'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6e813ff13e74177b06a8193d5d4ef54'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'sort_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7e7390e9eab4f6aaf3af8fa64d17cff'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_exception_review_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a92813038fc54514af8e2c5eff3fc4e7'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'superseded_by_authorization_form'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9dce5a01a044fd3a7409f63e87471c7'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'subject_person'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'a9e74986b2964fb7a9eb7bc594f1d41d'
                        key: {
                            name: 'x_2108496_hr_acces.rob_admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b02add1358964639844a4e8e66946e40'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b18eb3ada272469d8aa6fc016d5fb8ae'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'default_staffing_assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1f1ac54a9524ded863dd4e21b6482ed'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_signature_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b26fa50511984570859b02d65a37fd3b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'audit_notes'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b28770135a474c40a693891cf055df1a'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b55d7ae879d24979b8ce8fc1f295872f'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_rob_auth'
                            col_name_string: 'subject_person,status,expiration_date'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b71e675a8d4646b6a02e7025f0d9601b'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_auth_detail'
                            col_name_string: 'subject_person,access_item,status,authorized_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b89136ec6de84c12905f07a6a26944af'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9571e41515248898aebca4f9ace177c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b993ceb0b58e4b37b4ae901909ac7e0c'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba9294927f4c4c7aa4ff78f962f58678'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'form_version'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'bacfeb4fa3f54b788d4274cb86bfbd57'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_auth_detail'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bcad102641c64c07bda36a036604153c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bcf9191c159c4c4ab29004a025bb2b63'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1a1b08ebd814c0ca87496316cb3138e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c36f09637fa1495aaf7cb33efce7ad99'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c416e0cbb4ff4005853baa40413bdbd6'
                        key: {
                            name: 'x_2108496_hr_acces.rob_operations_manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c519030242bd41428f03e22d4cccc72a'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'staffing_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c5898c1746b643bcb246ee9285dc20ef'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5f859285f3d4e37a0eb7d64150f83ba'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'current_accepted_form_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c68f9a23c0c448e7a92492420f3a43b7'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c77f4e7f1af849898a1aa0db7a64b6a8'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c79b5dc61def4fd497d907a5e7eca123'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'signed_pdf_generated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c8ccef6b53754e849c05d56764bd13ea'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employment_type'
                            value: 'other_time_limited'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'cb89588f0a294ab2bcf50e3cfbaaec67'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_rob_access'
                            col_name_string: 'access_item_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ccf0dbfa63e3400885e64764d66dd36e'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'sort_order'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cda8569a37b04f3a997f3b55582317b5'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce6141b874c947b5abbc9ba6185b73ec'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'ce863ff3ec8046c7945037eb6b868db8'
                        key: {
                            category: 'x_2108496_hr_acces_rob_auth'
                            prefix: 'ROBA'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf4d194db7eb4dbdb2a725d7201aa1e0'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            element: 'provisioning_system_snapshot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf6507c26c1d4e70a21de9cbc7589e78'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'organization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0bfb028ed6d4b20b21875eba6fb329c'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd15f9d4544fa4ed890fdf07eb222739f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'default_fulfillment_team'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2884073906a4b6d8edb6663a68590db'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'requires_operations_manager_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd54964ddc2004e4995bd2e74f65c59dc'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8399cdfa238448aa83804d84ca9d2d3'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'pending_employee_signature'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dbe3d5e8cdbc4a4791374f8bd0035e73'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ddb940cdf5de468fa7320eaa0a6a1790'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de4a8973a1204f8cba9569cca30e7476'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df286c87a6a74f77928ea41aa6a27612'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'reminder_2_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0730f4b137b4deea8df97198e0b9958'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_approval_complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0814516addf475c94046e8453dccd08'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e45af645fef449548b87ef2a544d7892'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                            value: 'arm'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4a32f7fd9564eb9b66d8567f4558ede'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'employee_signature_complete'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e4b79bbe44b94af68421290471ae7233'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5a958ae31724b3a92c43ff42a5dd1c2'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'e6160a3e612a48b49597f769990d13eb'
                        key: {
                            logical_table_name: 'x_2108496_hr_acces_rob_auth'
                            col_name_string: 'status,expiration_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e63dbeb0ac934737a4ee00500cecca8b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_item_code'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e7ff9629bd3449a8b18a8a417c835d69'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8eb0ab2aae349388a8f539d5a695441'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'access_category'
                            value: 'workforce_profile_chart'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea7e947a424e4966892f3082fff45369'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'authorization_action'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eeef5b2591ef4ec88a6b6e0aed57ecc1'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'authorization_action'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ef61542e6be64d8fb2c6b46277d0d260'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ef9466900ab44cbe8688a999c268e3b8'
                        key: {
                            name: 'x_2108496_hr_acces.rob_compliance_viewer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f00de37f256d408fab1beee00b75ae11'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'audit_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1356d48e0474a26bf53524d87bf4d5b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1c262ecf8f24175897054b8bbf5db33'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f3008d3549804af49076dd69b53d754c'
                        key: {
                            name: 'x_2108496_hr_acces.rob_analytics_fulfiller'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4c1a98539f94eeba0064e4cd94567e4'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'status'
                            value: 'obsolete_version'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f61310f2d5f1410790853bbcf4940858'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor_approver'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f62a138c667f438ebd3e424ac7946661'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'signed_pdf_generated_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f6af7739846241aa965888d29c0279eb'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f93d34193e9e4465a6680bdf8fa3c1de'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_target_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fb9b6361eacd4e87afd021792fc4599a'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd94ac60beee4732b0d4bf2376aee40d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            element: 'supervisor'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'feecfd1e6f264a35ad2212b38985b10f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            element: 'external_provisioning_system'
                        }
                    },
                ]
            }
        }
    }
}
