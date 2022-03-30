import React from "react";
import "./About.css";
import AboutBox from "./homeAbout/AboutBox"
import AboutCards from "./homeAbout/AboutCards"
import Counter from "./homeAbout/Counter";
import Quote from "./homeAbout/Quote";
import Images from "./homeAbout/Images";
import Faq from "./homeAbout/Faq";
import Scroll from "./homeAbout/scroll";


const About = () => {
  return (
    <div className="abMain">
      <AboutBox />
      <div className="abcards">
        <div className="cardsName">
          <h1>Why IEEE?</h1>
        </div>
        <div className="cardsDiv">
          <AboutCards />
        </div>
      </div>
      <div className="fact">
        <div className="facts">
          <div className="factHead">
            <h1>

              FACT

            </h1>
          </div>

          <div className="factNos">
            <div className="factNo">

              <h2>
                <Counter num={170} />+
              </h2>
              <p>Active Members</p>

            </div>
            <div className="factNo">

              <h2>
                <Counter num={150} />+
              </h2>
              <p>Events Organized</p>

            </div>
            <div className="factNo">

              <h2>
                <Counter num={12} />
              </h2>
              <p>Active Societies</p>

            </div>
            <div className="factNo">

              <h2>
                <Counter num={1} />
              </h2>
              <p>Active Affinity Group</p>

            </div>
          </div>
        </div>
      </div>
      <div>
        <Scroll />
      </div>
      <div className="quote">
        <Quote />
      </div>
      <div className="images">
        <Images />
      </div>
      <div className="faq">
        <div className="faqHead">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="faqbody">
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default About;
