import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/HomeNavBar.css";
import { FiMenu } from "react-icons/fi";

const HomeNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/twlogotransparent.png`}
            alt="TradeWing Logo"
            className="nav-logo-img"
          />
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FiMenu />
      </div>
      <div className={`nav-buttons ${menuOpen ? "show-menu" : ""}`}>
        <Link to="/" className={`nav-link ${isActive("/")}`}>
          Home
        </Link>
        <Link to="/services" className={`nav-link ${isActive("/services")}`}>
          Services
        </Link>
        <Link to="/testimonials" className={`nav-link ${isActive("/testimonials")}`}>
          Testimonials
        </Link>
        <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>
          Contact Us
        </Link>
        <Link to="/refer" className={`nav-link ${isActive("/refer")}`}>
          Refer a Friend
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavBar;