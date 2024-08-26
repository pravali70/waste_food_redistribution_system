// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/food-items', adminController.getAllFoodItems);

module.exports = router;
