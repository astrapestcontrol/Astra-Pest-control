// Professional Email Templates for Astra Pest Control

const adminEmailTemplate = (name, email, phone, service, timeframe, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - Astra Pest Control</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 30px; text-align: center; position: relative;">
              <div style="background-color: rgba(255,255,255,0.1); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">New Quote Request</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px; font-weight: 400;">Astra Pest Control - Professional Services</p>
            </td>
          </tr>
          
          <!-- Priority Alert -->
          <tr>
            <td style="padding: 30px;">
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px;">
                    <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <h3 style="margin: 0; color: #92400e; font-size: 16px; font-weight: 600;">Priority Action Required</h3>
                </div>
                <p style="margin: 0; color: #78350f; font-size: 14px;">New customer inquiry for ${service}. Recommended response time: within 2 hours for optimal conversion.</p>
              </div>
            </td>
          </tr>
          
          <!-- Customer Information -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 20px 0; font-weight: 600; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; display: inline-block;">Customer Information</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 10px; overflow: hidden;">
                <tr>
                  <td style="padding: 18px 20px; border-bottom: 1px solid #e5e7eb;">
                    <div style="display: flex; align-items: center;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="7" r="4" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <div>
                        <span style="color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</span>
                        <div style="color: #1f2937; font-size: 16px; font-weight: 600; margin-top: 2px;">${name}</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 18px 20px; border-bottom: 1px solid #e5e7eb;">
                    <div style="display: flex; align-items: center;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <div>
                        <span style="color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</span>
                        <div style="margin-top: 2px;">
                          <a href="mailto:${email}" style="color: #3b82f6; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 18px 20px; border-bottom: 1px solid #e5e7eb;">
                    <div style="display: flex; align-items: center;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <div>
                        <span style="color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</span>
                        <div style="margin-top: 2px;">
                          <a href="tel:${phone}" style="color: #3b82f6; font-size: 16px; font-weight: 600; text-decoration: none;">${phone}</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 18px 20px; border-bottom: 1px solid #e5e7eb;">
                    <div style="display: flex; align-items: center;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                        <path d="M9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.657 16.657L13.414 20.9C13.039 21.275 12.53 21.488 12 21.488C11.47 21.488 10.961 21.275 10.586 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <div>
                        <span style="color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Service Requested</span>
                        <div style="color: #1f2937; font-size: 16px; font-weight: 600; margin-top: 2px;">${service}</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 18px 20px;">
                    <div style="display: flex; align-items: center;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                        <circle cx="12" cy="12" r="10" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <polyline points="12,6 12,12 16,14" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <div>
                        <span style="color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Preferred Timeframe</span>
                        <div style="color: #1f2937; font-size: 16px; font-weight: 600; margin-top: 2px;">${timeframe}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;

const customerEmailTemplate = (name, service, timeframe) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #dc2626; padding: 40px 20px; text-align: center;">
              <table width="80" cellpadding="0" cellspacing="0" align="center" style="margin-bottom: 20px;">
                <tr>
                  <td style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 50%; text-align: center; font-size: 40px; line-height: 80px;">✅</td>
                </tr>
              </table>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">[OK] Request Received!</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">We'll contact you within 24 hours</p>
            </td>
          </tr>
          
          <!-- Success Badge -->
          <tr>
            <td style="padding: 30px 20px; text-align: center;">
              <span style="display: inline-block; background-color: #dcfce7; color: #166534; padding: 10px 20px; border-radius: 20px; font-weight: 600; font-size: 14px;">✓ Request Confirmed</span>
            </td>
          </tr>
          
          <!-- Greeting -->
          <tr>
            <td style="padding: 0 20px;">
              <p style="color: #0f172a; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">Hi ${name},</p>
              <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">
                Thank you for choosing Astra Pest Control! We've received your quote request and our team is reviewing it now. 
                We'll contact you shortly to discuss your pest control needs and provide a free, no-obligation quote.
              </p>
            </td>
          </tr>
          
          <!-- Request Summary -->
          <tr>
            <td style="padding: 0 20px 25px 20px;">
              <table width="100%" cellpadding="20" cellspacing="0" style="background-color: #faf8f5; border: 2px solid #e5e7eb;">
                <tr>
                  <td>
                    <h3 style="color: #0f172a; font-size: 16px; margin: 0 0 15px 0;">📋 Your Request Summary</h3>
                    <p style="margin: 8px 0; color: #64748b; font-size: 14px;">
                      <strong>Service:</strong> <span style="color: #0f172a;">${service}</span>
                    </p>
                    <p style="margin: 8px 0; color: #64748b; font-size: 14px;">
                      <strong>Timeframe:</strong> <span style="color: #0f172a;">${timeframe}</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- What Happens Next -->
          <tr>
            <td style="padding: 0 20px 25px 20px;">
              <h3 style="color: #0f172a; font-size: 18px; margin: 0 0 20px 0;">What Happens Next?</h3>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td width="50" valign="top">
                    <div style="width: 40px; height: 40px; background-color: #dc2626; border-radius: 50%; text-align: center; line-height: 40px; font-size: 20px; color: #ffffff;"></div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0 0 5px 0; color: #0f172a; font-size: 15px; font-weight: 600;">Review & Assessment</p>
                    <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.4;">Our team reviews your request and prepares a customized quote</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td width="50" valign="top">
                    <div style="width: 40px; height: 40px; background-color: #dc2626; border-radius: 50%; text-align: center; line-height: 40px; font-size: 20px; color: #ffffff;"></div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0 0 5px 0; color: #0f172a; font-size: 15px; font-weight: 600;">Personal Contact</p>
                    <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.4;">We'll call you at 0450 955 420 within 24 hours</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50" valign="top">
                    <div style="width: 40px; height: 40px; background-color: #dc2626; border-radius: 50%; text-align: center; line-height: 40px; font-size: 20px; color: #ffffff;"></div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0 0 5px 0; color: #0f172a; font-size: 15px; font-weight: 600;">Service Delivery</p>
                    <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.4;">Schedule your service at a convenient time</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CTA Section -->
          <tr>
            <td style="padding: 0 20px 30px 20px;">
              <table width="100%" cellpadding="25" cellspacing="0" style="background-color: #fef2f2;">
                <tr>
                  <td style="text-align: center;">
                    <h3 style="color: #991b1b; font-size: 18px; margin: 0 0 10px 0;">Need Immediate Assistance?</h3>
                    <p style="color: #7f1d1d; font-size: 14px; margin: 0 0 20px 0;">Our team is ready to help you right now</p>
                    <a href="tel:0450955420" style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;">📞 Call 0450 955 420</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Disclaimer -->
          <tr>
            <td style="padding: 0 20px 30px 20px; text-align: center;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">This is an automated confirmation. Please do not reply to this email.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px 20px; text-align: center;">
              <p style="color: #ffffff; font-size: 18px; font-weight: bold; margin: 0 0 10px 0;">Astra Pest Control</p>
              <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 15px 0;">Brisbane's Trusted Cleaning & Pest Control Experts</p>
              <p style="color: #94a3b8; font-size: 14px; margin: 5px 0;">
                <a href="tel:0450955420" style="color: #dc2626; text-decoration: none;">0450 955 420</a>
              </p>
              <p style="color: #94a3b8; font-size: 14px; margin: 5px 0;">
                <a href="mailto:Astrapestcontrol.au@gmail.com" style="color: #dc2626; text-decoration: none;">Astrapestcontrol.au@gmail.com</a>
              </p>
              <p style="color: #94a3b8; font-size: 13px; margin: 15px 0 0 0;">Brisbane • Ipswich • Gold Coast • Sunshine Coast</p>
              <p style="color: #64748b; font-size: 12px; margin: 15px 0 0 0;">© 2025 Astra Pest Control. All rights reserved.</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports = {
  adminEmailTemplate,
  customerEmailTemplate
};

const customerEmailTemplate = (name, service, timeframe) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request Confirmed - Astra Pest Control</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
              <div style="background-color: rgba(255,255,255,0.15); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Request Confirmed</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">We'll contact you within 24 hours</p>
            </td>
          </tr>
          
          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px 30px 30px; text-align: center;">
              <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 15px;">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 style="color: #065f46; font-size: 18px; margin: 0 0 8px 0; font-weight: 600;">Quote Request Received</h2>
                <p style="color: #047857; font-size: 14px; margin: 0;">Your request has been successfully submitted and is being reviewed by our team.</p>
              </div>
              
              <div style="text-align: left;">
                <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 15px 0; font-weight: 600;">Hello ${name},</h3>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                  Thank you for choosing Astra Pest Control for your pest management needs. We've received your quote request and our experienced team is reviewing the details to provide you with the most accurate and competitive pricing.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Request Summary -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #f9fafb; border-radius: 10px; padding: 25px; border: 1px solid #e5e7eb;">
                <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 20px 0; font-weight: 600; display: flex; align-items: center;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px;">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Your Request Summary
                </h3>
                
                <div style="display: flex; align-items: center; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                    <path d="M9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.657 16.657L13.414 20.9C13.039 21.275 12.53 21.488 12 21.488C11.47 21.488 10.961 21.275 10.586 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div>
                    <span style="color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Service</span>
                    <div style="color: #1f2937; font-size: 15px; font-weight: 600; margin-top: 2px;">${service}</div>
                  </div>
                </div>
                
                <div style="display: flex; align-items: center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                    <circle cx="12" cy="12" r="10" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="12,6 12,12 16,14" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div>
                    <span style="color: #6b7280; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Timeframe</span>
                    <div style="color: #1f2937; font-size: 15px; font-weight: 600; margin-top: 2px;">${timeframe}</div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          
          <!-- What Happens Next -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 25px 0; font-weight: 600;">What Happens Next?</h3>
              
              <div style="margin-bottom: 20px;">
                <div style="display: flex; align-items: flex-start; margin-bottom: 20px;">
                  <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                    <span style="color: white; font-weight: 700; font-size: 16px;">1</span>
                  </div>
                  <div>
                    <h4 style="color: #1f2937; font-size: 16px; margin: 0 0 5px 0; font-weight: 600;">Review & Assessment</h4>
                    <p style="color: #6b7280; font-size: 14px; margin: 0; line-height: 1.5;">Our expert team reviews your request and prepares a customized quote based on your specific needs.</p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: flex-start; margin-bottom: 20px;">
                  <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                    <span style="color: white; font-weight: 700; font-size: 16px;">2</span>
                  </div>
                  <div>
                    <h4 style="color: #1f2937; font-size: 16px; margin: 0 0 5px 0; font-weight: 600;">Personal Contact</h4>
                    <p style="color: #6b7280; font-size: 14px; margin: 0; line-height: 1.5;">We'll contact you within 24 hours to discuss your requirements and provide a detailed quote.</p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: flex-start;">
                  <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                    <span style="color: white; font-weight: 700; font-size: 16px;">3</span>
                  </div>
                  <div>
                    <h4 style="color: #1f2937; font-size: 16px; margin: 0 0 5px 0; font-weight: 600;">Service Scheduling</h4>
                    <p style="color: #6b7280; font-size: 14px; margin: 0; line-height: 1.5;">Once approved, we'll schedule your service at a time that's convenient for you.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          
          <!-- Contact Section -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 25px; text-align: center;">
                <h3 style="color: #92400e; font-size: 18px; margin: 0 0 10px 0; font-weight: 600;">Need Immediate Assistance?</h3>
                <p style="color: #78350f; font-size: 14px; margin: 0 0 20px 0;">Our team is ready to help you right now</p>
                <a href="tel:0450955420" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">Call 0450 955 420</a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 40px 30px; text-align: center;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">Astra Pest Control</h3>
                <p style="color: #9ca3af; font-size: 16px; margin: 0; font-weight: 500;">Professional Pest Control Services</p>
              </div>
              
              <div style="border-top: 1px solid #374151; padding-top: 20px;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px 0;">Brisbane & Gold Coast & Surrounding Areas</p>
                <div style="margin-bottom: 15px;">
                  <a href="tel:0450955420" style="color: #3b82f6; font-size: 16px; font-weight: 600; text-decoration: none; margin-right: 20px;">0450 955 420</a>
                  <a href="mailto:Astrapestcontrol.au@gmail.com" style="color: #3b82f6; font-size: 16px; font-weight: 600; text-decoration: none;">Astrapestcontrol.au@gmail.com</a>
                </div>
                <p style="color: #6b7280; font-size: 12px; margin: 0;">This is an automated confirmation. Please do not reply to this email.</p>
              </div>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports = {
  adminEmailTemplate,
  customerEmailTemplate
};
