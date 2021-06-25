import React from "react";

import {
  Card,
  CardHeader,
  CardActionArea,
  Grid,
  Typography,
} from "@material-ui/core";
import { TextAndSwitchGreen } from "../../common/TextAndSwitch";

const LimeData = (): JSX.Element => (
  <Card variant="outlined">
    <CardActionArea>
      <CardHeader title="Lime Data" />

      <Grid container item alignItems="center" justify="center">
        <Grid item>
          <TextAndSwitchGreen label="Target Usable:" checked={true} />
          <Typography variant="h6">Distance: {1.7}m</Typography>
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
);

export default LimeData;
