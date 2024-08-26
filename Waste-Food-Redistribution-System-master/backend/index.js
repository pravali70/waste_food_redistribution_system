// server.js
require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const donorRoutes = require('./routes/donorRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require('cors');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}@cluster1.whrouyy.mongodb.net/${process.env.mongo_db}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware
app.use(express.json());

// Register routes
app.use('/donors', donorRoutes);
app.use('/volunteers', volunteerRoutes);
app.use('/admins', adminRoutes);

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
