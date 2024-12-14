import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
export default function Footer(){


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    return(
        <div className="footer">
<div className="footer_div">

    <div className="footer_about">
        <h2>Romancy</h2>
        <p className="footer_about_p1">Hotel Luxury</p>
        <p> Enjoy our elegantly furnished rooms equipped with the latest amenities,
            diverse restaurants offering the finest international cuisine,
            and comprehensive recreational facilities including a swimming pool, gym, and spa.
            Whether you are visiting us for business or leisure,
            our goal is to make your stay an extraordinary experience.</p>
            <Link to="/About"><span onClick={scrollToTop}><i class="fa-solid fa-arrow-right"></i><span> READ MORE</span></span></Link>
    </div>
    
    <div style={{position:"relative",bottom:"10px"}} className="link">
    <p style={{fontSize:"20px"}}>Useful Links</p>
    <div className="footer_link">
    <div className="footer_link_div1">
    <Link to="/"><div onClick={scrollToTop}>Home</div></Link>
    <Link to="/About"><div onClick={scrollToTop}>About Us</div></Link>
    <Link to="/Contact"><div onClick={scrollToTop}>Contact Us</div></Link>
    <Link to="/Presidential Suites"><div onClick={scrollToTop}>Presidential Suites</div></Link>
    <Link to="/Executive Suites"><div onClick={scrollToTop}>Executive Suites</div></Link>
    <Link to="/Luxury Suites"><div onClick={scrollToTop}>Luxury Suites</div></Link>
    </div>
    <div className="footer_link_div2">
    <Link to="/Team"><div onClick={scrollToTop}>Team</div></Link>
    <Link to="/Experience"><div onClick={scrollToTop}>Experience</div></Link>
    <Link to="/Grid View"><div onClick={scrollToTop}>Grid View</div></Link>
    <Link to="/Offers"><div onClick={scrollToTop}>Offers</div></Link>
    <Link to="/BreakFast"><div onClick={scrollToTop}>BreakFast</div></Link>
    <Link to="/Detail Page"><div onClick={scrollToTop}>Detail Page</div></Link>
    </div>
    </div>
    </div>

    <div style={{position:"relative",left:"150px",top:"30px"}} className="footer_form">
    <p style={{marginBottom:"0",fontSize:"20px"}}>Subscribe To Romancy Hotel</p>   
    <p style={{marginTop:"0",marginBottom:"20px",fontSize:"20px"}}>Updates & Offers</p>
    <form>
        <input type="email" placeholder="  Your Email Address..."/>
        <button type="submit">SUBSCRIBE US</button>
    </form>
    <p>Follow Us</p>
    <ul className="Account_ul">
        <p>________</p>
        <li><i class="fa-brands fa-facebook-f"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-youtube"></i></li>
        <li><i class="fa-brands fa-x-twitter"></i></li>
    </ul>
    <span>www.Romancy Hotel.com</span>
    </div>
    </div>
    <hr/>


<div className="copyright">
<p>Copyright </p>
<p><i class="fa-regular fa-copyright"></i> </p>
<p style={{color:"orange"}}>2024,Romancy Hotel.com,</p>
<p> All Right Reserved.</p>
</div>

        </div>
    );
}