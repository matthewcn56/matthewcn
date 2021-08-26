import React, { useState, useEffect } from "react";
import mattchoo from "../assets/mattchoo.jpg";
import "./landingPage.css";
import mattchooContent from "./LandingPageContent";
import Hoverable from "../components/Hoverable";
import DisplayText from "../components/DisplayText";
const CONTENT_SIZE = mattchooContent.length;
export default function LandingPage() {
  const [selected, setSelected] = useState(0);
  const icons: JSX.Element[] = mattchooContent[selected].content.reduce(
    (icons: JSX.Element[], section) => {
      if (section.hoverable)
        icons.push(<Hoverable hoverable={section.hoverable} />);
      return icons;
    },
    []
  );
  const displayText: JSX.Element[] = mattchooContent[selected].content.map(
    (section) =>
      section.plain ? (
        <DisplayText text={section.plain} />
      ) : (
        <DisplayText text={section.hoverable?.name} />
      )
  );
  return (
    <div className="landing-body">
      <div className="hoverables-display">{icons}</div>

      <div>
        <img src={mattchoo} className="circular center-pic" />
      </div>
      <div>Matthew Nieva</div>
      <div className="text-section">{displayText}</div>

      <div className="selected-slider-container">
        <input
          type="range"
          min={0}
          max={CONTENT_SIZE - 1}
          step={"1"}
          value={selected}
          onChange={(event) => {
            console.log(event.target.value);
            setSelected(parseInt(event.target.value));
          }}
          onMouseEnter={() => console.log("Mouse entered slider!")}
          onMouseLeave={() => console.log("Bye bye mouse")}
        />
      </div>
    </div>
  );
}
