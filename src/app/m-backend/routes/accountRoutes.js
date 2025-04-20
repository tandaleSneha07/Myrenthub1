

// // Import express
// const express = require('express');
// const router = express.Router();

// // ✅ Import the Account model
// const Account = require('../models/accountmodel');  // Ensure the correct casing for the file name

// // Save/Update Account Details
// router.post('/save', async (req, res) => {
//   try {
//     // Destructure the fields from the request body
//     const { name, email, phone } = req.body;

//     // Check if the required fields are provided
//     if (!name || !email || !phone) {
//       return res.status(400).json({ message: 'All fields (name, email, phone) are required.' });
//     }

//     console.log('Attempting to save or update account.');

//     // Update if exists, else create
//     const account = await Account.findOneAndUpdate(
//       { email },  // Find account by email
//       { name, phone },  // Update the name and phone
//       { upsert: true, new: true }  // If account does not exist, create a new one; return the updated document
//     );
//     console.log('Account saved/updated:', account);
//     // Send success response with updated account data
//     res.status(200).json({
//       message: 'Account saved/updated successfully',
//       account
//     });

//   } catch (error) {
//     console.error('❌ Account save error:', error);  // Log the error for debugging purposes

//     // Return a more descriptive error message to the client
//     res.status(500).json({
//       message: 'Failed to save account',
//       error: error.message  // Send the specific error message for debugging
//     });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Account = require('../models/accountmodel'); // Import Account model

router.post('/save', async (req, res) => {
  try {
    console.log('Received data:', req.body);  // Log incoming request

    const { name, email, phone } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      console.log('Missing fields: name, email, or phone');
      return res.status(400).json({ message: 'All fields (name, email, phone) are required.' });
    }

    console.log('Attempting to save account...');

    const account = await Account.findOneAndUpdate(
      { email },  // Find account by email
      { name, phone },  // Update the account fields
      { upsert: true, new: true }  // Create a new one if it doesn't exist
    );

    console.log('Account saved/updated:', account);

    res.status(200).json({
      message: 'Account saved/updated successfully',
      account
    });

  } catch (error) {
    console.error('❌ Error occurred:', error.message);  // Log the error
    res.status(500).json({
      message: 'Failed to save account',
      error: error.message  // Send detailed error message for debugging
    });
  }
});

module.exports = router;
