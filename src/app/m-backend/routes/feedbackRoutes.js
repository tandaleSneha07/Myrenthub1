const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbackmodel');

// POST /api/feedbacks/add
router.post('/add', async (req, res) => {
  console.log('📥 Received feedback data:', req.body);
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    console.log('✅ Feedback saved to DB');
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('❌ Error saving feedback:', error);
    res.status(500).json({ message: 'Failed to submit feedback' });
  }
});

module.exports = router;
