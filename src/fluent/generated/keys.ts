import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'authorized-access-details-module': {
                        table: 'sys_app_module'
                        id: '0d89809ec8124bc09ee70502dbddf651'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4d3b43eca53246db96049df124666842'
                    }
                    'capture-authorization-signature-evidence': {
                        table: 'sys_script'
                        id: '27e4f36737634da6817fc2614ecc1cea'
                    }
                    'capture-supervisor-approval-decision': {
                        table: 'sys_script'
                        id: '52718c0bbb344ae9badcba67d3030569'
                    }
                    'create-native-supervisor-approval': {
                        table: 'sys_scope_privilege'
                        id: '11e21f0a311f4eaf881d87c88105c383'
                    }
                    'create-supervisor-exception-review-task-after-insert': {
                        table: 'sys_script'
                        id: '5a301c40a447438cb7198ea6eb93ed83'
                    }
                    'create-workforce-exception-review-task-after-insert': {
                        table: 'sys_script'
                        id: 'e3d493e9aa6d49f892185f14d9cc3538'
                    }
                    'default-rob-configuration': {
                        table: 'x_2166123_hr_acc_0_rob_config'
                        id: '89a60ff18cf14a8f9c115577f446ea68'
                    }
                    'enforce-requester-profile-security-before-update': {
                        table: 'sys_script'
                        id: '225c290142e648cc83f583cfc88aa7f9'
                    }
                    'finalize-authorization-after-pdf-association': {
                        table: 'sys_script'
                        id: '06272900953f4ad38354772a89f243e4'
                    }
                    'hr-task-rob-task-type-write': {
                        table: 'sys_security_acl'
                        id: 'f4500c0ecdcd4df6a6703f234ee402e9'
                    }
                    'initiate-payroll-authorization-lifecycle': {
                        table: 'sys_script'
                        id: 'a81c1e809b9649349c3bfb6a170d21de'
                    }
                    'initiate-workforce-authorization-lifecycle': {
                        table: 'sys_script'
                        id: '71e18a5a5a014907881aa115d6e0dfac'
                    }
                    'orchestrate-payroll-fulfillment': {
                        table: 'sys_script'
                        id: '6f97f043d3204db381ab64d635d55a68'
                    }
                    'orchestrate-workforce-administration-fulfillment': {
                        table: 'sys_script'
                        id: '1f28b89e5fa74692895f58dd322194ff'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c1c7d0c4871540788f3375ccaab281f1'
                    }
                    'payroll-corrected-at-read': {
                        table: 'sys_security_acl'
                        id: '23998295ff6d4842ab05311e55d4b73f'
                    }
                    'payroll-corrected-at-write': {
                        table: 'sys_security_acl'
                        id: 'c0126128af134f0d93c82c5f2df05026'
                    }
                    'payroll-corrected-by-read': {
                        table: 'sys_security_acl'
                        id: '687a17ca28e6413abe203092b476edff'
                    }
                    'payroll-corrected-by-write': {
                        table: 'sys_security_acl'
                        id: '4b83ba8af6404765800945b3fff0216b'
                    }
                    'payroll-correction-reason-read': {
                        table: 'sys_security_acl'
                        id: '07ff9b2f93824da1a3e15fcc9d41d658'
                    }
                    'payroll-correction-reason-write': {
                        table: 'sys_security_acl'
                        id: '6f9282ccd9e34807a8c59a3dda848a49'
                    }
                    'payroll-correction-requested-read': {
                        table: 'sys_security_acl'
                        id: '9a1513c003014abd87f588d512243ee9'
                    }
                    'payroll-correction-requested-write': {
                        table: 'sys_security_acl'
                        id: '9c79957bcdb44ec1be4b0edefe222bb1'
                    }
                    'payroll-employee-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: '25bd0462f6b34ea8b80d14eafd6671ca'
                    }
                    'payroll-employee-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: '3b458941ce394fa0b947ff1d4772f069'
                    }
                    'payroll-exception-reason-read': {
                        table: 'sys_security_acl'
                        id: 'eed80b42db82486eb6bb77b7bb366fb0'
                    }
                    'payroll-exception-reason-write': {
                        table: 'sys_security_acl'
                        id: 'e0dd50b3b83b470ebbd85d438828c2ff'
                    }
                    'payroll-exception-required-read': {
                        table: 'sys_security_acl'
                        id: 'eeea8000fba844d98880933b597fee66'
                    }
                    'payroll-exception-required-write': {
                        table: 'sys_security_acl'
                        id: 'e5ee8aeeb09d40d8b0ea426548626dcf'
                    }
                    'payroll-fulfillment-gate-read': {
                        table: 'sys_security_acl'
                        id: 'ff32a91226d947039454b26772223555'
                    }
                    'payroll-fulfillment-gate-write': {
                        table: 'sys_security_acl'
                        id: '77845bbf04b1417398cf7ffa00d2f90c'
                    }
                    'payroll-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: '9fc43358cdd646cd917989ebdccb70f3'
                    }
                    'payroll-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: '274700f3b6cb46cfa58cc35936fc17e3'
                    }
                    'payroll-position-title-read': {
                        table: 'sys_security_acl'
                        id: '971a96a1ec404a9baed77c8d1d2c1bec'
                    }
                    'payroll-position-title-write': {
                        table: 'sys_security_acl'
                        id: '49d0ec6a26e446afbefa72c749bf0d14'
                    }
                    'payroll-prior-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: 'f5e02a2ab5b842f086d1e05204a5039c'
                    }
                    'payroll-prior-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: 'd37fa338656f409db5c6eb2c5e16bcc0'
                    }
                    'payroll-prior-position-title-read': {
                        table: 'sys_security_acl'
                        id: '57a6a54035f146c2a4c110af7ca73d9f'
                    }
                    'payroll-prior-position-title-write': {
                        table: 'sys_security_acl'
                        id: '7b7abdb1c7884eb39080f8b24318c393'
                    }
                    'payroll-prior-supervisor-read': {
                        table: 'sys_security_acl'
                        id: '4401a147f70643a7a7af4294dc0375fc'
                    }
                    'payroll-prior-supervisor-write': {
                        table: 'sys_security_acl'
                        id: '73413c5c0f8349699178df6ee587b894'
                    }
                    'payroll-processing-blocked-read': {
                        table: 'sys_security_acl'
                        id: 'dab407dade87459fb1880132c5fd81b3'
                    }
                    'payroll-processing-blocked-write': {
                        table: 'sys_security_acl'
                        id: '3fcc36a5f2e84f238696f95ecc5b68e5'
                    }
                    'payroll-requested-items-write': {
                        table: 'sys_security_acl'
                        id: '900356a87b744dab9a6488e217893477'
                    }
                    'payroll-supervisor-read': {
                        table: 'sys_security_acl'
                        id: 'e7befc6eece24dcd958adcd763699b81'
                    }
                    'payroll-supervisor-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: '935b25e5f744409e8c54c2dff281ce8c'
                    }
                    'payroll-supervisor-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: '69f4d48841e7427fb937ab4a1740552a'
                    }
                    'payroll-supervisor-write': {
                        table: 'sys_security_acl'
                        id: 'a6b35dd1d2c44a5d9bc60fef91975428'
                    }
                    'populate-requester-profile-snapshots-before-insert': {
                        table: 'sys_script'
                        id: 'c0661f3888234383a3a87bc3b6e4a3f9'
                    }
                    'populate-workforce-requester-profile-snapshots-before-insert': {
                        table: 'sys_script'
                        id: '92690de1c28749b6bc8ace501af7ba86'
                    }
                    'prevent-duplicate-final-authorization-pdf': {
                        table: 'sys_script'
                        id: 'e71cdddd958e4806aec63461188f36ce'
                    }
                    'read-department': {
                        table: 'sys_scope_privilege'
                        id: 'fa5ed59573c740a9b98678e7fd3069ab'
                    }
                    'read-hr-position': {
                        table: 'sys_scope_privilege'
                        id: '9796d0657ade4b689122c55d7efee584'
                    }
                    'read-hr-profile': {
                        table: 'sys_scope_privilege'
                        id: '6b23848f3fdb41e68c605c69f9258d1a'
                    }
                    'read-native-supervisor-approval': {
                        table: 'sys_scope_privilege'
                        id: '8e67dba9a4a94d73b13d5ff9a956c7ad'
                    }
                    'read-user-group': {
                        table: 'sys_scope_privilege'
                        id: 'fe5c1de1e2174644a19718d52d943933'
                    }
                    'read-user-group-membership': {
                        table: 'sys_scope_privilege'
                        id: '65566dc26c73442e873b05c46ae3646c'
                    }
                    'rederive-requester-profile-snapshots': {
                        table: 'sys_ui_action'
                        id: '4508b4bf12bd4f5ba42c676cf48a46d4'
                    }
                    'rob-access-item-active-active-read': {
                        table: 'sys_security_acl'
                        id: '1a3c89916fcd4464b9725db435140ebc'
                    }
                    'rob-access-item-active-category-read': {
                        table: 'sys_security_acl'
                        id: 'daf50640bb5a4491ae60d062d26d98a9'
                    }
                    'rob-access-item-active-internal-read': {
                        table: 'sys_security_acl'
                        id: '8b79831495494458b734c533c8d27079'
                    }
                    'rob-access-item-active-name-read': {
                        table: 'sys_security_acl'
                        id: '3a767d751ea34ec1b684ede1f81976b7'
                    }
                    'rob-access-item-active-sort-order-read': {
                        table: 'sys_security_acl'
                        id: 'e6c730fe34244bf6912a2633f2c1ad7c'
                    }
                    'rob-access-item-active-sys-id-read': {
                        table: 'sys_security_acl'
                        id: 'e76381ce2f1444bd8d22b24e15c25b45'
                    }
                    'rob-access-item-admin-create': {
                        table: 'sys_security_acl'
                        id: '84de3ef57d344e48b1e16d3fd3ce062d'
                    }
                    'rob-access-item-admin-read': {
                        table: 'sys_security_acl'
                        id: '5e849676f7144d459c530c3c22634881'
                    }
                    'rob-access-item-admin-write': {
                        table: 'sys_security_acl'
                        id: 'e9975fe6ec7149d88e51212d119a78e6'
                    }
                    'rob-access-item-eopf': {
                        table: 'x_2166123_hr_acc_0_rob_access'
                        id: '293f36e2d3e842538bce04d7340fb455'
                    }
                    'rob-access-item-fpps-wtts': {
                        table: 'x_2166123_hr_acc_0_rob_access'
                        id: 'd3fbf08ea77c42dfa0729a656c7d5011'
                    }
                    'rob-access-item-human-capital-data': {
                        table: 'x_2166123_hr_acc_0_rob_access'
                        id: 'bdaaf1d62f44414f8e231e6d78cae247'
                    }
                    'rob-access-item-internal-field-mask': {
                        table: 'sys_security_acl'
                        id: '8bf1907108cc4da49d337fcc7fa339ff'
                    }
                    'rob-access-item-report-access': {
                        table: 'x_2166123_hr_acc_0_rob_access'
                        id: '2ce743bf3ca14f149210e00b02eb0c61'
                    }
                    'rob-access-item-usa-staffing': {
                        table: 'x_2166123_hr_acc_0_rob_access'
                        id: '2fab05311fe149a1a76398af18d0fa40'
                    }
                    'rob-access-item-workforce-profile-charts': {
                        table: 'x_2166123_hr_acc_0_rob_access'
                        id: 'ab86563842864812a3390dbc21591407'
                    }
                    'rob-access-items-module': {
                        table: 'sys_app_module'
                        id: '88339d9a28cd4d32a693b418b066cd98'
                    }
                    'rob-administration-menu': {
                        table: 'sys_app_application'
                        id: '0f169ca94fe448eaa91d34a2ac088e5b'
                    }
                    'rob-analytics-access-variable-set': {
                        table: 'item_option_new_set'
                        id: 'ad03fa93b74845afaea77bfef98b7fc6'
                    }
                    'rob-authorization-access-details-list-control': {
                        table: 'sys_ui_list_control'
                        id: '399bd3504dbb4b20a3f2a74c5b16d1e1'
                    }
                    'rob-authorization-access-details-related-list': {
                        table: 'sys_ui_related_list'
                        id: '494ce8ef5bdb4d7abf590889a9854620'
                    }
                    'rob-authorization-access-details-related-list-entry': {
                        table: 'sys_ui_related_list_entry'
                        id: '024f73df811d4508b3fb164b496aef33'
                    }
                    'rob-authorization-business-justification-label': {
                        table: 'sys_ui_annotation'
                        id: 'b598700c831b4c58a6c838143dc676b5'
                    }
                    'rob-authorization-forms-module': {
                        table: 'sys_app_module'
                        id: '1b73ca7ed3c34121a1d7ff46638c72cc'
                    }
                    'rob-common-intake-variable-set': {
                        table: 'item_option_new_set'
                        id: '4742b517b9c3454bab10851721a6171c'
                    }
                    'rob-configuration-module': {
                        table: 'sys_app_module'
                        id: '6dbafdfdace34960acc7767c979ca0c4'
                    }
                    'rob-profile-authorization-context': {
                        table: 'sys_script_include'
                        id: 'a6b862af49934ca7b7130ddf674cff7f'
                    }
                    'rob-require-access-end-date-for-time-limited-workers': {
                        table: 'catalog_ui_policy'
                        id: '8ec4c37406a74e46a5fa5af25a86e6a4'
                    }
                    'rob-staffing-access-variable-set': {
                        table: 'item_option_new_set'
                        id: 'e915d42b42274ea483763ecfeaaec6c6'
                    }
                    src_server_authorization_AuthorizationDecisionService_js: {
                        table: 'sys_module'
                        id: 'd7a02eb84d644566bb80c41864bef6ab'
                    }
                    src_server_authorization_AuthorizationFinalizationService_js: {
                        table: 'sys_module'
                        id: '8f8b528638aa4eb6a2fbbc76fc6248f8'
                    }
                    src_server_authorization_AuthorizationLifecycleService_js: {
                        table: 'sys_module'
                        id: 'c5067c0a6f8e44728f4425ca134a6207'
                    }
                    src_server_authorization_AuthorizationRepository_js: {
                        table: 'sys_module'
                        id: '3f001b5de50140f88166caa171294a25'
                    }
                    src_server_authorization_AuthorizationScopeService_js: {
                        table: 'sys_module'
                        id: 'c71140d569144ead941ee70cd59ef62c'
                    }
                    src_server_authorization_ExpirationDateService_js: {
                        table: 'sys_module'
                        id: 'e3ef1f6ff2a4419b87dc78ed7b5ab91d'
                    }
                    src_server_authorization_ReuseAttestationService_js: {
                        table: 'sys_module'
                        id: '4808b233ce404d97893b70a376a2818b'
                    }
                    src_server_authorization_SignatureExecutionService_js: {
                        table: 'sys_module'
                        id: 'ee661ded73a74945b4ed0c4d60632a0f'
                    }
                    src_server_fulfillment_FulfillmentClosureService_js: {
                        table: 'sys_module'
                        id: '883fc05a83a544d99677f5c6037adcf9'
                    }
                    src_server_fulfillment_FulfillmentEscalationService_js: {
                        table: 'sys_module'
                        id: '25cdc2a926014f9cba055701fcb717d2'
                    }
                    src_server_fulfillment_FulfillmentEvidenceService_js: {
                        table: 'sys_module'
                        id: '87601d4a365645108347c3a20112346a'
                    }
                    src_server_fulfillment_FulfillmentOrchestrationService_js: {
                        table: 'sys_module'
                        id: 'd503a1ef819343a5a0bc19a96b046961'
                    }
                    src_server_fulfillment_FulfillmentRoutingService_js: {
                        table: 'sys_module'
                        id: 'cd5c4f863aca42a7b5eb6c2f5762cfd5'
                    }
                    'workforce-admin-corrected-at-read': {
                        table: 'sys_security_acl'
                        id: '687500ed0d034f298d85892ddde2648d'
                    }
                    'workforce-admin-corrected-at-write': {
                        table: 'sys_security_acl'
                        id: 'b63122f3840c483fa543a40f0d2e091e'
                    }
                    'workforce-admin-corrected-by-read': {
                        table: 'sys_security_acl'
                        id: 'bf5349417de641a6b1aec36ab09a50b9'
                    }
                    'workforce-admin-corrected-by-write': {
                        table: 'sys_security_acl'
                        id: 'df7d321f2e834c8db1ad4eda9eec59ee'
                    }
                    'workforce-admin-correction-reason-read': {
                        table: 'sys_security_acl'
                        id: '50e5b2a2af5e4e6e9c0d1aa33b091f3e'
                    }
                    'workforce-admin-correction-reason-write': {
                        table: 'sys_security_acl'
                        id: '4294547d5a864a879c1035b631762169'
                    }
                    'workforce-admin-correction-requested-read': {
                        table: 'sys_security_acl'
                        id: '221cce3d15e743e09f4615832eb3e1a9'
                    }
                    'workforce-admin-correction-requested-write': {
                        table: 'sys_security_acl'
                        id: '44ec2c00e25c485ba97a52f2fbae33b9'
                    }
                    'workforce-admin-employee-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: 'cfbe03c80a404cf4b634f05994612c3e'
                    }
                    'workforce-admin-employee-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: '6f38d73f5fef40408b98d52bb3e500e6'
                    }
                    'workforce-admin-exception-reason-read': {
                        table: 'sys_security_acl'
                        id: 'a4040b9b53a942508f2431e83baa9427'
                    }
                    'workforce-admin-exception-reason-write': {
                        table: 'sys_security_acl'
                        id: 'df10695fd03d48f58f4caa6302e3ca45'
                    }
                    'workforce-admin-exception-required-read': {
                        table: 'sys_security_acl'
                        id: 'fdbe7767f5664152ab5497304a70ac12'
                    }
                    'workforce-admin-exception-required-write': {
                        table: 'sys_security_acl'
                        id: '686f9578d0a7417f9c1aabde2c4e173f'
                    }
                    'workforce-admin-fulfillment-gate-read': {
                        table: 'sys_security_acl'
                        id: 'ca751065feb74eddb59886ba672aff89'
                    }
                    'workforce-admin-fulfillment-gate-write': {
                        table: 'sys_security_acl'
                        id: 'f8bd61471bb24784b90e617f2d885738'
                    }
                    'workforce-admin-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: '4323251b9b5d4d3a9ed24d6820fe78cf'
                    }
                    'workforce-admin-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: '073bea0aa24a4c1cb6b5d51aff669399'
                    }
                    'workforce-admin-position-title-read': {
                        table: 'sys_security_acl'
                        id: '4e6a52e54a7043e894eb07662de458d4'
                    }
                    'workforce-admin-position-title-write': {
                        table: 'sys_security_acl'
                        id: 'e4a234c7743945b6a49016dc416ed3f1'
                    }
                    'workforce-admin-prior-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: 'f83077845d704b29b784625dfea460c3'
                    }
                    'workforce-admin-prior-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: '5db79674f7d3455a9d93136fa4f2fa54'
                    }
                    'workforce-admin-prior-position-title-read': {
                        table: 'sys_security_acl'
                        id: '4b80579c8f5449509075e164dd1285fd'
                    }
                    'workforce-admin-prior-position-title-write': {
                        table: 'sys_security_acl'
                        id: 'a0632243478e4253b3dc7bd9e6ef13d8'
                    }
                    'workforce-admin-prior-supervisor-read': {
                        table: 'sys_security_acl'
                        id: 'b2e85bf4a2df4d8e851d37fdcbb32394'
                    }
                    'workforce-admin-prior-supervisor-write': {
                        table: 'sys_security_acl'
                        id: 'e297d77d03ef494782be039d4d790ff0'
                    }
                    'workforce-admin-processing-blocked-read': {
                        table: 'sys_security_acl'
                        id: 'e43fab7e6e724035a720d6f454948d78'
                    }
                    'workforce-admin-processing-blocked-write': {
                        table: 'sys_security_acl'
                        id: 'b9a4ae170f704c1fb4e5b008c79fc15b'
                    }
                    'workforce-admin-requested-items-write': {
                        table: 'sys_security_acl'
                        id: '0c8364b08ad64704bb11fa0101b729ee'
                    }
                    'workforce-admin-supervisor-read': {
                        table: 'sys_security_acl'
                        id: '65b9949f75854c5686548f25b398205f'
                    }
                    'workforce-admin-supervisor-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: '00ede5499ba54c478b55fb835d0e870f'
                    }
                    'workforce-admin-supervisor-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: '66f05f84533c4b7bb47ff009eca3da9b'
                    }
                    'workforce-admin-supervisor-write': {
                        table: 'sys_security_acl'
                        id: '4664d9a6dce24c2c9230a12feffa135c'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0017cbcb937e40f7b558efd59fb1620b'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '014401d8af804321b8a4e5e448998fb0'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_INVALID_CONFIG'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0144bd938a0c4f7cabcbab4da95bbc9b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_evaluated_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0148933ecd084e12b2f9d99505163bf9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice_set'
                        id: '01656b7f5382418783f2ce2b007ba03f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0177891917e14b99b14f1f2413c8b7fa'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '02f2ede77251454099feb107c3d393a1'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'signed_pdf_generated_date_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '030a2b818d8e430cb6240626fe725f3e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'audit_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0381569822684c4291f0c2792a6b8389'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03af41313649496199e2bb626f64ec0d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_document_execution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '03b4b8fee464422589f843c7515d81ef'
                        key: {
                            sys_ui_section: {
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_documentation'
                        id: '03c21f16f2054b4daca08dbccf1ef873'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'superseded_by_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0408ff99f3d44287bcd25277167b5822'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_signature_complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0446a66934684a4cb9251a6d639b1596'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_requested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04a672a1f794484fa154843c81894da2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04d3a62c68384a1e878ca2416577e08c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04d9a9aa0c6b4681b158b93ded059c0a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_prior_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06375c5713e44ed7a8bbabb22716384e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '06858eb812f54bbd8a3bd21d7893bbe5'
                        key: {
                            sys_ui_section: {
                                id: '57350a2b78df40b18de41cd7cbbe6f61'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '06a39d99d83f4a488a5d150097321863'
                        key: {
                            sys_security_acl: 'cfbe03c80a404cf4b634f05994612c3e'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '06d00bf740ca429aa5cb5a72f0cf1a59'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '07301115055a45ddbbccc954e6361cde'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'authorization_action'
                            value: 'amendment'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0746108db8e84bc3b022fad5047ab3fa'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '078df829964849fdacd790a961fce102'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'subject_person'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '08380781d4b84113a70006ddbf2d9d32'
                        key: {
                            sys_ui_form: {
                                id: '93faf4b40a98448ab5609de81df5702f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
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
                        id: '087c7a719e18420bb14f79f589391c97'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08ff5047b46f4280b48ee7fec2eea708'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'operations_manager_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '092b2c81f317413eb28af65d09faaa2e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '093b93d4bca84636a50f3caa60a1d8d5'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '09a58166fdff4c7e8d4807e88762a68b'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_documentation'
                        id: '0a104de84fdf43b7adffe00eb0ab09a4'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'lapse_notification_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a72956d07c44d43ad256f9ff0747518'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0a963de8a630458db2d151e3a464ab5c'
                        key: {
                            sys_ui_section: {
                                id: 'c68927a8cfd043b99d5fbe65f4ab927f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '0abc945c27da45ffa88dac219e3c9a81'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0afa03ed9f5745789d15d61ed563b0dc'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'operations_manager_escalation_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0b52be0e587349dba2579c81aa302f1e'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '0b8cc56e611b433b9f34bcdd17c9981f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supersedes_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c36bedddfd94b4db0b02b9edfacf365'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'rob_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: '0c5aa6f4d7e94d7bb1cfd925f1999168'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'NEW_PRIOR_REVOKED'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c6f679082cf4350aafd39dfec1e3968'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_category'
                            value: 'report'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0c98e165bb9e4ba98e1171e039196bd1'
                        key: {
                            sys_security_acl: '84de3ef57d344e48b1e16d3fd3ce062d'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0cc5cdb1b42a4b6cbacdd8c4482268fc'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'invalid_operations_manager'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0cccd9340a89444ebbf79b8037fb4c72'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'inactive_supervisor'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0cd356fec74a4513b1e0523e57870117'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_ui_form_section'
                        id: '0d86610c0cce43abbb9ed3341c93eb17'
                        key: {
                            sys_ui_form: {
                                id: '93faf4b40a98448ab5609de81df5702f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                                id: '57350a2b78df40b18de41cd7cbbe6f61'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        id: '0d8ecad8fdb1439289fbc615db7056b5'
                        key: {
                            sys_ui_section: {
                                id: '57350a2b78df40b18de41cd7cbbe6f61'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_ui_element'
                        id: '0dad7c5d0c344ae982eb0b23a1389425'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice_set'
                        id: '0e429a31690f4d17a0ac6014e5989269'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0eb7814e6f6b48559a4a908589bf0e8a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_access_items'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0f32ebd4a1c94691b4a75eb815093fb8'
                        key: {
                            sys_ui_section: {
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_section'
                        id: '0f3be617ab264a4faa308122936201cf'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_element'
                        id: '0faf3509f21141bba51d3734d7dc9a6f'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_choice'
                        id: '0fb55ba97e7345d496180a9d8cc7b69c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_organization'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0fbc135e3786498493d0d89caab5b376'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ffe7993ae644ec184dbbd244ba61897'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '100f8e0797b247399b1ef24fc1a16e32'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1029713c85284a32a0be5e19b24863f9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: '105f39d5e41449a298f0e90791ffb39a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1069bd45473c4a7bb7c59e66fbaafeea'
                        key: {
                            sys_ui_section: {
                                id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: '10a213cb45ca4ecd830dd9d512e90fe0'
                        key: {
                            sys_security_acl: '4294547d5a864a879c1035b631762169'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '10f57ea0684a4075bd0395a075697f7f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_JUSTIFICATION_CHANGE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '11b4630d9112463b9d5007bf318b8330'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '11ebae8191bc4758b9f2ed7e0ba920c3'
                        key: {
                            sys_ui_form: {
                                id: '93faf4b40a98448ab5609de81df5702f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                                id: '3cb6a39f1b284b059f2fee7b08c2462a'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_ui_element'
                        id: '120da3058ebf41a29d34d12288b8acea'
                        key: {
                            sys_ui_section: {
                                id: 'c68927a8cfd043b99d5fbe65f4ab927f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: '1222f7ed61f7402280d8f3e778418ed0'
                        key: {
                            sys_security_acl: 'e43fab7e6e724035a720d6f454948d78'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '124d967e9a874591b201cf5e81b1a268'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '126af1be9e1c4ec995cd84a1df30bf4e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_proposed_expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1288520954644ba598803f87843c35b8'
                        key: {
                            sys_ui_section: {
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception_task_due_days'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '12dd466fc3c1406db9fb87acc906a745'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12eb61122a154f9a8a1ed4ed0cd8e5a9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'signed_pdf_generated'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '12f6cf4c60cb434a8d6cf1322b1bc4b1'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'ad03fa93b74845afaea77bfef98b7fc6'
                            name: 'x_2166123_hr_acc_0_operations_manager'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '13034993f75f4befb7b67a4dbaa9ccea'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '131e57f29f2b4031afef97af764a7eab'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_INVALID_CONFIG'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14a8db898c014c398aa8bab5f239b9b3'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'staffing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14f4bc20d0704605a64e5691835219f6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1560b8796e994b7cad39bcbdc4b975e1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '156eba90a2b34820954573887b35814a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '15eb9ccd106846acbddad1216613cf61'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_required_access_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '15ebbe4f5b77402a91ecff2bfb61737e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'sort_order'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '15f316d2ae064d578ff5c6bdb18abd1a'
                        key: {
                            sys_ui_section: {
                                id: 'e0017e19f98f47b7bb904a3370ee5594'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: '1661252c2fcd4f15970535141ac1b309'
                        key: {
                            sys_security_acl: '23998295ff6d4842ab05311e55d4b73f'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1676fce44f134c818cdac3a4cb84d2d5'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '16bf74cbc275462481e815d506f8e8b2'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_rob_auth'
                            col_name_string: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16c83e08386f4cd8a728bd24ec560528'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16d90af720004cdea13514ff84f8000f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_uncovered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16fdf7f9ca09469a80798994e78ac81f'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: '1713f68a2daf49078e9e95d27f71a455'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17527dd22374482694cd936482964b47'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1777bae15f6b419ea4865d0a30fb5b94'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_completion_timestamp'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '177c9d01b3ce481a82bd579ed288270d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_document_execution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '177ca72f77d34b7abca98b9f53803719'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1787aec53ce8464fbd42d409f43596ef'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'operations_manager_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17b289f9d8c74e00bceeb7e52f6317de'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'revocation_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17c741613dfd4f22bd9cab88700fa6ae'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_waiver_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18c58a30e04342e1b72d50baff9cb910'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_REQUIRED_DATA'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18e054021ae14aa791c9d6930b3542bb'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18f74f3397e54cc5bbae910fff5e4fcf'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1974901baff146e084c56ffdb7a85aca'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '19f61ade99754dc79b18a5aaad3f211a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19fb9522f9d74eb8ae908a74aef4b9f1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_requested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1a2e9c0089544c0b874218260ffa56f8'
                        key: {
                            sys_security_acl: 'fdbe7767f5664152ab5497304a70ac12'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a423ba33ec747f8a8335ef0f80d899b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_employment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a74615a88bc46e7a16209b7f0833946'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a7c7f19ea3648589b8ac0d266e6a95b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b053d3cf61d491b81dc9a63163d3397'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_evaluated_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b33c18342d14d21b509af92e0253a39'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'approved_organization_root'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bfc634497174a149e9357fff70d5f3c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'document_task_execution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1c69fcd304194559aa61b30d7537855f'
                        key: {
                            sys_ui_section: {
                                id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_index'
                        id: '1cbc9d44485b4c6ea5ac47a2ecce0640'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_auth_detail'
                            col_name_string: 'rob_authorization_form,status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1cfa0b43b23a4728a7c9c1ec625b0802'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_documentation'
                        id: '1d4f222f5ac942be8e602c93713f7976'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'source_hrsd_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d654be30e77409f965ec9adddf93fac'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '1d6b0bcd8e8345f6a4510b5737b5c209'
                        key: {
                            sys_ui_form: {
                                id: 'c84954a751b84c0f8127e36a40a4a0a5'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        id: '1d97d92e8fd6450ebbe10972fc20c899'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e7b83ad32364409b7f6a917adebf2ca'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_CONFLICTING_ACTIVE_FORMS'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ec0c51a68b74ed29291c4cdf2072639'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_reminder_3_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f01f055a94a45e4b0a2521aba6a14d1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f4315bf4b494e76a12dc8903861fa11'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1f4c5fbeecf445f5b15bdbf01f96bbfc'
                        key: {
                            sys_security_acl: '57a6a54035f146c2a4c110af7ca73d9f'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f5b44cf228347769b21539aed8d8dbd'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1f9668a1194a4f828ab7984642843cf9'
                        key: {
                            sys_ui_section: {
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operations_manager_escalation_days'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f9862a9111b4e3b86a9904796be64e4'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'inactive_operations_manager'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1fd2b954d7e442cd909ea9a3690a8d25'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '1ff01031a59f43cb8f52e92cf3456e4e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '205808119b67408fa00d4752b4f766c1'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: '20e96bb3dba84d3bb69f4738f4bc291b'
                        key: {
                            sys_security_acl: '49d0ec6a26e446afbefa72c749bf0d14'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '212e32620bf9493ca08efcea09876f0d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_LAPSED'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '213a8902b1234326a73f2a1e6261da3e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2171d6f4a2df44848001e7c1f9abf1bd'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_prior_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '217a5002c5d24d06955af1a0d63784d8'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: '21b1814407554fe6a24b32bef0575018'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '21d64715007341d98fa18409fd6fa0ce'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21e42d14166a43b1a85f330904a041f5'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '221187cba7b94ebd8354a42cf53b3134'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2253d6c438ab4879b7553f2141059437'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_reminder_2_days'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22696584a4f441d7839838a79b9fa8f8'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '228133f5b6f34a4a8e7ffb3a3606ea59'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: '22d5b9833b4a4e689956f36af83e2496'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '233b481c57bf425fa96f752a322f712a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23739346687e4ade976537a3c1586b50'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '23c8641ef2c3445ea3604c41faced173'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4742b517b9c3454bab10851721a6171c'
                            name: 'x_2166123_hr_acc_0_employment_type'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '23eb08ef28e44ea7b1cf9364d396be7d'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '24030cca25984e5383e074766f024665'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_document_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2426467464b34d7aba4fe91d6c7aa050'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'amendment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24941cea9294463b9bf7406bf388a93a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'decision_evaluated_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '24a722c7b03a4920a447aff6076fa1fd'
                        key: {
                            sys_ui_section: {
                                id: '6fc95605f5904eafa1137a10f4f87164'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '24d90b12e7ec45fa8aabc2330d1d5598'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_signature_complete'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24e752c1926d4db98018fde115eef5c8'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '251c50001eef4395aa2c13868092b786'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'final_authorization_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25239f1932c745478450010f43a8120b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_approval'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '25938191fb0e4644965a7c9b745170b7'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_SUPERVISOR'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '25992bd31b63405286cc61f8e086b0be'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'inactive_supervisor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25dcf871bb45481699ba1512c0350745'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26430b41e05a4624ae90f39f56efc254'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_context'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '268281d9d13942738112bc1300f87f7b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_POSITION_ROLE_CHANGE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '268ee505d9be4585af4369bb16c7dfda'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '2693e1d04afa4ca6aed98a8a1c156046'
                        key: {
                            question: {
                                id: '23c8641ef2c3445ea3604c41faced173'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '4742b517b9c3454bab10851721a6171c'
                                    name: 'x_2166123_hr_acc_0_employment_type'
                                }
                            }
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2724621d5e974fafb2a44da439d025af'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4742b517b9c3454bab10851721a6171c'
                            name: 'x_2166123_hr_acc_0_business_justification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '276b94aab0de47d1a2bc630d1a100246'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_related_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '279653d4d7924a5991130bb79a31e1d2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27bdd09c16504bd8a78171c27afc0461'
                        key: {
                            sys_ui_section: {
                                id: 'd07e5521c71546679f423e20727600fc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: '27c435605bc74d168aec68b8c00b7529'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27c6065f4eca462c9375c919016dc69f'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '284bff86a04944d9a7f8463382c1d376'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '28524600d0404d77a06b43f90af6ce28'
                        key: {
                            sys_ui_section: {
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '2904a023c69f484ea60efa77df24c75f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'current_accepted_form_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29365ec9a27948dba48dbda99b68fac8'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '29be75c7a9b74bef8612e473d60874e5'
                        key: {
                            name: 'sn_hr_core_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29fa6c89716341ccaa3e50cc2bd5d936'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_fulfillment_gate_complete'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2a1143e720a6461f8b08a1eb4f5646b8'
                        key: {
                            sys_ui_section: {
                                id: '49ee7b99155d416b9f446a3d26e83b4f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_dictionary'
                        id: '2a167196386a478fae9539173d402de3'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_requested'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2aee36380ada48f9a468d6f02de5b96a'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_rob_auth'
                            col_name_string: 'status,expiration_date'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '2be0a559a81b40edb92919a883f5a5f1'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '2c5c5017c1d9450fa068aa03f260bd18'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2c5cb28ba8334356a898a639218dd371'
                        key: {
                            sys_ui_section: {
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '2c66d1a03e0a47a5ae757068973ff0b3'
                        key: {
                            sys_security_acl: '3b458941ce394fa0b947ff1d4772f069'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c71e3742b6b42249c91a98c052be562'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'sort_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d0eb2d7b21a45309759f88cb0cc2bab'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d1d016bd6a54deda1352c25af76f4bb'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'authorized_end_date'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2e07b521c9944a2fab0deed9d5cca61b'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_rob_auth'
                            col_name_string: 'subject_person,status,expiration_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2eb5b554d60b4f7bb30908202ca4b8b5'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'staffing_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2f7c93d868fc4bd099be6dd13b06f5ee'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '2fb9d19f04904fb781e6d719241062c2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'form_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '300967ece4bc4d3fa13e3adfd0d3e012'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '307501e75e294d9d9814a43eb10894a0'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supersedes_authorization_form'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30771006b69c49199bb4c4c7e0504cbb'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_operations_manager'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '31215f8d66f24902a6f3758f6a1c88ea'
                        key: {
                            sys_ui_section: {
                                id: '49ee7b99155d416b9f446a3d26e83b4f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        id: '3156a686c718427993823a736b6658c2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_staffing_assignment_group'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3173df02eb79481c9306cb8c552a51de'
                        key: {
                            sys_ui_section: {
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '31a4d8c2fb484632a9a20220821f3ff0'
                        key: {
                            sys_security_acl: 'eeea8000fba844d98880933b597fee66'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '31c40ef2706949e8adae34126b4eec5c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '31f8483b27864d74b67347ee66ca1d0b'
                        key: {
                            sys_security_acl: 'cfbe03c80a404cf4b634f05994612c3e'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3293b5f9a7d04168a9b5d53b8bc243df'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_operations_manager_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '32de901fa3674ad28d603984fb3f083e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_position'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '33144a081a014ca7aa28ce087f927052'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '331ac218d62c44008fc5c2443aa5483a'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'authorized_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '335c2960f1c4464da4d1b88ba76c13f6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33cbbb9c90044391b9903482f771445a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33ebc2c560f04112aa760d7fe3bdf627'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'pending_supervisor_approval_signature'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3456d7fc016347308eea6a881c5b8803'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '346e23654ef54888aba05961b62f8f9a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34903d77ba604dc7a03315bcf1a2e21d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '349a14708cf5460a826db3b8a12c92cf'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_DUPLICATE_OPEN_CASE'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '34a103a3a4da47ed90220cc34f554b6d'
                        key: {
                            sys_security_acl: 'b63122f3840c483fa543a40f0d2e091e'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '353cf9aafb444814b3cd26816b429d2c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_document_task'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3630eb8370ed4c9598414d17aeeb972b'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_documentation'
                        id: '36454dab11194ed9bf296f5062c40655'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'approved_supervisors_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '36ba422336674a92a236f2c351370c59'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            caption: 'Task Timing and Renewal Oversight'
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
                        table: 'sys_security_acl_role'
                        id: '36d80ac458504e52b2f9b701049755cc'
                        key: {
                            sys_security_acl: '00ede5499ba54c478b55fb835d0e870f'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36d892d97bff4317bb14abd8146dc5de'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '375d0f71f67f46eb8cff8e5b469635cc'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '379210ded64e4888990d5d241a226430'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_item_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37aff45b39b144a09972ed480b54cffa'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_staffing_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37bcc237944b4f2483c32face96f542c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '380151f8a37d42a0bfd61240df42b64c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_analytics_assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '387491853fa04bf29bf360802bcddff6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requested_items'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38b4e1c6944b4205a17d861ee04e1228'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_renewal_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38c46afd70924e889cb8ba9119d31f6e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requires_employee_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '39629c6dbc2645d4a40d04f473b5e77c'
                        key: {
                            sys_ui_section: {
                                id: 'd07e5521c71546679f423e20727600fc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a209675b69343eea94aa3366a0f125d'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_staffing_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a4aaf3da05f4b3887726793b892705d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_prior_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a5fc72fc28d496b9b03c40f48faae14'
                        key: {
                            sys_security_acl: '9a1513c003014abd87f588d512243ee9'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a7be5928ae045058c5abec2e1dfa119'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_operations_manager_escalation_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b000631ef3144b18cb1f3e6f0e8eb11'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b5f315afd1a4291b7a560a5ba983c0a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'decision_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3b60b231a0d84f6e9d43a18cd2f5f4d7'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'e915d42b42274ea483763ecfeaaec6c6'
                            name: 'x_2166123_hr_acc_0_requested_items'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3ba9affc52c8465a8fa99c7096bc19e7'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_documentation'
                        id: '3bd380afde0c4feaaf662bb1e8619e48'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3c86c4048057424ca9d75c2d67fd9a27'
                        key: {
                            question: {
                                id: '23c8641ef2c3445ea3604c41faced173'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '4742b517b9c3454bab10851721a6171c'
                                    name: 'x_2166123_hr_acc_0_employment_type'
                                }
                            }
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '3cb6a39f1b284b059f2fee7b08c2462a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
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
                        id: '3cf681fecb0e42dd933bc1d739c98a7c'
                        key: {
                            sys_ui_section: {
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice_set'
                        id: '3d3318245de04c5c9de01b9c11d48605'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_outcome'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d48ab088d8b4c7fbacb8c31ccfbf807'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'document_task_execution'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3d57e133b5734263a308c3227e26d4f0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_evaluated_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3d83d57360634e3e9a91ea78c31acbaa'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_outcome'
                            value: 'not_required'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d8b7b4e6f4e4d9bb85c7d00b67d05b4'
                        key: {
                            sys_ui_section: {
                                id: 'd07e5521c71546679f423e20727600fc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                            element: 'form_1768_mapping'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '3dbdebde573940bfae56264af7e4657f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: '3e0ea6a68c5144eb9750f0aaf4ce7c53'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e22a32ca7db4cf4851653fe393e3924'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_access_end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e71ff7210e442039c9ef1cadb24b446'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'exception_task_due_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e9e2b75c71a499bbc87ce17308f423c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3eac529b0f984ba88a301fd9ab23141b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ec6288603f04169a9ee9f5cbdd7f8e2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3ed116cc01f14a6794f711ec69c058a0'
                        key: {
                            sys_security_acl: 'a4040b9b53a942508f2431e83baa9427'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ee1aabf30ad4e5dacc966866e6d86bb'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3ef08c0b25284bfe8ceb83b0c8e170a9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f646ef4b7794aa9adbe7b74fec5ba81'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_reminder_1_days'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f7e817b040c4c36a0d29e183b9e8c4f'
                        key: {
                            sys_ui_section: {
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_ui_element'
                        id: '40717a78d08f40ca8a7cee3192629f77'
                        key: {
                            sys_ui_section: {
                                id: 'd07e5521c71546679f423e20727600fc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '409b322172724a658c4cd9b82435c392'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_signature'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40a8ffb1b7f34c33a24e03705ed1fa69'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_completion_evidence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40eb790d07354b2db818cdcdf2d31f99'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_AMBIGUOUS_MATERIAL_CHANGE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '414137e565394f3f9ffe608e30775163'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_proposed_expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '421cc2765b8747e287e45af714909200'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_processing_blocked'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '428e7ea7dd4d4b25a3c4aa995dd28ff0'
                        key: {
                            sys_ui_section: {
                                id: '6fc95605f5904eafa1137a10f4f87164'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: '42edd51ac32f48b0b1131fa54c442105'
                        key: {
                            sys_security_acl: '5db79674f7d3455a9d93136fa4f2fa54'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '43518643935c4ee28ecba38f6710dbf1'
                        key: {
                            sys_security_acl: 'a0632243478e4253b3dc7bd9e6ef13d8'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '43700a35a49d4542874e1bb14b65c7dd'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43c29db4e7ce469ba59be6d286e99574'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4422d659e7194a9bb190fa1c258210f9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'authorization_action'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4439e6cde4454519be1f397811790b8f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_material_context_change'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4452eee0a6514885b6e935d37fdd461e'
                        key: {
                            sys_ui_section: {
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_choice'
                        id: '445c99b3909d47c7accfc0f4aa188aad'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_REQUIRED_DATA'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44c9c5b06f304c45a5314e26c2dc5279'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_NO_COVERAGE_ACTIVE_FORM'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4526e08f616345229d5dc15fea51d722'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                            value: 'arm'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '458cc4f9f7fe4d659439af5df1232f4f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '45bccf5de50348439f69a4e54fbb5b82'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4677485a06b143e8a204924429b49a51'
                        key: {
                            sys_ui_section: {
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '46a65caf01494ba0a6817223edaf340d'
                        key: {
                            sys_security_acl: '73413c5c0f8349699178df6ee587b894'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '46b8996cc2764b38b7910a595e4025a8'
                        key: {
                            sys_security_acl: 'e5ee8aeeb09d40d8b0ea426548626dcf'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '4700286d943b485c81a286442e088ea5'
                        key: {
                            question: {
                                id: '23c8641ef2c3445ea3604c41faced173'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '4742b517b9c3454bab10851721a6171c'
                                    name: 'x_2166123_hr_acc_0_employment_type'
                                }
                            }
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4719ff33f0424180aad64fb22b83e2be'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: '471b07e47446438aa9176fc79a6c6735'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '472fafd768f8433f99c08d2b5d2605ae'
                        key: {
                            sys_ui_form: {
                                id: 'c84954a751b84c0f8127e36a40a4a0a5'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                                id: 'e0017e19f98f47b7bb904a3370ee5594'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: '477688bbb4214670af38f41c2265c4a3'
                        key: {
                            sys_security_acl: 'dab407dade87459fb1880132c5fd81b3'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47787b6313464b98a9a0d2ffee8f51ea'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '477b9e6bfef34c3e89802c9fa36a2b13'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4829ecbec7eb4aafbb38debf63524843'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_renewal_reason'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4866e0802b7c4c77a68aee17920f5c30'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '487e611f5e0f446abf16bd49a4e63bc6'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_fulfillment_gate_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48befe5d143a4ebda0513a81efb16aa9'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49184fca3089405ca5b8cd4c1947d5b4'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '49491f9ebfed4a94a0fd659fc3105a31'
                        key: {
                            sys_ui_section: {
                                id: 'e0017e19f98f47b7bb904a3370ee5594'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_dictionary'
                        id: '494a76f6225d4729a2eb2c4516169608'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signature_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49a44910acc64cfb975d5f56c85e6801'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_PARTIAL_COVERAGE'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49b910f7df924714bd8ae20c1e1b70f4'
                        key: {
                            sys_security_acl: '4b83ba8af6404765800945b3fff0216b'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49be278f073d467eb3b40e04df2d1234'
                        key: {
                            sys_security_acl: 'ff32a91226d947039454b26772223555'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '49ee7b99155d416b9f446a3d26e83b4f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: '4a06fe7706654159a2db5b785b2745bc'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a570f4d90f24571b0c311c32382569f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'evaluated_authorization'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a78b52c61e74996833edfa884d2ea73'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_EXPIRED'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a9adacf11e94006aebd476a345e8137'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'operations_manager_task_due_days'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4aca61f56a154b14a774f0e210c7106e'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4742b517b9c3454bab10851721a6171c'
                            name: 'x_2166123_hr_acc_0_organization_fallback'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4adbd903c53944ecb0ce51942a088300'
                        key: {
                            sys_ui_section: {
                                id: 'c68927a8cfd043b99d5fbe65f4ab927f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: '4ae2154d72b249f6805510524e7d3844'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_END_DATE'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b13f70750f345a2a0b490fadadabbd9'
                        key: {
                            sys_security_acl: '687a17ca28e6413abe203092b476edff'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4be9f929c9624a10a1109ee1e781c553'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c99edc9c4bc43f7a3e1b3a0a78df491'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_cycle_identifier'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4d4a75f724a04be3864b21e836d33906'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4d78116af1f646fcbb7cf3c6ef650e2e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_fulfillment_team'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d9f3e05f7cd4e9fa7f3c27dfc3dacf0'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'final_authorization_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4e030c036f604927812586647ea9cc54'
                        key: {
                            sys_security_acl: '9a1513c003014abd87f588d512243ee9'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e35827d14c64f6086c3cb335cfb3f0f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '4e36e731629c4f3a912247db195f29fd'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_rob_auth'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '4e40adf462b5475d9eb4b88636c9149b'
                        key: {
                            sys_ui_form: {
                                id: '93faf4b40a98448ab5609de81df5702f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_ui_action_role'
                        id: '4e68c3dac457412f98e76cae75734394'
                        key: {
                            sys_ui_action: '4508b4bf12bd4f5ba42c676cf48a46d4'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e6c3ba7e8144c74972b7a49561df095'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_provisioning_completed'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4e70540859324ea683b227d5ea220b57'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4eb06ab63036480aa729659ce11faaf5'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4eb81ef747d545b097977465d4b0fa5d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_waiver_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4ec87034ccb64ab9b8235a04a58aadf4'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: '4ee476d5cd024007b0cd2d4325bc5625'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'exception'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '4f7266c2de514124a3b6b2cfdfac2749'
                        key: {
                            name: 'x_2166123_hr_acc_0.rob_analytics_fulfiller'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50145cf6231f450dbb8b915d045e02ef'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '504d371ea5ff44a5a5fd5b22ee389e07'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '507e91a5bd604cc5852c8979dc257889'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'none'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50ede138fb3f4178b3539a6c47d316ae'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '511d6d163668464aa9c63d2259810a64'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'effective_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '517bb3959b6a4a72b17967f1e1ad9445'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: 'c68927a8cfd043b99d5fbe65f4ab927f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '51873f30db12410c94167a5adb7fe290'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'final_pdf_attachment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5198f0a78899410a846e854cc3ffd9b6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5226e56972b14fdbb1faa57b91f3c8da'
                        key: {
                            sys_ui_section: {
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
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
                        id: '524bdd7a8bbb4688afa6a75cdd86e03f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '525338ac245a446899e4b396bf8de923'
                        key: {
                            sys_security_acl: '23998295ff6d4842ab05311e55d4b73f'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52737e73cdb04c89af08c9f5e4d8e81a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'effective_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52c9f0220a6543bda0663e9105b1c8cb'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '537e2322e5da420db264b868ad2e1ebd'
                        key: {
                            sys_security_acl: 'df7d321f2e834c8db1ad4eda9eec59ee'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '537ebc32a31b4108b59fc91ac11e9cf9'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signature_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '548a0714f8e64c03ad36f30ba4ce92b8'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_ui_element'
                        id: '54ed0192c3a0427e9b9763f740b0b7ea'
                        key: {
                            sys_ui_section: {
                                id: '855976f556084d0681911b64bfd62e00'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '55299eba4ba74aec89994951f90dbef0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '55c2b80cd8e84414afd0362272e8ec45'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                            value: 'oas_datamart'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '55d5063f3a1448aea0958b522fb9ff8d'
                        key: {
                            sys_ui_form: {
                                id: 'c84954a751b84c0f8127e36a40a4a0a5'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_dictionary'
                        id: '55dce2a1284e403f9609009df1c3d1ba'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '565d45c6941e4f37a341f18afa5f2ba4'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '569e8ec1cd8f47958afcc977872bc2fc'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requested_items'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '56d216becc754b66a0385cde325a5502'
                        key: {
                            name: 'x_2166123_hr_acc_0.rob_operations_manager'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '57350a2b78df40b18de41cd7cbbe6f61'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: '57b015cbdeb749d9b593b17203519ec8'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '57caaff897a84773b5554f13a071bc51'
                        key: {
                            sys_security_acl: '4401a147f70643a7a7af4294dc0375fc'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57f5c37cf5d04fd0b34e07d86551b29a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_material_context_change'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '59335888608940a0a0aef98e351c913d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '59383983721f4f9da14951fb849bd35f'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        id: '5952d8d70f444af1854f9cabb82c5912'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'access_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '599e081ec7b34feb88779f771dd167b0'
                        key: {
                            sys_security_acl: '77845bbf04b1417398cf7ffa00d2f90c'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '59aec9a4aef14fdcbfb7cdbfc24a8a20'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '59b76beb9c714078982cc54797f0e5cb'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '59e3012f7e904dcfb8f71346fea1d15d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_LAPSED'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5a11d00d3a6640e68ac4aab513dd09ee'
                        key: {
                            sys_ui_section: {
                                id: 'd07e5521c71546679f423e20727600fc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ad599a186e94165875c21b58055b7e6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5afbc99d5109462086fe979718392c31'
                        key: {
                            sys_security_acl: 'b9a4ae170f704c1fb4e5b008c79fc15b'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b29210c76b4469c979e18526ac1de72'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b63f101d2dd450588e3e5c23c88317d'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'approved_supervisors_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ba6a18e9375496dacc60762e24152f3'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5bd5ef3db23b423b97cbfb8c8f069d1c'
                        key: {
                            sys_security_acl: '274700f3b6cb46cfa58cc35936fc17e3'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5be5a5df1e0f4afdb48b97f8e693e44c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5be702b86dbd4f27b9af3ffc4dee2c9d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c22adf9e05541208d269908300b2eef'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_completion_evidence'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5c28a82a1f394c0da967ee3f1f7c9c67'
                        key: {
                            sys_security_acl: 'dab407dade87459fb1880132c5fd81b3'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c54794eaeae477db34c266ed0578d46'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d5186bc3c6c45aa8258b213d0f74e50'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'organization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5d587a2693894ad2b860954e6980bd24'
                        key: {
                            name: 'sn_hr_core_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d8d37dbc61943d088bf17fb4dfe548e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_renewal_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5da056b5813a4f368b7cf08b6232b8ff'
                        key: {
                            sys_ui_section: {
                                id: '6fc95605f5904eafa1137a10f4f87164'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: '5daf82e687b84a24b93e05f27a9e8b56'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_reminder_1_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e792a98e8b44b96aed8b4823a03d515'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'analytics'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5ec4704c90324a90898e63652c9c6251'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
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
                        id: '5eecd5c6946842a0863a784c82016f97'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'pending_fulfillment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5eed11a376dd4ea29f61f08d5bd39cda'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f099d60f7704cb0b6d36a6df71628f9'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_review_required'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f1ec9e2a00a4b97829d75fe41c7282d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_task_type'
                            value: 'analytics_fulfillment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5f558c992bdc42fe9e541952820b060f'
                        key: {
                            sys_ui_section: {
                                id: '57350a2b78df40b18de41cd7cbbe6f61'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        id: '5fd58d5639d04fe0812b565b020db346'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '60689cbee6bb41fb90f1a1c94f7410e2'
                        key: {
                            sys_security_acl: '4401a147f70643a7a7af4294dc0375fc'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6220a44c53b94deeba1629442aad65f7'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_task_type'
                            value: 'operations_manager_arm_assignment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6260197e31a14d6788a0217e80e18540'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'NEW_PRIOR_REVOKED'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6275b1708a0048769b30509d6c423d52'
                        key: {
                            sys_ui_section: {
                                id: '4719ff33f0424180aad64fb22b83e2be'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '629f9856a7ea4059905d8d2567890fb9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_cycle_identifier'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6311ce63cdc74675b9685a424bf56dec'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '632982c7a2a64c9ba7155e7a9f8e036a'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'business_justification_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '636a9f193b1940e4ba357550543b0cb2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                            value: 'oas'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '63bafbedeede48d79a7fb1c9acaf9ec2'
                        key: {
                            sys_ui_section: {
                                id: '49ee7b99155d416b9f446a3d26e83b4f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_ui_element'
                        id: '63e93f95b6ff4c86923c4b605e0f14dc'
                        key: {
                            sys_ui_section: {
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_ui_element'
                        id: '6418ac315f5640a8aae4015cfddf0a96'
                        key: {
                            sys_ui_section: {
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_number'
                        id: '642968d6faa54e6289aa657eae214b87'
                        key: {
                            category: 'x_2166123_hr_acc_0_auth_detail'
                            prefix: 'ROBD'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6429e63f444e4a229fd50753ed17d53a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_prior_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '642b338a0ec94a7a953fc161347dae3f'
                        key: {
                            sys_security_acl: '69f4d48841e7427fb937ab4a1740552a'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '647908696cea42a58fbf0e9fcdbac2da'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_form_section'
                        id: '647989b876794c48879fd531b3b3a2f2'
                        key: {
                            sys_ui_form: {
                                id: 'c84954a751b84c0f8127e36a40a4a0a5'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                                id: 'd07e5521c71546679f423e20727600fc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice_set'
                        id: '64ca06528d4b42459b9af98c9707738c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '651927c51fad436a8fdb111f7f4c8456'
                        key: {
                            sys_security_acl: 'a4040b9b53a942508f2431e83baa9427'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '655cd64df77d4428b8390b135a9bb46a'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: '658a10f243ad4a2ebd47bc7efd66869c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_PARTIAL_COVERAGE'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65a0cb12ef994432a4c64fdba0e7b971'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'form_version'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65f060dbace84ed69980b4c7a400eb4a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6622448b37324e449116851d3087fdd5'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_material_context_change'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66415eb14f364228adc545d6a224934d'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '664e590d11c84f8fa99a1f13f9ef2ebc'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'mid_cycle_grace_window_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6650cb7d572a4e6fa521194e101baa58'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_reminder_2_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '671f77fc1b7e41aebc2d49d531644ee3'
                        key: {
                            sys_ui_section: {
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: '679522d128e0418eab59aa4995fffcf1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '682f3b8103d64419865a68d6e6b33332'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '687d97ed5e9748b099c0e99026530968'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '68fe48688884492d82ec39e32ab18ca8'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'obsolete_version'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '692ec2048072413c8c8d8826e44b85df'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_processing_blocked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '692ffd91f9a9407abb22f27dcea74764'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6989e01e0038473fbf65093ccab95f10'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'amendment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a4915c0738e46b1b1bb00c37c4dc5c9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_outcome'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a5517c8b07a46bc94cc36736a8b49cc'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a94746399714b0b8c66ed288276210f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_document_task'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6a9ad2e69c914603a84d2ded4e0be2ba'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_task_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a9d3716398644a1a53af46b052a8141'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_business_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b0b3bb389c942888e12bd1549dd9e4c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_requested'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b17317ade1f4a3eb22250d09f7ab3b8'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_operations_manager_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b2adad2d4044862b96629744f1cb2a3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_task_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b4b28c4a4de4c1587824c562ad96f61'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'self_supervisor'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6b6ff86997f0491fb79062e4441ea181'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6bd5b7d346884e1aa3ce2d7bea75a4e5'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'authorization_action'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c0497afa8d64a4e955eebe20853babb'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c12892874254e4ba3e0f387e4de9989'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_item_code'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6c241b128daf40b7be6a4d5b2142230f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6c3a7f87bd0548738874bddd5fd588ff'
                        key: {
                            sys_ui_section: {
                                id: '855976f556084d0681911b64bfd62e00'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '6c4c6793b2fc4b03ab7b87235974304c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'revocation_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6cc5ad7939d04ebf95ea9cffe17ea48c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_analytics_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d1caf251c7343189e4f6b5c69637de6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d446f63eb9f40fc923086096c3799a9'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_ORG_CHANGE'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d6e3fd2fad04e80885783021142183c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_access_end_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6dadedee7eff410bb9468b3538d19d62'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e03c4f58172420796be9af5879e4cca'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'operations_manager_task_due_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6e2d6e1050fa419097351d2b32fe9c17'
                        key: {
                            sys_security_acl: 'bf5349417de641a6b1aec36ab09a50b9'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6e446e7bbf2841d8b250f76fdc4584cc'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_number'
                        id: '6ec628bbb12e4fa68e833b5af2268a64'
                        key: {
                            category: 'x_2166123_hr_acc_0_rob_auth'
                            prefix: 'ROBA'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6f4c2612a6e64992941dac11c1577f53'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: '6f4d0232d7394d4fb3c207397728f64a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_exception_review_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f5d26d14fbb4a279b8fde62b318039d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6f669d9f07ff455eb84c05b6c7b38253'
                        key: {
                            sys_security_acl: 'e0dd50b3b83b470ebbd85d438828c2ff'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f9541106a0a40bbb262a2b918645182'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_correction_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6fc95605f5904eafa1137a10f4f87164'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_db_object'
                        id: '6fd0b304ff294d7c8464744a3ddd31dc'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '6fec163a08f841b2a548898ab9229894'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: '0f3be617ab264a4faa308122936201cf'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_element'
                        id: '6ff185a5bd954755b37a7531cac74b62'
                        key: {
                            sys_ui_section: {
                                id: '0f3be617ab264a4faa308122936201cf'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_element'
                        id: '7005c4fdb5c748fda757261d167fad62'
                        key: {
                            sys_ui_section: {
                                id: 'e0017e19f98f47b7bb904a3370ee5594'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: '702ba988e5ee4ad386319a439e6c5730'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7081d1044c2a40e1bf08c0c1843941a7'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '71577ecc85394d4cae9c1c55ad6057d5'
                        key: {
                            sys_ui_section: {
                                id: '5ec4704c90324a90898e63652c9c6251'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_dictionary'
                        id: '72084e2b2d9a40e88ee9ebc57f495aef'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '723b9d7988f74045a3c259608b667a34'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_rob_access'
                            col_name_string: 'access_item_code'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '725f6a86852b46879af199b721267b2c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'invalidated'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72856d826d854752a8cabd2606959a6f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_OM'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72871669ca8748aea12d65b7be0291c7'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_CONFLICTING_ACTIVE_FORMS'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '72c4f041f4db4a36b203349eabb82603'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '73c6c62a304a42ba89322f880d4a5a8e'
                        key: {
                            sys_ui_section: {
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '73cf6e8e8b8b42269acadd9360de69e5'
                        key: {
                            sys_security_acl: 'f5e02a2ab5b842f086d1e05204a5039c'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '742a3e7f145643bfa04e96bada6355ac'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_2_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '747ef0d1a6b44a4ab76cc8509058f60b'
                        key: {
                            sys_security_acl: '4b80579c8f5449509075e164dd1285fd'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74a68e754f1647fa8a1852763ca12154'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'agency_annual_recertification_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '74d893097d0f4f8cb765548fc887ca8f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '751ce36162d4474988aef5e6018bd40d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_prior_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7552bd384fba458e85e169ff3b7c216c'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75727ab99ae740eb9f6efdd884d710e2'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_position'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '763841fe183a4bf49b9047227b035568'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76778e6344a64801a256687ba7952a73'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'provisioning_system_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '77398cbf5282415f94e4af7fb431388e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7756a998fc64434d99f9dd996814daa2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'organization'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '776c76e77e4b4d9d906b5ae5fe51e91a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7817c835101f4b40a42729fd39378213'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '784bc5fe622d417fa3c705e32ac733e7'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '78f5c15cdfd7427ebb74ea1803e43e26'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: '794ce973e8f24b6291be882385d9089f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '799291d24fb941069a3f14bbd24aeff4'
                        key: {
                            sys_ui_section: {
                                id: '6fc95605f5904eafa1137a10f4f87164'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '79c68a3d5a8244599823997aa29c68b0'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'lapse_notification_enabled'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '79df181a8b644ebcae2993f4fe0f70dd'
                        key: {
                            sys_ui_section: {
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
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
                        id: '79e77499d9ed4f48807373a7226cdc50'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_category'
                            value: 'workforce_profile_chart'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a155160eaa44c73bad0a5a454acbe3e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_signature'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a31ff3f44b84ca5a7c2cf70a4e60d52'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'invalid_supervisor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ad21370f6464cd4ba1e1632e8d21540'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7aeb16758ea84c9d85c692c2ae8681bd'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_renewal_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b3ed0ac76b04a41b2d4498219024a02'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'evaluated_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c2319d21e2e428caa470c7e88363d1c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7c271432397540e8a9a76471cf89984c'
                        key: {
                            sys_security_acl: '25bd0462f6b34ea8b80d14eafd6671ca'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7cdfb687d8554be78d68297f0c427b22'
                        key: {
                            sys_ui_section: {
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: '7efeb11280da42b2911ae69d7f61c70c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                            value: 'oas'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f16efffd5bf42a1a14609827aabf08e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_uncovered_access'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f3604ea5d8d416e84c58a3b672c769c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fb77399f444454eb20b7b356a7347ee'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fd1813532cb484ea512daf704317825'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_prior_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fdfc6bdb11240ec98d77cd50f541bf9'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_uncovered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fec9197f99145cca4f23fb5ec4b9c6f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8034324c6526483b86bc534ea35fe08f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_snapshot_corrected_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '803a31f850e84e029ba644c8389a89f3'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'allow_sys_user_title_fallback'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8065eadd03df43eb9d4d901f5a76fe16'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_covered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80fc6215ebdd491dbaec6bb2b5309613'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_review_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '810c68940f86484bafe2e3672a1ca592'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '81cc2dc491c34742a8673a866adeda9e'
                        key: {
                            sys_ui_section: {
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
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
                        id: '81dac16407bc4cca9270114fd10b33f2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_operations_manager_escalation_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81e217de06d34c11ad7be22655d3a356'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '823d5eaceefe4848ae3a7fbad7d673f0'
                        key: {
                            sys_security_acl: '3fcc36a5f2e84f238696f95ecc5b68e5'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '824b6a58ff534822b342ec21932efbc4'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_NO_COVERAGE_ACTIVE_FORM'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82a331f33106413c85b3c67eb82664ca'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82e4b436c8d64bf1aa3a870ad8aae574'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '82ed280b2ff942ccb1283c6624e2a10e'
                        key: {
                            sys_security_acl: 'f8bd61471bb24784b90e617f2d885738'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '835667bff74946b4b1d8b679d598e34c'
                        key: {
                            sys_ui_section: {
                                id: '49ee7b99155d416b9f446a3d26e83b4f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '83656c2c98c04173b6b989fe32dc180a'
                        key: {
                            sys_security_acl: 'df10695fd03d48f58f4caa6302e3ca45'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83b42bb3507e4d57bdabb0ef8d96b1ed'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'authorization_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8483a7a0ab5d42beb4a04f5f4167fec0'
                        key: {
                            sys_security_acl: '9c79957bcdb44ec1be4b0edefe222bb1'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84ab3ab89ea0442e82e5d3c3f3da847c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '84af28678f3e408a9b2c6bdcbb2231e0'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: '84c17cdeb50249fa8f21f4ad1ee39ec0'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approver'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '855976f556084d0681911b64bfd62e00'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '857f1979033c44cd9671e8b0a5c26351'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requested_items'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '867b67918852460190fbcae5203ad896'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86f42ed692894e47a1c72b9fd5cec740'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_fulfillment_team'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '86fcc6765346403fab02c817a7332177'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_employment_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '877b8184ef5e440880f6ec403a0c6d45'
                        key: {
                            sys_security_acl: '50e5b2a2af5e4e6e9c0d1aa33b091f3e'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '87c0ecc550a146af9262e757a63c6f3b'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_complete'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '87e66a70b4d045dbb508a2178d0b8093'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: '885f80e565144389a1ea89c1e86b1b27'
                        key: {
                            sys_security_acl: 'ca751065feb74eddb59886ba672aff89'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8874094d359e445c81a5dbff22ff92b8'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '887a20b0bb8744ecb97818a5d0c364c5'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_signature_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '88b194a69b894f3fa783390745093008'
                        key: {
                            sys_ui_section: {
                                id: 'c68927a8cfd043b99d5fbe65f4ab927f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: '88e9e9b058e948d9bc40f49194be0432'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '89531a51a526415ab3bbb178a07dfda6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '89815c69b2584327a7ecf4322985d2c2'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '899a58467d9a48e58063fef358d1131e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'exception_task_due_days'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89ca86c9eeca45b9a8dd18bc1b59f835'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_1_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a0782123b144b4eac7b1466b4e8102d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_waiver_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8ae1f35dd04d4266960eac78f434836d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'NEW_NO_CURRENT_FORM'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8b9183e65bc14db6bd0ecbb7b5f630d2'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'ad03fa93b74845afaea77bfef98b7fc6'
                            name: 'x_2166123_hr_acc_0_requested_items'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8c12368e264f4259955743e4314288d9'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_form'
                        id: '8c5a1ef95d57479384422241e19eb058'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: '8c688b5c9ce44ba58ed7a39ce5e1192f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'decision_evidence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c9180c0515040339ee9a31de4aec239'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_signature_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cb0effd27584a5ba7f126f547f2d1d9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_2_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d12abd53f1445bd82276e1a076755e0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '8d245dc6eb4c4788930ad657e74780d1'
                        key: {
                            sys_ui_form: {
                                id: 'c2cfe8e220484c2291dbbc96d0b80eda'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                                id: '6fc95605f5904eafa1137a10f4f87164'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'catalog_ui_policy_action'
                        id: '8db1d989caa6475d86934c2ca98c0d22'
                        key: {
                            ui_policy: '8ec4c37406a74e46a5fa5af25a86e6a4'
                            catalog_variable: 'IO:x_2166123_hr_acc_0_access_end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8dfc9598615243f38b2311ddb22791c1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e279212651c47f79d2e04697dfad2a5'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8eaf1490d32a497a88ab8b8fd377aa4e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'signed_pdf_generated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8eb67a9a04a4435cb358d5399f8a5090'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'staffing_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8ecf63ba9657483fb2b6d6009369d93d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_required_access_end_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8edbb79c947c4b38ba2f589d61d17ef7'
                        key: {
                            sys_security_acl: 'fdbe7767f5664152ab5497304a70ac12'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8f06cbc6b0be4b6faa53814e25e8fe1c'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_element'
                        id: '8f221fd12ddb4ef199b8ae74ce010c79'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                            element: 'b598700c831b4c58a6c838143dc676b5'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f46d40f7f0f4745a851544e2cf78ad4'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f7bed4176ca4d75bf7822d468ae33f7'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_evaluated_authorization'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8f83119840ca4fbc9d4864f45903c857'
                        key: {
                            sys_ui_section: {
                                id: '855976f556084d0681911b64bfd62e00'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_form_section'
                        id: '905676095dbf4655a6f46f77ce265322'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: '906c5527b6cf41c78fcf99864b78cdfa'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_INVALID_ACCESS_ITEM'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90ae7ce99760400590ac0e0be245c9f1'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_notification_copy_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '90c8481642d74ce288f4c5555dd8b511'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '90de322aa0d94b1cb24422bedd557218'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'operations_manager_escalation_days'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '917f0772ce5547988a54e22b12674e01'
                        key: {
                            sys_security_acl: '935b25e5f744409e8c54c2dff281ce8c'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91e460afc25f4f20a86a1eab11bcddc4'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_3_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91e8f531760d407c8735dd2ad8e76840'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'access_end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '920809404334432d8233770e25c9ac35'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_outcome'
                            value: 'failed_exception'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '921d8511b1994d23bd7b811154a41bfd'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'approved_organization_root'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '925239753662425d89f6cebfba6abbf2'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92f8203464e647c7bc6a708a5b499611'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requested_items'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '939026266274464ea73ff89df57fafed'
                        key: {
                            sys_security_acl: 'e297d77d03ef494782be039d4d790ff0'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '93b8b591fc0c4fb7ba545ed854863634'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_auth_detail'
                            col_name_string: 'source_hrsd_case,access_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93d0162f282844c297bb192106f80a23'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'obsolete_version'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '93faf4b40a98448ab5609de81df5702f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
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
                        id: '9436cf31a0f84af9ab089573e6f4b637'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '945ae57dfd334a37946655285dd35591'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_completed_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '951003ab1f964748a5b57576c905ef88'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '952c1c308b9e4eba8ee0c0c94512459c'
                        key: {
                            sys_ui_section: {
                                id: '3cb6a39f1b284b059f2fee7b08c2462a'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_dictionary'
                        id: '95338bf8e11b4338bc87e2ff0090e68e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'mid_cycle_grace_window_days'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '95da2224a5304f4f9e57f08f5c64a3c6'
                        key: {
                            sys_ui_section: {
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: '95e297f11d4944a18920602de0b02a2e'
                        key: {
                            sys_security_acl: 'bf5349417de641a6b1aec36ab09a50b9'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '969d53225990478c9d88422125799f73'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REUSE_FULLY_COVERED'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '96d3ee413c1747218780caed92a3480c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_prior_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '96eda5dce57d4d04b10d9318c1429909'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '96f13c3f75cd43cb8114b55fd95d9b11'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_operations_manager'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9769c19c663543178bd101a051dd0913'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '986a3dd9b92e4f5c8dddde7004383948'
                        key: {
                            sys_ui_form: {
                                id: 'c84954a751b84c0f8127e36a40a4a0a5'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                                id: '5ec4704c90324a90898e63652c9c6251'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        id: '987ec3eef0fd45a497cdc6ac5d820e9c'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98c492ba45154177944b7ecfc22f82c9'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_prior_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98e1e1756a9e43ea87b316b46be7f879'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_context'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '997612898b8d48009fe145134256eb59'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '99db732ecbfd4548a027141647249304'
                        key: {
                            sys_security_acl: 'eeea8000fba844d98880933b597fee66'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '99e2a912858145bb853207a7c4b2ccc5'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a2a9ad2247445a284ae4d0efbe00505'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'reuse'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a6312cccece4b2ba0cc8809e2f5ee37'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'invalidated'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9acbf9a8a44b479ba773d971109fc488'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b36878587d74bc09762d4479994cb7c'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b91a8af50094b20b1e4aee4e0717607'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9bf48670d8704b4bbd697b63ce6eda19'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '9bf68aa8f7b2426785c609878f082328'
                        key: {
                            name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c22e609bced4b26bcccce408f59fd3b'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_signature_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c5c7c3917e14a9b9bbb1dea3cba12dc'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_OBSOLETE_VERSION'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9c880c97bb024519b0b4f8ec1070181f'
                        key: {
                            sys_ui_section: {
                                id: '57350a2b78df40b18de41cd7cbbe6f61'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: '9dd1cf8a4c494744abae4da191a854cf'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9e0d547bc02144eea9db32bf493b02a5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_outcome'
                            value: 'waived'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e4e46e2663b45639b0eda9f1ddcf4a4'
                        key: {
                            sys_security_acl: 'b2e85bf4a2df4d8e851d37fdcbb32394'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9e54649c2ed64c59ba410802e9b4b4d9'
                        key: {
                            sys_ui_section: {
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: '9e886e472e094e85883f4676baab5571'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requires_employee_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ee777877b2f4ae49d291f613ae18152'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'lapse_notice_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9f8b5cbdcdf14f569931c7aa149f4894'
                        key: {
                            sys_ui_section: {
                                id: '49ee7b99155d416b9f446a3d26e83b4f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '9fc546ed8873463890abd7bf03778adc'
                        key: {
                            sys_security_acl: 'f5e02a2ab5b842f086d1e05204a5039c'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ff542a33a174fc7b3f6110d9b334a06'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_waived_by'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a016798bc4e84620a2a722f2842bf4e6'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: 'a02bcd6472524fbab86fe561e26de7fd'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_DUPLICATE_OPEN_CASE'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a0a919cab8c547b68bbceb8c93f1201e'
                        key: {
                            sys_ui_section: {
                                id: '57350a2b78df40b18de41cd7cbbe6f61'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        id: 'a1181dbbe1ed444498c0dca211572bd0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_OBSOLETE_VERSION'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1486a964e3943ecaacb22b7acc4809d'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'decision_evidence'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a160a0016e8f46eea63fa7ab5e3f1ae5'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a16f72a20a7847f0a977af35c9f3cc0e'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: 'a188fe5de5224a12a798e270d31c3504'
                        key: {
                            sys_security_acl: 'eed80b42db82486eb6bb77b7bb366fb0'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a191141e88bd4dd89b905ca101dcf50d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1aead9b7a194a49a39f3f55105d85cd'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a1dd0d1bf44c41aa95e1cfe7a252870b'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'a1e2cf8229a24f08a29c2138b817d19c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'current_accepted_form_version'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a1e90c89e5484a2185627b0f86073246'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'a23637162ca24b139da79059d493e710'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'NEW_NO_PRIOR_FORM'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a257226d5a4d4781af9a5d74cc238e23'
                        key: {
                            sys_security_acl: 'd37fa338656f409db5c6eb2c5e16bcc0'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a27de2fed4a4450b80a11c13d94a004a'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'target_system_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a2b567b070454713ab3506396c8e954d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_ANNUAL_RECERTIFICATION'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a30fce8ba24e498bae1acf03bba798ec'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_INVALID_ACCESS_ITEM'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a31632da59e74096a17f22bc1452a226'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a357036d5b094868ada3bfd286a58f6c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'final_pdf_attachment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3839a5581ad44d58dfec20e03b14bc0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_END_DATE'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a3d312cedc964c12a6555982d7a6419c'
                        key: {
                            sys_ui_section: {
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'a3f202d8314b403197f0da7564158d53'
                        key: {
                            sys_security_acl: '25bd0462f6b34ea8b80d14eafd6671ca'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a3f53e10bf9a4c158198d59a0b44b4fe'
                        key: {
                            sys_ui_section: {
                                id: '1fd2b954d7e442cd909ea9a3690a8d25'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_documentation'
                        id: 'a3fa2459c0e046468e86913c46c06366'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_waived_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3fb5fa23a5c4c669e10aebd4bea1d58'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                            value: 'other_time_limited'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a480c64a5e6046c0a0455cd686427fd9'
                        key: {
                            sys_ui_form: {
                                id: 'c2cfe8e220484c2291dbbc96d0b80eda'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                                id: '4719ff33f0424180aad64fb22b83e2be'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: 'a51979b28b144b30aff14e27cbb7eeca'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a6a7d9e3d8074c3d8e393a9b1261c1ac'
                        key: {
                            sys_ui_section: {
                                id: '855976f556084d0681911b64bfd62e00'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'a700bc68c0b54b1ba51673e971395143'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signature_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a75b65eaf06847948ea8516cece680d6'
                        key: {
                            sys_security_acl: '5e849676f7144d459c530c3c22634881'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a80e31b6591d4d8fbcd7f17cfd7b48cf'
                        key: {
                            sys_ui_section: {
                                id: '6fc95605f5904eafa1137a10f4f87164'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: 'a86729bccd824192a4a2f37bca314676'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'expiration_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8a81db4fa66418a8c63be11d0170d61'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8ce3484cbff4ceab6b876fca15c4aea'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'profile_context_evidence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a936ae2677a74a90b10a4548c3956eec'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a98d7be2c845437f9dcc5eef743f2ee7'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'decision_evaluated_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a9919366ee814f78ab016a3584b823ce'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_EXPIRED'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a9a0386a370b41649f7bf4e211a2937a'
                        key: {
                            sys_ui_form: {
                                id: '93faf4b40a98448ab5609de81df5702f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: 'aa1e4714fc82490e8dc5860405286ff2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'aa39679ccd1349829cd004b22e311a8d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa49ae61b7184365b14d39b4a30db74a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_duplicate_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa9add8f682545f6b65b23863689a32a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_fulfillment_gate_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aac39a6cc44b456db52cde44871b8782'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'ab3eba3e93374c8a80fb6b3317ac06c2'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab635d5ecb1945a8a4cc219badb866af'
                        key: {
                            sys_ui_section: {
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_choice'
                        id: 'abd2ddbdc0484702a49b20eac91a6a9f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ac1f818af03343419ae69fb98cd57ad5'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_category'
                            value: 'human_capital_data'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ac662778cbc3466e9c8452a12fa9cc83'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_task_type'
                            value: 'exception_review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'add940928c234a6fabd35cfabe9085cc'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_1_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae8077efa9c44974b0344b997d243f40'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aec8f61aee19406d8e813fbe28870a5f'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'aefb26a3a6804633bbd3b77b33cd7fed'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'self_supervisor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af2143f03efa4c66b21e93677d59f350'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'af29c7be8851425f81d15e0221026b6e'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'access_category'
                            value: 'hr_system'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'af58760dd8954ca3b9803774e93ebfc6'
                        key: {
                            sys_security_acl: '8bf1907108cc4da49d337fcc7fa339ff'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'af6675f3236b4eb6ae06fd3008b04fcf'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'exception_review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af75551690e64adfb12a850cb2e317ba'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af8e738e4634418ca67edbbf9ae5e690'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_review_required'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af916513c1364b67b31bfa483afb1961'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_position_title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'afce270c988349ca920bf02a26b9cd3c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_duplicate_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b002cbc4e30541a9be27f419ec04bfb4'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_covered_access'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b04829a550f04c2b94b2a135911fa321'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b077a15c03894cd3ad94d4243938ec0f'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'b0d347573b554d6c82582649b7a0eb5c'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'b1097426251742cc9d57fd05f7c6deff'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REUSE_FULLY_COVERED'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1460afa6b814aa293bab10340a85f26'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_fulfillment_gate_complete'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b15bf28a6f3340808c41b7d8cd7a7e09'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_prior_position_title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1a5e638ab2547aa95abc71ec353319b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1e0413eae1d417aa2a5c2c6b550ec0c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_duplicate_case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b1f7e3e6caa945dc894f91256bf341be'
                        key: {
                            sys_ui_section: {
                                id: '855976f556084d0681911b64bfd62e00'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'b281587ad1f446bdac11ed48339bc2c0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_covered_access'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b2a3d9497221491685015279890a9620'
                        key: {
                            sys_ui_section: {
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: 'b334c2324c1644f7ac20e38e34adcd42'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b37ace02aa0d4e7a90827af604a26e82'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_prior_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b3c51df15d03417e8eeaf765865f154d'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_auth_detail'
                            col_name_string: 'subject_person,access_item,status,authorized_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b469a495f33649459aa92bbffba56a68'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_evaluated_authorization'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b47a530afcd84dc5aeba30f5bf40bcaa'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4837e1a0b0b481b8751dbe9b8db6632'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4a741a52aef48e3a4992feb61e663b0'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b4dba43634a247abab2c220cc6e7e170'
                        key: {
                            sys_ui_section: {
                                id: '57350a2b78df40b18de41cd7cbbe6f61'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: 'b4e1a1bb804d4889a4072ef61e0504c7'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_fulfillment_team'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5b094f2c44a424eb1bcb14d185dc2f4'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'b5b212ea94874d5a8453ca80a7b94201'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b602af1a37284f2786b0900c29b10df2'
                        key: {
                            sys_ui_section: {
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'b60f4eaa78474650ac37434f7991fe3c'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_task_type'
                            value: 'staffing_fulfillment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b647a9fd347b4950a5086bc7cf90d151'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'reminder_3_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b65fe635a68a4ea8a37270fb9ac39c7c'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: '855976f556084d0681911b64bfd62e00'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'b7559a146ed5442a9b3c747e298e556a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'reuse'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7c9a2a0c95c4544a184281ce9690f8d'
                        key: {
                            sys_ui_section: {
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'b7eac552bea3428aa106b27203d8edfa'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8369005ff2a46b29148a8994cf3cb13'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_outcome'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b8693bad6aa34a2c9445cb647ddabddd'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b90a426336a649b0a03675bc24f5245f'
                        key: {
                            sys_ui_form: {
                                id: '93faf4b40a98448ab5609de81df5702f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                                id: '49ee7b99155d416b9f446a3d26e83b4f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_dictionary'
                        id: 'b94fca2a3a4a45da911c1a20da86a123'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_waiver_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba13f6fb97a844e49aa08386b3b36def'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_covered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba1987c63eeb45849733f33a8b1f37ec'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'REN_ANNUAL_RECERTIFICATION'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba238fed593f4d9692dbebca5b82ea04'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_provisioning_completed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ba333394bb37458282526c5d7d0a77cb'
                        key: {
                            name: 'x_2166123_hr_acc_0.rob_staffing_fulfiller'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'bac4613d32194110b4e24a51c8b6c243'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'bacf357d546f40db82310326c325b971'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'source_hrsd_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'baf42019564b4d49b9ef4564f01a4343'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_outcome'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb0e19200aa347339edf61a24d906d26'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bb1039f48b1c4d4099d5a180b1ee933a'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_choice'
                        id: 'bb59182972dc434d8924ce59d3393298'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'none'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb5ddd7e4f454c269649d5b60be944e0'
                        key: {
                            sys_security_acl: '073bea0aa24a4c1cb6b5d51aff669399'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb662845ac06436eb35592c52ab897ea'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bba6bdb5b69f4c5ba40c52e036331009'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bbe6e61ca12447038e62b4b33b4de2c3'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'invalid_supervisor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc313bd5a4f34790a8cfa92a2d8c4346'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'bc32a3ded058435587046ccf4846506e'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_rob_access'
                            col_name_string: 'active,access_category,sort_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc3dd9aceecf4ff9b80a5e4b3af1cd47'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'provisioning_system_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bc9b2e23d3fb44de9ae3d9b2a2b5fd60'
                        key: {
                            sys_ui_section: {
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_ui_element'
                        id: 'bd37d95b1d37406586f71e7d1cf9dab5'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'be0c3a9031614ae7a2df11d59e8f647d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be2496a953f44f7591b1c8b6ba0c46df'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_assignment_group'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be74c2cc956042d4a5e61e181a84c9af'
                        key: {
                            sys_ui_section: {
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operations_manager_task_due_days'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf09c2b56d4a472f83beedd699380d92'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf1a67b0ae924e2587bcb26bee3c1716'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'business_justification_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bf2b4fac4cf6469cbf0676f1aa417c31'
                        key: {
                            sys_security_acl: 'f83077845d704b29b784625dfea460c3'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf3b63dad0724374910644a8a1b8bd21'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_element'
                        id: 'bfa6e5c89d30459a89edfdfb4c917113'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'c01f7336a87d46f28982f5d61072f07b'
                        key: {
                            sys_ui_section: {
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_choice'
                        id: 'c0523647784a4425b33641b91d777fb3'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                            value: 'wpc'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c0608bd7ac72458da4300bc8dc8ab67f'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'c0bb7d0a4d784eed8b0e24e8f955eafc'
                        key: {
                            sys_security_acl: '686f9578d0a7417f9c1aabde2c4e173f'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c0f3ed6b8ad042579a18d5829fbc80d0'
                        key: {
                            sys_ui_section: {
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_user_role'
                        id: 'c112257f524b41a0aa9bd3869b02f55a'
                        key: {
                            name: 'x_2166123_hr_acc_0.rob_admin'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c18d0dec52c24dee83f943721c7b0565'
                        key: {
                            sys_ui_form: {
                                id: '8c5a1ef95d57479384422241e19eb058'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                                id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'c1dbd32a75854b99b404a90487890b83'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c211a43eaf3d4da5abe62d6c5613b12f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                            value: 'human_capital_reports'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c27fb8a6e12540eba1500daeb545b5cc'
                        key: {
                            sys_ui_section: {
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'c2a3af2493754f19939aaaa32ed0af30'
                        key: {
                            sys_security_acl: '221cce3d15e743e09f4615832eb3e1a9'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2b44f75a296461394cda4c7fc1bb2dd'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'c2cfe8e220484c2291dbbc96d0b80eda'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: 'c31a8af1f9774118a31fbd4d3fbb1349'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: 'c3ace3ed28404a6ca366329e67854246'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c3da3f50d4814c26a0a6732b2028d587'
                        key: {
                            sys_ui_section: {
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: 'c44f67cf171f48749b414c64b40a1915'
                        key: {
                            sys_security_acl: 'a6b35dd1d2c44a5d9bc60fef91975428'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c45ae717dd4a4f27b9e9fea2256e4413'
                        key: {
                            sys_security_acl: 'b2e85bf4a2df4d8e851d37fdcbb32394'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c491067833e34c4e88a1de500c25b78d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_proposed_expiration_date'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c4c60ce23bc846e0a7a3d29835a8f99e'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4742b517b9c3454bab10851721a6171c'
                            name: 'self_submission_notice'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4d61e0e99d04822a71583c1ced4e817'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'pending_employee_signature'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4df1bfd20f74b71a9205a061a5946f2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4fc5beb23584351be552410dd6f9a83'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_analytics_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5b0e8220357468b89261317896958d7'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_document_execution'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c655ffac1e2b472792bbd600c3da2bf1'
                        key: {
                            sys_security_acl: 'e9975fe6ec7149d88e51212d119a78e6'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c6623c16eb204099b508fde7e00c32b9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c66f2da54ac7492abc61e2a32238b7d3'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_operations_manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c67bf720ddb8478b85efff87bf56fc09'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4742b517b9c3454bab10851721a6171c'
                            name: 'x_2166123_hr_acc_0_selected_supervisor'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c68927a8cfd043b99d5fbe65f4ab927f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'c68c68e5a96b48488964520565133bec'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_signature_date_time'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_ui_element'
                        id: 'c6afed9be27f463190094339118cb381'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'c6b0952208194687824200201408b2e7'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'default_exception_review_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c6dfa5cff98e4742a46c1715eb4ff691'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_formally_waived'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c7804faa08094cb9b94292fadc1d9740'
                        key: {
                            sys_security_acl: '7b7abdb1c7884eb39080f8b24318c393'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c7a7f71b5e5d4275bd8c532d55c7d6dc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c82d94722c66458d9af083ed5b389ddf'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'superseded_by_authorization_form'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'c84954a751b84c0f8127e36a40a4a0a5'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice_set'
                        id: 'c89e77e34515494abf83b94b1c573f69'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_outcome'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8acf41ea0e84d0692bc6fc857320fc0'
                        key: {
                            sys_ui_section: {
                                id: 'c68927a8cfd043b99d5fbe65f4ab927f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'c8afddc041f948a2a23ef7b91cdfeaa4'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_AMBIGUOUS_MATERIAL_CHANGE'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c8c4965c9d314e5ebe25416471c27da9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c8ebf4caed0247d28633586c57bf7a4b'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c93cdb47a28c417ca3f665e9f29af571'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'authorized_start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c9882b87ffde4319821e67b39ee8c1f1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_MULTIPLE_MATERIAL_CHANGES'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ca941dc286394c459f17c2199c16f8c3'
                        key: {
                            sys_ui_section: {
                                id: '6fc95605f5904eafa1137a10f4f87164'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_choice_set'
                        id: 'caa7e972116e43b3b0f81ec367da0fd5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cab844e46f3b4654bf5638b04e191b81'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'inactive_operations_manager'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cabb57c8643c4cb2a36a9f7e14dbe3c0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cac461ab3dc14fa9b0f1e59055bd3b49'
                        key: {
                            sys_security_acl: 'e4a234c7743945b6a49016dc416ed3f1'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb4538c20c594ba5a9c2226aad82554a'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'authorized_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cbcf8373574641bcb17b5d340fde3e40'
                        key: {
                            sys_security_acl: '00ede5499ba54c478b55fb835d0e870f'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cc13f8c55a104a25804f6f4dcd8a0bfe'
                        key: {
                            sys_ui_section: {
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'cc43a8ebd1e040eeb321f4d2f8c2c6c2'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'allow_sys_user_title_fallback'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cc85c1d8e7be476a9e7df6145a3d31e1'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'ccb7fb5c22754475af3ab494eb23a83a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_supervisor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cced2fd628ad4311a986a5e4af56f6b3'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_review_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cdb30024847d4a2d91810321a48e0325'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce9b8c7641ac406fb7a310304c3998dd'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'lapse_notice_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'cee35f37049a4f6b97c0f371c97acc93'
                        key: {
                            sys_ui_form: {
                                id: 'c2cfe8e220484c2291dbbc96d0b80eda'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                                id: '1fd2b954d7e442cd909ea9a3690a8d25'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_choice_set'
                        id: 'cfa645df759d49beaf6dbce4daeed117'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_employment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cfdcecb9b0154dccb6abde8206aaf31b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requires_supervisor_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'd07e5521c71546679f423e20727600fc'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'd0c55ae30c834444be828330a9fc8d82'
                        key: {
                            sys_security_acl: '4664d9a6dce24c2c9230a12feffa135c'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0fbae8525dd43f8accf63b5c5f65065'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_signer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd12807c3ccb44fcc9964856501e377a9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'signed_pdf_generated_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd131fbfda1474b4ca1593b7243c5eb89'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'analytics_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1fdde6ccf5a436796a16640944e6684'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_material_context_change'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd2822726bf784f93bfb224b87bfbe213'
                        key: {
                            sys_ui_form: {
                                id: 'c2cfe8e220484c2291dbbc96d0b80eda'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: 'd2a4b4b67bc04acab3938542be5910e0'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2d254804c8444cba65b5d12c9ccef9a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_document_task'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'd2ec0cbeb8b34d64b788a82d4d82b307'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_auth_detail'
                            col_name_string: 'rob_authorization_form,access_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3a8fd4fef8c4913806e7c6f7c097597'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_prior_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd3b98253328e407ca951942a30f5b7a6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4924d8d1b284bd1b990bc0040ec469f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd497b0db9d284c44b8604388bf597efd'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_staffing_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd4996f1c9d2944d1882fee3ebcd1520b'
                        key: {
                            sys_ui_section: {
                                id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'd4a8bc5b38d64eba97415ecabc2c1693'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_ORG_CHANGE'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd519fd41a12f4e1ca31e613201ec69bd'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_employment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd57a68aea6e4460795e192eb7bfd1576'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_duplicate_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5b1a25f1d004f3e89ab474318d69de6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5d426d44bba4ee68c6b1b50ac8a89af'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd602d33afd414cffab7f6e4226908dc4'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_formally_waived'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd61da54ed3aa4d7e87a0bd8a3b3ba490'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'subject_person'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd6ce7104909440efa50276335bf0d493'
                        key: {
                            sys_security_acl: '4b80579c8f5449509075e164dd1285fd'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6d018b9b3544e74a418415f14b2ae45'
                        key: {
                            sys_ui_section: {
                                id: '6f4c2612a6e64992941dac11c1577f53'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_ui_element'
                        id: 'd7a46a0e9d2c4e15acfff2b4006d2833'
                        key: {
                            sys_ui_section: {
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: 'd7ac62a146b04bb184b4bab538afd3db'
                        key: {
                            sys_ui_section: {
                                id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'd7ba0ef46b48485a875fb7356356cf87'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7e154c5d41c4206add414dcaa24ceff'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_proposed_expiration_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd81538c0d1724fed8c106091ced2fdb7'
                        key: {
                            sys_ui_section: {
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_ui_element'
                        id: 'd85a2c47bf524516a5189afd8e4f369b'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_element'
                        id: 'd8ed4538bb044511b2509a84001391f8'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'd8edd77ac02043d7b6406cd405584edd'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_reminder_3_days'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd904ad2584934b10ae5a78ce8cc4e646'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd90db91d509949f1b22c9b60d05b1148'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_operations_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd931743a3feb447ab7aa6b9f10d196f4'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_processing_blocked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd962acc8a4c94d15937e164861a0583d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_OM'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9c63ff6613d48a197f607cdbb432c7f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_requires_employee_signature'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'da04f9372bdd4a41b35562c1dc196423'
                        key: {
                            sys_ui_section: {
                                id: '0cd356fec74a4513b1e0523e57870117'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_documentation'
                        id: 'da26d5dbe8b747e6992d4c3a051a791b'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'da349311d3544fbba40a7c93e975730d'
                        key: {
                            sys_ui_section: {
                                id: '1029713c85284a32a0be5e19b24863f9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'da9637f5be5c4c278476b9341de6403c'
                        key: {
                            sys_security_acl: 'ff32a91226d947039454b26772223555'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dad4504ab6fa46878cef1e71ff234cd3'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'analytics_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db1d7c39fe8b4d5f99bb2ab20cdd56d6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'position_title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dbd4914c1f914979a76e71d5a547f49f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc0897868c1b49b687ef46523a5da65a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_organization'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc505144cf9b41848a9db78e06306473'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dd607a8df5274337aa151bd53d65d791'
                        key: {
                            sys_security_acl: '57a6a54035f146c2a4c110af7ca73d9f'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dd68283c19c743f59c7cb9f734496910'
                        key: {
                            sys_security_acl: '6f38d73f5fef40408b98d52bb3e500e6'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dd6fd3a767364f36a9ac7321d0e5b8e2'
                        key: {
                            sys_security_acl: 'c0126128af134f0d93c82c5f2df05026'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddac420ac2484831beb6e2de4ea489f9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'audit_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de699004f85e45a98aaaaf0beedcef32'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_position_title'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'de79bee9bf8b48d5a535682cf143ab3e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de9d8a872666473ebbb3a2ae60506749'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_related_authorization'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dea3e1d47df340b1aaaf839f90a91046'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'access_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'deb0f91c2ca14035a07ab3cab39ad795'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'df01f85451d9458398082e6a6316c6a9'
                        key: {
                            question: {
                                id: '23c8641ef2c3445ea3604c41faced173'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '4742b517b9c3454bab10851721a6171c'
                                    name: 'x_2166123_hr_acc_0_employment_type'
                                }
                            }
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dfa17c3d53814692b0bb5b79d04b81df'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                            value: 'obsolete_version'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e0017e19f98f47b7bb904a3370ee5594'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_ui_element'
                        id: 'e02d438d86ba486a832116620d71aa5b'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: 'e06d9201f0fc407185988607a57b8164'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'invalid_operations_manager'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e080f2e688294fa3b40c840222cd1c97'
                        key: {
                            sys_ui_section: {
                                id: '6e446e7bbf2841d8b250f76fdc4584cc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'e1e8a906f1134fd4ad828ef09c351ed9'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e31089264df24d349f08117a4d36c239'
                        key: {
                            sys_ui_section: {
                                id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'e3b53117052d4fc4a62028dbcc381a63'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_evaluated_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4975f4bb4b845acbdfd39f398e1009d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_processing_blocked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e56e6feeb9714c5b9f010a3f37f77ac2'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_business_key'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e62638e3759946e7861e039d16bdfb54'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'authorization_action'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e68d53237b20478199284ed1e80eb9ce'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'profile_context_evidence'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6a43b21e84847169c63a805fed78e7f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_uncovered_access'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'e6a50971e30b4c0aaa2e1f9fffd18ec5'
                        key: {
                            sys_ui_form: {
                                id: 'c2cfe8e220484c2291dbbc96d0b80eda'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: 'e6b724b230b94e5c821640c827417a7a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6d7ec7a87fa4867b652120c44c0b40a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_analytics_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6d8b9f90b144d8da487a14c40ff667c'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'requires_access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6e682adf82d4e90a9c2c2a487af7b9a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e72d406221f94e5aa1a22d7c06145ee7'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'NEW_NO_PRIOR_FORM'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e73c0371a2e0412c930810fab3c8157f'
                        key: {
                            sys_security_acl: '66f05f84533c4b7bb47ff009eca3da9b'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8021a080a4946fc910e4fcfbb69fdac'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'e840c3552e9a46a1ae9a41753087d518'
                        key: {
                            logical_table_name: 'x_2166123_hr_acc_0_auth_detail'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e84be5d6731448efbade7d914f2f610e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e8a00e0a56884d6c8a5a4bcae7f65fcc'
                        key: {
                            sys_security_acl: '07ff9b2f93824da1a3e15fcc9d41d658'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e8e44ac1acb24136b0208d3645dce2c0'
                        key: {
                            sys_security_acl: 'ca751065feb74eddb59886ba672aff89'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e903546f7701465eb64873eac9f2fa66'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_completed_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e9dfa22523184eb3b40d90a9fa744a03'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'missing_supervisor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea075c9236174202b9010c28e0946741'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_date_time'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea5c9a18d4bd455dbfac8cbfce023ed5'
                        key: {
                            sys_security_acl: '07ff9b2f93824da1a3e15fcc9d41d658'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eb2cbe4072be48769f11929686e97074'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'pending_authorization'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eb493e901dcb4db89b874b67144b7857'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_provisioning_system'
                            value: 'arm'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb87ac00552c459787da360791d11294'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'target_system_snapshot'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eba2aa41f38346e3b0829e3687c40b79'
                        key: {
                            sys_security_acl: '687500ed0d034f298d85892ddde2648d'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebb860ae9c03416cb3eb5279f75a57cb'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_POSITION_ROLE_CHANGE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebd2daf7c1b74521910748adbd8dbf09'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                            value: 'EX_MISSING_SUPERVISOR'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ec26b22ab5f7459193bbb6dbe2deb3e1'
                        key: {
                            sys_security_acl: 'f83077845d704b29b784625dfea460c3'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ec4246801e434a1a85b9f6cd6b13d8a4'
                        key: {
                            sys_ui_section: {
                                id: 'e0017e19f98f47b7bb904a3370ee5594'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'ec4d8acc8cd94fe88194d44cabb079b6'
                        key: {
                            sys_security_acl: '687500ed0d034f298d85892ddde2648d'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ec8e0c0f29284f7ba9f9b236b89b9908'
                        key: {
                            sys_security_acl: '6f9282ccd9e34807a8c59a3dda848a49'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ecb36d5f9996436d97f1a07665b74f3c'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: 'ece715dbc2a34535a3f9f1973c37d34a'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'form_1768_mapping'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ed616c43944347fcb73a8fdcdcd00770'
                        key: {
                            sys_ui_section: {
                                id: '0148933ecd084e12b2f9d99505163bf9'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_choice'
                        id: 'ed8439ecb83b4b3d8055ffa2bdf64621'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'exception'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eddc40a2e0244ef196bfa705f0678256'
                        key: {
                            sys_ui_section: {
                                id: '4866e0802b7c4c77a68aee17920f5c30'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'ee4badca422343a3b1e66442f7303a69'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_approval_outcome'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee9a1637968a4312ae25cd15571db90b'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eeec92d37fa7459e90d77762b9e69dbf'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'agency_annual_recertification_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eef5c8391c7e492ba48a256635b0ed07'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_document_execution'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef4c52bef9c64252b00f18585514020d'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'decision_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef74ba6d465e4bc3a97f13d2fcbca101'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_prior_position_title'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f09f8dca025c414687003db860dc9162'
                        key: {
                            sys_ui_section: {
                                id: 'c6a4a4ade1214b3182c8f1507e6b138b'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_dictionary'
                        id: 'f0cb9ac2ed644e2c9190fe0ab504f06c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_requires_employee_signature'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1f369c645f2439e8ba802037995e649'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_target_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f270217c47df403a9411db4c4b292d11'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_evaluated_at'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f29539b4ec44422fae2a69024fa4fa26'
                        key: {
                            sys_ui_section: {
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_documentation'
                        id: 'f2f8e012dd2a4d5188eff79b84bf8c28'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'supervisor_signature_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f3bbc32fb69d433292824612cb57d920'
                        key: {
                            sys_ui_section: {
                                id: '3dbdebde573940bfae56264af7e4657f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
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
                        table: 'sys_dictionary'
                        id: 'f40973ee117a41289a3ddbf24cdc4df0'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_completion_timestamp'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f49d192a166a446e80a01b1c36020949'
                        key: {
                            sys_ui_section: {
                                id: '0c54b181ef2c45f1a2dadda37caf9cf4'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'ua_table_licensing_config'
                        id: 'f5582a90aadc4d4cb95e7c91c360265f'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5707f2f26c2482fb1d4f2deab983890'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'business_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f58e819648ad482fb32eed157f4c15ba'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f5db691c01e34b21bad80ad946a12b98'
                        key: {
                            sys_ui_section: {
                                id: 'd07e5521c71546679f423e20727600fc'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'f61f4540892742f28a3ef2ec4af609a9'
                        key: {
                            sys_security_acl: '687a17ca28e6413abe203092b476edff'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6ab1a2eaee141699949eedde70a4b20'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'NEW_NO_CURRENT_FORM'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6ba05a8d52f406ba792d3bdc0c37efe'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_rob_access_items'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'f72fc9c8f08340f691a96d53ee32750e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f75a37ec2c7e4015be40bc2591a2a406'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f79639ae68124649b51ae2dfdbe5b0ce'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_signer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f79c3e7b3c5843569b966195b90a7ea6'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'renewal_notification_copy_group'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f7c8013fcabe4cdba18f957a3701d56e'
                        key: {
                            sys_ui_section: {
                                id: 'e0017e19f98f47b7bb904a3370ee5594'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_access'
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
                        table: 'sys_choice'
                        id: 'f823c5e2c1264803bf4b08b1a9323825'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_attestation_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f858cd53d2f94488b652bd203f038045'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'external_target_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f892f9110e284ff3914527469c75a40a'
                        key: {
                            sys_security_acl: 'e43fab7e6e724035a720d6f454948d78'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8c101cb7cc1403cb4ab3728f429f446'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_exception_reason'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f95df44df97a4f889f2ad869c7d7a5ae'
                        key: {
                            sys_security_acl: '44ec2c00e25c485ba97a52f2fbae33b9'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f99ff89e9da94ddead576e93696301be'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f9a35198063e47068970c4fc63bcdd26'
                        key: {
                            sys_security_acl: '50e5b2a2af5e4e6e9c0d1aa33b091f3e'
                            sys_user_role: {
                                id: 'c112257f524b41a0aa9bd3869b02f55a'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f9e5dc00021d42bdab0e50505feaa3c6'
                        key: {
                            sys_ui_section: {
                                id: 'f6cec9d7b69e4c378dcc0c5f3652e97f'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_ui_element'
                        id: 'fa688129767c4eb8b15ec792439a66ad'
                        key: {
                            sys_ui_section: {
                                id: '36ba422336674a92a236f2c351370c59'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_config'
                                    caption: 'Task Timing and Renewal Oversight'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'renewal_notification_copy_group'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fac0ba82f00e48c597722387d350afe9'
                        key: {
                            sys_ui_section: {
                                id: '855976f556084d0681911b64bfd62e00'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: 'fad09557d7124d34a1423d698d070035'
                        key: {
                            sys_security_acl: '935b25e5f744409e8c54c2dff281ce8c'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fbe54f608c4b4d74baa66362248fc536'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_config'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fbe86814f00b49818a648e95e284ee55'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_JUSTIFICATION_CHANGE'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'fbee4351e1d845f59160318a8a88c35d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4742b517b9c3454bab10851721a6171c'
                            name: 'x_2166123_hr_acc_0_access_end_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fc28b473c2e34a73a5168a00376ea32f'
                        key: {
                            sys_security_acl: '221cce3d15e743e09f4615832eb3e1a9'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc300cad8a9945cda2a72929d9c5a05c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_reuse_supervisor_signature_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc51c6fba7fa44898513d9d21a4cc80f'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'rob_authorization_form'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fce9f29ab9ad457ca266aacc19ba2905'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fcf74e717021476bae7d54f075061864'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'mixed'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd16b25693734bfaa1bf4095e3e766de'
                        key: {
                            sys_ui_section: {
                                id: '1d4458e0e45f4cb6b85d65d797d73a6d'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        id: 'fd16e08aee19433fa24876f76f90e743'
                        key: {
                            sys_ui_section: {
                                id: '4719ff33f0424180aad64fb22b83e2be'
                                key: {
                                    name: 'x_2166123_hr_acc_0_auth_detail'
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
                        table: 'sys_dictionary'
                        id: 'fd1f9ae522e84680919975a5d67b89fc'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_access_end_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd6662de0e7645cab9c31611625f6ef3'
                        key: {
                            sys_ui_section: {
                                id: '78f5c15cdfd7427ebb74ea1803e43e26'
                                key: {
                                    name: 'x_2166123_hr_acc_0_rob_auth'
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
                        id: 'fdb7b2f7626f46b98e8b096a5434c7fa'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'employee_signature_date_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fde24b3e8d73419ab26732738edd48ab'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_external_provisioning_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fde4afe05c7d438f99d78d194f95de03'
                        key: {
                            name: 'x_2166123_hr_acc_0_rob_auth'
                            element: 'authorization_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fdf8ebd9e3a14ce882ee143864d18378'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_evaluated_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fdfb0450dcfb4b528d76812fb14be946'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_hr_acc_0_decision_reason'
                            value: 'AMD_MULTIPLE_MATERIAL_CHANGES'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fed4ec1b6908425cb26e5c756c585e91'
                        key: {
                            sys_security_acl: 'eed80b42db82486eb6bb77b7bb366fb0'
                            sys_user_role: {
                                id: '9bf68aa8f7b2426785c609878f082328'
                                key: {
                                    name: 'x_2166123_hr_acc_0.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fef038adea4f4deb81bb8590f773b0c6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_hr_acc_0_authorization_path'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff140d7b50294a06ac25dee7fc474845'
                        key: {
                            name: 'x_2166123_hr_acc_0_auth_detail'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ffd3534796cd4e43a6ec91c9077639fa'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_hr_acc_0_fulfillment_outcome'
                            value: 'provisioning_completed'
                        }
                    },
                ]
            }
        }
    }
}
