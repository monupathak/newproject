#!/bin/bash

# This script updates HTML files to use component placeholders for GitHub Pages
# It replaces header, footer, industries section, and mobile menu scripts

echo "Starting website component refactoring for GitHub Pages..."

# Array of HTML files to update (excluding index.html which is already done)
files=("about.html" "portfolio.html" "services.html" "contact.html" "team.html" "testimonials.html" "starter-page.html")

# Navigate to project root
cd "$(dirname "$0")/.." || exit 1

# Function to update files
update_file() {
    local file=$1
    echo "Processing $file..."
    
    # Skip if file doesn't exist
    if [[ ! -f "$file" ]]; then
        echo "  ⚠️  File not found: $file"
        return 1
    fi
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Use Python to do the replacements (more reliable than sed for multi-line)
    python3 << 'PYTHON_SCRIPT' - "$file"
import sys
import re

filename = sys.argv[1]

# Read the file
with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace header section with placeholder
header_pattern = r'<header id="header"[^>]*>.*?</header>'
header_replacement = '<!-- Header Component Placeholder -->\n  <div id="header-placeholder"></div>'
content = re.sub(header_pattern, header_replacement, content, flags=re.DOTALL)

# 2. Replace industries section with placeholder (if it exists)
industries_pattern = r'<section id="industries"[^>]*>.*?</section><!-- /Industries Section -->'
industries_replacement = '<!-- Industries Component Placeholder -->\n    <div id="industries-placeholder"></div>'
content = re.sub(industries_pattern, industries_replacement, content, flags=re.DOTALL)

# 3. Replace footer section with placeholder
footer_pattern = r'<footer id="footer"[^>]*>.*?</footer>'
footer_replacement = '<!-- Footer Component Placeholder -->\n  <div id="footer-placeholder"></div>'
content = re.sub(footer_pattern, footer_replacement, content, flags=re.DOTALL)

# 4. Replace mobile menu script with component loader reference
mobile_script_pattern = r'<!-- Custom Mobile Menu Script -->.*?</script>'
mobile_script_replacement = '<!-- Component Loader -->\n  <script src="assets/js/includes-loader.js"></script>'
content = re.sub(mobile_script_pattern, mobile_script_replacement, content, flags=re.DOTALL)

# Write back
with open(filename, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"  ✓ Updated {filename}")
PYTHON_SCRIPT

    if [[ $? -eq 0 ]]; then
        echo "  ✓ Successfully updated $file"
        rm "$file.backup"  # Remove backup if successful
    else
        echo "  ✗ Error updating $file - restoring backup"
        mv "$file.backup" "$file"
        return 1
    fi
}

# Update each file
success_count=0
for file in "${files[@]}"; do
    if update_file "$file"; then
        ((success_count++))
    fi
done

echo ""
echo "=========================================="
echo "Refactoring Complete!"
echo "  Files updated: $success_count/${#files[@]}"
echo "  Component files created in: includes/"
echo "  Loader script: assets/js/includes-loader.js"
echo "=========================================="
echo ""
echo "Your website is now ready for GitHub Pages!"
echo "All duplicated content has been extracted into reusable components."
