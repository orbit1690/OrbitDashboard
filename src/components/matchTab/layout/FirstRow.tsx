import React from "react";
import { Grid } from "@material-ui/core";

import FieldCard from "../cards/FieldCard";
import ShootingParams from "../cards/ShootingParams";
import ReadyToShoots from "../cards/ReadyToShoots";
import AutoChooser from "../cards/AutoChooser";
import RobotState, { RobotStates } from "../cards/RobotState";

const FirstRow = (): JSX.Element => (
  <Grid direction="row" item container justify="space-around">
    <Grid item xs={5}>
      <FieldCard widthXs={5} />
    </Grid>

    <Grid
      item
      container
      direction="column"
      xs={6}
      justify="flex-start"
      spacing={2}
      style={{ height: "100%" }}
    >
      <Grid item container direction="row" justify="flex-start" spacing={2}>
        <Grid item xs={4}>
          <AutoChooser />
        </Grid>
        <Grid item xs={6}>
          <RobotState state={RobotStates.TRAVEL} />
        </Grid>
      </Grid>

      <Grid item container direction="row" justify="flex-start" spacing={2}>
        <Grid item xs={4}>
          <ReadyToShoots limeReady armReady wheelsReady={false} />
        </Grid>
        <Grid item xs={6}>
          <ShootingParams />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default FirstRow;
