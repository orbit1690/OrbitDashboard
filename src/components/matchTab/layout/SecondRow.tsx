import React from "react";
import { Box, Grid } from "@material-ui/core";
import Lime from "../cards/Lime";
import AutoDrive from "../cards/AutoDrive";
import Faults from "../cards/Faults";

const AutoDriveAndFaults = (): JSX.Element => (
  <Grid container direction="column" justify="flex-start" spacing={2}>
    <Grid item>
      <AutoDrive />
    </Grid>

    <Grid item>
      <Faults />
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
        <AutoDriveAndFaults />
      </Grid>
    </Grid>
  </Box>
);

export default SecondRow;
