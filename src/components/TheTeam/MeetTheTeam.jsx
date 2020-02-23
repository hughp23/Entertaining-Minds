import React from "react";
import NavFixed from "../NavFixed";
import "../../styling/TheTeam/_meettheteam.scss";
const phoneLogo = require("../../assets/phone.png");
const emailLogo = require("../../assets/email.png");
const instaLogo = require("../../assets/instagram.png");
const twitterLogo = require("../../assets/twitter.png");

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team-container full-screen">
      <NavFixed />
      <h1 className="page-title">MEET THE TEAM</h1>
      <section className="team-container">
        <section className="team-member-container flex-box-column">
          <section className="flex-box-column">
            <imgcontainer className="img-container flex-box-around">
              <div className="img-circle img-1"></div>
            </imgcontainer>
            <namecontainer className="name-container flex-box-column-center">
              <h2>Jessica Paul</h2>
            </namecontainer>
          </section>
          <section className="height-full">
            <biocontainer className="bio-container flex-box-column-around">
              <text>
                Jessica Paul enjoys a successful career as a professional
                actress and singer. Having graduated from Guildford School of
                Acting in 2016 she has been lucky enough to secure lead roles
                both on the West End and on tour, notibly Sandy in the hit
                musical 'Grease'. As well as stage work Jessica has been
                featured in films across the Manchester area and is currently in
                the process of writing and producing her first short film this
                year.
              </text>
              <br />
              <text>
                Alongside her acting career Jessica has been a dementia care
                assistant for over seven years. Jessica knows the ins and outs
                of a carehome environment and trains each of her performers at
                Entertaining Minds from her own experience.
              </text>
              <br />
              <text>
                Jessica formed Entertaining Minds by combining her two main
                passions. She wanted to help performers utilise their talent in
                the care industry and provide a happier way of living for care
                home residents.
              </text>
              <br />
              <text>
                Jessica dedicates her company to her Grandad who died from
                Dementia in 2016. She would like to honour all of those we have
                lost to this terrible disease and work to raise awareness in
                this new way of living.
              </text>
              <br />
            </biocontainer>
          </section>
          <section className="height-full">
            <contactcontainer className="contact-details-container flex-box-column-center">
              <contact className="flex-box-left">
                <section className="flex-box-row">
                  <img src={phoneLogo} alt="phone" />
                  <text>07772023349</text>
                </section>
              </contact>
              <contact className="flex-box-left">
                <section className="flex-box-row">
                  <img src={emailLogo} alt="email" />
                  <text>info@entertainingminds.co.uk</text>
                </section>
              </contact>
              <contact className="flex-box-left">
                <section className="flex-box-row">
                  <a href="https://www.instagram.com/jessicalouisepaul/">
                    <section className="flex-box-row">
                      <img src={instaLogo} alt="instagram" />
                      <text>@jessicalouisepaul</text>
                    </section>
                  </a>
                </section>
              </contact>
              <contact className="flex-box-left">
                <section className="flex-box-row">
                  <a href="https://twitter.com/_jessicapaul?lang=en">
                    <section className="flex-box-row">
                      <img src={twitterLogo} alt="twitter" />
                      <text>@_JessicaPaul</text>
                    </section>
                  </a>
                </section>
              </contact>
            </contactcontainer>
          </section>
        </section>
        <section className="team-member-container flex-box-column">
          <section className="flex-box-column">
            <imgcontainer className="img-container flex-box-around">
              <div className="img-circle img-2"></div>
            </imgcontainer>
            <namecontainer className="name-container flex-box-column-center">
              <h2>Melanie Paul</h2>
            </namecontainer>
          </section>
          <section className="height-full">
            <biocontainer className="bio-container flex-box-column-around">
              <text>
                Melanie Paul is our very own Dementia Champion. Alongside her
                work as Director of Entertaining Minds she continues to work
                voluntarily for the Alzheimer Society in several capacities,
                working closely with individuals living with dementia. She has a
                wealth of knowledge of helping and supporting people with
                dementia and their carers. Earlier this year she was invited to
                St James’ Palace as a finalist for the Peoples Award for this
                work.
              </text>
              <br />
              <text>
                Melanie ensures that each one of our entertainers have a
                thorough understanding of dementia by giving the Alzheimer
                Society Dementia Friends information session to everyone at
                their induction.
              </text>
              <br />
            </biocontainer>
          </section>
          <section className="height-full">
            <contactcontainer className="contact-details-container flex-box-column-center">
              <contact className="flex-box-left">
                <section className="flex-box-row">
                  <img src={phoneLogo} alt="phone" />
                  <text>07976880954</text>
                </section>
              </contact>
              <contact className="flex-box-left">
                <section className="flex-box-row">
                  <img src={emailLogo} alt="email" />
                  <text>info@entertainingminds.co.uk</text>
                </section>
              </contact>
            </contactcontainer>
          </section>
        </section>
      </section>
    </div>
  );
};

export default MeetTheTeam;
