import React from 'react';
import VolunteerForm from '../components/VolunteerForm';
import '../styles.css';

const VolunteerPage = () => {
  return (
    <div className="volunteer-page">
      <h2 className="volunteer-page-title">Become a Volunteer</h2>
      <p className="volunteer-page-text">Thank you for your willingness to volunteer!</p>
      <VolunteerForm />
    </div>
  );
};

export default VolunteerPage;
