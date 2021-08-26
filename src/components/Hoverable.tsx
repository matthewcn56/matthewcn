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
    <a
      href={props.hoverable.link}
      rel="noreferrer noopener"
      target="_blank"
      onMouseEnter={() => {
        if (props.setHovered) props.setHovered(props.index);
      }}
      onMouseLeave={() => {
        if (props.setHovered) props.setHovered(undefined);
      }}
    >
      <div className="hoverable-container">
        <div>
          <img
            src={props.hoverable.icon}
            alt={props.hoverable.iconAltText}
            className="icon-img"
          />
        </div>
        {props.shouldDisplay && (
          <div className="hoverable-text">{props.hoverable.name}</div>
        )}
      </div>
    </a>
  );
}
