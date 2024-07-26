import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewDistrict from "./districts/pages/NewDistrict";
// import Test from "./districts/pages/Test";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/home" element={<NewDistrict />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
