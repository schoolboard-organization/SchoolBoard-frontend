import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewDistrict from "./districts/pages/NewDistrict";
import HomePage from "./districts/pages/HomePage";
import DistrictHome from "./districts/pages/DistrictHome";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/newDistrict" element={<NewDistrict />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/district/:districtNumber" element={<DistrictHome />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
