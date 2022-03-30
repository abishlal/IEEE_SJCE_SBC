import React from 'react';
import './excom.css';
import { Link } from "react-router-dom";


function Excom() {
  return (


    <div>
          <div class="contain">
        <span class="welcome">Excome</span>
    </div>
      <div class="exnav teal borderYtoX">
        <Link to="/Excom22">2022</Link>
        <Link to="/Excom21">2021</Link>
        <Link to="/Excom20">2020</Link>
        <Link to="/Excom19">2019</Link>
        <Link to="/Excom18">2018</Link>
        <Link to="/Excom17">2017</Link>
        <Link to="/Excom16">2016</Link>
        <Link to="/Excom15">2015</Link>
        
      </div>
    </div>

  );
}
export default Excom;