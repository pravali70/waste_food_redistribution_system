import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles.css";

const VolunteerForm = () => {
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerContact, setVolunteerContact] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/volunteers/uncollected-food-items')
      .then(response => {
        setFoodItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFoodItemSelect = (foodItemId) => {
    const isSelected = selectedFoodItems.includes(foodItemId);

    if (isSelected) {
      setSelectedFoodItems(selectedFoodItems.filter((id) => id !== foodItemId));
    } else {
      setSelectedFoodItems([...selectedFoodItems, foodItemId]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch('http://localhost:4000/volunteers/food-items', {
        foodItemIds: selectedFoodItems,
        volunteerName,
        volunteerContact,
      });

      setVolunteerName('');
      setVolunteerContact('');
      setSelectedFoodItems([]);
      setFormSubmitted(true);
      setShowTable(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTableSubmit = () => {
    setShowTable(true);
  };

  return (
    <div className="volunteer-form">
      {!formSubmitted ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Volunteer Name:
              <input
                type="text"
                value={volunteerName}
                onChange={(e) => setVolunteerName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Volunteer Contact:
              <input
                type="text"
                value={volunteerContact}
                onChange={(e) => setVolunteerContact(e.target.value)}
              />
            </label>
            <br />
            {showTable && (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Food Name</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Location</th>
                      <th>Donor Name</th>
                      <th>Donor Contact</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodItems.map((foodItem) => (
                      <tr key={foodItem._id}>
                        <td>{foodItem.foodName}</td>
                        <td>{foodItem.category}</td>
                        <td>{foodItem.quantity}</td>
                        <td>{foodItem.location}</td>
                        <td>{foodItem.donorName}</td>
                        <td>{foodItem.donorContact}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedFoodItems.includes(foodItem._id)}
                            onChange={() => handleFoodItemSelect(foodItem._id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <br />
            {!showTable && (
              <button
                type="button"
                className="submit-table-btn"
                onClick={handleTableSubmit}
              >
                Submit
              </button>
            )}
            {showTable && (
              <button type="submit" className="submit-btn">
                Apply
              </button>
            )}
          </form>
        </div>
      ) : (
        <div>
          <h2>Your details were sent successfully!</h2>
          <a href="/" className="home-link">Go to Home</a>
        </div>
      )}
    </div>
  );
};

export default VolunteerForm;
