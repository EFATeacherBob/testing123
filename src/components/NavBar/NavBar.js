import React from 'react';
import './NavBar.css';
//import '../Logout/Logout.css';
import piePic from '../../assets/pi.png';
// import buttonPic from '../../assets/power-button.jpg';

const NavBar = (props) => {
    return(
        <div>
           <nav>
               <img id="piePic" src={piePic} alt="pie" />
               
           </nav>
        </div>
    )
}

export default NavBar;