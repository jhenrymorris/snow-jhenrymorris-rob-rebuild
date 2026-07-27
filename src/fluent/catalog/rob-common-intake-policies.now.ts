import { CatalogUiPolicy } from '@servicenow/sdk/core'
import { robCommonIntakeVariableSet } from './rob-common-intake-variable-set.now'

export const requireAccessEndDateForTimeLimitedWorkers = CatalogUiPolicy({
    $id: Now.ID['rob-require-access-end-date-for-time-limited-workers'],
    shortDescription: 'Require ROB Access End Date for time-limited workers',
    description:
        'Makes Access End Date visible and mandatory for contractor, IPA, auditor/investigator, and other time-limited employment types.',
    appliesTo: 'set',
    variableSet: robCommonIntakeVariableSet,
    active: true,
    onLoad: true,
    reverseIfFalse: true,
    runScripts: false,
    runScriptsInUiType: 'all',
    appliesOnCatalogItemView: true,
    appliesOnCatalogTasks: false,
    appliesOnRequestedItems: false,
    appliesOnTargetRecord: false,
    catalogCondition:
        'x_2108496_hr_acces_employment_typeINcontractor,ipa,auditor_investigator,other_time_limited',
    actions: [
        {
            variableName: 'x_2108496_hr_acces_access_end_date',
            visible: true,
            mandatory: true,
            cleared: false,
            order: 100,
            variableMessageType: 'info',
            variableMessage:
                'An Access End Date is required for time-limited access.',
        },
    ],
})
