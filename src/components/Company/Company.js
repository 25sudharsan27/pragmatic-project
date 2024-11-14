import './Company.css';
import company1 from '../images/company1.png';
import company2 from '../images/company2.png';
import company3 from '../images/company3.png';
import company4 from '../images/company4.png';
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
        <h1 data-aos="fade-up" data-aos-delay="200" className="company-container-name">Brands We Collaborate</h1>
    <div className="company">
        <img data-aos="fade-left" data-aos-delay="300" src={company1} alt="company" id="company-image" />
        <img data-aos="fade-left" data-aos-delay="400" src={company2} alt="company" id="company-image" />
        <img data-aos="fade-left" data-aos-delay="500" src={company3} alt="company" id="company-image" />
        <img data-aos="fade-left" data-aos-delay="600" src={company4} alt="company" id="company-image" />

    </div>
    </div>
  );
}

export default App;
