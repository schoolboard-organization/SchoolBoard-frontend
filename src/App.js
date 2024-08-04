import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewDistrict from "./districts/pages/NewDistrict";
import AllDistricts from "./districts/pages/AllDistricts";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/newDistrict" element={<NewDistrict />} />
          <Route path="/allDistricts" element={<AllDistricts />} />

          <Route path="*" element={<Navigate to="/newDistrict" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
