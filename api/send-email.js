import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;

    // Validate required fields
    if (!firstName || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

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
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Timeframe:</strong> ${timeframe || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `
    });

    // Send confirmation to customer
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
          <li>Service: ${service || 'Not specified'}</li>
          <li>Timeframe: ${timeframe || 'Not specified'}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <p>For urgent matters, please call us directly at <strong>0450 955 420</strong></p>
        <p>Best regards,<br>Astra Pest Control Team</p>
      `
    });

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
}
