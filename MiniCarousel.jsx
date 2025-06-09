import React, { useState } from 'react';
import './MiniCarousel.css';

export default function MiniCarousel({ media }) {
  // media is an array of objects: { type: 'video' | 'image', src: string }
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mini-carousel">
      <button className="nav prev" onClick={prevSlide}>&lt;</button>
      <div className="media-container">
        {media.map(({ type, src }, idx) => (
          <div
            key={idx}
            className={`media-item ${idx === current ? 'active' : ''}`}
          >
            {type === 'video' ? (
              <video src={src} controls muted />
            ) : (
              <img src={src} alt={`gallery-${idx}`} />
            )}
          </div>
        ))}
      </div>
      <button className="nav next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}
