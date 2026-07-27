// Explicit deployment entry point for security metadata that must be present in
// every complete SDK build. The SDK also discovers .now.ts files by convention,
// but this import makes the access-item ACL dependency auditable.
import './security/rob-access-item-reference-acls.now'
