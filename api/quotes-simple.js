module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
    
    // Just return success without sending email for now
    res.status(200).json({ 
      success: true, 
      message: 'Quote request received successfully!',
      data: { firstName, lastName, email, phone, service, timeframe, message }
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to process request', 
      details: error.message 
    });
  }
};
