import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/_workwithus.scss";
import "../styling/_global.scss";
import * as Scroll from "react-scroll";
import { MDBAnimation } from "mdbreact";
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
            <MDBAnimation
              type="slideInLeft"
              duration="4s"
              className="work-info-container"
              reveal
            >
              <div className="work-info">
                <p>
                  At Entertaining Minds we are proud to offer a variety of
                  quality entertainment from actors and performers across the
                  entertainment industry. It is our ethos and our aim to bring
                  the theatre into your home. We will work hard with your
                  activities co-ordinators to get to know your home and your
                  residents to find exactly what you require for a fully
                  tailored experience.
                </p>
              </div>
            </MDBAnimation>
            <MDBAnimation
              type="slideInRight"
              duration="4s"
              className="work-info-container-right"
              // reveal
            >
              <div className="work-info">
                <h3 className="bold">So what makes us different?</h3>
                <p>
                  Firstly there has never been a model like Entertaining Minds
                  for care homes. We work on an agency basis to find you exactly
                  the entertainment that you need. We have a variety to offer,
                  from singers, stand up comedians or yoga instructors - there
                  will always be someone to hire, simply tell us what you need!
                </p>
                <p>
                  Secondly, all of our performers are fully trained under
                  Entertaining Minds, making them different to any other
                  entertainer you may know. During this training we aim to break
                  the wall between entertainer and resident to guarantee a
                  valuable and stimulating experience for all.
                </p>
                <p className="inline">
                  In addition to this, all of our entertainers become{" "}
                </p>
                <p className="italic inline">Dementia Friend</p>{" "}
                <p className="inline">through our company’s own </p>
                <p className="italic inline">
                  Dementia Friends Champion, Melanie Paul.
                </p>{" "}
                <p className="inline">
                  This means they can work with unlimited awareness and
                  understanding of your care home environment. In turn, your
                  residents get the most from us and you get the promise of a
                  credible service. We pride ourselves for this special
                  information training and our inductions have now become an
                  integral part of the reliable service we provide.
                </p>
              </div>
            </MDBAnimation>
            <section className="contact-info-container">
              <div className="text-container">
                <h3 className="bold">Our signature storytelling....</h3>
                <p>
                  As part of Entertaining Minds we have the pleasure of bringing
                  a brand new form of entertainment to your home. In a relaxed
                  activity using drama, poetry and group sing-alongs we present
                  our uniquely tailored storytelling experience to your home.
                  Our original stories are performed by trained actors to bring
                  miniature ‘interactive shows’ into your home. Using props and
                  audience interaction, your residents will join us on a
                  reminiscent journey using the power of storytelling to leave
                  them engaged, uplifted and wanting more!
                </p>
                <p>
                  All of our actors are fully screened and DBS checked by us.
                  For more information please contact us via
                  info@entertainingminds.co.uk
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

export default WorkWithUs;
