# ⚡ Quick Start - EmailJS Setup

## You're Almost Done! Just 3 Steps:

### 1️⃣ Get Your Public Key
Go to: https://dashboard.emailjs.com/admin/account
Copy your **Public Key**

### 2️⃣ Update .env.local
Open `.env.local` and add your public key:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r68d8cq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_jyq6j9n
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=paste_your_key_here
```

### 3️⃣ Restart & Test
```bash
npm run dev
```

Then visit: http://localhost:3000/contact

---

## ✅ What's Already Configured

- Service ID: `service_r68d8cq` (Gmail)
- Template ID: `template_jyq6j9n`
- Contact form: Ready to use
- Email destination: Hr@excotronsolution.com

## 📧 Template Variables Needed

Make sure your EmailJS template includes:
- `{{from_name}}`
- `{{from_email}}`
- `{{company}}`
- `{{phone}}`
- `{{service}}`
- `{{message}}`

Edit template: https://dashboard.emailjs.com/admin/templates/template_jyq6j9n

---

**Full Guide**: See [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

That's it! 🚀
