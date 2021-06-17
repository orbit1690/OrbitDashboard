import React from "react";
import AppBar from "./components/AppBar";

import { Grid } from "@material-ui/core";
import Field, { FieldData } from "./RobotPose/Field";
import FrcFieldImg from "./assets/FRC-2020-field.png";
import Vector from "./utils/Vector";

import LimeImg from "./assets/limelight.jpg";

const fieldData: FieldData = {
  imgSrc: FrcFieldImg,
  imgSize: new Vector(900, 462),
  dimensions: new Vector(15.98, 8.21),
};

const App = (): JSX.Element => {
  return (
    <>
      <AppBar />

      <Grid
        container
        direction="row"
        style={{
          position: "absolute",
          top: 70,
          left: 0,
        }}
        justify="space-between"
      >
        <Grid item xs={6}>
          <Field data={fieldData}></Field>
        </Grid>
        <Grid item xs={6}>
          <img src={LimeImg} height={462} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
