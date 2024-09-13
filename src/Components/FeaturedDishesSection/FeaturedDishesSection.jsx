import React from 'react';
import './FeaturedDishesSection.css'; // Import CSS file for styling
import pic1 from '../../assets/delicious-meal-table.jpg';
import pic2 from '../../assets/curry-with-chicken-onions-indian-food-asian-cuisine-top-view.jpg';
import pic3 from '../../assets/delicious-bowl-with-sauce-top-view.jpg';


// Sample data for featured dishes
const featuredDishes = [
  {
    id: 1,
    name: 'Sizzling Spicy Shrimp',
    description: 'Juicy shrimp cooked with a blend of spicy herbs and served sizzling hot.',
    image: pic1 // Replace with your image path
  },
  {
    id: 2,
    name: 'Hot Chili Ramen',
    description: 'Rich and spicy ramen soup with tender noodles and fresh veggies.',
    image: pic2 // Replace with your image path
  },
  {
    id: 3,
    name: 'Spicy BBQ Ribs',
    description: 'Succulent ribs coated in a spicy BBQ sauce, grilled to perfection.',
    image: pic3 // Replace with your image path
  }
  // Add more items as needed
];

function FeaturedDishesSection() {
  return (
    <section className="featured-dishes-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Spicy Dishes</h2>
        <div className="row">
          {featuredDishes.map(dish => (
            <div key={dish.id} className="col-md-4 mb-4">
              <div className="dish-item">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <div className="dish-info">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishesSection;
