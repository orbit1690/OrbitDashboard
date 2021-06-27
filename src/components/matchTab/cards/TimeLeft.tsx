import React from "react";

import { Typography, Grid } from "@material-ui/core";
import ClickableTile from "../../common/ClickableTile";

const TimeLeft = (): JSX.Element => (
  <ClickableTile title="Time Left">
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h6">Teleop: {135}</Typography>
      </Grid>
    </Grid>
  </ClickableTile>
);

export default TimeLeft;
