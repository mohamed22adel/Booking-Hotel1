
import Navbar from "./Navbar";
export default function About(){

    return(
        <div>
<Navbar/>
<img style={{position:"relative",bottom:"102.5px",height:"440px"}} className="hotel_about_image" src={require("./Images/hotel_interface1.jpg")} alt="i"/>

    <div className="title_about">
        <h1 style={{color:"#000000"}}>About Us</h1>
    </div>

<div className="middle_about">

<div className="about_paragraph">
<p className="about_p1">The Romancy Luxury Hotel</p>
<h1>Find The Best Hotel For</h1>
<h1>Hosting.</h1>
<p className="about_p2">
Welcome to our luxurious hotel,
    where we offer an unforgettable stay characterized by comfort and elegance.
    We are committed to providing the highest levels of service to ensure your satisfaction and comfort.
    Enjoy our elegantly furnished rooms equipped with the latest amenities,
    <br/><br/>
    diverse restaurants offering the finest international cuisine,
    and comprehensive recreational facilities including a swimming pool,
    gym, and spa. Whether you are visiting us for business or leisure,
    our goal is to make your stay an extraordinary experience.
    We welcome you and wish you a pleasant stay.
</p>
<div className="about_manager">
<img className="profile_photo2" src={require("./Images/profile_photo.jpg")} alt="i"/>
<div className="about_manager_name">
    <p className="about_p3">Hotel Manager</p>
    <img className="signature" src={require("./Images/signature.jpg")} alt="i"/>
</div>
</div>

</div>


<img className="small_hotel_about_image" src={require("./Images/small_hotel_about_image.jpg")} alt="i"/>


<div className="on_small_hotel_about_image">

    <h1>5.0</h1>
<div>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>
<p>2000, Reviews</p>
</div>
</div>

<div className="middle_about2">
    <div className="middle_about2_image">
<div className="middle_about2_image1">
<img className="poal" src={require("./Images/poal.jpg")} alt="i"/>
<img className="spa" src={require("./Images/spa.jpg")} alt="i"/>
</div>

<div className="middle_about2_image2">
<img className="house_keeber" src={require("./Images/house_keeber.jpg")} alt="i"/>
<img className="gym" src={require("./Images/gym.jpg")} alt="i"/>
</div>
    </div>

    <div className="middle_about2_paragraph">
<p className="middle_about2_paragraph_p1">WHY CHOOSE US</p>
<h1>We give The Best Hotel<h1>Facilities.</h1></h1>
<div className="middle_about2_paragraph_line">___<span>.</span>___</div>
<p className="middle_about2_paragraph_p2">Choosing us means immersing yourself in an unparalleled experience of comfort and elegance.
    Our state-of-the-art spa offers a sanctuary for relaxation and rejuvenation,
    while our fully-equipped gym ensures you stay active during your stay.
    Take a refreshing dip in our pristine pool or unwind by its serene surroundings.
    Our dedicated housekeeping staff is committed to providing impeccable cleanliness,
    making sure every moment of your stay is perfect.
    Join us for an unforgettable journey where luxury meets excellence.
</p>
<div className="middle_about2_paragraph_image1">
<div><img src={require("./Images/check-mark.png")}alt="i"/> 24 hour Services</div>
<div><img src={require("./Images/check-mark.png")}alt="i"/> Swimming Pool</div>
<div><img src={require("./Images/check-mark.png")}alt="i"/> Free Wifi</div>
</div>
<div className="middle_about2_paragraph_image2">
<div><img src={require("./Images/check-mark.png")}alt="i"/> Fitness Zone</div>
<div><img src={require("./Images/check-mark.png")}alt="i"/> Kid Gaming Zone</div>
<div><img src={require("./Images/check-mark.png")}alt="i"/> Locker Room</div>
</div>
<div className="middle_about2_paragraph_image3">
<div><img src={require("./Images/check-mark.png")}alt="i"/> Room Cleaning</div>
<div><img src={require("./Images/check-mark.png")}alt="i"/> Safe & Secure</div>
</div>
<span className="middle_about2_paragraph_Explore_Feature">Explore Feature</span>
    </div>
</div>


<div className="middle_about3">
    <div style={{position:"relative",top:"40px",left:"230px"}}>
<p style={{color:"#f2c335",marginBottom:"0"}}>Our Facilities</p>
<h1 style={{marginTop:"0"}}>Core Feature</h1>
<div className="icons">
    <div className="icons_first_div">
<img src={require("./Images/restaurant.png")}alt="i"/>
<p style={{position:"relative",left:"10px"}}>Restaurant</p>
</div>
<div>
<img src={require("./Images/spa.png")}alt="i"/>
<p style={{position:"relative",left:"35px"}}>Spa</p>
</div>
<div>
<img src={require("./Images/treadmill.png")}alt="i"/>
<p style={{position:"relative",left:"32px"}}>Gym</p>
</div>
<div>
<img src={require("./Images/swimming-pool.png")}alt="i"/>
<p style={{position:"relative",left:"32px"}}>Pool</p>
</div>
</div>
<div className="icons2">
    <div>
<img src={require("./Images/game-controller.png")}alt="i"/>
<p style={{position:"relative",left:"20px"}}>Gaming</p>
</div>
<div>
<img src={require("./Images/parking.png")}alt="i"/>
<p style={{position:"relative",left:"10px"}}>Car Parking</p>
</div>
<div>
<img src={require("./Images/lockers.png")}alt="i"/>
<p style={{position:"relative",left:"25px"}}>Locker</p>
</div>
<div>
<img src={require("./Images/school-bus.png")}alt="i"/>
<p style={{position:"relative",left:"15px"}}>Transport</p>
</div>
</div>
</div>

<div className="middle_about3_slider">
{/*slider one*/}
<div id="carouselExampleDark" className="carousel carousel-dark slide">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
            <img style={{height:"300px"}} src={require("./Images/res_image.webp")} className="d-block w-100" alt="..."/>

        </div>
        <div className="carousel-item" data-bs-interval="2000">
            <img style={{height:"300px"}} src={require("./Images/spa_image.webp")} className="d-block w-100" alt="..."/>

        </div>
        <div className="carousel-item">
            <img style={{height:"300px"}} src={require("./Images/gym_image.jpg")} className="d-block w-100" alt="..."/>

        </div>
        <div className="carousel-item">
            <img style={{height:"300px"}} src={require("./Images/pool_image.avif")} className="d-block w-100" alt="..."/>

        </div>
        <div className="carousel-item">
            <img style={{height:"300px"}} src={require("./Images/gaming_image.webp")} className="d-block w-100" alt="..."/>

        </div>
        <div className="carousel-item">
            <img style={{height:"300px"}} src={require("./Images/parking_image.webp")} className="d-block w-100" alt="..."/>

        </div>
        <div className="carousel-item">
            <img style={{height:"300px"}} src={require("./Images/locker_image.jpg")} className="d-block w-100" alt="..."/>

        </div>
        <div className="carousel-item">
            <img style={{height:"300px"}} src={require("./Images/transport_image.jpg")} className="d-block w-100" alt="..."/>

        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
</div>
</div>

<div>
    <h1 style={{fontWeight:"bold",
        display:"flex",
        alignItems:"center",
        marginTop:"220px",
        marginLeft:"550px",
        marginBottom:"50px",
        position:"relative"
        }}>What Our Guest Say</h1>
</div>

<div style={{marginTop:"0",height:"340.6px"}} id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">

<div style={{display:"flex"}}>

        <div style={{position:"relative",width:"450px",
            margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}> Staying at this hotel was an unforgettable experience.
                From the very first moment,
                I felt surrounded by luxury and elegance in every corner.
                The spa and gym facilities were top-notch,
                providing a perfect opportunity for relaxation and self-care.
                Additionally,
                the housekeeping staff maintained impeccable cleanliness,
                adding a touch of comfort and tranquility to my stay.
            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/man1.jpg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>Murad Gazzy</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"50px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>

        <div style={{position:"relative",height:"297.5px",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}> My stay at this luxurious hotel was remarkable in every way.
                Upon arrival, I noticed the grand design and exceptional service.
                I enjoyed the pristine and refreshing pool facilities while the spa offered exceptional massage sessions.
                The rooms were meticulously cleaned daily, making me feel welcomed and at ease.
            </p>
            <div style={{display:"flex",marginTop:"40px"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/girl1.jpeg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>Emily Johnson</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"50px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>

        <div style={{position:"relative",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}> Spending time at this hotel was one of the best experiences I've had.
                    The opulent interior design and attention to detail made me feel like I was in a palace.
                    The gym facilities were equipped with the latest gear,
                    allowing me to exercise conveniently. Moreover,
                    the housekeeping services were outstanding,
                    adding a sense of freshness and comfort to my stay.

            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/man2.jpeg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>Robert Taylor</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"50px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>
        </div>
        </div>
        
        <div class="carousel-item">
            <div style={{display:"flex"}}>
        <div style={{position:"relative",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}>  Staying at this hotel was truly a unique experience.
                From the moment I arrived,
                I felt the hospitality and attention to detail.
                The luxurious spa was the perfect place to unwind,
                while the pool area offered a refreshing and comfortable environment.
                The housekeeping team was fantastic,
                ensuring the rooms were always clean and orderly.

            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/girl2.jpg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>Ashley Davis</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"70px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>

        <div style={{position:"relative",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}>  My stay at this five-star hotel was incredible.
                    The spa and gym facilities were world-class,
                    providing opportunities for relaxation and exercise with ease.
                    The pool was clean and refreshing,
                    and the housekeeping team was always present to maintain cleanliness and order in the rooms.
                    It was an all-encompassing experience worth repeating.

            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/girl3.jpg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>Jessica Smith</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"70px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>

        <div style={{position:"relative",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}> Staying at this hotel was an extraordinary experience.
            From the moment I arrived,
                the staff greeted me with warm smiles and exceptional service.
                The room was luxurious and spotless, and all the facilities,
                especially the spa, were fantastic.
                I felt like I was in a haven of tranquility and luxury.
                The amenities were top-notch,
                and every detail was thoughtfully considered.
            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/man3.jpg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>David Williams</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"70px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>
        </div>
        </div>
        <div class="carousel-item">
            <div style={{display:"flex"}}>
        <div style={{position:"relative",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}> I had an amazing holiday at this hotel.
                    The rooms were equipped with the latest amenities and the service was outstanding.
                    I thoroughly enjoyed my time at the swimming pool,
                    where the atmosphere was calm and refreshing.
                    The food at the hotel was delicious and offered a great variety.
                    The staff went above and beyond to make sure all my needs were met.
            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/girl4.jpg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>Amanda Brown</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"80px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>

        <div style={{position:"relative",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}> This hotel was the perfect choice for a luxurious stay.
                    The interior design of the rooms was elegant and comfortable,
                    and the staff was incredibly friendly and helpful.
                    The gym and spa facilities added another dimension of luxury to my stay.
                    I didn't want to leave this enchanting place.
                    The attention to detail was remarkable,
                    from the decor to the services provided.
            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/man4.webp")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>Michael Anderson</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"80px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>

        <div style={{position:"relative",width:"450px",margin:"auto",padding: "20px 5px 20px 10px",border:"0.25px black solid"}} className="guest_feedback">
            
            <p style={{maxWidth:"400px"}}> This hotel epitomizes luxury and sophistication.
                    From the moment I arrived,
                    I felt special thanks to the personalized and meticulous service.
                    The dining experience was excellent,
                    with a wide variety of delicious dishes.
                        The cleanliness and available services made my stay incredibly comfortable and enjoyable.
                        The ambiance was serene,
                        and the facilities were very good.
            </p>
            <div style={{display:"flex"}} className="guest">
                <img style={{position: "relative",
    width:" 65px",
    height: "65px",
    borderRadius: "50%"}} className="guest_photo" src={require("./Images/man5.jpg")} alt="i"/>
                <div style={{marginLeft:"10px",marginTop:"7px"}} className="guest_name">
                    <h5 style={{marginBottom:"0"}}>James Miller</h5>
                <p style={{marginTop:"0"}} className="ps_g">Guest</p>
                </div>
                <div style={{position:"relative",left:"80px",top:"20px"}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
            </div>
        </div>
        </div>
        </div>
        
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span style={{marginTop:"420px",backgroundColor:"#f2c335"}} class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>

<div>
<span style={{position:"relative",display:"flex",marginLeft:"150px",color:"#f2c335",top:"33px",fontSize:"40px"}}>___________________________</span>
    <p style={{position:"relative",display:"flex",marginLeft:"650px",top:"10px"}}>
        We are always keep them happy</p>
        <span style={{position:"relative",display:"flex",marginLeft:"935px",color:"#f2c335",bottom:"65px",fontSize:"40px"}}>__________________________</span>
</div>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span style={{marginTop:"423px",backgroundColor:"#f2c335"}}  class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

<br/><br/><br/><br/><br/><br/>
</div>
    );
}











