$path = "C:\Users\DELL\.gemini\antigravity-ide\scratch\vietnam-tours-travel-ui\preview.html"
$content = [System.IO.File]::ReadAllText($path)

# Find any occurrences of className=" or className={
$classNames = [System.Text.RegularExpressions.Regex]::Matches($content, 'className\s*=')
Write-Output "Occurrences of className: $($classNames.Count)"

# Find any curly braces outside script/style tags
# Since that is complex, let's just search for common React props like onClick=, onSubmit=
$reactEvents = [System.Text.RegularExpressions.Regex]::Matches($content, '(onClick|onSubmit|onChange|value)=\{')
Write-Output "Occurrences of React event bindings: $($reactEvents.Count)"

# Print out the matches if found
foreach ($m in $reactEvents) {
    Write-Output "React event match: $($m.Value) at index $($m.Index)"
}
