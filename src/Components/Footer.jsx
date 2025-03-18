import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedin, FaGoogle } from "react-icons/fa";
import logo from "../assets/twlogotransparent.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section - Logo & About */}
      <div className="footer-left">
        <img src={logo} alt="Trade Wing Trading Academy Logo" className="footer-logo" />
        <p className="footer-description">
          At Trade Wing Trading Academy, we empower individuals with expert-led stock market training and advanced trading strategies. 
          Unlock the secrets of the financial markets with our tailored courses and expert guidance.
        </p>
        <p className="footer-founder">
          <strong>Founder:</strong> Alok Baronia
        </p>
        <p className="footer-copyright">
          © 2025 Trade Wing Trading Academy. All rights reserved.
        </p>
      </div>

      {/* Middle Section - Services & About */}
      <div className="footer-middle">
        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <ul>
            <li>Beginner Stock Market Course</li>
            <li>Advanced Trading Strategies</li>
            <li>Live Trading Sessions</li>
            <li>Financial Consulting</li>
            <li>Online Live Weekly Training</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">About</h3>
          <ul>
            <li><a href="/">Our Mission</a></li>
            <li><a href="/">Meet the Team</a></li>
            <li><a href="/terms">Privacy Policy</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/">Blog</a></li>
          </ul>
        </div>
      </div>

      {/* Right Section - Social Media */}
      <div className="footer-right">
        <h3 className="footer-heading">Follow Us</h3>
        <div className="footer-social-icons">
          <a href="https://www.instagram.com/alokbaronia" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61570923356115" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://www.youtube.com/tradewingacademy" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/in/alok-baronia" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://g.co/kgs/Z68yYt9" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGoogle />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;