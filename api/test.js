export default async function handler(req, res) {
  try {
    // Test environment variables
    const envCheck = {
      SMTP_HOST: process.env.SMTP_HOST || 'MISSING',
      SMTP_PORT: process.env.SMTP_PORT || 'MISSING',
      SMTP_USER: process.env.SMTP_USER || 'MISSING',
      SMTP_PASS: process.env.SMTP_PASS ? 'EXISTS' : 'MISSING',
      EMAIL_TO: process.env.EMAIL_TO || 'MISSING'
    };

    // Test nodemailer import
    let nodemailerStatus = 'OK';
    try {
      const nodemailer = await import('nodemailer');
      nodemailerStatus = 'IMPORTED';
    } catch (error) {
      nodemailerStatus = `ERROR: ${error.message}`;
    }

    res.status(200).json({
      message: 'Test endpoint working',
      environment: envCheck,
      nodemailer: nodemailerStatus,
      method: req.method,
      body: req.body
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack
    });
  }
}
