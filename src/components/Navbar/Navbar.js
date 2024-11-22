import './Navbar.css';
// import { a } from 'react-router-dom';
import logo from '../images/logo.png';

import { Link } from 'react-router-dom';

import { Link as ScrollLink} from 'react-scroll';
function App({pos}) {
  
  if(pos==='fixed'){
  return (
    
    <div className="navbar">
      <div>
        <Link > <img src={logo} alt="logo" className="navbar-logo" /></Link>
      
      </div>
      <div className="navbar-right">
        <ScrollLink to="App" smooth={true} duration={1000} ><a className="navbar-item" >Home</a></ScrollLink>
        <a href="#" className="navbar-item" >Who We are?</a>
        <a href="/services" className="navbar-item" >Services</a>
        <ScrollLink to="connect1" smooth={true} duration={1000} ><a className="navbar-item" >Connect With Us</a></ScrollLink>
        <a href="/blogs" className="navbar-item" >Blogs</a>
      </div>
    </div>
  );
  }
  else{
    return (
    
      <div className="navbar1">
        <div>
        <img src={logo} alt="logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <a href="/" className="navbar-item" >Home</a>
          <a href="/" className="navbar-item" >Who We are?</a>
          <a href="/services" className="navbar-item" >Services</a>
          <a href="/#connect3" className="navbar-item" >Connect With Us</a>
          <a href="/blogs" className="navbar-item" >Blogs</a>
        </div>
      </div>
    );
  }
}

export default App;
