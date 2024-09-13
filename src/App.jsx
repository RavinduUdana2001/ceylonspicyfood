import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent';
import FeaturedDishesSection from './Components/FeaturedDishesSection/FeaturedDishesSection';
import FeatureShowcase from './Components/FeatureShowcase/FeatureShowcase';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';
import FeaturedHighlights from './Components/FeaturedHighlights/FeaturedHighlights';


function App() {


  return (
    <>
      <HeaderContent/>
      <BodyContent/>
      <FeaturedDishesSection/>
      <FeaturedHighlights/>
      <AboutUs/>
      <FeatureShowcase/>
      <ContactSection/>
      <Footer/>
    
    </>
  )
}

export default App
