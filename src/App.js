
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingRoomPage1 from "./BookingRoomPage1";
import About from "./About";
import LogIn from "./LogIn";
import Register from "./Register";
import Contact from "./Contact";
import BreakFast from "./BreakFast";
import ScrollToTopButton from "./ScrollToTopButton";
import BookingRoomPage2 from "./BookingRoomPage2";
import BookingRoomPage3 from "./BookingRoomPage3";
import Team from "./Team";
import Footer from "./Footer";
export default function App(){
    return(
<div>
    
    <ScrollToTopButton/>
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/login" element={<LogIn/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/book now" element={<BookingRoomPage1/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/explore now" element={<BookingRoomPage1/>}/>
<Route path="/Presidential Suites" element={<BookingRoomPage1/>}/>
<Route path="/Executive Suites" element={<BookingRoomPage2/>}/>
<Route path="/Luxury Suites" element={<BookingRoomPage3/>}/>
<Route path="/Team" element={<Team/>}/>
<Route path="/BreakFast" element={<BreakFast/>}/>
</Routes>
<Footer/>
</div>
    );
}


