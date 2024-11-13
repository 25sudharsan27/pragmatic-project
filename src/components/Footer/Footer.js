import './Footer.css';
import logo from '../images/logo.png';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';


function Footer() {
  return (
    <div class="footer1">
        <div class="footer">
            
            <div class="footer-box">
                <img src={logo} className="footer-logo" />
                <h1 className="footer-heading">Follow us on</h1>
                <div className="footer-icons">
                    <img  className="footer-icon" src={twitter}  />
                    <img className="footer-icon" src={facebook}  />
                    <img className="footer-icon" src={linkedin} />
                    <img className="footer-icon" src={instagram} />
                </div>
            </div>
            <div class="footer-links">
                <h1 className="footer-heading">Quick Links</h1>
                <a href="/" className="footer-link">Home</a>
                <a href="/blogs" className="footer-link">Blogs</a>
                <a href="#" className="footer-link">FAQ</a>
                <a href="#" className="footer-link">Contact Us</a>

            </div>
        </div>
        
        <h1 className="footer-bottom">Powed By Dcubix</h1>
        
    </div>
  );
}

export default Footer;