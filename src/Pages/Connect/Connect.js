import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';

// Components
import Connect1 from '../../components/Connect/Connect';
import Navbar from '../../components/Navbar/Navbar';

// CSS and Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Connect.css';


const Connect = ({ani}) =>{
    // State
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Functions
    const toggleDropdownVisibility = () => {
        setDropdownVisible(prevState => !prevState);
    };

    // UseEffects
    useEffect(()=>{
        AOS.init({
            duration: 1000,
            once: true, // Ensure AOS is only triggered once
            startEvent: 'DOMContentLoaded',
        });
        
    },[])

    // Rendered Component
    return (
        <>
            <Helmet>
            <title>Connect With Us</title>
            <meta property="og:title" content="Connect With Us" />
                <meta property="og:description" content={`Connect with Pragmatic PC`} />
                <meta property="og:url" content={`https://pragmaticpc.com/connect`} />   
            </Helmet>
            <div className="connection-page4">
                <Navbar
                    pos="services"
                    isDropdownVisible={isDropdownVisible}
                    toggleDropdownVisibility={toggleDropdownVisibility} 
                />
                <div className="connect-connect">
                    <Connect1 color={false} />
                </div>
            </div>
        </>
    )
}



export default Connect;