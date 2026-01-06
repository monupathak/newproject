/**
 * Dynamic Component Loader for GitHub Pages
 * Loads reusable HTML components (header, footer, industries section, mobile menu script)
 * into designated placeholder elements on each page
 */

(function() {
  'use strict';

  /**
   * Load an HTML component into a target element
   * @param {string} url - Path to the HTML component file
   * @param {string} targetId - ID of the target element
   * @param {Function} callback - Optional callback after loading
   */
  function loadComponent(url, targetId, callback) {
    const target = document.getElementById(targetId);
    if (!target) {
      console.warn(`Target element #${targetId} not found`);
      return;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        target.innerHTML = html;
        if (callback) callback();
      })
      .catch(error => {
        console.error(`Error loading ${url}:`, error);
      });
  }

  /**
   * Load a script component
   * @param {string} url - Path to the script component file
   * @param {Function} callback - Optional callback after loading
   */
  function loadScript(url, callback) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(scriptContent => {
        // Remove script tags if present in the file
        const cleanScript = scriptContent.replace(/<\/?script[^>]*>/g, '');
        
        // Create and execute script
        const script = document.createElement('script');
        script.textContent = cleanScript;
        document.body.appendChild(script);
        
        if (callback) callback();
      })
      .catch(error => {
        console.error(`Error loading script ${url}:`, error);
      });
  }

  // Load all components when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Load header first, then mobile menu script (which depends on header elements)
    loadComponent('includes/header.html', 'header-placeholder', function() {
      // Set active page based on current URL
      setActivePage();
      
      // Load mobile menu script after header is loaded
      loadScript('includes/mobile-menu-script.html');
    });

    // Load footer
    loadComponent('includes/footer.html', 'footer-placeholder');

    // Load industries section (only if placeholder exists on page)
    const industriesPlaceholder = document.getElementById('industries-placeholder');
    if (industriesPlaceholder) {
      loadComponent('includes/industries.html', 'industries-placeholder', function() {
        // Reinitialize AOS for dynamically loaded content
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }
      });
    }
  });

  /**
   * Set active class on navigation links based on current page
   */
  function setActivePage() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '');
    
    // Set active class on desktop nav
    const navLinks = document.querySelectorAll('#navmenu a[data-page]');
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === pageName || (pageName === '' && linkPage === 'index')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    // Set active class on mobile nav
    const mobileLinks = document.querySelectorAll('.custom-menu-item[data-page]');
    mobileLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === pageName || (pageName === '' && linkPage === 'index')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

})();
