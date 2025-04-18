

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config(); // Load environment variables

const propertyRoutes = require('./src/app/m-backend/routes/propertyRoutes'); // Property route

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(
  process.env.MONGO_URI || 'mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ====== MODELS ======

// Registration Schema
const registerSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  mobile: String,
  userType: String,
});
const Register = mongoose.model('register', registerSchema);

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Feedback = mongoose.model('feedback', feedbackSchema);

// ====== ROUTES ======

// Registration
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

// Login
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
    console.error('❌ Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Feedback Submission Route ✅
app.post('/api/submit-feedback', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error('❌ Error saving feedback:', err);
    res.status(500).json({ message: 'Failed to submit feedback' });
  }
});

// Test Route
app.get('/api/test', (req, res) => {
  res.status(200).json('Test API working!');
});

// Property Routes
app.use('/api/properties', propertyRoutes);

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
