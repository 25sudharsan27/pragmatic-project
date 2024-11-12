import './Connect.css';

import connectimg from '../images/Connect.png';
function App() {
  return (
    
    <div className="connect">
        <div className="connect-image" ></div>

        <div className="connect-box">
            <div className="conn-fix">
            <h1 className="connect-heading">Get In</h1> 
            <h1 className="connect-heading" id="con-heading2">Touch</h1>
            </div>
            <h1 className="connect-content">Have a project in mind? Reach us directly for a personalized experience.</h1>
            <form className="connect-form">
                <div className="connect-form-1">
                    <div className="connect-names">
                        <p1 id="connect-lables">First Name</p1>
                        <input placeholder='First Name' type="text" name="first-name" className="connect-input" />
                    </div>
                    <div className="connect-names">
                        <p1 id="connect-lables">Last Name</p1>
                        <input placeholder="Last Name" type="text" name="last-name" className="connect-input" />
                    </div>
                </div>
                <div className="connect-form-2">
                        <p1 id="connect-lables">Email</p1>
                        <input placeholder="Email" type="text" name="email" className="connect-input" />
                </div>
                <div id="con-msg" className="connect-form-2">
                        <p1 id="connect-lables">Message</p1>
                        <textarea placeholder="Messages" type="text" name="message" className="connect-input" id="connect-message" />
                </div>
                <button type="submit" className="connect-button">Submit</button>


            </form>
        </div>
    </div>
  );
}

export default App;
