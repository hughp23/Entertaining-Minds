import React, { Component } from "react";
import $ from "jquery";
import * as Scroll from "react-scroll";
import "../styling/_navbar.scss";
import { slide as Menu } from "react-burger-menu";

class Nav extends Component {
  render() {
    return (
      <nav
        role="navigation"
        id="nav-bar"
        className="nav-bar nav-home width-full flex-box-center"
      >
        <ul className="static-menu ul1">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/workwithus">CLIENTS</a>
          </li>
          <li>
            <a>THE TEAM</a>
            <ul className="ul2">
              <li>
                <a href="/theteam/meettheteam">MEET THE TEAM</a>
              </li>
              <li>
                <a href="/theteam/workforus">JOIN US</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/theteam/ourtalent">OUR TALENT</a>
          </li>
          <li>
            <a onClick={this.scrollToBottom}>CONTACT</a>
          </li>
        </ul>

        <div id="slideInMenu" class="slideInMenu">
          <Menu right>
            <ul className="ul1">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/workwithus">CLIENTS</a>
              </li>
              <li className="sub-list">
                <a className="sub-list-link">THE TEAM</a>
                <ul className="ul2">
                  <li>
                    <a href="/theteam/meettheteam">MEET THE TEAM</a>
                  </li>
                  <li>
                    <a href="/theteam/workforus">JOIN US</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/theteam/ourtalent">OUR TALENT</a>
              </li>
              <li>
                <a onClick={this.scrollToBottom}>CONTACT</a>
              </li>
            </ul>
          </Menu>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    const distance = $("#nav-bar").offset().top;
    const $window = $(window);
    $(window).scroll(function() {
      if ($window.scrollTop() >= distance) {
        $("#nav-bar").addClass("fixed thick-bottom-border");
      } else {
        $("#nav-bar").removeClass("fixed thick-bottom-border");
      }
    });

    $("body").on("click", function(e) {
      const _this = e.target;
      const slideInMenu = $("#slideInMenu");
      if (
        _this.className !== "sub-list" &&
        _this.className !== "sub-list-link" &&
        _this.innerHTML !== "Open Menu"
      ) {
        if (slideInMenu.css("display").toLowerCase() === "block") {
          $(".bm-overlay").css({ transform: "translate3d(100%, 0px, 0px)" });
          $(".bm-menu-wrap").css({ transform: "translate3d(100%, 0px, 0px)" });
        }
      }
    });
  }

  scrollToBottom = () => {
    Scroll.animateScroll.scrollToBottom();
  };
}

export default Nav;
