(function executeRule(current) {
    var accepted = new sn_hr_core.RobHrFulfillmentBridgeV2().validateTaskCompletion(current)
    if (!accepted) {
        gs.addErrorMessage('ROB fulfillment completion requires an authorized fulfiller and complete governed evidence.')
        current.setAbortAction(true)
    }
})(current)
