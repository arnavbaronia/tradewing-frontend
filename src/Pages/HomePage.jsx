import React, { useEffect } from "react";
import "../Styles/HomePage.css";
import stockImage from "../assets/stockhome.png";
import dollarImage from "../assets/dollar.png";
import rupeeImage from "../assets/rupee.png";
import alokImage from "../assets/papaimage.jpg";
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

      {/* Our Presence Section */}
      <div className="our-presence">
        <h2 className="presence-title">Our Presence</h2>
        <div className="presence-container">
          {/* Pune */}
          <div className="presence-card">
            <h3 className="city-name">Pune</h3>
            <p className="address">
              📍 <strong>Add-1:</strong> B-206, Royal Entrada Bhumkar Chowk Wakad, Pune-411057
            </p>
            <p className="address">
              📍 <strong>Add-2:</strong> B-602, Mont Vert Dieu, Sus Road Pashan, Pune-411017
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