$path = "C:\Users\DELL\.gemini\antigravity-ide\scratch\vietnam-tours-travel-ui\preview.html"
$content = [System.IO.File]::ReadAllText($path)
$matches = [System.Text.RegularExpressions.Regex]::Matches($content, '\{\/\*')
Write-Output "Total remaining React comments: $($matches.Count)"
