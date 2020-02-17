import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage/Homepage.jsx";
import WorkForUs from "./components/WorkForUs";
import WorkWithUs from "./components/WorkWithUs";
import Footer from "./components/Footer";
import Form from "./components/ContactForm/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <WorkForUs path="/workforus" />
        <WorkWithUs path="/workwithus" />
        <Form path="/contactform" />
      </Router>
      <Footer path="contact" />
    </div>
  );
}

export default App;
