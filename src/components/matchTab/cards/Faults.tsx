import React from "react";

import { TextAndSwitchRed } from "../../common/TextAndSwitch";
import { Grid } from "@material-ui/core";
import ClickableTile from "../../common/ClickableTile";

const Faults = (): JSX.Element => (
  <ClickableTile title="Faults">
    <Grid container item alignItems="center" justify="center">
      <Grid item>
        <TextAndSwitchRed label="Auto:" checked={true} />
        <TextAndSwitchRed label="Arm:" checked={false} />
      </Grid>
    </Grid>
  </ClickableTile>
);

export default Faults;
