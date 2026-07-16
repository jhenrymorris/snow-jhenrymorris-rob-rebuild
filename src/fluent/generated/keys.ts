import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'authorized-access-details-module': {
                        table: 'sys_app_module'
                        id: 'adfe5a0f8edf4b6a99f8677b50a16f23'
                    }
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
                    'rob-access-items-module': {
                        table: 'sys_app_module'
                        id: '8c3cb6c8f6dd4e71b7cad5d22e9dbbe9'
                    }
                    'rob-administration-menu': {
                        table: 'sys_app_application'
                        id: '27c5e96fac7c4115909006441d504d7e'
                    }
                    'rob-authorization-forms-module': {
                        table: 'sys_app_module'
                        id: '44af6d26001445aa92d9d365575f051f'
                    }
                    'rob-configuration-module': {
                        table: 'sys_app_module'
                        id: '076b51d7efb043dd9674c80e00f53139'
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
                        table: 'sys_ui_element'
                        id: '008eca6ea4104487887651c3feab7765'
                        key: {
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'revocation_reason'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '0129aa29785e4efe91843d3c66b853d6'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '4f3c429ef46e48b89fb4d726bc29a85b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorized Access Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_section'
                        id: '01d5951f164e44dfacf1f77b3213baa9'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            caption: 'Access Item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '034945ddf6a0456fa2c8d7a3b6f37a26'
                        key: {
                            sys_ui_section: {
                                id: 'ef7c46adb4a442ee9ec01ed75f2bfe9f'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '038648fa80714e97828748c9095c13af'
                        key: {
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requires_analytics_task'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: '05f4e6dcbda344359e645837a09d42cf'
                        key: {
                            sys_ui_section: {
                                id: '7c103a268b324a3e834eddc902f1d210'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Version and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
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
                        table: 'sys_ui_element'
                        id: '073ef407dc904668b80f4dfaf251d1fb'
                        key: {
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lapse_notification_enabled'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '07471bd987ce45c0b6db759e14419c11'
                        key: {
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requires_staffing_task'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '082d7d58018e42e2ac4ec6778ffb8e02'
                        key: {
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '082f3a21b20c425cbef6bb7ee62813c0'
                        key: {
                            sys_ui_section: {
                                id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Recertification and Grace Period'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '091f214eb3b541409cf7f24d570b71f6'
                        key: {
                            sys_ui_form: {
                                id: '69604c7c8bf14333a6013399dd603508'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0a3002f6d3854d8e872aa1d99559571c'
                        key: {
                            sys_ui_section: {
                                id: '7c103a268b324a3e834eddc902f1d210'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Version and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: '0be98e93ab1f4cf7b6d6be3ddd754611'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supervisor_approver'
                            position: '2'
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
                        table: 'sys_ui_form_section'
                        id: '0e61e8bd1114403eb030edfa96463030'
                        key: {
                            sys_ui_form: {
                                id: '9d66810bd7ab46c3a23c1a1d0da49e6b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'fc755664860a44198af256c4086c501f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '0efacd7081bd42929527008a265c22ef'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reminder_cycle_identifier'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0ff46a77ada84a5791b433e6e48236bb'
                        key: {
                            sys_ui_section: {
                                id: '16dd97a05e67441b92c9eac06502d0cc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'General'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1105bd6492734e5f9e5e1645c301e7dc'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Reminder and Lapse History'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '11fe015d82f940b98af83e5ab9ae2d0a'
                        key: {
                            sys_ui_section: {
                                id: 'fa03eb3967ac48379aca2c96a2050e02'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Signed PDF'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: '138c90f338814af3a876f65971128740'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supervisor_signature_date_time'
                            position: '7'
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
                        table: 'sys_ui_section'
                        id: '13ef4cb60ffc436ea3b73984529105fd'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Employee Signature Evidence'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '13f91e6de9d24f2da9082a62624c3ee9'
                        key: {
                            sys_ui_section: {
                                id: '16dd97a05e67441b92c9eac06502d0cc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'General'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_form_section'
                        id: '1695e0d495b24840a0b9896c867b0ff1'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '16dd97a05e67441b92c9eac06502d0cc'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16e986ff590c4dd795e3e1904ca60841'
                        key: {
                            sys_ui_section: {
                                id: 'cf30695decf94abea5be20dfd96efa35'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'External Systems'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: '192e6c882d5a4eea98f5550495367401'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supervisor_approval_complete'
                            position: '1'
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
                        table: 'sys_ui_section'
                        id: '1ab448b3b16f46fd81fe494d4d1337ae'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            caption: 'Access Item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '1d47d8c0255e4da8aa68c3c6f34f6c40'
                        key: {
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requires_operations_manager_task'
                            position: '2'
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
                        table: 'sys_ui_element'
                        id: '1deeba1dd158469cb49264ae94a7941c'
                        key: {
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'default_exception_review_group'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1e3fd30adbf54cf6b4e37441abfe8bc0'
                        key: {
                            sys_ui_section: {
                                id: '13ef4cb60ffc436ea3b73984529105fd'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Employee Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'employee_signature_date_time'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1e8abdcff9964041bda94f90efffec98'
                        key: {
                            sys_ui_section: {
                                id: '13ef4cb60ffc436ea3b73984529105fd'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Employee Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: '21d0cdb09a5e40a09b1de7fa652449f8'
                        key: {
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: '2400c27d0e78499b954811c297557191'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
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
                        table: 'sys_ui_element'
                        id: '25b259fb8d5d4a93ace03ccba9ae1b0f'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'access_end_date'
                            position: '8'
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
                        table: 'sys_ui_element'
                        id: '2a6fdd62b29446598134ca64293b01e6'
                        key: {
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aba8354d18443d5b4ad9ee2e935a8ae'
                        key: {
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'rob_authorization_form'
                            position: '4'
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
                        table: 'sys_ui_form_section'
                        id: '2e8144fede2b4e0eaab4380155670392'
                        key: {
                            sys_ui_form: {
                                id: '69604c7c8bf14333a6013399dd603508'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a0418dba2b154dbbb406c06059ad6ab1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Routing'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '304a1778caad4b0e9e8ea44d74adc040'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supervisor'
                            position: '6'
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
                        table: 'sys_ui_element'
                        id: '331c3cea7f274ad6981f58f2bf0e9bd2'
                        key: {
                            sys_ui_section: {
                                id: 'cf30695decf94abea5be20dfd96efa35'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'External Systems'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'external_provisioning_system'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '337434880af34a2a80d91ace0aaa535e'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reminder_3_sent_date_time'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: '3604f2c78bfa482eb62bf5981ccc7901'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'employment_type'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36826762ce774b199ef849c29920c1f7'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
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
                        table: 'sys_ui_element'
                        id: '3764e121fe49443a9e1487fff4ee3628'
                        key: {
                            sys_ui_section: {
                                id: '16dd97a05e67441b92c9eac06502d0cc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'General'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '37816a7ea6de41f7971db223f27b9cf6'
                        key: {
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: '393258fe80b14a308bde6f4b36d8fa1a'
                        key: {
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '393397830a934c42be4f6c54b2905f56'
                        key: {
                            sys_ui_form: {
                                id: '9d66810bd7ab46c3a23c1a1d0da49e6b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '394fffcbda1c47a28a4134d1189b1271'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'organization'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d1f818d2a0744da9a93e5462b55da51'
                        key: {
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
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
                        table: 'sys_ui_element'
                        id: '40c393f4a93948fda25b032b5f4c7962'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '40f5db98ccbb4af8b279afa68e573869'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
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
                        table: 'sys_ui_section'
                        id: '427eed3176b641448c2c4a9d09885c7b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Supervisor Approval and Signature Evidence'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_section'
                        id: '4372b94fef1f4c4985423b98d2a83db9'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Audit Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '43ec8f278aa742e38d2588c649ae1fca'
                        key: {
                            sys_ui_form: {
                                id: 'bfe9baa8818d4656b1bfd08458762468'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '450b2339961c4178927d67cdea77f273'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Status and Supersession'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '456b91dce6b54bdd88b55a1fabfc8f51'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            caption: 'Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '4b9ddf071d5d44cb876978715bb52181'
                        key: {
                            sys_ui_section: {
                                id: 'a0418dba2b154dbbb406c06059ad6ab1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Routing'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '4c00d814f892447abf070a6566fb2aec'
                        key: {
                            sys_ui_form: {
                                id: '9d66810bd7ab46c3a23c1a1d0da49e6b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c4f9bfd15b74ea2ac4d39dfffdbf62a'
                        key: {
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: '4dd92b27d28e40f99294c129c1fa9d74'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reminder_2_sent_date_time'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4e607da117614575bb72df11cf645e90'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '8'
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
                        table: 'sys_ui_section'
                        id: '4f3c429ef46e48b89fb4d726bc29a85b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Authorized Access Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_form_section'
                        id: '50449408a4cf4313b0dbdb0ecb034162'
                        key: {
                            sys_ui_form: {
                                id: 'bfe9baa8818d4656b1bfd08458762468'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ef7c46adb4a442ee9ec01ed75f2bfe9f'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '52e59a80fee040848fa2921f734098ae'
                        key: {
                            sys_ui_section: {
                                id: '7c103a268b324a3e834eddc902f1d210'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Version and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'expiration_date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '5335745a4ea94096b40b5bf401a41b7a'
                        key: {
                            sys_ui_form: {
                                id: '69604c7c8bf14333a6013399dd603508'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '456b91dce6b54bdd88b55a1fabfc8f51'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '5535e61198ba4ba5bc934b8a32d6c289'
                        key: {
                            sys_ui_section: {
                                id: '5dc73c976eb245089fe3066180cc7f37'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Authorization Status and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'authorized_start_date'
                            position: '2'
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
                        table: 'sys_ui_element'
                        id: '5681a784b0dd416dbde36610d9a27a04'
                        key: {
                            sys_ui_section: {
                                id: '456b91dce6b54bdd88b55a1fabfc8f51'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56ecce5911774e1b8f8b0c4c515c2a21'
                        key: {
                            sys_ui_section: {
                                id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Recertification and Grace Period'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_annual_recertification_date'
                            position: '2'
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
                        table: 'sys_ui_element'
                        id: '58a2dbfb0e584d798550b80a76636d88'
                        key: {
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5954dd8bfc18434a858d282771b1c76e'
                        key: {
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: '5c314f1800d8469c91a666a718f41213'
                        key: {
                            sys_ui_section: {
                                id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Recertification and Grace Period'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'current_accepted_form_version'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: '5cdd203c606f4ef0901832d94b1fd5e0'
                        key: {
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requires_access_end_date'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5ce8d69f55194e1d91b6a8ddf4bf5a01'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supervisor_signer'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5dc73c976eb245089fe3066180cc7f37'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            caption: 'Authorization Status and Dates'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '5dd6169be6b54d9e934a9acef4d98ff0'
                        key: {
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5dfcd9455e464d5292f658c74bcbd353'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            caption: 'Assignment Groups'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '5f3bdb19c52847df8e56bc92f34bf75e'
                        key: {
                            sys_ui_section: {
                                id: 'fa03eb3967ac48379aca2c96a2050e02'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Signed PDF'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5f3d31641ee44654be20242557c498d8'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5f4be10a63744662a91aed07d741b455'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            caption: 'Source Records'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '601e18f2d0b347a29108c85a06737e68'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'provisioning_system_snapshot'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: '62229ffb93434c58a7318b94b8557208'
                        key: {
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supersedes_authorization_form'
                            position: '2'
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
                        table: 'sys_ui_element'
                        id: '6669d1a5a9624c1db4acc5bc4aa8411a'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'sort_order'
                            position: '6'
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
                        table: 'sys_ui_element'
                        id: '6837f35616ca48389b25b8959269bd42'
                        key: {
                            sys_ui_section: {
                                id: 'a0418dba2b154dbbb406c06059ad6ab1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Routing'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '69604c7c8bf14333a6013399dd603508'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '6ccd84e28a4c41d08d368a9dea4097a0'
                        key: {
                            sys_ui_section: {
                                id: 'a0418dba2b154dbbb406c06059ad6ab1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Routing'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6e0ec7766bb643a6934fbaf7ed42f7d8'
                        key: {
                            sys_ui_section: {
                                id: '01d5951f164e44dfacf1f77b3213baa9'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'access_item'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6e467d6913fe47cc93e6df8c3e136fce'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6e9bf451cbcc49ecaef6843f285414ad'
                        key: {
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_section'
                        id: '73d59f307eb044c3a5816f172b50e5e1'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Subject and Employment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '74109161e77f4060b120c2af8d1b8f3d'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Authorization Scope'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '74e6798ad69e4b41b07bb089fed62072'
                        key: {
                            sys_ui_section: {
                                id: 'a0418dba2b154dbbb406c06059ad6ab1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Routing'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'default_fulfillment_team'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: '75ddc4b1a4964f2198c3823b0fb58fc8'
                        key: {
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
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
                        table: 'sys_ui_section'
                        id: '7c103a268b324a3e834eddc902f1d210'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Version and Dates'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c50ce7a656c4558a813775622182a86'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reminder_1_sent_date_time'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c8fbc79eae9402e915599594c711969'
                        key: {
                            sys_ui_section: {
                                id: '7c103a268b324a3e834eddc902f1d210'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Version and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'form_version'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7ca2f0346eba4bf885a2b9dc62585210'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'staffing_task_required_snapshot'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: '7eac794cd3824797a9e48f1fd56c912c'
                        key: {
                            sys_ui_section: {
                                id: 'a0418dba2b154dbbb406c06059ad6ab1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Routing'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'default_assignment_group'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '7f09c03dbea74e538d321438410cfa34'
                        key: {
                            sys_ui_form: {
                                id: 'bfe9baa8818d4656b1bfd08458762468'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '81a2d3e476bf449d894ffd2f5871a926'
                        key: {
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_hrsd_case'
                            position: '2'
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
                        table: 'sys_ui_form_section'
                        id: '82d9c3d8741949548659c36f1fdcb279'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_form_section'
                        id: '83eacbfc508d4f78874faa76360c18d9'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '84c4ef2c78f6404f9241d6fc25209eb7'
                        key: {
                            sys_ui_section: {
                                id: '13ef4cb60ffc436ea3b73984529105fd'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Employee Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'employee_signature_complete'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: '86ef805d486941369cbb77cc44a7d3b1'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'analytics_task_required_snapshot'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '87b546c84c964af2bfe069bfad3ae591'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '5'
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
                        table: 'sys_ui_element'
                        id: '899accdff690493d9b73cebd8f67702c'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '89a6e41d14854a63be8f5079e0f764cf'
                        key: {
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_justification'
                            position: '6'
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
                        table: 'sys_ui_form_section'
                        id: '8de4f036f41b420084f3f7898f728439'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '7c103a268b324a3e834eddc902f1d210'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Version and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8defc9108978497091f855d934e465b7'
                        key: {
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8fc29687c69c4b44ae0fe3b8c81a5a49'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'position_title'
                            position: '7'
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
                        table: 'sys_ui_element'
                        id: '94add0b5f8cd49b497bd3188b00a76c1'
                        key: {
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'renewal_reminder_2_days'
                            position: '2'
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
                        table: 'sys_ui_element'
                        id: '95f736814d0e44948a292d97a683442b'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: '960921f7460742dd9ca5f39b3476fd1f'
                        key: {
                            sys_ui_section: {
                                id: 'cf30695decf94abea5be20dfd96efa35'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'External Systems'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '963e514dce204ecb85e9fdc758b673a6'
                        key: {
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '96c1e85ec7084134b26151183709c275'
                        key: {
                            sys_ui_section: {
                                id: '13ef4cb60ffc436ea3b73984529105fd'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Employee Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'employee_signer'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '97916dd3d21b43dca3b3ec4434157318'
                        key: {
                            sys_ui_section: {
                                id: '5dc73c976eb245089fe3066180cc7f37'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Authorization Status and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'authorized_end_date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '9a18fd4d4da84183b8bc5989c0ac699e'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            caption: 'Routing Snapshot'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '9c71a4c3ff2b487f80e0c36559f0b659'
                        key: {
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'subject_person'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9d66810bd7ab46c3a23c1a1d0da49e6b'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9e029b9a2fc04e8e821c9696c99eb08b'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'target_system_snapshot'
                            position: '6'
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
                        table: 'sys_ui_section'
                        id: 'a0418dba2b154dbbb406c06059ad6ab1'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            caption: 'Routing'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: 'a2096a62156749b984e8d9f82a5bf8b0'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'employee_id'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a222b2ab5c6c4d27b91a66917e40d0e3'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_form_section'
                        id: 'a41d1a11584d41b1a27178e3e38b37ff'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '4372b94fef1f4c4985423b98d2a83db9'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Audit Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: 'a67bdee1bb3e42cc944a2178e17e37be'
                        key: {
                            sys_ui_section: {
                                id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Recertification and Grace Period'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: 'a73c0182e08b4ce792677693cad35530'
                        key: {
                            sys_ui_section: {
                                id: '16dd97a05e67441b92c9eac06502d0cc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'General'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
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
                        table: 'sys_ui_element'
                        id: 'a8624fa364a54107b4d89388f02c95ad'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
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
                        table: 'sys_ui_form_section'
                        id: 'ab2206ddbe09446fabdee68fff833626'
                        key: {
                            sys_ui_form: {
                                id: '9d66810bd7ab46c3a23c1a1d0da49e6b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '16dd97a05e67441b92c9eac06502d0cc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'General'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ac9a91db5f764838aed609a5c043a137'
                        key: {
                            sys_ui_section: {
                                id: '7c103a268b324a3e834eddc902f1d210'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Version and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'effective_date'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'ad7681219a0d44b1a746271dcd33454a'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '13ef4cb60ffc436ea3b73984529105fd'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Employee Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_section'
                        id: 'b2a585c5904b4970850b567625a4d607'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            caption: 'Conditions'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b2d88a4a725c480e90f9250ec255075c'
                        key: {
                            sys_ui_section: {
                                id: '01d5951f164e44dfacf1f77b3213baa9'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_justification_snapshot'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b3c3befb073649bbabceabe7e4a4237e'
                        key: {
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b440a6999fe441f5bfa312a9e15e5aa3'
                        key: {
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'default_operations_manager_escalation_group'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b4790547b2bf4ffdac194fe4a4968fb3'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'fa03eb3967ac48379aca2c96a2050e02'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Signed PDF'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: 'b66fb17c8e204b8884028a9785e97e6e'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b69747296a6942f89367176c22bda8e3'
                        key: {
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'renewal_reminder_3_days'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6b89f29869b4c7aabb2c1b0ebafdf57'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: 'b81971f6ce9841feb0d3187b232687b2'
                        key: {
                            sys_ui_section: {
                                id: '5dc73c976eb245089fe3066180cc7f37'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Authorization Status and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
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
                        table: 'sys_ui_element'
                        id: 'b8b116a177624c28bcf9868a6dc6a9a0'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operations_manager_task_required_snapshot'
                            position: '2'
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
                        table: 'sys_ui_form_section'
                        id: 'b96e4572063441028f8a933554c4d404'
                        key: {
                            sys_ui_form: {
                                id: 'bfe9baa8818d4656b1bfd08458762468'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '01d5951f164e44dfacf1f77b3213baa9'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_form_section'
                        id: 'bb5b3a198b1d4f868d81cec43363e800'
                        key: {
                            sys_ui_form: {
                                id: '69604c7c8bf14333a6013399dd603508'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'cf30695decf94abea5be20dfd96efa35'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'External Systems'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bbd110739b484d47b26fa4690824e65d'
                        key: {
                            sys_ui_section: {
                                id: '5dc73c976eb245089fe3066180cc7f37'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Authorization Status and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bbf34552992240a3a5f2e01bf11a3809'
                        key: {
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: 'be7e306297fb4e54a963953c2c055ae0'
                        key: {
                            sys_ui_section: {
                                id: '9a18fd4d4da84183b8bc5989c0ac699e'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Routing Snapshot'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf43c93ec2e64eb98cc3d310186d6e84'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supervisor_signature_complete'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf4de5615a3a42aba9e16dd230633350'
                        key: {
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'default_staffing_assignment_group'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'bfe9baa8818d4656b1bfd08458762468'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bffb9efe8e664771a491c7a0181d2eaa'
                        key: {
                            sys_ui_section: {
                                id: 'cf30695decf94abea5be20dfd96efa35'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'External Systems'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'external_target_system'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: 'c3e94ec707644357ba6a7a756fc4c132'
                        key: {
                            sys_ui_section: {
                                id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Recertification and Grace Period'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'mid_cycle_grace_window_days'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: 'c5b3011f03b846a4bec9338b8f0a21aa'
                        key: {
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_hrsd_case'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: 'c61781c4f6374d788ebae8402700d5e5'
                        key: {
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'authorization_action'
                            position: '2'
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
                        table: 'sys_ui_form_section'
                        id: 'c6c01d6f91d845cd8cdd8055af7614a3'
                        key: {
                            sys_ui_form: {
                                id: '9d66810bd7ab46c3a23c1a1d0da49e6b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Recertification and Grace Period'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c7559cf80e8f45d3b40ada42710818c6'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supervisor_approval_date_time'
                            position: '3'
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
                        table: 'sys_ui_form'
                        id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_form_section'
                        id: 'c7fabf6fc4604e9ca4b201d3440bf747'
                        key: {
                            sys_ui_form: {
                                id: 'bfe9baa8818d4656b1bfd08458762468'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5dc73c976eb245089fe3066180cc7f37'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Authorization Status and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: 'c9131916e7a1467a92e1f5642bea11da'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'access_item_code'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c97ee1f36a7f43afb36b6c4cec9a7997'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c987649e642745e281a9d20e42c8ab54'
                        key: {
                            sys_ui_section: {
                                id: '13ef4cb60ffc436ea3b73984529105fd'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Employee Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ca0a8f30a55f40a692dde5b7d87614c2'
                        key: {
                            sys_ui_section: {
                                id: '5dc73c976eb245089fe3066180cc7f37'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Authorization Status and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: 'cc51a25dc03b4b6bbcd9f5d069c2cb38'
                        key: {
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
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
                        table: 'sys_ui_element'
                        id: 'cddc6a3dc1e0439ba0a29cb90e89db1c'
                        key: {
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'renewal_reminder_1_days'
                            position: '1'
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
                        table: 'sys_ui_section'
                        id: 'cf30695decf94abea5be20dfd96efa35'
                        key: {
                            name: 'x_2108496_hr_acces_rob_access'
                            caption: 'External Systems'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: 'd29318e66bda402cb4ec5a327be03b0f'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2a06a207a284fb782bea3c9fa675a75'
                        key: {
                            sys_ui_section: {
                                id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Recertification and Grace Period'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2ed675c38624417900d13ada91d36a3'
                        key: {
                            sys_ui_section: {
                                id: 'cf30695decf94abea5be20dfd96efa35'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'External Systems'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
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
                        table: 'sys_ui_section'
                        id: 'd6851b211b254498928af570643a6b46'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            caption: 'Reminder Rules'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd69f7154ca4644c1a92ded53a13dbcfa'
                        key: {
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: 'd84465c340ea4793b68c69786ea2d2c4'
                        key: {
                            sys_ui_section: {
                                id: '73d59f307eb044c3a5816f172b50e5e1'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Subject and Employment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'subject_person'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd84add6c2e9b496992b4ee02b27f12de'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lapse_notice_sent_date_time'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'd9a11f314ffc4f44a5768b6e2ed2616f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            caption: 'Recertification and Grace Period'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'db7e3796efea40ea95c0f420b09128f8'
                        key: {
                            sys_ui_section: {
                                id: '427eed3176b641448c2c4a9d09885c7b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Supervisor Approval and Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: 'dc5023cfc52e4a56a4e8c19203e40870'
                        key: {
                            sys_ui_section: {
                                id: 'fc755664860a44198af256c4086c501f'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '0'
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
                        table: 'sys_ui_form_section'
                        id: 'e167432b9a564a8796877e0e5ff88aff'
                        key: {
                            sys_ui_form: {
                                id: 'c79a5c2bf97a4b0b9504ae0e7412b212'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '74109161e77f4060b120c2af8d1b8f3d'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorization Scope'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e26e782ed0a442119f730e6a6ae90868'
                        key: {
                            sys_ui_section: {
                                id: '7c103a268b324a3e834eddc902f1d210'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Version and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: 'e8c237b3306b46438ce08a1ebb028757'
                        key: {
                            sys_ui_section: {
                                id: 'd6851b211b254498928af570643a6b46'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Reminder Rules'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: 'ea8c80cf423a4de7b803ecc513d53817'
                        key: {
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'access_category'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ea913809e204467eb7c1c9607169012f'
                        key: {
                            sys_ui_section: {
                                id: '1105bd6492734e5f9e5e1645c301e7dc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Reminder and Lapse History'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eafc030ce9fb4d70a8de407c5b4ae2de'
                        key: {
                            sys_ui_section: {
                                id: '450b2339961c4178927d67cdea77f273'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Status and Supersession'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'superseded_by_authorization_form'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ec71b6eff70646db8848a04c8678831e'
                        key: {
                            sys_ui_section: {
                                id: '5dc73c976eb245089fe3066180cc7f37'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Authorization Status and Dates'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ed266e9a980141a081ced9912bd87e98'
                        key: {
                            sys_ui_section: {
                                id: 'fa03eb3967ac48379aca2c96a2050e02'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Signed PDF'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'signed_pdf_generated_date_time'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eed27a4bcb0141b3b5a6ac0bcface41d'
                        key: {
                            sys_ui_section: {
                                id: '16dd97a05e67441b92c9eac06502d0cc'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'General'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eee14027fe194f5da60cead1e40d2282'
                        key: {
                            sys_ui_section: {
                                id: '13ef4cb60ffc436ea3b73984529105fd'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Employee Signature Evidence'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
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
                        table: 'sys_ui_section'
                        id: 'ef7c46adb4a442ee9ec01ed75f2bfe9f'
                        key: {
                            name: 'x_2108496_hr_acces_auth_detail'
                            caption: 'Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: 'f3d77e1c3f0b490cabb3d265fc44b1ce'
                        key: {
                            sys_ui_section: {
                                id: 'b2a585c5904b4970850b567625a4d607'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Conditions'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f3f0016aa39a46949ed6a60f9ad1e4e8'
                        key: {
                            sys_ui_section: {
                                id: '5dfcd9455e464d5292f658c74bcbd353'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_config'
                                    caption: 'Assignment Groups'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'default_analytics_assignment_group'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f40a253d8a804feaa289bb65d1091651'
                        key: {
                            sys_ui_form: {
                                id: '69604c7c8bf14333a6013399dd603508'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1ab448b3b16f46fd81fe494d4d1337ae'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_access'
                                    caption: 'Access Item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: 'f7795c5d86a34260a4ad991267bc4a05'
                        key: {
                            sys_ui_section: {
                                id: 'fa03eb3967ac48379aca2c96a2050e02'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Signed PDF'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
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
                        table: 'sys_ui_section'
                        id: 'fa03eb3967ac48379aca2c96a2050e02'
                        key: {
                            name: 'x_2108496_hr_acces_rob_auth'
                            caption: 'Signed PDF'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fa72f391324c4b59bf5f9c930cefde39'
                        key: {
                            sys_ui_section: {
                                id: 'fa03eb3967ac48379aca2c96a2050e02'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Signed PDF'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'signed_pdf_generated'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fab5c80234de424cb765d51adee508d2'
                        key: {
                            sys_ui_section: {
                                id: '4372b94fef1f4c4985423b98d2a83db9'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Audit Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'audit_notes'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: 'fc1978d34763490a82f9bd34c2526823'
                        key: {
                            sys_ui_section: {
                                id: '5f4be10a63744662a91aed07d741b455'
                                key: {
                                    name: 'x_2108496_hr_acces_auth_detail'
                                    caption: 'Source Records'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'fc755664860a44198af256c4086c501f'
                        key: {
                            name: 'x_2108496_hr_acces_rob_config'
                            caption: 'Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd59f77e3f604cbda99943ae700e40da'
                        key: {
                            sys_ui_section: {
                                id: '4f3c429ef46e48b89fb4d726bc29a85b'
                                key: {
                                    name: 'x_2108496_hr_acces_rob_auth'
                                    caption: 'Authorized Access Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_2108496_hr_acces_rob_auth.x_2108496_hr_acces_auth_detail.rob_authorization_form'
                            position: '0'
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
