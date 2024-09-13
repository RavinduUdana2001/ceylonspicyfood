import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderContent.css'; // Custom CSS for the navbar

function HeaderContent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-custom  fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container ">
        <a className="navbar-brand" href="#">Ceylon Spicy Food</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link ms-lg-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-lg-3" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-lg-3" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-lg-3" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderContent;
