// CSS and images
import './RoadMap.css';
import 'aos/dist/aos.css';
import img from '../images/map.svg';


// hard coded data
const roadmap_data = [
    "Identification of Claims",
    "Investigation, Impact Cause & Effect Analyse",
    "Notification & Change order Log",
    "Defence Preparation & Quantification",
    "Dispute Resolution - ADR (Negotiation, Mediation, Arbitration)",
    "Litigation"
];


const RoadMap = ({ ani }) => {
    // Functions
    const getAosData = (animation, delay) => {
        return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
    };

    // Rendered Component
    return (
        <div className="roadmap-container">
            <h1 id="road-map-claims" className="globe-heading" {...getAosData("fade-up", 0)}>
                RoadMap to Claims
            </h1>            
            <div {...getAosData("fade-up", 100)} className="roadmap-icon">
                <img src={img} alt="roadmap" className="roadmap-image" />
            </div>
            <div {...getAosData("fade-down", 0)} className="roadmap-line1"></div>
            
            {roadmap_data.map((data, index) => (
                <div key={index} className="roadmap1">
                    <div {...getAosData("fade-down", 800)} className="roadmap-top-line1">
                        {index === 0 ? null : <div className="roadmap-top-line"></div>}
                    </div>

                    <div className="roadmap">
                        <div className="roadmap-height-norm">
                            <div className="roadmap-top-line1">
                                <h1 {...getAosData("zoom-in", 400)} className="roadmap-content-line2" style={{ visibility: `${(index % 2 === 0) ? 'hidden' : 'visible'}` }}>
                                    {index + 1}
                                </h1>
                                <h1 {...getAosData("zoom-in", 500)} className="roadmap-content" style={{ visibility: `${(index % 2 === 0) ? 'hidden' : 'visible'}` }}>
                                    {data}
                                </h1>
                            </div>
                        </div>

                        <div {...getAosData("fade-left", 300)} className="roadmap-line2" style={{ visibility: `${(index % 2 === 0) ? 'hidden' : 'visible'}` }}></div>
                        <div {...getAosData("fade-down", 200)} className="roadmap-dot"></div>
                        <div {...getAosData("fade-right", 300)} className="roadmap-line3" style={{ visibility: `${(index % 2 !== 0) ? 'hidden' : 'visible'}` }}></div>

                        <div className="roadmap-height-norm">
                            <div className="roadmap-top-line1">
                                <h1 {...getAosData("zoom-in", 400)} className="roadmap-content-line2" style={{ visibility: `${(index % 2 !== 0) ? 'hidden' : 'visible'}` }}>
                                    {index + 1}
                                </h1>
                                <h1 {...getAosData("zoom-in", 500)} className="roadmap-content" style={{ visibility: `${(index % 2 !== 0) ? 'hidden' : 'visible'}` }}>
                                    {data}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RoadMap;
