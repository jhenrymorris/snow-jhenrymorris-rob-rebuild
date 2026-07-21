# Lead Integration Checklist

## Before integration
- [ ] Every branch is committed.
- [ ] No branch modified `src/fluent/generated/keys.ts`.
- [ ] No overlapping application files exist.
- [ ] Security review approves the implementation.
- [ ] Tests cover staffing and analytics.

## Integration order
1. Snapshot logic
2. Security corrections
3. Tests
4. HRSD bridge documentation
5. Deployment documentation

## Commands
```powershell
git switch feature/02c-native-case-field-map
git status --short

git cherry-pick <snapshot-logic-commit>
git cherry-pick <test-commit>
git cherry-pick <security-doc-commit>
git cherry-pick <hrsd-bridge-commit>
git cherry-pick <documentation-commit>

npm run build
npx @servicenow/sdk build `
  --frozenKeys true `
  --errorOnConflict true

git diff --check
git status --short
```
