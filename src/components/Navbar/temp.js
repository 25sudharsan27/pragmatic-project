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
    // Navigate to the home page and pass a state to indicate the scroll should happen
    navigate('/', { state: { scrollToConnect: true } });
  };
  

  // JSX for fixed position navbar
  if (pos === 'fixed') {
    return (
      <div>
        <div className="navbar">
          <div>
            <img
              src={logo}
              onClick={() => navigator('/')}
              alt="logo"
              className="navbar-logo"
            />
          </div>
          <div className="navbar-right">
            <ScrollLink to="App" smooth={true} duration={1000}>
              <a className="navbar-item">Home</a>
            </ScrollLink>
            <a href="#" className="navbar-item">
              Who We are?
            </a>
            <Link to="/services/0" className="navbar-item">
              Services
            </Link>
              <a onClick={handleClick} className="navbar-item">Connect With Us</a>
            <Link to="/blogs" className="navbar-item">
              Blogs
            </Link>
          </div>
          <div className="navbar-dropdown-mobile">
            <a
              ref={buttonRef}
              onClick={handleShow}
              className="navbar-ite"
              id={isDropdownVisible ? null: 'navbar-item-show'}
            >
              {`>`}
            </a>
          </div>
        </div>

        <div
          ref={dropdownRef}
          id={isDropdownVisible ? null: 'navbar-show'} // Controlled visibility
          className="navbar-dropdown1"
        >
          <ScrollLink to="App" smooth={true} duration={1000}>
            <a className="navbar-item2">Home</a>
          </ScrollLink>
          <a href="#" className="navbar-item2">
            Who We are?
          </a>
          <Link to="/services/0" className="navbar-item2">
            Services
          </Link>
            <a onClick={handleClick} className="navbar-item2">Connect With Us</a>
          <Link to="/blogs" className="navbar-item2">
            Blogs
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar1">
        <div className="nav">
          <img
            src={logo}
            onClick={() => navigator('/')}
            alt="logo"
            className="navbar-logo"
          />
          
        </div>
        <div className="navbar-dropdown-mobile">
            <a
              ref={buttonRef}
              onClick={handleShow}
              className="navbar-ite"
              id={isDropdownVisible ? null: 'navbar-item-show'}
            >
              {`>`}
            </a>
          </div>
        <div className="navbar-right">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <a href="#" className="navbar-item">
            Who We are?
          </a>
          <Link to="/services/0" className="navbar-item">
            Services
          </Link>
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
            <a href="/" className="navbar-item2">Home</a>
          <a href="#" className="navbar-item2">
            Who We are?
          </a>
          <Link to="/services/0" className="navbar-item2">
            Services
          </Link>
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
