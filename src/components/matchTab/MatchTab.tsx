import React from "react";

import LimeAndField from "./LimeAndField";

import { Grid } from "@material-ui/core";

import ReadyToShoots from "./ReadyToShoots";
import ShootingParams from "./ShootingParams";
import AutoChooser from "./AutoChooser";

const MatchTab = (): JSX.Element => {
  return (
    <Grid container direction="column">
      <LimeAndField />

      <Grid
        container
        direction="row-reverse"
        justify="space-around"
        spacing={5}
        style={{ marginTop: 16 }}
      >
        <Grid item>
          <ReadyToShoots limeReady={true} armReady={true} wheelsReady={false} />
        </Grid>

        <Grid item>
          <ShootingParams />
        </Grid>

        <Grid item>
          <AutoChooser />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MatchTab;
