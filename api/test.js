const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // Test the exact same logic as quotes endpoint
      const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
      
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      // Just test connection, don't send email
      await transporter.verify();
      
      return res.status(200).json({
        success: true,
        message: 'POST test successful',
        receivedData: { firstName, lastName, email, phone, service, timeframe, message },
        smtpConnection: 'verified'
      });
    }

    // GET request
    const envCheck = {
      SMTP_HOST: process.env.SMTP_HOST || 'MISSING',
      SMTP_PORT: process.env.SMTP_PORT || 'MISSING',
      SMTP_USER: process.env.SMTP_USER || 'MISSING',
      SMTP_PASS: process.env.SMTP_PASS ? 'EXISTS' : 'MISSING',
      EMAIL_TO: process.env.EMAIL_TO || 'MISSING'
    };

    res.status(200).json({
      message: 'Test endpoint working',
      environment: envCheck,
      nodemailer: 'IMPORTED',
      method: req.method
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack
    });
  }
};
