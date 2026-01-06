# EmailJS Setup Instructions

The website uses EmailJS to handle form submissions for both the **Contact Form** and the **Free Consultation Modal**. Follow these steps to configure EmailJS:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, click **Add New Service**
2. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
3. For Gmail:
   - Click on Gmail
   - Sign in with your Google account
   - Allow EmailJS to send emails on your behalf
   - Set Service ID (e.g., `service_xyz1234`) - **Save this**

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{form_type}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent via the {{form_type}} on supplyopt.com
```

4. Template variables to include:
   - `{{from_name}}` - Name of sender
   - `{{from_email}}` - Email of sender
   - `{{phone}}` - Phone number (optional)
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{form_type}}` - Either "Contact Form" or "Free Consultation Request"

5. Set "Send To" email: `contact@supplyopt.com`
6. Save the template and note the **Template ID** (e.g., `template_abc5678`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)
3. Copy this key - **Save this**

## Step 5: Update Configuration

Open `/includes/mobile-menu-script.html` and replace these values around line 118-120:

```javascript
emailjs.init({
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your actual public key
});
```

Then around line 150 and 204, replace:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

With your actual Service ID and Template ID:

```javascript
emailjs.send('service_xyz1234', 'template_abc5678', templateParams)
```

### Example Configuration:

```javascript
// Line 118-120
emailjs.init({
  publicKey: 'AbCdEfGhIjKlMnOp',
});

// Line 150
emailjs.send('service_xyz1234', 'template_abc5678', templateParams)

// Line 204
emailjs.send('service_xyz1234', 'template_abc5678', templateParams)
```

## Step 6: Test the Forms

1. Save all changes and push to GitHub
2. Open your website
3. Test the **Contact Form** on the contact page
4. Test the **Book Free Call** button (consultation modal)
5. Check your email inbox for test messages

## Receiving Email Address

All form submissions will be sent to: **contact@supplyopt.com**

To change this:
1. Go to EmailJS dashboard → Email Templates
2. Edit your template
3. Change the "Send To" email address

## Troubleshooting

### Forms not sending
- Check browser console for errors (F12 → Console)
- Verify all three credentials are correct (Public Key, Service ID, Template ID)
- Make sure EmailJS library loads (check Network tab in browser)

### Emails not arriving
- Check spam folder
- Verify "Send To" email in EmailJS template settings
- Check EmailJS dashboard for usage limits (200/month on free plan)

### Error messages
- "EmailJS is not loaded" - CDN blocked or slow internet
- "Invalid public key" - Check your Public Key is correct
- "Service not found" - Verify Service ID
- "Template not found" - Verify Template ID

## Files Modified

- `/includes/mobile-menu-script.html` - Form submission handlers
- All HTML pages - EmailJS CDN script added
- `/assets/js/emailjs-config.js` - Configuration file (optional, for reference)

## Security Notes

- The Public Key is safe to expose in client-side code
- EmailJS handles rate limiting automatically
- Free tier: 200 emails/month
- For higher volumes, upgrade to paid plan

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS FAQ: https://www.emailjs.com/docs/faq/
- Contact EmailJS Support: https://www.emailjs.com/contact

---

**Ready to deploy?** Once configured, commit and push changes to GitHub Pages.
