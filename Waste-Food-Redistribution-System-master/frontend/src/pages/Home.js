import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const HomePage = () => {
  return (
    <main className="home-page">
      <h2>Are you</h2>
      <Link to="/donor" className="button">A Donor?</Link>
      <br />
      <Link to="/volunteer" className="button">A Volunteer?</Link>
      <br />
      <Link to="/admin" className="button">An Admin?</Link>
    </main>
  );
};

export default HomePage;
