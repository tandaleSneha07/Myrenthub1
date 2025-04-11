const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send({ message: '✅ Backend is working!' });
});
// ✅ Custom API route
app.get('/api/test', (req, res) => {
  res.send({ message: '🎯 You hit the /api/test route!' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
