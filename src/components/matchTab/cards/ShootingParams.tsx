import React from "react";

import SpeedIcon from "@material-ui/icons/Speed";

import { Grid, Card, TextField, CardHeader, Box } from "@material-ui/core";

import AngleImg from "../../../assets/angle.png";
import { CardActionArea } from "@material-ui/core";

const AngleInput = (): JSX.Element => (
  <Grid
    container
    alignItems="center"
    justify="flex-start"
    direction="row"
    spacing={3}
    wrap="nowrap"
  >
    <Grid item xs={2}>
      <img src={AngleImg} width={35} />
    </Grid>
    <Grid item xs={10}>
      <TextField label="Angle:" type="number" variant="outlined" />
    </Grid>
  </Grid>
);

const VelInput = (): JSX.Element => (
  <Grid
    container
    alignItems="center"
    justify="flex-start"
    direction="row"
    spacing={3}
    wrap="nowrap"
  >
    <Grid item xs={2}>
      <SpeedIcon fontSize="large" />
    </Grid>
    <Grid item xs={10}>
      <TextField label="Velocity:" type="number" variant="outlined" />
    </Grid>
  </Grid>
);

const ShootingParams = (): JSX.Element => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardHeader title="Shooting Parameters" />
      </CardActionArea>

      <Box padding={2}>
        <Grid item container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <AngleInput />
          </Grid>
          <Grid item>
            <VelInput />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ShootingParams;
