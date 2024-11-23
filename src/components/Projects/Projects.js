import './Projects.css';
import { useState, useEffect } from "react";
import project1 from '../images/project1.svg';
import project2 from '../images/project2.svg';
import project3 from '../images/project3.svg';
import project4 from '../images/project4.svg';
import project5 from '../images/project5.svg';
import project6 from '../images/project6.svg';
import project7 from '../images/project7.svg';
import imgproject from '../images/projecta1.png';
import { GiMechanicalArm } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navItems = [
    { name: "All Projects", img: project1 },
    { name: "Oil & Gas", img: project2 },
    { name: "Airport", img: project3 },
    { name: "Railways", img: project4 },
    { name: "Port & Harbours", img: project5 },
    { name: "Construction", img: project6 },
    { name: "Power / Plants", img: project7 },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      startEvent: 'DOMContentLoaded',
    });
  }, []);

  const projectDetails = [
    {
        date: "2023",
        place:"KSA",
        index:0,
        name:"Subcontracting works for Piping and Equipment Insulation",
        project_value:"USD 45 Million",
        Claims_value:"USD 24 Million",
    },{
      date: "2023",
      place:"Kuwait",
      index:0,
      name:"Subcontracting works for Piping and Equipment Insulation",
      project_value:"KD 1 Million (USD 3.5 Million)",
      Claims_value:"480 Cr (USD 60 Million)",
  },{
    date: "2023",
    place:"Kuwait",
    index:0,
    name:"Mechanical and Piping works for Petrochemical Plant in ASSAM",
    project_value:"INR 230 Cr (USD 27 Million)",
    Claims_value:"60 Cr (USD 8 Million)",
    },{
      date: "2019-21",
      place:"U.A.E",
      index:0,
      name:"EPC works for replacement of Gas metering systems",
      project_value:"USD 49 Million",
      Claims_value:"USD 11 Million",
    },{
      date: "2018-19",
      place:"Oman",
      index:0,
      name:"EPCC for Oil Pier Jetty Revamp at Port of Salalah",
      project_value:"OMR 3.5 Million (USD 9.09 Million)",
      Claims_value:"OMR 3 Million (USD 7.8 Million)",
  },{
    date: "2018-19",
    place:"Kuwait",
    index:0,
    name:"HVAC Works EPC of Expansion and revamping of Ahmadi Oil Refinery, Kuwait",
    project_value:"USD 6 Million",
    Claims_value:"USD 3 Million",
},{
  date: "2009-16",
  place:"U.A.E",
  index:0,
  name:"Multiple projects over the period of 2009 to 2016",
  project_value:"USD 270 Million / Year",
  Claims_value:"USD 20-40 Million / Year",
},{
  date: "2005-2007",
  place:"Qatar",
  index:0,
  name:"Administrative building, Panel Room, Control room construction, Ras laffan",
  project_value:"QNR 85 Million (USD 23.35 Million)",
  Claims_value:"QNR 8 Million (USD 2.20 Million)",
},{
  date: "2019",
  place:"U.A.E",
  index:0,
  name:"Gas Pipeline Debottlenecking Project",
  project_value:"USD 15 Million",
  Claims_value:"USD 3 Million",
},{
  date: "2009",
  place:"U.A.E",
  index:0,
  name:"Borouge 2 DCS/ESD & borouge 1 Modification",
  project_value:"AED 400 Million",
  Claims_value:"AED 34 Million",
},{
  date: "2023",
  place:"Kazakhastan",
  index:0,
  name:"Kashagan Utility Area Project",
  project_value:"USD 150 Million",
  Claims_value:"USD 14 Million",
},{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 13.5 Million",
    },{
        date: "2024",
        
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings, ROB, RUB, Bridges and Track",
        project_value:"USD 292 Million",
        Claims_value:"USD 192 Million",
    },{
      date: "2023",
      place:"India",
      index:2,
      name:"EPC works for Civil Buildings, ROB, RUB, Bridges and Track",
      project_value:"USD 264 Million",
      Claims_value:"USD 132 Million",
    },{
      date: "2022",
      place:"India",
      index:2,
      name:"EPC works for Metro Rail",
      project_value:"INR 1680 Cr (USD 210 Million)",
      Claims_value:"480 Cr (USD 60 Million)",
    },{
      date: "2020-21",
      place:"India",
      index:2,
      name:"Construction of elevated viaduct from start to elevated ramp RRTS Regional Rapid Transit System (RRTS) Corridor, Packag-1",
      project_value:"INR 565 Crores (USD 74 Million)",
      Claims_value:"INR 50 Crores (USD 6.43 Million)",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"Subcontract works for Civil Structures in Indian Naval Base",
        project_value:"USD 127 Million",
        Claims_value:"USD 35 Million",
    },{
        date: "2023",
        place:"India",
        index:4,
        name:"EPC works for Civil Residential Buildings 9 Towers ( G+38 each )",
        project_value:"USD 354 Million",
        Claims_value:"USD 125 Million",
    },{
        date: "2000-2001",
        place:"U.A.E",
        index:4,
        name:"Contract 146 A - main & internal road work for Mussafah Industrial area.",
        project_value:"USD 148 Million",
        Claims_value:"USD 12 Million",
    },{
        date: "1998-2000",
        place:"K.S.A",
        index:4,
        name:"E&I works for H652 - Water Treatment & Pumpin stations",
        project_value:"SAR 1.35 Million",
        Claims_value:"SAR 2.25 Million",
    },{
      date: "2007-2008",
      place:"U.A.E",
      index:4,
      name:"World Trade center UAE",
      project_value:"AED 3.65 Billion (USD 990 Million)",
      Claims_value:"Not mentioned",
    },{
      date: "2002-2003",
      place:"U.A.E",
      index:4,
      name:"Abu Dhabi Investment Authority (ADIA) Facade system and curtian walling",
      project_value:"USD 130 Million (NSC Scope)",
      Claims_value:"USD 5.3 Million",
  },{
      date: "1998-2000",
      place:"India",
      index:4,
      name:"Tidle Park, Chennai",
      project_value:"USD 53 Million",
      Claims_value:"USD 6 Million",
    },{
      date: "2021-22",
      place:"U.A.E",
      index:5,
      name:"E&I works for EPC works for potable eater system& Sewage treatment plant",
      project_value:"INR 3.6 Cr (USD 462K)",
      Claims_value:"2.4 Cr (USD 2.6 Million)",
    },{
      date: "2021-22",
      place:"Nepal",
      index:5,
      name:"220KV transmission line and Substration Project, Dana- Kusma",
      project_value:"USD 6.78 Million",
      Claims_value:"USD 2.18 Million",
    },{
      date: "2012-13",
      place:"India",
      index:5,
      name:"EPC of 1200MW (4 x 300MW) Mega Power Project, Raigarh",
      project_value:"USD 400 Million",
      Claims_value:"USD 27 Million",
    },{
      date: "2004-2005",
      place:"U.A.E",
      index:5,
      name:"Water Transmissiono Scheme, Abu Dhabi, UAE",
      project_value:"AED 2.2 Billion",
      Claims_value:"Not Mentioned",
    },{
      date: "2015",
      place:"U.A.E",
      index:5,
      name:"EPC of 54 Nos of 33/11Kv Substations, UAE",
      project_value:"USD 784.14 Million",
      Claims_value:"USD 44 Million",
    },{
      date: "2014",
      place:"Yemen",
      index:5,
      name:"EPC of 132/33 Kv Substrations, UAE",
      project_value:"USD 80 Million",
      Claims_value:"USD 41 Million",
    }
  ]


  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageMobile, setCurrentPageMobile] = useState(0);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(1);

  const projectsPerPage = 8;
  const mobileProjectsPerPage = 1;

  const currentProjects = currentIndex === 0
    ? projectDetails
    : projectDetails.filter(project => project.index === currentIndex - 1);

  const currentMobileProjects = currentIndexMobile === 0
    ? projectDetails
    : projectDetails.filter(project => project.index === currentIndexMobile - 1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjectsPage = currentProjects.slice(indexOfFirstProject, indexOfLastProject);

  const nextPage = () => {
    if (currentPage < Math.ceil(currentProjects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const scrollLeft = () => {
     setCurrentIndexMobile(projectDetails[currentPageMobile-1].index+1);

   
      setCurrentPageMobile(currentPageMobile - 1);
    
  };

  const scrollRight = () => {
    
    setCurrentIndexMobile(projectDetails[currentPageMobile+1].index+1);

    setCurrentPageMobile(currentPageMobile + 1);
    
    
  };

  const handleNavClickMobile = (index) => {

    setCurrentIndexMobile(index);
    
    if(index==1){
      setCurrentPageMobile(0);
    }
    else if(index==2){
      setCurrentPageMobile(11);
    }
    else if(index==3){
      setCurrentPageMobile(12);
    }
    else if(index==4){
      setCurrentPageMobile(16);
    }
    else if(index==5){
      setCurrentPageMobile(17);
    }
    else if(index==6){
      setCurrentPageMobile(23);
    }
  };

  const handleNavClick = (index) => {
    setCurrentIndex(index);
    setCurrentPage(1);
  };

  return (
    <div className="projects-container">
      
      <div className="globe-heading-cont" id="project-h-h">
        <h1  className="globe-heading" data-aos="fade-up">Projects</h1>
        <div className="global-line" data-aos="fade-up"  id="project-h"></div>        
      </div>
      <p data-aos="fade-up" data-aos-delay="200" className="projects-para">
        Enter Pragmatic Project Consilium, a team of experts in Projects, Contracts, and Claims management across various construction fields. 
        Our mission is to tackle global challenges, improve project efficiency, and resolve contractual disputes. We also aim to revive non-performing contractor assets, 
        breathing life back into the economy.
      </p>

      <div data-aos="zoom-in" data-aos-delay="200" id="first1" className="projects-nav">
        <div className="projects-nav-item">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(index)}
              className={`nav-item ${index === currentIndex ? 'nav-active' : ''}`}
            >
              <img src={item.img} alt={item.name} className="nav-img" />
              <a className="nav-text">{item.name}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="projects">
        {currentProjectsPage.map((project, index) => {
          return (
            <div data-aos="fade-left" data-aos-delay={`${index * 100}`} key={index} className="project-item">
              <img src={imgproject} alt="project" className="project-img" />
              <div className="project-item1">
                <div id="project-image1">
                  <img
                    src={navItems[project.index + 1]?.img || ''}
                    alt={navItems[project.index + 1]?.name || ''}
                    className="project-image"
                  />
                  <a className="project-text">{navItems[project.index + 1]?.name || ''}</a>
                </div>
                <h1 className="project-date">{project.date}, {project.place}</h1>
              </div>
              <h1 className="project-name">{project.name}</h1>
              <div className="project-details1">
                <div className="project-details">
                  <h1 className="project-value1">Project Value:</h1>
                  <h1 className="project-value">{project.project_value}</h1>
                </div>
                <div className="project-details">
                  <h1 className="project-value1">Claims Value:</h1>
                  <h1 className="project-value">{project.Claims_value}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span className="page-number">Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(currentProjects.length / projectsPerPage)}>Next</button>
      </div>

      <div data-aos="zoom-in" data-aos-delay="300" id="second" className="projects-nav">
        <div className="projects-nav-item">
          {navItems.slice(1,navItems.length).map((item, index) => (
            <div
              key={index+1}
              onClick={() => handleNavClickMobile(index+1)}
              className={`nav-item ${index+1 === currentIndexMobile ? 'nav-active' : ''}`}
            >
              <img src={item.img} alt={item.name} className="nav-img" />
              <a className="nav-text">{item.name}</a>
            </div>
          ))}
        </div>
      </div>

      <div data-aos="fade-left" data-aos-delay="400" id="for-mobile" className="projects2">
        {[projectDetails[currentPageMobile]].map((project, index) => (
          <div key={index} className="project-item">
            <img src={imgproject} alt="project" className="project-img" />
            <div className="project-item1">
              <div id="project-image1">
                <img
                  src={navItems[project.index + 1]?.img || ''}
                  alt={navItems[project.index + 1]?.name || ''}
                  className="project-image"
                />
                <a className="project-text">{navItems[project.index + 1]?.name || ''}</a>
              </div>
              <h1 className="project-date">{project.date}, {project.place}</h1>
            </div>
            <h1 className="project-name">{project.name}</h1>
            <div className="project-details">
              <h1 className="project-value1">Project Value:</h1>
              <h1 className="project-value">{project.project_value}</h1>
            </div>
            <div className="project-details">
              <h1 className="project-value1">Claims Value:</h1>
              <h1 className="project-value">{project.Claims_value}</h1>
            </div>
          </div>
        ))}
      </div>

      <div id="for-mobile" className="pagination-controls">
        <button onClick={scrollLeft} disabled={currentPageMobile === 0}>Previous</button>
        <span className="page-number">Page {currentPageMobile}</span>
        <button onClick={scrollRight} disabled={currentPageMobile >= projectDetails.length-1}>Next</button>
      </div>
    </div>
  );
}

export default App;
