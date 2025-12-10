module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
    const fullName = `${firstName} ${lastName}`;

    // For now, just log the submission and return success
    // You can manually check these logs in Vercel Functions
    console.log('New quote request received:');
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Service:', service);
    console.log('Timeframe:', timeframe);
    console.log('Message:', message);

    // Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Quote request sent successfully!' 
    });

    // TODO: Set up email sending later
    // For now, you'll receive notifications via Vercel function logs
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to send quote request', 
      details: error.message 
    });
  }
};
