import React from "react";

import SpeedIcon from "@material-ui/icons/Speed";

import { Grid, Card, TextField, CardHeader, Box } from "@material-ui/core";

import AngleImg from "../../../assets/angle.png";
import { CardActionArea } from "@material-ui/core";

const AngleInput = (): JSX.Element => (
  <Grid
    container
    alignItems="center"
    justify="space-evenly"
    direction="row"
    spacing={1}
  >
    <Grid item>
      <img src={AngleImg} width={35} />
    </Grid>
    <Grid item>
      <TextField label="Angle:" type="number" variant="outlined" />
    </Grid>
  </Grid>
);

const VelInput = (): JSX.Element => (
  <Grid
    container
    alignItems="center"
    justify="space-evenly"
    direction="row"
    spacing={1}
  >
    <SpeedIcon fontSize="large" />
    <TextField label="Velocity:" type="number" variant="outlined" />
  </Grid>
);

const ShootingParams = (): JSX.Element => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardHeader title="Shooting Parameters" />
      </CardActionArea>

      <Box padding={2}>
        <Grid container direction="column" spacing={2}>
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
