// EmailJS Configuration
// Follow these steps to set up EmailJS:

// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, Yahoo, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_email}} - your email (optional, can be set in template)
// 4. Get your credentials from EmailJS dashboard
// 5. Install EmailJS: npm install @emailjs/browser
// 6. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

// Example EmailJS template (create this in your EmailJS dashboard):
/*
Subject: New Contact Form Submission from {{from_name}}

Hi Yacine,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
*/
