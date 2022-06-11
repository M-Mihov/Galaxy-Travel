import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMailBulk,
  FaSearchLocation,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contacts">
        <ul>
          <li>
            <FaSearchLocation size={20} className="footer-cintacts-icon" />
            123 Acme St. Houston, TX
          </li>
          <li>
            <FaPhone size={20} className="footer-cintacts-icon" />
            1-800-23-1234
          </li>
          <li>
            <FaMailBulk size={20} className="footer-cintacts-icon" />
            trips@galaxy.com
          </li>
        </ul>
      </div>
      <div className="footer-about">
        <h3>About the company</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
        <div className="footer-social">
          <FaFacebook size={30} className="social-link" />
          <FaInstagram size={30} className="social-link" />
          <FaTwitter size={30} className="social-link" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
