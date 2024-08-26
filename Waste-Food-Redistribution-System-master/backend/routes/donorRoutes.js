// donorRoutes.js
const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');

router.post('/donate', donorController.createFoodItem);

module.exports = router;
