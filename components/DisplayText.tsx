import React from "react";
interface DisplayProps {
  text: string | undefined;
  index?: number;
  setHovered?: React.Dispatch<React.SetStateAction<number | undefined>>;
  currSelected?: boolean;
  link?: any;
  displayLink?: boolean;
  setHasClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  hasClicked?: boolean;
  fullLine?: boolean;
}

export default function DisplayText(props: DisplayProps) {
  return props.index !== undefined ? (
    <span>
      <a
        href={props.displayLink ? props.link : undefined}
        rel="noreferrer noopener"
        target="_blank"
        style={{ cursor: "pointer", textDecoration: "none" }}
        onClick={() => {
          //first time clicked, set so that user can select
          if (props.hasClicked && props.setHovered) props.setHovered(undefined);
          if (!props.displayLink && props.setHasClicked)
            props.setHasClicked((prevVal) => !prevVal);
          console.log("Has clicked is: " + props.hasClicked);
        }}
      >
        <span
          className={`text-container link-container ${
            props.currSelected ? "active" : ""
          }`}
          onMouseEnter={() => {
            if (props.setHovered) props.setHovered(props.index);
          }}
          onMouseLeave={() => {
            if (props.setHovered && !props.hasClicked)
              props.setHovered(undefined);
          }}
          onTouchStart={() => {
            if (props.setHovered) props.setHovered(props.index);
          }}
          // onTouchEnd={() => {
          //   if (props.setHovered && !props.hasClicked)
          //     props.setHovered(undefined);
          // }}
          // onTouchCancel={() => {
          //   if (props.setHovered && !props.hasClicked)
          //     props.setHovered(undefined);
          // }}
        >
          {props.text}
        </span>
      </a>
    </span>
  ) : React.isValidElement(props.text) ? (
    props.text
  ) : (
    <span className={`text-container ${props.fullLine ? "full-line" : ""}`}>
      {props.text}
    </span>
  );
}
