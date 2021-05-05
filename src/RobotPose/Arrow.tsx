import React from "react";

interface ArrowProps {
  readonly lengthInPixels: number;
  readonly rotationInRadians: number;
  readonly color: string;
}

const Arrow = (props: ArrowProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 100"
    style={{
      width: props.lengthInPixels,
      transformOrigin: "center left",
      transform: `rotate(${props.rotationInRadians}rad)`,
    }}
  >
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
        fill={props.color}
      >
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </defs>
    <line
      x1="0"
      y1="50"
      x2="250"
      y2="50"
      stroke={props.color}
      strokeWidth="8"
      markerEnd="url(#arrowhead)"
    />
  </svg>
);

export default Arrow;
