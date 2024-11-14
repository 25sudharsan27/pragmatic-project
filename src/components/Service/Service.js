/* App.js */
import React from 'react';
import './Service.css';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
import icon5 from '../images/icon5.svg';
import icon6 from '../images/icon6.svg';
import icon7 from '../images/icon7.svg';
import icon8 from '../images/icon8.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const services = [
    { label: "Expert Witness / Independent Opinion", icon: icon2 },
    { label: "Project cost & budget control", icon: icon3 },
    { label: "Arbitrary & mediation", icon: icon4 },
    { label: "Contracts Management", icon: icon6 },
    { label: "Quantum Analysis from EOT", icon: icon7},
    { label: "Prolongation Claims", icon: icon8 },
    { label: "Planning & Project Control", icon: icon1 },
    { label: "Arbitrary & mediation", icon: icon5 }
];


const dottedLineStyles = [
    { transform: "translate(-0%, -0%) rotate(0deg)" },
    { marginLeft: "-150px", marginTop: "-10px", transform: "translate(-100%, 0%) rotate(70deg)" },
    { marginLeft: "-170px", marginTop: "-50px", transform: "translate(0%, -0%) rotate(90deg)" },
    { transform: "translate(0%, -90%) rotate(-50deg)", marginLeft: "-130px" },
    { transform: "translate(-0%, -90%) rotate(0deg)" },
    { transform: "translate(-0%, -85%) rotate(-115deg)", marginLeft: "130px" },
    { transform: "translate(0%, -50%) rotate(90deg)", marginLeft: "155px" },
    { transform: "translate(0%, -20%) rotate(-250deg)", marginLeft: "130px" }
  ];

const App = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Set the animation duration to 1 second
          once: false,      // Trigger the animation only once when scrolled into view
          offset:10,
          startEvent: 'DOMContentLoaded'
        });
      }, []);
    return (
        <div>
        <div className="container">
            <div data-aos="zoom-in" data-aos-delay="400" className="circle-layer extra-large-circle"></div>
            <div data-aos="zoom-in" data-aos-delay="300" className="circle-layer large-circle"></div>
            <div data-aos="zoom-in" data-aos-delay="200" className="circle-layer medium-circle"></div>
            <div data-aos="zoom-in" data-aos-delay="100" className="circle-layer small-circle"></div>
            <div data-aos="zoom-in" className="center-circle">Services we offer</div>
            <div className="outer-circle">
                {services.map((service, index) => (
                    <div>
                    <div key={index} className={`service-item item-${index + 1}`}>
                        <span data-aos="zoom-in"  data-aos-delay="900" className="label">{service.label}</span>
                        <div style={dottedLineStyles[index]} data-aos="zoom-in" data-aos-delay="800"  className="dotted-line"></div>

                    </div>
                    <div className={`service-item item1-${index+1}`}>
                        <img data-aos="zoom-in" data-aos-delay="600" src={service.icon} href="i" className="icon" />

                    </div>
                    </div>
                ))}
            </div>
        </div>
        
        </div>
    );
};

export default App;
