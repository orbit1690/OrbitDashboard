import React from "react";

import { Grid, Typography } from "@material-ui/core";
import ClickableTile from "../../common/ClickableTile";

const ControlPanelColor = (): JSX.Element => (
  <ClickableTile title="Control Panel">
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h6">
          Color: <span style={{ color: "purple" }}>Purple</span>
        </Typography>
      </Grid>
    </Grid>
  </ClickableTile>
);

export default ControlPanelColor;
