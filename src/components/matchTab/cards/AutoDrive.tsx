import React from "react";
import { Grid } from "@material-ui/core";
import { GreenSwitch } from "../../common/TextAndSwitch";

import ClickableTile from "../../common/ClickableTile";

const AutoDrive = (): JSX.Element => (
  <ClickableTile title="Auto Drive Active">
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <GreenSwitch checked={true} />
      </Grid>
    </Grid>
  </ClickableTile>
);

export default AutoDrive;
