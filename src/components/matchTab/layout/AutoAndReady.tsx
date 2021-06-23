import React from "react";
import { Grid } from "@material-ui/core";
import AutoChooser from "../cards/AutoChooser";
import ReadyToShoots from "../cards/ReadyToShoots";

const AutoAndReady = (): JSX.Element => (
  <Grid
    direction="column"
    justify="space-between"
    container
    style={{ height: "100%" }}
  >
    <Grid item>
      <AutoChooser />
    </Grid>
    <Grid item>
      <ReadyToShoots limeReady armReady wheelsReady={false} />
    </Grid>
  </Grid>
);

export default AutoAndReady;
