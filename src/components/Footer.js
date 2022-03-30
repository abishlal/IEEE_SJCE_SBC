import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <footer>
            <div>
                <span class="logo">St.Joseph's College of Engineering IEEE Student Branch Chapter</span>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="link-cat">
                        <span class="footer-toggle"></span>
                        <span class="footer-cat">About</span>
                    </div>
                    <ul class="footer-cat-links">
                        <p><span>The only Students Branch Chapter that launched four societies at a time as its first streak and the only college containing the highest number of societies under the Madras Section.  </span></p>
                    </ul>
                </div>
                <div class="col-3">
                    <div class="link-cat">
                        <span class="footer-toggle"></span>
                        <span class="footer-cat">Useful Links</span>
                    </div>
                    <ul class="footer-cat-links">
                        <li>
                            <Link to="/AboutUs"><a href=""><span>About Us</span></a></Link>
                        </li>
                        <li>
                            <Link to="/Excom22"><a href=""><span>Execom</span></a></Link>
                        </li>
                        <li>
                            <Link to="/Societies"><a href=""><span>Societies</span></a></Link>
                        </li>
                        <li>
                            <Link to="/Membership"><a href=""><span>Membership</span></a></Link>
                        </li>
                        <li>
                            <Link to="/Gallery"><a href=""><span>Gallery</span></a></Link>
                        </li>
                        <li>
                            <Link to="/ContactUs"><a href=""><span>Contact Us</span></a></Link>
                        </li>

                    </ul>
                </div>
                <div class="col-3">
                    <div class="link-cat" onclick="footerToggle(this)">
                        <span class="footer-toggle"></span>
                        <span class="footer-cat">IEEE Links</span>
                    </div>
                    <ul class="footer-cat-links">
                        <li><a href="https://www.ieee.org/"><span>IEEE</span></a></li>
                        <li><a href="https://www.ieeemadras.org/"><span>IEEE Madras Section</span></a></li>
                        <li><a href="https://www.ieee.org/sitemap.html"><span>Sitemap</span></a></li>
                        <li><a href="https://www.ieee.org/security-privacy.html"><span>Privacy Policy</span></a></li>
                        <li><a href="https://www.ieee.org/about/corporate/governance/p9-26.html"><span>Nondiscrimination Policy</span></a></li>
                    </ul>
                </div>
                <div class="col-3" id="newsletter">
                <div class="link-cat">
                        <span class="footer-toggle"></span>
                        <span class="footer-cat">Stay Connected</span>
                    </div>
                    <ul class="footer-cat-links">
                        <li><span>Email: contactus@ieeesjcesbc.org</span></li>
                        <li><span>Phone-no: +91 97898 40294</span></li>
                    </ul>

                    <div id="address">
                        <span>Office Location</span>
                        <ul>
                            <li>
                                <i class="fa fa-building"></i>
                                <div>OMR<br />
                                    Chennai - 119, Tamil Nadu<br /> India</div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="social-links social-1 col-6">
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                    <a href=""><i class="fa fa-instagram"></i></a>
                    <a href=""><i class="fa fa-youtube"></i></a>
                </div>
            </div>
            <div id="copyright">
                &copy; All Rights Reserved 2022-2023
            </div>
            <div id="owner">
                <span>
                    Designed by Website team
                </span>
            </div>
        </footer>
    );
};

export default Footer;