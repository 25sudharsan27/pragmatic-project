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
import Globe from '../../components/Globe/Earth';
import './SplashScreen.css';

import logo from '../../components/images/logo.png';
import WhatMakeUs from '../../components/WhatMakeUs/WhatMakeUs';
import RoadMap from '../../components/RoadMap/RoadMap';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
       <div className="splash-heading" data-aos="fade-up">Pragmatic Project Consilium </div> 
       <div className="splash-heading2" data-aos="fade-up" data-aos-delay="400">Welcomes You</div>
    </div>
  );
};

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
      once: true,      // Trigger the animation only once when scrolled into view
      startEvent: 'DOMContentLoaded'
    });
  }, []);

  const [loading, setLoading] = useState(true);

  // Use useEffect to hide the splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // After 2 seconds, stop loading
    }, 2500);  // 2000 milliseconds = 2 seconds

    // Cleanup function in case the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, []);

  const [isDropdownVisible, setDropdownVisible] = useState(false); // Initially hidden

  const toggleDropdownVisibility = () => {
    setDropdownVisible((prev) => !prev); // Toggle visibility
  };
  return (
    <>
    {loading ? (
      <SplashScreen />  // Show splash screen if loading is true
    ) :(

    <div className="App">
      <Navbar pos="fixed"
        isDropdownVisible={isDropdownVisible}
        toggleDropdownVisibility={toggleDropdownVisibility} />
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
      
      <WhatMakeUs/>
      <RoadMap/>
      
      <Projects/>
      {/* <Place/> */}
      <div className="glo">
        <Globe/>
      </div>
      <Company/>
      <Blogs/>

      <Connect/>
      <Footer/>

    </div>
    )}
    </>
  );

}

export default App;
