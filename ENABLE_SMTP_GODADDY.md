# How to Enable SMTP for GoDaddy Titan Email

## Current Status
✅ Credentials confirmed: `Hr@excotronsolution.com` / `@hrithik021`
❌ SMTP authentication failing: `535 5.7.8 Error: authentication failed`

This means **SMTP access is not enabled** in your GoDaddy account.

## Step-by-Step Guide to Enable SMTP

### Method 1: Enable SMTP in Titan Email Settings

1. **Log into Titan Email Webmail**
   - Go to: https://login.titan.email/
   - Email: `Hr@excotronsolution.com`
   - Password: `@hrithik021`

2. **Access Settings**
   - Once logged in, click on your **profile icon** (top right)
   - Click **Settings** or **Account Settings**

3. **Enable SMTP/IMAP**
   - Look for **Email Protocols** or **SMTP/IMAP Settings**
   - Toggle **Enable SMTP** to ON
   - Toggle **Enable IMAP** to ON (recommended)
   - Click **Save Changes**

4. **Generate App Password (if required)**
   - Some Titan accounts require "App Passwords" for SMTP
   - Look for **Security** → **App Passwords**
   - Click **Generate New App Password**
   - Select **Email Client** or **SMTP**
   - Copy the generated password
   - Update your `.env.local` with this new password

### Method 2: Enable SMTP via GoDaddy Dashboard

1. **Log into GoDaddy**
   - Go to: https://www.godaddy.com/
   - Sign in with your GoDaddy account

2. **Navigate to Email Dashboard**
   - Click **Email & Office** in the menu
   - Or go directly to: https://account.godaddy.com/products

3. **Select Your Email Account**
   - Find **Professional Email** or **Titan Email**
   - Click **Manage** next to excotronsolution.com

4. **Access Email Settings**
   - Find `Hr@excotronsolution.com` in the list
   - Click **Settings** or the gear icon next to it

5. **Enable SMTP Access**
   - Look for **Email Client Settings** or **SMTP Settings**
   - Enable **SMTP Access**
   - Enable **Less Secure App Access** (if shown)
   - Save changes

### Method 3: Contact GoDaddy Support

If you can't find the SMTP settings:

1. **Contact GoDaddy Support**
   - Phone: 480-505-8877 (USA)
   - Chat: https://www.godaddy.com/contact-us
   - Tell them: "I need to enable SMTP access for my Titan Email account Hr@excotronsolution.com"

2. **What to Ask**
   - "Can you enable SMTP/IMAP for my Titan Email account?"
   - "Do I need an app-specific password for SMTP?"
   - "What are the correct SMTP settings for my account?"

## Alternative: Check if Two-Factor Authentication is Enabled

If you have 2FA enabled on your account:

1. **You MUST use an App Password** instead of your regular password
2. Go to Titan Email → Settings → Security
3. Generate an App Password for "Email Client" or "SMTP"
4. Use that password in `.env.local` instead of `@hrithik021`

## After Enabling SMTP

Once you've enabled SMTP in your GoDaddy account:

1. **Wait 5-10 minutes** for changes to propagate

2. **Test the connection**:
   ```bash
   node test-email.js
   ```

3. **Look for success**:
   ```
   ✅ SMTP connection verified successfully!
   ✅ Test email sent successfully!
   ```

4. **Restart your dev server**:
   ```bash
   # Kill server (Ctrl+C) then:
   npm run dev
   ```

5. **Test the contact form**:
   - Go to: http://localhost:3000/contact
   - Fill out and submit the form
   - Check your email!

## GoDaddy Titan SMTP Settings (Reference)

For email client configuration:

- **Incoming (IMAP)**:
  - Server: `imap.titan.email`
  - Port: 993
  - Security: SSL/TLS

- **Outgoing (SMTP)**:
  - Server: `smtp.titan.email`
  - Port: 587
  - Security: STARTTLS
  - Authentication: Required

## Troubleshooting

### Still getting authentication errors?

1. **Try lowercase email**: Change to `hr@excotronsolution.com` in `.env.local`
2. **Check for typos**: Verify password has no extra spaces
3. **Generate App Password**: Use app-specific password instead
4. **Wait**: Changes can take 5-10 minutes to take effect
5. **Contact Support**: GoDaddy can verify and enable SMTP for you

### Common Issues

**Issue**: "SMTP is not available for your plan"
**Solution**: Upgrade to a plan that includes SMTP, or use a service like SendGrid/Resend

**Issue**: "App password required"
**Solution**: Generate app password in Titan Email settings

**Issue**: "Account locked"
**Solution**: Verify account is active and not suspended in GoDaddy dashboard

## Quick Reference Links

- GoDaddy Titan Email Login: https://login.titan.email/
- GoDaddy Account: https://account.godaddy.com/
- GoDaddy Support: https://www.godaddy.com/contact-us
- Titan Email Help: https://support.titan.email/

## Next Steps

1. ⏳ Enable SMTP in your GoDaddy/Titan account (follow Method 1 or 2 above)
2. ⏳ Wait 5-10 minutes for changes to take effect
3. ⏳ Run `node test-email.js` to verify
4. ✅ Test contact form at http://localhost:3000/contact

---

**Important**: Once SMTP is enabled, the contact form will work immediately!
