import React from "react";
import "./SociBody.css";


import TextTransition, { presets } from "react-text-transition";
import SociBodyCards from "./SociBodyCards";


const TEXTS = [
  "Computer Society",
  "Robotics and Automation Society ",
  "Industry Applications Society",
  "Power Electronics Society",

  "Antennas and Propagation Society",
  "Broadcast Technology Society",
  "Engineering in Medicine and Biology Society",
  "Communications Society",
  "Electron Devices Society",
  "Computational Intelligence Society",

  "Control Systems Society",
];

const SociBody = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="soci">
      <div className="sociBanner">
        <h1 className="animate-charcter">Societies</h1>
      </div>
      <div classname="soci">
        <div className="sociBanner1">
          <h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />
          </h1>
        </div>
      </div>
     
      <SociBodyCards />
    </div>
  );
};

export default SociBody;
