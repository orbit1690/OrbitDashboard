import React from "react";

import { Grid, Typography } from "@material-ui/core";
import ClickableTile from "../../common/ClickableTile";

const RunTime = (): JSX.Element => (
  <ClickableTile title="Cycle Time">
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h6">{20.0000001}ms</Typography>
      </Grid>
    </Grid>
  </ClickableTile>
);

export default RunTime;
