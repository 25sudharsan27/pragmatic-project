import { useNavigate } from 'react-router-dom';

// Images
import logo from '../images/logo.png';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import whatsapp from '../images/whatsapp.svg';
import youtube from '../images/youtube.svg';

// CSS
import './Footer.css';



// hard coded data
const services = [
  { label: "Expert Witness / Independent Opinion" },
  { label: "Project cost & budget control" },
  { label: "Arbitrary & mediation" },
  { label: "Contracts Management" },
  { label: "Quantum Analysis from EOT" },
  { label: "Earned Value Management" },
  { label: "Delay Claims | Disruption Claims" }
];

const Footer = () => {
  const navigate = useNavigate();

  // Rendered Component
  return (
    <div className="footer1">

      <div className="footer">
        <div className="footer-box1">
          <img alt="link" src={logo} className="footer-logo" />
          <a onClick={() => { navigate("/services"); }}
            className="footer-link" id="footer-explanation" >Our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake. From conception to completion, we ensure that every detail is meticulously planned and executed to perfection.</a>;


        </div>

        <div className="footer-links">
          <h1 className="footer-heading">Quick Links</h1>
          <a href="/" className="footer-link">Home</a>
          <a onClick={() => { navigate("/blogs") }} className="footer-link">Blogs</a>
          <a onClick={() => { navigate("/services") }} className="footer-link">Services</a>
          <a onClick={() => { navigate("/connect") }} className="footer-link">Contact Us</a>
        </div>



        <div id="footer-services-links" className="footer-links">
          <h1 className="footer-heading">Services</h1>
          <div className="footer-links-container">
            {services.map((service, index) => {
              return <a onClick={() => { navigate("/services/" + index); }}
                id="footer-services-link" className="footer-link" key={index}>{service.label}</a>;
            })}
          </div>
          <a onClick={() => { navigate("/services"); }}
            className="footer-link"><b>See more</b></a>
        </div>

        <div id="footer-icon-links" className="footer-links">
          <h1 className="footer-heading">Follow us on</h1>
          <div className="footer-icons">
            <img alt="link" onClick={() => { window.open("https://x.com/Pragmaticpc", "blank") }} className="footer-icon" src={twitter} />
            <img alt="link" onClick={() => { window.open("https://www.linkedin.com/company/pragmaticpc/", "blank") }} className="footer-icon" src={linkedin} />
            <img alt="link" onClick={() => { window.open("https://youtube.com/@pragmaticpc?si=gO2nUA0pSwH4I7zP", "blank") }} className="footer-icon" src={youtube} />
            <img alt="link" onClick={() => { window.open("https://www.facebook.com/profile.php?id=100088823687752", "blank") }} className="footer-icon" src={facebook} />
            <img alt="link" onClick={() => { window.open("https://whatsapp.com/channel/0029Va7AX1CEwEk4jVzMmZ3y", "blank") }} className="footer-icon" src={whatsapp} />
          </div>
        </div>

      

      </div>


      <h1 onClick={() => { window.location.href = 'https://dcubix.com' }} className="footer-bottom">
        Powered By Dcubix
      </h1>
    </div>
  );
}

export default Footer;