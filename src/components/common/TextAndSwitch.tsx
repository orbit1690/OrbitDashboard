import React from "react";

import { green, red } from "@material-ui/core/colors";
import { withStyles, Switch, Grid, Typography } from "@material-ui/core";
import { isDarkTheme } from "../../Theme";

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
  readonly onClick?: () => void;
}

export const TextAndSwitchGreen = (props: TextAndSwitchProps): JSX.Element => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justify="space-between"
    wrap="nowrap"
  >
    <Typography
      variant="h6"
      style={{ color: isDarkTheme() ? "white" : "black" }}
    >
      {props.label}
    </Typography>
    <GreenSwitch
      color="default"
      checked={props.checked}
      onClick={props.onClick}
    />
  </Grid>
);

export const TextAndSwitchRed = (props: TextAndSwitchProps): JSX.Element => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justify="space-between"
    wrap="nowrap"
  >
    <Typography
      variant="h6"
      style={{ color: isDarkTheme() ? "white" : "black" }}
    >
      {props.label}
    </Typography>
    <RedSwitch checked={props.checked} onClick={props.onClick} />
  </Grid>
);
