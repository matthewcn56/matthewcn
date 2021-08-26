import React from "react";
interface DisplayProps {
  text: string | undefined;
}

export default function DisplayText(props: DisplayProps) {
  return <div>{props.text}</div>;
}
