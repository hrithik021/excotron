// Quick email test script to verify GoDaddy Titan SMTP connection
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('\n🔍 Testing GoDaddy Titan Email Configuration...\n');

  // Log configuration (hide password)
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***' + process.env.EMAIL_PASSWORD.slice(-4) : 'NOT SET');
  console.log('SMTP Host: smtp.titan.email');
  console.log('SMTP Port: 587\n');

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: true, // Enable debug output
    logger: true  // Log information
  });

  try {
    console.log('📡 Attempting to verify SMTP connection...\n');

    // Verify connection
    await transporter.verify();
    console.log('\n✅ SMTP connection verified successfully!');

    console.log('\n📧 Sending test email...\n');

    // Send test email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'Test Email from Excotron Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #14b8a6;">Email Test Successful!</h2>
          <p>This is a test email from your Excotron Solutions contact form.</p>
          <p>If you're seeing this, your email configuration is working correctly.</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    console.log('\n✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\n✨ Email configuration is working correctly!\n');

  } catch (error) {
    console.error('\n❌ Error occurred:\n');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);

    if (error.code) {
      console.error('Error code:', error.code);
    }

    if (error.response) {
      console.error('Server response:', error.response);
    }

    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Verify EMAIL_USER is correct in .env.local');
    console.log('2. Verify EMAIL_PASSWORD is correct in .env.local');
    console.log('3. Check if SMTP is enabled in your GoDaddy account');
    console.log('4. Ensure you\'re using the correct password (not app password)');
    console.log('5. Try logging into webmail to verify credentials work\n');
  }
}

testEmail();
