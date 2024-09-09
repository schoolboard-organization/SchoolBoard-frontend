import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NewDistrict from "./districts/pages/NewDistrict";
import HomePage from "./districts/pages/HomePage";
import DistrictHome from "./districts/pages/DistrictHome";
import FirstStep from "./steps/first/FirstStep";
import SecondStep from "./steps/second/SecondStep";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = (props) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/second" element={<SecondStep />} />
        <Route path="/newDistrict" element={<NewDistrict />} />
        <Route path="/first" element={<FirstStep />} />
        <Route path="/district/:districtNumber" element={<DistrictHome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/first" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
