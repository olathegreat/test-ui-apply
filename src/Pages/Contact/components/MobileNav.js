import React,{useState} from 'react';
import whitebg from "../img/whitebg.png";
import hamburger from "../img/hamburger.png";
import cancel from "../img/cancel.png";
import app from "../img/app.png";
import people from "../img/people.png";
import bag from "../img/bag.png";
import message from "../img/message.png";
import ask from "../img/ask.png";
import link from "../img/link.png";


import "./ContactStyle.css";

const MobileNav = () => {
    const [navDisplay, setNavDisplay] = useState(false);
  return (
    <div className="mobile-nav">
        
            <div className="upper">
                <img className="logo" src={whitebg}/>

                <img src={hamburger} className="icon" style={{display:!navDisplay?"block":"none"}} onClick={()=>setNavDisplay(!navDisplay)}></img>
                <img src={cancel} className="icon" style={{display:navDisplay?"block":"none"}} onClick={()=>setNavDisplay(!navDisplay)}classname="icon"></img>

            </div>

            <div className="stripe" style={{display:navDisplay?"flex":"none"}}>
                <div className="top-tier">
                    <img className="icon" src={app}/>
                    <img className="icon" src={people}/>
                    <img className="icon" src={bag}/>
                    <img className="icon" src={people}/>
                    <img className="icon" src={message}/>
                    

                </div>

                <div className="low-tier">
                    <img className="icon" src={ask}/>
                    <img className="icon" src={link}/>


                </div>

            </div>


        
    </div>
  );
}

export default MobileNav;
