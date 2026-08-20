(function executeRule(current) {
    var authorization = new GlideRecord('x_2108496_hr_acces_rob_auth')
    if (!authorization.get(current.getValue('table_sys_id'))) {
        current.setAbortAction(true)
        return
    }

    if (authorization.getValue('final_pdf_attachment')) {
        gs.addErrorMessage('This authorization already has its authoritative final Form 1768 PDF.')
        current.setAbortAction(true)
        return
    }

    var existing = new GlideRecord('sys_attachment')
    existing.addQuery('table_name', 'x_2108496_hr_acces_rob_auth')
    existing.addQuery('table_sys_id', authorization.getUniqueValue())
    existing.addQuery('content_type', 'application/pdf')
    existing.addQuery('file_name', 'STARTSWITH', 'ROB-Form-1768-')
    existing.setLimit(1)
    existing.query()
    if (existing.next()) {
        gs.addErrorMessage('A final Form 1768 PDF already exists for this authorization.')
        current.setAbortAction(true)
    }
})(current)
