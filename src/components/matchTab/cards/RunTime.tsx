import React from "react";

import {
  Card,
  CardHeader,
  CardActionArea,
  Grid,
  Typography,
} from "@material-ui/core";

const RunTime = (): JSX.Element => (
  <Card variant="outlined" style={{ height: "100%" }}>
    <CardActionArea style={{ height: "100%" }}>
      <CardHeader title="Cycle Time" />

      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h6">{20.0000001}ms</Typography>
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
);

export default RunTime;
