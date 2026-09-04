(function executeRule(current) {
    var accepted = new RobHrFulfillmentBridgeV2().validateTaskCompletion(current)
    if (!accepted) {
        gs.addErrorMessage('ROB fulfillment completion requires an authorized fulfiller and complete governed evidence.')
        current.setAbortAction(true)
    }
})(current)
