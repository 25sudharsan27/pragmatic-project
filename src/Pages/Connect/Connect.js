import './Connect.css';
import Connect1 from '../../components/Connect/Connect';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Connect = ({ani}) =>{
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isAnimation,setAnimation] = useState(ani('Connect'));
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
        <div className="connection-page4">
            <Navbar
                pos="services"
                isDropdownVisible={isDropdownVisible}
                toggleDropdownVisibility={toggleDropdownVisibility} 
            />
            <div className="connect-connect">
                <Connect1 color={false} ani={isAnimation}/>
            </div>
        </div>
    )
}



export default Connect;