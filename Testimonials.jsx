import React from 'react';
import './Testimonials.css';

const reviews = [
  { text: "It's really a very good institute which provides not only dance education, but also provides Yoga classes, Aerobics, Fitness, Gymnastics, and Skating!", 
    name: "Debayani Behera" },
  { text: "This is highly professional and extremely advanced dance institute!", 
    name: "Jayashree Behera" },
  { text: "Premium dance institute for kids, and for grownups....Go for it and have a look!", 
    name: "Priyanka Priyadarshini Rautara" },
  { text: "It's the best institute of Puri!", 
    name: "Ranjit Parida" },
  { text: "I love this institute....😊❤️.", 
    name: "Bubun Ghatuari" },
  // add more reviews as needed
];

export default function Testimonials() {
  return (
    <section className="testimonials">
        <div className="container">
        <h2>Testimonials</h2>
        <div className="infinite-slider">
            <div className="slider-track">
            {[...reviews, ...reviews].map(({ text, name }, idx) => (
                <div className="review" key={idx}>
                <p className="review-text">“{text}”</p>
                <p className='review-stars'>⭐⭐⭐⭐⭐</p>
                <p className="review-name">— {name}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
