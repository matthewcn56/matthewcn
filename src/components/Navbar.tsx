import React from "react";
import "./navbar.css";
interface NavbarProps {
  sections: string[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export default function Navbar(props: NavbarProps) {
  const navSects = props.sections.map((sect, index) => (
    <div
      className={`nav-section ${index === props.selected ? "nav-active" : ""}`}
      onClick={() => props.setSelected(index)}
    >
      {sect}
    </div>
  ));
  return <nav className="navbar">{navSects}</nav>;
}
