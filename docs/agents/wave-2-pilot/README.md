# HR Access ROB Multi-Agent Pilot

This pilot uses isolated Git worktrees and a single integration/deployment lane.

## Pilot objective
Complete the remaining Wave 2 requester-profile snapshot work without allowing multiple agents to modify or deploy the same metadata concurrently.

## Agent branches
- `agent/wave-2-snapshot-logic`
- `agent/wave-2-snapshot-tests`
- `agent/wave-2-security-review`
- `agent/wave-2-hrsd-bridge`
- `agent/wave-2-documentation`

The lead remains on `feature/02c-native-case-field-map`.

## Controls
1. Agents do not deploy independently to the PDI.
2. Agents do not modify `src/fluent/generated/keys.ts`.
3. Agents do not directly alter native HRSD records.
4. Each agent commits only files within assigned paths.
5. The lead reviews all diffs before integration.
6. The integrated branch is built with frozen keys before deployment.
