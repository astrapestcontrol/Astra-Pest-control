const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
    const fullName = `${firstName} ${lastName}`;

    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email to business owner
    const businessEmail = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `New Quote Request from ${fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeframe:</strong> ${timeframe}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Acknowledgment email to customer
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for your quote request - Astra Pest Control',
      html: `
        <h2>Thank you for contacting Astra Pest Control!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your quote request for <strong>${service}</strong> and will get back to you within 24 hours.</p>
        
        <h3>Your Request Details:</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeframe:</strong> ${timeframe}</p>
        <p><strong>Message:</strong> ${message}</p>
        
        <p>Best regards,<br>Astra Pest Control Team</p>
      `
    };

    // Send both emails
    await transporter.sendMail(businessEmail);
    await transporter.sendMail(customerEmail);

    res.status(200).json({ success: true, message: 'Quote request sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to send quote request', 
      details: error.message 
    });
  }
};
