import "./App.css";
import React from "react";
import { Dropdown } from 'bootstrap';
import './components/CSS/popUp.css'
import Navbar from "./components/header";
import Home from "./components/home";
import "./index.css";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GebuchteSZ from "./components/gebuchteSitzungszimmer";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route
              exact
              path="gebuchte-sitzungszimmer"
              element={<GebuchteSZ />}
            ></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
