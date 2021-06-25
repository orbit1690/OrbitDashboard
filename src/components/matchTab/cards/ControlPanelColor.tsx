import React from "react";

import { Card, CardHeader, CardActionArea, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const ControlPanelColor = (): JSX.Element => (
  <Card variant="outlined">
    <CardActionArea>
      <CardHeader title="Control Panel" />

      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            Color: <span style={{ color: "purple" }}>Purple</span>
          </Typography>
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
);

export default ControlPanelColor;
