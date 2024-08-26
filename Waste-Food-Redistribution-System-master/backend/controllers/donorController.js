// backend/controllers/donorController.js
const FoodItem = require('../models/FoodItem');

exports.createFoodItem = async (req, res) => {
  try {
    const { foodName, category, quantity, location, donorContact, donorName } = req.body;
    const foodItem = new FoodItem({
      foodName,
      category,
      quantity,
      location,
      donorContact,
      donorName,
      
    });
    await foodItem.save();
    res.status(201).json({ message: 'Food item created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
