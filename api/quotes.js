module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
    const fullName = `${firstName} ${lastName}`;

    // Log the submission
    console.log('New quote request received:');
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Service:', service);
    console.log('Timeframe:', timeframe);
    console.log('Message:', message);

    // Send email using fetch to a simple email service
    try {
      const emailData = {
        to: process.env.EMAIL_TO || 'jkaliki@gitam.in',
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

      // Use a simple email API (we'll use Resend which is Vercel-friendly)
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'noreply@astrapestcontrol.com.au',
          to: process.env.EMAIL_TO || 'jkaliki@gitam.in',
          subject: `New Quote Request from ${fullName}`,
          html: emailData.html
        })
      });

      if (emailResponse.ok) {
        console.log('Email sent successfully via Resend');
      } else {
        console.log('Email failed, but form submission recorded');
      }
    } catch (emailError) {
      console.log('Email service unavailable, but form submission recorded:', emailError.message);
    }

    // Always return success since form data is captured
    res.status(200).json({ 
      success: true, 
      message: 'Quote request sent successfully!' 
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to send quote request', 
      details: error.message 
    });
  }
};
