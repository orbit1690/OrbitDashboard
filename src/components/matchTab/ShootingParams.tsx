import React from "react";

import SpeedIcon from "@material-ui/icons/Speed";

import { Grid, Paper, TextField, Typography } from "@material-ui/core";

import AngleImg from "../../assets/angle.png";

const ShootingParams = (): JSX.Element => {
  return (
    <Paper elevation={10}>
      <Grid
        direction="column"
        style={{ padding: 16 }}
        spacing={8}
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5">Shooting Parameters:</Typography>
        </Grid>

        <Grid
          item
          style={{ marginTop: 20, marginBottom: 20 }}
          container
          alignItems="center"
          justify="space-between"
        >
          <img src={AngleImg} width={35} />
          <TextField label="Angle:" type="number" variant="outlined" />
        </Grid>

        <Grid item container alignItems="center" justify="space-between">
          <SpeedIcon fontSize="large" />
          <TextField label="Velocity:" type="number" variant="outlined" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ShootingParams;
