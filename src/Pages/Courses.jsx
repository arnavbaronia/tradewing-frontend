import React from "react";
import { FaChartLine, FaCoins, FaGraduationCap } from "react-icons/fa";
import "../Styles/Courses.css";

const Courses = () => {
  const courses = [
    {
      icon: <FaChartLine className="course-icon" />,
      title: (
        <>
          <span className="course-level">Level 1:</span> Stock Market Basic to Advanced
        </>
      ),
      description:
        "Master the essentials of stock market trading. Learn fundamental concepts, technical analysis, and strategies to start your trading journey.",
    },
    {
      icon: <FaCoins className="course-icon" />,
      title: (
        <>
          <span className="course-level">Level 2:</span> F & O Beginners to Pro Traders
        </>
      ),
      description:
        "Dive deep into Futures and Options trading. Understand derivatives, strategies, and risk management to trade like a pro.",
    },
    {
      icon: <FaGraduationCap className="course-icon" />,
      title: (
        <>
          <span className="course-level">Level 3:</span> Master Classes
        </>
      ),
      description:
        "Exclusive master classes with industry experts. Learn advanced techniques, market psychology, and professional trading tactics.",
    },
  ];  

  return (
    <div className="courses-container">
      <h2 className="courses-heading">Our Courses</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-header">
              {course.icon}
              <h3 className="course-title">{course.title}</h3>
            </div>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;