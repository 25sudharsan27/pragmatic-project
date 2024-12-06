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
import Connect from './Pages/Connect/Connect';

const App = () => {
  const location = useLocation();

  // Set splash state visibility for first-time visits
  const [splash, setSplash] = useState(true);

  // Synchronize animation states from sessionStorage

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scroll(0, 0); // Scroll to the top of the page on route change
  }, [location.pathname]);

  // Function to check and set animation state for a specific route
  const shouldAnimate = (route) => {
    const routeVisited = sessionStorage.getItem(route);
    if (routeVisited === null) {
      // If no animation flag is set for this route, show the animation and set the flag
      sessionStorage.setItem(route, 'true');
      console.log(`First time visit to route: ${route}, animation triggered`);
      return true;
    }
    // If flag exists for this route, animation has already been triggered
    return false;
  };

  // Handle splash screen visibility based on session storage
  useEffect(() => {
    if (sessionStorage.getItem('Home') === 'true') {
      setSplash(false); // If 'Home' route is visited, skip splash screen
    }
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="page"
      >
        <div className="page-wrapper">
          <Routes location={location}>
            <Route
              path="/"
              element={<Home hasHomeanimation={shouldAnimate('Home')} hasSeenSplash={splash} />}
            />
            <Route
              path="/blogs"
              element={<Blogs hasTransition={shouldAnimate('Blogs')} />}
            />
            <Route
              path="/services/:id"
              element={<Services  />}
            />
            <Route
              path="/blogs/:id"
              element={<Blogs hasTransition={shouldAnimate('Blogs')} />}
            />
            <Route
              path="/services"
              element={<Services1 ani={shouldAnimate} />}
            />
            <Route
              path="/connect"
              element={<Connect ani={shouldAnimate} />}
            />
          </Routes>
        </div>
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
