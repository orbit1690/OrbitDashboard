import React from "react";

import {
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";

export enum RobotStates {
  TRAVEL = "Travel",
  INTAKE = "Intake",
  SHOOT = "Shoot",
  CLIMB = "Climb",
  FEEDER = "Feeder",
}
const RobotState = (props: { readonly state: RobotStates }): JSX.Element => (
  <CardActionArea style={{ height: "100%", borderRadius: 15 }}>
    <Card variant="outlined" style={{ height: "100%" }}>
      <CardHeader title="Robot State" />

      <Grid container justify="center" alignItems="center">
        <Typography variant="h5">State: {props.state}</Typography>
      </Grid>
    </Card>
  </CardActionArea>
);

export default RobotState;
