// backend/models/FoodItem.js
const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: String, required: true },
  location: { type: String, required: true },
  donorName: { type: String, required: true },
  donorContact: { type: String, required: true },
  volunteerName: { type: String, default: 'N/A' },
  volunteerContact: { type: String, default: 'N/A' },
  status: { type: String, default: 'uncollected' }
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
