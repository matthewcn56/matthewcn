import React from "react";
import "./hoverable.css";
interface HoverableProps {
  hoverable: HoverableLayout;
}

interface HoverableLayout {
  icon: any;
  name: string;
  link: string;
  iconAltText: string;
}

export default function Hoverable(props: HoverableProps) {
  return (
    <div className="hoverable-container">
      <a href={props.hoverable.link} rel="noreferrer noopener" target="_blank">
        <div>
          <img
            src={props.hoverable.icon}
            alt={props.hoverable.iconAltText}
            className="icon-img"
          />
        </div>
      </a>
      <div className="hoverable-text">{props.hoverable.name}</div>
    </div>
  );
}
