import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0dc6b6e383f647104f5193a6feaad3b0': {
                        table: 'sys_hub_action_instance_v2'
                        id: '0dc6b6e383f647104f5193a6feaad3b0'
                    }
                    '1274ca2383fe07104f5193a6feaad307': {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '1274ca2383fe07104f5193a6feaad307'
                    }
                    '29a9a5e7833e07104f5193a6feaad3c9': {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '29a9a5e7833e07104f5193a6feaad3c9'
                    }
                    '342d79ab833e07104f5193a6feaad3bb': {
                        table: 'sys_hub_action_instance_v2'
                        id: '342d79ab833e07104f5193a6feaad3bb'
                    }
                    '41e64ee7833247104f5193a6feaad3d9': {
                        table: 'sys_hub_action_instance_v2'
                        id: '41e64ee7833247104f5193a6feaad3d9'
                    }
                    '568959738336c7104f5193a6feaad37a': {
                        table: 'sys_scope_privilege'
                        id: '568959738336c7104f5193a6feaad37a'
                    }
                    '5facc267837247104f5193a6feaad391': {
                        table: 'sys_hub_action_instance_v2'
                        id: '5facc267837247104f5193a6feaad391'
                    }
                    '73105d6b833a07104f5193a6feaad363': {
                        table: 'sys_hub_flow'
                        id: '73105d6b833a07104f5193a6feaad363'
                    }
                    '89e7f6a783f647104f5193a6feaad35f': {
                        table: 'sys_hub_flow_snapshot'
                        id: '89e7f6a783f647104f5193a6feaad35f'
                    }
                    '8d4636a383f647104f5193a6feaad36a': {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '8d4636a383f647104f5193a6feaad36a'
                    }
                    '8d613ae783b647104f5193a6feaad3e8': {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '8d613ae783b647104f5193a6feaad3e8'
                    }
                    '95d5366383f647104f5193a6feaad3d8': {
                        table: 'sys_hub_action_instance_v2'
                        id: '95d5366383f647104f5193a6feaad3d8'
                    }
                    'authorized-access-details-module': {
                        table: 'sys_app_module'
                        id: '9bf836774aa7421d85e8cc443c3e26c8'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '2c6d6e0a7b124cc5beaf66894bbf6762'
                    }
                    'capture-authorization-signature-evidence': {
                        table: 'sys_script'
                        id: '14ead99fc1b340f299e67d6c497ec299'
                    }
                    'capture-supervisor-approval-decision': {
                        table: 'sys_script'
                        id: '189ba1d02f28459b976c6cd91a68cd36'
                    }
                    'create-native-supervisor-approval': {
                        table: 'sys_scope_privilege'
                        id: '6e678251e7e24c68beaaaa99027739c0'
                    }
                    'create-supervisor-exception-review-task-after-insert': {
                        table: 'sys_script'
                        id: '76337ac15b184e0ca3a5538d32339f5e'
                    }
                    'create-workforce-exception-review-task-after-insert': {
                        table: 'sys_script'
                        id: 'b1c93494ae1a49ba9dfc4d87313bd0a5'
                    }
                    da92f2ab83b647104f5193a6feaad350: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'da92f2ab83b647104f5193a6feaad350'
                    }
                    'default-rob-configuration': {
                        table: 'x_2166123_rob_auth_rob_config'
                        id: '24ef713e7a4941baa1aab57a057db25b'
                    }
                    'enforce-requester-profile-security-before-update': {
                        table: 'sys_script'
                        id: '9d32f30588e1496ab788ad44788ebe3f'
                    }
                    'evaluate-payroll-authorization-decision': {
                        table: 'sys_script'
                        id: '5fc23b27a0fd4e14af71b4455896f263'
                    }
                    'evaluate-workforce-authorization-decision': {
                        table: 'sys_script'
                        id: '795fabaf203843a79117c1e346a57290'
                    }
                    f8e2beab83b647104f5193a6feaad300: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f8e2beab83b647104f5193a6feaad300'
                    }
                    'finalize-authorization-after-pdf-association': {
                        table: 'sys_script'
                        id: '83e604091a62478ea011a10c577104f6'
                    }
                    'hr-task-rob-task-type-write': {
                        table: 'sys_security_acl'
                        id: '25c065a036914064a703b3eafd325184'
                    }
                    'initiate-payroll-authorization-lifecycle': {
                        table: 'sys_script'
                        id: 'b9973651027140a68e3f2d1ed1beabfc'
                    }
                    'initiate-workforce-authorization-lifecycle': {
                        table: 'sys_script'
                        id: '046c74b9ce424a8f9b504f739506e62e'
                    }
                    'launch-supervisor-signature-after-approval': {
                        table: 'sys_script'
                        id: 'e56b96952f53473c96e6ec811ff0ec95'
                    }
                    'm3-form1768-template-candidate': {
                        table: 'sn_doc_pdf_template'
                        id: 'e379d41ebe5b41cf865be52bce73dc7f'
                    }
                    'orchestrate-payroll-fulfillment': {
                        table: 'sys_script'
                        id: '6eb19976015c4d968943117a22e5c41e'
                    }
                    'orchestrate-workforce-administration-fulfillment': {
                        table: 'sys_script'
                        id: '27b7119bce3343f8886be7b0bc37f070'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7331b0f6abfc4724980f3680ed3a5109'
                    }
                    'payroll-corrected-at-read': {
                        table: 'sys_security_acl'
                        id: 'bf2bb4ce2d8a44eda20348b701490076'
                    }
                    'payroll-corrected-at-write': {
                        table: 'sys_security_acl'
                        id: '55ec6f2c5cef4177830226ec689f87fd'
                    }
                    'payroll-corrected-by-read': {
                        table: 'sys_security_acl'
                        id: 'ba494884f77b4e3aa4a24d899809df44'
                    }
                    'payroll-corrected-by-write': {
                        table: 'sys_security_acl'
                        id: '5da84996edac40969246e7baf16c4940'
                    }
                    'payroll-correction-reason-read': {
                        table: 'sys_security_acl'
                        id: '2a35094c2278417d9ad7759e766607ad'
                    }
                    'payroll-correction-reason-write': {
                        table: 'sys_security_acl'
                        id: 'f737e44c7cea4ac09126987eef4de7f2'
                    }
                    'payroll-correction-requested-read': {
                        table: 'sys_security_acl'
                        id: '06a13e833c7f4d1c8c2dde8778c39dd0'
                    }
                    'payroll-correction-requested-write': {
                        table: 'sys_security_acl'
                        id: 'dfdf1b656ae54a02b0cd2b8b1b30c10c'
                    }
                    'payroll-employee-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: '1e7a2974c62742c2b451a77bfc237727'
                    }
                    'payroll-employee-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: 'cea8d4750dd04e2183af8bbf905eb5d9'
                    }
                    'payroll-exception-reason-read': {
                        table: 'sys_security_acl'
                        id: 'fd7c097b3585475dac272e8353e2a5e0'
                    }
                    'payroll-exception-reason-write': {
                        table: 'sys_security_acl'
                        id: '956d5be058094b83a80cd13bc0363bda'
                    }
                    'payroll-exception-required-read': {
                        table: 'sys_security_acl'
                        id: 'd1ab65c61aa749f890240e9b70ee9622'
                    }
                    'payroll-exception-required-write': {
                        table: 'sys_security_acl'
                        id: '64505b6546b0431485864fa98625cbd1'
                    }
                    'payroll-fulfillment-gate-read': {
                        table: 'sys_security_acl'
                        id: 'd0bf4f521fec4a669aa93ed0f191e00d'
                    }
                    'payroll-fulfillment-gate-write': {
                        table: 'sys_security_acl'
                        id: '76df33e61ba944ada33ee0510256cdb7'
                    }
                    'payroll-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: 'b85e167e7247485d8c0f2851afc0dcce'
                    }
                    'payroll-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: 'edd462a56d984857b42b274d621bf683'
                    }
                    'payroll-position-title-read': {
                        table: 'sys_security_acl'
                        id: 'b20a357e962f45edbf48867a0d9b8045'
                    }
                    'payroll-position-title-write': {
                        table: 'sys_security_acl'
                        id: 'fd404ffbfc8442c69c73a04c268c0453'
                    }
                    'payroll-prior-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: 'fa67229aee854d3d949816c4d5588d71'
                    }
                    'payroll-prior-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: 'e1dc464af2f74d4d8627ce54c133b050'
                    }
                    'payroll-prior-position-title-read': {
                        table: 'sys_security_acl'
                        id: '54a1c872608940d4a982d53f5d854156'
                    }
                    'payroll-prior-position-title-write': {
                        table: 'sys_security_acl'
                        id: '15886338e08d450ca75c177057d86403'
                    }
                    'payroll-prior-supervisor-read': {
                        table: 'sys_security_acl'
                        id: '252bf597a20a496aa85a352e086c3178'
                    }
                    'payroll-prior-supervisor-write': {
                        table: 'sys_security_acl'
                        id: '5a4f701faa1c4503a161923d3238f1e8'
                    }
                    'payroll-processing-blocked-read': {
                        table: 'sys_security_acl'
                        id: '42bcd87d3dc24083b06edea9dd8e3d75'
                    }
                    'payroll-processing-blocked-write': {
                        table: 'sys_security_acl'
                        id: '94827cabc7ab44d285ace97e067f004c'
                    }
                    'payroll-requested-items-write': {
                        table: 'sys_security_acl'
                        id: '2bbe69c7da4743d880f14269396c7211'
                    }
                    'payroll-supervisor-read': {
                        table: 'sys_security_acl'
                        id: '45d4886b9c154f249b76f6e61494d996'
                    }
                    'payroll-supervisor-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: '1c3cd45e105d4fc18b58af0dbc501018'
                    }
                    'payroll-supervisor-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: '4cb7930da13d465e84311bbba6f8222a'
                    }
                    'payroll-supervisor-write': {
                        table: 'sys_security_acl'
                        id: '4a80d472bd924917ae37516b5d62fb68'
                    }
                    'populate-requester-profile-snapshots-before-insert': {
                        table: 'sys_script'
                        id: 'd71ec024a543412bae8c3dffb24b3e31'
                    }
                    'populate-workforce-requester-profile-snapshots-before-insert': {
                        table: 'sys_script'
                        id: '85ee099ac365435f8c6b4b54e50a4c60'
                    }
                    'prevent-duplicate-final-authorization-pdf': {
                        table: 'sys_script'
                        id: 'beb11f77415344d8a67317dda92492f4'
                    }
                    'read-department': {
                        table: 'sys_scope_privilege'
                        id: 'a08489b89c9b4c36918e742dd29d41e2'
                    }
                    'read-document-task-execution': {
                        table: 'sys_scope_privilege'
                        id: '7fa39d91f2dc4849b65c173ca05152cb'
                    }
                    'read-hr-position': {
                        table: 'sys_scope_privilege'
                        id: '4e15d0bacb5b4d328cc6a16ffd6ab4f8'
                    }
                    'read-hr-profile': {
                        table: 'sys_scope_privilege'
                        id: 'c32ad3a5271c4db0aecdf6a1df1316d3'
                    }
                    'read-native-supervisor-approval': {
                        table: 'sys_scope_privilege'
                        id: '6ec60ff2bb6248cd81c603a0b53d963c'
                    }
                    'read-user-group': {
                        table: 'sys_scope_privilege'
                        id: '8ddcc4d048b64090bcdd66d4a0333c64'
                    }
                    'read-user-group-membership': {
                        table: 'sys_scope_privilege'
                        id: 'ffdf940d714b4211a8e3eab0671b24eb'
                    }
                    'reconcile-rob-fulfillment-task-completion': {
                        table: 'sys_script'
                        id: '31b6f6fe7198436d8d6600355948fe70'
                    }
                    'rederive-requester-profile-snapshots': {
                        table: 'sys_ui_action'
                        id: 'd3951036b289476a865b644822dc7864'
                    }
                    'rob-access-item-active-active-read': {
                        table: 'sys_security_acl'
                        id: '734440a89c394f949c7fbdc97c0eb5ea'
                    }
                    'rob-access-item-active-category-read': {
                        table: 'sys_security_acl'
                        id: 'e61fdd9beefe4f16bd680a9312b35fba'
                    }
                    'rob-access-item-active-internal-read': {
                        table: 'sys_security_acl'
                        id: '081fbe801ad94d45806b31b2699562a1'
                    }
                    'rob-access-item-active-name-read': {
                        table: 'sys_security_acl'
                        id: 'fd03d0e7260a4aadb6fede2b933df50b'
                    }
                    'rob-access-item-active-sort-order-read': {
                        table: 'sys_security_acl'
                        id: '12fd96161320430480ddb581655acb62'
                    }
                    'rob-access-item-active-sys-id-read': {
                        table: 'sys_security_acl'
                        id: 'c049992a11a9488d8f02eeb6dc2e3c7e'
                    }
                    'rob-access-item-admin-create': {
                        table: 'sys_security_acl'
                        id: 'e52efcc50bea4d9ab8d21d5d7deba291'
                    }
                    'rob-access-item-admin-read': {
                        table: 'sys_security_acl'
                        id: 'f7a001a900f446719bc0f3fd8e0be63a'
                    }
                    'rob-access-item-admin-write': {
                        table: 'sys_security_acl'
                        id: '1db136d159404d4e9c2be52807114150'
                    }
                    'rob-access-item-eopf': {
                        table: 'x_2166123_rob_auth_rob_access'
                        id: 'f09a7952bd8d40ba9a5cbcb4cf77ffab'
                    }
                    'rob-access-item-fpps-wtts': {
                        table: 'x_2166123_rob_auth_rob_access'
                        id: 'bc1735e4742445c1b991f0f85a1d1679'
                    }
                    'rob-access-item-human-capital-data': {
                        table: 'x_2166123_rob_auth_rob_access'
                        id: 'e32ec30fadcf4ad5a78d2ea85cf90ad6'
                    }
                    'rob-access-item-internal-field-mask': {
                        table: 'sys_security_acl'
                        id: 'b6c1529a398847bf955357463da09c4c'
                    }
                    'rob-access-item-report-access': {
                        table: 'x_2166123_rob_auth_rob_access'
                        id: '6832a044e89646949e88010fd8d0f023'
                    }
                    'rob-access-item-usa-staffing': {
                        table: 'x_2166123_rob_auth_rob_access'
                        id: '0027ef45f61e4ec09451e3591464ff56'
                    }
                    'rob-access-item-workforce-profile-charts': {
                        table: 'x_2166123_rob_auth_rob_access'
                        id: '3a4a55a3ce0947b6b42010a946ef5711'
                    }
                    'rob-access-items-module': {
                        table: 'sys_app_module'
                        id: '2a9abf22b4854765a8407f0e44fae662'
                    }
                    'rob-administration-menu': {
                        table: 'sys_app_application'
                        id: 'f670ebcc50064721be79ff7459df4be7'
                    }
                    'rob-analytics-access-variable-set': {
                        table: 'item_option_new_set'
                        id: '4828d73f25a54d599d933367f9e3fe31'
                    }
                    'rob-authorization-access-details-list-control': {
                        table: 'sys_ui_list_control'
                        id: 'ef40f2ee89fd4d96b50f72adde61e7eb'
                    }
                    'rob-authorization-access-details-related-list': {
                        table: 'sys_ui_related_list'
                        id: 'de308418cc0f47088721b7a1e44268ab'
                    }
                    'rob-authorization-access-details-related-list-entry': {
                        table: 'sys_ui_related_list_entry'
                        id: '137ded1fbfeb41599b698f5d983756fd'
                    }
                    'rob-authorization-admin-create': {
                        table: 'sys_security_acl'
                        id: '6b49da8dac2d43b890a7cbfaa0c42024'
                    }
                    'rob-authorization-admin-write': {
                        table: 'sys_security_acl'
                        id: 'dd902fa17e5b4623861ab6da027552a1'
                    }
                    'rob-authorization-business-justification-label': {
                        table: 'sys_ui_annotation'
                        id: '0fb08a457c524f888f0982398a9d12d3'
                    }
                    'rob-authorization-detail-admin-create': {
                        table: 'sys_security_acl'
                        id: '734aad39f2dc469a9752d24629a11543'
                    }
                    'rob-authorization-detail-admin-write': {
                        table: 'sys_security_acl'
                        id: 'c9510b8f2de44c07b237be4b2d6be8e5'
                    }
                    'rob-authorization-detail-field-read': {
                        table: 'sys_security_acl'
                        id: '1d4438d9eec04b2a97e36ca271f38985'
                    }
                    'rob-authorization-detail-read': {
                        table: 'sys_security_acl'
                        id: 'bc524a338a924ce6a1651d0ad7990dc1'
                    }
                    'rob-authorization-field-read': {
                        table: 'sys_security_acl'
                        id: 'a4000ccec45d45da9448256393e98be2'
                    }
                    'rob-authorization-forms-module': {
                        table: 'sys_app_module'
                        id: '759f6950b7354506af4e0be61284193f'
                    }
                    'rob-authorization-lifecycle-create-event-action': {
                        table: 'sysevent_script_action'
                        id: '721fb030a08a4ff3ab0844d67a0f76e4'
                    }
                    'rob-authorization-lifecycle-entry': {
                        table: 'sys_script_include'
                        id: 'd78da619355a45e5baa2957b025a4ea4'
                    }
                    'rob-authorization-lifecycle-verify-event-action': {
                        table: 'sysevent_script_action'
                        id: 'ea303e44d86a4d3abacd0c1029b1b292'
                    }
                    'rob-authorization-read': {
                        table: 'sys_security_acl'
                        id: '24d429009f39432087bf1be205cf266c'
                    }
                    'rob-common-intake-variable-set': {
                        table: 'item_option_new_set'
                        id: '0668d48652614fe6b1c5846140a341c6'
                    }
                    'rob-configuration-admin-create': {
                        table: 'sys_security_acl'
                        id: '47d103acc9bf4dc39e9789994fb03818'
                    }
                    'rob-configuration-admin-read': {
                        table: 'sys_security_acl'
                        id: 'baeb490e5f5f4416b12e78ef88890756'
                    }
                    'rob-configuration-admin-write': {
                        table: 'sys_security_acl'
                        id: '5010f78d1c404c59a788975e43ff8637'
                    }
                    'rob-configuration-module': {
                        table: 'sys_app_module'
                        id: '9e75932e206943eca10f57fa32d35de5'
                    }
                    'rob-daily-renewal-lapse': {
                        table: 'sysauto_script'
                        id: 'fb0e454386524403aa9dc9b8175b1215'
                    }
                    'rob-execute-authorization-lifecycle': {
                        table: 'sys_hub_action_type_definition'
                        id: '3c43a0b413514057a00e2bc9bc6b2f56'
                    }
                    'rob-execute-authorization-lifecycle-script': {
                        table: 'sys_hub_step_instance'
                        id: 'd31c33c5712d42d385642b7248b94a9e'
                    }
                    'rob-lapse-notice-event': {
                        table: 'sysevent_register'
                        id: '29d57605c15048bb99bce0baa936579e'
                    }
                    'rob-lapse-notification': {
                        table: 'sysevent_email_action'
                        id: 'cfd7a3e0acb74bc69a61a886acaf432a'
                    }
                    'rob-lifecycle-entry-read-hr-service-caller-access': {
                        table: 'sys_restricted_caller_access'
                        id: '40bd7443c29d4ac78926c97ce22fe64e'
                    }
                    'rob-profile-authorization-context': {
                        table: 'sys_script_include'
                        id: 'adb660f45ca4495eba511efe70c9487e'
                    }
                    'rob-renewal-notice-event': {
                        table: 'sysevent_register'
                        id: '48d47634fe654e77b91520562b59bf93'
                    }
                    'rob-renewal-notification': {
                        table: 'sysevent_email_action'
                        id: 'd8259207cd0b4f7a8dfec73b4031debb'
                    }
                    'rob-require-access-end-date-for-time-limited-workers': {
                        table: 'catalog_ui_policy'
                        id: 'd7c27b0dc0e9462cb129f4469a9dfc39'
                    }
                    'rob-staffing-access-variable-set': {
                        table: 'item_option_new_set'
                        id: '4acc9ba7aa844badb17c49975df5ebb8'
                    }
                    'rob-verify-authorization-signing-gate': {
                        table: 'sys_hub_action_type_definition'
                        id: 'e79a056ad0a142149e8f76ed5febec10'
                        deleted: false
                    }
                    'rob-verify-authorization-signing-gate-script': {
                        table: 'sys_hub_step_instance'
                        id: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                        deleted: false
                    }
                    src_server_authorization_AuthorizationDecisionService_js: {
                        table: 'sys_module'
                        id: '9c06697e84f74fb09e05847797fa793b'
                    }
                    src_server_authorization_AuthorizationFinalizationService_js: {
                        table: 'sys_module'
                        id: '5920f546038d4816909f8fcfa52d4ed0'
                    }
                    src_server_authorization_AuthorizationLifecycleService_js: {
                        table: 'sys_module'
                        id: 'd9bed07c96884db2aa2d91c2e7453a83'
                    }
                    src_server_authorization_AuthorizationRepository_js: {
                        table: 'sys_module'
                        id: '5bb463336b904aeda1f0485a75066d98'
                    }
                    src_server_authorization_AuthorizationScopeService_js: {
                        table: 'sys_module'
                        id: 'ce3756f79b6640aea59eb0eb179b4cc6'
                    }
                    src_server_authorization_ExpirationDateService_js: {
                        table: 'sys_module'
                        id: '187e0a246fe248fe89262dcb0c4f9b3f'
                    }
                    src_server_authorization_ReuseAttestationService_js: {
                        table: 'sys_module'
                        id: '0a93e98612524fadaa53e002ecf43a90'
                    }
                    src_server_authorization_SignatureExecutionService_js: {
                        table: 'sys_module'
                        id: 'f169d4f28d1548a99f773135f4669857'
                    }
                    src_server_fulfillment_FulfillmentClosureService_js: {
                        table: 'sys_module'
                        id: '3c4cb05c169d4b6ca368bb4353a6659a'
                    }
                    src_server_fulfillment_FulfillmentEscalationService_js: {
                        table: 'sys_module'
                        id: '33da9143c26d49cdb054ee2ee2c17530'
                    }
                    src_server_fulfillment_FulfillmentEvidenceService_js: {
                        table: 'sys_module'
                        id: 'f3499cafed6a44829579d71663f9fd30'
                    }
                    src_server_fulfillment_FulfillmentOrchestrationService_js: {
                        table: 'sys_module'
                        id: '7a42465ce058420ea1e684de61b90230'
                    }
                    src_server_fulfillment_FulfillmentRoutingService_js: {
                        table: 'sys_module'
                        id: 'a0c4f1427e79403b85d7ac897c2d466f'
                    }
                    src_server_renewal_RenewalLapseService_js: {
                        table: 'sys_module'
                        id: 'c2fc50979d374f1fb0be5a89ebb534b7'
                    }
                    'validate-rob-fulfillment-task-completion': {
                        table: 'sys_script'
                        id: 'ac053c7003d6498ab045cc1cc7ffa7ec'
                    }
                    'workforce-admin-corrected-at-read': {
                        table: 'sys_security_acl'
                        id: '37926570d65e4dd499f8f9954b6f1b5f'
                    }
                    'workforce-admin-corrected-at-write': {
                        table: 'sys_security_acl'
                        id: 'ad77cf6e24804b56bc24dd091a7f8eaf'
                    }
                    'workforce-admin-corrected-by-read': {
                        table: 'sys_security_acl'
                        id: '5ae2368c6e4641c786ec922bdd8210e4'
                    }
                    'workforce-admin-corrected-by-write': {
                        table: 'sys_security_acl'
                        id: 'b4759be67ad54dd9a5dc712141caa0ed'
                    }
                    'workforce-admin-correction-reason-read': {
                        table: 'sys_security_acl'
                        id: 'cff35cef921a45a6bb4527ab18dad09d'
                    }
                    'workforce-admin-correction-reason-write': {
                        table: 'sys_security_acl'
                        id: '1061d800cffd4eb7864ad16e1cd46d09'
                    }
                    'workforce-admin-correction-requested-read': {
                        table: 'sys_security_acl'
                        id: '62f8d6f7c17540cf93b1e7f2eb92fdc0'
                    }
                    'workforce-admin-correction-requested-write': {
                        table: 'sys_security_acl'
                        id: '47d1b51570cb4068a016bbd21565605e'
                    }
                    'workforce-admin-employee-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: 'd6a196df1a8d4eb884eec372d261accb'
                    }
                    'workforce-admin-employee-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: '1bcf96a1bc164e0a8eb6461afc9aa67f'
                    }
                    'workforce-admin-exception-reason-read': {
                        table: 'sys_security_acl'
                        id: '607d06466f54458f902d03edf3a51a0b'
                    }
                    'workforce-admin-exception-reason-write': {
                        table: 'sys_security_acl'
                        id: '9bc94cd67f9945c3b99fb452dcb07dbb'
                    }
                    'workforce-admin-exception-required-read': {
                        table: 'sys_security_acl'
                        id: 'b61b633e618c446999d91aedebef9e4f'
                    }
                    'workforce-admin-exception-required-write': {
                        table: 'sys_security_acl'
                        id: '424d0cdca5964d5ab8af3b4dbc5e4e93'
                    }
                    'workforce-admin-fulfillment-gate-read': {
                        table: 'sys_security_acl'
                        id: '2d864607312a4070aa023c8f012c5f24'
                    }
                    'workforce-admin-fulfillment-gate-write': {
                        table: 'sys_security_acl'
                        id: '8a62411965a1499292ea1fb09018ce73'
                    }
                    'workforce-admin-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: '5bd7e62d240743658ad1e888e730ab1c'
                    }
                    'workforce-admin-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: '71a411ca106542be99fc501e62cf3637'
                    }
                    'workforce-admin-position-title-read': {
                        table: 'sys_security_acl'
                        id: 'bd9101d4ab5c452ebefc4933147cd4be'
                    }
                    'workforce-admin-position-title-write': {
                        table: 'sys_security_acl'
                        id: '35972a92d0f94171ab0aea3b455a50d3'
                    }
                    'workforce-admin-prior-organization-snapshot-read': {
                        table: 'sys_security_acl'
                        id: '798431b397ef4ea1a454de09bd0b1219'
                    }
                    'workforce-admin-prior-organization-snapshot-write': {
                        table: 'sys_security_acl'
                        id: '0371ae006b7c478ba2b4beb325efdc98'
                    }
                    'workforce-admin-prior-position-title-read': {
                        table: 'sys_security_acl'
                        id: '334c921c880e4676bc3d3a99502f28b9'
                    }
                    'workforce-admin-prior-position-title-write': {
                        table: 'sys_security_acl'
                        id: '35e0803bb75c40fd9c13b968fe055932'
                    }
                    'workforce-admin-prior-supervisor-read': {
                        table: 'sys_security_acl'
                        id: '0a0cc436b7fb44c681228a0b73582354'
                    }
                    'workforce-admin-prior-supervisor-write': {
                        table: 'sys_security_acl'
                        id: '537a7df6ddf24302b252db6342a51188'
                    }
                    'workforce-admin-processing-blocked-read': {
                        table: 'sys_security_acl'
                        id: '2860e9b82125451d8d65f9f61108a7ff'
                    }
                    'workforce-admin-processing-blocked-write': {
                        table: 'sys_security_acl'
                        id: 'fbc8d9ea566f41a796400ee7e689abeb'
                    }
                    'workforce-admin-requested-items-write': {
                        table: 'sys_security_acl'
                        id: 'e4021db5cbb64238816235d32f4b686c'
                    }
                    'workforce-admin-supervisor-read': {
                        table: 'sys_security_acl'
                        id: '2e4ccd12f43e403eabefb5c5b364a559'
                    }
                    'workforce-admin-supervisor-signature-gate-read': {
                        table: 'sys_security_acl'
                        id: '5d5762f755ad451aab21d2f708e46f2c'
                    }
                    'workforce-admin-supervisor-signature-gate-write': {
                        table: 'sys_security_acl'
                        id: '1e6c29008e5849f59ec934760247ec83'
                    }
                    'workforce-admin-supervisor-write': {
                        table: 'sys_security_acl'
                        id: 'b283fc03860746ebaa609afe81139e62'
                    }
                    'x-2166123-rob-auth-lifecycle-create-event': {
                        table: 'sysevent_register'
                        id: '19abf48d044c4580858417d63ba651aa'
                    }
                    'x-2166123-rob-auth-lifecycle-verify-event': {
                        table: 'sysevent_register'
                        id: '1b186fbf987e49feaabbf2e3f95f9427'
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '0038d0ff90604cbbb3ca13bdb281abda'
                        key: {
                            name: 'sn_hr_core_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0041c8bfb8be4809b85375fff9f6b6ba'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_prior_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00877b0f9fb646aa8134b76dc3ba0e46'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'lapse_notice_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '00d944acf28346809604ed70797069c6'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00f00fd54b2b4babb0064a1eb092760d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '011b1e7c437b4024b5aac978495fc6dd'
                        key: {
                            sys_ui_section: {
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: '018f2c33e33c4c16a4194ba99430f77d'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_OM'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01bb6fa6732f4184b13fd4187444722b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_evaluated_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '021b2357ff0d4e86876971a53a5b495b'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0249a1b3787345dca035ba1e855fe3d7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_supervisor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '02dbd1b6200547ca828eb0939d51348c'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'usa_staffing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02f1b859236b4787a0b6723ae5ca9540'
                        key: {
                            sys_ui_section: {
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '02fb7be736eb4866babdda6ed2c00877'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_END_DATE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '030bd7b2158545d395e2317957cfe66c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03de0a82eb584914af8c9bdac151b4a0'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '042539a22b2d4031a191b46456be9759'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0443a574ed8c4db98d366150debde2ae'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_3_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '045c4dd4c10e44a3b9a6c46192b63a06'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_operations_manager'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '047772f8f07f42bc81e10bc4f11f6e0d'
                        key: {
                            sys_security_acl: '06a13e833c7f4d1c8c2dde8778c39dd0'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04902e5463bf4789b4ee52951d4bfe0b'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'pending_authorization'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04bebb037d084020b985d9ac1b0ab74b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_CURRENT_FORM'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04c9d109e67f4bd9ac53e2460024fb60'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'oas'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '04cbedf809ab4775ba0837590286428f'
                        key: {
                            sys_ui_form: {
                                id: '5967f53115714221a544ff26c46bd18d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                                id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '04d39b2f2d284c2b9285c4d0958bf8c1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04de32725765426ebeb970f4e90fb78c'
                        key: {
                            sys_security_acl: '2d864607312a4070aa023c8f012c5f24'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0505ef74d78d40a8b60e53c7526ff81e'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'operations_manager_arm_assignment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0563f777c4ff4df59f7154a6572e5fc5'
                        key: {
                            sys_ui_section: {
                                id: '28ec744c546746d8bc9d211cf97b3827'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_number'
                        id: '0574e62038df410ca3344cbe4a554ef8'
                        key: {
                            category: 'x_2166123_rob_auth_rob_auth'
                            prefix: 'ROBA'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '05b29ad3f4ae48c1a593316be0e534fa'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: 'e4a6178e2e6e47e09652202a6a156c40'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '05e82c6fd7114427875d4db9153320ee'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'not_applicable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05fa021a84724185b6418de9af88de1e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '064590efe158464888740c39de04e816'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '06946d22df2847018563f1c9eda4379b'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '06a54a8560c341638af7996ce5cef058'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06a9e5e7833e07104f5193a6feaad355'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_73105d6b833a07104f5193a6feaad363'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '06ab894b274245d590bd77858c29d207'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        id: '06bd462cf6d94311b36a9e7d0d03dd0f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requires_supervisor_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '06f58b7d0a4e442b98a5ee5f7cb6a690'
                        key: {
                            sys_ui_section: {
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        id: '074e690c4121424dac09ae43695ed99c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0771d449139a49b5b1c8064fc43836fa'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'arm'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0816f166ee7a422ba651940ac125345c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'decision_reason'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '08463637bdc64ba0ab7e06560ad836ad'
                        key: {
                            sys_ui_section: {
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_ui_element'
                        id: '088cdf785cab491da733f60a51075681'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '089293a5145649b0917e004cf3c5c164'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_NO_COVERAGE_ACTIVE_FORM'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '08c910bec1cf42d8905b56c444885d3c'
                        key: {
                            sys_ui_section: {
                                id: 'fc69a09449c249c9bb4ba79aee4cb0ae'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: '08ccb91feab64e3eb6915a5c7e9c7650'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'self_supervisor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0908655b60cb454a8f629c9f4b95afec'
                        key: {
                            sys_ui_section: {
                                id: 'afb3c88c0c614d8b82379d384cadd25c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_documentation'
                        id: '0972f3fdb7fc4f81afd0bafda9f5af9d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_material_context_change'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '09a28f3cb02e4974acb5d032e24cf04a'
                        key: {
                            sys_ui_section: {
                                id: '99f74cdfb64540628dbd1dd538a62be3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: '09cfba90f3e8465e8b45ba4de9821df4'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09ef4f6e87514be9b53629b24bdd330c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_reminder_2_days'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a3d023b2e5a466db9212d641e0e39c9'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a5b45fece944a9f959ce71e35daacf3'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signature_at'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '0aa9e5e7833e07104f5193a6feaad359'
                        deleted: true
                        key: {
                            model: '73105d6b833a07104f5193a6feaad363'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0ab3f82d168d426a84f20ba5b4b9f672'
                        deleted: false
                        key: {
                            field: 'disposition'
                            table: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            id: 'e79a056ad0a142149e8f76ed5febec10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b80d6de257e4dfe9dfd20da616e6170'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b9aa6780aa24bb2afdae9c5ac0ddf29'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b9bf81c75c740a5b44e53123aeb12a6'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'signing_started'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0bcf10b67f9d4a9da6dd466f3d2ac297'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_CONFIG'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0c48996fe97245c1889800d80d313473'
                        key: {
                            sys_security_acl: 'f737e44c7cea4ac09126987eef4de7f2'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0c5d46ba1bee4a9287ec081a90f58b42'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c5efbded5a64cfbb2746bd32a032c95'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supersedes_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c92981c3fc044caaf05d38a585d6ef1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_corrected_by'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0cfddaded5cc4a27b0e5663de2e02e67'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4828d73f25a54d599d933367f9e3fe31'
                            name: 'x_2166123_rob_auth_operations_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0df6a9296c5243b1ad469882e613413a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e1e3b88f203426aa4c4c61d50ef72df'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_renewal_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e7c86eeb1bd46ce865a5aa68d4bf840'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0e8ab23394f54ffb8fa2139563dadac5'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: '0e938b230c184d3e88026241b31133e3'
                        key: {
                            sys_security_acl: '1db136d159404d4e9c2be52807114150'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f3ee36002ff447ebd24db9a84434977'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_covered_access'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f4fbe635679455f89f8e8051131a690'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f63eac8721b4756832092330e85d7fb'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0fa0d0bb06c6498a87d5f05839e7a6c7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0fc3400038b6477c81687579947deb1b'
                        key: {
                            sys_security_acl: '15886338e08d450ca75c177057d86403'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '10684afe3f574942af20791b4aa6562f'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'exception_review'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '111ba6bec6e249a39181492a86b7f51e'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'waived'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '117fe07b8d924e8686517c5ff1d6fa5b'
                        key: {
                            sys_ui_section: {
                                id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: '11806f31497945009c9b8d615b57534a'
                        key: {
                            sys_security_acl: '1e7a2974c62742c2b451a77bfc237727'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '118968d70ae04b88af1b60aff54ae4a8'
                        key: {
                            sys_ui_section: {
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_dictionary'
                        id: '11be19f18f59470aabfca38d0177e427'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '11e7f6a783f647104f5193a6feaad37a'
                        deleted: true
                        key: {
                            model: '89e7f6a783f647104f5193a6feaad35f'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '120c87bff2254b32a068eb113282de6a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_renewal_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1229ed17c1a64dd88942b9b3c8d2c7ba'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12397a46fd4743eb84c547f081f38075'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'authorized_end_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '123a06714c884e589ece7f9844f8f007'
                        key: {
                            sys_ui_section: {
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '128b73c7bf474de2ad0d089256293699'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_processing_blocked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1351afe91d2e4a689b16e8f60e2f1d14'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'evaluated_authorization'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1358a42045d4495aaea9a61b7ac3bda1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'sort_order'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1379fa4bb78b4b9984a6bf88ddaca8b0'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_organization'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '138b1961cb5a4833bac1761a2b6e5934'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13b3dabe0e6a4b87ac80a32f3b7cb7b6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_access_items'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13e4d09e9f4c40ae8f7d278d43f01c8b'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'subject_person'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '13e645a89b77449c859e78ee08f1b8c0'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_choice'
                        id: '1419b28e71214096aaa08ef4d4d5c397'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_POSITION_ROLE_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '14572050f9f54d3f9a9897d7e5f7c353'
                        key: {
                            sys_ui_section: {
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '14b393e49c3a4e9199477e6daf70a8bf'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14fefb10cb2642d8b0c4b24c1d719cd7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_signer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '15539d468d1d46a4a7962a4c55ba12eb'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_operations_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15730decbc6b4a8cb315e0eff502d225'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '15be68e366fb4b43a137842c24c9332e'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16400636a3e14439aa509d67423965db'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_access_end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1645f02c03cd482ea2b869499545b00d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'source_hrsd_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1673382b1b004420a3054f8eb23fcd1a'
                        key: {
                            sys_security_acl: '0a0cc436b7fb44c681228a0b73582354'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '168b757265514d63994c1ab9f7b91e91'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '16efacf10095409fbe6a74c7a15fcaa1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '172a1954bbb74ac8b3a262bece89c21f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_OBSOLETE_VERSION'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '173dbc1885e44d92bf7d1adcc22cc95c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requires_supervisor_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17679cb3ec684ab1a3298fffca548bb2'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '176833bf4655459fb8b532d797064d26'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '179e25fa43b141658b580fff7e1c85a5'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'organization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17a3626269a142faa1b51e913c01a909'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_SUPERVISOR'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '184f1b2367944ad498a881a423f9bf0b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '18583c189a5b4cf78e27a304f1128e81'
                        key: {
                            sys_ui_section: {
                                id: '4f6271d51dcb464f94c1038aca3f5c6c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
                                    caption: 'Profile and Context Policy'
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
                        id: '187bfa7a72df4a7c9d213d4d1a364ba0'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18a093fa803c49b0931431ed71eef788'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_operations_manager'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18e63e35fc7e48cbad4c4e7d0e02193b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'staffing_fulfillment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19418c48c3a14b0fbe99eb3bdd852556'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_signer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1971152fb88e414d902b4de6cfba8876'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'none'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19bdef9504c84a9dbd53ba941943e3f7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19c2b7f83f6643aeaf389259976276e1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19e7f6a783f647104f5193a6feaad375'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_89e7f6a783f647104f5193a6feaad35f'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a5e527e287d4dafb284086a4331ea0e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_ACCESS_ITEM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '1a68d0c3a6fb4a1da2e73b1f861ee2bc'
                        key: {
                            sys_ui_form: {
                                id: 'eb044242f2cd4ceb9627842ee9298edd'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '1af075427418433dbc9de60ff9817c3d'
                        key: {
                            sys_security_acl: '1bcf96a1bc164e0a8eb6461afc9aa67f'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1b213864a3d743748adf5814b92cdbdf'
                        key: {
                            sys_security_acl: '47d103acc9bf4dc39e9789994fb03818'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b2952f6b9a04d02b44a3631e8aab242'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_PRIOR_REVOKED'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b5105e689cb413085d7ff5e67f20dcc'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_corrected_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b62ce7401854d2584b65ae2dce071af'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_PRIOR_FORM'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b925f7ea67a48bba535d1619bbddca0'
                        key: {
                            sys_ui_section: {
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_dictionary'
                        id: '1bbfeab216834fae92ec16009feebece'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_formally_waived'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bd988d7b2f94348a829d803fd7e2874'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_signature_complete'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1bf31b3a04df4e17bb57c4c9ae5efa2c'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_choice'
                        id: '1bfd4e09d86447378c90c26d188664de'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c641f670fcb4715b678ff907de99759'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1c6828d1a8554d489b514c5664c5a64a'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0668d48652614fe6b1c5846140a341c6'
                            name: 'x_2166123_rob_auth_business_justification'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1ccb9e0887324da8b810fc49f1403300'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '1cf6fecb7739425ba243945408e36b92'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1d0953ec1f3745639805ae29f3f06bc0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1de7f6a783f647104f5193a6feaad399'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_89e7f6a783f647104f5193a6feaad35f'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1e21a876597540abac8426bc22f55ee9'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e2e2af6f4f044b380b73bda9e3ca39d'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e57ee4c31bf4422bd3c872c75764c98'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e894de344234ee39e84e1789c5f825b'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ec6cb7bbd6b44b998df59c087f70f0b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_PRIOR_FORM'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1eed0432655b4efd847455c58a97fe2f'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f06cda46dd14d799eabb9ea3b021d59'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_proposed_expiration_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f1507783a60499c9e309b8ccffa7229'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'usa_staffing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1f1512bf3cb04246acd375e6a7a1238c'
                        key: {
                            sys_security_acl: 'b4759be67ad54dd9a5dc712141caa0ed'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1f65fce35d384e888eb835d9ccc9ec73'
                        key: {
                            sys_security_acl: '0a0cc436b7fb44c681228a0b73582354'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1fa8cbf6d235462dbbdb0a6a790b5ee4'
                        key: {
                            field: 'reason'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '20157ed6935a413ba6bc628b7ec61dfd'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2084a6a2b98c4b1ea3d731ca99393f7a'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'workforce_profile_chart'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '20c5d9cd269342bc8e69f1d7ba81911e'
                        key: {
                            sys_security_acl: 'bf2bb4ce2d8a44eda20348b701490076'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '20f39ca927eb484eb9f5a9a7f5e5a9ad'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_completion_timestamp'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2117d558665d4fdcb11d33ec183d2807'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2138d6d3226b45089449db3d6c943969'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_JUSTIFICATION_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2155e30a4cd446aca5c6f1843068e2ae'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'rob_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2180fcbca6594a7093f0f8915e6efea5'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'reuse'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '218c9bbe3ba64376b22861e628a88585'
                        key: {
                            sys_ui_section: {
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: '225801d252b54892be2ad67f278084f4'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2262b224ccb24204bf34becd987d3205'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22643f24055e480083ff36cca6483740'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'lapsed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '226a27e3e021461d9aa011ca2d51d870'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_organization'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22b6512cdf044340b7c2bd9fe7367681'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'position_title'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22b7aab660524b67ae1d9082a3fa00aa'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_supervisor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '237ba789737a498e943028fc281bc208'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '238e630a5e714ac6850bfce446dde287'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23a1309e0bb14956bf29420d462e6e9b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_correction_requested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '23d4b6abd76b4c819450756c48112b01'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice_set'
                        id: '242f5d6536ec43bcb32cd86a1a835884'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_outcome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '244cd8e6836d4a5598ad06e13c48fcf3'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'not_applicable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '245e748e1ce54e9f95a24138f1810378'
                        key: {
                            sys_ui_section: {
                                id: 'e4a6178e2e6e47e09652202a6a156c40'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '2473bdb294484ba1a967af7633021680'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_outcome'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '248172fc7f464867b276d759ba0c8a49'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24c328ac3b08429682a2701c8322668d'
                        key: {
                            name: 'var__m_sys_hub_action_input_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'case_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24fe15df43b54bb8945fecd2d5a4396d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'fpps_wtts'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '25855d2940354bf5972e68aab46ac88f'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_PARTIAL_COVERAGE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25ab606a7c3241849798f35f517994dd'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'staffing_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '25bc99aa997d46fd812004caf325f05e'
                        key: {
                            sys_ui_form: {
                                id: '5967f53115714221a544ff26c46bd18d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: '25e251c3be204346abc41affe62e90bd'
                        key: {
                            sys_security_acl: '4a80d472bd924917ae37516b5d62fb68'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '26011a9a39664322a75ef343684ba43d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '260531de18c74db986eae26583b482ae'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2612066a38734a6f98cf94f0bcbed946'
                        key: {
                            sys_security_acl: '1c3cd45e105d4fc18b58af0dbc501018'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '264f11bbc5674f2fb7c9a02ef91a85f8'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_processing_blocked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '268078c861704ec9a7746b3bbebf383e'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_ACCESS_ITEM'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '268d67b540b340389edb7be9c1e1170b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
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
                        id: '26941cf43016493a8a1d3f713a14697c'
                        key: {
                            sys_ui_section: {
                                id: '64fc69a5d91f4646887f4a1bd9f36c51'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '269d528443e94920ab69f09a81cfe290'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26a9febcd12044fea0862888bd6ad99a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_waiver_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26d446ebfe3546c9a66ac02927cd59bb'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '272526787c2144fabdf94fc3ee3382ed'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27580d2703ea45e69e56c6a65af7e3bb'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'auditor_investigator'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27aac00d2ba44fc3ac108596df306fd2'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '281a0263b28640fcbe0ee110d9617908'
                        key: {
                            name: 'x_2166123_rob_auth.rob_admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '282bb7fc305644f6b7e7d237f883f25e'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_waived_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '284f64d105834d0c910f5e1a09bc5395'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_operations_manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28ba9dae77ec4ed880777b5d2b277e50'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_proposed_expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28d3ffbc8eff4741808b1017b5b6e632'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'reuse'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '28ec744c546746d8bc9d211cf97b3827'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
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
                        id: '28efbe4cf6c1451684e807120bab63c8'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '28f9edf6eec249958b486e36d903e63d'
                        key: {
                            question: {
                                id: '6e9aaf320630411b84246323a0f8fdec'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '0668d48652614fe6b1c5846140a341c6'
                                    name: 'x_2166123_rob_auth_employment_type'
                                }
                            }
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2925179c7dfd466096e4186e3595ec80'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2938d29ee6074778bd78f5e2345240f3'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '294206ce7aeb4e20820362734536b88d'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'lapsed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '294e14a2a07646b9976e9c37b52c9122'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'approved_organization_root'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29557ff7cfb84469a000cd5a47b16843'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_analytics_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2986e970b094464baac9fcc496585e35'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a1933838ce94f6492d779206c967b60'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_notification_copy_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2a9871ef3e7944c5855a2757899cbc89'
                        key: {
                            sys_security_acl: '1e6c29008e5849f59ec934760247ec83'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2abe5e04dbdc40cdb0ad498d684bba97'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2adfc8d880a6400bb758f1b7ff5d9bea'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2aed51947485435e8439d19e852baab7'
                        key: {
                            sys_security_acl: '5a4f701faa1c4503a161923d3238f1e8'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b01640c051044fd848eda234320d422'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_ui_element'
                        id: '2b242f9cbd75437d84377a25ee5c7e71'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '2b7254445106475585a5f01d9cf27286'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_END_DATE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b734728f6ec4ceb804e4c25ffb887e1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'allow_sys_user_title_fallback'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2b86f1204f1849f2b24f7e550fbf0a89'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_supervisor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2b9ea71a5df845d19417bddc413a5391'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c2022e8210b4c74a5c0722ebdbd555a'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'staffing_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '2c8890bb49904033a7e56583614bc697'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '2ce8cda2d9694559a8f2e2df3f394b6d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'mid_cycle_grace_window_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2d34c3e593d54a3c8c741a41e3fc2003'
                        key: {
                            sys_security_acl: 'e52efcc50bea4d9ab8d21d5d7deba291'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d7db94d479b41abb701c46344549438'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_CURRENT_FORM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2db4de64e17a447bb0dfd1187faf915b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2dd9174fc8f246c89924198e7c021d2c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '2e15fd6a30564a57b547427af53cd7f1'
                        key: {
                            sys_ui_form: {
                                id: '5967f53115714221a544ff26c46bd18d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                                id: '1bf31b3a04df4e17bb57c4c9ae5efa2c'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_dictionary'
                        id: '2e1a10cd34ff419699b885b334207419'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'mid_cycle_grace_window_days'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2e52ec72b799449c8bdc21f186d4b9ba'
                        key: {
                            sys_security_acl: 'cff35cef921a45a6bb4527ab18dad09d'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2e5963891d4545d9a984ffec8eecdf5b'
                        key: {
                            sys_security_acl: '5ae2368c6e4641c786ec922bdd8210e4'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2e96ee65c2184c078ce4db02fdaae0a3'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
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
                        id: '2ea9dd5097514215b1c09ee67212a018'
                        key: {
                            sys_ui_section: {
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '2f7d5ec366b449ea828dec6903c637fa'
                        key: {
                            sys_ui_section: {
                                id: 'e4a6178e2e6e47e09652202a6a156c40'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '2f813b3d8a6c4ea5a9444fe07b43ee8b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_uncovered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2fc3dc0a6c614f3db34069dd3ef682fd'
                        key: {
                            sys_security_acl: 'cea8d4750dd04e2183af8bbf905eb5d9'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '30bb939ee62442a7809d1633bf00c554'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0668d48652614fe6b1c5846140a341c6'
                            name: 'x_2166123_rob_auth_access_end_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '31301e961b0541f49c0510305842f977'
                        key: {
                            sys_ui_section: {
                                id: 'e44ec92c126346a09c188c5b34cba08d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '3144f396fdd948dc89b116b9c845d9b4'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '314514d03675481e88398dad54377f00'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '315b9ca39b234382b0e2f41382618bcb'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_correction_requested'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3170a934c13a41ca8e491739a10e6176'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_REQUIRED_DATA'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31fdf0529c904bbdaf8fe1b88ddac73b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32b6b411e1ae477aa1a3ca09625e334a'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '32c2366ade754ea38fe2a73ed7629714'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'not_applicable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '32cc3fdf7037409bb8cd9ff16513c4cd'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '32facdde302e4773b1670a334319cc80'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '33187412743742218526eb628cd1c567'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'operations_manager_task_due_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3320ca74ef8a49b994d8a92d9d9765c8'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'provisioning_completed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3330502475ee48f4becc52a704ea9c85'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_material_context_change'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '33f98a37b121493c810aedf240035149'
                        key: {
                            sys_security_acl: 'c9510b8f2de44c07b237be4b2d6be8e5'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '343706b3f0064f738ef21b19cf5cb115'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '345fe3f2e58c4c1585ff2da05cd9d9e2'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_POSITION_ROLE_CHANGE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3493f427368e42b9b8ea991abeca067e'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_CURRENT_FORM'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3495bf5d1ab2426581df46fbf82a732b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                            value: 'amendment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34b26bc0fb984bff93d97d5e6634edf4'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: 'reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '353845c2809c44bf80bb10d33d362f05'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_required_access_end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '35b2c31a0b5147efa32787463ae018d6'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'failed_exception'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '35b7bc6a636f423ab942c67f11e55037'
                        key: {
                            sys_security_acl: '6b49da8dac2d43b890a7cbfaa0c42024'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '35c484b55f51456393d682c5e4e4fcd2'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '3621419619ed49da93aa4e64399ee733'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_reminder_1_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '363cfb8196e04770b29f716203631b87'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_required_access_end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '369425b8c95f42088dd215a3afdd790a'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_signature_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '371e6308e0a448a984268f4b7973c0b1'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'created_authorization'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '3722327a387744aa978b8d0cba0305c9'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: 'signing_started'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '386bd456619b48e4bffff85e569a49b5'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38980ef4e70f444a937ed980667a169f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38a74b0692e541d29d76a4d516dd6ea7'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'oas'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38f1ddaafdb44a25b6f4a71f425d3c33'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'expired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3946256e6bca49f896e7389347f86065'
                        key: {
                            sys_ui_section: {
                                id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_choice'
                        id: '39478dbb160649ac8c2d7ca1c9879121'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'analytics'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '39c79bb358d2413c93c57252165b9fcc'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_documentation'
                        id: '39c91613b0a74a98babf19725145016b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_1_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a123ddf3a834680accbaff38b32630f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_reminder_2_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a1d9897104442f49a62441a2e99da72'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signature_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a1ea791f2394487bef8c807d7b83bc8'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_JUSTIFICATION_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a392b8292184af3bba71b7ebb115d51'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'disposition'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a462ae6385f43568698d3bc78f4639c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_REQUIRED_DATA'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b00fa5aeea64504810a9af8b849ddfd'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'obsolete_version'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b8e2bae40a64ad9abdca3a8eec4c363'
                        key: {
                            sys_security_acl: 'ad77cf6e24804b56bc24dd091a7f8eaf'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b9d435f0ef54928aac0aba7a0bc939c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'lapsed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '3bb1ead0046e4fa1a1069393706a4323'
                        key: {
                            sys_ui_form: {
                                id: 'eb044242f2cd4ceb9627842ee9298edd'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                                id: '4f6271d51dcb464f94c1038aca3f5c6c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
                                    caption: 'Profile and Context Policy'
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
                        id: '3c04367b6b094dea9f48230e3eebf1a5'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'pending_fulfillment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3c6dedae0bdb4c3896d2f7ef2dae244c'
                        key: {
                            sys_ui_section: {
                                id: 'f380fa7d18b74d82ab9b5a209214415b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: '3ca4e351635545bbbea0ca7deb5a003c'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cb0a26ed19c4bb590826fd157c9ecba'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ce1b069e3534d07b0baa4c6ebafa8d1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'current_accepted_form_version'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3d36b8aba138420b87b3d24b1247aac7'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'auditor_investigator'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3d766db2dd4947cfa21c72e579f481d0'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3d7b867b50aa437d82b7dcbb6d7f7b04'
                        key: {
                            sys_security_acl: '4cb7930da13d465e84311bbba6f8222a'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3dd8070375d04370bb814fa26c12120f'
                        key: {
                            question: {
                                id: '6e9aaf320630411b84246323a0f8fdec'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '0668d48652614fe6b1c5846140a341c6'
                                    name: 'x_2166123_rob_auth_employment_type'
                                }
                            }
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3e239c48fbe447f88c7e93b76407fd7a'
                        key: {
                            sys_security_acl: '2d864607312a4070aa023c8f012c5f24'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e40b44879864e40a4264d6297ba649b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_cycle_identifier'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e62d5907a1a4d53b757791654f4342e'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ebdb72931d340868cf229c42e064138'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'pending_employee_signature'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ec62970420e47f98cd4a160a8634c70'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_item_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ed3d2423cc24279ab1642d2f4f8a787'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_supervisor'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '3ed82483ee9a4908a8beee4427996b48'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_auth_detail'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3efea44bfa2844a5ac3f5abd94800f21'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_signature_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f049093fc414374b6e24c8ad72b509e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'final_pdf_attachment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3f198e1fb5d742b2a1bd39292b503610'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f23b6d180f4407c8c71a723c30ac838'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'business_justification_snapshot'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3f467f81f077436d9d4031c9fd3d9a28'
                        deleted: false
                        key: {
                            field: 'authorization_sys_id'
                            table: 'var__m_sys_hub_step_ext_input_f184a0bcb66743e3ba4dd6d74b18dac7'
                            id: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3faf67d174d142aebe31e51ae01cf3ea'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3fc9ea35fe1d48199f63ce0f33c9cff7'
                        key: {
                            sys_security_acl: '54a1c872608940d4a982d53f5d854156'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4021a265bff646129ddaccc97c8dc0d6'
                        key: {
                            sys_security_acl: 'd6a196df1a8d4eb884eec372d261accb'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '404063ba39584bef8a5f952d7de6f636'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'obsolete_version'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '405da800c1c043a698de7e0686af7343'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requires_employee_signature'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4083de316912438391158ccd87ab346c'
                        key: {
                            sys_security_acl: 'd0bf4f521fec4a669aa93ed0f191e00d'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '40ced6eba8594cd1a71bfd5d8d3f04ed'
                        key: {
                            sys_ui_form: {
                                id: 'eb044242f2cd4ceb9627842ee9298edd'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                                id: '99f74cdfb64540628dbd1dd538a62be3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: '40f03456dcf34d13bf0b6214d1910996'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_POSITION_ROLE_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '40f1f77bd48845fe8b67fcfc632ac907'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requested_items'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4105fce8b46147538ef92be07f4bad86'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41a2a126313d447f87c338a10b19fad6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_corrected_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '41bbedef73754421be20b7f950ca45f4'
                        key: {
                            sys_security_acl: 'b283fc03860746ebaa609afe81139e62'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '41ed75eed0e746fe9cc180d9ac466ee3'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '42336d10a1e54030baea791af23b34e0'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4291ad50a30d4d2fb0133cb6b695c009'
                        key: {
                            sys_security_acl: 'fd404ffbfc8442c69c73a04c268c0453'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '4292c5d49f624feca9e4f43e170b6dae'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_rob_access'
                            col_name_string: 'access_item_code'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '429c350e4d084ee2878d8ffdc49ef7cf'
                        key: {
                            sys_ui_section: {
                                id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_documentation'
                        id: '42ecf9472fe348988b3eba8b15a7dc0f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_evaluated_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42f426eaa8af4ec7962845c53b778851'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_operations_manager'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '430361dec26448f0bad6ada952ad9796'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '4319c4380cc84462af88d8c6416cac82'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: '64fc69a5d91f4646887f4a1bd9f36c51'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '434b57fb2d4b43ba804a50f568a882e1'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_DUPLICATE_OPEN_CASE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43661a1247674d67bd3dee81feb116cd'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'access_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43a962671ca94255bbf452e7ce285212'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_covered_access'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43e1879853304231bca3e2a9b8ebe9ee'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'decision_evidence'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '43ea348a24154dea8149420d8ab14d8f'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'amendment'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '440f477a8ba24c4a919d3ecb7df635bf'
                        key: {
                            sys_security_acl: 'd6a196df1a8d4eb884eec372d261accb'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4418976742974aac9c756f25e1119cfd'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'operations_manager_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '444c7da484744dd8acf57bc5f72bb2cc'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: '448fff75b59342d68ebf5611e00679bd'
                        key: {
                            sys_security_acl: '798431b397ef4ea1a454de09bd0b1219'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44dc75a8556441e888fe17d49e327498'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '450e2318700c49bbbdbe92e809541ba7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_AMBIGUOUS_MATERIAL_CHANGE'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '450f52d357124004a1dc9665e0ac2eb4'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requires_supervisor_signature'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '451eb3f86b654cdeb24de1156b81558c'
                        deleted: false
                        key: {
                            field: 'case_sys_id'
                            table: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            id: 'e79a056ad0a142149e8f76ed5febec10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '45291b4c26874c879e17d966ce984d23'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'eopf'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4532b9e3f609417fbc52cba01d8d684f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'subject_person'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45361b13130a4e76b4554cd564435d46'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_related_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '457dd362259745d7bdda131ba22b7a6b'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '458e4422d7e74c88b37b8b51410b763b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45d1e9d0787c4e5aba41b385bfda039d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '45ff5c994240473ebf61d429bbf8e221'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '463d396ac5df4294bfc8ea1f549496c9'
                        key: {
                            sys_security_acl: '35e0803bb75c40fd9c13b968fe055932'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '463e8820eb1842098382f473714b8deb'
                        key: {
                            sys_ui_section: {
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_documentation'
                        id: '4678cbf48d4848f1915da1877fbf1470'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_3_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '467f91561a97491bb15ab05e5b38db3f'
                        key: {
                            sys_ui_section: {
                                id: '64fc69a5d91f4646887f4a1bd9f36c51'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '46e8bd30536440df8364558ebe07b819'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'business_justification_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46f5a95aa99b40ceb9b8234b1190bdbe'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_NO_COVERAGE_ACTIVE_FORM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '471257325563497fb1d40832c552f450'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_outcome'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '471377fea3c547f7938edc99bc02a4e1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_prior_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47335a03a19f4ce0b691a69bdb075c3b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '473e82f27e63451ea47f13f3e40df992'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '4746c3fbad38451bb7508a3a95ba59df'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'self_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4798cbba889a45eeb2efa94b57156905'
                        key: {
                            sys_ui_section: {
                                id: 'f380fa7d18b74d82ab9b5a209214415b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: '47ea38545e324a1699fec49264c35839'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_ACCESS_ITEM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '47fa7d571f0247de8a4f37e57c4fa13a'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'pending_fulfillment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48185ab627d740309d833eea73986199'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'operations_manager_task_due_days'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48860098bb754c16bc8b621bed41eb4d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'allow_sys_user_title_fallback'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4921f8035d794397b8feca07ddac8789'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '493411d27fe8494ab0463c8af8e498ce'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'eopf'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4a23f3ef160a488898c2a994c2fa1831'
                        key: {
                            sys_security_acl: '42bcd87d3dc24083b06edea9dd8e3d75'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a4c3f734c7b4c93807062be136d0550'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_organization'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a512d2ca10c4d138e0848710e747fa6'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4a55b9ba8fd04bb8a9cc9413fc41dae8'
                        key: {
                            sys_ui_section: {
                                id: '268d67b540b340389edb7be9c1e1170b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '4a7b633b766e40ecaef2e0e5f642c55e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'superseded'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4aa9e5e7833e07104f5193a6feaad348'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_73105d6b833a07104f5193a6feaad363'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4ae11681a6ea467b898af6a2f59c5079'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'human_capital_reports'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4ae6a85464b049cea72d3b33e74dd67f'
                        key: {
                            sys_ui_section: {
                                id: 'e4a6178e2e6e47e09652202a6a156c40'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: '4b45cc61f7744a9298611a26729cf739'
                        key: {
                            sys_security_acl: '607d06466f54458f902d03edf3a51a0b'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4b570471b3774dcfa004898545e914df'
                        deleted: false
                        key: {
                            document_key: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '4c190c5babfe4059bea5ceffe7bb5b83'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_element_mapping'
                        id: '4c204074858248f3b384e213835699de'
                        deleted: false
                        key: {
                            field: 'authorization_sys_id'
                            table: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            id: 'e79a056ad0a142149e8f76ed5febec10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c2313a6b9194f8cbb18bd6291dcdb76'
                        key: {
                            sys_ui_section: {
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '4c27257ee1cb4e7dbae40f4d1bbe614c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'obsolete_version'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4c429b332b314245bb0c859df6621150'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d797d2775644c54b9b92a505aa0d8da'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_correction_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '4d92d69f156540819f79ac262dde931a'
                        key: {
                            sys_ui_form: {
                                id: '4e109fe180ee4a8d9d7df0da8d34b862'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                                id: 'afb3c88c0c614d8b82379d384cadd25c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_dictionary'
                        id: '4dc2a8e2612e4a439b4b5edec8e85668'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_exception_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4de4922e79bb4f32875bbf0063c2ef95'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'revoked'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4de7b2fada2d486a8af289517cbd2744'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'eopf'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4dee6b2ca7cf456dae174b82d2cdf112'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_ui_form'
                        id: '4e109fe180ee4a8d9d7df0da8d34b862'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
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
                        id: '4e1ccbf5f1054acea0d87075d6b8699f'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_EXPIRED'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e1ff529019549d7b02b9665e4c30438'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_evaluated_authorization'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4e322edb51724900a8a9379d266c7409'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e3cc7cb7d2c4053abacb23db25f1b9e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e4a4c31686e4926b5295a2aaab7791c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'final_authorization_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f3ae275b8014c2c9f567b35cda9c376'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'reuse'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4f3b34c046ee4b8891cff1fca888e712'
                        key: {
                            sys_security_acl: '9bc94cd67f9945c3b99fb452dcb07dbb'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4f6271d51dcb464f94c1038aca3f5c6c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            caption: 'Profile and Context Policy'
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
                        id: '4f6283ad49c444d5bccb86ddc24ca7e4'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f6566e61ae24e21a7c2d41a2cc0e910'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_staffing_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4f8ae387a03649cb9706f6641601489a'
                        key: {
                            sys_security_acl: '76df33e61ba944ada33ee0510256cdb7'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f9751861a2442afb308656c3f4f21ab'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_prior_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fb7b890fb38406d8d2c81da0329ba6b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4fcd6da447344fc18d68efcec5c71291'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REUSE_FULLY_COVERED'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '502f11beac7f4489befc39ca492d1a14'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5040c36a5518441093baa18e6d89e531'
                        key: {
                            sys_ui_section: {
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_documentation'
                        id: '510e4df5e6174949a59bd6fecf3b934c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5130384115534b2ab082c2bff5f2c917'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'subject_person'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51362b2c7f2147458f243d334806d2ab'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requires_supervisor_approval'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '516b93f0b99048c8ad607d2b43a36491'
                        deleted: false
                        key: {
                            model: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '51722c1fc99645c9a3565f2deeabe29c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'exception'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '517cae16bc49483398b3c7370433e352'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_item_code'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '51b9f4a0f31a4cf385539bce993234e6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_operations_manager'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '51bd6464749f4413ac13308f33f70ccc'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_CONFLICTING_ACTIVE_FORMS'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '51e7f6a783f647104f5193a6feaad362'
                        deleted: true
                        key: {
                            model: '89e7f6a783f647104f5193a6feaad35f'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '52105785c73b4e1c82f8f0178d859829'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'usa_staffing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '521ec27663b943a38a6acddf3f225cf4'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '528a28f8ef354ae7aea872aa0a32b277'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_completion_evidence'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '52e866030a17427b90cc634a30849d42'
                        key: {
                            category: 'x_2166123_rob_auth_auth_detail'
                            prefix: 'ROBD'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '53aafb5e1b034117b0bec68f67a80123'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'other_time_limited'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53b3d586435440478526eafc1561be6f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53c648cc6e014908b745347bc4e041e9'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_fulfillment_gate_complete'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '541e131855504299836dcf6802857db2'
                        key: {
                            sys_security_acl: 'e1dc464af2f74d4d8627ce54c133b050'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5481f8fe6ca54d3ba0fd953cd3b668c6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_completion_evidence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '549a90c7bdb54ba29250adbee95cdc0e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'revoked'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '54a31fdb442344a4b47f56e81f11b4b2'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '55597b307549443b9babab08562901c6'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '55ad331bfeb94dc48618657620ddba48'
                        key: {
                            field: 'case_sys_id'
                            table: 'var__m_sys_hub_step_ext_input_d31c33c5712d42d385642b7248b94a9e'
                            id: 'd31c33c5712d42d385642b7248b94a9e'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '56a2c20bae0c4ff2bbe32647d56828dc'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_MULTIPLE_MATERIAL_CHANGES'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56b82cc945d74155aef2b873ebc1ec44'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_prior_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56c6322f51aa43f1b99fa44e8655ff26'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '56e0d6bc8ff44b36a7cbc0aa2e4de23e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'contractor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56ed2ecaf91540268fb1d4416e527a0e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '56f2f61841a44afcac85fbcc2211cb4c'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'not_required'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '56fa681a33d5498bb6be7b61b720f94c'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_supervisor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57228b23daa74fa18b422450845cd156'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57da9dd32ea84fd292b2e00de5136686'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'operations_manager_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '57e746fad19b405597746a2d4aed070a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'ipa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '57fa32a57bec4961bdf88fc0cadf4056'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_CONFLICTING_ACTIVE_FORMS'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57ff94a604dc451bb4d288e77e3de4e6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '582eb413b2d9434fae7454e6f842fa06'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '583fe5b78f154656b7a9d69793d46a49'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_corrected_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58567d50285d48efbf93a5c43f60cace'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signature_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5866f7c5da934d558936ee8b3a9ef39e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '58736d1c4f6d45b4b461954ab6a42508'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '58a992a6a8474a15a60698c07916f9b7'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '58be6fbe47b143ada97a4dc19566c5d2'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '58e3ebe4edef45ad8064260e4effe124'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '590b950775084450ab350c5fbad8d217'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '591308be350948cbbba73afa0aded399'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '594efee88dcd4781b086a689b66c4419'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5956a0840c15416ca9823bdf51f0a857'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '59646f5ee0354df282a7f16baef7fa30'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requires_employee_signature'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '5967f53115714221a544ff26c46bd18d'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
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
                        id: '59aeceb2d8bf493991c028dc3677633c'
                        key: {
                            sys_ui_section: {
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: '59cad62983744a3ab43a888e2dcf226f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'wpc'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59f64551dc4f4e9193a8469a16a1b01c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5a29f70cecf748b2bd0bc8408d5acbcb'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_review_required'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5a84784ae72e40368128d5cc2bcdecce'
                        key: {
                            sys_security_acl: 'fa67229aee854d3d949816c4d5588d71'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5a9976e911de4be5aa081e58918d9508'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'target_system_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a9d3732c1164733bae1b780a4224c43'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'wpc'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ae5e13c5b4049ce8dba7e5615cf105b'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'arm'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b2d2d59134b438b87b70f2081cbcbc7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5b4c41f82f754515a87fea30e021d225'
                        key: {
                            sys_security_acl: '5da84996edac40969246e7baf16c4940'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5be058d060cd4044a04d73e50df27e37'
                        key: {
                            document_key: 'd31c33c5712d42d385642b7248b94a9e'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5cbc6e12e04f4437beae55d827e077ba'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_MULTIPLE_MATERIAL_CHANGES'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cecf36c515741dfa3e429e349880b3d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d94c776a1e54d008e6bf7bd0092c1dd'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5d9982d5fa7648a9adbacefab14451c1'
                        key: {
                            sys_security_acl: 'baeb490e5f5f4416b12e78ef88890756'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '5db2b1bf33184fdc8a02288b57bfb5c0'
                        key: {
                            sys_ui_form: {
                                id: '4e109fe180ee4a8d9d7df0da8d34b862'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                                id: 'f380fa7d18b74d82ab9b5a209214415b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_dictionary'
                        id: '5dd253ef368e4688b0c98a0a54e02c55'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_waiver_reason'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5e52381b13b54aca94698bdb10439869'
                        key: {
                            sys_security_acl: 'd0bf4f521fec4a669aa93ed0f191e00d'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e57d40e61474ecc9a6f1e935f425ae7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_supervisor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5eaabaaf556743bc8210d2b1bab4a0f5'
                        key: {
                            sys_security_acl: '424d0cdca5964d5ab8af3b4dbc5e4e93'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ee1e3f635674720a3787b8d4a2a3b10'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'superseded'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5f4c722e63b04972828c74a0cbda5b91'
                        key: {
                            field: 'case_sys_id'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f8a7c93f8bc4492b24a0c059a577e58'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'analytics'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5fb4bdb52e1e46bb9f14266d06495375'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signature_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5fb830fa39424708ad52af5b0ba76089'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5fbb2ad90adf40bfbd71039cb381e17e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'ipa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5fbdbfcdd0fd4f1fb3839386c495d2fd'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'expired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '603d9b6515134e6d8ced756fa00fae51'
                        key: {
                            sys_ui_section: {
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_documentation'
                        id: '60726717dbbe4c4c9416bffc9b05e425'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'authorized_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '60d566f0ac424df890c515b9cc9c7411'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: '60dbb012bb0247ec9bd5bbc87d897bd9'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60f3d1357d5943179df27333278a29b1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61278c5e7fe34accaf18bc4a0096e40c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'renewal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '617af697d1f24c83ab8b6c4855ec460e'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61dbea5f613347a095370a695d8b7284'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                            value: 'renewal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '62366bf977054656859d0a501d7c814b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_LAPSED'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '623aee6d3c934d4ebea463ea3166d65e'
                        key: {
                            sys_ui_section: {
                                id: 'f380fa7d18b74d82ab9b5a209214415b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        id: '623c2f0ab7b3487a9466c82cf2d68db5'
                        key: {
                            sys_ui_section: {
                                id: '268d67b540b340389edb7be9c1e1170b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '62f82b25874f4f308ace4e6d12bc7b0b'
                        key: {
                            name: 'x_2166123_rob_auth.rob_staffing_fulfiller'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6301f2c7b32d46d5b969762cd54791f1'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63152d42a43d400b828ad5115477a7b4'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_operations_manager_escalation_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '631c1d34544c475d824413e44d35dcf5'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'fpps_wtts'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '639e4147ae944612bb33b0e2303ffa48'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '63ad9f79effe466eaaa9300523b2aa84'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '63ee65f9298945b39ec0cca8bb617d4c'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '648a5e845794476c8978d1ebe536164b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '64fc69a5d91f4646887f4a1bd9f36c51'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '6570e2a37a804ad0bea75f40385fc80c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '657240e6064542cb85b56656f391b12c'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '65c0f910d98c4681b0c4d24d7c16fd4a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_corrected_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65e34baae7e74475a415ce1e0d8fe713'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '65e353792ddb464a8dcd3f0a87b70a52'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_MULTIPLE_MATERIAL_CHANGES'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65f4866feeb94447aac5ae743e28c57f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'signed_pdf_generated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '660e847e025a4156ade6d7321c20536e'
                        key: {
                            name: 'x_2166123_rob_auth.rob_compliance_viewer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '66385dcdb165496da5aa982d214fb6ba'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6648ee9c9f0c4c5696bdc2a2725db695'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '669c344de6184acb88fb863c9ea3b12f'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'superseded'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '671219bba2f9401fb3882fdf765c2d7b'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '672ce5ed28ed484fbabd87293201d466'
                        key: {
                            sys_ui_section: {
                                id: '4f6271d51dcb464f94c1038aca3f5c6c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
                                    caption: 'Profile and Context Policy'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approved_organization_root'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '67864d74203044bfb8ecf492fb190d53'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_ui_element'
                        id: '67874c5520a04aad8bea65c984b5c45c'
                        key: {
                            sys_ui_section: {
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        id: '6790f3b162ed4ced9c8d45ef3a694d3b'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'analytics_task_required_snapshot'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '67cc8c7e4f7646d1be1af1b879c3f0f4'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_auth_detail'
                            col_name_string: 'rob_authorization_form,access_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67cfa6273c694128a3b43fe1190ff795'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_fulfillment_gate_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '67d0f6545e3f45229462242bf63a80ad'
                        key: {
                            field: 'disposition'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '67dcd109b8f84fdabdfb69f7fb706dbd'
                        key: {
                            sys_ui_section: {
                                id: '4f6271d51dcb464f94c1038aca3f5c6c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
                                    caption: 'Profile and Context Policy'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allow_sys_user_title_fallback'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6856908f579349bc9b1752960abc99df'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_PRIOR_REVOKED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '68c038a628f64c079687ed2c864f2ea9'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_position'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '68ff3d3ccb9e4763a7bd7d6f81091253'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: '6937c244ad23494abf09e0c30669ffea'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6967d56ddfb84b8289b3fc61181c678d'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'not_required'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69857cacf9e14418bdfc52e4e3ce33ca'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'arm'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a05b784bd594f249701c93b6fd3789b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'decision_evidence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a48b34fd2af4f4e960765a8e51f7674'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_required_access_end_date'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a7707e8049e45448c5848619c51b46e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ba7bef030964cf498bd30cb7d1bca00'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requested_items'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c17135c86bf43c89afcdecd6af52200'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_OM'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6cc2d608639e44248e8606a4233a481c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'superseded_by_authorization_form'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d6810763bf34dc4844273d9f2091617'
                        key: {
                            sys_ui_section: {
                                id: 'f380fa7d18b74d82ab9b5a209214415b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: '6d96582c72354c9b91382f4860c1cb65'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'expired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6dd26f5cb3a9428b81c3ccab11539b4c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4acc9ba7aa844badb17c49975df5ebb8'
                            name: 'x_2166123_rob_auth_requested_items'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6de96ade3a274f449ba49f079c5da7ba'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_corrected_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e1a380aca4c473cb041fcdedcf72bfd'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6e764cf887e64c9fbfe479ee45d3284e'
                        key: {
                            sys_security_acl: 'ba494884f77b4e3aa4a24d899809df44'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e8d71154ad4419db27e83083810c454'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_END_DATE'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6e9aaf320630411b84246323a0f8fdec'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0668d48652614fe6b1c5846140a341c6'
                            name: 'x_2166123_rob_auth_employment_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6e9bfe01e0d1430dbd634a0186e06a1b'
                        key: {
                            sys_ui_section: {
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: '6ea830a191ec43bf9a8cebd83f56a039'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_REQUIRED_DATA'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6ed2095db9894ca198c2f765c5aa5dbf'
                        key: {
                            sys_security_acl: '956d5be058094b83a80cd13bc0363bda'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6ee4fef7ace0418d96578f7a06d81a32'
                        key: {
                            sys_security_acl: 'd1ab65c61aa749f890240e9b70ee9622'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f5ab9cf279348058733bb14dc5a4f5d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_evaluated_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f819bfc2bd24225982a68a7738d7465'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7006765a6ed7470dbb983e1c5017d254'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_duplicate_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '701528c6408e4659bba1d19a53927fa0'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'disposition'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7046d3df48f2452aa1921c0a769067ed'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '70663b4f0cab4fae9b5a410f83466cb0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_DUPLICATE_OPEN_CASE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '706dc494e9ba4fdb9915bbe3bd9bd3ed'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_PARTIAL_COVERAGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '70b9e45393b3437390fc11c06a2a5782'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_hub_step_ext_output'
                        id: '70ed4e9be558462a8c770a8d22e14ebe'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'signing_started'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '710dca89b6d84e6f92be6c60c2e30de9'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'staffing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '71105f4f91b447db94117b04adebc7c1'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_ORG_CHANGE'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '716f5e6ae5254e15b9f5918bbefc1bef'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'created_detail_count'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '718c7e684f5943cfb27da54bc68f3806'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: '71a2317f2f2b427ca1476520dc0e08ac'
                        key: {
                            sys_security_acl: '1061d800cffd4eb7864ad16e1cd46d09'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '71b42168377244fc8e2537e5a2d9273c'
                        key: {
                            sys_ui_section: {
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_choice'
                        id: '71bd544001114f259dd235d4a9d88819'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '721454c3e65f46d48ffd259f7abc1e29'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '721bb630422548cabd0d8d76cf74180d'
                        deleted: false
                        key: {
                            document_key: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72d0d4fa3fa6492ea342b64e29a30ad1'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'ipa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72ef05850e4740f5a2215a3345d5065a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '730ffda38afa4f4f911e2f0eb1a39a5c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'agency_annual_recertification_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '732d26c1dd4141cc85e0a713d9bf6924'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_context'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7356fb2e936a4cffbea0da53f03d4cde'
                        key: {
                            question: {
                                id: '6e9aaf320630411b84246323a0f8fdec'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '0668d48652614fe6b1c5846140a341c6'
                                    name: 'x_2166123_rob_auth_employment_type'
                                }
                            }
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '737a7fc5ba3442179e5bec40e483ab01'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_waiver_date_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '73ec6d1b5179418bb8c749706ec91592'
                        key: {
                            sys_ui_section: {
                                id: '268d67b540b340389edb7be9c1e1170b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '741f360c8e7c45dabe0740a63fa34013'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_processing_blocked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74a1442c8eba48f1ab4b1a8806c3ba34'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'organization'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '74c8cdbcc85c4c5eab19c18bb678435c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74e3d22a0cf54504ace00c8842a6704f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74e74f7858084619a854d76cdff9b4b5'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '74f4598237b94f46a89ffe3b9cc4b6cb'
                        key: {
                            sys_security_acl: 'dfdf1b656ae54a02b0cd2b8b1b30c10c'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '753adf0f2c6541648973f43972009914'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_AMBIGUOUS_MATERIAL_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7540e3efd4e74dfbaf39c3b93f371aed'
                        key: {
                            sys_ui_section: {
                                id: 'afb3c88c0c614d8b82379d384cadd25c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_hub_flow_input'
                        id: '75a9a5e7833e07104f5193a6feaad3e3'
                        deleted: true
                        key: {
                            model: '73105d6b833a07104f5193a6feaad363'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75c19aa41b184456a4275febe686f556'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '763573fd11e44546be29ee70cac50814'
                        key: {
                            sys_security_acl: '2860e9b82125451d8d65f9f61108a7ff'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '769581f96870494e944a808ae1f64684'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_prior_organization_snapshot'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '76a8b1072fa34d1187bea735ebecae8b'
                        key: {
                            sys_ui_section: {
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_hub_step_ext_output'
                        id: '76c69640a3db431a92dd4a80ab1d6ea8'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76f17cbf01934aa8ab032650e612b1d8'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_MULTIPLE_MATERIAL_CHANGES'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '776f0ad2d75b4a2eb9e6a56e9fc2d55f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_uncovered_access'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '77920643b33e4398893ef80771d2aacd'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'federal_employee'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7826bfba52164b7c8c97ffdd86e1d9bf'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_OBSOLETE_VERSION'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '782900190f674bad9b131375d5e9a586'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '782a66874a6b47d49f27c19acaa1600c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_exception_review_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78455007681c42d9a5a1cebb4b547648'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7848f99656ef455ea32be1a30c94ada7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_POSITION_ROLE_CHANGE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7850d9c3255c48e9bbf90554fcea383f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'pending'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '78659d2805a048ac9dccf2a53fd17e34'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: '97358ecc3c7c46d7b5165a662b147c28'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '78697140dc7b48059f9a8f83771369d6'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'oas_datamart'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7870a6179f54452f98b95854f8863161'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_dictionary'
                        id: '78b10d3ebc2544bea1513220e3258186'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requested_items'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78b45f1e6d464a7b95906b27f946f745'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'audit_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78b9961466584a33b42ab35a1beb3932'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_ORG_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78e863b2dffd4f9c95959405fbc7973e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78eff12e0ffd4287aaec7c8709813740'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_evaluated_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '791fd95f05dd4c97814390516b619b79'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_CONFIG'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7931c4b1646949d285e13e08ba402562'
                        key: {
                            sys_ui_section: {
                                id: '99f74cdfb64540628dbd1dd538a62be3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_documentation'
                        id: '7946a44b1a5d47639535a60e84dda83c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '79af5de295664a05ab927bea0ad6c33f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0668d48652614fe6b1c5846140a341c6'
                            name: 'x_2166123_rob_auth_organization_fallback'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79b067f0fd484035b558a0ac3d75be0e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a07318147e64f08ba4bd1b5c8bcab8b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_END_DATE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a07d42a515f4121b5919b8a71c225e0'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a411204dbe04b0bb972b19476522baa'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a68381f434548659b6e430fe1437085'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ac9277f0fee459f89a0d40c93a48b88'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_analytics_assignment_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7aece0c4773b46249359ad02dc425099'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_LAPSED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b517391e24847fd9d3fc3d1aae86aec'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'profile_context_evidence'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7b92b092cdda49b59c5890c25de76805'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_outcome'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bc2cb7603ad4f13914d356d5d20b217'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bc6bf688a9d4131acbf898615424e11'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_proposed_expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7be0bad86bcf4d38b7104cf6baa3dc05'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_analytics_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7be81fbedb9a4e08ae6e57fb9774c9c5'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_PARTIAL_COVERAGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7be8a4d733ba4c8dbf53084316ff1f1e'
                        key: {
                            sys_ui_section: {
                                id: '4f6271d51dcb464f94c1038aca3f5c6c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
                                    caption: 'Profile and Context Policy'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approved_supervisors_group'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bf7f9d344534f80b6ab73ebeac32985'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '7c51ba25e411481d91ccaca2c616e8ea'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c7dc61c95844cb3a0416079f1959ae3'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cd8d9cc80e54cf589273a32bb071af5'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'fpps_wtts'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '7cd8ff1e33434aa4abfa2051089542ab'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '7cfc903a148440c880f8dadd89969e52'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'created_authorization'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d3132b735ed43319ad9307cda4f2a55'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_complete'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d4e8132949144738de53048e3ee8865'
                        key: {
                            sys_ui_section: {
                                id: '1bf31b3a04df4e17bb57c4c9ae5efa2c'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_index'
                        id: '7d904b463baf4ed382b7e453d69dfa5b'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_auth_detail'
                            col_name_string: 'rob_authorization_form,status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7deadd6d94934218841e55083087d86c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_signature_date_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7df40c79de3a424ab7f9b01fcdbd4f6d'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e2f747b2d64488784ede7fba5f8c416'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_outcome'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e40bcb995ce44db9f74db2deb975c13'
                        key: {
                            sys_ui_section: {
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '7e4a4a830b404928ac26d24258774ff2'
                        key: {
                            sys_security_acl: '607d06466f54458f902d03edf3a51a0b'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e96f03dcf054b7c94e14ba3288511c3'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '7ea70d36e45f4cf2907ed0091161d04a'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: 'disposition'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ee313d9ba204941ac17168e54f4f3da'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_duplicate_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7f0a0da4c30a406e809e8a74904cd504'
                        key: {
                            name: 'sn_hr_core_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f72c535620a49129e9af649814c19b6'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f99d06744f04af4a1a2194fbe28f56e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7fbfa85cce434359a4e01ef829e9e39e'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_rob_auth'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7fc10b6d2af9423fa787858e54fcbede'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'hr_system'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7fd477b46a5d418c9c264328453f6b4a'
                        key: {
                            sys_ui_section: {
                                id: 'afb3c88c0c614d8b82379d384cadd25c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: '7ff98c7a110a438c8aa901f323eeb214'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_CONFIG'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '802a194df14845d09e9422127b8a9283'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_ANNUAL_RECERTIFICATION'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '804621af1a2345759a17a0d1dd4730ef'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_context'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80815a78e9e246788ff07b406012f1b2'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'superseded'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80818551306040bd8d3bd243630dd20d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'pending_supervisor_approval_signature'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '809de87df9c74a44af745390b57510d0'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: 'signing_started'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81000202725541a7af70cf598c49c4d2'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'amendment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '810539d3073d41a48ee8687936dacae1'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_correction_requested'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '81089d181c5e4c3b9f9698e975f715ba'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8122e1f84797465caf04b05c35cc108d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'amendment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '8159dd2e4c5c489dafa39ecde33435e7'
                        key: {
                            sys_ui_form: {
                                id: '5967f53115714221a544ff26c46bd18d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                                id: 'c4b0dc826a8746bf8a0306d8ff456061'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: '816c27de39b04f4a89317539621ecc19'
                        key: {
                            sys_security_acl: 'baeb490e5f5f4416b12e78ef88890756'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '817bfcb5bbf548ed976eb70665fcbd43'
                        key: {
                            sys_ui_section: {
                                id: '64fc69a5d91f4646887f4a1bd9f36c51'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '81a70778a4554044a4fabac4d32531df'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: 'disposition'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81b80a54f9f546c7b1fd5fdf67ed9c55'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'final_authorization_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81f1bb291dce4eb1afef0db72136962f'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'hr_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8226b6f3a80341ed965f018a32a848f8'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '823dfd040fce4cb28957abcc6cdff680'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_uncovered_access'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8269daa9b6d049a49538a69a8052d12f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_required_access_end_date'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '827d101228b04eb99ed506f24c979366'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82a0ce8f87c9470b89f299ef528ff514'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_organization'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '82b60bfd829e472d8e78ac5b8ea1b114'
                        key: {
                            sys_security_acl: '5010f78d1c404c59a788975e43ff8637'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '831c6b0ac6b64a08b891cc4346f13af6'
                        key: {
                            sys_ui_section: {
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_ui_form_section'
                        id: '831fc9f9295f4c88b99dc1538476df22'
                        key: {
                            sys_ui_form: {
                                id: 'eb044242f2cd4ceb9627842ee9298edd'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: '8373b9be21a34975a1f1082c7b8a4035'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_NO_COVERAGE_ACTIVE_FORM'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '840376f065c040d6b31b7d2cb9f47eb7'
                        deleted: true
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8417fcc580364dcca241543d748f1caa'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '842ff97b878b44c9a572f9de7699c88e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '845645dad9df415bbaa4933de097b3d8'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_staffing_task'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8488d07cb1d3499fb18b19df18851150'
                        key: {
                            sys_ui_section: {
                                id: 'afb3c88c0c614d8b82379d384cadd25c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_ui_element'
                        id: '84a1db152f594dd1a4767fe5b510737f'
                        key: {
                            sys_ui_section: {
                                id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_documentation'
                        id: '85140fb81dd9484390a43a9ac8c9f900'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_cycle_identifier'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8531a7b5253b4cefbb22ccf2d974520b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_operations_manager'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '853d5edc1b594c9e9e5ab32bd41842c7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'none'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8588cff85fe0463a8e4737e076836255'
                        key: {
                            sys_ui_section: {
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '861ed05d57054888960a69487b498665'
                        key: {
                            sys_security_acl: '37926570d65e4dd499f8f9954b6f1b5f'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '86a9e5e7833e07104f5193a6feaad34e'
                        deleted: true
                        key: {
                            model: '73105d6b833a07104f5193a6feaad363'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '86bbdf3574404d8498414b4e20ce012c'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'mixed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86c4b414d7ae433099c3cc5769502611'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_provisioning_completed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '873273aeb53943848bd6a7f43b8c5ddf'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '874873c3212342ffa6157999624d8751'
                        key: {
                            sys_ui_section: {
                                id: '99f74cdfb64540628dbd1dd538a62be3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '87e845a65e3e4e3ab890a2f36f48e602'
                        key: {
                            sys_ui_section: {
                                id: '97358ecc3c7c46d7b5165a662b147c28'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '88462ad9daf74ea38b112e6d50fe7e53'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'oas'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '887c2c5bbbd84fb3a991383631ff468b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88a7c1c8eec144a59516bfcbf01b8b08'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_renewal_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '892f8f57300f4f7c89efded2d300e0ba'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'effective_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '893ad96b162c4b449c4cdcb1eb4102db'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'form_version'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '89d992fb1e504e0e87259cf016afa9a3'
                        key: {
                            sys_security_acl: '2a35094c2278417d9ad7759e766607ad'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a2ebe8bc67249d8abc4a116ffe0d3d6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_formally_waived'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8a4bf9e5f731408da60d483a9920fe85'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8a7f2a6280014481ae39de342efc0273'
                        key: {
                            field: 'created_detail_count'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8aaaab76b02d4c49a5bf33eed27372b4'
                        key: {
                            sys_ui_section: {
                                id: '268d67b540b340389edb7be9c1e1170b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_ui_element'
                        id: '8b237e5f8b264e5cb65b648c98e2d9c0'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '8b54ac5f293d44e5a5b8e3d82a97899e'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b92fa3e827b441e8114bfeec7153ebb'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'lapsed'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8bd0d628c51c41d59731bd440e13ef8d'
                        key: {
                            field: 'authorization_sys_id'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8bd64814748e4984b4da953efcdc7691'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_ACCESS_ITEM'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8c5587635a7a4efc84627107570000a8'
                        key: {
                            sys_ui_section: {
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: '8c7632280dc14c019b21538aefabdee3'
                        key: {
                            sys_security_acl: 'fd7c097b3585475dac272e8353e2a5e0'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c90d87bee5c4540b497f79425533293'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c99b662270745fb90dd7e233b23e21e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'business_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8cf88000fd044a7397da68783d370cd1'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'pending_employee_signature'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d0604cbf780431f8a57e3a41f47610e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_signature_date_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d3d487c8ee44b46bc40d07577158e6e'
                        key: {
                            sys_ui_section: {
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: '8d430461fd9848d7823076ce728a8f7e'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: '8d8d70f98041453eacae1ed4bc068cb5'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d9afa0434b0488489d3c86b91950ca1'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8dbbbefe824343e89e64634f75a90e44'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '8dcd09e1291441188e0ef79240c06b2b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'revocation_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8df9b58915114db7af3ef9039c9ae046'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_document_execution'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e3cc9a6909b4183ae1cfb065d9aaf7b'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e7b779e2ff84633a4e6e16b7bc7688a'
                        key: {
                            sys_ui_section: {
                                id: '268d67b540b340389edb7be9c1e1170b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '8e8e49615dfb4510adad28350268e1dd'
                        key: {
                            sys_security_acl: '62f8d6f7c17540cf93b1e7f2eb92fdc0'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8eb64f1ba1604386b8bfc187668dd931'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8ebde9e1e2dd47e881a5030c9b4212e8'
                        key: {
                            sys_ui_section: {
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '8f0a40ac3cfb4045aaeace5829fb88d8'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8f0e1b53e125444489e772e905f6d4e5'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_auth_detail'
                            col_name_string: 'source_hrsd_case,access_item'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8f4f11b653ed4cd1b249f80f87a46110'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0668d48652614fe6b1c5846140a341c6'
                            name: 'x_2166123_rob_auth_selected_supervisor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f75d4b7851f4b678db84d2c1e98d436'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_completed_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f7b77a33f8d4b14955c3d1af078fa0f'
                        key: {
                            name: 'var__m_sys_hub_action_input_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'lifecycle_path'
                            value: 'payroll'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f95242aaccd4dea841a8d7c86f6ea15'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fa53823e1124efba5fb6dad3ff5ddb4'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'signed_pdf_generated'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9020d7d1bd7741adb6681ed43e6dd401'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_2_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '90407e6307e443fbabedcd359d5e74c1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_REQUIRED_DATA'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '906d0ab889a84c75a3c6e4b7d24de2e1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'usa_staffing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '907dca23fa1c4019ae3aead800cce953'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requires_employee_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90a0019d36444cb3a495d4db1a174210'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_prior_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91582bf06dfb45da9bf9d456a892373c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9197d4cfbb2844d6b54b42bc394a6e1c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_position'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '91cd2ee446ae4d26ace6b159fc765889'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91d21dd145284dc1af8e49e24b8ccbc1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '91e7f6a783f647104f5193a6feaad386'
                        deleted: true
                        key: {
                            model: '89e7f6a783f647104f5193a6feaad35f'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9226d0470cc34422a09dbc4d8bbab01f'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '9276b38553dc4527b47cd66f46ad5f9a'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'exception'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92a9e5e7833e07104f5193a6feaad361'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_73105d6b833a07104f5193a6feaad363'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92b4b1c5f50a4d819d4d016560b477da'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'decision_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92c16741cb844e11818f57d011426925'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_prior_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '932152c1ff5947e4a7fd5b268451d488'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_DUPLICATE_OPEN_CASE'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '9370a1a8414042acb30df36b18b77671'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '938cb89220ce4a1ea9285d2ff19c0d67'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'oas'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '93c40a1dfe324aec9d46febd167ae5a0'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94254355846c4c488c4fb714039deea4'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_corrected_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9456f62c96f240b6a102ea47bb777ae2'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9464b32bf27f405db7855fbea3d8e8e0'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'target_system_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94a2b362fdf1490e9d6a45bb1ba5232d'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94ad732214fb4e958c1f9e2c2cd7b206'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94ba1cc41f974c39a53b62fd28d3ebbf'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_exception_review_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94cd90fcbe2e44bcbdf48e41147f7ec5'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '94dcf0db4f414ad2b29e163ee36ee666'
                        key: {
                            sys_security_acl: 'ba494884f77b4e3aa4a24d899809df44'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94ea91da8bd040ebbdd0b704f2e49e1e'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_waived_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94ed8fe53c5144af9228a3005be739b4'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_duplicate_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '958c379f7bf84c17bc0398932a38f196'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'self_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95e1301f56094ddfa969be5afea6b565'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_OBSOLETE_VERSION'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '961e918a906447dca4396ad69faee029'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_review_required'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9667baa620ca49179063b5ccdf0d22de'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '966b46690cf04c3da5f1bf75c5228034'
                        key: {
                            sys_ui_form: {
                                id: '4e109fe180ee4a8d9d7df0da8d34b862'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                                id: '28ec744c546746d8bc9d211cf97b3827'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        id: '96bcffd9faa343929d2c33855ee43b1e'
                        key: {
                            sys_ui_section: {
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_hub_step_ext_output'
                        id: '96c1ec0f412d465f8c6a1fb44be53dad'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'created_detail_count'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '97358ecc3c7c46d7b5165a662b147c28'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '9761cfb5a1614945a8e3f3c4daab2370'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '97e8f48482fd43999c538bf8f46e766d'
                        key: {
                            sys_security_acl: '5d5762f755ad451aab21d2f708e46f2c'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97e9e6be00714b57a753ba191e8bdaf1'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_document_execution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '981058fc3f714b9391bb32462019bded'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'federal_employee'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '982ff3c5b25b49a99219df98903e990f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '986004840aa6408d934af15b00516298'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '98df99d5b9af445b86b10298004c16b9'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'usa_staffing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98e87f0b9c5e460fac106fe206838f48'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_staffing_assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98ebce69dbe24fe292e5fe7c533657ca'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '98f343695c114eb4bc44e3551836de72'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'auditor_investigator'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9902fbcbe12845e3a2ee12432c338dc5'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '992dafdbb5df4b17bb623fbc6cba8c60'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_dictionary'
                        id: '9957459cf6bf4661803cb876ba648762'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_signer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '997b33a50f5642ae80880910c1c9d832'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_SUPERVISOR'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9987a559dc1f4acc8d5ae88d23fa488c'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'invalidated'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99c6d2a481cd49d08088522efc1ca034'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '99e7ef1f0b294b93967964a57e681574'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'other_time_limited'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99e7f6a783f647104f5193a6feaad381'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_89e7f6a783f647104f5193a6feaad35f'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '99e92ad919064f4ebea963cf2a6bccbd'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '99f74cdfb64540628dbd1dd538a62be3'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: '99fd9070016c4aa0a21b9a68bf9a16fd'
                        key: {
                            sys_security_acl: '54a1c872608940d4a982d53f5d854156'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a09ea5200c5405184679c8593a73b26'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'pending_authorization'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a3c1fae6f624bb5a3ff5f7b8c36053a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_correction_requested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9ac22df252d84c3aa0b59353a1484a53'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'provisioning_completed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9aca8a51475f41cca93d2698e497b012'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b48bf852fef4d98a880dfebb5e983a9'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'operations_manager_arm_assignment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b67318970f84ba6ad1e66ea4d715f57'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'waived'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9bd5b3fd9ee040d79ecb5c82d47a25dc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'analytics_fulfillment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9c073c1caf5b4a67822340354ece4f9a'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_documentation'
                        id: '9c13bea3db6b4332935552c88bb32681'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_processing_blocked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c249c92e1134adb91cd2ce1a18940db'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9cb6702e8b194969984e980461bd8bb8'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: '9ce9daee55df439a8e2b06178650af4d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_access_end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d5b80bbc6fd42d98c0e4cf6d5c6df90'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'report'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e04628fdad84e1a8165e90caca8c962'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9e2b9af8dcc442d18496d11abcad5838'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9e5b5a54b59748fdaa2191c6ea68116b'
                        key: {
                            sys_ui_section: {
                                id: 'e4a6178e2e6e47e09652202a6a156c40'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: '9e81105a4af24442ace28e9cb855beaa'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_ANNUAL_RECERTIFICATION'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9eb96a7fe05549babeb83ae2996cd139'
                        key: {
                            sys_security_acl: '55ec6f2c5cef4177830226ec689f87fd'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9ee6877bbd58446ba0b0a3b41817350a'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_dictionary'
                        id: '9f4824f393e44a738a44eba9ff63ac8d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_prior_position_title'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9f634ddb897d44b981705fdc2f2838ad'
                        key: {
                            sys_security_acl: '8a62411965a1499292ea1fb09018ce73'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f6b7ed89a3d4782b308e7b44a227c0d'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f7d2cc60bcf4e86a8798146e7f20fb5'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'decision_evaluated_at'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9f84ccef996c4be99a9bdf66932fee25'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: 'a022d39b13a244fa802244e58552c704'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INCOMPLETE_AUTHORIZATION_HISTORY'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0254dbecbfa41d49f62bd71cd55a83a'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_document_task'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a0a8095ccbe54da697e6861d606a26a9'
                        key: {
                            sys_security_acl: '71a411ca106542be99fc501e62cf3637'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a0bbfb62d77c414d9be80012deaa06be'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0f6c2e3d498401585f0cccd6930682f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_material_context_change'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a12a9141d0504b2ab5dbedec53fe96ce'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approval_outcome'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a1ae3747a1e44d3da30d9184a30a7f47'
                        key: {
                            sys_ui_form: {
                                id: 'eb044242f2cd4ceb9627842ee9298edd'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_ui_action_role'
                        id: 'a1fb1a40e2fe49e284aed76a08d5f31f'
                        key: {
                            sys_ui_action: 'd3951036b289476a865b644822dc7864'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a214172f99f14f27b314cf975dd3a7a0'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a22f9e87fbbc464fa3eb32c340e65d2b'
                        key: {
                            sys_ui_section: {
                                id: '64fc69a5d91f4646887f4a1bd9f36c51'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'a28824a319ed435e95a3649fb0f24783'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_prior_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a317b49c75d3493a977aabeec2093ea6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3617e400e4346e1a396b164cac11d33'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'decision_evaluated_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3767c13b675455080c14c78e524533f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_fulfillment_gate_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3b61931d991460a9fa6731d0a130941'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_1_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a3c6cfa87e7249668176514d0a8e2bc7'
                        key: {
                            sys_security_acl: '42bcd87d3dc24083b06edea9dd8e3d75'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: 'a41c68da39f742c8a9a79eaba51cc737'
                        key: {
                            sys_security_acl: '2860e9b82125451d8d65f9f61108a7ff'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a46a5239efcd4c128f0d3cbbead80125'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            value: 'failed_exception'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a46d8faa037e42ae9b10d63418f6bc76'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_documentation'
                        id: 'a4751eb397c2433187764c4c004b4cfb'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a47559b4cb1b4976962263c57e93a31d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'lapse_notification_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4b140a9e82442d6a02645bdb7e21b78'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4ccfeab81a045ff95beb9956fd60c19'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a51ce750186949a7b42d14a97b23edcd'
                        key: {
                            sys_ui_section: {
                                id: 'f380fa7d18b74d82ab9b5a209214415b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_ui_element'
                        id: 'a5679665f5394199bfeb7b6bf1e0a0fb'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_dictionary'
                        id: 'a57068b7b6dc4193b8e2ce97784222e0'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'signed_pdf_generated_date_time'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'a590cb19a6d84bc68912739fb401e9ad'
                        deleted: false
                        key: {
                            model: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            element: 'disposition'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a5da3d42f64b426097ab841da27bf8ad'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_EXPIRED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a60415a25c424ab78fc5c5f89b1d3224'
                        key: {
                            sys_security_acl: 'd1ab65c61aa749f890240e9b70ee9622'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6114da935a0465780e6045b33a3bdd3'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'profile_context_evidence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a6121b3692d243ee8783d865b0fcd858'
                        key: {
                            sys_ui_section: {
                                id: '64fc69a5d91f4646887f4a1bd9f36c51'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: 'a61505012e484fe8a387aa43a74485d6'
                        key: {
                            sys_security_acl: '47d1b51570cb4068a016bbd21565605e'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a693c009d3eb4f90a878c9cfe487d488'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_ANNUAL_RECERTIFICATION'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a6b81991b8764ed393d42f5281614c7c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_EXPIRED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6c9df95559a4b0ab6b43c22b848b590'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_business_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a6e809a9f0924264bfde4c9ea5cbff31'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a727e05a142b41849e0cf43aff2a2c7a'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a729d3ae99464187bf2bb8008b0ab1df'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a72e54797b4042978d7154d959310c41'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'eopf'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a78320193e9348ad8ded84809eec3d99'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'superseded_by_authorization_form'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7a8038e2d9c4cde95d767b249c42098'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_staffing_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a7def999d96f4996b1db3be47d76f1e7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'exception_review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7e0fffddad74522993699b0882d81ac'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_covered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7fe19a5abab4b0ea265fd932a2ddd90'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'lapse_notification_enabled'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a8694b4917fe446b823c796b3393f88e'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a89691773c2e4aadb2aaed4ea0b309db'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'ua_table_licensing_config'
                        id: 'a89af0dfc6584eab8831fe7483c422e6'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a89b6d750282456a874b8e45e130f776'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'exception_review'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8a2ef23b471432cb9feec1a0e9db004'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8c7b02f53114596a5fb4095e26567fe'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8d544829254423789fb8526ca7b19f4'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a99341cdd21046d2af267ac00bb64519'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'a99d1b714fb2428aba06fe9713f099fb'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_position_title'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a9a13948eb364948900f8ed3c4b76879'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'a9b46971e7f84a95b38009cf076e54da'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'case_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa6b50b3ab55450fb566fd75f3f6ecc9'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_analytics_assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aac4d49e650f49bd9c566691fc834506'
                        key: {
                            sys_security_acl: '35972a92d0f94171ab0aea3b455a50d3'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aadd72d496bf4d1982c18cb98211ca81'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_evaluated_authorization'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab140a0ac36d482d81f7378c9a7b2d8a'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'ab4ec27cc96e43009cb217b2dae837b8'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_material_context_change'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab7fc2a6906a4b40891afbef5ccf978d'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_documentation'
                        id: 'ab97db59931c42cdb076510c3f5f1bc9'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_review_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'abaf0fa20bd7413382842985522e0bdf'
                        key: {
                            sys_ui_form: {
                                id: 'eb044242f2cd4ceb9627842ee9298edd'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                                id: 'fc69a09449c249c9bb4ba79aee4cb0ae'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_hub_action_output'
                        id: 'ac1e55c1ff454308a2742b733fa49b44'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: 'reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac8dcce8f1224f8e80c72a0ce44bc3ed'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_completed_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad1b5a3fc8894d8eaa8636a54504f359'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'current_accepted_form_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad7ce04daebc48a3b4d62b082ae0f53b'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ad835f08b51b4e35a1d3d779585d0122'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: 'ad8a70edb8cc466e8934c0e8159fcc2e'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'revoked'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'adaaa9c82cb34f83975bb6ffe0aadc12'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'adca54985d9d48b5b50150cf9f34f2c4'
                        key: {
                            sys_security_acl: 'fd7c097b3585475dac272e8353e2a5e0'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae03a3cd9c5147629fb7e7949c8187e3'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_input_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'lifecycle_path'
                            value: 'verify'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ae69a76386374083b8486b07448b66a5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aeae3f1e80f846d5bb083d8e9ff4d999'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_operations_manager'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aedd681532ce462cadaf407a998293ee'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'human_capital_reports'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aef547f2217a4139998bbba4e690bc56'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'agency_annual_recertification_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aefb9c61cd7b4c5ab641b785cb09b572'
                        key: {
                            sys_ui_section: {
                                id: '99f74cdfb64540628dbd1dd538a62be3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_documentation'
                        id: 'af6b001a0cb0440187cdff8e6ca3d2d3'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'evaluated_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'af8d2740c46b4a63b9ca63806b9686ce'
                        deleted: true
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'afab98220d5e4f2ea9aa0abeed632305'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'created_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'afb3c88c0c614d8b82379d384cadd25c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_choice'
                        id: 'afca8caf04ad467c9eb7bbeebeb1f97b'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'eopf'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'aff7db6201c24549b05eddfc43f5465d'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'disposition'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b02e7e3805da4c7aad67036ea557a400'
                        key: {
                            name: 'x_2166123_rob_auth.rob_analytics_fulfiller'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b04eba1990d242639d4a6caa05e5b929'
                        key: {
                            sys_ui_section: {
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_documentation'
                        id: 'b056f8b92e5945678e0d0cfdbc0a5cff'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_operations_manager_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b059efff03b6444bad27a1dc40ea8237'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b05d5cdded13463d8592cf3a404ec862'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_notification_copy_group'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b09ebacfc8ef48f780927f38b4cfc593'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0bd34230aa34a51a68cf985719555b3'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_business_key'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b11bbf87a9a54117a23c9a95a78f33b1'
                        deleted: false
                        key: {
                            field: 'success'
                            table: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            id: 'e79a056ad0a142149e8f76ed5febec10'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b122e7f4426d4175b2b136e70c5c4fec'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b13310a7b4f543eb8e75e429e79af098'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1357312dd74471f8e411440e62dd518'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'human_capital_data'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b13b0a3bdd7a4442aeb18dde988e7ce3'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'mixed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1c99d2fc462453eaa032f1828921087'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_PRIOR_REVOKED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1ede9fbe90e436b80ac28b1acbe27da'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'workforce_profile_chart'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b23c5916f5494dd7aca02f9bb77b6e0f'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'b280b17c267f45448814131b2a062bd4'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'lifecycle_path'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b33942dece574ad6bca8ce45cc9101bc'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requires_supervisor_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3685fd552294388b557675ec5571d49'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'lapse_notice_sent_date_time'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b3bac4a5efae4ffba670ef99a0888387'
                        key: {
                            sys_security_acl: 'b61b633e618c446999d91aedebef9e4f'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b3d90d54519e457ab7dd60bbc2778bf0'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_INVALID_CONFIG'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b3feec4d46a444d4877bc3e1fe6d9355'
                        key: {
                            sys_ui_section: {
                                id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        id: 'b4011a8838fe44cd809a19315e9059c8'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b421b1b8be994d879b171688a0158082'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'approved_supervisors_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b425b2b28d0d41fb9aaaf69b10d4da50'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b44ff1926a144ee6a790f836339aa03a'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_covered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b48dcd138089465a863a40ecc91baced'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b49a3511bb1e459992079174a5ebecf6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REUSE_FULLY_COVERED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4b5322853b24b0f99c8e7efbc5b8f33'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'authorization_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b4c6711507e94971b0f4788dcd89656a'
                        key: {
                            sys_security_acl: '1c3cd45e105d4fc18b58af0dbc501018'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b504c7a0d31547149bd0bc5f88586c34'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_OM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b5133618957242268c6d7971219b9816'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_ANNUAL_RECERTIFICATION'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b52f758ce0604a72a3c537a07a2e7ce0'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'ipa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b5448545022142b6b343e5cda107a2a9'
                        key: {
                            name: 'var__m_sys_hub_action_input_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'lifecycle_path'
                            value: 'workforce'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b55a50f0265847ab835b163532c71b9b'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b57e2cf5df4e45ada00349dabc9e691f'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b681d0bc909e4355b819610f05cf0b57'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6e84856c35449a8aab07781e9ef58bd'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6ec1a7407894742a58c836644ead8bd'
                        key: {
                            sys_ui_section: {
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_documentation'
                        id: 'b72693631cb34483bc00065f8fa36883'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'source_hrsd_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
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
                        id: 'b7ca38ee716c4d2298ec412fe8197781'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_prior_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7da9294b1724300b275598dc994f762'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_position_title'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b82a3858b26e4727975e4206354e5106'
                        key: {
                            sys_security_acl: 'edd462a56d984857b42b274d621bf683'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b82c33f8d32141eeab3b7d9a7c049f44'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'signing_started'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b85c7c2fd9604ea88e85075afcf5ba39'
                        key: {
                            sys_ui_form: {
                                id: '5967f53115714221a544ff26c46bd18d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        id: 'b89128810c1e4ad1ac016173d02e3d7e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b99ed4855957444da8b96a4efe5c903a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_completion_timestamp'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9d2543ac69e43849ef3d355d767ceb5'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_EXPIRED'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ba49fa7ad8334f8f8a8e3e055547942c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba616abc51a94c898f7bcdd675da2cbc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_exception_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'baa1fc2d5ecb4760ad10ba43fe167905'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_signature_complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'baacbb44e2f04b87b02a119b685e6827'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb030f5623734c40a4a102f73d3b62cf'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bbae280b05924f81b88037ba045726a4'
                        key: {
                            sys_security_acl: '64505b6546b0431485864fa98625cbd1'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc0e5380090a4602885666cdf6a94b96'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'contractor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc22209c3c6742a6bd3f9198a75e5647'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requires_employee_signature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc6667bf9bb64667ae9bd1ef0f0b9edb'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_JUSTIFICATION_CHANGE'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bc83cc7d53fe451aa7e63d23988070da'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_security_acl_role'
                        id: 'bccad10865af403f9f5b5e82945f29ba'
                        key: {
                            sys_security_acl: 'f7a001a900f446719bc0f3fd8e0be63a'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd30b34a517945cca7656f849817748e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'expiration_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd4ead3b47a445a38c38b9f6f022b57b'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'authorized_start_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bdeea17866e04e88aec3d4cc1739dfbd'
                        key: {
                            sys_security_acl: '1e7a2974c62742c2b451a77bfc237727'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bdfdbe22537e4cf581fbef651419a401'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be908562fd8b4730a8eceae385cab3c2'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'approved_supervisors_group'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bee5c1b1651d4fc2bdf2846d1a14b7dc'
                        key: {
                            sys_ui_section: {
                                id: 'e44ec92c126346a09c188c5b34cba08d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: 'bf0c2607baea44fdb00e9aaf414726d4'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_position'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf87381873f24db0b419336a95ca0fb3'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'amendment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfe4233b6a8b45abac35984edb760298'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bfefca19557d4acf96e0d988feb57263'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_CONFLICTING_ACTIVE_FORMS'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'c02d8be5a4cf4676b508bcd7d08e9a1a'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c05a8d9ac2a640278caf82b0a21839f3'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_prior_position_title'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c08bbfbf5a264122b96fe30b18eb6f96'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'usa_staffing'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c124c8f3e1a04fdcb8b4a9d82d66d8c3'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        id: 'c1269aca993c49f88cfa9a67ba8b6539'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c158a313755c47f0a7c331b6ef5099a9'
                        key: {
                            sys_security_acl: '5d5762f755ad451aab21d2f708e46f2c'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'c16013da6b854a16a669575172ec118e'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c16dbb0d8ecc4711ac39e710337269a0'
                        key: {
                            sys_security_acl: '334c921c880e4676bc3d3a99502f28b9'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c1a5d206a65c4d8f97ca5052aacf3888'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'obsolete_version'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c1ac6ac106b24f95856029b8cef02a05'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_ui_element'
                        id: 'c1c6ccf9a52f48a1983ade53a96f1876'
                        key: {
                            sys_ui_section: {
                                id: '26011a9a39664322a75ef343684ba43d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: 'c1fd095017204899a30bbefe0f519b0a'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'auditor_investigator'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c21036151eb044e7b37f7f035c38d603'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requires_supervisor_approval'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c257fb8da8064209aefbfe169452e65f'
                        key: {
                            sys_ui_section: {
                                id: '1bf31b3a04df4e17bb57c4c9ae5efa2c'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        id: 'c2ee920b9f83483ea7f307bc156fd33f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c32a600c7f9d4c09a328ffa4a26ad5a0'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3814029ff8a45d1b2bbc04ad3e4bb35'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_approver'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c396e5d034d54a0fbeceed6509a3672b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'operations_manager_escalation_days'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3d3a26a21744fc0abea59116dd4be0b'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                            value: 'fpps_wtts'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3f4a2a47f5b40c8941e3c5d3eead41b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'lapsed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c429ac43d1d94696b939d9fcfe670ad8'
                        key: {
                            sys_ui_section: {
                                id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_security_acl_role'
                        id: 'c440c4234b174c6b9d499c66293e1256'
                        key: {
                            sys_security_acl: '252bf597a20a496aa85a352e086c3178'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c47c0122faf643d98e540ea0de9a8d35'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: 'case_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c4b0dc826a8746bf8a0306d8ff456061'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_documentation'
                        id: 'c4b5b526fc9b40899618d4625bb3109f'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'analytics_task_required_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c4c2c5c442404017805b47f0c7c23d5a'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_documentation'
                        id: 'c4f899b6af2e45ada336dcbee1df3843'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c4fd17f3bf204bbe9bf427497a74e563'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c51a88649b6d461c98fdc6148c0951df'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c5251c43062e48a3bd800705c93bf078'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5819c60d6f44bdaa2562d2e1f42ecd1'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'final_pdf_attachment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c5a55d86275245ffb42db43db6957972'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'not_applicable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c5de9f149bcb4c92a0064d76ceb877b7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'self_supervisor'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'c60059d8269444e2affa1ccfdac01a89'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c68a38a5e27f4e9fb7a3abf890253a0a'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_OBSOLETE_VERSION'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c69a1b8145be46899b6781964dc54627'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_renewal_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c6f0f71e8c6d48328f5992c55e395ee0'
                        key: {
                            sys_security_acl: '62f8d6f7c17540cf93b1e7f2eb92fdc0'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c6fe7032fc284f19b091e7a982b73286'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: 'c73d295c49d04d13a768cc1fc5c342c7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c783d6b0d4cf42e0856804ea78e946fd'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'pending'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c794859a5d3f40d0ae9435f2a3b3d148'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'invalidated'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c7a875e1301147b18cf1d888db68fca1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_PRIOR_FORM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c7e99950e1a74428b0e9200b4e3b9bb2'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c809de303d92489294c471040bdc96d7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'oas_datamart'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c8165fed988041b9bdb86e2e88069b5c'
                        key: {
                            field: 'lifecycle_path'
                            table: 'var__m_sys_hub_step_ext_input_d31c33c5712d42d385642b7248b94a9e'
                            id: 'd31c33c5712d42d385642b7248b94a9e'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'c855db7b637a433fbd7e03793ad7dfb4'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'reason'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8d55a365ee4445f9001260ba28cfb49'
                        key: {
                            sys_ui_section: {
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_documentation'
                        id: 'c903c45432324f058e3c510ae7a5a0f4'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_evaluated_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c9586399b37c40f085275009f2ef2f43'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_operations_manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c979e83234d44ff0ab0774dcbfd63fbe'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca610605265641f8a4eea787a743212b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'revocation_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca7d91acb628445ab835296cf4bb9c38'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ca9e7aa8c1314dad95a603378a267dbf'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'caa8b610391746fba7baf305ddc461db'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'report'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cae55665543d4ab18ab0917eb341465b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'cb11ddd95d6c45789e5f3afeeb5d46ff'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_rob_auth'
                            col_name_string: 'source_hrsd_case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb292074a7a14d379662e2b97a20b070'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cba12c1dd2f34234ab8bc144934ade57'
                        key: {
                            sys_ui_section: {
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_hub_step_ext_output'
                        id: 'cbcaa49af68b410c9b5ecd6e3074edba'
                        deleted: false
                        key: {
                            model: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            element: 'reason'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cc0314d70f3b460687fbd412236db612'
                        key: {
                            sys_ui_section: {
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: 'cc8c53e96a4e408d8df7d99d60ad4e92'
                        key: {
                            sys_security_acl: '734aad39f2dc469a9752d24629a11543'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cc9d3a9af56744b1b0c4a22c7551a7f6'
                        deleted: true
                        key: {
                            field: 'authorization_sys_id'
                            table: 'var__m_sys_hub_step_ext_input_d31c33c5712d42d385642b7248b94a9e'
                            id: 'd31c33c5712d42d385642b7248b94a9e'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cca2d16d1a41417fbd8856f1d8ce2e9b'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ccdf30b7301a42afa3c086d8bd4e3ea7'
                        key: {
                            sys_ui_section: {
                                id: 'e44ec92c126346a09c188c5b34cba08d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'cce3affa2f004f719d4bb7f86f8ed5f2'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cceabb645921438cba65ff2b78212395'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'pending_supervisor_approval_signature'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ccfc3540d5a8494dbf4185e81f6ddc7b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_reminder_3_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cd0a16312f1f47f09427f41f39a32e84'
                        key: {
                            sys_security_acl: '94827cabc7ab44d285ace97e067f004c'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd46408688fb43a2a23dd03fc3297b72'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd5023f7f9e84b4a8c62ac5872b1729a'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_target_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cd8025d3bb8d4e22a018dcd455d38939'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cdb4265f93bf45d3a4a8d119fe0642a1'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: 'cdfe5fe373034d15819bcb5b68c59db7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'reminder_2_sent_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ce356ffd567f4d1182ae949e8173e49a'
                        key: {
                            sys_ui_section: {
                                id: '4f6271d51dcb464f94c1038aca3f5c6c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
                                    caption: 'Profile and Context Policy'
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
                        id: 'ce7cbfaa3d914e55b96d2c6be201ffa8'
                        key: {
                            sys_ui_section: {
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_dictionary'
                        id: 'cea7434ba326427bb671473163baf3e8'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf476a4f11a046d1b9db4814758e72b7'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf59de3f60564d60ae8c239d7aa32f98'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf5aebe1a72c427bb5b72ca977043b48'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'analytics_fulfillment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf5e983edaab438f8a585393d94f426b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_PRIOR_FORM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cf8d5619f798410c9703b0d698f36f01'
                        key: {
                            sys_ui_section: {
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        id: 'cfaade4f29db4b448be20cc9f7b9d2e1'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requires_supervisor_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfbdf5e5d58c43ba9d3e7ec02dbe1f09'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cfd2c30276b74356be1c59690b385983'
                        key: {
                            sys_security_acl: '537a7df6ddf24302b252db6342a51188'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd02132faf83e434aaf91020b2298f011'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_fulfillment_outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd05570b2ce9d43159433f1ebe841b1cc'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_input_e79a056ad0a142149e8f76ed5febec10'
                            element: 'authorization_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0a01f46c46342cb8b792f64d554c28d'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'eopf'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0a5e8d6ac704a56ac9b2ef69ed96a4f'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_document_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0eb1934c26444f1a9f585d6995a50cf'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'access_category'
                            value: 'human_capital_data'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd0edd129c1374a4ab1944f545b827c81'
                        key: {
                            sys_security_acl: '252bf597a20a496aa85a352e086c3178'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd108d6c796aa45d888ae7048f2d88657'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_operations_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd11b12b12cdd4f3b96772418c08e6ec9'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd16413fa77c7470a8068d7a68a3da636'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_JUSTIFICATION_CHANGE'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd165acb16e314c978c89ad15221940be'
                        key: {
                            question: {
                                id: '6e9aaf320630411b84246323a0f8fdec'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '0668d48652614fe6b1c5846140a341c6'
                                    name: 'x_2166123_rob_auth_employment_type'
                                }
                            }
                            value: 'federal_employee'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd289b0f9f6564dc89c106b476df6f0e9'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'signed_pdf_generated_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2e4734b55704a678622c623990ba9a3'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_supervisor_decision'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd2fb6d4b2b1b4b1b9a8107bed8a5c2e0'
                        deleted: false
                        key: {
                            field: 'signing_started'
                            table: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            id: 'e79a056ad0a142149e8f76ed5febec10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd3263283ae35487bb32712849b2209b0'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'expired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd3537739949a4217b0bd8e2e24bc9b52'
                        key: {
                            sys_ui_section: {
                                id: 'e44ec92c126346a09c188c5b34cba08d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: 'd35ad91479d84a768f0ebafdc48503f9'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd361464e37f84e1dba5e6398becede0a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'd41374c9f6314b17b1b21e76da759538'
                        deleted: false
                        key: {
                            model: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4ed0e3cec9847068e1602e83cb6d41b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_SUPERVISOR'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd51d18f29997482696d444c417d6d92d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'position_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd54386e420114863905d738643755685'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_ORG_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd588c4f1fe1d4a3ab97e3793cb549f89'
                        key: {
                            sys_ui_section: {
                                id: 'afb3c88c0c614d8b82379d384cadd25c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_ui_form_section'
                        id: 'd5c2293b1077474eaf04193fe0e7d0dd'
                        key: {
                            sys_ui_form: {
                                id: 'eb044242f2cd4ceb9627842ee9298edd'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                                id: '268d67b540b340389edb7be9c1e1170b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: 'd5f098efb2f9404d95ed6393ae8ae4c2'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd61f4f536c404ea5bccd78b898ac5828'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'reuse'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd658909f3259479387160f0635289b1b'
                        key: {
                            sys_security_acl: '0371ae006b7c478ba2b4beb325efdc98'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd66bf9af77244f3e8d98d204182bf662'
                        key: {
                            sys_ui_section: {
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: 'd70077389f0d44fa95bd2d996affa0d2'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'federal_employee'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd72e9143b295441e9dd71c4128e89391'
                        key: {
                            sys_ui_section: {
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: 'd79845ddf5424994b95f8b2b839d9fff'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_position'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'd7acc8930c184f04960c6f015ad23855'
                        deleted: false
                        key: {
                            model: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            element: 'signing_started'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7e7eaeb37af4450815684939be01bae'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_task_type'
                            value: 'staffing_fulfillment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7f79fe31577409bbc368a7f0f4529ba'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'access_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd82d55944367487589c68478418feab2'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'exception'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8867cb1b7a7402eaaf3098c8e0f0006'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_LAPSED'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd8d0c1a843ab4c35b5a9cedd2ff9db8e'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'provisioning_system_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8f4ba66adfa4bf982662d9dcae04552'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'obsolete_version'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd90943ae47c7494482acf59d7bcccef5'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd9da11106d2f47fcb7875cf862813cf0'
                        key: {
                            sys_security_acl: 'fbc8d9ea566f41a796400ee7e689abeb'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'da688739a8d94e11a64a9a2d17c95bfb'
                        key: {
                            sys_ui_section: {
                                id: '2e96ee65c2184c078ce4db02fdaae0a3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_dictionary'
                        id: 'da7fb8ab0ea74d328e008c4fe2a2c3e7'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_document_task'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dace10c95c6b4361bd560c5ed45d05f8'
                        key: {
                            sys_ui_section: {
                                id: 'e4a6178e2e6e47e09652202a6a156c40'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_ui_element'
                        id: 'db3a22f2bd0941eaba48331b181d2c00'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'db69ebc019704c1ea617af9575b9f27b'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_provisioning_completed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db87f48d44ce4b49abe8dd37c06aab0a'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_SUPERVISOR'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dba7b427daf844aeafb2a77e056f5bfb'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'access_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dbb060bd071e445992d99908f4b9f873'
                        key: {
                            sys_ui_section: {
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_documentation'
                        id: 'dbd1c503f3244b5a87cb14881eb4ad9c'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_uncovered_access'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dbf7c5e1d2c1422e8141e02a6854f7e2'
                        key: {
                            sys_security_acl: 'cff35cef921a45a6bb4527ab18dad09d'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc6d4bc4d30b4fa5bc0c926009146ee3'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_review_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dc99f33a4b8c4ddb901c550ceaa39c7a'
                        deleted: false
                        key: {
                            field: 'reason'
                            table: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            id: 'e79a056ad0a142149e8f76ed5febec10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd103faad15449d38457a96c414eada0'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REUSE_FULLY_COVERED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dd59d535660b427f917b12b2d50d4b81'
                        key: {
                            sys_ui_section: {
                                id: '4f6271d51dcb464f94c1038aca3f5c6c'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
                                    caption: 'Profile and Context Policy'
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
                        id: 'dd5b5c936eca4ac0b980e362ac9fbabb'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REUSE_FULLY_COVERED'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dd9588a2c92c41378805165292793d43'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_correction_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dda31eb8d07346b19be9748b67de39a5'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'document_task_execution'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ddaf53aff50b4093bf523a6695207644'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_target_system'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dde6b126abed44b0bf45d30d1a7b9fca'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'de0f83dd2be240cb81f5ad1c17ddfdc5'
                        key: {
                            sys_security_acl: '37926570d65e4dd499f8f9954b6f1b5f'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'de315407f0334aa0afc4dced1ed3dc52'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_existing_authorization_status'
                            value: 'obsolete_version'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'de3f42d7b2ff42ed9e5963abf4e5b467'
                        key: {
                            sys_security_acl: 'dd902fa17e5b4623861ab6da027552a1'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'dec1f4e2cc9a40e7a50598db9dada80d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dee1d886f3134d25b431dd6a6096ce0b'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'staffing'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'df0c545d21a549e7ad6c9029d99f509e'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employment_type'
                            value: 'contractor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dfc7f3b227034657af69428a18ab9428'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_operations_manager'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'dfcba56e6df54fdc99badf6e2e7ffba7'
                        key: {
                            sys_ui_form: {
                                id: '4c190c5babfe4059bea5ceffe7bb5b83'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                                id: 'e44ec92c126346a09c188c5b34cba08d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: 'e059dbef99eb4b95b0847796b2f8e1d6'
                        key: {
                            sys_ui_section: {
                                id: '99f74cdfb64540628dbd1dd538a62be3'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_documentation'
                        id: 'e0d129b2316f4134868404803d6a1ef1'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: 'authorization_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0edb08a6ad94ce99b322d8c0f6a4e95'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e13c569dc27244588be750073f4aa015'
                        key: {
                            sys_ui_section: {
                                id: '268d67b540b340389edb7be9c1e1170b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_choice'
                        id: 'e166fff09a2d425f935098a8fba482c7'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_supervisor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1acee0170e340e48cb13f6f99659f7f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'inactive_operations_manager'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1b5e0b55a6145aabf6f1871c871b5b7'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'invalidated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1c0e025521049d981e0e77b88548fbc'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_waiver_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e204bc4cfde6499c9868ab594f618224'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_ORG_CHANGE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e212c615366c4cc89bf253d45fa2adda'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'operations_manager_escalation_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e24b986446394a8bb966c29b460e1acb'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2578dbb35e54cb6a81228365553fe60'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2605a037a7a415a85c88656847e8847'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'effective_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e28c08f684e149c2b7c4ccd560d01452'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_input_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'authorization_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e2ece9231fa34d55846f0bb4c88853ce'
                        key: {
                            sys_security_acl: '2a35094c2278417d9ad7759e766607ad'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e303a9f798e7477fa148702fd63efd97'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '4828d73f25a54d599d933367f9e3fe31'
                            name: 'x_2166123_rob_auth_requested_items'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e31092bc319e4fe695b71d30d5f40f9f'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_requires_supervisor_signature'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e396c2bb6c6145139c3e6372f581caef'
                        key: {
                            sys_ui_section: {
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_dictionary'
                        id: 'e3a6a1e5c07d4851ba1a5f892812a368'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supersedes_authorization_form'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e439984af25b4f0fb21d8363a62a5392'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'missing_operations_manager'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e442a5c5fa1e4ea092b8dec5bb15744e'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e44ec92c126346a09c188c5b34cba08d'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'e4509b9f2ce64fa69fbf5ccbb38f6477'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'default_operations_manager_escalation_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e466e46f1d7742058d7fbb0f83bf3131'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e4a6178e2e6e47e09652202a6a156c40'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: 'e4e25939f7064f3a84e9a7f0a4f33034'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_PARTIAL_COVERAGE'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e55bae36c6f04c409693cfa65d913666'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e57d2c5e818a4a8e80075147b9bc02b4'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5874cbca6cb44a691ee7f8415f59f8a'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_correction_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e5a91b179c84486b97677057b76994cf'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'default_fulfillment_team'
                            value: 'exception_review'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e5c671416d25433dac19d9e0d84d842b'
                        key: {
                            sys_ui_section: {
                                id: 'e8addbf337914edd88a8f8fe4f477d54'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                            element: '0fb08a457c524f888f0982398a9d12d3'
                            position: '6'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'e5ce66acad9f4981a2d2577338a0f2fa'
                        key: {
                            ui_policy: 'd7c27b0dc0e9462cb129f4469a9dfc39'
                            catalog_variable: 'IO:x_2166123_rob_auth_access_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5d26b2913d34b48a2f6fbc5c8e8f228'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_duplicate_case'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e6139c0d6879461895e560a2b61e78b1'
                        key: {
                            field: 'created_authorization'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e74e3b4c6b3c42a88d412d5aff1e3e65'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'exception_task_due_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e78d8b00e48f48d0acf6bc441261ad44'
                        deleted: false
                        key: {
                            name: 'var__m_sys_hub_action_output_e79a056ad0a142149e8f76ed5febec10'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7966ba1e26c458397e5ce572d3b63f7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'access_end_date'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'e7a891f6b87c48ffb88149b93dc48f12'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e802b08cc99e4e7caa0927fd97a01414'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_reminder_1_days'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e8addbf337914edd88a8f8fe4f477d54'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: 'e8c1cc54b522426bbfeed35dbdd430dc'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'status'
                            value: 'revoked'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e93bf1be88f14a6186a3a2b6cb7e84c6'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e9bcff3b36e545239c7a71f7246c9ed5'
                        key: {
                            sys_ui_section: {
                                id: 'e44ec92c126346a09c188c5b34cba08d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_dictionary'
                        id: 'ea0792f3949d4be891d87023930c1a90'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_document_execution'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea13e3b413e447c1942c11a10a6d133b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea51f39ce8014205aab1be96654e3cfb'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'rob_authorization_form'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea5a4276dd394a8b8213cb308b86b6e0'
                        key: {
                            sys_security_acl: 'bf2bb4ce2d8a44eda20348b701490076'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eaaa8a1f2cb4402e800f2254a7fe39fc'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_AMBIGUOUS_MATERIAL_CHANGE'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eae0d5d5480541678ea47a40aec3044b'
                        key: {
                            sys_ui_section: {
                                id: '63ad9f79effe466eaaa9300523b2aa84'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_ui_form'
                        id: 'eb044242f2cd4ceb9627842ee9298edd'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
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
                        id: 'eb40aad411914f8aaeee6e416be9a21f'
                        key: {
                            sys_ui_section: {
                                id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_choice'
                        id: 'eb58374dcae94b41a41677d2961928f6'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_DUPLICATE_OPEN_CASE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb654a935a154283ac516e1aee7810e0'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_operations_manager_task'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb792dd80682461cb42f3330ce4428a0'
                        key: {
                            sys_security_acl: '798431b397ef4ea1a454de09bd0b1219'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebe9fb153e4943b8a4cb43543ef9fb28'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebf5538211b64a20a2758ba594ade9c0'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'provisioning_system_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ec5a625708574710b2821d23827cc485'
                        key: {
                            sys_security_acl: '5ae2368c6e4641c786ec922bdd8210e4'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ecd6d6faeb684101b9bc9ed51ae5901b'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_evaluated_authorization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'eced709baf9142d88ef8a3fb99c13c63'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ed1cecf77a9d4f09a63e59b200d74332'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed540c114fc84b6395cc2720c88f44d2'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'employee_signer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed7d95ba4a784832bab82c167d427a52'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'approved_organization_root'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'edb2ae6a00bf458cbaf1ac75d17cbf18'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'edb724f5ddd34262aa22fa64b71cf8e4'
                        key: {
                            sys_security_acl: 'b61b633e618c446999d91aedebef9e4f'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'edcf51165da5435a95149c8f7800ae7e'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'edeae543ac624791aa007d261f587c78'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_signature_date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee522c4807eb4c088e5c22b02eb249bd'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'authorized_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'ee530cf8f6b643bdaa7c7e2fe2ceb222'
                        key: {
                            sys_ui_form: {
                                id: '4e109fe180ee4a8d9d7df0da8d34b862'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                                id: 'b76ab2f43a3a42f5bc78669dc73836b7'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        id: 'ee62eef364984cba9fb13916733ba0b2'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_NO_CURRENT_FORM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eeb3a1d5afa44d618a49acd3ddab6842'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_snapshot_correction_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eecc61a3c5d94c3d9e9048d212f1f6ae'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_signature_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef08ea7423794f219bfed6e8df3e65b7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef7b322937e14af488e2b8060d8b4432'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_document_task'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ef81b26c04554b23ac4b2f81653c31f4'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ef9539c1bb9b47e1b8285dba00f8afb7'
                        key: {
                            sys_security_acl: 'fa67229aee854d3d949816c4d5588d71'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef973f792886470b83ded08553e39c68'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'document_task_execution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efb61303155f4e9aac0088c10584253c'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'renewal_reminder_3_days'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efe5c350ac6147e39d11682b5f5e7a60'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_organization_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f012ed7067a4427e912645e3bb0c18be'
                        key: {
                            field: 'success'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'f0581aa8dd474e368f01dd437ae8d7f7'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_rob_access'
                            col_name_string: 'active,access_category,sort_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f068db8aae8f4364a7e7a50eb714eb8e'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f08ea86639074600be1f2084e8b7c21c'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f098c31787a24544aef171ccfc6af3db'
                        key: {
                            sys_ui_form: {
                                id: '4e109fe180ee4a8d9d7df0da8d34b862'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        id: 'f1347828f2e44312bcaa59ccfe1bcb1f'
                        key: {
                            sys_ui_section: {
                                id: 'a3d7568780ac4a499c3df2fa83dc6b1d'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_choice'
                        id: 'f145c94b6f214bf29cf3d3bf9aaada7f'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f14d0de0e8a64437ada5c7576f955730'
                        key: {
                            sys_ui_section: {
                                id: '992dafdbb5df4b17bb623fbc6cba8c60'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_dictionary'
                        id: 'f17d565020c341378c42aa70db5e6010'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'supervisor_document_task'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f18cf5d7e3c6458398b6d723a48c2fd1'
                        key: {
                            sys_security_acl: 'b6c1529a398847bf955357463da09c4c'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1a9520ad8ed4935aa16fa2e9aa445af'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_supervisor_snapshot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1e785d0a47b43d69c684755fb73d492'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'renewal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f2359169911040d28c39acaa310e35a3'
                        key: {
                            sys_ui_section: {
                                id: '7870a6179f54452f98b95854f8863161'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_security_acl_role'
                        id: 'f252288ffd524453a336a27da80e509c'
                        key: {
                            sys_security_acl: '06a13e833c7f4d1c8c2dde8778c39dd0'
                            sys_user_role: {
                                id: '281a0263b28640fcbe0ee110d9617908'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f26d1e335e284bc9a60dc32a8cb97d26'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                            value: 'contractor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f28f5740c01341c0aa22ce3ace45896b'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        id: 'f2e02b12203c4930b04c898f38b2f351'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'audit_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f2ea02c0dc8940dcba3de6751b6f85be'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_CONFLICTING_ACTIVE_FORMS'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f3022189dd12455db134df991f24ff6d'
                        key: {
                            sys_ui_section: {
                                id: 'c4b0dc826a8746bf8a0306d8ff456061'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_security_acl_role'
                        id: 'f30403db861948d885ee1e24141cf4d6'
                        key: {
                            sys_security_acl: '334c921c880e4676bc3d3a99502f28b9'
                            sys_user_role: {
                                id: '660e847e025a4156ade6d7321c20536e'
                                key: {
                                    name: 'x_2166123_rob_auth.rob_compliance_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3310eaa31f24d33a06d30b31d91bb31'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_UNRESOLVED_ANNUAL_RENEWAL_RULE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f380fa7d18b74d82ab9b5a209214415b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_element_mapping'
                        id: 'f38a87c1593544218818f0ea0b39fcbf'
                        key: {
                            field: 'signing_started'
                            table: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            id: '3c43a0b413514057a00e2bc9bc6b2f56'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3b7362895e44f93b59bb2a31367185e'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'authorization_action'
                            value: 'amendment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3bbe2eed4164b60a346a071d865e261'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'invalid_operations_manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4060eca98294946a5ace7a687c36552'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_proposed_expiration_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f426ed26614c47858314c56b591089d7'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'requires_access_end_date'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'f44447a2761e493e9fda04da8798d4f8'
                        key: {
                            model: '3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'lifecycle_path'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f450bbd789f249938ad116cc2c21516b'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
                            element: 'exception_task_due_days'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5a4a8bee0304bddb943613d2b81702e'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5b7db1a344247618d95cbee2a4b1cc6'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_related_authorization'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'f67a3539d45041ad9dfe8b613c0a5b03'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_auth_detail'
                            col_name_string: 'subject_person,access_item,status,authorized_end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6894cb47a784900b0d38f21c14cf1f1'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'REN_LAPSED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f69b156976744485bec3565b36253050'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'superseded'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f6be47757d324d45a9ef8fc905e379d2'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '0668d48652614fe6b1c5846140a341c6'
                            name: 'self_submission_notice'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6d273d075674a9ab370ffb885de6ace'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'NEW_PRIOR_REVOKED'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f731b66769fc4b05a9468c65cd72db4f'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'arm'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7527b8d8eb1484485132a61c50bad69'
                        key: {
                            name: 'var__m_sys_hub_action_output_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'created_detail_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f77e6c4c3b054f798b5bd59361fdc6be'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_MISSING_OM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7851c7ff19141969e2dcd6a204db016'
                        key: {
                            name: 'var__m_sys_hub_action_input_3c43a0b413514057a00e2bc9bc6b2f56'
                            element: 'lifecycle_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f85c4292f79d4c3898382c7c77d414f5'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_snapshot_corrected_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f914c866bce84a119e32bee53f7f6322'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'sort_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f97600dc718b4d9a95b4d3adcfc00b19'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'form_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f9aa3f2198464a9e97b13ffc61b7f4a5'
                        key: {
                            document_key: 'd31c33c5712d42d385642b7248b94a9e'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9d1f0d274364273a345605b46de8ba0'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_rob_access_items'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f9e8b27e15554d8882cf276b66b50024'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_employment_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa3bcd0734de4587b2063ca60677a296'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_exception_reason'
                            value: 'EX_AMBIGUOUS_MATERIAL_CHANGE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa3cfd1b35cc46bda806dbf0c0127b55'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
                            element: 'status'
                            value: 'revoked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa725994753e40b4815ef2c6384585ce'
                        key: {
                            name: 'sn_hr_core_task'
                            element: 'x_2166123_rob_auth_external_provisioning_system'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fa79966b713a4a20bb30e3d9de2e5e26'
                        key: {
                            sys_ui_section: {
                                id: 'c1ac6ac106b24f95856029b8cef02a05'
                                key: {
                                    name: 'x_2166123_rob_auth_auth_detail'
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
                        table: 'sys_user_role'
                        id: 'fb39dd60278f4b0186f814023c0d2fa0'
                        key: {
                            name: 'x_2166123_rob_auth.rob_operations_manager'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'fb3b4a64deaf4d8bac90d7b9d6988041'
                        key: {
                            name: 'x_2166123_rob_auth_auth_detail'
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
                        id: 'fbb6d010e6bf45ed8c092401f8d6f0a2'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_reuse_attestation_status'
                            value: 'invalidated'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'fbd0db51788f4130872ac21682c75796'
                        key: {
                            model: 'd31c33c5712d42d385642b7248b94a9e'
                            element: 'authorization_sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'fc5893ce0b084ee2875d63d1de6936d8'
                        deleted: false
                        key: {
                            model: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'fc69a09449c249c9bb4ba79aee4cb0ae'
                        key: {
                            name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_hub_step_ext_output'
                        id: 'fc7cba09d33b466d8c53a3767654112c'
                        deleted: false
                        key: {
                            model: 'f184a0bcb66743e3ba4dd6d74b18dac7'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fcf39be304244ca4b54fef2df97b94b6'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_reuse_document_execution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd17de21fecb4a3cb05ba0e977d55a3b'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_decision_reason'
                            value: 'AMD_NO_COVERAGE_ACTIVE_FORM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd4d50d2cf9f42998ac7bfb6229cf2f4'
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'external_provisioning_system'
                            value: 'fpps_wtts'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd677092274e4784979ad34d25d4441b'
                        key: {
                            sys_ui_section: {
                                id: '39c79bb358d2413c93c57252165b9fcc'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_config'
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
                        table: 'sys_ui_element'
                        id: 'fd6dc1946e5045819008fe6eb1934fef'
                        key: {
                            sys_ui_section: {
                                id: 'e4a6178e2e6e47e09652202a6a156c40'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_choice'
                        id: 'fd841b681b914b698db33c50c7caf675'
                        deleted: true
                        key: {
                            name: 'x_2166123_rob_auth_rob_access'
                            element: 'form_1768_mapping'
                            value: 'fpps_wtts'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd91bde50d5c4da4a57bdec644d63135'
                        deleted: true
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_authorization_path'
                            value: 'exception'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fda09bd45752450cbe68479018b16bcc'
                        key: {
                            sys_ui_section: {
                                id: 'f380fa7d18b74d82ab9b5a209214415b'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_access'
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
                        table: 'sys_index'
                        id: 'fde41b8fba764d02abf032bc42827693'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_rob_auth'
                            col_name_string: 'status,expiration_date'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'fe1fd7ed753b4afe8e1bfd5bd813cb35'
                        key: {
                            logical_table_name: 'x_2166123_rob_auth_rob_auth'
                            col_name_string: 'subject_person,status,expiration_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe4bcfe44a214a2cb6c219538dc7a473'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_prior_supervisor_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe5817e51ee84373ac203ab4b5c509e8'
                        key: {
                            name: 'sn_hr_core_case_payroll'
                            element: 'x_2166123_rob_auth_fulfillment_gate_complete'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fed35fc984664e38845280b3ee73c5ff'
                        key: {
                            sys_ui_section: {
                                id: 'e44ec92c126346a09c188c5b34cba08d'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_documentation'
                        id: 'fed67b147a8c4ee9a08e724465ffcdf8'
                        key: {
                            name: 'sn_hr_core_case_workforce_admin'
                            element: 'x_2166123_rob_auth_requested_items'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ff5d4d0aba76460eb4fa345a9010855a'
                        key: {
                            sys_ui_section: {
                                id: '1ccb9e0887324da8b810fc49f1403300'
                                key: {
                                    name: 'x_2166123_rob_auth_rob_auth'
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
                        table: 'sys_hub_action_output'
                        id: 'ff954eeb40bb4dc586f068c9c1fb0ff0'
                        deleted: false
                        key: {
                            model: 'e79a056ad0a142149e8f76ed5febec10'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ffda4e1d32b14fb5a8ee076a214c53f2'
                        key: {
                            name: 'x_2166123_rob_auth_rob_auth'
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
                ]
            }
        }
    }
}
