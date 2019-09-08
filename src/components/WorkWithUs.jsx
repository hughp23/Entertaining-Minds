import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/_workwithus.scss";
import "../styling/_global.scss";
const facebookLogo = require("../assets/facebook.png");
const instaLogo = require("../assets/instagram.png");
const twitterLogo = require("../assets/twitter.png");
const arrowLeft = require("../assets/arrowLeft.png");
const entertainingMindsLogo = require("../assets/entertainingMindsLogo.png");

class WorkWithUs extends Component {
  render() {
    return (
      <div>
        <div className="work-with-us-page-container">
          <div className="return-home-container">
            <Link to="/">
              <img src={arrowLeft} alt="return" />
            </Link>
          </div>
          <div className="work-with-us-title">
            <h1>CARE HOMES</h1>
            <h1>WHAT CAN WE OFFER?</h1>
          </div>
          <div className="info-paragraph">
            <div className="work-info-opening-line">
              <p>
                At Entertaining Minds we believe the practice of any art form is
                a powerful tool for a person’s wellbeing, but what can we offer?
              </p>
            </div>
            <div className="work-info-list-container">
              <div className="work-info-list">
                <ul>
                  <li>High quality entertainment</li>
                  <li>Reliability and punctuality</li>
                  <li>Extensive knowledge</li>
                  <li>Unique tailored service</li>
                </ul>
              </div>
            </div>
            <div className="work-info-container">
              <div className="work-info">
                <p>
                  We pride ourselves in offering a quality program of activities
                  and entertainment to add a unique touch to your home. All
                  activities are carefully planned and tailored to suit your
                  residents abilities and needs, bringing fresh, new
                  opportunities into your home. Our sessions are run by actors
                  and creatives who have been carefully selected by us based on
                  their professional performing backgrounds and/ or their flare
                  for the arts.
                </p>
                <p>
                  We offer a variety of core activities such as sing-alongs,
                  pamper sessions and tea party’s - to name a few - all of which
                  continue a unique theme of musical theatre. With our staff
                  embodying characters such as Grease’s Pink Ladies or West Side
                  Story’s Tony & Maria to provide a stimulating immersive
                  experience for your residents, helping bring a room to life!
                  As well as this, we offer a more qualified service of singers,
                  poets and stand up comedians who can perform in your home on a
                  group/ private basis.
                </p>
              </div>
            </div>
            <div className="work-info-container-right">
              <div className="work-info">
                <p className="bold">
                  Please contact us for more information regarding our
                  activities/ entertainment.
                </p>
                <p>
                  As a company we will organise everything for you - from
                  regular staff to the co-ordination of entertainment. This
                  means you will have time to concentrate on your home with as
                  little hassle as possible.
                </p>
              </div>
            </div>
            <section className="contact-info-container">
              <h3>WHAT MAKES US DIFFERENT?</h3>
              <p>
                All of our staff at Entertaining Minds are trained under the
                Alzheimer’s Society by our company’s own ‘Dementia Champion’.
                With this they gain a knowledge and understanding of Dementia/
                Alzheimer’s to become ‘Dementia Friends’. As a company this is
                very important to us. We passionately believe in undoing the
                stigma behind these diseases and helping people to understand
                this new way of living.
              </p>
              <p>All of our staff are fully screened and DBS checked by us.</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkWithUs;
