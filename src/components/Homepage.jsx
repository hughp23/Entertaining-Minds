import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/_global.scss";
import "../styling/_homepage.scss";
import "../styling/_media-queries.scss";
import "../assets/entertainingMindsLogoAndText.png";
import "../assets/entertainingMindsLogo.png";
import "../assets/entertainingMindsText.png";
import $ from "jquery";
const entertainingMindsLogo = require("../assets/entertainingMindsLogo.png");
const facebookLogo = require("../assets/facebook.png");
const instaLogo = require("../assets/instagram.png");
const twitterLogo = require("../assets/twitter.png");
const jessicaHeadshot = require("../assets/jessicaHeadshot.jpg");
const joinUsImage = require("../assets/joinUsImage.jpg");
const workWithUsImage = require("../assets/workWithUsImage.jpg");
const arrowDown = require("../assets/arrowDown.png");

class Homepage extends Component {
  render() {
    return (
      <div className="flex-box">
        <div className="full-screen nav-and-logo">
          <div className="top-social-medias">
            <ul className="flex-box-row social-media-links">
              <li className="facebookLogo">
                <a href="https://www.facebook.com/entertainingminds/?ref=bookmarks">
                  <img
                    src={facebookLogo}
                    alt="https://www.facebook.com/entertainingminds/?ref=bookmarks"
                  />
                </a>
              </li>
              <li className="instaLogo">
                <a href="https://www.instagram.com/entertainingminds/">
                  <img
                    src={instaLogo}
                    alt="https://www.instagram.com/entertainingminds/"
                  />
                </a>
              </li>
              <li className="twitterLogo">
                <a href="https://twitter.com/EntMindsUK">
                  {" "}
                  <img src={twitterLogo} alt="https://twitter.com/EntMindsUK" />
                </a>
              </li>
            </ul>
          </div>
          <div className="logo-only-container">
            <img src={entertainingMindsLogo} alt="Entertaining Minds" />
          </div>
          <div className="nav-bar">
            <ul>
              <li>
                <a onClick={handleScroll("about")} href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a onClick={handleScroll("workInfo")} href="/workforus">
                  JOIN US
                </a>
              </li>
              <li>
                <a onClick={handleScroll("workInfo")} href="/workwithus">
                  CLIENTS
                </a>
              </li>
              <li>
                <a onClick={handleScroll("contact")} href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="text-only-container">
            <h1>ENTERTAINING MINDS</h1>
            <h3>A HAPPIER WAY OF LIVING</h3>
          </div>
          <div className="arrow-down bounce">
            <a href="#about">
              <img src={arrowDown} alt="arrow down" />
            </a>
          </div>
        </div>
        <div id="about" className="about-container full-screen">
          <div className="about-title-container">
            <h2>ABOUT</h2>
          </div>
          <div className="about-text">
            <div className="height15vh">
              <p>
                Entertaining Minds was established in 2019 with the aim of
                providing regular entertainment in care & nursing homes. Our
                company specialises uniquely in stimulating those who suffer
                from Dementia/ Alzheimer’s disease.
              </p>
            </div>
            <div className="height15vh">
              <p>
                Director of our company, Jessica Paul, graduated from Guildford
                School of Acting in 2016 and continues a successful career in
                acting and musical theatre. In addition to this, Jessica has
                worked part-time as a Dementia care assistant on and off for
                over seven years. After recognising a need for more stimulation
                in care homes - as well as a need for flexible freelance work as
                an actor and creative - Jessica has combined her knowledge to
                form Entertaining Minds.
              </p>
            </div>
            <div className="height15vh">
              <p>
                As a company, we hope Entertaining Minds can be part of an
                important new movement which challenges the stigma behind
                Dementia. We aim to improve quality of life and provide a
                happier way of living for all.
              </p>
            </div>
          </div>
          <div className="headshot-container">
            <img src={jessicaHeadshot} alt="Jessica Paul" />
            <div className="name-and-role">
              <h3>Jessica Paul</h3>
              <h4>Director</h4>
            </div>
          </div>
        </div>
        <div id="workInfo" className="work-container">
          <div className="work-sub-container">
            <div className="work-for-us-image-container">
              <img src={joinUsImage} alt="work for us" />
            </div>
            <div className="work-title">
              <h1>WORK FOR US</h1>
            </div>
            <div className="work-text">
              <p>
                Firstly, we strive to provide you with regular work and
                understand the need for flexible hours. Entertaining Minds will
                pay you well on a weekly basis without tying you into a binding
                contract... READ MORE
              </p>
            </div>
            <div className="work-button">
              <Link to="/workforus">Staff Information</Link>
            </div>
          </div>
          <div className="work-sub-container">
            <div className="work-with-us-image-container">
              <img src={workWithUsImage} alt="work with us" />
            </div>
            <div className="work-title">
              <h1>WORK WITH US</h1>
            </div>
            <div className="work-text">
              <p>
                We pride ourselves in offering a quality program of activities
                and creative classes for your home - all carefully planned and
                tailored to suit the residents abilities and needs. All of our
                sessions are run by... READ MORE
              </p>
            </div>
            <div className="work-button">
              <Link to="/workwithus">Client Information</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const handleScroll = id => {
  // console.log("in function");
  // console.log(id, "id");
  $("html, body").animate(
    {
      scrollTop: $("#" + id).offset.top
    },
    500
  );
};

export default Homepage;
