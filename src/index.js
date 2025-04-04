import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Service/Service';
import Services1 from './Pages/Services/Services';
import Connect from './Pages/Connect/Connect';

// Animation and CSS
import './index.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const App = () => {
  // State variables
  const location = useLocation();
  // Initialize stack to track route history (forward/backward navigation)
  const [routeStack, setRouteStack] = useState(() => {
    const savedStack = sessionStorage.getItem('routeStack');
    return savedStack ? JSON.parse(savedStack) : [];
  });

  // Functions 

  // Animate or not
  const shouldAnimate = (route) => {
    const routeVisited = sessionStorage.getItem(route);
    if (routeVisited === null) {
      sessionStorage.setItem(route, 'true');
      return true;
    }
    return false;
  };


  // UseEffects

  useEffect(() => {
    window.scroll(0, 0);
    const currentPath = location.pathname;
    // forward navigation
    if (routeStack.length <= 1 || routeStack[routeStack.length - 2] !== currentPath) {
      setRouteStack((prevStack) => {
        const newStack = [...prevStack, currentPath]; // Push
        sessionStorage.setItem('routeStack', JSON.stringify(newStack));
        return newStack;
      });
    }
    // backward navigation
    else if (routeStack[routeStack.length - 2] === currentPath) {
      setRouteStack((prevStack) => {
        const newStack = prevStack.slice(0, prevStack.length - 1); // Pop
        sessionStorage.setItem('routeStack', JSON.stringify(newStack)); 
        return newStack;
      });
    }
  }, [location.pathname]);

  

  // Displaying Component
  
  if (routeStack.length <= 1 || routeStack[routeStack.length - 2] !== location.pathname) {
    return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames="page"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <div className="page-wrapper">
            <Routes location={location}>
              <Route
                path="/"
                element={<Home hasHomeanimation={shouldAnimate('Home')} />}
              />
              <Route
                path="/blogs"
                element={<Blogs />}
              />
              <Route
                path="/blogs/:categoryId/:id"
                element={<Blogs />}
              />
              <Route
                path="/services/:id"
                element={<Services />}
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
  }
  else {
    return (

      <Routes location={location}>
        <Route
          path="/"
          element={<Home hasHomeanimation={shouldAnimate('Home')} />}
        />
        <Route
          path="/blogs"
          element={<Blogs/>}
        />
        <Route
          path="/services/:id"
          element={<Services />}
        />
        <Route
          path="/blogs/:categoryId/:id"
          element={<Blogs />}
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

    );
  }

}



// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// For performance tracking
reportWebVitals();
