
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// require('dotenv').config();  // For environment variables

// // Models import
// const login = require('./models/loginmodel');
// const register = require('./models/registrationmodel');
// const Feedback = require('./models/feedbackmodel');
// const propertyRoutes = require('./routes/propertyRoutes');
// const feedbackRoutes = require('./routes/feedbackRoutes'); // ✅ Added feedback routes import
// const accountRoutes = require('./routes/accountRoutes'); 
// const app = express();
// const PORT = process.env.PORT || 5000;  // Make sure the port is 5000 or your desired port

// // ✅ MongoDB connection
// mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0', { 
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ Connected to MongoDB Atlas'))
// .catch((err) => {
//   console.error('❌ MongoDB connection error:', err);
//   process.exit(1);  // Exit process if database connection fails
// });

// // ✅ Middleware
// const corsOptions = {
//   origin: 'http://localhost:4200',  // Update this with your frontend URL if it's different
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));  // Use the configured CORS
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // ✅ Routes
// app.use('/api/properties', propertyRoutes); // Property Routes
// app.use('/api/feedbacks', feedbackRoutes); // Feedback Routes
// app.use('/api/accounts', accountRoutes); // Account Routes

// // ✅ Default root route
// app.get('/', (req, res) => {
//   res.send('🚀 MyRentHub Server is Running...');
// });

// // ✅ Error handling middleware (to catch errors not handled by routes)
// app.use((err, req, res, next) => {
//   console.error('❌ Error:', err.message || err);  // Log error details
//   if (err instanceof SyntaxError) {
//     return res.status(400).json({ message: 'Bad Request - Invalid JSON format' });
//   }
//   res.status(500).json({ message: 'Internal Server Error', error: err.message });
// });


// // ✅ Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();  // For environment variables

// Models import
const login = require('./models/loginmodel');
const register = require('./models/registrationmodel');
const Feedback = require('./models/feedbackmodel');

// Routes import
const propertyRoutes = require('./routes/propertyRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ MongoDB connection
mongoose.connect(
  process.env.MONGO_URI || 'mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// ✅ Middleware
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Login Route (Temporary dummy)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Replace with DB authentication logic later
  if (username === 'Riya' && password === 'riya@2313') {
    res.status(200).json({
      message: 'Login successful',
      userType: 'tenant', // or 'landlord'
      username: 'Riya'
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// ✅ Other Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/accounts', accountRoutes);

// ✅ Root route
app.get('/', (req, res) => {
  res.send('🚀 MyRentHub Server is Running...');
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message || err);
  if (err instanceof SyntaxError) {
    return res.status(400).json({ message: 'Bad Request - Invalid JSON format' });
  }
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
