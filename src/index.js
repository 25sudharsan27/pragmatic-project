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

  // Initialize stack to track route history (forward/backward navigation)
  const [routeStack, setRouteStack] = useState(() => {
    const savedStack = sessionStorage.getItem('routeStack');
    return savedStack ? JSON.parse(savedStack) : [];
  });

  // Synchronize animation states from sessionStorage

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scroll(0, 0); // Scroll to the top of the page on route change

    // Update route stack based on forward/backward navigation
    const currentPath = location.pathname;

    // If the stack is empty or the current path is not the last item in the stack, it's a forward navigation
    if (routeStack.length <= 1 || routeStack[routeStack.length - 2] !== currentPath) {
      setTransition(true);
      // Push current path to the stack for forward navigation
      setRouteStack((prevStack) => {
        const newStack = [...prevStack, currentPath];
        sessionStorage.setItem('routeStack', JSON.stringify(newStack)); // Save stack to sessionStorage
        console.log(newStack);
        return newStack;
      });
    }

    // If the current path matches the last path in the stack, it's a backward navigation
    else if (routeStack[routeStack.length - 2] === currentPath) {
      
      setTransition(false);
      console.log('Backward navigation detected');
      setRouteStack((prevStack) => {
        const newStack = prevStack.slice(0, prevStack.length - 1); // Pop the last route
        sessionStorage.setItem('routeStack', JSON.stringify(newStack)); // Save updated stack to sessionStorage
        console.log(newStack);
        return newStack;
      });
    }

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

  const[transition, setTransition] = useState(false);


  if(routeStack.length <= 1 || routeStack[routeStack.length - 2] !== location.pathname){
    console.log("transition is true");
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
              element={<Home hasHomeanimation={shouldAnimate('Home')} hasSeenSplash={splash} />}
            />
            <Route
              path="/blogs"
              element={<Blogs hasTransition={shouldAnimate('Blogs')} />}
            />
            <Route
              path="/services/:id"
              element={<Services />}
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
    }
    else{
      console.log("transition is false");
      return (
       
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
                  element={<Services />}
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
