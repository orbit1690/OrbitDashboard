import React from "react";

import SpeedIcon from "@material-ui/icons/Speed";

import { Grid, TextField, Box } from "@material-ui/core";

import AngleIcon from "../../../assets/AngleIcon";

import Tile from "../../common/Tile";

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
      <AngleIcon />
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
      <SpeedIcon fontSize="large" style={{ color: "#000" }} />
    </Grid>
    <Grid item xs={10}>
      <TextField label="Velocity:" type="number" variant="outlined" />
    </Grid>
  </Grid>
);

const ShootingParams = (): JSX.Element => {
  return (
    <Tile title="Shooting Parameters">
      <Box padding={2}>
        <Grid item container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <AngleInput />
          </Grid>
          <Grid item>
            <VelInput />
          </Grid>
        </Grid>
      </Box>
    </Tile>
  );
};

export default ShootingParams;
