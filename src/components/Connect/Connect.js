import './Connect.css';
import connectimg from '../images/Connect.png';
import { useEffect } from 'react';

function App({color, ani }) {

  // Helper function to conditionally apply AOS attributes
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };

  return (
    <div id="connect3" style={{ background: color ?  "linear-gradient(to bottom, #0A1D31, #040b13)" : null }} className="connect1">
      <div className="connect">
        <div {...getAosData("fade-up", 0)} className="connect-image"></div>

        <div className="connect-box">
          <div className="conn-fix">
            <h1 {...getAosData("fade-up", 100)} className="connect-heading">Get In</h1>
            <h1 {...getAosData("fade-up", 100)} className="connect-heading" id="con-heading2">Touch</h1>
          </div>
          <h1 {...getAosData("fade-left", 300)} className="connect-content">
            Have a project in mind? Reach us directly for a personalized experience.
          </h1>
          <form className="connect-form">
            <div className="connect-form-1">
              <div className="connect-names">
                <p1 {...getAosData("fade-up", 500)} id="connect-lables">First Name</p1>
                <input {...getAosData("fade-up", 100)} placeholder='First Name' type="text" name="first-name" className="connect-input" />
              </div>
              <div className="connect-names">
                <p1 {...getAosData("fade-up", 500)} id="connect-lables">Last Name</p1>
                <input {...getAosData("fade-up", 100)} placeholder="Last Name" type="text" name="last-name" className="connect-input" />
              </div>
            </div>
            <div id="mobcon" className="connect-form-2">
              <p1 {...getAosData("fade-up", 500)} id="connect-lables">First Name</p1>
              <input {...getAosData("fade-up", 100)} placeholder="First Name" type="text" name="first-name" className="connect-input" />
            </div>
            <div id="mobcon" className="connect-form-2">
              <p1 {...getAosData("fade-up", 500)} id="connect-lables">Last Name</p1>
              <input {...getAosData("fade-up", 100)} placeholder="Last Name" type="text" name="last-name" className="connect-input" />
            </div>
            <div className="connect-form-2">
              <p1 {...getAosData("fade-up", 500)} id="connect-lables">Email</p1>
              <input {...getAosData("fade-up", 100)} placeholder="Email" type="text" name="email" className="connect-input" />
            </div>
            <div id="con-msg" className="connect-form-2">
              <p1 {...getAosData("fade-up", 500)} id="connect-lables">Message</p1>
              <textarea {...getAosData("fade-up", 100)} placeholder="Messages" type="text" name="message" className="connect-input" id="connect-message" />
            </div>
            <button {...getAosData("fade-up", 500)} type="submit" id="connect-button2" className="connect-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
