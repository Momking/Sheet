import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DoctorsSheet from "./pages/DoctorsSheet";
import RetailorsSheet from "./pages/RetailorsSheet";
import Start from "./pages/Start";
import DoctorFeatures from "./pages/DoctorFeatures";
import RetailFeatures from "./pages/RetailFeatures";
import Price from "./pages/Price";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/About" element={<About />} />
      <Route path="/DoctorsSheet" element={<DoctorsSheet />} />
      <Route path="/DoctorsSheet/Features" element={<DoctorFeatures />} />
      <Route path="/DoctorsSheet/Price" element={<Price />} />
      <Route path="/RetailorsSheet" element={<RetailorsSheet />} />
      <Route path="/RetailorsSheet/Features" element={<RetailFeatures />} />
      <Route path="/RetailorsSheet/Price" element={<Price />} />
    </Routes>
  );
}

export default App;
