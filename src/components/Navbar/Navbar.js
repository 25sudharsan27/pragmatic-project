import './Navbar.css';
// import { a } from 'react-router-dom';
import logo from '../images/logo.png';


function App({pos}) {
  
  if(pos==='fixed'){
  return (
    
    <div className="navbar">
      <div>
      <img src={logo} alt="logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <a href="/" className="navbar-item" >Home</a>
        <a href="#" className="navbar-item" >Who We are?</a>
        <a href="#" className="navbar-item" >Connect With Us</a>
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
          <a href="#" className="navbar-item" >Who We are?</a>
          <a href="#" className="navbar-item" >Connect With Us</a>
          <a href="/blogs" className="navbar-item" >Blogs</a>
        </div>
      </div>
    );
  }
}

export default App;
