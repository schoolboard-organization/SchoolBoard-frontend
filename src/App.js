import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewDistrict from "./districts/pages/NewDistrict";
import HomePage from "./districts/pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/newDistrict" element={<NewDistrict />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
