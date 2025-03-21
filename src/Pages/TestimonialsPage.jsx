import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import styles from '../Styles/TestimonialsPage.module.css';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import dollarImage from '../assets/dollar.png';
import rupeeImage from '../assets/rupee.png';
import qrCodeImage from "../assets/qrtest.jpg";
import '../Styles/UPI.css'

const testimonials = [
  {
    name: 'Vikas Pakhare',
    avatar: client1,
    review:
      'I must say the teaching is very detailed and professional. Definitely recommended specially for beginners. 5 star well deserved 👏 ✨️✨️✨️✨️✨️',
    link: 'https://g.co/kgs/cqA8s71',
  },
  {
    name: 'Manasi Gupta',
    avatar: client2,
    review:
      'This course was well-structured, easy to follow, and highly insightful. The instructor explained concepts clearly, making even complex strategies simple. Highly recommended!',
    link: 'https://g.co/kgs/7XYgk67',
  },
  {
    name: 'Amit Gupta',
    avatar: client1,
    review:
      'This trading course exceeded my expectations! The concepts were explained clearly, and the real-world examples made it easy to understand. I feel much more confident in my trading decisions now.',
    link: 'https://g.co/kgs/mthkkpM',
  },
  {
    name: 'Saket Srivastava',
    avatar: client1,
    review:
      'Awesome experience for me. I was guided with correct investment for my profile. Excellent experience of market. That’s good I made correct choice.',
    link: 'https://g.co/kgs/SyoapP5',
  },
  {
    name: 'Monika Gupta',
    avatar: client2,
    review:
      'The instructor’s deep knowledge and engaging teaching style made learning enjoyable. He explained complex topics in a simple, easy-to-digest manner. I learned a lot and feel much more confident about my trades.',
    link: 'https://g.co/kgs/aydE4Lu',
  },
  {
    name: 'Dinesh Bangale',
    avatar: client1,
    review:
      'All the classes till now have been very useful. We did not have any information about the stock market. But today through training we can do trading in a much better way. He is very helpful and Alok sir who teaches people by sharing his experience is the USP of his class.',
    link: 'https://g.co/kgs/oHh4QBo',
  }
];

const TestimonialsPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
  useEffect(() => {
    const createFallingImages = () => {
      const container = document.querySelector(`.${styles.fallingImages}`);
      if (!container) return;
      for (let i = 0; i < 10; i++) {
        let img = document.createElement('img');
        img.classList.add(styles.fallingImg);
        img.src = Math.random() > 0.5 ? dollarImage : rupeeImage;
        img.style.left = `${Math.random() * 100}vw`;
        img.style.animationDuration = `${Math.random() * 5 + 5}s`;
        img.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(img);
      }
    };

    createFallingImages();

    return () => {
      const container = document.querySelector(`.${styles.fallingImages}`);
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className={styles.testimonialsWrapper}>
      {/* ✅ All India Support Number */}
      <div className={styles.supportLabel}>
        <a href="tel:+919028099326">
          📞 All India Support Number: +91-9028099326
        </a>
      </div>

      {/* ✅ Falling Images */}
      <div className={styles.fallingImages}></div>

      <h1 className={styles.heading}>What Our Clients Say</h1>
      <div className={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={styles.starIcon}
            fill="#f4b400"
            stroke="#f4b400"
          />
        ))}
      </div>
      <p className={styles.description}>
        Our clients have experienced incredible transformations with Trade Wing!
        From understanding market trends to making confident trades,
        <br />
        their stories highlight the value of proper training and guidance. Read
        their experiences and see how Trade Wing can help you too!
      </p>
      <div className={styles.reviewsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.avatarContainer}>
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className={styles.avatar}
              />
            </div>
            <div className={styles.reviewContent}>
              <span className={styles.name}>{testimonial.name}</span>
              <p className={styles.reviewText}>{testimonial.review}</p>
              <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.reviewLink}
              >
                Read Full Review
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Floating Call Button */}
      <a href="tel:+919028099326" className={styles.callButton}>
        <FiPhoneCall className={styles.callIcon} />
        Call Now
      </a>

      {/* ✅ WhatsApp Button */}
      <a
        href="https://wa.me/+919028099326"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <FaWhatsapp className={styles.whatsappIcon} />
        Chat on WhatsApp
      </a>

      {/* Floating QR Code */}
      {/* <div className="qr-floater" onClick={openPopup}>
        <img src={qrCodeImage} alt="QR Code" className="qr-code" />
        <div className="price-label">
          <span className="old-price">₹16,000</span>
          <span className="new-price">₹12,500</span>
          <span className="book-now">Book Your Slot Now</span>
        </div>
      </div> */}

      {/* Popup */}
      {/* {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              ✕
            </button>
            <img src={qrCodeImage} alt="QR Code" className="popup-qr" />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TestimonialsPage;