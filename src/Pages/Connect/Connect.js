import './Connect.css';
import Connect1 from '../../components/Connect/Connect';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Connect = ({ani}) =>{
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdownVisibility = () => {
        setDropdownVisible(prevState => !prevState);
    };

    useEffect(()=>{
        if(ani){

            AOS.init({
                duration: 1000,
                once: true, // Ensure AOS is only triggered once
                startEvent: 'DOMContentLoaded',
            });
            sessionStorage.setItem('isConnectAosInitialized', 'true');

        }
    },[ani])


    return (
        <div>
            <Navbar 
                pos="services"
                isDropdownVisible={isDropdownVisible}
                toggleDropdownVisibility={toggleDropdownVisibility} 
            />
            <div className="connect-connect">
                <Connect1 color={false} ani={ani}/>
            </div>
        </div>
    )
}



export default Connect;