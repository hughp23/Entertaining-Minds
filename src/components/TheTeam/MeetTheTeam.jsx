import React from "react";
import NavFixed from "../NavFixed";

const MeetTheTeam = () => {
  return (
    <div className="height100vh">
      <NavFixed />
      <h3>Meet the Team</h3>
      <section className="team-container flex-box width-full">
        <section className="team-member-container flex-box-column">
          <imgcontainer className="img-container">
            <div className="img-circle"></div>
          </imgcontainer>
          <namecontainer className="name-container"></namecontainer>
          <biocontainer className="bio-container"></biocontainer>
          <contactcontainer className="contact-details-container"></contactcontainer>
        </section>
        <section className="team-member-container flex-box-column">
          <imgcontainer className="img-container"></imgcontainer>
          <namecontainer className="name-container"></namecontainer>
          <biocontainer className="bio-container"></biocontainer>
          <contactcontainer className="contact-details-container"></contactcontainer>
        </section>
      </section>
    </div>
  );
};

export default MeetTheTeam;
