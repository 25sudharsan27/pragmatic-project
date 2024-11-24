import './Company.css';
import company1 from '../images/company1.png';
import company2 from '../images/company2.png';
import company3 from '../images/company3.png';
import company4 from '../images/company4.png';
import company5 from '../images/company5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set the animation duration to 1 second
      once: false,      // Trigger the animation only once when scrolled into view
      startEvent: 'DOMContentLoaded'
    });
  }, []);

  return (
    <div className="company-container">
      <div className="globe-heading-cont" id="project-h-h">
        <h1 className="company-container-name" data-aos="fade-up">Brands We Collaborate</h1>
        <div className="global-line" data-aos="fade-up" id="project-h"></div>
      </div>
      <div className="company">
        {/* Wrapper for the images that will scroll */}
        <div data-aos="fade-up" className="company-images">
          {/* Add duplicate images for seamless infinite scroll */}
          <img src={company1} alt="company" id="company-image" />
          <img src={company2} alt="company" id="company-image" />
          <img src={company3} alt="company" id="company-image" />
          <img src={company4} alt="company" id="company-image" />
          <img src={company5} alt="company" id="company-image" />

          {/* Duplicate the images for continuous scrolling */}
          <img src={company1} alt="company" id="company-image" />
          <img src={company2} alt="company" id="company-image" />
          <img src={company3} alt="company" id="company-image" />
          <img src={company4} alt="company" id="company-image" />
          <img src={company5} alt="company" className="company-image5" id="company-image" />

        </div>
      </div>
    </div>
  );
}

export default App;
