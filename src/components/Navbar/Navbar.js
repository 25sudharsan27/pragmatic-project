import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useRef } from 'react';
import logo from '../images/logo.png';
import { scroller } from 'react-scroll';

function Navbar({ pos, isDropdownVisible, toggleDropdownVisibility }) {
  const dropdownRef = useRef(null); // Ref for the dropdown
  const buttonRef = useRef(null); // Ref for the button that triggers the dropdown

  const handleShow = () => {
    toggleDropdownVisibility(); // Toggle dropdown visibility in parent
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If clicked outside dropdown or button, hide the dropdown only if it's visible
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        isDropdownVisible // Only hide if it's visible
      ) {
        toggleDropdownVisibility(); // Hide the dropdown in parent
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible, toggleDropdownVisibility]); // Re-run effect when dropdown visibility changes

  const navigate = useNavigate();
  
  const handleClick = () => {
    // Navigate to the home page and pass a state to indicate the scroll should happen and skip splash screen
    navigate('/connect');
    
  };

  const handleHomeClick = () =>{
    navigate('/',{state : {skipSplashScreen : true}});
  }

  const handleServiceClick = () =>{
    const isAosInitialized = sessionStorage.getItem('isServicesAosInitialized');
    navigate('/services',{state : {service : false, skipanimation : isAosInitialized}});
  }
  const handleService1Click = ()=>{
    navigate('/services',{state : {service:true}});
  }

  // JSX for fixed position navbar
  if (pos === 'fixed') {
    return (
      <div  className="navbar-home">
        <div  className="navbar">
          <div>
          <ScrollLink to="App" smooth={true} duration={1000}>

            <img
              src={logo}
              alt="logo"
              className="navbar-logo"
            />
          </ScrollLink>

          </div>
          <div className="navbar-right">
            <ScrollLink to="App" smooth={true} duration={1000}>
              <a className="navbar-item">Home</a>
            </ScrollLink>
            <a href="#" className="navbar-item">
              Who We are?
            </a>
            <a className="navbar-item" onClick={handleService1Click}>
              Services
            </a>
            <ScrollLink to="connect3" smooth={true} duration={1000}>
              <a className="navbar-item">Connect With Us</a>
            </ScrollLink>            
            <Link to="/blogs" className="navbar-item">
              Blogs
            </Link>
          </div>
          <div className="navbar-dropdown-mobile">
              { !isDropdownVisible ? 
                <a
                  ref={buttonRef}
                  onClick={handleShow}
                  className="navbar-ite"
                >
                  ☰
                </a>
                :
                <a
                  ref={buttonRef}
                  onClick={handleShow}
                  className="navbar-ite"
                  id="navbar-ite1"
                >
                  X
                </a>

              }
          </div>
        </div>
        <div
          ref={dropdownRef}
          id={isDropdownVisible ? null: 'navbar-show'} // Controlled visibility
          className="navbar-dropdown1"
        >
          <ScrollLink to="App" smooth={true} duration={1000}>
            <a  className="navbar-item2">Home</a>
          </ScrollLink>
          <a href="#" className="navbar-item2">
            Who We are?
          </a>
          <a id="navbar4" className="navbar-item2" onClick={handleServiceClick}>
              Services
            </a>
            <ScrollLink to="connect3" smooth={true} duration={1000}>
              <a  className="navbar-item2">Connect With Us</a>
            </ScrollLink> 
          <Link to="/blogs" className="navbar-item2">
            Blogs
          </Link>
        </div>
      </div>
    );
  }
  else if(pos=="services"){
    return (
      <div>
      <div className="navbar">
        <div>
          
          <img
            src={logo}
            onClick={handleHomeClick}
            alt="logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-right">
          <a onClick={handleHomeClick} className="navbar-item">
            Home
          </a>

          <a href="#" className="navbar-item">
            Who We are?
          </a>
          <a className="navbar-item" onClick={handleServiceClick}>
              Services
            </a>
          <a onClick={handleClick} className="navbar-item">
            Connect With Us
          </a>
          <Link to="/blogs" className="navbar-item">
            Blogs
          </Link>
        </div>
        <div className="navbar-dropdown-mobile">
          { !isDropdownVisible ? 
            <a
              ref={buttonRef}
              onClick={handleShow}
              className="navbar-ite"
            >
              ☰
            </a>
            :
            <a
              ref={buttonRef}
              onClick={handleShow}
              className="navbar-ite"
              id='navbar-item-show'
            >
              X
            </a>

          }
          
        </div>
      </div>
      <div
        ref={dropdownRef}
        id={isDropdownVisible ? null: 'navbar-show'} // Controlled visibility
        className="navbar-dropdown1"
      >
          <a onClick={handleHomeClick} className="navbar-item2">Home</a>
        <a href="#" className="navbar-item2">
          Who We are?
        </a>
        <a className="navbar-item2" onClick={handleServiceClick}>
              Services
            </a>
          <a onClick={handleClick} className="navbar-item2">Connect With Us</a>
        <Link to="/blogs" className="navbar-item2">
          Blogs
        </Link>
      </div>
      <div
          ref={dropdownRef}
          id={isDropdownVisible ? null: 'navbar-show'} // Controlled visibility
          className="navbar-dropdown1"
        >
            <a onClick={handleHomeClick} className="navbar-item2">Home</a>
          <a href="#" className="navbar-item2">
            Who We are?
          </a>
          <a className="navbar-item2" onClick={handleServiceClick}>
              Services
            </a>
            <a onClick={handleClick} className="navbar-item2">Connect With Us</a>
          <Link to="/blogs" className="navbar-item2">
            Blogs
          </Link>
        </div>
    </div>

    )
  }
  else {
    return (
      <div className="navbar1">
        <div className="nav">
          <img
            src={logo}
            onClick={handleHomeClick}
            alt="logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-dropdown-mobile">
        { !isDropdownVisible ? 
            <a
              ref={buttonRef}
              onClick={handleShow}
              className="navbar-ite"
            >
              ☰
            </a>
            :
            <a
              ref={buttonRef}
              onClick={handleShow}
              className="navbar-ite"
              id='navbar-item-show'
            >
              X
            </a>

          }
          </div>
        <div className="navbar-right">
          <a onClick={handleHomeClick} className="navbar-item">
            Home
          </a>
          <a href="#" className="navbar-item">
            Who We are?
          </a>
          <a className="navbar-item" onClick={handleServiceClick}>
              Services
            </a>
          <a onClick={handleClick} className="navbar-item">
            Connect With Us
          </a>
          <Link to="/blogs" className="navbar-item">
            Blogs
          </Link>
        </div>
        <div
          ref={dropdownRef}
          id={isDropdownVisible ? null: 'navbar-show'} // Controlled visibility
          className="navbar-dropdown1"
        >
            <a onClick={handleHomeClick} className="navbar-item2">Home</a>
          <a href="#" className="navbar-item2">
            Who We are?
          </a>
          <a className="navbar-item2" onClick={handleServiceClick}>
              Services
            </a>
            <a onClick={handleClick} className="navbar-item2">Connect With Us</a>
          <Link to="/blogs" className="navbar-item2">
            Blogs
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
