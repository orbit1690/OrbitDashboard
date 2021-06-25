import React from "react";

import {
  Card,
  CardActionArea,
  CardHeader,
  Typography,
  Grid,
} from "@material-ui/core";

const TimeLeft = (): JSX.Element => (
  <Card variant="outlined">
    <CardActionArea>
      <CardHeader title="Time Left" />

      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h6">Teleop: {135}</Typography>
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
);

export default TimeLeft;
