import React from 'react';
import whitebg from "../img/whitebg.png";
import "./ContactStyle.css";

const NormalNav = () => {
  return (
    <div className="normalnav">
        <div className="first-nav">
            <img src={whitebg} alt="whienglogo"/>

        </div>

        <div className="second-nav">
            <a href="">About Us</a>
            <a href="">Pricing Plan</a>
            <a href="">Blog</a>
            <a href="">FAQs</a>
            <a href="">Contact Us</a>

        </div>

        <div className="third-nav">
          <button className="whitebutton">Sign In</button>
          <button className="bluebutton">Get Started</button>
        </div>
      
    </div>
  );
}

export default NormalNav;
