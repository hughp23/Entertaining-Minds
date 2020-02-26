import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage/Homepage";
<<<<<<< HEAD
import WorkForUs from "./components/WorkForUs";
import WorkWithUs from "./components/WorkWithUs";
import OurTalent from "./components/OurTalent";
=======
import WorkForUs from "./components/TheTeam/WorkForUs";
import WorkWithUs from "./components/Clients/WorkWithUs";
>>>>>>> 6c637f44416bcab85ff753bb60ed3ce6dcf51a02
import Footer from "./components/Footer";
import MeetTheTeam from "./components/TheTeam/MeetTheTeam";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <WorkForUs path="/theteam/workforus" />
        <WorkWithUs path="/workwithus" />
<<<<<<< HEAD
        <OurTalent path="/ourtalent" />
=======
        <MeetTheTeam path="/theteam/meettheteam" />
>>>>>>> 6c637f44416bcab85ff753bb60ed3ce6dcf51a02
      </Router>
      <Footer path="contact" />
    </div>
  );
}

export default App;
