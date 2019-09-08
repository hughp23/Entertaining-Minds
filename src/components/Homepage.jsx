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
const background = require("../assets/background.png");
const cross = require("../assets/cross.png");

class Homepage extends Component {
  render() {
    return (
      <div className="flex-box">
        <div id="cookies-popup" className="cookies-popup flex-box-row">
          <p>
            We use cookies and similar technologies to measure traffic and site
            performance.{" "}
            <a>Learn more about cookies (including how to disable them)</a>. By
            clicking{" "}
            <p onClick={this.closePopup} className="underline pointer">
              "I agree"
            </p>
            ,{" "}
            <p onClick={this.closePopup} className="underline pointer">
              "X"
            </p>{" "}
            or by continuing to use our site you consent to the use of cookies
            (unless you have disabled cookies).
          </p>
          <img src={cross} alt="Close!" onClick={this.closePopup} />
        </div>
        <div className="full-screen nav-and-logo">
          <div className="background-container">
            <img src={background} />
          </div>
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
                <a name="about" href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/workforus">JOIN US</a>
              </li>
              <li>
                <a href="/workwithus">CLIENTS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
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
                Entertaining Minds was established in 2019 with the aim to
                provide regular entertainment in care & nursing homes using
                immersive musical theatre. Our company specialises uniquely in
                stimulating those who suffer from Dementia / Alzheimer’s
                disease.
              </p>
            </div>
            <div className="height15vh">
              <p>
                Director of the company, Jessica Paul, graduated from Guildford
                School of Acting in 2016 and continues a successful career in
                acting and musical theatre. In addition to this, Jessica has
                worked part-time as a Dementia care assistant on and off for
                over seven years. After recognising a need for more stimulation
                in care homes - as well as a need for flexible freelance work as
                an actor and creative - Jessica has combined her knowledge to
                create a new and exciting form of entertainment for care homes.
              </p>
            </div>
            <div className="height15vh">
              <p>
                As a company, Entertaining Minds hopes to be part of an
                important new movement which challenges the stigma behind
                Dementia. We wholeheartedly aim to deliver high-class
                entertainment in order to improve quality of life and provide a
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
                We strive to provide you with regular work and understand the
                need for flexible hours. Entertaining Minds will pay you well on
                a weekly basis without tying you into a binding contract... READ
                MORE
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
                and entertainment to add a unique touch to your home. All
                activities are carefully planned and tailored to suit your
                residents abilities and needs... READ MORE
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

  closePopup = () => {
    document.getElementById("cookies-popup").classList.add("hidden");
  };

  // handleScroll = name => {
  //   console.log("in function");
  //   console.log(name, "name");
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#" + name).offset.top
  //     },
  //     500
  //   );
  // };
}

export default Homepage;
