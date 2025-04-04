import React, { useState, useEffect } from 'react';


// Images
import money1 from '../images/money1.svg';
import money2 from '../images/money2.svg';
import money3 from '../images/money3.svg';

// CSS and Animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Value.css';


const Value = ({ ani }) => {
  // States
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Flag to check if animation has already run

  // Function
  const incrementCounter = (target, setCounter) => {
    let start = 0;
    let end = target;
    let duration = 5000; // Time in milliseconds to complete the animation
    let range = end - start;
    let incrementTime = 30; // The interval of each increment

    const step = () => {
      start += Math.ceil(range / (duration / incrementTime));
      if (start < end) {
        setCounter(start);
        requestAnimationFrame(step);
      } else {
        setCounter(end);
      }
    };

    step();
  };

  // UseEffects
  useEffect(() => {
    if (ani) {
      AOS.init({
        duration: 1000,  
        once: true,      
        startEvent: 'DOMContentLoaded',
      });
    }

    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            incrementCounter(522, setCounter1); // $522M
            incrementCounter(6.1, setCounter2); // $6.1B
            incrementCounter(95.3, setCounter3); // 95.3%

            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 1, // Trigger when 50% of the element is in view
      }
    );

    const valueSection = document.querySelector('.value');
    if (valueSection){
      observer.observe(valueSection);
    }
    return () => {
      observer.disconnect();
    };
  }, [ani, hasAnimated]); // Add `hasAnimated` as a dependency to ensure it tracks the flag

  // Helper function to conditionally Valuely AOS animations
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };

  return (
    <div className="value1">
      <div className="value" {...getAosData("fade-up", 0)}>
        <div className="value-item" {...getAosData("fade-left", 400)}>
          <img src={money1} alt="money" className="value-icon" />
          <div className="value3">
            <h1 className="value-heading">{ani ? `${counter1.toLocaleString()}M` : "$522M"}</h1>
            <p className="value-para">Claims Received</p>
          </div>
        </div>

        <div className="value-line" {...getAosData("fade-left", 300)}></div>

        <div className="value-item" {...getAosData("fade-up", 200)}>
          <img src={money2} alt="money" className="value-icon" />
          <div className="value3">
            <h1 className="value-heading">{ani ? `${counter2.toLocaleString()}B` : "6.1B"}</h1>
            <p className="value-para">Worth Projects</p>
          </div>
        </div>

        <div className="value-line" {...getAosData("fade-right", 300)}></div>

        <div className="value-item" {...getAosData("fade-right", 400)}>
          <img src={money3} alt="money" className="value-icon" />
          <div className="value3">
            <h1 className="value-heading">{ani ? `${counter3}%` : "95.3%"}</h1>
            <p className="value-para">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
