import React from "react";

import { green } from "@material-ui/core/colors";
import { withStyles, Switch, Grid, Typography } from "@material-ui/core";

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

const TextAndSwitch = (props: {
  label: string;
  checked: boolean;
}): JSX.Element => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justify="space-between"
    wrap="nowrap"
  >
    <Typography>{props.label}</Typography>
    <GreenSwitch checked={props.checked} />
  </Grid>
);

export default TextAndSwitch;
