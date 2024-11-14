import './App.css';
import { useState,useEffect } from "react";
import '../../components/Slider.css';
import Navbar from '../../components/Navbar/Navbar';
import { FaLongArrowAltRight } from "react-icons/fa";
// import image from './images/slider.svg';
import arrow from '../../components/images/arrow.svg';
import About from '../../components/About/About';
import Value from '../../components/Value/Value';
import Service from '../../components/Service/Service';
import Projects from '../../components/Projects/Projects';
import Place from '../../components/Place/Place';
import Company from '../../components/Company/Company';
import Blogs from '../../components/Blogs/Blogs';
import Connect from '../../components/Connect/Connect';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles



function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  const slides = [
    "Slide 1 Content",
    "Slide 2 Content",
    "Slide 3 Content",
    "Slide 4 Content",
    "Slide 5 Content",
    "Slide 6 Content",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set the animation duration to 1 second
      once: false,      // Trigger the animation only once when scrolled into view
      startEvent: 'DOMContentLoaded'
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="Slider">
        
        <div data-aos="fade-right"  className="slider-content">
          <p className="slider-content-p">Pragmatic</p>
          <p className="slider-content-p">Project</p>
          <p className="slider-content-p">Consilium</p>
        </div>
        <div data-aos="fade-up" id="sl" className="slider-button-box">
          <button className="slider-button">Get Started </button>
          <img src={arrow} alt="arrow" className="slider-arrow" />
        </div>
        {/* <img src={image} alt="hi" className="slider_image" /> */}
    </div>

      
      <div className="slider-index-b">
        <div className="slider-index-a">

        </div>
        <div className="slider-index">
        
        </div>

      </div>
      <div className="slider-index-c">
      {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
          ></div>
        ))}
      </div>
      
      <About />
      <Value/>
      <Service/>
      <Projects/>
      {/* <Place/> */}
      <Company/>
      <Blogs/>
      <Connect/>
      <Footer/>

    </div>
  );
}

export default App;
