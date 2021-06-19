import React from "react";

import AppBar from "./components/common/AppBar";

import MatchTab from "./components/matchTab/MatchTab";

import { Grid } from "@material-ui/core";

const App = (): JSX.Element => {
  return (
    <>
      <AppBar />
      <Grid
        container
        style={{
          position: "absolute",
          left: 0,
          top: 69 /* 69 is the height of the AppBar */,
        }}
      >
        <MatchTab />
      </Grid>
    </>
  );
};

export default App;
