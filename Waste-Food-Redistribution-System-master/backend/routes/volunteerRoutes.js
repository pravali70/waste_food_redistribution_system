// backend/routes/volunteerRoutes.js
const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

router.get('/uncollected-food-items', volunteerController.getUncollectedFoodItems);
router.patch('/food-items', volunteerController.updateFoodItems);

module.exports = router;
