import React from "react";
import './scroll.css';
import { Link } from "react-router-dom";

const Scroll = () => {
    return (
        <div className="homeScroll">

            <div className="defilee__outer">
                <h12>Our<br />Grand Events</h12>
                <section id="defilee" className="defilee__ctnr">
                    <div className="defilee__div defilee__div--special2">
                       <h3>Conocithon</h3>
                        <p>An International 24hour hackathon</p>
                    </div>
                    <div className="defilee__div defilee__div--special">
                    <h3>Conocithon</h3>
                        <p>An International 24 our hackathon</p>
                    </div>
                    <div className="defilee__div defilee__div--special1 first">
                    <h3>Envizaag</h3>
                        <p>I'm the boss.</p>
                    </div>
                    <div className="defilee__div defilee__div--special3">
                    <h3>Conocithon</h3>
                        <p>One word - Warrior.</p>
                    </div>
                    <div className="defilee__div defilee__div--special4">
                    <h3>Conocithon</h3>
                        <p>Brave & Humble</p>
                    </div>
                    <div className="defilee__div defilee__div--special1 ">
                    <h3>Conocithon</h3>
                        <p>@me</p>
                    </div>
                    <div className="defilee__div">
                    <h3>Conocithon</h3>
                        <p>The Friendliest One</p>
                    </div>
                    <div className="defilee__div defilee__div--text">
                        <h2>Stay Tuned!! New Events are on the way</h2>
                    </div>
                    <div className="defilee__div defilee__div--special3">
                    <h3>Conocithon</h3>
                        <p>Christina.</p>
                    </div>
                    <div className="defilee__div defilee__div--special1">
                    <h3>Conocithon</h3>
                        <p>Howdy!</p>
                    </div>

                </section>
            </div>
            <span class="cursor">
                <span class="cursor-move-inner">
                    <span class="cursor-inner"></span>
                </span>
                <span class="cursor-move-outer">
                    <span class="cursor-outer"></span>
                </span>
            </span>
        </div>
    );
};

export default Scroll;