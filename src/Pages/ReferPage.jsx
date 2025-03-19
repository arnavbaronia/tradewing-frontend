import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import styles from '../Styles/ContactUsPage.module.css';
import qrCodeImage from "../assets/qrtest.jpg";
import '../Styles/UPI.css'

const ReferFriendPage = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    friendName: '',
    friendEmail: '',
    friendPhone: '',
    message: ''
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3wn9fwn",
        "template_r6o1ld5",
        formData,
        "e3WBukrIPyg3IFN-T"
      )
      .then(
        () => {
          setNotification({ message: 'Referral sent successfully!', type: 'success' });
          setFormData({ yourName: '', friendName: '', friendEmail: '', friendPhone: '', message: '' });

          setTimeout(() => setNotification({ message: '', type: '' }), 3000);
        },
        (error) => {
          setNotification({ message: 'Failed to send referral. Please try again.', type: 'error' });
          console.error('EmailJS Error:', error);

          setTimeout(() => setNotification({ message: '', type: '' }), 3000);
        }
      );
  };

  return (
    <div className={styles.contactWrapper}>
      {/* Notification */}
      {notification.message && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}

      {/* ✅ All India Support Number */}
      <div className={styles.supportLabel}>
        <a href="tel:+919028099326">
            📞 All India Support Number: +91-9028099326
        </a>
      </div>

      {/* Header */}
      <div className={styles.contactHeader}>
        <h1 className={styles.heading}>Refer a Friend</h1>
        <p className={styles.subheading}>Help your friends get started!</p>
        <p className={styles.description}>
          Share the benefits of our platform with your friends! Provide their details below, and we’ll reach out to them with all the information they need to get started.
        </p>
      </div>

      {/* Form */}
      <div className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Name Row */}
            <div className={styles.row}>
              <input
                type="text"
                name="yourName"
                placeholder="Your Name"
                value={formData.yourName}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="text"
                name="friendName"
                placeholder="Friend's Name"
                value={formData.friendName}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            {/* Email and Phone Row */}
            <div className={styles.row}>
              <input
                type="email"
                name="friendEmail"
                placeholder="Friend's Email"
                value={formData.friendEmail}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="tel"
                name="friendPhone"
                placeholder="Friend's Contact Number"
                value={formData.friendPhone}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <textarea
              name="message"
              placeholder="Add a personal message (optional)"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
            />
            <button type="submit" className={styles.button}>
              Send Referral
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Floating Call Button */}
      <a href="tel:+919028099326" className={styles.callButton}>
        <FiPhoneCall className={styles.callIcon} />
        Call Now
      </a>

      {/* ✅ Floating WhatsApp Button */}
      <a href="https://wa.me/+919028099326" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
        <FaWhatsapp className={styles.whatsappIcon} />
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

export default ReferFriendPage;