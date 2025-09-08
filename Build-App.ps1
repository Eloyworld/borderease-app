# Build-App.ps1

# Read app.json
$AppJsonPath = "app.json"
$AppJson = Get-Content $AppJsonPath -Raw | ConvertFrom-Json

# ---- Version bump ----
$CurrentVersion = $AppJson.expo.version
$Parts = $CurrentVersion -split "\."
$Patch = [int]$Parts[2] + 1
$NewVersion = "$($Parts[0]).$($Parts[1]).$Patch"

# Update version
$AppJson.expo.version = $NewVersion

# Ensure android block exists
if (-not $AppJson.expo.android) {
    $AppJson.expo | Add-Member -MemberType NoteProperty -Name "android" -Value (@{})
}

# Bump android.versionCode
if ($AppJson.expo.android.versionCode) {
    $AppJson.expo.android.versionCode = [int]$AppJson.expo.android.versionCode + 1
} else {
    $AppJson.expo.android.versionCode = 1
}

# Save updated app.json
$AppJson | ConvertTo-Json -Depth 10 | Set-Content $AppJsonPath -Encoding utf8

Write-Host "✅ Updated app.json -> version $($AppJson.expo.version), android.versionCode $($AppJson.expo.android.versionCode)"

# ---- Run prebuild and build ----
npx expo prebuild --clean
eas build -p android --profile preview
