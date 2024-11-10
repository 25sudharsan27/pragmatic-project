/* App.js */
import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartLine, faGavel, faFileContract, faCalculator, faStopwatch, faProjectDiagram, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
import icon5 from '../images/icon5.svg';
import icon6 from '../images/icon6.svg';
import icon7 from '../images/icon7.svg';
import icon8 from '../images/icon8.svg';

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

const App = () => {
    return (
        <div className="container">
            <div className="circle-layer extra-large-circle"></div>
            <div className="circle-layer large-circle"></div>
            <div className="circle-layer medium-circle"></div>
            <div className="circle-layer small-circle"></div>
            <div className="center-circle">Services we offer</div>
            <div className="outer-circle">
                {services.map((service, index) => (
                    <div>
                    <div key={index} className={`service-item item-${index + 1}`}>
                        <span className="label">{service.label}</span>
                        <div className="dotted-line"></div>

                    </div>
                    <div className={`service-item item1-${index+1}`}>
                        <img src={service.icon} href="i" className="icon" />

                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
