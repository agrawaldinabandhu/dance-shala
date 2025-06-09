import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <div className="contact-grid">
      <div className="contact-info">
        <p><strong>Location:</strong> Harihara Vihar, Behind Gundicha Temple, Puri, Odisha</p>
        <p><strong>Phone(Primary):</strong> +91 7327819258</p>
        <p><strong>Phone:</strong> +91 8328856530</p>
        <p><strong>Email:</strong> mydanceshala@gmail.com</p>
      </div>
      <div className="map">
        <iframe
            title="Dance Shala Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.9579844784444!2d85.80110482680584!3d19.799378694270658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c41f648e02a1%3A0xc25a08197828977b!2sDanceShala%20(Dance%20%26%20Fitness%20Studio)!5e0!3m2!1sen!2sin!4v1749014016801!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default Contact;
