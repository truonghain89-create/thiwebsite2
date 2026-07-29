$path = "C:\Users\DELL\.gemini\antigravity-ide\scratch\vietnam-tours-travel-ui\preview.html"
$content = [System.IO.File]::ReadAllText($path)
$newContent = [System.Text.RegularExpressions.Regex]::Replace($content, '\{\/\*\s*(.*?)\s*\*\/\}', '<!-- $1 -->')
[System.IO.File]::WriteAllText($path, $newContent)
Write-Output "Successfully cleaned all React comments from preview.html"
