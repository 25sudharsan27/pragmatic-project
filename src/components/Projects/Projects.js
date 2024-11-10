import './Projects.css';
import { useState } from "react";
import project1 from '../images/project1.svg';
import project2 from '../images/project2.svg';
import project3 from '../images/project3.svg';
import project4 from '../images/project4.svg';
import project5 from '../images/project5.svg';
import project6 from '../images/project6.svg';
import imgproject from '../images/projecta1.png';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navItems = [
    {name: "All Projects", img: project1 },
    {name: "Oil & Gas", img: project2 },
    {name: "Airport", img: project3 },
    {name: "Railways", img: project4 },
    {name: "Port & Harbours", img: project5 },
    {name: "Construction", img: project6 },
  ];
  

  const projectDetails = [
    {
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:0,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },
    {
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:1,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:2,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:3,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    },{
        date: "2024",
        place:"India",
        index:4,
        name:"EPC works for Civil Buildings for Airport",
        project_value:"USD 237 Million",
        Claims_value:"USD 12.5 Million",
    }
  ]

  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const projectsPerPage = 8; // Number of projects per page


  
  const currentProjects = currentIndex === 0
  ? projectDetails  // If "All Projects" is selected, show all projects
  : projectDetails.filter((project) => project.index === currentIndex-1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjectsPage = currentProjects.slice(indexOfFirstProject, indexOfLastProject);


  // Handle navigation click
  const handleNavClick = (index) => {
    console.log("index", index);

    setCurrentIndex(index);  // Update the current index
    setCurrentPage(1);

    
  };

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

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-para">
        Enter Pragmatic Project Consilium, a team of experts in Projects, Contracts, and Claims management across various construction fields. 
        Our mission is to tackle global challenges, improve project efficiency, and resolve contractual disputes. We also aim to revive non-performing contractor assets, 
        breathing life back into the economy.
      </p>
      
      <div className="projects-nav">
        <div className="projects-nav-item">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(index)}  // Update the index on click
              className={`nav-item ${index === currentIndex ? 'nav-active' : ''}`} // Conditionally add 'nav-active' class
            >
              <img
                src={item.img}
                alt={item.name}
                className="nav-img"
              />
              <a className="nav-text">{item.name}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="projects">
      {currentProjectsPage.map((project, index) => (
        <div key={index} className="project-item">
            <img src={imgproject} alt="project" className="project-img" />
            <div className="project-item1">
                <div id="project-image1">
                    <img
                    src={navItems[project.index+1].img}
                    alt={navItems[project.index+1].name}
                    className="project-image"
                    />  
                    <a className="project-text">{navItems[project.index+1].name}</a>
                </div>
                <h1 className="project-date">{project.date}, {project.place}</h1>
            </div>
            <h1 className="project-name">{project.name}</h1>
            <div className="project-details">
                <h1 className="project-value1">Project Value : </h1>
                <h1 className="project-value">{project.project_value}</h1>
            </div>
            <div className="project-details">
                <h1 className="project-value1">Claims Value : </h1>
                <h1 className="project-value">{project.Claims_value}</h1>
            </div>
            
        </div>
        ))
        }
        </div>
        <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="page-number">Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(currentProjects.length / projectsPerPage)}>
          Next
        </button>
      </div>


    </div>
  );
}

export default App;
