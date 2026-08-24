(function executeRule(current, previous) {
    var deprecatedFields = [
        'x_2166123_hr_acc_0_position_title',
        'x_2166123_hr_acc_0_organization_snapshot',
        'x_2166123_hr_acc_0_supervisor_snapshot',
        'x_2166123_hr_acc_0_snapshot_correction_requested',
        'x_2166123_hr_acc_0_snapshot_correction_reason',
        'x_2166123_hr_acc_0_prior_position_title',
        'x_2166123_hr_acc_0_prior_organization_snapshot',
        'x_2166123_hr_acc_0_prior_supervisor_snapshot',
        'x_2166123_hr_acc_0_snapshot_corrected_by',
        'x_2166123_hr_acc_0_snapshot_corrected_at',
    ]

    for (var index = 0; index < deprecatedFields.length; index += 1) {
        var field = deprecatedFields[index]
        if (
            current.isValidField(field) &&
            current.getValue(field) !== previous.getValue(field)
        ) {
            gs.addErrorMessage(
                'Deprecated ROB case snapshot evidence cannot be changed. Profile context is resolved server-side and snapshotted on the governed Authorization Form before signing.'
            )
            current.setAbortAction(true)
            return
        }
    }
})(current, previous)
