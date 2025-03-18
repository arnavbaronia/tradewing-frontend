import React from 'react';
import { Star } from 'lucide-react';
import styles from '../Styles/TestimonialsPage.module.css';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';

const testimonials = [
  {
    name: 'Amit Gupta',
    avatar: client1,
    review:
      'This trading course exceeded my expectations! The concepts were explained clearly, and the real-world examples made it easy to understand. I feel much more confident in my trading decisions now.',
    link: 'https://g.co/kgs/mthkkpM',
  },
  {
    name: 'Manasi Gupta',
    avatar: client2,
    review:
      'This course was well-structured, easy to follow, and highly insightful. The instructor explained concepts clearly, making even complex strategies simple. Highly recommended!',
    link: 'https://g.co/kgs/7XYgk67',
  },
  {
    name: 'Saket Gupta',
    avatar: client1,
    review:
      'Awesome experience for me. I was guided with correct investment for my profile. Excellent experience of market. That’s good I made correct choice.',
    link: 'https://g.co/kgs/W6YTvYq',
  },
  {
    name: 'Monika Gupta',
    avatar: client2,
    review:
      'The instructor’s deep knowledge and engaging teaching style made learning enjoyable. He explained complex topics in a simple, easy-to-digest manner. I learned a lot and feel much more confident about my trades.',
    link: 'https://g.co/kgs/aydE4Lu',
  },
  {
    name: 'Vikas Pakhare',
    avatar: client1,
    review:
      'I must say the teaching is very detailed and professional. Definitely recommended specially for beginners. 5 star well deserved 👏 ✨️✨️✨️✨️✨️',
    link: 'https://g.co/kgs/cqA8s71',
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
  return (
    <div className={styles.testimonialsWrapper}>
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
        Our clients have experienced incredible transformations with Trade Wing! From understanding market trends to making confident trades,
        <br />
        their stories highlight the value of proper training and guidance. Read their experiences and see how Trade Wing can help you too!
      </p>
      <div className={styles.reviewsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.avatarContainer}>
              <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
            </div>
            <div className={styles.reviewContent}>
              <span className={styles.name}>{testimonial.name}</span>
              <p className={styles.reviewText}>{testimonial.review}</p>
              <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className={styles.reviewLink}>
                Read Full Review
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;