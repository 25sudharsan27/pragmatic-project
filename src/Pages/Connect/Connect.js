import './Connect.css';
import Connect1 from '../../components/Connect/Connect';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Connect = ({ani}) =>{
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    // const [isAnimation,setAnimation] = useState(ani('Connect'));
    const toggleDropdownVisibility = () => {
        setDropdownVisible(prevState => !prevState);
    };

    useEffect(()=>{
        AOS.init({
            duration: 1000,
            once: true, // Ensure AOS is only triggered once
            startEvent: 'DOMContentLoaded',
        });
        
    },[ani])


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