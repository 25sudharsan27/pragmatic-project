import './Blogs.css';
import blogimg from '../images/Post1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Blogs({ ani }) {

  var counter = 200;

  // Initialize AOS only if animations are enabled


  // Helper function to conditionally apply AOS attributes
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };


  return (
    
    <>
    <div className="blogs-container">
      <div className="globe-heading-cont" id="project-h-h">
        <h1 className="globe-heading" {...getAosData("fade-up", 0)}>Explore Recent Posts</h1>
        <div className="global-line" {...getAosData("fade-up", 100)} id="project-h"></div>
      </div>

      <div id="normalblog" className="blogs1">
        <iframe 
  src="https://www.juicer.io/api/feeds/pragmaticpc/iframe" 
  frameborder="0" 
  {...getAosData("fade-up", 100)}
  width="100%" 
  height="100%" 
  style={{display: "block", margin: "0 auto", width: "90%", marginBottom: "0", minHeight: "100vh",scrollbarWidth: "0px",scrollbarColor: "transparent transparent" ,overflowY:"scroll",overflowX:"hidden" }}>
</iframe>
      </div>

      <div {...getAosData("fade-left", 100)}  id="mobileblog" className="blogs1">
      {/* <div className="hidecomp"></div> */}

      <iframe 
  src="https://www.juicer.io/api/feeds/pragmaticpc/iframe" 
  frameborder="0" 
  width="100%" 

  className="iframe-blog"
  style={{display: "block", margin: "0 auto", width: "90%",  marginBottom: "0", minHeight: "100vh"}}>
</iframe>
   
      </div>

      <div {...getAosData("fade-up", 100)}  className="blg-btn">
        <a href="https://www.linkedin.com/company/pragmaticpc/posts/" className="blogs-button">View All Blogs</a>
      </div>
    </div>

    </>
  );
}

export default Blogs;
