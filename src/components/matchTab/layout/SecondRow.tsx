import React from "react";
import { Box, Grid } from "@material-ui/core";
import Lime from "../cards/Lime";

const SecondRow = (): JSX.Element => (
  <Box marginLeft={4} marginTop={-3}>
    <Grid direction="row" item container justify="flex-start">
      <Grid item xs={3}>
        <Lime />
      </Grid>
    </Grid>
  </Box>
);

export default SecondRow;
