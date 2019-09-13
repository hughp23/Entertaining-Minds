import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import WorkForUs from "./components/WorkForUs";
import WorkWithUs from "./components/WorkWithUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <WorkForUs path="/workforus" />
        <WorkWithUs path="/workwithus" />
      </Router>
      <Footer path="contact" />
    </div>
  );
}

export default App;
