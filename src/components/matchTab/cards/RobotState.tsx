import React from "react";

import { Grid, Typography } from "@material-ui/core";

import ClickableTile from "../../common/ClickableTile";

export enum RobotStates {
  TRAVEL = "Travel",
  INTAKE = "Intake",
  SHOOT = "Shoot",
  CLIMB = "Climb",
  FEEDER = "Feeder",
}
const RobotState = (props: { readonly state: RobotStates }): JSX.Element => (
  <ClickableTile title="Robot State">
    <Grid container justify="center">
      <Grid item>
        <Typography variant="h5">State: {props.state}</Typography>
      </Grid>
    </Grid>
  </ClickableTile>
);

export default RobotState;
