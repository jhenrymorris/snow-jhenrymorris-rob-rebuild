@{
    Wave = 2
    Repository = 'C:\ServiceNow\hr-access-rob-authorization'
    BaselineCommit = 'f725802db01ceeabc86be5bdc08178cd6043133e'

    CandidateImplementation = @{
        Name = 'snapshot-logic'
        Worktree = 'C:\ServiceNow\rob-agent-snapshot-logic'
        Branch = 'agent/wave-2-snapshot-logic-correction'
        Commit = 'bec24a8fe40bbd0aa3ed79a4b2b992180ceba3a1'
        Role = 'implementation'
        AllowedPaths = @(
            'docs/'
            'src/fluent/business-rules/'
            'src/fluent/server/'
            'src/fluent/security/'
            'src/fluent/tables/'
            'src/fluent/generated/'
        )
    }

    Agents = @{
        SnapshotTests = @{
            Name = 'snapshot-tests'
            Worktree = 'C:\ServiceNow\rob-agent-snapshot-tests'
            Branch = 'agent/wave-2-snapshot-tests-correction'
            PromptFile = 'docs\agents\wave-2-pilot\snapshot-test-agent-prompt.md'
            ReportPatterns = @('docs/validation/wave-2/*.md')
            AllowedPaths = @('docs/validation/wave-2/','scripts/validation/','src/fluent/tests/')
            RequiredReviewedCommit = 'bec24a8fe40bbd0aa3ed79a4b2b992180ceba3a1'
            Role = 'test'
        }
        SecurityReview = @{
            Name = 'security-review'
            Worktree = 'C:\ServiceNow\rob-agent-security-review'
            Branch = 'agent/wave-2-security-review'
            PromptFile = 'docs\agents\wave-2-pilot\security-review-agent-prompt.md'
            ReportPatterns = @('docs/security/*.md')
            AllowedPaths = @('docs/security/')
            RequiredReviewedCommit = 'bec24a8fe40bbd0aa3ed79a4b2b992180ceba3a1'
            Role = 'review'
        }
        HrsdBridge = @{
            Name = 'hrsd-bridge'
            Worktree = 'C:\ServiceNow\rob-agent-hrsd-bridge'
            Branch = 'agent/wave-2-hrsd-bridge-correction'
            PromptFile = 'docs\agents\wave-2-pilot\hrsd-bridge-agent-prompt.md'
            ReportPatterns = @('docs/hrsd-bridge/*.md')
            AllowedPaths = @('docs/hrsd-bridge/','scripts/hrsd-bridge/')
            RequiredReviewedCommit = 'bec24a8fe40bbd0aa3ed79a4b2b992180ceba3a1'
            ExistingResultCommit = 'cfd428dd3791f48724d0e1b1e17a273dab4b2f79'
            Role = 'review'
        }
        Documentation = @{
            Name = 'documentation'
            Worktree = 'C:\ServiceNow\rob-agent-documentation'
            Branch = 'agent/wave-2-documentation'
            PromptFile = 'docs\agents\wave-2-pilot\documentation-agent-prompt.md'
            AllowedPaths = @('docs/status/','docs/remediation/','docs/validation/wave-2/','docs/deployment/','docs/decisions/','docs/rollback/')
            Role = 'documentation'
        }
        LeadOrchestrator = @{
            Name = 'lead-orchestrator'
            Worktree = 'C:\ServiceNow\rob-agent-lead-orchestrator'
            Branch = 'agent/wave-2-lead-orchestrator'
            PromptFile = 'docs\agents\wave-2-pilot\lead-orchestrator-prompt.md'
            AllowedPaths = @()
            Role = 'orchestrator'
        }
    }

    OutputDirectory = 'orchestration\output'
    LogDirectory = 'orchestration\logs'
    PromptDirectory = 'orchestration\prompts'
}
