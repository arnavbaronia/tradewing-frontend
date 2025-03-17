import React, { useEffect } from "react";
import "../Styles/HomePage.css";
import stockImage from "../assets/stockhome.png";
import dollarImage from "../assets/dollar.png";
import rupeeImage from "../assets/rupee.png";
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
    <div className="home-page">
      {/* Left Section */}
      <div className="home-content">
        <h1 className="main-title">Trading. Strategy.</h1>
        <h2 className="sub-title">And Financial Freedom.</h2>
        <p className="description">
          Trading isn’t about luck — it’s about strategy, discipline, and
          knowledge. Successful trading requires a deep understanding of market
          trends, technical analysis, and risk management. At Trade Wing
          Trading Academy, we provide you with structured, practical, and
          result-oriented training to help you navigate the complexities of the
          stock market with confidence. Learn how to read market signals,
          develop winning strategies, and make informed decisions in real time.
          Whether you are a beginner or an experienced trader, our expert-led
          courses will empower you to trade smart and unlock your financial
          potential.
        </p>
      </div>

      {/* Right Section */}
      <div className="home-image">
        <img src={stockImage} alt="Stock Market" className="stock-img" />
      </div>

      {/* Falling Images */}
      <div className="falling-images"></div>

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