import React from "react";
import { Grid } from "@material-ui/core";

import FieldCard from "../cards/FieldCard";
import AutoAndReady from "./AutoAndReady";
import ShootingParams from "../cards/ShootingParams";

const FirstRow = (): JSX.Element => (
  <Grid direction="row" item container justify="space-around">
    <Grid item xs={5}>
      <FieldCard widthXs={5} />
    </Grid>

    <Grid item xs={2}>
      <AutoAndReady />
    </Grid>

    <Grid item xs={3}>
      <ShootingParams />
    </Grid>
  </Grid>
);

export default FirstRow;
