// components/SplashScreen.js
import React from 'react';
import 'aos/dist/aos.css';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
       <div className="splash-heading" data-aos="fade-up">Pragmatic Project Consilium </div> 
       <div className="splash-heading2" data-aos="fade-up" data-aos-delay="400">Welcomes You</div>
    </div>
  );
};

export default SplashScreen;
