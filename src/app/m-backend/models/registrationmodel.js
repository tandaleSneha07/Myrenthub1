const mongoose = require('mongoose');
const validator = require('validator'); // for email validation

const registrationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email address']
  },
  phone: {
    type: String,
    required: true,
    match: [/^[6-9]\d{9}$/, 'Invalid phone number'] // For Indian phone numbers
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: function(value) {
        return value === this.password;
      },
      message: 'Passwords do not match'
    }
  },

});

module.exports = mongoose.model('registration', registrationSchema);

