import Navbar from "../../components/Navbar/Navbar"
import { useState } from "react";
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
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () =>{
    const navigate = new useNavigate();


    const services = [
        { label: "Expert Witness / Independent Opinion", icon: icon2 },
        { label: "Project cost & budget control", icon: icon3 },
        { label: "Arbitrary & mediation", icon: icon4 },
        { label: "Contracts Management", icon: icon6 },
        { label: "Quantum Analysis from EOT", icon: icon7},
        { label: "Prolongation Claims", icon: icon8 },
        { label: "Planning & Project Control", icon: icon1 },
        { label: "Earned Value Management", icon: icon5 },
        { label : "Forensic Delay Analysis" , icon : icon5},
        {label : "Contract & Schedule Risk Management" , icon: icon2},
        {label : "Training on Project Control", icon : icon4},
        {label : "Delay Claims | Disruption Claims", icon : icon3}
    ];
    


    const [isDropdownVisible, setDropdownVisible] = useState(false); 
    const toggleDropdownVisibility = () => {
        setDropdownVisible(prevState => !prevState);
      };

      useEffect(() => {
        AOS.init({
          duration: 1000,  // Set the animation duration to 1 second
          once: true,      // Trigger the animation only once when scrolled into view
            offset: -50,
          startEvent: 'DOMContentLoaded'
        });
      }, []);
    

    return (
        <div id="services123-total" className="App">
            <Navbar 
                pos="services"
                isDropdownVisible={isDropdownVisible}
                toggleDropdownVisibility={toggleDropdownVisibility} 
            />

            <div id="services123-section" className="service-section-mobile">
                <div data-aos="fade-up" id="services123-heading" className="service-section-mobile-heading">Services we offer</div>
                    <div id="services123-section-content" className="service-section-mobile-content">
                        {services.map((service, index) => (
                            <div data-aos="zoom-in" onClick={()=>{navigate("/services/"+index)}} id="services123-item" className="service-section-mobile-item">
                                <img id="services123-image" src={service.icon} className="service-section-mobile-icon" />
                                <div id="services123-line" className="services-line"></div>
                                <div id="services123-label" className="service-section-mobile-label">{service.label}</div>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}


export default Services;