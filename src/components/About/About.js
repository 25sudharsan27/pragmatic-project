import React, { useEffect } from 'react';
import './About.css';
import image1 from '../images/about1.png';
import image2 from '../images/about2.png';
import image3 from '../images/about3.png';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set the animation duration to 1 second
      once: true,      // Trigger the animation only once when scrolled into view
      startEvent: 'DOMContentLoaded',
      offset:10,
    });
  }, []);

  return (
    <div className="about-section">
      <div className="about-section-left">
        <div className="about-heading2">
        
        <h1 id="about11" className="about-heading" data-aos="fade-up">About Us</h1>
        <div className="global-line" ></div>        </div>
        <h1 id="about22" className="about-para1" data-aos="fade-up" data-aos-delay="100">Your strategic partner for healthy and successful projects</h1>
        <div className="about44" >
          <p id="about33" className="about-para2" data-aos="fade-up" data-aos-delay="200">
            Our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake. From conception to completion, we ensure that every detail is meticulously planned and executed to perfection.
          </p>
        </div>
      </div>
      <div className="about-section-right">
        <img id="about1" src={image1} alt="about" data-aos="fade-up" data-aos-delay="300" />
        <img id="about2" src={image2} alt="about" data-aos="fade-down" data-aos-delay="300" />
        <img id="about3" src={image3} alt="about" data-aos="fade-up" data-aos-delay="500" />
      </div>
    </div>
  );
}

export default App;
