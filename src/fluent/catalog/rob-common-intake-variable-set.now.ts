import { LabelVariable, VariableSet } from '@servicenow/sdk/core'

export const robCommonIntakeVariableSet = VariableSet({
    $id: Now.ID['rob-common-intake-variable-set'],
    title: 'ROB Common Intake',
    internalName: 'rob_common_intake',
    description: 'Shared intake questions for HR access authorization requests.',
    type: 'singleRow',
    layout: 'normal',
    order: 100,
    variables: {
        self_submission_notice: LabelVariable({
            question:
                'This request will be submitted for your own HR systems or data access.',
            order: 100,
            active: true,
            mapToField: false,
        }),
    },
})
