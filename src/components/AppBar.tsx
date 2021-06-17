import React from "react";
import OrbitLogo from "../assets/OrbitLogo";
import {
  AppBar as MaterialAppBar,
  IconButton,
  Typography,
  Toolbar,
} from "@material-ui/core";

const AppBar = (): JSX.Element => {
  return (
    <>
      <MaterialAppBar>
        <Toolbar>
          <IconButton edge="start">
            <OrbitLogo />
          </IconButton>
          <Typography variant="h6">Orbit Dashboard</Typography>
        </Toolbar>
      </MaterialAppBar>
    </>
  );
};

export default AppBar;
