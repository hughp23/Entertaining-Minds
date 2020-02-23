import React, { Component } from "react";
import { MDBAnimation } from "mdbreact";
import Nav from "../Nav";
const entertainingMindsLogo = require("../../assets/large-logo.png");
const arrowDown = require("../../assets/arrowDown.png");

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
          <Nav />
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
