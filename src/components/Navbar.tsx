import React from "react";
import "./navbar.css";
interface NavbarProps {
  sections: string[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setHovered: React.Dispatch<React.SetStateAction<number | undefined>>;
  resetSpin: () => void;
}

export default function Navbar(props: NavbarProps) {
  const navSects = props.sections.map((sect, index) => (
    <div
      className={`nav-section ${index === props.selected ? "nav-active" : ""}`}
      onClick={() => {
        props.setSelected(index);
        props.resetSpin();
      }}
    >
      {sect}
    </div>
  ));

  return <nav className="navbar">{navSects}</nav>;
}
