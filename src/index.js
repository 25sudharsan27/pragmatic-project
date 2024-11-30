import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Service/Service';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Services1 from './Pages/Services/Services';

// Component to manage splash screen visibility based on localStorage
const App = () => {
  const location = useLocation(); // To access the location of the route for transition

  const hasSeenSplash = sessionStorage.getItem('hasSeenSplash') === 'true'; // Check if splash screen has been seen

  const hasanim = sessionStorage.getItem('isServicesAosInitialized') === 'true'

  console.log("has anima : "+hasanim);
  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scroll(0, 0); // Scrolls to the top of the page
  }, [location]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key} // Ensure transition happens for each location change
        timeout={500} // Set the duration of the transition (in ms)
        classNames="page" // Class name to apply animation
      >
       
          <Routes location={location}>
            <Route 
              path="/" 
              element={<Home hasSeenSplash={hasSeenSplash} />} // Pass down hasSeenSplash as prop
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services/:id" element={<Services />} />
            <Route path="/blogs/:id" element={<Blogs />} />
            <Route path="/services" element={<Services1 ani={!hasanim} />} />
          </Routes>
      
      </CSSTransition>
    </TransitionGroup>
  );
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// For performance tracking
reportWebVitals();