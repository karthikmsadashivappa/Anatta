import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlockAlt,
  faSpaceShuttle,
  faGift,
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-options">
        <div className="footer-options-inner">
          <FontAwesomeIcon icon={faUnlockAlt} />
          <span className="options-title">Secure Payment</span>
        </div>
        <span className="divider"></span>
        <div className="footer-options-inner">
          <FontAwesomeIcon icon={faSpaceShuttle} />
          <span className="options-title">Express Shipping</span>
        </div>
        <span className="divider"></span>
        <div className="footer-options-inner">
          <FontAwesomeIcon icon={faGift} />
          <span className="options-title">Free Returns</span>
        </div>
      </div>
      <div className="footer-menu">
        <ul className="menu-list">
          <li className="list-items">
            MEN <li className="list-item">OCA Low</li>
            <li className="list-item">OCA High</li>
            <li className="list-item">CATIBA Low</li>
            <li className="list-item">CATIBA High</li>
          </li>
          <li className="list-items">
            WOMEN<li className="list-item">OCA Low</li>
            <li className="list-item">OCA High</li>
            <li className="list-item">CATIBA Low</li>
            <li className="list-item">CATIBA High</li>
          </li>
          <li className="list-items">
            SUPPORT<li className="list-item">FAQ</li>
            <li className="list-item">Returns</li>
            <li className="list-item">Live Chat</li>
          </li>
          <li className="list-items">
            ABOUT<li className="list-item">Mission</li>
            <li className="list-item">Vision</li>
            <li className="list-item">Future</li>
          </li>
          <li className="list-items">
            POPUP STORIES<li className="list-item">Find near you</li>
            <li className="list-item">Register</li>
            <li className="list-item">
              <input placeholder="Find your sneakers here"></input>
            </li>
          </li>
          <li className="list-items">
            NEWSLETTER
            <li className="list-item">
              <input placeholder="Enter Email"></input>
              <span className="join-us">JOIN US</span>
            </li>
            <li className="list-item">
              <span className="social-icon">
                <img
                  src="http://api-lunacy.icons8.com/api/assets/22c7f9c6-9c67-4b4a-b282-97e7598d9cad/instagram.png"
                  alt="instagram"
                />
              </span>
              <span className="social-icon">
                <img
                  src="http://api-lunacy.icons8.com/api/assets/89b86063-d7b5-4bcf-be1d-e78c782eaa2c/facebook-logo.png"
                  alt="facebook"
                />
              </span>
            </li>
          </li>
        </ul>
      </div>
      <div className="copyright">
        Copyright © 2019 CARIUMA. All Rights Reserved.{" "}
        <a href="/">Terms of Use</a> | <a href="/">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
