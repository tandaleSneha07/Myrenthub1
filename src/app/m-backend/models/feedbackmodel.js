const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    tenantName: {
        type: String,
        required: true,
        trim: true
      },
      property: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },
      comments: {
        type: String,
        required: true
      },
      suggestions: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});
module.exports = mongoose.model('feedback',feedbackSchema );
