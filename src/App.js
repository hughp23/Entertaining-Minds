import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage/Homepage";
import OurTalent from "./components/TheTeam/OurTalent";
import WorkForUs from "./components/TheTeam/WorkForUs";
import WorkWithUs from "./components/Clients/WorkWithUs";
import Footer from "./components/Footer";
import MeetTheTeam from "./components/TheTeam/MeetTheTeam";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <WorkForUs path="/theteam/workforus" />
        <WorkWithUs path="/workwithus" />
        <OurTalent path="/theteam/ourtalent" />
        <MeetTheTeam path="/theteam/meettheteam" />
      </Router>
      <Footer path="contact" />
    </div>
  );
}

export default App;
