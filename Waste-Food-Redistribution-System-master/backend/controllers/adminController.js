const FoodItem = require('../models/FoodItem');

// Get all food items
exports.getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).json(foodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get collected food items
exports.getCollectedFoodItems = async (req, res) => {
  try {
    const collectedFoodItems = await FoodItem.find({ status: 'collected' });
    res.status(200).json(collectedFoodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get uncollected food items
exports.getUncollectedFoodItems = async (req, res) => {
  try {
    const uncollectedFoodItems = await FoodItem.find({ status: 'uncollected' });
    res.status(200).json(uncollectedFoodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
