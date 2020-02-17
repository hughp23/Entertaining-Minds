import React, { Component } from "react";
import * as Scroll from "react-scroll";
import "../../styling/_global.scss";
import "../../styling/_homepage.scss";
import "../../styling/_media-queries.scss";
import WorkForUsContainer from "./WorkForUsContainer";
import WorkWithUsContainer from "./WorkWithUsContainer";
import AboutContainer from "./AboutContainer";
import TitleAndNav from "./TitleAndNav";
// import $ from "jquery";
// const cross = require("../assets/cross.png");

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="flex-box">
        <div id="cookies-popup" className="cookies-popup flex-box-row">
          <p>
            We use cookies and similar technologies to measure traffic and site
            performance.{" "}
            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
              Learn more about cookies (including how to disable them)
            </a>
            . By clicking{" "}
            <p onClick={this.closePopup} className="underline pointer">
              "I agree"
            </p>
            ,{" "}
            <p onClick={this.closePopup} className="underline pointer">
              "X"
            </p>{" "}
            or by continuing to use our site you consent to the use of cookies
            (unless you have disabled cookies).
          </p>
          {/* <img src={cross} alt="Close!" onClick={this.closePopup} /> */}
        </div>
        <TitleAndNav />
        <AboutContainer />
        <div id="workInfo" className="work-container">
          <div className="work-for-us-container">
            <WorkForUsContainer />
          </div>
          <div className="work-with-us-container">
            <WorkWithUsContainer />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const agreedCookies = localStorage.getItem("AgreedCookies");
    if (agreedCookies === "true") {
      document.getElementById("cookies-popup").classList.add("hidden");
    } else {
      document.getElementById("cookies-popup").classList.remove("hidden");
    }
    Scroll.animateScroll.scrollToTop();
  }

  closePopup = () => {
    localStorage.setItem("AgreedCookies", "true");
    document.getElementById("cookies-popup").classList.add("hidden");
  };

  scrollToBottom = () => {
    Scroll.animateScroll.scrollToBottom();
  };
}

export default Homepage;
