import React from 'react';
import './Socials.css';

const Socials = () => {
  return (
    <footer className="socials-section">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/share/1Bp1KyiNM2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/mydanceshala?igsh=NmIwcXVvaWNybWxv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://youtube.com/@tusharjaindance?si=KCijAZW3IY-Se1Pg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="youtube"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="mailto:mydanceshala@gmail.com"
          aria-label="Email"
          className="email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Dance Shala. All rights reserved.</p>
    </footer>
  );
};

export default Socials;
