import React, { Component } from "react";
// const jessicaHeadshot = require("../../assets/jessicaHeadshot.jpg");

class AboutContainer extends Component {
  render() {
    return (
      <div id="about" className="about-container full-screen flex-box-column">
        <div class="aboutImg1-container"></div>
        <div className="about-text">
          <text>
            Entertaining Minds was established in 2019 with the aim to provide
            regular entertainment in care homes across the country. We represent
            professional and talented performers to give you 'West End' quality
            in your home. This ranges from singers, comedians, dementia friendly
            theatre and music therapy. As a company we specialise uniquely in
            stimulating those who live with dementia and work to raise awareness
            in this area.
          </text>
          <br />
          <text>
            We know activities co-ordinators work hard to provide their homes
            with this kind of stimulation and are always hunting for something
            different. Whether it's weekly music therapy sessions, regular
            singers or something exciting for a special event - Entertaining
            Minds can provide you with whatever you need, whenever you need it!
          </text>
          <br />
          <text>
            We are proud to tell you that all of our performers become Dementia
            Friends through an information session delivered by our company’s
            own Dementia Friends Champion (an Alzheimer’s Society initiative).
            At these sessions they will gain a greater understanding of dementia
            and how they can support those living with it.
          </text>
          <br />
          <text>
            At Entertaining Minds we supply all kinds of exciting talent and
            work to provide a happier way of living for all!
          </text>
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
