import React, { useEffect } from "react";
import "../Styles/HomePage.css";
import stockImage from "../assets/stockhome.png";
import dollarImage from "../assets/dollar.png";
import rupeeImage from "../assets/rupee.png";
import logo from "../assets/twlogotransparent.png";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  useEffect(() => {
    const createFallingImages = () => {
      const container = document.querySelector(".falling-images");
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
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="home-page-wrapper">
      {/* Falling Images */}
      <div className="falling-images"></div>

      {/* Hero Section */}
      <div className="home-page">
        <div className="home-content">
          <h1 className="main-title">Trading. Strategy.</h1>
          <h2 className="sub-title">And Financial Freedom.</h2>
          <p className="description">
            Trading isn’t about luck — it’s about strategy, discipline, and
            knowledge. Successful trading requires a deep understanding of
            market trends, technical analysis, and risk management. At Trade Wing
            Trading Academy, we provide you with structured, practical, and
            result-oriented training to help you navigate the complexities of the
            stock market with confidence. Whether you are a beginner or an
            experienced trader, our expert-led courses will empower you to trade
            smart and unlock your financial potential.
          </p>
        </div>
        <div className="home-image">
          <img src={stockImage} alt="Stock Market" className="stock-img" />
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
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
    </div>
  );
};

export default HomePage;