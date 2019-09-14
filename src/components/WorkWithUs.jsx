import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/_workwithus.scss";
import "../styling/_global.scss";
import * as Scroll from "react-scroll";
const arrowLeft = require("../assets/arrowLeft.png");

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
            <h2>WHAT CAN WE OFFER?</h2>
          </div>
          <div className="info-paragraph">
            {/* <div className="work-info-opening-line">
              <p>
                At Entertaining Minds we believe the practice of any art form is
                a powerful tool for a person’s wellbeing, but what can we offer?
              </p>
            </div> */}
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
                  We pride ourselves in offering a quality program of musical
                  activities and entertainment which will stimulate your
                  residents daily. All sessions are carefully planned and
                  tailored to suit your residents abilities and needs a
                  completely personal touch! Our sessions are run by actors and
                  creatives who have been carefully selected by us based on
                  their professional performing backgrounds and/ or their flare
                  for the arts.
                </p>
                <p>
                  Each of our sessions start with a fun element of dance or
                  fitness - fully tailored for your residents and designed to
                  get the endorphins flowing! Next we will enjoy an element of
                  drama and reminiscent activities using sensory objects, poetry
                  and theatre. Finally, we will end each of our sessions with a
                  group sing-along - again completely tailored to your residents
                  musical taste! Our staff are trained to provide a stimulating
                  immersive experience in each session - helping to bring a room
                  to life!
                </p>
              </div>
            </div>
            <div className="work-info-container-right">
              <div className="work-info">
                <p className="bold">
                  Please contact us directly for more information regarding our
                  services.
                </p>
                <p>
                  As well as this, we offer a more qualified service of singers,
                  poets and stand up comedians who can perform in your home on a
                  group/ private basis. At Entertaining Minds we believe private
                  sessions can be hugely beneficial for those of your immobile
                  or bed-ridden residents. We offer a variety of sensory
                  activities to help stimulate these people in order to maintain
                  a fully inclusive service.
                </p>
                <p>
                  From regular staff to the co-ordination of entertainment, we
                  will organise everything for you, meaning you will have time
                  to concentrate on your home with as little hassle as possible.
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
                stigma behind these diseases and helping people understand this
                new way of living.
              </p>
              <p>All of our staff are fully screened and DBS checked by us.</p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    Scroll.animateScroll.scrollToTop();
  }
}

export default WorkWithUs;
