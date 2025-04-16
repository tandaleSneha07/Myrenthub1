// models/Register.js
const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  userType: { type: String, enum: ['landlord', 'tenant'], required: true }
});

module.exports = mongoose.model('Register', registerSchema);

