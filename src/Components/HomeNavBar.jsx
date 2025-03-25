import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/HomeNavBar.css";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/twlogotransparentt.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

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
    window.scrollTo({ top: 0, behavior: "smooth" }); 
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
          <HomeOutlinedIcon className="nav-icon" />
          Home
        </span>
        <span
          className={`nav-link ${isActive("/about")}`}
          onClick={() => handleSectionClick("about-us")}
        >
          <Person2OutlinedIcon className="nav-icon" />
          About
        </span>
        <span
          className={`nav-link ${isActive("/courses")}`}
          onClick={() => handleSectionClick("courses")}
        >
          <MenuBookOutlinedIcon className="nav-icon" />
          Courses
        </span>
        <span
          className={`nav-link ${isActive("/payments")}`}
          onClick={() => handleSectionClick("payments")}
        >
          <CurrencyRupeeOutlinedIcon className="nav-icon" />
          Payments
        </span>
        <span
          className={`nav-link ${isActive("/presence")}`}
          onClick={() => handleSectionClick("our-presence")}
        >
          <AddLocationAltOutlinedIcon className="nav-icon" />
          Our Presence
        </span>
        <Link
          to="/reviews"
          className={`nav-link ${isActive("/reviews")}`}
          onClick={handleLinkClick}
        >
          <RateReviewOutlinedIcon className="nav-icon" />
          Reviews
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isActive("/contact")}`}
          onClick={handleLinkClick}
        >
          <AddIcCallOutlinedIcon className="nav-icon" />
          Contact Us
        </Link>
        <Link
          to="/refer"
          className={`nav-link ${isActive("/refer")}`}
          onClick={handleLinkClick}
        >
          <GroupAddOutlinedIcon className="nav-icon" />
          Refer a Friend
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavBar;