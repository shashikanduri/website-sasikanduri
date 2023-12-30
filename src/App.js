import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect } from 'react';
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="App">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Navigate to="/" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
