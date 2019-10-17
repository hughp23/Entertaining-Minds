import React from "react";
import "../styling/_footer.scss";
import "../styling/_media-queries.scss";
import * as Scroll from "react-scroll";
const entertainingMindsLogo = require("../assets/entertainingMindsLogo.png");
const facebookLogo = require("../assets/facebook.png");
const instaLogo = require("../assets/instagram.png");
const twitterLogo = require("../assets/twitter.png");
const phoneLogo = require("../assets/phone.png");
const emailLogo = require("../assets/email.png");
const dementiaFriendsLogo = require("../assets/dementia-friends-logo.png");

const Footer = () => {
  return (
    <div>
      <div id="footer" className="footer-container">
        <div className="footer-email-container flex-box">
          <section class="dementia-friends-logo-container">
            <img src={dementiaFriendsLogo} alt="dementia friends" />
          </section>
        </div>
        <div
          onClick={scrollToTop}
          title="Scroll To Top"
          className="footer-logo-container pointer"
        >
          <img src={entertainingMindsLogo} alt="small-logo" />
        </div>
        <div className="social-media-links-footer-container">
          <div className="social-media">
            <ul className="flex-box social-media-links">
              <li className="facebookLogo">
                <a href="https://www.facebook.com/entertainingminds/?ref=bookmarks">
                  <div className="contact-container">
                    <img
                      src={facebookLogo}
                      alt="https://www.facebook.com/entertainingminds/?ref=bookmarks"
                    />
                    <p>@Entertaining Minds</p>
                  </div>
                </a>
              </li>
              <li className="instaLogo">
                <a href="https://www.instagram.com/entertainingminds/">
                  <div className="contact-container">
                    <img
                      src={instaLogo}
                      alt="https://www.instagram.com/entertainingminds/"
                    />
                    <p>@entertainingminds</p>
                  </div>
                </a>
              </li>
              <li className="twitterLogo">
                <a href="https://twitter.com/EntMindsUK">
                  {" "}
                  <div className="contact-container">
                    <img
                      src={twitterLogo}
                      alt="https://twitter.com/EntMindsUK"
                    />
                    <p>@EntMindsUK</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <ul className="flex-box social-media-links">
              <li className="emailLogo">
                <div className="contact-container">
                  <img src={emailLogo} alt="email" />
                  <a href="mailto:info@entertainingminds.co.uk">
                    <p>info@entertainingminds.co.uk</p>
                  </a>
                </div>
              </li>
              <li className="phoneLogo">
                <div className="contact-container">
                  <img src={phoneLogo} alt="phone" />
                  <p>07772023349</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="credits-container">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>{" "}
          / Built By{" "}
          <a href="https://www.linkedin.com/in/hugh-paul-6762a7173/">
            Hugh Paul
          </a>{" "}
          / Company No 12165268
        </div>
      </div>
    </div>
  );
};

const scrollToTop = () => {
  Scroll.animateScroll.scrollToTop();
};

export default Footer;
