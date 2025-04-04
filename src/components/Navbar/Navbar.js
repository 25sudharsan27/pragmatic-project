import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useRef } from 'react';

// CSS and images
import './Navbar.css';
import logo from '../images/logo.png';


const Navbar = ({ pos, isDropdownVisible, toggleDropdownVisibility }) => {
  // State and Refs
  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  // Functions
  const handleShow = () => {
    toggleDropdownVisibility();
  };
  const handleConnectClick = () => {
    navigate('/connect');
  };
  const handleHomeClick = () => {
    navigate('/');
  }
  const handleWhoWeare = () => {
    navigate('/', { state: { scrollToConnect: true } });
  }
  const handleServiceClick = () => {
    const isAosInitialized = sessionStorage.getItem('isServicesAosInitialized');
    navigate('/services', { state: { service: false, skipanimation: isAosInitialized } });
  }
  const handleService1Click = () => {
    navigate('/services', { state: { service: true } });
  }

  // UseEffects
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isDropdownVisible 
      ) {
        toggleDropdownVisibility(); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible]);

  
  // Visible Component
  if (pos === 'fixed') {
    return (
      <div className="navbar-home">
        <div className="navbar">
          <ScrollLink to="App" smooth={true} duration={1000}>
            <img
              src={logo}
              alt="logo"
              className="navbar-logo"
            />
          </ScrollLink>

          <div className="navbar-right">
            <ScrollLink to="App" smooth={true} duration={1000}>
              <a className="navbar-item">Home</a>
            </ScrollLink>
            <ScrollLink offset={-100} to="about-section" smooth={true} duration={1000}>
              <a className="navbar-item">Who We Are?</a>
            </ScrollLink>
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
            {!isDropdownVisible ?
              <a
                
                onClick={handleShow}
                className="navbar-ite"
              >
                ☰
              </a>
              :
              <a
                
                onClick={handleShow}
                className="navbar-ite"
                id="navbar-ite1"
              >
                X
              </a>

            }
          </div>
        </div>

        <div ref={dropdownRef} className={`navbar-dropdown1 ${isDropdownVisible ? 'show' : ''}`}>
          <ScrollLink to="App" smooth={true} duration={1000}>
            <a className="navbar-item2">Home</a>
          </ScrollLink>
          <ScrollLink offset={-100} to="about-heading2" smooth={true} duration={1000}>
            <a id="glitch" className="navbar-item2">Who We Are?</a>
          </ScrollLink>
          <a className="navbar-item2" onClick={handleServiceClick}>
            Services
          </a>
          <ScrollLink to="connect3" smooth={true} duration={1000}>
            <a className="navbar-item2">Connect With Us</a>
          </ScrollLink>
          <Link to="/blogs" className="navbar-item2">
            Blogs
          </Link>
        </div>

      </div>
    );
  }
  else if (pos === "services") {
    return (
      <div>
        <div className="navbar">
          <img
            src={logo}
            onClick={handleHomeClick}
            alt="logo"
            className="navbar-logo"
          />
          <div className="navbar-right">
            <a onClick={handleHomeClick} className="navbar-item">
              Home
            </a>

            <a onClick={handleWhoWeare} className="navbar-item">
              Who We Are?
            </a>
            <a className="navbar-item" onClick={handleServiceClick}>
              Services
            </a>
            <a onClick={handleConnectClick} className="navbar-item">
              Connect With Us
            </a>
            <Link to="/blogs" className="navbar-item">
              Blogs
            </Link>
          </div>
          <div className="navbar-dropdown-mobile">
            {!isDropdownVisible ?
              <a
                
                onClick={handleShow}
                className="navbar-ite"
              >
                ☰
              </a>
              :
              <a
                
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
          className={`navbar-dropdown1 ${isDropdownVisible ? 'show' : ''}`} // Toggle the 'show' class based on visibility        className="navbar-dropdown1"
        >
          <a onClick={handleHomeClick} className="navbar-item2">Home</a>
          <a onClick={handleWhoWeare} className="navbar-item2">
            Who We Are?
          </a>
          <a className="navbar-item2" onClick={handleServiceClick}>
            Services
          </a>
          <a onClick={handleConnectClick} className="navbar-item2">Connect With Us</a>
          <Link to="/blogs" className="navbar-item2">
            Blogs
          </Link>
        </div>
        <div
          ref={dropdownRef}
          className={`navbar-dropdown1 ${isDropdownVisible ? 'show' : ''}`} // Toggle the 'show' class based on visibility

        >
          <a onClick={handleHomeClick} className="navbar-item2">Home</a>
          <a onClick={handleWhoWeare} className="navbar-item2">
            Who We Are?
          </a>
          <a className="navbar-item2" onClick={handleServiceClick}>
            Services
          </a>
          <a onClick={handleConnectClick} className="navbar-item2">Connect With Us</a>
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
          {!isDropdownVisible ?
            <a
              onClick={handleShow}
              className="navbar-ite"
            >
              ☰
            </a>
            :
            <a
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
          <a onClick={handleWhoWeare} className="navbar-item">
            Who We Are?
          </a>
          <a className="navbar-item" onClick={handleServiceClick}>
            Services
          </a>
          <a onClick={handleConnectClick} className="navbar-item">
            Connect With Us
          </a>
          <Link to="/blogs" className="navbar-item">
            Blogs
          </Link>
        </div>
        <div
          ref={dropdownRef}
          id="blogs-dropdown1"
          className={`navbar-dropdown1 ${isDropdownVisible ? 'show1' : ''}`} // Toggle the 'show' class based on visibility          className="navbar-dropdown1"
        >
          <a onClick={handleHomeClick} className="navbar-item2">Home</a>
          <a href="#" className="navbar-item2">
            Who We Are?
          </a>
          <a className="navbar-item2" onClick={handleServiceClick}>
            Services
          </a>
          <a onClick={handleConnectClick} className="navbar-item2">Connect With Us</a>
          <Link to="/blogs" className="navbar-item2">
            Blogs
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
