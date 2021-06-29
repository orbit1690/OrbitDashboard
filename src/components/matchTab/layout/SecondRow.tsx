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
    justify="flex-start"
    spacing={2}
  >
    <Grid item>
      <AutoDrive />
    </Grid>

    <Grid item>
      <LimeData />
    </Grid>

    <Grid item>
      <RunTime />
    </Grid>
  </Grid>
);

const SecondColumn = (): JSX.Element => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    spacing={2}
  >
    <Grid item>
      <TimeLeft />
    </Grid>

    <Grid item>
      <Faults />
    </Grid>

    <Grid item>
      <ControlPanelColor />
    </Grid>
  </Grid>
);

const SecondRow = (): JSX.Element => (
  <Box marginLeft={10} marginTop={2}>
    <Grid direction="row" item container justify="flex-start" spacing={2}>
      <Grid item xs={3}>
        <Lime />
      </Grid>

      <Grid item xs={4} container direction="column" justify="flex-start" spacing={2} >
        {/* first sub-row */}
        < Grid item container spacing={2}>
          <Grid item xs={6}>
            <AutoDrive />
          </Grid>
          <Grid item xs={6}>
            <TimeLeft />
          </Grid>
        </Grid>

        {/* second sub-row */}
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <LimeData />
          </Grid>
          <Grid item xs={6}>
            <Faults />
          </Grid>
        </Grid>

        {/* third sub-row */}
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <RunTime />
          </Grid>
          <Grid item xs={6}>
            <ControlPanelColor />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box >
);

export default SecondRow;
