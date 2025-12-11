const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, service, timeframe, message } = req.body;

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // Your Gmail address
      pass: process.env.SMTP_PASS  // Your Gmail app password
    }
  });

  try {
    // Send email to business
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'Astrapestcontrol.au@gmail.com',
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeframe:</strong> ${timeframe}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for your quote request - Astra Pest Control',
      html: `
        <h2>Thank you for your quote request!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your quote request and will contact you within 24 hours.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li>Service: ${service}</li>
          <li>Timeframe: ${timeframe}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <p>For urgent matters, please call us directly at <strong>0450 955 420</strong></p>
        <p>Best regards,<br>Astra Pest Control Team</p>
      `
    });

    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
