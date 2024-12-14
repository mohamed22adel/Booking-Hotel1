import { useState } from "react";
import Navbar from "./Navbar";

export default function BreakFast(){


    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    const [count4, setCount4] = useState(1);
    const [count5, setCount5] = useState(1);
    const [count6, setCount6] = useState(1);
    const [count7, setCount7] = useState(1);
    const [count8, setCount8] = useState(1);
    const [count9, setCount9] = useState(1);
    const [count10, setCount10] = useState(1);
    const [count11, setCount11] = useState(1);
    const [count12, setCount12] = useState(1);
    const [count13, setCount13] = useState(1);
    const [count14, setCount14] = useState(1);
    const [count15, setCount15] = useState(1);
    const [count16, setCount16] = useState(1);
    const [count17, setCount17] = useState(1);
    const [count18, setCount18] = useState(1);
    const [count19, setCount19] = useState(1);
    const [count20, setCount20] = useState(1);
    const [count21, setCount21] = useState(1);

    const [price1, setPrice1] = useState(15);
    const [price2, setPrice2] = useState(50);
    const [price3, setPrice3] = useState(10);
    const [price4, setPrice4] = useState(15);
    const [price5, setPrice5] = useState(75);
    const [price6, setPrice6] = useState(10);
    const [price7, setPrice7] = useState(15);
    const [price8, setPrice8] = useState(80);
    const [price9, setPrice9] = useState(10);
    const [price10, setPrice10] = useState(15);
    const [price11, setPrice11] = useState(85);
    const [price12, setPrice12] = useState(10);
    const [price13, setPrice13] = useState(15);
    const [price14, setPrice14] = useState(50);
    const [price15, setPrice15] = useState(10);
    const [price16, setPrice16] = useState(15);
    const [price17, setPrice17] = useState(70);
    const [price18, setPrice18] = useState(10);
    const [price19, setPrice19] = useState(15);
    const [price20, setPrice20] = useState(75);
    const [price21, setPrice21] = useState(10);


    const getPlus1 = () => {
    setCount1(count1 + 1);
    setPrice1(price1 + 15);
    }
    const getPlus2 = () => {
    setCount2(count2 + 1);
    setPrice2(price2 + 50);
    }
    const getPlus3 = () => {
    setCount3(count3 + 1); 
    setPrice3(price3 + 10); 
    }
    const getPlus4 = () => {
    setCount4(count4 + 1);
    setPrice4(price4 + 15);
    }
    const getPlus5 = () => {  
    setCount5(count5 + 1);
    setPrice5(price5 + 75);
    }
    const getPlus6 = () => {
    setCount6(count6 + 1);
    setPrice6(price6 + 10);
    }
    const getPlus7 = () => {
    setCount7(count7 + 1);
    setPrice7(price7 + 15);
    }
    const getPlus8 = () => {   
    setCount8(count8 + 1); 
    setPrice8(price8 + 80);
    }
    const getPlus9 = () => { 
    setCount9(count9 + 1);
    setPrice9(price9 + 10);
    }
    const getPlus10 = () => {
    setCount10(count10 + 1);
    setPrice10(price10 + 15);
    }
    const getPlus11 = () => {
    setCount11(count11 + 1);
    setPrice11(price11 + 85);
    }
    const getPlus12 = () => {
    setCount12(count12 + 1);
    setPrice12(price12 + 10);
    }
    const getPlus13 = () => {
    setCount13(count13 + 1);
    setPrice13(price13 + 15);
    }
    const getPlus14 = () => {
    setCount14(count14 + 1);
    setPrice14(price14 + 50);
    }
    const getPlus15 = () => {
    setCount15(count15 + 1);
    setPrice15(price15 + 10);
    }
    const getPlus16 = () => {
    setCount16(count16 + 1);
    setPrice16(price16 + 15);
    }
    const getPlus17 = () => {
    setCount17(count17 + 1);
    setPrice17(price17 + 70);
    }
    const getPlus18 = () => {
    setCount18(count18 + 1);
    setPrice18(price18 + 10);
    }
    const getPlus19 = () => {
    setCount19(count19 + 1);
    setPrice19(price19 + 15);
    }
    const getPlus20 = () => {
    setCount20(count20 + 1);
    setPrice20(price20 + 75);
    }
    const getPlus21 = () => {
    setCount21(count21 + 1);
    setPrice21(price21 + 10);
    }
    
    
    const getMinus1 = () => {
        count1 > 1 && setCount1(count1 - 1);
        price1 > 15 && setPrice1(price1 - 15);
    }
    const getMinus2 = () => {
        count2 > 1 && setCount2(count2 - 1);
        price2 > 50 && setPrice2(price2 - 50);
    }
    const getMinus3 = () => {
        count3 > 1 && setCount3(count3 - 1); 
        price3 > 10 && setPrice3(price3 - 10);
    }
    const getMinus4 = () => {
        count4 > 1 && setCount4(count4 - 1); 
        price4 > 15 && setPrice4(price4 - 15);
    }
    const getMinus5 = () => {
        count5 > 1 && setCount5(count5 - 1);
        price5 > 75 && setPrice5(price5 - 75);
    }
    const getMinus6 = () => {
        count6 > 1 && setCount6(count6 - 1);
        price6 > 10 && setPrice6(price6 - 10);
    }
    const getMinus7 = () => {
        count7 > 1 && setCount7(count7 - 1);
        price7 > 15 && setPrice7(price7 - 15); 
    }
    const getMinus8 = () => {
        count8 > 1 && setCount8(count8 - 1);
        price8 > 80 && setPrice8(price8 - 80);
    }
    const getMinus9 = () => {
        count9 > 1 && setCount9(count9 - 1);
        price9 > 10 && setPrice9(price9 - 10);
    }
    const getMinus10 = () => {
        count10 > 1 && setCount10(count10 - 1);
        price10 > 15 && setPrice10(price10 - 15);
    }
    const getMinus11 = () => {
        count11 > 1 && setCount11(count11 - 1);
        price11 > 85 && setPrice11(price11 - 85);
    }
    const getMinus12 = () => {
        count12 > 1 && setCount12(count12 - 1);
        price12 > 10 && setPrice12(price12 - 10);
    }
    const getMinus13 = () => {
        count13 > 1 && setCount13(count13 - 1);
        price13 > 15 && setPrice13(price13 - 15);
    }
    const getMinus14 = () => {
        count14 > 1 && setCount14(count14 - 1);
        price14 > 50 && setPrice14(price14 - 50);
    }
    const getMinus15 = () => {
        count15 > 1 && setCount15(count15 - 1);
        price15 > 10 && setPrice15(price15 - 10);
    }
    const getMinus16 = () => {
        count16 > 1 && setCount16(count16 - 1);
        price16 > 15 && setPrice16(price16 - 15);
    }
    const getMinus17 = () => {
        count17 > 1 && setCount17(count17 - 1);
        price17 > 70 && setPrice17(price17 - 70);
    }
    const getMinus18 = () => {
        count18 > 1 && setCount18(count18 - 1);
        price18 > 10 && setPrice18(price18 - 10);
    }
    const getMinus19 = () => {
        count19 > 1 && setCount19(count19 - 1);
        price19 > 15 && setPrice19(price19 - 15);
    }
    const getMinus20 = () => {
        count20 > 1 && setCount20(count20 - 1);
        price20 > 75 && setPrice20(price20 - 75);
    }
    const getMinus21 = () => {
        count21 > 1 && setCount21(count21 - 1);
        price21 > 10 && setPrice21(price21 - 10);
        }

    return(
        <div>
            <Navbar/>
            <img className="image_interface" src={require("./Images/hotel_interface1.jpg")} alt="i"/>
            <div className="center_paragraph">
<h1 style={{marginLeft:"30px",position:"relative",top:"20px"}} className="center_paragraph_h1">Explore Our Dishes!</h1>
</div>
            <table style={{textAlign:"center",border:"2px orange solid",marginBottom:"100px",marginTop:"300px",marginLeft:"35px"}}>
    <thead>
    <tr>
    <th style={{color:"white",backgroundColor:"black",padding:"5px 50px",border:"2px orange solid"}}>ID</th>
    <th style={{color:"white",backgroundColor:"black",padding:"5px 50px",border:"2px orange solid"}}>DAY</th>
    <th style={{color:"white",backgroundColor:"black",padding:"5px 50px",border:"2px orange solid"}}>HOUR</th>
    <th style={{color:"white",backgroundColor:"black",padding:"5px 50px",border:"2px orange solid"}}>DISH</th>
    <th style={{color:"white",backgroundColor:"black",padding:"5px 50px",border:"2px orange solid"}}>ORDER NOW</th>
    <th style={{color:"white",backgroundColor:"black",padding:"5px 50px",border:"2px orange solid"}}>PRICE</th>
    <th style={{color:"white",backgroundColor:"black",padding:"5px 50px",border:"2px orange solid"}}>CHIEF</th>
    </tr>
    </thead>
    <tbody>
    <tr style={{borderBottom:"2px black solid"}}>
    <td><p>1</p></td>
    <td><p>Saturday</p></td>
    <td><p>10:00AM - 12:30BM</p> 
        <p>01:00BM - 04:30BM</p> 
        <p>07:00BM - 10:00BM</p>
        </td>
    <td><p>Cheese and mushroom stuffed omelet with toasted bread.</p>
    <p>Fish fillet with lemon butter sauce and sautéed vegetables.</p>
    <p>Margherita pizza baked in a wood-fired oven with arugula salad.</p>
    </td>
    <td>
        <div style={{display:"flex"}}>
    <div onClick={getMinus1}
    disabled={count1 <= 1}>
        <i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count1}</span>
<div onClick={getPlus1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus2} disabled={count2 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count2}</span>
<div onClick={getPlus2}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus3} disabled={count3 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count3}</span>
<div onClick={getPlus3}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
    </td>
    <td>
    <p>${price1}</p>
    <p>${price2}</p>
    <p>${price3}</p>
    </td>
    <td><p>Gordon Ramsay</p></td>
    </tr>
    <tr style={{borderBottom:"2px black solid"}}>
    <td><p>2</p></td>
    <td><p>Sunday</p></td>
    <td><p>10:00AM - 12:30BM</p> 
    <p>01:00BM - 04:30BM</p> 
    <p> 07:00BM - 10:00BM</p> 
    </td>
    <td>
    <p>Crepes with assorted fruit and nut fillings, and honey.</p>
    <p>Quinoa salad with avocado, sun-dried tomatoes, and cheese.</p>
    <p>Beef Wellington with mushroom sauce and mashed potatoes</p>
    </td>
    <td>
        <div style={{display:"flex"}}>
    <div onClick={getMinus4} disabled={count4 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count4}</span>
<div onClick={getPlus4}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus5} disabled={count5 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count5}</span>
<div onClick={getPlus5}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus6} disabled={count6 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count6}</span>
<div onClick={getPlus6}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
    </td>
    <td><p>${price4}</p>
    <p>${price5}</p>
    <p>${price6}</p>
    </td>
    <td><p>Alain Ducasse</p></td>
    </tr>
    <tr style={{borderBottom:"2px black solid"}}>
    <td><p>3</p></td>
    <td><p>Monday</p></td>
    <td><p>10:00AM - 12:30BM</p>
    <p>01:00BM - 04:30BM</p>
    <p>07:00BM - 10:00BM</p>
    </td>
    <td>
    <p>Eggs Benedict with Hollandaise sauce, and a side of fresh fruit.</p>
    <p>Caesar salad with grilled chicken, and tomato soup with cheesy croutons.</p>
    <p>Beef steak with black pepper sauce, mashed potatoes, and sautéed vegetables.</p>
    </td>
    <td>
        <div style={{display:"flex"}}>
    <div onClick={getMinus7} disabled={count7 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count7}</span>
<div onClick={getPlus7}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus8} disabled={count8 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count8}</span>
<div onClick={getPlus8}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus9} disabled={count9 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count9}</span>
<div onClick={getPlus9}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
    </td>
    <td><p>${price7}</p>
    <p>${price8}</p>
    <p>${price9}</p>
    </td>
    <td><p>Vineet Bhatia</p></td>
    </tr>
    <tr style={{borderBottom:"2px black solid"}}>
    <td><p>4</p></td>
    <td><p>Tuesday</p></td>
    <td><p>10:00AM - 12:30BM</p>
        <p>01:00BM - 04:30BM</p>
        <p>07:00BM - 10:00BM</p>
        </td>
    <td>
    <p>Continental breakfast with croissants, yogurt with fruits, and assorted cheeses</p>

    <p>Rigatoni with creamy mushroom sauce, and a mixed vegetable salad</p>

    <p>Grilled salmon with lemon butter sauce, and basmati rice with vegetables.</p>
        </td>
        <td>
        <div style={{display:"flex"}}>
    <div onClick={getMinus10} disabled={count10 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count10}</span>
<div onClick={getPlus10}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus11} disabled={count11 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count11}</span>
<div onClick={getPlus11}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus12} disabled={count12 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count12}</span>
<div onClick={getPlus12}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
    </td>
    <td><p>${price10}</p>
    <p>${price11}</p>
    <p>${price12}</p>
    </td>
        <td><p>Giorgio Locatelli</p></td>
    </tr>
    <tr style={{borderBottom:"2px black solid"}}>
    <td><p>5</p></td>
    <td><p>Wednesday</p></td>
    <td><p>10:00AM - 12:30BM</p>
        <p>01:00BM - 04:30BM</p>
        <p>07:00BM - 10:00BM</p>
        </td>
    <td>
    <p>Blueberry pancakes with maple syrup, and a cup of latte.</p>
    <p>Cheeseburger with fries and a side salad.</p>
    <p>Tandoori chicken with basmati rice and naan bread.</p>
        </td>
        <td>
        <div style={{display:"flex"}}>
    <div onClick={getMinus13} disabled={count13 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count13}</span>
<div onClick={getPlus13}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus14} disabled={count14 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count14}</span>
<div onClick={getPlus14}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus15} disabled={count15 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count15}</span>
<div onClick={getPlus15}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
    </td>
    <td><p>${price13}</p>
    <p>${price14}</p>
    <p>${price15}</p>
    </td>
        <td><p>Gary Rhodes</p></td>
    </tr>
    <tr style={{borderBottom:"2px black solid"}}>
    <td><p>6</p></td>
    <td><p>Thursday</p></td>
    <td><p>10:00AM - 12:30BM</p>
        <p>01:00BM - 04:30BM</p>
        <p> 07:00BM - 10:00BM</p>
        </td>
    <td>
    <p>Avocado toast with poached eggs and spices.</p>
    <p>Niçoise salad with fresh tuna, boiled eggs, and assorted vegetables.</p>
    <p>Pomodoro pasta with meatballs in a classic tomato sauce.</p>
        </td>
        <td>
        <div style={{display:"flex"}}>
    <div onClick={getMinus16} disabled={count16 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count16}</span>
<div onClick={getPlus16}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus17} disabled={count17 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count17}</span>
<div onClick={getPlus17}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus18} disabled={count18 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count18}</span>
<div onClick={getPlus18}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
    </td>
    <td><p>${price16}</p>
    <p>${price17}</p>
    <p>${price18}</p>
    </td>
        <td><p>Fernando Arellano</p></td>
    </tr>
    <tr style={{borderBottom:"2px black solid"}}>
    <td><p>7</p></td>
    <td><p>Friday</p></td>
    <td><p>10:00AM - 12:30BM</p>
        <p>01:00BM - 04:30BM</p>
        <p>07:00BM - 10:00BM</p>
        </td>
    <td>
    <p>Waffles with chocolate syrup and fresh strawberries.</p>
    <p>Grilled chicken breast with tartar sauce and roasted potatoes.</p>
    <p>Lamb chops with mint sauce, and dauphinoise potatoes.</p>
        </td>
        <td>
        <div style={{display:"flex"}}>
    <div onClick={getMinus19} disabled={count19 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count19}</span>
<div onClick={getPlus19}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus20} disabled={count20 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count20}</span>
<div onClick={getPlus20}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",marginBottom:"2px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
<div style={{display:"flex"}}>
<div onClick={getMinus21} disabled={count21 <= 1}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-minus"></i></div>
<span style={{padding:"10px"}}>{count21}</span>
<div onClick={getPlus21}><i style={{padding:"10px", color:"white",backgroundColor:"black",border:"2px orange solid"}} class="fa-solid fa-plus"></i></div>
<button style={{padding:"5px 10px",backgroundColor:'orange',border:"1px black solid",borderRadius:"20px"}}>Order Now</button>
</div>
    </td>
    <td><p>${price19}</p>
    <p>${price20}</p>
    <p>${price21}</p>
    </td>
        <td><p>Fredric Larquemin</p></td>
    </tr>
    </tbody>
</table>
        </div>
    )
}