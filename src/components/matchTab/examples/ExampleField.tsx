import React, { useEffect } from "react";

import { useRerender } from "../../../utils/Hooks";
import Vector from "../../../utils/Vector";
import { inchToMeter } from "../../../utils/Math";

import Field, { FieldData } from "../../../RobotPose/Field";
import FrcFieldImg from "../../../assets/FRC-2020-field.png";
import fieldRobot, { RobotPose } from "../../../RobotPose/Robot";
import fieldArrow, { ArrowPose } from "../../../RobotPose/Arrow";

const ExampleField = (props: { widthXs: number }): JSX.Element => {
  const rerender: () => void = useRerender();

  useEffect((): void => {
    window.addEventListener("resize", rerender);
  }, []);

  const width: number = (props.widthXs / 12) * window.innerWidth;

  const height: number = (8.21 / 15.98) * width;

  const fieldData: FieldData = {
    imgSrc: FrcFieldImg,
    imgSize: new Vector(width, height),
    dimensions: new Vector(15.98, 8.21),
  };

  const robotPose: RobotPose = {
    position: new Vector(10.5, 1.5),
    heading: 0,
    size: new Vector(inchToMeter(36.5), inchToMeter(36.5)),
  };

  const arrowPose: ArrowPose = {
    position: new Vector(10.5, 1.5),
    vector: new Vector(2, 2),
  };

  return (
    <Field data={fieldData}>
      {fieldRobot({ color: "black" }, robotPose)}
      {fieldArrow({ color: "black" }, arrowPose)}
    </Field>
  );
};

export default ExampleField;
