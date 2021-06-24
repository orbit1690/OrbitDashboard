import React from "react";
import { Box, Grid } from "@material-ui/core";
import Lime from "../cards/Lime";
import AutoDrive from "../cards/AutoDrive";

const SecondRow = (): JSX.Element => (
  <Box marginLeft={4} marginTop={-3}>
    <Grid direction="row" item container justify="flex-start" spacing={2}>
      <Grid item xs={3}>
        <Lime />
      </Grid>
      <Grid item xs={2}>
        <AutoDrive />
      </Grid>
    </Grid>
  </Box>
);

export default SecondRow;
