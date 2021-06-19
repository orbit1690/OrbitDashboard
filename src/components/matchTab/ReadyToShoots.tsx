import React from "react";

import { Grid, Switch, withStyles, Typography, Paper } from "@material-ui/core";
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

interface SingleReadyProps {
  readonly label: string;
  readonly state: boolean;
}

const SingleReady = (props: SingleReadyProps): JSX.Element => (
  <Grid container direction="row" alignItems="center" justify="space-between">
    <Typography>{props.label}</Typography>
    <GreenSwitch checked={props.state} />
  </Grid>
);

interface ReadyToShootsProps {
  readonly limeReady: boolean;
  readonly armReady: boolean;
  readonly wheelsReady: boolean;
}

const ReadyToShoots = (props: ReadyToShootsProps): JSX.Element => {
  return (
    <Paper elevation={10}>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5">Ready To Shoot:</Typography>
        </Grid>

        <Grid item>
          <SingleReady label="Lime:" state={props.limeReady} />
          <SingleReady label="Arm:" state={props.armReady} />
          <SingleReady label="Wheels:" state={props.wheelsReady} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReadyToShoots;
