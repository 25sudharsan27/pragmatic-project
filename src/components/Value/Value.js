import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Value.css';

import money1 from '../images/money1.svg';
import money2 from '../images/money2.svg';
import money3 from '../images/money3.svg';

function App({ ani }) {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Flag to check if animation has already run

  // Function to animate numbers
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

  useEffect(() => {
    if (ani) {
      // Initialize AOS if animations are enabled
      AOS.init({
        duration: 1000,  // Animation duration
        once: true,      // Trigger only once when scrolled into view
        startEvent: 'DOMContentLoaded',
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Start number increment only once when the element is in view
            incrementCounter(522, setCounter1); // $522M
            incrementCounter(6.1, setCounter2); // $6.1B
            incrementCounter(95.3, setCounter3); // 95.3%

            // Set the flag to prevent further increments
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    const valueSection = document.querySelector('.value');
    if (valueSection) observer.observe(valueSection);

    return () => {
      observer.disconnect();
    };
  }, [ani, hasAnimated]); // Add `hasAnimated` as a dependency to ensure it tracks the flag

  // Helper function to conditionally apply AOS animations
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

export default App;
