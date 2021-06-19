import React from "react";

import { Grid, Switch, withStyles, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const GreenSwitch = withStyles({
  switchBase: {
    "&$checked": {
      color: green[500],
    },
    "&$checked + $track": {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const ReadyToShoots = (): JSX.Element => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h5">Ready To Shoot:</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Typography>Lime:</Typography>
          <GreenSwitch />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Typography>Arm:</Typography>
          <GreenSwitch />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Typography>Wheels:</Typography>
          <GreenSwitch />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReadyToShoots;
