import React from "react";
import { wrapAngle } from "../utils/Math";
import Vector from "../utils/Vector";
import { Pose, FieldData, FieldConversion, FieldElement } from "./Field";

export interface RobotPose extends Pose {
  readonly heading: number;
  readonly size: Vector;
}

export interface RobotProps {
  // TODO: add real props (image of the robot?)
  readonly pose?: RobotPose;
  readonly color: string;
}

const Robot = (props: RobotProps): JSX.Element => (
  <svg
    style={{
      left: props.pose.position.x,
      top: props.pose.position.y,
      position: "absolute",
      // transformOrigin: "center",
      transform: `translate(-50%, -50%) rotate(-${wrapAngle(
        props.pose.heading
      )}rad) `,
      width: props.pose.size.x,
      height: props.pose.size.y,
    }}
  >
    <rect
      width={props.pose.size.x}
      height={props.pose.size.y}
      color={props.color}
    ></rect>
  </svg>
);

const convertRobotToField: FieldConversion = (
  pose: RobotPose,
  field: FieldData
): RobotPose => {
  const xRatio: number = field.imgSize.x / field.dimensions.x;
  const yRatio: number = field.imgSize.y / field.dimensions.y;

  const position: Vector = new Vector(
    pose.position.x * xRatio,
    field.imgSize.y - pose.position.y * yRatio
  );

  const size: Vector = new Vector(pose.size.x * xRatio, pose.size.y * yRatio);

  return {
    position,
    size,
    heading: pose.heading,
  };
};

const fieldRobot = (props: RobotProps, pose: RobotPose): FieldElement => {
  return {
    pose,
    jsx: <Robot {...props} />,
    convertToField: convertRobotToField,
  };
};

export default fieldRobot;
