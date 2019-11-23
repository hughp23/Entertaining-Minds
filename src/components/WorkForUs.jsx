import React, { Component } from "react";
import { Link } from "@reach/router";
import { MDBAnimation } from "mdbreact";
import "../styling/_workforus.scss";
import "../styling/_media-queries.scss";
import * as Scroll from "react-scroll";
const arrowLeft = require("../assets/arrowLeft.png");

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
            <h2>WHY WORK FOR US?</h2>
          </div>
          <div className="info-paragraph">
            {/* <div className="work-info-opening-line">
              <p>
                So you are looking for flexible work to fit in with your day to
                day lives, but why should you work for us?
              </p>
            </div> */}
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
            <MDBAnimation
              type="slideInLeft"
              duration="4s"
              className="work-info-container-left"
              reveal
            >
              <div className="work-info">
                <p className="inline">
                  At Entertaining Minds we understand our performers and their
                  needs. We know you need flexible working hours. We know you
                  need time to concentrate on auditions, or family life, or
                  college/ university studies and we respect this fully.
                  Director of the company,{" "}
                </p>
                <p className="italic inline">Jessica Paul</p>
                <p className="inline">
                  , is passionate about helping performers utilise their skills
                  through reliable work which is why we reward you with great
                  rates of pay for simply a few hours of your time. Singers,
                  poets, stand up comedians, magicians, or simply those with a
                  passion for the arts - this is for you!
                </p>
                <p className="inline">
                  Our sessions will usually last an hour in which you have
                  creative freedom to entertain. Be it a set of singing,
                  storytelling, or yoga/ movement classes, these sessions are{" "}
                </p>
                <p className="inline italic">your time</p>
                <p className="inline">
                  . If you choose to become a performer for Entertaining Minds
                  you will get the chance to practice what you do best in the
                  intimate setting of a care home and bring joy to your care
                  home audience.
                </p>
              </div>
            </MDBAnimation>
            <MDBAnimation
              type="slideInRight"
              duration="4s"
              className="work-info-container"
              reveal
            >
              <div className="work-info">
                <h3 className="bold">Our signature storytelling...</h3>
                <p>
                  As part of our service we offer a unique storytelling
                  experience for our homes. You will be provided with original
                  stories/ poetic monologues in which you will take away,
                  familiarise yourself with, and dramatise into miniature
                  ‘interactive shows’. With props provided, all you will need is
                  your- talented-self to embody a character and bring the story
                  to life. These sessions will also last an hour in total - a
                  perfect and easy opportunity for you to perform.
                </p>
              </div>
            </MDBAnimation>
            <MDBAnimation
              type="slideInLeft"
              duration="4s"
              className="work-info-container-left"
              reveal
            >
              <div className="work-info">
                <h3 className="bold">The Entertaining Minds induction!</h3>
                <p className="inline">
                  At Entertaining Minds we pride ourselves on our fun and
                  informative induction days. Before joining our books you will
                  be asked to undergo an induction in which you will learn more
                  about us as a company and have the chance to meet and network
                  with likeminded actors. You will also have the opportunity to
                  become a{" "}
                </p>{" "}
                <p className="italic inline">Dementia Friends</p>
                <p className="inline">
                  {" "}
                  as part of an Alzheimer’s Society initiative - with your very
                  own badge of approval! Our induction days have become an
                  integral part of our company. They are there to help guide you
                  through a care home setting and instil a safe and creative
                  environment - it’s your chance to ask all the questions you
                  need!
                </p>
              </div>
            </MDBAnimation>
            <section className="contact-info-container">
              <div className="text-container">
                <h3>CONTACT US TODAY!</h3>
                <p className="inline">
                  To join the team and become an Entertaining Minds performer
                  please send in your CV to info@entertainingminds.co.uk today!
                </p>
              </div>
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

export default WorkForUs;
