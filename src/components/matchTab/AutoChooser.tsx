import React, { useState } from "react";

import { Select, Paper, Grid, Typography, MenuItem } from "@material-ui/core";

enum Autonomous {
  Right,
  Left,
}

const AutoChooser = (): JSX.Element => {
  const [auto, setAuto] = useState(Autonomous.Left);

  return (
    <Paper elevation={10}>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5">Autonomous:</Typography>
        </Grid>

        <Grid item style={{ marginTop: 10 }}>
          <Select
            value={auto}
            variant="outlined"
            onChange={(event: any): void => setAuto(event.target.value)}
          >
            <MenuItem value={Autonomous.Right}>Right</MenuItem>
            <MenuItem value={Autonomous.Left}>Left</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AutoChooser;
