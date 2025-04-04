import './Connect.css';
import connectimg from '../images/Connect.png';
import { useEffect } from 'react';
import { useState } from 'react';
function App({color, ani }) {

  // Helper function to conditionally apply AOS attributes
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };
  const windows_screen = window.screen.width;
  useEffect(()=>{
    if(windows_screen <= 780){

    }
  },[windows_screen])

  const [aosData, setAosData] = useState({}); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setAosData({ 'data-aos': 'fade-left', 'data-aos-delay': '200' });
      } else {
        setAosData({ 'data-aos': 'fade-up', 'data-aos-delay': '200' }); 
      }
    };

    handleResize(); // Initial check on window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div id="connect3" style={{ background: color ?  "linear-gradient(to bottom, #0A1D31, #040b13)" : null }} className="connect1">
      <div  className="my-connect1">
      <img src={connectimg} {...getAosData("fade-right", 200)} className="connect-image" />
      
      <iframe 
      aria-label='Get In Touch' 
      {...getAosData(aosData["data-aos"], aosData["data-aos-delay"])}
      className="iframe-connect" 
      frameBorder="0" 
      style={{ width: "100%", border: "none", backgroundColor: 'black' }} 
      src='https://forms.zohopublic.in/sriramarkk1gm1/form/ContactUs/formperma/QtNE-1KO28yW_D236Nvw7Mr_JK9i2sNZ29x8wCLTyGE' 
    />
      </div>
    </div>
  );
}

export default App;
