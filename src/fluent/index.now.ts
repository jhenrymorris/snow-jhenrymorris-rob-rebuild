// Explicit deployment entry point for security metadata that must be present in
// every complete SDK build. The SDK also discovers .now.ts files by convention,
// but this import makes the access-item ACL dependency auditable.
import './security/rob-access-item-reference-acls.now'
import './security/rob-profile-read-privileges.now'
import './security/native-supervisor-approval-privileges.now'
import './script-includes/rob-profile-authorization-context.now'
import './business-rules/rob-authorization-lifecycle.now'
import './business-rules/rob-fulfillment-orchestration.now'
