const express = require('express');
const router = express.Router();
const multer = require('multer');
const Property = require('../models/propertymodel'); // 🔁 lowercase and correct path



// File upload setup
const storage = multer.memoryStorage(); // or use diskStorage for local save
const upload = multer({ storage: storage });

// POST /api/properties
router.post('/add', upload.array('images'), async (req, res) => {
  try {
    const { propertyName, location, price, description, propertyType } = req.body;
    const images = req.files.map(file => file.originalname); // Replace with upload logic if needed

    const newProperty = new Property({
      propertyName,
      location,
      price,
      description,
      propertyType,
      images
    });

    await newProperty.save();
    res.status(201).json({ message: 'Property added successfully' });
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

