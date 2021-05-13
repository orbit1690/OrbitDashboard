import React from "react";
import Vector from "../utils/Vector";

interface ArrowProps {
  readonly lengthInPixels: number;
  readonly position?: Vector;
  readonly rotationInRadians?: number;
  readonly color?: string;
}

const Arrow = ({
  lengthInPixels,
  position,
  rotationInRadians = 0,
  color = "black",
}: ArrowProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 56"
    style={{
      width: lengthInPixels,
      transform: `rotate(${-rotationInRadians}rad)`,
      transformOrigin: "center left",
      position: "relative",
      left: position.x,
      top: position.y,
    }}
  >
    <line x1="0" y1="28" x2="250" y2="28" stroke={color} strokeWidth="8" />
    <polygon
      transform="translate(250, 0) scale(8)"
      points="0 0, 10 3.5, 0 7"
      fill={color}
    />
  </svg>
);

export default Arrow;
