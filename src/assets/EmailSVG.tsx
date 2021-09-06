import React from "react";
import { FillableSVGProps } from "./sharedTypes";
export default function EmailSVG(props: FillableSVGProps) {
  return (
    <div style={{ width: "100%" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            fill={props.color}
            d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
          />
        </g>
      </svg>
    </div>
  );
}
