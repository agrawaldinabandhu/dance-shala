import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ClassDetails from './components/ClassDetails';
import Socials from './components/Socials';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <section id="hero" data-aos="fade-in"><Hero /></section>
      <section id="gallery" data-aos="fade-up"><Gallery /></section>
      <section id="about" data-aos="fade-right"><About /></section>
      <section id="class-details" data-aos="zoom-in"><ClassDetails /></section>
      <section id="testimonials" data-aos="fade-left"><Testimonials /></section>
      <section id="contact" data-aos="zoom-out"><Contact /></section>
      <section id="socials" data-aos="zoom-out"><Socials /></section>
    </>
  );
}

export default App;
