import React, { Component } from "react";
import { Link } from "@reach/router";
import { MDBAnimation } from "mdbreact";
const workWithUsImage = require("../../assets/workWithUsImage.jpg");

class WorkWithUsContainer extends Component {
  render() {
    return (
      <div>
        <MDBAnimation className="work-sub-container">
          <div className="work-title">
            <h1>WORK WITH US</h1>
          </div>
          <div className="work-text">
            <p>
              At Entertaining Minds we are proud to offer a variety of quality
              entertainment from actors and performers across the entertainment
              industry. It is our ethos and our aim to bring the theatre into
              your home. We will work hard... READ MORE
            </p>
          </div>
          <div className="work-button">
            <Link to="/workwithus">Client Information</Link>
          </div>
        </MDBAnimation>
      </div>
    );
  }
}

export default WorkWithUsContainer;
