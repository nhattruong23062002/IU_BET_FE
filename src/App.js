import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Định tuyến trang Login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
