import React from "react";
import DonorForm from "../components/DonorForm";
import "../styles.css";

const DonorPage = () => {
  return (
    <div className="donor-page">
      <h2 className="donor-page-title">Donor Page</h2>
      <p className="donor-page-paragraph">
        Thank you for considering to be a donor! Your generosity plays a vital role in supporting our food distribution system and making a positive impact in the community. By donating food items, you are helping us provide assistance to those in need and reducing food waste. We appreciate your contribution and dedication to helping others. Together, we can make a difference!
      </p>
      <DonorForm />
    </div>
  );
};

export default DonorPage;
