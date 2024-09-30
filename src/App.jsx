import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HeaderContent from './Components/HeaderContent/HeaderContent';
import BodyContent from './Components/BodyContent/BodyContent';
import FeaturedDishesSection from './Components/FeaturedDishesSection/FeaturedDishesSection';
import FeatureShowcase from './Components/FeatureShowcase/FeatureShowcase';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';
import FeaturedHighlights from './Components/FeaturedHighlights/FeaturedHighlights';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [featuredDishes, setFeaturedDishes] = useState([]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const addDish = async () => {
    try {
      const response = await fetch('/api/featured-dishes');
      const data = await response.json();
      setFeaturedDishes(data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeaderContent />
            <BodyContent />
            <FeaturedDishesSection dishes={featuredDishes} />
            <FeaturedHighlights />
            <AboutUs />
            <FeatureShowcase />
            <ContactSection />
            <Footer />
          </>
        } />
        
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        
        <Route path="/admin" element={
          isAuthenticated ? (
            <AdminPanel onAddDish={addDish} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;
