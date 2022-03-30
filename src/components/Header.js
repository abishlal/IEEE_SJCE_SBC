import React from "react";
import "./Header.css";
import sjce from "../Assets/logo/sbc.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">

          <li>
            <a className="Logo" >
              <img className="Logo" src={sjce} alt="" />
            </a>
          </li>
          </Link>

      </div>

      <div className="headerItems">
        <Link to="/AboutUs">
          <li>
            <a className="btn1" href="#">
              About Us
            </a>
          </li>
        </Link>
        <Link to="/Excom22">
          <li>
            <a className="btn1">
              Excom
            </a>
          </li>
        </Link>
        <Link to="/Societies">
          <li>
            <a className="btn1">
              Societies
            </a>
          </li>
          </Link>
        <Link to="/Events">
          <li>
            <a className="btn1">
              Events
            </a>
          </li>
        </Link>
        <Link to="/Membership">
          <li>
            <a className="btn1">
              Membership
            </a>
          </li>
        </Link>


        <Link to="/Gallery">

          <li>
            <a className="btn1">
              Gallery
            </a>
          </li>

        </Link>
        <Link to="/ContactUs">
          <li>
            <a className="btn1" >
              Contact Us
            </a>
          </li>
        </Link>

        <Link to="/SignIn">
          <li>
            <a className="btn1" >
              Sign In
            </a>
          </li>
        </Link>


      </div>
    </div>
  );
}

export default Header;
