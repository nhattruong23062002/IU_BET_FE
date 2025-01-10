import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
