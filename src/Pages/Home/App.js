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

  useEffect(() => {
    if (isSplashScreenVisible) {
      console.log("working" + isSplashScreenVisible);
      const splashTimeout = setTimeout(() => {
        setSplashScreenVisible(false); 
      }, 2500); 
      return () => clearTimeout(splashTimeout);
    }
  }, [isSplashScreenVisible]);

  useEffect(() => {
    if (!isSplashScreenVisible && location.state?.scrollToConnect) {
      scroller.scrollTo('connect3', {
        smooth: true,
        duration: 2000,
      });
    }
  }, [isSplashScreenVisible, location.state]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      startEvent: 'DOMContentLoaded',
    });
    
  }, []);

 

  if (isSplashScreenVisible) {
    return <SplashScreen />;
  }

  return (
    <div id="Home-section" className="App">
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
      
      <Connect color={true} ani={isanimation} />
      <Footer ani={isanimation} />
    </div>
  );
};

export default Home;
