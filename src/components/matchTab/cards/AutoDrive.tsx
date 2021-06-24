import React from "react";
import { Card, CardActionArea, CardHeader, Grid } from "@material-ui/core";
import { GreenSwitch } from "../../common/TextAndSwitch";

const AutoDrive = (): JSX.Element => (
  <Card variant="outlined">
    <CardActionArea>
      <CardHeader title="Auto Drive Active" />
    </CardActionArea>

    <CardActionArea>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <GreenSwitch checked={true} />
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
);

export default AutoDrive;
