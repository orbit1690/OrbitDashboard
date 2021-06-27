import React from "react";
import {
  AppBar as MaterialAppBar,
  Typography,
  Toolbar,
} from "@material-ui/core";
import Menu from "./Menu";
import { Tab } from "./Menu";

interface AppBarProps {
  readonly setTab: (tab: Tab) => void;
}

const AppBar = (props: AppBarProps): JSX.Element => {
  return (
    <MaterialAppBar>
      <Toolbar>
        <Menu setTab={props.setTab} />

        <Typography variant="h6">Orbit Dashboard</Typography>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
