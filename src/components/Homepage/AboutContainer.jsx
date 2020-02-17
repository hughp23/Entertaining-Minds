import React, { Component } from "react";
const jessicaHeadshot = require("../../assets/jessicaHeadshot.jpg");
const aboutImg_1 = require("../../assets/gallery/IMG-20191125-WA0007.jpg");

class AboutContainer extends Component {
  render() {
    return (
      <div id="about" className="about-container full-screen flex-box-column">
        <div class="aboutImg1-container"></div>
        {/* <div className="about-title-container">
          <h2>ABOUT</h2>
        </div> */}
        <div className="about-text">
          <div className="about-sub-text-left">
            <div className="about-sub-text">
              <p>
                Entertaining Minds was established in 2019 with the aim to
                provide regular entertainment in care and nursing homes using
                the power of music, theatre and our company’s own signature
                storytelling. Entertaining Minds specialises uniquely in
                stimulating those who live with dementia and maintains
                informative training in this area.
              </p>
            </div>
            <div className="about-sub-text">
              <p>
                Owner and director of the company, Jessica Paul, graduated from
                Guildford School of Acting in 2016 and continues a successful
                career in acting and musical theatre. In addition to this
                Jessica has worked part-time as a dementia care assistant on and
                off for over seven years. After recognising a need for more
                stimulation in care homes, as well as a need for flexible
                freelance work as an actor and creative, Jessica has combined
                her knowledge to create a brand new and exciting agency model
                for care homes.
              </p>
            </div>
          </div>
          <div className>
            <div className="about-sub-text">
              <p>
                Leading research has shown that music and exercise can
                significantly improve and support mood, alertness and engagement
                in those living with Dementia and those in the elderly
                community. It is for this reason we are passionate about
                bringing Entertaining Minds into care homes across the country
                on a regular basis.
              </p>
            </div>
            <div className="about-sub-text">
              <p>
                We are proud to tell you that all of our performers at
                Entertaining Minds become Dementia Friends through an
                information session delivered by our company’s own Dementia
                Friends Champion (an Alzheimer’s Society initiative). At these
                sessions they will gain a greater understanding of dementia and
                how they can support those living with it. As a company we
                passionately believe in reducing the stigma around this disease
                which is why we train and represent fully informed entertainers.
                We aim to raise awareness, give you a valuable experience, and
                provide a happier way of living for all.
              </p>
            </div>
          </div>
        </div>
        <div class="aboutImg2-container"></div>
        {/* <div className="headshot-container">
          <div className="headshot-and-text-container">
            <img src={jessicaHeadshot} alt="Jessica Paul" />
            <div className="name-and-role">
              <h3>Jessica Paul</h3>
              <h4>Director</h4>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default AboutContainer;
