import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '202d44d84be84f0fafc7116ed8d60a08'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'bc461707de8447e6ae46991f34a16452'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00b724aec342c31068a35f2b2b0131de'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '00d8e0a2c3c2c31068a35f2b2b0131bf'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_type'
                            value: 'on'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '00d8e0a2c3c2c31068a35f2b2b0131c3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'mark_when_complete'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '01e72462c382c31068a35f2b2b01313d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'depends_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02e72862c382c31068a35f2b2b0131a9'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'hr_profile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02e72862c382c31068a35f2b2b0131bd'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'hr_service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02e76862c382c31068a35f2b2b013190'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_document'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '04b724aec342c31068a35f2b2b0131af'
                        key: {
                            name: 'sn_hr_core_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04d8e0a2c3c2c31068a35f2b2b0131c3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '059ca8e2c386c31068a35f2b2b013155'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05e7e062c382c31068a35f2b2b0131c6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'days_due_before_start'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '065aa86ec306c31068a35f2b2b013129'
                        key: {
                            name: 'sn_hr_core_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06e76862c382c31068a35f2b2b013172'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_document'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06f764e2c382c31068a35f2b2b01312b'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08b724aec342c31068a35f2b2b0131b4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '08d824a2c3c2c31068a35f2b2b013105'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_units'
                            value: 'months'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ae76862c382c31068a35f2b2b013129'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_service'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0cd824a2c3c2c31068a35f2b2b013100'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'request_suspension_reason'
                            value: 'group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0cd8e0a2c3c2c31068a35f2b2b0131c2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'credential'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0de72462c382c31068a35f2b2b01315a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'depends_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e14b06ec38ac31068a35f2b2b0131b1'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'jny_context'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12c8e862c3c2c31068a35f2b2b0131f9'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_reason'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '12e7a862c382c31068a35f2b2b013111'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'initiated_from'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13e760a2c382c31068a35f2b2b013192'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'resolution_requires'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '159ce8e2c386c31068a35f2b2b01310c'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'display_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '15b768aec342c31068a35f2b2b013178'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '16c82c62c3c2c31068a35f2b2b013101'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'resolution_requires'
                            value: 'inconclusive'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16f7a4e2c382c31068a35f2b2b01310c'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'topic_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1be760a2c382c31068a35f2b2b01317f'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'request_suspension_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ef764e2c382c31068a35f2b2b0131d3'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'template_invoked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20f728a2c382c31068a35f2b2b0131e5'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_breached'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '20f768a2c382c31068a35f2b2b013184'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '217872a553112200eb7c0a1806dc346a'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'contact_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21e7a462c382c31068a35f2b2b0131ae'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'ettr'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21f760e2c382c31068a35f2b2b013163'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '242430aec38ac31068a35f2b2b013103'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'auto_create_plan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '242430aec38ac31068a35f2b2b01313a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'plan_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24e76062c382c31068a35f2b2b0131d0'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'case_support_team'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24e7a062c382c31068a35f2b2b013121'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'collaborators'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26f7e4e2c382c31068a35f2b2b01317b'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'transferred_from'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '282430aec38ac31068a35f2b2b013161'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'ja_plan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '282430aec38ac31068a35f2b2b013198'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'plan_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29e76462c382c31068a35f2b2b0131da'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'employee_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29e7a462c382c31068a35f2b2b0131f4'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'external_attendees'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ae7e862c382c31068a35f2b2b013176'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'meeting_subject'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2be64cbac30e471068a35f2b2b013167'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'task_support_team'
                            value: 'agent_workspace'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2be7a0a2c382c31068a35f2b2b0131a8'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'rich_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2c24fc6ec38ac31068a35f2b2b013185'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'create_JA_plan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ce76062c382c31068a35f2b2b013163'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'case_reassignment_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ce7a062c382c31068a35f2b2b01310e'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'cloned_from'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d14306ec38ac31068a35f2b2b0131b1'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'jny_context'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2de76462c382c31068a35f2b2b0131bc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'employee_form'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ee72c62c382c31068a35f2b2b0131a6'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'opened_for'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '309aace5531312002b76da86a11c085e'
                        key: {
                            category: 'sn_hr_core_case'
                            prefix: 'HRC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '30f7a8a2c382c31068a35f2b2b01315d'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32e76c62c382c31068a35f2b2b0131cf'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'parent_case_users'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32e76c62c382c31068a35f2b2b0131fa'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'payload'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33d7ac22c382c31068a35f2b2b013156'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'actual_resolution_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '34f82bb50b1122008cd6e7ae37673a9b'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35f7a0e2c382c31068a35f2b2b0131dc'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'subject_person_job'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35f7e0e2c382c31068a35f2b2b0131dd'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'survey'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '365330019f22120047a2d126c42e70e5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36e76c62c382c31068a35f2b2b0131b1'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'parent_case_users'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36e7ac62c382c31068a35f2b2b013172'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'pending_approval_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37d7ac22c382c31068a35f2b2b013105'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'acknowledgment_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37e724a2c382c31068a35f2b2b01315e'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'set_reminder'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '381f2866c30ac31068a35f2b2b01315c'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'submit_order_guide'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3be724a2c382c31068a35f2b2b013140'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'set_reminder'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3de72862c382c31068a35f2b2b013133'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'generated_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3de7e462c382c31068a35f2b2b0131ab'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'fulfillment_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3df7a0e2c382c31068a35f2b2b01316f'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'subject_person_hr_profile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '3e5330019f22120047a2d126c42e70e4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ef728e2c382c31068a35f2b2b0131f3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'when_to_send'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3fd7ac22c382c31068a35f2b2b013117'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'actual_resolution_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40d8e0a2c3c2c31068a35f2b2b013195'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'schedule_method'
                            value: 'manual'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40d8e0a2c3c2c31068a35f2b2b0131bd'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'integrating_system'
                            value: 'cicplus'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40d8e0a2c3c2c31068a35f2b2b0131bf'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_type'
                            value: 'after'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40d8e0a2c3c2c31068a35f2b2b0131c3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'sign_document'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4214f06ec38ac31068a35f2b2b01314c'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'jny_context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42e76862c382c31068a35f2b2b013196'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42f724e2c382c31068a35f2b2b0131bc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'task_support_team'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44d824a2c3c2c31068a35f2b2b013105'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_units'
                            value: 'hours'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44d8e0a2c3c2c31068a35f2b2b0131c3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'view_video'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44e7ac22c382c31068a35f2b2b0131be'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'attendees'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4714786ec38ac31068a35f2b2b013164'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'auto_initiate_doc_tasks'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49e7e062c382c31068a35f2b2b0131d7'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'days_due_before_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b14386ec38ac31068a35f2b2b0131f3'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'document_template'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4cd824a2c3c2c31068a35f2b2b013100'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'request_suspension_reason'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4cd8e0a2c3c2c31068a35f2b2b0131c2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'e_signature'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d9c68e2c386c31068a35f2b2b0131e2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4de72462c382c31068a35f2b2b0131c1'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'details'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ee76862c382c31068a35f2b2b01313a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ee76862c382c31068a35f2b2b0131b3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ef724e2c382c31068a35f2b2b0131d9'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'task_support_team'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50e72062c382c31068a35f2b2b013164'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'bulk_case_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50f728a2c382c31068a35f2b2b01316c'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52f764e2c382c31068a35f2b2b013189'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'template_invoked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52f7a4e2c382c31068a35f2b2b013164'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'topic_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5314f86ec38ac31068a35f2b2b01311a'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'html_template_body_override'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '559ca8e2c386c31068a35f2b2b0131f8'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55b768aec342c31068a35f2b2b013195'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '56c8e862c3c2c31068a35f2b2b0131fe'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'pending_approval_action'
                            value: 'awaiting_reapproval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56e7a862c382c31068a35f2b2b0131f3'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'max_ettr'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56f7a4e2c382c31068a35f2b2b013192'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'topic_detail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56f7e4e2c382c31068a35f2b2b013102'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'topic_detail'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5714786ec38ac31068a35f2b2b0131ff'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'auto_initiate_doc_tasks'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '59b768aec342c31068a35f2b2b013173'
                        key: {
                            name: 'sn_hr_core_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ae7e862c382c31068a35f2b2b013131'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'max_ettr'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cf7e4a2c382c31068a35f2b2b01316f'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'skip_auto_assign'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ec8e862c3c2c31068a35f2b2b0131f8'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_reason'
                            value: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60f768a2c382c31068a35f2b2b0131e4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62e76c62c382c31068a35f2b2b013162'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'optional'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62e7e862c382c31068a35f2b2b0131cc'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'min_ettr'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62f7e4e2c382c31068a35f2b2b01319d'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'transferred_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6714f86ec38ac31068a35f2b2b013183'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'html_template_body_override'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6824fc6ec38ac31068a35f2b2b0131cf'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'plan_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6824fc6ec38ac31068a35f2b2b0131ff'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'employee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69e76462c382c31068a35f2b2b0131e0'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'employee_percent_complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ae7e862c382c31068a35f2b2b0131b9'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'meeting_subject'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6af728e2c382c31068a35f2b2b01314b'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c2430aec38ac31068a35f2b2b013126'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'plan_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c2430aec38ac31068a35f2b2b01315d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'start_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c24fc6ec38ac31068a35f2b2b0131bc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'plan_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6cc96426c306c31068a35f2b2b0131c5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'hr_service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d14306ec38ac31068a35f2b2b0131e9'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'jny_context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6de7a462c382c31068a35f2b2b013158'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6de7a462c382c31068a35f2b2b0131df'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'ettr'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6de7e462c382c31068a35f2b2b013105'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'external_attendees'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ef728e2c382c31068a35f2b2b01312d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6fe7a0a2c382c31068a35f2b2b013193'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'rich_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fe7e0a2c382c31068a35f2b2b013168'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'sc_cat_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71e7e462c382c31068a35f2b2b013161'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'fulfillment_instructions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71e7e462c382c31068a35f2b2b0131f7'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'generated_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71f7a0e2c382c31068a35f2b2b0131fe'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'submitter_can_cancel'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '725330019f22120047a2d126c42e70e5'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'watch_list'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72f768e2c382c31068a35f2b2b01311e'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '741f2866c30ac31068a35f2b2b01314d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'submit_catalog_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75e7e462c382c31068a35f2b2b0131d9'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'generated_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75f7e0e2c382c31068a35f2b2b01313c'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'submitter_can_cancel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '765330019f22120047a2d126c42e70e5'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76e7ac62c382c31068a35f2b2b0131d2'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'predicted_hr_service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78e7e062c382c31068a35f2b2b013178'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79e72862c382c31068a35f2b2b013109'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'generated_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79e72862c382c31068a35f2b2b013157'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'groups'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79f7a0e2c382c31068a35f2b2b013191'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'subject_person_job'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '7a5330019f22120047a2d126c42e70e4'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7af728e2c382c31068a35f2b2b0131c9'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'when_to_send'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7af768e2c382c31068a35f2b2b0131fa'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow_invoked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ce7e062c382c31068a35f2b2b01315a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ce7e062c382c31068a35f2b2b0131a8'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7de72862c382c31068a35f2b2b013139'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'groups'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '7e5330019f22120047a2d126c42e70e4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80d8e0a2c3c2c31068a35f2b2b0131c3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'take_survey'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '819c68e2c386c31068a35f2b2b0131df'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'display_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82f724e2c382c31068a35f2b2b013169'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'task_percent_complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83e7ec62c382c31068a35f2b2b01312a'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'predicted_hr_service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '84d824a2c3c2c31068a35f2b2b013105'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_units'
                            value: 'days'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '84d8e0a2c3c2c31068a35f2b2b0131c3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'action_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86e76862c382c31068a35f2b2b013108'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'hr_service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86f724e2c382c31068a35f2b2b0131a7'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'task_percent_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86f764e2c382c31068a35f2b2b01314c'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'template'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8714786ec38ac31068a35f2b2b013150'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'document_template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '88d824a2c3c2c31068a35f2b2b013100'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'request_suspension_reason'
                            value: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88e7ac22c382c31068a35f2b2b0131a9'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'approval_flow_params'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88e7ac22c382c31068a35f2b2b0131cf'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'attendees'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '899c68e2c386c31068a35f2b2b0131ce'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'display_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '899ca8e2c386c31068a35f2b2b0131b6'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89e7e062c382c31068a35f2b2b0131dd'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b14386ec38ac31068a35f2b2b01316a'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'doc_tasks_initiated'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8cd8e0a2c3c2c31068a35f2b2b0131c2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'e_sign'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8de72462c382c31068a35f2b2b01311b'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ee76862c382c31068a35f2b2b0131b9'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'initiated_from'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ef724e2c382c31068a35f2b2b013138'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'suspend_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ef724e2c382c31068a35f2b2b0131df'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'template'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92c82c62c3c2c31068a35f2b2b013101'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'resolution_requires'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92f764e2c382c31068a35f2b2b01316a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '959ce8e2c386c31068a35f2b2b0131b4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow_type'
                            value: 'flow'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '96c8e862c3c2c31068a35f2b2b0131fe'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'pending_approval_action'
                            value: 'generating_approvals'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98f728a2c382c31068a35f2b2b01314b'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'skip_automatic_user_acceptance_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98f7e4a2c382c31068a35f2b2b0131db'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'skip_automatic_user_acceptance_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99e72462c382c31068a35f2b2b0131f3'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ce72062c382c31068a35f2b2b013195'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'bulk_case_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9ec8e862c3c2c31068a35f2b2b0131f8'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_reason'
                            value: 'company'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ee7a862c382c31068a35f2b2b01318b'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'interval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f14b86ec38ac31068a35f2b2b01319c'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'document_template_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a02430aec38ac31068a35f2b2b013123'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'auto_create_plan'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a024fc6ec38ac31068a35f2b2b0131ec'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'employee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0f768a2c382c31068a35f2b2b0131a5'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_for'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1e7a462c382c31068a35f2b2b01316a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2f7e4e2c382c31068a35f2b2b013124'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'transferred_from'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3e7a0a2c382c31068a35f2b2b013123'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'rich_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3e7a0a2c382c31068a35f2b2b0131df'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'rich_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3e7e0a2c382c31068a35f2b2b01310a'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'rtbi_report_template'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3e7e0a2c382c31068a35f2b2b01317a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'sc_cat_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a4e7a062c382c31068a35f2b2b013178'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'collaborators'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5f760e2c382c31068a35f2b2b0131ea'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6f728e2c382c31068a35f2b2b01316f'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'use_assignment_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7e7e0a2c382c31068a35f2b2b013148'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'rtbi_report_template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a82430aec38ac31068a35f2b2b013178'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'plan_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8f768a2c382c31068a35f2b2b013138'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9f760e2c382c31068a35f2b2b013199'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aaf728e2c382c31068a35f2b2b013151'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'use_assignment_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'abe7e0a2c382c31068a35f2b2b01318c'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'schedule_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'acc9a426c306c31068a35f2b2b013176'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'collect_Information'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ace72062c382c31068a35f2b2b0131da'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'case_reassignment_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aee72c62c382c31068a35f2b2b0131fd'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'opened_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'af89e8a5531312002b76da86a11c087c'
                        key: {
                            category: 'sn_hr_core_task'
                            prefix: 'HRT'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'afe64cbac30e471068a35f2b2b0131f5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'awa_queue'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'b25330019f22120047a2d126c42e70e5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2e76c62c382c31068a35f2b2b013168'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'order_guide'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2e7ac62c382c31068a35f2b2b013151'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'payload'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3d7ac22c382c31068a35f2b2b013177'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'approval_flow_params'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'b65330019f22120047a2d126c42e70e5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7e724a2c382c31068a35f2b2b01311f'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'service_activities_triggered'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8e7e062c382c31068a35f2b2b01317e'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9e72862c382c31068a35f2b2b01315d'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'hr_profile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9e7e462c382c31068a35f2b2b013129'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'external_attendees_list'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9f7e0e2c382c31068a35f2b2b0131a6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'survey'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'ba5330019f22120047a2d126c42e70e4'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bae7ac62c382c31068a35f2b2b0131bd'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'pending_approval_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'baf768e2c382c31068a35f2b2b013181'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbd76c22c382c31068a35f2b2b0131f4'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'acknowledgment_text'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bce7e062c382c31068a35f2b2b0131ae'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_units'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bde7e462c382c31068a35f2b2b01310b'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'external_attendees_list'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'be5330019f22120047a2d126c42e70e4'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'opened_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c0d8e0a2c3c2c31068a35f2b2b0131c3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'upload_documents'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1e7e062c382c31068a35f2b2b0131c0'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_units'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2f724e2c382c31068a35f2b2b01314a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'suspend_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2f7e0e2c382c31068a35f2b2b0131fc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'survey_instance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c314386ec38ac31068a35f2b2b0131d3'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'doc_tasks_initiated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4d824a2c3c2c31068a35f2b2b013105'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_units'
                            value: 'weeks'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4d824a2c3c2c31068a35f2b2b013116'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'task_support_team'
                            value: 'users_and_groups'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c59ca8e2c386c31068a35f2b2b013100'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c8d824a2c3c2c31068a35f2b2b013100'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'request_suspension_reason'
                            value: 'company'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c8d8e0a2c3c2c31068a35f2b2b0131c2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'checklist'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c99ca8e2c386c31068a35f2b2b0131a2'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ccd8e0a2c3c2c31068a35f2b2b0131be'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'date_offset_type'
                            value: 'before'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ccd8e0a2c3c2c31068a35f2b2b0131c2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'hr_task_type'
                            value: 'meeting'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cef724e2c382c31068a35f2b2b013119'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'survey_instance'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2c82c62c3c2c31068a35f2b2b013101'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'resolution_requires'
                            value: 'noncritical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2e7a862c382c31068a35f2b2b01314f'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'integrating_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2f7a4e2c382c31068a35f2b2b013106'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'template_invoked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4f728a2c382c31068a35f2b2b0131b7'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd59ce8e2c386c31068a35f2b2b0131b4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow_type'
                            value: 'workflow'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6e7a862c382c31068a35f2b2b013131'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'integrating_system'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6f764e2c382c31068a35f2b2b0131e8'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'template_invoked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7e760a2c382c31068a35f2b2b013162'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'request_suspension_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9e76462c382c31068a35f2b2b0131b6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'email_template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dae7a862c382c31068a35f2b2b013161'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'interval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dae7e862c382c31068a35f2b2b013152'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'meeting_details'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db14b86ec38ac31068a35f2b2b01311f'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'generated_document'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db14b86ec38ac31068a35f2b2b0131f9'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'document_template_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dbe760a2c382c31068a35f2b2b0131dc'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'resolution_requires'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcf7e4a2c382c31068a35f2b2b0131c6'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'skip_auto_assign'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dd9ce8e2c386c31068a35f2b2b01314d'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'display_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dde76462c382c31068a35f2b2b013198'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'email_template'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dec8e862c3c2c31068a35f2b2b0131f8'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_reason'
                            value: 'group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df14b86ec38ac31068a35f2b2b013188'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'generated_document'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0f7a8a2c382c31068a35f2b2b013105'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1f760e2c382c31068a35f2b2b013141'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1f7a0e2c382c31068a35f2b2b01310c'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'subject_person_hr_profile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2f7e4e2c382c31068a35f2b2b0131f4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'transferred_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3e68cbac30e471068a35f2b2b013109'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'awa_queue'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4e76062c382c31068a35f2b2b013178'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'case_support_team'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4e76062c382c31068a35f2b2b0131fd'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'cloned_from'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6e76c62c382c31068a35f2b2b01312b'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'optional'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6e7e862c382c31068a35f2b2b013170'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'meeting_details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e9e7a462c382c31068a35f2b2b013137'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'employee_percent_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9f760e2c382c31068a35f2b2b01319f'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'subject_person'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'eb5aa0aec306c31068a35f2b2b0131ad'
                        key: {
                            name: 'sn_hr_core_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec2430aec38ac31068a35f2b2b01313d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'start_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec2430aec38ac31068a35f2b2b013174'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'ja_plan'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ecf768a2c382c31068a35f2b2b013123'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_breached'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'edf720e2c382c31068a35f2b2b0131dc'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eee72c62c382c31068a35f2b2b013154'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'min_ettr'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'f25330019f22120047a2d126c42e70e5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2e76c62c382c31068a35f2b2b0131ab'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'order_guide'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'f65330019f22120047a2d126c42e70e5'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6f768e2c382c31068a35f2b2b0131a3'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'workflow_invoked'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'f7ad9990c3502200b599b4ad81d3aead'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8f7a8a2c382c31068a35f2b2b013171'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'fa5330019f22120047a2d126c42e70e4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbe7e0a2c382c31068a35f2b2b0131d4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'service_activities_triggered'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fcf7a8a2c382c31068a35f2b2b0131d5'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'sla_suspended_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'fe5330019f22120047a2d126c42e70e4'
                        key: {
                            name: 'sn_hr_core_case'
                            element: 'opened_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffe7e0a2c382c31068a35f2b2b01319d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'schedule_method'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
