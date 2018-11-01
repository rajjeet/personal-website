
$ErrorActionPreference = "Stop"
Set-DefaultAWSRegion -Region us-east-1
$invocationDir = Split-Path (Get-Item $MyInvocation.MyCommand.Definition) -Parent

$domainName = 'ortmesh.com'

. ..\..\..\aws\CloudformationStarters\CFN-Helper-Functions.ps1

# Route53
$domainStack = Install-CFNStack -stackName "personal-website-domain" `
  -templateBody (Get-Content (Join-Path $invocationDir "r53domain.yml") -Raw) `
  -parameterList @( `
  @{ ParameterKey = "DomainName"; ParameterValue = $domainName } `
) 
$hostedZoneId = ($domainStack | Where-Object {$_.OutputKey -eq "HostedZoneId"}).OutputValue
$nameServersStr = ($domainStack | Where-Object {$_.OutputKey -eq "NameServers"}).OutputValue

# Update Name Servers of Registered Domain 
Confirm-RegisteredDomainNameServers -DomainName "$domainName" -NameServerList $nameServersStr

# ACM Certificate
$certificateStack = Install-CFNStack -stackName "personal-website-certificate" `
  -templateBody (Get-Content (Join-Path $invocationDir "acmCertificate.yml") -Raw) `
  -timeout 7200 `
  -parameterList @( `
  @{ ParameterKey = "DomainName"; ParameterValue = $domainName } `
) 
$certificateArn = ($certificateStack | Where-Object {$_.OutputKey -eq "CertificateArn"}).OutputValue

# Bucket, CDN distribution and Record Sets
$cfOutput = Install-CFNStack -stackName "personal-website" `
  -templateBody (Get-Content (Join-Path $invocationDir "template.yml") -Raw) `
  -timeout 3600 `
  -parameterList @( `
  @{ ParameterKey = "DomainName"; ParameterValue = $domainName }, `
  @{ ParameterKey = "HostedZoneId"; ParameterValue = $hostedZoneId }, `
  @{ ParameterKey = "CertificateArn"; ParameterValue = $certificateArn } `
) 


