import React, { useState } from 'react';
import axios from 'axios';
import "../styles.css";

const DonorForm = () => {
  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [donorContact, setDonorContact] = useState('');
  const [donorName, setDonorName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/donors/donate', {
        foodName,
        category,
        quantity,
        location,
        donorContact,
        donorName,
      })
      .then((response) => {
        setMessage('Your details were entered successfully.');
        console.log(response.data);
      })
      .catch((error) => {
        setMessage('Entered details do not match validation.');
        console.error(error);
      });
  };

  return (
    <div className="donor-form">
      <form onSubmit={handleSubmit}>
        <label>
          Food Name:
          <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Contact:
          <input type="text" value={donorContact} onChange={(e) => setDonorContact(e.target.value)} />
        </label>
        <br />
        <label>
          Donor Name:
          <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <p className="message">{message}</p>
      {message === 'Your details were entered successfully.' && (
        <p className="success-message">
          Your details were entered successfully!{' '}
          <a href="/" className="home-link">Go to Home</a>
        </p>
      )}
    </div>
  );
};

export default DonorForm;
