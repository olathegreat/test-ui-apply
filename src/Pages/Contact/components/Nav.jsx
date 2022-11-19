import React,{useState} from 'react';

import "./ContactStyle.css";
import MobileNav from './MobileNav';
import NormalNav from './NormalNav';
import TabletNav from './TabletNav';
const Nav = () => {
  

  return (
   <div className="navbody">
      <div className="first">
            <NormalNav/>
      </div>

      <div className="second">
          <TabletNav/>
      </div>

      <div className="third">
          <MobileNav/>
      </div>

   </div>
  );
}

export default Nav;
