import React from 'react';
import MiniCarousel from './MiniCarousel';
import './Gallery.css';

// Example media for each box (replace src with your actual asset paths)
const galleryData = [
  [
    { type: 'video', src: '/assets/videos/video1.mp4' },
    { type: 'image', src: '/assets/images/photo1.jpg' },
    { type: 'image', src: '/assets/images/photo2.jpg' },
  ],
  [
    { type: 'video', src: '/assets/videos/video2.mp4' },
    { type: 'image', src: '/assets/images/photo3.jpg' },
    { type: 'image', src: '/assets/images/photo4.jpg' },
  ],
  [
    { type: 'video', src: '/assets/videos/video3.mp4' },
    { type: 'image', src: '/assets/images/photo5.jpg' },
    { type: 'image', src: '/assets/images/photo6.jpg' },
  ],
  [
    { type: 'video', src: '/assets/videos/video4.mp4' },
    { type: 'image', src: '/assets/images/photo7.jpg' },
    { type: 'image', src: '/assets/images/photo8.jpg' },
  ],
  [
    { type: 'video', src: '/assets/videos/video4.mp4' },
    { type: 'image', src: '/assets/images/photo7.jpg' },
    { type: 'image', src: '/assets/images/photo8.jpg' },
  ],
  [
    { type: 'video', src: '/assets/videos/video4.mp4' },
    { type: 'image', src: '/assets/images/photo7.jpg' },
    { type: 'image', src: '/assets/images/photo8.jpg' },
  ],
];

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryData.map((media, idx) => (
          <div className="gallery-box" key={idx}>
            <MiniCarousel media={media} />
          </div>
        ))}
      </div>
    </section>
  );
}
