import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaWhatsapp, FaFacebook, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import styles from '../Styles/ContactUsPage.module.css';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
          setNotification({ message: 'Message sent successfully!', type: 'success' });
          setFormData({ name: '', email: '', message: '' });

          setTimeout(() => setNotification({ message: '', type: '' }), 3000);
        },
        (error) => {
          setNotification({ message: 'Failed to send message. Please try again.', type: 'error' });
          console.error('EmailJS Error:', error);

          setTimeout(() => setNotification({ message: '', type: '' }), 3000);
        }
      );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alokbaronia@yahoo.com');
    setNotification({ message: 'Email copied to clipboard!', type: 'info' });

    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  return (
    <div className={styles.contactWrapper}>
      {/* Notification */}
      {notification.message && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}

      <div className={styles.contactHeader}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subheading}>Reach out to me!</p>
        <p className={styles.description}>
          Please provide your details in the form on the left, and I will respond to your inquiry without delay.  
          You may also reach out to me on the platforms mentioned on the right-hand side.
        </p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactOptions}>
          <button onClick={() => window.open('https://www.linkedin.com/in/alok-baronia', '_blank')} className={styles.contactButton}>
            <FaLinkedin className={styles.icon} /> LinkedIn
          </button>
          <button onClick={() => window.open('https://wa.me/9029099326', '_blank')} className={styles.contactButton}>
            <FaWhatsapp className={styles.icon} /> WhatsApp
          </button>
          <button onClick={() => window.open('https://www.facebook.com/profile.php?id=61570923356115', '_blank')} className={styles.contactButton}>
            <FaFacebook className={styles.icon} /> Facebook
          </button>
          <button onClick={() => window.open('https://www.instagram.com/alokbaronia', '_blank')} className={styles.contactButton}>
            <FaInstagram className={styles.icon} /> Instagram
          </button>
          <button onClick={() => window.open('tel:+9028099326')} className={`${styles.contactButton} ${styles.phoneButton}`}>
            <FaPhone className={`${styles.icon} ${styles.flipIcon}`} /> Call
          </button>
          <button onClick={handleCopyEmail} className={styles.contactButton}>
            <FaEnvelope className={styles.icon} /> Copy Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;