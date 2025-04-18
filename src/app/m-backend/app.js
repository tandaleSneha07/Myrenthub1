
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

// const app = express();
// const PORT = process.env.PORT || 3001;

// // ✅ MongoDB connection
// // mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0', {
//   mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0', { 
// useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ Connected to MongoDB Atlas'))
// .catch((err) => {
//   console.error('❌ MongoDB connection error:', err);
//   //process.exit(1);  // Exit process if database connection fails
// });

// // ✅ Middleware
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // ✅ Routes
// app.use('/api/properties', propertyRoutes); // Property Routes
// app.use('/api/feedbacks', feedbackRoutes); // Feedback Routes

// // ✅ Default root route
// app.get('/', (req, res) => {
//   res.send('🚀 MyRentHub Server is Running...');
// });

// // ✅ Error handling middleware (to catch errors not handled by routes)
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ message: 'Internal Server Error' });
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
const propertyRoutes = require('./routes/propertyRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes'); // ✅ Added feedback routes import

const app = express();
const PORT = process.env.PORT || 5000;  // Make sure the port is 5000 or your desired port

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);  // Exit process if database connection fails
});

// ✅ Middleware
const corsOptions = {
  origin: 'http://localhost:4200',  // Update this with your frontend URL if it's different
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));  // Use the configured CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Routes
app.use('/api/properties', propertyRoutes); // Property Routes
app.use('/api/feedbacks', feedbackRoutes); // Feedback Routes

// ✅ Default root route
app.get('/', (req, res) => {
  res.send('🚀 MyRentHub Server is Running...');
});

// ✅ Error handling middleware (to catch errors not handled by routes)
app.use((err, req, res, next) => {
  console.error(err);  // Log error details to console for debugging
  res.status(500).json({ message: 'Internal Server Error' });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
