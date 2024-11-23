import './WhatMakeUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
const RoadMap = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Set the animation duration to 1 second
          once: false,      // Trigger the animation only once when scrolled into view
          startEvent: 'DOMContentLoaded'
        });
      }, []);
    return (
        <div className="difference-section">
            <div className="globe-heading-cont" id="project-h-h">
                <h1  className="globe-heading" data-aos="fade-up">
                    What Make us Different
                </h1>
                <div className="global-line" data-aos="fade-up"  id="project-h"></div>        
            </div>
            <p data-aos="fade-up" data-aos-delay="200" className="projects-para">
            We are committed to creating and sustaining an environment of positive energy where projects embrace hard work, pursue excellence, keep their promises, commit to courage, and develop the world .Our objective is to create a project consulting firm, putting culture first, with great people doing the best claims work for our clients.
            </p>

            <div data-aos="fade-up" data-aos-delay="100" id="difference-btn" className="blg-btn">
                <ScrollLink to="connect1" smooth={true} durationo={1000}><a  className="blogs-button">Let's Connect</a></ScrollLink>
            </div>
        </div>
    )
}


export default RoadMap;