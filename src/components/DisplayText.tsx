import React, { useState } from "react";
import "../landing/landingPage.css";
interface DisplayProps {
  text: string | undefined;
  index?: number;
  setHovered?: React.Dispatch<React.SetStateAction<number | undefined>>;
  currSelected?: boolean;
  link?: any;
  displayLink?: boolean;
}

export default function DisplayText(props: DisplayProps) {
  const [hasClicked, setHasClicked] = useState(false);
  return props.index !== undefined ? (
    <a
      href={props.displayLink ? props.link : undefined}
      rel="noreferrer noopener"
      target="_blank"
      style={{ cursor: "pointer" }}
      onClick={() => {
        //first time clicked, set so that user can select
        if (hasClicked && props.setHovered) props.setHovered(undefined);
        if (!props.displayLink) setHasClicked((prevVal) => !prevVal);
        console.log("Has clicked is: " + hasClicked);
      }}
    >
      <div
        className={`text-container ${props.currSelected ? "active" : ""}`}
        onMouseEnter={() => {
          if (props.setHovered) props.setHovered(props.index);
        }}
        onMouseLeave={() => {
          if (props.setHovered && !hasClicked) props.setHovered(undefined);
        }}
        onTouchStart={() => {
          if (props.setHovered) props.setHovered(props.index);
        }}
        onTouchEnd={() => {
          if (props.setHovered && !hasClicked) props.setHovered(undefined);
        }}
        onTouchCancel={() => {
          if (props.setHovered && !hasClicked) props.setHovered(undefined);
        }}
      >
        {props.text}
        <div className="text-section-line" />
      </div>
    </a>
  ) : React.isValidElement(props.text) ? (
    props.text
  ) : (
    <div className="text-container">{props.text}</div>
  );
}
