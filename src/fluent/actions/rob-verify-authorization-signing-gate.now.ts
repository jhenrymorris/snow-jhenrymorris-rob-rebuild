import { Action, actionStep, wfa } from '@servicenow/sdk/automation'
import { BooleanColumn, StringColumn } from '@servicenow/sdk/core'

export const robVerifyAuthorizationSigningGate = Action(
    {
        $id: Now.ID['rob-verify-authorization-signing-gate'],
        name: 'ROB Verify Authorization Signing Gate',
        internalName: 'rob_verify_authorization_signing_gate',
        description:
            'Package-private post-commit adapter that verifies one exact governed Authorization Form before launching employee signing.',
        access: 'package_private',
        inputs: {
            authorization_sys_id: StringColumn({
                label: 'Committed Authorization sys_id',
                mandatory: true,
                maxLength: 32,
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
            signing_started: BooleanColumn({ label: 'Signing started' }),
            reason: StringColumn({ label: 'Outcome reason', maxLength: 255 }),
        },
    },
    (params) => {
        const verification = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['rob-verify-authorization-signing-gate-script'],
                label: 'Verify committed Authorization and launch signing',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../server/rob-verify-authorization-signing-gate-action.server.js'
                ),
                inputVariables: {
                    authorization_sys_id: {
                        label: 'Committed Authorization sys_id',
                        value: wfa.dataPill(
                            params.inputs.authorization_sys_id,
                            'string'
                        ),
                    },
                },
                outputVariables: {
                    success: BooleanColumn({ label: 'Success' }),
                    disposition: StringColumn({
                        label: 'Disposition',
                        maxLength: 80,
                    }),
                    case_sys_id: StringColumn({
                        label: 'HR Case sys_id',
                        maxLength: 32,
                    }),
                    authorization_sys_id: StringColumn({
                        label: 'Authorization sys_id',
                        maxLength: 32,
                    }),
                    signing_started: BooleanColumn({ label: 'Signing started' }),
                    reason: StringColumn({ label: 'Outcome reason', maxLength: 255 }),
                },
            }
        )

        wfa.assignActionOutputs(params.outputs, {
            success: wfa.dataPill(verification.success, 'boolean'),
            disposition: wfa.dataPill(verification.disposition, 'string'),
            case_sys_id: wfa.dataPill(verification.case_sys_id, 'string'),
            authorization_sys_id: wfa.dataPill(
                verification.authorization_sys_id,
                'string'
            ),
            signing_started: wfa.dataPill(verification.signing_started, 'boolean'),
            reason: wfa.dataPill(verification.reason, 'string'),
        })
    }
)
