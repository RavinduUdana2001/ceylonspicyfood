import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminPanel({ onAddDish }) {
  const [dish, setDish] = useState({
    name: '',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDish({ ...dish, [name]: value });
  };

  const handleImageChange = (e) => {
    setDish({ ...dish, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', dish.name);
    formData.append('description', dish.description);
    if (dish.image) {
      formData.append('image', dish.image);
    }

    try {
      await axios.post('http://localhost:5000/api/featured-dishes', formData, { // Correct URL
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Dish added successfully');
      setDish({
        name: '',
        description: '',
        image: null,
      });
      onAddDish(); // Call the function to update dishes in the parent component
    } catch (error) {
      console.error('Error adding dish:', error);
      alert('Failed to add dish');
    }
  };

  return (
    <div className="admin-panel">
      <div className="form-container">
        <h2 className="text-center mb-4">Add a New Featured Dish</h2>
        <form onSubmit={handleSubmit} className="dish-form">
          <div className="form-group mb-3">
            <label htmlFor="name">Dish Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={dish.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={dish.description}
              onChange={handleInputChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Dish</button>
        </form>
      </div>
    </div>
  );
}

export default AdminPanel;
