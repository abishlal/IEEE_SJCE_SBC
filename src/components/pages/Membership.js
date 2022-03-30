import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../Assets/images.js"
import zz from "../../Assets/zz.jpg"

import "./Membership.css"

function Membership() {
    return (
        <div>
            <div className="aboutMain" >
                <div class="one" >
                    <h > MEMBERSHIP DEVELOPMENT </h>
                </div >
                <div class="about" >
                    <div class="inner-section" >
                        <h1 > Want to join as a member ? </h1>
                        <p class="text" >
                            Open to individuals who by education or experience give evidence of competence in an IEEE designated field.The designated fields are : Engineering, Computer Sciences and Information Technology, Physical Sciences, Biological and Medical Sciences, Mathematics, Technical Communications,
                            Education, Management, and Law and Policy.IEEE membership offers access to technical innovation, cutting - edge information, networking opportunities, and exclusive member benefits.Members support IEEE’ s mission to advance technology
                            for humanity and the profession,
                            while memberships build a platform to introduce careers in technology to students around the world. </p>
                    </div >
                </div>


            </div>
            <div>
                <div id="container" >
                    <div id="imageContainer" >
                    </div>
                    <center >
                        < h2 > Improve Your Technical Skill </h2>
                    </center >
                    <p> IEEE SJCE Student Branch organizes various kinds of technical workshops to provide students with wide exposure to the latest technical skills. </p> </div>
                <div id="container" >
                    <div id="imageContainer" >
                    </div>
                    <center >
                        < h2 > Develop Soft skills </h2>
                    </center >
                    <p > IEEE SJCE Student Branch connects with technical industry
                        for organizing technical workshops to
                        let members familiar with how industry works. </p>
                </div >
                <div id="container" >
                    <div id="imageContainer" >
                    </div>
                    <center > < h2 > Free of Charge
                        for Event​ </h2>
                    </center >
                    <p > With IEEE SJCE Student Branch, the registration fee is 100 % waived
                        for any Student Branch event. </p>
                </div >
                <div id="container" >
                    <div id="imageContainer" >
                    </div>
                    <center >
                        < h2 > Networking With Professionals </h2>
                    </center >
                    <p > IEEE SJCE Student Branch creates a local network among students and gives them the opportunity to develop leadership skill in leading technical workshop. </p>
                </div >
            </div>

            <div class="one" >
                <h > Membership Benefit </h> </div >


            < div class=" collapse" >
                <details >
                    <summary > Discount </summary>
                    <div class="details-wrapper" >
                        <div class="details-styling" >
                            < p > < a href="https://www.ieee.org/conferences/index.html" > Discount on IEEE conference </a></p >

                            < p > < a href="https://www.ieee.org/publications/index.html" > Discount on IEEE publications </a></p >

                            <p > < a href="https://www.ieee.org/about/corporate/agreements/index.html" > National Society Member Discount </a></p >

                            <p > < a href="https://www.ieee.org/publications/books/index.html" > Wiley - IEEE Press Discounts </a></p >
                        </div>
                    </div >
                </details>
                <details >
                    <summary > Professional Networking </summary> <div class="details-wrapper" >
                        <div class="details-styling" >

                            <p > < a href="https://www.ieee.org/membership/products/google-apps.html" > GoogleApps @IEEE </a></p >

                            <p > < a href="GoogleApps@IEEE" > IEEE Collabratec </a></p >

                            < p > < a href="https://www.ieee.org/communities/index.html" > Local Meetings </a></p >
                            <p > IEEE e - mail Alias </p>
                            <p > IEEE memberNet </p>
                            <p > Online Communities </p>
                        </div >
                    </div>
                </details >
                <details >
                    <summary > Continuing Education </summary> <
                        div class="details-wrapper" >
                        <div class="details-styling" >

                            < p > < a href="https://innovationatwork.ieee.org/" > IEEE Continuing Education Providers Program </a></p >

                            <p > < a href="https://innovationatwork.ieee.org/" > IEEE.tv </a></p >
                            <p > Student Travel Grants </p> </div >
                    </div>
                </details >
                <details >
                    <summary > Career Resources and Recognition </summary> < div class="details-wrapper" >
                        <div class="details-styling" >

                            <p > < a href="https://jobs.ieee.org/" > Career Asset Manager </a></p >

                            < p > < a href="https://www.ieee.org/education/elearning-library.html" > eLearning Library </a></p >

                            < p > < a href="https://wie.ieee.org/membership/" > IEEE Women in Engineering </a></p >

                            <p > < a href="https://www.ieee.org/membership/grade-elevation.html" > Member Grade Elevation </a></p >

                            < p > < a href="https://www.ieee.org/membership/my-ieee.html" > myIEEE </a></p >
                            <p > ResumeLab </p> <p > Student Awards, Scholarships, Fellowships </p>
                            < p > Student Competitions </p>
                            <p > The Institute Newsletter </p>
                        </div >
                    </div> </    details > <details >
                    <summary > Keeping Technically Current </summary>
                    <div class="details-wrapper" >
                        <div class="details-styling" >

                            <p > < a href="https://www.ieee.org/publications/books/ebookclassics.html" > e - Book Classics </a></p >

                            <p > < a href="https://www.ieee.org/publications/subscriptions/products/mdl/overview.html" > IEEE Member Digital Library(Access to) </a></p >

                            <p > < a href="https://students.ieee.org/potentials-magazine/" > IEEE Potentials Magazine– Digital </a></p >

                            <p > < a href="https://students.ieee.org/potentials-magazine/" > IEEE Societies </a></p >

                            <p>  < a href="https://students.ieee.org/potentials-magazine/" > IEEE Spectrum Magazine, digital delivery </a></p >

                            < p > < a href="https://standards.ieee.org/" > IEEE Standards </a></p >

                            <p > < a href="https://standards.ieee.org/" > IEEE Xplore Abstracts </a></p >

                            <p > < a href="https://ieeeusa.org/careers/ebooks/" > IEEE - USA eBooks </a></p >

                            <p > < a href="http://proceedingsoftheieee.ieee.org/" > Proceedings of the IEEE </a></p >
                        </div>
                    </div >
                </details>
            </div >
            <div class="one" >
                <h > What are you waiting
                    for ? Join us NOW!! </h>
            </div >
            <div class="memcon" >
                <div class="memcard" >
                    <div class="membox" >
                        <div class="memcontent" >
                            <h3 > Join New Here </h3>
                            <a href="#" > Join Here </a>
                        </div >
                    </div>
                </div >

                <div class="memcard" >
                    <div class="membox" >
                        <div class="memcontent" >
                            <h3 > Renew Here </h3>
                            <a href="#" > Renew Here </a>
                        </div >
                    </div>
                </div >
            </div>


        </div>

    );
};

export default Membership;