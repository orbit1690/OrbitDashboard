import React, { useEffect } from "react";

import { useRerender } from "../../../utils/Hooks";
import Vector from "../../../utils/Vector";
import { inchToMeter } from "../../../utils/Math";

import Field, { FieldData } from "../../../RobotPose/Field";
import FrcFieldImg from "../../../assets/FRC-2020-field.png";
import fieldRobot, { RobotPose } from "../../../RobotPose/Robot";
import fieldArrow, { ArrowPose } from "../../../RobotPose/Arrow";
import { useNetworkTable } from "../../../utils/NetworkTables";

const FieldWithSizing = (props: { widthXs: number }): JSX.Element => {
  const rerender: () => void = useRerender();

  useEffect((): void => {
    window.addEventListener("resize", rerender);
  }, []);

  const width: number = (props.widthXs / 12) * window.innerWidth - 8;

  const height: number = (8.21 / 15.98) * width;

  const fieldData: FieldData = {
    imgSrc: FrcFieldImg,
    imgSize: new Vector(width, height),
    dimensions: new Vector(15.98, 8.21),
  };

  const posX = useNetworkTable("/pose/posX", 0) - 0.48;
  const posY = useNetworkTable("/pose/posY", 0);
  const heading = useNetworkTable("/pose/heading", 0);

  const velX = useNetworkTable("/pose/velX", 0);
  const velY = useNetworkTable("/pose/velY", 0);

  const robotPose: RobotPose = {
    position: new Vector(posX, posY),
    heading,
    size: new Vector(inchToMeter(36.5), inchToMeter(36.5)),
  };

  const arrowPose: ArrowPose = {
    position: robotPose.position,
    vector: new Vector(velX, velY),
  };

  return (
    <Field data={fieldData}>
      {fieldRobot({ color: "black" }, robotPose)}
      {fieldArrow({ color: "black" }, arrowPose)}
    </Field>
  );
};

export default FieldWithSizing;
