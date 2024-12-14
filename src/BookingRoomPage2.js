import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
export default function BookingRoomPage2(){

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);


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
        <div className="book_room_container">
            <Navbar/>
<h5 className="h5_1">DISCOVER OUR EXECUTIVE SUITES</h5>

<img className="room_background" src={require("./Images/room_background.jpg")} alt="i"/>

<form className="get_room" >
<label className="get_room_label1">Check in</label>
    <input type="date" className="input_in"/>
<label className="get_room_label2">Check out</label>
    <input type="date" className="input_out"/>
    <label className="get_room_label3" >Guests</label>
<div className="get_room_count1">
<div onClick={() => count1 > 1 && setCount1(count1 - 1)} disabled={count1 <= 1}><i class="fa-solid fa-minus"></i></div>
<span>{count1}</span>
<div onClick={() => setCount1(count1 + 1)}><i class="fa-solid fa-plus"></i></div>
</div>
    <label className="get_room_label4" >Beds</label>
    <div className="get_room_count2">
    <div onClick={() => count2 > 1 && setCount2(count2 - 1)} disabled={count2 <= 1} ><i class="fa-solid fa-minus"></i></div>
<span>{count2}</span>
<div onClick={() => setCount2(count2 + 1)}><i class="fa-solid fa-plus"></i></div>
</div>
    <label className="get_room_label5" >Baths</label>
    <div className="get_room_count3">
    <div onClick={() => count3 > 1 && setCount3(count3 - 1)} disabled={count3 <= 1} ><i class="fa-solid fa-minus"></i></div>
<span>{count3}</span>
<div onClick={() => setCount3(count3 + 1)}><i class="fa-solid fa-plus"></i></div>
</div>
    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i>search</button>
</form>

<div className="room_container">
<div className="room_container_div">
    <img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom11.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1300</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom12.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1500</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom10.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1600</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom4.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1400</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom6.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1900</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom5.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1350</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom9.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$2000</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom8.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1100</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>


<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom1.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1200</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom2.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1800</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom3.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1700</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="room_container">
<div className="room_container_div">
<img style={{width:"395px",height:"263.33px",borderRadius:"20px",position:"relative",right:"10px"}} src={require("./Images/rooooom6.jpg")} alt="i"/>
    <div className="room_price">
        <h4>$1000</h4>
        <p>For night</p>
    </div>
    <h5>Exe Room</h5>
    <div style={{display:"flex"}} className="room_details">
        <div>
            <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/adult.png")}alt="i"/>
            <p>5 Adults</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/children.png")}alt="i"/>
            <p>3 Children</p>
        </div>

        <div>
        <img style={{width:"18px", position:"relative",marginRight:"2.5px"}} src={require("./Images/baths.png")}alt="i"/>
            <p>2 Baths</p>
        </div>
    </div>
    <hr style={{width:"75%",marginLeft:"10px",position:"relative",bottom:"15px"}}/>
    <p style={{maxWidth:"400px",marginLeft:"10px",position:"relative",bottom:"15px"}}>You cam enjoy access to your own private balcony,
        the room is equipped with modern and most luxurious equipment to bring your most wonderful time.</p>
        <Link to="./book vip_room"><button>BOOK NOW</button></Link>
</div>
</div>



<div className="book_room_pages">
    <ul>
        <Link to="/Presidential Suites"><li onClick={scrollToTop}>1</li></Link>
        <Link to="/Executive Suites"><li onClick={scrollToTop} style={{backgroundColor:"#f2c335"}}>2</li></Link>
        <Link to="/Luxury Suites"><li onClick={scrollToTop}><i class="fa-solid fa-chevron-right"></i></li></Link>
    </ul>
</div>

        </div>
    );
}