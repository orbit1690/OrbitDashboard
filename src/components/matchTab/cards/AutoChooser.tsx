import React, { useState } from "react";

import { Select, Grid, MenuItem, Box } from "@material-ui/core";

// TODO come up with real names
enum Autonomous {
  Right,
  Left,
}

import Tile from "../../common/Tile";

const AutoChooser = (): JSX.Element => {
  const [auto, setAuto] = useState(Autonomous.Left);

  return (
    <Tile title="Autonomous">
      <Box padding={1}>
        <Grid container alignItems="center" justify="center">
          <Select
            value={auto}
            variant="outlined"
            onChange={(event: any): void => setAuto(event.target.value)}
          >
            <MenuItem value={Autonomous.Right}>Right</MenuItem>
            <MenuItem value={Autonomous.Left}>Left</MenuItem>
          </Select>
        </Grid>
      </Box>
    </Tile>
  );
};

export default AutoChooser;
