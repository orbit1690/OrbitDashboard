import React from "react";

import { TextAndSwitchRed } from "../../common/TextAndSwitch";
import { Card, CardHeader, CardActionArea, Grid } from "@material-ui/core";

const Faults = (): JSX.Element => (
  <CardActionArea style={{ borderRadius: 15 }}>
    <Card variant="outlined" style={{ height: "100%" }}>
      <CardHeader title="Faults" />

      <Grid container item alignItems="center" justify="center">
        <Grid item>
          <TextAndSwitchRed label="Auto:" checked={true} />
          <TextAndSwitchRed label="Arm:" checked={false} />
        </Grid>
      </Grid>
    </Card>
  </CardActionArea>
);

export default Faults;
