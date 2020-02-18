import React, { Component } from "react";
import { MDBAnimation } from "mdbreact";
const entertainingMindsLogo = require("../../assets/large-logo.png");
const arrowDown = require("../../assets/arrowDown.png");
const background = require("../../assets/background.png");

class TitleAndNav extends Component {
  render() {
    return (
      <div className="full-screen nav-and-logo">
        <div className="flex-box-column height100vh">
        <MDBAnimation
          type="zoomIn"
          duration="1.5s"
          className="logo-only-container"
        >
          <div className="flex-box">
            <img src={entertainingMindsLogo} alt="Entertaining Minds" />
          </div>
        </MDBAnimation>
        <div className="text-only-container">
          <h1>ENTERTAINING MINDS</h1>
          <h3>A HAPPIER WAY OF LIVING</h3>
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
              <a href="/ourtalent">OUR TALENT</a>
            </li>
            <li>
              <a href="/contactform">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="arrow-down bounce">
          <a href="#about">
            <img src={arrowDown} alt="arrow down" />
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default TitleAndNav;
