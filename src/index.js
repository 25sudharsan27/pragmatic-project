import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Service/Service';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Services1 from './Pages/Services/Services';

// App component
const App = () => {
  const location = useLocation();
  const [homeanim, setHomeAnim] = useState(sessionStorage.getItem('Home') === 'true'); // Initial state from sessionStorage
  const hasanim = sessionStorage.getItem('isServicesAosInitialized') === 'true';

  console.log("Home Animation: " + homeanim);

  // Synchronize homeanim state with sessionStorage whenever it changes
  useEffect(() => {
    const homeState = sessionStorage.getItem('Home');
    if (homeState === 'true') {
      setHomeAnim(true);
    } else {
      setHomeAnim(false);
    }
  }, []); // Run this only once on initial render

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scroll(0, 0); // Scroll to the top of the page on route change
  }, [location.pathname]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500} // Transition duration
        classNames="page" // CSS class for animation
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Home hasHomeanimation={!homeanim} hasSeenSplash={!homeanim} />}
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
