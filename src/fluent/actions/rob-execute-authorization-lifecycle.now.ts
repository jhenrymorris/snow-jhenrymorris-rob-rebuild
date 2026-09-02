import { Action, actionStep, wfa } from '@servicenow/sdk/automation'
import {
    BooleanColumn,
    ChoiceColumn,
    IntegerColumn,
    StringColumn,
} from '@servicenow/sdk/core'

export const robExecuteAuthorizationLifecycle = Action(
    {
        $id: Now.ID['rob-execute-authorization-lifecycle'],
        name: 'ROB Execute Authorization Lifecycle',
        internalName: 'rob_execute_authorization_lifecycle',
        description:
            'Package-private fixed dispatch adapter from the two V2 post-commit HR Case Flows to RobAuthorizationLifecycleEntry.',
        access: 'package_private',
        inputs: {
            case_sys_id: StringColumn({
                label: 'Committed HR Case sys_id',
                mandatory: true,
                maxLength: 32,
            }),
            lifecycle_path: ChoiceColumn({
                label: 'Lifecycle path',
                mandatory: true,
                choices: {
                    payroll: 'Payroll',
                    workforce: 'Workforce Administration',
                },
                dropdown: 'dropdown_with_none',
            }),
        },
        outputs: {
            success: BooleanColumn({ label: 'Success' }),
            disposition: StringColumn({ label: 'Disposition', maxLength: 80 }),
            case_sys_id: StringColumn({ label: 'HR Case sys_id', maxLength: 32 }),
            authorization_sys_id: StringColumn({
                label: 'Authorization sys_id',
                maxLength: 32,
            }),
            created_authorization: BooleanColumn({ label: 'Authorization created' }),
            created_detail_count: IntegerColumn({ label: 'Details created', min: 0 }),
            signing_started: BooleanColumn({ label: 'Signing started' }),
            reason: StringColumn({ label: 'Outcome reason', maxLength: 255 }),
        },
    },
    (params) => {
        const lifecycle = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['rob-execute-authorization-lifecycle-script'],
                label: 'Dispatch fixed authorization lifecycle entry',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../server/rob-execute-authorization-lifecycle-action.server.js'
                ),
                inputVariables: {
                    case_sys_id: {
                        label: 'Committed HR Case sys_id',
                        value: wfa.dataPill(params.inputs.case_sys_id, 'string'),
                    },
                    lifecycle_path: {
                        label: 'Lifecycle path',
                        value: wfa.dataPill(params.inputs.lifecycle_path, 'string'),
                    },
                },
                outputVariables: {
                    success: BooleanColumn({ label: 'Success' }),
                    disposition: StringColumn({
                        label: 'Disposition',
                        maxLength: 80,
                    }),
                    case_sys_id: StringColumn({ label: 'HR Case sys_id', maxLength: 32 }),
                    authorization_sys_id: StringColumn({
                        label: 'Authorization sys_id',
                        maxLength: 32,
                    }),
                    created_authorization: BooleanColumn({
                        label: 'Authorization created',
                    }),
                    created_detail_count: IntegerColumn({
                        label: 'Details created',
                        min: 0,
                    }),
                    signing_started: BooleanColumn({ label: 'Signing started' }),
                    reason: StringColumn({ label: 'Outcome reason', maxLength: 255 }),
                },
            }
        )

        wfa.assignActionOutputs(params.outputs, {
            success: wfa.dataPill(lifecycle.success, 'boolean'),
            disposition: wfa.dataPill(lifecycle.disposition, 'string'),
            case_sys_id: wfa.dataPill(lifecycle.case_sys_id, 'string'),
            authorization_sys_id: wfa.dataPill(
                lifecycle.authorization_sys_id,
                'string'
            ),
            created_authorization: wfa.dataPill(
                lifecycle.created_authorization,
                'boolean'
            ),
            created_detail_count: wfa.dataPill(
                lifecycle.created_detail_count,
                'integer'
            ),
            signing_started: wfa.dataPill(lifecycle.signing_started, 'boolean'),
            reason: wfa.dataPill(lifecycle.reason, 'string'),
        })
    }
)
