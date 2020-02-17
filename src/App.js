import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import WorkForUs from "./components/WorkForUs";
import WorkWithUs from "./components/WorkWithUs";
import Footer from "./components/Footer";
import OurTalent from "./components/OurTalent";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <WorkForUs path="/workforus" />
        <WorkWithUs path="/workwithus" />
        <OurTalent path="/ourtalent" />
      </Router>
      <Footer path="contact" />
    </div>
  );
}

export default App;
