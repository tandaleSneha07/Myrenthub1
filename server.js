

// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect('mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Schema
const registerSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  mobile: String,
  userType: String, // 'tenant' or 'landlord'
});
const Register = mongoose.model('register', registerSchema);

// Registration API
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password, mobile, userType } = req.body;

    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Register({ username, email, password: hashedPassword, mobile, userType });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('❌ Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Login API
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await Register.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({
      message: 'Login successful',
      userType: user.userType,
      username: user.username,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



// ✅ Login Route
// app.post('/api/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await Register.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     // Optional: Generate JWT
//     // const token = jwt.sign({ userId: user._id, userType: user.userType }, 'your_jwt_secret', { expiresIn: '1h' });

//     res.status(200).json({ 
//       message: 'Login successful', 
//       userType: user.userType,
//       // token
//     });

//   } catch (error) {
//     console.error('❌ Login error:', error);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });

// Test Routes
// app.get('/', (req, res) => {
//   res.send({ message: '✅ Backend is working!' });
// });

// app.get('/api/test', (req, res) => {
//   res.send({ message: '🎯 You hit the /api/test route!' });
// });

// // Start Server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at: http://localhost:${PORT}`);
// });

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const authRoutes = require("./routes/auth");

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ MongoDB connection error:', err));

// // ✅ Register schema & model
// const registerSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   mobile: String,
//   userType: String
// });
// const Register = mongoose.model('register', registerSchema);

// // ✅ Registration route
// app.post('/api/register', async (req, res) => {
//   try {
//     const { username, email, password, mobile, userType } = req.body;

//     // Optional: check if user with same email exists
//     const existingUser = await Register.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists with this email' });
//     }

//     const newUser = new Register({ username, email, password, mobile, userType });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     console.error('❌ Registration error:', error);
//     res.status(500).json({ message: 'Server error during registration' });
//   }
// });
// // Login route
// app.post('/api/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find user by username
//     const user = await Register.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Compare passwords (if you're not using bcrypt for now)
//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     res.status(200).json({ message: 'Login successful', userType: user.userType });
//   } catch (error) {
//     console.error('❌ Login error:', error);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });


// // Root route
// app.get('/', (req, res) => {
//   res.send({ message: '✅ Backend is working!' });
// });

// // Test route
// app.get('/api/test', (req, res) => {
//   res.send({ message: '🎯 You hit the /api/test route!' });
// });

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at: http://localhost:${PORT}`);
// });
