$path = "C:\Users\DELL\.gemini\antigravity-ide\scratch\vietnam-tours-travel-ui\preview.html"
$lines = Get-Content $path
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "className") {
        Write-Output "Line $($i + 1): $($lines[$i].Trim())"
    }
}
