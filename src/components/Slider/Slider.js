// components/Slider.js
import React, { useState, useEffect } from 'react';
import arrow from '../images/arrow.svg';
import 'aos/dist/aos.css';
import './Slider.css';
import {Link as ScrollLink} from 'react-scroll';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "Slide 1 Content",
    "Slide 2 Content",
    "Slide 3 Content",
    "Slide 4 Content",
    "Slide 5 Content",
    "Slide 6 Content",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Slider">
      <div data-aos="fade-right" className="slider-content">
        <p className="slider-content-p">Pragmatic</p>
        <p className="slider-content-p">Project</p>
        <p className="slider-content-p">Consilium</p>
      </div>
      <ScrollLink to="connect1" smooth={true} duration={1000}>
        <div data-aos="fade-up" id="sl" className="slider-button-box">
            <button className="slider-button">Get Started </button>
            
            <img src={arrow} alt="arrow" className="slider-arrow" />
        </div>
      </ScrollLink>

      <div className="slider-index-b">
        <div className="slider-index-a"></div>
        <div className="slider-index"></div>
      </div>
      <div className="slider-index-c">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
