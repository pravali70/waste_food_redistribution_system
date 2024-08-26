import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DonorPage from "./pages/DonorPage";
import VolunteerPage from "./pages/VolunteerPage";
import AdminPage from "./pages/AdminPage";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/donor" element={<DonorPage/>} />
          <Route path="/volunteer" element={<VolunteerPage/>} />
          <Route path="/admin" element={<AdminPage/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
