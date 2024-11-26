import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Value from '../../components/Value/Value';
import Service from '../../components/Service/Service';
import Projects from '../../components/Projects/Projects';
import Company from '../../components/Company/Company';
import Blogs from '../../components/Blogs/Blogs';
import Connect from '../../components/Connect/Connect';
import Footer from '../../components/Footer/Footer';
import WhatMakeUs from '../../components/WhatMakeUs/WhatMakeUs';
import RoadMap from '../../components/RoadMap/RoadMap';
import Globe from '../../components/Globe/Earth';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import Slider from '../../components/Slider/Slider';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';
import './App.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isDropdownVisible, setDropdownVisible] = useState(false); 
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true);
  const location = useLocation();
  
  const skipSplashScreen = location.state?.skipSplashScreen; // Check if we need to skip splash screen

  
  // Function to toggle dropdown visibility
  const toggleDropdownVisibility = () => {
    setDropdownVisible(prevState => !prevState);
  };

  // Simulate splash screen disappearance (e.g., 2 seconds)
  useEffect(() => {
    if (!skipSplashScreen) {
      const timer = setTimeout(() => {
        setSplashScreenVisible(false);
      }, 2000); // Splash screen duration (2 seconds)
      return () => clearTimeout(timer);
    } else {
      setSplashScreenVisible(false); // Skip splash screen immediately
    }
  }, [skipSplashScreen]); 

  // Handle scrolling to connect3 section
  useEffect(() => {
    
    if (!isSplashScreenVisible && location.state?.scrollToConnect) {
      scroller.scrollTo('connect3', {
        smooth: true,
        duration: 2000,
      });
    }
  }, [isSplashScreenVisible, location.state]); // Only run when splash screen is hidden or location.state changes

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set the animation duration to 1 second
      once: true,      // Trigger the animation only once when scrolled into view
      startEvent: 'DOMContentLoaded'
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isSplashScreenVisible ? (
        <SplashScreen /> 
      ) : (
        <div className="App">
          <Navbar 
            pos="fixed"
            isDropdownVisible={isDropdownVisible}
            toggleDropdownVisibility={toggleDropdownVisibility} 
          />

          <Slider />
          <About />
          <Value />
          <Service />
          <WhatMakeUs />
          <RoadMap />
          <Projects />
          <div className="glo">
            <Globe />
          </div>
          <Company />
          <Blogs />
          <Connect />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
