import React from "react";
import { Grid } from "@material-ui/core";
import Lime from "../cards/Lime";

const SecondRow = (): JSX.Element => (
  <Grid direction="row" item container justify="space-around">
    <Grid item xs={3}>
      <Lime />
    </Grid>
  </Grid>
);

export default SecondRow;
