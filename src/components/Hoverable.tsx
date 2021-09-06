import React from "react";
import "./hoverable.css";

interface HoverableProps {
  hoverable: HoverableLayout;
  shouldDisplay: boolean;
  setHovered: React.Dispatch<React.SetStateAction<number | undefined>>;
  index: number | undefined;
}

interface HoverableLayout {
  icon: any;
  name: string;
  link: string;
  iconAltText: string;
}

export default function Hoverable(props: HoverableProps) {
  return (
    <div
      className={`hoverable-container ${
        !props.shouldDisplay ? "background" : ""
      }`}
    >
      <div>
        <a
          href={props.hoverable.link}
          rel="noreferrer noopener"
          target="_blank"
          onMouseEnter={() => {
            if (props.setHovered) props.setHovered(props.index);
          }}
          onTouchStart={() => {
            if (props.setHovered) props.setHovered(props.index);
          }}
          onMouseLeave={() => {
            if (props.setHovered) props.setHovered(undefined);
          }}
          onTouchEnd={() => {
            if (props.setHovered) props.setHovered(undefined);
          }}
          onTouchCancel={() => {
            if (props.setHovered) props.setHovered(undefined);
          }}
        >
          {React.isValidElement(props.hoverable.icon) ? (
            <div className="icon-img">{props.hoverable.icon}</div>
          ) : (
            <img
              src={props.hoverable.icon}
              alt={props.hoverable.iconAltText}
              className="icon-img"
            />
          )}
        </a>
      </div>
      <div className={`hoverable-text ${!props.shouldDisplay ? "hidden" : ""}`}>
        {props.hoverable.name}
      </div>
    </div>
  );
}
