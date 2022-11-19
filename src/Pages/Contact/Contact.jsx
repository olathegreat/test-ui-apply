import React from 'react'
import Form  from "./components/Form";
import LeftDetails from "./components/LeftDetails";
import Nav from './components/Nav';
import Footer from './components/Footer';
import "./components/ContactStyle.css";


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-nav-wrapper">
        <Nav/>
      </div>



      <div className="contact-mid">
        <div className="form">
          <Form/>
        </div>
        <div className="form-details">
           <LeftDetails/>
        </div>
      </div>


     <div>
      <Footer/>
     </div>

     <div className="copyright">
        <p>2022 ApplyForMe. All rights reserved</p>

        <p>Cookie Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Setting</p>

     </div>



      
    </div>
  )
}

export default Contact