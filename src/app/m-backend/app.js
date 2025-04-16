// const app = require('express')();
// const http= require('http').Server(app);
// const bodyParser = require('body-parser');
// const Feedback = require('./models/feedbackmodel');

// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0')

// const login = require('./models/loginmodel');

// const register = require('./models/registrationmodel');

// const feedback = require('./models/feedbackmodel');


// http.listen(3000,function(){
//     console.log('server is running');
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// // MongoDB connection
// mongoose.connect('mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0')
//   .then(() => console.log('✅ Connected to MongoDB Atlas'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Import your models
// const login = require('./models/loginmodel');
// const register = require('./models/registrationmodel');
// const Feedback = require('./models/feedbackmodel');

// // POST route to handle feedback form submission
// app.post('/submit-feedback', async (req, res) => {
//   try {
//     const feedback = new Feedback(req.body);
//     await feedback.save();
//     res.status(201).send('✅ Feedback submitted successfully');
//   } catch (err) {
//     console.error('❌ Error saving feedback:', err);
//     res.status(500).send('❌ Failed to submit feedback');
//   }
// });

// // Test route (optional)
// app.get('/', (req, res) => {
//   res.send('🚀 MyRentHub Server is Running...');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0')
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import models
const login = require('./models/loginmodel');
const register = require('./models/registrationmodel');
const Feedback = require('./models/feedbackmodel');
// Routes
const property = require('./models/propertymodel'); // ⬅️ Import property route file
app.use('/api', property); // ⬅️ All property-related routes start with /api

// POST: Submit feedback
app.post('/submit-feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send('✅ Feedback submitted successfully');
  } catch (err) {
    console.error('❌ Error saving feedback:', err);
    res.status(500).send('❌ Failed to submit feedback');
  }
});

// GET: Root test route
app.get('/', (req, res) => {
  res.send('🚀 MyRentHub Server is Running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
