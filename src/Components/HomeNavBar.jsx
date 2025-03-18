import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/HomeNavBar.css";
import { FiMenu } from "react-icons/fi";

const HomeNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <Link to="/" onClick={handleLinkClick}>
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
        <Link to="/" className={`nav-link ${isActive("/")}`} onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/services" className={`nav-link ${isActive("/services")}`} onClick={handleLinkClick}>
          Services
        </Link>
        <Link to="/testimonials" className={`nav-link ${isActive("/testimonials")}`} onClick={handleLinkClick}>
          Testimonials
        </Link>
        <Link to="/contact" className={`nav-link ${isActive("/contact")}`} onClick={handleLinkClick}>
          Contact Us
        </Link>
        <Link to="/refer" className={`nav-link ${isActive("/refer")}`} onClick={handleLinkClick}>
          Refer a Friend
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavBar;