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
        return newStack;
      });
    }

    // If the current path matches the last path in the stack, it's a backward navigation
    else if (routeStack[routeStack.length - 2] === currentPath) {
      
      setTransition(false);
      setRouteStack((prevStack) => {
        const newStack = prevStack.slice(0, prevStack.length - 1); // Pop the last route
        sessionStorage.setItem('routeStack', JSON.stringify(newStack)); // Save updated stack to sessionStorage
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
      // console.log(`First time visit to route: ${route}, animation triggered`);
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


  // data for blogs 

   const blog = [
          {
              component : <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7277925807447068672" height="568" width="504" frameborder="0" allowfullscreen="" title="Embedded post" className="modified-embed"></iframe>,
              category: 2,
              link : "https://www.linkedin.com/posts/pragmaticpc_activity-7278635788278374401-j_K6?utm_source=share&utm_medium=member_desktop"
          },
          {
              component : <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7280003683654754305" height="601" width="504" frameborder="0" allowfullscreen="" title="Embedded post" className="modified-embed"></iframe>,
              category: 1,
              link : "https://www.linkedin.com/posts/pragmaticpc_activity-7280003684510416897-HmOO?utm_source=share&utm_medium=member_desktop"
          },{
            component : <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7281863303608389632" height="943" width="504" frameborder="0" allowfullscreen="" title="Embedded post" className="modified-embed"></iframe>,
            category : 1,
            link : "https://www.linkedin.com/posts/pragmaticpc_14-contractual-notice-templates-activity-7281912389145374720-RBzg?utm_source=share&utm_medium=member_desktop"
          },
          {
              component : <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7277887454764785665" height="544" width="504" frameborder="0" allowfullscreen="" title="Embedded post" className="modified-embed"></iframe>,
              category: 2,
              link : "https://www.linkedin.com/posts/pragmaticpc_progress-reporting-procedure-activity-7278265865572102145-h62R?utm_source=share&utm_medium=member_desktop"
          },{
              component : <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7280004718502785024" height="544" width="504" frameborder="0" allowfullscreen="" title="Embedded post" className="modified-embed"></iframe>,
              category: 1,
              link : "https://www.linkedin.com/posts/pragmaticpc_everything-you-should-know-about-construction-activity-7280817686069104640-bTN8?utm_source=share&utm_medium=member_desktop"
          },{
              component: <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7279291842725081088" height="1006" width="504" frameborder="0" allowfullscreen="" title="Embedded post" className="modified-embed"></iframe>,
              category: 1,
              link : "https://www.linkedin.com/posts/pragmaticpc_50-qa-on-evm-activity-7280085356337623040-S0Im?utm_source=share&utm_medium=member_desktop"
          },{
              component : <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7279280055090868224" height="565" width="504" frameborder="0" allowfullscreen="" title="Embedded post" className="modified-embed"></iframe>,
              category: 1,
              link : "https://www.linkedin.com/posts/pragmaticpc_contractual-notices-under-fidic-red-book-activity-7279375657845866497-RB1P?utm_source=share&utm_medium=member_desktop"
          }
          // Add more blog data here...
      ];

      

  if(routeStack.length <= 1 || routeStack[routeStack.length - 2] !== location.pathname){
    // console.log("transition is true");
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
              element={<Home hasHomeanimation={shouldAnimate('Home')} hasSeenSplash={splash} blogs={blog.slice(0,2)} />}
            />
            <Route
              path="/blogs"
              element={<Blogs blogs={blog}/>}
            />
            <Route
              path="/blogs/:categoryId/:id"
              element={<Blogs blogs={blog} />}
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
    else{
      return (
       
              <Routes location={location}>
                <Route
                  path="/"
                  element={<Home hasHomeanimation={shouldAnimate('Home')} hasSeenSplash={splash} blogs={blog.slice(0,2)}  />}
                />
                <Route
                  path="/blogs"
                  element={<Blogs blogs={blog} />}
                />
                <Route
                  path="/services/:id"
                  element={<Services />}
                />
                <Route
                  path="/blogs/:categoryId/:id"
                  element={<Blogs blogs={blog} />}
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
