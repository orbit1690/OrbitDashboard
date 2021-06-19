import React, { useEffect } from "react";

import { Grid } from "@material-ui/core";

import Field, { FieldData } from "../../RobotPose/Field";
import fieldArrow, { ArrowPose } from "../../RobotPose/Arrow";
import fieldRobot, { RobotPose } from "../../RobotPose/Robot";

import Vector from "../../utils/Vector";
import { inchToMeter } from "../../utils/Math";
import { useRerender } from "../../utils/Hooks";

import FrcFieldImg from "../../assets/FRC-2020-field.png";
import LimeImg from "../../assets/limelight.jpg";

// TODO read robot pose from network tables
const robotPose: RobotPose = {
  position: new Vector(10.5, 1.5),
  heading: 0,
  size: new Vector(inchToMeter(36.5), inchToMeter(36.5)),
};

const arrowPose: ArrowPose = {
  position: new Vector(10.5, 1.5),
  vector: new Vector(2, 2),
};

const LimeAndField = (): JSX.Element => {
  const rerender: () => void = useRerender();

  useEffect(() => {
    window.addEventListener("resize", rerender);
  }, []);

  const height: number = (8 / 12) * window.innerWidth * (8.21 / 15.98);

  const fieldData: FieldData = {
    imgSrc: FrcFieldImg,
    imgSize: new Vector((8 / 12) * window.innerWidth, height),
    dimensions: new Vector(15.98, 8.21),
  };

  return (
    <Grid
      container
      style={{
        position: "fixed",
        left: 0,
        top: 69,
        height,
      }}
    >
      <Grid item xs={8}>
        <Field data={fieldData}>
          {fieldRobot({ color: "black" }, robotPose)}
          {fieldArrow({ color: "black" }, arrowPose)}
        </Field>
      </Grid>
      <Grid item xs={4}>
        <img src={LimeImg} width="100%" height={height} />
      </Grid>
    </Grid>
  );
};

export default LimeAndField;
