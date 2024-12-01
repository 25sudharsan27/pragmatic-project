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

const Home = ({ hasHomeanimation, hasSeenSplash }) => {
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(hasSeenSplash);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();
  const [isanimation, setAnimation] = useState(hasHomeanimation);

  // Handle splash screen timeout logic
  useEffect(() => {
    if (isSplashScreenVisible) {
      const splashTimeout = setTimeout(() => {
        setSplashScreenVisible(false); // Hide splash screen after 2.5 seconds
        sessionStorage.setItem('Home', 'true'); // Set sessionStorage after splash screen is hidden
      }, 2500); // 2.5-second splash screen duration
      return () => clearTimeout(splashTimeout);
    }
  }, [isSplashScreenVisible]);

  // Handle scrolling to "connect" section after splash screen disappears
  useEffect(() => {
    if (!isSplashScreenVisible && location.state?.scrollToConnect) {
      scroller.scrollTo('connect3', {
        smooth: true,
        duration: 2000,
      });
    }
  }, [isSplashScreenVisible, location.state]);

  // Initialize AOS animations if not already initialized
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Trigger animations only once
      startEvent: 'DOMContentLoaded',
    });
    const isAosInitialized = sessionStorage.getItem('isHomeAosInitialized');
    if (!isAosInitialized) {
      sessionStorage.setItem('isHomeAosInitialized', 'true');
    }
  }, []);

  // If the animation has already been shown, stop it
  useEffect(() => {
    if (hasHomeanimation) {
      sessionStorage.setItem('Home', 'true'); // Mark Home page as visited to prevent animation
    }
  }, [hasHomeanimation]);

  if (isSplashScreenVisible) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <Navbar
        pos="fixed"
        isDropdownVisible={isDropdownVisible}
        toggleDropdownVisibility={() => setDropdownVisible(!isDropdownVisible)}
      />
      <Slider ani={isanimation} />
      <About ani={isanimation} />
      <Value ani={isanimation} />
      <Service ani={isanimation} />
      <WhatMakeUs ani={isanimation} />
      <RoadMap ani={isanimation} />
      <Projects ani={isanimation} />
      <div className="glo">
        <Globe ani={isanimation} />
      </div>
      <Company ani={isanimation} />
      <Blogs ani={isanimation} />
      <Connect ani={isanimation} />
      <Footer ani={isanimation} />
    </div>
  );
};

export default Home;
