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
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(false); // Show splash screen initially
  const [isDropdownVisible, setDropdownVisible] = useState(false); // For dropdown menu
  const location = useLocation();

  // Check if we need to skip splash screen based on route state
  const skipSplashScreen = location.state?.skipSplashScreen;


  // Function to toggle dropdown visibility
  const toggleDropdownVisibility = () => {
    setDropdownVisible(prevState => !prevState);
  };

  // Handle splash screen timeout or skip logic
  useEffect(() => {
    if (!skipSplashScreen) {
      const splashTimeout = setTimeout(() => {
        setSplashScreenVisible(false); // Hide splash screen after 2 seconds
      }, 1500); // 2-second splash screen duration

      return () => clearTimeout(splashTimeout); // Clean up timeout if component is unmounted
    } else {
      setSplashScreenVisible(false); // Skip splash screen immediately
    }
  }, [skipSplashScreen]);

  // Handle scrolling to "connect" section after splash screen disappears
  useEffect(() => {
    if (!isSplashScreenVisible && location.state?.scrollToConnect) {
      scroller.scrollTo('connect3', {
        smooth: true,
        duration: 2000,
      });
    }
  }, [isSplashScreenVisible, location.state]);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set animation duration
      once: true,      // Trigger animations only once
      startEvent: 'DOMContentLoaded',
    });
  }, []);

  // Loading state for content visibility
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false); // Hide loading state after 2.5 seconds
    }, 2500); // 2.5-second loading state duration

    return () => clearTimeout(loadingTimeout); // Clean up timeout if component is unmounted
  }, []);

  // Render the splash screen or main content based on the splash screen visibility and loading state
  if (!skipSplashScreen && ( isSplashScreenVisible || loading) ){
    return <SplashScreen />;
  }

  return (
    <div className="App">
      {/* Navbar with dropdown visibility */}
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
  );
};

export default Home;
