const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Home page – list all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.render('index', { students });
  } catch (err) {
    res.status(500).send('Error fetching students');
  }
});

// Registration form
router.get('/register', (req, res) => {
  res.render('register');
});

// Handle form submission
router.post('/register', async (req, res) => {
  const { name, email, course } = req.body;
  try {
    await Student.create({ name, email, course });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error registering student');
  }
});

module.exports = router;