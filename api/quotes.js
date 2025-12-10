// Import email templates
const { adminEmailTemplate, customerEmailTemplate } = require('../server/emailTemplates');

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
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      console.log('Transporter created, attempting to send emails...');

      // Email to business owner using professional template
      const businessEmailResult = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        subject: `🚨 New Quote Request from ${fullName} - ${service}`,
        html: adminEmailTemplate(fullName, email, phone, service, timeframe, message)
      });

      console.log('Business email sent:', businessEmailResult.messageId);

      // Acknowledgment email to customer using professional template
      const customerEmailResult = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: '✅ Quote Request Received - Astra Pest Control',
        html: customerEmailTemplate(firstName, service, timeframe)
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
