import React from 'react';
import './FeatureShowcase.css'; // Import CSS file for styling

function FeatureShowcase() {
  return (
    <section className="feature-showcase">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-utensils"></i> {/* Font Awesome icon */}
              </div>
              <h3 className="feature-title">Authentic Flavors</h3>
              <p className="feature-description">
                Enjoy traditional recipes with the finest ingredients prepared with passion.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-clock"></i> {/* Font Awesome icon */}
              </div>
              <h3 className="feature-title">Quick Delivery</h3>
              <p className="feature-description">
                Get your favorite dishes delivered fast and fresh right to your doorstep.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-star"></i> {/* Font Awesome icon */}
              </div>
              <h3 className="feature-title">Premium Ingredients</h3>
              <p className="feature-description">
              We use premium ingredients to make every bite delicious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
