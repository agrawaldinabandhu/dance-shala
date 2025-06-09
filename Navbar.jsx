import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="/assets/logo.png" alt="Dance Shala" />
    </div>
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#class-details">Classes</a></li>
      <li><a href="#testimonials">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href='#socials'>Socials</a></li>
    </ul>
  </nav>
);

export default Navbar;
