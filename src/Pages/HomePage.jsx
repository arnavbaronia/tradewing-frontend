import React, { useEffect, useState } from "react";
import "../Styles/HomePage.css";
import stockImage from "../assets/stockhome.png";
import dollarImage from "../assets/dollar.png";
import rupeeImage from "../assets/rupee.png";
import alokImage from "../assets/papaimage.jpg";
import logo from "../assets/twlogotransparent.png";
import qrCodeImage from "../assets/qrtest.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Courses from "./Courses";

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  useEffect(() => {
    const createFallingImages = () => {
      const container = document.querySelector(".falling-images");
      if (!container) return;
      for (let i = 0; i < 10; i++) {
        let img = document.createElement("img");
        img.classList.add("falling-img");
        img.src = Math.random() > 0.5 ? dollarImage : rupeeImage;
        img.style.left = `${Math.random() * 100}vw`;
        img.style.animationDuration = `${Math.random() * 5 + 5}s`;
        img.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(img);
      }
    };
    createFallingImages();

    return () => {
      const container = document.querySelector(".falling-images");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div className="home-page-wrapper">
      {/* ✅ All India Support Number */}
      <div className="support-label">
      <a
        href="tel:+919028099326"
      >
        📞 All India Support Number: +91-9028099326
      </a>
      </div>
      {/* Falling Images */}
      <div className="falling-images"></div>

      {/* Hero Section */}
      <div className="home-page">
        <div className="home-content">
          <h1 className="main-title">Trade Wing Trading Academy – Online Stock Trading Classes</h1>
          <p className="description">
            Trade Wing Trading Academy is a premier online learning platform dedicated to training individuals in stock market trading. The academy offers structured courses from basics to advanced levels, empowering learners with time-tested technical analysis tools to make informed trading decisions.
          </p>
          <div className="key-features">
            <div className="feature-item">
              ✅ <strong>Comprehensive Curriculum </strong>
              <span> : Covers stock market fundamentals, technical analysis, and trading strategies.</span>
            </div>
            <div className="feature-item">
              ✅ <strong>Weekend Online Classes </strong>
              <span> : Flexible learning for professionals and beginners.</span>
            </div>
            <div className="feature-item">
              ✅ <strong>Expert Guidance </strong>
              <span> : Led by Alok Baronia, a seasoned trader with 25 years of experience in banking, investments, and financial markets.</span>
            </div>
            <div className="feature-item">
              ✅ <strong>Real-World Insights </strong>
              <span> : Practical application of trading techniques for consistent success.</span>
            </div>
            <div className="feature-item">
              ✅ <strong>Ongoing Mentorship </strong>
              <span> : Continuous support to help students learn, earn, and grow.</span>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={stockImage} alt="Stock Market" className="stock-img" />
        </div>
      </div>

      {/* About Us Section */}
      <div id="about-us" className="about-us">
        <div className="about-us-content">
          <img src={logo} alt="Trade Wing Logo" className="logo-img" />
          <h2 className="about-title">About Trade Wing Trading Academy</h2>
          <p className="about-description">
            Trade Wing Trading Academy is a premier stock market training
            institute dedicated to empowering individuals with the knowledge and
            skills needed to excel in trading and investments. Founded by Alok
            Baronia, a seasoned trader with 25 years of experience in banking and
            financial markets and 14 years of successful trading expertise, the
            academy provides structured, practical, and result-oriented training
            for traders at all levels.
          </p>

          <div className="about-sections">
            <div className="about-section">
              <h3 className="section-heading">Our Mission</h3>
              <p className="about-text">
                Our mission is to help individuals acquire wisdom-based skills in
                technical analysis using time-tested tools. We aim to transform
                traders into confident, independent market participants who can
                make informed decisions, minimize risks, and maximize profits.
              </p>
            </div>

            <div className="about-section">
              <h3 className="section-heading">What We Offer</h3>
              <ul className="about-list">
                <li>
                  ✅ Comprehensive Training Programs – Basics to advanced analysis.
                </li>
                <li>
                  ✅ Technical Analysis Mastery – Deep dive into chart patterns.
                </li>
                <li>
                  ✅ Live Market Learning – Real-time practice and insights.
                </li>
                <li>
                  ✅ Risk Management & Psychology – Minimize risks, maximize gains.
                </li>
                <li>
                  ✅ Personalized Mentorship – Direct guidance from Alok Baronia.
                </li>
                <li>
                  ✅ Weekend Online Classes – Flexible for working professionals.
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h3 className="section-heading">Who Can Benefit?</h3>
              <ul className="about-list">
                <li>🎯 Beginners learning from scratch.</li>
                <li>🎯 Intermediate traders refining strategies.</li>
                <li>🎯 Investors making smart, informed decisions.</li>
                <li>🎯 Anyone seeking financial independence.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Alok Baronia Section */}
      <div className="about-alok">
        <div className="about-alok-container">
          <h2 className="alok-title">About Alok Baronia</h2>
          <div className="alok-image-wrapper">
            <img src={alokImage} alt="Alok Baronia" className="alok-image" />
          </div>
          <div className="alok-content">
            <p className="alok-description">
              Alok Baronia is a seasoned financial expert with an illustrious
              career spanning 25 years in banking, investments, and the financial
              domain. With 14 years of successful trading experience, he has
              mastered the art of technical analysis and wealth creation using
              time-tested tools and strategies.
            </p>
            <p className="alok-description">
              As the founder and mentor of Trade Wing Trading Academy, Alok is
              on a mission to train aspiring traders and investors in stock
              market trading, from basics to advanced levels. His structured
              training programs focus on technical analysis, price action, risk
              management, and smart trading strategies, equipping learners with
              the knowledge and confidence to navigate the markets effectively.
            </p>
            <p className="alok-description">
              With a deep-rooted belief in wisdom-based trading, Alok specializes 
              in chart pattern analysis, market trends, and advanced indicators, 
              helping individuals make informed and profitable trading decisions.
              His approach blends traditional techniques with modern innovations,
              ensuring that traders stay ahead in the dynamic financial markets.
            </p>
            <p className="alok-description">
              Through his academy, he has been instrumental in shaping numerous 
              success stories, helping individuals learn, earn, and achieve financial 
              independence. His interactive training sessions, live market case studies, 
              and personalized mentorship set him apart as a dedicated guide and support 
              system for all those associated with him.
            </p>
            <p className="alok-description">
              Alok’s commitment to financial literacy, wealth creation, and
              trader empowerment makes him a highly respected figure in the stock
              market training community. Whether you're a beginner or an
              experienced trader, his expertise and mentorship can transform your
              market journey into a path of consistent success.
            </p>
          </div>
        </div>
      </div>

      <div id="courses">
        <Courses />
      </div>

      {/* Our Presence Section */}
      <div id="our-presence" className="our-presence">
        <h2 className="presence-title">Our Presence</h2>
        <div className="presence-container">
          {/* Pune */}
          <div className="presence-card">
            <h3 className="city-name">Pune</h3>
            <p className="address">
              📍 <strong>Add-1:</strong> B-206, Royal Entrada, Bhumkar Chowk, Wakad, Pune-411057
            </p>
            <p className="address">
              📍 <strong>Add-2:</strong> B-602, Mont Vert Dieu, Sus Road, Pashan, Pune-411017
            </p>
          </div>

          {/* Nagpur */}
          <div className="presence-card">
            <h3 className="city-name">Nagpur</h3>
            <p className="address">
              📍 J-801, Jayanti Nagri VII, Besa Square, Nagpur-440024
            </p>
          </div>

          {/* Hyderabad */}
          <div className="presence-card">
            <h3 className="city-name">Hyderabad</h3>
            <p className="address">
              📍 D-1104, Rainbow Vistas, Moosapet, Hyderabad-500018
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Floating Call Button */}
      <a
        href="tel:+919028099326"
        className="call-button"
      >
        <FiPhoneCall className="call-icon" />
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919028099326"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp className="whatsapp-icon" />
        Chat on WhatsApp
      </a>

      {/* Floating QR Code */}
      <div className="qr-floater" onClick={openPopup}>
        <img src={qrCodeImage} alt="QR Code" className="qr-code" />
        <div className="price-label">
          <span className="old-price">₹15,000</span>
          <span className="new-price">₹12,000</span>
          <span className="book-now">Book Your Slot Now</span>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              ✕
            </button>
            <img src={qrCodeImage} alt="QR Code" className="popup-qr" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;