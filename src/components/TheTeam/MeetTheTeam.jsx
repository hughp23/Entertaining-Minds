import React from "react";
import NavFixed from "../NavFixed";
import "../../styling/TheTeam/_meettheteam.scss";
const phoneLogo = require("../../assets/phone.png");
const emailLogo = require("../../assets/email.png");

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team-container full-screen">
      <NavFixed />
      <h1 className="page-title">Meet the Team</h1>
      <section className="team-container flex-box-around">
        <section className="team-member-container flex-box-column">
          <imgcontainer className="img-container flex-box-around">
            <div className="img-circle img-1"></div>
          </imgcontainer>
          <namecontainer className="name-container flex-box-column-center">
            <h2>Jessica Paul</h2>
          </namecontainer>
          <biocontainer className="bio-container flex-box-column-center">
            <text>
              Melanie Paul is our very own Dementia Champion. Alongside her work
              as Director of Entertaining Minds she continues to work
              voluntarily for the Alzheimer Society in several capacities,
              working closely with individuals living with dementia. She has a
              wealth of knowledge of helping and supporting people with dementia
              and their carers. Earlier this year she was invited to St James’
              Palace as a finalist for the Peoples Award for this work.
            </text>
            <br />
            <text>
              Melanie ensures that each one of our entertainers have a thorough
              understanding of dementia by giving the Alzheimer Society Dementia
              Friends information session to everyone at their induction.
            </text>
          </biocontainer>
          <contactcontainer className="contact-details-container flex-box-column-center">
            <phonecontact className="flex-box-row">
              <img src={phoneLogo} alt="phone" />
              <text>07772023349</text>
            </phonecontact>
            <emailcontact className="flex-box-row">
              <img src={emailLogo} alt="email" />
              <text>info@entertainingminds.co.uk</text>
            </emailcontact>
          </contactcontainer>
        </section>
        <section className="team-member-container flex-box-column">
          <imgcontainer className="img-container flex-box-around">
            <div className="img-circle img-2"></div>
          </imgcontainer>
          <namecontainer className="name-container flex-box-column-center">
            <h2>Melanie Paul</h2>
          </namecontainer>
          <biocontainer className="bio-container flex-box-column-center">
            <text>
              Melanie Paul is our very own Dementia Champion. Alongside her work
              as Director of Entertaining Minds she continues to work
              voluntarily for the Alzheimer Society in several capacities,
              working closely with individuals living with dementia. She has a
              wealth of knowledge of helping and supporting people with dementia
              and their carers. Earlier this year she was invited to St James’
              Palace as a finalist for the Peoples Award for this work.
            </text>
            <br />
            <text>
              Melanie ensures that each one of our entertainers have a thorough
              understanding of dementia by giving the Alzheimer Society Dementia
              Friends information session to everyone at their induction.
            </text>
          </biocontainer>
          <contactcontainer className="contact-details-container flex-box-column-center">
            <phonecontact className="flex-box-row">
              <img src={phoneLogo} alt="phone" />
              <text>07976880954</text>
            </phonecontact>
            <emailcontact className="flex-box-row">
              <img src={emailLogo} alt="email" />
              <text>info@entertainingminds.co.uk</text>
            </emailcontact>
          </contactcontainer>
        </section>
      </section>
    </div>
  );
};

export default MeetTheTeam;
