import React from "react";
import { Grid } from "@material-ui/core";

import FieldCard from "../cards/FieldCard";
import ShootingParams from "../cards/ShootingParams";
import ReadyToShoots from "../cards/ReadyToShoots";
import AutoChooser from "../cards/AutoChooser";
import RobotState, { RobotStates } from "../cards/RobotState";

const FirstRow = (): JSX.Element => (
  <Grid item container justify="space-around" alignItems="flex-start">
    <Grid item xs={4}>
      <FieldCard widthXs={4} />
    </Grid>

    <Grid item container xs={6} spacing={2}>
      {/* first sub-row */}
      <Grid item xs={5}>
        <AutoChooser />
      </Grid>
      <Grid item xs={7}>
        <RobotState state={RobotStates.TRAVEL} />
      </Grid>

      {/* second sub-row */}
      <Grid item xs={5}>
        <ReadyToShoots limeReady armReady wheelsReady={false} />
      </Grid>
      <Grid item xs={7}>
        <ShootingParams />
      </Grid>
    </Grid>
  </Grid>
);

export default FirstRow;
