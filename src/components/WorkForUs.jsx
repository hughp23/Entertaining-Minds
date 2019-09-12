import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/_workforus.scss";
import "../styling/_media-queries.scss";
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
            <h1>ACTORS</h1>
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
                  <li>The chance to perform!</li>
                </ul>
              </div>
            </div>
            <div className="work-info-container">
              <div className="work-info">
                <p>
                  We strive to provide you with regular work and understand the
                  need for flexible hours. Entertaining Minds will pay you well
                  on a weekly basis without tying you into a binding contract.
                  Run by actress and musical theatre performer, Jessica Paul, we
                  truly understand the need for flexible work. We know you need
                  time to concentrate on auditions, college / university studies
                  and other important commitments. We respect this fully, which
                  is why we reward you with great rates of pay for simply a few
                  hours of your time.
                </p>
                <p>
                  Most importantly, Entertaining Minds gives you the opportunity
                  to utilise your skills as actors and entertainers.
                </p>
                <p className="bold">
                  Singers, poets, stand up comedians, magicians, or simply those
                  with a passion for the arts - this is for you!
                </p>
              </div>
            </div>
            <div className="work-info-container-left">
              <div className="work-info">
                <p>
                  As well as this, our core activities are designed to embody
                  different characters giving you the chance to perform. Whether
                  it’s one of Grease’s Pink Ladies, West Side Story’s Tony or
                  Maria, or even something of your choice you feel you can
                  execute well. At Entertaining Minds you will get the chance to
                  regularly make money performing - and make a difference doing
                  so!
                </p>
                <p>
                  During your initial training for our company you will be
                  coached as a ‘Dementia Friend’. This will help give you an
                  insight into those living with Dementia. As well as this, you
                  will be part of an important new movement which will work to
                  undo the stigma behind Dementia/ Alzheimer’s disease.
                </p>
              </div>
            </div>
            <section className="contact-info-container">
              <h3>Contact us today!</h3>
              <p>
                If you’re looking for flexible and rewarding work don’t hesitate
                to contact us today. We are always looking for friendly, new
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
