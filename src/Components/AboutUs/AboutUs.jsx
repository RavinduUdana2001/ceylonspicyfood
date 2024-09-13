import React from 'react';
import './AboutUs.css'; // Make sure to import the CSS file
import picc from '../../assets/online-shopping-store.png'

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-description">
            We are committed to delivering excellence with every service we provide. Our team of professionals works diligently to ensure that your experience with us is nothing short of outstanding.
          </p>
          <div className="about-us-image">
            <img src={picc} alt="About Us" className="about-us-img" />
          </div>
        </div>
        <div className="about-us-side">
          <div className="about-us-vision">
            <h2 className="about-us-subtitle">Our Vision</h2>
            <p className="about-us-text">
            To be a leading innovator in our field, consistently setting new benchmarks for excellence, quality, and customer satisfaction, while pioneering advancements and driving industry standards forward.
            </p>
          </div>
          <div className="about-us-mission">
            <h2 className="about-us-subtitle">Our Mission</h2>
            <p className="about-us-text">
            To provide exceptional services with a focus on reliability, innovation, and excellence, ensuring that every client seamlessly achieves their goals and experiences unparalleled satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
