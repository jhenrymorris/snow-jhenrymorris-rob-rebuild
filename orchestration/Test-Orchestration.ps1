[CmdletBinding()]
param([string]$ConfigPath = (Join-Path $PSScriptRoot 'wave-2-config.psd1'))

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$errors = [System.Collections.Generic.List[string]]::new()

foreach ($file in Get-ChildItem -LiteralPath $PSScriptRoot -Filter '*.ps1') {
    $tokens = $null
    $parseErrors = $null
    [System.Management.Automation.Language.Parser]::ParseFile($file.FullName,[ref]$tokens,[ref]$parseErrors) | Out-Null
    foreach ($e in @($parseErrors)) { $errors.Add("$($file.Name): $($e.Message)") }
}

try { $config = Import-PowerShellDataFile -LiteralPath $ConfigPath } catch { $errors.Add("Config: $($_.Exception.Message)") }
if (@($errors).Count -gt 0) { $errors; throw 'Orchestration self-test failed.' }

$candidate = & (Join-Path $PSScriptRoot 'Test-AgentResult.ps1') -Agent $config.CandidateImplementation -ExpectedCommit $config.CandidateImplementation.Commit -BaselineCommit $config.BaselineCommit
$hrsd = & (Join-Path $PSScriptRoot 'Test-AgentResult.ps1') -Agent $config.Agents.HrsdBridge -ExpectedCommit $config.Agents.HrsdBridge.ExistingResultCommit

[pscustomobject]@{
    SyntaxValid = $true
    ConfigValid = $true
    CandidateValid = [bool]$candidate.Valid
    HrsdBridgeValid = [bool]$hrsd.Valid
    Passed = ([bool]$candidate.Valid -and [bool]$hrsd.Valid)
}
