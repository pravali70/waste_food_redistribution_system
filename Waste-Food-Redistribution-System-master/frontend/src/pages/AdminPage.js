import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get('http://localhost:4000/admins/food-items');
      setFoodItems(response.data);
      setShowTable(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchFoodItems = () => {
    fetchFoodItems();
  };

  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
      <button onClick={handleFetchFoodItems} className="fetch-food-btn">
        Get all the Food Details
      </button>
      {showTable && (
        <table className="food-table">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Donor Name</th>
              <th>Donor Contact</th>
              <th>Volunteer Name</th>
              <th>Volunteer Contact</th>
              <th>Status</th>
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
                <td>{foodItem.volunteerName}</td>
                <td>{foodItem.volunteerContact}</td>
                <td>{foodItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
