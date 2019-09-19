import React, { Component } from "react";
import { Link } from "@reach/router";
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
            <div className="work-info-container">
              <div className="work-info">
                <p>
                  We strive to provide you with regular work and understand the
                  need for flexible hours. Entertaining Minds will pay you well
                  on a weekly basis without tying you into a binding contract.
                  Run by actress and musical theatre performer, Jessica Paul, we
                  truly understand the need for flexible work. We know you need
                  time to concentrate on auditions, college/ university studies
                  and other important commitments. We respect this fully, which
                  is why we reward you with great rates of pay for simply a few
                  hours of your time.
                </p>
                <p>
                  Singers, poets, stand up comedians, magicians, or simply those
                  with a passion for the arts - this is for you!
                </p>
              </div>
            </div>
            <div className="work-info-container-left">
              <div className="work-info">
                <p>
                  Our sessions are designed in the same way a kids musical
                  theatre session would be - just instead of kids, we are of
                  course entertaining elderly residents! It will be a fun
                  environment for all involved - with movement, relaxed
                  activities using drama/ poetry and group sing- alongs!
                  Alongside this, we offer you the chance to utilise your skills
                  further in individual sessions. These give you the chance to
                  perform your own set of singing, a yoga class, or even a magic
                  show - if it’s something you can do well! Entertaining Minds
                  strives to give you the chance to make money regularly
                  performing, helping you do what you do best - and make a
                  difference doing so!
                </p>
                <p>
                  Before joining our books you will be taken through an initial
                  training morning to discuss how our sessions are run - making
                  sure you know exactly what is involved. You will also be
                  coached as a ‘Dementia Friend’ by our friendly staff. This
                  will help give you an insight into those living with Dementia
                  - with your very own badge of approval! In joining our company
                  you will not only perform regularly, you will also be part of
                  an important new movement which works to undo the stigma
                  behind Dementia/ Alzheimer’s disease.
                </p>
              </div>
            </div>
            <section className="contact-info-container">
              <div className="text-container">
                <h3>Contact us today!</h3>
                <p className="inline">If you’re looking for</p>{" "}
                <p className="italic inline">flexible</p>{" "}
                <p className="inline">and</p>{" "}
                <p className="italic inline">rewarding</p>{" "}
                <p className="inline">
                  work don’t hesitate to contact us today. We are always looking
                  for friendly, new faces to join our team.
                </p>
                <p className="paddingTop5vh">info@entertainingminds.co.uk</p>
                <p>07772023349</p>
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
