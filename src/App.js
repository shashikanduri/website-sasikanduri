import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
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
