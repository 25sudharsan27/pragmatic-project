import './Connect.css';

import connectimg from '../images/Connect.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            startEvent: 'DOMContentLoaded'
        });
    }, []);
  return (
    <div className="connect1">
    <div className="connect">
        <div data-aos="fade-up" className="connect-image" ></div>

        <div className="connect-box">
            <div className="conn-fix">
            <h1 data-aos="fade-up" data-aos-delay="100" className="connect-heading">Get In</h1> 
            <h1 data-aos="fade-up" data-aos-delay="100" className="connect-heading" id="con-heading2">Touch</h1>
            </div>
            <h1 data-aos="fade-left" data-aos-delay="300" className="connect-content">Have a project in mind? Reach us directly for a personalized experience.</h1>
            <form className="connect-form">
                <div className="connect-form-1">
                    <div className="connect-names" >
                        <p1 data-aos="fade-up" data-aos-delay="500"  id="connect-lables">First Name</p1>
                        <input data-aos="fade-up" data-aos-delay="100" placeholder='First Name' type="text" name="first-name" className="connect-input" />
                    </div>
                    <div className="connect-names">
                        <p1 data-aos="fade-up" data-aos-delay="500" id="connect-lables">Last Name</p1>
                        <input data-aos="fade-up" data-aos-delay="100" placeholder="Last Name" type="text" name="last-name" className="connect-input" />
                    </div>
                </div>
                <div id="mobcon" className="connect-form-2">
                        <p1 data-aos="fade-up" data-aos-delay="500" id="connect-lables">First Name</p1>
                        <input data-aos="fade-up" data-aos-delay="100" placeholder="First Name" type="text" name="first-name" className="connect-input" />
                </div>
                <div id="mobcon" className="connect-form-2">
                        <p1 data-aos="fade-up" data-aos-delay="500" id="connect-lables">Last Name</p1>
                        <input data-aos="fade-up" data-aos-delay="100" placeholder="Last Name" type="text" name="last-name" className="connect-input" />
                </div>
                <div className="connect-form-2">
                        <p1 data-aos="fade-up" data-aos-delay="500" id="connect-lables">Email</p1>
                        <input data-aos="fade-up" data-aos-delay="100" placeholder="Email" type="text" name="email" className="connect-input" />
                </div>
                <div id="con-msg" className="connect-form-2">
                        <p1 data-aos="fade-up" data-aos-delay="500" id="connect-lables">Message</p1>
                        <textarea data-aos="fade-up" data-aos-delay="100" placeholder="Messages" type="text" name="message" className="connect-input" id="connect-message" />
                </div>
                <button data-aos="fade-up" data-aos-delay="500" type="submit" className="connect-button">Submit</button>


            </form>
        </div>
    </div>
    </div>
  );
}

export default App;
