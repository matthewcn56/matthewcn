import React, { useState, useEffect } from "react";
import mattchoo from "../assets/mattchoo.jpg";
import "./landingPage.css";
import mattchooContent from "./LandingPageContent";
import Hoverable from "../components/Hoverable";
import DisplayText from "../components/DisplayText";
import Navbar from "../components/Navbar";
export default function LandingPage() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<undefined | number>(undefined);
  const [displayAll, setDisplayAll] = useState(false);

  useEffect(() => {
    setHovered(undefined);
    setDisplayAll(false);
  }, [selected]);
  const iconsLength = mattchooContent[selected].content.reduce(
    (num: number, curr) => {
      if (curr.hoverable) num++;
      return num;
    },
    0
  );
  console.log("IconsLength is: " + iconsLength);
  const angleOffset = (Math.PI * 2) / iconsLength;
  let angle = 0;
  const width = 250;
  const height = 250;
  const radius = 150;
  const hovSize = 50;
  const icons: JSX.Element[] = mattchooContent[selected].content.reduce(
    (icons: JSX.Element[], section) => {
      //console.log("Section is: " + Object.entries(section));
      if (section.hoverable) {
        const sectDisplay = displayAll
          ? true
          : hovered === section.hoverableIndex;
        //do math shenanigans
        // const xOffset = 150 * Math.cos(angle);
        const xOffset = Math.round(
          width / 2 + radius * Math.cos(angle) - hovSize / 2
        );
        const yOffset = Math.round(
          height / 2 + radius * Math.sin(angle) - hovSize / 2
        );
        angle += angleOffset;
        icons.push(
          <div
            style={{
              position: "absolute",
              left: xOffset,
              top: yOffset,
            }}
          >
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

  const sectionTitles = mattchooContent.map((sect) => sect.title);
  console.log(sectionTitles);

  const isLinkClickable = mattchooContent[selected].clickableText;
  //console.log(mattchooContent[selected]);
  const displayText: JSX.Element[] = mattchooContent[selected].content.map(
    (section, index) =>
      section.plain ? (
        <DisplayText text={section.plain} key={index} />
      ) : (
        <DisplayText
          text={section.hoverable?.name}
          index={section.hoverableIndex}
          link={section.hoverable?.link}
          displayLink={isLinkClickable}
          currSelected={hovered === section.hoverableIndex}
          setHovered={setHovered}
          key={index}
        />
      )
  );

  return (
    <>
      <Navbar
        sections={sectionTitles}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="landing-body">
        <h2 id="name">Matthew Nieva</h2>
        <div id="center-grid">
          <div
            className={`hoverables-display ${
              hovered !== undefined ? "paused" : ""
            }`}
          >
            <div className="hoverables-holder">{icons}</div>
          </div>
          {/* Is it constant picture? */}
          {mattchooContent[selected].constantPic ? (
            <img
              src={mattchooContent[selected].constantPic}
              className="circular center-pic"
              alt="matthew-nieva"
            /> // Is it hovered or not?
          ) : hovered || hovered === 0 ? (
            //is the icon a picture or SVG?
            React.isValidElement(
              mattchooContent[selected].hoverables[hovered].hoverable?.icon
            ) ? (
              <img
                src={
                  mattchooContent[selected].hoverables[hovered].hoverable
                    ?.displaySVG
                }
                style={{ backgroundColor: "#841414" }}
                className="circular center-pic"
                alt="project-pic"
              />
            ) : (
              <img
                src={
                  mattchooContent[selected].hoverables[hovered].hoverable?.icon
                }
                className="circular center-pic"
                alt="project-pic"
              />
            )
          ) : (
            <img
              src={mattchoo}
              className="circular center-pic"
              alt="matthew-nieva"
            />
          )}
        </div>

        <div>
          Display All
          <input
            type="checkbox"
            value="DisplayLinks"
            checked={displayAll}
            onChange={() => setDisplayAll((prevVal) => !prevVal)}
          />
        </div>
        <div className="text-section">{displayText}</div>
      </div>
    </>
  );
}
