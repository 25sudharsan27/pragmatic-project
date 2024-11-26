import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import "./Services.css";
import icon1 from '../../components/images/icon1.svg';
import icon2 from '../../components/images/icon2.svg';
import icon3 from '../../components/images/icon3.svg';
import icon4 from '../../components/images/icon4.svg';
import icon5 from '../../components/images/icon5.svg';
import icon6 from '../../components/images/icon6.svg';
import icon7 from '../../components/images/icon7.svg';
import icon8 from '../../components/images/icon8.svg';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from "react-router-dom";

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

const Services = () => {

    const location = useLocation();
    const [isAnimation, setAnimation] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdownVisibility = () => {
        setDropdownVisible(prevState => !prevState);
    };

    
    const skipani = location.state?.service;
    const skipanimation = location.state?.skipanimation;

    useEffect(()=>{
        
        if(!skipanimation){
        setAnimation(true);
        }
           
    
    },[skipanimation])

    useEffect(() => {
        const isAosInitialized = sessionStorage.getItem('isServicesAosInitialized');
        
        if (!isAosInitialized) {
            AOS.init({
                duration: 1000,
                once: true,
                startEvent: 'DOMContentLoaded',
            });
            setAnimation(true);
            sessionStorage.setItem('isServicesAosInitialized', 'true');
        } else {
            setAnimation(false);
        }

        return () => {
            // Optional cleanup logic for AOS (if necessary)
        };
    }, []);

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

const ServicesList = ({ isAnimation }) => {
    const navigate = useNavigate();

    const getAosData = (animation, delay) => {
        return isAnimation ? { "data-aos": animation, "data-aos-delay": delay } : {};
    };

    return (
        <div id="services123-section" className="service-section-mobile">
            <div id="services123-heading" className="service-section-mobile-heading">
                Services we offer
            </div>
            <div id="services123-section-content" className="service-section-mobile-content">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        {...getAosData("zoom-in", 0)}
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
    );
};

export default Services;
