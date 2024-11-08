import React, { Component } from "react";
import NewMovie from "../FooterChild/NewMovie";
import FooterLogo from "../FooterChild/FooterLogo";
import BestMovie from "../FooterChild/BestMovie";
import Contact from "../FooterChild/Contact";
import Info from "../FooterChild/Info";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="column footer-logo">
            <FooterLogo></FooterLogo>
          </div>
          <div className="column new-movie">
            <NewMovie></NewMovie>
          </div>
          <div className="column best-movie">
            <BestMovie></BestMovie>
          </div>
          <div className="column contact">
            <Contact></Contact>
          </div>
          <div className="column info">
            <Info></Info>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
