const FoodItem = require('../models/FoodItem');

exports.getUncollectedFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find({ status: 'uncollected' });
    res.json(foodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateFoodItems = async (req, res) => {
  try {
    const { foodItemIds, volunteerName, volunteerContact } = req.body;

    // Update the selected food items with volunteer details
    await FoodItem.updateMany(
      { _id: { $in: foodItemIds } },
      { volunteerName, volunteerContact, status: 'collected' }
    );

    res.json({ message: 'Volunteer details updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
