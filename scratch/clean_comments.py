import re

filepath = r"C:\Users\DELL\\.gemini\\antigravity-ide\\scratch\\vietnam-tours-travel-ui\\preview.html"
# Clean double backslashes
filepath = filepath.replace("\\\\", "\\")

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to find {/* ... */}
pattern = r"\{\/\*\s*(.*?)\s*\*\/Outside\}|\{\/\*\s*(.*?)\s*\}\}" # Let's keep it simple
# Match anything starting with {/* and ending with */}
pattern = r"\{\/\*\s*(.*?)\s*\*\/Outside\}|\{\/\*\s*(.*?)\s*\}\}" # Actually simpler:
pattern_react_comment = r"\{\/\*\s*(.*?)\s*\*\/}"

def replacer(match):
    comment_text = match.group(1)
    return f"<!-- {comment_text} -->"

new_content = re.sub(pattern_react_comment, replacer, content)

# Check if there are any remaining {/* comments
remaining = re.findall(r"\{\/\*", new_content)
print(f"Replaced comments. Remaining: {len(remaining)}")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(new_content)
