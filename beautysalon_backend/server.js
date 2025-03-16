const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = 'mongodb://localhost:27017/beautysalon'; // Your MongoDB URI

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Define Mongoose Schema and Model for Contact Form
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
}, { collection: 'contacts' });

const Contact = mongoose.model('Contact', contactSchema);

// 📌 API to submit the contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation for empty fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save()
      .then(() => {
        console.log("✅ Contact saved successfully!");
        res.status(200).json({ message: 'Your message has been received! We will get back to you soon.' });
      })
      .catch(err => {
        console.error('❌ Error saving contact to MongoDB:', err);
        res.status(500).json({ message: 'Error saving contact data.', error: err.message });
      });

  } catch (error) {
    console.error('❌ Error submitting contact form:', error); // Log full error for debugging
    res.status(500).json({ message: 'Error submitting contact form.', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
