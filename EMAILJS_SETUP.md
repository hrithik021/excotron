# EmailJS Setup Guide for Excotron Solutions

## ✅ What's Done

- ✅ Installed `@emailjs/browser` package
- ✅ Updated contact form to use EmailJS
- ✅ Configured environment variables structure
- ✅ Service ID: `service_r68d8cq` (Gmail)
- ✅ Template ID: `template_jyq6j9n`

## 🔑 What You Need to Do

You only need to add your **Public Key** to complete the setup!

### Step 1: Get Your Public Key

1. Go to: https://dashboard.emailjs.com/admin/account
2. Find the **Public Key** section (also called API Key)
3. Copy your public key (looks like: `xYz123AbC456...`)

### Step 2: Update .env.local

Open [.env.local](.env.local) and replace `YOUR_PUBLIC_KEY_HERE`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r68d8cq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_jyq6j9n
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE  # ← Replace this
```

**Example:**
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xYz123AbC456DefGhi789
```

### Step 3: Configure Your EmailJS Template

Your template needs these variables to receive the form data:

**Required Template Variables:**
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{company}}` - Company name (optional)
- `{{phone}}` - Phone number (optional)
- `{{service}}` - Service interested in
- `{{message}}` - Customer's message
- `{{to_email}}` - Your email (Hr@excotronsolution.com)

**Template Setup:**

1. Go to: https://dashboard.emailjs.com/admin/templates/`template_jyq6j9n`
2. Edit your template to include these variables
3. Example template:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
This email was sent from the Excotron Solutions contact form.
```

**Recommended HTML Template:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%); padding: 30px; color: white; }
    .content { background: white; padding: 30px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1f2937; }
    .value { color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">{{from_name}}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">{{from_email}}</span>
      </div>
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">{{company}}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">{{phone}}</span>
      </div>
      <div class="field">
        <span class="label">Service:</span>
        <span class="value">{{service}}</span>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <p class="value">{{message}}</p>
      </div>
    </div>
  </div>
</body>
</html>
```

### Step 4: Verify Gmail Service Settings

1. Go to: https://dashboard.emailjs.com/admin/services/`service_r68d8cq`
2. Ensure the service is **Active**
3. Verify it's connected to your Gmail account
4. Check that the "To Email" is set to `Hr@excotronsolution.com`

### Step 5: Test the Contact Form

1. **Restart your dev server**:
   ```bash
   # Press Ctrl+C to stop, then:
   npm run dev
   ```

2. **Open the contact form**:
   - Go to: http://localhost:3000/contact

3. **Fill out the test form**:
   - Name: Test User
   - Email: test@example.com
   - Service: Select any option
   - Message: This is a test message

4. **Submit and check**:
   - You should see: "✅ Thank you! Your message has been sent successfully..."
   - Check `Hr@excotronsolution.com` for the email

## 🎯 How It Works

1. **User fills out contact form** → [http://localhost:3000/contact](http://localhost:3000/contact)
2. **Form submits to EmailJS** → Client-side (no API route needed!)
3. **EmailJS sends email** → Using your Gmail service
4. **You receive email** → At Hr@excotronsolution.com

## ✨ Benefits of EmailJS

✅ **No SMTP configuration** - Works instantly
✅ **No server-side code** - All client-side
✅ **Free tier** - 200 emails/month
✅ **Reliable** - Better deliverability than SMTP
✅ **Auto-reply** - Can set up automatic responses
✅ **Easy setup** - Just add public key

## 📋 Checklist

- [x] EmailJS package installed
- [x] Contact form updated
- [x] Service ID configured: `service_r68d8cq`
- [x] Template ID configured: `template_jyq6j9n`
- [ ] Public Key added to `.env.local`
- [ ] EmailJS template configured with variables
- [ ] Gmail service verified and active
- [ ] Dev server restarted
- [ ] Test form submitted successfully

## 🔧 Troubleshooting

### Error: "Public key is required"
**Solution**: Add your public key to `.env.local` and restart dev server

### Error: "Service not found"
**Solution**: Verify `service_r68d8cq` is active in EmailJS dashboard

### Error: "Template not found"
**Solution**: Verify `template_jyq6j9n` exists in EmailJS dashboard

### No email received
**Solutions**:
1. Check spam folder
2. Verify "To Email" in EmailJS service settings
3. Check EmailJS dashboard logs for errors
4. Ensure Gmail service is connected and active

### Template variables not showing
**Solution**: Add the template variables ({{from_name}}, {{message}}, etc.) to your template

## 📚 Resources

- **EmailJS Dashboard**: https://dashboard.emailjs.com/admin
- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Get Public Key**: https://dashboard.emailjs.com/admin/account
- **Email Services**: https://dashboard.emailjs.com/admin/services
- **Email Templates**: https://dashboard.emailjs.com/admin/templates

## 🚀 Next Steps

1. **Get your Public Key** from https://dashboard.emailjs.com/admin/account
2. **Update `.env.local`** with your public key
3. **Restart dev server**: `npm run dev`
4. **Test the form**: http://localhost:3000/contact
5. **Check your email**: Hr@excotronsolution.com

That's it! Much simpler than SMTP! 🎉

## 💡 Optional: Auto-Reply Setup

To send automatic replies to customers:

1. Create a **second template** in EmailJS
2. Add another `emailjs.send()` call in the contact form
3. Send to `{{from_email}}` instead of your email
4. Customize the auto-reply message

Example in [app/contact/page.tsx](app/contact/page.tsx):

```typescript
// Send to you
await emailjs.send(...);

// Send auto-reply to customer
await emailjs.send(
  'service_r68d8cq',
  'template_autoreply', // Create this template
  {
    to_email: formData.email,
    from_name: formData.name,
    // ... other data
  },
  'your_public_key'
);
```

---

**Quick Start**: Just add your public key to `.env.local` and restart the server!
