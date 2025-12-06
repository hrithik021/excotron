import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using GoDaddy/Titan email settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email', // GoDaddy Titan SMTP server
      port: 587, // TLS port
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // hr@excotronsolution.com
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    // Email content to send to your company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your own email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>

            <div style="margin-bottom: 20px;">
              <p style="margin: 5px 0; color: #6b7280;"><strong style="color: #1f2937;">Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong style="color: #1f2937;">Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 5px 0; color: #6b7280;"><strong style="color: #1f2937;">Company:</strong> ${company}</p>` : ''}
              ${phone ? `<p style="margin: 5px 0; color: #6b7280;"><strong style="color: #1f2937;">Phone:</strong> ${phone}</p>` : ''}
              <p style="margin: 5px 0; color: #6b7280;"><strong style="color: #1f2937;">Service Interested In:</strong> ${service}</p>
            </div>

            <div style="margin-top: 20px; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
              <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
              <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This email was sent from the Excotron Solutions contact form.
                <br>
                Submitted on: ${new Date().toLocaleString('en-US', {
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Excotron Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">Dear ${name},</p>

            <p style="color: #4b5563; line-height: 1.6;">
              Thank you for contacting Excotron Solutions. We have received your inquiry and our team will review it shortly.
            </p>

            <p style="color: #4b5563; line-height: 1.6;">
              One of our representatives will get back to you within 24 hours during business hours (Monday - Friday, 9:00 AM - 6:00 PM IST).
            </p>

            <div style="margin: 30px 0; padding: 20px; background-color: #f0fdfa; border-left: 4px solid #14b8a6; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #0f766e;">Your Submission Summary:</h3>
              <p style="margin: 5px 0; color: #115e59;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 5px 0; color: #115e59;"><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
            </div>

            <p style="color: #4b5563; line-height: 1.6;">
              In the meantime, feel free to explore our website to learn more about our services and solutions.
            </p>

            <div style="margin-top: 30px; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
              <h3 style="margin-top: 0; color: #1f2937;">Contact Information</h3>
              <p style="margin: 5px 0; color: #6b7280;">
                <strong>Email:</strong> hr@excotronsolution.com<br>
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (IST)
              </p>
            </div>

            <p style="color: #4b5563; margin-top: 30px;">
              Best regards,<br>
              <strong style="color: #14b8a6;">The Excotron Solutions Team</strong>
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                &copy; ${new Date().getFullYear()} Excotron Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    // Check if credentials are loaded
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASSWORD exists:', !!process.env.EMAIL_PASSWORD);

    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
