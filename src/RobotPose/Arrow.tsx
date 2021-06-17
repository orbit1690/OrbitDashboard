import React from "react";
import Vector from "../utils/Vector";
import { FieldConvertion, FieldData, FieldElement, Pose } from "./Field";

export interface ArrowPose extends Pose {
  readonly vector: Vector;
}

export interface ArrowProps {
  readonly pose?: ArrowPose;
  readonly color: string;
}

export const Arrow = (props: ArrowProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 56"
    style={{
      transformOrigin: "center left",
      transform: `rotate(${-props.pose.vector.angle}rad)`,
      position: "absolute",
      width: props.pose.vector.norm,
      left: props.pose.position.x,
      top: props.pose.position.y - (16.97 / 100 / 2) * props.pose.vector.norm,
    }}
  >
    <line
      x1="0"
      y1="28"
      x2="250"
      y2="28"
      stroke={props.color}
      strokeWidth="8"
    />
    <polygon
      transform="translate(250, 0)"
      points="0 0, 80 28, 0 56"
      fill={props.color}
    />
  </svg>
);

const convertArrowToField: FieldConvertion = (
  pose: ArrowPose,
  field: FieldData
): ArrowPose => {
  const xRatio: number = field.imgSize.x / field.dimensions.x;
  const yRatio: number = field.imgSize.y / field.dimensions.y;

  const position: Vector = new Vector(
    pose.position.x * xRatio,
    field.imgSize.y - pose.position.y * yRatio
  );

  const vector: Vector = new Vector(
    pose.vector.x * xRatio,
    pose.vector.y * yRatio
  );

  return {
    position,
    vector,
  };
};

const fieldArrow = (props: ArrowProps, pose: ArrowPose): FieldElement => {
  return {
    pose,
    jsx: <Arrow {...props} />,
    convertToField: convertArrowToField,
  };
};

export default fieldArrow;
