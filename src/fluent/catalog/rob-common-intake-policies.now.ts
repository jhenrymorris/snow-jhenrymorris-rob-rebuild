import { CatalogUiPolicy } from '@servicenow/sdk/core'
import { robCommonIntakeVariableSet } from './rob-common-intake-variable-set.now'

export const requireAccessEndDateForTimeLimitedWorkers = CatalogUiPolicy({
    $id: Now.ID['rob-require-access-end-date-for-time-limited-workers'],
    shortDescription: 'Require ROB Access End Date for time-limited workers',
    description:
        'Makes Access End Date visible and mandatory for contractor and auditor/investigator employment types. The IPA rule remains an unresolved business configuration decision.',
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
        'x_2166123_rob_auth_employment_typeINcontractor,auditor_investigator',
    actions: [
        {
            variableName: 'x_2166123_rob_auth_access_end_date',
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
