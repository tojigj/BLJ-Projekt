import "./App.css";
import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import "./index.css";
import Footer from "./components/footer";
import { Dropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
