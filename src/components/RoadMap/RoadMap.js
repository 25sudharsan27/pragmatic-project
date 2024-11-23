import './RoadMap.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import img from '../images/map.svg';


const RoadMap = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Set the animation duration to 1 second
          once: false,      // Trigger the animation only once when scrolled into view
          startEvent: 'DOMContentLoaded'
        });
      }, []);
    const roadmap_data = ["Identification of Claims","Investigation, Impact Cause & Effect Analyse","Notification & Change order Log","Defence Preparation & Quantification","Dispute Resolution - ADR (Negotiation, Mediation, Arbitration)","Litigation"]

    return (
        <div className="roadmap-container">
                <h1  className="globe-heading" data-aos="fade-up">
                    RoadMap to Claims
                </h1>            
                <div data-aos="fade-up" data-aos-delay="100" className="roadmap-icon">
                    <img src={img} alt="roadmap" className="roadmap-image" />
                </div>
                <div data-aos="fade-down"  className="roadmap-line1"> </div>
                {roadmap_data.map((data, index) => (
                    <div className="roadmap1">
                        <div data-aos="fade-down" data-aos-delay="800"  className="roadmap-top-line1">
                        {index === 0 ? null : <div className="roadmap-top-line"></div>}
                        </div>
                    <div className="roadmap">
                        <div classname="roadmap-height-norm">
                            <div  className="roadmap-top-line1">
                                <h1 data-aos="fade-right" data-aos-delay="400" className="roadmap-content-line2" style={{visibility:`${(index%2==0)? 'hidden' : 'visible'}`}}  >{index+1}</h1>
                                <h1 data-aos="fade-down" data-aos-delay="500" className="roadmap-content" style={{visibility:`${(index%2==0)? 'hidden' : 'visible'}`}} >{data}</h1>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay={`${300}`} className="roadmap-line2" style={{visibility:`${(index%2==0)? 'hidden' : 'visible'}`}}  ></div>
                        <div data-aos="fade-down" data-aos-delay={`${200}`} className="roadmap-dot"></div>
                        <div data-aos="fade-right" data-aos-delay={`${300}`} className="roadmap-line3" style={{visibility:`${(index%2!=0)? 'hidden' : 'visible'}`}} ></div>
                        <div classname="roadmap-height-norm">
                            <div className="roadmap-top-line1">
                                <h1 data-aos="fade-left" data-aos-delay="400" className="roadmap-content-line2" style={{visibility:`${(index%2!=0)? 'hidden' : 'visible'}`}}  >{index+1}</h1>
                                <h1 data-aos="fade-down" data-aos-delay="500" className="roadmap-content" style={{visibility:`${(index%2!=0)? 'hidden' : 'visible'}`}} >{data}</h1>
                            </div>
                        </div>

                    </div>
                    </div>
                ))}
        </div>
    )
}

export default RoadMap;