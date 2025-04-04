import React, { useEffect } from 'react';

// CSS and Animation
import './About.css';
import AOS from 'aos';  
import 'aos/dist/aos.css'; 

const App = ({ ani }) => {

   // Functions
   const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };

  // UseEffects 
  useEffect(() => {
    if (ani) {
      AOS.init({
        duration: 1000, 
        once: true,
        startEvent: 'DomContentLoaded', 
      });
    }
  }, [ani]);

 
  // Rendered Component
  return (
    <div className="about-section">
      <div className="about-section-left">
        <div className="about-heading2">
          <h1 
            id="about11" 
            className="about-heading" 
            {...getAosData("fade-up", 0)} 
          >
            About Us
          </h1>
          <div className="global-line"></div>
        </div>

        <h1 
          id="about22" 
          className="about-para1" 
          {...getAosData("fade-up", 100)} 
        >
          Your strategic partner for healthy and successful projects
        </h1>

        <div className="about44">
          <p 
            id="about33" 
            className="about-para2" 
            {...getAosData("fade-up", 200)} 
          >
            Our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake. From conception to completion, we ensure that every detail is meticulously planned and executed to perfection.
          </p>
        </div>
      </div>

      <div className="about-section-right">
        <img 
          id="about1" 
          src= 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997179/kb75rjld2eubnawiynrk.webp'
          alt="about" 
          {...getAosData("fade-up", 300)} 
        />
        <img 
          id="about2" 
          src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997170/kmfjuptm1ot2dnqilohx.webp'
          alt="about" 
          {...getAosData("fade-down", 300)} 
        />
        <img 
          id="about3" 
          src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997170/cyp9bzrzw5t0tnrkzdgw.webp'
          alt="about" 
          {...getAosData("fade-up", 500)} 
        />
      </div>
    </div>
  );
}

export default App;
