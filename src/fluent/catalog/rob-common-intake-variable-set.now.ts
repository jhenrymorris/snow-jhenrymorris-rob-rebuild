import {
    DateVariable,
    LabelVariable,
    MultiLineTextVariable,
    SelectBoxVariable,
    VariableSet,
} from '@servicenow/sdk/core'

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
        x_2108496_hr_acces_employment_type: SelectBoxVariable({
            question: 'Employment Type',
            order: 200,
            active: true,
            mandatory: true,
            mapToField: false,
            choices: {
                federal_employee: { label: 'Federal Employee', sequence: 100 },
                contractor: { label: 'Contractor', sequence: 200 },
                ipa: { label: 'IPA', sequence: 300 },
                auditor_investigator: { label: 'Auditor / Investigator', sequence: 400 },
                other_time_limited: { label: 'Other Time-Limited', sequence: 500 },
            },
        }),
        x_2108496_hr_acces_access_end_date: DateVariable({
            question: 'Access End Date',
            order: 300,
            active: true,
            mandatory: false,
            mapToField: false,
        }),
        x_2108496_hr_acces_business_justification: MultiLineTextVariable({
            question: 'Business Justification',
            order: 400,
            active: true,
            mandatory: true,
            mapToField: false,
        }),
    },
})
