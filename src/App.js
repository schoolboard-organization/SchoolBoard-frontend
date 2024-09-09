import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
function App() {
  return (
    <BrowserRouter>
      <main>
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
