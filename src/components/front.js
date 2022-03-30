import React from 'react'
import "./front.css"
import Video from "../Assets/video.mp4"
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import { Link } from 'react-router-dom';


const Front = () => {
  return (
    <div>
      <div className="App-header">
        <video id="bg-video" loop autoPlay muted >
          <source src={Video} type="video/mp4" />
        </video>
        <Particles options={particlesOptions} />
        <a>St. Joseph's College Of Engineering</a>
        <a>Student Branch Chapter</a>
        <Link to="/Membership">
          <button className="button-49">JOIN IEEE </button>
        </Link>
      </div>
    </div>
  )
}

export default Front