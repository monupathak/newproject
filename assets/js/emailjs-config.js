/**
 * EmailJS Configuration and Form Handlers
 * 
 * Setup Instructions:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{from_name}}
 *    - {{from_email}}
 *    - {{phone}}
 *    - {{subject}}
 *    - {{message}}
 *    - {{form_type}}
 * 4. Replace the credentials below with your actual EmailJS credentials
 */

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',  // Replace with your EmailJS public key from Account page
  serviceId: 'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID (e.g., 'service_abc1234')
  templateId: 'YOUR_TEMPLATE_ID'  // Replace with your EmailJS template ID (e.g., 'template_xyz5678')
};

// Email to receive messages
const RECEIVING_EMAIL = 'contact@supplyopt.com';

// Initialize EmailJS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init({
      publicKey: EMAILJS_CONFIG.publicKey,
    });
    console.log('EmailJS initialized');
  } else {
    console.error('EmailJS library not loaded');
  }
});

/**
 * Send email using EmailJS
 * @param {Object} templateParams - Parameters for the email template
 * @param {Function} onSuccess - Callback for successful send
 * @param {Function} onError - Callback for error
 */
function sendEmail(templateParams, onSuccess, onError) {
  if (typeof emailjs === 'undefined') {
    onError(new Error('EmailJS is not loaded'));
    return;
  }

  emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  ).then(
    function(response) {
      console.log('Email sent successfully:', response.status, response.text);
      onSuccess(response);
    },
    function(error) {
      console.error('Email send failed:', error);
      onError(error);
    }
  );
}

// Export functions for use in other scripts
if (typeof window !== 'undefined') {
  window.EmailJSConfig = {
    send: sendEmail,
    receivingEmail: RECEIVING_EMAIL
  };
}
