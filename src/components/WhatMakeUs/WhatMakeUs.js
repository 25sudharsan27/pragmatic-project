import { Link as ScrollLink } from 'react-scroll';

// CSS and Animation
import './WhatMakeUs.css';
import 'aos/dist/aos.css';

const RoadMap = ({ ani }) => {

    // Functions
    const getAosData = (animation, delay) => {
        return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
    };

    // Rendered Component
    return (
        <div className="difference-section">
            <div className="globe-heading-cont" id="project-h-h">
                <h1 className="globe-heading" {...getAosData("fade-up", 0)}>
                    What Makes us Different
                </h1>
                <div className="global-line" {...getAosData("fade-up", 0)} id="project-h"></div>
            </div>
            <div id="whatmakeus">
                <p className="projects-para" {...getAosData("fade-up", 200)}>
                    We are committed to creating and sustaining an environment of positive energy where projects embrace hard work, pursue excellence, keep their promises, commit to courage, and develop the world. Our objective is to create a project consulting firm, putting culture first, with great people doing the best claims work for our clients.
                </p>
            </div>

            <div {...getAosData("fade-up", 0)} id="difference-btn" className="blg-btn">
                <ScrollLink to="connect1" smooth={true} duration={1000}>
                    <a className="blogs-button" >Let's Connect</a>
                </ScrollLink>
            </div>
        </div>
    );
}

export default RoadMap;
