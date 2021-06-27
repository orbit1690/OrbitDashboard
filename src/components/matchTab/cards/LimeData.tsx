import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { TextAndSwitchGreen } from "../../common/TextAndSwitch";
import ClickableTile from "../../common/ClickableTile";

const LimeData = (): JSX.Element => (
  <ClickableTile title="Lime Data">
    <Grid container item alignItems="center" justify="center">
      <Grid item>
        <TextAndSwitchGreen label="Target Usable:" checked={true} />
        <Typography variant="h6">Distance: {1.7}m</Typography>
      </Grid>
    </Grid>
  </ClickableTile>
);

export default LimeData;
