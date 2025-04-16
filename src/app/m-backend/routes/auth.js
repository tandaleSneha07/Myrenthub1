// routes/auth.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('./m-backend./models/user');
// const router = express.Router();
// const Register = require('../models/registrationmodel');

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Find user by username
//     const user = await Register.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ msg: 'User not found' });
//     }

//     // Check if the password matches
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     // Create JWT token
//     const token = jwt.sign(
//       { userId: user._id, userType: user.userType },
//       'your_jwt_secret', // Replace with a real secret
//       { expiresIn: '1h' }
//     );

//     res.json({ token, userType: user.userType });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;

// routes/auth.js
const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');
 // your Mongoose model
const bcrypt = require('bcrypt'); // if you're hashing passwords

// LOGIN API
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    // if using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

    res.status(200).json({
      message: 'Login successful',
      userType: user.userType,
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
