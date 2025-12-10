module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
    const fullName = `${firstName} ${lastName}`;

    console.log('Processing quote request for:', fullName);

    // Try to send emails
    try {
      const nodemailer = require('nodemailer');
      
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      console.log('Transporter created, attempting to send emails...');

      // Email to business owner
      const businessEmailResult = await transporter.sendMail({
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
      });

      console.log('Business email sent:', businessEmailResult.messageId);

      // Acknowledgment email to customer
      const customerEmailResult = await transporter.sendMail({
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
      });

      console.log('Customer email sent:', customerEmailResult.messageId);

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      console.error('Error details:', emailError.message);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Quote request sent successfully!' 
    });
    
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ 
      error: 'Failed to process request', 
      details: error.message 
    });
  }
};
