import React, { useEffect } from 'react';
import './About.css';
import image1 from '../images/about1.png';
import image2 from '../images/about2.png';
import image3 from '../images/about3.png';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

function App({ ani }) {
  
  // Initialize AOS when component mounts, if ani is true
  useEffect(() => {
    if (ani) {
      AOS.init({
        duration: 1000, // Optional: you can customize the animation duration or other settings
        once: true, // Optional: ensures animations only trigger once
        startEvent: 'DomContentLoaded', // Optional: triggers AOS on specific event
      });
    }
  }, [ani]);

  // Helper function to conditionally apply AOS animations
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };

  return (
    <div className="about-section">
      <div className="about-section-left">
        <div className="about-heading2">
          <h1 
            id="about11" 
            className="about-heading" 
            {...getAosData("fade-up", 0)} // Fade-up animation with no delay
          >
            About Us
          </h1>
          <div className="global-line"></div>
        </div>

        <h1 
          id="about22" 
          className="about-para1" 
          {...getAosData("fade-up", 100)} // Fade-up with 100ms delay
        >
          Your strategic partner for healthy and successful projects
        </h1>

        <div className="about44">
          <p 
            id="about33" 
            className="about-para2" 
            {...getAosData("fade-up", 200)} // Fade-up with 200ms delay
          >
            Our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake. From conception to completion, we ensure that every detail is meticulously planned and executed to perfection.
          </p>
        </div>
      </div>

      <div className="about-section-right">
        <img 
          id="about1" 
          src={image1} 
          alt="about" 
          {...getAosData("fade-up", 300)} // Fade-up with 300ms delay
        />
        <img 
          id="about2" 
          src={image2} 
          alt="about" 
          {...getAosData("fade-down", 300)} // Fade-down with 300ms delay
        />
        <img 
          id="about3" 
          src={image3} 
          alt="about" 
          {...getAosData("fade-up", 500)} // Fade-up with 500ms delay
        />
      </div>
    </div>
  );
}

export default App;
