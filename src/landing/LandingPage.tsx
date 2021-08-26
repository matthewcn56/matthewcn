import React, { useState, useEffect } from "react";
import mattchoo from "../assets/mattchoo.jpg";
import "./landingPage.css";
import mattchooContent from "./LandingPageContent";
import Hoverable from "../components/Hoverable";
import DisplayText from "../components/DisplayText";
const CONTENT_SIZE = mattchooContent.length;
export default function LandingPage() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<undefined | number>(undefined);
  const [displayAll, setDisplayAll] = useState(false);

  useEffect(() => {
    console.log("Hovered is: " + hovered);
  }, [hovered]);
  const icons: JSX.Element[] = mattchooContent[selected].content.reduce(
    (icons: JSX.Element[], section) => {
      //console.log("Section is: " + Object.entries(section));
      if (section.hoverable) {
        const sectDisplay = displayAll
          ? true
          : hovered === section.hoverableIndex;
        icons.push(
          <div>
            <Hoverable
              hoverable={section.hoverable}
              shouldDisplay={sectDisplay}
              index={section.hoverableIndex}
              setHovered={setHovered}
            />
          </div>
        );
      }
      return icons;
    },
    []
  );

  const header = mattchooContent[selected].title;

  const displayText: JSX.Element[] = mattchooContent[selected].content.map(
    (section, index) =>
      section.plain ? (
        <DisplayText text={section.plain} key={index} />
      ) : (
        <DisplayText
          text={section.hoverable?.name}
          index={section.hoverableIndex}
          link={section.hoverable?.link}
          currSelected={hovered === section.hoverableIndex}
          setHovered={setHovered}
          key={index}
        />
      )
  );
  return (
    <div className="landing-body">
      <h2>{header}</h2>
      <div id="hoverables-display">{icons}</div>

      <img src={mattchoo} className="circular center-pic" alt="matthew-nieva" />
      <div id="name">Matthew Nieva</div>
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
      <div>
        Display All Links
        <input
          type="checkbox"
          value="DisplayLinks"
          checked={displayAll}
          onChange={() => setDisplayAll((prevVal) => !prevVal)}
        />
      </div>
    </div>
  );
}
