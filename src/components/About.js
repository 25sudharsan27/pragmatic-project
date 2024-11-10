import './About.css';
// import { a } from 'react-router-dom';
import image1 from './images/about1.png';
import image2 from './images/about2.png';
import image3 from './images/about3.png';


function App() {
  return (
    
    <div className="about-section">
        <div className="about-section-left">
            <h1 className="about-heading">About Us</h1>
            <p className="about-para1">Your strategic partner for healthy and successful projects</p>
            <p className="about-para2">Our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake. From conception to completion, we ensure that every detail is meticulously planned and executed to perfection. </p>
        </div>
        <div className="about-section-right">
            <img id="about1" src={image1} alt="about"  />
            <img id="about2" src={image2} alt="about"  />
            <img  id="about3" src={image3} alt="about"  />
        </div>
    </div>
  );
}

export default App;
