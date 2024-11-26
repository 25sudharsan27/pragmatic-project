import './Company.css';
import company1 from '../images/company1.png';
import company2 from '../images/company2.png';
import company3 from '../images/company3.png';
import company4 from '../images/company4.png';
import company5 from '../images/company5.png';

function Company({ ani }) {
  // Initialize AOS only if animations are enabled
 

  // Helper function to conditionally apply AOS attributes
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };

  return (
    <div className="company-container">
      <div className="globe-heading-cont" id="project-h-h">
        <h1 className="company-container-name" {...getAosData("fade-up", 0)}>Brands We Collaborate</h1>
        <div className="global-line" {...getAosData("fade-up", 100)} id="project-h"></div>
      </div>
      <div className="company">
        {/* Wrapper for the images that will scroll */}
        <div className="company-images">
          {/* Add duplicate images for seamless infinite scroll */}
          <img src={company1} alt="company" id="company-image" {...getAosData("fade-up", 200)} />
          <img src={company2} alt="company" id="company-image" {...getAosData("fade-up", 300)} />
          <img src={company3} alt="company" id="company-image" {...getAosData("fade-up", 400)} />
          <img src={company4} alt="company" id="company-image" {...getAosData("fade-up", 500)} />
          <img src={company5} alt="company" id="company-image" {...getAosData("fade-up", 600)} />

          {/* Duplicate the images for continuous scrolling */}
          <img src={company1} alt="company" id="company-image" {...getAosData("fade-up", 700)} />
          <img src={company2} alt="company" id="company-image" {...getAosData("fade-up", 800)} />
          <img src={company3} alt="company" id="company-image" {...getAosData("fade-up", 900)} />
          <img src={company4} alt="company" id="company-image" {...getAosData("fade-up", 1000)} />
          <img src={company5} alt="company" className="company-image5" id="company-image" {...getAosData("fade-up", 1100)} />
        </div>
      </div>
    </div>
  );
}

export default Company;
