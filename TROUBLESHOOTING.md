# Email Authentication Troubleshooting

## Current Issue

**Error:** `535 5.7.8 Error: authentication failed`

This means the SMTP server is reachable, but your credentials are incorrect or SMTP is not enabled for your account.

## ✅ What's Working

- ✅ SMTP connection to smtp.titan.email
- ✅ TLS encryption is working
- ✅ Server is accepting connection on port 587
- ✅ Email format appears correct: hr@excotronsolution.com

## ❌ What's NOT Working

- ❌ Authentication is failing (username or password incorrect)

## How to Fix

### Step 1: Verify Your GoDaddy Titan Email Credentials

1. **Log into GoDaddy Webmail** to verify your credentials work:
   - Go to: https://login.titan.email/
   - Try logging in with:
     - Email: `hr@excotronsolution.com` (or `Hr@excotronsolution.com`)
     - Password: The password you have in `.env.local`

2. **If login fails**: You need to reset your password
   - Go to GoDaddy Email & Office Dashboard
   - Reset the password for hr@excotronsolution.com
   - Update `.env.local` with the new password

3. **If login succeeds**: Continue to Step 2

### Step 2: Enable SMTP Access in GoDaddy Titan

GoDaddy Titan Email may require you to enable SMTP/IMAP access:

1. Log into your **GoDaddy account**
2. Go to **Email & Office Dashboard**
3. Click on your email account (hr@excotronsolution.com)
4. Look for **Email settings** or **Account settings**
5. Find **SMTP/IMAP Access** and ensure it's **ENABLED**
6. Some accounts may require "App Passwords" for SMTP - check if this applies

### Step 3: Check for Special Characters

Your current password in `.env.local` is: `@hrithik021`

⚠️ **Important**: The `@` symbol at the beginning might be causing issues. Try these:

1. **If this is your actual password**, try wrapping it in quotes in `.env.local`:
   ```
   EMAIL_PASSWORD="@hrithik021"
   ```

2. **Or try without quotes but escape special characters**:
   ```
   EMAIL_PASSWORD=@hrithik021
   ```

3. **Verify the password doesn't have any hidden characters** (copy-paste issues)

### Step 4: Try Alternative Email Addresses

You mentioned two different email formats:
- `hr@excotronsolution.com` (currently in .env.local)
- `Hr@excotronsolution.com` (in your recent message)

Try both variations in `.env.local`:

```bash
# Option 1
EMAIL_USER=hr@excotronsolution.com

# Option 2
EMAIL_USER=Hr@excotronsolution.com
```

### Step 5: Check for App-Specific Passwords

Some email providers require app-specific passwords for SMTP:

1. Log into GoDaddy Titan Email webmail
2. Go to Settings → Security
3. Look for "App Passwords" or "SMTP Passwords"
4. If available, generate a new app password
5. Use that password instead in `.env.local`

### Step 6: Verify Domain and Email Setup

1. Check that your domain `excotronsolution.com` is active
2. Verify the email `hr@excotronsolution.com` exists and is active
3. Ensure there are no restrictions or blocks on the account

## Testing After Changes

After making any changes to `.env.local`:

1. **Save the file**
2. **Restart your Next.js dev server**:
   ```bash
   # Kill the server (Ctrl+C) and restart:
   npm run dev
   ```

3. **Run the test script**:
   ```bash
   node test-email.js
   ```

4. **Look for these success messages**:
   ```
   ✅ SMTP connection verified successfully!
   ✅ Test email sent successfully!
   ```

## Common Solutions

### Solution 1: Reset Password
The most common fix is to reset your GoDaddy Titan email password and update `.env.local`

### Solution 2: Enable SMTP
Ensure SMTP access is enabled in your GoDaddy Titan Email settings

### Solution 3: Use App Password
If your account requires it, generate and use an app-specific password

### Solution 4: Contact GoDaddy Support
If nothing works, contact GoDaddy support to verify:
- SMTP is enabled for your account
- There are no security blocks
- Your account has proper permissions

## Quick Test Checklist

- [ ] Logged into https://login.titan.email/ with same credentials
- [ ] SMTP/IMAP access is enabled in GoDaddy settings
- [ ] Password has no hidden/special characters
- [ ] Tried both email variations (hr@ and Hr@)
- [ ] Restarted dev server after .env.local changes
- [ ] Checked for app-specific password requirement
- [ ] Verified email account is active and not suspended

## Current Configuration

Your current `.env.local` should look like:

```env
EMAIL_USER=hr@excotronsolution.com
EMAIL_PASSWORD=@hrithik021
```

**Next Step**: Verify these credentials work by logging into the webmail at https://login.titan.email/

## Need Help?

If you've tried all these steps and it still doesn't work:

1. **Check GoDaddy documentation**: https://www.godaddy.com/help/send-email-with-smtp-35908
2. **Contact GoDaddy Support**: They can verify your SMTP settings
3. **Alternative**: Consider using a service like SendGrid or Resend for transactional emails

---

**Test Command**: `node test-email.js`

**Dev Server Restart**: Kill current server (Ctrl+C) → `npm run dev`
