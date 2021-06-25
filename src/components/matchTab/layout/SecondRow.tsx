import React from "react";
import { Box, Grid } from "@material-ui/core";
import Lime from "../cards/Lime";
import AutoDrive from "../cards/AutoDrive";
import Faults from "../cards/Faults";
import TimeLeft from "../cards/TimeLeft";
import RunTime from "../cards/RunTime";
import ControlPanelColor from "../cards/ControlPanelColor";
import LimeData from "../cards/LimeData";

const FirstColumn = (): JSX.Element => (
  <Grid
    container
    direction="column"
    justify="space-between"
    style={{ height: "100%" }}
  >
    <Grid item>
      <AutoDrive />
    </Grid>

    <Grid item>
      <Faults />
    </Grid>

    <Grid item>
      <TimeLeft />
    </Grid>
  </Grid>
);

const SecondColumn = (): JSX.Element => (
  <Grid
    container
    direction="column"
    justify="space-between"
    style={{ height: "100%" }}
  >
    <Grid item>
      <ControlPanelColor />
    </Grid>

    <Grid item>
      <LimeData />
    </Grid>

    <Grid item>
      <RunTime />
    </Grid>
  </Grid>
);

const SecondRow = (): JSX.Element => (
  <Box marginLeft={4} marginTop={-3}>
    <Grid direction="row" item container justify="flex-start" spacing={2}>
      <Grid item xs={3}>
        <Lime />
      </Grid>

      <Grid item xs={2}>
        <FirstColumn />
      </Grid>

      <Grid item xs={2}>
        <SecondColumn />
      </Grid>
    </Grid>
  </Box>
);

export default SecondRow;
