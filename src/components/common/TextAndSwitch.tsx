import React from "react";

import { green, red } from "@material-ui/core/colors";
import { withStyles, Switch, Grid, Typography } from "@material-ui/core";

const coloredSwitch = (color: any) =>
  withStyles({
    switchBase: {
      "&$checked": {
        color: color[500],
      },
      "&$checked + $track": {
        backgroundColor: color[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

export const GreenSwitch = coloredSwitch(green);
export const RedSwitch = coloredSwitch(red);

interface TextAndSwitchProps {
  readonly label: string;
  readonly checked: boolean;
}

const TextAndSwitch = (props: TextAndSwitchProps): JSX.Element => (
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
