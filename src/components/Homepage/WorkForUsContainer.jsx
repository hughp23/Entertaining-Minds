import React, { Component } from "react";
import { Link } from "@reach/router";
import { MDBAnimation } from "mdbreact";
const joinUsImage = require("../../assets/joinUsImage.jpg");

class WorkForUsContainer extends Component {
  render() {
    return (
      <div>
        <MDBAnimation className="work-sub-container">
          <div className="work-title">
            <h1>WORK FOR US</h1>
          </div>
          <div className="work-text">
            <p>
              At Entertaining Minds we pride ourselves on our fun and
              informative induction days. Before joining our books you will be
              asked to undergo an induction in which you will learn more about
              us as a company and have the chance... READ MORE
            </p>
          </div>
          <div className="work-button">
            <Link to="/workforus">Staff Information</Link>
          </div>
        </MDBAnimation>
      </div>
    );
  }
}

export default WorkForUsContainer;
