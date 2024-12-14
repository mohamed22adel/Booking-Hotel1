import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
export default function Body(){


    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const variant1 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
    };
    
    const variant2 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
    };


    return(
        <div>
        <div className="center_paragraph">
<h1 className="center_paragraph_h1">Explore Discover Live!</h1>
<p className="center_disc">The best hotel for your family</p>
<Link to="/explore now"><button className="btn_explore">Explore Now</button></Link>
</div>

<img className="image_interface" src={require("./Images/hotel_interface1.jpg")} alt="i"/>



        <div className="hotel_paragraph2">
<div ref={ref2} className="paragraph">
<motion.div
    initial="hidden"
    animate={inView2 ? 'visible' : 'hidden'}
    variants={variant2}
    transition={{ duration: 0.6 }}
        >
    <p className="paragraph_p_1">WELCOME TO ROMANCY</p>
    <h1 className="paragraph_h1_1">Our Hotel has been</h1>
    <h1 className="paragraph_h1_2">Present for over 20 years.</h1>
    <p className="paragraph_p_2">We make the best for all our customers.</p>
    <p className="paragraph_p_3">Welcome to our luxurious hotel,
    where we offer an unforgettable stay characterized by comfort and elegance.
    We are committed to providing the highest levels of service to ensure your satisfaction and comfort.
    Enjoy our elegantly furnished rooms equipped with the latest amenities,
    diverse restaurants offering the finest international cuisine,
    and comprehensive recreational facilities including a swimming pool,
    gym, and spa. Whether you are visiting us for business or leisure,
    our goal is to make your stay an extraordinary experience.
    We welcome you and wish you a pleasant stay.</p>
    <div className="CEO_man">
    <img className="profile_photo" src={require("./Images/profile_photo.jpg")}alt="p"/>
    <div className="CEO_name">
    <h6 className="paragraph_h6_1">Mohammad Adel</h6>
    <p className="paragraph_p_4">CEO Romancy</p>
    </div>
<img className="signature" src={require("./Images/signature.jpg")}alt="n"/>
    </div>
    </motion.div>
</div>
<div ref={ref1} className="paragraph_photos">
<motion.div
    initial="hidden"
    animate={inView1 ? 'visible' : 'hidden'}
    variants={variant1}
    transition={{ duration: 0.6 }}
        >
    <img className="view1" src={require("./Images/view1.jpg")}alt="v"/>
    <img className="view2" src={require("./Images/view2.jpg")}alt="v"/>
    </motion.div>
</div>
        </div>
        </div>
    );
}





