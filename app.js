const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

/* -------------------- Middleware -------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true
}));

/* -------------------- View Engine -------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* -------------------- Static Files -------------------- */
app.use(express.static(path.join(__dirname, 'public')));

/* -------------------- Routes -------------------- */
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);   // 🔴 THIS LINE IS CRITICAL

/* -------------------- Server -------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`✅ Metrics available at http://localhost:${PORT}/metrics`);
});
