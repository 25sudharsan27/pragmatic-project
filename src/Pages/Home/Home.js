import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Components
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

// Animation and CSS
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';
import './Home.css';
import { scroller } from 'react-scroll';


const Home = ({ hasHomeanimation }) => {
  // State variables
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(hasHomeanimation);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();
  const [isanimation, setAnimation] = useState(hasHomeanimation);


  // Functions 

  const preloadImages = () => {
    const images = [
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220109/qmqmuus0bg3o71gfiscv.webp',
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220101/xfx6fo0o9zx5qafr1hgy.webp',
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220108/tnwnijmlx49i8qxxz9km.webp',
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220106/ty6kkxwmc4srubwjlbpe.webp',
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997364/fd8n35upbdnevfeomcyt.webp', 
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735998199/ftk20luzfbqi4ppz7auy.webp', 
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997179/kb75rjld2eubnawiynrk.webp', 
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997170/kmfjuptm1ot2dnqilohx.webp', 
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997170/cyp9bzrzw5t0tnrkzdgw.webp', 
      'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737048419/tkyafbathvsmwllfbfyc.webp',
    ]
    images.forEach((location) => {
      const img = new Image();
      console.log(location);
      img.src = location;
      img.onerror = () => {
        console.log(`Failed to load image: ${location.name}`);
      };
    });
  };


  // UseEffects


  // splash animation
  useEffect(() => {
    if (isSplashScreenVisible) {
      const splashTimeout = setTimeout(() => {
        setSplashScreenVisible(false);
      }, 2500);
      return () => clearTimeout(splashTimeout);
    }
  }, [isSplashScreenVisible]);

  // scroll to section
  useEffect(() => {
    if (location.state?.scrollToConnect) {
      scroller.scrollTo('about-section', {
        smooth: true,
        offset: -100,
        duration: 2000,
      });
      location.state.scrollToConnect = undefined;
    }
  }, [isSplashScreenVisible, location.state]);

  // Initialize AOS only if animations are enabled
  useEffect(() => {
    if (isanimation) {
      AOS.init({
        duration: 1000,
        once: true,
        startEvent: 'DOMContentLoaded',
      });
    }
  }, []);



  // Rendered Component

  if (isSplashScreenVisible) {
    // Preload images in the time of splash screen
    preloadImages();
    return (
      <SplashScreen />
    );
  }

  return (
    <>

      <Helmet>
        <title>Pragmatic Project Consilium</title>
        <meta property="og:title" content="Pragmatic Project Consilium" />
        <meta property="og:description" content="Our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake. From conception to completion, we ensure that every detail is meticulously planned and executed to perfection." />
        <meta property="og:image" content="../../components/images/logo.png" />
        <meta property="og:url" content="https://pragmaticpc.com" />
      </Helmet>

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
    </>
  );
};

export default Home;
