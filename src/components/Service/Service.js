import React, { useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';

const services = [
    { label: "Expert Witness / Independent Opinion", icon: icon2 },
    { label: "Project cost & budget control", icon: icon3 },
    { label: "Arbitrary & mediation", icon: icon4 },
    { label: "Contracts Management", icon: icon6 },
    { label: "Quantum Analysis from EOT", icon: icon7 },
    { label: "Prolongation Claims", icon: icon8 },
    { label: "Planning & Project Control", icon: icon1 },
    { label: "Earned Value Management", icon: icon5 },
    { label : "Forensic Delay Analysis" , icon : icon5 },
    { label : "Contract & Schedule Risk Management" , icon: icon2 },
    { label : "Training on Project Control", icon : icon4 },
    { label : "Delay Claims | Disruption Claims", icon : icon3 }
];

const dottedLineStyles = [
    { transform: "translate(-0%, -0%) rotate(0deg)" },
    { marginLeft: "-150px", marginTop: "-60px", transform: "translate(-20%, 30%) rotate(255deg)" },
    { marginLeft: "-170px", marginTop: "-50px", transform: "translate(0%, -0%) rotate(90deg)" },
    { transform: "translate(0%, -65%) rotate(110deg)", marginLeft: "-130px" },
    { transform: "translate(-0%, -90%) rotate(0deg)" },
    { transform: "translate(-0%, -75%) rotate(-110deg)", marginLeft: "130px" },
    { transform: "translate(0%, -50%) rotate(90deg)", marginLeft: "155px" },
    { transform: "translate(-20%, -30%) rotate(-255deg)", marginLeft: "160px" },
    { transform : "translate(0%,-15%) rotate(-70deg)",marginLeft:"140px" },
    { transform : "translate(-0%,-20%) rotate(70deg)",marginLeft:"-200px" },
    { transform: "translate(-0%, -75%) rotate(-120deg)", marginLeft: "130px" },
    { transform: "translate(-0%, -75%) rotate(120deg)" , marginLeft:"-160px" }
];

const App = ({ ani }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (ani) {
            AOS.init({
                duration: 1000,  // Animation duration
                once: true,      // Trigger only once when scrolled into view
                offset: -50,
                startEvent: 'DOMContentLoaded'
            });
        }
    }, [ani]);

    // Helper function to conditionally apply AOS animations
    const getAosData = (animation, delay) => {
        return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
    };

    return (
        <div>
            <div className="container">
                <div {...getAosData("zoom-in", 400)} className="circle-layer extra-large-circle"></div>
                <div {...getAosData("zoom-in", 300)} className="circle-layer large-circle"></div>
                <div {...getAosData("zoom-in", 200)} className="circle-layer medium-circle"></div>
                <div {...getAosData("zoom-in", 100)} className="circle-layer small-circle"></div>
                <div {...getAosData("zoom-in", 0)} className="center-circle">Services we offer</div>
                <div className="outer-circle">
                    {services.map((service, index) => (
                        <div key={index}>
                            <div className={`service-item item-${index + 1}`}>
                                <span
                                    onClick={() => { navigate("/services/" + index); }}
                                    {...getAosData("zoom-in", 900)}
                                    id="label_service"
                                    className="label"
                                >
                                    {service.label}
                                </span>
                                <div
                                    style={dottedLineStyles[index]}
                                    {...getAosData("zoom-in", 800)}
                                    className="dotted-line"
                                ></div>
                            </div>
                            <div className={`service-item item1-${index + 1}`}>
                                <img
                                    {...getAosData("zoom-in", 600)}
                                    src={service.icon}
                                    className="icon"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="service-mob" className="service-section-mobile">
                <div {...getAosData("fade-up", 0)} className="service-section-mobile-heading">Services we offer</div>
                <div className="service-section-mobile-content">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            {...getAosData("zoom-in", 0)}
                            onClick={() => { navigate("/services/" + index); }}
                            className="service-section-mobile-item"
                        >
                            <img src={service.icon} className="service-section-mobile-icon" />
                            <div className="services-line"></div>
                            <div className="service-section-mobile-label">{service.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
