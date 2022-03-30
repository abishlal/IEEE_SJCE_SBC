import React from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"
import Particles from "react-tsparticles";
import particlesOptions from "../../particles.json";

function Contact() {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_rdb5gl9',
    'template_1p3oi85',
    e.target,
    'EneeLC3y1u9TAvFt4').then(res=>{
      console.log("submitted")
    }).catch(err=> console.log(err));
  }


  return (  
    <div classNameName="App">
      <Particles options={particlesOptions}/>
      <section id="contact">
  
  <h1 className="section-header">Contact US</h1>
  
  <div className="contact-wrapper">    
    <form id="contact-form" classNameName="form-horizontal" role="form" onSubmit={sendEmail} >
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  required></input>
        </div>
      </div><br></br>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  required></input>
        </div>
      </div><br></br>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" >
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      {/* <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h2>Form Submitted</h2>
            
          </div>
        </div>
      </div> */}
      
    </form>
    

    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">OMR, Chennai</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+91 97898 40294</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">contactus@ieeesjcesbc.org</a></span></i></li>
          
        </ul>

        <hr></hr>
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr></hr>


      </div>
    
  </div>
  
</section>  
  
  
    </div>
  );
}


export default Contact;
