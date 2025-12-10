module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
    const fullName = `${firstName} ${lastName}`;

    console.log('Processing quote request for:', fullName);

    // Try to send emails with simplified templates
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

      // Simplified professional business email
      const businessEmailResult = await transporter.sendMail({
        from: `"Astra Pest Control" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `New Quote Request from ${fullName} - ${service}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 600px;">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Quote Request</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Astra Pest Control</p>
                      </td>
                    </tr>
                    
                    <!-- Alert -->
                    <tr>
                      <td style="padding: 20px;">
                        <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                          <h3 style="margin: 0 0 5px 0; color: #92400e; font-size: 16px;">Priority Action Required</h3>
                          <p style="margin: 0; color: #78350f; font-size: 14px;">New customer inquiry for ${service}. Respond within 2 hours for best results.</p>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Customer Details -->
                    <tr>
                      <td style="padding: 0 20px 20px 20px;">
                        <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #dc2626; padding-bottom: 8px; display: inline-block;">Customer Information</h2>
                        
                        <table width="100%" cellpadding="12" cellspacing="0" style="background-color: #f9fafb; border-radius: 6px;">
                          <tr>
                            <td style="border-bottom: 1px solid #e5e7eb;">
                              <strong style="color: #6b7280; font-size: 13px;">NAME:</strong><br>
                              <span style="color: #1f2937; font-size: 15px; font-weight: 600;">${fullName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #e5e7eb;">
                              <strong style="color: #6b7280; font-size: 13px;">EMAIL:</strong><br>
                              <a href="mailto:${email}" style="color: #dc2626; font-size: 15px; font-weight: 600; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #e5e7eb;">
                              <strong style="color: #6b7280; font-size: 13px;">PHONE:</strong><br>
                              <a href="tel:${phone}" style="color: #dc2626; font-size: 15px; font-weight: 600; text-decoration: none;">${phone}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #e5e7eb;">
                              <strong style="color: #6b7280; font-size: 13px;">SERVICE:</strong><br>
                              <span style="color: #1f2937; font-size: 15px; font-weight: 600;">${service}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong style="color: #6b7280; font-size: 13px;">TIMEFRAME:</strong><br>
                              <span style="color: #1f2937; font-size: 15px; font-weight: 600;">${timeframe}</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    ${message ? `
                    <!-- Message -->
                    <tr>
                      <td style="padding: 0 20px 20px 20px;">
                        <h3 style="color: #1f2937; font-size: 16px; margin: 0 0 10px 0;">Additional Message:</h3>
                        <div style="background-color: #f0f9ff; border: 1px solid #dc2626; border-radius: 6px; padding: 15px;">
                          <p style="color: #991b1b; font-size: 14px; margin: 0; line-height: 1.5;">${message}</p>
                        </div>
                      </td>
                    </tr>
                    ` : ''}
                    
                    <!-- CTA -->
                    <tr>
                      <td style="padding: 0 20px 30px 20px; text-align: center;">
                        <a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">Call ${phone}</a>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
                        <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 5px 0;">Astra Pest Control</h3>
                        <p style="color: #9ca3af; font-size: 14px; margin: 0 0 10px 0;">Professional Pest Control Services</p>
                        <p style="color: #6b7280; font-size: 12px; margin: 0;">
                          <a href="tel:0450955420" style="color: #3b82f6; text-decoration: none;">0450 955 420</a> | 
                          <a href="mailto:Astrapestcontrol.au@gmail.com" style="color: #3b82f6; text-decoration: none;">Astrapestcontrol.au@gmail.com</a>
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `
      });

      console.log('Business email sent:', businessEmailResult.messageId);

      // Simplified customer acknowledgment email
      const customerEmailResult = await transporter.sendMail({
        from: `"Astra Pest Control" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Quote Request Confirmed - Astra Pest Control',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 600px;">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                        <div style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; background-color: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                          <img src="https://www.astrapestcontrol.com.au/faviconlogo.png" alt="Astra Pest Control" style="width: 60px; height: 60px; border-radius: 50%;" />
                        </div>
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Request Confirmed</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">We'll contact you within 24 hours</p>
                      </td>
                    </tr>
                    
                    <!-- Success Message -->
                    <tr>
                      <td style="padding: 30px 20px;">
                        <div style="background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%); border-radius: 8px; padding: 20px; margin-bottom: 20px; text-align: center;">
                          <h2 style="color: #991b1b; font-size: 16px; margin: 0 0 8px 0;">Quote Request Received</h2>
                          <p style="color: #dc2626; font-size: 14px; margin: 0;">Your request has been successfully submitted and is being reviewed.</p>
                        </div>
                        
                        <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 10px 0;">Hello ${firstName},</h3>
                        <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                          Thank you for choosing Astra Pest Control. We've received your quote request for <strong>${service}</strong> and our team is reviewing it now.
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Request Summary -->
                    <tr>
                      <td style="padding: 0 20px 20px 20px;">
                        <div style="background-color: #f9fafb; border-radius: 6px; padding: 20px;">
                          <h3 style="color: #1f2937; font-size: 16px; margin: 0 0 15px 0;">Your Request Summary</h3>
                          <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">
                            <strong>Service:</strong> <span style="color: #1f2937;">${service}</span>
                          </p>
                          <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">
                            <strong>Timeframe:</strong> <span style="color: #1f2937;">${timeframe}</span>
                          </p>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- What's Next -->
                    <tr>
                      <td style="padding: 0 20px 20px 20px;">
                        <h3 style="color: #1f2937; font-size: 16px; margin: 0 0 15px 0;">What Happens Next?</h3>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                          <tr>
                            <td width="40" valign="top">
                              <table width="28" height="28" cellpadding="0" cellspacing="0" style="background-color: #dc2626; border-radius: 50%;">
                                <tr>
                                  <td align="center" valign="middle" style="color: white; font-size: 14px; font-weight: bold; line-height: 28px;">1</td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top">
                              <h4 style="color: #1f2937; font-size: 14px; margin: 0 0 5px 0; font-weight: 600;">Review & Assessment</h4>
                              <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.4;">Our team reviews your request and prepares a customized quote.</p>
                            </td>
                          </tr>
                        </table>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                          <tr>
                            <td width="40" valign="top">
                              <table width="28" height="28" cellpadding="0" cellspacing="0" style="background-color: #dc2626; border-radius: 50%;">
                                <tr>
                                  <td align="center" valign="middle" style="color: white; font-size: 14px; font-weight: bold; line-height: 28px;">2</td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top">
                              <h4 style="color: #1f2937; font-size: 14px; margin: 0 0 5px 0; font-weight: 600;">Personal Contact</h4>
                              <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.4;">We'll contact you within 24 hours to discuss details.</p>
                            </td>
                          </tr>
                        </table>
                        
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td width="40" valign="top">
                              <table width="28" height="28" cellpadding="0" cellspacing="0" style="background-color: #dc2626; border-radius: 50%;">
                                <tr>
                                  <td align="center" valign="middle" style="color: white; font-size: 14px; font-weight: bold; line-height: 28px;">3</td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top">
                              <h4 style="color: #1f2937; font-size: 14px; margin: 0 0 5px 0; font-weight: 600;">Service Scheduling</h4>
                              <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.4;">Schedule your service at a convenient time.</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Contact -->
                    <tr>
                      <td style="padding: 0 20px 30px 20px;">
                        <div style="background-color: #fef3c7; border-radius: 6px; padding: 20px; text-align: center;">
                          <h3 style="color: #92400e; font-size: 16px; margin: 0 0 8px 0;">Need Immediate Assistance?</h3>
                          <p style="color: #78350f; font-size: 13px; margin: 0 0 15px 0;">Our team is ready to help you right now</p>
                          <a href="tel:0450955420" style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">Call 0450 955 420</a>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
                        <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 5px 0;">Astra Pest Control</h3>
                        <p style="color: #9ca3af; font-size: 14px; margin: 0 0 10px 0;">Professional Pest Control Services</p>
                        <p style="color: #6b7280; font-size: 12px; margin: 0;">
                          <a href="tel:0450955420" style="color: #3b82f6; text-decoration: none;">0450 955 420</a> | 
                          <a href="mailto:Astrapestcontrol.au@gmail.com" style="color: #3b82f6; text-decoration: none;">Astrapestcontrol.au@gmail.com</a>
                        </p>
                        <p style="color: #6b7280; font-size: 11px; margin: 10px 0 0 0;">This is an automated confirmation. Please do not reply to this email.</p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
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
