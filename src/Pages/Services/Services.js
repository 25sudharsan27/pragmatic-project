import { useState } from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../../components/Navbar/Navbar";

// Images
import icon1 from '../../components/images/icon1.svg';
import icon2 from '../../components/images/icon2.svg';
import icon3 from '../../components/images/icon3.svg';
import icon4 from '../../components/images/icon4.svg';
import icon5 from '../../components/images/icon5.svg';
import icon6 from '../../components/images/icon6.svg';
import icon7 from '../../components/images/icon7.svg';
import icon8 from '../../components/images/icon8.svg';
import { useNavigate } from 'react-router-dom';

// CSS and Animation
import 'aos/dist/aos.css';
import "./Services.css";

// Hard coded data
const services = [
    { label: "Expert Witness / Independent Opinion", icon: icon2 },
    { label: "Project cost & budget control", icon: icon3 },
    { label: "Arbitrary & mediation", icon: icon4 },
    { label: "Contracts Management", icon: icon6 },
    { label: "Quantum Analysis from EOT", icon: icon7 },
    { label: "Prolongation Claims", icon: icon8 },
    { label: "Planning & Project Control", icon: icon1 },
    { label: "Earned Value Management", icon: icon5 },
    { label: "Forensic Delay Analysis", icon: icon5 },
    { label: "Contract & Schedule Risk Management", icon: icon2 },
    { label: "Training on Project Control", icon: icon4 },
    { label: "Delay Claims | Disruption Claims", icon: icon3 }
];


// Exporting Component
const Services = ({ani }) => {
    // State variables
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isAnimation, setAnimation] = useState(ani('Services'));

    // Functions
    const toggleDropdownVisibility = () => {
        setDropdownVisible(prevState => !prevState);
    };


    // Rendered Component
    return (
        <div id="services123-total" className="App">
            <Navbar 
                pos="services"
                isDropdownVisible={isDropdownVisible}
                toggleDropdownVisibility={toggleDropdownVisibility} 
            />
            <ServicesList isAnimation={isAnimation} />
        </div>
    );
};


// ServicesList Component
const ServicesList = ({ isAnimation }) => {
    // State variables
    const navigate = useNavigate();

    // Functions
    const getAosData = (animation, delay) => {
        return isAnimation ? { "data-aos": animation, "data-aos-delay": delay } : {};
    };

    // Rendered Component
    return (
        <>
            <Helmet>
                <title>Our Services</title>
                <meta property="og:title" content={"Our Services"} />
                <meta property="og:description" content="Our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake. From conception to completion, we ensure that every detail is meticulously planned and executed to perfection." />
                <meta property="og:url" content="https://pragmaticpc.com/services" />
            </Helmet>
            <div id="services123-section" className="App">
                <div id="service-section-mobile-head"  className="service-section-mobile-heading">
                    Services we offer
                </div>
                <div id="services123-section-content" className="service-section-mobile-content">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            {...getAosData("zoom-in", 0)} // Apply AOS animation if isAnimation is true
                            onClick={() => navigate(`/services/${index}`)} 
                            id="services123-item" 
                            className="service-section-mobile-item"
                        >
                            <img 
                                id="services123-image" 
                                src={service.icon} 
                                className="service-section-mobile-icon" 
                                alt={service.label}
                            />
                            <div id="services123-line" className="services-line"></div>
                            <div id="services123-label" className="service-section-mobile-label">
                                {service.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    
    );
};

export default Services;
