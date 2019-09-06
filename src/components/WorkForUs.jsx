import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/_workforus.scss";
const facebookLogo = require("../assets/facebook.png");
const instaLogo = require("../assets/instagram.png");
const twitterLogo = require("../assets/twitter.png");
const arrowLeft = require("../assets/arrowLeft.png");
const entertainingMindsLogo = require("../assets/entertainingMindsLogo.png");

class WorkForUs extends Component {
  render() {
    return (
      <div>
        <div className="work-for-us-page-container">
          <div className="return-home-container">
            <Link to="/">
              <img src={arrowLeft} alt="return" />
            </Link>
          </div>
          <div className="work-for-us-title">
            <h1>WHY WORK FOR US?</h1>
          </div>
          <div className="info-paragraph">
            <div className="work-info-opening-line">
              <p>
                So you are looking for flexible work to fit in with your day to
                day lives, but why should you work for us?
              </p>
            </div>
            <div className="work-info-list-container">
              <div className="work-info-list">
                <ul>
                  <li>Reliable weekly pay</li>
                  <li>Complete flexibility</li>
                  <li>Thorough training</li>
                  <li>Rewarding hard work</li>
                </ul>
              </div>
            </div>
            <div className="work-info-container">
              <div className="work-info">
                <p>
                  Firstly, we strive to provide you with regular work and
                  understand the need for flexible hours. Entertaining Minds
                  will pay you well on a weekly basis without tying you into a
                  binding contract. We will allow you to pay your bills whilst
                  still fitting in with your day to day routine.
                </p>
                <p>
                  Run by actress and musical theatre performer, Jessica Paul, we
                  truly understand the need for flexible work. We know you need
                  time to concentrate on auditions, college/ university studies
                  and other important commitments. We respect this fully, which
                  is why we reward you with great rates of pay for simply a few
                  hours of your time.
                </p>
                <p>
                  During your initial training morning for Entertaining Minds
                  you will be coached as a ‘Dementia Friend’. This will help
                  give you an insight into those living with these diseases. As
                  well as this, you will be part of an important new movement
                  which will work to undo the stigma behind Dementia/
                  Alzheimer’s.
                </p>
              </div>
            </div>
            <section className="contact-info-container">
              <h3>Contact us today!</h3>
              <p>
                If you’re looking for flexible and rewarding work don’t hesitate
                to contact us today - we are always looking for friendly, new
                faces to join our team.
              </p>
              <p>info@entertainingminds.co.uk</p>
              <p>07772023349</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkForUs;
