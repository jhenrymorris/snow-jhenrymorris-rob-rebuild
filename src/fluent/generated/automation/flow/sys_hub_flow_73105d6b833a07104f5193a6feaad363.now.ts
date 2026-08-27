import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['73105d6b833a07104f5193a6feaad363'],
        name: 'ROB Authorization Supervisor Approval',
        internalName: 'rob_authorization_supervisor_approval',
        description:
            'Governed V2 supervisor approval and native signature orchestration for New, Amendment, and Renewal authorization forms.',
        runAs: 'system',
        masterSnapshot: '89e7f6a783f647104f5193a6feaad35f',
    },
    wfa.trigger(
        trigger.record.updated,
        {
            $id: Now.ID['29a9a5e7833e07104f5193a6feaad3c9'],
        },
        {
            table: 'x_2166123_rob_auth_rob_auth',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_flow_in: 'any',
            run_on_extended: 'false',
            condition:
                'status=pending_supervisor_approval_signature^employee_signature_complete=true^supervisorISNOTEMPTY^source_hrsd_case.ref_sn_hr_core_case_payroll.x_2166123_rob_auth_authorization_processing_blocked=false^source_hrsd_case.ref_sn_hr_core_case_payroll.x_2166123_rob_auth_exception_review_required=false^NQstatus=pending_supervisor_approval_signature^employee_signature_complete=true^supervisorISNOTEMPTY^source_hrsd_case.ref_sn_hr_core_case_workforce_admin.x_2166123_rob_auth_authorization_processing_blocked=false^source_hrsd_case.ref_sn_hr_core_case_workforce_admin.x_2166123_rob_auth_exception_review_required=false',
            run_when_user_setting: 'any',
            trigger_strategy: 'once',
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.askForApproval,
            {
                $id: Now.ID['342d79ab833e07104f5193a6feaad3bb'],
                uuid: 'a0bd7adb-d491-4b8c-b36f-b0702db39037',
            },
            {
                approval_field: '',
                journal_field: '',
                due_date: wfa.approvalDueDate({
                    action: 'none',
                    dateType: 'actual',
                    date: '{}',
                    duration: 1,
                    durationType: 'days',
                    daysSchedule: '',
                }),
                approval_conditions: wfa.approvalRules({
                    conditionType: 'OR',
                    ruleSets: [
                        {
                            action: 'Approves',
                            conditionType: 'AND',
                            rules: [
                                [
                                    {
                                        ruleType: 'Any',
                                        // @ts-ignore SDK Flow transformer requires dot access; the IDE types this custom-table trigger as an index signature.
                                        users: [wfa.dataPill(_params.trigger.current.supervisor, 'reference')],
                                        groups: [],
                                        manual: false,
                                    },
                                ],
                            ],
                        },
                        {
                            action: 'Rejects',
                            conditionType: 'AND',
                            rules: [
                                [
                                    {
                                        ruleType: 'Any',
                                        // @ts-ignore SDK Flow transformer requires dot access; the IDE types this custom-table trigger as an index signature.
                                        users: [wfa.dataPill(_params.trigger.current.supervisor, 'reference')],
                                        groups: [],
                                        manual: false,
                                    },
                                ],
                            ],
                        },
                    ],
                }),
                table: 'x_2166123_rob_auth_rob_auth',
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                approval_reason: 'Governed ROB Authorization Form supervisor approval',
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Supervisor Approved',
                condition: `${wfa.dataPill(actionInstance_1.approval_state, 'choice')}=approved`,
                annotation: '',
                $id: Now.ID['1274ca2383fe07104f5193a6feaad307'],
                uuid: 'a3d9439d-671b-4d3e-87da-f08ae92e27fa',
            },
            () => {
                const actionInstance_3 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['41e64ee7833247104f5193a6feaad3d9'],
                        uuid: '80100ad8-745f-4279-82c2-4b2035cb36e6',
                    },
                    {
                        sort_type: 'sort_desc',
                        // @ts-ignore SDK Flow transformer requires dot access; the IDE types this custom-table trigger as an index signature.
                        conditions: `document_id=${wfa.dataPill(_params.trigger.current, 'reference')}^source_table=x_2166123_rob_auth_rob_auth^approver=${wfa.dataPill(_params.trigger.current.supervisor, 'reference')}^state=approved`,
                        dont_fail_flow_on_error: false,
                        table: 'sysapproval_approver',
                        sort_column: 'sys_updated_on',
                        if_multiple_records_are_found_action: 'use_first_record',
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['5facc267837247104f5193a6feaad391'],
                        uuid: '79f1b201-17a3-41c6-b871-256d811c995d',
                    },
                    {
                        table_name: 'x_2166123_rob_auth_rob_auth',
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        values: TemplateValue({
                            supervisor_approval_complete: 'true',
                            supervisor_approval_outcome: wfa.inlineScript("return 'approved';"),
                            supervisor_approver: wfa.dataPill(actionInstance_3.Record.approver, 'reference'),
                            supervisor_approval_date_time: wfa.dataPill(
                                actionInstance_3.Record.sys_updated_on,
                                'glide_date_time'
                            ),
                        }),
                    }
                )
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Supervisor Rejected',
                condition: `${wfa.dataPill(actionInstance_1.approval_state, 'choice')}=rejected`,
                annotation: '',
                $id: Now.ID['8d613ae783b647104f5193a6feaad3e8'],
                uuid: 'b586fa5c-38a2-4379-92e3-bd0d66288186',
            },
            () => {
                const actionInstance_6 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['da92f2ab83b647104f5193a6feaad350'],
                        uuid: 'aa2c92be-cde9-4956-b0ff-7504c55719b4',
                    },
                    {
                        sort_type: 'sort_asc',
                        sort_column: '',
                        if_multiple_records_are_found_action: 'use_first_record',
                        dont_fail_flow_on_error: false,
                        conditions: wfa.inlineScript(`var authorization = fd_data.trigger.current;
return 'document_id=' + authorization.sys_id + '^source_table=x_2166123_rob_auth_rob_auth^approver=' + authorization.supervisor.sys_id + '^state=rejected'; `),
                        table: 'sysapproval_approver',
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['f8e2beab83b647104f5193a6feaad300'],
                        uuid: '0a7a738b-2e85-4141-a417-ba64f0afe512',
                    },
                    {
                        table_name: 'x_2166123_rob_auth_rob_auth',
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        values: TemplateValue({
                            status: wfa.inlineScript("return 'denied';"),
                            supervisor_approval_complete: 'true',
                            supervisor_approval_outcome: wfa.inlineScript("return 'denied';"),
                            supervisor_approver: wfa.dataPill(actionInstance_6.Record.approver, 'reference'),
                            supervisor_approval_date_time: wfa.dataPill(
                                actionInstance_6.Record.sys_updated_on,
                                'glide_date_time'
                            ),
                            supervisor_signature_complete: 'false',
                        }),
                    }
                )
                const actionInstance_8 = wfa.action(
                    action.core.lookUpRecords,
                    {
                        $id: Now.ID['95d5366383f647104f5193a6feaad3d8'],
                        uuid: '4939a8dd-99ca-43a9-83ba-1bbe4de2e483',
                    },
                    {
                        sort_type: 'sort_asc',
                        sort_column: '',
                        max_results: 100,
                        conditions: wfa.inlineScript(`var authorization = fd_data.trigger.current;
return 'rob_authorization_form=' + authorization.sys_id + '^status=pending_authorization';`),
                        table: 'x_2166123_rob_auth_auth_detail',
                    }
                )
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_8.Records, 'records'),
                    {
                        annotation: '',
                        $id: Now.ID['8d4636a383f647104f5193a6feaad36a'],
                    },
                    (item_9) => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['0dc6b6e383f647104f5193a6feaad3b0'],
                                uuid: '2da9a8c8-6a33-4573-ab2f-73621334f110',
                            },
                            {
                                table_name: 'x_2166123_rob_auth_auth_detail',
                                record: wfa.dataPill(item_9, 'string'),
                                values: TemplateValue({
                                    status: wfa.inlineScript("return 'denied';"),
                                }),
                            }
                        )
                    }
                )
            }
        )
    }
)
