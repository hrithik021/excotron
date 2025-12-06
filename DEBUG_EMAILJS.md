# EmailJS Debugging Guide

## ✅ Fix Applied

Added EmailJS initialization with `useEffect` in the contact form. This was the missing piece!

## 🧪 How to Test

### Step 1: Restart Dev Server

**IMPORTANT**: You MUST restart the dev server for environment variables to load:

```bash
# Press Ctrl+C to stop the current server, then:
npm run dev
```

### Step 2: Open Browser Console

1. Open your browser
2. Go to http://localhost:3000/contact
3. Press `F12` or right-click → Inspect
4. Click the **Console** tab

### Step 3: Submit Test Form

Fill out the contact form with test data:
- Name: Test User
- Email: test@example.com
- Service: Any option
- Message: This is a test

Click **Send Message**

### Step 4: Check Console Output

You should see in the console:

**If successful:**
```
Attempting to send email with EmailJS...
Service ID: service_r68d8cq
Template ID: template_jyq6j9n
Public Key: Set
✅ Email sent successfully: {status: 200, text: "OK"}
```

**If there's an error:**
```
❌ Error sending email: [error details]
```

### Step 5: Check Your Email

If successful, check `Hr@excotronsolution.com` for the test email!

## 🔍 Common Issues & Solutions

### Issue 1: "Public Key: Missing" in console

**Solution**:
1. Dev server wasn't restarted after adding public key
2. Restart with `Ctrl+C` then `npm run dev`

### Issue 2: Template error

**Error**: `Template 'template_jyq6j9n' not found`

**Solution**:
1. Go to https://dashboard.emailjs.com/admin/templates
2. Verify template `template_jyq6j9n` exists
3. Make sure it has these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{service}}`
   - `{{message}}`

### Issue 3: Service error

**Error**: `Service 'service_r68d8cq' not found`

**Solution**:
1. Go to https://dashboard.emailjs.com/admin/services
2. Verify service `service_r68d8cq` exists and is active
3. Check it's connected to your Gmail account

### Issue 4: Invalid public key

**Error**: `The public key is invalid`

**Solution**:
1. Go to https://dashboard.emailjs.com/admin/account
2. Copy your public key again
3. Update `.env.local`
4. Restart dev server

### Issue 5: CORS error

**Error**: `Access to fetch blocked by CORS policy`

**Solution**:
1. Go to https://dashboard.emailjs.com/admin/account
2. Check **Allow List** settings
3. Add `localhost` or `*` (for testing)

## 📧 EmailJS Dashboard Checks

### 1. Verify Service (Gmail)
https://dashboard.emailjs.com/admin/services/service_r68d8cq

- [ ] Status: Active ✅
- [ ] Connected to Gmail
- [ ] "To Email" set to `Hr@excotronsolution.com`

### 2. Verify Template
https://dashboard.emailjs.com/admin/templates/template_jyq6j9n

- [ ] Template exists
- [ ] Has all required variables
- [ ] Preview looks correct

### 3. Check Email Logs
https://dashboard.emailjs.com/admin/logs

- After submitting the form, check logs for:
  - Success (green checkmark)
  - Or error message

## 🎯 Alternative: Test with Standalone HTML

If the Next.js form still doesn't work, try the standalone test:

1. Open `test-emailjs.html` in your browser
2. Fill out the form
3. Submit
4. This bypasses Next.js entirely to test EmailJS directly

To open it:
```bash
# On Mac:
open test-emailjs.html

# Or manually:
# Right-click test-emailjs.html → Open with → Browser
```

## 📊 Checklist

Before asking for help, verify:

- [ ] Dev server restarted after adding public key
- [ ] Public key is correct in `.env.local`
- [ ] Browser console shows "Public Key: Set"
- [ ] Service `service_r68d8cq` is active in EmailJS
- [ ] Template `template_jyq6j9n` exists in EmailJS
- [ ] Template has all required variables
- [ ] Gmail service is connected in EmailJS
- [ ] Checked EmailJS logs for errors

## 🆘 Still Not Working?

1. **Try the standalone test**: `test-emailjs.html`
2. **Check EmailJS dashboard logs**: https://dashboard.emailjs.com/admin/logs
3. **Verify template variables**: Go to template editor and ensure all `{{variable}}` names match
4. **Check EmailJS quota**: Free tier = 200 emails/month

## 💡 What Changed

**Before** (broken):
```typescript
// Missing initialization
await emailjs.send(...)
```

**After** (fixed):
```typescript
// Added initialization in useEffect
useEffect(() => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}, []);

await emailjs.send(...)
```

---

**Quick Test**: Restart server → Open console → Submit form → Check console for "✅ Email sent successfully"
