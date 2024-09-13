import React from 'react';
import './ContactSection.css'; // Import the CSS file
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons
import pic3 from '../../assets/delicious-bowl-with-sauce-top-view.jpg';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We’re here to help! Reach out to us for any questions or support.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Our Details</h3>
            <div className="contact-details">
              <div className="contact-detail">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Ceylon Street, Colombo, Sri Lanka</span>
              </div>
              <div className="contact-detail">
                <FaPhoneAlt className="contact-icon" />
                <span>+94 123 456 789</span>
              </div>
              <div className="contact-detail">
                <FaEnvelope className="contact-icon" />
                <span>info@ceylonfood.com</span>
              </div>
              <img src={pic3} className='img-fluid mt-3'/>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-textarea" required></textarea>
              </div>
              <button type="submit" className="form-button mt-4">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
