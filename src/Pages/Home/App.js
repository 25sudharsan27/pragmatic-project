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
import { px } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Home = ({ hasHomeanimation, hasSeenSplash, blogs }) => {
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(hasSeenSplash);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();
  const [isanimation, setAnimation] = useState(hasHomeanimation);

  useEffect(() => {
    if (isSplashScreenVisible) {
      const splashTimeout = setTimeout(() => {
        setSplashScreenVisible(false);
      }, 2500);
      return () => clearTimeout(splashTimeout);
    }
  }, [isSplashScreenVisible]);


  useEffect(() => {
    if (location.state?.scrollToConnect) {
      const offset = 100; // Adjust this value to match your header height or desired offset

      scroller.scrollTo('about-section', {
        smooth: true,
        offset: -offset, // Account for fixed elements (adjust the offset as needed)
        duration: 2000,
      });
      location.state.scrollToConnect = undefined;
    }
  }, [isSplashScreenVisible, location.state]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      startEvent: 'DOMContentLoaded',
    });

    const locations = [
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984485/uu64gdgfwsocoolk3brr.webp', name: "U.A.E", longitude: 152.3, latitude: 78.82, project: 10, value: "AED 2.318 Billion", value1: "$ 631.65 M" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984484/mgtbc5tw5k8m64cc9rxs.webp', name: "India", longitude: 141.59, latitude: 76.0, project: 12, value: "INR 1640.43 Crores", value1: "$ 210.15 M" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984486/k0ftaourte12ucqnsn2s.webp', name: "Kuwait", longitude: 156.2, latitude: 73.0, project: 3, value: "KD 18 Million", value1: "$ 59.4 M" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984487/njp7f32a16c6gif6fnbh.webp', name: "Yemen", longitude: 156.2, latitude: 87.0, project: 1, value: "USD 41 Million", value1: "$ 41 M" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984490/avtmlo2six2fcd9arogi.webp', name: "KSA", longitude: 157.85, latitude: 78.82, project: 2, value: "SAR 90 Million", value1: "$ 24 Million" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984485/dlzembdww41euow7szx7.webp', name: "Kazakhastan", longitude: 144.59, latitude: 52.0, project: 1, value: "USD 14 Million", value1: " $14 M" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984485/tfhchhrhieqeqdjpbehz.webp', name: "Oman", longitude: 151.6, latitude: 78.82, project: 1, value: "OMR 3 Million", value1: "$ 7.8 M" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984485/vudnryx1zmbhdmtgbomb.webp', name: "Qatar", longitude: 154.3, latitude: 77.4, project: 1, value: "QNR 8 Million", value1: "$ 2.2 M" },
      { image: 'https://res.cloudinary.com/duyuxtpau/image/upload/v1735984486/l8f26gopdpulixxd7so1.webp', name: "Nepal", longitude: 136.9, latitude: 75.5, project: 1, value: "USD 2.18 Million", value1: "$ 2.18 M" }
    ];


    const preloadImages = () => {
      let loadedCount = 0;
      const images = [
         'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220109/qmqmuus0bg3o71gfiscv.webp',
 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220101/xfx6fo0o9zx5qafr1hgy.webp',
  'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220108/tnwnijmlx49i8qxxz9km.webp',
  'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737220106/ty6kkxwmc4srubwjlbpe.webp',
        'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997364/fd8n35upbdnevfeomcyt.webp', 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735998199/ftk20luzfbqi4ppz7auy.webp', 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997179/kb75rjld2eubnawiynrk.webp', 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997170/kmfjuptm1ot2dnqilohx.webp', 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997170/cyp9bzrzw5t0tnrkzdgw.webp','https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737048419/tkyafbathvsmwllfbfyc.webp',
]
      images.forEach((location) => {
        const img = new Image();
        console.log(location);
        img.src = location;

        img.onload = () => {
          // console.log(`Image loaded: ${location.name}`);
          loadedCount++;
          if (loadedCount === location.length) {
            // console.log('All images are loaded and cached.');
          }
        };

        img.onerror = () => {
          console.log(`Failed to load image: ${location.name}`);
        };
      });

      // Add image to array
    };
    // Trigger preload on initial mount (React lifecycle)
    preloadImages();

  }, []);

  if (isSplashScreenVisible) {
    return (
    <SplashScreen />);
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
        <Blogs ani={isanimation} blogs={blogs} />
        <Connect color={true} ani={isanimation} />
        <Footer ani={isanimation} />
      </div>
    </>
  );
};

export default Home;
