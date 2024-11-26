import React, { useState, useEffect } from 'react';
import arrow from '../images/arrow.svg';
import 'aos/dist/aos.css'; // Import AOS styles
import './Slider.css'; // Import custom CSS for Slider
import { Link as ScrollLink } from 'react-scroll';

const Slider = ({ ani }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Slide contents
  const slides = [
    "Slide 1 Content",
    "Slide 2 Content",
    "Slide 3 Content",
    "Slide 4 Content",
    "Slide 5 Content",
    "Slide 6 Content",
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="Slider">
      {/* Slider Content with AOS animation based on 'ani' prop */}
      <div
        className="slider-content"
        // Conditionally apply `data-aos="fade-right"` if `ani` is true
        {...(ani ? { "data-aos": "fade-right" } : {})}
      >
        <p className="slider-content-p">Pragmatic</p>
        <p className="slider-content-p">Project</p>
        <p className="slider-content-p">Consilium</p>
      </div>

      {/* "Get Started" Button with AOS animation based on 'ani' prop */}
      <ScrollLink to="connect1" smooth={true} duration={1000}>
        <div {...(ani ? { "data-aos": "fade-up" } : {})} id="sl" className="slider-button-box">
          <button className="slider-button">Get Started</button>
          <img src={arrow} alt="arrow" className="slider-arrow" />
        </div>
      </ScrollLink>

      {/* Slider Index Bar - Visual indicator of the current slide */}
      <div className="slider-index-b">
        <div className="slider-index-a"></div>
        <div className="slider-index"></div>
      </div>

      {/* Slider Dots to show active slide */}
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
