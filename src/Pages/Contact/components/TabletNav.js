import React, {useState} from 'react';
import whitebg from "../img/whitebg.png";
import hamburger from "../img/hamburger.png";
import cancel from "../img/cancel.png"

import "./ContactStyle.css";

const TabletNav = () => {
    const [navDisplay, setNavDisplay] = useState(false);
  return (
    <div className="tablet-nav">
        <div className="upper">
            <img className="logo" src={whitebg}/>

            <img src={hamburger} className="icon" style={{display:!navDisplay?"block":"none"}} onClick={()=>setNavDisplay(!navDisplay)}></img>
            <img src={cancel} className="icon" style={{display:navDisplay?"block":"none"}} onClick={()=>setNavDisplay(!navDisplay)}classname="icon"></img>

        </div>

        <div className = "lower"   style={{display:navDisplay?"flex":"none"}} >
             <a href="">About Us</a>
            <a href="">Pricing Plan</a>
            <a href="">Blog</a>
            <a href="">FAQs</a>
            <a href="">Contact Us</a>


        </div>


        <div  style={{display:navDisplay?"flex":"none"}}  className="buttons">
             <button className="whitebutton">Sign In</button>
             <button className="bluebutton">Get Started</button>
        </div>
      
    </div>
  );
}

export default TabletNav;
