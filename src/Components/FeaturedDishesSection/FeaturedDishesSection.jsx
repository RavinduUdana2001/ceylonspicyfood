import React, { useState, useEffect } from 'react';
import './FeaturedDishesSection.css';

function FeaturedDishesSection() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/featured-dishes');
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Log the dishes data to inspect
          setDishes(data);
        } else {
          console.error('Error fetching dishes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchDishes();
  }, []);
  

  const imageBasePath = 'http://localhost:5000/uploads/'; // Ensure this matches your server setup

  return (
    <section className="featured-dishes-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Spicy Dishes</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="row">
            {Array.isArray(dishes) && dishes.length > 0 ? (
              dishes.map(dish => (
                <div key={dish.id} className="col-md-4 mb-4">
                  <div className="dish-item">
                    {/* Construct the image URL */}
                    <img src={`${imageBasePath}${dish.image}`} alt={dish.name} className="dish-image" />
                    <div className="dish-info">
                      <h3 className="dish-name">{dish.name}</h3>
                      <p className="dish-description">{dish.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No dishes available</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedDishesSection;
