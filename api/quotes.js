const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message, propertyType, propertySize } = req.body;

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Email to business owner
    const businessEmail = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Property Size:</strong> ${propertySize}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Acknowledgment email to customer
    const customerEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for your quote request - Astra Pest Control',
      html: `
        <h2>Thank you for contacting Astra Pest Control!</h2>
        <p>Dear ${name},</p>
        <p>We have received your quote request for <strong>${service}</strong> and will get back to you within 24 hours.</p>
        
        <h3>Your Request Details:</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Property Size:</strong> ${propertySize}</p>
        <p><strong>Message:</strong> ${message}</p>
        
        <p>If you have any urgent questions, please call us directly.</p>
        <p>Best regards,<br>Astra Pest Control Team</p>
      `
    };

    // Send both emails
    await transporter.sendMail(businessEmail);
    await transporter.sendMail(customerEmail);

    res.status(200).json({ success: true, message: 'Quote request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send quote request' });
  }
}
