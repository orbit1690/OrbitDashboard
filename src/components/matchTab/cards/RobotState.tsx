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
  <Card variant="outlined" style={{ height: "100%" }}>
    <CardActionArea>
      <CardHeader title="Robot State" />
    </CardActionArea>

    <CardActionArea style={{ height: "55%" }}>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h5">State: {props.state.toString()}</Typography>
      </Grid>
    </CardActionArea>
  </Card>
);

export default RobotState;
