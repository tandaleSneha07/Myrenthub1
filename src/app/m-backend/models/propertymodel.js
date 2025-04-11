const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  propertyType: {
    type: String,
    enum: ['apartment', 'villa', 'commercial'],
    required: true
  },
  images: {
    type: [String], // Array of image URLs or file paths
    default: []
  },
  landlordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the landlord user (optional)
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Property', PropertySchema);

