import React from "react";
import OrbitLogo from "../assets/OrbitLogo";
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";

const Appbar = (): JSX.Element => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start">
            <OrbitLogo />
          </IconButton>
          <Typography variant="h6">Orbit Dashboard</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
