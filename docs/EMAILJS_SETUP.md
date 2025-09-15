# EmailJS Setup Instructions

To enable the contact form functionality, you need to set up EmailJS. Follow these steps:

## 1. Install EmailJS

```bash
npm install @emailjs/browser
```

## 2. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Verify your email address

## 3. Set up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 4. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Hello {{to_name}},

You have a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Note down your **Template ID**

## 5. Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## 6. Update the Contact Page

1. Open `/app/contact/page.tsx`
2. Uncomment the EmailJS import:
```typescript
import emailjs from "@emailjs/browser";
```

3. Replace the placeholder values in the `handleSubmit` function:
```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: personalInfo.name,
  },
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

4. Remove or comment out the temporary simulation:
```typescript
// Remove this line:
// await new Promise((resolve) => setTimeout(resolve, 2000));
```

## 7. Environment Variables (Recommended)

For security, store your EmailJS credentials in environment variables:

1. Create a `.env.local` file in your project root:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the contact page to use environment variables:
```typescript
const result = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: personalInfo.name,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your email for the message
5. Verify the form shows success/error messages

## Troubleshooting

- Make sure all IDs and keys are correct
- Check that your email service is properly configured
- Ensure your template variables match the ones used in the code
- Check the browser console for any error messages
- Verify that EmailJS is not blocked by ad blockers

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 1 email template

This should be sufficient for most portfolio websites.