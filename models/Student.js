const mongoose = require('mongoose');

// Define the schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  course: {
    type: String,
    required: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

// Export the model
module.exports = mongoose.model('Student', studentSchema);