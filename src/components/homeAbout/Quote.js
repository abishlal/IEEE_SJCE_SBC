import React from "react";
import "./Quote.css";
import qt from "../../Assets/quotes.png";

const Quote = () => {
  return (
    <div className="bg">
      <div className="rgb">
        <div className="blackBg">
          <div className="panel">
            <div className="card__text">
              <h2>
                When something is important enough, you do it even if the odds
                are not in your favor!
              </h2>
              <div className="Qby">
                <h2>-Elon Musk</h2>
              </div>
            </div>
          </div>
          <div className="cardRight">
            <div className="qtImg">
              <img src={qt}></img>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Quote;
