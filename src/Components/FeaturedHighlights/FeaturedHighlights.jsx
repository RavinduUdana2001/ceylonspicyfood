import React from 'react';
import './FeaturedHighlights.css'; // Import the CSS file
import { FaStar, FaAward, FaLeaf } from 'react-icons/fa'; // Import icons

const FeaturedHighlights = () => {
  return (
    <section className="featured-highlights">
      <div className="container">
        <header className="highlights-header">
          <h2>What We Offer</h2>
          <p>Explore our key features and what makes us unique.</p>
        </header>
        <div className="highlights-content">
          <div className="highlight-item">
            <FaStar className="highlight-icon" />
            <h3>Signature Dishes</h3>
            <p>Indulge in our signature dishes, crafted with authentic flavors and premium ingredients.</p>
          </div>
          <div className="highlight-item">
            <FaAward className="highlight-icon" />
            <h3>Award-Winning</h3>
            <p>Our dishes have been recognized for their exceptional taste and quality.</p>
          </div>
          <div className="highlight-item">
            <FaLeaf className="highlight-icon" />
            <h3>Fresh Ingredients</h3>
            <p>We use only the freshest ingredients to ensure every meal is delicious and satisfying.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHighlights;
