import React from "react";
import "../styling/_footer.scss";
import "../styling/_media-queries.scss";
const entertainingMindsLogo = require("../assets/entertainingMindsLogo.png");
const facebookLogo = require("../assets/facebook.png");
const instaLogo = require("../assets/instagram.png");
const twitterLogo = require("../assets/twitter.png");
const phoneLogo = require("../assets/phone.png");
const emailLogo = require("../assets/email.png");

const Footer = () => {
  return (
    <div>
      <div id="footer" className="footer-container">
        <div className="footer-email-container">
          <ul className="flex-box social-media-links">
            <li className="emailLogo">
              <div className="flex-box-row">
                <img src={emailLogo} alt="email" />
                <p>info@entertainingminds.co.uk</p>
              </div>
            </li>
            <li className="phoneLogo">
              <div className="flex-box-row">
                <img src={phoneLogo} alt="phone" />
                <p>07772023349</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-logo-container">
          <img src={entertainingMindsLogo} alt="small-logo" />
        </div>
        <div className="social-media-links-footer-container">
          <ul className="flex-box social-media-links">
            <li className="facebookLogo">
              <a href="https://www.facebook.com/entertainingminds/?ref=bookmarks">
                <div className="flex-box-row">
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
                <div className="flex-box-row">
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
                <div className="flex-box-row">
                  <img src={twitterLogo} alt="https://twitter.com/EntMindsUK" />
                  <p>@EntMindsUK</p>
                </div>
              </a>
            </li>
          </ul>
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
          </a> / Company No 12165268
        </div>
      </div>
    </div>
  );
};

export default Footer;
