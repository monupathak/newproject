#!/usr/bin/env python3
"""
Update HTML files to use component placeholders for GitHub Pages deployment.
This script replaces duplicated header, footer, industries section, and mobile menu scripts
with placeholders that will be loaded dynamically by includes-loader.js
"""

import re
import os
from pathlib import Path

# Files to update (index.html already done)
FILES_TO_UPDATE = [
    'about.html',
    'portfolio.html',
    'services.html',
    'contact.html',
    'team.html',
    'testimonials.html',
    'starter-page.html'
]

def update_html_file(filepath):
    """Update a single HTML file to use component placeholders."""
    if not os.path.exists(filepath):
        print(f"  ⚠️  File not found: {filepath}")
        return False
    
    print(f"  Processing {os.path.basename(filepath)}...")
    
    # Read the file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Replace header section with placeholder
    header_pattern = r'<header id="header"[^>]*>.*?</header>'
    if re.search(header_pattern, content, re.DOTALL):
        content = re.sub(
            header_pattern,
            '<!-- Header Component Placeholder -->\n  <div id="header-placeholder"></div>',
            content,
            flags=re.DOTALL
        )
        print(f"    ✓ Replaced header")
    
    # 2. Replace industries section with placeholder (if it exists)
    industries_pattern = r'<!-- Industries Section -->.*?</section><!-- /Industries Section -->'
    if re.search(industries_pattern, content, re.DOTALL):
        content = re.sub(
            industries_pattern,
            '<!-- Industries Component Placeholder -->\n    <div id="industries-placeholder"></div>',
            content,
            flags=re.DOTALL
        )
        print(f"    ✓ Replaced industries section")
    
    # 3. Replace footer section with placeholder
    footer_pattern = r'<footer id="footer"[^>]*>.*?</footer>'
    if re.search(footer_pattern, content, re.DOTALL):
        content = re.sub(
            footer_pattern,
            '<!-- Footer Component Placeholder -->\n  <div id="footer-placeholder"></div>',
            content,
            flags=re.DOTALL
        )
        print(f"    ✓ Replaced footer")
    
    # 4. Replace mobile menu script with component loader reference
    mobile_script_pattern = r'<!-- Custom Mobile Menu Script -->.*?</script>\s*(?=\s*<!-- Dark Mode|</body>)'
    if re.search(mobile_script_pattern, content, re.DOTALL):
        content = re.sub(
            mobile_script_pattern,
            '<!-- Component Loader -->\n  <script src="assets/js/includes-loader.js"></script>\n',
            content,
            flags=re.DOTALL
        )
        print(f"    ✓ Replaced mobile menu script with component loader")
    
    # Only write if changes were made
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"    ✅ Successfully updated {os.path.basename(filepath)}")
        return True
    else:
        print(f"    ⚠️  No changes needed for {os.path.basename(filepath)}")
        return False

def main():
    """Main function to update all HTML files."""
    print("\n" + "=" * 60)
    print("GitHub Pages Component Refactoring")
    print("=" * 60 + "\n")
    
    # Get the script directory
    script_dir = Path(__file__).parent.parent
    os.chdir(script_dir)
    
    print(f"Working directory: {os.getcwd()}\n")
    
    success_count = 0
    for filename in FILES_TO_UPDATE:
        if update_html_file(filename):
            success_count += 1
        print()
    
    print("=" * 60)
    print(f"Refactoring Complete!")
    print(f"  Files updated: {success_count}/{len(FILES_TO_UPDATE)}")
    print(f"  Component files: includes/")
    print(f"  Loader script: assets/js/includes-loader.js")
    print("=" * 60)
    print("\n✅ Your website is now ready for GitHub Pages!")
    print("   All duplicated content extracted into reusable components.\n")

if __name__ == '__main__':
    main()
