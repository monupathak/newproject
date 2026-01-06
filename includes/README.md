# Website Components for GitHub Pages

This directory contains reusable HTML components that are dynamically loaded into each page by `assets/js/includes-loader.js`.

## Component Files

### `header.html`
- **Purpose**: Site header with logo, navigation menu, and mobile menu
- **Loaded into**: All pages via `#header-placeholder` div
- **Contains**:
  - Logo and branding
  - Main navigation menu
  - Mobile menu button and overlay
  - Custom mobile menu structure

### `footer.html`
- **Purpose**: Site footer with links and copyright
- **Loaded into**: All pages via `#footer-placeholder` div
- **Contains**:
  - Footer branding and contact info
  - Useful links navigation
  - Social media links
  - Copyright notice

### `industries.html`
- **Purpose**: "Industries We Serve" section showcasing 19 industry sectors
- **Loaded into**: Pages with `#industries-placeholder` div (index.html, about.html)
- **Contains**:
  - Section title and description
  - 19 industry cards with icons and names
  - AOS animations

### `mobile-menu-script.html`
- **Purpose**: JavaScript for mobile menu functionality
- **Loaded into**: All pages automatically by includes-loader.js
- **Contains**:
  - Mobile menu open/close handlers
  - Submenu toggle logic
  - Click-outside-to-close functionality
  - Overflow prevention

## How It Works

1. Each HTML page includes placeholder divs:
   ```html
   <div id="header-placeholder"></div>
   <div id="footer-placeholder"></div>
   <div id="industries-placeholder"></div> <!-- Optional -->
   ```

2. The `assets/js/includes-loader.js` script loads these components on page load:
   ```html
   <script src="assets/js/includes-loader.js"></script>
   ```

3. Components are fetched via JavaScript `fetch()` API and injected into placeholders

## Benefits

✅ **No Code Duplication**: Header, footer, and industries section exist in one place  
✅ **Easy Maintenance**: Update once, changes reflect across all pages  
✅ **Lightweight**: Total component size ~15KB vs ~150KB+ duplicated across 8 pages  
✅ **GitHub Pages Compatible**: Pure static HTML/JS, no server-side processing required  
✅ **SEO Friendly**: Content loads immediately, search engines can index it  

## Editing Components

To update any component:

1. Edit the relevant file in `/includes/`
2. Changes will automatically appear on all pages that use that component
3. No need to update multiple HTML files

## File Structure

```
includes/
├── README.md                 # This file
├── header.html              # ~2KB - Site header
├── footer.html              # ~2KB - Site footer  
├── industries.html          # ~8KB - Industries section
└── mobile-menu-script.html  # ~2KB - Mobile menu JavaScript
```

## Technical Notes

- Components use **relative paths** (`assets/img/`, `index.html`, etc.)
- The loader script handles **AOS refresh** for dynamically loaded content
- Mobile menu script is loaded as inline JavaScript (not as external script tag)
- All components work with existing CSS in `assets/css/main.css`

---

**Last Updated**: January 2026  
**Maintained for**: GitHub Pages deployment
