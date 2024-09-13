import React from 'react';
import './BodyContent.css';
import heroImage from '../../assets/delicious-meal-table.jpg'; // Replace with your preferred image

function BodyContent() {
  return (
    <section className="container-fluid body-content overflow-hidden">
      <div className="row no-gutters full-height">
        {/* Left side image */}
        <div className="col-lg-6 col-md-12 p-0">
          <div className="image-container">
            <img src={heroImage} className="img-fluid full-height-image mt-5 pt-4" alt="Culinary Excellence" />
          </div>
        </div>

        {/* Right side text content */}
        <div className="col-lg-6 col-md-12 p-0 d-flex align-items-center justify-content-center bg">
          <div className="text-area text-center  ">
            <h1 className="display-4 text-dark mt-lg-5 fw-bold">Experience Culinary Excellence</h1>
            <p className="lead text-dark mb-4">
            Ceylon (Sri Lankan) food offers a rich culinary experience with bold flavors and diverse ingredients. Signature dishes include **rice and curry**, with a variety of spiced vegetables, fish, and meat, cooked in fragrant spices like cinnamon, cardamom, and cloves. **Hoppers** (crispy bowl-shaped pancakes) and **Kottu roti** (chopped flatbread stir-fried with vegetables, eggs, and meat) are popular street foods. The cuisine balances spicy, sour, and sweet flavors, often accompanied by fresh coconut
            </p>
            <a href="#menu" className="btn btn-light btn-lg">Explore Our Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodyContent;
