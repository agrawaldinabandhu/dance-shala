import React from 'react';
import logo from '../assets/images/logo.png'; // your logo path
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src={require('../assets/videos/dance-background.mp4')} // or URL
      />
      <div className="hero-content">
        <img src={logo} alt="Dance Shala Logo" className="hero-logo" />
      </div>
    </section>
  );
};

export default Hero;
