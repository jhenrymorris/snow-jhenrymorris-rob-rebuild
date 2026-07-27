function ConvertTo-Wave2QueryScalar {
    param(
        [AllowNull()]$Value,
        [Parameter(Mandatory)][string[]]$PreferredProperties,
        [int]$Depth = 0
    )

    if ($null -eq $Value -or $Depth -gt 8) {
        return ''
    }

    if (
        $Value -is [string] -or
        $Value -is [ValueType]
    ) {
        return "$Value"
    }

    foreach ($propertyName in $PreferredProperties) {
        $property = $Value.PSObject.Properties[$propertyName]
        if ($property -and $null -ne $property.Value) {
            $candidate = ConvertTo-Wave2QueryScalar `
                -Value $property.Value `
                -PreferredProperties $PreferredProperties `
                -Depth ($Depth + 1)
            if ($candidate -ne '') {
                return $candidate
            }
        }
    }

    return ''
}

function Get-Wave2RawValue {
    param(
        [Parameter(Mandatory)][AllowNull()]$Record,
        [Parameter(Mandatory)][string]$Field
    )

    if ($null -eq $Record) {
        return ''
    }

    $property = $Record.PSObject.Properties[$Field]
    if (-not $property) {
        return ''
    }

    return ConvertTo-Wave2QueryScalar `
        -Value $property.Value `
        -PreferredProperties @('value', 'raw_value', 'rawValue')
}

function Get-Wave2DisplayValue {
    param(
        [Parameter(Mandatory)][AllowNull()]$Record,
        [Parameter(Mandatory)][string]$Field
    )

    if ($null -eq $Record) {
        return ''
    }

    $property = $Record.PSObject.Properties[$Field]
    if (-not $property) {
        return ''
    }

    $display = ConvertTo-Wave2QueryScalar `
        -Value $property.Value `
        -PreferredProperties @('display_value', 'displayValue')
    if ($display -ne '') {
        return $display
    }

    return Get-Wave2RawValue -Record $Record -Field $Field
}

Export-ModuleMember -Function Get-Wave2RawValue, Get-Wave2DisplayValue
