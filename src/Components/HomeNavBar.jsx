import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/HomeNavBar.css";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/twlogotransparentt.png";

const HomeNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === "/about" && location.hash === "#about-us") return "active";
    if (path === "/presence" && location.hash === "#our-presence") return "active";
    if (path === "/courses" && location.hash === "#courses") return "active";
    return location.pathname === path ? "active" : "";
  };  

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navigation-bar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="TradeWing Logo" className="nav-logo-img" />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FiMenu />
      </div>

      {/* Nav Links */}
      <div className={`nav-buttons ${menuOpen ? "show-menu" : ""}`}>
        <span
          className={`nav-link ${isActive("/")}`}
          onClick={handleHomeClick}
        >
          Home
        </span>
        <span
          className={`nav-link ${isActive("/about")}`}
          onClick={() => handleSectionClick("about-us")}
        >
          About
        </span>
        <span
          className={`nav-link ${isActive("/courses")}`}
          onClick={() => handleSectionClick("courses")}
        >
          Courses
        </span>
        <span
          className={`nav-link ${isActive("/presence")}`}
          onClick={() => handleSectionClick("our-presence")}
        >
          Our Presence
        </span>
        <Link
          to="/reviews"
          className={`nav-link ${isActive("/reviews")}`}
          onClick={handleLinkClick}
        >
          Reviews
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isActive("/contact")}`}
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>
        <Link
          to="/refer"
          className={`nav-link ${isActive("/refer")}`}
          onClick={handleLinkClick}
        >
          Refer a Friend
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavBar;