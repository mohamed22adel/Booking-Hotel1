import React, { useState } from 'react';
import {Link} from "react-router-dom";

export default function Navbar(){
    
const [visible, setVisible] = useState(false);
const handle = () => {
    setVisible (!visible);
} 

    return(
<div className="navbar">
    <div className="hotel_name">
        <h2 style={{color:"#f2c335"}}>Romancy</h2>
        <p>Hotel Luxury</p>
    </div>

    <ul className='nav_first_ul'>
        <Link to="/"><li>HOME</li></Link>
        

<li>

<div className="menu">
    <div className="item">

            <span> ROOMS <i style={{color:"white"}} class="fa-solid fa-angle-down"></i></span>

        <div className="submenu">
            <div className="submenu-item">
                <Link to="/Presidential Suites" className="submenu-link"> Presidential </Link>
            </div>
            <div className="submenu-item">
                <Link to="/Executive Suites" className="submenu-link"> Executive </Link>
            </div>
            <div className="submenu-item">
                <Link to="/Luxury Suites" className="submenu-link"> Luxury </Link>
            </div>
        </div>
    </div>
</div>

</li>


        <Link to="/About"><li>ABOUT</li></Link>
        <Link to="/Contact"><li>CONTACT</li></Link>
    </ul>


    <div className="hotel_links">
    <Link to="/login"><p>LogIn</p></Link>
<p>|</p>
    <Link to="/register"><p>Register</p></Link>
    <Link to="/book now"><button>Book Now</button></Link>
    </div>

    <i onClick={handle} class="fa-solid fa-bars"></i>
</div>

    );
}


